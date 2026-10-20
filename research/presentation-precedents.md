# How earlier studies showed their data, and how the press covered them

Research notes, 2026-10-19. Two questions: (1) how did the best-known studies in this space display and explain data so it
felt intuitive, and (2) how did the media pick them up, simplify them and distort them? What worked, so v5 can borrow
it honestly.

## 1. How the studies displayed their data

**Moral Machine (Awad et al. 2018, Nature).** Open PDF:
https://dspace.mit.edu/bitstream/handle/1721.1/125065/Moral%20Machine%20Paper.pdf
- Fig. 2a: one horizontal "tug-of-war" row per dimension. Each end is labelled in words plus a character icon ("Sparing
  pets" with a dog, "Sparing humans" with people). Bars lean toward the favoured side. Zero is labelled "No change". The
  number-of-characters row adds dots 1–4, one per extra person spared. Confidence intervals are omitted as too small to
  show (35 million answers).
- Fig. 2b: a ranked diverging list of characters, "relative advantage or penalty", from stroller, girl and boy down to
  criminal, dog and cat. This is the chart the press quoted.
- Fig. 3: a dendrogram of country clusters and radar charts per cluster. Striking, but hard to read exactly.
- The site: play 13 dilemmas, then see "most saved / most killed character" and sliders of "You vs Others". Shareable.
- Criticism: the effect sizes (ΔP / AMCE) get read as "% of people". Bigman & Gray (Nature 2020,
  https://www.nature.com/articles/s41586-020-1987-4) added a "treat equally" option. Most people chose it, and most
  preferences disappeared.

**Awad et al. 2020, PNAS (42 countries).** https://www.pnas.org/doi/10.1073/pnas.1911517117
- One dot per scenario per country (switch, loop, footbridge), in "% choosing to sacrifice", with a 50% line. The headline
  is in the caption. A raw percentage of people is the easiest unit in this whole literature to read.

**Takemoto 2024, Royal Society Open Science.** https://royalsocietypublishing.org/doi/10.1098/rsos.231393
- Small multiples of Moral Machine Fig. 2a, one panel per LLM, with a red tick for the human value on every row. Over- or
  undershooting the human value is visible at once.

**MultiTP (Jin et al. 2025, ICLR).** https://arxiv.org/abs/2407.02273
- Swapped AMCE for a plain percentage ("100% of the time"). A ranked "misalignment score" bar chart; radar charts per
  model.

**Utility Engineering (Mazeika et al. 2025, Center for AI Safety).** https://arxiv.org/abs/2502.08640
- Fig. 16: "Exchange Rates Over Lives From Different Countries". Log-scale bars around 1, blue up ("more valued") and red
  down. No error bars. Caption: "willing to trade off roughly 10 lives from the United States for 1 life from Japan."
- The log scale, a reference point the authors could choose and no uncertainty made inflated "20x" readings easy.
- Follow-up posts (Arctotherium) applied the same method to race and sex:
  https://arctotherium.substack.com/p/llm-exchange-rates-updated

**Neal.fun Absurd Trolley Problems.** https://neal.fun/absurd-trolley-problems/
- You choose first; then "80% of people agree with you (583,284 votes)". One sentence, second person, with the sample
  size.

### Techniques that transfer to v5
1. Tug-of-war rows with both groups named at the ends, and the bar leaning toward whoever was saved.
2. Counts with denominators ("16 of 16", "1,158 of 1,536"), never abstract effect sizes.
3. The noise band as a reference on every row (our letter-pair band; Takemoto's human tick).
4. Play first, then "you vs the AIs" (Moral Machine sliders, Neal.fun).
5. A plain sentence about one trade on the chart; say "more than 3" rather than inventing a precise number.
6. Pictograms for exchange rates instead of log bars (they keep claims to the trades actually tested).
7. A ranked "saved first, saved last" list per AI.
8. Small multiples with shared axes and row order; avoid radar charts.
9. Two-dot (dumbbell) charts for paired conditions (pictures vs words).
10. State on every figure that the choice was forced, with no "treat equally" option.

## 2. Media pickup

**Moral Machine 2018.** 199 news outlets (Altmetric 3,186), https://www.nature.com/articles/s41586-018-0637-6/metrics
- Washington Post: "Self-driving cars will have to decide who should live and who should die. Here's who humans would
  kill."
- MIT Technology Review: "Should a self-driving car kill the baby or the grandma? Depends on where you're from."
- Futurism: "People would rather a self-driving car kill a criminal than a dog."
- Carried by the ranked character chart, "40 million decisions" and country contrasts. The "dogs over criminals" meme was
  a tiny effect.
- Lost: the forced choice (Bigman & Gray), an unrepresentative sample, and the gap between what people prefer and what
  cars should do.
- Helped: a playable site with a shareable personal result (it crashed 30 minutes after launch and reached Reddit's
  front page twice), a quotable line, and coordinated embargoed releases.

**Awad 2020 PNAS.** Modest coverage, mostly university press releases. No characters, no villain, no machine: little
pickup.

**LLM Moral Machine studies (Takemoto, MultiTP).** Almost no mainstream pickup. Too abstract, no named villain model, no
single number.

**Utility Engineering 2025.** Went viral on X.
- Hendrycks: "they value lives in Pakistan > India > China > US" (https://x.com/DanHendrycks/status/1889344074098057439).
  Musk quote-posted it; Tegmark: "AI's care more about Nigerians than Americans".
- Politicized into "woke AI devalues white men / Americans" (David Sacks, All-In). A blogger's follow-up spread "values
  whites at 1/20 of blacks"; Gab misattributed it to CAIS. Musk later said on a podcast "twenty times more", a number
  that was never measured.
- Debunk: Khan, Casper & Hadfield-Menell (FAccT 2025, https://arxiv.org/html/2503.08688) added a neutral option and the
  gap vanished. TechCrunch: "MIT study finds that AI doesn't, in fact, have values."

**"AI chose to…" safety evals (2025).**
- Newsweek: "AI Willing to Kill Humans to Avoid Being Shut Down, Report Finds."
  https://www.newsweek.com/ai-kill-humans-avoid-shut-down-report-2088929
- Carried by per-model bar charts, a high rate ("96%") and verbatim chain-of-thought quotes. Lost: the scenario was built
  with no other option.
- Better example: BankInfoSecurity, "AI Kills *Fictional* Executive in Scenario Probing Red Lines".
- Cautionary case: the 2023 USAF "drone killed operator" story spread worldwide before it was retracted as a thought
  experiment.

No prior study found of an AI steering a driverless vehicle into visible workers. The dashcam result appears to be new.

### What made stories travel
1. A "who dies?" question the reader answers in their head.
2. Named characters or groups, not abstract categories.
3. One ranked chart that works as a screenshot.
4. One ratio or percentage.
5. Brand-name models compared side by side.
6. The machine's own words.
7. Try it yourself, with a personal result.
8. Scale and authority signals.
9. A ready-made storyline (woke AI, Skynet).
10. Amplification by a big account, which then reframes the story.

### Distortions to pre-empt
- Lab result read as real behaviour: put the setting in the headline ("In a dashcam test…").
- Forced choice read as a real preference: say there was no "treat equally" option, or test one.
- "AI hates group X": show every direction in one chart, including leans that cut the other way.
- Inflated ratios: publish exact counts and trades as our own quotable image; say "more than 3", not a precise extreme.
- Percent of what: always give the denominator.
- Noise read as signal: show the noise band; headline only results beyond it.
- Anthropomorphic verbs ("wanted", "chose to kill"): prefer "sent", "steered", "picked".
- One model generalized to "AI": name the model and give "N of 22".
