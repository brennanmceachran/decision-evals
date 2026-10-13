# Eval harness options for decision-model evals

_Researched 2026-10-13. Versions are taken from npm/PyPI on that date. Claims I could not verify from primary docs are marked (unverified)._

## TL;DR

**Recommendation: write a thin custom TypeScript runner and own the data.** Store each call in SQLite and analyze with DuckDB. A harness, if any, is only a viewer.

**Runner-up (if you want an off-the-shelf harness): Promptfoo 0.124.1 (MIT).** Use a custom `file://` provider that calls `experimental_decide`. Promptfoo's local SQLite store, web viewer, cache, `--resume`, and `-j` concurrency cover the operational side. You still compute the cross-perturbation metrics outside it.

**Do not pick Evalite for this project.** It looks like the natural AI-SDK-native choice, but:

- Stable is still `0.19.0`. The `1.0.0-beta.16` release was last published 2026-02-20, and the beta peer-depends on `ai@^6`.
- Issue #400, "Support for AI SDK v7 in peerDependencies" (opened 2026-06-29), is still open.
- Its scorer and caching model is built around `generateText` and per-sample scores. Your output is a distribution, and your key metrics are computed across groups of samples.

The core mismatch is the same for every harness. Every tool here is built around **per-sample scores in [0,1] with pass/fail thresholds**. Your important metrics are **cross-sample**:

- consistency across the 10 perturbations of a scenario
- position bias across option orderings
- distance to a human distribution, aggregated per model

None of the harnesses gives you a "group by base scenario, compute JS-divergence/flip-rate, then compare models" primitive. Promptfoo's `derivedMetrics` and Langfuse's `runEvaluators` come closest, but they aggregate per prompt×provider, not per scenario family. That analysis is a few SQL queries in DuckDB either way. So use the harness for UI only, or skip it.

---

## Facts about the target that shape the choice

