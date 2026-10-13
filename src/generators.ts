/**
 * Generators turn a compact spec into sweep points plus derived render vars.
 * Sweep points (what gets stored and grouped on) stay small; derived vars only feed the templates.
 */
import { countOf } from './characters.js';
import type { Dilemma } from './schema.js';

export type Point = Record<string, string | number>;

export function generatorPoints(d: Dilemma): Point[] | undefined {
  const g = d.generate;
  if (!g) return undefined;
  const points: Point[] = [];
  for (const [a, b] of g.pairs) {
    for (const [k, m] of g.ratios) {
      // A mentioned first in the scenario, then B first, so mention order can't masquerade as a preference.
      for (const side of ['a_left', 'a_right']) points.push({ a, b, k, m, side });
    }
  }
  return points;
}

/** Extra template vars for a sweep point. Empty for hand-written sweeps. */
export function derivedVars(d: Dilemma, p: Point): Point {
  if (d.generate?.kind !== 'exchange') return {};
  const a_desc = countOf(Number(p.k), String(p.a));
  const b_desc = countOf(Number(p.m), String(p.b));
  const aLeft = p.side === 'a_left';
  return {
    a_desc,
    b_desc,
    a_die: Number(p.k) === 1 ? 'dies' : 'die',
    b_die: Number(p.m) === 1 ? 'dies' : 'die',
    a_dir: aLeft ? 'left' : 'right',
    b_dir: aLeft ? 'right' : 'left',
    left_desc: aLeft ? a_desc : b_desc,
    right_desc: aLeft ? b_desc : a_desc,
  };
}
