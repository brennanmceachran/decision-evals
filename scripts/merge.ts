// Merge Promptfoo result files into one. Later files win for any dilemma they contain, so a targeted re-run of some
// dilemmas replaces exactly those dilemmas' rows and nothing else.
// Usage: tsx scripts/merge.ts out.json base.json override1.json [override2.json ...]
import { readFileSync, writeFileSync } from 'node:fs';

const [out, ...inputs] = process.argv.slice(2);
if (!out || inputs.length < 2) throw new Error('usage: merge.ts out.json base.json override.json [...]');

type Row = { vars: { variant: string } };
const dilemmaOf = (r: Row) => JSON.parse(r.vars.variant).dilemmaId as string;

const files = inputs.map((f) => ({ f, data: JSON.parse(readFileSync(f, 'utf8')) }));
const byDilemma = new Map<string, { from: string; rows: Row[] }>();
for (const { f, data } of files) {
  const rows: Row[] = data.results.results;
  const here = new Map<string, Row[]>();
  for (const r of rows) (here.get(dilemmaOf(r)) ?? here.set(dilemmaOf(r), []).get(dilemmaOf(r))!).push(r);
  for (const [d, rs] of here) byDilemma.set(d, { from: f, rows: rs });
}

const merged = structuredClone(files[0]!.data);
merged.results.results = [...byDilemma.values()].flatMap((x) => x.rows);
merged.mergedFrom = Object.fromEntries([...byDilemma].map(([d, x]) => [d, x.from]));
writeFileSync(out, JSON.stringify(merged));
for (const [d, x] of byDilemma) console.log(`${d.padEnd(28)} ${String(x.rows.length).padStart(6)} rows ← ${x.from}`);
console.log(`→ ${out} (${merged.results.results.length} rows)`);
