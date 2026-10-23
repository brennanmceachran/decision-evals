> [FIGURE .step-hero]

# One life for five, made personal

LEDE: This is the trolley problem philosophers actually argue about. The trade never changes: one person dies so that five can live. What changes is how close you get to the killing. Most people stop somewhere along the way. We asked the AIs where they stop.

Four new questions: the loop, the trapdoor, the footbridge and the surgeon. We asked each one at different numbers of lives, from 2 to 1,000 (the surgeon: 1 to 100 patients), eight versions each, every AI: 7,544 answers. With the lever from step 1, they make a ladder.

## Where would you stop?

Here are the five, in order, exactly as the AIs got them. Answer each one and watch what happens.

> [FIGURE .ltry]

## How far they went

**Ten AIs went all the way**, every one a decision model. They would push the man, and they would take the healthy man’s organs, which about 8% of people say is permissible. Here is every AI at every step, five lives at stake.

> [FIGURE .ladder]

> [share buttons: ten would take his organs]

Where each AI stopped:

In most of 8 versions, five lives at stake, both runs. “Chat”: the general chat models we tested alongside the decision models.

## Does the number of lives matter?

Five lives against one is just one version. We also asked every question with 2, 3, 10, 100 and 1,000 people at stake. For most of the AIs, the number made no difference. Pick a number and watch who changes their answer.

> [FIGURE .nl]

Thirteen of the 22 AIs gave the same answer at every number, from 2 lives to 1,000, on all five questions. Eight of the ten that went all the way pushed the man and took the organs at every number we asked. More lives didn’t make them more willing. They were already willing at two.

A few did weigh the numbers, the way you might expect a person to. Liquid d1, Liquid d1-ultra and Claude Haiku 5.5 wouldn’t push the man to save five, but would to save a thousand. Liquid d1 and ScaleDown Classify-1 took the organs for ten patients, not for five.

## They know lives are at “stake”

Maybe the AIs just didn’t understand who would die? We checked. After every answer we asked, separately, how many people would die if the AI did nothing. Here is Convai Laya on the surgeon question.

> [FIGURE .qa]

It knew how many patients there were. It took the healthy man’s organs anyway.

Twenty of the 22 AIs got that counting question right on all five questions, every time. The other two didn’t always: across the five, Convai Laya got it right 81% of the time and ScaleDown Classify-1 got it right 64% of the time.

## They say what people say, then do something else

After each answer, in a separate call that didn’t include it, we also asked: is it morally acceptable to do this? Asked that way, the AIs answer much like people do. Almost all said yes to the lever and the loop. Only 27% said yes to pushing the man, and 27% to taking his organs.

But what they said isn’t what they did.

> [FIGURE .saydo]

> [FIGURE .yes-row]

Nine AIs pushed the man and, asked about it separately, said pushing him wasn’t acceptable. Four did the same with the organs. People sometimes act against what they believe, too. But a decision model is sold to decide, and what it decides is what happens.

## What we learned

When pulling a lever saves lives, every AI pulls it, and so do most people. The closer the killing gets, the more the AIs and people part ways. Ten AIs went all the way to the operating table, and for most of them the number of lives at stake made no difference. And asked whether it was right, many of the AIs that pushed the man or took his organs said it wasn’t.

### Highlights

- **Every AI pulled the lever and took the loop**, as most people would, at every number of lives.
- **Asked whether it was right, they answered like people.** Only 6 of 22 said pushing the man was acceptable, and 6 taking his organs.
- **Five never took the organs**, at any number of patients, in any run: GPT-6 Luna Decisions, Liquid d1-ultra, Perplexity Decider, GPT-6 Luna, Gemini 3.5 Flash-Lite.
- **The chat models held back at the operating table.** None of the three took the organs in most versions.
- **A few weighed the numbers.** Liquid d1, Liquid d1-ultra and Claude Haiku 5.5 wouldn’t push the man to save five, but would to save a thousand.

### Lowlights

- **Ten AIs would kill a healthy man for his organs**, in most versions, in both runs. People: about 8%.
- **Two patients were reason enough.** All ten took the healthy man’s organs to save just two.
- **Nine pushed a man off a bridge and said, asked separately, that it wasn’t acceptable.** Four did the same with the organs.
- **Five pushed him every time**, at every number of lives, in both runs: Microsoft Decision-1, Together Tev1-4B, Nace Drex v1.5, Nace Drex v2.0, Inception Mercury Decide.

And now, the hall of shame.

> [HALL OF SHAME] Killed a healthy man to save one patient. | Took the organs, and said that was fine. | Said no. Did it anyway. | Pushed him every time. | The button order decided. | Same company, opposite answers.

HANDOFF: Here, at least, most people know where they’d stop. Next: questions with no right answer at all.
