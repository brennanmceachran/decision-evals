// site/v3 shows only numbers from site/v3/data.js, built by scripts/site-v3.ts from the analysis files. If this fails,
// run `pnpm site:v3` and commit.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { INPUTS } from '../scripts/findings.js';
import { buildV3, dataModuleV3, LIST_PRICE } from '../scripts/site-v3.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
const read = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
const jsonl = (p: string): any[] =>
  readFileSync(p, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l))
    .filter((r) => !r.error);

describe('landing page v3 matches the data', () => {
  const d = buildV3();
  const html = readFileSync('site/v3/index.html', 'utf8');
  const app = readFileSync('site/v3/app.js', 'utf8');
  const v4 = jsonl('results/real-v4.jsonl');

  it('site/v3/data.js matches a fresh build', () => {
    expect(readFileSync('site/v3/data.js', 'utf8'), 'site/v3/data.js is stale: run pnpm site:v3').toBe(dataModuleV3(d));
  });

  it('every "N to 1" odds equals p / (1 − p) of an analysed pair', () => {
    const at = read(INPUTS.attr);
    const allowed = new Set<string>(['1.0']);
    for (const m of at.models)
      for (const p of m.P4_parity.pairs)
        for (const v of [p.pSpareA, p.ci[0], p.ci[1]]) {
          const q = Math.max(v, 1 - v);
          if (q < 1) allowed.add((q / (1 - q)).toFixed(1));
        }
    const text = JSON.stringify([d.headlinesV2, d.scenarios.pairs.map((p) => p.rows.map((r) => r.times.toFixed(1)))]);
    const claimed = [
      ...text.matchAll(/(\d+\.\d) to 1/g),
      ...text.matchAll(/(\d+\.\d) times as likely/g),
      ...text.matchAll(/range (\d+\.\d)–(\d+\.\d)/g),
    ].flatMap((x) => x.slice(1).filter(Boolean));
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

  it('dashcam counts are on equal footing, computed independently of the builder', () => {
    const tally = (model: string, f: (r: any) => boolean) => {
      const rs = v4.filter((r) => r.model === model && f(r) && r.choice);
      return { toward: rs.filter((r) => r.choice !== `route_${r.fewer}`).length, of: rs.length };
    };
    for (const id of Object.keys(d.dash)) {
      const routing = tally(
        id,
        (r) => r.framing === 'ops' && r.relation === 'conflict' && (r.wording === 0 || r.wording === 2),
      );
      const dilemma = tally(id, (r) => r.framing === 'dilemma' && !!r.fewer);
      expect(d.dash[id]!.routing.toward, id).toBe(routing.toward);
      expect(d.dash[id]!.dilemma.toward, id).toBe(dilemma.toward);
      // Same number of requests per condition: answered + refused, plus at most the calls that errored (unparseable).
      const errored = readFileSync('results/real-v4.jsonl', 'utf8')
        .split('\n')
        .filter((l) => l.includes(`"model":"${id}"`) && l.includes('"error"')).length;
      for (const k of ['routing', 'dilemma', 'config', 'safety'] as const) {
        const c = d.dash[id]![k];
        expect(c.of + c.refused, `${id} ${k}`).toBeLessThanOrEqual(d.dashDesign.perCondition);
        expect(c.of + c.refused + errored, `${id} ${k}`).toBeGreaterThanOrEqual(d.dashDesign.perCondition);
      }
    }
    const h = d.headlinesV2.find((x) => x.id === 'routing')!;
    const px = tally(
      'perplexity/pplx-decider-v1.1-27b',
      (r) => r.framing === 'ops' && r.relation === 'conflict' && (r.wording === 0 || r.wording === 2),
    );
    expect(h.big).toBe(`${px.toward} of ${px.of}`);
    expect(d.dashDesign).toEqual({ frames: 8, depots: 2, perCondition: 32 });
  });

  it('schedule-following: each model counted where the schedule pointed at more people, and at fewer', () => {
    for (const id of Object.keys(d.dash)) {
      const f = d.dash[id]!.follow;
      const rs = (rel: string) =>
        v4.filter((r) => r.model === id && r.framing === 'ops' && r.relation === rel && r.choice);
      expect(f.larger.followed).toBe(rs('conflict').filter((r) => r.choice === `route_${r.scheduled}`).length);
      expect(f.smaller.followed).toBe(rs('aligned').filter((r) => r.choice === `route_${r.scheduled}`).length);
      // "conflict" = schedule points at the larger group; check against the rows' own fields.
      for (const r of rs('conflict')) expect(r.scheduled).not.toBe(r.fewer);
    }
  });

  it('costs use list price where recorded spend was zero on our own key; nothing billable shows as free', () => {
    for (const id of Object.keys(LIST_PRICE)) {
      const m = d.models.find((x) => x.id === id)!;
      expect(m.costPer1k, id).toBeGreaterThan(0);
      expect(m.costBasis).toMatch(/list price/);
    }
    const free = d.models.filter((m) => m.costPer1k === 0).map((m) => m.costBasis);
    for (const b of free) expect(b).toBe('listed free');
  });

  it('report card order is "passes the basic checks, then fewest flags", as the page says', () => {
    const rank = (id: string) => [d.models.find((m) => m.id === id)!.passesGates ? 0 : 1, d.traitByModel[id]!.total];
    for (let i = 1; i < d.rcOrder.length; i++) {
      const [ga, fa] = rank(d.rcOrder[i - 1]!);
      const [gb, fb] = rank(d.rcOrder[i]!);
      expect(ga! < gb! || (ga === gb && fa! <= fb!), `${d.rcOrder[i - 1]} before ${d.rcOrder[i]}`).toBe(true);
    }
    expect(html).toContain('passes the basic checks, then fewest trait flags');
  });

  it('scenario list: flagged counts match the trait results and are sorted', () => {
    const P = d.scenarios.pairs;
    for (let i = 1; i < P.length; i++) expect(P[i - 1]!.flagged).toBeGreaterThanOrEqual(P[i]!.flagged);
    const total = P.reduce((a, p) => a + p.flagged, 0);
    expect(total).toBe(d.attr.flagged.length);
    for (const p of P) {
      const [a, b] = p.pair.split('|');
      expect(p.prompt.text).toContain(`1 ${a}`);
      expect(p.prompt.text).toContain(`1 ${b}`);
    }
  });

  it('the harm fix: before and after come from the committed probe rows', () => {
    expect(d.harmFix.filter((h) => h.afterBoth).length).toBe(8);
    expect(d.harmFix.find((h) => !h.afterBoth)!.id).toBe('openai/gpt-6-luna');
  });

  it('static <head> text matches DATA', () => {
    const head = html.slice(0, html.indexOf('</head>'));
    const n = d.totals.answers.toLocaleString('en-US');
    expect(head).toContain(`${d.totals.models} AIs, ${n} life-or-death answers`);
    expect(head).toContain(
      `We gave ${d.totals.models} AI systems, including ${d.totals.decision} 'decision models' built`,
    );
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
