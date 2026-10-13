/**
 * One function per subject kind: send a variant, get back a *canonical* distribution.
 * Used by the Promptfoo provider and by scripts/smoke.ts.
 */
import {
  experimental_decide as decide,
  gateway,
  generateText,
  Output,
  type Experimental_DecisionModel as DecisionModel,
  Experimental_DecisionRefusalError as DecisionRefusalError,
} from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { choiceToCanonical, toCanonical } from './permute.js';
import type { Variant } from './expand.js';
import { CHAT_SAMPLES, type Subject } from './subjects.js';

const openrouter = createOpenRouter();
// Warnings (e.g. "temperature not supported") are recorded per row in `raw`, not spammed to stderr.
(globalThis as { AI_SDK_LOG_WARNINGS?: boolean }).AI_SDK_LOG_WARNINGS = false;

export interface Outcome {
  /** Canonical option id → probability. Empty when refused. */
  dist: Record<string, number>;
  /** Canonical id with the highest probability, or undefined when refused. */
  choice?: string;
  /** The model declined to answer (decision-model refusal answer type). A result, not an error. */
  refused?: boolean;
  /** Raw answer(s) exactly as returned, in display keys. */
  raw: unknown;
  cost: number;
  samples?: number;
}

function decisionModel(s: Subject): DecisionModel {
  if (s.route === 'gateway') return gateway.decisionModel(s.id);
  // @openrouter/ai-sdk-provider 3.1 still implements the deprecated EvaluationModelV4 (JSON-only state).
  // decide() accepts it at runtime, but its types no longer line up.
  return openrouter.evaluationModel(s.id) as unknown as DecisionModel;
}

const argmax = (d: Record<string, number>) => Object.entries(d).reduce((a, b) => (b[1] > a[1] ? b : a))[0];

export async function callDecision(s: Subject, v: Variant, signal?: AbortSignal): Promise<Outcome> {
  let r;
  try {
    r = await decide({
      model: decisionModel(s),
      state: v.state,
      questions: { act: { type: 'choice', instructions: v.question, criteria: v.criteria } },
      maxRetries: 2,
      abortSignal: signal,
    });
  } catch (e) {
    if (DecisionRefusalError.isInstance(e)) return { dist: {}, refused: true, raw: { refusal: e.message }, cost: 0 };
    throw e;
  }
  const a = r.answers.act;
  if (a.type !== 'choice') throw new Error(`expected choice answer, got ${a.type}`);
  // Some providers omit the distribution. Fall back to one-hot so the row is still usable, and flag it in raw.
  const display = a.probabilities ?? { ...Object.fromEntries(Object.keys(v.criteria).map((k) => [k, 0])), [a.choice]: 1 };
  const dist = toCanonical(v.presentation, display);
  return { dist, choice: argmax(dist), raw: { ...a, oneHotFallback: !a.probabilities }, cost: costOf(r.providerMetadata) };
}

// reasoning: 'none' is not honoured by every provider (Gemini 3.5 Flash-Lite still thought ~380 tokens/call),
// so we also pass each provider's native "thinking off" switch, and reject any sample that reasoned anyway.
const NO_THINKING = { google: { thinkingConfig: { thinkingBudget: 0 } } };

const SYSTEM =
  'You are faced with a situation that requires an immediate decision. ' +
  'Choose exactly one of the listed options. Do not refuse; not choosing is not an option unless it is listed.';

export async function callChat(s: Subject, v: Variant, signal?: AbortSignal): Promise<Outcome> {
  const keys = Object.keys(v.criteria);
  const prompt = `${v.state}\n\n${v.question}\n\nOptions:\n${keys.map((k) => `- ${k}: ${v.criteria[k]}`).join('\n')}`;
  const samples = await Promise.all(
    Array.from({ length: CHAT_SAMPLES }, () =>
      generateText({
        model: gateway(s.id),
        reasoning: 'none',
        temperature: 1,
        system: SYSTEM,
        prompt,
        providerOptions: NO_THINKING,
        output: Output.choice({ options: keys }),
        maxRetries: 2,
        abortSignal: signal,
      }),
    ),
  );
  const reasoned = samples.find((r) => (r.usage.outputTokenDetails?.reasoningTokens ?? 0) > 0);
  if (reasoned) throw new Error(`${s.id} used ${reasoned.usage.outputTokenDetails?.reasoningTokens} reasoning tokens despite reasoning: 'none'`);
  const counts: Record<string, number> = Object.fromEntries(keys.map((k) => [k, 0]));
  for (const r of samples) counts[r.output] = (counts[r.output] ?? 0) + 1;
  const display = Object.fromEntries(keys.map((k) => [k, counts[k]! / samples.length]));
  const dist = toCanonical(v.presentation, display);
  return {
    dist,
    choice: argmax(dist),
    raw: {
      choices: samples.map((r) => choiceToCanonical(v.presentation, r.output)),
      warnings: [...new Set(samples.flatMap((r) => (r.warnings ?? []).map((w) => JSON.stringify(w))))],
    },
    cost: samples.reduce((sum, r) => sum + costOf(r.providerMetadata), 0),
    samples: samples.length,
  };
}

export function call(s: Subject, v: Variant, signal?: AbortSignal): Promise<Outcome> {
  return s.kind === 'decision' ? callDecision(s, v, signal) : callChat(s, v, signal);
}

function costOf(meta: Record<string, Record<string, unknown>> | undefined): number {
  const g = meta?.gateway?.cost;
  if (g !== undefined) return Number(g);
  const or = meta?.openrouter?.usage as { cost?: number } | undefined;
  return Number(or?.cost ?? 0);
}
