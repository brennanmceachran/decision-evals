/**
 * Every model we evaluate, in one place. Add a model here and it appears in the eval and the site.
 *
 * kind:
 *   decision: native decision model, returns a probability distribution in one call.
 *   chat: chat LLM with structured output, sampled N times to estimate a distribution.
 */
export type Route = 'gateway' | 'openrouter';
export interface Subject {
  id: string;
  kind: 'decision' | 'chat';
  route: Route;
  vendor: string;
  vision?: boolean;
  openWeights?: boolean;
  /** Base model, when the decision model is a known fine-tune (used for paired comparisons). */
  base?: string;
  /**
   * OpenRouter only: pin to this upstream host with fallbacks disabled. Set for every model with more than one host,
   * because hosts gave different answers to identical prompts (Clef: Cloudflare vs PrimeIntellect up to 0.27 on text,
   * and PrimeIntellect mis-read images). First-party host where one exists.
   */
  host?: string;
}

export const SUBJECTS: Subject[] = [
  // Decision models: Vercel AI Gateway
  { id: 'typesafe-ai/jev', kind: 'decision', route: 'gateway', vendor: 'TypeSafe' },
  { id: 'microsoft/microsoft-decision-1', kind: 'decision', route: 'gateway', vendor: 'Microsoft', base: 'Qwen3.5-9B' },
  {
    id: 'openai/gpt-6-luna-decisions',
    kind: 'decision',
    route: 'gateway',
    vendor: 'OpenAI',
    vision: true,
    base: 'openai/gpt-6-luna',
  },
  { id: 'liquid/d1', kind: 'decision', route: 'gateway', vendor: 'Liquid AI', vision: true },
  { id: 'convaiinnovations/laya', kind: 'decision', route: 'gateway', vendor: 'Convai', openWeights: true },
  { id: 'scaledown/scaledown-classify-1', kind: 'decision', route: 'gateway', vendor: 'ScaleDown' },
  // Decision models: OpenRouter
  { id: 'perplexity/pplx-decider-v1.1-27b', kind: 'decision', route: 'openrouter', vendor: 'Perplexity', vision: true },
  {
    id: 'cloudflare/clef',
    kind: 'decision',
    route: 'openrouter',
    vendor: 'Cloudflare',
    vision: true,
    openWeights: true,
    base: 'Qwen3.8-27B',
    host: 'Cloudflare',
  },
  {
    id: 'cloudflare/clef-flash',
    kind: 'decision',
    route: 'openrouter',
    vendor: 'Cloudflare',
    vision: true,
    openWeights: true,
    base: 'Qwen3.5-9B',
    host: 'Cloudflare',
  },
  {
    id: 'cloudflare/clef-omni',
    kind: 'decision',
    route: 'openrouter',
    vendor: 'Cloudflare',
    vision: true,
    openWeights: true,
    base: 'Qwen3-Omni-30B-A3B',
    host: 'Cloudflare',
  },
  {
    id: 'togethercomputer/tev1-4b-experimental',
    kind: 'decision',
    route: 'openrouter',
    vendor: 'Together AI',
    openWeights: true,
    base: 'Qwen3.5-4B',
  },
  // No first-party host; Phala and SiliconFlow agreed to within 0.015 on identical prompts. Pinned for consistency.
  {
    id: 'jaredpalmer/kev-4b',
    kind: 'decision',
    route: 'openrouter',
    vendor: 'Jared Palmer',
    openWeights: true,
    base: 'Qwen3.5-4B-Base',
    host: 'SiliconFlow',
  },
  { id: 'nace-ai/drex-v1.5', kind: 'decision', route: 'openrouter', vendor: 'Nace.AI', openWeights: true },
  { id: 'nace-ai/drex-v2.0', kind: 'decision', route: 'openrouter', vendor: 'Nace.AI' },
  { id: 'upstage/solar-decide', kind: 'decision', route: 'openrouter', vendor: 'Upstage' },
  { id: 'upstage/solar-decide-flash', kind: 'decision', route: 'openrouter', vendor: 'Upstage' },
  { id: 'inception/mercury-decide', kind: 'decision', route: 'openrouter', vendor: 'Inception' },
  // Chat comparison set
  { id: 'anthropic/claude-haiku-5.5', kind: 'chat', route: 'gateway', vendor: 'Anthropic', vision: true },
  { id: 'openai/gpt-6-luna', kind: 'chat', route: 'gateway', vendor: 'OpenAI', vision: true },
  { id: 'google/gemini-3.5-flash-lite', kind: 'chat', route: 'gateway', vendor: 'Google', vision: true },
];

/** Samples per prompt for chat models (decision models return a distribution in a single call). */
export const CHAT_SAMPLES = 5;
