/**
 * Image input for decision and chat models. The AI SDK cannot send images to most decision models (its file part is
 * rejected by the TypeSafe-compatible route, and @openrouter/ai-sdk-provider sends JSON-only state), so decision
 * models are called over raw REST in the one shape each route accepts. Verified per model in FINDINGS.md
 * ("Vision capability").
 *
 *   gateway  openai/gpt-6-luna-decisions → POST /v1/decisions          (OpenAI-compatible, input_image)
 *   gateway  liquid/d1                   → POST /typesafe/v1/systemone  (state: [{type:'image_url'}])
 *   openrouter (all)                     → POST /api/v1/systemone       (state: [{type:'image_url'}], host pinned)
 *   chat models                          → AI SDK generateText with an image part
 */
import { gateway, generateText, Output } from 'ai';
import type { Subject } from './subjects.js';

export type Question =
  | { type: 'choice'; instructions: string; criteria: Record<string, string> }
  | { type: 'boolean'; instructions: string };

export interface VisionAnswer {
  /** Choice questions: display key → probability. Boolean: { true: p, false: 1 − p }. */
  probabilities: Record<string, number>;
  choice: string;
  refused?: boolean;
  servedBy?: string;
  cost: number;
}

const VISION_ROUTES: Record<string, 'decisions' | 'gw-systemone' | 'or-systemone'> = {
  'openai/gpt-6-luna-decisions': 'decisions',
  'liquid/d1': 'gw-systemone',
  'perplexity/pplx-decider-v1.1-27b': 'or-systemone',
  'cloudflare/clef': 'or-systemone',
  'cloudflare/clef-flash': 'or-systemone',
  'cloudflare/clef-omni': 'or-systemone',
};

export const canSeeImages = (s: Subject) => (s.kind === 'chat' ? !!s.vision : s.id in VISION_ROUTES);

async function post(url: string, key: string, body: unknown, signal?: AbortSignal) {
  for (let attempt = 0; ; attempt++) {
    const r = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal,
    });
    if (r.ok) return r.json();
    const text = await r.text();
    if (attempt < 2 && (r.status === 429 || r.status >= 500)) {
      await new Promise((res) => setTimeout(res, 1000 * 2 ** attempt));
      continue;
    }
    throw new Error(`HTTP ${r.status} ${url}: ${text.slice(0, 300)}`);
  }
}

export type State = { kind: 'text'; text: string } | { kind: 'image'; url: string };

/** Back-compat helper: ask about one image. */
export const askImage = (s: Subject, imageDataUrl: string, questions: Record<string, Question>, signal?: AbortSignal) =>
  ask(s, { kind: 'image', url: imageDataUrl }, questions, signal);

/**
 * Ask several questions about one state (text OR image) in a single call, through the model's image-capable route.
 * Text and image states use the SAME route and request shape, so a text/image difference can't come from the API.
 */
