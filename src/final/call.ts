/**
 * One call path for the final study, for every model and every part. Raw REST, so each answer row records exactly what
 * came back: provider as served, generation id, timestamps, latency, tokens, cost and the raw response body.
 *
 *   decision, gateway     POST https://ai-gateway.vercel.sh/v1/decisions   (OpenAI-compatible; text and images)
 *                         …or /typesafe/v1/systemone for models whose image route is 'gw-systemone'
 *   decision, openrouter  POST https://openrouter.ai/api/v1/systemone      (host pinned, fallbacks off; text and images)
 *   chat / frontier       AI SDK generateText via the gateway, 5 samples, reasoning off, provider pinned
 *
 * Text questions go through the same route as image questions for each model, so a text/image difference can't come
 * from the API. Nothing here caches; caching is the runner's job (src/final/run.ts).
 */
import { gateway, generateText, Output } from 'ai';
import type { Question, State } from '../vision.js';
import { FINAL_CHAT_SAMPLES, type FinalSubject } from './subjects.js';
import { paced } from './pace.js';

export interface Answer {
  /** Display key (or 'true'/'false' for booleans) → probability. Empty when refused. */
  probabilities: Record<string, number>;
  choice: string | null;
  refused: boolean;
}

export interface CallRecord {
  answers: Record<string, Answer>;
  /** Provider that served the answer, as reported by the router. */
  provider: string | null;
  /** Model id as reported back (catches silent alias changes). */
  servedModel: string | null;
  generationId: string | null;
  startedAt: string;
  latencyMs: number;
  inputTokens: number | null;
  outputTokens: number | null;
  reasoningTokens: number | null;
  costUsd: number;
  /** Chat models: each sample's raw choice per question. */
  samples?: Record<string, string[]>;
  /** Raw response body (decision models) or per-sample summaries (chat), for audit. Truncated to 20 kB. */
  raw: string;
}

export class CallError extends Error {
  constructor(
    message: string,
    readonly status: number | null,
    readonly body: string,
    readonly retryable: boolean,
  ) {
    super(message);
  }
}

const KEYS = {
  gateway: () => process.env.AI_GATEWAY_API_KEY!,
  openrouter: () => process.env.OPENROUTER_API_KEY!,
};

async function postJson(url: string, key: string, body: unknown, signal?: AbortSignal) {
  const r = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });
  const text = await r.text();
  if (!r.ok)
    throw new CallError(
      `HTTP ${r.status} ${url}: ${text.slice(0, 300)}`,
      r.status,
      text.slice(0, 2000),
      r.status === 408 || r.status === 409 || r.status === 429 || r.status >= 500,
    );
  return { json: JSON.parse(text) as Record<string, unknown>, text, headers: r.headers };
}

const truncate = (s: string) => (s.length > 20_000 ? `${s.slice(0, 20_000)}…[truncated]` : s);
const bool = (p: number): Answer => ({
  probabilities: { true: p, false: 1 - p },
  choice: p >= 0.5 ? 'true' : 'false',
  refused: false,
});

/** Gateway OpenAI-compatible decisions endpoint. */
async function gwDecisions(s: FinalSubject, state: State, questions: Record<string, Question>, signal?: AbortSignal) {
  const t0 = Date.now();
  const { json, text, headers } = await postJson(
    'https://ai-gateway.vercel.sh/v1/decisions',
    KEYS.gateway(),
    {
      model: s.id,
      input: [
        {
          role: 'user',
          content: [
            ...(state.kind !== 'image' ? [{ type: 'input_text', text: state.text }] : []),
            ...(state.kind !== 'text' ? [{ type: 'input_image', image_url: state.url }] : []),
          ],
        },
      ],
      questions: Object.entries(questions).map(([name, q]) =>
        q.type === 'choice'
          ? {
              type: 'choice',
              name,
              instructions: q.instructions,
              choices: Object.entries(q.criteria).map(([value, description]) => ({ value, description })),
            }
          : { type: 'predicate', name, instructions: q.instructions },
      ),
    },
    signal,
  );
  const answers: Record<string, Answer> = {};
  for (const a of json.answers as {
    type: string;
    name: string;
    choice?: string;
    probability?: number;
    probabilities?: { value: string; probability: number }[];
  }[]) {
    if (a.type === 'refusal') answers[a.name] = { probabilities: {}, choice: null, refused: true };
    else if (a.type === 'predicate') answers[a.name] = bool(a.probability!);
    else
      answers[a.name] = {
        probabilities: Object.fromEntries(
          (a.probabilities ?? [{ value: a.choice!, probability: 1 }]).map((p) => [p.value, p.probability]),
        ),
        choice: a.choice!,
        refused: false,
      };
  }
  const meta = (json.provider_metadata ?? json.providerMetadata ?? {}) as Record<string, Record<string, unknown>>;
  const routing = meta.gateway?.routing as { finalProvider?: string; resolvedProvider?: string } | undefined;
  const usage = (json.usage ?? {}) as Record<string, number>;
  return {
    answers,
    provider: routing?.finalProvider ?? routing?.resolvedProvider ?? null,
    servedModel: (json.model as string) ?? null,
    generationId: (meta.gateway?.generationId as string) ?? (json.id as string) ?? headers.get('x-generation-id'),
    latencyMs: Date.now() - t0,
    inputTokens: usage.input_tokens ?? usage.inputTokens ?? null,
    outputTokens: usage.output_tokens ?? usage.outputTokens ?? null,
    reasoningTokens: null,
    costUsd: Number(meta.gateway?.marketCost ?? meta.gateway?.cost ?? json.cost ?? 0),
    raw: truncate(text),
  };
}

