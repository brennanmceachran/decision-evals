// Numbers FINDINGS.md needs that live only in the raw (gitignored, ~300 MB) result files, extracted once into a small
// committed file so the write-up can be regenerated and tested without the raw data.
// Usage: node --max-old-space-size=8192 --import tsx scripts/findings-data.ts [raw.json ...]
// Writes results/findings-data.json, keyed by raw file name.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';

type Row = {
  provider: { label: string };
  latencyMs?: number;
  cost?: number;
  error?: string;
  response?: {
    cached?: boolean;
    output?: { refused?: boolean; dist: Record<string, number>; servedBy?: { provider?: string } };
  };
  vars: { variant: string };
};

const round = (x: number, d = 3) => (Number.isFinite(x) ? Math.round(x * 10 ** d) / 10 ** d : null);
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);

function extract(path: string) {
  const rows = JSON.parse(readFileSync(path, 'utf8')).results.results as Row[];
  const by = new Map<string, Row[]>();
  for (const r of rows) (by.get(r.provider.label) ?? by.set(r.provider.label, []).get(r.provider.label)!).push(r);
  const models: Record<string, unknown> = {};
  for (const [model, rs] of by) {
    // Switch at 1 vs 1 (both outcomes identical), split by which option was listed first.
    const oneVone: Record<string, number[]> = { actListedFirst: [], actListedSecond: [] };
    // Mean P(focal) and the share of variants where the focal option was the top choice (P > 0.5): anchors per n,
    // two-group items at equal numbers per pair, and the two controls.
    const cells = new Map<string, { p: number[]; top: number }>();
    const ratioCells = new Map<string, { p: number[]; top: number }>();
    // Refusals by kind of item: two-group items at equal numbers vs unequal numbers, by dilemma.
    const refusals: Record<string, { refused: number; of: number }> = {};
    for (const r of rs) {
      const o = r.response?.output;
      if (!o) continue;
      const v = JSON.parse(r.vars.variant);
      if (v.dilemmaId === 'switch' && Number(v.point.n) === 1 && !o.refused) {
        const actFirst = v.presentation.order[0] === 'pull';
        oneVone[actFirst ? 'actListedFirst' : 'actListedSecond']!.push(o.dist.pull ?? 0);
      }
      if (!o.refused) {
        const p = (v.focalIds as string[]).reduce((sum, c) => sum + (o.dist[c] ?? 0), 0);
        const key =
          v.point.n !== undefined
            ? `${v.dilemmaId}|n=${v.point.n}`
            : v.point.k !== undefined && v.point.k === v.point.m
              ? `${v.dilemmaId}|${v.point.a}|${v.point.b}`
              : v.module === 'control'
                ? v.dilemmaId
                : undefined;
        if (key) {
          const c = cells.get(key) ?? cells.set(key, { p: [], top: 0 }).get(key)!;
          c.p.push(p);
          if (p > 0.5) c.top++;
        }
        // Every count ratio for two-group items (e.g. "1 Black woman vs 3 White men"), keyed with the ratio.
        if (v.point.k !== undefined) {
          const rk = `${v.dilemmaId}|${v.point.a}|${v.point.b}|${v.point.k}:${v.point.m}`;
          const c = ratioCells.get(rk) ?? ratioCells.set(rk, { p: [], top: 0 }).get(rk)!;
          c.p.push(p);
          if (p > 0.5) c.top++;
        }
      }
      const twoGroup = v.point.k !== undefined;
      const key = twoGroup ? `${v.dilemmaId}|${v.point.k === v.point.m ? 'equal' : 'unequal'}` : v.dilemmaId;
      const c = (refusals[key] ??= { refused: 0, of: 0 });
      c.of++;
      if (o.refused) c.refused++;
    }
    models[model] = {
      rows: rs.length,
      errors: rs.filter((r) => !r.response?.output).length,
      switch1v1: {
        actListedFirst: round(mean(oneVone.actListedFirst!)),
        actListedSecond: round(mean(oneVone.actListedSecond!)),
        n: oneVone.actListedFirst!.length + oneVone.actListedSecond!.length,
      },
      cells: Object.fromEntries([...cells].map(([k, c]) => [k, { mean: round(mean(c.p)), top: c.top, n: c.p.length }])),
      ratioCells: Object.fromEntries(
        [...ratioCells].map(([k, c]) => [k, { mean: round(mean(c.p)), top: c.top, n: c.p.length }]),
      ),
      /** Recorded spend per uncached call × rows: what collecting this model's answers costs at recorded prices. */
      costUsd: (() => {
        const live = rs.filter((r) => r.response?.output && !r.response.cached);
        return live.length ? round((live.reduce((s, r) => s + (r.cost ?? 0), 0) / live.length) * rs.length, 4) : null;
      })(),
      refusals: Object.fromEntries(Object.entries(refusals).filter(([, c]) => c.refused > 0)),
    };
  }
  return { rows: rows.length, errors: rows.filter((r) => !r.response?.output).length, models };
}

const out = 'results/findings-data.json';
const prev = existsSync(out) ? JSON.parse(readFileSync(out, 'utf8')) : {};
const paths = process.argv.slice(2).length ? process.argv.slice(2) : ['results/pilot-v2b.json'];
for (const p of paths) prev[basename(p)] = extract(p);

writeFileSync(out, JSON.stringify(prev, null, 1) + '\n');
console.log(`→ ${out} (${Object.keys(prev).join(', ')})`);
