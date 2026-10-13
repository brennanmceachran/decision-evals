# decision-evals: plan

**Status:** approved 2026-10-13. Step 0 and scaffolding are in progress.
**Research notes:** see `research/`. They are inputs to this plan and were written before some of the decisions below.

## Goal

Measure how the new decision models (System One / Decisions API) choose in forced-choice moral thought experiments, and compare them with cheap chat LLMs. We want to know two things:

- **What they decide.**
- **What drives it.** Decision models give no rationale, so we infer their criteria from controlled perturbations.

Results are published as a public repo plus a static site on GitHub Pages. The site has a table, a reliability ranking, an "ethical compass" and a quiz ("which model thinks like you?").

## Decisions (locked)

| Topic | Decision |
|---|---|
| Harness | **Promptfoo** with custom TypeScript providers, plus thin glue for variant expansion, un-permutation, cross-sample metrics and site export. Promptfoo owns caching, concurrency, retries, resume, storage, the viewer and export. |
| SDK | AI SDK 7: `experimental_decide` for decision models, and `generateText` + `Output.choice` / `Output.object` for chat models |
| Scale | 10-item pilot, then 50, then 100 |
| Report | Static client-side site on GitHub Pages, reading exported JSON. No Next.js. |
| Nationality / demographic tests | Included and published, with confidence intervals and careful wording |
| Repo | Public `brennanmceachran/decision-evals`, pushed once the scaffold works |

## Subjects

**Decision models.** These return a probability distribution over the options.

| Route | Models |
|---|---|
| Vercel AI Gateway (`gateway.decisionModel`) | `typesafe-ai/jev`, `microsoft/microsoft-decision-1`, `openai/gpt-6-luna-decisions`, `liquid/d1`, `convaiinnovations/laya`, `scaledown/scaledown-classify-1` |
| OpenRouter (`openrouter.evaluationModel`), models the gateway doesn't have | `perplexity/pplx-decider-v1.1-27b`, `cloudflare/clef`, `cloudflare/clef-flash`, `cloudflare/clef-omni`, `togethercomputer/tev1-4b-experimental`, `jaredpalmer/kev-4b`, `nace-ai/drex-v1.5`, `nace-ai/drex-v2.0`, `upstage/solar-decide`, `upstage/solar-decide-flash`, `inception/mercury-decide` |

Excluded:
- `laya-free`: it duplicates `laya` and goes away after Oct 31.
- `jev-router`: it's a chat router, not a decision model.
- `respan/span-*`: these score behaviour in conversations, not decisions.

Models available on both routes are called through the gateway. Step 0 confirms which models actually serve.

**Chat comparison set.** These use structured output and N=5 samples to estimate P(option).

| Lab | Model |
|---|---|
| Anthropic | `anthropic/claude-haiku-5.5` |
| OpenAI | `openai/gpt-6-luna` (also the same base model as Luna Decisions) |
| Google | `google/gemini-3.5-flash-lite` (newest in the cheap Flash-Lite tier) |

The chat models run with reasoning off by default, to match the "decide on the spot" setting. A reasoning-on condition is a later extra. The output schema puts `decision` first and an optional `reason` second, so the rationale can't steer the choice.

## Experiment design

### Core probe: the "how many until it pulls?" sweep
- One person on the side track. The main track holds N ∈ {0, 1, 2, 3, 5, 10, 100, 1000}.
- Readouts per model:
  - **0 vs 1:** pulling here shows a bias toward acting.
  - **1 vs 1:** shows any action or inaction preference when outcomes are equal.
  - **Threshold N\*** and **steepness:** where the model flips, and how sharply.
- The same sweep is run on **footbridge** (pushing someone) and **transplant** (harvesting organs). The gap between a model's switch threshold and its footbridge threshold measures how much "using a person as a means" matters to it, independent of the numbers.

