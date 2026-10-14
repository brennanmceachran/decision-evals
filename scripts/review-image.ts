// Renders every image-study trial exactly as sent: for each item × layout, the three conditions side by side
// (text_outcomes, text_scene, image) with question, buttons and scored button, plus the probe questions and the
// actual PNG. Writes review/image-study.md and review/image-study/*.png. Usage: tsx scripts/review-image.ts [--version v3]
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { png } from '../src/render/diagram.js';
import { trials, type StudyVersion, type Trial } from '../src/image-study.js';

const version = (
  process.argv.includes('--version') ? process.argv[process.argv.indexOf('--version') + 1] : 'v3'
) as StudyVersion;
const all = trials({ version });
rmSync('review/image-study', { recursive: true, force: true });
mkdirSync('review/image-study', { recursive: true });

const out: string[] = [
  `# Image study ${version}: every trial, as sent`,
  '',
  `${all.length} trials = ${new Set(all.map((t) => t.item)).size} items × 2 layouts × 2 button orders × 3 conditions.`,
  'Each block below is one item × layout, shown in the forward button order (the reverse order swaps the two buttons',
  'and, for text_outcomes, the two "If you:" lines; nothing else changes).',
  '',
  'Conditions: `text_outcomes` = scene + who-dies list · `text_scene` = scene only · `image` = wordless diagram.',
  '',
];

const block = (t: Trial) => [
  '```',
  t.state.kind === 'text' ? t.state.text : '[image: see PNG]',
  '',
  t.question,
  '',
  ...Object.entries(t.criteria).map(([k, c]) => `${k}: ${c}`),
  '```',
  `scored: \`${t.focalKey}\` · trial id \`${t.id}\``,
];

const groups = new Map<string, Trial[]>();
for (const t of all.filter((t) => t.order === 'forward')) {
  const k = `${t.item}|${t.mirror}`;
  groups.set(k, [...(groups.get(k) ?? []), t]);
}
let design = '';
for (const [k, ts] of groups) {
  const [item = '', mirror] = k.split('|');
  const t0 = ts[0]!;
  if (t0.design !== design) {
    design = t0.design;
    out.push(
      `## ${design === 'switch' ? 'Switch (lever): a on the set track vs b on the other; scored = act' : 'Two groups: A vs B; scored = spare A'}`,
      '',
    );
  }
  const layout =
    t0.design === 'switch'
      ? mirror === 'true'
        ? 'set track RIGHT'
        : 'set track LEFT'
      : mirror === 'true'
        ? 'A on RIGHT'
        : 'A on LEFT';
  out.push(`### ${item} · ${layout}`, '');
  const img = ts.find((t) => t.condition === 'image')!;
  const file = `review/image-study/${item.replace(':', '-')}-${mirror === 'true' ? 'mirror' : 'plain'}.png`;
  writeFileSync(file, png(img.scene));
  out.push(`![${item} ${layout}](${file.replace('review/', '')})`, '');
  for (const c of ['text_outcomes', 'text_scene', 'image'] as const) {
    const t = ts.find((x) => x.condition === c)!;
    out.push(`**${c}**`, '', ...block(t), '');
  }
  if (Object.keys(img.probes).length) {
    out.push('Probes (image only, separate call):', '');
    for (const [id, p] of Object.entries(img.probes))
      out.push(`- \`${id}\`: "${p.instructions}" → correct \`${p.answer}\``);
    out.push('');
  }
}
writeFileSync('review/image-study.md', out.join('\n'));
console.log(`${groups.size} item×layout blocks, ${all.length} trials → review/image-study.md (+ ${groups.size} PNGs)`);
