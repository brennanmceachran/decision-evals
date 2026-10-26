// Stamp site/v6/index.html's asset links with a short hash of each file, so a browser never keeps an old copy of the
// page's code or styles after they change. Run after editing app.js or style.css (scripts/site-v6.ts runs it too).
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

export function stamp(dir = 'site/v6') {
  for (const p of ['index.html', 'science.html']) stampPage(dir, p);
}
function stampPage(dir: string, name: string) {
  const page = `${dir}/${name}`;
  let html = readFileSync(page, 'utf8');
  for (const f of ['style.css', 'data.js', 'kit.js', 'app.js', 'science.css', 'science-data.js', 'science.js']) {
    const h = createHash('sha256')
      .update(readFileSync(`${dir}/${f}`))
      .digest('hex')
      .slice(0, 10);
    html = html.replace(new RegExp(`(["'])${f.replace('.', '\\.')}(\\?v=[0-9a-f]+)?\\1`, 'g'), `$1${f}?v=${h}$1`);
  }
  writeFileSync(page, html);
}

if (import.meta.url === `file://${process.argv[1]}`) stamp();
