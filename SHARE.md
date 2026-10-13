# Headlines and visuals (draft)

Rules for every headline and card:
1. **Literally true.** Each claim maps to one numbered finding in FINDINGS.md, and the card cites it.
2. **Self-contained.** Every image carries the model id, the number, the n, the date and a one-line method on the
   image itself, so a screenshot stripped of context is still accurate.
3. **Describe, don't judge.** Say what the model did and how often. No "racist", "evil" or "broken". Readers can
   draw their own conclusions.
4. **The scene as sent.** Visuals show the actual prompt the model saw, not a dramatized version.

Framing line, used everywhere:
> *Decision models are AI systems sold to make fast, automated choices inside software. They return a probability
> for each option in under a second. We gave 17 of them, plus 3 chatbots, the trolley problem and its relatives,
> 40,000 times.*

That wording matches the vendors' own catalog descriptions ("classification, routing, guardrail checks"). Don't
claim they are deployed in robots or cars unless a source says so.

## Headlines

| # | Headline | Finding | Visual |
|---|---|---|---|
| H1 | **"One AI read the scene perfectly, then chose to kill five people instead of one."** (Solar Decide Flash, 72% of the time.) | F1 | The actual prompt, with the model's probability bar filling toward "move the lever right, 5 people die". |
| H2 | **"5 of 17 AI decision models fail a basic test: don't kill people for no reason."** | F1 | A 17-tile grid of models, with green/red ticks on the two controls. |
| H3 | **"Would you operate on a healthy man to save five patients? 8% of people say yes. Microsoft's decision model: 96%."** | F3 | Side-by-side bars, human vs each model. |
| H4 | **"How many adults is one baby worth? AI models answer anywhere from 1.6 to 7.6."** | F6 | A balance scale: one baby, with adult figures added until it tips. One scale per model, or an animated scale that tips at different points. |
| H5 | **"Asked to choose between one Black man and one White man, 6 AI models didn't treat them as equal. Every bias ran the same direction."** | F7 | A strip chart: one dot per model on a 0–100% axis, a line at 50% (equal) and a shaded band for placebo noise. Flagged models sit outside the band. |
| H6 | **"One AI refuses to choose between races, but only when the numbers are equal."** (GPT-6 Luna Decisions, up to 38% refused.) | F8 | The prompt, then a "REFUSED" stamp at 1:1 that disappears at 2:1. |
| H7 | **"Every AI pulls the trolley lever. They split on everything harder."** | F2 | The disagreement grid: 5 dilemmas × 12 models, coloured by choice, with uniform green turning to mixed. |
| H8 | **"How many lives before an AI will push a man off a bridge? Somewhere between 2 and 433."** | F4 | The flip grid: per model, the count on the track ticks up and its lever flips at that model's threshold. |
| H9 | **"These AIs push the man, then say it's wrong."** | F10 | A dumbbell chart: "does it" vs "says it's acceptable", per model. |
| H10 | **"Same AI, different API, different morals."** (GPT-6 Luna, chat vs Decisions.) | F11 | Two cards side by side, with three numbers that differ. |
| H11 | **"Some AIs pull the lever even when it changes nothing."** | F9 | 1 vs 1 on the tracks, and each model's P(pull), from 0% to 98%. |
| H12 | **"Each of these decisions took about 0.3 seconds and cost a thousandth of a cent."** | F14 | The split-second loop video (hero asset). |

The strongest combined thread is **H1 → H3 → H5**: models that misread nothing still choose more deaths, override
human intuitions, and treat people unequally by race. It is all measured, and all reproducible.

## Formats
- **Hero video (8–12 s, vertical):** a trolley animation; 17 probability bars fill at measured latency; the lever
  snaps; the end card reads "17 models. 0.3 seconds. They didn't agree."
- **Share cards (1080×1350):** one per headline, with the method strip at the bottom. Each is generated from
  `site/data/*.json`.
- **"Which AI are you?" quiz:** the share loop. Visitors answer 8 of the same prompts and get their nearest model
  plus a card to post.
- **Thread / carousel:** H7 (hook) → H1 → H3 → H4 → H5 → H9, ending on the method and repo link.

## Before launch (recommended)
1. **Confirmatory replication.** Re-run the headline findings with new, never-seen wordings under a fresh
   pre-registration. Viral claims get stress-tested, and a replication turns "pilot" into "replicated". Estimated
   ~$3 and about an hour.
2. **Vendor notice.** Send each named vendor its own results about 7 days before publishing, and include any
   responses. This is standard for public evaluations of commercial systems, and it removes the "they never asked
   us" counterattack.
3. **Methods page live first.** Every card links to it.
