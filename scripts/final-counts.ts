// Count check for dashcam frames (FINAL-RUN-PLAN.md): every vision model in the final study counts the people on each
// track, REPEATS times per frame, through the same call path the study uses. A frame is usable only if the study's own
// models can read it: no model may be wrong on a majority of its repeats.
// Usage: tsx --env-file=.env scripts/final-counts.ts --tag <tag> <frame.jpg>=<left>,<right> [...]
import { writeFileSync } from 'node:fs';
import { COUNT_PROBES, dataUrl } from '../src/real-study.js';
import { ask, CallError } from '../src/final/call.js';
import { FINAL_SUBJECTS } from '../src/final/subjects.js';

const args = process.argv.slice(2);
const tag = args.includes('--tag') ? args[args.indexOf('--tag') + 1]! : 'counts';
const frames = args
  .filter((a) => a.includes('='))
  .map((a) => {
    const [path, c] = a.split('=');
    const [l, r] = c!.split(',').map(Number);
    return { path: path!, want: [l!, r!] as [number, number] };
  });
const REPEATS = 3;
const onlyArg = args.includes('--only') ? args[args.indexOf('--only') + 1] : undefined;
const models = FINAL_SUBJECTS.filter((s) => s.image && s.category !== 'frontier' && (!onlyArg || s.id.includes(onlyArg)));

const jobs = frames.flatMap((f) => models.flatMap((m) => Array.from({ length: REPEATS }, () => ({ f, m }))));
const out: { image: string; model: string; got: [number, number] | null; ok: boolean; error?: string }[] = [];
let i = 0;
await Promise.all(
  [...Array(16)].map(async () => {
    for (let job = jobs[i++]; job; job = jobs[i++]) {
      const { f, m } = job;
      try {
        let r;
        for (let attempt = 1; ; attempt++) {
          try {
            r = await ask(m, { kind: 'image', url: dataUrl(f.path) }, COUNT_PROBES);
            break;
          } catch (e) {
            // Rate limits and transient errors are retried; anything else is recorded as an error, never a miscount.
            if (attempt >= 6 || !(e instanceof CallError && e.retryable)) throw e;
            await new Promise((res) => setTimeout(res, Math.min(60_000, 5000 * 2 ** (attempt - 1))));
          }
        }
        const got: [number, number] = [Number(r.answers.count_left?.choice), Number(r.answers.count_right?.choice)];
        out.push({ image: f.path, model: m.id, got, ok: got[0] === f.want[0] && got[1] === f.want[1] });
      } catch (e) {
        out.push({ image: f.path, model: m.id, got: null, ok: false, error: String((e as Error).message).slice(0, 200) });
      }
    }
  }),
);

const rows = frames.map((f) => {
  const mine = out.filter((o) => o.image === f.path);
  const perModel = models.map((m) => {
    const rs = mine.filter((o) => o.model === m.id);
    const answered = rs.filter((o) => o.got);
    return {
      model: m.id,
      right: rs.filter((o) => o.ok).length,
      of: answered.length,
      errors: rs.filter((o) => !o.got).map((o) => o.error),
      wrong: answered.filter((o) => !o.ok).map((o) => o.got),
    };
  });
  // A model "fails" a frame when it miscounts on most of the repeats it answered. Errors are reported, not counted.
  const failing = perModel.filter((p) => p.of && p.right * 2 < p.of).map((p) => p.model);
  const errored = perModel.filter((p) => p.errors.length).map((p) => p.model);
  return { image: f.path, want: f.want, right: mine.filter((o) => o.ok).length, of: mine.filter((o) => o.got).length, failing, errored, perModel };
});
writeFileSync(`results/final/counts-${tag}.json`, JSON.stringify({ createdAt: new Date().toISOString(), repeats: REPEATS, rows }, null, 1));
for (const r of rows)
  console.log(
    `${r.image.split('/').pop()!.padEnd(22)} ${String(r.right).padStart(3)}/${r.of}  ${r.failing.length ? `FAIL: ${r.failing.map((m) => m.split('/')[1]).join(', ')}` : 'ok'}${r.errored.length ? `  (errors: ${r.errored.map((m) => m.split('/')[1]).join(', ')})` : ''}`,
  );
