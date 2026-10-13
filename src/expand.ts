/**
 * dilemmas/*.yaml → concrete variants.
 *
 * A variant is one (dilemma × sweep point × paraphrase × option order × label style) combination.
 * Variant ids are deterministic, so caching and cross-run joins are stable.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { parse } from 'yaml';
import { DilemmaSchema, type Dilemma } from './schema.js';
import { present, type LabelStyle, type Presentation } from './permute.js';

export interface Variant {
  /** Structural id (dilemma × point × paraphrase × order × label). Stable across wording edits, for joins. */
  variantId: string;
  /** Hash of everything the model actually sees. Part of the cache key, so editing a dilemma re-runs it. */
  contentHash: string;
  dilemmaId: string;
  /** Template vars used for this sweep point, e.g. { n: 5 } or { group_a: 'Nigerian', ... }. */
  point: Record<string, string | number>;
  /** Stable key for the sweep point alone, for grouping order/label/paraphrase siblings. */
  pointKey: string;
  paraphrase: number;
  order: 'forward' | 'reverse';
  labelStyle: LabelStyle;
  presentation: Presentation;
  /** Rendered scenario text. */
  state: string;
  /** Rendered question instructions. */
  question: string;
  /** displayKey → rendered option description, in display order. */
  criteria: Record<string, string>;
  /** canonical id → whether it is the "act" option. */
  actIds: string[];
  expected?: string;
}

export function loadDilemmas(dir = 'dilemmas'): Dilemma[] {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.yaml') && !f.startsWith('_'))
    .sort()
    .map((f) => {
      const parsed = DilemmaSchema.safeParse(parse(readFileSync(join(dir, f), 'utf8')));
      if (!parsed.success) throw new Error(`${f}: ${parsed.error.message}`);
      if (`${parsed.data.id}.yaml` !== f) throw new Error(`${f}: id "${parsed.data.id}" must match filename`);
      return parsed.data;
    });
}

/** Replace {{var}} placeholders. Throws on any unresolved placeholder so typos can't ship silently. */
export function render(template: string, vars: Record<string, string | number>): string {
  const out = template.replace(/\{\{\s*([a-z_]+)\s*\}\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
  const left = out.match(/\{\{\s*[a-z_]+\s*\}\}/);
  if (left) throw new Error(`unresolved placeholder ${left[0]} in: ${template.slice(0, 80)}`);
  return out;
}

/** Cartesian product of sweep axes. Object values are spread into vars, so one axis can set several. */
export function sweepPoints(sweep: Dilemma['sweep']): Record<string, string | number>[] {
  let points: Record<string, string | number>[] = [{}];
  for (const [axis, values] of Object.entries(sweep)) {
    points = points.flatMap((p) =>
      values.map((v) => (typeof v === 'object' ? { ...p, ...v } : { ...p, [axis]: v })),
    );
  }
  return points;
}

export function stableKey(obj: Record<string, unknown>): string {
  return Object.keys(obj)
    .sort()
    .map((k) => `${k}=${obj[k]}`)
    .join(',');
}

const hash = (s: string) => createHash('sha256').update(s).digest('hex').slice(0, 12);

export interface ExpandOptions {
  orders?: ('forward' | 'reverse')[];
  labelStyles?: LabelStyle[];
  maxParaphrases?: number;
}

export function expand(d: Dilemma, opts: ExpandOptions = {}): Variant[] {
  const orders = opts.orders ?? ['forward', 'reverse'];
  const labelStyles = opts.labelStyles ?? ['descriptive', 'neutral'];
  const paraphrases = d.paraphrases.slice(0, opts.maxParaphrases ?? d.paraphrases.length);
  const ids = Object.keys(d.options);
  const out: Variant[] = [];

  for (const point of sweepPoints(d.sweep)) {
    const pointKey = stableKey(point);
    paraphrases.forEach((text, paraphrase) => {
      for (const order of orders) {
        for (const labelStyle of labelStyles) {
          const presentation = present(ids, order, labelStyle);
          const criteria: Record<string, string> = {};
          for (const id of presentation.order) {
            const o = d.options[id]!;
            const desc = render(o.description, point);
            criteria[presentation.canonicalToKey[id]!] = labelStyle === 'descriptive' ? `${render(o.label, point)}: ${desc}` : desc;
          }
          const state = render(text, point).trim();
          const question = render(d.question, point);
          out.push({
            variantId: hash(`${d.id}|${pointKey}|${paraphrase}|${order}|${labelStyle}`),
            contentHash: hash(JSON.stringify([state, question, criteria])),
            dilemmaId: d.id,
            point,
            pointKey,
            paraphrase,
            order,
            labelStyle,
            presentation,
            state,
            question,
            criteria,
            actIds: ids.filter((id) => d.options[id]!.act),
            expected: d.expected,
          });
        }
      }
    });
  }
  return out;
}
