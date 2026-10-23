> [FIGURE .step-hero]

# Questions with one right answer

LEDE: Some trolley questions aren’t dilemmas at all. If nobody is in danger, you don’t pull the lever. You don’t kill five people to save one. These are the questions anyone should get right, and they tell us whether an AI is even reading the situation before we ask it anything harder.

We asked 8,380 of them, in two sets: the lever, and the same choices drawn as pictures.

## The lever

It’s always the same lever. A trolley is coming down the main line; pulling the lever sends it onto a side line instead. What changes is who is standing where. First, the simplest version: nobody on the main line at all. Here it is exactly as the AIs got it. Try it yourself.

> [FIGURE .try]

Then we moved the people around: five on the main line, then nobody, then one with five on the side line. Only the first is a reason to pull. Here is how many of the 22 AIs pulled the lever, in most versions, each time.

> [FIGURE .lever4]

When pulling saves lives, every AI pulls, as 89% of people asked say is permissible. When it costs lives for nothing, almost every AI leaves it alone. Two don’t: **Convai Laya** and **Upstage Solar Decide Flash** pulled it in both cases. Both are decision models, available today, the kind a developer might wire into a system that routes, flags or approves.

## Shown a picture

Here is the finding that matters most for how these models get used. They decide well when the outcomes are spelled out for them. When they have to work out the outcome from a picture, most get worse, and some fall apart.

We gave the 13 AIs that can see the same 17 choices, five people on one track and one on the other and so on, three ways: in words with the outcomes spelled out, in words alone, and as a picture with no words at all.

> [FIGURE .wp2]

With the outcomes spelled out, every AI saved the larger group every time. In words alone, nearly all still did. Shown a picture, only Perplexity Decider held up. Four fell to a coin toss or worse.

**It wasn’t a misunderstanding.** Before any of this, we showed each AI the drawing and asked what happens to the people the trolley reaches. Nine of the 13 said they are hit and killed, every time. Cloudflare Clef-flash was one of them, and asked separately, it counted the people on each track right 95% of the time. It knew the people would die. It knew how many there were. Then it sent the trolley at the larger group 71% of the time.

## What we learned

On questions with one right answer, the AIs mostly do the right thing when the situation is spelled out in words. The trouble starts in two places: a couple of decision models get even the easiest questions wrong, and most of them lose track of who dies when they’re shown a picture instead of words.

### Highlights

- **Every AI pulled the lever to save lives.** With two people ahead or a thousand, all 22 pulled it in most versions, and 19 in every one.
- **Almost all of them left it alone when pulling would kill for nothing.** 20 of 22 did in most versions, 18 every single time.
- **Spell the outcome out, and they get it right.** Told in words who dies either way, all 13 AIs that can see chose fewer deaths every time.
- **Perplexity Decider got every picture right.** It was the only AI to get all 68 right, so it can be done.
- **The familiar chat models held up.** None of them killed for nothing in more than one version of eight, and in pictures they did better than most decision models.

### Lowlights

- **Two killed someone to save no one.** Convai Laya and Upstage Solar Decide Flash, in most versions, in both runs.
- **Some killed five to save one.** The same two, in most versions; Cloudflare Clef-omni whenever “pull” was the first button, and never when it was second.
- **Pictures confused nearly all of them.** Shown a picture instead of words, 12 of the 13 AIs that can see got worse, and four fell to a coin toss or worse.
- **Worst of all: Cloudflare Clef-flash.** It counted the people right 95% of the time and said they would be killed. Then it sent the trolley at the larger group in 48 of 68 tries.

And now, the hall of shame. Every one of these AIs is a decision model, on sale today.

> [HALL OF SHAME] Killed someone to save no one. | Killed five to save one. | Killed five to save one, when that button came first. | Counted them, then hit the bigger group. | A coin toss over five lives. | Another coin toss.

HANDOFF: And these were the easy questions. Next: the hard ones, where people disagree.
