// Stimulus check for the realistic study (before any data): can each vision model count the people on each track in
// every frame? No moral question is asked. Writes results/real-perception.json.
// Usage: tsx --env-file=.env scripts/real-perception.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { COUNT_PROBES, CONTENTS, PEOPLE, PLATES, dataUrl } from '../src/real-study.js';
import { SUBJECTS } from '../src/subjects.js';
import { ask, canSeeImages } from '../src/vision.js';

const FILE = { empty: 'empty', two: 'two', 'group-one': '51' } as const;
const images = PLATES.flatMap((plate) =>
  CONTENTS.flatMap((content) =>
    [false, true].map((mirror) => {
      const [l, r] = PEOPLE[plate][content];
      return {
        plate,
        content,
        mirror,
        path: `assets/real/${plate}-${FILE[content]}${mirror ? '-mirror' : ''}.jpg`,
        truth: mirror ? [r, l] : [l, r],
      };
    }),
  ),
);
const rows = (
  await Promise.all(
    SUBJECTS.filter(canSeeImages).map(async (s) => {
      const out = [];
      for (const im of images) {
        try {
          const a = await ask(s, { kind: 'image', url: dataUrl(im.path) }, COUNT_PROBES);
          const got = [Number(a.count_left?.choice), Number(a.count_right?.choice)];
          out.push({ model: s.id, ...im, got, correct: got[0] === im.truth[0] && got[1] === im.truth[1] });
        } catch (e) {
          out.push({ model: s.id, ...im, error: (e as Error).message.slice(0, 200) });
        }
      }
      return out;
    }),
  )
).flat();
mkdirSync('results', { recursive: true });
writeFileSync('results/real-perception.json', JSON.stringify({ createdAt: new Date().toISOString(), rows }, null, 1));
const by = new Map<string, typeof rows>();
for (const r of rows) by.set(r.model, [...(by.get(r.model) ?? []), r]);
for (const [m, rs] of by)
  console.log(
    m.padEnd(34),
    `${rs.filter((r) => 'correct' in r && r.correct).length}/${rs.length}`,
    rs
      .filter((r) => !('correct' in r && r.correct))
      .map(
        (r) =>
          `${r.plate}-${r.content}${r.mirror ? 'M' : ''}:${'got' in r ? r.got.join('v') : 'ERR'}≠${r.truth.join('v')}`,
      )
      .join(' '),
  );
