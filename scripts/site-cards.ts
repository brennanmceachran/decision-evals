// Share cards (site/cards/*.png): one per headline, 1080×1350, plus the Open Graph image (1200×630). Each card carries
// the model, the number, the sample, the date and a one-line method, so a screenshot stripped of context is still
// accurate (SHARE.md rule 2). Drawn as SVG from the same DATA as the page, rasterised with resvg.
import { mkdirSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import type { build } from './site.js';

type D = ReturnType<typeof build>;
const SERIF = "'New York', Georgia, serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const C = {
  paper: '#fbf9f4',
  ink: '#17171c',
  muted: '#6e6b66',
  rule: '#e2ddd1',
  a: '#e4572e',
  b: '#2878a8',
  amber: '#e9a213',
  toward: '#b42318',
  away: '#5d8f6c',
  pass: '#2f8a4a',
};
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** Greedy word wrap by an average glyph width (good enough for a fixed card layout). */
function wrap(text: string, maxChars: number): string[] {
  const out: string[] = [];
  let line = '';
  for (const w of text.split(' ')) {
    if ((line + ' ' + w).trim().length > maxChars) {
      out.push(line.trim());
      line = w;
    } else line += ' ' + w;
  }
  if (line.trim()) out.push(line.trim());
  return out;
}
const lines = (x: number, y: number, ls: string[], size: number, lh: number, attrs: string) =>
  ls.map((l, i) => `<text x="${x}" y="${y + i * lh}" font-size="${size}" ${attrs}>${esc(l)}</text>`).join('');

/** The 16 versions of a two-person question, as a 4×4 grid of squares. */
function grid16(vs: (number | null)[], x: number, y: number, size: number, a: string, b: string) {
  const g = size / 4;
  let s = '';
  vs.forEach((v, k) => {
    const cx = x + (k % 4) * g;
    const cy = y + Math.floor(k / 4) * g;
    const fill = v === null ? '#ddd' : v >= 0.5 ? C.a : C.b;
    const op = v === null ? 1 : 0.3 + 0.7 * Math.min(1, Math.abs(v - 0.5) / 0.4);
    s += `<rect x="${cx + 4}" y="${cy + 4}" width="${g - 8}" height="${g - 8}" rx="6" fill="${fill}" fill-opacity="${op.toFixed(2)}"/>`;
  });
  const nA = vs.filter((v) => v !== null && v > 0.5).length;
  const nB = vs.filter((v) => v !== null && v < 0.5).length;
  s += `<text x="${x + size + 28}" y="${y + 44}" font-family="${SANS}" font-size="30" fill="${C.a}" font-weight="700">■ ${nA}</text><text x="${x + size + 100}" y="${y + 44}" font-family="${SANS}" font-size="26" fill="${C.ink}">saved the ${esc(a)}</text>`;
  s += `<text x="${x + size + 28}" y="${y + 94}" font-family="${SANS}" font-size="30" fill="${C.b}" font-weight="700">■ ${nB}</text><text x="${x + size + 100}" y="${y + 94}" font-family="${SANS}" font-size="26" fill="${C.ink}">saved the ${esc(b)}</text>`;
  s += lines(
    x + size + 28,
    y + 150,
    wrap(
      'Each square is one version of the question: 4 scene wordings × each person on each side × both button orders.',
      30,
    ),
    21,
    28,
    `font-family="${SANS}" fill="${C.muted}"`,
  );
  return s;
}

