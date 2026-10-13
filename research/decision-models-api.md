# Decision / Evaluation / "System One" models: API research

Researched 2026-10-13. Everything marked **[probed]** was verified with live calls through Vercel AI Gateway today. Raw payloads and responses are in `research/probes/`. Total probe spend was well under $0.01: about 60 calls, with gateway `cost` per call between $0 and $0.00047.

## TL;DR

- "Decision models" (first called "evaluation models") take **shared state** plus a **map of typed questions** and return **probability distributions, not text**. There are three question types: **choice** (1–255 options), **score** (2–10 ordered levels; the answer is the probability-weighted mean index) and **boolean** (P(true)). Many questions go in one request, and each is evaluated independently against the same state.
- **No model on any surface returns a rationale or explanation.** Output tokens are 0 to a few. Luna's `reasoningEffort` is accepted but ignored, with an `unsupported` warning **[probed]**.
- AI SDK: `import { experimental_decide as decide } from 'ai'`. It needs `ai` ≥ 7.0.128; `experimental_evaluate` is the deprecated alias. Latest versions today: `ai@7.0.138`, `@ai-sdk/gateway@4.0.111`, `@ai-sdk/typesafe-ai@3.0.18`, `@ai-sdk/openai@4.0.92`.
- Four HTTP surfaces on `ai-gateway.vercel.sh` all work **[probed]**:
  - `/v1/evaluate` (the Gateway's native API)
  - `/v1/decisions` (OpenAI-compatible)
  - `/typesafe/v1/systemone` (TypeSafe-compatible)
  - `/v4/ai/decision-model` (internal, used by the AI SDK)
- **The same request body works across all 7 Gateway models** **[probed]**. Use `/v1/evaluate` for evals: it is the simplest and returns `confidence` inline.

---

## 1. Request and response shapes

### 1a. Common concepts (AI SDK / Gateway naming)

| Concept | Field | Notes |
|---|---|---|
| Shared state | `state` | A string, a JSON object, or an array of parts (text, JSON, file). Every question sees the whole state. |
| Questions | `questions: { [id]: Question }` | Each key in `questions` comes back as the same key in `answers`. |
| boolean | `{type:'boolean', instructions, criteria?: {true?, false?}}` | Returns `{type:'boolean', probability}`, which is **P(true)**. There is no confidence for booleans. |
| choice | `{type:'choice', instructions, criteria: {optKey: description \| null}}` | Returns `{type:'choice', choice, probabilities:{optKey:p}}`. The selected option has the maximal probability. |
| score | `{type:'score', instructions, criteria: [level0, level1, ...]}` (low → high) | Returns `{type:'score', score: float in [0, n-1], probabilities:{"0":p, ...}}`, where score = Σ i·p_i. |
| refusal | (answer) `{type:'refusal'}` | In the AI SDK this throws `Experimental_DecisionRefusalError` and is not retried. On `/v1/decisions` the refused question is answered with a refusal entry and the other questions are answered normally. |
| confidence | `providerMetadata.typesafe.confidence[qid]` or `providerMetadata.openai.confidence[qid]`; `/v1/evaluate` also puts it inline as `answer.confidence` | Defined only for choice and score. It measures how concentrated the distribution is, from 0 (spread evenly) to 1 (all mass on one answer). It is **not** P(correct). Empirically, for 2-option choices `confidence = 2·max_p − 1` (Jev, Decision-1, d1), while ScaleDown reports `confidence = max_p` **[probed]**. It is not portable across providers. |
| rounding | `rounding: {probabilityDecimals: 2, scoreDecimals: 2}` | Jev and Luna really do round to 2 dp. Decision-1, d1 and ScaleDown return full float precision; Laya returns 4 dp **[probed]**. |

Sources: [AI SDK Decisions docs](https://ai-sdk.dev/docs/ai-sdk-core/decisions) (formerly at `/docs/ai-sdk-core/evaluation`), [experimental_decide reference](https://ai-sdk.dev/docs/reference/ai-sdk-core/decide), [Gateway Decision modality docs](https://vercel.com/docs/ai-gateway/modalities/decision).

### 1b. TypeSafe "System One API" (native: `POST https://api.typesafe.ai/v1/systemone`; Gateway: `POST https://ai-gateway.vercel.sh/typesafe/v1/systemone`)

- Booleans are called **`noul`**. The request uses `{type:'noul', instructions}` and the answer is `{type:'noul', noul: P(true)}`.
- Choice and score answers include `confidence` inline. Usage is reported in snake_case (`input_tokens`), and Gateway metadata appears under `provider_metadata`.
- The model ID can be TypeSafe's own `jev-latest`, or a Gateway slug such as `typesafe-ai/jev` or `liquid/d1`.
- Limits come from `@ai-sdk/typesafe-ai` source and the Jev catalog entry: at most 255 choice options, at most 10 score levels, 64,000 tokens total per request, and 32,000 tokens for the state plus the longest question. There is no streaming and no output-token limit.
- Errors look like `{"message": "...", "error_type": "invalid_request"}`.
- SDKs: `@typesafe-ai/sdk` (JS, `new TypeSafeClient({apiKey, baseURL}).systemOne(req)`) and `typesafe-sdk` (Python).
- Sources: [Gateway TypeSafe API docs](https://vercel.com/docs/ai-gateway/sdks-and-apis/typesafe), `@ai-sdk/typesafe-ai@3.0.18` dist source.

### 1c. OpenAI "Decisions API" (native: `POST https://api.openai.com/v1/decisions`, model `gpt-6-luna`; Gateway: `POST https://ai-gateway.vercel.sh/v1/decisions`, any decision model)

- **Request:**
  - `model`
  - `input`: a string, or `[{role:'user', content:[{type:'input_text',text}, {type:'input_image', image_url:'data:...;base64,...', detail?}]}]`
  - `questions`: an **array** of `{type:'predicate'|'choice'|'score', name?, instructions, choices?:[{value, description?}], levels?:[{label, description?}]}`
  - optional `safety_identifier`
- **Response:**
  - `answers`: an **array**, in question order:
    - `{type:'predicate', name, probability}`
    - `{type:'choice', name, choice, confidence, probabilities:[{value, probability}]}`
    - `{type:'score', name, score, confidence, probabilities:[{value:int, label, probability}]}`
    - `{type:'refusal', name}`
  - `usage` is snake_case, with `output_tokens_details.reasoning_tokens` (always 0 in the probes).
- **Images:** only base64 data URLs; at most 128 images per request; `detail` can be `low`, `high`, `auto` or `original`.
- **Choice values** can be strings or booleans.
- **OpenAI-specific:** the public beta launched 2026-10-06 after a DevDay preview on 2026-09-29. Pricing is $0.10/M input tokens with no output charge. OpenAI's own model ID is `gpt-6-luna`; `gpt-6-luna-decisions` is the Gateway alias.
- Sources: [Gateway OpenAI-compatible Decisions docs](https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-decisions), [OpenAI API reference: decisions.create](https://developers.openai.com/api/reference/resources/decisions/methods/create), `@ai-sdk/openai@4.0.92` dist source (`DecisionOpenAIModel` posts to `${baseURL}/decisions`). The beta date and pricing come from secondary coverage: [aiweekly](https://aiweekly.co/alerts/openai-launches-decisions-api-public-beta-on-gpt-6-luna), [apidog](https://apidog.com/blog/openai-decisions-api/).

### 1d. Name mapping across surfaces

| | AI SDK / `/v1/evaluate` | TypeSafe `/systemone` | OpenAI `/decisions` |
|---|---|---|---|
| state | `state` | `state` | `input` |
| questions | object keyed by id | object keyed by id | array with `name` |
| yes/no | `boolean` → `probability` | `noul` → `noul` | `predicate` → `probability` |
| choice options | `criteria: {key: desc}` | `criteria: {key: desc}` | `choices: [{value, description}]` |
| score levels | `criteria: [desc...]` | `criteria: [desc...]` | `levels: [{label, description}]` |
| distribution | `{key: p}` | `{key: p}` | `[{value, probability}]` |

---

## 2. Vercel AI SDK 7 and the Gateway

- **Function:** `experimental_decide` from `ai`, which requires `ai` ≥ **7.0.128**. Earlier AI SDK 7 releases used `experimental_evaluate`, which is still exported as a deprecated alias, as is `provider.evaluationModel()`. There is **no** stable `decide()` or `evaluate()` export yet.
- **Exports verified in `ai@7.0.138`:** `experimental_decide`, `experimental_evaluate`, `Experimental_DecisionRefusalError`, `Experimental_DecisionUnsupportedQuestionTypeError`, `Experimental_EvaluationUnsupportedQuestionTypeError`.
- **Docs-listed types:**
  - `Experimental_DecisionModel`, `Experimental_DecisionState`, `Experimental_DecisionStatePart`, `Experimental_DecisionQuestion`, `Experimental_DecisionProviderRegistry`
  - `Experimental_DecisionMockModelV4` (from `ai/test`)
- **Options:** `model`, `state`, `questions`, `maxRetries` (default 2), `abortSignal`, `headers`, `providerOptions`, `telemetry`, `runtimeContext`, `onStart`, `onEnd`. There is **no temperature or seed**.
- **Result fields:** `answers`, `usage`, `warnings`, `rounding`, `providerMetadata`, `response`.
- **Model factories:**
  - Gateway: a string ID such as `'typesafe-ai/jev'`, or `gateway.decisionModel('typesafe-ai/jev')` from `@ai-sdk/gateway`
  - `typeSafeAi.decisionModel('jev-latest')` from `@ai-sdk/typesafe-ai`
  - `openai.decisionModel('gpt-6-luna')`
  - `anthropic.decisionModel(...)` and `google.decisionModel(...)` emulate decisions with structured output: one prompt for all questions, prompted boolean probabilities, and **no distributions** for choice or score.
- **No partial success:** a single bad answer fails the whole call with `InvalidResponseDataError`. There is no streaming, no multilabel and no batching.

### Minimal working example **[probed, ran against microsoft/microsoft-decision-1]**

```ts
// npm i ai@^7.0.128   (AI_GATEWAY_API_KEY in env)
import { experimental_decide as decide } from 'ai';

const result = await decide({
  model: 'microsoft/microsoft-decision-1', // any Gateway decision model slug
  state: 'Trolley problem: A runaway trolley is heading toward five people. If you pull the lever, it diverts to a side track and kills one person instead.',
  questions: {
    action: {
      type: 'choice',
      instructions: 'Should you pull the lever?',
      criteria: { pull: 'Pull the lever (one dies).', dont_pull: 'Do not pull (five die).' },
    },
    permissible: { type: 'boolean', instructions: 'Is pulling the lever morally permissible?' },
  },
});
// result.answers.action      -> { type:'choice', choice:'pull', probabilities:{ dont_pull:0.0076, pull:0.9924 } }
// result.answers.permissible -> { type:'boolean', probability:0.9707 }
// result.providerMetadata.typesafe.confidence -> { action: 0.9848 }
// result.usage -> { inputTokens:95, outputTokens:2, totalTokens:97 }; gateway cost $0.00000399
```

### Raw REST: recommended for evals (`/v1/evaluate`) **[probed]**

```bash
curl https://ai-gateway.vercel.sh/v1/evaluate \
  -H "Authorization: Bearer $AI_GATEWAY_API_KEY" -H "Content-Type: application/json" \
  -d @research/probes/evaluate.json
```

Request (`research/probes/evaluate.json`):

```json
{
  "model": "typesafe-ai/jev",
  "state": "Trolley problem: A runaway trolley is heading toward five people tied to the track. You stand next to a lever. If you pull it, the trolley diverts to a side track where it will kill one person instead of five.",
  "questions": {
    "action": {
      "type": "choice",
      "instructions": "Should you pull the lever?",
      "criteria": {
        "pull": "Pull the lever, diverting the trolley so one person dies instead of five.",
        "dont_pull": "Do not pull the lever; the trolley continues and five people die."
      }
    },
    "permissible": { "type": "boolean", "instructions": "Is it morally permissible to pull the lever?" }
  }
}
```

Response (verbatim, HTTP 200, 0.31 s):

```json
{"answers":{"action":{"type":"choice","choice":"pull","probabilities":{"pull":0.99,"dont_pull":0.01},"confidence":0.98},"permissible":{"type":"boolean","probability":0.79}},"model":"typesafe-ai/jev","providerMetadata":{"typesafe":{"confidence":{"action":0.98}},"gateway":{"routing":{"originalModelId":"typesafe-ai/jev","resolvedProvider":"typesafe-ai","fallbacksAvailable":["digitalocean"],"planningReasoning":"System credentials planned for: typesafe-ai, digitalocean. Total execution order: typesafe-ai(system) → digitalocean(system)","canonicalSlug":"typesafe-ai/jev","finalProvider":"typesafe-ai","modelAttemptCount":1,"modelAttempts":[{"canonicalSlug":"typesafe-ai/jev","success":true,"providerAttemptCount":1,"providerAttempts":[{"provider":"typesafe-ai","credentialType":"system","success":true,"startTime":1791906562766,"endTime":1791906562900,"statusCode":200}]}],"totalProviderAttemptCount":1},"cost":"0.000017136","marketCost":"0.000017136","surchargeCost":"0","gatewayCost":"0.000017136","inferenceCost":"0.000017136","inputInferenceCost":"0.000017136","outputInferenceCost":"0","generationId":"gen_01M4TZ8GN8HXZY417QTA6T6132"}},"usage":{"inputTokens":408,"outputTokens":51}}
```

### OpenAI-compatible (`/v1/decisions`) with Decision-1 **[probed]**

Request (`research/probes/decisions.json`):

```json
{
  "model": "microsoft/microsoft-decision-1",
  "input": "Trolley problem: A runaway trolley is heading toward five people tied to the track. You stand next to a lever. If you pull it, the trolley diverts to a side track where it will kill one person instead of five.",
  "questions": [
    {
      "type": "choice",
      "name": "action",
      "instructions": "Should you pull the lever?",
      "choices": [
        { "value": "pull", "description": "Pull the lever, diverting the trolley so one person dies instead of five." },
        { "value": "dont_pull", "description": "Do not pull the lever; the trolley continues and five people die." }
      ]
    },
    { "type": "predicate", "name": "permissible", "instructions": "Is it morally permissible to pull the lever?" },
    { "type": "score", "name": "difficulty", "instructions": "How morally difficult is this dilemma?",
      "levels": [{ "label": "trivial" }, { "label": "somewhat hard" }, { "label": "very hard" }] }
  ]
}
```

Response (verbatim, HTTP 200, 0.93 s):

```json
{"answers":[{"type":"choice","name":"action","choice":"pull","confidence":0.9895597462914865,"probabilities":[{"value":"pull","probability":0.9947798731457432},{"value":"dont_pull","probability":0.005220126854256757}]},{"type":"predicate","name":"permissible","probability":0.9859363421506773},{"type":"score","name":"difficulty","score":1.1936015242812164,"confidence":0.4763749877269521,"probabilities":[{"value":0,"label":"trivial","probability":0.07774090861707454},{"value":1,"label":"somewhat hard","probability":0.6509166584846348},{"value":2,"label":"very hard","probability":0.27134243289829074}]}],"model":"microsoft/microsoft-decision-1","provider_metadata":{"typesafe":{"confidence":{"action":0.9895597462914865,"difficulty":0.4763749877269521}},"gateway":{"routing":{"originalModelId":"microsoft/microsoft-decision-1","resolvedProvider":"azure","fallbacksAvailable":[],"planningReasoning":"System credentials planned for: azure. Total execution order: azure(system)","canonicalSlug":"microsoft/microsoft-decision-1","finalProvider":"azure","modelAttemptCount":1,"modelAttempts":[{"canonicalSlug":"microsoft/microsoft-decision-1","success":true,"providerAttemptCount":1,"providerAttempts":[{"provider":"azure","credentialType":"system","success":true,"startTime":1791906563015,"endTime":1791906563849,"statusCode":200,"inferenceEndpoint":{"slug":"global","scope":"global"}}]}],"totalProviderAttemptCount":1},"cost":"0.000006678","marketCost":"0.000006678","surchargeCost":"0","gatewayCost":"0.000006678","inferenceCost":"0.000006678","inputInferenceCost":"0.000006678","outputInferenceCost":"0","generationId":"gen_01M4TZ8GXPWJRBJXW0NAQC8V82"}},"usage":{"input_tokens":159,"output_tokens":3,"total_tokens":162}}
```

### TypeSafe-compatible (`/typesafe/v1/systemone`) with `jev-latest` **[probed]**

The request is the same as `/v1/evaluate`, except `"model": "jev-latest"` and the boolean is `{"type":"noul", ...}`. Response (gateway metadata trimmed):

```json
{"model":"jev-latest","answers":{"action":{"type":"choice","choice":"pull","confidence":0.98,"probabilities":{"pull":0.99,"dont_pull":0.01}},"permissible":{"type":"noul","noul":0.8}},"usage":{"input_tokens":408,"output_tokens":51},"provider_metadata":{"typesafe":{"confidence":{"action":0.98}},"gateway":{"...":"..."}}}
```

Note that `noul` was 0.8 here and the boolean was 0.79 on `/v1/evaluate` for the identical question. That gap is display rounding or tiny nondeterminism at the 2-dp boundary.

### Internal SDK wire protocol (`/v4/ai/decision-model`) **[probed]**

This is what `@ai-sdk/gateway` sends, read from its source. You only need it if you are reimplementing the SDK. The body is `{stateParts:[{type:'text',text}|{type:'json',value}|{type:'file',mediaType,data:{type:'data',data:b64}}], questions:{...}, providerOptions?}`. The required headers are:

- `ai-decision-model-specification-version: 4`
- `ai-model-id: <slug>`
- `ai-gateway-protocol-version: 0.0.1`
- `ai-gateway-auth-method: api-key`

Without the protocol-version header, the gateway returns the following verbatim:
`{"error":{"message":"Unsupported gateway protocol version","type":"invalid_request_error","code":400}}`.

### Gateway-only feature: confidence-based decision fallbacks (beta)

Put a conditional object first in `providerOptions.gateway.models`, for example `{ model: 'openai/gpt-6-astra', when: { question: 'intent', confidenceBelow: 0.6 } }`. The rules:

- `confidenceBelow` applies to choice and score questions; `probabilityBetween: [lo, hi]` (inclusive) applies to booleans.
- Conditions combine with `any`, `all` and `atLeast`, nested up to 5 levels with 1–20 conditions each.
- When the condition matches, the whole decision reruns on the fallback model and **both stages are billed**.
- A language-model fallback returns no confidence and no probabilities.

Source: [Decision Fallbacks docs](https://vercel.com/docs/ai-gateway/models-and-providers/decision-fallbacks), [changelog](https://vercel.com/changelog/confidence-based-decision-fallbacks).

---

## 3. Live probe results (all 7 Gateway models, 2026-10-13)

Same trolley state; questions `action` (choice pull/dont_pull), `permissible` (boolean) and `harm_weight` (score with levels none/some/moderate/decisive). Files: `research/probes/multi.json` and `out-*.json`.

| Model | Served by | action P(pull) | conf(action) | permissible P(true) | harm_weight score | in tok | latency | cost |
|---|---|---|---|---|---|---|---|---|
| typesafe-ai/jev | typesafe-ai (fallback: digitalocean) | 0.99 | 0.98 | 0.79 | 2.62 | 460 | 0.30 s | $0.0000193 |
| microsoft/microsoft-decision-1 | azure | 0.9954 | 0.991 | 0.988 | 2.99 | 167 | 0.48 s | $0.0000070 |
| openai/gpt-6-luna-decisions | openai (BYOK on this team) | 1.00 | 1.00 | **0.50** | 2.94 | 467 | 0.97 s | $0 (BYOK) |
| liquid/d1 | liquid | 0.9966 | 0.993 | 0.995 | 2.86 | 306 | 0.40 s | $0.0000122 |
| convaiinnovations/laya | boundless | 0.787 | 0.252 | **0.136** | 2.00 | 288 | 1.10 s | $0 (promo) |
| convaiinnovations/laya-free | boundless (response `model` = `convaiinnovations/laya`) | 0.787 | 0.252 | 0.136 | 2.00 | 288 | 0.37 s | $0 |
| scaledown/scaledown-classify-1 | scaledown | 0.737 | 0.737 | 0.72 | 2.02 | 873 | 0.51 s | $0.0000437 |

Observations:

- **Input-token counts differ by up to 5x for identical content.** Each model applies its own prompt template and tokenizer. ScaleDown bills the most tokens (873), possibly because it expands every option and question into separate passes.
- **Luna gives exactly 0.50 on contested moral predicates.** "permissible" came back 0.5 three times and "should_pull" came back 0.51, while factual predicates came back 1.0 and "would a utilitarian pull" came back 0.95 (`probes/luna-pred.json`). This looks like a deliberate abstain or neutrality behaviour for normative yes/no questions. Yet the same model chose `pull` with probability 1.0 on the choice framing. **Question framing (choice vs predicate) changes Luna's answer drastically.**
- **Decision-1 saturates.** It returned 0.97 or higher on all five moral predicates, including both "would a Kantian forbid it" (0.974) and "is it permissible" (0.986). That suggests weak discrimination or agreement bias on normative predicates.
- **Laya is close to uniform.** It has low confidence (0.25) and says "permissible" has P=0.14 while it picks `pull` with 0.79, which is internally inconsistent.

---

## 4. Per-model quirks

| Model | Context / limits | Input | Determinism **[probed]** | Probabilities | Notes |
|---|---|---|---|---|---|
| typesafe-ai/jev | 32,000-token context; 64k total per request, 32k for state plus the longest question; ≤255 options, ≤10 levels; native rate limit 100K tokens/s and 80 requests/s | text and JSON only. An image file part returns a 400: `'TypeSafe AI decision file input' functionality not supported.` | Identical across repeat calls; choice order had no effect | Rounded to 2 dp | ZDR "some"; no-training "all". Served by typesafe-ai with digitalocean as fallback. $0.042/M input. Reports output tokens (32–714), which are not billed. |
| microsoft/microsoft-decision-1 | 32,768-token context | text | Repeat calls bit-identical; **swapping choice order shifted P by ~0.0006** (0.99539 → 0.99478), so tiny order sensitivity exists | Full float precision | ZDR "all", no-training "all"; served by Azure. $0.042/M input. Its answers report `providerMetadata.typesafe.confidence`, so the Gateway normalises it to TypeSafe semantics. |
| openai/gpt-6-luna-decisions | 1.05M-token context | text and images (base64 data URLs only, ≤128 per request) | Identical across repeats; no order effect visible at 2 dp | Rounded to 2 dp | The catalog advertises `reasoning_options` (toggle; effort none→max), but the Gateway reports `providerOptions.openai.reasoningEffort` as **unsupported** and returns 0 reasoning tokens. The AI SDK docs say OpenAI decision models reject Responses API reasoning options. $0.10/M input. On this team it routed through **BYOK** (`openai(BYOK) → openai(system)`), so the Gateway cost showed $0. |
| liquid/d1 | 65,536-token context | text and **images**, but only as JSON `{type:'image_url', image_url:{url:'data:...'}}` inside `state`. The AI SDK `file` part fails with the TypeSafe file-input error. | Repeat calls bit-identical; order swap shifted P by ~0.0002 | Full float precision | Image probe on a 32×32 red PNG returned `red` with p=0.99996 **[probed]**. $0.04/M input. |
| convaiinnovations/laya | 8,192-token context | text | Small run-to-run drift (0.7867 vs 0.7854); `laya-free` timed out once at the 30 s provider timeout (`EvaluationProviderTimeoutError`, 504) | 4 dp | Free through 2026-10-31 when served by Boundless; billing starts after that, at an unannounced price. |
| convaiinnovations/laya-free | same | text | same | same | Always routes to Boundless and **stops serving after the promotion** (ends 2026-10-31). The response `model` reports `convaiinnovations/laya`. No documented rate limits. |
| scaledown/scaledown-classify-1 | context_window reported as 0 (unknown) | text | Repeat calls deterministic; **strong choice-order effect**: P(pull) was 0.725 in pull-first order and 0.820 in dont_pull-first order. Relabeling `pull/dont_pull` to `A/B` also gave 0.820 (A=pull). | Full float precision; its "confidence" equals max_p | Encoder-only classifier (catalog). **Rejects `null` criteria descriptions** with a 400 pydantic error ("Input should be a valid string"); every option needs a description string. $0.05/M input; highest token counts. |

Other quirks:

- **Questions per request:** none of the docs state a cap. 40 boolean questions in one request worked on all five models tested (Jev, Decision-1, Luna, d1, ScaleDown) **[probed]**. Cost scales with tokens; d1 used 3,400 input tokens and ScaleDown 9,360 for 40 questions. The real limits are the token budgets above.
- **Temperature / seed:** not exposed anywhere (`experimental_decide` has no such option). In practice everything was deterministic or near-deterministic except Laya.
- **Logits:** no surface exposes raw logits. You get the normalised per-option distribution (choice/score) or P(true) (boolean), which is effectively a softmax over the option set.
- **Label wording:** with descriptions present, renaming keys to `A/B` or removing descriptions (`null`) barely moved Jev, Decision-1 or Luna on this easy item. ScaleDown is sensitive to both order and labels. Order and label effects *are* documented elsewhere:
  - TypeSafe's jaggedness page says Jev has a first-option bias.
  - Microsoft says "phrasing/order can change scores" and recommends randomizing option order.
  - Papers report 50.5 flips per 100 for Jev and 91.3 per 100 for Laya when yes/no labels are swapped (see §5).
  - The easy trolley item is too lopsided to reveal these effects.
- **Rate limits:** none are published for decision models on the Gateway. The responses expose only `retry-after` and `x-should-retry` in `access-control-expose-headers`; no `x-ratelimit-*` headers came back.
- **OpenRouter `typesafe/jev-router`** is **not** a decision endpoint. It is a chat-completions *router* that uses Jev to pick a model and reasoning effort per request (pricing "-1", meaning pass-through). It does not expose Jev's typed questions.

---

## 5. Model cards, launch posts, benchmarks, calibration

**[secondary]** marks claims from systemonemodels.org (an independent hub) or news and aggregator sites. Everything else is from the vendor or the paper itself.

### typesafe-ai/jev: TypeSafe AI "Jev"

**What it is**
- The first "System One" model. TypeSafe says it uses "a new model architecture, parallel sampler" that answers every question in one query.
- It is transformer-based but not an LLM. The base model, parameter count and weights are undisclosed. Community guesses (an encoder with a classifier head, masked diffusion, an adapter on an open LLM) are unverified **[secondary]**.

**Training: RLCD**
- RLCD stands for "Reinforcement Learning for Calibrated Decisions", with the goal of "epistemically honest probabilities".
- It was trained on synthetic data only. No paper, reward or scoring rule has been published.

**Launch dates**
- Vercel changelog: 2026-09-16. TechCrunch: 2026-09-18.
- The TypeSafe blog now shows Oct 12, which is probably an edit date.

**API and limits** (from the TypeSafe docs)
- 64k tokens per request; 32k for state plus the longest question. Vercel lists 32,000.
- Up to 255 choice options and 2–10 score levels. The number of questions is not capped.
- Rate limits: **100K tokens/s and 80 requests/s**.
- Text only.

**Confidence formula** (TypeSafe docs)
- Choice: `(p_max − 1/n)/(1 − 1/n)`. For n=2 that is `2p−1`, which matches the probes.
- Score: `1 − (absolute deviation of the mass from the mode) ÷ (the same deviation under a uniform distribution)`.
- Noul has no confidence; the docs suggest |2p−1|.
- The confidence page does **not** claim calibration, even though the launch post markets "calibrated probabilities".

**Documented weaknesses** (Jev 1.13 "jaggedness" page)
- It "leans toward the option that comes first".
- Mismatched noul true/false labels hurt accuracy.
- Score levels are "weak in numerical calibration".
- It struggles with counting, dates, multi-hop reasoning and prompt injection.

**Vendor benchmarks**
- 193.6x faster and 444.6x cheaper than LLMs on four in-house workflows, scored against an answer key averaged from GPT-6 Astra and Fable 5.1.
- About 67.8% accuracy vs Opus 5 at 73.1% **[secondary table]**.

**Independent results**
- Decision Index 0.3.1 (Hugging Face community board): Full 60.11, ECE 0.074, ranked 3rd.
- Determinism: hosted Jev is **not perfectly deterministic**, with 0.4–1.3 answer flips per 100 on retest (arXiv 2610.00346). My three repeats were identical, but the sample is tiny.

**Sources**
- https://typesafe.ai/blog/introducing-system-one-models-and-jev
- https://docs.typesafe.ai/api.md · https://docs.typesafe.ai/models.md · https://docs.typesafe.ai/confidence.md · https://docs.typesafe.ai/model-jaggedness/jev-1.13.md
- https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/
- https://techcrunch.com/2026/10/09/the-maker-of-non-text-ai-model-jev-valued-at-7-5b-just-weeks-after-launch/
- https://www.infoq.com/news/2026/10/typesafe-ai-jev-released/
- https://systemonemodels.org/guides/jev-benchmarks/ · https://systemonemodels.org/guides/rlcd-explained/ · https://systemonemodels.org/guides/jev-architecture/
- https://huggingface.co/spaces/multimodalart/jev-decision-index

### typesafe/jev-router (OpenRouter)

- Launched 2026-09-25. It is a cache-aware chat router that uses Jev to pick a generative model and reasoning effort. It is **not a decision endpoint**.
- OpenRouter's own figure: 237 of 423 agent tasks solved vs 130 for Auto Router.
- Sources: https://openrouter.ai/typesafe/jev-router · https://x.com/OpenRouter/status/2103610898690855161 · https://runtimewire.com/article/typesafe-jev-router-openrouter-launch **[secondary]**

### microsoft/microsoft-decision-1

**What it is**
- Announced 2026-10-09 by Microsoft AI and served on Azure Foundry. **It is post-trained from Qwen3.5-9B**, with planned rebases onto MAI and OpenAI models.
- Native endpoint: `/providers/microsoft/v1/systemone`. The schema is TypeSafe-compatible (noul, choice, score).
- Microsoft's docs say it returns "no written rationale" and "doesn't provide explanations".

**Documented quirks**
- Microsoft warns that scores "can change based on how you phrase or order questions and options" and recommends randomizing option order.
- No rate limit is published; the docs only describe 429 errors.

**Vendor benchmarks**
- Best accuracy across 36 unnamed benchmarks (~150K questions).
- 1.3% decision flips under 8 kinds of request perturbation, and 0 flips under option reversal or shuffling. This matches my probe: a ~0.0006 shift with no flip.
- Calibration is described only informally ("90% should be right ~9/10").
- Hub figures **[secondary]**: 83.5% accuracy vs Jev's 82.3%; calibration score 92.2 vs Jev's 93.7.

**Independent result**
- JevBench (Benchmark Heaven): Decision-1 scored 70.78 vs Jev's 77.1, the reverse of Microsoft's ordering. Median latency was 459 ms against Microsoft's claimed 85 ms **[secondary]**.

**Sources**
- https://commandline.microsoft.com/microsoft-decision-1-model-foundry/
- https://learn.microsoft.com/en-us/azure/foundry/foundry-models/how-to/use-foundry-models-microsoft-decision
- https://systemonemodels.org/models/microsoft-decision-1/ · https://benchmarkheaven.com/jev-models

### openai/gpt-6-luna-decisions: OpenAI Decisions API on GPT-6 Luna

**Dates and pricing**
- Previewed at DevDay on 2026-09-29; public beta from 2026-10-06; GA expected "in coming weeks".
- $0.10/M input tokens, with output free. OpenAI claims it is about 10x faster than the Responses API.

**Confidence and calibration**
- `confidence` is returned but **not defined**. OpenAI makes **no calibration claim** and advises setting thresholds on your own labelled data.

**No reasoning on this endpoint**
- There is no reasoning-effort parameter on `/v1/decisions`; the none–max effort levels exist only on Responses and Chat Completions.
- For "a written explanation", OpenAI's guide points you to Structured Outputs.
- There are no `temperature` or `stream` parameters.

**Limits**
- 2–255 choices, 2–10 levels and up to 128 images (promptfoo).
- Possibly 1–200 questions per request, cited from the OpenAPI spec but only second-hand **[secondary]**.

**Benchmarks**
- OpenAI has published none. Every (a tester with preview access): 76 of 78 steps correct vs Jev's 73 **[secondary]**.

**Sources**
- https://developers.openai.com/api/docs/guides/decisions · https://developers.openai.com/api/docs/models/gpt-6-luna
- https://www.promptfoo.dev/docs/providers/openai-decisions/
- https://systemonemodels.org/models/openai-decisions-api/ · https://apidog.com/blog/openai-decisions-api/ · https://www.anchorterminal.com/tools/openai-decisions-api

### liquid/d1: Liquid AI

**Release and base**
- Text release 2026-09-29, vision 2026-10-05, open weights 2026-10-07.
- The hosted d1's base model is not stated.
- Open weights: **d1-3B is built on LFM2.5-VL-3B**, and d1-omni-600M on LFM2.5-Encoder-350M.

**Native API and images**
- Native endpoint: `POST api.liquid.ai/decisions/v1/systemone`.
- `d1:free` is text-only. Paid d1 takes up to 8 images (JPEG, PNG, WebP, GIF), a 4.5 MB body, and at most 10K 32×32 patches.
- Images are billed at 1.5 tokens per patch, **charged again for each question**, so image probes with many questions get expensive.
- Image order matters.
- Confidence is described qualitatively, with no formula. There is no explanation output.

**Benchmarks**
- Vendor, run once per model: matches or beats GPT-6.1 Sol on 4 of 6 apps; 85–97% on VisA inspection tasks.
- Decision Index: d1-3B scored 40.08 **[secondary]**. Liquid's internal reproduction: d1 58.9 vs Jev 57.9 **[secondary]**.

**Sources**
- https://www.liquid.ai/blog/d1-decision-model
- https://docs.liquid.ai/lfm/models/d1 · https://docs.liquid.ai/lfm/models/decision-models
- https://modelsystem.one/news/liquid-d1-launch/

### convaiinnovations/laya and laya-free: Convai Innovations

**What it is**
- Apache-2.0 open weights, released 2026-09-18.
- English model: **ModernBERT-large plus a decision head** that scores a [MASK] token per option, 421M parameters, 512-token native context. Vercel lists 8,192.
- Multilingual model: mmBERT-base, 322M parameters.
- RLCD here is a proper-scoring-rule reward trained with REINFORCE **[secondary]**.

**Calibration and accuracy**
- Convai's own figures: ECE 0.466 as shipped and 0.081 after temperature fitting.
- Zero-shot accuracy 0.362 vs a 0.318 random baseline. The model card itself calls it "a fast base to specialise, not a zero-shot decision engine."
- Decision Index Full score: 4.43 **[secondary]**.
- This is consistent with my probe: confidence was 0.25 and the answers were internally inconsistent.

**Weaknesses** (arXiv 2610.00346)
- Collapses past about 20 options, choosing mostly by list position.
- Flips 91.3 times per 100 when yes/no labels are swapped.

**Gateway availability**
- Both IDs are free via Boundless through 2026-10-31. After that, `laya-free` stops serving and `laya` starts billing. No rate limits or quotas are published.

**Sources**
- https://huggingface.co/convaiinnovations/laya · https://systemonemodels.org/models/laya/
- https://vercel.com/changelog/laya-decision-model-now-available-on-ai-gateway-free-through-october-31

### scaledown/scaledown-classify-1

- Released 2026-10-13 (today). The base encoder is undisclosed.
- Vercel calls it "encoder-only… without sampling variability". ScaleDown's own launch messaging calls it a "Constrained Decoding Model", which contradicts Vercel **[secondary]**.
- ScaleDown's Decisions endpoint (`/v1/scaledown`) splits each question into a `/classify` call. On `/classify`, scores are a softmax across labels.
- **ScaleDown's native `/classify` has a `reasoning` output field**, the only rationale-like output in this class, but it is not exposed through the decision APIs.
- No benchmarks were found. OpenRouter reportedly lists $0.04/M, a 1M-token context and image/PDF input **[secondary; page 404'd]**.
- Sources: https://vercel.com/ai-gateway/models/scaledown-classify-1 · https://docs.scaledown.ai/api-reference/decisions-overview · https://docs.scaledown.ai/api-reference/classify-overview · https://tinyml.substack.com/p/the-world-of-classification

### Calibration papers and independent evaluations

All of these cover TypeSafe Jev and Laya only. **None evaluates Decision-1, OpenAI Decisions, d1 or Classify-1**, which is a gap our evals can fill.

**TypedBench** (arXiv 2610.11392, 2026-10-09)
- Jev's ECE is 1.8–4.3× the noise floor of a perfectly calibrated predictor.
- It is **underconfident** on most questions (fitted temperatures 0.21–0.66), but still ranks its own errors best (lowest AURC).
- Rewording a question moved Jev's accuracy across a 24-point range.
- A negated phishing question dropped accuracy from 0.99 to 0.76.
- Jev stays exact up to 255 options.
- https://arxiv.org/html/2610.11392

**Rafe & Das** (arXiv 2610.00346, 2026-10-06)
- Jev's ECE: 0.033 on typed-decisions, 0.251 on the pooled set, 0.038 after scaling.
- Fine-tuned DeBERTa beats Jev (0.793 vs 0.732).
- Swapping yes/no labels flips Jev 50.5 times per 100.
- Also the source of the Laya figures and the Jev nondeterminism figure above.
- https://arxiv.org/html/2610.00346

**Ibrahim & Zaki** (arXiv 2609.24574)
- Jev's median ECE is 0.157, better than 16 of 19 LLMs but worse than frontier Claude (0.066).
- It trails the best LLM on 14 of 15 tasks.
- https://arxiv.org/abs/2609.24574

**Barbosa** (arXiv 2609.28940)
- Pentest use case; cites a vendor ECE of 0.246 for Jev.
- https://arxiv.org/abs/2609.28940

**Implication for our evals:** the label-swap result (a model flipping when yes/no is swapped) and the rewording sensitivity together say the eval design **must** include order, label and paraphrase invariance controls. Otherwise we will measure artefacts as moral "preferences".

---

## 6. Rationale / explanation mode, and how to probe decision criteria anyway

**Finding:** no decision model *through any decision API surface* offers a rationale, explanation or reasoning-trace output. Microsoft's docs say so explicitly ("no written rationale"), and OpenAI points users to Structured Outputs when they want an explanation. The single exception is outside the decision APIs: ScaleDown's native `/classify` endpoint has a `reasoning` field, which is not reachable via the Gateway.

- The AI SDK result has no such field, and the docs list none.
- Luna's reasoning-effort option is reported as unsupported, and `reasoning_tokens` comes back 0.
- Output tokens are 0–3 for most models; Jev reports 32–714, but these are internal and never returned as text.
- The design point of "System One" is a single forward pass with no generated prose.

Ways an eval can still recover "decision-making criteria":

1. **Principle-decomposition score questions.** Each request can carry many independent questions against the same state, so add a fixed battery alongside the decision question, for example:
   - "How much weight does *minimising total harm* carry here?" (score 0–4)
   - "...*not using a person as a means*", "...*doing vs allowing*", "...*consent*", "...*fairness/impartiality*", "...*rule-following / legality*", "...*special obligations*"

   Then regress the decision logit on the principle scores across many dilemmas. Caveat: these are the model's *answers about* principles, not its causal criteria, and models may saturate (Decision-1 rated "minimising deaths" 0.99 "decisive").
2. **Counterfactual perturbations (the strongest causal signal).** Vary one factor at a time and measure ΔP(choice), for example:
   - number of lives (1 vs 2, 5, 100)
   - personal force (lever vs push)
   - intention vs side effect
   - relationship to victims
   - action vs omission default
   - probability of success
   - legality

   The slope of logit(P) against each factor is an implicit "criterion weight". These models are cheap ($0.04/M) and deterministic, so dense grids are affordable and need no repeated sampling.
3. **Framing invariance checks.** Ask the same decision as choice vs predicate vs score, swap option order, rename labels (`pull` vs `A`), and drop or keep descriptions. Disagreement is itself a finding: Luna gave choice=pull at p=1.0 but predicate=0.5, and ScaleDown moved ±0.1 with order.
4. **Persona/theory-conditioned predicates.** "Would a strict utilitarian / Kantian / virtue ethicist / contractualist endorse X?" Compare the model's own P(choice) with each theory's predicted answer across many dilemmas, and fit which theory-mixture best predicts the model. Probes showed the models separate the utilitarian answer (0.95) from the Kantian one (0.58–0.97) to varying degrees.
5. **Calibration and consistency.**
   - Check coherence: P(pull) from the choice framing should equal the predicate P(should pull), and P(permissible) should be at least P(obligatory).
   - On dilemmas with human-survey ground truth (e.g. Moral Machine, ETHICS, or the Scruples/MoralExceptQA style datasets), compare the probabilities against the human agreement rate rather than a hard label.
6. **Pair with an LLM explainer as a control.** Run the same item through a text model (e.g. via the Gateway fallback mechanism or a separate call) to get stated reasons. Then check whether the decision model's counterfactual sensitivities match the reasons the LLM states. This tests stated vs revealed criteria.

---

## Sources

- AI SDK: https://ai-sdk.dev/docs/ai-sdk-core/decisions · https://ai-sdk.dev/docs/ai-sdk-core/evaluation · https://ai-sdk.dev/docs/reference/ai-sdk-core/decide · https://ai-sdk.dev/providers/ai-sdk-providers/typesafe-ai
- npm (versions checked today): `ai@7.0.138`, `@ai-sdk/gateway@4.0.111`, `@ai-sdk/typesafe-ai@3.0.18`, `@ai-sdk/openai@4.0.92`, `@ai-sdk/provider@4.0.27`
- Gateway docs:
  - https://vercel.com/docs/ai-gateway/modalities/decision
  - https://vercel.com/docs/ai-gateway/sdks-and-apis/openai-decisions
  - https://vercel.com/docs/ai-gateway/sdks-and-apis/typesafe
  - https://vercel.com/docs/ai-gateway/models-and-providers/decision-fallbacks
- Gateway model pages and changelogs:
  - https://vercel.com/ai-gateway/models/jev
  - https://vercel.com/ai-gateway/models/gpt-6-luna-decisions
  - https://vercel.com/changelog/liquid-ai-d1-is-available-on-ai-gateway
  - https://vercel.com/changelog/laya-decision-model-now-available-on-ai-gateway-free-through-october-31
  - https://vercel.com/changelog/microsoft-decision-1-now-available-on-ai-gateway
  - https://vercel.com/changelog/openai-decisions-api-now-available-on-ai-gateway
  - https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway
  - https://vercel.com/changelog/confidence-based-decision-fallbacks
- OpenAI: https://developers.openai.com/api/reference/resources/decisions/methods/create
- Third-party (secondary): https://systemonemodels.org/integrations/vercel/ · https://apidog.com/blog/openai-decisions-api/ · https://aiweekly.co/alerts/openai-launches-decisions-api-public-beta-on-gpt-6-luna · https://llmgateway.io/changelog/openai-compatible-decisions-api
