// Freezes the realistic study inputs before any data: trial ids, image hashes, models, hosts, code hashes, git commit.
// Usage: tsx scripts/real-manifest.ts
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { realTrials } from '../src/real-study.js';
import { SUBJECTS } from '../src/subjects.js';
import { canSeeImages } from '../src/vision.js';

const sha = (s: string | Buffer) => createHash('sha256').update(s).digest('hex');
const git = (c: string) => execSync(`git ${c}`, { encoding: 'utf8' }).trim();
const ts = realTrials();
writeFileSync(
  'results/manifest-real.json',
  JSON.stringify(
    {
      createdAt: new Date().toISOString(),
      git: { commit: git('rev-parse HEAD'), dirty: git('status --porcelain').length > 0 },
      code: Object.fromEntries(
        ['src/real-study.ts', 'src/real-analysis.ts', 'src/vision.ts', 'scripts/real-run.ts'].map((f) => [
          f,
          sha(readFileSync(f)),
        ]),
      ),
      images: Object.fromEntries([...new Set(ts.map((t) => t.image))].map((p) => [p, sha(readFileSync(p))])),
      imageModel: 'openai/gpt-image-2',
      models: SUBJECTS.filter(canSeeImages).map((s) => ({ id: s.id, kind: s.kind, host: s.host ?? null })),
      trials: ts.length,
      trialIds: ts.map((t) => t.id),
    },
    null,
    1,
  ),
);
console.log(`${ts.length} trials → results/manifest-real.json`);
