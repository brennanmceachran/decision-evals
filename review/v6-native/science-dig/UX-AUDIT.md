# The old science pages: UX problems, and the fix for each

Sources: the final-study explorer (`site/final/`) and the presentation appendix (`site/present/appendix.html`). Screenshots are in `ux/` and the folder above, at desktop and phone width.

## Finding things

| # | Problem | Seen in | Fix on the new page |
|---|---|---|---|
| 1 | **17 tabs in one strip that runs off the edge.** "Dilemm…" is cut off on desktop, and only 5 tabs show on a phone, with no hint that more exist. | explorer | One long page in the story's order (Method, every AI, step 1, 2, 3, 4, repeatability, the data). A sticky contents list on the left on desktop; a "Jump to" menu on phone. |
| 2 | **A hidden global "Model" picker changes some views but not others.** It starts on Cloudflare Clef for no reason, and highlights a line in Dilemmas and a row in Table. Elsewhere it does nothing. | explorer | No hidden state. Every view shows every AI. An optional "highlight an AI" control marks that AI's row everywhere and says so on screen. It never filters. |
| 3 | **The Run 1 / Run 2 toggle means different things per view.** Some views already show both runs side by side. | explorer | No toggle. Run 1 is shown, with run 2 in small type next to it **only where it differs** ("14 · run 2: 13"). That matches how the story page reports runs. |
| 4 | **Two products overlap and disagree.** The agreement map, race grid and red flags are in both, with different thresholds ("12 of 16, both runs" vs "12 or more"). | explorer + appendix | One page, one rule for each view, stated once, and the same rule the story uses. |
| 5 | **No way to go from a claim to its evidence.** Nothing on the story page points at a particular cell. | both | Every section and every AI has an anchor. Each step's story section gets a "See every number" link into its science section. |

## Reading the data

| # | Problem | Seen in | Fix |
|---|---|---|---|
| 6 | **Jargon:** "weight 62%", "noise band ±7 points", "confident reversals", "crossed 50/50", "G1 ≤ 0.20 mean weight". The story page dropped mean weights entirely. | explorer | Counts only ("12 of 16 versions"). Each term is defined once, in plain words, under the table that uses it. The pre-registered measures are named in Method, where they belong. |
| 7 | **A wall of text before every chart,** often 5 to 7 lines. | both | One sentence saying what the view answers, then the data. The details sit in a "How this is counted" fold below. |
| 8 | **Percentages mixed with counts** ("98%", "first button 70%"). | explorer | Counts everywhere, as on the story page. |
| 9 | **Colors mean different things in each view:** blue for the first-named person, pink heat for hits, an orange/blue scale for race, red dots for flags. | both | The story page's rules: red is a harmful choice (people hit, a life given up), green is almost never, ink is neutral. Identity grids, where there is no right answer, use one neutral diverging scale, explained once. |
| 10 | **"First-named person" is arbitrary,** and readers have to map it back to the question. | agreement map, race grid | Cells name the person: "saved the Black man 16 of 16", never "first-named". |
| 11 | **Different model names** ("Luna D", "MS D-1", "Clef-om", "Solar-fl") from the story page. | both | The story page's short names, everywhere. |
| 12 | **Rotated column labels across 22 columns** are hard to read. | agreement map, race grid | Grids are pivoted so AIs are rows, with names read across. Where AIs have to be columns, the header stays put and the names are spelled out. |

## Touch and phone

| # | Problem | Seen in | Fix |
|---|---|---|---|
| 13 | **Hover-only details** ("hover for run 2", "hover any dot"). Phones can't hover. | both | The numbers are in the cell. Tapping or clicking opens a small panel with the rest; it also works from the keyboard. |
| 14 | **The Any-pair grid falls apart on a phone.** The Run 1 / Run 2 headers stack, and names come loose from their rows. | explorer | One row per AI, with both runs under its name. On a phone the ratio cells wrap under the name. |
| 15 | **Wide tables overflow with no sign of it** (the dashcam table, the race grid on a phone). | both | The first column stays put, with a fade on the right edge, or a card per AI below 640 px. |
| 16 | **Leftover chrome:** the appendix's dark-mode toggle and A1–A13 strip that runs off the edge, and a different serif font from the story page. | appendix | The story page's look and header. |

## What to keep from the old pages, because it works

- **Any pair:** pick two people, then see every AI at every ratio (1:3 to 3:1) as "x of 16". It's the most useful tool we built.
- **The dashcam matrix:** every AI × each condition, plus live and counted.
- **Control questions version by version,** with each version marked by its button order. It shows the button habit directly.
- **The trade curves against each AI's own baseline,** as small multiples.
- **The run 1 vs 2 stability bars.**
- **The predictions table (F1–F6)** from v5's Method.

## Rules for the new page

- Every number comes from the same recount as the story page, and the checker gets tests for it.
- The data lives in its own file (`science-data.js`) so the story page stays fast.
- It's built in sections. Each section is screenshotted at desktop and phone width before moving on.
