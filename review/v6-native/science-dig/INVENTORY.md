# Where the science went: an inventory

Built by opening every older site, reading its headings, screenshotting the data views (`*.png` in this folder) and checking the old session transcripts. The "computation version" you remember is **`site/final/` (the final-study explorer)**, plus **`site/present/appendix.html`**. Both were built on Oct 18, before v4-summary, which was the infotainment one-pager you rejected.

## What exists

### 1. The final-study explorer: `site/final/index.html` (3.7 MB of data)

One page with a model picker, a Run 1 / Run 2 toggle and 17 tabs:

| Tab | What it shows |
|---|---|
| Findings | headline cards, each with its counts |
| Models / Table | every decision model at a glance: basic checks per run, leans out of 196 pairs (strong / lean / slight), tram sent at workers, identical answers between runs, confident reversals |
| By trait, Leagues, Traits | per-trait results, league tables (who each AI saves first and last) |
| **Any pair** | pick any pair (e.g. Black man vs White man): every model × every ratio (1:3 … 3:1), "x/16" cells, run 1 and run 2 side by side |
| Same base | products built on the same Qwen model, compared |
| Outnumbered | one saved over two or three |
| Agreement | questions where 4+ models take the same side |
| Steering, Framing, Pictures | dashcam steering, trolley problem vs routing job, words vs pictures |
| Basic checks, Dilemmas | control questions; every dilemma at every number of lives |
| **Dashcam** | every vision model × routing / + operator config / + safety rule / + brake fault / called it live / counted right, as "x/128" cells, chat models included |
| **Run 1 vs 2** | how much each model's answers moved between runs; crossings; confident reversals |

### 2. The presentation and its appendix: `site/present/`

The main page is 11 findings chapters. The appendix runs A1–A13:

| Section | Contents |
|---|---|
| A1 | Agreement map |
| A2–A5 | Gender identity, sexuality, record/body/politics, women vs men: one strip per pair, every model, both runs |
| A6 | Every trade, every model: 79 decision-model cases and 17 chat-model cases, each a small curve from 1:3 to 3:1 against the model's own baseline |
| A7 | Red flags: 11 kinds of failure × every model, both runs |
| A8 | Acting vs judging, both directions |
| A9 | Refusals by kind of question |
| A10 | Same base model, every family |
| A11 | Every dilemma, every number of lives |
| A12 | Control questions, version by version |
| A13 | Full race and nationality grids |

### 3. v5: `site/v5/index.html`

- **Data sections:** lever (3,759 px), traits (12,500 px), dashcam, "Did we test fairly?", tips, a report card, and **Method**.
- **Method:** the pre-registration and **the six pre-registered predictions (F1–F6), scored run by run**. That table is the single most "science" thing we have, and it exists only in v5.

### 4. The v6 "How we know" section today

It's short: three boxes ("Rules first", "761,940 answers, $77", "What it doesn't show"), the model table, then **links out to v5 anchors** and to GitHub.

## What's wrong with the current state

1. **v6 sends readers to v5 for the evidence.** v5 uses older framing and rules: percentages, "11 of 22" for the organs where v6 says ten, different selection rules. A reader who clicks through finds numbers that don't match the page they came from.
2. **The explorer and appendix aren't checked by v6's checker.** They come from older builders (`scripts/final-explorer.ts`, the present builder) with their own rules. One example: the appendix shows a trade if the model saved the lone person in 9 or more of 16 versions and that's at least 4 more than its baseline. Step 3 uses "beyond its own noise, every run". Both are defensible, but they won't always agree.
3. **The raw answers aren't public anywhere.** `results/` is gitignored, so the GitHub repo has the code and the checker but none of the 761,940 answers. Nobody outside can rerun "the test that recounts this page".
   - Size: run 1 is 364 MB raw and 30 MB gzipped, run 2 about the same, stage 2 (the chat models) 60 MB raw and 3 MB gzipped.
   - There's already a `stage1.sha256` file for checksums.
4. **The pre-registered predictions aren't on v6 at all**, and neither are the amendments.

## Proposal

**A separate page, `site/v6/science.html`.** It would cover the explorer and appendix ground in v6's look, with every number recounted by the same checker. The "How we know" section on the story page becomes a short summary that links into it, instead of into v5.

| Part | Contents | Built from |
|---|---|---|
| 1. Method | the pre-registration (frozen Oct 16, commit, design hash), **the six predictions and how each did in each run**, the amendments, what it doesn't show | v5 Method, PREREGISTRATION-FINAL.md |
| 2. Every AI | the model table (already on v6), with links to each AI's row in every grid | v6 + explorer Table |
| 3. Step 1, in full | controls version by version; words vs pictures per AI | explorer Basic checks / Pictures, appendix A12 |
| 4. Step 2, in full | every dilemma × every number of lives × every AI; acting vs judging | appendix A11, A8 |
| 5. Step 3, in full | **Any pair** (pick a pair: every AI, every ratio, both runs), the agreement map, every trade, same base, race and nationality grids | explorer Any pair, appendix A1, A6, A10, A13 |
| 6. Step 4, in full | **the dashcam matrix** (every AI × every condition × live × counted), by depot, by log wording | explorer Dashcam |
| 7. Repeatability | run 1 vs run 2 per AI; refusals; red flags | explorer Run 1 vs 2, appendix A7, A9 |
| 8. The data | **downloads**: the questions, every answer (run 1, run 2, chat), the analysis output, a data dictionary, checksums; how to run the checker | results/final, scripts |

## Decisions that are yours

1. **A separate page or one long section?** I'd go with a separate page: the explorer alone has 17 tabs.
2. **Raw data hosting.** The gzipped answers come to about 65 MB.
   - Option one: put them in the site bundle under `site/v6/data/`.
   - Option two: build the files locally and have the page point at a release you publish.
   - Either way, I'll only prepare files; nothing gets uploaded.
3. **Which rule wins where the old views disagree with v6** (the trade selection rule, the "lean" levels). I'd use v6's rules everywhere, and keep the pre-registered strong/lean/slight levels in Method, since that's what was frozen.
