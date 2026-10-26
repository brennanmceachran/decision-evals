# Step 4, read as a reader meets it

The full rendered text is in `step4-as-read.md`. The screenshots are `s4-01.png` to `s4-12.png` (`s4-13` is the old step 4, still below the new one until we lock it). The whole step stitched into one image is `step4-full.jpg`.

## The drunk test: headings only

1. The same choice, as a job
2. The same picture, two framings
3. They counted the workers, then hit them
4. Most of them thought it was real
5. Three workers or one
6. A safety rule fixed some, missed others, and made one worse
7. Two of the chat models were different
8. When the brakes fail
9. What we learned

A skimmer reading only the headings gets three findings: they counted the workers and hit them, they thought it was real, and the rule was mixed. Four headings are topics, not findings: "two framings", "three workers or one", "two of the chat models were different" and "when the brakes fail". Step 3 got better once every heading said what happened, and step 4 needs the same treatment.

The one-sentence story a skimmer should leave with: **call it a job instead of a trolley problem, and the AIs built for the job drive into workers they can see, count, and believe are real.** The page has that story, but it's spread over sections 1 to 4, with sections 5 to 8 added on afterwards.

## Size

- **Length:** 2,812 words and about 12 screens. Step 3 is 1,878 words.
- **Charts:** nine 13-row charts or tables, plus five photo close-ups and the hall of shame.
- **The live section has grown the most.** It now has two charts and two paragraphs.

## Narrative problems, most important first

1. **The cost claim is wrong for GPT-6 Luna.**
   - The page says "And they cost more" and, in What we learned, "though they made other mistakes and cost more".
   - The table shows the price per try. Per try, GPT-6 Luna ($0.055 per 1,000) is cheaper than five decision models (Clef, Clef-omni, Jev, Luna Decisions, d1-ultra).
   - The "73 times" figure compares Gemini to the cheapest decision model only.
   - Per answer (five tries), the chat models do cost more, but the table doesn't show that unit.
   - Fix: pick one unit (per answer is how we actually used them) and say the comparison plainly. Or drop cost.

2. **"Made one worse" describes two.** The paragraph under that heading covers Claude Haiku (4 → 62) and GPT-6 Luna Decisions (refused, then hit 55 of 68 once the rule was there).

3. **The rule chart contradicts the next paragraph at a glance.** The chart shows the rule helped Claude (61 → 6 on the two-workers scene). The next paragraph says the rule made Claude worse, on a different scene (schedule already safe). Nothing tells the reader the scene changed between the two. It needs one bridging sentence, or the backfire numbers shown in the same chart.

4. **The order breaks the argument.** Framings → counted → live → *three or one* (back to framings) → rule → *chat models* → brake fault. "Three or one" repeats the framings comparison on a different scene, so it belongs next to it. The chat-models section interrupts the run of things we added to the request (rule, then fault). And its closing line, "GPT-6 Luna Decisions refused every routing request", has nothing to do with chat models.

5. **The chat models' story is told three times in three places:**
   - the opening verdict ("Two general chat models mostly refused…")
   - the counting section ("Two chat models did the opposite")
   - their own section, which says it again with a table

   Each repeats the main point (2 and 1 of 64) without moving it forward.

6. **Red means different things in different charts.**
   - In the framings, live and three-or-one charts, red means "asked as a routing job".
   - In the rule and fault charts, red means "hit people", and green means almost none.
   - In the live-or-test split chart, grey and red are just the two columns, and both show hits.
   - A skimmer who learned "red = routing job" misreads the rule chart, and vice versa.

7. **The same facts appear three times, sometimes with different numbers.**
   - Clef-omni and the rule: 64 of 64 in the paragraph and the lowlight, but 128 of 128 in the hall of shame (both runs, a different scene).
   - Claude's backfire (4 → 62): in its section, a lowlight and the hall of shame.
   - Perplexity's 32/32 vs 61/64: in its section and the hall of shame.
   - Claude "live": 361 of 384 in the photo caption, its old paragraph and the hall of shame. It also uses a different hit count (120 of 128, two scenes) from the one in the body (61 of 64).
   - "GPT-6 Luna Decisions refused": about five times.

8. **The counting section's numbers don't match its own headline.**
   - The headline is "Eight of the 12".
   - The paragraph says "Seven decision models… two chat models did the opposite… Claude Haiku is different again".
   - The eighth (Claude) is described as "different", so the reader can't make the eight add up.

9. **What we learned is a 9-sentence recap**, plus 3 highlights and 7 lowlights. Steps 1–3 kept it to a few sentences. "Seeing them didn't decide it" is a finding, not a highlight.

10. **There are still percentages where counts would do**: 28% / 85% and 26% / 91%. Everything else in the step uses counts.

11. **The live section has more than a skimmer needs.**
    - The headline finding ("most thought it was real") is clear.
    - The second chart (hits split by live/test) needs the reader to compare two red/grey columns, and its answer is "no difference", which is hard to see.
    - One sentence carries the point better: "Clef called it live 124 times and hit the workers all 124."

12. **The names drift**: "workers" and "people", "requests", "answers", "tries" and "samples", "Claude Haiku 5.5", "Claude Haiku" and "Claude", "Cloudflare's Clef", "Cloudflare Clef" and "Clef", "GPT-6 Luna Decisions" and "Luna Decisions".

## What works

- **The lede and try-it:** concrete, and they set up the trap.
- **The framings chart and the Perplexity pair:** the clearest evidence on the page.
- **Clef's Q&A at the top of the counting chart:** the best single "how we know" visual in the step.
- **"Most of them thought it was real", with Claude's bubble:** the most quotable finding, and it's well placed.
- **The brake-fault section**, now that the request is shown and the theory is spelled out, backed by the empty-yard evidence (3 → 90).

## Suggested shape (about 1,900 words)

1. **Lede, try-it, verdict.** Three sentences: the routing-job result, the counting result and the live result.
2. **"Call it a job, and they hit the workers."** The framings chart, the Perplexity pair, then three-or-one as a second chart with one sentence (counts, not percentages).
3. **"They counted the workers, then hit them."** Clef's Q&A, then the strip. The paragraph explains the eight, and leaves the chat models to section 7.
4. **"Most of them thought it was real."** The live chart with Claude's bubble, then one paragraph: the log made it look real, and believing it didn't help (Clef 124/124). Drop the second chart.
5. **"A safety rule fixed some, missed others, and made two worse."** The request, the chart, then a bridging sentence into the backfire card.
6. **"A brake fault made them reroute into people."** The request, 9 → 161, the theory, the per-AI chart.
7. **"Two chat models wouldn't follow the schedule, and made other mistakes."** The table with the cost fixed. The Luna Decisions refusal moves into the rule section or the methods line.
8. **What we learned.** Three sentences. Three highlights and three lowlights, none repeating the hall of shame word for word. The hall of shame uses the same numbers as the body.
