// Share cards for site/v5 (v3's cards, redrawn from the final study's data and stimuli): one per finding (1080×1350) plus an Open Graph image (1200×630), in the v3 colour
// meanings (teal = first option, purple = the other, red ✗/flag = flag or wrong, green ✓ = right). The takeaway is
// the headline, the picture shows the question, and a method strip keeps a screenshot honest on its own.
// Drawn as SVG from the same DATA as the page; rasterised with resvg using system fonts.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import type { buildV5 } from './site-v5.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
type D = ReturnType<typeof buildV5>;
type Row = any;
const SERIF = 'Charter, Georgia, serif';
const SIGN = "'DIN Alternate', 'Helvetica Neue', Arial, sans-serif";
const C = {
  paper: '#f6f6f2',
  ink: '#14161a',
  muted: '#6c7178',
  rule: '#dcdcd4',
  track: '#8c9196',
  amber: '#e8b400',
  a: '#00897b',
  b: '#7b4fb3',
  flag: '#c62828',
  ok: '#2e7d32',
};
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const wrap = (text: string, n: number) => {
  const out: string[] = [];
  let line = '';
  for (const w of text.split(' ')) {
    if (`${line} ${w}`.trim().length > n) {
      out.push(line.trim());
      line = w;
    } else line += ` ${w}`;
  }
  if (line.trim()) out.push(line.trim());
  return out;
};
const lines = (x: number, y: number, ls: string[], size: number, lh: number, attrs: string) =>
  ls.map((l, i) => `<text x="${x}" y="${y + i * lh}" font-size="${size}" ${attrs}>${esc(l)}</text>`).join('');
const jpeg = (p: string) => `data:image/jpeg;base64,${readFileSync(p).toString('base64')}`;
const png64 = (p: string) => `data:image/png;base64,${readFileSync(p).toString('base64')}`;

/** A fork: tram, two tracks, a label on each. */
function fork(x: number, y: number, w: number, top: string, bottom: string, topColor = C.a, botColor = C.b) {
  const r = (d: string) => `<path d="${d}" fill="none" stroke="${C.track}" stroke-width="7" stroke-linecap="round"/>`;
  return (
    r(`M${x} ${y + 70} H${x + 160}`) +
    r(`M${x + 160} ${y + 70} Q${x + 220} ${y + 70} ${x + 250} ${y + 18} H${x + w}`) +
    r(`M${x + 160} ${y + 70} Q${x + 220} ${y + 70} ${x + 250} ${y + 122} H${x + w}`) +
    `<rect x="${x + 4}" y="${y + 54}" width="56" height="32" rx="7" fill="${C.amber}" stroke="#8a5f00" stroke-width="3"/>` +
    `<text x="${x + 270}" y="${y + 6}" font-family="${SIGN}" font-size="34" font-weight="700" fill="${topColor}">${esc(top)}</text>` +
    `<text x="${x + 270}" y="${y + 160}" font-family="${SIGN}" font-size="34" font-weight="700" fill="${botColor}">${esc(bottom)}</text>`
  );
}
/** A small red flag, as on the page. */
const flag = (x: number, y: number, k = 1) =>
  `<g transform="translate(${x} ${y}) scale(${k})"><rect x="0" y="0" width="3" height="28" fill="${C.ink}"/><path d="M3 2h17l-4.5 6.5 4.5 6.5H3z" fill="${C.flag}"/></g>`;
function squares(
  c: { toward: number; away: number; refused: number },
  x: number,
  y: number,
  cols: number,
  cell: number,
  towardColor = C.b,
  awayColor = C.a,
) {
  const cells = [
    ...Array(c.toward).fill(towardColor),
    ...Array(c.away).fill(awayColor),
    ...Array(c.refused).fill('none'),
  ];
  return cells
    .map((f, i) => {
      const cx = x + (i % cols) * cell;
      const cy = y + Math.floor(i / cols) * cell;
      return f === 'none'
        ? `<rect x="${cx + 2}" y="${cy + 2}" width="${cell - 4}" height="${cell - 4}" rx="3" fill="none" stroke="#bbb" stroke-dasharray="3 2"/>`
        : `<rect x="${cx + 2}" y="${cy + 2}" width="${cell - 4}" height="${cell - 4}" rx="3" fill="${f}"/>`;
    })
    .join('');
}

