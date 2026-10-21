# Decision models: launches and adoption (read 2026-10-21)

Used by site/v6's intro. Every figure here is copied from the page named, on the date above. OpenRouter counts only
requests routed through OpenRouter; it is a floor on use, not a total.

## OpenRouter, Decision Model Rankings (https://openrouter.ai/rankings/decisions, "usage data through Oct 20, 2026")

Daily decision requests across OpenRouter (chart tooltips, "Total"; the first four days show one model only):

| Day | Requests | | Day | Requests |
| --- | --- | --- | --- | --- |
| Sep 21 | 82.4M | | Oct 6 | 160M |
| Sep 22 | 83.6M | | Oct 7 | 165M |
| Sep 23 | 126M | | Oct 8 | 165M |
| Sep 24 | 141M | | Oct 9 | 167M |
| Sep 25 | 132M | | Oct 10 | 171M |
| Sep 26 | 128M | | Oct 11 | 158M |
| Sep 27 | 121M | | Oct 12 | 191M |
| Sep 28 | 132M | | Oct 13 | 187M |
| Sep 29 | 139M | | Oct 14 | 221M |
| Sep 30 | 161M | | Oct 15 | 213M |
| Oct 1 | 154M | | Oct 16 | 226M |
| Oct 2 | 147M | | Oct 17 | 192M |
| Oct 3 | 123M | | Oct 18 | 171M |
| Oct 4 | 114M | | Oct 19 | 227M |
| Oct 5 | 149M | | Oct 20 | 257M |

(Oct 21 showed 185M, a partial day; not used.)

Market share by author, week beginning Oct 12, 2026 (share of decision requests; change in requests vs the week
before): TypeSafe 80.0% (+7%), Perplexity 4.8% (+332%), Nace.AI 4.4% (+668%), Cloudflare 2.8% (+133%), Inception
2.1% (+150%), OpenAI 1.8% (+54%), Liquid 1.5% (+454%), Microsoft 1.1% (+110%), Jared Palmer 0.9% (new), all other
authors 0.6% (+77%).

Top models this week: Jev 1.13 956M requests (-10%), Jev 1.14 257M (new), Drex v1.5 38M (+103%), Decider V1.1 27B
36.5M (+19%), Decider V1.2 28.8M (new), Clef 25.3M (+216%), GPT-6 Luna Decisions 24M (0%), Mercury Decide 21.6M
(+186%), Drex v2.0 21.5M (+336%), Clef Flash 20.4M (+72%).

## OpenRouter, LLM Rankings (https://openrouter.ai/rankings, "Top models by task")

Classification: "11.6% of all spend" (share of spend on OpenRouter, the task decision models are built for).

## Launches

- Jev (TypeSafe AI): early access 2026-09-15. Named after William Stanley Jevons (1865: more efficient steam engines
  made Britain burn more coal, not less); the founder, Diogo Almeida: cheaper machine judgement will be used far more
  widely; "the goal is for code to be the consumer"; "as routinely as a database query".
  (https://dealroom.co/news/157162-what-is-jev-typesafe-ais-decision-model-for-software/, https://madewithjev.com/what-is-jev)
- OpenAI Decisions API (GPT-6 Luna Decisions): announced at DevDay, 2026-09-29. (https://vercel.com/i/what-are-decision-models)
- Cloudflare Clef and Clef-flash, Perplexity pplx-decider: 2026-10-01. Microsoft Decision-1 and Cloudflare Clef-omni:
  2026-10-09. (https://kai-waehner.de/blog/2026/10/20/how-decision-models-became-a-new-ai-category-after-jev,
  https://vercel.com/changelog/microsoft-decision-1-now-available-on-ai-gateway)
- Perplexity Decider v1.2: about 2026-10-16/17. (https://vercel.com/changelog/perplexity-decider-v1-2-models-now-available-on-ai-gateway)
- Vercel: Jev reached "35 percent of paid AI Gateway teams within two weeks" (as reported by Kai Waehner, above).
- The risk, named: Sophos, "Jev's Paradox: the hidden cost of cheap AI decisions": cheap decisions get automated
  everywhere, so any error rate above today's adds up to more mistakes.
  (https://www.sophos.com/en-us/blog/jevs-paradox-hidden-cost-of-cheap-ai-decisions)
- Advertised uses: routing form submissions, triage by urgency, checking agent traces, guardrails, scoring.
  (https://vercel.com/i/what-are-decision-models)

This study's design froze on 2026-10-17, so the 19 decision models were tested within five weeks of the first launch.
