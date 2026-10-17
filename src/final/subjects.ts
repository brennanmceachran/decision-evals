/**
 * Models in the final study (FINAL-RUN-PLAN.md). Separate from src/subjects.ts, which stays exactly as the pilots ran.
 *
 * Three categories, never pooled:
 *   decision  every model sold as a decision model, at a dated version where one exists
 *   chat      cheap chat models held to the same buttons (5 samples per question, majority vote, reasoning off)
 *   frontier  frontier chat models, same constraints; run on a reduced design only if approved at the end
 *
 * route: where the call goes. host: OpenRouter upstream, pinned with fallbacks off (every OpenRouter model is pinned,
 * even single-host ones, so a new host appearing mid-run can't serve answers). gatewayOnly: AI Gateway provider pin
 * for chat models. image: the raw-REST route used for image questions (src/final/call.ts); undefined = text only.
 * Vision support is confirmed per model by the smoke test, not assumed from the catalogue.
 *
 * Not included: respan/span-01 and span-01-lite (behaviour scorers; the API accepts only yes/no "noul" questions, so
 * they cannot answer a choice; checked 2026-10-16).
 */
export type Category = 'decision' | 'chat' | 'frontier';
export type ImageRoute = 'gw-decisions' | 'gw-systemone' | 'or-decisions';

export interface FinalSubject {
  id: string;
  category: Category;
  route: 'gateway' | 'openrouter';
  vendor: string;
  name: string;
  host?: string;
  gatewayOnly?: string[];
  image?: ImageRoute;
  /** Chat/frontier: provider-native options merged into every call (e.g. Flash-Lite's thinking switch). */
  providerOptions?: Record<string, Record<string, unknown>>;
  /** In the pilots under this id (or another, noted). */
  pilot?: string;
  notes?: string;
}

