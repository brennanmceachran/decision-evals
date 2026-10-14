// Exploratory: does declaring the route colour in the question fix "which way is the trolley heading?" on images?
// Usage: tsx --env-file=.env scripts/route-probe.ts
import { dataUrl, type Scene } from '../src/render/diagram.js';
import { RULE } from '../src/image-study.js';
import { SUBJECTS } from '../src/subjects.js';
import { ask, canSeeImages } from '../src/vision.js';

const LEGENDS: Record<string, string> = {
  none: '',
  shown: "The trolley's current route is shown in orange. ",
  ifnobody: 'Orange shows where the trolley goes if nobody acts. ',
};
const scenes: { s: Scene; heading: 'left' | 'right' }[] = [1, 5, 20].flatMap((main) =>
  [false, true].map((mirror) => ({
    s: { kind: 'switch', main, side: 1, mirror } as Scene,
    heading: mirror ? ('right' as const) : ('left' as const),
  })),
);
const models = SUBJECTS.filter(canSeeImages);
const rows = await Promise.all(
  models.map(async (m) => {
    const cells: string[] = [];
    for (const [name, legend] of Object.entries(LEGENDS)) {
      let ok = 0;
      for (const { s, heading } of scenes) {
        const a = await ask(
          m,
          { kind: 'image', url: dataUrl(s) },
          {
            heading: {
              type: 'choice',
              instructions: `${RULE} ${legend}If nobody touches the lever, which box does the trolley go to?`,
              criteria: { left: 'Left box', right: 'Right box' },
            },
          },
        );
        if (a.heading!.choice === heading) ok++;
      }
      cells.push(`${name}=${ok}/${scenes.length}`);
    }
    return `${m.id.padEnd(36)} ${cells.join('  ')}`;
  }),
);
console.log(rows.sort().join('\n'));
