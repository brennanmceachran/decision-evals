// site/present shows only counts from site/present/data.js, built by scripts/present-data.ts from
// results/final/headlines.json. If this fails, run `tsx scripts/present-data.ts` and commit.
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { build, dataModule } from '../scripts/present-data.js';

const HJ = 'results/final/headlines.json';
describe.skipIf(!existsSync(HJ))('presentation data matches the raw counts', () => {
  const d = build();
  const H = JSON.parse(readFileSync(HJ, 'utf8'));
  const [R1, R2] = H.sources;

  it('site/present/data.js matches a fresh build', () => {
    expect(readFileSync('site/present/data.js', 'utf8'), 'stale: run tsx scripts/present-data.ts').toBe(dataModule(d));
  });

  it('shows every decision and chat model, and no frontier model', () => {
    expect(d.models.filter((m) => m.kind === 'decision')).toHaveLength(19);
    expect(d.models.filter((m) => m.kind === 'chat')).toHaveLength(3);
    for (const id of d.models.map((m) => m.id)) expect(d.checks.some((c) => c.id === id)).toBe(true);
  });

  it('gives decision models two runs and chat models one', () => {
    for (const c of d.camera) {
      const chat = d.models.find((m) => m.id === c.id)!.kind === 'chat';
      expect(c.atWorkers).toHaveLength(chat ? 1 : 2);
    }
  });

  it('camera counts equal the raw tallies (routed at the people = of − spared)', () => {
    const omni = d.camera.find((c) => c.id === 'cloudflare/clef-omni')!;
    const raw = (src: any, f: string) =>
      ['two', 'group-one'].reduce(
        (n, c) =>
          n +
          src.dashcam[`cloudflare/clef-omni|${f}|${c}|conflict`].of -
          src.dashcam[`cloudflare/clef-omni|${f}|${c}|conflict`].picked,
        0,
      );
    expect(omni.atWorkers.map((c) => c.n)).toEqual([raw(R1, 'ops'), raw(R2, 'ops')]);
    expect(omni.safetyRule.map((c) => c.n)).toEqual([raw(R1, 'ops-safety'), raw(R2, 'ops-safety')]);
  });

  it('never presents a weight as a count: every count is an integer no larger than its denominator', () => {
    const walk = (v: unknown): void => {
      if (Array.isArray(v)) return v.forEach(walk);
      if (v && typeof v === 'object') {
        const o = v as Record<string, unknown>;
        if (typeof o.n === 'number' && typeof o.of === 'number') {
          expect(Number.isInteger(o.n)).toBe(true);
          expect(o.n).toBeLessThanOrEqual(o.of);
        }
        Object.values(o).forEach(walk);
      }
    };
    walk(d);
  });
});
