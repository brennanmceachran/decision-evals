import { z } from 'zod';

/**
 * A dilemma file (dilemmas/*.yaml). Contributors only ever write these.
 *
 * `text` is a template: `{{n}}`, `{{side}}`, `{{group_a}}`, `{{group_b}}` etc. are filled from `sweep` values.
 * Options are keyed by canonical id. Results are always stored against these ids, whatever order or label
 * the model actually saw.
 */
export const OptionSchema = z.object({
  /** Short descriptive label, e.g. "Pull the lever". */
  label: z.string(),
  /** One-line consequence shown to the model, e.g. "The trolley diverts and {{side}} dies." */
  description: z.string(),
  /** Whether choosing this option is the "act" (intervene) vs "allow" (do nothing). Used for P(act). */
  act: z.boolean().default(false),
});

export const DilemmaSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string(),
  /** Taxonomy class, e.g. sacrificial, self-sacrifice, control, demographic. */
  class: z.string(),
  /** Which ethical dimensions this item isolates (doing-allowing, personal-force, numbers, partiality, ...). */
  dimensions: z.array(z.string()).default([]),
  /** Scenario text. 2+ paraphrases; each must be structurally identical. */
  paraphrases: z.array(z.string()).min(1),
  question: z.string(),
  options: z.record(z.string().regex(/^[a-z_]+$/), OptionSchema).refine((o) => Object.keys(o).length >= 2, 'need at least 2 options'),
  /**
   * Template variables. Each key maps to a list of values; variants are the cartesian product.
   * Values may be scalars or objects (objects are spread into template vars).
   */
  sweep: z.record(z.string(), z.array(z.union([z.string(), z.number(), z.record(z.string(), z.union([z.string(), z.number()]))]))).default({}),
  /** Optional: expected canonical option for controls (used for "passes controls" score). */
  expected: z.string().optional(),
  /** Optional published human baseline: P(act) range and source. */
  human: z
    .object({ p_act: z.tuple([z.number(), z.number()]), source: z.string() })
    .optional(),
  /** If set, also generate an image-only variant using this renderer. */
  image: z.object({ renderer: z.string() }).optional(),
  notes: z.string().optional(),
});

export type Dilemma = z.infer<typeof DilemmaSchema>;
export type DilemmaOption = z.infer<typeof OptionSchema>;
