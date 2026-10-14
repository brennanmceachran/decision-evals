// Renders every dilemma exactly as a decision model receives it, and checks that each button maps to the
// right outcome. Writes review/cases.md. Usage: pnpm review [--frame game|narrative]
import { mkdirSync, writeFileSync } from 'node:fs';
import { countOf } from '../src/characters.js';
import { expand, loadDilemmas, type Variant } from '../src/expand.js';

const frame = process.argv.includes('--frame') ? process.argv[process.argv.indexOf('--frame') + 1] : 'game';
const problems: string[] = [];
const out: string[] = [`# Every case, as the model sees it (${frame} frame)`, ''];

/** Independent check of the option → outcome mapping, read back from the rendered text only. */
function check(v: Variant) {
  const where = `${v.dilemmaId} [${v.pointKey}] p${v.paraphrase} ${v.order}`;
  const keys = Object.keys(v.criteria);
  const lines = v.state.split('\n').filter((l) => l.startsWith('- '));
  if (v.frame === 'game') {
    if (lines.length !== keys.length)
      problems.push(`${where}: ${lines.length} "If you" lines for ${keys.length} buttons`);
    // The "If you:" list must be in the same order as the buttons, and each line must start with that button's action.
    keys.forEach((k, i) => {
      const action = v.criteria[k]!.replace(/\.$/, '').toLowerCase();
      if (!lines[i]?.toLowerCase().startsWith(`- ${action},`))
        problems.push(`${where}: line ${i} "${lines[i]}" ≠ button ${k}`);
    });
    // Exchange/parity: the group a steer button kills must be the group the scene puts on that side.
    for (const side of ['left', 'right']) {
      const key = `steer_${side}`;
      if (!(key in v.criteria)) continue;
      const group = v.state.match(new RegExp(`${side} (?:track|lane|tunnel|side): ([^.]+)\\.`))?.[1];
      const line = lines[keys.indexOf(key)];
      if (!group || !line?.includes(`the ${group} di`))
        problems.push(`${where}: ${key} kills "${line}" but scene puts "${group}" on the ${side}`);
      // Exact check: steering into a side kills that side's group, so the canonical option must be "spare the other group".
      const canonical = v.presentation.keyToCanonical[key]!;
      const aDesc = countOf(Number(v.point.k), String(v.point.a));
      const bDesc = countOf(Number(v.point.m), String(v.point.b));
      const killed = canonical === 'spare_a' ? bDesc : aDesc;
      if (group !== killed)
        problems.push(`${where}: ${key} → ${canonical} should kill "${killed}" but the ${side} side holds "${group}"`);
    }
  }
  if (/\{\{|\}\}|undefined|NaN/.test(v.state + v.question + JSON.stringify(v.criteria)))
    problems.push(`${where}: template leak`);
  if (v.frame === 'game') symmetry(v, where, lines);
}

/**
 * Formatting symmetry: the options must differ only in what they mean, never in how they are typeset.
 * Every "If you:" line must be `- <action>, <count> <noun> die(s)[ (detail)]`, and paired group descriptions
 * must share capitalization pattern and word count.
 */
