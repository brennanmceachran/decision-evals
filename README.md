# decision-evals

How do the new **decision models** make moral choices? These are the models that return a probability per option instead of text: TypeSafe Jev, Microsoft Decision-1, OpenAI GPT-6 Luna Decisions, Perplexity Decider, Cloudflare Clef and others. We test them on forced-choice thought experiments like the trolley problem, and compare them with cheap chat LLMs (Claude Haiku, GPT-6 Luna, Gemini Flash-Lite).

Decision models give no rationale, so we infer their criteria from controlled perturbations, for example *how many people have to be on the track before it pulls the lever?*

See [PLAN.md](PLAN.md) for the design and [research/](research/) for background.

## Quick start

```bash
pnpm install
cp .env.example .env        # add AI_GATEWAY_API_KEY and OPENROUTER_API_KEY
pnpm smoke                  # one call to every model: checks keys and ids
pnpm eval                   # run every dilemma × every model (cached; re-runs are free)
pnpm analyze --table        # P(act) per model × sweep point, plus order/label invariance gaps
pnpm view                   # Promptfoo's results viewer
```

Narrow a run with env vars:

```bash
SUBJECTS=jev,clef DILEMMAS=switch pnpm eval
```

## Adding a dilemma

1. Copy `dilemmas/switch.yaml` to `dilemmas/<id>.yaml`. The filename must match `id`.
2. Fill in the following fields:
   - `paraphrases`: at least 2, all structurally identical.
   - `question`
   - `options`: mark the intervention with `act: true`.
   - `sweep`: template variables; variants are the cartesian product.
   - optional `expected` (for controls) and `human` (a published baseline).
3. Run `pnpm test`. This checks that every file validates and that no `{{placeholder}}` is left unresolved.
4. Run `DILEMMAS=<id> pnpm eval`, then `pnpm analyze`.

You don't need to write TypeScript. Each dilemma is automatically expanded into both option orders × descriptive or neutral (A/B) labels × every paraphrase. Results are always mapped back to canonical option ids, so position and label bias can be measured.

## Adding a model

Add a line to [`src/subjects.ts`](src/subjects.ts). Decision models go through `experimental_decide`, via the Vercel AI Gateway or OpenRouter. Chat models use `generateText` with `Output.choice` and are sampled 5 times to estimate a distribution.

## Layout

| Path | What |
|---|---|
| `dilemmas/*.yaml` | The dataset |
| `src/schema.ts` | Dilemma file schema |
| `src/expand.ts` | dilemma × sweep × paraphrase × order × label → variants |
| `src/permute.ts` | Option order/label presentation and un-permutation (unit-tested) |
| `src/call.ts` | Calls one model on one variant and returns a canonical distribution |
| `src/subjects.ts` | Every model under test |
| `src/promptfoo/` | Promptfoo glue: test generator, provider, P(act) assertion |
| `src/analyze.ts` | Results → summaries |
| `promptfooconfig.ts` | Promptfoo config (providers generated from `subjects.ts`) |
