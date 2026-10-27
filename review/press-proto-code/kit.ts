// Illustration kit for press images. Flat, few colours, readable as a phone thumbnail.
export const INK = '#15171c';
export const PAPER = '#f4f0e6';
export const RED = '#e2302a';
export const GREEN = '#1e9e57';
export const AMBER = '#f5b700';
export const SLATE = '#3d5a80';
export const MUTED = '#6b6f76';
export const HEAVY = "'Avenir Next'";
export const COND = "'Avenir Next Condensed'";
export const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export const t = (
  x: number,
  y: number,
  s: string,
  size: number,
  o: { fill?: string; w?: number; f?: string; a?: 'start' | 'middle' | 'end'; ls?: number } = {},
) =>
  `<text x="${x}" y="${y}" font-family="${o.f ?? HEAVY}" font-weight="${o.w ?? 700}" font-size="${size}" fill="${o.fill ?? INK}" text-anchor="${o.a ?? 'start'}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}>${esc(s)}</text>`;
export const tl = (x: number, y: number, ls: string[], size: number, lh: number, o: Parameters<typeof t>[4] = {}) =>
  ls.map((l, i) => t(x, y + i * lh, l, size, o)).join('');

export type Kind = 'adult' | 'child' | 'elder' | 'wheelchair' | 'worker' | 'suit' | 'patient';
/** A person standing on (x, y), `h` tall (adult scale). Blank face; identity is in the label, never the skin. */
export function person(kind: Kind, x: number, y: number, h: number, shirt = SLATE, o: { ghost?: boolean } = {}) {
  const k = h / 130;
  const skin = o.ghost ? '#e3ddd1' : '#f1d4b3';
  const dark = o.ghost ? '#cfc8bb' : INK;
  const body = o.ghost ? '#ddd6c9' : shirt;
  const head = (cx: number, cy: number, r: number) =>
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${skin}" stroke="${dark}" stroke-width="4"/>`;
  let g = '';
  if (kind === 'wheelchair') {
    g += `<circle cx="-4" cy="-30" r="30" fill="none" stroke="${dark}" stroke-width="7"/><circle cx="-4" cy="-30" r="5" fill="${dark}"/><circle cx="36" cy="-7" r="7" fill="${dark}"/>`;
    g += `<path d="M-30 -60 V-100 M-30 -62 H26 L36 -12" fill="none" stroke="${dark}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
    g += `<path d="M-24 -62 V-104 Q-24 -114 -14 -114 H2 Q12 -114 12 -104 V-62 Z" fill="${body}" stroke="${dark}" stroke-width="4"/>`;
    g += `<path d="M-8 -66 H28 V-20" fill="none" stroke="${dark}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>`;
    g += head(-6, -130, 17);
    return `<g transform="translate(${x} ${y}) scale(${k})">${g}</g>`;
  }
  if (kind === 'patient') {
    // lying in a hospital bed, side view
    g += `<rect x="-60" y="-34" width="120" height="14" rx="4" fill="#fff" stroke="${dark}" stroke-width="4"/>`;
    g += `<path d="M-60 -20 V0 M60 -20 V0 M-60 -50 V-20" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>`;
    g += `<rect x="-40" y="-50" width="94" height="18" rx="9" fill="${body}" stroke="${dark}" stroke-width="4"/>`;
    g += head(-46, -46, 13);
    return `<g transform="translate(${x} ${y}) scale(${k})">${g}</g>`;
  }
  const child = kind === 'child';
  const sc = child ? 0.68 : 1;
  let p = '';
  p += `<path d="M-15 -52 V-4 Q-15 0 -11 0 H-5 Q-1 0 -1 -4 V-52 Z M1 -52 V-4 Q1 0 5 0 H11 Q15 0 15 -4 V-52 Z" fill="${dark}"/>`;
  p += `<path d="M-26 -94 Q-26 -106 -14 -106 H14 Q26 -106 26 -94 V-48 H-26 Z" fill="${body}" stroke="${dark}" stroke-width="4"/>`;
  p += `<path d="M-26 -98 L-34 -56 M26 -98 L34 -56" stroke="${body}" stroke-width="13" stroke-linecap="round"/>`;
  p += `<path d="M-26 -98 L-34 -56 M26 -98 L34 -56" stroke="${dark}" stroke-width="4" stroke-linecap="round" opacity=".0"/>`;
  if (kind === 'worker' && !o.ghost)
    p += `<path d="M-26 -78 H26 M-26 -64 H26" stroke="#fff" stroke-width="6"/>`;
  if (kind === 'suit' && !o.ghost)
    p += `<path d="M-8 -106 L0 -88 L8 -106 Z" fill="#fff"/><path d="M-3 -96 L0 -66 L3 -96 Z" fill="${RED}"/>`;
  if (kind === 'elder')
    p += `<path d="M40 -60 V0 M40 -60 Q40 -70 30 -70" fill="none" stroke="${dark}" stroke-width="6" stroke-linecap="round"/>`;
  p += head(0, child ? -128 : -126, child ? 23 : 19);
  if (kind === 'elder' && !o.ghost)
    p += `<path d="M-19 -128 Q-18 -150 0 -150 Q18 -150 19 -128" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M-19 -128 Q-18 -150 0 -150 Q18 -150 19 -128" fill="none" stroke="${dark}" stroke-width="2"/>`;
  if (kind === 'worker' && !o.ghost)
    p += `<path d="M-21 -130 Q-21 -152 0 -152 Q21 -152 21 -130 Z" fill="${AMBER}" stroke="${dark}" stroke-width="4"/><rect x="-26" y="-133" width="52" height="7" rx="3" fill="${AMBER}" stroke="${dark}" stroke-width="3"/>`;
  if (child && !o.ghost) p += `<circle cx="0" cy="-152" r="7" fill="${dark}"/>`;
  return `<g transform="translate(${x} ${y}) scale(${k * sc})">${p}</g>`;
}

