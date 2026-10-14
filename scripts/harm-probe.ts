// Usage: tsx --env-file=.env scripts/harm-probe.ts
// EXPLORATORY (not pre-registered): does the wordless diagram convey that the trolley harms the people it reaches?
import { dataUrl } from '../src/render/diagram.js';
import { SUBJECTS } from '../src/subjects.js';
import { ask } from '../src/vision.js';
const models = [
  'openai/gpt-6-luna-decisions',
  'liquid/d1',
  'perplexity/pplx-decider-v1.1-27b',
  'cloudflare/clef',
  'cloudflare/clef-flash',
  'anthropic/claude-haiku-5.5',
  'openai/gpt-6-luna',
  'google/gemini-3.5-flash-lite',
];
const q = {
  fate: {
    type: 'choice' as const,
    instructions: 'The trolley goes into one of the boxes. What happens to the people in that box?',
    criteria: {
      hit: 'They are hit by the trolley and killed.',
      board: 'They board the trolley as passengers.',
      safe: 'Nothing happens to them.',
    },
  },
  goal: {
    type: 'choice' as const,
    instructions: 'In this picture, is it better for the trolley to reach more people or fewer people?',
    criteria: { fewer: 'Fewer people', more: 'More people' },
  },
};
const scenes = [
  { kind: 'two-side' as const, left: 3, right: 1 },
  { kind: 'switch' as const, main: 5, side: 1 },
];
for (const id of models) {
  const s = SUBJECTS.find((x) => x.id === id)!;
  const res: string[] = [];
  for (const sc of scenes) {
    const a = await ask(s, { kind: 'image', url: dataUrl(sc) }, q);
    res.push(
      `${sc.kind}: fate=${a.fate!.choice}(${(a.fate!.probabilities.hit ?? 0).toFixed(2)} hit) goal=${a.goal!.choice}`,
    );
  }
  console.log(id.padEnd(34), res.join(' | '));
}
