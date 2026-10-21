// Illustration kit, round 3. Flat shapes, bold outlines, readable as a phone thumbnail.
export const INK = '#14161b';
export const PAPER = '#f6f6f2';
export const RED = '#e2302a';
export const GREEN = '#1e9e57';
export const AMBER = '#f5b700';
export const SLATE = '#3d5a80';
export const MUTED = '#6b6f76';
export const FONT = "'Avenir Next'";
/** Skin tones: the emoji (Fitzpatrick) set, used only where race is the variable. NEUTRAL elsewhere. */
export const TONE = { light: '#f7dece', mlight: '#f3d2a2', medium: '#d5ab88', mdark: '#af7e57', dark: '#7c533e' };
export const NEUTRAL = '#f1c27d';

export const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
type TOpts = { fill?: string; w?: number; f?: string; a?: 'start' | 'middle' | 'end'; hi?: string; hiOpacity?: number };
/** Text; `{…}` spans are drawn in `hi` (default red). `hiOpacity` < 1 fades those spans in place (the layout never
 *  changes): at 0 the span is an empty slot marked by an underline, so an animation can fill the number in. */
export const t = (x: number, y: number, s: string, size: number, o: TOpts = {}) => {
  const parts = s.split(/(\{[^}]*\})/).filter(Boolean);
  const op = o.hiOpacity ?? 1;
  const body = parts
    .map((p) => {
      if (!p.startsWith('{')) return esc(p);
      const txt = esc(p.slice(1, -1));
      if (op >= 1) return `<tspan fill="${o.hi ?? RED}">${txt}</tspan>`;
      // Same glyphs at every opacity, so the line never reflows; at 0 the slot is simply blank.
      return `<tspan fill="${o.hi ?? RED}" fill-opacity="${op.toFixed(3)}">${txt}</tspan>`;
    })
    .join('');
  return `<text x="${x}" y="${y}" font-family="${o.f ?? FONT}" font-weight="${o.w ?? 700}" font-size="${size}" fill="${o.fill ?? INK}" text-anchor="${o.a ?? 'start'}">${body}</text>`;
};
export const tl = (x: number, y: number, ls: string[], size: number, lh: number, o: TOpts = {}) =>
  ls.map((l, i) => t(x, y + i * lh, l, size, o)).join('');
/** A rough width for Avenir Next Heavy (no font metrics in resvg), used to size headlines to fit. */
export const width = (s: string, size: number) => s.replace(/[{}]/g, '').length * size * 0.56;

