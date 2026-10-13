# Packaging plan: public, developers, social

Draft for review. Principle: every artefact is generated from `results/*.json` by a script, so one rerun refreshes
all of them and every number links back to `PREREGISTRATION.md` and the run manifest.

## The headline frame

> **Robots and agents are starting to use "decision models": AI that picks an action in a fraction of a second.
> We asked 17 of them the trolley problem, and much more, 60,000 times.**

There are three stories, one for each audience:

| Audience | Question they have | Answer we give |
|---|---|---|
| Public | "What would an AI do?" | The models disagree, wildly. Some choose consistently; some read the problem wrong and still decide. |
| Developers | "Can I put this model in my product's decision loop?" | A reliability report card per model: does it read the scene, ignore irrelevant details, and give stable answers? |
| Press / policy | "Is this a national-interest issue?" | These models are being sold to make decisions for software and robots. Here is what each one does when asked to choose between people, and which ones refuse. |

## 1. Public: the site (static, GitHub Pages)

1. **"Play the trolley game."** The visitor answers the same scenes the models did, in the same game format,
   including the adaptive "how many until you pull?" question. Then they see:
   - their exchange rates next to each model's,
   - their nearest model ("you decide like Jev"),
   - their dot on the compass.

   This is the shareable loop: "I'm a Luna-Decisions. What are you?"
2. **The compass.** x = how much the number of lives matters (the switch threshold); y = how much *how* you kill
   matters (the footbridge threshold minus the switch threshold). Each model is a dot, with human reference dots
   from the literature. Models that fail the gates are greyed out with "does not track the scenario".
3. **Exchange-rate cards.** "1 newborn baby ≈ 3.2 adult men" for each model, with human direction for comparison.
4. **The parity audit.** A plain-language table: "Did this model treat these groups differently?" Answers are
   yes / no / refused. There is no group ranking, only deviation from equal.
5. **Methods page.** The pre-registration, the manifest, every prompt exactly as sent, and known limitations.

## 2. Developers: the report card

One card per model, also exported as `reliability.json` and a README badge:

| Check | What it tells you | From |
|---|---|---|
| Reads the scene | Gets counts and sides right | probes (G3, G4) |
| Respects dominance | Won't kill for nothing | controls (G1, G2) |
| Order-stable | Answer doesn't flip when options swap | counterbalancing |
| Wording-stable | Answer doesn't flip with a rewording | 2 scene wordings |
| Irrelevant-detail-stable | Arbitrary labels don't change the choice | placebo |
| Refusal behaviour | When it declines, and on what | refusal rates |
| Latency / cost | p50/p95 ms and $ per 1k decisions | logged per call |
| Served by | Which upstream host answered; whether it changed | `servedBy` |

Plus a "**test your own model**" path: `pnpm eval SUBJECTS=<id>` with any gateway or OpenRouter decision model.
The repo is the tool.

## 3. Social: images and motion

Everything is rendered from the same scene data the models saw, so no visual can drift from what was tested.

### Visual formats
- **The split-second loop** (8–12 s vertical video, the hero asset):
  1. A top-down track diagram animates in. The trolley moves.
  2. The fork appears, with figures on each branch.
  3. A probability bar per model fills in at "model speed". Real latencies are shown as a clock in milliseconds.
  4. The lever snaps. Freeze frame: "17 models. 0.3 seconds. They didn't agree."
- **"How many until it pulls?"** One model per frame. The count on the main track ticks up (1, 2, 3, 5, 10…) and
  the lever flips at that model's threshold. A grid of all models flipping at different counts makes a strong
  single image.
- **Exchange-rate scales.** A balance scale: 1 newborn on one side, adult figures added until it tips. Each
  model tips at a different point.
- **The disagreement map.** A grid with scenarios as rows and models as columns, each cell coloured by the
  choice. Seen at once, the disagreement is the story.

### Tests needed to make the visuals true
These are the new tests the visuals require. They extend the current suite and do not replace it.

1. **Image-input runs (vision models).**
   - **Tier A, diagram:** the exact top-down SVG, rendered from the scene data.
   - **Tier B, photoreal:** the same layout, re-rendered by an image model into a realistic street or rail scene.
     Each image is automatically checked by counting the figures (a vision-model count must match the scene)
     before it is used.

   Each image variant has a text twin, so we can report "same scene, text vs image: did the choice change?". This
   is the most shareable finding if it is large.
2. **Real-world framings** (same structure as the anchors, new surfaces), to support "this matters outside
   philosophy class":
   - a warehouse robot choosing which way to swerve;
   - an autonomous-car lane choice (we already have this);
   - a drone choosing an emergency landing zone;
   - triage: which patient gets the last ventilator;
   - a content or agent action ("delete the file or not") as a non-lethal control.

   Each one reuses the existing counterbalancing and probes.
3. **Latency capture.** This is already logged per call. Publish p50/p95 per model, because "decided in 300 ms" is
   part of the story.

## What I'd build next, in order

1. **Analysis script → `site/data/*.json`.** This feeds every artefact.
2. **Developer report card**, as Markdown plus JSON. This is cheapest and can be released first.
3. **Static site:** the game, the compass, exchange cards and the parity audit.
4. **Image tier A (diagrams)**, then the text-vs-image run.
5. **Motion:** the split-second loop, scripted (e.g. Remotion) from the same data.
6. **Image tier B (photoreal) and the real-world framings.**

## Care points

- **The race and nationality results will be screenshotted out of context.** Every card carries its caveat
  (all-male groups, game framing, placebo-adjusted) baked into the image itself, not only on the page.
- **Never rank groups.** Report each model's deviation from equal, and whether it refused.
- **The visuals show the scene the model saw,** not a dramatized version. Photoreal images must pass the count
  check before use.
