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
});
