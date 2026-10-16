// Checks a final-study run file row by row against the design, so a smoke test proves more than "something answered".
// Usage: tsx scripts/final-check.ts <tag>   (reads results/final/<tag>.jsonl, .errors.jsonl, .manifest.json)
import { readFileSync } from 'node:fs';
import { allJobs } from '../src/final/jobs.js';
import { FINAL_SUBJECTS } from '../src/final/subjects.js';

const tag = process.argv[2] ?? 'smoke';
const read = (f: string) =>
  readFileSync(f, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l));
const rows = read(`results/final/${tag}.jsonl`);
const errs = read(`results/final/${tag}.errors.jsonl`);
const manifest = JSON.parse(readFileSync(`results/final/${tag}.manifest.json`, 'utf8'));
const jobs = new Map(allJobs().map((j) => [j.id, j]));
const subj = new Map(FINAL_SUBJECTS.map((s) => [s.id, s]));

const problems: string[] = [];
const bad = (r: { model: string; job: string }, msg: string) => problems.push(`${r.model} ${r.job}: ${msg}`);

for (const r of rows) {
  const j = jobs.get(r.job);
  const s = subj.get(r.model);
  if (!j) {
    bad(r, 'job not in the current design');
    continue;
  }
  if (!s) {
    bad(r, 'model not in FINAL_SUBJECTS');
    continue;
  }
  // Identity and logging fields.
  for (const k of ['runId', 'provider', 'servedModel', 'generationId', 'startedAt', 'latencyMs'])
    if (r[k] === null || r[k] === undefined) bad(r, `missing ${k}`);
  if (r.runId !== manifest.runId) bad(r, 'runId differs from the manifest');
  if (s.host && r.provider && r.provider.toLowerCase() !== s.host.toLowerCase()) bad(r, `served by ${r.provider}, pinned to ${s.host}`);
  if (typeof r.costUsd !== 'number' || r.costUsd < 0) bad(r, 'cost not a number');
  // Answer shape.
  if (!r.refused) {
    const keys = Object.keys(r.probabilities ?? {});
    const want = Object.keys(j.main.criteria);
    if (keys.sort().join() !== [...want].sort().join()) bad(r, `answer keys ${keys} ≠ buttons ${want}`);
    const sum = Object.values(r.probabilities as Record<string, number>).reduce((a, b) => a + b, 0);
    if (Math.abs(sum - 1) > 0.02) bad(r, `probabilities sum to ${sum.toFixed(3)}`);
    if (typeof r.pFocal !== 'number' || r.pFocal < 0 || r.pFocal > 1) bad(r, `pFocal ${r.pFocal}`);
    if (s.category !== 'decision' && (!Array.isArray(r.samples) || r.samples.length !== 5)) bad(r, 'chat model without 5 samples');
  }
  // Probes: every group asked, every question answered or refused.
  for (const [g, qs] of Object.entries(j.probes)) {
    const got = r.probes?.[g];
    if (!got) {
      bad(r, `probe group ${g} missing`);
      continue;
    }
    for (const q of Object.keys(qs)) if (!got[q]) bad(r, `probe ${g}.${q} missing`);
  }
}

// Coverage: every model × eligible part in the manifest has rows or recorded errors.
const planned = manifest.subjects as { id: string; image?: string }[];
for (const s of planned) {
  const mine = rows.filter((r) => r.model === s.id);
  const myErrs = errs.filter((e) => e.model === s.id);
  if (!mine.length) problems.push(`${s.id}: no answers at all (${myErrs.length} errors)`);
}

const by = (k: string) => {
  const m = new Map<string, number>();
  for (const r of rows) m.set(r[k], (m.get(r[k]) ?? 0) + 1);
  return [...m].map(([a, b]) => `${a} ${b}`).join(', ');
};
console.log(`${tag}: ${rows.length} rows, ${errs.length} errors, run ${manifest.runId}`);
console.log(`  parts: ${by('part')}`);
console.log(`  refused: ${rows.filter((r) => r.refused).length}`);
console.log(`  errors by model: ${[...new Set(errs.map((e) => e.model))].map((m) => `${m} ${errs.filter((e) => e.model === m).length}`).join(', ') || 'none'}`);
console.log(problems.length ? `\n${problems.length} problems:\n  ${[...new Set(problems)].slice(0, 60).join('\n  ')}` : '\nno problems');
process.exit(problems.length || errs.length ? 1 : 0);
