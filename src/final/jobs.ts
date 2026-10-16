/**
 * The final study (FINAL-RUN-PLAN.md) as one list of jobs. A job is one question for one model: what it sees, the
 * buttons, and any probes asked in separate calls afterwards. Every study part produces the same shape, so one runner,
 * one log format and one completeness check cover all of them.
 *
 * Parts:
 *   text    dilemmas-final/*.yaml (dilemmas, gates, traits incl. placebo), game frame only.
 *   image   src/image-study.ts trials (words with outcomes, words only, wordless diagram), vision models only.
 *   dashcam src/real-study.ts final trials (4 depots, every condition on the same wordings), vision models only.
 *   harm    the harm probe on the diagrams, asked before anything else and reported per model.
 */
import { createHash } from 'node:crypto';
import { expand, loadDilemmas, type Variant } from '../expand.js';
import { trials as imageTrials } from '../image-study.js';
import { AWARENESS_PROBE, COUNT_PROBES, dataUrl, realTrials } from '../real-study.js';
import type { Question, State } from '../vision.js';

export type Part = 'text' | 'image' | 'dashcam';

export interface Job {
  /** Stable id: part + everything the model sees. Same inputs, same id, across runs. */
  id: string;
  part: Part;
  /** Grouping fields for analysis and completeness checks (dilemma, point, condition, framing, …). */
  meta: Record<string, string | number | boolean | null>;
  state: State;
  /** The main question, asked alone. */
  main: { instructions: string; criteria: Record<string, string> };
  /** Display key(s) whose probability is the row's headline score. */
  focalKeys: string[];
  /** Display key → canonical id, for the text part (others use display keys as canonical). */
  keyToCanonical?: Record<string, string>;
  /** Probes, each group asked in its own call after the main question. */
  probes: Record<string, Record<string, Question>>;
  /** Text part: the full variant, so existing analysis (src/prereg.ts) can read rows unchanged. */
  variant?: Variant;
  /** Vision required to answer. */
  vision: boolean;
}

const sha = (s: string) => createHash('sha256').update(s).digest('hex').slice(0, 16);

export function textJobs(dir = 'dilemmas-final'): Job[] {
  return loadDilemmas(dir).flatMap((d) =>
    expand(d, { frames: ['game'] }).map((v): Job => {
      const probes: Job['probes'] = {};
      if (v.probes.length)
        probes.probes = Object.fromEntries(
          v.probes.map((p) => [
            p.id,
            p.kind === 'comprehension'
              ? { type: 'choice' as const, instructions: p.question, criteria: p.options }
              : { type: 'boolean' as const, instructions: p.question },
          ]),
        );
      return {
        id: `t-${v.variantId}-${v.contentHash}`,
        part: 'text',
        meta: {
          dilemma: v.dilemmaId,
          module: v.module,
          pointKey: v.pointKey,
          paraphrase: v.paraphrase,
          order: v.order,
        },
        state: { kind: 'text', text: v.state },
        main: { instructions: v.question, criteria: v.criteria },
        focalKeys: v.focalIds.map((id) => v.presentation.canonicalToKey[id]!),
        keyToCanonical: v.presentation.keyToCanonical,
        probes,
        variant: v,
        vision: false,
      };
    }),
  );
}

export function imageJobs(): Job[] {
  return imageTrials({ version: 'final' }).map((t): Job => {
    const probes: Job['probes'] = {};
    if (Object.keys(t.probes).length)
      probes.probes = Object.fromEntries(
        Object.entries(t.probes).map(([k, p]) => [
          k,
          { type: 'choice' as const, instructions: p.instructions, criteria: p.criteria },
        ]),
      );
    return {
      id: `i-${t.id}`,
      part: 'image',
      meta: {
        item: t.item,
        design: t.design,
        a: t.a,
        b: t.b,
        mirror: t.mirror,
        order: t.order,
        condition: t.condition,
        answers: JSON.stringify(Object.fromEntries(Object.entries(t.probes).map(([k, p]) => [k, p.answer]))),
      },
      state: t.state,
      main: { instructions: t.question, criteria: t.criteria },
      focalKeys: [t.focalKey],
      probes,
      // Text conditions go through the same route as images (src/vision.ts), so they also need a vision model.
      vision: true,
    };
  });
}

export function dashcamJobs(): Job[] {
  return realTrials({ stimuli: 'final' }).map(
    (t): Job => ({
      id: `d-${t.id}`,
      part: 'dashcam',
      meta: {
        plate: t.plate,
        content: t.content,
        side: t.mirror ? 'R' : 'L',
        framing: t.framing,
        scheduled: t.scheduled ?? null,
        wording: t.wording,
        order: t.order,
        peopleLeft: t.people[0],
        peopleRight: t.people[1],
        fewer: t.fewer ?? null,
        relation: t.relation ?? null,
        image: t.image,
      },
      state: { kind: 'text+image', text: t.text, url: dataUrl(t.image) },
      main: { instructions: t.question, criteria: t.criteria },
      focalKeys: ['route_left'],
      probes: { counts: COUNT_PROBES, aware: AWARENESS_PROBE },
      vision: true,
    }),
  );
}

export function allJobs(parts: Part[] = ['text', 'image', 'dashcam']): Job[] {
  return [
    ...(parts.includes('text') ? textJobs() : []),
    ...(parts.includes('image') ? imageJobs() : []),
    ...(parts.includes('dashcam') ? dashcamJobs() : []),
  ];
}

/** Hash of the whole design: every job id, in order. Goes in the manifest; a change means a different study. */
export const designHash = (jobs: Job[]) => sha(jobs.map((j) => j.id).join('\n'));
