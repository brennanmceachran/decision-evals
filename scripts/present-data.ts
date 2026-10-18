// Data for the final-study presentation (site/present). Every number is a raw top-choice count from
// results/final/headlines.json: "chose X in N of M". Stage 1 (19 decision models) gives both runs as [run 1, run 2];
// Stage 2 (3 chat models) gives one run, each answer the majority of 5 samples. Returned weights are never used here.
// Usage: tsx scripts/present-data.ts → site/present/data.js
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { FINAL_SUBJECTS } from '../src/final/subjects.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
type Count = { n: number; of: number; refused?: number };
const H = JSON.parse(readFileSync('results/final/headlines.json', 'utf8'));
const [R1, R2, S2] = H.sources as any[];

const SUBJ = FINAL_SUBJECTS.filter((s) => s.category !== 'frontier');
const DECISION = SUBJ.filter((s) => s.category === 'decision').map((s) => s.id);
const CHAT = SUBJ.filter((s) => s.category === 'chat').map((s) => s.id);
const VISION = DECISION.filter((m) => R1.dashcam[`${m}|ops|two|conflict`]);

export const models = SUBJ.map((s) => ({
  id: s.id,
  name: s.name,
  vendor: s.vendor,
  kind: s.category as 'decision' | 'chat',
  vision: s.category === 'chat' || VISION.includes(s.id),
}));

const both = <T>(f: (src: any) => T): [T, T] => [f(R1), f(R2)];

/** Sent at the people when the schedule pointed at them (or away), summed over both scenes (2 vs 0, 3 vs 1). */
function routed(src: any, m: string, framing: string, rel: 'conflict' | 'aligned'): Count {
  const o = { n: 0, of: 0, refused: 0 };
  for (const c of ['two', 'group-one']) {
    const v = src.dashcam[`${m}|${framing}|${c}|${rel}`];
    if (!v) continue;
    o.n += v.of - v.picked;
    o.of += v.of;
    o.refused += v.refused;
  }
  return o;
}
/** Dilemma framing ("who do you save?"): spared the people, of answers. */
function spared(src: any, m: string): Count {
  const o = { n: 0, of: 0, refused: 0 };
  for (const c of ['two', 'group-one']) {
    const v = src.dashcam[`${m}|dilemma|${c}|none`];
    if (!v) continue;
    o.n += v.picked;
    o.of += v.of;
    o.refused += v.refused;
  }
  return o;
}
const live = (src: any, m: string): Count | null => {
  const v = src.live[`${m}|ops`];
  return v ? { n: v.picked, of: v.of } : null;
};

const camera = [...VISION, ...CHAT].map((m) => {
  const chat = CHAT.includes(m);
  const runs = chat ? [S2] : [R1, R2];
  return {
    id: m,
    atWorkers: runs.map((s) => routed(s, m, 'ops', 'conflict')),
    awayFromWorkers: runs.map((s) => routed(s, m, 'ops', 'aligned')),
    safetyRule: runs.map((s) => routed(s, m, 'ops-safety', 'conflict')),
    brakeFault: runs.map((s) => routed(s, m, 'ops-nostop', 'conflict')),
    dilemmaSpared: runs.map((s) => spared(s, m)),
    calledLive: runs.map((s) => live(s, m)),
  };
});

/** Diagram vs words, lever already heading for fewer people (1 vs 2, 1 vs 5): pulled into more. */
function leverUp(src: any, m: string) {
  const words = (c: string) =>
    ['switch:1v2', 'switch:1v5'].reduce(
      (o, it) => {
        const v = src.image[`${m}|${c}|switch|${it}`];
        return v ? { n: o.n + v.of - v.picked, of: o.of + v.of } : o;
      },
      { n: 0, of: 0 },
    );
  const w = (g: string) => {
    const v = src.imageWrong[`${m}|switch-up|${g}`];
    return v ? { n: v.picked, of: v.of } : { n: 0, of: 0 };
  };
  const fork = (g: string) => {
    const v = src.imageWrong[`${m}|two-side|${g}`];
    return v ? { n: v.picked, of: v.of } : { n: 0, of: 0 };
  };
  const forkWords = ['text_outcomes', 'text_scene'].map((c) =>
    Object.entries(src.image as Record<string, any>)
      .filter(([k]) => k.startsWith(`${m}|${c}|two-side|`))
      .reduce((o, [, v]) => ({ n: o.n + v.of - v.picked, of: o.of + v.of }), { n: 0, of: 0 }),
  );
  return {
    wordsOutcomes: words('text_outcomes'),
    wordsOnly: words('text_scene'),
    diagram: w('all'),
    diagramUnderstood: w('understood'),
    forkWordsOutcomes: forkWords[0],
    forkWordsOnly: forkWords[1],
    forkDiagram: fork('all'),
    forkDiagramUnderstood: fork('understood'),
  };
}
const pictures = [...VISION, ...CHAT].map((m) => ({
  id: m,
  runs: CHAT.includes(m) ? [leverUp(S2, m)] : both((s) => leverUp(s, m)),
}));

/** Says it is wrong, does it anyway: took the action, and of those, called it unacceptable in a separate call. */
const SAYDO = [
  'transplant',
  'footbridge',
  'trapdoor',
  'loop',
  'switch',
  'control-kill-for-nothing',
  'control-kill-five-save-one',
];
const sayDo = [...DECISION, ...CHAT].map((m) => ({
  id: m,
  runs: (CHAT.includes(m) ? [S2] : [R1, R2]).map((s) =>
    Object.fromEntries(
      SAYDO.map((d) => {
        const v = s.sayDo[`${m}|${d}`];
        return [d, v ? { acted: v.acted, calledWrong: v.actedWrong, of: v.of, saidWrongOverall: v.saidWrong } : null];
      }),
    ),
  ),
}));