### Invariance controls (applied to every item)
- Both option orders.
- Descriptive labels vs neutral A/B labels.
- 2 paraphrases of the scenario.
- Options are always mapped back to canonical ids before storage. Without that, position bias and consistency can't be measured.

### Image-only variants (vision-capable models)
- SVG diagrams rendered in code, so the person count is exact and the sweep is generated, not hand-drawn.
- No caption. The options are just "divert" and "don't divert".
- A perception check ("how many people are on the main track?") separates miscounting from ethics.

### Famous vs. disguised
- Each famous dilemma gets a structurally identical twin with a new surface (e.g. a gas leak rerouted through ventilation).
- The gap between the two measures recitation vs reasoning.

### Nationality / demographics
- 1 vs 1 on the switch, swapping who stands on which track, with balanced positions.
- An impartial model sits at 50/50. We run pairwise matchups and fit a Bradley-Terry "who gets saved" ranking.

## 10-item pilot

| # | Item | Notes |
|---|---|---|
| 1 | Switch | full N sweep |
| 2 | Footbridge | full N sweep |
| 3 | Transplant surgeon | short sweep |
| 4 | Loop track | |
| 5 | Self-sacrifice (you can jump instead) | 3 options |
| 6 | Self-driving car: wall (passenger dies) vs pedestrians | |
| 7 | Disguised switch (gas leak) | twin of #1 |
| 8 | Nationality 1v1 | ~4 nationalities, all ordered pairs |
| 9 | Control: kill 1 to save 0 | expected answer: don't |
| 10 | Control: 1 vs 1, nothing else differs | expected ≈ 50/50, or a consistent default |

Plus the image-only switch sweep for vision models. In total that's about 200 prompts.

## Outputs

1. **Reliability leaderboard** (rankable):
   - order, label and paraphrase invariance;
   - passing the controls;
   - monotonicity in N;
   - impartiality on nationality swaps;
   - agreement between the image and text versions.
2. **Ethical compass** (descriptive): the x-axis is numbers sensitivity (switch N\*), the y-axis is means/act sensitivity (footbridge N\* − switch N\*). Human reference points are plotted alongside.
3. **Outcome table:** P(act) per model × item.
4. **Quiz:** about 10 questions, including an adaptive threshold search. The visitor sees their own point on the compass and their nearest models.

## Repo layout (target)

```
dilemmas/*.yaml            # one file per dilemma: text, options, axes, baseline
src/subjects/decide.ts     # Promptfoo provider: decision models (gateway + OpenRouter)
src/subjects/chat.ts       # Promptfoo provider: chat LLMs, N samples → distribution
src/expand.ts              # dilemmas × axes → Promptfoo tests (deterministic ids, metadata)
src/permute.ts             # option permutation + un-permutation (unit tested)
src/render/trolley-svg.ts  # image variants
src/analyze.ts             # promptfoo results JSON → site/data/*.json
scripts/smoke.ts           # step 0: one call to every subject
promptfooconfig.yaml
site/                      # static GitHub Pages app
```

To add a dilemma, a contributor copies a YAML file, runs `pnpm eval --filter-metadata baseId=<id>`, then runs `pnpm view`.

## Milestones

0. **Smoke:** one call to every subject, to confirm keys, ids and response shapes. Record which ones fail.
1. **Scaffold:** Promptfoo config, the two providers, permute plus tests, expand, and 1 dilemma end to end.
2. **Pilot:** write the 10 dilemmas, do the SVG renderer, run it, and sanity-check the results.
3. **Analysis and site v0:** the table, the leaderboard, the compass and the quiz.
4. **Publish:** GitHub repo and Pages. Then scale to 50 and 100 items.

## Cost guardrails
- **Decision models:** fractions of a cent per call. The pilot across all of them is well under $1.
- **Chat models:** N=5 samples × ~200 prompts × 3 models. That's a few dollars at most.
- **Hard stop:** the pilot is stopped at $10 total (gateway plus OpenRouter) until we review.
