import { describe, expect, it } from 'vitest';
import { realTrials } from '../src/real-study.js';

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
});
