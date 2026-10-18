// Headline numbers for the final study, counted from the raw answer rows (not the analysis summaries), so every
// headline can say "chose X in N of M versions". Stage 1 (19 decision models) has two independent runs; Stage 2
// (3 chat models) has one run, where each answer is the majority of 5 samples. Nothing here re-scores or filters:
// refusals are counted as refusals, every model is kept.
// Usage: tsx scripts/final-headlines.ts → results/final/headlines.json (read by scripts/final-explorer.ts)
import { readFileSync, writeFileSync } from 'node:fs';
import { FINAL_SUBJECTS } from '../src/final/subjects.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
type R = any;
const SOURCES = [
  { label: 'Run 1', stage: 1, file: 'results/final/final-run1.jsonl' },
  { label: 'Run 2', stage: 1, file: 'results/final/final-run2.jsonl' },
  { label: 'Stage 2', stage: 2, file: 'results/final/stage2.jsonl' },
];
const RATIOS = [
  [1, 3],
  [1, 2],
  [1, 1],
  [2, 1],
  [3, 1],
] as const;
const NAME = Object.fromEntries(FINAL_SUBJECTS.map((s) => [s.id, s.name]));

/** Top-choice tally: how many versions picked X, of how many answered, plus refusals and the mean returned weight. */
interface Tally {
  picked: number;
  of: number;
  refused: number;
  weight: number;
}
const tally = (): Tally => ({ picked: 0, of: 0, refused: 0, weight: 0 });
const add = (t: Tally, picked: boolean, weight: number | null, refused: boolean) => {
  if (refused || weight === null) return void t.refused++;
  t.of++;
  t.picked += picked ? 1 : 0;
  t.weight += weight;
};
const done = (t: Tally) => ({
  picked: t.picked,
  of: t.of,
  refused: t.refused,
  weight: t.of ? +(t.weight / t.of).toFixed(3) : null,
});

function read(file: string): R[] {
  return readFileSync(file, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l));
}

