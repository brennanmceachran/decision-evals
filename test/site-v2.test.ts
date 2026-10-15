// site/v2 shows only numbers from site/v2/data.js, built by scripts/site-v2.ts from the analysis files. If this fails,
// run `pnpm site:v2` and commit.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { INPUTS } from '../scripts/findings.js';
import { buildV2, dataModuleV2 } from '../scripts/site-v2.js';

const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

describe('landing page v2 matches the data', () => {
  const d = buildV2();
  const html = readFileSync('site/v2/index.html', 'utf8');
  const app = readFileSync('site/v2/app.js', 'utf8');

  it('site/v2/data.js matches a fresh build', () => {
    expect(readFileSync('site/v2/data.js', 'utf8'), 'site/v2/data.js is stale: run pnpm site:v2').toBe(dataModuleV2(d));
  });

  it('every "N to 1" odds equals p / (1 − p) of an analysed pair (Amendment 1 to PREREGISTRATION-ATTR.md)', () => {
    const at = read(INPUTS.attr);
    const allowed = new Set<string>(['1.0']);
    for (const m of at.models)
      for (const p of m.P4_parity.pairs)
        for (const v of [p.pSpareA, p.ci[0], p.ci[1]]) {
          const q = Math.max(v, 1 - v);
          if (q < 1) allowed.add((q / (1 - q)).toFixed(1));
        }
    const text = JSON.stringify(d.headlinesV2);
    const claimed = [...text.matchAll(/(\d+\.\d) to 1/g)].map((x) => x[1]!);
    expect(claimed.length).toBeGreaterThan(5);
    for (const c of claimed) expect(allowed.has(c), `${c} to 1 is not computed from any pair`).toBe(true);
  });

  it('the page never types a multiplier, odds or frequency by hand', () => {
    for (const src of [html, app]) {
      expect(src).not.toMatch(/\b\d+\.\d\s*(to 1|×)/);
      expect(src).not.toMatch(/\d+\s*(x|×)\s*more\b/i);
      expect(src).not.toMatch(/% of the time/);
    }
  });

  it('headline counts, computed independently of the builder', () => {
    const rows = readFileSync('results/real-v4.jsonl', 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((l) => JSON.parse(l))
      .filter((r) => !r.error);
    const count = (model: string, framing: string) => {
      const rs = rows.filter(
        (r) => r.model === model && r.framing === framing && r.relation === 'conflict' && r.choice,
      );
      return `${rs.filter((r) => r.choice !== `route_${r.fewer}`).length} of ${rs.length}`;
    };
    const h = (id: string) => d.headlinesV2.find((x) => x.id === id)!;
    expect(h('routing').big).toBe(count('perplexity/pplx-decider-v1.1-27b', 'ops'));
    expect(h('rule').big).toBe(count('cloudflare/clef-flash', 'ops-safety'));
    expect(h('rule').take).toContain(count('cloudflare/clef-omni', 'ops-safety'));
    // Transplant: AIs whose mean P(operate) at 5 patients is above 0.5, from the committed cell means.
    const fd = read(INPUTS.data)['pilot-v2b.json'].models;
    const acting = Object.values(fd).filter((m: any) => m.cells['transplant|n=5'].mean > 0.5).length; // eslint-disable-line @typescript-eslint/no-explicit-any
    expect(h('transplant').big).toBe(`${acting} of ${Object.keys(fd).length}`);
    // Race: every version's top choice was the Black woman.
    const vs = d.attr.models['cloudflare/clef']!.pairs['Black woman|White man']!.versions as (number | null)[];
    expect(h('race').big).toBe(`${vs.filter((v) => v !== null && v > 0.5).length} of ${vs.length}`);
  });

  it('picture-vs-words right calls come from the committed image-study rows', () => {
    const r = d.rightCalls['cloudflare/clef-flash']!;
    expect(r.words.of).toBe(12);
    expect(r.picture.right).toBeLessThan(r.words.right);
    expect(d.headlinesV2.find((x) => x.id === 'picture')!.big).toBe(`${r.picture.right} of ${r.picture.of}`);
  });

  it('static <head> text matches DATA', () => {
    const head = html.slice(0, html.indexOf('</head>'));
    const n = d.totals.answers.toLocaleString('en-US');
    expect(head).toContain(`${d.totals.models} AIs, ${n} life-or-death answers`);
    expect(head).toContain(`We gave ${d.totals.models} AI systems, including ${d.totals.decision} 'decision models'`);
  });

  it('every data-x binding evaluates', () => {
    const exprs = [...html.matchAll(/data-x="([^"]+)"/g)].map((m) => m[1]!.replace(/&quot;/g, '"'));
    expect(exprs.length).toBeGreaterThan(10);
    const f2 = (x: number) => Number(x).toFixed(2);
    const fint = (x: number) => Number(x).toLocaleString('en-US');
    for (const e of exprs) {
      const v = Function('D', 'fint', 'f2', `return (${e});`)(d, fint, f2);
      expect(v === undefined || v === null || /NaN|undefined/.test(String(v)), e).toBe(false);
    }
  });
});
