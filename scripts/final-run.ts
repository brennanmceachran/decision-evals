// Final study runner (FINAL-RUN-PLAN.md). Every job × every eligible model, main question then each probe group in its
// own call. Resumable: each call is cached on disk under .cache/final/<run namespace>/, keyed by model, host and
// everything the model sees, so re-running fills gaps and never repeats a paid call. Answers and errors go to separate
// files; a completeness report says what is missing.
//
// Usage:
//   tsx --env-file=.env scripts/final-run.ts --dry                      count jobs and calls, estimate cost; no API calls
//   tsx --env-file=.env scripts/final-run.ts --smoke --tag smoke        one stratified job per model per part, live
//   tsx --env-file=.env scripts/final-run.ts --tag final                the full run
// Options: --parts text,image,dashcam  --only <substring>  --category decision,chat,frontier  --limit N
//          --sample <fraction>  (stratified slice)  --concurrency 16  --namespace <cache namespace>
import { createHash, randomUUID } from 'node:crypto';
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { allJobs, designHash, type Job, type Part } from '../src/final/jobs.js';
import { ask, CallError, type CallRecord } from '../src/final/call.js';
import { FINAL_SUBJECTS, type Category, type FinalSubject } from '../src/final/subjects.js';

const arg = (n: string) =>
  process.argv.includes(`--${n}`) ? process.argv[process.argv.indexOf(`--${n}`) + 1] : undefined;
const flag = (n: string) => process.argv.includes(`--${n}`);
const dry = flag('dry');
const smoke = flag('smoke');
const tag = arg('tag') ?? (smoke ? 'smoke' : 'final');
const parts = (arg('parts')?.split(',') ?? ['harm', 'text', 'image', 'dashcam']) as Part[];
const categories = (arg('category')?.split(',') ?? ['decision', 'chat']) as Category[];
const only = arg('only');
const limit = arg('limit') ? Number(arg('limit')) : undefined;
/** At most this many jobs per model (after --smoke/--sample), e.g. a cheap feasibility check of frontier models. */
const perModel = arg('per-model') ? Number(arg('per-model')) : undefined;
const sample = arg('sample') ? Number(arg('sample')) : undefined;
const concurrency = Number(arg('concurrency') ?? 16);
/** Cache namespace: a fresh one for the final run so nothing from the pilots or smoke tests is reused. */
const namespace = arg('namespace') ?? tag;
const CACHE = `.cache/final/${namespace}`;
const RETRIES = 6;
const TIMEOUT_MS = 120_000;

const sha = (s: string) => createHash('sha256').update(s).digest('hex');
const subjects = FINAL_SUBJECTS.filter((s) => categories.includes(s.category)).filter(
  (s) => !only || s.id.includes(only),
);
const eligible = (s: FinalSubject, j: Job) => !j.vision || !!s.image;

// ---------- Jobs: full design, a stratified sample, or the smoke set (one per model per part per stratum).
const all = allJobs(parts);
/** Strata: the grouping that must be represented in any slice. */
const stratum = (j: Job) =>
  j.part === 'harm'
    ? `harm|${j.meta.scene}|${j.meta.prefix}`
    : j.part === 'text'
      ? `text|${j.meta.dilemma}`
      : j.part === 'image'
        ? `image|${j.meta.condition}|${j.meta.design}`
        : `dashcam|${j.meta.framing}|${j.meta.content}`;
function pick(jobs: Job[]): Job[] {
  if (smoke) {
    // One job per stratum, chosen deterministically (lowest id hash), so smoke runs are reproducible.
    const by = new Map<string, Job>();
    for (const j of jobs) {
      const k = stratum(j);
      const cur = by.get(k);
      if (!cur || sha(j.id) < sha(cur.id)) by.set(k, j);
    }
    return [...by.values()];
  }
  if (sample) return jobs.filter((j) => parseInt(sha(`slice|${j.id}`).slice(0, 8), 16) / 0xffffffff < sample);
  return jobs;
}
const jobs = pick(all);
const work = subjects
  .flatMap((s) =>
    jobs
      .filter((j) => eligible(s, j))
      .slice(0, perModel)
      .map((j) => [s, j] as const),
  )
  .slice(0, limit);
const callsPer = (j: Job) => 1 + Object.keys(j.probes).length;

