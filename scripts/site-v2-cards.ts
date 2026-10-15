// Share cards for site/v2: one per finding (1080×1350) plus an Open Graph image (1200×630). The takeaway is the
// headline, the picture shows the question, and a method strip at the foot keeps a screenshot honest on its own
// (SHARE.md rule 2). Drawn as SVG from the same DATA as the page; rasterised with resvg using system fonts.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import type { buildV2 } from './site-v2.js';

type D = ReturnType<typeof buildV2>;
const SERIF = 'Charter, Georgia, serif';
const SIGN = "'DIN Alternate', 'Helvetica Neue', Arial, sans-serif";
const C = {
  paper: '#f6f6f2',
  ink: '#14161a',
  muted: '#6c7178',
  rule: '#dcdcd4',
  track: '#8c9196',
  amber: '#f2a900',
  act: '#d2462b',
  spare: '#2a6f97',
  good: '#2f7d4a',
  actSoft: '#f6d3ca',
  spareSoft: '#cfe1ec',
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
function fork(x: number, y: number, w: number, top: string, bottom: string, topColor = C.act, botColor = C.spare) {
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
function grid16(vs: (number | null)[], x: number, y: number, size: number) {
  const g = size / 4;
  return vs
    .map((v, k) => {
      const op = v === null ? 1 : 0.3 + 0.7 * Math.min(1, Math.abs(v - 0.5) / 0.4);
      return `<rect x="${x + (k % 4) * g + 4}" y="${y + Math.floor(k / 4) * g + 4}" width="${g - 8}" height="${g - 8}" rx="5" fill="${v === null ? '#ddd' : v >= 0.5 ? C.act : C.spare}" fill-opacity="${op.toFixed(2)}"/>`;
    })
    .join('');
}
function squares(
  c: { toward: number; away: number; refused: number },
  x: number,
  y: number,
  cols: number,
  cell: number,
  towardColor = C.act,
  awayColor = C.good,
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
      race: ['1 Black woman', '1 White man'],
      trans: ['1 transgender man', '1 cisgender man'],
      gay: ['1 gay man', '1 straight man'],
      record: ['1 man, no record', '1 man with a record'],
      politics: ['1 Republican man', '1 Democrat man'],
    };
    if (h.chart && pair[h.id]) {
      const P = d.attr.models[h.chart.model]!.pairs[h.chart.pair]!;
      let v = fork(60, y + 30, 960, pair[h.id]![0], pair[h.id]![1]);
      if (P.versions) {
        v += grid16(P.versions as (number | null)[], 60, y + 240, 300);
        const nA = (P.versions as (number | null)[]).filter((x) => x !== null && x > 0.5).length;
        v += `<text x="390" y="${y + 290}" font-family="${SIGN}" font-size="30" fill="${C.act}" font-weight="700">${nA} of 16 versions</text><text x="390" y="${y + 330}" font-family="${SIGN}" font-size="24" fill="${muted}">saved the first-named person</text>`;
        v += `<text x="390" y="${y + 390}" font-family="${SIGN}" font-size="22" fill="${muted}">4 scenes × each side × both button orders</text>`;
      }
      return { svg: v, h: 560 };
    }
    if (h.id === 'politics')
      return {
        svg:
          fork(60, y + 30, 960, '1 Republican man', '1 Democrat man') +
          `<text x="60" y="${y + 300}" font-family="${SIGN}" font-size="30" fill="${C.good}">0 of 20 models flagged</text>`,
        h: 340,
      };
    if (h.id === 'routing' || h.id === 'rule' || h.id === 'nodiff') {
      const ih = h.id === 'nodiff' ? 540 : 380;
      const img = `<image href="${jpeg('assets/real-v4/u-group-L.jpg')}" x="60" y="${y}" width="960" height="${ih}" preserveAspectRatio="xMidYMid slice"/><rect x="72" y="${y + 12}" width="170" height="32" rx="4" fill="rgba(0,0,0,.55)"/><text x="84" y="${y + 35}" font-family="Menlo, monospace" font-size="18" fill="#fff">● CAB-T7 FWD</text>`;
      const b = y + ih + 40; // first row below the photo
      let extra = '';
      if (h.id === 'routing') {
        const m = d.real.models['perplexity/pplx-decider-v1.1-27b']!;
        extra +=
          `<text x="60" y="${b}" font-family="${SIGN}" font-size="24" fill="${muted}">As a dilemma: away from the larger group</text>` +
          squares({ toward: m.counts.dilemma.toward, away: m.counts.dilemma.away, refused: 0 }, 60, b + 14, 32, 30);
        extra +=
          `<text x="60" y="${b + 100}" font-family="${SIGN}" font-size="24" fill="${muted}">As a routing request: toward the larger group</text>` +
          squares(m.counts.conflict, 60, b + 114, 32, 30);
        return { svg: img + extra, h: ih + 40 + 174 };
      }
      if (h.id === 'rule') {
        for (const [i, id] of [
          'cloudflare/clef-flash',
          'cloudflare/clef-omni',
          'perplexity/pplx-decider-v1.1-27b',
        ].entries()) {
          const m = d.real.models[id]!;
          extra +=
            `<text x="60" y="${b + i * 70}" font-family="${SIGN}" font-size="22" fill="${muted}">${esc(d.names[id]!)}</text>` +
            squares(m.counts.safety, 60, b + 10 + i * 70, 32, 30);
        }
        return { svg: img + extra, h: ih + 40 + 200 };
      }
      return { svg: img, h: ih };
    }
    if (h.id === 'transplant') {
      const tp = d.dilemmaCounts.transplant;
      let v = '';
      tp.forEach((r, i) => {
        const yy = y + 20 + i * 80;
        v += `<text x="60" y="${yy + 38}" font-family="${SIGN}" font-size="26" fill="${ink}">${r.n} patient${r.n === 1 ? '' : 's'}</text>`;
        for (let k = 0; k < r.of; k++)
          v += `<rect x="${240 + k * 38}" y="${yy + 8}" width="32" height="40" rx="4" fill="${k < r.acting ? C.act : '#e2e2da'}"/>`;
        v += `<text x="${W - 60}" y="${yy + 38}" text-anchor="end" font-family="${SIGN}" font-size="30" font-weight="700" fill="${C.act}">${r.acting}</text>`;
      });
      const yy = y + 20 + tp.length * 80;
      v += `<text x="60" y="${yy + 38}" font-family="${SIGN}" font-size="26" fill="${C.good}">People</text><rect x="240" y="${yy + 14}" width="${760 * 0.08}" height="28" rx="4" fill="${C.good}"/><rect x="${240 + 760 * 0.08}" y="${yy + 14}" width="${760 * 0.92}" height="28" rx="4" fill="#e2e2da"/><text x="${W - 60}" y="${yy + 38}" text-anchor="end" font-family="${SIGN}" font-size="30" font-weight="700" fill="${C.good}">8%</text>`;
      return { svg: v, h: (tp.length + 1) * 80 + 30 };
    }
    if (h.id === 'picture') {
      const rc = d.rightCalls['cloudflare/clef-flash']!;
      let v = `<image href="${png64('review/image-study/two-side-5v1-plain.png')}" x="60" y="${y}" width="440" height="330"/>`;
      v += `<text x="560" y="${y + 60}" font-family="${SIGN}" font-size="26" fill="${muted}">In words</text>`;
      for (let k = 0; k < rc.words.of; k++)
        v += `<rect x="${560 + k * 36}" y="${y + 80}" width="30" height="50" rx="4" fill="${k < rc.words.right ? C.good : C.act}"/>`;
      v += `<text x="560" y="${y + 200}" font-family="${SIGN}" font-size="26" fill="${muted}">As a picture</text>`;
      for (let k = 0; k < rc.picture.of; k++)
        v += `<rect x="${560 + k * 36}" y="${y + 220}" width="30" height="50" rx="4" fill="${k < rc.picture.right ? C.good : C.act}"/>`;
      v += `<text x="560" y="${y + 310}" font-family="${SIGN}" font-size="22" fill="${muted}">green: right call · red: wrong call</text>`;
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
  const pl = wrap(h.proof, 70).slice(0, 4);
  s += lines(60, y + 10, pl, 24, 34, `font-family="${SIGN}" fill="${muted}"`);
  // Method strip
  const method =
    h.anchor === 'traits'
      ? 'Forced choice between two strangers who differ by one word. 16 versions per pair; flagged only if it passes 5 checks fixed in advance, including a meaningless-letter placebo. "2.7 to 1" = probability of saving one ÷ the other.'
      : h.anchor === 'dashcam'
        ? 'Generated depot frames that outside AI judges rate like real photos. The routing log never mentions people. Pre-registered; every answer published.'
        : 'Pre-registered study. Every prompt and every answer published. People were asked whether an act is permissible; the AIs chose an action.';
  const ml = wrap(method, 78);
  const top = H - 70 - ml.length * 30;
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
  s += `<image href="${jpeg('assets/real-v4/u-group-L.jpg')}" x="760" y="120" width="390" height="220" preserveAspectRatio="xMidYMid slice"/>`;
  const px = d.real.models['perplexity/pplx-decider-v1.1-27b']!;
  s += lines(
    760,
    380,
    wrap(
      `As a routing request, Perplexity Decider sent the tram toward the larger group ${px.counts.conflict.toward} of ${px.counts.conflict.of} times.`,
      34,
    ),
    21,
    28,
    `font-family="${SIGN}" fill="${C.ink}"`,
  );
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${s}</svg>`;
}

export function renderCardsV2(d: D) {
  mkdirSync('site/v2/cards', { recursive: true });
  const png = (svg: string) =>
    new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Helvetica Neue' } }).render().asPng();
  for (const h of d.headlinesV2) writeFileSync(`site/v2/cards/${h.id}.png`, png(card(d, h)));
  writeFileSync('site/v2/cards/og.png', png(og(d)));
  console.log(`→ site/v2/cards/ (${d.headlinesV2.length} cards + og.png)`);
}
