import { describe, expect, it } from 'vitest';
import { EXPORT_SCALE, GEOMETRY, H, layout, MAX_FIGURES, png, svg, W, type Scene } from '../src/render/diagram.js';

const people = (s: string) =>
  [...s.matchAll(/class="person" data-x="([\d.-]+)" data-y="([\d.-]+)"/g)].map((m) => ({
    x: Number(m[1]),
    y: Number(m[2]),
  }));
/** Every non-person drawing instruction: what must be identical across images of the same scene kind. */
const frame = (s: string) => s.replace(/<g class="person"[\s\S]*?<\/g><\/g>/g, '');

const counts = [1, 2, 3, 4, 5, 6, 10, 11, 15, 20];
const scenes: Scene[] = [
  ...counts.flatMap((main) => [1, 2, 5].map((side) => ({ kind: 'switch' as const, main, side }))),
  ...counts.flatMap((left) => counts.map((right) => ({ kind: 'two-side' as const, left, right }))),
];
const want = (s: Scene) => (s.kind === 'switch' ? [s.main, s.side] : [s.left, s.right]);

describe('diagram', () => {
  it.each(scenes)('draws exactly the requested people, inside their own zone: %o', (scene) => {
    const L = layout(scene);
    const all = people(L.svg);
    expect(all).toHaveLength(want(scene)[0]! + want(scene)[1]!);
    const { ZONE, FIG } = GEOMETRY;
    L.groups.forEach((g, i) => {
      expect(g.people).toHaveLength(want(scene)[i]!);
      for (const p of g.people) {
        // Whole figure (≈ ±16 px wide, FIG.h tall) inside the zone with padding.
        expect(p.x - 16).toBeGreaterThanOrEqual(g.cx - ZONE.w / 2 + 12);
        expect(p.x + 16).toBeLessThanOrEqual(g.cx + ZONE.w / 2 - 12);
        expect(p.y - FIG.h).toBeGreaterThanOrEqual(ZONE.top + 12);
        expect(p.y).toBeLessThanOrEqual(ZONE.top + ZONE.h - 12);
      }
    });
  });

  it('puts the first group on the left and the second on the right', () => {
    for (const scene of scenes) {
      const [a, b] = layout(scene).groups;
      expect(a!.cx).toBeLessThan(W / 2);
      expect(b!.cx).toBeGreaterThan(W / 2);
    }
  });

  it('uses one identical frame (tracks, zones, trolley, lever) for every image of a kind', () => {
    for (const kind of ['switch', 'two-side'] as const) {
      const frames = new Set(scenes.filter((s) => s.kind === kind).map((s) => frame(svg(s))));
      expect(frames.size).toBe(1);
    }
  });

  it('draws one person shape at one size everywhere', () => {
    const shapes = new Set<string>();
    for (const scene of scenes) {
      for (const m of svg(scene).matchAll(/<g class="person"[^>]*>([\s\S]*?)<\/g><\/g>/g)) {
        // Normalise position: subtract each coordinate's own figure origin.
        const [, body] = m;
        const ox = Number(/data-x="([\d.-]+)"/.exec(m[0])![1]);
        const oy = Number(/data-y="([\d.-]+)"/.exec(m[0])![1]);
        shapes.add(
          body!
            .replace(/\b(cx|x|x1|x2)="([\d.-]+)"/g, (_, k, v) => `${k}="${(Number(v) - ox).toFixed(1)}"`)
            .replace(/\b(cy|y|y1|y2)="([\d.-]+)"/g, (_, k, v) => `${k}="${(Number(v) - oy).toFixed(1)}"`),
        );
      }
    }
    expect(shapes.size).toBe(1);
  });

  it('draws the same forward-motion arrow in every image, and only switch scenes add a set route', () => {
    const bands = (x: string) => [...x.matchAll(/class="route"[^>]*points="([^"]+)"/g)].map((m) => m[1]);
    const heads = (x: string) => [...x.matchAll(/class="route-head" points="([^"]+)"/g)].map((m) => m[1]);
    const forwardBand = bands(svg(scenes[0]!))[0];
    const forwardHead = heads(svg(scenes[0]!))[0];
    for (const scene of scenes) {
      const x = svg(scene);
      expect(bands(x)[0]).toBe(forwardBand);
      expect(heads(x)[0]).toBe(forwardHead);
      expect(bands(x)).toHaveLength(scene.kind === 'switch' ? 2 : 1);
    }
    // The set route (switch only) runs up the LEFT branch.
    const set = bands(svg({ kind: 'switch', main: 5, side: 1 }))[1]!
      .split(' ')
      .map((p) => Number(p.split(',')[0]));
    expect(Math.min(...set)).toBeLessThan(W / 2 - 150);
  });

  it('refuses counts it cannot draw', () => {
    expect(() => svg({ kind: 'switch', main: MAX_FIGURES + 1, side: 1 })).toThrow(/holds 1–20/);
    expect(() => svg({ kind: 'two-side', left: 0, right: 1 })).toThrow(/holds 1–20/);
  });

  it('is deterministic and the expected size', () => {
    const a = png({ kind: 'switch', main: 5, side: 1 });
    expect(a.equals(png({ kind: 'switch', main: 5, side: 1 }))).toBe(true);
    expect(a.readUInt32BE(16)).toBe(W * EXPORT_SCALE);
    expect(a.readUInt32BE(20)).toBe(H * EXPORT_SCALE);
  });
});
