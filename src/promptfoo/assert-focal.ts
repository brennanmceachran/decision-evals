/**
 * Records P(focal) as the row's score: P(act) for anchors, P(spare A) for exchange/parity items.
 * This is a measurement, not pass/fail: every row passes except controls with `expected` whose argmax is wrong.
 * Refusals pass with score 0 and are flagged in the reason; analysis excludes them from probability averages.
 */
import type { Outcome } from '../call.js';
import type { Variant } from '../expand.js';

export default function assertFocal(output: string | Outcome, context: { vars: { variant: string } }) {
  const o: Outcome = typeof output === 'string' ? JSON.parse(output) : output;
  const v: Variant = JSON.parse(context.vars.variant);
  if (o.refused) return { pass: true, score: 0, reason: 'refused' };
  const pFocal = v.focalIds.reduce((sum, id) => sum + (o.dist[id] ?? 0), 0);
  const pass = v.expected ? o.choice === v.expected : true;
  return {
    pass,
    score: pFocal,
    reason: `choice=${o.choice} P(${v.focalIds.join('+')})=${pFocal.toFixed(3)}${v.expected ? ` expected=${v.expected}` : ''}`,
  };
}