// ---------------------------------------------------------------- flags (3:2, drawn at the origin, w wide)
const star = (cx: number, cy: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rr = i % 2 ? r * 0.42 : r;
    return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
export function flag(code: string, x: number, y: number, w: number) {
  const h = (w * 2) / 3;
  const v = (a: string, b: string, c: string) =>
    `<rect width="${w / 3}" height="${h}" fill="${a}"/><rect x="${w / 3}" width="${w / 3}" height="${h}" fill="${b}"/><rect x="${(2 * w) / 3}" width="${w / 3}" height="${h}" fill="${c}"/>`;
  const hz = (a: string, b: string, c: string) =>
    `<rect width="${w}" height="${h / 3}" fill="${a}"/><rect y="${h / 3}" width="${w}" height="${h / 3}" fill="${b}"/><rect y="${(2 * h) / 3}" width="${w}" height="${h / 3}" fill="${c}"/>`;
  let g = '';
  switch (code) {
    case 'US':
      for (let i = 0; i < 13; i++)
        g += `<rect y="${(i * h) / 13}" width="${w}" height="${h / 13 + 0.3}" fill="${i % 2 ? '#fff' : '#b22234'}"/>`;
      g += `<rect width="${w * 0.42}" height="${(h * 7) / 13}" fill="#3c3b6e"/>`;
      for (let r = 0; r < 4; r++)
        for (let c = 0; c < 5; c++)
          g += `<circle cx="${w * 0.05 + c * w * 0.08}" cy="${h * 0.07 + r * h * 0.115}" r="${w * 0.016}" fill="#fff"/>`;
      break;
    case 'NG':
      g = v('#008751', '#fff', '#008751');
      break;
    case 'DE':
      g = hz('#000', '#dd0000', '#ffce00');
      break;
    case 'FR':
      g = v('#0055a4', '#fff', '#ef4135');
      break;
    case 'IT':
      g = v('#009246', '#fff', '#ce2b37');
      break;
    case 'IN':
      g =
        hz('#ff9933', '#fff', '#138808') +
        `<circle cx="${w / 2}" cy="${h / 2}" r="${h * 0.12}" fill="none" stroke="#000080" stroke-width="${h * 0.03}"/>`;
      break;
    case 'JP':
      g = `<rect width="${w}" height="${h}" fill="#fff"/><circle cx="${w / 2}" cy="${h / 2}" r="${h * 0.3}" fill="#bc002d"/>`;
      break;
    case 'PK':
      g = `<rect width="${w}" height="${h}" fill="#01411c"/><rect width="${w * 0.25}" height="${h}" fill="#fff"/><circle cx="${w * 0.62}" cy="${h * 0.5}" r="${h * 0.3}" fill="#fff"/><circle cx="${w * 0.68}" cy="${h * 0.43}" r="${h * 0.26}" fill="#01411c"/><polygon points="${star(w * 0.74, h * 0.36, h * 0.1)}" fill="#fff"/>`;
      break;
    case 'CN':
      g = `<rect width="${w}" height="${h}" fill="#ee1c25"/><polygon points="${star(w * 0.17, h * 0.28, h * 0.16)}" fill="#ffde00"/>`;
      for (const [a, b] of [
        [0.33, 0.1],
        [0.4, 0.2],
        [0.4, 0.35],
        [0.33, 0.45],
      ])
        g += `<polygon points="${star(w * a!, h * b!, h * 0.055)}" fill="#ffde00"/>`;
      break;
    case 'BR':
      g = `<rect width="${w}" height="${h}" fill="#009c3b"/><polygon points="${w * 0.08},${h / 2} ${w / 2},${h * 0.1} ${w * 0.92},${h / 2} ${w / 2},${h * 0.9}" fill="#ffdf00"/><circle cx="${w / 2}" cy="${h / 2}" r="${h * 0.22}" fill="#002776"/>`;
      break;
    case 'GB':
      g = `<rect width="${w}" height="${h}" fill="#012169"/><path d="M0 0L${w} ${h}M${w} 0L0 ${h}" stroke="#fff" stroke-width="${h * 0.2}"/><path d="M0 0L${w} ${h}M${w} 0L0 ${h}" stroke="#c8102e" stroke-width="${h * 0.07}"/><path d="M${w / 2} 0V${h}M0 ${h / 2}H${w}" stroke="#fff" stroke-width="${h * 0.33}"/><path d="M${w / 2} 0V${h}M0 ${h / 2}H${w}" stroke="#c8102e" stroke-width="${h * 0.2}"/>`;
      break;
    case 'RAINBOW':
      ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'].forEach(
        (c, i) => (g += `<rect y="${(i * h) / 6}" width="${w}" height="${h / 6 + 0.3}" fill="${c}"/>`),
      );
      break;
    case 'TRANS':
      ['#5bcefa', '#f5a9b8', '#fff', '#f5a9b8', '#5bcefa'].forEach(
        (c, i) => (g += `<rect y="${(i * h) / 5}" width="${w}" height="${h / 5 + 0.3}" fill="${c}"/>`),
      );
      break;
  }
  const id = `c${Math.random().toString(36).slice(2, 8)}`;
  return `<g transform="translate(${x} ${y})"><clipPath id="${id}"><rect width="${w}" height="${h}" rx="${w * 0.04}"/></clipPath><g clip-path="url(#${id})">${g}</g><rect width="${w}" height="${h}" rx="${w * 0.04}" fill="none" stroke="${INK}" stroke-width="${Math.max(2, w * 0.04)}"/></g>`;
}
export const FLAG: Record<string, string> = {
  American: 'US',
  Nigerian: 'NG',
  German: 'DE',
  French: 'FR',
  Italian: 'IT',
  Indian: 'IN',
  Japanese: 'JP',
  Pakistani: 'PK',
  Chinese: 'CN',
  Brazilian: 'BR',
  British: 'GB',
};

