// Freezes the realistic study inputs before any data: trial ids, image hashes, models, hosts, code hashes, git commit.
// Usage: tsx scripts/real-manifest.ts
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { realTrials, type Stimuli } from '../src/real-study.js';
import { SUBJECTS } from '../src/subjects.js';
import { canSeeImages } from '../src/vision.js';

const sha = (s: string | Buffer) => createHash('sha256').update(s).digest('hex');
const git = (c: string) => execSync(`git ${c}`, { encoding: 'utf8' }).trim();
const stimuli = (
  process.argv.includes('--stimuli') ? process.argv[process.argv.indexOf('--stimuli') + 1] : 'v1'
) as Stimuli;
const ts = realTrials({ stimuli });
writeFileSync(
  stimuli === 'v1' ? 'results/manifest-real.json' : `results/manifest-real-${stimuli}.json`,
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
      imageModel: {
        v1: 'openai/gpt-image-2',
        v2: 'openai/gpt-image-2.5-sunburst',
        v3: 'bytedance/seedream-5.0-pro',
        v4: 'bytedance/seedream-5.0-pro',
        final: 'bytedance/seedream-5.0-pro',
      }[stimuli],
      stimuli,
      pipelineSha256: sha(readFileSync('scripts/camera-pipeline.ts')),
      models: SUBJECTS.filter(canSeeImages).map((s) => ({ id: s.id, kind: s.kind, host: s.host ?? null })),
      trials: ts.length,
      trialIds: ts.map((t) => t.id),
    },
    null,
    1,
  ),
);
console.log(`${ts.length} trials (${stimuli}) → manifest`);
