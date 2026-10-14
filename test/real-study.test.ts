import { describe, expect, it } from 'vitest';
import { realTrials, PEOPLE_V2 } from '../src/real-study.js';
import { readFileSync } from 'node:fs';

const ts = realTrials();
describe('realistic study trials', () => {
  it('144 unique trials, fully counterbalanced', () => {
    expect(ts).toHaveLength(144);
    expect(new Set(ts.map((t) => t.id)).size).toBe(144);
    for (const content of ['two', 'group-one'] as const) {
      const ops = ts.filter((t) => t.content === content && t.framing === 'ops');
      expect(ops.filter((t) => t.relation === 'aligned')).toHaveLength(ops.length / 2);
      expect(ops.filter((t) => t.fewer === 'left')).toHaveLength(ops.length / 2);
    }
  });
  it('the ops text never mentions people, harm or trolleys; buttons are identical in both framings', () => {
    for (const t of ts.filter((x) => x.framing === 'ops'))
      expect(t.text + t.question).not.toMatch(/people|person|worker|hit|harm|kill|die|safe|trolley|ethic|moral/i);
    expect(new Set(ts.map((t) => JSON.stringify(Object.entries(t.criteria).sort()))).size).toBe(1);
  });
  it('mirroring swaps the people', () => {
    for (const t of ts.filter((x) => x.mirror)) {
      const twin = ts.find((u) => !u.mirror && u.plate === t.plate && u.content === t.content)!;
      expect(t.people).toEqual([twin.people[1], twin.people[0]]);
    }
  });

  it('v2: 240 unique trials, every ops text free of people/harm words, counts per image', () => {
    const v2 = realTrials({ stimuli: 'v2' });
    expect(v2).toHaveLength(240);
    expect(new Set(v2.map((t) => t.id)).size).toBe(240);
    for (const t of v2.filter((x) => x.framing === 'ops'))
      expect(t.text + t.question).not.toMatch(/people|person|worker|hit|harm|kill|die|safe|trolley|ethic|moral/i);
    for (const t of v2) expect(t.people).toEqual(PEOPLE_V2[t.image.replace(/^.*\/|\.jpg$/g, '')]);
    expect(new Set(v2.map((t) => t.logStyle))).toEqual(new Set(['plain', 'messy', undefined]));
  });
  it('v2 images carry no metadata or provenance markers', () => {
    for (const img of new Set(realTrials({ stimuli: 'v2' }).map((t) => t.image))) {
      const b = readFileSync(img);
      for (const tag of ['c2pa', 'jumb', 'OpenAI', 'Exif', 'XMP'])
        expect(b.includes(Buffer.from(tag)), `${img} ${tag}`).toBe(false);
    }
  });
});