/** A faith symbol in a white disc, r = radius. */
export function faith(kind: 'christian' | 'muslim' | 'jewish' | 'hindu', x: number, y: number, r: number) {
  const k = r / 20;
  let g = `<circle r="20" fill="#fff" stroke="${INK}" stroke-width="2.5"/>`;
  if (kind === 'christian')
    g += `<rect x="-2.6" y="-13" width="5.2" height="26" fill="${INK}"/><rect x="-9" y="-6.5" width="18" height="5.2" fill="${INK}"/>`;
  if (kind === 'muslim')
    g += `<circle cx="-2" cy="0" r="11" fill="${INK}"/><circle cx="2.5" cy="-1.5" r="9" fill="#fff"/><polygon points="${star(9, -1, 4.6)}" fill="${INK}"/>`;
  if (kind === 'jewish')
    g += `<polygon points="0,-12 10.4,6 -10.4,6" fill="none" stroke="${INK}" stroke-width="2.6"/><polygon points="0,12 10.4,-6 -10.4,-6" fill="none" stroke="${INK}" stroke-width="2.6"/>`;
  if (kind === 'hindu')
    g += `<text x="0" y="8" text-anchor="middle" font-family="'Devanagari MT'" font-weight="700" font-size="25" fill="${INK}">ॐ</text>`;
  return `<g transform="translate(${x} ${y}) scale(${k})">${g}</g>`;
}

