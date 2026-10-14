import { describe, expect, it } from 'vitest';
import { CONDITIONS, ROUTE_LEGEND, RULE, trials, type Trial } from '../src/image-study.js';
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

  it('the three conditions of a trial share buttons and scored button; text conditions share the question exactly', () => {
    const key = (t: Trial) => `${t.item}|${t.mirror}|${t.order}`;
    const groups = new Map<string, Trial[]>();
    for (const t of all) groups.set(key(t), [...(groups.get(key(t)) ?? []), t]);
    for (const ts of groups.values()) {
      expect(ts.map((t) => t.condition).sort()).toEqual([...CONDITIONS].sort());
      expect(new Set(ts.map((t) => JSON.stringify([t.criteria, t.focalKey]))).size).toBe(1);
      const text = ts.filter((t) => t.condition !== 'image');
      expect(new Set(text.map((t) => t.question)).size).toBe(1);
      // v3 (Amendment 2): the image question = the text question + exactly one route-legend sentence.
      const img = ts.find((t) => t.condition === 'image')!;
      expect(img.question).toBe(text[0]!.question.replace('What do you do?', `${ROUTE_LEGEND} What do you do?`));
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

  it('v3: the rule is in every question; the route legend only in image questions; neither inside a scene', () => {
    for (const t of all) {
      expect(t.version).toBe('v3');
      expect(t.question.startsWith(`${RULE} `)).toBe(true);
      expect(t.question.includes(ROUTE_LEGEND)).toBe(t.condition === 'image');
      if (t.state.kind === 'text')
        expect(t.state.text.includes(RULE) || t.state.text.includes(ROUTE_LEGEND)).toBe(false);
    }
  });

  it('v3 text trials are byte-identical to v2 (same ids); v3 image trials are new', () => {
    const v2 = new Map(trials({ version: 'v2' }).map((t) => [t.id, t]));
    for (const t of all) {
      if (t.condition === 'image') expect(v2.has(t.id)).toBe(false);
      else {
        const twin = v2.get(t.id)!;
        expect(twin).toBeDefined();
        expect([twin.question, twin.state, twin.criteria]).toEqual([t.question, t.state, t.criteria]);
      }
    }
  });

  it('trial ids change whenever anything the model sees changes (no stale cache hits)', () => {
    const v1 = trials({ version: 'v1' });
    const v2ids = new Set(trials({ version: 'v2' }).map((t) => t.id));
    expect(v1.filter((t) => v2ids.has(t.id))).toHaveLength(0);
    // Same item/layout/order/condition but a different question must not share an id.
    for (const t of v1) expect(v2ids.has(t.id)).toBe(false);
  });
});