| Fact | Source | Implication |
|---|---|---|
| `experimental_decide` was added in `ai` **7.0.128**. It was earlier named `experimental_evaluate`, which remains a deprecated alias. Current `ai` is **7.0.138**. | [AI Gateway Decision docs](https://vercel.com/docs/ai-gateway/modalities/decision), [AI SDK Decisions](https://ai-sdk.dev/docs/ai-sdk-core/decisions) | The task is `decide()`, not `generateText`. Any harness that wants an AI SDK `LanguageModel` (Evalite's `wrapAISDKModel`, vitest-evals' AI SDK harness, Mastra agents) doesn't apply. You need "arbitrary async function as task". |
| `gateway.decisionModel(id)` (was `evaluationModel`). HTTP endpoint is `POST /v1/evaluate`. | same | Easy to call from any runner or HTTP-based harness. |
| Answers: `boolean → {probability}`, `choice → {choice, probabilities}`, `score → {score, probabilities}`. | same | The output is a JSON object of distributions. A harness must store structured output, not a string. |
| Native providers (Jev, OpenAI Decisions) answer **each question separately** and return distributions. **Anthropic/Google `decisionModel` adapters answer all questions in one structured-output prompt, with no distributions for choice/score.** Boolean answers get only a "prompted estimate". | [AI SDK Decisions](https://ai-sdk.dev/docs/ai-sdk-core/decisions) | For the frontier-LLM baseline, call `generateObject`/`generateText` with an explicit `{option: prob}` schema, and/or sample N times at T>0. Otherwise you will be comparing distributions to point estimates. |
| The gateway response includes `usage` and `providerMetadata.gateway.cost` and `generationId`. Calls are all-or-nothing, with `maxRetries: 2` by default. | Decision docs | Log cost per row yourself. Retry is built in, so the runner only needs a concurrency limiter. |
| Per-token input prices are tiny. For example, `typesafe-ai/jev` and `microsoft-decision-1` are $0.042/M input. Laya is free with an **8k context**. | `research/gateway-evaluation-models.json` | 7k calls cost cents, so caching matters for reproducibility, not cost. Watch Laya's 8k window on long scenarios. |
| `typesafe/jev-router` on OpenRouter is a **chat router** (`text->text`, with `structured_outputs` and `logprobs`), not a decision endpoint. | `research/openrouter-jev.json` | It needs a separate adapter: structured output, or logprobs over option tokens. The runner must support more than one "model kind". |
| The Decision API is marked **experimental**: "may change in patch releases". | AI SDK docs | Pin `ai` exactly, and record the `ai` version in each row. |

---

## Scored comparison

Scale: 1 = poor, 5 = excellent, for _this_ use case.

The **Weighted** column uses these weights, in parentheses: custom task (2), numeric/aggregate metrics (3), sweeps (2), cache/concurrency/resume (2), local store + UI (1.5), export (2), cost/lock-in (1), maturity (1.5), TS fit (1.5).

| Option (version, Oct 2026) | Custom task | Numeric / aggregate metrics | Perturbation sweeps | Cache / concurrency / resume | Local store + UI | Export for analysis | Cost / lock-in / license | Maturity | TS fit | **Weighted** |
|---|---|---|---|---|---|---|---|---|---|---|
| **Thin custom runner + SQLite/DuckDB** (your code) | 5 | 5 | 5 | 4 | 3 | 5 | 5 | 4 | 5 | **4.61** |
| **Inspect AI** 0.3.279 (Python, MIT) | 3 | 4 | 4 | 5 | 5 | 5 | 5 | 5 | 1 | 4.09 |
| **Promptfoo** 0.124.1 (MIT, OpenAI-owned) | 4 | 3 | 4 | 5 | 5 | 4 | 4 | 5 | 3 | 4.03 |
| **Langfuse experiments** (`@langfuse/client` 5.13.1, MIT, self-host) | 5 | 4 | 3 | 3 | 3 | 3 | 4 | 5 | 4 | 3.76 |
| **Vitest 5.0.4 + custom code** | 5 | 3 | 4 | 2 | 2 | 3 | 5 | 5 | 4 | 3.55 |
| **Braintrust** (`braintrust` 3.37.2, `autoevals` 0.4.0) | 5 | 3 | 4 | 3 | 2 | 3 | 2 | 5 | 4 | 3.48 |
| **Mastra datasets/experiments** (`@mastra/core` 1.76.0, `@mastra/evals` 1.10.6, Apache-2.0) | 4 | 2 | 3 | 3 | 4 | 3 | 4 | 4 | 4 | 3.27 |
| **LangSmith** (`langsmith` 0.10.13) | 5 | 3 | 3 | 3 | 1 | 3 | 2 | 5 | 4 | 3.27 |
| **vitest-evals** (Sentry) 0.17.0, Apache-2.0 | 4 | 2 | 3 | 2 | 3 | 3 | 5 | 3 | 4 | 3.03 |
| **Evalite** 0.19.0 / 1.0.0-beta.16, MIT | 4 | 2 | 3 | 3 | 4 | 2 | 5 | 1 | 3 | 2.85 |
| **eve evals** (Vercel `eve` 0.78.0, beta, Apache-2.0) | 2 | 2 | 2 | 2 | 2 | 2 | 4 | 2 | 4 | 2.30 |
| **OpenAI Evals** (platform + `openai/evals` repo) | 1 | 2 | 2 | 2 | 1 | 2 | 1 | 1 | 1 | 1.55 |

The "TS fit" column is the only thing keeping Inspect from second place. If you were comfortable in Python, Inspect would be the strongest packaged option.

---

## Per-candidate notes

### Thin custom runner (recommended)
- **Custom task:** it is just `decide()` and your own adapters, so OpenRouter chat models and frontier LLMs are additional functions behind one `Subject` interface.
- **Metrics:** unrestricted. JSD/TVD/Wasserstein to the human distribution, entropy, flip-rate across perturbations, position-bias regression, and bootstrap CIs are all SQL or a few lines of TS over the stored rows.
- **Sweeps:** cartesian expansion is a ~30-line generator. The important property is that every variant carries `base_id` plus perturbation axes as columns, which harness test-case formats do not model well.
- **Cache/resume:** a content-addressed key, `sha256(subject, model, ai_version, canonical(request))`, used as the SQLite primary key. Resume means skipping keys that already exist. Concurrency uses `p-limit` per provider.
- **UI:** this is the weak spot. Options:
  - DuckDB local UI (`duckdb -ui`) for SQL notebooks over the results
  - a small Next.js page (your home turf)
  - exporting into Promptfoo's viewer (see the hybrid below)
- **Cost:** about 1–2 days to build. No lock-in.

### Promptfoo (runner-up)
- **Version and ownership:** 0.124.1 was released 2026-10-08. It is MIT-licensed. OpenAI announced the acquisition on 2026-03-09 and committed to keeping it open source under the current license. Release cadence has stayed high since. Lock-in risk is low, but vendor-neutrality is a fair question for a model-comparison study.
- **Custom task:** a `file://provider.mjs` class whose `callApi(prompt, context)` returns `{ output, cost, tokenUsage, metadata }`. `output` may be structured data. You would call `decide()` inside it and pass the question spec through `context.vars`.
  - Gotcha: promptfoo is prompt-centric, so you either template the scenario into a "prompt" or ignore the prompt string and read `vars`.
- **Metrics:**
  - `javascript` assertions return a number or `GradingResult`.
  - The `metric:` tag rolls values up across tests.
  - `derivedMetrics` (mathjs or a JS function over `namedScores` and `__count`) run after the eval. They are computed per prompt×provider, so per-model aggregates work.
  - **Per-scenario-family consistency does not work natively.** You would precompute groups in a post-step.
- **Sweeps:** array-valued `vars` expand into multiple test cases. `tests: file://generate_tests.ts` can emit your perturbation matrix with `metadata`, and `--filter-metadata` slices it.
- **Ops:**
  - `-j/--max-concurrency`, `--delay`, `--repeat`
  - disk cache at `~/.promptfoo/cache`, with a 14-day TTL by default. Custom providers must use `promptfoo.cache.getCache()` themselves.
  - `--resume [evalId]`, `--retry-errors`
- **Storage/UI:** local SQLite at `~/.promptfoo/promptfoo.db`, browsed with `promptfoo view`. The matrix view is good for eyeballing per-model outputs side by side.
- **Export:** `-o results.jsonl|csv|json|html` and `promptfoo export eval <id>`. You can also query the SQLite file directly, though the schema is internal and unversioned.

### Inspect AI (best packaged framework, but Python)
- 0.3.279 was released 2026-10-13. It is MIT-licensed, from UK AISI, and the release cadence is near-daily.
- **Custom task:** a custom `@solver` or custom `ModelAPI` that calls the gateway's `POST /v1/evaluate` over HTTP. There is no TS path, so the AI SDK isn't used.
- **Strengths:**
  - `.eval` log format with `inspect view`, which is the best local viewer of the lot
  - `eval_set` gives retries and resume: re-running on the same log dir is a no-op for finished work
  - `epochs` and custom `@metric` functions that see all scores, so aggregates are first-class
  - `inspect_ai.analysis` dataframes for export
- **Weakness:** this is a Python research stack for a TS developer. The decision API's AI SDK conveniences, such as fallback config and typed questions, would be reimplemented over HTTP.

### Langfuse experiments (self-host)
- `langfuse.experiment.run({ data, task, evaluators, runEvaluators, maxConcurrency })`.
- `runEvaluators` receive **all item results**, which is the only TS harness with a clean hook for aggregate metrics.
- **Not local-only:** data is always sent to a Langfuse instance. For local use, you would run self-hosted Docker (Postgres + ClickHouse), which is heavy for a research repo.
- No built-in cache or resume.

### Braintrust (`Eval` + `autoevals`)
- `Eval(project, { data, task, scores, trialCount, maxConcurrency })` takes any async task, which is the cleanest API of the hosted tools.
- `noSendLogs: true` / `bt eval --no-send-logs` runs locally, but then there is **no UI**. The UI is the hosted product.
- Scores must be 0–1, so raw JSD or entropy has to be normalized. Experiment-level summary metrics are limited.
- **Pricing (third-party trackers, Sept 2026; verify on braintrust.dev):** the free Starter tier has 1 GB of processed data, 10k scores per month and 14-day retention. 7k rows × 5 scorers exceeds 10k scores, so a few sweeps would push you to Pro at $249/mo.
- `autoevals` has little relevance here, because it is mostly LLM-judge and text-similarity scorers.

### Mastra datasets / experiments
- Datasets and Experiments arrived in `@mastra/core` 1.4.0 (Feb 2026). Experiment targets for workflows and scorers came in Sept 2026.
- An inline `task: async ({input}) => …` is supported. `createExperiment` + `submitExperimentResult` lets an external runner push results: idempotent upserts on `(experimentId, itemId, attempt)`, `maxConcurrency`, `maxRetries`, and a Studio UI with an experiment **Compare** view.
- **Fit problems:**
  - Aggregates are counts (succeeded/failed/skipped) plus per-item scores. There are no custom run-level metrics.
  - Datasets are JSON-Schema items with no notion of perturbation families.
  - It needs a `Mastra` instance plus storage (LibSQL/Postgres).
- **Upside:** you already know it. `submitExperimentResult` makes it a viable _viewer_ target for the hybrid (see Option B below).

### LangSmith
- TS `evaluate()` takes any target function, but the **local-only mode is Python-only**, so TS runs always upload.
- The free Developer tier is 5k traces/month, hard-capped without a card. One 7k-call sweep exceeds it.
- Repriced in July 2026 (LCU/LSU units).
- Hosted only for a project this size. No reason to choose it.

### Vitest + custom code / vitest-evals (Sentry)
- Plain Vitest 5 gives you concurrency (`describe.concurrent`, `maxConcurrency`) and `it.for` parametrization. It has **no result store or UI**: test reporters are not a dataset. Pass/fail semantics also fight a research workflow where nothing "fails".
- `vitest-evals` 0.17.0 adds harness adapters and a local report UI over its JSON artifacts. It is still assertion- and judge-oriented, it is built around `generateText`/agents, and it has no aggregate metrics.

### Evalite
- **Releases:** stable `0.19.0`. The `1.0.0-beta.16` release was last published **2026-02-20**. The beta's peers are `ai@^6` and `better-sqlite3@^11`. Issue #400 (AI SDK v7 support) is open, with no comments as of today. Repo `pushed_at` is 2026-04-28.
- **v1-beta features:**
  - SQLite storage via `createSqliteStorage("./evalite.db")`
  - `trialCount`, `maxConcurrency`
  - a local UI
  - static HTML export
- **Fit problems:**
  - `wrapAISDKModel` caching and tracing target language models, not `decisionModel`.
  - Scorers are 0–1 and per-sample, with no aggregate hook.
  - It is effectively paused against AI SDK 7, and the Decision API only exists in 7.x.
- It would be a nice choice for a `generateText` app. It is not one for this project.

### eve evals (Vercel)
- `eve` 0.78.0, Apache-2.0, in beta. Its `t.judge()` wraps `decide()` with Jev as the default, which is interesting as a **future LLM-judge** primitive.
- It is an agent framework's test harness, `defineEval` + `eve eval`. It has no dataset sweeps, no aggregate metrics, and no UI. Wrong shape for this project.

### OpenAI Evals
- The hosted Evals dashboard and API become **read-only on 2026-10-31 and shut down on 2026-11-30**. OpenAI points users to Promptfoo.
- The `openai/evals` repo is Python, YAML-registry oriented, and slow-moving. Exclude it.

---

## Architecture: thin custom runner + optional harness viewer

```
decision-evals/
  scenarios/
    base/*.yaml              # ~100 base scenarios: text, questions, human baseline dist
    perturbations.ts         # axis definitions: optionOrder, wording, numbers, framing
  src/
    subjects/                # one interface, many backends
      gateway-decision.ts    # experimental_decide + gateway.decisionModel(id)
      openrouter-chat.ts     # jev-router: structured output and/or logprobs -> distribution
      frontier-llm.ts        # generateObject with {option: prob} schema, N samples
    expand.ts                # base × axes -> Variant[] (cartesian, seeded, deterministic ids)
    run.ts                   # CLI: plan -> diff vs cache -> execute with p-limit -> write rows
    store.ts                 # better-sqlite3: runs, calls (PK = cache key)
    normalize.ts             # map answers back to canonical option ids (undo permutation!)
  analysis/
    metrics.sql              # DuckDB views: per-row metrics, per-family consistency, position bias
    report.ts | notebook.ipynb
  data/
    evals.db                 # SQLite (gitignored)
    exports/*.parquet        # committed snapshots per sweep
```

### Pipeline

1. **Generate.** `expand.ts` turns each base scenario plus the perturbation axes into `Variant` records. Each record has:
   - `variant_id = hash(base_id, axes)`
   - `base_id`
   - `axes` (as JSON)
   - `option_permutation` (canonical → displayed)
   - the rendered `state` and `questions`

   Keep the ~1k variants in a JSONL file in git. It is your dataset.
2. **Plan.** Take the cross product of variants × subjects × `samples` (1 for native decision models, N≈5–10 for chat LLMs at T>0).
   - Each call gets `cache_key = sha256(subject_id, model_id, ai_version, canonicalJSON(request), sample_idx)`.
   - Skip any key already present with `status='ok'`. **That is resume.**
3. **Execute.**
   - Use `p-limit` per provider, for example gateway=16 and openrouter=4. Add token-bucket pacing if you see 429s.
   - `decide()` already retries twice. Wrap the call so it records `error_class` on failure and continues.
   - Write each row in one transaction. Use WAL mode so you can query mid-run.
4. **Normalize.** Map the displayed option keys back to canonical ids using `option_permutation` before storing `dist_canonical`.

   **This step is what makes position-bias and consistency measurable.** Also store the raw answer.
5. **Store**, as SQLite with three tables:
   - `runs(run_id, git_sha, ai_version, started_at, config_json)`
   - `calls(cache_key PK, run_id, variant_id, base_id, subject_id, model_id, sample_idx, request_json, answer_raw_json, dist_canonical_json, usage_json, cost_usd, latency_ms, gateway_generation_id, error, created_at)`
   - `variants(variant_id PK, base_id, axes_json, permutation_json)`
6. **Analyze** in DuckDB (`ATTACH 'data/evals.db' (TYPE sqlite)`), with views for:
   - **Fidelity:** JSD / TVD / EMD(score) between the model distribution and the human baseline, per row. Aggregate per model with bootstrap CIs over `base_id`.
   - **Consistency:** within each `(model, base_id)`, the mean pairwise JSD across variants, the flip-rate of the argmax, and the variance of P(option) attributable to each axis.
   - **Entropy / calibration:** the entropy distribution per model, and the entropy gap vs. human.
   - **Position bias:** P(chosen | displayed position) after controlling for canonical option, compared with uniform. Use logistic regression in a notebook, or a simple contrast in SQL.
7. **Export.** Run `COPY (...) TO 'exports/sweep-2026-10-13.parquet'`, then open it in Jupyter/Observable/Evidence or chart it in a Next page.

### Skeleton of the core call (AI SDK 7.0.138)

```ts
import { experimental_decide as decide } from 'ai';
import { gateway } from '@ai-sdk/gateway';

export async function callGatewayDecision(modelId: string, v: Variant) {
  const t0 = performance.now();
  const r = await decide({
    model: gateway.decisionModel(modelId),
    state: v.state,
    questions: v.questions, // { q1: { type: 'choice', instructions, criteria: {...} }, ... }
  });
  return {
    answers: r.answers,
    usage: r.usage,
    cost: Number(r.providerMetadata?.gateway?.cost ?? 0),
    generationId: r.providerMetadata?.gateway?.generationId,
    latencyMs: performance.now() - t0,
  };
}
```

### Where a harness fits (optional, UI only)

- **Option A: Promptfoo as the viewer.** Expose a tiny custom provider that **reads from your SQLite cache by key**: a cache hit always, so it never calls the network. Then run `promptfoo eval -o` + `promptfoo view` over the variant JSONL for the side-by-side matrix browsing UI. All metrics stay in DuckDB.
- **Option B: Mastra Studio as the viewer.** Use `createExperiment` per (sweep, model), push rows with `submitExperimentResult` and scores (e.g. `1 - JSD`), then `finalizeExperiment`. You get Studio's Compare view for free, in a stack you already run. Worth it only if you want this to live next to your Mastra project.
- **Option C (simplest): no harness.** Use `duckdb -ui` for SQL notebooks, plus one Next.js page that shows a scenario's variants × models as stacked probability bars. That chart is the one you actually want, and no harness renders it.

Later, for an LLM judge, add a `judge_calls` table keyed the same way. eve's `t.judge` and `decide()` with a native decision model are both reasonable judge backends.

---

## Sources
- AI Gateway Decision modality: https://vercel.com/docs/ai-gateway/modalities/decision
- AI SDK Decisions (`experimental_decide`): https://ai-sdk.dev/docs/ai-sdk-core/decisions
- Evaluation → decisions migration: https://vercel.com/i/ai-sdk-evaluation-to-decisions
- Evalite releases: https://github.com/mattpocock/evalite/releases
- Evalite AI SDK v7 issue: https://github.com/mattpocock/evalite/issues/400
- Evalite v1 storage: https://v1.evalite.dev/guides/storage/
- Promptfoo custom providers: https://www.promptfoo.dev/docs/providers/custom-api/
- Promptfoo assertions and derived metrics: https://www.promptfoo.dev/docs/configuration/expected-outputs/
- Promptfoo CLI: https://www.promptfoo.dev/docs/usage/command-line/
- Promptfoo test cases: https://www.promptfoo.dev/docs/configuration/test-cases/
- OpenAI to acquire Promptfoo: https://openai.com/index/openai-to-acquire-promptfoo/
- OpenAI deprecations (Evals shutdown): https://developers.openai.com/api/docs/deprecations
- Inspect eval sets: https://inspect.aisi.org.uk/eval-sets.html
- Inspect log files: https://inspect.aisi.org.uk/eval-logs.html
- Mastra experiments: https://mastra.ai/docs/evals/experiments
- Mastra experiment targets: https://mastra.ai/blog/introducing-experiment-targets
- Braintrust scorers: https://www.braintrust.dev/docs/evaluate/write-scorers
- Braintrust pricing tracker (third-party): https://agentdeals.dev/vendor/braintrust
- LangSmith local evaluation (Python only): https://docs.langchain.com/langsmith/local
- LangSmith pricing (third-party): https://inference.net/content/langsmith-pricing/
- Langfuse experiments via SDK: https://langfuse.com/docs/evaluation/experiments/experiments-via-sdk
- vitest-evals: https://vitest-evals.sentry.dev/docs
- eve judge: https://eve.dev/docs/evals/judge
- eve (MarkTechPost): https://www.marktechpost.com/2026/06/17/vercel-releases-eve/
- DuckDB local UI: https://duckdb.org/docs/current/core_extensions/ui
