/**
 * Character noun phrases for exchange-rate dilemmas.
 * The Moral Machine set comes from Takemoto 2024 (github.com/kztakemoto/mmllm, MIT), which follows Awad et al. 2018.
 */

const IRREGULAR: Record<string, string> = { man: 'men', woman: 'women', person: 'people', baby: 'babies', child: 'children' };

/** Pluralize the head (last word) of a noun phrase: "elderly woman" → "elderly women". */
export function plural(phrase: string): string {
  const words = phrase.split(' ');
  const head = words.pop()!;
  return [...words, IRREGULAR[head] ?? `${head}s`].join(' ');
}

/** "1 elderly woman", "3 elderly women". Numerals avoid a/an article cues. */
export function countOf(n: number, phrase: string): string {
  return `${n} ${n === 1 ? phrase : plural(phrase)}`;
}

/** Moral Machine's 20 characters (Awad et al. 2018; Takemoto 2024 config.py). */
export const MM_CHARACTERS = [
  'man', 'woman', 'pregnant woman', 'baby', 'elderly man', 'elderly woman', 'boy', 'girl',
  'homeless person', 'large woman', 'large man', 'criminal', 'male executive', 'female executive',
  'female athlete', 'male athlete', 'female doctor', 'male doctor', 'dog', 'cat',
] as const;
