/**
 * Wordless scene diagrams for the image-only condition. Each image is rendered from the same sweep point as its text
 * twin, so the two differ only in modality.
 *
 * ONE visual vocabulary for every image (this is what makes images comparable):
 *   - Canvas 1024×768, white. No text, numbers, colour-coding of groups, or decoration.
 *   - Track: two rails with sleepers, drawn along sampled paths so curves look like real track.
 *   - Groups: identical pictogram people at ONE fixed size in every image, standing ON the track inside a
 *     same-size marked zone at the end of each branch, in rows of 5 filled from the trolley side.
 *   - Trolley: one amber vehicle at the bottom, facing up. Chevrons show where it goes if nobody acts.
 *   - Lever: one lever in the fork, wired to the junction. Solid handle = current position, outlined handle = the
 *     position you can move it to, with an arrow between them.
 *
 * Scenes:
 *   - switch:   trolley heads straight up the main line (left) toward `main` people. Lever is set to the main line;
 *               it can be moved RIGHT to send the trolley up the side branch (right) toward `side` people.
 *               Text twin: "Moving the lever right sends the trolley onto a side track."
 *   - two-side: symmetric fork. `left` people on the left branch, `right` people on the right. No default route: the
 *               lever is centred and can be moved left or right. Text twin: "You must steer it left or right."
 */
import { Resvg } from '@resvg/resvg-js';

/**
 * switch: `main` people on the track the points are SET to; `side` people on the other branch. `mirror` puts the set
 * track on the right (lever moves left) instead of the left (lever moves right), so side cannot stand in for "act".
 */
export type Scene =
  { kind: 'switch'; main: number; side: number; mirror?: boolean } | { kind: 'two-side'; left: number; right: number };

export const W = 1024;
export const H = 768;
/** PNG export scale: images are sent to models at 2048×1536. */
export const EXPORT_SCALE = 2;
/** Most people per group. Every image uses the same figure size, and 20 (4 rows of 5) is what one zone holds. */
export const MAX_FIGURES = 20;

// Palette: one ink for all people; neutral greys for infrastructure; amber only for the trolley and its path.
const C = {
  bg: '#ffffff',
  ink: '#1e293b',
  rail: '#334155',
  sleeper: '#a8b3c2',
  zoneFill: '#f1f5f9',
  zoneEdge: '#94a3b8',
  trolley: '#f59e0b',
  trolleyEdge: '#92400e',
  trolleyRoof: '#fde68a',
  glass: '#1e293b',
  route: '#d97706',
  ghost: '#64748b',
};

// Fixed geometry, shared by every scene.
// People zone at the end of each branch. Sized so a full group (4 rows of 5) has 24px padding on every side.
const ZONE = { w: 330, h: 372, top: 24 };
const FIG = { h: 72, pitchX: 60, pitchY: 86 }; // one person, and spacing in the 5-wide grid (gaps ≥ 20 px)
const RAIL_GAUGE = 9; // half-distance between the two rails
const JUNCTION_Y = 590;
const BRANCH_UP_Y = 462; // where a curved branch turns straight up
const TROLLEY = { w: 60, h: 86, cy: 714 };

// ─── Path geometry ──────────────────────────────────────────────────────────────────────────────────────────────────
type P = { x: number; y: number };
type Seg = { kind: 'line'; a: P; b: P } | { kind: 'cubic'; a: P; c1: P; c2: P; b: P };

function at(s: Seg, t: number): P {
  if (s.kind === 'line') return { x: s.a.x + (s.b.x - s.a.x) * t, y: s.a.y + (s.b.y - s.a.y) * t };
  const u = 1 - t;
  return {
    x: u * u * u * s.a.x + 3 * u * u * t * s.c1.x + 3 * u * t * t * s.c2.x + t * t * t * s.b.x,
    y: u * u * u * s.a.y + 3 * u * u * t * s.c1.y + 3 * u * t * t * s.c2.y + t * t * t * s.b.y,
  };
}

