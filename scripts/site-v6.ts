// site/v6: the findings as share cards first, the evidence behind each one a tap away.
// Reads site/v5/data.js (built from the raw answers by scripts/site-v5.ts) plus a raw pass for the counts v5 does not
// carry (scripts/site-v6-facts.ts). Writes:
//   site/v6/cards/<id>.png (portrait 1080×1350), -sq (1080×1080), -story (1080×1920), -x (1200×675, link previews),
//   -sm.jpg (a small page image), the two animations (.mp4 + .gif), and site/v6/data.js (window.CARDS: every card's
//   headline, proof line, numbers and file names, in ranked order). test/site-v6-verify.test.ts recounts the numbers.
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { buildCards } from './site-v6-cards.js';
import { scanAll } from './site-v6-facts.js';
import { stamp } from './site-v6-stamp.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
const OUT = 'site/v6/cards';

/** Ranked by expected pickup (research/presentation-precedents.md). `story` groups cards into swipe sets. */
/** Ranked by expected pickup (research/presentation-precedents.md). `story` groups cards into swipe sets; `evidence`
   is the v5 section with the full counts; `with` are the cards to read (and share) alongside, so a claim travels with
   the context that keeps it honest. */
export const ORDER: { id: string; story: string; tier: 1 | 2 | 3; evidence: string; with: string[] }[] = [
  { id: '03-photo-live', story: 'tram', tier: 1, evidence: '#dashcam', with: [] },
  { id: '38-luna-counted', story: 'tram', tier: 1, evidence: '#dashcam', with: [] },
  { id: '09-fork-race', story: 'identity', tier: 1, evidence: '#traits', with: ['10-price', '31-only-11'] },
  { id: '25-backing', story: 'identity', tier: 1, evidence: '#traits', with: ['31-only-11'] },
  { id: '13-organs', story: 'dilemmas', tier: 1, evidence: '#lever', with: ['34-acceptable'] },
  { id: '06-fork-age', story: 'identity', tier: 1, evidence: '#traits', with: [] },
  { id: '35-women', story: 'identity', tier: 1, evidence: '#traits', with: ['31-only-11'] },
  { id: '32-rule-backfired', story: 'tram', tier: 1, evidence: '#dashcam', with: ['04-rule'] },
  { id: '05-split', story: 'tram', tier: 1, evidence: '#dashcam', with: ['28-flip'] },
  { id: '01-photo', story: 'tram', tier: 1, evidence: '#dashcam', with: ['23-lineup'] },
  { id: '34-acceptable', story: 'dilemmas', tier: 2, evidence: '#lever', with: [] },
  { id: '07-fork-wealth', story: 'identity', tier: 2, evidence: '#traits', with: [] },
  { id: '11-samebase', story: 'identity', tier: 2, evidence: '#traits', with: ['24-podium'] },
  { id: '04-rule', story: 'tram', tier: 2, evidence: '#dashcam', with: [] },
  { id: '37-jev', story: 'identity', tier: 2, evidence: '#traits', with: ['31-only-11'] },
  { id: '31-only-11', story: 'chance', tier: 2, evidence: '#traits', with: ['30-four-ways'] },
  { id: '33-brake-fault', story: 'tram', tier: 2, evidence: '#dashcam', with: [] },
  { id: '16-empty', story: 'dilemmas', tier: 2, evidence: '#fair', with: [] },
  { id: '27-order', story: 'identity', tier: 2, evidence: '#traits', with: [] },
  { id: '08-fork-35v80', story: 'identity', tier: 2, evidence: '#traits', with: [] },
  { id: '26-backing-faith', story: 'identity', tier: 3, evidence: '#traits', with: [] },
  { id: '30-four-ways', story: 'chance', tier: 3, evidence: '#traits', with: [] },
  { id: '36-coinflip', story: 'chance', tier: 3, evidence: '#traits', with: [] },
  { id: '14-footbridge', story: 'dilemmas', tier: 3, evidence: '#lever', with: [] },
  { id: '10-price', story: 'identity', tier: 3, evidence: '#traits', with: [] },
  { id: '23-lineup', story: 'tram', tier: 3, evidence: '#dashcam', with: [] },
  { id: '24-podium', story: 'identity', tier: 3, evidence: '#traits', with: [] },
  { id: '02-photo-group', story: 'tram', tier: 3, evidence: '#dashcam', with: [] },
  { id: '17-picture', story: 'tram', tier: 3, evidence: '#fair', with: [] },
  { id: '28-flip', story: 'tram', tier: 3, evidence: '#dashcam', with: [] },
  { id: '39-three-for-one', story: 'chance', tier: 3, evidence: '#traits', with: [] },
  { id: '40-nace-upgrade', story: 'chance', tier: 3, evidence: '#traits', with: [] },
  // step 1's lowlights, one card each
  { id: '50-low-laya', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '51-low-solar', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '52-low-omni', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '53-low-luna', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '54-low-d1', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '55-low-flash', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  // step 2's hall of shame, one card each
  { id: '60-hard-laya', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '61-hard-flash', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '62-hard-mercury', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '63-hard-microsoft', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '64-hard-order', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
  { id: '65-hard-cloudflare', story: 'dilemmas', tier: 3, evidence: '#fair', with: [] },
];
/** Swipe sets: the card that leads, and the cards that complete the picture (the defence comes with the claim). */
export const STORIES: Record<string, { title: string; dek: string }> = {
  tram: {
    title: 'The tram test',
    dek: 'A real-looking dashcam frame, a depot log asking for a route. No mention of people.',
  },
  identity: { title: 'Who gets saved', dek: 'Two strangers, one track each. Only one thing about them differs.' },
  dilemmas: {
    title: 'The classic dilemmas',
    dek: 'The thought experiments philosophers use, next to what people answer.',
  },
  chance: { title: 'Mostly, it isn’t choosing', dek: 'Swap the tracks or the buttons, and most answers change.' },
};

const strip = (s: string) => s.replace(/[{}]/g, '');
if (import.meta.url === `file://${process.argv[1]}`) {
  const D: any = (() => {
    const w: any = {};
    new Function('window', readFileSync('site/v5/data.js', 'utf8'))(w);
    return w.DATA;
  })();
  const FX = await scanAll();
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });
  const B = buildCards(D, FX, OUT);
  const byName = new Map(B.cards.map((c) => [c.name, c]));
  const out: any[] = [];
  for (const [rank, o] of ORDER.entries()) {
    const c = byName.get(o.id);
    if (!c) throw new Error(`no card ${o.id}`);
    const base = { ...c, format: undefined };
    B.compose({ ...base, name: o.id });
    B.compose({ ...base, name: `${o.id}-sq`, format: 'square' });
    B.compose({ ...base, name: `${o.id}-story`, format: 'story' });
    B.compose({ ...base, name: `${o.id}-x`, format: 'landscape' });
    execSync(`ffmpeg -y -loglevel error -i ${OUT}/${o.id}.png -vf scale=720:-1 -q:v 4 ${OUT}/${o.id}-sm.jpg`);
    out.push({
      id: o.id,
      rank: rank + 1,
      tier: o.tier,
      story: o.story,
      evidence: o.evidence,
      with: o.with,
      head: strip(c.head),
      headHi: c.head,
      src: c.src,
      dark: !!c.dark,
      drawn: {
        portrait: B.drawn[o.id],
        square: B.drawn[`${o.id}-sq`],
        story: B.drawn[`${o.id}-story`],
        x: B.drawn[`${o.id}-x`],
      },
    });
  }
  // The two "you choose" openers and their answer cards.
  for (const n of ['21a-you-photo', '22a-you-age']) {
    const c = byName.get(n)!;
    B.compose({ ...c, name: n });
    execSync(`ffmpeg -y -loglevel error -i ${OUT}/${n}.png -vf scale=720:-1 -q:v 4 ${OUT}/${n}-sm.jpg`);
  }
  // Animations: the number fades into a fixed slot (no reflow); it never shows a value mid-count.
  const video = (name: string, frames: any[], hold: number) => {
    const fr = `${OUT}/frames-${name}`;
    mkdirSync(fr, { recursive: true });
    frames.forEach((c, i) => B.compose({ ...c, name: `frames-${name}/f${String(i).padStart(3, '0')}` }));
    const last = frames.length - 1;
    for (let i = 1; i <= hold; i++)
      execSync(`cp ${fr}/f${String(last).padStart(3, '0')}.png ${fr}/f${String(last + i).padStart(3, '0')}.png`);
    execSync(
      `ffmpeg -y -loglevel error -framerate 24 -i ${fr}/f%03d.png -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart ${OUT}/${name}.mp4`,
    );
    execSync(
      `ffmpeg -y -loglevel error -framerate 24 -i ${fr}/f%03d.png -vf "scale=540:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=160[p];[b][p]paletteuse=dither=bayer" ${OUT}/${name}.gif`,
    );
    rmSync(fr, { recursive: true, force: true });
  };
  const fade = (i: number, at: number, len = 7) => Math.max(0, Math.min(1, (i - at) / len));
  const ease = (u: number) => (u < 0 ? 0 : u > 1 ? 1 : u * u * (3 - 2 * u));
  const photoCard = byName.get('01-photo')!;
  video(
    'anim-photo',
    Array.from({ length: 46 }, (_, i) => ({
      ...photoCard,
      hiOpacity: fade(i, 31),
      visual: B.photoVis({ ...B.PH.two, progress: Math.min(1, i / 30) }),
    })),
    48,
  );
  const ageCard = byName.get('06-fork-age')!;
  const top = { label: '1 child,\naged 8', kind: 'child', n: 1, o: { shirt: B.GREEN } };
  const bot = { label: '3 people\naged 80', kind: 'elder', n: 3 };
  video(
    'anim-fork',
    Array.from({ length: 60 }, (_, i) => ({
      ...ageCard,
      hiOpacity: fade(i, 43),
      visual: B.forkVis(top as any, bot as any, i >= 12 ? 'bottom' : null, {
        reveal: ease((i - 14) / 26),
        skulls: i >= 42,
        tramDx: 20 * ease((i - 14) / 26),
      }),
    })),
    48,
  );
  // One zip of every card, every format, for press.
  execSync(`cd site/v6 && rm -f trolley-tests-cards.zip && zip -qr trolley-tests-cards.zip cards -x '*-sm.jpg'`);
  const openers = ['21a-you-photo', '22a-you-age'].map((id) => ({
    id,
    head: strip(byName.get(id)!.head),
    src: byName.get(id)!.src,
  }));
  // The native page draws its scenes in the browser with the same illustration kit, and uses the real frames.
  mkdirSync('site/v6/img', { recursive: true });
  for (const f of ['u-two-L.jpg', 'w-group-L.jpg', 'x-two-R.jpg', 'x-group-L.jpg'])
    execSync(`cp assets/real-final/${f} site/v6/img/${f}`);
  execSync('cp site/v5/img/two-side-5v1-plain.png site/v6/img/');
  execSync(
    'npx esbuild scripts/press-kit.ts --bundle --format=iife --global-name=KIT --minify --outfile=site/v6/kit.js --log-level=warning',
  );
  // Launches and request volumes, copied from the public pages (research/decision-model-adoption.md).
  const adoption = JSON.parse(readFileSync('research/decision-model-adoption.json', 'utf8'));
  const meta = {
    built: 'scripts/site-v6.ts',
    site: D.site,
    totals: D.totals,
    stories: STORIES,
    cards: out,
    openers,
    facts: B.F,
    adoption,
  };
  writeFileSync(
    'site/v6/data.js',
    `// Built by scripts/site-v6.ts. Do not edit.\nwindow.CARDS = ${JSON.stringify(meta)};\n`,
  );
  stamp();
  console.log(`→ site/v6: ${out.length} cards × 4 formats, 2 openers, 2 animations, data.js`);
}
