// The landing page (site/) shows only numbers from site/data.js, which scripts/site.ts generates from the analysis
// files. If this fails, run `pnpm site` and commit.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { INPUTS } from '../scripts/findings.js';
import { build, dataModule } from '../scripts/site.js';

const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));

describe('landing page matches the data', () => {
  const d = build();
  const html = readFileSync('site/index.html', 'utf8');
  const app = readFileSync('site/app.js', 'utf8');

  it('site/data.js matches a fresh build', () => {
    expect(readFileSync('site/data.js', 'utf8'), 'site/data.js is stale: run pnpm site').toBe(dataModule(d));
  });

  it('every "N× as likely" equals p / (1 − p) of an analysed pair (Amendment 1 to PREREGISTRATION-ATTR.md)', () => {
    const at = read(INPUTS.attr);
    const allowed = new Set<string>();
    for (const m of at.models)
      for (const p of m.P4_parity.pairs) {
        const q = Math.max(p.pSpareA, 1 - p.pSpareA);
        allowed.add((q / (1 - q)).toFixed(1));
      }
    const text = JSON.stringify(d.headlines) + JSON.stringify(d.attr.flagged);
    const claimed = [...text.matchAll(/(\d+(?:\.\d)?)× as likely/g)].map((x) => x[1]!);
    expect(claimed.length).toBeGreaterThan(5);
    for (const c of claimed) expect(allowed.has(c), `${c}× is not computed from any pair`).toBe(true);
  });

  it('the page never types a multiplier or a frequency by hand', () => {
    // Multipliers reach the page only through DATA; the page's own text and code may not contain one.
    for (const src of [html, app]) {
      expect(src).not.toMatch(/\d+(\.\d)?\s*×\s*(as likely|more)/);
      expect(src).not.toMatch(/\d+\s*(x|×)\s*more\b/i);
      expect(src).not.toMatch(/% of the time/);
    }
  });

  it('headline numbers, computed independently of the builder', () => {
    const at = read(INPUTS.attr);
    const pair = (id: string, k: string) =>
      at.models
        .find((m: { subject: string }) => m.subject === id)
        .P4_parity.pairs.find((p: { pair: string }) => p.pair === k);
    const bwm = pair('cloudflare/clef', 'Black woman|White man');
    expect(bwm.flagged).toBe(true);
    const race = d.headlines.find((h) => h.id === 'race')!;
    expect(race.big).toBe(`${(bwm.pSpareA / (1 - bwm.pSpareA)).toFixed(1)}×`);
    // "picked her in all 16 versions": every version's top choice was her.
    const vs = d.attr.models['cloudflare/clef']!.pairs['Black woman|White man']!.versions!;
    expect(vs.filter((v: number | null) => v !== null && v > 0.5).length).toBe(16);
    expect(race.text).toContain(`all ${vs.length} versions`);
    // Politics: zero flags.
    const pol = at.models.filter((m: { P4_parity: { pairs: { dilemma: string; flagged: boolean }[] } }) =>
      m.P4_parity.pairs.some((p) => p.dilemma === 'parity-politics' && p.flagged),
    ).length;
    expect(d.headlines.find((h) => h.id === 'politics')!.big).toBe(String(pol));
    // Dashcam counts come from the committed rows.
    const rows = readFileSync('results/real-v4.jsonl', 'utf8')
      .split('\n')
      .filter(Boolean)
      .map((l) => JSON.parse(l))
      .filter(
        (r) =>
          !r.error &&
          r.model === 'perplexity/pplx-decider-v1.1-27b' &&
          r.framing === 'ops' &&
          r.relation === 'conflict' &&
          r.choice,
      );
    const toward = rows.filter((r) => r.choice !== `route_${r.fewer}`).length;
    expect(d.headlines.find((h) => h.id === 'routing')!.big).toBe(`${toward} of ${rows.length}`);
  });

  it('the static <head> text (no JavaScript there) matches DATA', () => {
    const head = html.slice(0, html.indexOf('</head>'));
    const n = d.totals.answers.toLocaleString('en-US');
    expect(head).toContain(`${d.totals.models} AIs, ${n} life-or-death answers`);
    expect(head).toContain(`We gave ${d.totals.models} AI systems, including ${d.totals.decision} 'decision models'`);
    expect(head).toContain(`its relatives ${n} times`);
  });

  it('totals add up', () => {
    expect(d.totals.answers).toBe(d.studies.reduce((s, x) => s + x.answers, 0));
    expect(d.models.length).toBe(20);
  });

  it('every data-x binding on the page evaluates', () => {
    const exprs = [...html.matchAll(/data-x="([^"]+)"/g)].map((m) => m[1]!.replace(/&quot;/g, '"'));
    expect(exprs.length).toBeGreaterThan(10);
    const f2 = (x: number) => Number(x).toFixed(2);
    const fint = (x: number) => Number(x).toLocaleString('en-US');
    for (const e of exprs) {
      const v = Function('D', 'fint', 'f2', `return (${e});`)(d, fint, f2);
      expect(v === undefined || v === null || String(v).includes('NaN') || String(v).includes('undefined'), e).toBe(
        false,
      );
    }
  });
});
