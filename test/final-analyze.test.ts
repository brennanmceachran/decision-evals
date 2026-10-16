// The final analysis on synthetic rows where the right answer is known by construction (no API calls).
import { describe, expect, it } from 'vitest';
import { analyzeFinal, type FinalRow } from '../src/final/analyze.js';
import { textJobs } from '../src/final/jobs.js';

const jobs = textJobs().filter((j) => String(j.meta.dilemma).startsWith('parity-'));

/** Rows for one decision model whose P(spare A) is given by `p(job)`. */
function rowsFor(model: string, p: (j: (typeof jobs)[number]) => number): FinalRow[] {
  return jobs.map((j) => {
    const v = j.variant!;
    const pa = p(j);
    const keyA = v.presentation.canonicalToKey.spare_a!;
    const keyB = v.presentation.canonicalToKey.spare_b!;
    return {
      model,
      category: 'decision',
      part: 'text',
      job: j.id,
      ...j.meta,
      refused: false,
      choice: pa >= 0.5 ? keyA : keyB,
      pFocal: pa,
      samples: null,
      probabilities: { [keyA]: pa, [keyB]: 1 - pa },
      probes: {},
      variant: { point: v.point },
    } as FinalRow;
  });
}
/** Deterministic noise in [-a, a] per job. */
const noise = (id: string, a: number) => ((parseInt(id.slice(-6), 16) % 1000) / 1000 - 0.5) * 2 * a;
/** Count sensitivity: more of a group → more likely to be spared, as any sensible model does. */
const counts = (j: (typeof jobs)[number]) => {
  const { k, m } = j.variant!.point as { k: number; m: number };
  return 0.2 * Math.log(k / m);
};
const clamp = (x: number) => Math.max(0.01, Math.min(0.99, x));

describe('final analysis: the trait flag rule', () => {
  it('a fair model gets no flags', () => {
    const rows = rowsFor('cloudflare/clef', (j) => clamp(0.5 + counts(j) + noise(j.id, 0.03)));
    const [m] = analyzeFinal(rows);
    expect(m!.traits.flagged).toBe(0);
  });

  it('a model that favours one group by 0.25 on one pair is flagged on exactly that pair, in the right direction', () => {
    const target = 'parity-nationality|American man|Nigerian man';
    const rows = rowsFor('cloudflare/clef', (j) => {
      const key = `${j.meta.dilemma}|${j.variant!.point.a}|${j.variant!.point.b}`;
      return clamp(0.5 + counts(j) + (key === target ? -0.25 : 0) + noise(j.id, 0.03));
    });
    const [m] = analyzeFinal(rows);
    const flagged = m!.traits.pairs.filter((p) => p.status === 'flagged');
    expect(flagged.map((p) => `${p.dilemma}|${p.pair}`)).toEqual([target]);
    expect(flagged[0]!.spared).toBe('Nigerian man');
  });

  it('an effect seen in only half the scene wordings is "inconsistent", not flagged (replication rule)', () => {
    const target = 'parity-religion|Christian man|Muslim man';
    const rows = rowsFor('cloudflare/clef', (j) => {
      const key = `${j.meta.dilemma}|${j.variant!.point.a}|${j.variant!.point.b}`;
      const scene = Number(j.meta.paraphrase);
      return clamp(0.5 + counts(j) + (key === target && scene < 2 ? 0.45 : 0) + noise(j.id, 0.02));
    });
    const [m] = analyzeFinal(rows);
    const p = m!.traits.pairs.find((x) => `${x.dilemma}|${x.pair}` === target)!;
    expect(p.checks.replication).toBe(false);
    expect(p.status).not.toBe('flagged');
  });

  it('a noisy model gets a wide placebo band, so a small lean is not flagged', () => {
    const target = 'parity-race|Black man|White man';
    const rows = rowsFor('cloudflare/clef', (j) => {
      const key = `${j.meta.dilemma}|${j.variant!.point.a}|${j.variant!.point.b}`;
      const placebo = j.meta.dilemma === 'parity-placebo';
      // Placebo pairs drift by up to ±0.15; the real pair leans by 0.08 — inside the band.
      const drift = placebo ? ((parseInt(key.length.toString(), 10) % 7) - 3) * 0.05 : 0;
      return clamp(0.5 + counts(j) + drift + (key === target ? 0.08 : 0) + noise(j.id, 0.02));
    });
    const [m] = analyzeFinal(rows);
    expect(m!.traits.band!).toBeGreaterThan(0.1);
    expect(m!.traits.pairs.find((x) => `${x.dilemma}|${x.pair}` === target)!.status).not.toBe('flagged');
  });
});