/** System One shape: gateway (/typesafe/v1/systemone) or OpenRouter (/api/v1/systemone, host pinned). */
async function systemOne(
  s: FinalSubject,
  where: 'gateway' | 'openrouter',
  state: State,
  questions: Record<string, Question>,
  signal?: AbortSignal,
) {
  const t0 = Date.now();
  const url =
    where === 'gateway'
      ? 'https://ai-gateway.vercel.sh/typesafe/v1/systemone'
      : 'https://openrouter.ai/api/v1/systemone';
  const { json, text, headers } = await postJson(
    url,
    KEYS[where](),
    {
      model: s.id,
      ...(where === 'openrouter' && s.host ? { provider: { order: [s.host], allow_fallbacks: false } } : {}),
      state: [
        ...(state.kind !== 'image' ? [{ type: 'text', text: state.text }] : []),
        ...(state.kind !== 'text' ? [{ type: 'image_url', image_url: { url: state.url } }] : []),
      ],
      questions: Object.fromEntries(
        Object.entries(questions).map(([k, q]) => [
          k,
          q.type === 'choice'
            ? { type: 'choice', instructions: q.instructions, criteria: q.criteria }
            : { type: 'noul', instructions: q.instructions },
        ]),
      ),
    },
    signal,
  );
  const answers: Record<string, Answer> = {};
  for (const [k, a] of Object.entries(
    json.answers as Record<
      string,
      { type: string; choice?: string; probability?: number; noul?: number; probabilities?: Record<string, number> }
    >,
  )) {
    if (a.type === 'refusal') answers[k] = { probabilities: {}, choice: null, refused: true };
    else if (a.type === 'noul' || a.type === 'boolean') answers[k] = bool(a.probability ?? a.noul!);
    else answers[k] = { probabilities: a.probabilities ?? { [a.choice!]: 1 }, choice: a.choice!, refused: false };
  }
  const meta = (json.provider_metadata ?? {}) as Record<string, Record<string, unknown>>;
  const routing = meta.gateway?.routing as { finalProvider?: string } | undefined;
  const usage = (json.usage ?? {}) as Record<string, number>;
  return {
    answers,
    provider: (json.provider as string) ?? routing?.finalProvider ?? headers.get('x-provider-name'),
    servedModel: (json.model as string) ?? null,
    generationId:
      (json.id as string) ?? headers.get('x-generation-id') ?? (meta.gateway?.generationId as string) ?? null,
    latencyMs: Date.now() - t0,
    inputTokens: usage.input_tokens ?? null,
    outputTokens: usage.output_tokens ?? null,
    reasoningTokens: null,
    costUsd: Number(usage.cost ?? meta.gateway?.marketCost ?? meta.gateway?.cost ?? 0),
    raw: truncate(text),
  };
}

const mediaTypeOf = (url: string) => /^data:([^;,]+)/.exec(url)?.[1] ?? 'image/png';

/**
 * Chat and frontier models: the same state, question and buttons; structured output; 5 samples per question;
 * reasoning off (native switches too); provider pinned on the gateway. Each question is its own set of calls.
 */