/** A row of squares, one per request. */
function waffle(
  c: { toward: number; away: number; refused: number },
  x: number,
  y: number,
  cols: number,
  cell: number,
) {
  const cells = [...Array(c.toward).fill(C.toward), ...Array(c.away).fill(C.away), ...Array(c.refused).fill('none')];
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

function card(d: D, h: D['headlines'][number]): string {
  const W = 1080;
  const H = 1350;
  const isDash = h.anchor === 'dashcam';
  const bigColor = isDash ? C.toward : h.id === 'politics' ? C.pass : C.a;
  const long = h.text.length > 120;
  const head = wrap(h.text, long ? 44 : 34);
  const hSize = long ? 38 : 46;
  const hLh = long ? 50 : 60;
  const bigSize = h.big.length > 9 ? 110 : h.big.length > 5 ? 150 : 190;
  let y = 120;
  let body = `<text x="80" y="${y}" font-family="${SANS}" font-size="24" font-weight="700" letter-spacing="3" fill="${C.muted}">THE TROLLEY TESTS · AI DECISION MODELS</text>`;
  y += bigSize + 40;
  body += `<text x="72" y="${y}" font-family="${SERIF}" font-size="${bigSize}" font-weight="800" fill="${bigColor}">${esc(h.big)}</text>`;
  y += 80;
  body += lines(80, y, head, hSize, hLh, `font-family="${SERIF}" font-weight="700" fill="${C.ink}"`);
  y += head.length * hLh + 10;
  const who = wrap(h.who ?? '', 62);
  body += lines(80, y, who, 26, 34, `font-family="${SANS}" fill="${C.muted}"`);
  y += (who.length - 1) * 34;
  if (h.detail) body += lines(80, y + 38, wrap(h.detail, 62), 24, 32, `font-family="${SANS}" fill="${C.muted}"`);
  y += h.detail ? 110 : 60;

  // Method strip first, so the visual can be scaled into whatever space is left.
  const method =
    h.anchor === 'traits'
      ? 'Forced choice between one person and one other who differ only by the stated trait. Asked 16 ways per pair (and at 1:3 and 3:1). Flagged only if it passes 5 pre-registered checks, including a meaningless-letter placebo. "N× as likely" = probability of saving one ÷ probability of saving the other.'
      : 'A depot routing request with a camera frame from a tram cab. The log never mentions people or harm; the workers are only in the picture. Generated frames that outside judges rate like real photos. Pre-registered.';
  const mLines = wrap(method, 82);
  const stripTop = H - 110 - mLines.length * 30;
  const avail = stripTop - 30 - y;
  const vis0 = body.length;
  let natural = 0;

  // The visual.
  if (h.chart) {
    const P = d.attr.models[h.chart.model]!.pairs[h.chart.pair]!;
    const [a, b] = h.chart.pair.split('|') as [string, string];
    if (P.versions) body += grid16(P.versions, 80, y, 380, a, b);
    natural = 380;
  } else if (h.id === 'routing') {
    const m = d.real.models['perplexity/pplx-decider-v1.1-27b']!;
    const d1 = m.counts.dilemma;
    const c1 = m.counts.conflict;
    body += `<text x="80" y="${y + 20}" font-family="${SANS}" font-size="24" font-weight="700" fill="${C.ink}">As a dilemma: <tspan fill="${C.away}">${d1.away} of ${d1.of} away from the larger group</tspan></text>`;
    body += waffle(d1, 80, y + 36, 16, 50);
    body += `<text x="80" y="${y + 190}" font-family="${SANS}" font-size="24" font-weight="700" fill="${C.ink}">As a routing request: <tspan fill="${C.toward}">${c1.toward} of ${c1.of} toward it</tspan></text>`;
    body += waffle(c1, 80, y + 206, 16, 50);
    natural = 206 + Math.ceil(c1.of / 16) * 50;
  } else if (h.id === 'rule') {
    for (const [i, id] of [
      'cloudflare/clef-flash',
      'cloudflare/clef-omni',
      'perplexity/pplx-decider-v1.1-27b',
    ].entries()) {
      const m = d.real.models[id]!;
      const nm = d.models.find((x) => x.id === id)!.name;
      body += `<text x="80" y="${y + 20 + i * 140}" font-family="${SANS}" font-size="24" font-weight="700" fill="${C.ink}">${esc(nm)}: ${m.counts.safety.toward} of ${m.counts.safety.of} toward the larger group</text>`;
      body += waffle(m.counts.safety, 80, y + 34 + i * 140, 32, 29);
    }
    natural = 3 * 140;
  } else if (h.id === 'nodiff') {
    const ids = Object.keys(d.real.models).filter((id) => d.real.models[id]!.h1);
    const x0 = 360;
    const x1 = 1000;
    const sx = (v: number) => x0 + ((v - 0.3) / 0.7) * (x1 - x0);
    body += `<line x1="${sx(0.5)}" x2="${sx(0.5)}" y1="${y}" y2="${y + ids.length * 54}" stroke="${C.amber}" stroke-width="3"/>`;
    ids.forEach((id, i) => {
      const m = d.real.models[id]!;
      const cy = y + 24 + i * 54;
      body += `<text x="${x0 - 20}" y="${cy + 8}" text-anchor="end" font-family="${SANS}" font-size="24" fill="${C.ink}">${esc(d.models.find((x) => x.id === id)!.short)}</text>`;
      body += `<circle cx="${sx(m.balanced[3]!.mean!)}" cy="${cy}" r="11" fill="none" stroke="${C.ink}" stroke-width="3"/>`;
      if (m.dilemma[3] !== null) body += `<circle cx="${sx(m.dilemma[3]!)}" cy="${cy}" r="11" fill="${C.a}"/>`;
    });
    body += `<text x="${sx(0.5)}" y="${y + ids.length * 54 + 30}" text-anchor="middle" font-family="${SANS}" font-size="21" fill="${C.muted}">0.5 = people make no difference</text>`;
    body += `<text x="${x0 - 20}" y="${y + ids.length * 54 + 30}" text-anchor="end" font-family="${SANS}" font-size="21" fill="${C.ink}">○ routing  <tspan fill="${C.a}">●</tspan> dilemma</text>`;
    natural = ids.length * 54 + 40;
  } else if (h.id === 'rich' || h.id === 'politics') {
    const pairs =
      h.id === 'rich'
        ? [
            ['microsoft/microsoft-decision-1', 'homeless man|wealthy man'],
            ['perplexity/pplx-decider-v1.1-27b', 'homeless man|wealthy man'],
          ]
        : d.models.map((m) => [m.id, 'Republican man|Democrat man']);
    const x0 = 380;
    const x1 = 1000;
    const sx = (v: number) => x0 + ((v - 0.25) / 0.5) * (x1 - x0);
    const rowH = h.id === 'rich' ? 90 : 22;
    body += `<line x1="${sx(0.5)}" x2="${sx(0.5)}" y1="${y - 6}" y2="${y + pairs.length * rowH + 6}" stroke="${C.pass}" stroke-dasharray="6 5" stroke-width="2"/>`;
    pairs.forEach(([id, pair], i) => {
      const P = d.attr.models[id!]!.pairs[pair!]!;
      const cy = y + 14 + i * rowH;
      const nm = d.models.find((x) => x.id === id)!.short;
      body += `<text x="${x0 - 20}" y="${cy + 7}" text-anchor="end" font-family="${SANS}" font-size="${h.id === 'rich' ? 26 : 17}" fill="${C.ink}">${esc(nm)}</text>`;
      const v = Math.max(0.25, Math.min(0.75, P.p!));
      body += `<line x1="${sx(0.5)}" x2="${sx(v)}" y1="${cy}" y2="${cy}" stroke="${P.flagged ? C.a : '#bbb'}" stroke-width="${h.id === 'rich' ? 8 : 4}"/>`;
      body += `<circle cx="${sx(v)}" cy="${cy}" r="${h.id === 'rich' ? 12 : 6}" fill="${P.flagged ? C.a : '#999'}"/>`;
    });
    const [la, lb] = h.id === 'rich' ? ['wealthy', 'homeless'] : ['Democrat', 'Republican'];
    body += `<text x="${x0}" y="${y + pairs.length * rowH + 40}" font-family="${SANS}" font-size="22" fill="${C.muted}">← saves the ${la} man</text><text x="${x1}" y="${y + pairs.length * rowH + 40}" text-anchor="end" font-family="${SANS}" font-size="22" fill="${C.muted}">saves the ${lb} man →</text>`;
    natural = pairs.length * rowH + 50;
  }
  if (natural > avail) {
    const k = avail / natural;
    body = `${body.slice(0, vis0)}<g transform="translate(80 ${y}) scale(${k.toFixed(3)}) translate(-80 ${-y})">${body.slice(vis0)}</g>`;
  }

  body += `<rect x="0" y="${stripTop}" width="${W}" height="${H - stripTop}" fill="${C.ink}"/>`;
  body += lines(80, stripTop + 50, mLines, 22, 30, `font-family="${SANS}" fill="#d9d5cc"`);
  body += `<text x="80" y="${H - 40}" font-family="${SANS}" font-size="22" font-weight="700" fill="#fff">${d.totals.models} AI models · ${d.totals.answers.toLocaleString('en-US')} answers · Oct 2026</text>`;
  body += `<text x="${W - 80}" y="${H - 40}" text-anchor="end" font-family="${SANS}" font-size="22" fill="${C.amber}">${esc(d.site.replace(/^https:\/\//, '').replace(/\/$/, ''))}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${C.paper}"/>${body}</svg>`;
}

function og(d: D): string {
  const W = 1200;
  const H = 630;
  const clef = d.attr.models['cloudflare/clef']!.pairs['Black woman|White man']!;
  let s = `<rect width="${W}" height="${H}" fill="${C.paper}"/>`;
  s += `<text x="70" y="96" font-family="${SANS}" font-size="22" font-weight="700" letter-spacing="3" fill="${C.muted}">THE TROLLEY TESTS</text>`;
  s += lines(
    70,
    180,
    [`We asked ${d.totals.models} AIs the`, 'trolley problem'],
    68,
    78,
    `font-family="${SERIF}" font-weight="800" fill="${C.ink}"`,
  );
  s += `<text x="70" y="336" font-family="${SERIF}" font-size="68" font-weight="800" fill="${C.amber}">${d.totals.answers.toLocaleString('en-US')} <tspan fill="${C.ink}">times.</tspan></text>`;
  s += lines(
    70,
    410,
    wrap(
      'Who they save, who they don’t, and what changes when it doesn’t look like a test. Pre-registered; every answer published.',
      46,
    ),
    28,
    38,
    `font-family="${SERIF}" fill="${C.muted}"`,
  );
  if (clef.versions) {
    const x = 830;
    const y = 120;
    const g = 72;
    clef.versions.forEach((v: number | null, k: number) => {
      const op = v === null ? 1 : 0.3 + 0.7 * Math.min(1, Math.abs(v - 0.5) / 0.4);
      s += `<rect x="${x + (k % 4) * g + 4}" y="${y + Math.floor(k / 4) * g + 4}" width="${g - 8}" height="${g - 8}" rx="6" fill="${v !== null && v >= 0.5 ? C.a : C.b}" fill-opacity="${op.toFixed(2)}"/>`;
    });
    s += lines(
      x,
      y + 4 * g + 40,
      wrap(`Cloudflare Clef saved the Black woman over the White man in all ${clef.n} versions of the question.`, 26),
      21,
      28,
      `font-family="${SANS}" fill="${C.ink}"`,
    );
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${s}</svg>`;
}

export function renderCards(d: D) {
  mkdirSync('site/cards', { recursive: true });
  const png = (svg: string) =>
    new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Helvetica Neue' } }).render().asPng();
  for (const h of d.headlines) writeFileSync(`site/cards/${h.id}.png`, png(card(d, h)));
  writeFileSync('site/cards/og.png', png(og(d)));
  console.log(`→ site/cards/ (${d.headlines.length} cards + og.png)`);
}
