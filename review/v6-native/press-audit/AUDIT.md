# Press section audit

`cards.txt` lists all 39 published cards (rank, tier, whether the page shows them, and their headlines). `all-cards.jpg` puts them all on one sheet. `press-1.png` and `press-sheet.png` show the section and the share sheet as they render now.

## What the section is today

A dark band with the heading "Take any of these." Under it are the first 12 cards in the order list as small images (click one to open the share sheet), then a zip of all 39 cards in every size and two animations. That's all. There's no grouping, no headlines in text and no link to the story.

## Problems

### The cards haven't kept up with the story

The steps were rewritten and locked, but the cards weren't. Nine cards say something the story no longer says, or say it differently:

| Card | Card says | Story now says |
|---|---|---|
| 13-organs | "**10 of 22** AIs would kill a healthy man… (each run on its own: 11 and 11)" | Ten went all the way. The card's top number is its own "both runs" figure, which is fine, but the proof line confuses it with 11. Should match step 2 exactly |
| 14-footbridge | "**73%** of AIs would push a man…" | "15 of 22" (both runs). 73% is 16 of 22, one run |
| 33-brake-fault | "AIs that hit the workers 1% of the time now hit them 14%" | "9 times in 1,152… with it, 161", about 18 times as often. Percentages, a different framing |
| 32-rule-backfired | "Claude sent the tram at the workers **48%** of the time" | "4 times in 128… 62 times", and that the rule backfired on **two** AIs |
| 05-split | "100% spared / 98% hit", "64 of 64 / 125 of 128, both runs" | "32 of 32 / 61 of 64" (first run, the try-it scene) |
| 28-flip / 23-lineup | Share-of-requests dumbbells, "run 1" | The same data, but as counts: "80 of 288 vs 489 of 576" |
| 04-rule | "It broke it **100%** of the time", 128 of 128 at the larger group | "64 times in 64" (two workers) |
| 06-fork-age, 07-fork-wealth, 37-jev, 17-picture | 91%, 63%, 18%, 29% | The story gives counts (29 of 32, 20 of 32 and so on), and the step 3 lowlights changed |
| 38-luna-counted | "100% of the time" | In the step 4 rebuild, the story no longer features GPT-6 Luna's three-against-one frame (it's in the hall of shame only) |

The story's rule since step 1 is **counts, not percentages**. Most of the original 27 cards still headline with a percentage. The cards made for each step's lowlights and hall of shame (50–65) already use counts or plain words.

### Cards with no home on the page

Twelve cards are published but no part of the story leads to them: 11-samebase, 16-empty, 08-fork-35v80, 14-footbridge, 17-picture, 39-three-for-one, 40-nace-upgrade, 25-backing (now drawn differently on the page), 13-organs, 01-photo (the opening only), 34-acceptable, 23-lineup. Some repeat a step's own card (16-empty is 50-low-laya with a percentage; 17-picture is 55-low-flash). And **"Copy link" goes nowhere for them**: links use `#f-<card>`, and no element on the page has that id for those twelve, so the link just opens the top of the page.

### Step 4's new findings have no cards

The rebuilt step 4's headline findings aren't cards:
- "Eight of 13 said it was live, counted the workers, and drove into them"
- "Ten of 13 said a live system"
- "the brake fault hit the chat models too"
- "six predictions, all held"

Its hall of shame reuses old cards, some with old numbers (32-rule-backfired, 04-rule).

### The section itself

- **Order:** it shows the "first 12" by an old ranking, so the four steps aren't represented evenly. Step 1 has none in the top 12, and step 2 only two.
- **Thumbnails only:** with nothing written beside them, a journalist can't scan the claims.
- **No explanation for a journalist:** nothing on what's in each size, how to credit it, what the proof line means, or where the evidence is.
- **The zip is 39 MB** and holds every size of every card, including outdated ones.
- **The two animations** are unlabeled ("Animation 2").
- **Broken links:** see above.

## Proposal

**1. One rule for every card.**
- The headline says exactly what the story says, as counts.
- The proof line gives the same figures as the story, and the run.
- Every card has a place on the page that "Copy link" scrolls to.
- The checker matches each card's drawn text against the story's numbers (most of that already exists).

**2. Each card's place:**
- **Keep and update:** the cards each step's hall of shame and lowlights already use (step 1: 50–55; step 2: 60–65; step 3: its six; step 4: its six), with their numbers fixed.
- **Retire:** cards that repeat a step card or that the story dropped: 16-empty, 17-picture, 14-footbridge, 13-organs (step 2's own is clearer), 38-luna-counted, 23-lineup, 39-three-for-one, 40-nace-upgrade, 08-fork-35v80, 11-samebase.
- **Add, for step 4:** "said live, counted them, drove into them" (Clef-omni on the reader's frame), and "a brake fault took the decision models from 9 to 161".

**3. A press section built for a journalist:**
- **By step:** cards grouped under the four steps, each with its headline in text, its proof line, the share sheet, and a "See it in the story" link.
- **A short "Using these" note:** the four sizes, the proof line printed on every image, "Credit: The Trolley Tests", and that the numbers are counts with the run named.
- **The headline numbers in text, ready to quote:**
  - 761,940 answers, 22 AIs
  - six predictions, all held
  - the step headlines
- **Downloads:** one smaller zip (current cards only) and the animations with plain labels.

## Decisions for you

1. **Retire the ten cards listed?** They stay in v5. This removes them from v6 and its zip.
2. **One new step 4 card, or two?** "Said it was live, counted the workers, and drove into them" (Clef-omni on the reader's frame) is the clear lead. The brake-fault card exists; it just needs its numbers fixed.
3. **Keep the animations?** They're 4 seconds each (the depot frame and the fork). I'd keep the depot one and label it.
