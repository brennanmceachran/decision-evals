import { describe, expect, it } from 'vitest';
import { choiceToCanonical, positionOf, present, toCanonical } from '../src/permute.js';

const IDS = ['pull', 'dont_pull'];

describe('present', () => {
  it('forward + descriptive keeps canonical ids as keys', () => {
    const p = present(IDS, 'forward', 'descriptive');
    expect(p.order).toEqual(['pull', 'dont_pull']);
    expect(p.keyToCanonical).toEqual({ pull: 'pull', dont_pull: 'dont_pull' });
  });

  it('reverse + neutral assigns A to the first *displayed* option', () => {
    const p = present(IDS, 'reverse', 'neutral');
    expect(p.order).toEqual(['dont_pull', 'pull']);
    expect(p.keyToCanonical).toEqual({ A: 'dont_pull', B: 'pull' });
    expect(p.canonicalToKey).toEqual({ dont_pull: 'A', pull: 'B' });
  });

  it('rejects duplicate ids', () => {
    expect(() => present(['a', 'a'], 'forward', 'neutral')).toThrow(/duplicate/);
  });
});

describe('toCanonical', () => {
  it('round-trips every order × label combination', () => {
    const ids = ['jump', 'pull', 'dont_pull'];
    const truth = { jump: 0.2, pull: 0.5, dont_pull: 0.3 };
    for (const order of ['forward', 'reverse'] as const) {
      for (const style of ['descriptive', 'neutral'] as const) {
        const p = present(ids, order, style);
        const shown = Object.fromEntries(ids.map((id) => [p.canonicalToKey[id]!, truth[id as keyof typeof truth]]));
        expect(toCanonical(p, shown)).toEqual(truth);
      }
    }
  });

  it('a model that always picks "A" shows up as position bias, not as a preference', () => {
    const fwd = present(IDS, 'forward', 'neutral');
    const rev = present(IDS, 'reverse', 'neutral');
    const alwaysA = { A: 0.9, B: 0.1 };
    expect(toCanonical(fwd, alwaysA).pull).toBe(0.9);
    expect(toCanonical(rev, alwaysA).pull).toBe(0.1);
    expect(choiceToCanonical(rev, 'A')).toBe('dont_pull');
    expect(positionOf(rev, 'dont_pull')).toBe(0);
  });

  it('throws on unknown or missing keys instead of silently dropping mass', () => {
    const p = present(IDS, 'forward', 'neutral');
    expect(() => toCanonical(p, { A: 1, C: 0 })).toThrow(/unknown display key/);
    expect(() => toCanonical(p, { A: 1 })).toThrow(/missing probability/);
  });
});