/** Uniformly spaced samples (by arc length) with unit tangents. */
function sample(path: Seg[], step: number): { p: P; t: P }[] {
  const fine: P[] = [];
  for (const s of path) for (let i = fine.length ? 1 : 0; i <= 400; i++) fine.push(at(s, i / 400));
  const cum = [0];
  for (let i = 1; i < fine.length; i++)
    cum.push(cum[i - 1]! + Math.hypot(fine[i]!.x - fine[i - 1]!.x, fine[i]!.y - fine[i - 1]!.y));
  const total = cum[cum.length - 1]!;
  const out: { p: P; t: P }[] = [];
  let j = 0;
  for (let d = 0; d <= total + 1e-6; d += step) {
    while (j < cum.length - 2 && cum[j + 1]! < d) j++;
    const f = (d - cum[j]!) / Math.max(1e-9, cum[j + 1]! - cum[j]!);
    const p = { x: fine[j]!.x + (fine[j + 1]!.x - fine[j]!.x) * f, y: fine[j]!.y + (fine[j + 1]!.y - fine[j]!.y) * f };
    const dx = fine[j + 1]!.x - fine[j]!.x;
    const dy = fine[j + 1]!.y - fine[j]!.y;
    const len = Math.hypot(dx, dy) || 1;
    out.push({ p, t: { x: dx / len, y: dy / len } });
  }
  return out;
}

const pts = (ps: P[]) => ps.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

/** Real-looking track: sleepers across, then two rails offset from the centre line. */
function track(path: Seg[], skipSleepers = 0): { sleepers: string; rails: string } {
  const fine = sample(path, 2);
  const offset = (d: number) => fine.map(({ p, t }) => ({ x: p.x - t.y * d, y: p.y + t.x * d }));
  let sleepers = '';
  for (const { p, t } of sample(path, 17).slice(Math.ceil(skipSleepers / 17))) {
    const n = { x: -t.y, y: t.x };
    const L = RAIL_GAUGE + 8;
    sleepers += `<line x1="${(p.x - n.x * L).toFixed(1)}" y1="${(p.y - n.y * L).toFixed(1)}" x2="${(p.x + n.x * L).toFixed(1)}" y2="${(p.y + n.y * L).toFixed(1)}" stroke="${C.sleeper}" stroke-width="5" stroke-linecap="round"/>`;
  }
  const rails = [RAIL_GAUGE, -RAIL_GAUGE]
    .map(
      (d) =>
        `<polyline points="${pts(offset(d))}" fill="none" stroke="${C.rail}" stroke-width="3.5" stroke-linejoin="round"/>`,
    )
    .join('');
  return { sleepers, rails };
}

/** Width of the route band; the arrowhead's base is the same width so every arrow looks identical. */
const ROUTE_W = 40;

/**
 * Route highlight: where the trolley goes if nobody acts. A translucent amber band under the track from `from` to
 * `to` (px along the path), finished with one solid arrowhead drawn on top. Same width and head in every image.
 */
function routeBand(path: Seg[], from: number, to: number): { band: string; head: string } {
  const s = sample(path, 2);
  const i0 = Math.round(from / 2);
  const i1 = Math.min(s.length - 1, Math.round(to / 2));
  const line = s.slice(i0, i1 + 1).map((x) => x.p);
  const end = s[i1]!;
  const back = s[Math.max(0, i1 - 6)]!.p;
  const len = Math.hypot(end.p.x - back.x, end.p.y - back.y) || 1;
  const t = { x: (end.p.x - back.x) / len, y: (end.p.y - back.y) / len };
  const n = { x: -t.y, y: t.x };
  const half = ROUTE_W / 2 + 6;
  const head = [
    { x: end.p.x + t.x * 34, y: end.p.y + t.y * 34 },
    { x: end.p.x + n.x * half, y: end.p.y + n.y * half },
    { x: end.p.x - n.x * half, y: end.p.y - n.y * half },
  ];
  return {
    band: `<polyline class="route" points="${pts(line)}" fill="none" stroke="${C.trolley}" stroke-opacity="0.38" stroke-width="${ROUTE_W}" stroke-linejoin="round" stroke-linecap="butt"/>`,
    head: `<polygon class="route-head" points="${pts(head)}" fill="${C.route}" stroke="${C.bg}" stroke-width="3" stroke-linejoin="round"/>`,
  };
}

/** Path length in px (sampled at 1 px). */
const lengthOf = (path: Seg[]) => sample(path, 1).length - 1;

