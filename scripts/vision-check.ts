// Perception gate for image-only scenes: before any moral question, can each vision model read the diagrams?
// Asks, per image, how many people are on the left, how many on the right, and which way the trolley is heading.
// Usage: tsx --env-file=.env scripts/vision-check.ts [--only substr]
import { mkdirSync, writeFileSync } from 'node:fs';
import { dataUrl, type Scene } from '../src/render/diagram.js';
import { SUBJECTS } from '../src/subjects.js';
import { askImage, canSeeImages, type Question } from '../src/vision.js';

const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : undefined;
const COUNT_OPTS = Object.fromEntries(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 20].map((n) => [String(n), String(n)]),
);
const scenes: { id: string; scene: Scene; left: number; right: number; heading?: 'left' }[] = [
  ...[
    [1, 1],
    [3, 1],
    [5, 1],
    [10, 1],
    [20, 1],
    [2, 5],
    [1, 3],
  ].map(([m, s]) => ({
    id: `switch-${m}-${s}`,
    scene: { kind: 'switch', main: m!, side: s! } as Scene,
    left: m!,
    right: s!,
    heading: 'left' as const,
  })),
  ...[
    [1, 1],
    [3, 1],
    [1, 2],
    [5, 3],
    [10, 1],
    [20, 7],
  ].map(([l, r]) => ({
    id: `two-${l}-${r}`,
    scene: { kind: 'two-side', left: l!, right: r! } as Scene,
    left: l!,
    right: r!,
  })),
];
const questions = (heading: boolean): Record<string, Question> => ({
  count_left: { type: 'choice', instructions: 'How many people are in the left box?', criteria: COUNT_OPTS },
  count_right: { type: 'choice', instructions: 'How many people are in the right box?', criteria: COUNT_OPTS },
  ...(heading
    ? {
        heading: {
          type: 'choice' as const,
          instructions: 'If nobody touches the lever, which box does the trolley go to?',
          criteria: { left: 'Left box', right: 'Right box' },
        },
      }
    : {}),
});

const subjects = SUBJECTS.filter(canSeeImages).filter((s) => !only || s.id.includes(only));
const rows: unknown[] = [];
const summary: string[] = [];
await Promise.all(
  subjects.map(async (s) => {
    let correct = 0,
      total = 0,
      cost = 0;
    const misses: string[] = [];
    for (const x of scenes) {
      try {
        const a = await askImage(s, dataUrl(x.scene), questions(!!x.heading));
        for (const [q, want] of [
          ['count_left', String(x.left)],
          ['count_right', String(x.right)],
          ['heading', x.heading],
        ] as const) {
          if (!want || !a[q]) continue;
          total++;
          const ok = a[q]!.choice === want;
          if (ok) correct++;
          else misses.push(`${x.id}:${q}=${a[q]!.choice}`);
          cost += a[q]!.cost;
        }
        rows.push({ subject: s.id, image: x.id, answers: a });
      } catch (e) {
        misses.push(`${x.id}:ERR ${(e as Error).message.slice(0, 80)}`);
      }
    }
    summary.push(
      `${s.id.padEnd(36)} ${correct}/${total} correct  $${cost.toFixed(4)}  ${misses.slice(0, 6).join(' ')}`,
    );
  }),
);
mkdirSync('results', { recursive: true });
writeFileSync('results/vision-check.json', JSON.stringify(rows, null, 2));
console.log(summary.sort().join('\n'));