export type Kind = 'adult' | 'child' | 'elder' | 'wheelchair' | 'worker' | 'suit' | 'poor' | 'patient';
export type PersonOpts = {
  shirt?: string;
  skin?: string;
  ghost?: boolean;
  flag?: string;
  badge?: string;
  hair?: string;
};
/** A person standing on (x, y), `h` tall at adult scale. Blank face. */
export function person(kind: Kind, x: number, y: number, h: number, o: PersonOpts = {}) {
  const k = h / 130;
  const dark = o.ghost ? '#cfc8bb' : INK;
  const skin = o.ghost ? '#e7e1d6' : (o.skin ?? NEUTRAL);
  const body = o.ghost ? '#ddd6c9' : (o.shirt ?? SLATE);
  const hair = o.ghost ? '#d6cfc2' : (o.hair ?? '#2b2118');
  const head = (cx: number, cy: number, r: number) =>
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${skin}" stroke="${dark}" stroke-width="4"/>`;
  let g = '';
  if (kind === 'wheelchair') {
    g += `<circle cx="-4" cy="-30" r="30" fill="none" stroke="${dark}" stroke-width="7"/><circle cx="-4" cy="-30" r="5" fill="${dark}"/><circle cx="36" cy="-7" r="7" fill="${dark}"/>`;
    g += `<path d="M-30 -60 V-100 M-30 -62 H26 L36 -12" fill="none" stroke="${dark}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`;
    g += `<path d="M-24 -62 V-104 Q-24 -114 -14 -114 H2 Q12 -114 12 -104 V-62 Z" fill="${body}" stroke="${dark}" stroke-width="4"/>`;
    g += `<path d="M-8 -66 H28 V-20" fill="none" stroke="${dark}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 -14 h10" stroke="${dark}" stroke-width="8" stroke-linecap="round"/>`;
    g += `<path d="M4 -96 L20 -76" stroke="${body}" stroke-width="12" stroke-linecap="round"/><circle cx="22" cy="-73" r="6" fill="${skin}" stroke="${dark}" stroke-width="3"/>`;
    g +=
      head(-6, -130, 17) + `<path d="M-23 -132 Q-22 -150 -6 -150 Q10 -150 11 -132 Q2 -142 -23 -132Z" fill="${hair}"/>`;
    if (o.badge) g += `<g transform="translate(-6 -88)">${o.badge}</g>`;
    return `<g transform="translate(${x} ${y}) scale(${k})">${g}</g>`;
  }
  if (kind === 'patient') {
    g += `<rect x="-62" y="-36" width="124" height="14" rx="4" fill="#fff" stroke="${dark}" stroke-width="4"/>`;
    g += `<path d="M-60 -22 V0 M60 -22 V0 M-60 -56 V-22" stroke="${dark}" stroke-width="5" stroke-linecap="round"/>`;
    g += `<rect x="-40" y="-54" width="96" height="20" rx="10" fill="${body}" stroke="${dark}" stroke-width="4"/>`;
    g += head(-46, -48, 13);
    return `<g transform="translate(${x} ${y}) scale(${k})">${g}</g>`;
  }
  const child = kind === 'child';
  const sc = child ? 0.7 : 1;
  const elder = kind === 'elder';
  const pants = kind === 'poor' ? '#5a4d3c' : kind === 'suit' ? '#1d2027' : dark;
  let p = '';
  // shoes and legs
  p += `<path d="M-15 -52 V-6 H-1 V-52 Z M1 -52 V-6 H15 V-52 Z" fill="${pants}"/>`;
  p += `<path d="M-18 0 V-8 Q-18 -10 -14 -10 H-1 V0 Z M1 0 V-10 H14 Q18 -10 18 -8 V0 Z" fill="${dark}"/>`;
  // arms (behind torso), hands
  p += `<path d="M-24 -96 L-35 -58 M24 -96 L35 -58" stroke="${body}" stroke-width="13" stroke-linecap="round"/>`;
  p += `<circle cx="-36" cy="-54" r="6.5" fill="${skin}" stroke="${dark}" stroke-width="3"/>`;
  if (!o.flag) p += `<circle cx="36" cy="-54" r="6.5" fill="${skin}" stroke="${dark}" stroke-width="3"/>`;
  // torso
  p += `<path d="M-26 -94 Q-26 -106 -14 -106 H14 Q26 -106 26 -94 V-48 H-26 Z" fill="${body}" stroke="${dark}" stroke-width="4"/>`;
  if (kind === 'worker' && !o.ghost)
    p += `<path d="M-24 -80 H24 M-24 -66 H24" stroke="#fff" stroke-width="6"/><path d="M-10 -106 V-50 M10 -106 V-50" stroke="#fff" stroke-width="5" opacity=".0"/>`;
  if (kind === 'suit' && !o.ghost)
    p += `<path d="M-9 -106 L0 -86 L9 -106 Z" fill="#fff"/><path d="M-3 -98 L0 -66 L3 -98 Z" fill="${RED}"/><path d="M-26 -94 L-8 -60 M26 -94 L8 -60" stroke="#2a2f3a" stroke-width="3"/>`;
  if (kind === 'poor' && !o.ghost)
    p += `<rect x="-14" y="-76" width="12" height="10" fill="#8a7a62" stroke="${dark}" stroke-width="2"/><rect x="6" y="-62" width="10" height="9" fill="#8a7a62" stroke="${dark}" stroke-width="2"/>`;
  if (o.badge) p += `<g transform="translate(0 -78)">${o.badge}</g>`;
  if (elder)
    p += `<path d="M44 -56 V0 M44 -56 Q44 -66 34 -66" fill="none" stroke="${dark}" stroke-width="6" stroke-linecap="round"/>`;
  // neck, head, hair
  p += `<rect x="-6" y="-112" width="12" height="10" fill="${skin}" stroke="${dark}" stroke-width="3"/>`;
  p += head(0, child ? -128 : -126, child ? 23 : 19);
  if (elder && !o.ghost)
    p += `<path d="M-20 -124 Q-20 -150 0 -150 Q20 -150 20 -124 Q14 -138 0 -140 Q-14 -138 -20 -124Z" fill="#fff" stroke="${dark}" stroke-width="3"/>`;
  else if (kind === 'worker' && !o.ghost)
    p += `<path d="M-22 -128 Q-22 -152 0 -152 Q22 -152 22 -128 Z" fill="${AMBER}" stroke="${dark}" stroke-width="4"/><rect x="-27" y="-132" width="54" height="8" rx="4" fill="${AMBER}" stroke="${dark}" stroke-width="3"/>`;
  else if (child && !o.ghost)
    p += `<path d="M-23 -128 Q-23 -153 0 -153 Q23 -153 23 -128 Q12 -140 0 -140 Q-12 -140 -23 -128Z" fill="${hair}"/><circle cx="17" cy="-148" r="7" fill="${hair}"/>`;
  else if (!o.ghost)
    p += `<path d="M-20 -126 Q-20 -148 0 -148 Q20 -148 20 -126 Q12 -138 0 -138 Q-12 -138 -20 -126Z" fill="${hair}"/>`;
  if (o.flag && !o.ghost) {
    // holding a flag on a pole in the right hand
    p += `<path d="M36 -54 V-200" stroke="${dark}" stroke-width="5" stroke-linecap="round"/><circle cx="36" cy="-54" r="6.5" fill="${skin}" stroke="${dark}" stroke-width="3"/>`;
    p += flag(o.flag, 38, -200, 66);
  }
  return `<g transform="translate(${x} ${y}) scale(${k * sc})">${p}</g>`;
}

