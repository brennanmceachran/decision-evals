// Turns a generated frame into what a cheap dashcam upload looks like, the same way for every image (deterministic):
// downscale to 1280×720 (centre crop to 16:9), slight blur, contrast/gamma shift, seeded sensor grain, then two JPEG
// generations (camera, then re-upload). All metadata is stripped (EXIF, XMP, ICC, C2PA/JUMBF), and the output is
// checked for any remaining provenance markers.
// Optional overlay (--overlay): the burned-in text a dashcam stamps on every frame (camera id, date/time, speed), drawn
// at full size BEFORE blur, grain and JPEG so it degrades with the rest of the frame. Its values match the ops log.
// Usage: tsx scripts/camera-pipeline.ts <in.png> <out.jpg> [--mirror] [--overlay]
import { execFileSync } from 'node:child_process';
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export const PIPELINE = {
  size: '1280x720',
  blur: 'gblur=sigma=0.6',
  eq: 'eq=contrast=0.94:brightness=0.01:saturation=0.92:gamma=1.04',
  noise: 'noise=alls=7:allf=t+u:all_seed=7',
  jpegQ1: 6, // ffmpeg -q:v (2 = best, 31 = worst); ~ quality 75
  jpegQ2: 8, // ~ quality 65
} as const;

/** Matches the ops logs in src/real-study.ts: CAB-T7-FWD, 2026-10-14 16:41:07–08, 11.2 km/h. */
export const OVERLAY = { left: 'CAB-T7-FWD', right: '2026/10/14 16:41:08', bottomRight: '011KM/H' } as const;

/** A transparent 1280×720 PNG with the overlay text: monospace, white with a soft dark shadow, like most dashcams. */
function overlayPng(path: string, mode: 'full' | 'id-speed') {
  const t = (x: number, y: number, s: string, anchor: 'start' | 'end') =>
    `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Menlo" font-size="22" font-weight="bold" ` +
    `fill="#f2f2f2" fill-opacity="0.92" stroke="#000" stroke-opacity="0.55" stroke-width="3" paint-order="stroke">${s}</text>`;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">` +
    t(22, 40, OVERLAY.left, 'start') +
    (mode === 'full' ? t(1258, 40, OVERLAY.right, 'end') : '') +
    t(1258, 700, OVERLAY.bottomRight, 'end') +
    `</svg>`;
  const png = new Resvg(svg, {
    font: { loadSystemFonts: false, fontFiles: ['/System/Library/Fonts/Menlo.ttc'], defaultFontFamily: 'Menlo' },
  })
    .render()
    .asPng();
  writeFileSync(path, png);
}

const PROVENANCE = ['c2pa', 'jumb', 'caBX', 'OpenAI', 'Exif', 'XMP', 'ICC_PROFILE', 'trainedAlgorithmicMedia'];

export function cameraize(input: string, output: string, mirror = false, overlay: false | 'full' | 'id-speed' = false) {
  const stamp = `${process.pid}-${Date.now()}`;
  const mid = join(tmpdir(), `cam-${stamp}.jpg`);
  const ov = join(tmpdir(), `cam-${stamp}-ov.png`);
  const base = ['scale=1280:720:force_original_aspect_ratio=increase', 'crop=1280:720', ...(mirror ? ['hflip'] : [])];
  const after = [PIPELINE.blur, PIPELINE.eq, PIPELINE.noise];
  const ff = (args: string[]) => execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...args]);
  if (overlay) {
    overlayPng(ov, overlay);
    ff([
      '-i',
      input,
      '-i',
      ov,
      '-filter_complex',
      `[0]${base.join(',')}[b];[b][1]overlay=0:0,${after.join(',')}`,
      '-map_metadata',
      '-1',
      '-q:v',
      String(PIPELINE.jpegQ1),
      mid,
    ]);
    rmSync(ov);
  } else {
    ff([
      '-i',
      input,
      '-vf',
      [...base, ...after].join(','),
      '-map_metadata',
      '-1',
      '-q:v',
      String(PIPELINE.jpegQ1),
      mid,
    ]);
  }
  ff(['-i', mid, '-map_metadata', '-1', '-q:v', String(PIPELINE.jpegQ2), output]);
  // Some real photos carry an embedded ICC colour profile, which ffmpeg passes through. Only those are re-encoded
  // without side data, so outputs for inputs without a profile stay byte-identical to the frozen study images.
  if (readFileSync(output).includes(Buffer.from('ICC_PROFILE'))) {
    const tmp = join(tmpdir(), `cam-${stamp}-icc.jpg`);
    ff(['-i', output, '-map_metadata', '-1', '-vf', 'sidedata=delete', '-flags', '+bitexact', '-q:v', '2', tmp]);
    writeFileSync(output, readFileSync(tmp));
    rmSync(tmp);
  }
  rmSync(mid);
  const bytes = readFileSync(output);
  const found = PROVENANCE.filter((t) => bytes.includes(Buffer.from(t)));
  if (found.length) throw new Error(`${output} still contains ${found.join(', ')}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [input, output] = process.argv.slice(2);
  cameraize(
    input!,
    output!,
    process.argv.includes('--mirror'),
    process.argv.includes('--overlay') ? 'full' : process.argv.includes('--overlay-no-date') ? 'id-speed' : false,
  );
  console.log(`→ ${output}`);
}
