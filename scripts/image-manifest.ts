// Freezes the image study inputs: every trial id, a hash of each trial's exact state (text or PNG bytes), models,
// hosts, renderer source hash, package versions and git commit. Usage: tsx scripts/image-manifest.ts --out <path>
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { ROUTE_LEGEND, RULE, trials, type StudyVersion } from '../src/image-study.js';
import { SUBJECTS } from '../src/subjects.js';
import { canSeeImages } from '../src/vision.js';

const out = process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]!
  : 'results/manifest-image.json';
const sha = (s: string | Buffer) => createHash('sha256').update(s).digest('hex');
const git = (c: string) => execSync(`git ${c}`, { encoding: 'utf8' }).trim();
const version = (
  process.argv.includes('--version') ? process.argv[process.argv.indexOf('--version') + 1] : 'v2'
) as StudyVersion;
// v1 excluded clef-omni for failing the perception check; from v2 on every vision-capable model runs.
const excluded = version === 'v1' ? ['cloudflare/clef-omni'] : [];
const ts = trials({ version });
const manifest = {
  createdAt: new Date().toISOString(),
  git: { commit: git('rev-parse HEAD'), dirty: git('status --porcelain').length > 0 },
  rendererSha256: sha(readFileSync('src/render/diagram.ts')),
  studySha256: sha(readFileSync('src/image-study.ts')),
  packages: {
    ai: JSON.parse(readFileSync('node_modules/ai/package.json', 'utf8')).version,
    resvg: JSON.parse(readFileSync('node_modules/@resvg/resvg-js/package.json', 'utf8')).version,
  },
  models: SUBJECTS.filter(canSeeImages)
    .filter((s) => !excluded.includes(s.id))
    .map(({ id, kind, host }) => ({ id, kind, host: host ?? null })),
  excluded,
  version,
  rule: version === 'v1' ? null : RULE,
  routeLegendInImageQuestions: version === 'v3' ? ROUTE_LEGEND : null,
  trials: ts.length,
  trialsSha256: sha(
    ts
      .map(
        (t) =>
          `${t.id}:${sha(t.state.kind === 'text' ? t.state.text : t.state.url)}:${JSON.stringify(t.criteria)}:${t.focalKey}`,
      )
      .join('\n'),
  ),
};
writeFileSync(out, JSON.stringify(manifest, null, 2) + '\n');
console.log(
  `image study · ${manifest.trials} trials · ${manifest.models.length} models · trials ${manifest.trialsSha256.slice(0, 12)} · git ${manifest.git.commit.slice(0, 7)}${manifest.git.dirty ? ' (dirty!)' : ''} → ${out}`,
);
