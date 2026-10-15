// Per-version answers the site shows ("all 16 versions of the question"), which live only in the raw (gitignored,
// ~80–300 MB) result files. Extracted once into a small committed file so the site can be rebuilt and tested without
// the raw data. Same pattern as scripts/findings-data.ts.
// Usage: node --max-old-space-size=8192 --import tsx scripts/site-extract.ts
// Reads results/attr.json and results/pilot-v2b.json; writes results/site-extract.json.
import { readFileSync, writeFileSync } from 'node:fs';

type Row = {
  provider: { label: string };
  response?: { output?: { refused?: boolean; dist: Record<string, number> } };
  vars: { variant: string };
};
const r2 = (x: number) => Math.round(x * 100) / 100;

/**
 * Two-person items at 1:1: P(spare the first-named person) for each of the 16 versions, in a fixed order
 * (wording 0–3 × first-named person on the left/right × button order forward/reverse), so the site can draw one mark
 * per version. null = refused.
 */
function versions(path: string, keep: (dilemma: string) => boolean) {
  const rows = JSON.parse(readFileSync(path, 'utf8')).results.results as Row[];
  const out: Record<string, Record<string, (number | null)[]>> = {};
  for (const r of rows) {
    const v = JSON.parse(r.vars.variant);
    if (!keep(v.dilemmaId) || v.point.k !== 1 || v.point.m !== 1) continue;
    const o = r.response?.output;
    if (!o) continue;
    const idx = v.paraphrase * 4 + (v.point.side === 'a_left' ? 0 : 2) + (v.order === 'forward' ? 0 : 1);
    const pair = `${v.dilemmaId}|${v.point.a}|${v.point.b}`;
    const m = (out[r.provider.label] ??= {});
    const arr = (m[pair] ??= Array(16).fill(null));
    arr[idx] = o.refused ? null : r2((v.focalIds as string[]).reduce((s, c) => s + (o.dist[c] ?? 0), 0));
  }
  return out;
}

/** Single-scene items the quiz uses: P(act) per version (wording × order), keyed by dilemma|n. */
function quizVersions(path: string) {
  const rows = JSON.parse(readFileSync(path, 'utf8')).results.results as Row[];
  const KEEP = new Set(['switch|5', 'footbridge|5', 'transplant|5', 'control-kill-for-nothing|']);
  const out: Record<string, Record<string, (number | null)[]>> = {};
  for (const r of rows) {
    const v = JSON.parse(r.vars.variant);
    if (v.frame !== 'game') continue;
    const key = `${v.dilemmaId}|${v.point.n ?? ''}`;
    if (!KEEP.has(key)) continue;
    const o = r.response?.output;
    if (!o) continue;
    const idx = v.paraphrase * 2 + (v.order === 'forward' ? 0 : 1);
    const m = (out[r.provider.label] ??= {});
    const arr = (m[key] ??= Array(4).fill(null));
    arr[idx] = o.refused ? null : r2((v.focalIds as string[]).reduce((s, c) => s + (o.dist[c] ?? 0), 0));
  }
  return out;
}

const attr = versions('results/attr.json', (d) => d.startsWith('parity-'));
const pilot = versions('results/pilot-v2b.json', (d) => d === 'exchange-age' || d === 'parity-race');
const quiz = quizVersions('results/pilot-v2b.json');
/** Recorded spend of the image study (its raw rows are not committed). */
const imageCostUsd = readFileSync('results/image-v3.jsonl', 'utf8')
  .split('\n')
  .filter(Boolean)
  .reduce((s, l) => s + (JSON.parse(l).cost ?? 0), 0);
writeFileSync(
  'results/site-extract.json',
  JSON.stringify(
    {
      note: 'Per-version answers for the site. versions: index = wording*4 + (first-named left ? 0 : 2) + (forward ? 0 : 1). quiz: index = wording*2 + (forward ? 0 : 1).',
      attr,
      pilot,
      quiz,
      imageCostUsd,
    },
    null,
    0,
  ) + '\n',
);
console.log('→ results/site-extract.json');
