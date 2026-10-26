// site/v6: the findings as share cards first, the evidence behind each one a tap away.
// Reads site/v5/data.js (built from the raw answers by scripts/site-v5.ts) plus a raw pass for the counts v5 does not
// carry (scripts/site-v6-facts.ts). Writes:
//   site/v6/cards/<id>.png (portrait 1080×1350), -sq (1080×1080), -story (1080×1920), -x (1200×675, link previews),
//   -sm.jpg (a small page image), the two animations (.mp4 + .gif), and site/v6/data.js (window.CARDS: every card's
//   headline, proof line, numbers and file names, in ranked order). test/site-v6-verify.test.ts recounts the numbers.
import { execSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { buildScience } from './site-v6-science.js';
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
  // the opening: the try-it frame
  { id: '01-photo', story: 'open', tier: 1, evidence: '#top', with: ['41-live-counted'] },
  // step 4, the tram depot: the step's own findings, then its hall of shame
  { id: '41-live-counted', story: 'real', tier: 1, evidence: '#real', with: ['05-split'] },
  { id: '05-split', story: 'real', tier: 1, evidence: '#real', with: ['28-flip'] },
  { id: '28-flip', story: 'real', tier: 2, evidence: '#real', with: ['23-lineup'] },
  { id: '23-lineup', story: 'real', tier: 2, evidence: '#real', with: [] },
  { id: '04-rule', story: 'real', tier: 1, evidence: '#real', with: ['32-rule-backfired'] },
  { id: '32-rule-backfired', story: 'real', tier: 1, evidence: '#real', with: ['04-rule'] },
  { id: '33-brake-fault', story: 'real', tier: 1, evidence: '#real', with: [] },
  { id: '03-photo-live', story: 'real', tier: 2, evidence: '#real', with: [] },
  { id: '02-photo-group', story: 'real', tier: 2, evidence: '#real', with: [] },
  { id: '38-luna-counted', story: 'real', tier: 2, evidence: '#real', with: [] },
  // step 3, two strangers
  { id: '25-backing', story: 'impossible', tier: 1, evidence: '#impossible', with: ['09-fork-race'] },
  { id: '09-fork-race', story: 'impossible', tier: 1, evidence: '#impossible', with: ['25-backing'] },
  { id: '37-jev', story: 'impossible', tier: 2, evidence: '#impossible', with: ['09-fork-race'] },
  { id: '06-fork-age', story: 'impossible', tier: 1, evidence: '#impossible', with: [] },
  { id: '07-fork-wealth', story: 'impossible', tier: 2, evidence: '#impossible', with: [] },
  { id: '27-order', story: 'impossible', tier: 2, evidence: '#impossible', with: [] },
  { id: '24-podium', story: 'impossible', tier: 2, evidence: '#impossible', with: [] },
  { id: '30-four-ways', story: 'impossible', tier: 3, evidence: '#impossible', with: [] },
  // step 2, one life for five
  { id: '13-organs', story: 'hard', tier: 1, evidence: '#hard', with: ['34-acceptable'] },
  { id: '34-acceptable', story: 'hard', tier: 2, evidence: '#hard', with: [] },
  { id: '60-hard-laya', story: 'hard', tier: 3, evidence: '#hard', with: [] },
  { id: '61-hard-flash', story: 'hard', tier: 3, evidence: '#hard', with: [] },
  { id: '62-hard-mercury', story: 'hard', tier: 3, evidence: '#hard', with: [] },
  { id: '63-hard-microsoft', story: 'hard', tier: 3, evidence: '#hard', with: [] },
  { id: '64-hard-order', story: 'hard', tier: 3, evidence: '#hard', with: [] },
  { id: '65-hard-cloudflare', story: 'hard', tier: 3, evidence: '#hard', with: [] },
  // step 1, questions with one right answer
  { id: '50-low-laya', story: 'obvious', tier: 2, evidence: '#obvious', with: [] },
  { id: '51-low-solar', story: 'obvious', tier: 3, evidence: '#obvious', with: [] },
  { id: '52-low-omni', story: 'obvious', tier: 3, evidence: '#obvious', with: [] },
  { id: '53-low-luna', story: 'obvious', tier: 3, evidence: '#obvious', with: [] },
  { id: '54-low-d1', story: 'obvious', tier: 3, evidence: '#obvious', with: [] },
  { id: '55-low-flash', story: 'obvious', tier: 2, evidence: '#obvious', with: [] },
];
/** Swipe sets: the card that leads, and the cards that complete the picture (the defence comes with the claim). */
export const STORIES: Record<string, { title: string; dek: string }> = {
  open: { title: 'The opening', dek: 'The frame you answered at the top of the page.' },
  obvious: { title: 'Step 1: Questions with one right answer', dek: 'The lever, the control questions, words against pictures.' },
  hard: { title: 'Step 2: One life for five, made personal', dek: 'The lever, the loop, the trapdoor, the footbridge, the surgeon.' },
  impossible: { title: 'Step 3: Two strangers', dek: 'Two people, one on each track, the same in every way but one.' },
  real: { title: 'Step 4: The tram depot', dek: 'A real-looking routing request: a log, a schedule, a frame from the cab camera.' },
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
  // One zip of every card, every format, for press.
  execSync(`cd site/v6 && rm -f trolley-tests-cards.zip && zip -qr trolley-tests-cards.zip cards -x '*-sm.jpg'`);
  const openers = ['21a-you-photo', '22a-you-age'].map((id) => ({
    id,
    head: strip(byName.get(id)!.head),
    src: byName.get(id)!.src,
  }));
  // The native page draws its scenes in the browser with the same illustration kit, and uses the real frames.
  mkdirSync('site/v6/img', { recursive: true });
  for (const f of ['u-two-L.jpg', 'u-empty-L.jpg', 'w-group-L.jpg', 'x-two-R.jpg', 'x-group-L.jpg'])
    execSync(`cp assets/real-final/${f} site/v6/img/${f}`);
  execSync('cp site/v5/img/two-side-5v1-plain.png site/v6/img/');
  // the science page's realism ladder: the pilot rounds' frames, one rejected final-round candidate, every final frame
  for (const [from, to] of [['site/v5/img/v1-a-51.jpg', 'realism-v1.jpg'], ['site/v5/img/v2-c-group-L.jpg', 'realism-v2.jpg'], ['site/v5/img/v3-s-group-L.jpg', 'realism-v3.jpg'], ['scratch/final/r2/y-group-L-8.jpg', 'realism-rejected.jpg']])
    execSync(`cp ${from} site/v6/img/${to}`);
  for (const f of readdirSync('assets/real-final').filter((x) => x.endsWith('.jpg'))) execSync(`cp assets/real-final/${f} site/v6/img/${f}`);
  execSync(
    'npx esbuild scripts/press-kit.ts --bundle --format=iife --global-name=KIT --minify --outfile=site/v6/kit.js --log-level=warning',
  );
  // Launches and request volumes, copied from the public pages (research/decision-model-adoption.md).
  const adoption = JSON.parse(readFileSync('research/decision-model-adoption.json', 'utf8'));
  // two things the story quotes from the science page: the pre-registered predictions (held in both runs?) and how
  // real outside judges rated the frames against real photographs
  const SCI0 = buildScience(D, FX, B.F);
  const F3 = SCI0.predictions.find((x: any) => x.id === 'F3')!;
  (B.F as any).science = {
    predictions: SCI0.predictions.length,
    heldBoth: SCI0.predictions.filter((x: any) => (x.id === 'F3' ? x.res.every((r: any) => r.n === r.of) && F3.chat!.n === F3.chat!.of : x.res.every((r: any) => r.holds === true))).length,
    realism: { frames: SCI0.realism.rounds.at(-1).p, photos: SCI0.realism.photos.p, judges: 3 },
  };
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
  // the science page's data: every count behind the story, per AI, per run (scripts/site-v6-science.ts)
  const SCI = SCI0;
  writeFileSync('site/v6/science-data.js', `// Built by scripts/site-v6-science.ts. Do not edit.\nwindow.SCI = ${JSON.stringify(SCI)};\n`);
  stamp();
  console.log(`→ site/v6: ${out.length} cards × 4 formats, 2 openers, 1 animation, data.js, science-data.js`);
}