function card(d: D, h: D['headlinesV2'][number]): string {
  const W = 1080;
  const H = 1350;
  const night = h.anchor === 'dashcam';
  const bg = night ? '#0e1418' : C.paper;
  const ink = night ? '#e8ecee' : C.ink;
  const muted = night ? '#93a0a8' : C.muted;
  let s = `<rect width="${W}" height="${H}" fill="${bg}"/>`;
  s += `<rect x="0" y="0" width="${W}" height="64" fill="${C.ink}"/><circle cx="62" cy="32" r="9" fill="${C.amber}"/><text x="82" y="41" font-family="${SIGN}" font-size="26" fill="${C.amber}">The Trolley Tests</text><text x="${W - 60}" y="41" text-anchor="end" font-family="${SIGN}" font-size="24" fill="#aeb4ba">${esc(h.study)}</text>`;
  // Visual (top)
  let y = 120;
  const vis = (() => {
    const pair: Record<string, [string, string]> = {
      race: ['1 Black woman', '1 White woman'],
      trans: ['1 transgender man', '1 cisgender man'],
      gay: ['1 gay man', '1 straight man'],
      record: ['1 man, no record', '1 man with a record'],
      politics: ['1 Republican man', '1 Democrat man'],
    };
    if (h.chart && pair[h.id]) {
      // Every model that picked a side on this pair (outside its own noise band), the headline model first: a red flag,
      // the name, and its count. Up to 6 rows; the rest are counted.
      const sc = d.scenarios.pairs.find((p: Row) => p.pair === h.chart!.pair)!;
      // Firm picks only (every run; chat: its one run). One-run picks are counted in the line below.
      const oneRun = sc.rows.filter((r: Row) => r.flagged && String(r.how).startsWith('run')).length;
      const fl = sc.rows
        .filter((r: Row) => r.flagged && !String(r.how).startsWith('run'))
        .sort((p: Row, q: Row) =>
          p.id === h.chart!.model ? -1 : q.id === h.chart!.model ? 1 : q.count[0] - p.count[0],
        );
      let v = fork(60, y + 30, 960, pair[h.id]![0], pair[h.id]![1]);
      const N = 6;
      fl.slice(0, N).forEach((r: Row, i: number) => {
        const yy = y + 250 + i * 52;
        const chat = d.models.find((m) => m.id === r.id)!.kind === 'chat';
        v +=
          flag(60, yy - 22) +
          `<text x="96" y="${yy}" font-family="${SIGN}" font-size="28" fill="${ink}" font-weight="${i === 0 ? 700 : 400}">${esc(d.names[r.id]!)}</text><text x="${W - 60}" y="${yy}" text-anchor="end" font-family="${SIGN}" font-size="28" fill="${C.flag}" font-weight="700">${r.spared !== fl[0].spared ? `${esc(r.spared)} · ` : ''}${chat ? `${r.count[0]} of ${r.of[0]} (one run)` : `${r.count[0]} of ${r.of[0]}${r.count[1] !== r.count[0] ? ` · r2 ${r.count[1]}` : ''}`}</text>`;
      });
      const more = fl.length - Math.min(fl.length, N);
      const cleanN = sc.rows.length - fl.length - oneRun;
      v += `<text x="60" y="${y + 250 + Math.min(fl.length, N) * 52 + 10}" font-family="${SIGN}" font-size="24" fill="${muted}">${more ? `${more} more picked a side. ` : ''}${oneRun ? `${oneRun} in one run only. ` : ''}The other ${cleanN} stayed inside their own noise.</text>`;
      return { svg: v, h: 250 + Math.min(fl.length, N) * 52 + 40 };
    }
    if (h.id === 'politics')
      return {
        svg:
          fork(60, y + 30, 960, '1 Republican man', '1 Democrat man') +
          `<text x="60" y="${y + 300}" font-family="${SIGN}" font-size="30" fill="${C.ink}">${h.big} of ${d.totals.models} models picked a side beyond their own noise</text>`,
        h: 340,
      };
    if (h.id === 'routing' || h.id === 'rule' || h.id === 'nodiff') {
      const ih = h.id === 'nodiff' ? 540 : 380;
      const img = `<image href="${jpeg(h.id === 'routing' ? 'assets/real-final/u-two-L.jpg' : 'assets/real-final/u-group-L.jpg')}" x="60" y="${y}" width="960" height="${ih}" preserveAspectRatio="xMidYMid slice"/><rect x="72" y="${y + 12}" width="170" height="32" rx="4" fill="rgba(0,0,0,.55)"/><text x="84" y="${y + 35}" font-family="Menlo, monospace" font-size="18" fill="#fff">● CAB-T7 FWD</text>`;
      const b = y + ih + 40; // first row below the photo
      let extra = '';
      if (h.id === 'routing') {
        const t = d.routingTwo;
        extra +=
          `<text x="60" y="${b}" font-family="${SIGN}" font-size="24" fill="${muted}">Routing job, other track empty: ${t.toward} of ${t.of} sent toward the workers (run 1)</text>` +
          squares({ toward: t.toward, away: t.of - t.toward, refused: 0 }, 60, b + 14, 32, 30);
        return { svg: img + extra, h: ih + 40 + 60 };
      }
      if (h.id === 'rule') {
        for (const [i, id] of [
          'cloudflare/clef-omni',
          'cloudflare/clef-flash',
          'perplexity/pplx-decider-v1.2',
        ].entries()) {
          const m = d.dash[id]!;
          extra +=
            `<text x="60" y="${b + i * 120}" font-family="${SIGN}" font-size="22" fill="${muted}">${esc(d.names[id]!)}: ${m.safety.toward} toward, ${m.safety.away} away (run 1)</text>` +
            squares(m.safety, 60, b + 10 + i * 120, 64, 15);
        }
        return { svg: img + extra, h: ih + 40 + 340 };
      }
      return { svg: img, h: ih };
    }
    if (h.id === 'transplant') {
      const tp = d.dilemmaCounts.transplant!;
      const r0w = tp[0]!.of * 30 - 5;
      let v = '';
      tp.forEach((r, i) => {
        const yy = y + 20 + i * 80;
        v += `<text x="60" y="${yy + 38}" font-family="${SIGN}" font-size="26" fill="${ink}">${r.n} patient${r.n === 1 ? '' : 's'}</text>`;
        for (let k = 0; k < r.of; k++)
          v += `<rect x="${240 + k * 30}" y="${yy + 8}" width="25" height="40" rx="4" fill="${k < r.acting ? C.a : '#e2e2da'}"/>`;
        v += `<text x="${W - 60}" y="${yy + 38}" text-anchor="end" font-family="${SIGN}" font-size="30" font-weight="700" fill="${C.a}">${r.acting}</text>`;
      });
      const yy = y + 20 + tp.length * 80;
      const hp = (d.human as Record<string, { value: number }>).transplant!.value;
      v += `<text x="60" y="${yy + 38}" font-family="${SIGN}" font-size="26" fill="${ink}">Humans</text><rect x="240" y="${yy + 24}" width="${r0w}" height="8" rx="4" fill="#e2e2da"/><circle cx="${240 + hp * r0w}" cy="${yy + 10}" r="7" fill="${C.ink}"/><rect x="${240 + hp * r0w - 8}" y="${yy + 19}" width="16" height="24" rx="5" fill="${C.ink}"/><text x="${W - 60}" y="${yy + 38}" text-anchor="end" font-family="${SIGN}" font-size="30" font-weight="700" fill="${ink}">${Math.round(hp * 100)}%</text>`;
      v += `<text x="60" y="${yy + 100}" font-family="${SIGN}" font-size="22" fill="${muted}">Each square: one AI. Teal: took his organs in most of 8 versions (run 1). The figure: humans who say it’s permissible.</text>`;
      return { svg: v, h: (tp.length + 1) * 80 + 90 };
    }
    if (h.id === 'picture') {
      const rc = d.rightCalls['cloudflare/clef-flash']!;
      const mark = (x: number, yy: number, ok: boolean) =>
        `<rect x="${x}" y="${yy}" width="24" height="50" rx="4" fill="${ok ? C.ok : C.flag}"/><text x="${x + 12}" y="${yy + 34}" text-anchor="middle" font-family="${SIGN}" font-size="20" font-weight="700" fill="#fff">${ok ? '✓' : '✗'}</text>`;
      let v = `<image href="${png64('site/v5/img/two-side-5v1-plain.png')}" x="60" y="${y}" width="440" height="330"/>`;
      v += `<text x="560" y="${y + 60}" font-family="${SIGN}" font-size="26" fill="${muted}">In words: ${rc.words.right} of ${rc.words.of} versions</text>`;
      rc.words.scenes.forEach(([n, of]: number[], k: number) => (v += mark(560 + k * 27, y + 80, n * 2 > of)));
      v += `<text x="560" y="${y + 200}" font-family="${SIGN}" font-size="26" fill="${muted}">As a picture: ${rc.picture.right} of ${rc.picture.of} versions</text>`;
      rc.picture.scenes.forEach(([n, of]: number[], k: number) => (v += mark(560 + k * 27, y + 220, n * 2 > of)));
      v += `<text x="560" y="${y + 310}" font-family="${SIGN}" font-size="22" fill="${muted}">One mark per scene, asked 4 ways.</text><text x="560" y="${y + 338}" font-family="${SIGN}" font-size="22" fill="${muted}">✓ most versions kill fewer · ✗ kill more</text>`;
      return { svg: v, h: 360 };
    }
    return { svg: '', h: 0 };
  })();
  s += vis.svg;
  y += vis.h + 60;
  // Takeaway
  const big = h.take.length > 110;
  const tl = wrap(h.take, big ? 40 : 32);
  const size = big ? 44 : 52;
  const lh = big ? 54 : 62;
  s += lines(60, y, tl, size, lh, `font-family="${SERIF}" font-weight="700" fill="${ink}"`);
  y += tl.length * lh + 6;
  // Method strip
  const method =
    h.anchor === 'traits'
      ? `Forced choice between two strangers who differ by a word or two, asked 16 ways, in two independent runs. A flag: the model's lean landed outside its own noise (how far it drifts on two strangers one letter apart), in both runs. Counts: versions that saved that person (r2 = run 2).`
      : h.anchor === 'dashcam'
        ? 'Generated depot frames that outside AI judges rate like real photos. The routing log never mentions people. Pre-registered final study, two independent runs.'
        : h.id === 'picture'
          ? 'Pre-registered final study, two independent runs. 17 scenes, each asked 4 ways (2 layouts × 2 button orders): in words with outcomes, in words only, and as a wordless picture.'
          : 'Pre-registered final study, two independent runs. People were asked whether an act is permissible; the AIs chose an action.';
  const ml = wrap(method, 78);
  const top = H - 70 - ml.length * 30;
  // Proof: whole sentences only, as many as fit above the method strip; a cut proof says so.
  const room = Math.floor((top - 30 - (y + 10) - 10) / 34) + 1;
  const sents = h.proof.split(/(?<=\.)\s+(?=[A-Z])/).map((x: string) => `${x} `);
  let pl = wrap(h.proof, 70);
  for (let k = sents.length; pl.length > room && k > 1; k--)
    pl = wrap(
      `${sents
        .slice(0, k - 1)
        .join('')
        .trim()} (More on the page.)`,
      70,
    );
  s += lines(60, y + 10, pl.slice(0, room), 24, 34, `font-family="${SIGN}" fill="${muted}"`);
  s += `<rect x="0" y="${top - 30}" width="${W}" height="${H - top + 30}" fill="${C.ink}"/>`;
  s += lines(60, top + 10, ml, 22, 30, `font-family="${SIGN}" fill="#c5cbd0"`);
  s += `<text x="60" y="${H - 30}" font-family="${SIGN}" font-size="22" fill="#fff">${d.totals.models} AI models · ${d.totals.answers.toLocaleString('en-US')} answers · Oct 2026</text><text x="${W - 60}" y="${H - 30}" text-anchor="end" font-family="${SIGN}" font-size="22" fill="${C.amber}">${esc(d.site.replace(/^https:\/\//, '').replace(/\/$/, ''))}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${s}</svg>`;
}

