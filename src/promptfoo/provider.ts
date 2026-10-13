/**
 * One Promptfoo provider class for every subject. Configure it in promptfooconfig.yaml:
 *   - id: file://src/promptfoo/provider.ts
 *     label: typesafe-ai/jev
 *     config: { subject: typesafe-ai/jev }
 *
 * Caching uses Promptfoo's own cache, keyed on stable fields only (subject, contentHash, sample count). Probes are a
 * separate call with a separate cache entry, so adding or editing a probe never re-runs or changes the main answer.
 * Never key it on context.vars: Promptfoo injects a per-run __evalId, so every lookup would miss.
 */
import { cache } from 'promptfoo';
import type {
  ApiProvider,
  CallApiContextParams,
  CallApiOptionsParams,
  ProviderOptions,
  ProviderResponse,
} from 'promptfoo';
import { call, callProbes, type Outcome } from '../call.js';
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

  async callApi(
    _prompt: string,
    context?: CallApiContextParams,
    options?: CallApiOptionsParams,
  ): Promise<ProviderResponse> {
    const raw = context?.vars.variant;
    if (typeof raw !== 'string') return { error: 'test is missing vars.variant' };
    const v: Variant = JSON.parse(raw);

    const c = cache.isCacheEnabled() && !context?.bustCache ? cache.getCache() : undefined;
    const samples = this.subject.kind === 'chat' ? CHAT_SAMPLES : 1;
    const mainKey = `de:v${CACHE_VERSION}:${this.subject.id}:${v.contentHash}:${samples}`;
    const probeKey =
      v.probeHash && this.subject.kind === 'decision'
        ? `de:v${CACHE_VERSION}:probes:${this.subject.id}:${v.probeHash}`
        : undefined;

    const t0 = performance.now();
    try {
      let cost = 0;
      let cached = true;
      let outcome = (await c?.get(mainKey)) as Outcome | undefined;
      if (!outcome) {
        outcome = await call(this.subject, v, options?.abortSignal);
        await c?.set(mainKey, outcome);
        cost += outcome.cost;
        cached = false;
      }
      if (probeKey) {
        let probed = (await c?.get(probeKey)) as Awaited<ReturnType<typeof callProbes>> | undefined;
        if (!probed) {
          probed = await callProbes(this.subject, v, options?.abortSignal);
          await c?.set(probeKey, probed);
          cost += probed.cost;
          cached = false;
        }
        outcome = { ...outcome, probes: probed.probes };
      }
      return {
        output: outcome,
        cost,
        cached,
        latencyMs: Math.round(performance.now() - t0),
        metadata: { subject: this.subject.id },
      };
    } catch (e) {
      const body = (e as { responseBody?: string }).responseBody;
      return { error: `${e instanceof Error ? e.message : String(e)}${body ? ` | ${body.slice(0, 500)}` : ''}` };
    }
  }
}
