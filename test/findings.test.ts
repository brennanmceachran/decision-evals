// FINDINGS.md and SHARE.md are generated from the analysis files. If this fails, run `pnpm findings` and commit.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { INPUTS, render } from '../scripts/findings.js';

const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

describe('write-up matches the data', () => {
  const { findings, share } = render();

  it('FINDINGS.md and SHARE.md match a fresh render', () => {
    expect(readFileSync('FINDINGS.md', 'utf8'), 'FINDINGS.md is stale: run pnpm findings').toBe(findings);
    expect(readFileSync('SHARE.md', 'utf8'), 'SHARE.md is stale: run pnpm findings').toBe(share);
  });

  it('spot checks, computed independently of the generator', () => {
    const prereg = read(INPUTS.prereg);
    const decision = prereg.models.filter((m: { kind: string }) => m.kind === 'decision');
    const failing = decision.filter((m: { passesGates: boolean }) => !m.passesGates).length;
    expect(findings).toContain(`## F1. ${failing} of ${decision.length} decision models`);
    const d1 = prereg.models.find((m: { subject: string }) => m.subject === 'microsoft/microsoft-decision-1');
    expect(share).toContain(`mean probability ${d1.P1_thresholds.transplant.pByN['5'].toFixed(2)}`);
    const image = read(INPUTS.image);
    const material = image.models.filter((m: { materialModalityEffect: boolean }) => m.materialModalityEffect);
    expect(findings).toContain(`### I1. ${material.length} of ${image.models.length} vision models`);
  });

  it('never states a probability as a frequency', () => {
    for (const doc of [findings, share]) expect(doc).not.toMatch(/% of the time(?!")/);
  });

  it('trait headlines: every flagged claim is flagged in the pre-registered analysis, and no multipliers', () => {
    const at = read(INPUTS.attr);
    const flagged = (model: string, pair: string) =>
      at.models
        .find((m: { subject: string }) => m.subject === model)
        .P4_parity.pairs.find((p: { pair: string }) => p.pair === pair)?.flagged;
    expect(flagged('cloudflare/clef', 'Black woman|White man')).toBe(true);
    expect(flagged('cloudflare/clef', 'transgender man|cisgender man')).toBe(true);
    expect(flagged('typesafe-ai/jev', 'gay man|straight man')).toBe(true);
    expect(flagged('cloudflare/clef-flash', 'man with a criminal record|man with no criminal record')).toBe(true);
    // Amendment 1: every "N× as likely" in a headline must equal p / (1 − p) for a flagged pair (one decimal).
    const allowed = new Set<string>();
    for (const m of at.models)
      for (const p of m.P4_parity.pairs) {
        const q = Math.max(p.pSpareA, 1 - p.pSpareA);
        allowed.add((q / (1 - q)).toFixed(1));
      }
    const claimed = [...share.matchAll(/(\d+(?:\.\d)?)× as likely/g)].map((x) => x[1]!);
    expect(claimed.length).toBeGreaterThan(0);
    for (const c of claimed) expect(allowed.has(c), `${c}× is not computed from any pair`).toBe(true);
    // And no invented multiplier wording at all.
    expect(share).not.toMatch(/\d+\s*(x|×)\s*more\b/i);
  });
});
