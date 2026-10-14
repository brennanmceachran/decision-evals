// Does the same OpenRouter model id answer differently depending on the upstream host? Identical prompts, one host
// per call, fallbacks disabled. Saves every answer to results/host-check.json (the evidence behind host pinning).
// Usage: tsx --env-file=.env scripts/host-check.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import { callDecision } from '../src/call.js';
import { dataUrl } from '../src/render/diagram.js';
import { expand, loadDilemmas } from '../src/expand.js';
import { SUBJECTS } from '../src/subjects.js';
import { ask } from '../src/vision.js';

/** Model id → hosts to compare. First host is the one the study pins. */
const HOSTS: Record<string, string[]> = {
  'cloudflare/clef': ['Cloudflare', 'PrimeIntellect', 'DeepInfra'],
  'cloudflare/clef-flash': ['Cloudflare', 'PrimeIntellect'],
  'jaredpalmer/kev-4b': ['SiliconFlow', 'Phala'],
};
/** Fixed text sample (pilot game frame): the first N variants of each dilemma, 36 in total. */
const SAMPLE: Record<string, number> = { switch: 8, footbridge: 8, transplant: 8, 'parity-race': 6, 'exchange-age': 6 };
const variants = loadDilemmas('dilemmas')
  .filter((d) => d.id in SAMPLE)
  .flatMap((d) =>
    expand(d)
      .filter((v) => v.frame === 'game')
      .slice(0, SAMPLE[d.id]),
  );

const rows: unknown[] = [];
const summary: Record<string, unknown> = {};
for (const [id, hosts] of Object.entries(HOSTS)) {
  const base = SUBJECTS.find((s) => s.id === id)!;
  const p: Record<string, (number | null)[]> = {};
  for (const host of hosts) {
    const s = { ...base, host };
    p[host] = await Promise.all(
      variants.map(async (v) => {
        try {
          const o = await callDecision(s, v);
          const pAct = o.refused ? null : v.focalIds.reduce((sum, c) => sum + (o.dist[c] ?? 0), 0);
          rows.push({ model: id, host, variant: v.variantId, dilemma: v.dilemmaId, pAct, servedBy: o.servedBy });
          return pAct;
        } catch (e) {
          rows.push({ model: id, host, variant: v.variantId, error: (e as Error).message.slice(0, 200) });
          return null;
        }
      }),
    );
  }
  // Each non-pinned host against the pinned one, on variants both answered.
  const [pinned, ...others] = hosts;
  summary[id] = Object.fromEntries(
    others.map((h) => {
      const d = variants
        .map((_, i) => [p[pinned!]![i], p[h]![i]] as const)
        .filter(([a, b]) => a != null && b != null)
        .map(([a, b]) => Math.abs(a! - b!));
      return [
        `${pinned} vs ${h}`,
        { n: d.length, meanAbsDiff: d.reduce((x, y) => x + y, 0) / d.length, maxAbsDiff: Math.max(...d) },
      ];
    }),
  );
}

// Images: a plain red square (colour) and 3 figures (count), on each Clef host.
const RED = `data:image/png;base64,${new Resvg(
  '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="512" height="512" fill="#d00"/></svg>',
)
  .render()
  .asPng()
  .toString('base64')}`;
const images: Record<string, unknown> = {};
for (const host of HOSTS['cloudflare/clef']!) {
  const s = { ...SUBJECTS.find((x) => x.id === 'cloudflare/clef')!, host };
  try {
    const colour = await ask(
      s,
      { kind: 'image', url: RED },
      {
        colour: {
          type: 'choice',
          instructions: 'What colour is this image?',
          criteria: { red: 'Red', blue: 'Blue', green: 'Green' },
        },
      },
    );
    const count = await ask(
      s,
      { kind: 'image', url: dataUrl({ kind: 'two-side', left: 3, right: 3 }) },
      {
        count: {
          type: 'choice',
          instructions: 'How many people are in the left box?',
          criteria: Object.fromEntries([1, 2, 3, 4, 5].map((n) => [String(n), String(n)])),
        },
      },
    );
    images[host] = { colour: colour.colour, countLeftBoxTruth3: count.count };
  } catch (e) {
    images[host] = { error: (e as Error).message.slice(0, 200) };
  }
}

mkdirSync('results', { recursive: true });
writeFileSync(
  'results/host-check.json',
  JSON.stringify({ createdAt: new Date().toISOString(), variants: variants.length, summary, images, rows }, null, 1),
);
console.log(JSON.stringify({ summary, images }, null, 2));
