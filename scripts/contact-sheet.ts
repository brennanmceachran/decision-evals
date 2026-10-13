// Renders a grid of diagram scenes into one PNG for visual review: review/images/contact-<kind>.png.
// Usage: tsx scripts/contact-sheet.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import { H, svg, W, type Scene } from '../src/render/diagram.js';

function sheet(scenes: Scene[], cols: number, scale: number): Buffer {
  const cw = W * scale;
  const ch = H * scale;
  const rows = Math.ceil(scenes.length / cols);
  const pad = 10;
  const inner = scenes
    .map((s, i) => {
      const x = (i % cols) * (cw + pad) + pad;
      const y = Math.floor(i / cols) * (ch + pad) + pad;
      const body = svg(s)
        .replace(/^<svg[^>]*>/, '')
        .replace(/<\/svg>$/, '');
      return `<g transform="translate(${x} ${y}) scale(${scale})"><rect width="${W}" height="${H}" fill="none" stroke="#cbd5e1" stroke-width="${2 / scale}"/>${body}</g>`;
    })
    .join('');
  const tw = cols * (cw + pad) + pad;
  const th = rows * (ch + pad) + pad;
  const doc = `<svg xmlns="http://www.w3.org/2000/svg" width="${tw}" height="${th}"><rect width="${tw}" height="${th}" fill="#e2e8f0"/>${inner}</svg>`;
  return Buffer.from(new Resvg(doc, { font: { loadSystemFonts: false } }).render().asPng());
}

mkdirSync('review/images', { recursive: true });
const counts = [1, 2, 3, 5, 10, 20];
writeFileSync(
  'review/images/contact-switch.png',
  sheet(
    counts.map((main) => ({ kind: 'switch', main, side: 1 })),
    3,
    0.42,
  ),
);
writeFileSync(
  'review/images/contact-two-side.png',
  sheet(
    [
      [1, 1],
      [2, 1],
      [1, 3],
      [5, 1],
      [10, 3],
      [20, 7],
    ].map(([left, right]) => ({ kind: 'two-side', left: left!, right: right! })),
    3,
    0.42,
  ),
);
console.log('→ review/images/contact-switch.png, contact-two-side.png');