export function skull(x: number, y: number, w: number) {
  const k = w / 44;
  return `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 -22C-13 -22 -21 -13 -21 -2C-21 6 -17 11 -12 13V22H12V13C17 11 21 6 21 -2C21 -13 13 -22 0 -22Z" fill="#fff" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><ellipse cx="-8" cy="0" rx="5.5" ry="6.2" fill="${INK}"/><ellipse cx="8" cy="0" rx="5.5" ry="6.2" fill="${INK}"/><path d="M0 6L-3 12H3Z" fill="${INK}"/><path d="M-6 22V16M0 22V16M6 22V16" stroke="${INK}" stroke-width="2.5"/></g>`;
}
export const check = (x: number, y: number, w: number, c = GREEN) =>
  `<g transform="translate(${x} ${y}) scale(${w / 44})"><circle r="22" fill="${c}" stroke="#fff" stroke-width="3"/><path d="M-10 0 L-3 8 L11 -8" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>`;

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

export function robot(x: number, y: number, h: number, pose: 'up' | 'down' | 'none' | 'push' | 'lever' = 'none') {
  const k = h / 150;
  // 'down' pulls the lever toward the viewer (the lower track), 'up' pushes it away (the upper track), 'lever' holds it
  // upright (not yet pulled).
  const tip = pose === 'down' ? [104, -64] : pose === 'up' ? [44, -66] : [74, -76];
  const lever =
    pose === 'down' || pose === 'up' || pose === 'lever'
      ? `<rect x="52" y="-10" width="36" height="12" rx="3" fill="${INK}"/><path d="M70 -6 L${tip[0]} ${tip[1]}" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><circle cx="${tip[0]}" cy="${tip[1]}" r="9" fill="${RED}" stroke="${INK}" stroke-width="4"/>`
      : '';
  const arm =
    pose === 'down' || pose === 'up' || pose === 'lever'
      ? `<path d="M22 -80 Q${(22 + tip[0]!) / 2 + 8} ${-86} ${tip[0]! - 4} ${tip[1]! + 4}" fill="none" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>`
      : pose === 'push'
        ? `<path d="M-24 -84 L-62 -86 M-24 -70 L-62 -66" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>`
        : `<path d="M24 -80 L36 -52" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>`;
  return `<g transform="translate(${x} ${y}) scale(${k})">${lever}
  <path d="M-16 -46 V-6 M16 -46 V-6" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
  <rect x="-30" y="-92" width="60" height="50" rx="12" fill="#dfe6ee" stroke="${INK}" stroke-width="5"/>${arm}
  ${pose === 'push' ? '' : `<path d="M-24 -80 L-36 -52" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>`}
  <rect x="-38" y="-148" width="76" height="56" rx="14" fill="#dfe6ee" stroke="${INK}" stroke-width="5"/>
  <rect x="-28" y="-138" width="56" height="36" rx="9" fill="#1d2733"/>
  <circle cx="-12" cy="-120" r="6" fill="#7fe3ff"/><circle cx="12" cy="-120" r="6" fill="#7fe3ff"/>
  <path d="M0 -148 V-164" stroke="${INK}" stroke-width="5"/><circle cx="0" cy="-168" r="6" fill="${RED}" stroke="${INK}" stroke-width="3"/>
  </g>`;
}

