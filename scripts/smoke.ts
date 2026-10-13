// Step 0 / smoke test: one real variant to every subject through the same call() path the eval uses.
// Confirms keys, model ids, response shapes and the prompt format, without Promptfoo or the cache.
// Usage: pnpm smoke [--only <substring>] [--dilemma switch] [--frame game|narrative] [--n 5]
import { mkdirSync, writeFileSync } from 'node:fs';
import { call } from '../src/call.js';
import { expand, loadDilemmas } from '../src/expand.js';
import { SUBJECTS } from '../src/subjects.js';

const arg = (name: string) =>
  process.argv.includes(`--${name}`) ? process.argv[process.argv.indexOf(`--${name}`) + 1] : undefined;
const only = arg('only');
const dilemmaId = arg('dilemma') ?? 'switch';
const frame = arg('frame') ?? 'game';
const n = Number(arg('n') ?? 5);

const dilemma = loadDilemmas().find((d) => d.id === dilemmaId);
if (!dilemma) throw new Error(`no dilemma "${dilemmaId}"`);
const variant = expand(dilemma).find(
  (v) =>
    v.frame === frame && v.paraphrase === 0 && v.order === 'forward' && (v.point.n === undefined || v.point.n === n),
);
if (!variant) throw new Error(`no ${frame} variant for ${dilemmaId} at n=${n}`);

console.log(`--- state ---\n${variant.state}\n--- instructions ---\n${variant.question}\n--- criteria ---`);
console.log(variant.criteria, '\n');

const subjects = SUBJECTS.filter((s) => !only || s.id.includes(only));
const rows = await Promise.all(
  subjects.map(async (s) => {
    const t0 = performance.now();
    try {
      const o = await call(s, variant);
      return { subject: s.id, kind: s.kind, ok: true, ms: Math.round(performance.now() - t0), ...o };
    } catch (e) {
      const body = (e as { responseBody?: string }).responseBody;
      const error = `${e instanceof Error ? e.message : String(e)}${body ? ` | ${body.slice(0, 200)}` : ''}`;
      return { subject: s.id, kind: s.kind, ok: false, ms: Math.round(performance.now() - t0), error };
    }
  }),
);

const focal = variant.focalIds;
for (const r of rows) {
  const p = 'dist' in r && r.dist ? focal.reduce((sum, id) => sum + (r.dist[id] ?? 0), 0) : NaN;
  const what = !r.ok
    ? `FAIL ${'error' in r ? r.error : ''}`
    : 'refused' in r && r.refused
      ? 'REFUSED'
      : `${('choice' in r ? (r.choice ?? '') : '').padEnd(10)} P(${focal.join('+')})=${p.toFixed(2)}`;
  console.log(`${r.ok ? 'OK  ' : 'FAIL'} ${r.subject.padEnd(40)} ${String(r.ms).padStart(6)}ms  ${what}`);
}
mkdirSync('results', { recursive: true });
writeFileSync('results/smoke.json', JSON.stringify({ variant, rows }, null, 2));
const cost = rows.reduce((sum, r) => sum + ('cost' in r ? (r.cost ?? 0) : 0), 0);
console.log(`\n${rows.filter((r) => r.ok).length}/${rows.length} ok, $${cost.toFixed(4)} → results/smoke.json`);
