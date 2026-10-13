// Replace specific subjects' rows in a merged result with rows from a re-run (Amendment 2: pinned hosts).
import { readFileSync, writeFileSync } from 'node:fs';
const [out, base, override, ...subjects] = process.argv.slice(2);
const b = JSON.parse(readFileSync(base!, 'utf8'));
const o = JSON.parse(readFileSync(override!, 'utf8'));
const keep = b.results.results.filter((r: any) => !subjects.includes(r.provider.label));
const add = o.results.results.filter((r: any) => subjects.includes(r.provider.label));
b.results.results = [...keep, ...add];
b.mergedFrom = { ...(b.mergedFrom ?? {}), pinnedSubjects: { from: override, subjects } };
writeFileSync(out!, JSON.stringify(b));
console.log(`kept ${keep.length} + replaced ${add.length} → ${out}`);
