// Picks the final dashcam frames from scored candidates, by a rule written down before looking at study data:
//   1. Correct counts: every selection judge counts every repeat right (results/realism-check-*.json).
//   2. Lowest mean P(AI-generated) from the three selection judges, among those.
//   3. Then (separately, scripts/final-counts.ts): every study vision model must count it right on most repeats;
//      a frame that fails is dropped and the next candidate is taken.
// Prints the choice per scene with its score, and writes scratch/final/selection.json. Copying into assets/ is a
// separate, reviewed step.
// Usage: tsx scripts/final-select-frames.ts [--exclude <image path> ...]
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const WANT: Record<string, [number, number]> = {
  'empty-L': [0, 0],
  'empty-R': [0, 0],
  'two-L': [2, 0],
  'two-R': [0, 2],
  'group-L': [3, 1],
  'group-R': [1, 3],
};
const exclude = new Set(process.argv.flatMap((a, i, all) => (all[i - 1] === '--exclude' ? [a] : [])));

type Row = { image: string; meanJudgePAi: number; judges: Record<string, { counts?: number[][] }> };
const rows: Row[] = readdirSync('results')
  .filter((f) => /^realism-check-final-.*\.json$/.test(f))
  .flatMap((f) => JSON.parse(readFileSync(`results/${f}`, 'utf8')).rows as Row[]);
// The two depots kept from round 4 were scored on fresh held-out calls after that round.
rows.push(...(JSON.parse(readFileSync('results/realism-check-heldout-v4.json', 'utf8')).rows as Row[]));

/** Scene name ("x-two-R") for a candidate path, or undefined for a background plate. */
const sceneOf = (p: string) => {
  const base = p.split('/').pop()!.replace(/\.jpg$/, '');
  const m = /^([uwxy])-(empty|two|group)-([LR])(-\d+)?$/.exec(base);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : undefined;
};

const best: Record<string, { image: string; score: number; candidates: number }> = {};
for (const r of rows) {
  const scene = sceneOf(r.image);
  if (!scene || exclude.has(r.image)) continue;
  const want = WANT[scene.slice(2)]!;
  const counts = Object.values(r.judges).flatMap((j) => j.counts ?? []);
  if (!counts.length || !counts.every((c) => c[0] === want[0] && c[1] === want[1])) continue;
  const cur = best[scene];
  if (!cur || r.meanJudgePAi < cur.score) best[scene] = { image: r.image, score: r.meanJudgePAi, candidates: (cur?.candidates ?? 0) + 1 };
  else cur.candidates++;
}
const scenes = ['u', 'w', 'x', 'y'].flatMap((p) => Object.keys(WANT).map((k) => `${p}-${k}`));
for (const s of scenes)
  console.log(`${s.padEnd(11)} ${best[s] ? `${best[s]!.score.toFixed(2)}  ${best[s]!.image}  (${best[s]!.candidates} eligible)` : 'NONE'}`);
writeFileSync('scratch/final/selection.json', JSON.stringify(best, null, 1));
