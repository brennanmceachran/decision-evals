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
import { DilemmaSchema, type Dilemma, type Frame } from './schema.js';
import { present, type LabelStyle, type Presentation } from './permute.js';
import { derivedVars, generatorPoints } from './generators.js';

export interface Variant {
  /** Structural id (dilemma × point × paraphrase × order × label). Stable across wording edits, for joins. */
  variantId: string;
  /** Hash of everything the main call sees. Part of the cache key, so editing a dilemma re-runs it. */
  contentHash: string;
  /** Hash of the probe call's inputs (scene + probes), or undefined when there are no probes. */
  probeHash?: string;
  dilemmaId: string;
  module: Dilemma['module'];
  /**
   * narrative: story text + options that narrate outcomes.
   * game: scene + "If you: - <action>, <outcome>" list, imperative action keys (e.g. move_lever_right).
   */
  frame: Frame;
  /** Sweep point, e.g. { n: 5 } or { a: 'baby', b: 'man', k: 1, m: 2, side: 'a_left' }. */
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
  /** Canonical ids of the "act" (intervene) options. */
  actIds: string[];
  /** Canonical ids whose summed probability is the row's headline score (P(act) unless the dilemma sets `focal`). */
  focalIds: string[];
  expected?: string;
  /** Rendered same-call probes (game frame only). Keyed by probe id. */
  probes: RenderedProbe[];
}

export type RenderedProbe =
  | { kind: 'comprehension'; id: string; question: string; options: Record<string, string>; answer: string }
  | { kind: 'judgment'; id: string; question: string; about: string };

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
    points = points.flatMap((p) => values.map((v) => (typeof v === 'object' ? { ...p, ...v } : { ...p, [axis]: v })));
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
  frames?: Frame[];
  orders?: ('forward' | 'reverse')[];
  labelStyles?: LabelStyle[];
  maxParaphrases?: number;
}

export function expand(d: Dilemma, opts: ExpandOptions = {}): Variant[] {
  const orders = opts.orders ?? d.axes.orders ?? ['forward', 'reverse'];
  const labelStyles = opts.labelStyles ?? d.axes.labelStyles ?? ['descriptive', 'neutral'];
  const maxParaphrases = opts.maxParaphrases ?? d.axes.maxParaphrases;
  const ids = Object.keys(d.options);
  const hasGame =
    !!d.scenes && ids.every((id) => d.options[id]!.key && d.options[id]!.action && d.options[id]!.outcome);
  if (d.scenes && !hasGame) throw new Error(`${d.id}: has scenes but some options lack key/action/outcome`);
  const frames = (opts.frames ?? d.axes.frames ?? (hasGame ? ['narrative', 'game'] : ['narrative'])).filter(
    (f) => f === 'narrative' || hasGame,
  );
  for (const p of d.probes)
    if (p.kind === 'judgment' && !ids.includes(p.about))
      throw new Error(`${d.id}: probe ${p.id} is about unknown option "${p.about}"`);
  if (d.focal && !ids.includes(d.focal)) throw new Error(`${d.id}: focal "${d.focal}" is not an option`);
  if (d.expected && !ids.includes(d.expected)) throw new Error(`${d.id}: expected "${d.expected}" is not an option`);
  const out: Variant[] = [];

  const generated = generatorPoints(d);
  const points = generated
    ? generated.flatMap((g) => sweepPoints(d.sweep).map((p) => ({ ...g, ...p })))
    : sweepPoints(d.sweep);

  for (const point of points) {
    const pointKey = stableKey(point);
    const vars = { ...point, ...derivedVars(d, point) };
    for (const frame of frames) {
      const texts = (frame === 'game' ? d.scenes! : d.paraphrases).slice(0, maxParaphrases);
      // Game frame: the action keys carry the meaning, so neutral A/B keys would contradict the "If you:" list.
      const styles: LabelStyle[] = frame === 'game' ? ['descriptive'] : labelStyles;
      const actionKeys =
        frame === 'game' ? Object.fromEntries(ids.map((id) => [id, render(d.options[id]!.key!, vars)])) : undefined;
      texts.forEach((text, paraphrase) => {
        for (const order of orders) {
          for (const labelStyle of styles) {
            const presentation = present(ids, order, labelStyle, actionKeys);
            const criteria: Record<string, string> = {};
            let state: string;
            let question: string;
            if (frame === 'game') {
              const lines: string[] = [];
              for (const id of presentation.order) {
                const o = d.options[id]!;
                const action = render(o.action!, vars);
                criteria[presentation.canonicalToKey[id]!] = `${action[0]!.toUpperCase()}${action.slice(1)}.`;
                lines.push(`- ${action}, ${render(o.outcome!, vars)}`);
              }
              state = `${render(text, vars).trim()}\n\nIf you:\n${lines.join('\n')}`;
              question = render(d.game_question, vars);
            } else {
              for (const id of presentation.order) {
                const o = d.options[id]!;
                const desc = render(o.description, vars);
                criteria[presentation.canonicalToKey[id]!] =
                  labelStyle === 'descriptive' ? `${render(o.label, vars)}: ${desc}` : desc;
              }
              state = render(text, vars).trim();
              question = render(d.question, vars);
            }
            const probes: RenderedProbe[] =
              frame === 'game'
                ? d.probes.map((p) => {
                    if (p.kind === 'judgment') {
                      const action = render(d.options[p.about]!.action!, vars);
                      return {
                        kind: 'judgment',
                        id: p.id,
                        about: p.about,
                        question: render(p.question, { ...vars, action }),
                      };
                    }
                    const options = Object.fromEntries(
                      Object.entries(p.options).map(([k, t]) => [render(k, vars), render(t, vars)]),
                    );
                    const answer = render(p.answer, vars);
                    if (!(answer in options))
                      throw new Error(`${d.id}: probe ${p.id} answer "${answer}" not in ${Object.keys(options)}`);
                    return { kind: 'comprehension', id: p.id, question: render(p.question, vars), options, answer };
                  })
                : [];
            out.push({
              // Narrative ids are unchanged from before frames existed, so earlier results still join.
              variantId: hash(
                `${d.id}|${pointKey}|${paraphrase}|${order}|${labelStyle}${frame === 'game' ? '|game' : ''}`,
              ),
              // Main-answer cache key: only what the main call sees. Probes are cached under their own hash.
              contentHash: hash(JSON.stringify([state, question, criteria])),
              probeHash: probes.length ? hash(JSON.stringify([state, probes])) : undefined,
              dilemmaId: d.id,
              module: d.module,
              frame,
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
              focalIds: d.focal ? [d.focal] : ids.filter((id) => d.options[id]!.act),
              expected: d.expected,
              probes,
            });
          }
        }
      });
    }
  }
  return out;
}