async function chat(s: FinalSubject, state: State, questions: Record<string, Question>, signal?: AbortSignal) {
  const t0 = Date.now();
  const answers: Record<string, Answer> = {};
  const samples: Record<string, string[]> = {};
  let cost = 0;
  let inTok = 0;
  let outTok = 0;
  let reasoning = 0;
  let provider: string | null = null;
  let servedModel: string | null = null;
  let generationId: string | null = null;
  const raws: unknown[] = [];
  for (const [k, q] of Object.entries(questions)) {
    const options = q.type === 'choice' ? Object.keys(q.criteria) : ['true', 'false'];
    const text =
      q.type === 'choice'
        ? `${q.instructions}\n\nOptions:\n${options.map((o) => `- ${o}: ${q.criteria[o]}`).join('\n')}`
        : `${q.instructions}\n\nAnswer true or false.`;
    const rs = await Promise.all(
      Array.from({ length: FINAL_CHAT_SAMPLES }, () =>
        paced(s, () =>
          generateText({
            model: gateway(s.id),
            reasoning: 'none',
            temperature: 1,
            providerOptions: {
              ...(s.providerOptions ?? {}),
              ...(s.gatewayOnly ? { gateway: { only: s.gatewayOnly } } : {}),
            } as never,
            output: Output.choice({ options }),
            messages: [
              {
                role: 'user',
                content: [
                  ...(state.kind !== 'image' ? [{ type: 'text' as const, text: state.text }] : []),
                  ...(state.kind !== 'text'
                    ? [{ type: 'file' as const, data: state.url.split(',')[1]!, mediaType: mediaTypeOf(state.url) }]
                    : []),
                  { type: 'text' as const, text },
                ],
              },
            ],
            maxRetries: 0,
            abortSignal: signal,
          }),
        ),
      ),
    );
    samples[k] = rs.map((r) => r.output);
    const counts = Object.fromEntries(options.map((o) => [o, 0]));
    for (const r of rs) counts[r.output] = (counts[r.output] ?? 0) + 1;
    const probs = Object.fromEntries(options.map((o) => [o, counts[o]! / rs.length]));
    const choice = Object.entries(probs).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
    answers[k] = q.type === 'choice' ? { probabilities: probs, choice, refused: false } : bool(probs.true ?? 0);
    for (const r of rs) {
      const g = r.providerMetadata?.gateway as Record<string, unknown> | undefined;
      const routing = g?.routing as { finalProvider?: string } | undefined;
      cost += Number(g?.marketCost ?? g?.cost ?? 0);
      inTok += r.usage.inputTokens ?? 0;
      outTok += r.usage.outputTokens ?? 0;
      reasoning += r.usage.outputTokenDetails?.reasoningTokens ?? 0;
      provider ??= routing?.finalProvider ?? null;
      servedModel ??= r.response.modelId ?? null;
      generationId ??= (g?.generationId as string) ?? null;
      raws.push({
        q: k,
        output: r.output,
        provider: routing?.finalProvider,
        id: g?.generationId,
        warnings: r.warnings,
      });
    }
  }
  return {
    answers,
    samples,
    provider,
    servedModel,
    generationId,
    latencyMs: Date.now() - t0,
    inputTokens: inTok,
    outputTokens: outTok,
    reasoningTokens: reasoning,
    costUsd: cost,
    raw: truncate(JSON.stringify(raws)),
  };
}

/** Ask one set of questions about one state. Throws CallError on HTTP failure; refusals are answers, not errors. */
export async function ask(
  s: FinalSubject,
  state: State,
  questions: Record<string, Question>,
  signal?: AbortSignal,
): Promise<CallRecord> {
  const startedAt = new Date().toISOString();
  if (state.kind !== 'text' && !s.image) throw new CallError(`${s.id} has no image route`, null, '', false);
  const r =
    s.category !== 'decision'
      ? await chat(s, state, questions, signal)
      : await paced(s, () =>
          s.route === 'openrouter'
            ? systemOne(s, 'openrouter', state, questions, signal)
            : s.image === 'gw-systemone'
              ? systemOne(s, 'gateway', state, questions, signal)
              : gwDecisions(s, state, questions, signal),
        );
  // Reasoning is requested off for every chat model. Some still think briefly on some calls (GPT-6 Astra, Opus 5.5:
  // 38–364 tokens on a few prompts); the answer is kept and its reasoning-token count is recorded on the row.
  return { startedAt, ...r };
}
