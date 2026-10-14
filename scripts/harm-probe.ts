// EXPLORATORY (not pre-registered): does the wordless diagram convey that the trolley harms the people it reaches?
// Asked of every vision model, about the same images the study uses, without and with the study's rule sentence.
// Saves every answer to results/harm-probe.json. Usage: tsx --env-file=.env scripts/harm-probe.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { RULE } from '../src/image-study.js';
import { dataUrl, type Scene } from '../src/render/diagram.js';
import { SUBJECTS } from '../src/subjects.js';
import { ask, canSeeImages, type Question } from '../src/vision.js';

const questions = (prefix: string): Record<string, Question> => ({
  fate: {
    type: 'choice',
    instructions: `${prefix}The trolley goes into one of the boxes. What happens to the people in that box?`,
    criteria: {
      hit: 'They are hit by the trolley and killed.',
      board: 'They board the trolley as passengers.',
      safe: 'Nothing happens to them.',
    },
  },
  goal: {
    type: 'choice',
    instructions: `${prefix}In this picture, is it better for the trolley to reach more people or fewer people?`,
    criteria: { fewer: 'Fewer people', more: 'More people' },
  },
});
const PREFIXES = { none: '', rule: `${RULE} ` };
const scenes: Scene[] = [
  { kind: 'two-side', left: 3, right: 1 },
  { kind: 'switch', main: 5, side: 1 },
];

const rows = (
  await Promise.all(
    SUBJECTS.filter(canSeeImages).map(async (s) => {
      const out = [];
      for (const [prefixName, prefix] of Object.entries(PREFIXES))
        for (const scene of scenes) {
          try {
            const a = await ask(s, { kind: 'image', url: dataUrl(scene) }, questions(prefix));
            out.push({
              model: s.id,
              host: s.host ?? null,
              prefix: prefixName,
              scene: scene.kind,
              fate: a.fate?.refused ? 'refused' : a.fate?.choice,
              pHit: a.fate?.probabilities.hit ?? null,
              goal: a.goal?.refused ? 'refused' : a.goal?.choice,
              pFewer: a.goal?.probabilities.fewer ?? null,
            });
          } catch (e) {
            out.push({ model: s.id, prefix: prefixName, scene: scene.kind, error: (e as Error).message.slice(0, 200) });
          }
        }
      return out;
    }),
  )
).flat();

mkdirSync('results', { recursive: true });
writeFileSync(
  'results/harm-probe.json',
  JSON.stringify({ createdAt: new Date().toISOString(), rule: RULE, rows }, null, 1),
);
for (const r of rows as Record<string, unknown>[])
  console.log(
    String(r.model).padEnd(34),
    String(r.prefix).padEnd(5),
    String(r.scene).padEnd(9),
    r.error ?? `fate=${r.fate} (P hit ${Number(r.pHit).toFixed(2)})  goal=${r.goal}`,
  );
