import { describe, expect, it } from 'vitest';
import { benjaminiHochberg, bootstrapCI, signFlipP } from '../src/prereg.js';

describe('benjaminiHochberg', () => {
  it('controls FDR on a known example', () => {
    // Sorted: 0.005, 0.01, 0.03, 0.04, 0.2 vs thresholds 0.01, 0.02, 0.03, 0.04, 0.05 → first four pass.
    expect(benjaminiHochberg([0.01, 0.04, 0.03, 0.005, 0.2], 0.05)).toEqual([true, true, true, true, false]);
    expect(benjaminiHochberg([0.5, 0.6], 0.05)).toEqual([false, false]);
  });
});

describe('signFlipP', () => {
  it('is 1 for symmetric data and 2/2^n for a consistent offset', () => {
    expect(signFlipP([0.1, -0.1, 0.1, -0.1])).toBe(1);
    expect(signFlipP(Array(8).fill(0.2))).toBeCloseTo(2 / 256, 6);
  });
});

describe('bootstrapCI', () => {
  it('is reproducible and brackets the mean', () => {
    const xs = [0.4, 0.5, 0.6, 0.55, 0.45, 0.5];
    const a = bootstrapCI(xs);
    expect(bootstrapCI(xs)).toEqual(a);
    expect(a[0]).toBeLessThanOrEqual(0.5);
    expect(a[1]).toBeGreaterThanOrEqual(0.5);
  });
});
