/**
 * One Promptfoo provider class for every subject. Configure it in promptfooconfig.yaml:
 *   - id: file://src/promptfoo/provider.ts
 *     label: typesafe-ai/jev
 *     config: { subject: typesafe-ai/jev }
 *
 * Caching uses Promptfoo's own cache, keyed on stable fields only (subject, contentHash, sample count).
 * Never key it on context.vars: Promptfoo injects a per-run __evalId, so every lookup would miss.
 */
import { cache } from 'promptfoo';
import type { ApiProvider, CallApiContextParams, CallApiOptionsParams, ProviderOptions, ProviderResponse } from 'promptfoo';
import { call, type Outcome } from '../call.js';
import type { Variant } from '../expand.js';
import { CHAT_SAMPLES, SUBJECTS, type Subject } from '../subjects.js';

// Bump to invalidate every cached answer (e.g. after changing how a subject is called).
const CACHE_VERSION = 2;

export default class DecisionEvalProvider implements ApiProvider {
  private readonly subject: Subject;
  readonly label: string;

  constructor(options: ProviderOptions) {
    const id = options.config?.subject;
    const subject = SUBJECTS.find((s) => s.id === id);
    if (!subject) throw new Error(`unknown subject "${id}". Add it to src/subjects.ts`);
    this.subject = subject;
    this.label = options.label ?? subject.id;
  }

  id() {
    return `decision-evals:${this.subject.id}`;
  }

  async callApi(_prompt: string, context?: CallApiContextParams, options?: CallApiOptionsParams): Promise<ProviderResponse> {
    const raw = context?.vars.variant;
    if (typeof raw !== 'string') return { error: 'test is missing vars.variant' };
    const v: Variant = JSON.parse(raw);

    const key = `de:v${CACHE_VERSION}:${this.subject.id}:${v.contentHash}:${this.subject.kind === 'chat' ? CHAT_SAMPLES : 1}`;
    const c = cache.isCacheEnabled() && !context?.bustCache ? cache.getCache() : undefined;
    const hit = (await c?.get(key)) as Outcome | undefined;
    if (hit) return { output: hit, cached: true, cost: 0, metadata: { subject: this.subject.id } };

    const t0 = performance.now();
    try {
      const outcome = await call(this.subject, v, options?.abortSignal);
      await c?.set(key, outcome);
      return {
        output: outcome,
        cost: outcome.cost,
        latencyMs: Math.round(performance.now() - t0),
        metadata: { subject: this.subject.id },
      };
    } catch (e) {
      const body = (e as { responseBody?: string }).responseBody;
      return { error: `${e instanceof Error ? e.message : String(e)}${body ? ` | ${body.slice(0, 500)}` : ''}` };
    }
  }
}
