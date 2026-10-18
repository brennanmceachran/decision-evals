// site/v4-summary shows only counts from site/v4-summary/data.js, built by scripts/summary-data.ts on top of the
// analytical report's builder. If this fails, run `tsx scripts/summary-data.ts` and commit.
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { build, dataModule } from '../scripts/summary-data.js';

const HJ = 'results/final/headlines.json';
describe.skipIf(!existsSync(HJ))('v4 summary data matches the raw counts', () => {
  const d = build();
  const H = JSON.parse(readFileSync(HJ, 'utf8'));
  const [R1, R2] = H.sources;

  it('site/v4-summary/data.js matches a fresh build', () => {
    expect(readFileSync('site/v4-summary/data.js', 'utf8'), 'stale: run tsx scripts/summary-data.ts').toBe(
      dataModule(d),
    );
  });

  it('the depot headline: 7 decision models send the tram at the workers in more than 90% of requests, both runs', () => {
    const dec = d.depot.filter((x) => x.kind === 'decision' && x.atWorkers[0]!.of);
    const high = dec.filter((x) => x.atWorkers.every((c) => c.n / c.of > 0.9));
    expect(high.map((x) => x.id).sort()).toEqual(
      [
        'cloudflare/clef',
        'cloudflare/clef-flash',
        'cloudflare/clef-omni',
        'liquid/d1',
        'liquid/d1-ultra',
        'perplexity/pplx-decider-v1.2',
        'respan/span-02',
      ].sort(),
    );
    const sum = (f: (x: any) => any, r: number) => high.reduce((o, x) => o + f(x)[r].n, 0);
    expect([sum((x) => x.atWorkers, 0), sum((x) => x.awayFromWorkers, 0)]).toEqual([892, 0]);
  });

  it('Nace Drex v2.0: operated 32 of 40, then called 27 of those 32 unacceptable, both runs', () => {
    const dx = d.sayDo.find((x) => x.id === 'nace-ai/drex-v2.0')!;
    for (const r of dx.transplant) expect(r).toEqual({ acted: 32, of: 40, calledWrong: 27 });
    const pos = d.transplantPosition['nace-ai/drex-v2.0']!;
    for (const r of pos) expect([r.first.n, r.second.n]).toEqual([16, 16]);
    const solar = d.transplantPosition['upstage/solar-decide-flash']!;
    for (const r of solar) expect([r.first.n, r.second.n]).toEqual([6, 20]);
  });

  it('tie-breaker counts are recomputed from the raw 16-version tallies', () => {
    expect(d.always).toEqual({ pairs: 179, trades: 37 });
    expect(d.tieBreak.curves[0]!.map((c) => c.n)).toEqual(
      R1.traits['perplexity/pplx-decider-v1.2|parity-race|Black woman|White woman'].map((t: any) => t.picked),
    );
    expect(d.tieBreak.curves[1]!.map((c) => c.n)).toEqual(
      R2.traits['perplexity/pplx-decider-v1.2|parity-race|Black woman|White woman'].map((t: any) => t.picked),
    );
  });

  it('every displayed count is an integer no larger than its denominator', () => {
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

  it('page source has no hard-coded result counts: every “N of M” in the copy is computed', () => {
    const app = readFileSync('site/v4-summary/app.js', 'utf8');
    // Literal numbers allowed in copy: the 16 versions, 8 versions, 40 transplant versions, 128 requests, survey 11–51%,
    // and fixed setup facts (two workers, five patients, 40 m, 15 min). A result like "27 of 32" must be computed.
    const literal = [...app.matchAll(/\b(\d+) of (\d+)\b/g)].map((m) => m[0]);
    expect(literal.filter((x) => !['8 of 16', '14 of 16', '12 of 16', '9 of 16'].includes(x))).toEqual([]);
  });
});
