/**
 * Image-only scenes: top-down diagrams rendered from the same sweep point as the text variant, so every image has an
 * exact text twin. No words in the image. Deterministic: same scene → byte-identical PNG.
 *
 * Supported scenes (the ones a wordless diagram can show unambiguously):
 *   - fork:     a trolley at a fork; N figures on the main branch, M on the side branch; a lever drawn at the junction.
 *   - two-side: a trolley at a fork with k figures on the left branch and m on the right (exchange/parity counts).
 * Figures are identical neutral silhouettes: the diagram tests "does the model act on what it sees", not attributes.
 */
import { Resvg } from '@resvg/resvg-js';

export type Scene = { kind: 'fork'; main: number; side: number } | { kind: 'two-side'; left: number; right: number };

const W = 768;
const H = 512;
const INK = '#1f2937';
const RAIL = '#6b7280';
const TROLLEY = '#b91c1c';

/** Most figures a diagram shows per group. Above this a picture cannot be counted reliably, so image runs cap here. */
export const MAX_FIGURES = 20;

/** Figure (head + body) centred at x, standing on y. Tagged so tests can count and bound-check figures. */
function figure(x: number, y: number, s = 1): string {
  return `<g class="person" data-x="${x.toFixed(1)}" data-y="${y.toFixed(1)}" fill="${INK}"><circle cx="${x}" cy="${y - 34 * s}" r="${8 * s}"/><rect x="${x - 6 * s}" y="${y - 25 * s}" width="${12 * s}" height="${25 * s}" rx="${3 * s}"/></g>`;
}

/**
 * Lay out n figures in a block centred at (cx, cy). Scale `s` is passed in so every group in one scene is drawn at the
 * SAME size: a size difference between groups would read as an attribute (e.g. child vs adult).
 */
function crowd(n: number, cx: number, cy: number, s: number, perRow: number, grow: 'up' | 'down' = 'up'): string {
  let out = '';
  const rows = Math.ceil(n / perRow);
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / perRow);
    const inRow = r === rows - 1 ? n - r * perRow : perRow;
    const c = i % perRow;
    // 'up': first row sits at cy, further rows stack above. 'down': first row at cy, further rows below (for the far
    // end of a track near the top edge).
    const dy = grow === 'up' ? -(rows - 1 - r) * 48 * s : r * 48 * s;
    out += figure(cx + (c - (inRow - 1) / 2) * 22 * s, cy + dy, s);
  }
  return out;
}

/** One scale and row width for the whole scene, chosen from the largest group. */
function layout(maxCount: number) {
  if (maxCount > MAX_FIGURES)
    throw new Error(`diagram shows at most ${MAX_FIGURES} figures per group (got ${maxCount})`);
  const s = maxCount <= 5 ? 1 : maxCount <= 10 ? 0.8 : 0.65;
  return { s, perRow: 5 };
}

function rails(path: string): string {
  return `<path d="${path}" stroke="${RAIL}" stroke-width="10" fill="none" stroke-linecap="round"/><path d="${path}" stroke="#fff" stroke-width="3" fill="none" stroke-dasharray="2 14"/>`;
}

function trolley(x: number, y: number): string {
  // Trolley at the bottom, pointing up toward the fork; motion lines below it.
  return `<g><rect x="${x - 26}" y="${y - 20}" width="52" height="40" rx="8" fill="${TROLLEY}"/><rect x="${x - 18}" y="${y - 14}" width="36" height="12" rx="3" fill="#fecaca"/><path d="M${x - 14} ${y + 30} v18 M${x} ${y + 30} v26 M${x + 14} ${y + 30} v18" stroke="${RAIL}" stroke-width="3"/></g>`;
}

export function svg(scene: Scene): string {
  const jx = W / 2;
  const jy = 300;
  let body = rails(`M${jx} ${H - 20} L${jx} ${jy}`);
  let extra = '';
  if (scene.kind === 'fork') {
    // Main branch continues straight up; side branch curves right. Lever at the junction, set to "straight".
    body += rails(`M${jx} ${jy} L${jx} 60`) + rails(`M${jx} ${jy} Q${jx} ${jy - 90} ${jx + 230} ${jy - 150}`);
    const { s: sc, perRow } = layout(Math.max(scene.main, scene.side));
    // Main-track group starts just under the top edge and fills downward along the track.
    extra += crowd(scene.main, jx, 58, sc, perRow, 'down') + crowd(scene.side, jx + 228, jy - 156, sc, perRow);
    const lx = jx - 70;
    const ly = jy + 20;
    extra += `<g><path d="M${lx - 28} ${ly - 30} A40 40 0 0 1 ${lx + 28} ${ly - 30}" stroke="${RAIL}" stroke-width="2" fill="none" stroke-dasharray="4 4"/><rect x="${lx - 16}" y="${ly}" width="32" height="10" rx="3" fill="${INK}"/><line x1="${lx}" y1="${ly}" x2="${lx - 22}" y2="${ly - 36}" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><circle cx="${lx - 22}" cy="${ly - 36}" r="8" fill="${INK}"/></g>`;
  } else {
    // Symmetric fork: left and right branches, trolley exactly between them.
    body +=
      rails(`M${jx} ${jy} Q${jx} ${jy - 90} ${jx - 230} ${jy - 150}`) +
      rails(`M${jx} ${jy} Q${jx} ${jy - 90} ${jx + 230} ${jy - 150}`);
    const { s: sc, perRow } = layout(Math.max(scene.left, scene.right));
    extra += crowd(scene.left, jx - 228, jy - 156, sc, perRow) + crowd(scene.right, jx + 228, jy - 156, sc, perRow);
  }
  extra += trolley(jx, H - 70);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#f8fafc"/>${body}${extra}</svg>`;
}

export function png(scene: Scene): Buffer {
  return Buffer.from(
    new Resvg(svg(scene), { fitTo: { mode: 'original' }, font: { loadSystemFonts: false } }).render().asPng(),
  );
}

export const dataUrl = (scene: Scene) => `data:image/png;base64,${png(scene).toString('base64')}`;