export async function ask(
  s: Subject,
  state: State,
  questions: Record<string, Question>,
  signal?: AbortSignal,
): Promise<Record<string, VisionAnswer>> {
  if (s.kind === 'chat') return askChat(s, state, questions, signal);
  const route = VISION_ROUTES[s.id];
  if (!route) throw new Error(`${s.id} has no verified image route`);

  if (route === 'decisions') {
    const j = await post(
      'https://ai-gateway.vercel.sh/v1/decisions',
      process.env.AI_GATEWAY_API_KEY!,
      {
        model: s.id,
        input: [
          {
            role: 'user',
            content: [
              state.kind === 'image'
                ? { type: 'input_image', image_url: state.url }
                : { type: 'input_text', text: state.text },
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
    const out: Record<string, VisionAnswer> = {};
    for (const a of j.answers as {
      type: string;
      name: string;
      choice?: string;
      probability?: number;
      probabilities?: { value: string; probability: number }[];
    }[]) {
      if (a.type === 'refusal') out[a.name] = { probabilities: {}, choice: '', refused: true, cost: 0 };
      else if (a.type === 'predicate') out[a.name] = boolAnswer(a.probability!);
      else
        out[a.name] = {
          probabilities: Object.fromEntries(a.probabilities!.map((p) => [p.value, p.probability])),
          choice: a.choice!,
          cost: 0,
        };
    }
    return withMeta(out, j.cost ?? j.usage?.cost, 'openai');
  }

  const body = {
    model: s.id,
    ...(route === 'or-systemone' && s.host ? { provider: { order: [s.host], allow_fallbacks: false } } : {}),
    state: [
      state.kind === 'image'
        ? { type: 'image_url', image_url: { url: state.url } }
        : { type: 'text', text: state.text },
    ],
    questions: Object.fromEntries(
      Object.entries(questions).map(([k, q]) => [
        k,
        q.type === 'choice'
          ? { type: 'choice', instructions: q.instructions, criteria: q.criteria }
          : { type: 'noul', instructions: q.instructions },
      ]),
    ),
  };
  const j =
    route === 'gw-systemone'
      ? await post('https://ai-gateway.vercel.sh/typesafe/v1/systemone', process.env.AI_GATEWAY_API_KEY!, body, signal)
      : await post('https://openrouter.ai/api/v1/systemone', process.env.OPENROUTER_API_KEY!, body, signal);
  const out: Record<string, VisionAnswer> = {};
  for (const [k, a] of Object.entries(
    j.answers as Record<
      string,
      { type: string; choice?: string; probability?: number; probabilities?: Record<string, number> }
    >,
  )) {
    if (a.type === 'refusal') out[k] = { probabilities: {}, choice: '', refused: true, cost: 0 };
    else if (a.type === 'noul' || a.type === 'boolean') out[k] = boolAnswer(a.probability!);
    else out[k] = { probabilities: a.probabilities ?? { [a.choice!]: 1 }, choice: a.choice!, cost: 0 };
  }
  return withMeta(out, j.usage?.cost, j.provider);
}

const boolAnswer = (p: number): VisionAnswer => ({
  probabilities: { true: p, false: 1 - p },
  choice: p >= 0.5 ? 'true' : 'false',
  cost: 0,
});

function withMeta(out: Record<string, VisionAnswer>, cost: unknown, servedBy: string | undefined) {
  const keys = Object.keys(out);
  keys.forEach((k, i) => Object.assign(out[k]!, { servedBy, cost: i === 0 ? Number(cost ?? 0) : 0 }));
  return out;
}

/** Chat models: one structured-output call per question, temperature/reasoning as in src/call.ts (single sample). */
async function askChat(s: Subject, state: State, questions: Record<string, Question>, signal?: AbortSignal) {
  const out: Record<string, VisionAnswer> = {};
  for (const [k, q] of Object.entries(questions)) {
    const options = q.type === 'choice' ? Object.keys(q.criteria) : ['true', 'false'];
    const text =
      q.type === 'choice'
        ? `${q.instructions}\n\nOptions:\n${options.map((o) => `- ${o}: ${q.criteria[o]}`).join('\n')}`
        : `${q.instructions}\n\nAnswer true or false.`;
    const r = await generateText({
      model: gateway(s.id),
      reasoning: 'none',
      providerOptions: { google: { thinkingConfig: { thinkingBudget: 0 } } },
      output: Output.choice({ options }),
      messages: [
        {
          role: 'user',
          content: [
            state.kind === 'image'
              ? { type: 'image' as const, image: state.url.split(',')[1]!, mediaType: 'image/png' }
              : { type: 'text' as const, text: state.text },
            { type: 'text' as const, text },
          ],
        },
      ],
      maxRetries: 2,
      abortSignal: signal,
    });
    out[k] = {
      probabilities: Object.fromEntries(options.map((o) => [o, o === r.output ? 1 : 0])),
      choice: r.output,
      cost: Number(r.providerMetadata?.gateway?.cost ?? 0),
      servedBy: s.id.split('/')[0],
    };
  }
  return out;
}