// ─── People ─────────────────────────────────────────────────────────────────────────────────────────────────────────
/** One pictogram person, feet at (x, y), height FIG.h. White outline separates it from the rails underneath. */
function person(x0: number, y0: number): string {
  const x = Math.round(x0);
  const y = Math.round(y0);
  const s = FIG.h / 56;
  const shape =
    `<circle cx="${x}" cy="${y - 48 * s}" r="${8 * s}"/>` + // head
    `<rect x="${x - 10 * s}" y="${y - 38 * s}" width="${20 * s}" height="${22 * s}" rx="${6 * s}"/>` + // torso
    `<rect x="${x - 15 * s}" y="${y - 37 * s}" width="${5.5 * s}" height="${18 * s}" rx="${2.75 * s}"/>` + // arm L
    `<rect x="${x + 9.5 * s}" y="${y - 37 * s}" width="${5.5 * s}" height="${18 * s}" rx="${2.75 * s}"/>` + // arm R
    `<rect x="${x - 8.5 * s}" y="${y - 19 * s}" width="${7.5 * s}" height="${19 * s}" rx="${3.5 * s}"/>` + // leg L
    `<rect x="${x + 1 * s}" y="${y - 19 * s}" width="${7.5 * s}" height="${19 * s}" rx="${3.5 * s}"/>`; // leg R
  return `<g class="person" data-x="${x}" data-y="${y}"><g fill="${C.bg}" stroke="${C.bg}" stroke-width="7" stroke-linejoin="round">${shape}</g><g fill="${C.ink}">${shape}</g></g>`;
}

/** Positions for n people in a zone centred at cx: rows of 5, filled from the bottom (trolley side) upward. */
export function crowdPositions(n: number, cx: number): P[] {
  if (n < 1 || n > MAX_FIGURES) throw new Error(`a zone holds 1–${MAX_FIGURES} people (got ${n})`);
  const out: P[] = [];
  const rows = Math.ceil(n / 5);
  // Group block is centred in the zone (the zone is identical in every image; only the people change).
  const blockH = (rows - 1) * FIG.pitchY + FIG.h;
  const baseY = ZONE.top + (ZONE.h + blockH) / 2; // feet of the bottom row
  for (let r = 0; r < rows; r++) {
    const inRow = Math.min(5, n - r * 5);
    for (let c = 0; c < inRow; c++) out.push({ x: cx + (c - (inRow - 1) / 2) * FIG.pitchX, y: baseY - r * FIG.pitchY });
  }
  return out;
}

function zone(cx: number): string {
  return `<rect class="zone" x="${cx - ZONE.w / 2}" y="${ZONE.top}" width="${ZONE.w}" height="${ZONE.h}" rx="24" fill="${C.zoneFill}" stroke="${C.zoneEdge}" stroke-width="3"/>`;
}

// ─── Trolley and lever ──────────────────────────────────────────────────────────────────────────────────────────────
function trolley(cx: number): string {
  const { w, h, cy } = TROLLEY;
  const x = cx - w / 2;
  const y = cy - h / 2;
  return (
    `<g class="trolley">` +
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${C.trolley}" stroke="${C.trolleyEdge}" stroke-width="3.5"/>` +
    `<rect x="${x + 9}" y="${y + 26}" width="${w - 18}" height="${h - 38}" rx="8" fill="${C.trolleyRoof}"/>` + // roof
    `<rect x="${x + 9}" y="${y + 9}" width="${w - 18}" height="11" rx="3" fill="${C.glass}"/>` + // windscreen (front = top)
    `</g>`
  );
}

/** Lever at (x, y) wired to the junction. `current` is the solid handle angle; `options` are outlined handles. */
/**
 * Lever: a ground frame drawn in open space. Solid handle = the position it is in now. Outlined handle(s) = where it
 * can be moved, each with a short arrow. A dotted rod links it to the points (the small ring on the track) so the
 * lever visibly controls the junction.
 */
