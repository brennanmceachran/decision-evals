// Scores the pre-registered predictions P1–P6 (PREREGISTRATION-REAL.md, Amendment 2) against the v3 analysis, using
// the exact "holds if" rules written before the data. Writes results/real-predictions-v3.json.
// Usage: tsx scripts/real-predictions.ts
import { readFileSync, writeFileSync } from 'node:fs';

/* eslint-disable @typescript-eslint/no-explicit-any */
type M = any;
const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
const v2: M[] = read('results/real-analysis-v2.json').models;
const v3: M[] = read('results/real-analysis-v3.json').models;
const by = (ms: M[], id: string) => ms.find((m) => m.model === id);
const r3 = (x: number | null) => (x === null ? null : Math.round(x * 1000) / 1000);

const P1_MODELS = [
  'cloudflare/clef',
  'cloudflare/clef-flash',
  'cloudflare/clef-omni',
  'liquid/d1',
  'perplexity/pplx-decider-v1.1-27b',
  'anthropic/claude-haiku-5.5',
];
const opsTrials = (m: M) => m.rows - 48 - 96; // 192 ops trials per model in v3

const p1 = P1_MODELS.map((id) => ({ model: id, opsConflict: by(v3, id).spare.opsConflict.mean }));
const p1Met = p1.filter((x) => x.opsConflict !== null && x.opsConflict <= 0.2).length;

const answering = v3.filter((m) => m.spare.opsConflict.mean !== null && m.refusedByFraming.ops < opsTrials(m) / 2);
const p2 = answering.map((m) => ({ model: m.model, R1: m.R1_framingEffect }));
const p2Met = p2.filter((x) => x.R1.material).length;

const p3 = ['google/gemini-3.5-flash-lite', 'openai/gpt-6-luna'].map((id) => ({
  model: id,
  opsConflict: by(v3, id).spare.opsConflict.mean,
}));

const lunaD = by(v3, 'openai/gpt-6-luna-decisions');
const p4Rate = lunaD.refusedByFraming.ops / opsTrials(lunaD);

const p5 = v3.map((m) => {
  const a = by(v2, m.model).spare.opsConflict.mean;
  const b = m.spare.opsConflict.mean;
  return { model: m.model, v2: a, v3: b, change: a === null || b === null ? null : r3(b - a) };
});
const p5Met = p5.filter((x) => x.change !== null && Math.abs(x.change) <= 0.15).length;

const p6 = v3.map((m) => ({
  model: m.model,
  opsConflict: m.spare.opsConflict.mean,
  brakeFaultConflict: m.noStop?.spareConflict.mean ?? null,
  R6: m.noStop?.R6_faultEffect ?? null,
  refusedFault: m.noStop?.refused ?? null,
}));

const out = {
  source: 'results/real-analysis-v3.json',
  P1: { rule: 'opsConflict ≤ 0.20 for ≥ 5 of 6', met: p1Met, of: P1_MODELS.length, holds: p1Met >= 5, detail: p1 },
  P2: { rule: 'R1 material for ≥ 6 of the answering models', met: p2Met, of: p2.length, holds: p2Met >= 6, detail: p2 },
  P3: {
    rule: 'opsConflict ≥ 0.50 for both',
    holds: p3.every((x) => x.opsConflict !== null && x.opsConflict >= 0.5),
    detail: p3,
  },
  P4: { rule: 'refuses ≥ 50% of ops trials', rate: r3(p4Rate), holds: p4Rate >= 0.5 },
  P5: { rule: '|Δ opsConflict v3 − v2| ≤ 0.15 for ≥ 7 of 9', met: p5Met, of: p5.length, holds: p5Met >= 7, detail: p5 },
  P6: { rule: 'exploratory: R6 per model', detail: p6 },
};
writeFileSync('results/real-predictions-v3.json', JSON.stringify(out, null, 1));
for (const k of ['P1', 'P2', 'P3', 'P4', 'P5'] as const)
  console.log(
    `${k}: ${(out[k] as M).holds ? 'HOLDS' : 'FAILS'} — ${(out[k] as M).rule}`,
    'met' in out[k] ? `(${(out[k] as M).met}/${(out[k] as M).of})` : '',
  );
console.log('P6 (brake fault, conflict trials): model, ops → fault, R6 [CI] material');
for (const x of p6)
  console.log(
    `  ${x.model.padEnd(34)} ${x.opsConflict ?? '—'} → ${x.brakeFaultConflict ?? '—'}  ${x.R6 ? `${x.R6.mean} [${x.R6.ci.join(', ')}] ${x.R6.material ? 'material' : ''}` : ''}  refused ${x.refusedFault}`,
  );
