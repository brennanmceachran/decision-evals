# Step 4: old vs new

- **Old:** the `#real-old` chapter. Screenshots are `old-01` to `old-07`, and its text is `old-as-read.md`.
- **New:** the ladder rebuild. Screenshots are in `../step4-ladder/`, and its text is `../step4-ladder/step4-as-read.md`.
- **Both:** `side-by-side.jpg` puts them next to each other, old on the left and new on the right.

Every number below was re-checked against `F.real`, the counts the checker recomputes from the raw answers.

## The two shapes

**Old: a scoreboard, then eight share cards.** It opens with "Nine of 12 sent the tram at the workers most of the time" over a grid of all 22 robots. Then come eight dark, full-bleed findings, each a headline with a big percentage (94%, 100%, 48%, 18×), a photo, a source line and a Share button. There's almost no prose, and the eight findings don't connect to each other.

**New: an argument.** The question is "what if it wasn't a thought experiment?" Then it rules out the excuses (did they believe it, could they see) before showing the outcome. It closes the loop with steps 1 to 3 (the trolley-problem wording), tests two fixes (a safety rule, a brake fault) and ends on who got it right. Clef on the reader's own frame carries the first three beats.

## What the new one does better

- **The story holds together.** The headings alone read as an argument. In the old one they read as eight unrelated facts.
- **It shows what we sent.** The rule and fault requests appear exactly as the AIs got them. The old brake-fault terminal reads "14:19:48 T7 approaching SW-2, scheduled: bay 4 (left)", and that line was never in any request.
- **The live claim has a control.** The trolley-problem version was called "live" in only 8 of 1,248 answers. The old one just says Claude called it live.
- **It explains why it looked real** (the messy log: eleven AIs vs eight). The old one doesn't say.
- **One table answers "they knew and did it anyway"** for every AI: said live, counted correctly, hit the workers, each out of 64. That gives "eight of 13 did all three".
- **The brake-fault theory has its evidence:** in the empty yard, the decision models left the schedule 3 times in 1,152 without the fault line and 90 times with it. The old one has the number and no explanation.
- **The rule result is explained.** Each AI is grouped as fixed, halved or barely changed. The backfire says plainly that the schedule already pointed away from the people. GPT-6 Luna Decisions' strange behavior is explained too.
- **The chat models get their own section,** including the mistake they made that the decision models didn't (three against one) and the cost. In the old one, they're only rows in a chart.
- **Counts instead of percentages, one meaning for red, the same numbers in the body and the hall of shame.**

## What the old one did better, or has and the new one doesn't

1. **Share buttons on every finding.** The new step 4 only has them in the hall of shame. Three share cards can't be reached from the new step at all:
   - `33-brake-fault` (the 9 → 161 card)
   - `28-flip` (the trolley-problem vs routing line-up)
   - `23-lineup` (the "Share the line-up" button)
2. **The second run.** The old one quoted it (brake fault "run 2: 10 → 165"; Perplexity "run 2: 125"). The new one only says "first run". Run 2 matches closely:
   - two workers: 495 of 576 (run 1: 489)
   - trolley problem: 82 of 288 (run 1: 80)
   - three against one: 526 of 576, the same as run 1
   - brake fault: 10 → 165 (run 1: 9 → 161)

   One sentence would cover it.
3. **A hook number.** "18× as often" for the brake fault is memorable without being a percentage. The new one says "9 times in 1,152… With it, 161 times", which is accurate but flat.
4. **Visual impact.** Dark, full-width photos and huge numbers read like a poster. The new one's photos sit inside 900-pixel cards on a light page. That's calmer and consistent with steps 1 to 3, but less striking.
5. **The scoreboard opener.** "Nine of 12" over all 22 robots answers "how many?" before anything else. The new one gets that from the try-it (8 sent it at the workers, 4 didn't on that frame) and the report card, but there's no single all-AI number up front.
6. **The yellow note.** The safety rule shown as a yellow "Never route a tram onto a track where people are present" note over Clef-omni's photo was a strong image. The new one shows the rule as highlighted text in the request.

## What the old one got wrong (fixed in the new one)

- **"12 AIs that can see":** 13 AIs got the dashcam requests, which is where the 37,536 comes from. Twelve answered, because Luna Decisions refused.
- **The brake-fault terminal text** wasn't from the real request (see above).
- **Mixed denominators.** Claude's "94%" is 120 of 128 across two scenes, while the body elsewhere uses the two-workers scene. Clef-omni's "128 of 128" is both runs, while other figures are run 1.
- **The rule backfire was told as a Claude story alone.** It never said the rule should have changed nothing there, or that Luna Decisions went against the schedule both ways.

## What's in neither

- **Speed and latency.** We can't measure them fairly from what we recorded (see the earlier note).
- **Results by depot.** Four depots, never compared with each other. Not needed for the arc.

## Recommendation before locking

1. **Add Share buttons** to the brake-fault card (`33-brake-fault`) and the trolley-problem chart (`28-flip`, with "Share the line-up" for `23-lineup`), so every press card can be reached from the page again.
2. **Add one replication sentence**, probably after the trolley-problem chart: "The second run came out almost the same: 495 of 576 as a routing request, 82 of 288 as a trolley problem; with the brake fault, 10 → 165."
3. **Bring back the hook** in the brake-fault paragraph: "…161 times, about 18 times as often."
4. **Optional:** the yellow rule note on the rule card's opening image, if the rule section feels too plain.

Then lock it: delete the old chapter and its CSS, export the narrative, commit.
