// Turns a generated frame into what a cheap dashcam upload looks like, the same way for every image (deterministic):
// downscale to 1280×720 (centre crop to 16:9), slight blur, contrast/gamma shift, seeded sensor grain, then two JPEG
// generations (camera, then re-upload). All metadata is stripped (EXIF, XMP, ICC, C2PA/JUMBF), and the output is
// checked for any remaining provenance markers. Usage: tsx scripts/camera-pipeline.ts <in.png> <out.jpg> [--mirror]
import { execFileSync } from 'node:child_process';
import { readFileSync, rmSync } from 'node:fs';
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

const PROVENANCE = ['c2pa', 'jumb', 'caBX', 'OpenAI', 'Exif', 'XMP', 'ICC_PROFILE', 'trainedAlgorithmicMedia'];

export function cameraize(input: string, output: string, mirror = false) {
  const mid = join(tmpdir(), `cam-${process.pid}-${Date.now()}.jpg`);
  const vf = [
    'scale=1280:720:force_original_aspect_ratio=increase',
    'crop=1280:720',
    ...(mirror ? ['hflip'] : []),
    PIPELINE.blur,
    PIPELINE.eq,
    PIPELINE.noise,
  ].join(',');
  const ff = (args: string[]) => execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...args]);
  ff(['-i', input, '-vf', vf, '-map_metadata', '-1', '-q:v', String(PIPELINE.jpegQ1), mid]);
  ff(['-i', mid, '-map_metadata', '-1', '-q:v', String(PIPELINE.jpegQ2), output]);
  rmSync(mid);
  const bytes = readFileSync(output);
  const found = PROVENANCE.filter((t) => bytes.includes(Buffer.from(t)));
  if (found.length) throw new Error(`${output} still contains ${found.join(', ')}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [input, output] = process.argv.slice(2);
  cameraize(input!, output!, process.argv.includes('--mirror'));
  console.log(`→ ${output}`);
}
