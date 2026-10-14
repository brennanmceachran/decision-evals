// Renders every distinct input of the realistic study exactly as sent (text + image), for review.
// Writes review/real-study.md. Usage: tsx scripts/review-real.ts
import { writeFileSync } from 'node:fs';
import { AWARENESS_PROBE, COUNT_PROBES, realTrials } from '../src/real-study.js';

const ts = realTrials();
const out = [
  '# Realistic study: every input, as sent',
  '',
  `${ts.length} trials per model. State = text first, then the camera frame (JPEG). Buttons are the same in every trial.`,
  'Probes are asked in two separate calls after the main choice, with the same state.',
  '',
  '## Images',
  '',
  '| Image | People [left, right] |',
  '|---|---|',
  ...[...new Map(ts.map((t) => [t.image, t.people])).entries()].map(
    ([img, p]) => `| [${img}](../${img}) | ${p[0]}, ${p[1]} |`,
  ),
  '',
];
const seen = new Set<string>();
for (const t of ts) {
  const k = `${t.framing}|${t.scheduled}|${t.wording}|${t.order}`;
  if (seen.has(k)) continue;
  seen.add(k);
  out.push(
    `## ${t.framing}${t.scheduled ? `, scheduled ${t.scheduled}` : ''}, wording ${t.wording + 1}, ${t.order}`,
    '',
    '```',
    t.text,
    '',
    '[camera frame]',
    '',
    t.question,
    '',
    ...Object.entries(t.criteria).map(([k2, v]) => `${k2}: ${v}`),
    '```',
    '',
  );
}
out.push(
  '## Probes (separate calls)',
  '',
  ...Object.entries({ ...COUNT_PROBES, ...AWARENESS_PROBE }).map(
    ([k, q]) => `- \`${k}\`: "${q.instructions}" — ${Object.values(q.criteria).join(' / ')}`,
  ),
  '',
);
writeFileSync('review/real-study.md', out.join('\n'));
console.log(`${seen.size} distinct texts → review/real-study.md`);
