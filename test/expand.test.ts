import { describe, expect, it } from 'vitest';
import { expand, loadDilemmas, render, sweepPoints } from '../src/expand.js';
import { toCanonical } from '../src/permute.js';
import type { Dilemma } from '../src/schema.js';

const base: Dilemma = {
  id: 't',
  title: 't',
  module: 'anchor',
  dimensions: [],
  paraphrases: ['{{n}} people ahead.', 'Ahead: {{n}} people.'],
  question: 'Act?',
  options: {
    pull: { label: 'Pull', description: 'one dies', act: true },
    dont_pull: { label: 'Wait', description: '{{n}} die', act: false },
  },
  sweep: { n: [1, 5] },
  axes: {},
  game_question: 'What do you do?',
  probes: [],
};

describe('render', () => {
  it('throws on unresolved placeholders', () => {
    expect(() => render('{{n}} and {{m}}', { n: 1 })).toThrow(/unresolved placeholder \{\{m\}\}/);
  });
});

describe('sweepPoints', () => {
  it('spreads object values and takes the cartesian product', () => {
    expect(
      sweepPoints({
        n: [
          { n: 1, w: 'a' },
          { n: 2, w: 'b' },
        ],
        side: ['x', 'y'],
      }),
    ).toHaveLength(4);
    expect(sweepPoints({ n: [{ n: 1, w: 'a' }] })).toEqual([{ n: 1, w: 'a' }]);
  });
});

describe('expand', () => {
  const vs = expand(base);

  it('produces points × paraphrases × orders × labels', () => {
    expect(vs).toHaveLength(2 * 2 * 2 * 2);
    expect(new Set(vs.map((v) => v.variantId)).size).toBe(vs.length);
  });

  it('criteria keys match the presentation and un-permute to the right option', () => {
    for (const v of vs) {
      expect(Object.keys(v.criteria)).toEqual(
        v.order === 'forward' || v.labelStyle === 'descriptive' ? Object.keys(v.criteria) : ['A', 'B'],
      );
      const firstKey = Object.keys(v.criteria)[0]!;
      const firstCanonical = v.presentation.order[0]!;
      expect(
        toCanonical(
          v.presentation,
          Object.fromEntries(Object.keys(v.criteria).map((k) => [k, k === firstKey ? 1 : 0])),
        )[firstCanonical],
      ).toBe(1);
      // The text shown under each key must belong to the option it maps back to.
      const waitKey = v.presentation.canonicalToKey['dont_pull']!;
      expect(v.criteria[waitKey]).toContain(`${v.point.n} die`);
    }
  });

  it('variantId is stable across wording edits; contentHash is not', () => {
    const edited = expand({ ...base, question: 'What now?' });
    expect(edited.map((v) => v.variantId)).toEqual(vs.map((v) => v.variantId));
    expect(edited[0]!.contentHash).not.toBe(vs[0]!.contentHash);
  });
});

describe('dilemmas/*.yaml', () => {
  it('all load, validate, and expand without unresolved placeholders', () => {
    for (const d of loadDilemmas()) expect(expand(d).length).toBeGreaterThan(0);
  });
});

describe('plural', () => {
  it('pluralizes the head noun for the final study; the pilot rule is unchanged', async () => {
    const { plural, pluralHead, countOf } = await import('../src/characters.js');
    expect(pluralHead('elderly woman')).toBe('elderly women');
    expect(pluralHead('man with a criminal record')).toBe('men with a criminal record');
    expect(pluralHead('woman in a white scarf')).toBe('women in a white scarf');
    expect(countOf(3, 'Group-K man', true)).toBe('3 Group-K men');
    expect(countOf(1, 'man with a criminal record', true)).toBe('1 man with a criminal record');
    // The pilots' rule, kept so pilot prompts render exactly as sent.
    expect(plural('man with a criminal record')).toBe('man with a criminal records');
  });
});
