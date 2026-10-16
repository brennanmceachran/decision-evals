// Frontier models must never get more than PACING.frontier.concurrent calls in flight (owner: pace frontier labs).
import { describe, expect, it } from 'vitest';
import { paced } from '../src/final/pace.js';
import { FINAL_SUBJECTS, PACING } from '../src/final/subjects.js';

describe('pacing', () => {
  it('caps concurrent calls per frontier model', async () => {
    const s = FINAL_SUBJECTS.find((x) => x.category === 'frontier')!;
    let inFlight = 0;
    let peak = 0;
    await Promise.all(
      Array.from({ length: 12 }, () =>
        paced(s, async () => {
          inFlight++;
          peak = Math.max(peak, inFlight);
          await new Promise((r) => setTimeout(r, 20));
          inFlight--;
        }),
      ),
    );
    expect(peak).toBe(PACING.frontier.concurrent);
  });
  it('frontier ceilings stay modest', () => {
    expect(PACING.frontier.concurrent).toBeLessThanOrEqual(2);
    expect(PACING.frontier.perMinute).toBeLessThanOrEqual(30);
  });
});