export function track(d: string, o: { hot?: boolean; gauge?: number; bg?: string } = {}) {
  const g = o.gauge ?? 30;
  const rail = o.hot ? RED : '#5f646b';
  return (
    (o.hot
      ? `<path d="${d}" fill="none" stroke="${RED}" stroke-width="${g * 2.6}" stroke-linecap="round" opacity=".15"/>`
      : '') +
    `<path d="${d}" fill="none" stroke="#a8916d" stroke-width="${g * 1.55}" stroke-dasharray="9 13"/>` +
    `<path d="${d}" fill="none" stroke="${rail}" stroke-width="${g + 7}" stroke-linecap="round"/>` +
    `<path d="${d}" fill="none" stroke="${o.bg ?? PAPER}" stroke-width="${g - 5}" stroke-linecap="round"/>`
  );
}
/**
 * Several routes that share track, drawn as one railway: every route's ties, then every rail, then every gap between
 * rails. Drawing them in layers (not route by route) lets a branch leave the main line the way a real switch does,
 * without one route's gap cutting through another's rails. Give every route its full length from the same start, so
 * the shared stretch is drawn identically.
 */
export function tracks(ds: string[], o: { hot?: boolean; gauge?: number; bg?: string } = {}) {
  const g = o.gauge ?? 30;
  const rail = o.hot ? RED : '#5f646b';
  const each = (attrs: string) => ds.map((d) => `<path d="${d}" fill="none" ${attrs}/>`).join('');
  return (
    (o.hot ? each(`stroke="${RED}" stroke-width="${g * 2.6}" stroke-linecap="round" opacity=".15"`) : '') +
    each(`stroke="#a8916d" stroke-width="${g * 1.55}" stroke-dasharray="9 13"`) +
    each(`stroke="${rail}" stroke-width="${g + 7}"`) +
    each(`stroke="${o.bg ?? PAPER}" stroke-width="${g - 5}"`)
  );
}
export const svg = (w: number, h: number, body: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;

/** A smooth path through points (Catmull-Rom as cubic Béziers). */
export function smooth(pts: [number, number][]) {
  let d = `M${pts[0]![0]} ${pts[0]![1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]!;
    const p1 = pts[i]!;
    const p2 = pts[i + 1]!;
    const p3 = pts[Math.min(pts.length - 1, i + 2)]!;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0]!.toFixed(1)} ${c1[1]!.toFixed(1)} ${c2[0]!.toFixed(1)} ${c2[1]!.toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return d;
}
/** A small chevron arrow (drawn, so it never falls back to another font). */
export const arrow = (x: number, y: number, s: number, dir: 'left' | 'right', c = INK) =>
  `<path d="M${x + (dir === 'left' ? s * 0.5 : -s * 0.5)} ${y - s * 0.5} L${x + (dir === 'left' ? -s * 0.5 : s * 0.5)} ${y} L${x + (dir === 'left' ? s * 0.5 : -s * 0.5)} ${y + s * 0.5}" fill="none" stroke="${c}" stroke-width="${s * 0.22}" stroke-linecap="round" stroke-linejoin="round"/>`;
