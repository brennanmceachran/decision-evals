/**
 * Option presentation and un-permutation.
 *
 * A model sees options under *display keys* in a *display order*. We always store results against
 * canonical option ids. Every function here is pure and unit tested. If this is wrong, every
 * position-bias and consistency metric downstream is wrong.
 */

export type LabelStyle = 'descriptive' | 'neutral';

export interface Presentation {
  /** Canonical ids in the order shown to the model. */
  order: string[];
  labelStyle: LabelStyle;
  /** displayKey -> canonical id */
  keyToCanonical: Record<string, string>;
  /** canonical id -> displayKey */
  canonicalToKey: Record<string, string>;
}

const NEUTRAL_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/**
 * @param actionKeys Optional canonical id → display key (e.g. "move_lever_right") used for descriptive labels
 *   instead of the canonical id itself.
 */
export function present(
  canonicalIds: string[],
  order: 'forward' | 'reverse',
  labelStyle: LabelStyle,
  actionKeys?: Record<string, string>,
): Presentation {
  if (new Set(canonicalIds).size !== canonicalIds.length) throw new Error(`duplicate option ids: ${canonicalIds}`);
  if (actionKeys && new Set(canonicalIds.map((id) => actionKeys[id])).size !== canonicalIds.length) {
    throw new Error(`action keys must be unique and cover every option: ${JSON.stringify(actionKeys)}`);
  }
  if (labelStyle === 'neutral' && canonicalIds.length > NEUTRAL_KEYS.length) throw new Error('too many options');
  const ordered = order === 'forward' ? [...canonicalIds] : [...canonicalIds].reverse();
  const keyToCanonical: Record<string, string> = {};
  const canonicalToKey: Record<string, string> = {};
  ordered.forEach((id, i) => {
    // Neutral keys are assigned by *display position*, so "A" is always the first option shown.
    const key = labelStyle === 'neutral' ? NEUTRAL_KEYS[i]! : (actionKeys?.[id] ?? id);
    keyToCanonical[key] = id;
    canonicalToKey[id] = key;
  });
  return { order: ordered, labelStyle, keyToCanonical, canonicalToKey };
}

/** Map a distribution keyed by display keys back to canonical ids. Throws on unknown or missing keys. */
export function toCanonical(p: Presentation, displayDist: Record<string, number>): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [key, prob] of Object.entries(displayDist)) {
    const id = p.keyToCanonical[key];
    if (id === undefined) throw new Error(`unknown display key "${key}" (expected ${Object.keys(p.keyToCanonical).join(', ')})`);
    out[id] = prob;
  }
  for (const id of p.order) if (!(id in out)) throw new Error(`missing probability for "${id}"`);
  return out;
}

export function choiceToCanonical(p: Presentation, displayChoice: string): string {
  const id = p.keyToCanonical[displayChoice];
  if (id === undefined) throw new Error(`unknown display choice "${displayChoice}"`);
  return id;
}

/** Display position (0-based) of the canonical id, for position-bias analysis. */
export function positionOf(p: Presentation, canonicalId: string): number {
  return p.order.indexOf(canonicalId);
}
