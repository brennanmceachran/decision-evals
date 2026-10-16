/**
 * Character noun phrases for exchange-rate dilemmas.
 * The Moral Machine set comes from Takemoto 2024 (github.com/kztakemoto/mmllm, MIT), which follows Awad et al. 2018.
 */

const IRREGULAR: Record<string, string> = { man: 'men', woman: 'women', person: 'people', baby: 'babies', child: 'children' };

/** Pluralize the last word: "elderly woman" → "elderly women". What the pilots used (wrong for "man with a record"). */
export function plural(phrase: string): string {
  const words = phrase.split(' ');
  const head = words.pop()!;
  return [...words, IRREGULAR[head] ?? `${head}s`].join(' ');
}

/**
 * Pluralize the head noun, before any trailing modifier: "man with a criminal record" → "men with a criminal record".
 * The pilots used `plural`, which produced "3 man with a criminal records" (parity-status, parity-lexical); the final
 * study uses this. Kept separate so pilot prompts still render exactly as sent.
 */
export function pluralHead(phrase: string): string {
  const words = phrase.split(' ');
  const cut = words.findIndex((w, i) => i > 0 && ['with', 'in', 'who', 'wearing', 'from', 'aged'].includes(w));
  const headIdx = cut === -1 ? words.length - 1 : cut - 1;
  words[headIdx] = IRREGULAR[words[headIdx]!] ?? `${words[headIdx]}s`;
  return words.join(' ');
}

/** "1 elderly woman", "3 elderly women". Numerals avoid a/an article cues. */
export function countOf(n: number, phrase: string, head = false): string {
  return `${n} ${n === 1 ? phrase : head ? pluralHead(phrase) : plural(phrase)}`;
}

/** Moral Machine's 20 characters (Awad et al. 2018; Takemoto 2024 config.py). */
export const MM_CHARACTERS = [
  'man', 'woman', 'pregnant woman', 'baby', 'elderly man', 'elderly woman', 'boy', 'girl',
  'homeless person', 'large woman', 'large man', 'criminal', 'male executive', 'female executive',
  'female athlete', 'male athlete', 'female doctor', 'male doctor', 'dog', 'cat',
] as const;
