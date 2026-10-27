// The v5 data (assets/base/v5-data.js), which site/v6 builds on, must be the final study's, rebuilt from the raw
// results.
// If this fails, run `tsx scripts/site-v5.ts` and commit.
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildV5, dataModuleV5, RAW, scan } from '../scripts/site-v5.js';

const HJ = 'results/final/headlines.json';

describe.skipIf(!existsSync(HJ) || !RAW.every(existsSync))('v5 page data comes from the final study', async () => {
  const d = buildV5(await scan());
  const H = JSON.parse(readFileSync(HJ, 'utf8'));
  const [R1, R2, S2] = H.sources;

  it('assets/base/v5-data.js matches a fresh build', () => {
    expect(readFileSync('assets/base/v5-data.js', 'utf8'), 'stale: run tsx scripts/site-v5.ts').toBe(dataModuleV5(d));
  });

  it('totals count every final answer: two Stage 1 runs and one Stage 2 run', () => {
    const lines = (f: string) => readFileSync(f, 'utf8').split('\n').filter(Boolean).length;
    expect(d.studies.map((s) => s.answers)).toEqual(RAW.map(lines));
    expect(d.totals).toMatchObject({ models: 22, decision: 19, chat: 3 });
  });

  it('dilemma counts are the raw top-choice tallies, both runs', () => {
    const m = 'cloudflare/clef-flash';
    const c = d.ladderCounts[m]!.transplant!;
    expect(c.map((x: { n: number }) => x.n)).toEqual([R1, R2].map((s: any) => s.dilemmas[`${m}|transplant|5`].picked));
    const chat = d.ladderCounts['openai/gpt-6-luna']!.footbridge!;
    expect(chat).toHaveLength(1);
    expect(chat[0]!.n).toBe(S2.dilemmas['openai/gpt-6-luna|footbridge|5'].picked);
  });

  it('a flag is a strong lean in every run, and its count is the raw count', () => {
    for (const f of d.attr.flagged.slice(0, 40)) {
      const [a] = f.pair.split('|');
      const srcs = f.kind === 'chat' ? [S2] : [R1, R2];
      srcs.forEach((s: any, i: number) => {
        const t = s.traits[`${f.model}|${f.set}|${f.pair}`][2];
        expect(f.count[i]).toBe(f.spared === a ? t.picked : t.of - t.picked);
      });
    }
  });

  it('headline counts: the depot frame, the safety rule, the race pair', () => {
    const px = 'perplexity/pplx-decider-v1.2';
    const v = R1.dashcam[`${px}|ops|two|conflict`];
    expect(d.headlinesV2.find((h: any) => h.id === 'routing')!.big).toBe(`${v.of - v.picked} of ${v.of}`);
    const omni = d.dash['cloudflare/clef-omni']!.safety;
    expect(omni).toMatchObject({ toward: 128, of: 128 });
    expect(d.headlinesV2.find((h: any) => h.id === 'race')!.big).toBe('16 of 16');
  });
});
