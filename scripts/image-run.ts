// Image study runner: every trial × every eligible model, main choice and perception probes as separate calls.
// Resumable: each answer is cached on disk by (model, host, trial id, call kind, CACHE_VERSION), so re-running only
// fills gaps. Writes results/image-<tag>.jsonl (one line per trial × model).
// Usage: tsx --env-file=.env scripts/image-run.ts --tag pilot [--only substr] [--limit N] [--concurrency 8]
import { createHash } from 'node:crypto';
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { trials, type Trial } from '../src/image-study.js';
import { SUBJECTS, type Subject } from '../src/subjects.js';
import { ask, canSeeImages, type VisionAnswer } from '../src/vision.js';

const arg = (n: string) =>
  process.argv.includes(`--${n}`) ? process.argv[process.argv.indexOf(`--${n}`) + 1] : undefined;
const tag = arg('tag') ?? 'pilot';
const only = arg('only');
const limit = arg('limit') ? Number(arg('limit')) : undefined;
const concurrency = Number(arg('concurrency') ?? 8);
const CACHE_VERSION = 1;
const CACHE_DIR = '.cache/image-study';

/** Models in the study (PREREGISTRATION.md, image study): vision-capable and not excluded by the perception check. */
export const EXCLUDED: Record<string, string> = {
  'cloudflare/clef-omni': 'failed diagram perception check (18/33)',
};
/** Per-model cap on people per side, from the perception check. */
export const MAX_COUNT: Record<string, number> = {};

const subjects: Subject[] = SUBJECTS.filter(canSeeImages).filter(
  (s) => !(s.id in EXCLUDED) && (!only || s.id.includes(only)),
);

mkdirSync(CACHE_DIR, { recursive: true });
const cachePath = (s: Subject, t: Trial, kind: 'main' | 'probes') =>
  `${CACHE_DIR}/${createHash('sha256')
    .update(`v${CACHE_VERSION}|${s.id}|${s.host ?? ''}|${t.id}|${kind}`)
    .digest('hex')
    .slice(0, 24)}.json`;

async function cached<T>(path: string, fn: () => Promise<T>): Promise<{ v: T; hit: boolean }> {
  if (existsSync(path)) return { v: JSON.parse(readFileSync(path, 'utf8')), hit: true };
  const v = await fn();
  writeFileSync(path, JSON.stringify(v));
  return { v, hit: false };
}

/** Normalise a choice answer to P(focal). Refused → undefined. */
const pFocal = (a: VisionAnswer | undefined, focal: string) =>
  !a || a.refused ? undefined : (a.probabilities[focal] ?? 0);

async function runOne(s: Subject, t: Trial) {
  const main = await cached(cachePath(s, t, 'main'), () =>
    ask(s, t.state, { act: { type: 'choice', instructions: t.question, criteria: t.criteria } }),
  );
  const probes = Object.keys(t.probes).length
    ? await cached(cachePath(s, t, 'probes'), () =>
        ask(
          s,
          t.state,
          Object.fromEntries(
            Object.entries(t.probes).map(([k, p]) => [
              k,
              { type: 'choice' as const, instructions: p.instructions, criteria: p.criteria },
            ]),
          ),
        ),
      )
    : undefined;
  const a = main.v.act;
  return {
    model: s.id,
    host: s.host ?? null,
    servedBy: a?.servedBy ?? null,
    trial: t.id,
    item: t.item,
    design: t.design,
    a: t.a,
    b: t.b,
    mirror: t.mirror,
    order: t.order,
    condition: t.condition,
    focalKey: t.focalKey,
    refused: !!a?.refused,
    pFocal: pFocal(a, t.focalKey),
    choice: a?.choice ?? null,
    probabilities: a?.probabilities ?? null,
    probes: probes
      ? Object.fromEntries(
          Object.entries(t.probes).map(([k, p]) => [
            k,
            { answer: p.answer, choice: probes.v[k]?.choice ?? null, correct: probes.v[k]?.choice === p.answer },
          ]),
        )
      : null,
    cost: (main.hit ? 0 : (a?.cost ?? 0)) + (probes && !probes.hit ? (Object.values(probes.v)[0]?.cost ?? 0) : 0),
  };
}

const all = trials();
const jobs = subjects
  .flatMap((s) => all.filter((t) => Math.max(t.a, t.b) <= (MAX_COUNT[s.id] ?? 20)).map((t) => [s, t] as const))
  .slice(0, limit);
const out = `results/image-${tag}.jsonl`;
mkdirSync('results', { recursive: true });
writeFileSync(out, '');
let done = 0,
  errors = 0,
  cost = 0;
const t0 = Date.now();
const queue = [...jobs];
await Promise.all(
  [...Array(concurrency)].map(async () => {
    for (let job = queue.shift(); job; job = queue.shift()) {
      const [s, t] = job;
      try {
        const row = await runOne(s, t);
        cost += row.cost;
        appendFileSync(out, JSON.stringify(row) + '\n');
      } catch (e) {
        errors++;
        appendFileSync(
          out,
          JSON.stringify({
            model: s.id,
            trial: t.id,
            item: t.item,
            condition: t.condition,
            error: (e as Error).message.slice(0, 300),
          }) + '\n',
        );
      }
      if (++done % 50 === 0)
        console.log(
          `${done}/${jobs.length} · ${errors} errors · $${cost.toFixed(3)} · ${Math.round((Date.now() - t0) / 1000)}s`,
        );
    }
  }),
);
console.log(`done: ${done} rows, ${errors} errors, $${cost.toFixed(3)} new spend → ${out}`);
console.log(`models: ${subjects.map((s) => s.id).join(', ')}`);
