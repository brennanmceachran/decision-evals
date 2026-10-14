// Export one Promptfoo eval from its SQLite store to the results JSON shape the analysis reads
// ({ evalId, results: { results: [...] } }). Promptfoo 0.124's own JSON export refuses large evals.
// Usage: tsx scripts/export-eval.ts <evalId> <out.json>
import { execFileSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';

const [evalId, out] = process.argv.slice(2);
if (!evalId || !out) throw new Error('usage: export-eval <evalId> <out.json>');
const db = '.promptfoo/promptfoo.db';
const q = (sql: string) => execFileSync('sqlite3', ['-json', db, sql], { maxBuffer: 2 ** 31 - 1 }).toString() || '[]';
const rows = JSON.parse(
  q(
    `select test_idx, provider, response, error, latency_ms, cost, test_case from eval_results where eval_id = '${evalId.replace(/'/g, '')}' order by test_idx, id`,
  ),
) as Record<string, string | number | null>[];
const w = createWriteStream(out);
w.write(`{"evalId":${JSON.stringify(evalId)},"results":{"results":[`);
rows.forEach((r, i) => {
  const tc = JSON.parse(String(r.test_case));
  const row = {
    testIdx: r.test_idx,
    provider: JSON.parse(String(r.provider)),
    response: r.response ? JSON.parse(String(r.response)) : null,
    error: r.error,
    latencyMs: r.latency_ms,
    cost: r.cost,
    vars: tc.vars,
  };
  w.write((i ? ',' : '') + JSON.stringify(row));
});
w.end(']}}');
w.on('finish', () => console.log(`${rows.length} rows → ${out}`));