// ---------- Dry run: counts and a cost estimate from the pilots' measured cost per call.
if (dry) {
  const perPart = (p: Part) => all.filter((j) => j.part === p);
  console.log(`design ${designHash(all)} · ${all.length} jobs`);
  for (const p of parts) {
    const js = perPart(p);
    const strata = new Set(js.map(stratum)).size;
    console.log(`  ${p.padEnd(8)} ${String(js.length).padStart(6)} jobs, ${strata} strata`);
  }
  const fullWork = subjects.flatMap((s) => all.filter((j) => eligible(s, j)).map((j) => [s, j] as const));
  const calls = fullWork.reduce((n, [, j]) => n + callsPer(j), 0);
  console.log(`\nmodels ${subjects.length} (${categories.join(', ')}) · answers ${fullWork.length} · calls ${calls}`);
  const byModel = new Map<string, { jobs: number; calls: number }>();
  for (const [s, j] of fullWork) {
    const m = byModel.get(s.id) ?? { jobs: 0, calls: 0 };
    m.jobs++;
    m.calls += callsPer(j);
    byModel.set(s.id, m);
  }
  for (const [id, m] of byModel)
    console.log(`  ${id.padEnd(42)} ${String(m.jobs).padStart(6)} answers  ${String(m.calls).padStart(6)} calls`);
  if (sample) console.log(`\nslice ${sample}: ${work.length} answers`);
  process.exit(0);
}

// ---------- Live run.
mkdirSync(CACHE, { recursive: true });
mkdirSync('results/final', { recursive: true });
const runId = `${tag}-${new Date().toISOString().replace(/[:.]/g, '-')}-${randomUUID().slice(0, 8)}`;
const out = `results/final/${tag}.jsonl`;
const errOut = `results/final/${tag}.errors.jsonl`;
writeFileSync(out, '');
writeFileSync(errOut, '');
const git = (c: string) => execSync(`git ${c}`, { encoding: 'utf8' }).trim();
writeFileSync(
  `results/final/${tag}.manifest.json`,
  JSON.stringify(
    {
      runId,
      tag,
      namespace,
      createdAt: new Date().toISOString(),
      git: { commit: git('rev-parse HEAD'), dirty: git('status --porcelain').length > 0 },
      design: designHash(all),
      parts,
      smoke,
      sample: sample ?? null,
      subjects: subjects.map(({ id, category, route, host, image }) => ({ id, category, route, host, image })),
      jobs: jobs.length,
      answersPlanned: work.length,
    },
    null,
    1,
  ),
);

const cacheFile = (s: FinalSubject, j: Job, call: string) =>
  `${CACHE}/${sha(`final1|${s.id}|${s.route}|${s.host ?? ''}|${(s.gatewayOnly ?? []).join(',')}|${j.id}|${call}|${JSON.stringify(call === 'main' ? j.main : j.probes[call])}`).slice(0, 32)}.json`;

async function cachedAsk(s: FinalSubject, j: Job, call: string, questions: Parameters<typeof ask>[2]) {
  const f = cacheFile(s, j, call);
  if (existsSync(f)) return { rec: JSON.parse(readFileSync(f, 'utf8')) as CallRecord, cached: true, attempts: 0 };
  let last: unknown;
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const rec = await ask(s, j.state, questions, AbortSignal.timeout(TIMEOUT_MS));
      writeFileSync(f, JSON.stringify(rec));
      return { rec, cached: false, attempts: attempt };
    } catch (e) {
      last = e;
      const retryable =
        e instanceof CallError
          ? e.retryable
          : (e as Error).name === 'TimeoutError' || /fetch failed|ECONN|socket/i.test(String(e));
      if (!retryable || attempt === RETRIES) break;
      // Rate limits get a longer wait than transient errors: 5 s, 10 s, 20 s, … capped at 60 s.
      const rate = e instanceof CallError && e.status === 429;
      await new Promise((r) => setTimeout(r, Math.min(60_000, (rate ? 5000 : 2000) * 2 ** (attempt - 1))));
    }
  }
  throw last;
}

