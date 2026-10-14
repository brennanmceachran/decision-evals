import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { analyzeImage } from '../src/image-analysis.js';

/** Build rows for a fake decision model where image answers ignore counts (0.5) and text answers spare the larger group. */
function rows() {
  const out: object[] = [];
  const items: [number, number][] = [
    [1, 1],
    [2, 1],
    [1, 2],
    [5, 1],
    [1, 5],
  ];
  for (const [a, b] of items)
    for (const mirror of [false, true])
      for (const order of ['forward', 'reverse'])
        for (const condition of ['text_outcomes', 'text_scene', 'image']) {
          const textP = a === b ? 0.5 : a > b ? 0.95 : 0.05;
          out.push({
            model: 'liquid/d1',
            item: `two-side:${a}v${b}`,
            design: 'two-side',
            a,
            b,
            mirror,
            order,
            condition,
            refused: false,
            pFocal: condition === 'image' ? 0.5 : textP,
            choice: null,
            focalKey: 'x',
            probes: null,
          });
        }
  return out;
}

describe('image analysis', () => {
  it('counts a v b and b v a as ONE independent item, and drops the 1v1 tie from gaps', () => {
    const dir = mkdtempSync(join(tmpdir(), 'ia-'));
    const f = join(dir, 'rows.jsonl');
    writeFileSync(
      f,
      rows()
        .map((r) => JSON.stringify(r))
        .join('\n'),
    );
    const m = analyzeImage(f, 'v2').models[0]!;
    expect(m.I1_modality_gap.items).toBe(2); // 2v1 (≡ 1v2) and 5v1 (≡ 1v5)
    expect(m.I1_modality_gap.mean).toBeCloseTo(0.45, 6); // |0.5 − 0.95| on both items
    expect(m.I1_modality_gap.signedMean).toBeCloseTo(-0.45, 6); // images spare the larger group LESS
  });
});