/** Threshold of harm: acted in N of 8 at each number of lives, per classic dilemma. */
const DILEMMAS = ['switch', 'loop', 'trapdoor', 'footbridge', 'transplant'];
const dilemmas = [...DECISION, ...CHAT].map((m) => ({
  id: m,
  runs: (CHAT.includes(m) ? [S2] : [R1, R2]).map((s) =>
    Object.fromEntries(
      DILEMMAS.map((d) => [
        d,
        Object.entries(s.dilemmas as Record<string, any>)
          .filter(([k]) => k.startsWith(`${m}|${d}|`))
          .map(([k, v]) => ({ lives: Number(k.split('|')[2]), n: v.picked, of: v.of }))
          .sort((a, b) => a.lives - b.lives),
      ]),
    ),
  ),
}));

/** Basic checks: kills for no reason, kills five to save one, of 8. First-button habit on equal-people questions. */
const checks = [...DECISION, ...CHAT].map((m) => ({
  id: m,
  runs: (CHAT.includes(m) ? [S2] : [R1, R2]).map((s) => ({
    killForNothing: {
      n: s.controls[`${m}|control-kill-for-nothing`].picked,
      of: s.controls[`${m}|control-kill-for-nothing`].of,
    },
    killFive: {
      n: s.controls[`${m}|control-kill-five-save-one`].picked,
      of: s.controls[`${m}|control-kill-five-save-one`].of,
    },
    firstButtonEven: s.firstButtonEven[m] ? { n: s.firstButtonEven[m].picked, of: s.firstButtonEven[m].of } : null,
  })),
}));

/** Repeatability: trait counts (N of 16) compared between runs, per decision model. */
const side = (p: number, of: number) => (p * 2 > of ? 1 : p * 2 < of ? -1 : 0);
const repeat = DECISION.map((m) => {
  let cells = 0;
  let same = 0;
  let flips = 0;
  let moved4 = 0;
  for (const [k, ts] of Object.entries(R1.traits as Record<string, any[]>)) {
    if (!k.startsWith(`${m}|`)) continue;
    ts.forEach((x, i) => {
      const y = R2.traits[k][i];
      cells++;
      if (x.picked === y.picked) same++;
      if (side(x.picked, x.of) * side(y.picked, y.of) < 0) flips++;
      if (Math.abs(x.picked - y.picked) >= 4) moved4++;
    });
  }
  return { id: m, cells, same, flips, moved4 };
});

/** League tables: each group meets every other group one vs one (men and women), 16 versions each. Wins of all. */
const GROUPS: Record<string, string[]> = {
  race: ['Black', 'White', 'Asian', 'Hispanic', 'Middle Eastern'],
  nationality: [
    'American',
    'British',
    'German',
    'French',
    'Italian',
    'Japanese',
    'Chinese',
    'Indian',
    'Pakistani',
    'Brazilian',
    'Nigerian',
  ],
  religion: ['Christian', 'Muslim', 'Jewish', 'Hindu', 'atheist'],
  disability: ['blind', 'deaf', 'in a wheelchair', 'no disability'],
  age: ['8', '16', '35', '80'],
  wealth: ['poor', 'middle-class', 'wealthy'],
};
const label = (trait: string, g: string, sex: string) =>
  trait === 'disability'
    ? g === 'no disability'
      ? `${sex} with no disability`
      : g === 'in a wheelchair'
        ? `${sex} in a wheelchair`
        : `${g} ${sex}`
    : trait === 'age'
      ? `${Number(g) < 18 ? (sex === 'man' ? 'boy' : 'girl') : sex} aged ${g}`
      : `${g} ${sex}`;
function league(src: any, m: string, trait: string) {
  const G = GROUPS[trait]!;
  return G.map((g) => {
    let n = 0;
    let of = 0;
    for (const o of G) {
      if (o === g) continue;
      for (const sex of ['man', 'woman']) {
        const k1 = `${m}|parity-${trait}|${label(trait, g, sex)}|${label(trait, o, sex)}`;
        const k2 = `${m}|parity-${trait}|${label(trait, o, sex)}|${label(trait, g, sex)}`;
        const x = src.traits[k1]?.[2] ?? src.traits[k2]?.[2];
        if (!x) continue;
        n += src.traits[k1] ? x.picked : x.of - x.picked;
        of += x.of;
      }
    }
    return { group: g, n, of };
  });
}
const leagues = Object.fromEntries(
  Object.keys(GROUPS).map((t) => [
    t,
    [...DECISION, ...CHAT].map((m) => ({
      id: m,
      runs: (CHAT.includes(m) ? [S2] : [R1, R2]).map((s) => league(s, m, t)),
    })),
  ]),
);

export function build() {
  return {
    built: 'scripts/present-data.ts',
    source: 'results/final/headlines.json',
    ratios: H.ratios,
    models,
    camera,
    pictures,
    sayDo,
    dilemmas,
    checks,
    repeat,
    groups: GROUPS,
    leagues,
  };
}
export const dataModule = (d = build()) =>
  `// Generated by scripts/present-data.ts from results/final/headlines.json. Do not edit.\nwindow.PRESENT = ${JSON.stringify(d)};\n`;

if (import.meta.url === `file://${process.argv[1]}`) {
  mkdirSync('site/present', { recursive: true });
  const out = dataModule();
  writeFileSync('site/present/data.js', out);
  console.log(`site/present/data.js · ${(out.length / 1024).toFixed(0)} KB`);
}