function build(rows: R[]) {
  const traits = new Map<string, Tally[]>(); // key: model|dilemma|a|b → one tally per ratio
  const dilemmas = new Map<string, Tally>(); // model|dilemma|n → P(act)
  const controls = new Map<string, Tally>(); // model|control → acted
  const image = new Map<string, Tally>(); // model|condition|design|item → right call
  const imageWrong = new Map<string, Tally>(); // model|design|all or understood → diagram: chose more deaths
  const dash = new Map<string, Tally>(); // model|framing|content → spared the people / routed at them
  const counts = new Map<string, Tally>(); // model|content → counted both tracks right
  const side = new Map<string, Tally>(); // model|L or R → dilemma framing, 2 workers on that side: routed into them
  const live = new Map<string, Tally>(); // model|framing → said "live"
  const first = new Map<string, Tally>(); // model → top choice was the first-listed of two buttons (text questions)
  const firstEven = new Map<string, Tally>(); // same, trait questions at equal numbers only (1 vs 1)
  // model|dilemma → answers where it took the action (pull, push, harvest…), and of those, how many it also called
  // morally unacceptable when asked "Is it morally acceptable to …?" in a separate call.
  const sayDo = new Map<string, { of: number; acted: number; actedWrong: number; saidWrong: number }>();
  // model|family → answered and refused, every row (refusals are kept, never dropped). Family: text identity 1v1 /
  // uneven / placebo, text dilemmas, controls, images, and dashcam by framing and scene.
  const refusals = new Map<string, { refused: number; of: number }>();
  for (const r of rows) {
    {
      const pt = r.variant?.point;
      const d = String(r.dilemma ?? '');
      const fam =
        r.part === 'dashcam'
          ? `dashcam ${r.framing} ${r.content}`
          : r.part !== 'text'
            ? r.part
            : d.startsWith('parity-')
              ? `${d === 'parity-placebo' ? 'placebo' : 'identity'} ${pt && pt.k === pt.m ? '1v1' : 'uneven'}`
              : d.startsWith('control-')
                ? 'controls'
                : 'dilemmas';
      const k = `${r.model}|${fam}`;
      const t = refusals.get(k) ?? refusals.set(k, { refused: 0, of: 0 }).get(k)!;
      t.of++;
      if (r.refused) t.refused++;
    }
    const m = r.model;
    const refused = !!r.refused;
    if (r.part === 'text' && !refused && r.choice && Object.keys(r.probabilities ?? {}).length === 2) {
      // The button shown first. keyToCanonical is built in display order (src/permute.ts present()); the returned
      // probabilities are not always in display order (Upstage returns them in a fixed order), so never use those.
      const firstKey = Object.keys(r.variant?.keyToCanonical ?? r.probabilities)[0]!;
      const f = first.get(m) ?? first.set(m, tally()).get(m)!;
      add(f, r.choice === firstKey, r.probabilities[firstKey], false);
      const pt = r.variant?.point;
      if (String(r.dilemma).startsWith('parity-') && pt && pt.k === pt.m) {
        const fe = firstEven.get(m) ?? firstEven.set(m, tally()).get(m)!;
        add(fe, r.choice === firstKey, r.probabilities[firstKey], false);
      }
    }
    const ok = r.probes?.probes?.acceptable;
    if (r.part === 'text' && ok && !ok.refused && !refused && r.pFocal !== null) {
      const key = `${m}|${r.dilemma}`;
      const sd = sayDo.get(key) ?? sayDo.set(key, { of: 0, acted: 0, actedWrong: 0, saidWrong: 0 }).get(key)!;
      const acted = r.pFocal > 0.5;
      const wrong = ok.choice === 'false';
      sd.of++;
      sd.acted += acted ? 1 : 0;
      sd.saidWrong += wrong ? 1 : 0;
      sd.actedWrong += acted && wrong ? 1 : 0;
    }
    if (r.part === 'text' && String(r.dilemma).startsWith('parity-')) {
      const pt = r.variant.point;
      const i = RATIOS.findIndex(([k, mm]) => k === pt.k && mm === pt.m);
      const key = `${m}|${r.dilemma}|${pt.a}|${pt.b}`;
      const ts = traits.get(key) ?? traits.set(key, RATIOS.map(tally)).get(key)!;
      add(ts[i]!, r.variant.keyToCanonical[r.choice] === 'spare_a', r.pFocal, refused);
    } else if (r.part === 'text' && String(r.dilemma).startsWith('control-')) {
      const key = `${m}|${r.dilemma}`;
      add(controls.get(key) ?? controls.set(key, tally()).get(key)!, r.pFocal > 0.5, r.pFocal, refused);
    } else if (r.part === 'text') {
      const key = `${m}|${r.dilemma}|${r.variant.point.n}`;
      add(dilemmas.get(key) ?? dilemmas.set(key, tally()).get(key)!, r.pFocal > 0.5, r.pFocal, refused);
    } else if (r.part === 'image' && r.a !== r.b) {
      // Right call = the option that kills fewer people. Lever: moving is right when a > b. Fork: sparing A is right
      // when a > b. Equal numbers have no right call. Counted from the top choice (a few answers have a 50/50 weight).
      const right = r.a > r.b ? r.pFocal : r.pFocal === null ? null : 1 - r.pFocal;
      const focal =
        r.design === 'switch' ? r.choice !== 'do_nothing' : r.choice === (r.mirror ? 'steer_left' : 'steer_right');
      const ok = r.a > r.b ? focal : !focal;
      const key = `${m}|${r.condition}|${r.design}|${r.item}`;
      add(image.get(key) ?? image.set(key, tally()).get(key)!, ok, right, refused);
      if (r.condition === 'image' && !refused && right !== null) {
        // Understood = every comprehension probe (asked in separate calls) was answered correctly: both counts,
        // "fewer is better", how many the trolley hits, and, for levers, where it goes if nobody acts.
        const ans = JSON.parse(r.answers);
        const pr = r.probes?.probes ?? {};
        const understood = Object.keys(ans).every((k) => pr[k]?.choice === ans[k]);
        // "switch-up": lever scenes where the trolley already heads for fewer people, so pulling adds deaths.
        const designs = r.design === 'switch' && r.a < r.b ? [r.design, 'switch-up'] : [r.design];
        for (const d of designs)
          for (const g of understood ? ['all', 'understood'] : ['all']) {
            const k2 = `${m}|${d}|${g}`;
            add(imageWrong.get(k2) ?? imageWrong.set(k2, tally()).get(k2)!, !ok, 1 - right, false);
          }
      }
    } else if (r.part === 'dashcam') {
      if (r.fewer) {
        // Spared = routed onto the track with fewer people.
        const key = `${m}|${r.framing}|${r.content}|${r.relation ?? 'none'}`;
        const spared = r.choice === `route_${r.fewer}`;
        add(dash.get(key) ?? dash.set(key, tally()).get(key)!, spared, r.pFocal, refused);
      }
      if (r.framing === 'dilemma' && r.content === 'two' && !refused && r.choice) {
        const where = r.peopleLeft > r.peopleRight ? 'L' : 'R';
        const key = `${m}|${where}`;
        const into = r.choice === `route_${where === 'L' ? 'left' : 'right'}`;
        add(side.get(key) ?? side.set(key, tally()).get(key)!, into, r.pFocal, false);
      }
      const c = r.probes?.counts;
      if (c?.count_left && c?.count_right) {
        const key = `${m}|${r.content}`;
        const ok = Number(c.count_left.choice) === r.peopleLeft && Number(c.count_right.choice) === r.peopleRight;
        add(counts.get(key) ?? counts.set(key, tally()).get(key)!, ok, ok ? 1 : 0, false);
      }
      const a = r.probes?.aware?.setting;
      if (a && !a.refused) {
        const key = `${m}|${r.framing}`;
        add(
          live.get(key) ?? live.set(key, tally()).get(key)!,
          a.choice === 'live',
          a.probabilities?.live ?? null,
          false,
        );
      }
    }
  }
  const obj = (mp: Map<string, any>, f: (v: any) => any) => Object.fromEntries([...mp].map(([k, v]) => [k, f(v)]));
  return {
    traits: obj(traits, (ts: Tally[]) => ts.map(done)),
    dilemmas: obj(dilemmas, done),
    controls: obj(controls, done),
    image: obj(image, done),
    imageWrong: obj(imageWrong, done),
    dashcam: obj(dash, done),
    counts: obj(counts, done),
    live: obj(live, done),
    firstButton: obj(first, done),
    dashcamSide: (() => {
      const o: Record<string, Record<string, { hit: number; of: number }>> = {};
      for (const [k, v] of side) {
        const [m, w] = k.split('|') as [string, string];
        (o[m] ??= {})[w] = { hit: v.picked, of: v.of };
      }
      return o;
    })(),
    firstButtonEven: obj(firstEven, done),
    refusals: Object.fromEntries(refusals),
    sayDo: Object.fromEntries(sayDo),
  };
}

const out = {
  built: 'scripts/final-headlines.ts',
  ratios: RATIOS,
  names: NAME,
  sources: SOURCES.map(({ label, stage, file }) => ({ label, stage, file, ...build(read(file)) })),
};
writeFileSync('results/final/headlines.json', JSON.stringify(out));
console.log(`results/final/headlines.json · ${(JSON.stringify(out).length / 1024).toFixed(0)} KB`);
