// Realistic study runner (PREREGISTRATION-REAL.md): every trial × every vision model. Three separate calls per trial:
// the main choice alone, then the count probes, then the "live or test?" probe, so neither probe can influence the
// choice. Resumable disk cache. Writes results/real-<tag>.jsonl.
// Usage: tsx --env-file=.env scripts/real-run.ts --tag v1 [--only substr] [--limit N] [--concurrency 8]
import { createHash } from 'node:crypto';
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { AWARENESS_PROBE, COUNT_PROBES, dataUrl, realTrials, type RealTrial } from '../src/real-study.js';
import { SUBJECTS, type Subject } from '../src/subjects.js';
import { ask, canSeeImages, type Question, type VisionAnswer } from '../src/vision.js';

const arg = (n: string) =>
  process.argv.includes(`--${n}`) ? process.argv[process.argv.indexOf(`--${n}`) + 1] : undefined;
const tag = arg('tag') ?? 'pilot';
const only = arg('only');
const limit = arg('limit') ? Number(arg('limit')) : undefined;
const concurrency = Number(arg('concurrency') ?? 8);
const CACHE_DIR = '.cache/real-study';
mkdirSync(CACHE_DIR, { recursive: true });

const subjects: Subject[] = SUBJECTS.filter(canSeeImages).filter((s) => !only || s.id.includes(only));
const key = (s: Subject, t: RealTrial, kind: string) =>
  `${CACHE_DIR}/${createHash('sha256')
    .update(`v1|${s.id}|${s.host ?? ''}|${t.id}|${kind}`)
    .digest('hex')
    .slice(0, 24)}.json`;
async function cached(path: string, fn: () => Promise<Record<string, VisionAnswer>>) {
  if (existsSync(path)) return { v: JSON.parse(readFileSync(path, 'utf8')) as Record<string, VisionAnswer>, hit: true };
  const v = await fn();
  writeFileSync(path, JSON.stringify(v));
  return { v, hit: false };
}

async function runOne(s: Subject, t: RealTrial) {
  const state = { kind: 'text+image' as const, text: t.text, url: dataUrl(t.image) };
  const call = (kind: string, q: Record<string, Question>) => cached(key(s, t, kind), () => ask(s, state, q));
  const main = await call('main', { act: { type: 'choice', instructions: t.question, criteria: t.criteria } });
  const counts = await call('counts', COUNT_PROBES);
  const aware = await call('aware', AWARENESS_PROBE);
  const a = main.v.act!;
  const pLeft = a.refused ? null : (a.probabilities.route_left ?? 0);
  const spent = [main, counts, aware].reduce((sum, c) => sum + (c.hit ? 0 : (Object.values(c.v)[0]?.cost ?? 0)), 0);
  return {
    model: s.id,
    host: s.host ?? null,
    servedBy: a.servedBy ?? null,
    trial: t.id,
    plate: t.plate,
    content: t.content,
    mirror: t.mirror,
    framing: t.framing,
    scheduled: t.scheduled ?? null,
    wording: t.wording,
    order: t.order,
    people: t.people,
    fewer: t.fewer ?? null,
    relation: t.relation ?? null,
    refused: !!a.refused,
    choice: a.refused ? null : a.choice,
    pLeft,
    counts: [Number(counts.v.count_left?.choice), Number(counts.v.count_right?.choice)],
    countsCorrect:
      Number(counts.v.count_left?.choice) === t.people[0] && Number(counts.v.count_right?.choice) === t.people[1],
    pLive: aware.v.setting?.refused ? null : (aware.v.setting?.probabilities.live ?? null),
    cost: spent,
  };
}

const jobs = subjects.flatMap((s) => realTrials().map((t) => [s, t] as const)).slice(0, limit);
const out = `results/real-${tag}.jsonl`;
writeFileSync(out, '');
let done = 0,
  errors = 0,
  cost = 0;
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
          JSON.stringify({ model: s.id, trial: t.id, error: (e as Error).message.slice(0, 300) }) + '\n',
        );
      }
      if (++done % 100 === 0) console.log(`${done}/${jobs.length} · ${errors} errors · $${cost.toFixed(3)}`);
    }
  }),
);
console.log(`done: ${done} rows, ${errors} errors, $${cost.toFixed(3)} → ${out}`);