/** A skull centred on (x, y), `w` wide. */
export function skull(x: number, y: number, w: number) {
  const k = w / 44;
  return `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -22C-13 -22 -21 -13 -21 -2C-21 6 -17 11 -12 13V22H12V13C17 11 21 6 21 -2C21 -13 13 -22 0 -22Z" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><ellipse cx="-8" cy="0" rx="5.5" ry="6.2" fill="${INK}"/><ellipse cx="8" cy="0" rx="5.5" ry="6.2" fill="${INK}"/><path d="M0 6L-3 12H3Z" fill="${INK}"/><path d="M-6 22V16M0 22V16M6 22V16" stroke="${INK}" stroke-width="2.5"/></g>`;
}
export const check = (x: number, y: number, w: number, c = GREEN) =>
  `<g transform="translate(${x} ${y}) scale(${w / 44})"><circle r="22" fill="${c}"/><path d="M-10 0 L-3 8 L11 -8" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>`;
export const cross = (x: number, y: number, w: number, c = RED) =>
  `<g transform="translate(${x} ${y}) scale(${w / 44})"><circle r="22" fill="${c}"/><path d="M-8 -8 L8 8 M8 -8 L-8 8" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/></g>`;

/** A streetcar, side view, front at (x, y) on the rail, facing right, `len` long. */
export function trolley(x: number, y: number, len: number) {
  const k = len / 260;
  return `<g transform="translate(${x} ${y}) scale(${k})">
  <path d="M-150 -132 L-118 -178" stroke="${INK}" stroke-width="5"/><path d="M-128 -180 H-100" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
  <path d="M-256 -24 V-112 Q-256 -132 -236 -132 H-28 Q0 -132 6 -104 L12 -40 Q14 -24 -2 -24 Z" fill="${AMBER}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/>
  <rect x="-256" y="-56" width="268" height="12" fill="${RED}"/>
  ${[0, 1, 2, 3].map((i) => `<rect x="${-238 + i * 50}" y="-114" width="38" height="44" rx="6" fill="#26313d" stroke="${INK}" stroke-width="4"/>`).join('')}
  <path d="M-34 -114 H-8 Q0 -114 2 -104 L6 -72 H-34 Z" fill="#26313d" stroke="${INK}" stroke-width="4"/>
  <circle cx="0" cy="-36" r="6" fill="#fff6c0" stroke="${INK}" stroke-width="3"/>
  <circle cx="-206" cy="-18" r="14" fill="${INK}"/><circle cx="-54" cy="-18" r="14" fill="${INK}"/>
  <circle cx="-206" cy="-18" r="5" fill="#888"/><circle cx="-54" cy="-18" r="5" fill="#888"/>
  </g>`;
}

