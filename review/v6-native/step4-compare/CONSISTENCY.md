# Step 4 against the intro and steps 1 to 3

I read all four steps and the intro as they render now (`live-study.md`, `live-obvious.md`, `live-hard.md`, `live-impossible.md`, `live-real.md`), screenshotted a figure from each step (`style-*.png`), and re-checked the numbers below against the raw recounts.

## Already consistent

- **Skeleton:** lede, try-it, the "we asked N of these" sentence, sections, What we learned, Highlights, Lowlights, "And now, the hall of shame.", six cards, handoff. Step 4 follows it.
- **Step 3 hands off to step 4:** "Next: the same AIs at a real job, where the stakes are real." Step 4 opens with "Steps 1 to 3 were thought experiments." That's the circle you wanted.
- **"The 13 AIs that can see pictures"** is the same group as step 1's picture section.
- **"First run (chat models: their one run)"** and "the majority of five tries" use the same wording as steps 2 and 3, and the intro.
- **Figures:** white cards on the light page, like step 3. Red route and skulls, and a green tick for spared, like step 1.
- **Length:** about 2,400 words, close to step 3's 2,450. Steps 1 and 2 are shorter: about 880 and 1,440.

## Inconsistent: fix before locking

1. **The hero names an AI that isn't in step 4.**
   - The opening line says "We gave AIs from OpenAI, Anthropic, Google, **Microsoft** and others the same dashcam frame". Microsoft Decision-1 can't see pictures and never got a dashcam request. Swap in Cloudflare or Perplexity.
   - The hero also says "Cloudflare's AI sent it at them 16 times out of 16". That's Clef-omni, while step 4's reveal uses Clef. On that frame, in both runs, **both** Clef and Clef-omni said live, counted correctly and hit the workers 8 times in 8. Either name the model in the hero, or switch the step 4 reveal to Clef-omni. That second option gives one AI from the hero to the hall of shame: Clef-omni also ignored the safety rule, 64 of 64, and also said "live" 124 times and hit the people all 124.
2. **"Already" vs "will".** The intro says "Nobody sells them for life-or-death calls. But … they **will** end up wired into systems that make them." Step 4's lede says models like these "are **already** being wired into systems that act in the world" and that they're "sold to make the call". Match the intro: "they're sold to make calls like this one, and they will end up wired into systems where the call is life or death."
3. **The second run is never mentioned.** Steps 1 to 3 always say "both runs" or "run 2 within N". Step 4 only says "first run". The runs agree:
   - pooled numbers match within 6 requests (two workers: 489 vs 495 of 576; trolley problem: 80 vs 82 of 288; three: 526 both; brake fault: 9 → 161 vs 10 → 165)
   - the biggest single-AI gap is 6 of 64 (d1, three against one, with the rule)

   Add "(second run within 6 requests)" to the captions, plus one sentence in the text.
4. **The Highlights and Lowlights are lighter.** Steps 1 to 3 each have five highlights and four lowlights. Step 4 has three and three. Candidates, all already in the body:
   - Highlight: **"Perplexity Decider obeyed the rule every time"** (0 of 64 with it).
   - Highlight: **"It wasn't the buttons this time."** See 6 below.
   - Lowlight: **"The rule didn't reach Clef-omni"** (64 of 64 with it).
   - Lowlight: **"The rule backfired"** (Claude 4 → 62).
5. **No Share buttons in the body.** Steps 2 and 3 have two or three in-body share buttons (organs, "acceptable", backing, Jev, podium). Step 4 has none, so `33-brake-fault`, `28-flip` and `23-lineup` can't be reached (see AUDIT.md).

## Cross-step callbacks worth adding

Step 3 has the only real callback in the article ("You've seen this already… In step 1, Clef-omni…"). Step 4 has three natural ones:

6. **The button order didn't decide it this time.** Step 3's biggest finding is that the first button decides. In step 4, with two workers and the schedule pointing at them, the decision models hit the workers 244 times in 288 with one button order and 245 with the other. That rules out the step 3 explanation, and fits the ladder ("we ruled out the excuses"). One sentence in the "drove into them" section.
7. **Step 1 already showed counting and killing.** Step 1's sharpest finding: Clef-flash counted the people right and said they'd die, then sent the trolley at the larger group. Step 4's "Could they see? Yes, and they counted them" is the same finding with a real camera. A callback: "In step 1, shown a drawing, Clef-flash counted the people and sent the trolley at them anyway. With a camera frame, most of them did."
8. **The chat models.** Step 1 says the chat models held up better with pictures (Claude Haiku 88%, GPT-6 Luna 88%, Gemini 79%). In step 4, two of three held up, but Claude Haiku drove into the workers. Worth one line in the chat section, so the reader sees the pattern, and its one exception, across steps.

## Fine as is (deliberate differences)

- **Headings as question and answer** ("Did they believe it was real? Most did.") are unique to step 4. That fits it being the investigation, so I'd keep them.
- **No percentages in step 4**; steps 1 to 3 still use a few (89%, 95%, 71%, 8%, 88%, 2%, 13%). Step 4 follows your counts rule more strictly. Steps 1 to 3 are locked, so I'd leave them.
- **"Tram" instead of "trolley":** it's a depot. The trolley-problem wording in step 4 also says "runaway tram", so the comparison stays fair.
- **The hall of shame includes chat models**, unlike step 1's "Every one of these AIs is a decision model". Steps 2 and 3 include Gemini too, so this is consistent.
- **The handoff** ("What changed was what it was called") closes the whole series, not just step 4. It still works after the press and science sections.
