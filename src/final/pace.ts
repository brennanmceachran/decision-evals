/**
 * Per-model request pacing (src/final/subjects.ts PACING). Every outbound call in the final study goes through
 * `paced`, so no script can exceed a model's concurrency or per-minute ceiling.
 */
import { PACING, type FinalSubject } from './subjects.js';

interface Gate {
  active: number;
  waiters: (() => void)[];
  starts: number[];
}
const gates = new Map<string, Gate>();
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function paced<T>(s: FinalSubject, fn: () => Promise<T>): Promise<T> {
  const { concurrent, perMinute } = PACING[s.category];
  const g = gates.get(s.id) ?? { active: 0, waiters: [], starts: [] };
  gates.set(s.id, g);
  // Concurrency: wait for a free slot.
  while (g.active >= concurrent) await new Promise<void>((r) => g.waiters.push(r));
  g.active++;
  try {
    // Rate: at most perMinute starts in any rolling 60 s window.
    for (;;) {
      const now = Date.now();
      while (g.starts.length && now - g.starts[0]! > 60_000) g.starts.shift();
      if (g.starts.length < perMinute) break;
      await sleep(60_000 - (now - g.starts[0]!) + 50);
    }
    g.starts.push(Date.now());
    return await fn();
  } finally {
    g.active--;
    g.waiters.shift()?.();
  }
}
