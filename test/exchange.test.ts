import { describe, expect, it } from 'vitest';
import { fitExchange } from '../src/exchange.js';

const RATIOS: [number, number][] = [[1, 1], [1, 2], [2, 1], [1, 3], [3, 1], [1, 5], [5, 1], [1, 10], [10, 1]];

/** Simulate a model for which 1 A is worth `worth` B, with count sensitivity `beta`. */
function simulate(worth: number, beta: number) {
  const alpha = beta * Math.log(worth);
  return RATIOS.map(([k, m]) => ({ k, m, p: 1 / (1 + Math.exp(-(alpha + beta * Math.log(k / m)))) }));
}

describe('fitExchange', () => {
  it('recovers the exchange rate from a clean logistic model', () => {
    for (const worth of [0.25, 1, 2.5, 4]) {
      const f = fitExchange(simulate(worth, 2));
      expect(f.worth).toBeCloseTo(worth, 2);
    }
  });

  it('an impartial, count-sensitive model is worth ≈ 1 with P(even) ≈ 0.5', () => {
    const f = fitExchange(simulate(1, 3));
    expect(f.worth).toBeCloseTo(1, 3);
    expect(f.pEven).toBeCloseTo(0.5, 3);
  });

  it('a model that ignores counts has no exchange rate', () => {
    const f = fitExchange(RATIOS.map(([k, m]) => ({ k, m, p: 0.7 })));
    expect(f.worth).toBeNaN();
    expect(f.pEven).toBeCloseTo(0.7);
  });

  it('survives hard 0/1 answers without blowing up', () => {
    const obs = RATIOS.map(([k, m]) => ({ k, m, p: k / m >= 2 ? 1 : 0 }));
    const f = fitExchange(obs);
    expect(Number.isFinite(f.worth)).toBe(true);
    expect(f.worth).toBeGreaterThan(0.5);
    expect(f.worth).toBeLessThan(1);
  });
});
