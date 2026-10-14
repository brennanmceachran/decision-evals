import { describe, expect, it } from 'vitest';
import { CONDITIONS, trials, type Trial } from '../src/image-study.js';
import { layout } from '../src/render/diagram.js';

const all = trials();
/** Parse "On the left track: N …. On the right track: M …." from a text state. */
const counts = (t: Trial) => {
  const s = t.state.kind === 'text' ? t.state.text : '';
  return [Number(/left track: (\d+)/.exec(s)![1]), Number(/right track: (\d+)/.exec(s)![1])];
};

describe('image study trials', () => {
  it('every item appears in all 3 conditions × 2 layouts × 2 orders', () => {
    const byItem = new Map<string, Trial[]>();
    for (const t of all) byItem.set(t.item, [...(byItem.get(t.item) ?? []), t]);
    for (const ts of byItem.values()) {
      expect(ts).toHaveLength(12);
      expect(new Set(ts.map((t) => `${t.condition}|${t.mirror}|${t.order}`)).size).toBe(12);
    }
    expect(new Set(all.map((t) => t.id)).size).toBe(all.length);
  });

  it('the three conditions of a trial share question, buttons and scored button exactly', () => {
    const key = (t: Trial) => `${t.item}|${t.mirror}|${t.order}`;
    const groups = new Map<string, Trial[]>();
    for (const t of all) groups.set(key(t), [...(groups.get(key(t)) ?? []), t]);
    for (const ts of groups.values()) {
      expect(ts.map((t) => t.condition).sort()).toEqual([...CONDITIONS].sort());
      expect(new Set(ts.map((t) => JSON.stringify([t.question, t.criteria, t.focalKey]))).size).toBe(1);
    }
  });

  it('text counts, diagram counts and probe answers agree', () => {
    for (const t of all.filter((t) => t.condition !== 'image')) {
      const twin = all.find(
        (x) => x.condition === 'image' && x.item === t.item && x.mirror === t.mirror && x.order === t.order,
      )!;
      const [l, r] = counts(t);
      const g = layout(twin.scene).groups;
      expect([g[0]!.people.length, g[1]!.people.length]).toEqual([l, r]);
      expect([twin.probes.count_left!.answer, twin.probes.count_right!.answer]).toEqual([String(l), String(r)]);
    }
  });

  it('the scored button kills the right group (read from the outcome list)', () => {
    for (const t of all.filter((t) => t.condition === 'text_outcomes')) {
      const text = (t.state as { text: string }).text;
      const focalText = t.criteria[t.focalKey]!.slice(0, -1).toLowerCase();
      const line = text.split('\n').find((l) => l.startsWith(`- ${focalText},`))!;
      const killed = Number(/, (?:the )?(\d+)/.exec(line)![1]);
      // switch: acting kills the b people on the other track. two-side: sparing A kills group B.
      expect(killed).toBe(t.b);
      const [l, r] = counts(t);
      if (t.design === 'switch') {
        // The set track (where the trolley heads by default) holds a people.
        expect(t.mirror ? r : l).toBe(t.a);
        expect(t.focalKey).toBe(t.mirror ? 'move_lever_left' : 'move_lever_right');
      } else {
        expect(t.mirror ? r : l).toBe(t.a); // group A's side
        expect(t.focalKey).toBe(t.mirror ? 'steer_left' : 'steer_right'); // steer AWAY from A
      }
    }
  });

  it('image states contain no words; text states contain no image', () => {
    for (const t of all) {
      if (t.condition === 'image') expect(t.state.kind).toBe('image');
      else expect(t.state.kind).toBe('text');
    }
  });

  it('only text_outcomes lists outcomes', () => {
    for (const t of all.filter((t) => t.condition !== 'image')) {
      expect((t.state as { text: string }).text.includes('If you:')).toBe(t.condition === 'text_outcomes');
    }
  });
});
