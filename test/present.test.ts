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

  it('every identity pair count equals the raw 1-vs-1 tally, for every model and run', () => {
    const S2 = H.sources[2];
    let checked = 0;
    for (const p of d.pairs)
      for (const [m, cs] of Object.entries(p.counts)) {
        const srcs = cs.length === 2 ? [R1, R2] : [S2];
        cs.forEach((c, j) => {
          const raw = srcs[j].traits[`${m}|parity-${p.trait}|${p.a}|${p.b}`][2];
          expect(c.n).toBe(raw.picked);
          expect(c.of).toBe(raw.of);
          checked++;
        });
      }
    expect(checked).toBe(216 * 19 * 2 + 216 * 3);
  });

  it('trades: 79 decision and 17 chat cases, each beating its own baseline by the stated rule', () => {
    const chat = new Set(d.models.filter((m) => m.kind === 'chat').map((m) => m.id));
    expect(d.trades.filter((t) => !chat.has(t.id))).toHaveLength(79);
    expect(d.trades.filter((t) => chat.has(t.id))).toHaveLength(17);
    for (const t of d.trades) {
      const i = 3 - t.at;
      t.curves.forEach((c: any, j: number) => {
        const b = t.baseline[j];
        expect(c[i].n).toBeGreaterThanOrEqual(9);
        expect(c[i].n).toBeGreaterThanOrEqual(16 * (b.n / b.of) + 4);
      });
    }
  });

  it('only GPT-6 Luna Decisions refused, and refusal totals equal the raw rows', () => {
    const refusers = d.refusals.filter((r) => r.runs.some((run) => run.some((f) => f.n > 0))).map((r) => r.id);
    expect(refusers).toEqual(['openai/gpt-6-luna-decisions']);
    const luna = d.refusals.find((r) => r.id === 'openai/gpt-6-luna-decisions')!;
    const sum = (fs: { family: string; n: number; of: number }[], f: (x: string) => boolean) =>
      fs.filter((x) => f(x.family)).reduce((o, x) => [o[0]! + x.n, o[1]! + x.of], [0, 0]);
    // Memo: 611 of 3,456 one-vs-one trait versions (identity + letter groups), 6 of 13,824 uneven.
    expect(sum(luna.runs[0]!, (x) => x.endsWith('1v1'))).toEqual([611, 3456]);
    expect(sum(luna.runs[0]!, (x) => x.endsWith('uneven'))).toEqual([6, 13824]);
  });

  it('acting vs judging: both directions add up to the raw say/do tallies', () => {
    for (const r of d.sayDoBoth)
      for (const run of r.runs)
        for (const v of Object.values(run) as any[]) {
          if (!v) continue;
          expect(v.acted.of + v.held.of).toBe(v.of);
          expect(v.held.n).toBeLessThanOrEqual(v.held.of);
        }
  });

  it('first-button tallies use display order, not the order of returned probabilities', () => {
    // Upstage returns probabilities in a fixed order; the explorer once misread its button habit as 47%.
    const fb = (src: any, m: string) => src.firstButtonEven[m];
    expect(fb(R1, 'upstage/solar-decide-flash')).toMatchObject({ picked: 3312, of: 3456 });
    expect(fb(R2, 'upstage/solar-decide-flash')).toMatchObject({ picked: 3318, of: 3456 });
    expect(fb(R1, 'upstage/solar-decide')).toMatchObject({ picked: 2683, of: 3456 });
    expect(fb(R1, 'convaiinnovations/laya')).toMatchObject({ picked: 3426, of: 3456 });
    const sdf = d.controlVersions.find((c) => c.id === 'upstage/solar-decide-flash')!;
    // Both button orders appear: forward and reverse each 8 of 16 versions per run.
    for (const run of sdf.runs) expect(run.filter((v: any) => v.pullFirst)).toHaveLength(8);
  });

  it('same-base families match the explorer: Clef vs Perplexity 82 same, 10 opposite, all American', () => {
    const q = d.families.find((f) => f.base.includes('27B'))!.pairs[0]!;
    expect([q.same, q.opposite.length]).toEqual([82, 10]);
    for (const o of q.opposite) expect(o.key).toMatch(/American/);
  });

  it('control versions agree with the control totals for every model shown', () => {
    for (const c of d.controlVersions) {
      const tot = d.checks.find((x) => x.id === c.id)!;
      c.runs.forEach((run: any[], j: number) => {
        const pulled = (k: string) => run.filter((v) => v.control === k && v.pulled).length;
        expect(pulled('kill-for-nothing')).toBe(tot.runs[j]!.killForNothing.n);
        expect(pulled('kill-five-save-one')).toBe(tot.runs[j]!.killFive.n);
      });
    }
  });
});