const OUTCOME = /^- [a-z][a-z' ]*, (?:the )?\d+ [A-Za-z -]+? (?:dies|die)(?: \([a-z ]+\))?$/;
function symmetry(v: Variant, where: string, lines: string[]) {
  for (const l of lines) if (!OUTCOME.test(l)) problems.push(`${where}: outcome line breaks the shared shape: "${l}"`);
  // Either every outcome has a "(detail)" or none does.
  const detailed = lines.map((l) => /\)$/.test(l));
  if (new Set(detailed).size > 1)
    problems.push(`${where}: only some outcome lines have a (detail): ${JSON.stringify(lines)}`);
  // Buttons: same sentence shape (capitalized imperative ending in a period).
  for (const [k, c] of Object.entries(v.criteria)) {
    if (!/^[A-Z][a-z' ]*\.$/.test(c)) problems.push(`${where}: button ${k} text "${c}" is not a plain imperative`);
    if (!/^[a-z_]+$/.test(k)) problems.push(`${where}: button key "${k}" is not snake_case`);
  }
  // The control the scene mentions must be the control the button names (lever ↔ move_lever_*, switch ↔ *_switch).
  const scene = v.state.split('\n\nIf you:')[0]!;
  for (const control of ['lever', 'switch', 'hatch', 'trapdoor']) {
    const inButtons = Object.keys(v.criteria).some((k) => k.includes(control));
    if (inButtons && !scene.includes(control))
      problems.push(`${where}: button names "${control}" but the scene never mentions it`);
  }
  for (const noun of ['heavyset', 'visitor', 'hatch', 'shoving']) {
    if (scene.toLowerCase().includes(noun))
      problems.push(`${where}: scene uses "${noun}", which no button or outcome uses`);
  }
  // Two-group items: group noun phrases must be typeset alike (same capitalization of each word, same word count).
  if (v.point.a !== undefined) {
    const shape = (s: string) =>
      s
        .split(' ')
        .map((w) => (/^[A-Z]/.test(w) ? 'A' : 'a'))
        .join('');
    const a = String(v.point.a),
      b = String(v.point.b);
    if (shape(a) !== shape(b)) problems.push(`${where}: "${a}" vs "${b}" differ in capitalization or length`);
  }
}

for (const d of loadDilemmas()) {
  const vs = expand(d).filter((v) => v.frame === frame);
  vs.forEach(check);
  if (!vs.length) continue;
  const points = [...new Set(vs.map((v) => v.pointKey))];
  out.push(
    `## ${d.id}: ${d.title}`,
    '',
    `module: ${d.module} · ${vs.length} variants · ${points.length} sweep points · source: ${d.source ?? '-'}`,
    '',
  );
  // Show the first variant in both option orders, and for two-group items also with the groups' sides swapped.
  const first = vs[0]!;
  const shown = vs.filter(
    (v) =>
      v.paraphrase === 0 &&
      ((v.pointKey === first.pointKey && v.order === 'reverse') ||
        (v.point.side === 'a_right' &&
          v.point.a === first.point.a &&
          v.point.k === first.point.k &&
          v.point.m === first.point.m &&
          v.order === 'forward')),
  );
  for (const v of [first, ...shown].slice(0, 3)) {
    const map = Object.entries(v.presentation.keyToCanonical)
      .map(([k, c]) => `${k} → ${c}${v.actIds.includes(c) ? ' (act)' : ''}${v.focalIds.includes(c) ? ' [scored]' : ''}`)
      .join(', ');
    out.push(
      `**${JSON.stringify(v.point)} · paraphrase ${v.paraphrase} · ${v.order}**`,
      '',
      '```',
      v.state,
      '',
      v.question,
      '',
      ...Object.entries(v.criteria).map(([k, c]) => `${k}: ${c}`),
      '```',
      '',
      `stored as: ${map}`,
      '',
    );
  }
  // Every other scene wording at the same sweep point (including extra 1:1 wordings), first line only.
  const others = vs.filter((v) => v.paraphrase > 0 && v.pointKey === first.pointKey && v.order === first.order);
  for (const o of others) out.push(`Wording ${o.paraphrase + 1} (same point): _${o.state.split('\n')[0]}_`, '');
  if (d.extra_scenes) {
    const extra = vs.find((v) => v.paraphrase >= d.scenes!.length);
    if (extra)
      out.push(
        `Extra wordings (only where ${JSON.stringify(d.extra_scenes.when)}), e.g. at ${JSON.stringify(extra.point)}: _${extra.state.split('\n')[0]}_`,
        '',
      );
  }
  // Probe questions: sent in a SEPARATE call about the same scene (decision models only).
  if (first.probes.length) {
    out.push('Probes (separate call, same scene, decision models only):', '');
    for (const pr of first.probes) {
      out.push(
        pr.kind === 'comprehension'
          ? `- \`${pr.id}\`: "${pr.question}" — options ${Object.keys(pr.options).join(' / ')}; correct: \`${pr.answer}\``
          : `- \`${pr.id}\`: "${pr.question}" — yes/no (judgment, no correct answer)`,
      );
    }
    out.push('');
  }
  // Summarize the sweep instead of listing every point (two-group items have hundreds).
  const axes = new Map<string, Set<string>>();
  for (const v of vs)
    for (const [k, val] of Object.entries(v.point)) (axes.get(k) ?? axes.set(k, new Set()).get(k)!).add(String(val));
  out.push(`Sweep: ${[...axes].map(([k, vals]) => `**${k}** ∈ {${[...vals].join(', ')}}`).join(' · ') || 'none'}`, '');
}

out.splice(
  2,
  0,
  problems.length
    ? `**${problems.length} PROBLEMS:**\n\n${problems.map((p) => `- ${p}`).join('\n')}\n`
    : '**Automated checks: all passed.**\n',
);
mkdirSync('review', { recursive: true });
writeFileSync(`review/cases-${frame}.md`, out.join('\n'));
// Summarize by problem type (variant coordinates stripped) so nothing is hidden by truncation.
const kinds = new Map<string, number>();
for (const p of problems) {
  const k = p.replace(/ \[[^\]]*\] p\d+ (forward|reverse)/, '');
  kinds.set(k, (kinds.get(k) ?? 0) + 1);
}
console.log(problems.length ? `${problems.length} problems:` : 'all checks passed');
for (const [k, n] of [...kinds].sort((a, b) => b[1] - a[1])) console.log(`${String(n).padStart(5)}× ${k}`);
console.log(`→ review/cases-${frame}.md`);