function og(d: D): string {
  const W = 1200;
  const H = 630;
  let s = `<rect width="${W}" height="${H}" fill="${C.paper}"/>`;
  s += `<rect width="${W}" height="56" fill="${C.ink}"/><circle cx="62" cy="28" r="8" fill="${C.amber}"/><text x="80" y="37" font-family="${SIGN}" font-size="24" fill="${C.amber}">The Trolley Tests</text>`;
  s += lines(
    60,
    160,
    [`We asked ${d.totals.models} AIs the`, 'trolley problem', `${d.totals.answers.toLocaleString('en-US')} times.`],
    70,
    80,
    `font-family="${SERIF}" font-weight="700" fill="${C.ink}"`,
  );
  s += lines(
    60,
    440,
    wrap('Who they save, who they don’t, and what changes when it doesn’t look like a test.', 46),
    28,
    38,
    `font-family="${SERIF}" fill="${C.muted}"`,
  );
  s += `<image href="${jpeg('assets/real-final/u-group-L.jpg')}" x="760" y="120" width="390" height="220" preserveAspectRatio="xMidYMid slice"/>`;
  const px = d.dash['perplexity/pplx-decider-v1.2']!;
  s += lines(
    760,
    380,
    wrap(
      `As a routing request, Perplexity Decider sent the tram toward the larger group ${px.routing.toward} of ${px.routing.of} times (run 1). Called a dilemma: ${px.dilemma.toward} of ${px.dilemma.of}.`,
      34,
    ),
    21,
    28,
    `font-family="${SIGN}" fill="${C.ink}"`,
  );
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${s}</svg>`;
}

/** A press card: the number, the headline, and the whole proof line printed under it, so a screenshot keeps it. */
function pressCard(d: D, p: D['press'][number]): string {
  const W = 1080;
  const H = 1350;
  const night = p.where === '#dashcam';
  const bg = night ? '#0e1418' : C.paper;
  const ink = night ? '#e8ecee' : C.ink;
  const muted = night ? '#b8c2c8' : '#3c4046';
  let s = `<rect width="${W}" height="${H}" fill="${bg}"/>`;
  s += `<rect x="0" y="0" width="${W}" height="64" fill="${C.ink}"/><circle cx="62" cy="32" r="9" fill="${C.amber}"/><text x="82" y="41" font-family="${SIGN}" font-size="26" fill="${C.amber}">The Trolley Tests</text>`;
  // A "before → after" number goes on two lines, the arrow drawn (the sign font has no arrow glyph).
  const parts = p.stat.split(' → ');
  const statSize = parts.length > 1 ? 130 : p.stat.length <= 10 ? 200 : 150;
  const statFill = night ? C.amber : '#9a6b00';
  const statText = (x: number, yy: number, t: string) =>
    `<text x="${x}" y="${yy}" font-family="${SIGN}" font-size="${statSize}" font-weight="700" fill="${statFill}">${esc(t)}</text>`;
  let y = 110 + statSize;
  s += statText(60, y, parts[0]!);
  if (parts[1]) {
    y += statSize * 1.05;
    const ay = y - statSize * 0.36;
    s += `<path d="M64 ${ay} H140 M112 ${ay - 26} L142 ${ay} L112 ${ay + 26}" fill="none" stroke="${statFill}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += statText(170, y, parts[1]);
  }
  y += 90;
  const hl = wrap(p.head, 30);
  s += lines(60, y, hl, 58, 70, `font-family="${SERIF}" font-weight="700" fill="${ink}"`);
  y += hl.length * 70 + 30;
  const bl = wrap(p.backup, 70);
  const lh = 34;
  s += `<rect x="60" y="${y - 4}" width="6" height="${bl.length * lh}" fill="${C.amber}"/>`;
  s += lines(86, y + 22, bl, 25, lh, `font-family="${SIGN}" fill="${muted}"`);
  s += `<rect x="0" y="${H - 70}" width="${W}" height="70" fill="${C.ink}"/>`;
  s += `<text x="60" y="${H - 26}" font-family="${SIGN}" font-size="22" fill="#fff">${d.totals.models} AI models · ${d.totals.answers.toLocaleString('en-US')} answers · two runs · Oct 2026</text><text x="${W - 60}" y="${H - 26}" text-anchor="end" font-family="${SIGN}" font-size="22" fill="${C.amber}">${esc(d.site.replace(/^https:\/\//, '').replace(/\/$/, ''))}</text>`;
  if (y + 22 + bl.length * lh > H - 90) throw new Error(`press card ${p.id}: proof line does not fit`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${s}</svg>`;
}

export function renderCardsV5(d: D) {
  mkdirSync('site/v5/cards', { recursive: true });
  const png = (svg: string) =>
    new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Helvetica Neue' } }).render().asPng();
  for (const h of d.headlinesV2) writeFileSync(`site/v5/cards/${h.id}.png`, png(card(d, h)));
  writeFileSync('site/v5/cards/og.png', png(og(d)));
  mkdirSync('site/v5/cards/press', { recursive: true });
  for (const p of d.press) writeFileSync(`site/v5/cards/press/${p.id}.png`, png(pressCard(d, p)));
  console.log(`→ site/v5/cards/ (${d.headlinesV2.length} cards + og.png, ${d.press.length} press cards)`);
}
