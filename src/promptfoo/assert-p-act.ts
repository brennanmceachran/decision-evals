/**
 * Records P(act) as the row's score. This is not pass/fail: every row passes and the score is the
 * measurement. Controls with `expected` pass only when the argmax matches.
 */
import type { Outcome } from '../call.js';
import type { Variant } from '../expand.js';

export default function assertPAct(output: string | Outcome, context: { vars: { variant: string } }) {
  const o: Outcome = typeof output === 'string' ? JSON.parse(output) : output;
  const v: Variant = JSON.parse(context.vars.variant);
  const pAct = v.actIds.reduce((sum, id) => sum + (o.dist[id] ?? 0), 0);
  const pass = v.expected ? o.choice === v.expected : true;
  return {
    pass,
    score: pAct,
    reason: `choice=${o.choice} P(act)=${pAct.toFixed(3)}${v.expected ? ` expected=${v.expected}` : ''}`,
  };
}