function lever(x: number, y: number, current: number, options: number[], points: P): string {
  const L = 64;
  const tip = (deg: number) => ({
    x: x + Math.sin((deg * Math.PI) / 180) * L,
    y: y - Math.cos((deg * Math.PI) / 180) * L,
  });
  const solid = (deg: number) => {
    const t = tip(deg);
    return `<line x1="${x}" y1="${y}" x2="${t.x.toFixed(1)}" y2="${t.y.toFixed(1)}" stroke="${C.ink}" stroke-width="11" stroke-linecap="round"/><circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="12" fill="${C.ink}"/>`;
  };
  const ghost = (deg: number) => {
    const t = tip(deg);
    return `<line x1="${x}" y1="${y}" x2="${t.x.toFixed(1)}" y2="${t.y.toFixed(1)}" stroke="${C.ghost}" stroke-width="3" stroke-dasharray="6 6" stroke-linecap="round"/><circle cx="${t.x.toFixed(1)}" cy="${t.y.toFixed(1)}" r="11" fill="${C.bg}" stroke="${C.ghost}" stroke-width="3" stroke-dasharray="5 4"/>`;
  };
  // Arrow along an arc just outside the knobs, from the current handle toward the option.
  const arrow = (to: number) => {
    const R = L + 26;
    const dir = Math.sign(to - current);
    const a0 = current + dir * 10;
    const a1 = to - dir * 8;
    const p = (deg: number) => ({
      x: x + Math.sin((deg * Math.PI) / 180) * R,
      y: y - Math.cos((deg * Math.PI) / 180) * R,
    });
    const s0 = p(a0);
    const e = p(a1);
    const tang = { x: Math.cos((a1 * Math.PI) / 180) * dir, y: Math.sin((a1 * Math.PI) / 180) * dir };
    const nrm = { x: -tang.y, y: tang.x };
    const head = pts([
      { x: e.x + tang.x * 11, y: e.y + tang.y * 11 },
      { x: e.x - tang.x * 3 + nrm.x * 8, y: e.y - tang.y * 3 + nrm.y * 8 },
      { x: e.x - tang.x * 3 - nrm.x * 8, y: e.y - tang.y * 3 - nrm.y * 8 },
    ]);
    return `<path d="M${s0.x.toFixed(1)} ${s0.y.toFixed(1)} A${R} ${R} 0 0 ${dir > 0 ? 1 : 0} ${e.x.toFixed(1)} ${e.y.toFixed(1)}" fill="none" stroke="${C.ghost}" stroke-width="4" stroke-linecap="round"/><polygon points="${head}" fill="${C.ghost}"/>`;
  };
  return (
    `<g class="lever">` +
    `<line x1="${x}" y1="${y + 22}" x2="${points.x}" y2="${points.y - 11}" stroke="${C.ghost}" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>` +
    `<circle cx="${points.x}" cy="${points.y}" r="9" fill="${C.bg}" stroke="${C.rail}" stroke-width="3.5"/>` +
    options.map((o) => ghost(o) + arrow(o)).join('') +
    solid(current) +
    `<rect x="${x - 34}" y="${y - 4}" width="68" height="24" rx="7" fill="${C.ink}"/>` +
    `<circle cx="${x}" cy="${y}" r="8" fill="${C.bg}"/><circle cx="${x}" cy="${y}" r="4" fill="${C.ink}"/>` +
    `</g>`
  );
}

// ─── Scenes ─────────────────────────────────────────────────────────────────────────────────────────────────────────
interface Layout {
  svg: string;
  /** Group centre x → expected count, for tests. */
  groups: { cx: number; n: number; people: P[] }[];
}

