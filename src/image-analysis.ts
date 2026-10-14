/**
 * The analysis frozen in PREREGISTRATION-IMAGE.md. Usage: tsx src/image-analysis.ts results/image-v1.jsonl
 * Writes results/image-analysis-<tag>.json and prints a summary.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import { fitLogistic } from './exchange.js';
import { bootstrapCI } from './prereg.js';
import { SUBJECTS } from './subjects.js';

interface Row {
  model: string;
  item: string;
  design: 'switch' | 'two-side';
  a: number;
  b: number;
  mirror: boolean;
  order: 'forward' | 'reverse';
  condition: 'text_outcomes' | 'text_scene' | 'image';
  refused: boolean;
  pFocal?: number;
  choice: string | null;
  focalKey: string;
  probes: Record<string, { correct: boolean }> | null;
  error?: string;
}

const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : NaN);
const round = (x: number, d = 3) => (Number.isFinite(x) ? Math.round(x * 10 ** d) / 10 ** d : NaN);

export function analyzeImage(path: string) {
  const rows: Row[] = readFileSync(path, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((l) => JSON.parse(l));
  const errors = rows.filter((r) => r.error);
  const ok = rows.filter((r) => !r.error);
  const chat = new Set(SUBJECTS.filter((s) => s.kind === 'chat').map((s) => s.id));
  // Chat models scored 0/1 (Amendment 1 of the main pre-registration).
  const score = (r: Row) => (r.refused ? undefined : chat.has(r.model) ? (r.choice === r.focalKey ? 1 : 0) : r.pFocal);

  const models = [...new Set(ok.map((r) => r.model))].sort();
  const out = models.map((model) => {
    const rs = ok.filter((r) => r.model === model);
    const img = rs.filter((r) => r.condition === 'image');
    const probeAnswers = img.flatMap((r) => Object.values(r.probes ?? {}));
    const perception = probeAnswers.length ? probeAnswers.filter((p) => p.correct).length / probeAnswers.length : NaN;
    const readsDiagrams = perception >= 0.9;
    const trialOk = (r: Row) => r.condition !== 'image' || Object.values(r.probes ?? {}).every((p) => p.correct);

    /** Item mean per condition (mean over its variants), optionally filtered. */
    const itemMeans = (cond: Row['condition'], filtered: boolean) => {
      const m = new Map<string, number[]>();
      for (const r of rs.filter((r) => r.condition === cond && (!filtered || trialOk(r)))) {
        const s = score(r);
        if (s === undefined) continue;
        m.set(r.item, [...(m.get(r.item) ?? []), s]);
      }
      return new Map([...m].map(([k, v]) => [k, mean(v)]));
    };
    const gap = (c1: Row['condition'], c2: Row['condition'], filtered: boolean) => {
      const A = itemMeans(c1, filtered);
      const B = itemMeans(c2, filtered);
      const items = [...A.keys()].filter((k) => B.has(k));
      const diffs = items.map((k) => Math.abs(A.get(k)! - B.get(k)!));
      const [lo, hi] = bootstrapCI(diffs);
      return {
        mean: round(mean(diffs)),
        ci: [round(lo), round(hi)],
        items: items.length,
        perItem: Object.fromEntries(items.map((k) => [k, round(A.get(k)! - B.get(k)!)])),
      };
    };

    // I3: n* on switch items Nv1 per condition.
    const nStar = (cond: Row['condition']) => {
      const pts = rs.filter(
        (r) => r.condition === cond && r.design === 'switch' && r.b === 1 && score(r) !== undefined,
      );
      const { alpha, beta } = fitLogistic(
        pts.map((r) => Math.log(r.a)),
        pts.map((r) => Math.min(1 - 1e-4, Math.max(1e-4, score(r)!))),
      );
      const n = beta > 0.05 ? Math.exp(-alpha / beta) : NaN;
      return !Number.isFinite(n) ? 'no number sensitivity' : n < 1 ? '< 1' : n > 20 ? '> 20' : round(n, 1);
    };
    // I4: controls (switch 1v2, 1v5 — acting kills more).
    const control = (cond: Row['condition']) => {
      const v = itemMeans(cond, cond === 'image');
      const x = mean(['switch:1v2', 'switch:1v5'].map((k) => v.get(k)).filter((n): n is number => n !== undefined));
      return { pAct: round(x), pass: x <= 0.2 };
    };
    // I5: side and order bias.
    const bias = (cond: Row['condition'], axis: 'mirror' | 'order') => {
      const m = new Map<string, Record<string, number>>();
      for (const r of rs.filter((r) => r.condition === cond)) {
        const s = score(r);
        if (s === undefined) continue;
        const k = `${r.item}|${axis === 'mirror' ? r.order : r.mirror}`;
        const rec = m.get(k) ?? {};
        rec[String(axis === 'mirror' ? r.mirror : r.order)] = s;
        m.set(k, rec);
      }
      return round(
        mean(
          [...m.values()]
            .filter((x) => Object.keys(x).length === 2)
            .map((x) => Math.abs(Object.values(x)[0]! - Object.values(x)[1]!)),
        ),
      );
    };

    const I1 = gap('image', 'text_scene', true);
    const conds = ['text_outcomes', 'text_scene', 'image'] as const;
    return {
      model,
      kind: chat.has(model) ? 'chat' : 'decision',
      perception: round(perception),
      readsDiagrams,
      refused: rs.filter((r) => r.refused).length,
      I1_modality_gap: I1,
      I1_unfiltered: gap('image', 'text_scene', false),
      I2_outcome_list_gap: gap('text_outcomes', 'text_scene', false),
      materialModalityEffect: readsDiagrams && I1.ci[0]! > 0.1,
      I3_nStar: Object.fromEntries(conds.map((c) => [c, nStar(c)])),
      I4_controls: Object.fromEntries(conds.map((c) => [c, control(c)])),
      failsControlsInImagesOnly: control('text_scene').pass && !control('image').pass,
      I5_side_bias: Object.fromEntries(conds.map((c) => [c, bias(c, 'mirror')])),
      I5_order_bias: Object.fromEntries(conds.map((c) => [c, bias(c, 'order')])),
      itemMeans: Object.fromEntries(
        conds.map((c) => [c, Object.fromEntries([...itemMeans(c, c === 'image')].map(([k, v]) => [k, round(v)]))]),
      ),
    };
  });
  return { source: basename(path), rows: rows.length, errors: errors.length, models: out };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const path = process.argv[2] ?? 'results/image-v1.jsonl';
  const res = analyzeImage(path);
  const file = `results/image-analysis-${basename(path, '.jsonl').replace(/^image-/, '')}.json`;
  writeFileSync(file, JSON.stringify(res, null, 2));
  console.log(`${res.rows} rows, ${res.errors} errors → ${file}`);
}
