// Run 1 vs run 2 of the same frozen stage (owner-approved full repeat, 2026-10-17). Written and committed before run 2
// existed. Each run is analysed on its own by src/final/analyze.ts; this script only reads the two results side by
// side. It never pools the runs, never re-scores, and never changes any per-run rule or level. Contradictions are
// listed, not resolved.
//
// What it reports, per model:
//   1. Basic checks: each gate's value and pass/fail in both runs; flips listed.
//   2. Predictions F1–F6: holds / does not hold / n/a in both runs.
//   3. Traits: cross-table of levels (run 1 × run 2); strong leans kept / only in run 1 / only in run 2; pairs that
//      lean (CI excludes 0.5) in both runs but in opposite directions; placebo band in both runs; pairs within 0.02 of
//      the band edge in either run (borderline); P(save A) differences at 1:1.
//   4. Dashcam: balanced P(spare), safety-rule and brake-fault effects, refusals, counting accuracy, P(live).
//   5. Individual answers, joined by (model, job) on non-refused rows in both runs. Definitions (reconciling the
//      84 / 87 / 126 counts from the 2% check):
//        identical          |Δp| = 0
//        strict crossing    (p1 − 0.5)(p2 − 0.5) < 0            (the 87 rule)
//        stored-choice change  choice differs; includes exact 0.5 ties broken differently and changes among three
//                           or more options that never cross 0.5  (the 126 rule)
//        near-tie crossing  a strict crossing with both answers within 0.01 of 0.5; the 84 rule excluded these
//        confident reversal  a strict crossing with one answer ≤ 0.25 and the other ≥ 0.75
//      plus |Δp| bands, refusal agreement, and host / provider / served model in each run.
//
// Usage: tsx scripts/final-compare-runs.ts <run1 tag> <run2 tag>   → results/final/compare-<run1>-<run2>.json
import { createReadStream, readFileSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline';

/* eslint-disable @typescript-eslint/no-explicit-any */
type M = any;
const [t1, t2] = process.argv.slice(2);
if (!t1 || !t2) throw new Error('usage: final-compare-runs.ts <run1 tag> <run2 tag>');
const analysis = (t: string) => JSON.parse(readFileSync(`results/final/${t}.analysis.json`, 'utf8'));
const manifest = (t: string) => JSON.parse(readFileSync(`results/final/${t}.manifest.json`, 'utf8'));
const A1 = analysis(t1);
const A2 = analysis(t2);
const r3 = (x: number | null | undefined) => (x === null || x === undefined ? null : Math.round(x * 1000) / 1000);
const pairKey = (p: M) => `${p.dilemma}|${p.pair}`;
const LEVELS = ['no detectable lean', 'slight lean', 'lean', 'strong lean'];
const leans = (p: M) => p.ci[0] > 0.5 || p.ci[1] < 0.5;

// ---------- 1–4: from each run's own frozen analysis
const models = A1.models.map((m1: M) => {
  const m2 = A2.models.find((x: M) => x.model === m1.model);
  if (!m2) return { model: m1.model, missingInRun2: true };
  const gates = Object.fromEntries(
    Object.keys(m1.gates).map((g) => [
      g,
      { run1: m1.gates[g], run2: m2.gates[g], flipped: m1.gates[g].pass !== m2.gates[g].pass },
    ]),
  );
  const p1 = new Map<string, M>(m1.traits.pairs.map((p: M) => [pairKey(p), p]));
  const p2 = new Map<string, M>(m2.traits.pairs.map((p: M) => [pairKey(p), p]));
  const keys = [...p1.keys()].filter((k) => p2.has(k));
  const cross = Object.fromEntries(
    LEVELS.map((a) => [
      a,
      Object.fromEntries(
        LEVELS.map((b) => [b, keys.filter((k) => p1.get(k).level === a && p2.get(k).level === b).length]),
      ),
    ]),
  );
  const strong = (p: Map<string, M>, k: string) => p.get(k).level === 'strong lean';
  const row = (k: string) => {
    const a = p1.get(k);
    const b = p2.get(k);
    return {
      pair: k,
      run1: { level: a.level, pSpareA: a.pSpareA, ci: a.ci, spared: a.spared, worth: a.worth },
      run2: { level: b.level, pSpareA: b.pSpareA, ci: b.ci, spared: b.spared, worth: b.worth },
    };
  };
  const band1 = m1.traits.band;
  const band2 = m2.traits.band;
  const nearEdge = (p: M, band: number) => Math.abs(Math.abs(p.pSpareA - 0.5) - band) <= 0.02;
  const diffs = keys.map((k) => Math.abs(p1.get(k).pSpareA - p2.get(k).pSpareA)).sort((a, b) => a - b);
  const d1 = m1.dashcam;
  const d2 = m2.dashcam;
  const dash = (f: (d: M) => M) => ({ run1: f(d1), run2: f(d2) });
  return {
    model: m1.model,
    gates,
    passesGates: { run1: m1.passesGates, run2: m2.passesGates },
    traits: {
      band: { run1: band1, run2: band2 },
      placeboSelfFlagged: { run1: m1.traits.placeboSelfFlagged, run2: m2.traits.placeboSelfFlagged },
      levels: { run1: m1.traits.levels, run2: m2.traits.levels },
      crossTable: cross,
      strongBoth: keys.filter((k) => strong(p1, k) && strong(p2, k)).map(row),
      strongOnlyRun1: keys.filter((k) => strong(p1, k) && !strong(p2, k)).map(row),
      strongOnlyRun2: keys.filter((k) => !strong(p1, k) && strong(p2, k)).map(row),
      oppositeDirections: keys
        .filter((k) => leans(p1.get(k)) && leans(p2.get(k)) && p1.get(k).pSpareA > 0.5 !== p2.get(k).pSpareA > 0.5)
        .map(row),
      borderline: keys.filter((k) => nearEdge(p1.get(k), band1) || nearEdge(p2.get(k), band2)).map(row),
      pSpareAAbsDiff: {
        median: r3(diffs[Math.floor(diffs.length / 2)]),
        p90: r3(diffs[Math.floor(diffs.length * 0.9)]),
        max: r3(diffs.at(-1)),
      },
    },
    dashcam: d1.balanced.ops.items
      ? {
          balancedOps: dash((d) => d.balanced.ops),
          opsTwoVsNobody: dash((d) => d.balanced.opsTwoVsNobody),
          opsThreeVsOne: dash((d) => d.balanced.opsThreeVsOne),
          safetyRuleEffect: dash((d) => d.safetyRuleEffect),
          brakeFaultEffect: dash((d) => d.brakeFaultEffect),
          refused: dash((d) => d.refused.total),
          countsCorrect: dash((d) => d.countsCorrect),
          pLiveOps: dash((d) => d.pLive.ops),
        }
      : null,
    dilemmas: Object.fromEntries(
      Object.keys(m1.dilemmas).map((d) => [d, { run1: m1.dilemmas[d], run2: m2.dilemmas[d] }]),
    ),
    image: { run1: m1.image, run2: m2.image },
  };
});
const hypotheses = Object.fromEntries(
  Object.keys(A1.hypotheses).map((h) => [
    h,
    { run1: A1.hypotheses[h], run2: A2.hypotheses[h], sameVerdict: A1.hypotheses[h].holds === A2.hypotheses[h].holds },
  ]),
);

// ---------- 5: individual answers, streamed (each run is ~380 MB)
async function rows(t: string, each: (r: M) => void) {
  const rl = createInterface({ input: createReadStream(`results/final/${t}.jsonl`), crlfDelay: Infinity });
  for await (const l of rl) if (l) each(JSON.parse(l));
}
type Slim = {
  refused: boolean;
  p: number | null;
  choice: string | null;
  host: string | null;
  provider: string | null;
  served: string | null;
};
const slim = (r: M): Slim => ({
  refused: r.refused,
  p: r.pFocal,
  choice: r.choice,
  host: r.host,
  provider: r.provider,
  served: r.servedModel,
});
const run1 = new Map<string, Slim>();
await rows(t1, (r) => run1.set(`${r.model}\t${r.job}`, slim(r)));
const per: Record<string, Record<string, number>> = {};
const reversals: M[] = [];
const servedChanges = new Map<string, Set<string>>();
let joined = 0;
await rows(t2, (r) => {
  const k = `${r.model}\t${r.job}`;
  const a = run1.get(k);
  if (!a) return;
  joined++;
  const b = slim(r);
  const c = (per[r.model] ??= {
    joined: 0,
    refusedBoth: 0,
    refusedOnlyRun1: 0,
    refusedOnlyRun2: 0,
    compared: 0,
    identical: 0,
    'dp<0.05': 0,
    'dp0.05-0.25': 0,
    'dp0.25-0.5': 0,
    'dp>0.5': 0,
    strictCrossings: 0,
    nearTieCrossings: 0,
    storedChoiceChanges: 0,
    choiceChangeTouching05: 0,
    confidentReversals: 0,
    hostOrProviderDiffers: 0,
    servedModelDiffers: 0,
  });
  c.joined!++;
  if (a.host !== b.host || a.provider !== b.provider) c.hostOrProviderDiffers!++;
  if (a.served !== b.served) {
    c.servedModelDiffers!++;
    (servedChanges.get(r.model) ?? servedChanges.set(r.model, new Set()).get(r.model)!).add(
      `${a.served} → ${b.served}`,
    );
  }
  if (a.refused && b.refused) return void c.refusedBoth!++;
  if (a.refused) return void c.refusedOnlyRun1!++;
  if (b.refused) return void c.refusedOnlyRun2!++;
  if (a.p === null || b.p === null) return;
  c.compared!++;
  const d = Math.abs(a.p - b.p);
  if (d === 0) c.identical!++;
  else if (d < 0.05) c['dp<0.05']!++;
  else if (d <= 0.25) c['dp0.05-0.25']!++;
  else if (d <= 0.5) c['dp0.25-0.5']!++;
  else c['dp>0.5']!++;
  const crosses = (a.p - 0.5) * (b.p - 0.5) < 0;
  if (crosses) c.strictCrossings!++;
  if (crosses && Math.abs(a.p - 0.5) <= 0.01 && Math.abs(b.p - 0.5) <= 0.01) c.nearTieCrossings!++;
  if (a.choice !== b.choice) {
    c.storedChoiceChanges!++;
    if (a.p === 0.5 || b.p === 0.5) c.choiceChangeTouching05!++;
  }
  if (crosses && Math.min(a.p, b.p) <= 0.25 && Math.max(a.p, b.p) >= 0.75) {
    c.confidentReversals!++;
    if (reversals.length < 500)
      reversals.push({
        model: r.model,
        job: r.job,
        part: r.part,
        dilemma: r.dilemma ?? r.framing,
        run1: r3(a.p),
        run2: r3(b.p),
      });
  }
});

const out = {
  createdAt: new Date().toISOString(),
  runs: { run1: { tag: t1, manifest: manifest(t1) }, run2: { tag: t2, manifest: manifest(t2) } },
  definitions: {
    strictCrossing: '(p1 − 0.5)(p2 − 0.5) < 0, non-refused in both runs',
    nearTieCrossing: 'strict crossing with both answers within 0.01 of 0.5 (excluded by the earlier "84" count)',
    storedChoiceChange:
      'stored choice differs; includes 0.5 ties broken differently and multi-option changes that never cross 0.5',
    confidentReversal: 'strict crossing with one answer ≤ 0.25 and the other ≥ 0.75',
  },
  hypotheses,
  models,
  individual: {
    joined,
    perModel: per,
    servedModelChanges: Object.fromEntries([...servedChanges].map(([m, s]) => [m, [...s]])),
    confidentReversals: reversals,
  },
};
const dest = `results/final/compare-${t1}-${t2}.json`;
writeFileSync(dest, JSON.stringify(out, null, 1));

// ---------- Console summary
console.log(`${t1} vs ${t2} · ${joined} joined answers → ${dest}\n`);
for (const [h, v] of Object.entries(hypotheses) as [string, M][])
  console.log(
    `${h.padEnd(28)} run1 ${String(v.run1.holds).padEnd(6)} run2 ${String(v.run2.holds).padEnd(6)}${v.sameVerdict ? '' : '  ← DIFFERS'}`,
  );
console.log(
  '\nmodel                       gates r1/r2   strong r1 r2 both only1 only2 opp  band r1/r2    flips/compared  conf.rev',
);
for (const m of models as M[]) {
  if (m.missingInRun2) {
    console.log(`${m.model.split('/')[1].padEnd(27)} MISSING IN RUN 2`);
    continue;
  }
  const t = m.traits;
  const i = per[m.model] ?? {};
  const g = (x: boolean | null) => (x === null ? 'n/a' : x ? 'pass' : 'FAIL');
  const flips = Object.entries(m.gates)
    .filter(([, v]: M) => v.flipped)
    .map(([k]) => k.split('_')[0]);
  console.log(
    `${m.model.split('/')[1].padEnd(27)} ${g(m.passesGates.run1).padEnd(4)}/${g(m.passesGates.run2).padEnd(4)}${flips.length ? `(${flips.join(',')})` : ''}`.padEnd(
      46,
    ) +
      `${String(t.levels.run1['strong lean']).padStart(4)} ${String(t.levels.run2['strong lean']).padStart(3)} ${String(t.strongBoth.length).padStart(4)} ${String(t.strongOnlyRun1.length).padStart(5)} ${String(t.strongOnlyRun2.length).padStart(5)} ${String(t.oppositeDirections.length).padStart(3)}  ${t.band.run1}/${t.band.run2}`.padEnd(
        48,
      ) +
      `${i.strictCrossings ?? '-'}/${i.compared ?? '-'}`.padEnd(16) +
      `${i.confidentReversals ?? '-'}${i.servedModelDiffers ? `  served-model changed ×${i.servedModelDiffers}` : ''}${i.refusedOnlyRun1 || i.refusedOnlyRun2 ? `  refusal mismatch ${i.refusedOnlyRun1}/${i.refusedOnlyRun2}` : ''}`,
  );
}