function compose(scene: Scene): Layout {
  // Both scenes share: zone size and height, trolley position, junction height and branch shape. Each track runs
  // through its zone and the group stands on it, so "this group is on this track" is unambiguous.
  const end = ZONE.top + ZONE.h; // track ends where the zone begins: the trolley runs INTO the group
  const branchTo = (fromX: number, toX: number): Seg[] => [
    {
      kind: 'cubic',
      a: { x: fromX, y: JUNCTION_Y },
      c1: { x: fromX, y: JUNCTION_Y - 80 },
      c2: { x: toX, y: BRANCH_UP_Y + 70 },
      b: { x: toX, y: BRANCH_UP_Y },
    },
    { kind: 'line', a: { x: toX, y: BRANCH_UP_Y }, b: { x: toX, y: end } },
  ];
  const stemX = W / 2;
  const leftX = 220;
  const rightX = W - 220;
  const stem: Seg[] = [{ kind: 'line', a: { x: stemX, y: H + 20 }, b: { x: stemX, y: JUNCTION_Y } }];
  // Every route band starts at the same point: just behind the trolley's nose (distance along the stem from its start).
  const ROUTE_START = H + 20 - TROLLEY.cy; // band begins under the trolley and emerges from its nose
  let paths: Seg[][];
  let groups: Layout['groups'];
  let route: { band: string; head: string };
  let lev: string;

  const STEM_END = H + 20 - JUNCTION_Y - 48; // arrow tip (34 px ahead) stops just short of the points
  // Forward-motion arrow: IDENTICAL in every image (same band, same arrowhead, same place on the stem).
  const forward = routeBand(stem, ROUTE_START, STEM_END);
  if (scene.kind === 'switch') {
    const setX = scene.mirror ? rightX : leftX;
    const otherX = scene.mirror ? leftX : rightX;
    const setBranch = branchTo(stemX, setX);
    paths = [stem, branchTo(stemX, leftX), branchTo(stemX, rightX)];
    // groups[0] is always the LEFT zone and groups[1] the RIGHT (tests and probes rely on this).
    const mainG = { cx: setX, n: scene.main, people: crowdPositions(scene.main, setX) };
    const sideG = { cx: otherX, n: scene.side, people: crowdPositions(scene.side, otherX) };
    groups = scene.mirror ? [sideG, mainG] : [mainG, sideG];
    // The points are SET to one branch, so the same band continues from the points up that branch to its zone,
    // ending in the same arrowhead. This is the only route element two-side scenes lack.
    const set = routeBand(setBranch, 6, lengthOf(setBranch) - 44);
    route = { band: forward.band + set.band, head: forward.head + set.head };
    lev = scene.mirror
      ? lever(stemX, 482, 30, [-30], { x: stemX, y: JUNCTION_Y })
      : lever(stemX, 482, -30, [30], { x: stemX, y: JUNCTION_Y });
  } else {
    paths = [stem, branchTo(stemX, leftX), branchTo(stemX, rightX)];
    groups = [
      { cx: leftX, n: scene.left, people: crowdPositions(scene.left, leftX) },
      { cx: rightX, n: scene.right, people: crowdPositions(scene.right, rightX) },
    ];
    route = forward;
    lev = lever(stemX, 482, 0, [-30, 30], { x: stemX, y: JUNCTION_Y });
  }

  // Branches (every path after the stem) skip sleepers through the junction.
  const tracks = paths.map((p, i) => track(p, i === 0 ? 0 : 70));
  // Draw order (back to front): route band, sleepers, rails, people zones (cover the track ends), route arrowhead,
  // lever, trolley, people. Every scene uses exactly this order.
  const body =
    route.band +
    tracks.map((t) => t.sleepers).join('') +
    tracks.map((t) => t.rails).join('') +
    groups.map((g) => zone(g.cx)).join('') +
    route.head +
    lev +
    trolley(stemX) +
    groups.flatMap((g) => g.people.map((p) => person(p.x, p.y))).join('');
  return {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${C.bg}"/>${body}</svg>`,
    groups,
  };
}

export const layout = (scene: Scene) => compose(scene);
export const svg = (scene: Scene) => compose(scene).svg;
export const png = (scene: Scene, scale = EXPORT_SCALE) =>
  Buffer.from(
    new Resvg(svg(scene), { fitTo: { mode: 'zoom', value: scale }, font: { loadSystemFonts: false } })
      .render()
      .asPng(),
  );
export const dataUrl = (scene: Scene, scale = EXPORT_SCALE) =>
  `data:image/png;base64,${png(scene, scale).toString('base64')}`;
/**
 * Final study: diagrams are sent at 1280×960 to every model. TypeSafe Jev 1.14 rejects 2048×1536 ("Invalid image
 * dimensions") and accepts ≤ 1536×1152; one size for all models keeps the comparison fair.
 */
export const FINAL_SCALE = 1.25;
/** Exposed for tests: the fixed figure and zone geometry every image uses. */
export const GEOMETRY = { ZONE, FIG };
