// Freezes exactly what a run will send: dataset hash, every prompt hash, model ids and resolved versions,
// package versions, git commit. Write it before a run and commit it; publish it with the results.
// Usage: pnpm manifest [--out results/manifest.json]
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { expand, loadDilemmas } from '../src/expand.js';
import { SUBJECTS, CHAT_SAMPLES } from '../src/subjects.js';

const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1]! : 'results/manifest.json';
const sha = (s: string) => createHash('sha256').update(s).digest('hex');
const pkgVersion = (name: string) =>
  JSON.parse(readFileSync(`node_modules/${name}/package.json`, 'utf8')).version as string;

const dilemmas = loadDilemmas(process.env.DILEMMA_DIR ?? 'dilemmas').map((d) => {
  const vs = expand(d);
  return {
    id: d.id,
    module: d.module,
    fileSha256: sha(readFileSync(`${process.env.DILEMMA_DIR ?? 'dilemmas'}/${d.id}.yaml`, 'utf8')),
    variants: vs.length,
    byFrame: {
      narrative: vs.filter((v) => v.frame === 'narrative').length,
      game: vs.filter((v) => v.frame === 'game').length,
    },
    // Order-independent digest of every prompt this dilemma produces (main + probe calls).
    promptsSha256: sha(
      vs
        .map((v) => `${v.variantId}:${v.contentHash}:${v.probeHash ?? ''}`)
        .sort()
        .join('\n'),
    ),
  };
});

const git = (cmd: string) => {
  try {
    return execSync(`git ${cmd}`, { encoding: 'utf8' }).trim();
  } catch {
    return undefined;
  }
};

const manifest = {
  createdAt: new Date().toISOString(),
  git: { commit: git('rev-parse HEAD'), dirty: (git('status --porcelain') ?? '').length > 0 },
  packages: {
    ai: pkgVersion('ai'),
    '@ai-sdk/gateway': pkgVersion('@ai-sdk/gateway'),
    '@openrouter/ai-sdk-provider': pkgVersion('@openrouter/ai-sdk-provider'),
    promptfoo: pkgVersion('promptfoo'),
  },
  chatSamples: CHAT_SAMPLES,
  dilemmaDir: process.env.DILEMMA_DIR ?? 'dilemmas',
  chatSystemPrompt: process.env.CHAT_SYSTEM_PROMPT === 'pilot' ? 'pilot' : 'none',
  subjects: SUBJECTS.map(({ id, kind, route, base, host }) => ({ id, kind, route, base, host: host ?? null })),
  datasetSha256: sha(dilemmas.map((d) => `${d.id}:${d.promptsSha256}`).join('\n')),
  dilemmas,
};

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(manifest, null, 2) + '\n');
console.log(
  `dataset ${manifest.datasetSha256.slice(0, 16)} · ${dilemmas.reduce((s, d) => s + d.variants, 0)} variants · git ${manifest.git.commit?.slice(0, 7)}${manifest.git.dirty ? ' (dirty!)' : ''} → ${out}`,
);