export const FINAL_SUBJECTS: FinalSubject[] = [
  // ---- A. Decision models
  {
    id: 'openai/gpt-6-luna-decisions',
    category: 'decision',
    route: 'gateway',
    vendor: 'OpenAI',
    name: 'GPT-6 Luna Decisions',
    image: 'gw-decisions',
    pilot: 'openai/gpt-6-luna-decisions',
  },
  {
    id: 'microsoft/microsoft-decision-1',
    category: 'decision',
    route: 'gateway',
    vendor: 'Microsoft',
    name: 'Microsoft Decision-1',
    pilot: 'microsoft/microsoft-decision-1',
    notes: 'Served by Azure on both catalogues.',
  },
  {
    id: 'liquid/d1',
    category: 'decision',
    route: 'gateway',
    vendor: 'Liquid AI',
    name: 'Liquid d1',
    image: 'gw-systemone',
    pilot: 'liquid/d1',
  },
  {
    id: 'liquid/d1-ultra',
    category: 'decision',
    route: 'gateway',
    vendor: 'Liquid AI',
    name: 'Liquid d1-ultra',
    image: 'gw-systemone',
    notes: 'New, released 2026-10-15.',
  },
  {
    // The gateway's systemone route rejects any image for Jev ("max_tokens_exceeded", even at 512 px); OpenRouter's
    // accepts both text and images, and reports the dated version (typesafe/jev-1.14-20261014).
    id: 'typesafe/jev-1.14',
    category: 'decision',
    route: 'openrouter',
    vendor: 'TypeSafe',
    name: 'TypeSafe Jev 1.14',
    host: 'TypeSafe',
    image: 'or-decisions',
    pilot: 'typesafe-ai/jev on the gateway (undated alias)',
  },
  {
    id: 'convaiinnovations/laya',
    category: 'decision',
    route: 'gateway',
    vendor: 'Convai',
    name: 'Convai Laya',
    pilot: 'convaiinnovations/laya',
  },
  {
    id: 'scaledown/scaledown-classify-1',
    category: 'decision',
    route: 'gateway',
    vendor: 'ScaleDown',
    name: 'ScaleDown Classify-1',
    pilot: 'scaledown/scaledown-classify-1',
  },
  {
    id: 'perplexity/pplx-decider-v1.2',
    category: 'decision',
    route: 'gateway',
    vendor: 'Perplexity',
    name: 'Perplexity Decider',
    // The gateway's systemone route takes images; its /v1/decisions route rejects them for this model.
    image: 'gw-systemone',
    pilot: 'perplexity/pplx-decider-v1.1-27b',
    notes: 'v1.2 is the current checkpoint; v1.1 (the pilots) is no longer served.',
  },
  {
    id: 'cloudflare/clef',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Cloudflare',
    name: 'Cloudflare Clef',
    host: 'Cloudflare',
    image: 'or-decisions',
    pilot: 'cloudflare/clef',
  },
  {
    id: 'cloudflare/clef-flash',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Cloudflare',
    name: 'Cloudflare Clef-flash',
    host: 'Cloudflare',
    image: 'or-decisions',
    pilot: 'cloudflare/clef-flash',
  },
  {
    id: 'cloudflare/clef-omni',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Cloudflare',
    name: 'Cloudflare Clef-omni',
    host: 'Cloudflare',
    image: 'or-decisions',
    pilot: 'cloudflare/clef-omni',
  },
  {
    id: 'togethercomputer/tev1-4b-experimental',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Together AI',
    name: 'Together Tev1-4B',
    host: 'Together',
    pilot: 'togethercomputer/tev1-4b-experimental',
  },
  {
    id: 'jaredpalmer/kev-4b',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Jared Palmer',
    name: 'Kev-4B',
    host: 'Phala',
    pilot: 'jaredpalmer/kev-4b (pinned to SiliconFlow then; SiliconFlow is down on 2026-10-16)',
  },
  {
    id: 'nace-ai/drex-v1.5',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Nace.AI',
    name: 'Nace Drex v1.5',
    host: 'DeepInfra',
    pilot: 'nace-ai/drex-v1.5',
  },
  {
    id: 'nace-ai/drex-v2.0',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Nace.AI',
    name: 'Nace Drex v2.0',
    host: 'DeepInfra',
    pilot: 'nace-ai/drex-v2.0',
  },
  {
    id: 'upstage/solar-decide',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Upstage',
    name: 'Upstage Solar Decide',
    host: 'Upstage',
    pilot: 'upstage/solar-decide',
  },
  {
    id: 'upstage/solar-decide-flash',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Upstage',
    name: 'Upstage Solar Decide Flash',
    host: 'Upstage',
    pilot: 'upstage/solar-decide-flash',
  },
  {
    id: 'inception/mercury-decide',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Inception',
    name: 'Inception Mercury Decide',
    host: 'Inception',
    image: 'or-decisions',
    pilot: 'inception/mercury-decide',
  },
  {
    id: 'respan/span-02',
    category: 'decision',
    route: 'openrouter',
    vendor: 'Respan',
    name: 'Respan Span-02',
    host: 'Respan',
    image: 'or-decisions',
    notes: 'New, released 2026-10-15.',
  },
  // ---- B. Cheap chat models
  {
    id: 'anthropic/claude-haiku-5.5',
    category: 'chat',
    route: 'gateway',
    vendor: 'Anthropic',
    name: 'Claude Haiku 5.5',
    gatewayOnly: ['anthropic'],
    image: 'gw-decisions',
    pilot: 'anthropic/claude-haiku-5.5',
  },
  {
    id: 'openai/gpt-6-luna',
    category: 'chat',
    route: 'gateway',
    vendor: 'OpenAI',
    name: 'GPT-6 Luna',
    gatewayOnly: ['openai'],
    image: 'gw-decisions',
    pilot: 'openai/gpt-6-luna',
  },
  {
    id: 'google/gemini-3.5-flash-lite',
    category: 'chat',
    route: 'gateway',
    vendor: 'Google',
    name: 'Gemini 3.5 Flash-Lite',
    // Google's own endpoint rejects the structured-output call ("invalid argument"); Vertex serves it. The pilots were
    // served by Vertex too.
    gatewayOnly: ['vertex'],
    image: 'gw-decisions',
    // reasoning: 'none' alone still lets Flash-Lite think (169–423 tokens per call on 2026-10-16); its native switch works.
    providerOptions: { google: { thinkingConfig: { thinkingBudget: 0 } } },
    pilot: 'google/gemini-3.5-flash-lite',
  },
  // ---- C. Frontier chat models (reduced design, decided at the end)
  {
    id: 'openai/gpt-6-astra',
    category: 'frontier',
    route: 'gateway',
    vendor: 'OpenAI',
    name: 'GPT-6 Astra',
    gatewayOnly: ['openai'],
    image: 'gw-decisions',
  },
  {
    id: 'anthropic/claude-opus-5.5',
    category: 'frontier',
    route: 'gateway',
    vendor: 'Anthropic',
    name: 'Claude Opus 5.5',
    gatewayOnly: ['anthropic'],
    image: 'gw-decisions',
  },
  {
    id: 'google/gemini-4-argon',
    category: 'frontier',
    route: 'gateway',
    vendor: 'Google',
    name: 'Gemini 4 Argon',
    gatewayOnly: ['vertex'],
    image: 'gw-decisions',
  },
];

/**
 * Request pacing per model category (owner, 2026-10-16): frontier labs may read a burst of near-identical prompts as
 * abuse or a distillation attempt, so frontier models get few calls in flight and a per-minute ceiling. Each chat
 * "answer" is 5 sampled calls, so 20 requests/minute is about 4 answers a minute per frontier model.
 */
export const PACING: Record<Category, { concurrent: number; perMinute: number }> = {
  decision: { concurrent: 16, perMinute: 2000 },
  chat: { concurrent: 8, perMinute: 300 },
  frontier: { concurrent: 2, perMinute: 20 },
};

/** Samples per question for chat and frontier models, in every part of the study. */
export const FINAL_CHAT_SAMPLES = 5;