let done = 0;
let errors = 0;
let spent = 0;
const t0 = Date.now();
const queue = [...work];
await Promise.all(
  [...Array(concurrency)].map(async () => {
    for (let w = queue.shift(); w; w = queue.shift()) {
      const [s, j] = w;
      try {
        const main = await cachedAsk(s, j, 'main', { act: { type: 'choice', ...j.main } });
        const probes: Record<string, { rec: CallRecord; cached: boolean }> = {};
        for (const [g, qs] of Object.entries(j.probes)) {
          // Every model answers the probes in the final study (the pilots skipped them for chat models).
          probes[g] = await cachedAsk(s, j, g, qs);
        }
        const a = main.rec.answers.act!;
        const pFocal = a.refused ? null : j.focalKeys.reduce((sum, k) => sum + (a.probabilities[k] ?? 0), 0);
        const fresh = [main, ...Object.values(probes)].filter((x) => !x.cached);
        spent += fresh.reduce((sum, x) => sum + (x.rec.costUsd ?? 0), 0);
        appendFileSync(
          out,
          JSON.stringify({
            runId,
            model: s.id,
            category: s.category,
            host: s.host ?? null,
            job: j.id,
            part: j.part,
            ...j.meta,
            refused: a.refused,
            choice: a.choice,
            pFocal,
            probabilities: a.probabilities,
            samples: main.rec.samples?.act ?? null,
            probes: Object.fromEntries(Object.entries(probes).map(([g, p]) => [g, p.rec.answers])),
            provider: main.rec.provider,
            servedModel: main.rec.servedModel,
            generationId: main.rec.generationId,
            startedAt: main.rec.startedAt,
            latencyMs: main.rec.latencyMs,
            inputTokens: main.rec.inputTokens,
            reasoningTokens: main.rec.reasoningTokens,
            costUsd: main.rec.costUsd + Object.values(probes).reduce((sum, p) => sum + p.rec.costUsd, 0),
            cached: main.cached,
            attempts: main.attempts,
            ...(j.variant
              ? { variant: { id: j.variant.variantId, point: j.variant.point, keyToCanonical: j.keyToCanonical } }
              : {}),
          }) + '\n',
        );
      } catch (e) {
        errors++;
        appendFileSync(
          errOut,
          JSON.stringify({
            runId,
            model: s.id,
            job: j.id,
            part: j.part,
            at: new Date().toISOString(),
            status: e instanceof CallError ? e.status : null,
            error: String((e as Error).message ?? e).slice(0, 500),
            body: e instanceof CallError ? e.body.slice(0, 1000) : null,
          }) + '\n',
        );
      }
      if (++done % 200 === 0 || done === work.length)
        console.log(
          `${done}/${work.length} · ${errors} errors · $${spent.toFixed(4)} · ${((Date.now() - t0) / 1000).toFixed(0)}s`,
        );
    }
  }),
);

// ---------- Completeness report: expected vs received, per model and part.
const rows = readFileSync(out, 'utf8')
  .split('\n')
  .filter(Boolean)
  .map((l) => JSON.parse(l));
const errs = readFileSync(errOut, 'utf8')
  .split('\n')
  .filter(Boolean)
  .map((l) => JSON.parse(l));
const report: Record<
  string,
  Record<string, { expected: number; answered: number; refused: number; errors: number; providers: string[] }>
> = {};
for (const [s, j] of work) {
  const m = (report[s.id] ??= {});
  const p = (m[j.part] ??= { expected: 0, answered: 0, refused: 0, errors: 0, providers: [] });
  p.expected++;
}
for (const r of rows) {
  const p = report[r.model]![r.part]!;
  if (r.refused) p.refused++;
  else p.answered++;
  if (r.provider && !p.providers.includes(r.provider)) p.providers.push(r.provider);
}
for (const e of errs) report[e.model]![e.part]!.errors++;
writeFileSync(`results/final/${tag}.completeness.json`, JSON.stringify({ runId, spentUsd: spent, report }, null, 1));
console.log(`\ndone ${done} · ${rows.length} rows · ${errs.length} errors · $${spent.toFixed(4)} → ${out}`);
for (const [m, ps] of Object.entries(report))
  console.log(
    `  ${m.padEnd(42)} ${Object.entries(ps)
      .map(
        ([p, c]) =>
          `${p} ${c.answered}+${c.refused}r/${c.expected}${c.errors ? ` ${c.errors}err` : ''} [${c.providers.join(',')}]`,
      )
      .join('  ')}`,
  );