/** The AI at the lever: a small robot, feet on (x, y), `h` tall, pulling a lever to its right. */
export function robot(x: number, y: number, h: number, pulled: 'up' | 'down' | 'none' = 'down') {
  const k = h / 150;
  const lever =
    pulled === 'up'
      ? `<path d="M70 -6 L46 -70" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><circle cx="46" cy="-70" r="9" fill="${RED}" stroke="${INK}" stroke-width="4"/>`
      : pulled === 'down'
        ? `<path d="M70 -6 L104 -64" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><circle cx="104" cy="-64" r="9" fill="${RED}" stroke="${INK}" stroke-width="4"/>`
        : `<path d="M70 -6 L76 -72" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><circle cx="76" cy="-72" r="9" fill="${RED}" stroke="${INK}" stroke-width="4"/>`;
  const hand = pulled === 'up' ? [46, -70] : pulled === 'down' ? [100, -60] : [74, -68];
  return `<g transform="translate(${x} ${y}) scale(${k})">
  <rect x="52" y="-10" width="36" height="12" rx="3" fill="${INK}"/>${lever}
  <path d="M-16 -46 V-6 M16 -46 V-6" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
  <rect x="-30" y="-92" width="60" height="50" rx="12" fill="#dfe6ee" stroke="${INK}" stroke-width="5"/>
  <path d="M22 -80 Q${(22 + hand[0]!) / 2 + 6} ${(-80 + hand[1]!) / 2 - 6} ${hand[0]} ${hand[1]}" fill="none" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>
  <path d="M-24 -80 L-40 -54" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>
  <rect x="-38" y="-148" width="76" height="56" rx="14" fill="#dfe6ee" stroke="${INK}" stroke-width="5"/>
  <rect x="-28" y="-138" width="56" height="36" rx="9" fill="#1d2733"/>
  <circle cx="-12" cy="-120" r="6" fill="#7fe3ff"/><circle cx="12" cy="-120" r="6" fill="#7fe3ff"/>
  <path d="M0 -148 V-164" stroke="${INK}" stroke-width="5"/><circle cx="0" cy="-168" r="6" fill="${RED}" stroke="${INK}" stroke-width="3"/>
  </g>`;
}

/** Track along a path: sleepers, then two rails. `hot` paints the rails red with a glow. */
export function track(d: string, o: { hot?: boolean; safe?: boolean; gauge?: number } = {}) {
  const g = o.gauge ?? 30;
  const rail = o.hot ? RED : o.safe ? GREEN : '#5f646b';
  return (
    (o.hot ? `<path d="${d}" fill="none" stroke="${RED}" stroke-width="${g * 2.4}" stroke-linecap="round" opacity=".16"/>` : '') +
    `<path d="${d}" fill="none" stroke="#a8916d" stroke-width="${g * 1.55}" stroke-dasharray="9 13"/>` +
    `<path d="${d}" fill="none" stroke="${rail}" stroke-width="${g + 7}" stroke-linecap="round"/>` +
    `<path d="${d}" fill="none" stroke="${PAPER}" stroke-width="${g - 5}" stroke-linecap="round"/>`
  );
}
export const svg = (w: number, h: number, body: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
