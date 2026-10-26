# Step 4 (ladder draft): do the figures carry the arc?

The skim path is: heading → the first few words of each paragraph → the figure's title and what the eye catches in it → next heading. Below is what that path reads like with the figures we have today, put where the ladder draft places them.

## The skim path today

| Beat (heading) | Eye lands on | What the figure says at a glance | Verdict |
|---|---|---|---|
| What if it wasn't a thought experiment? | Try-it: "What the AIs saw, exactly", then "8 sent it at the workers" | The trap, and that most AIs fell into it | Works |
| Did they believe it was real? Most did. | Claude's "A live system." bubble, **over a red route and skulls**, on a frame the reader hasn't seen. Then a 13-row chart in **red** | The kill, before we've claimed it. Red reads as "hit people" | **Jumps ahead.** Also a new depot and a new AI |
| Could they see the workers? Yes. | Clef's card: **"Set the switch left. Toward the workers"** in a red box, before the green "2" and "0" | The kill again, before the counting | **Jumps ahead** |
| So they believed it, saw them, and drove into them. | The strip: "Of the requests where it counted both tracks correctly, how many did it still send at the workers?" Denominators 64, 63, 62, 60, 33, 55… | A conditional percentage. It doesn't show "believed" at all | **Hard to read, and only half the heading** |
| Called a trolley problem, the same AIs spared them. | Two 13-row two-column charts back to back, then the Perplexity pair | Lots of rows; the clearest proof (the pair) comes last | Works, but **the strongest figure is buried** |
| We told them to be safe. Some still weren't. | The request with the rule highlighted, then without vs with the rule. **Claude goes 61 → 6** | "The rule fixed Claude", then the paragraph says it made Claude worse | **Contradicts the next beat** |
| When the brakes failed, they got worse. | The fault line highlighted, then **9 → 161** | Exactly the heading | Works |
| (our theory) | Per-AI fault chart | Per-AI numbers, **not the empty-yard evidence the theory rests on** | Doesn't back the paragraph it follows |
| Who got it right? Two chat models. | 5-row table with mixed denominators and a cost row | First row tells it (61 / 2 / 1); the rest is noise | **Too much** |

## What's wrong across the whole step

1. **Red means two things.** In the framings, live and three-or-one charts, red means "asked as a routing request". In the rule and fault charts, it means "hit people". The skim reader learns one meaning and misreads the other charts. Fix: red is only ever hits. Green is spared or almost never. Neutral measures (said live, counted) are in ink.
2. **Figures give away the next beat.** The ladder holds back the kill until beat 3, but the beat 1 and 2 figures both show it.
3. **The cast changes in every figure:** Claude on a wet depot, then Clef on your frame, then Perplexity, then Claude again. The reader can't follow one thread.
4. **Six full-width per-AI charts.** That's too many for a skim; the eye stops reading rows after the second.
5. **The Perplexity pair says "on the frame you answered at the top"**, but its numbers (32 of 32, 61 of 64) are all four depots. Either use that frame's numbers or say "on frames like it".
6. **Row order changes in every chart** (each is sorted by its own measure), so "Clef" is in a different row every time.

## The fix: one AI, one frame, one reveal

The reader already answered one frame (two workers, the brick depot). On that exact frame, Cloudflare's Clef, in every request and both runs:
- said "a live system" 8 times in 8
- counted "2" and "0" 8 times in 8
- sent the tram at the workers 8 times in 8.

So Clef can carry beats 1 to 3 on the reader's own frame, one reveal at a time.

| Beat | Figure | Title (the eye lands here) | Colors |
|---|---|---|---|
| 1. Believed it? | **Your frame, no route.** Clef's speech bubble: "Live system, or a test?" "A live system." Then the per-AI chart (trolley problem vs routing request) | How many times each AI said the request came from a live system | Ink bars, no red |
| 1b. (optional) What convinced them | The tidy log next to the messy log, each with its count: 8 of 13 vs 11 of 13 said live | The same request, written two ways | Ink |
| 2. Saw them? | **Your frame, still no route.** Bubble: "How many on each track?" "Left 2, right 0." Then one line: the nine decision models counted both tracks correctly 569 times in 576 | How many people are on each track? | Ink, with green ticks |
| 3. Drove into them | **Your frame, now with the red route and skulls:** "Then Clef set the switch left, toward the workers. 8 times in 8." Then **one report card** for every AI on that request: said live, counted correctly, hit the workers, each "x of 64" | Every AI, the request you answered: what it believed, what it counted, what it did | Only the last column is red |
| 4. Trolley problem | **Perplexity pair first** (green 32 of 32 vs red 61 of 64), then **one** framings chart. Three-or-one becomes a sentence, and stays in the hall of shame | The same AI, the same frames, two wordings | Both chart columns red for hits, green for almost never |
| 5. Rule | The request with the rule highlighted, then the rule chart for **decision models only, grouped Fixed / Halved / Missed**. Then the backfire card (Claude, the schedule pointing away) | What the safety rule did, AI by AI | Red hits, green almost never |
| 6. Brakes | The request with the fault line highlighted, then 9 → 161. Then, **for the theory, the empty yard**: the empty frame with the tram rerouted and a "nobody here" tag, 3 → 90. Cut the per-AI fault chart (Mercury's 7 → 65 goes in the text) | One line in the log, and they left the schedule | Red hits |
| 7. Chat models | A compact table, **three rows**: hit the two workers; hit the three when the schedule pointed at the one; said live. Cost becomes the sentence it already is | Two chat models avoided the workers, and made a different mistake | Red / green |

That's four per-AI charts instead of six, each one backing exactly one heading. The three Clef frames read as a sequence: neutral, then counted, then the route. The reader who answered the try-it watches their own frame play out.

## What this needs

- **One new recount** (from the raw answers, no API calls): for every AI, on the two-workers routing request with the schedule pointing at them, how many said live, counted correctly and hit them, each out of 64. The beat 3 headline number would then come from the report card instead of the conditional ("8 of the 12"), and might change. The checker gets a test for it.
- **The bubble-over-frame drawing already exists** (Claude's "A live system."). It just needs to go on the try-it frame, with the route turned off for beats 1 and 2.
- **The empty-yard frame with a "nobody here" tag:** the photo helper supports the tag, but I'd need to check we have the reroute drawn for an empty frame.
