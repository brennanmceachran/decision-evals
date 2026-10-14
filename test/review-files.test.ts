// The committed review files must match what the code currently sends. If this fails, run `pnpm review` and commit.
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('review files are up to date', () => {
  it('review/cases-*.md and review/image-study.md match a fresh render', () => {
    const files = [
      'review/cases-game.md',
      'review/cases-narrative.md',
      'review/image-study.md',
      'review/cases-confirm.md',
      'review/real-study.md',
    ];
    const before = files.map((f) => readFileSync(f, 'utf8'));
    execSync('pnpm -s review', { stdio: 'ignore' });
    const after = files.map((f) => readFileSync(f, 'utf8'));
    files.forEach((f, i) => expect(after[i], `${f} is stale: run pnpm review`).toBe(before[i]));
  }, 120_000);
});
