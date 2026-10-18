// Data for the final-study explorer (site/final). Reads each run's frozen analysis and the run-vs-run comparison;
// computes nothing new except reshaping. Usage: tsx scripts/final-explorer.ts → site/final/data.js
import { readFileSync, writeFileSync } from 'node:fs';

/* eslint-disable @typescript-eslint/no-explicit-any */
type M = any;
const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
const runs = ['final-run1', 'final-run2'].map((t) => read(`results/final/${t}.analysis.json`));
const cmp = read('results/final/compare-final-run1-final-run2.json');
const r3 = (x: number | null | undefined) => (x === null || x === undefined ? null : Math.round(x * 1000) / 1000);
const LEVEL = { 'no detectable lean': 0, 'slight lean': 1, lean: 2, 'strong lean': 3 } as Record<string, number>;

const short = (id: string) => id.split('/')[1]!;
const models = runs[0].models.map((m0: M) => {
  const per = runs.map((a: M) => a.models.find((x: M) => x.model === m0.model));
  const stab = cmp.individual.perModel[m0.model] ?? {};
  return {
    id: m0.model,
    short: short(m0.model),
    name: m0.name,
    vision: !!m0.dashcam.refused.of,
    runs: per.map((m: M) => ({
      passesGates: m.passesGates,
      gates: Object.fromEntries(Object.entries(m.gates).map(([k, v]: M) => [k.split('_')[0], [r3(v.value), v.pass]])),
      refused: m.refused,
      band: r3(m.traits.band),
      levels: [0, 1, 2, 3].map((l) => m.traits.pairs.filter((p: M) => LEVEL[p.level] === l).length),
      // [trait, a, b, P(save A), ci lo, ci hi, level 0–3, worth label]
      pairs: m.traits.pairs.map((p: M) => [
        p.dilemma.replace('parity-', ''),
        ...p.pair.split('|'),
        r3(p.pSpareA),
        r3(p.ci[0]),
        r3(p.ci[1]),
        LEVEL[p.level],
        p.worth,
      ]),
      dilemmas: Object.fromEntries(
        Object.entries(m.dilemmas).map(([k, v]: M) => [k, { p: v.pActByN, nStar: v.nStar }]),
      ),
      image: m.image.picture.items
        ? {
            words: m.image.wordsWithOutcomes.rightCalls,
            wordsOnly: m.image.wordsOnly.rightCalls,
            picture: m.image.picture.rightCalls,
            of: m.image.picture.items,
          }
        : null,
      dashcam: m.dashcam.refused.of
        ? {
            ops: [m.dashcam.balanced.ops.mean, ...m.dashcam.balanced.ops.ci],
            config: [m.dashcam.balanced.config.mean, ...m.dashcam.balanced.config.ci],
            safety: [m.dashcam.balanced.safety.mean, ...m.dashcam.balanced.safety.ci],
            brake: [m.dashcam.balanced.brakeFault.mean, ...m.dashcam.balanced.brakeFault.ci],
            safetyEffect: [m.dashcam.safetyRuleEffect.mean, ...m.dashcam.safetyRuleEffect.ci],
            refused: [m.dashcam.refused.total, m.dashcam.refused.of],
            counts: m.dashcam.countsCorrect,
            live: m.dashcam.pLive.ops,
          }
        : null,
    })),
    stability: {
      compared: stab.compared,
      identical: stab.identical,
      small: stab['dp<0.05'],
      medium: stab['dp0.05-0.25'],
      large: (stab['dp0.25-0.5'] ?? 0) + (stab['dp>0.5'] ?? 0),
      crossings: stab.strictCrossings,
      reversals: stab.confidentReversals,
    },
  };
});

// Raw top-choice tallies (scripts/final-headlines.ts) for the headline views. Stage 2 rides along, labelled as its own
// stage; it is never merged into the Stage 1 runs.
const H = read('results/final/headlines.json');
const s2 = read('results/final/stage2.analysis.json');
const data = {
  built: 'scripts/final-explorer.ts',
  headlines: H,
  stage2: s2.models.map((m: M) => ({
    id: m.model,
    name: m.name,
    passesGates: m.passesGates,
    gates: Object.fromEntries(Object.entries(m.gates).map(([k, v]: M) => [k.split('_')[0], [r3(v.value), v.pass]])),
    levels: [0, 1, 2, 3].map((l) => m.traits.pairs.filter((p: M) => LEVEL[p.level] === l).length),
    band: r3(m.traits.band),
  })),
  runs: runs.map((a: M, i: number) => ({ label: `Run ${i + 1}`, source: a.source })),
  // F3 names Claude Haiku 5.5 (stage 2), so it is decided here with each Stage 1 run plus Stage 2's Haiku result.
  hypotheses: Object.fromEntries(
    Object.entries(cmp.hypotheses).map(([k, v]: M) => {
      const id = k.split('_')[0]!;
      if (id !== 'F3') return [id, [v.run1.holds, v.run2.holds]];
      const named = [
        'cloudflare/clef',
        'cloudflare/clef-flash',
        'cloudflare/clef-omni',
        'liquid/d1',
        'perplexity/pplx-decider-v1.2',
      ];
      const haiku = s2.models.find((m: M) => m.model === 'anthropic/claude-haiku-5.5').dashcam.balanced.ops
        .noMeasurableDifference;
      return [
        id,
        runs.map(
          (a: M) =>
            named.filter((n) => a.models.find((m: M) => m.model === n).dashcam.balanced.ops.noMeasurableDifference)
              .length +
              (haiku ? 1 : 0) >=
            5,
        ),
      ];
    }),
  ),
  models,
};
writeFileSync('site/final/data.js', `window.DATA = ${JSON.stringify(data)};\n`);
console.log(`site/final/data.js · ${models.length} models · ${(JSON.stringify(data).length / 1024).toFixed(0)} KB`);
