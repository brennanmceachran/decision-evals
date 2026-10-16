import { z } from 'zod';

/**
 * A dilemma file (dilemmas/*.yaml). Contributors only ever write these.
 *
 * Text fields are templates: `{{var}}` placeholders are filled from `sweep` values (and, for generated
 * dilemmas, from the generator's derived vars). Options are keyed by canonical id. Results are always
 * stored against these ids, whatever order or label the model actually saw.
 */
export const OptionSchema = z.object({
  /** Narrative frame: short descriptive label, e.g. "Pull the lever". */
  label: z.string(),
  /** Narrative frame: one-line consequence shown to the model, e.g. "The trolley diverts and the one person dies." */
  description: z.string(),
  /**
   * Game frame: imperative action key the model sees, snake_case, e.g. "move_lever_right". May use {{vars}}.
   * Decision models see option keys, so keys should name the action (TypeSafe docs, primitives/choice).
   */
  key: z.string().optional(),
  /** Game frame: the action as an imperative phrase, lowercase, e.g. "move the lever right". */
  action: z.string().optional(),
  /** Game frame: what happens, e.g. "1 person dies". Listed in the scene as "If you: - <action>, <outcome>". */
  outcome: z.string().optional(),
  /** Whether choosing this option is the "act" (intervene) vs "allow" (do nothing). Used for P(act). */
  act: z.boolean().default(false),
});

const SweepValue = z.union([z.string(), z.number(), z.record(z.string(), z.union([z.string(), z.number()]))]);

/**
 * Exchange-rate generator: group A vs group B at several count ratios, with A placed on each side.
 * Produces vars a, b, k (count of A), m (count of B), side, and rendered descriptions
 * (a_desc, b_desc, a_dir, b_dir, left_desc, right_desc).
 */
export const ExchangeGeneratorSchema = z.object({
  kind: z.literal('exchange'),
  /** [A, B] noun phrases, singular, e.g. ["elderly woman", "woman"]. */
  pairs: z.array(z.tuple([z.string(), z.string()])).min(1),
  /** [k, m] = [count of A, count of B]. */
  ratios: z.array(z.tuple([z.number().int().positive(), z.number().int().positive()])).min(1),
  /** 'head' pluralizes the head noun ("men with a record"); the default keeps the pilots' last-word rule. */
  plural: z.enum(['last-word', 'head']).default('last-word'),
});

export const FrameSchema = z.enum(['narrative', 'game']);
export type Frame = z.infer<typeof FrameSchema>;

/**
 * Extra questions asked about the same scene in a SEPARATE decision-model call from the main choice (a pilot showed
 * same-call probes can shift some models' main answer). Game frame only. Chat models skip probes.
 *
 * - comprehension: "did the model read the scene?" A choice whose correct answer is known from the sweep point.
 *   `answer` is a template rendered per variant, and must equal one of the rendered `options`.
 * - judgment: "is it acceptable?" A yes/no asked about one action, separating what the model does from what it endorses.
 */
export const ProbeSchema = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('comprehension'),
    id: z.string().regex(/^[a-z_]+$/),
    question: z.string(),
    /** Option keys → descriptions (templates). */
    options: z.record(z.string(), z.string()),
    /** Template rendering to the correct option key. */
    answer: z.string(),
  }),
  z.object({
    kind: z.literal('judgment'),
    id: z.string().regex(/^[a-z_]+$/),
    /** Yes/no question template, e.g. "Is it morally acceptable to {{action}}?" */
    question: z.string(),
    /** Canonical option whose action is being judged. */
    about: z.string(),
  }),
]);
export type Probe = z.infer<typeof ProbeSchema>;

export const AxesSchema = z.object({
  /** Default: every frame the dilemma has fields for. */
  frames: z.array(FrameSchema).optional(),
  orders: z.array(z.enum(['forward', 'reverse'])).optional(),
  labelStyles: z.array(z.enum(['descriptive', 'neutral'])).optional(),
  maxParaphrases: z.number().int().positive().optional(),
});

export const DilemmaSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string(),
  /** Pilot module: exchange | parity | anchor | control | cni */
  module: z.enum(['exchange', 'parity', 'anchor', 'control', 'cni']),
  /** Which ethical dimensions this item isolates (doing-allowing, personal-force, numbers, partiality, ...). */
  dimensions: z.array(z.string()).default([]),
  /** Where the design comes from (paper, dataset). */
  source: z.string().optional(),
  /** Narrative frame: scenario text. 2+ paraphrases where possible; each must be structurally identical. */
  paraphrases: z.array(z.string()).min(1),
  question: z.string(),
  /**
   * Game frame: the scene only (who is where), without consequences. The consequences are appended as an
   * "If you:" list built from each option's action + outcome. Same paraphrase rules as `paraphrases`.
   */
  scenes: z.array(z.string()).min(1).optional(),
  /**
   * Game frame: additional scene wordings used only at sweep points matching `when` (e.g. parity items at 1:1, where
   * the test needs more independent variants). Appended after `scenes`, so existing variants and caches are unchanged.
   */
  extra_scenes: z
    .object({ when: z.record(z.string(), z.union([z.string(), z.number()])), scenes: z.array(z.string()).min(1) })
    .optional(),
  /** Game frame: the question asked. */
  game_question: z.string().default('What do you do?'),
  /** Game frame: extra same-call questions (comprehension checks, moral judgment). */
  probes: z.array(ProbeSchema).default([]),
  options: z
    .record(z.string().regex(/^[a-z_]+$/), OptionSchema)
    .refine((o) => Object.keys(o).length >= 2, 'need at least 2 options'),
  /** Template variables. Each key maps to a list of values; variants are the cartesian product. Object values are spread. */
  sweep: z.record(z.string(), z.array(SweepValue)).default({}),
  generate: ExchangeGeneratorSchema.optional(),
  /** Override which presentation axes to expand (default: both orders, both label styles, all paraphrases). */
  axes: AxesSchema.default({}),
  /**
   * Canonical option whose probability is the row's headline score. Defaults to the `act: true` option(s).
   * Exchange/parity dilemmas set this to `spare_a`.
   */
  focal: z.string().optional(),
  /** Expected canonical option for controls (used for "passes controls"). */
  expected: z.string().optional(),
  /** Published human baseline: P(act) range, at which sweep point, and source. */
  human: z
    .object({
      p_act: z.tuple([z.number(), z.number()]),
      at: z.record(z.string(), z.union([z.string(), z.number()])).optional(),
      source: z.string(),
    })
    .optional(),
  notes: z.string().optional(),
});

export type Dilemma = z.infer<typeof DilemmaSchema>;
export type DilemmaOption = z.infer<typeof OptionSchema>;
