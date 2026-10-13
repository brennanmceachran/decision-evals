/**
 * results/latest.json (Promptfoo output) → per-model summaries.
 * Usage: pnpm analyze [results/latest.json]
 *
 * For now it prints P(act) per (dilemma, sweep point) and the order/label invariance gaps.
 * Site export comes later.
 */
import { readFileSync } from 'node:fs';
import type { Outcome } from './call.js';
import { describeWorth, fitExchange } from './exchange.js';
import type { Variant } from './expand.js';

export interface Row {
  subject: string;
  variant: Variant;
  outcome: Outcome;
  pAct: number;
}

export function loadRows(path: string): Row[] {
  const data = JSON.parse(readFileSync(path, 'utf8'));
  const rows: Row[] = [];
  for (const r of data.results.results) {
    if (r.response?.error || !r.response?.output) continue;
    const variant: Variant = JSON.parse(r.vars.variant);
    const outcome: Outcome = r.response.output;
    if (outcome.refused) continue; // counted separately by refusalRates()
    const pAct = variant.focalIds.reduce((s, id) => s + (outcome.dist[id] ?? 0), 0);
    rows.push({ subject: r.provider.label, variant, outcome, pAct });
  }
  return rows;
}

/** Refusals per (subject, dilemma), as a share of answered + refused rows. */
export function refusalRates(path: string): Map<string, { refused: number; total: number }> {
  const data = JSON.parse(readFileSync(path, 'utf8'));
  const out = new Map<string, { refused: number; total: number }>();
  for (const r of data.results.results) {
    if (r.response?.error || !r.response?.output) continue;
    const key = `${r.provider.label}|${JSON.parse(r.vars.variant).dilemmaId}`;
    const cur = out.get(key) ?? { refused: 0, total: 0 };
    cur.total++;
    if (r.response.output.refused) cur.refused++;
    out.set(key, cur);
  }
  return out;
}

const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;

export function groupBy<T>(xs: T[], key: (x: T) => string): Map<string, T[]> {
  const m = new Map<string, T[]>();
  for (const x of xs) m.set(key(x), [...(m.get(key(x)) ?? []), x]);
  return m;
}

/** Mean |P(act | forward) − P(act | reverse)| over matched siblings: 0 = order-invariant. */
export function axisGap(rows: Row[], axis: 'order' | 'labelStyle'): number {
  const siblings = groupBy(rows, (r) => {
    const v = r.variant;
    return [r.subject, v.dilemmaId, v.pointKey, v.paraphrase, axis === 'order' ? v.labelStyle : v.order].join('|');
  });
  const gaps: number[] = [];
  for (const g of siblings.values()) if (g.length === 2) gaps.push(Math.abs(g[0]!.pAct - g[1]!.pAct));
  return gaps.length ? mean(gaps) : NaN;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const rows = loadRows(process.argv.slice(2).find((a) => !a.startsWith('--')) ?? 'results/latest.json');
  if (process.argv.includes('--exchange')) {
    // One line per (subject, pair): fitted exchange rate, P(spare A) at 1:1, count sensitivity β.
    const ex = rows.filter((r) => r.variant.module === 'exchange' || r.variant.module === 'parity');
    for (const [dilemma, drs] of groupBy(ex, (r) => r.variant.dilemmaId)) {
      const pairs = [...new Set(drs.map((r) => `${r.variant.point.a}|${r.variant.point.b}`))];
      console.log(`\n== ${dilemma}   cells: P(spare A) at 1:1 / fitted worth of 1 A in B (β)`);
      console.log(`${'subject'.padEnd(38)} ${pairs.map((p) => p.replace('|', '/').slice(0, 22).padStart(23)).join('')}`);
      for (const [subject, srs] of groupBy(drs, (r) => r.subject)) {
        const cells = pairs.map((pair) => {
          const obs = srs
            .filter((r) => `${r.variant.point.a}|${r.variant.point.b}` === pair)
            .map((r) => ({ k: Number(r.variant.point.k), m: Number(r.variant.point.m), p: r.pAct }));
          const f = fitExchange(obs);
          const w = Number.isFinite(f.worth) ? (f.worth >= 100 ? '>100' : f.worth < 0.01 ? '<.01' : f.worth.toFixed(2)) : '  - ';
          return `${f.pEven.toFixed(2)} ${w.padStart(5)} (${f.beta.toFixed(1)})`.padStart(23);
        });
        console.log(`${subject.padEnd(38)} ${cells.join('')}`);
      }
    }
    process.exit(0);
  }
  if (process.argv.includes('--table')) {
    // Compact table: one row per subject, one column per sweep point.
    const points = [...new Set(rows.map((r) => r.variant.pointKey))];
    const n = (k: string) => k.match(/n=(\d+)/)?.[1] ?? k;
    console.log(`${'subject'.padEnd(40)} ord   lbl   ${points.map((k) => n(k).padStart(5)).join(' ')}`);
    for (const [subject, rs] of groupBy(rows, (r) => r.subject)) {
      const byPoint = groupBy(rs, (r) => r.variant.pointKey);
      const cells = points.map((k) => mean((byPoint.get(k) ?? []).map((r) => r.pAct)).toFixed(2).padStart(5));
      console.log(`${subject.padEnd(40)} ${axisGap(rs, 'order').toFixed(2)}  ${axisGap(rs, 'labelStyle').toFixed(2)}  ${cells.join(' ')}`);
    }
    process.exit(0);
  }
  for (const [subject, rs] of groupBy(rows, (r) => r.subject)) {
    console.log(`\n${subject}   order-gap=${axisGap(rs, 'order').toFixed(3)} label-gap=${axisGap(rs, 'labelStyle').toFixed(3)}`);
    for (const [k, g] of groupBy(rs, (r) => `${r.variant.dilemmaId} ${r.variant.pointKey}`)) {
      const p = mean(g.map((r) => r.pAct));
      console.log(`  ${k.padEnd(40)} P(act)=${p.toFixed(3)} ${'█'.repeat(Math.round(p * 20))}`);
    }
  }
}
