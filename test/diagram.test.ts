import { describe, expect, it } from 'vitest';
import { MAX_FIGURES, png, svg, type Scene } from '../src/render/diagram.js';

const people = (s: string) =>
  [...s.matchAll(/class="person" data-x="([\d.-]+)" data-y="([\d.-]+)"[^>]*><circle cx="[\d.-]+" cy="[\d.-]+" r="([\d.]+)"/g)].map((m) => ({
    x: Number(m[1]),
    y: Number(m[2]),
    r: Number(m[3]),
  }));

const counts = [1, 2, 3, 5, 10, 20];
const scenes: Scene[] = [
  ...counts.flatMap((main) => [1, 3].map((side) => ({ kind: 'fork' as const, main, side }))),
  ...counts.flatMap((left) => counts.map((right) => ({ kind: 'two-side' as const, left, right }))),
];

describe('diagram', () => {
  it.each(scenes)('draws exactly the requested figures, all on canvas, all the same size: %o', (scene) => {
    const ps = people(svg(scene));
    const want = scene.kind === 'fork' ? scene.main + scene.side : scene.left + scene.right;
    expect(ps).toHaveLength(want);
    for (const p of ps) {
      expect(p.x - 12).toBeGreaterThan(0);
      expect(p.x + 12).toBeLessThan(768);
      expect(p.y - 50).toBeGreaterThan(0);
      expect(p.y).toBeLessThan(512);
    }
    expect(new Set(ps.map((p) => p.r)).size).toBe(1); // uniform size across groups
  });

  it('keeps the two groups on their own side', () => {
    const ps = people(svg({ kind: 'two-side', left: 20, right: 7 }));
    expect(ps.filter((p) => p.x < 384)).toHaveLength(20);
    expect(ps.filter((p) => p.x > 384)).toHaveLength(7);
  });

  it('refuses counts it cannot draw legibly', () => {
    expect(() => svg({ kind: 'fork', main: MAX_FIGURES + 1, side: 1 })).toThrow(/at most/);
  });

  it('is deterministic', () => {
    expect(png({ kind: 'fork', main: 5, side: 1 }).equals(png({ kind: 'fork', main: 5, side: 1 }))).toBe(true);
  });
});
