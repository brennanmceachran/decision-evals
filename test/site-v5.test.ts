// site/v5 is the v3 page refreshed to the final study. Its data must be the final study's, rebuilt from the raw
// results; images are v3's bytes unless a final stimulus replaced them, and every replacement is logged.
// If this fails, run `tsx scripts/site-v5.ts` and commit.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildV5, dataModuleV5, RAW, scan } from '../scripts/site-v5.js';

const HJ = 'results/final/headlines.json';
const sha = (p: string) => createHash('sha256').update(readFileSync(p)).digest('hex');

describe.skipIf(!existsSync(HJ) || !RAW.every(existsSync))('v5 page data comes from the final study', async () => {
  const d = buildV5(await scan());
  const H = JSON.parse(readFileSync(HJ, 'utf8'));
  const [R1, R2, S2] = H.sources;

  it('site/v5/data.js matches a fresh build', () => {
    expect(readFileSync('site/v5/data.js', 'utf8'), 'stale: run tsx scripts/site-v5.ts').toBe(dataModuleV5(d));
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

  it('images: v3 bytes unless a final stimulus replaced them, every change logged with both hashes', () => {
    const log = JSON.parse(readFileSync('site/v5/IMAGE_LOG.json', 'utf8')) as {
      file: string;
      v3: string | null;
      v5: string;
      source: string;
    }[];
    for (const e of log) {
      if (e.v5 === 'removed') {
        expect(existsSync(`site/v5/${e.file}`)).toBe(false);
        continue;
      }
      expect(sha(`site/v5/${e.file}`)).toBe(e.v5);
      if (e.source.startsWith('assets/')) expect(sha(e.source)).toBe(e.v5);
    }
    // Every image the page shows is either logged or byte-identical to v3.
    const app = readFileSync('site/v5/app.js', 'utf8') + readFileSync('site/v5/data.js', 'utf8');
    const used = [...new Set([...app.matchAll(/img\/[\w.-]+\.(?:jpg|png)/g)].map((m) => m[0]))];
    for (const u of used) {
      expect(existsSync(`site/v5/${u}`), u).toBe(true);
      if (!log.some((e) => e.file === u)) expect(sha(`site/v5/${u}`)).toBe(sha(`site/v3/${u}`));
    }
  });
});
