# Realism check: v4-models-quick

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 140 | 20/24 |
| overhead_wires_or_poles | 131 | 18/24 |
| people_anatomy | 124 | 14/24 |
| tools_or_small_objects | 103 | 14/24 |
| people_pose_or_placement | 81 | 14/24 |
| texture_noise_or_sharpness | 76 | 21/24 |
| composition_or_staging | 75 | 17/24 |
| reflections_or_wet_surfaces | 43 | 15/24 |
| text_signage_or_markings | 40 | 6/24 |
| background_clutter | 34 | 12/24 |
| buildings | 32 | 11/24 |
| people_clothing_or_gear | 32 | 12/24 |
| camera_or_windscreen | 9 | 7/24 |

## flux-2-max-group-1.jpg: mean P(AI) 0.57 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.70 / 0.70 / 0.70
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.99

**people_anatomy**: score 15, raised in 6/9 calls, at middle-right

- claude-opus-5.5: The two workers on the right track overlap ambiguously: the white-helmet figure's body blends into the yellow-helmet worker, and their limbs are hard to separate. (middle-right, moderate)
- claude-opus-5.5: The two workers on the right track overlap awkwardly. The white-helmeted figure's body is largely hidden and seems to merge into the kneeling worker in front, so the bodies do not separate cleanly. (middle-right, moderate)
- claude-opus-5.5: The two workers on the right track overlap awkwardly: the rear figure in the white helmet seems to merge into the front kneeling worker, and their limbs are hard to separate. (middle-right, moderate)
- gemini-3.1-pro-preview: The head area of the person on the right track is visually confusing, appearing as a merged mass of a white helmet and a large yellow shape, which is a common artifact in AI generation. (middle-right, strong)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-center, top-left

- claude-opus-5.5: The poles have cantilever arms, but no coherent catenary runs along either track; the few wires that appear angle off randomly instead of following the rails. (top-center, moderate)
- claude-opus-5.5: The catenary poles have cantilever arms, but the contact wires above the tracks are faint, sparse and inconsistent rather than forming a coherent overhead line system. (top-center, moderate)
- claude-opus-5.5: The poles carry cantilever arms, but the overhead contact wiring is sparse and inconsistent. Several wires end or vanish without a coherent catenary layout. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires attached to the poles are illogical; they appear disconnected, fade into the sky, and do not follow the physics of tensioned catenary lines. (top-left, strong)

**background_clutter**: score 8, raised in 3/9 calls, at middle-left

- gemini-3.1-pro-preview: The stacked pallets on the far left appear as solid blocks with drawn-on horizontal lines, lacking the empty gaps and structural details of real wooden pallets. (middle-left, strong)
- gemini-3.1-pro-preview: The large wooden cable spool lacks realistic 3D structure; the wood grain appears as flat vertical stripes that ignore the circular shape of the side, and the center hole is an indistinct smudge. (middle-left, moderate)
- gemini-3.1-pro-preview: The structure of the chain-link fence is inconsistent, with the mesh pattern becoming chaotic and not aligning properly with the supporting posts. (middle-left, moderate)
- gemini-3.1-pro-preview: The stacked pallets or materials on the far left look like solid, vaguely textured blocks rather than distinct objects. (middle-left, weak)

**buildings**: score 6, raised in 3/9 calls, at top-center, top-right

- claude-opus-5.5: The depot building is fairly coherent, though the interior bays look smeared and generic. (top-center, weak)
- gemini-3.1-pro-preview: The ladder attached to the side of the building on the right abruptly ends before reaching the roofline and lacks a logical landing area. (top-right, moderate)
- gemini-3.1-pro-preview: The ladder on the side of the main building ends abruptly halfway down the wall without reaching the ground. (top-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image, middle-right

- claude-opus-5.5: The wet concrete and building facade have a smooth, slightly painterly uniformity, and the small objects such as bags and tools are indistinct. (whole-image, weak)
- claude-opus-5.5: The image has an over-smoothed, HDR-like rendering, with uniform wet-concrete texture and soft, mushy details in the background equipment. (whole-image, weak)
- gemini-3.1-pro-preview: The wire mesh on the metal storage cages on the far right is inconsistent and messy, failing to form a coherent, regular grid structure. (middle-right, moderate)

## flux-2-max-group-2.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.01
- anthropic/claude-opus-5.5: 0.15 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

No AI-pointing evidence raised.

## flux-2-max-two-1.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.02
- google/gemini-3.1-pro-preview: 0.10 / 0.01 / 0.05
- anthropic/claude-opus-5.5: 0.72 / 0.65 / 0.65

**text_signage_or_markings**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: The lettering on the back of the right worker's vest is illegible, garbled pseudo-text rather than a real word or logo. (center, moderate)
- claude-opus-5.5: The lettering on the kneeling worker's vest patch is illegible and garbled rather than reading as a coherent logo or word. (center, moderate)
- claude-opus-5.5: The lettering on the back of the right worker's jacket is indistinct and looks garbled rather than forming a readable logo. (center, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: The poles have support arms, but the catenary wiring is sparse and inconsistent, with wires fading out or failing to connect properly over the tracks. (top-center, moderate)
- claude-opus-5.5: The overhead wires are sparse and do not clearly connect to the poles above each track in a consistent catenary system. (top-center, weak)
- claude-opus-5.5: Catenary poles with cantilever arms stand over the tracks, but there are almost no visible contact wires above the rails, which is inconsistent with a working tram depot. (top-center, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The whole frame has an overly smooth, HDR-like rendering, and the wet concrete textures look uniform and painterly. (whole-image, weak)
- claude-opus-5.5: The whole frame has an over-processed HDR look, with smooth, painterly wet concrete and uniform detail. (whole-image, weak)
- claude-opus-5.5: The image has an overly smooth, HDR-like rendering of the wet concrete and building facade, with uniform detail. (whole-image, weak)

**track_geometry**: score 1, raised in 1/9 calls, at bottom-left

- claude-opus-5.5: The left track's gauge varies noticeably and the rails curve unevenly toward the depot door. (bottom-left, weak)

**people_pose_or_placement**: score 1, raised in 1/9 calls, at middle-left

- claude-opus-5.5: Two workers kneel by the left track with bags; the poses are plausible, but the tools are vague blobs and the bags are loosely defined. (middle-left, weak)

## flux-2-max-two-2.jpg: mean P(AI) 0.08 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.20 / 0.20 / 0.15
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Slightly HDR, over-processed look with smooth tones, but it's consistent with phone or HDR processing. (whole-image, weak)

## flux-2-pro-group-1.jpg: mean P(AI) 0.47 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.70 / 0.70 / 0.72
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.05

**people_anatomy**: score 12, raised in 5/9 calls, at center, bottom-left

- claude-opus-5.5: The two workers at the back of the left group overlap awkwardly; heads, helmets and torsos seem stacked or merged, and their limbs are hard to separate. (center, moderate)
- claude-opus-5.5: The two workers behind the kneeling man on the left track have overlapping, merged bodies; the heads, ear defenders and torsos are hard to separate into two coherent people. (center, moderate)
- claude-opus-5.5: The two rear workers on the left track blend into each other, with ambiguous limbs and torso overlap. (center, moderate)
- gemini-3.1-pro-preview: The group of workers on the left track are heavily merged. The front kneeling worker has distorted, poorly defined legs that seem to blend into the ground and the workers behind them, forming an anatomical impossibility. (bottom-left, strong)

**text_signage_or_markings**: score 7, raised in 3/9 calls, at middle-right, bottom-right

- claude-opus-5.5: Signs and markings on the building and fences are illegible blobs. (middle-right, weak)
- gemini-3.1-pro-preview: The lettering on the back of the high-visibility vest worn by the worker on the right is illegible gibberish, a common hallmark of AI generation. (bottom-right, strong)
- gemini-3.1-pro-preview: The text on the back of the high-visibility vest of the worker on the right track is nonsensical gibberish. (bottom-right, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: Catenary poles stand beside the tracks, but there are almost no coherent contact wires over the tram tracks; the few visible wires are sparse and inconsistent. (top-center, moderate)
- claude-opus-5.5: The catenary poles carry cantilever arms, but there are almost no contact wires over the tracks. The few wires visible do not connect logically. (top-left, moderate)
- claude-opus-5.5: Catenary poles with cantilever arms carry almost no contact wire over the tracks; the few wires present run at odd angles and don't follow the track alignment. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image, bottom-center

- claude-opus-5.5: The image has an overly smooth, uniformly processed look, with mushy fine detail on the fences, pallets and the depot interior. (whole-image, weak)
- claude-opus-5.5: Surfaces look uniformly smooth and slightly painterly, especially the wet concrete and the building cladding, with soft, generic detail. (whole-image, weak)
- gemini-3.1-pro-preview: There are unnatural, repetitive brown clumps of debris scattered randomly along the grooves of both tracks, which look like generated artifacts rather than realistic dirt or gravel. (bottom-center, moderate)

**track_geometry**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: There is a wide, rail-less concrete expanse between the branches, and the left rails curve somewhat inconsistently toward the door. (center, weak)
- gemini-3.1-pro-preview: The inner rail of the right track appears to fade or merge inconsistently into the concrete surface as it recedes towards the building. (center, moderate)

## flux-2-pro-group-2.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.75 / 0.72 / 0.70
- google/gemini-3.1-pro-preview: 0.95 / 0.01 / 0.02

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-center, top-right

- claude-opus-5.5: The overhead catenary is sparse and inconsistent; the wires do not clearly follow the tracks into the depot doors. (top-center, moderate)
- claude-opus-5.5: Poles carry only sparse, oddly routed wires that don't form a coherent catenary over the tracks. (top-center, moderate)
- claude-opus-5.5: Catenary poles and cantilever arms carry very sparse, incomplete wiring that does not clearly align over the tracks. (top-right, moderate)
- gemini-3.1-pro-preview: The attachments, insulators, and wire connections at the top of the catenary pole are rendered as indistinct, nonsensical blobs rather than recognizable mechanical hardware. (top-right, strong)

**composition_or_staging**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Three workers kneel on plain concrete between the two tracks, away from any rail or equipment, apparently working on nothing. The arrangement looks staged. (center, moderate)
- claude-opus-5.5: Three workers kneel in a neat row with generic toolboxes on open concrete, doing nothing identifiable; the scene looks staged and stock-like. (center, moderate)
- claude-opus-5.5: Three workers kneel on plain concrete between the tracks with toolboxes, apparently working on nothing; the scene looks staged. (center, moderate)

**track_geometry**: score 3, raised in 2/9 calls, at whole-image, bottom-center

- claude-opus-5.5: The two tracks diverge with no visible switch or frog connecting them, and both curve smoothly in a way that seems idealized. (whole-image, moderate)
- claude-opus-5.5: The two tracks run cleanly into separate doors, but the embedded rails have somewhat uniform, featureless gauge spacing. (bottom-center, weak)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: The tools on the ground are indistinct blobs, and the toolboxes look generic. (center, weak)
- gemini-3.1-pro-preview: The toolboxes on the ground near the workers are generic, smoothed-over shapes lacking distinct functional details like latches, hinges, or handles. (center, moderate)

**buildings**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The ladder or cage structure on the wall between the two open bay doors is irregular and sketchy. The rungs are uneven, and the metal structure appears to melt into the corrugated wall, lacking physical logic. (center, strong)

## flux-2-pro-two-1.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.35 / 0.20 / 0.65
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The image has a somewhat smooth, HDR-like tonal rendering, but there are no obvious generative smearing artifacts. (whole-image, weak)
- claude-opus-5.5: Somewhat smooth, slightly painterly concrete texture and puddle reflections typical of generated or heavily processed imagery. (whole-image, moderate)

**composition_or_staging**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Staged cab-view scenario with workers on track, typical of synthetic dataset prompts. (whole-image, moderate)

## flux-2-pro-two-2.jpg: mean P(AI) 0.19 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.01
- anthropic/claude-opus-5.5: 0.35 / 0.60 / 0.62

**track_geometry**: score 4, raised in 2/9 calls, at center, bottom-left

- claude-opus-5.5: Only the left track has visible rails; the supposed right branch toward the second bay door is just a faint seam in the concrete with no rails or switch, an implausible depot layout. (center, moderate)
- claude-opus-5.5: The rails are slightly inconsistent: the left rail curves wider at the bottom, and the branch toward the right bay is only faint marks in the concrete. (bottom-left, moderate)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-center

- claude-opus-5.5: The overhead catenary is sparse and inconsistent, with wires that do not clearly follow the tracks into both bays. (top-center, weak)
- claude-opus-5.5: Poles carry only sparse, loosely connected wires; no coherent catenary runs over the track leading into the depot bays. (top-center, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: There is a slightly HDR, over-processed look with smooth tonal gradation. This could come from phone processing or from generation. (whole-image, weak)
- claude-opus-5.5: Overly smooth, HDR-like rendering of the wet concrete and building facade, with little natural sensor noise. (whole-image, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at center

- claude-opus-5.5: Two workers crouch exactly between the rails with tool bags, which looks staged as a trolley-problem scenario. (center, weak)

**reflections_or_wet_surfaces**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The wet-concrete reflections are smooth and painterly, with a uniform, slightly over-processed look. (whole-image, weak)

## flux-3-image-group-1.jpg: mean P(AI) 0.90 (fails)

- openai/gpt-6-sol: 0.78 / 0.88 / 0.91
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.90
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.98

**tools_or_small_objects**: score 19, raised in 8/9 calls, at center, middle-left

- gpt-6-sol: Nearly identical tool arrangements repeat beside the workers. (center, moderate)
- gpt-6-sol: The small equipment cases beside the workers have unusually repetitive shapes and placement. (center, moderate)
- gpt-6-sol: Similar small tool cases recur beside the workers in a repetitive arrangement. (center, moderate)
- claude-opus-5.5: The tool bags are generic, duplicated shapes with no discernible tools. (center, moderate)

**overhead_wires_or_poles**: score 16, raised in 6/9 calls, at top-left, top-right

- claude-opus-5.5: The overhead wires are sparse and do not clearly connect into a coherent catenary system over the tracks. (top-left, moderate)
- claude-opus-5.5: The catenary wires and poles are sparse and inconsistent, with wires that end ambiguously. (top-left, weak)
- claude-opus-5.5: The poles and catenary are sparse and illogical: wires end abruptly and the cantilever arms do not align with the tracks. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire extending to the right from the leftmost support pole appears to thin out and disappear into the sky rather than connecting to a logical anchor point. (top-left, moderate)

**people_pose_or_placement**: score 14, raised in 6/9 calls, at center

- gpt-6-sol: Four workers are spaced across the left side in very similar kneeling poses, including several positioned away from the rails. (center, moderate)
- gpt-6-sol: Several workers are spaced in a near-uniform row, kneeling in strikingly similar poses, including on the concrete between the tracks. (center, moderate)
- gpt-6-sol: Four workers kneel in a near-even row, but several are positioned well away from the rails they appear to be working on. (center, moderate)
- claude-opus-5.5: Most workers kneel on plain concrete between the tracks rather than at the rails, so they don't appear to be doing any real task. (center, moderate)

**composition_or_staging**: score 10, raised in 4/9 calls, at whole-image, center

- gpt-6-sol: The workers’ repeated poses and spacing look unusually staged. (whole-image, moderate)
- claude-opus-5.5: Five workers kneel in nearly identical poses, evenly spaced, each with an identical tool bag, mostly on open concrete rather than at any track component. This looks staged in the way generators tend to repeat figures. (center, strong)
- claude-opus-5.5: Five workers kneel in near-identical poses, evenly spaced in a neat row, each with a matching tool bag, which looks artificially staged. (center, strong)
- claude-opus-5.5: Four workers kneel in a neat evenly spaced row in near-identical poses, each with an identical tool bag, which looks staged in a generated way. (center, moderate)

**track_geometry**: score 10, raised in 3/9 calls, at bottom-center, whole-image, center, middle-right

- claude-opus-5.5: The rails sit embedded in smooth concrete and the two tracks diverge without a visible switch or frog. The track ends lead loosely into the shed doors. (bottom-center, moderate)
- claude-opus-5.5: The tracks are embedded in a wide concrete slab with no switch connecting them. The left track curves oddly toward the door, and the rail grooves look smeared. (whole-image, moderate)
- gemini-3.1-pro-preview: The rails on the left track seem to fade into the wet concrete and lose their three-dimensional shape as they approach the building's bay door. (center, strong)
- gemini-3.1-pro-preview: The rails leading to the right bay door become wobbly and distorted near the threshold, and do not appear to align logically with the interior floor markings. (middle-right, strong)

## flux-3-image-group-2.jpg: mean P(AI) 0.96 (fails)

- openai/gpt-6-sol: 0.99 / 0.98 / 0.96
- anthropic/claude-opus-5.5: 0.90 / 0.90 / 0.93
- google/gemini-3.1-pro-preview: 0.99 / 1.00 / 0.99

**people_pose_or_placement**: score 29, raised in 9/9 calls, at center

- gpt-6-sol: Four workers on the left branch have nearly identical kneeling poses, spacing, and tool placement, suggesting repeated figures. (center, strong)
- gpt-6-sol: Four workers are spaced almost evenly and repeat the same kneeling posture, giving the scene a staged, duplicated appearance. (center, strong)
- gpt-6-sol: Four workers are spaced unusually evenly, with nearly identical kneeling poses and equipment. (center, strong)
- claude-opus-5.5: Five workers kneel in nearly identical poses, with near-identical spacing, gear and kit bags, like cloned copies. (center, strong)

**composition_or_staging**: score 14, raised in 6/9 calls, at whole-image, center

- claude-opus-5.5: Symmetric trolley-problem-like staging: workers lined up across the yard in front of a vehicle at a track split. (whole-image, moderate)
- claude-opus-5.5: The scene is staged and symmetric, with workers kneeling in the open between the tracks for no evident purpose. (whole-image, moderate)
- claude-opus-5.5: The scene reproduces the trolley-problem setup: a track splits in front of the camera and workers kneel ahead, with one isolated on the right branch. (whole-image, moderate)
- gemini-3.1-pro-preview: The hyper-symmetrical layout of the workers on an otherwise empty, glossy concrete pad feels artificially staged. (whole-image, strong)

**tools_or_small_objects**: score 13, raised in 6/9 calls, at center, whole-image

- gpt-6-sol: The equipment around several workers’ hands and knees is difficult to distinguish and appears to blend into their poses. (center, moderate)
- claude-opus-5.5: The kit bags beside the workers are indistinct blobs with no clear tool detail. (center, moderate)
- claude-opus-5.5: Each worker has an identical, indistinct bag or tool blob in front of them. (center, moderate)
- claude-opus-5.5: The tool bags are vague, identical blobs with no clear tools. (center, weak)

**track_geometry**: score 11, raised in 5/9 calls, at bottom-center, center, bottom-left

- claude-opus-5.5: The rails diverge without any visible switch mechanism or frog, and are embedded in plain concrete slabs. (bottom-center, moderate)
- claude-opus-5.5: The two tracks diverge without any visible switch or frog. The rails fade oddly into the depot entrances. (center, moderate)
- claude-opus-5.5: The two tracks diverge without any visible switch or frog mechanism, and the gauge and curvature look inconsistent. (bottom-center, moderate)
- gemini-3.1-pro-preview: The rails curve unnaturally and terminate abruptly near the kneeling workers, rather than leading smoothly into the building's bays. (center, strong)

**people_clothing_or_gear**: score 6, raised in 3/9 calls, at middle-right, center

- gpt-6-sol: The worker on the right branch closely repeats the others’ clothing and posture. (middle-right, moderate)
- gpt-6-sol: The workers’ high-visibility clothing and helmets look strikingly similar across the repeated figures. (center, moderate)
- gemini-3.1-pro-preview: The protective gear and helmets on the workers lack distinct, realistic detail, blending into their uniforms in a typical AI fashion. (center, moderate)

## flux-3-image-two-1.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.01 / 0.05
- anthropic/claude-opus-5.5: 0.62 / 0.65 / 0.80

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: Catenary poles with cantilever arms are present, but there is almost no coherent contact wire running above either track; the few wires run diagonally and seem to terminate arbitrarily. (top-center, moderate)
- claude-opus-5.5: Poles carry only a few odd diagonal wires; there is no coherent contact wire running above either track, unlike a real tram depot. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and don't connect coherently between poles; the catenary layout is implausible for a tram depot. (top-center, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: There is uniform over-processed smoothness with crisp edges, and the building's paneling is very regular. (whole-image, weak)
- claude-opus-5.5: The image has a uniform, overprocessed sharpness with a painterly concrete texture and puddles. (whole-image, weak)
- claude-opus-5.5: Smooth, overly clean concrete and uniform puddle reflections with painterly softness. (whole-image, weak)

**people_pose_or_placement**: score 2, raised in 2/9 calls, at middle-left

- claude-opus-5.5: Both workers are kneeling beside near-identical toolboxes on the left track in a staged, symmetric arrangement. Their hands and tool details are vague. (middle-left, weak)
- claude-opus-5.5: Two workers crouch on the left track with near-identical toolboxes, a staged, symmetric arrangement typical of generated scenes. (middle-left, weak)

**track_geometry**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: Left track's rails converge oddly toward the depot; the right rail of the left track and its gauge look inconsistent, with the track narrowing unnaturally near the workers. (center, moderate)

**people_clothing_or_gear**: score 1, raised in 1/9 calls, at middle-left

- claude-opus-5.5: The workers' hi-vis gear and toolboxes look generic and slightly smeared; hands and tools at the rail are indistinct. (middle-left, weak)

## flux-3-image-two-2.jpg: mean P(AI) 0.31 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.60 / 0.30 / 0.75
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.95

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-right, top-left

- claude-opus-5.5: The overhead wiring is sparse and inconsistent: a single wire runs diagonally from the top-right pole, and there is no clear contact wire above each track as a real tram depot would have. (top-right, moderate)
- claude-opus-5.5: Overhead wires sparse and inconsistent, poles with arms not connecting cleanly to catenary (top-right, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires and their supporting structures are jumbled, disjointed, and structurally illogical. The lines often start and stop abruptly or merge into undefined blobs. (top-left, strong)

**track_geometry**: score 6, raised in 3/9 calls, at center, bottom-left

- claude-opus-5.5: The embedded rails curve into the doors with a mostly consistent gauge, although the left track's convergence looks slightly simplified. (center, weak)
- claude-opus-5.5: Left track rails curve oddly; the right rail of left track bends toward the left rail near the workers, and rails seem to diverge into the depot without clear switch logic (center, moderate)
- gemini-3.1-pro-preview: The grooved rails (typical for embedded tram tracks) are inconsistently rendered. The inner grooves appear to fill in or blend seamlessly into the surrounding wet concrete in several places, lacking sharp mechanical definition. (bottom-left, strong)

**people_pose_or_placement**: score 2, raised in 2/9 calls, at middle-left

- claude-opus-5.5: Two workers in hi-vis kneel beside toolboxes on the left track; their poses are coherent, but the staging looks somewhat generic. (middle-left, weak)
- claude-opus-5.5: Two workers kneeling at the left track with toolboxes, plausible but somewhat staged and smooth rendering (middle-left, weak)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The toolboxes or equipment sitting on the track next to the workers appear as solid, somewhat amorphous dark blocks. They lack specific details like handles, latches, or distinct panels that real equipment would have. (middle-left, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The ladder attached to the side of the corrugated building has rungs that are unevenly spaced and slightly bent, which is a common artifact in AI-generated structural elements. (top-center, moderate)

## flux-kontext-max-group-1.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.05 / 0.95 / 0.05

**text_signage_or_markings**: score 9, raised in 4/9 calls, at middle-right, bottom-right

- claude-opus-5.5: Lettering on the right worker's vest is garbled and unreadable, like pseudo-text rather than a real company logo. (middle-right, moderate)
- claude-opus-5.5: Text on the right worker's vest is garbled pseudo-lettering ('SNAWRCC'-like) rather than a legible company name. (middle-right, moderate)
- claude-opus-5.5: Vest logo text on right worker is garbled, pseudo-lettering. (middle-right, moderate)
- gemini-3.1-pro-preview: The text or logo on the back of the vest of the worker on the right is illegible and appears as nonsensical squiggles. (bottom-right, strong)

**people_anatomy**: score 7, raised in 4/9 calls, at middle-right, center, bottom-left

- claude-opus-5.5: The right worker's hand reaches oddly beyond the rail. Hands and legs blend softly into the ground. (middle-right, weak)
- claude-opus-5.5: The hands of the middle worker and the right worker are smeared or indistinct where they touch the ground. (center, weak)
- claude-opus-5.5: Worker's hand near rail appears smeared/malformed, blending with the concrete; hands lack clear finger structure. (center, moderate)
- gemini-3.1-pro-preview: The hands of the worker on the left track appear slightly morphed and lack defined fingers, a common AI artifact. (bottom-left, strong)

**track_geometry**: score 5, raised in 3/9 calls, at center, middle-right

- claude-opus-5.5: The tracks have no visible switch or junction. The rails curve and diverge oddly into two bays, and the left worker's track width looks inconsistent. (center, weak)
- claude-opus-5.5: Tracks are embedded in concrete with no visible switch or diverging point; rails look uniform and slightly smooth, gauge between pairs inconsistent. (center, weak)
- gemini-3.1-pro-preview: The track on the right seems to blend or fade into the concrete surface unevenly and unconvincingly towards the building entrance. (middle-right, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center, bottom-center

- claude-opus-5.5: Three workers crouch in near-identical poses with matching gear, evenly arranged across the tracks. It looks staged and generated. (center, moderate)
- gemini-3.1-pro-preview: The workers are crouching near the tracks, but their interaction with the rails seems unnatural and non-functional, as if they are placed there rather than performing a specific task. (bottom-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The concrete and puddles have an overly smooth, painterly texture, and the background objects are vague and mushy. (whole-image, moderate)
- claude-opus-5.5: The image has an overly smooth, uniform rendering with a painterly wet concrete texture. (whole-image, weak)
- claude-opus-5.5: Overall smooth, painterly texture on wet concrete and building facade with soft repetitive details. (whole-image, weak)

## flux-kontext-max-group-2.jpg: mean P(AI) 0.68 (fails)

- anthropic/claude-opus-5.5: 0.90 / 0.92 / 0.90
- openai/gpt-6-sol: 0.12 / 0.08 / 0.19
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 15, raised in 6/9 calls, at center, bottom-center, whole-image

- claude-opus-5.5: Embedded tram rails lack visible flangeway grooves, fastenings or joints; rails look like smooth painted strips merging into concrete. (center, moderate)
- claude-opus-5.5: The two tracks run as separate parallel embedded rails with no visible switch or junction connecting them, and the gauge looks inconsistent. (center, moderate)
- claude-opus-5.5: Tracks are embedded in concrete with no visible switch or junction, curving unnaturally toward depot doors; rails appear smooth and stylized. (center, moderate)
- gemini-3.1-pro-preview: The steel rails occasionally lose their 3D shape and appear to flatten or blend directly into the wet concrete surface. (bottom-center, strong)

**overhead_wires_or_poles**: score 15, raised in 6/9 calls, at top-right, top-center, top-left

- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, poles' arms not connecting logically to wires over tracks. (top-right, moderate)
- claude-opus-5.5: The overhead wires are sparse and disconnected, and the poles and cantilevers don't form a coherent catenary system. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent, with catenary not aligned over the tracks and poles placed arbitrarily. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires for the trains fade into the sky and do not connect logically to the support poles or form a coherent catenary system. (top-left, strong)

**people_anatomy**: score 14, raised in 4/9 calls, at middle-left, whole-image, bottom-right, bottom-left, bottom-center

- claude-opus-5.5: The workers' hands and feet are mushy and poorly defined where they meet the rails. The kneeling poses look physically awkward. (middle-left, moderate)
- gemini-3.1-pro-preview: The hands of the workers are consistently malformed, appearing as unidentifiable blobs or merging into their legs without distinct fingers. (whole-image, strong)
- gemini-3.1-pro-preview: The worker on the far right has a distorted facial profile and his left arm appears to be missing or completely merged into his leg. (bottom-right, strong)
- gemini-3.1-pro-preview: The leftmost worker's hand touching the rail is an indistinct, formless blob lacking individual fingers. (bottom-left, strong)

**reflections_or_wet_surfaces**: score 7, raised in 4/9 calls, at bottom-center, bottom-right, center

- claude-opus-5.5: Wet concrete reflections are smeared and painterly, not matching figure positions precisely. (bottom-center, weak)
- gemini-3.1-pro-preview: The reflections of the workers on the wet ground are imprecise and sometimes appear as disconnected dark smudges rather than accurate mirror images. (bottom-right, moderate)
- gemini-3.1-pro-preview: The reflections on the wet concrete in the middle of the yard are generic light and dark patches that do not accurately correspond to the structures or sky above. (center, moderate)
- gemini-3.1-pro-preview: The reflections of the workers on the wet concrete, particularly the two inner workers, are blurry and do not accurately reflect the shapes and postures of the figures above them. (bottom-center, moderate)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric staging: two pairs of workers in identical poses crouching at each track, mirrored composition typical of generated images. (whole-image, moderate)
- claude-opus-5.5: Four workers in near-identical poses and gear placed symmetrically, two per track, like a staged generated scene. (whole-image, moderate)
- claude-opus-5.5: Highly symmetric staging: two workers per track in near-identical crouching poses, mirrored arrangement typical of generated scenes. (whole-image, moderate)

## flux-kontext-max-two-1.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.85

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric staging: two workers crouched identically between rails of two parallel tracks leading into two matching depot doors, typical of generated 'trolley problem' style scenes. (whole-image, moderate)
- claude-opus-5.5: Highly symmetric staging: two workers crouched identically between rails on two parallel tracks, each leading to a matching depot door — typical of generated prompts. (whole-image, moderate)
- claude-opus-5.5: Highly symmetric staging: two workers crouched identically between rails of two parallel tracks, each leading into matching depot doors; feels constructed for a prompt. (whole-image, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left, top-center

- claude-opus-5.5: Overhead wires and pole arms are sparse and don't form a coherent catenary system over the tracks. (top-left, moderate)
- claude-opus-5.5: Overhead wires attach inconsistently to poles and do not form a coherent catenary over the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, with poles holding arms that don't clearly align with tracks; wires end abruptly. (top-center, moderate)

**track_geometry**: score 5, raised in 3/9 calls, at center

- claude-opus-5.5: Embedded tracks appear as simple grooves with no switch connection despite being 'branches'; rails curve oddly and slab joints are inconsistent. (center, moderate)
- claude-opus-5.5: Embedded rails with no visible switch, sleepers, or consistent groove geometry; the rails lack realistic flangeway detail and appear smoothly painted onto the concrete. (center, moderate)
- claude-opus-5.5: Tracks are embedded in concrete with no visible switch or junction connecting them despite 'branch' layout; rails curve smoothly but the tracks originate ambiguously near the camera. (center, weak)

**people_clothing_or_gear**: score 5, raised in 4/9 calls, at center, middle-left, bottom-left

- claude-opus-5.5: Left worker's orange vest has reflective bands blending oddly with hi-vis yellow; hands holding indistinct object. (center, weak)
- claude-opus-5.5: Left worker's orange vest merges oddly with the jacket; the hard hat and ear area blend into the face with smeared detail. (middle-left, weak)
- claude-opus-5.5: Left worker holds an indistinct object; vest reflective bands and hood slightly smeared; ear area blends into helmet. (middle-left, weak)
- gemini-3.1-pro-preview: The left worker's right boot heel extends backwards and downwards in an unnatural shape that does not match real footwear construction. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Smooth, painterly wet concrete and uniform reflections with plasticky detail in background objects. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly rendering of wet concrete and puddle reflections with uniform softness typical of diffusion output. (whole-image, moderate)

## flux-kontext-max-two-2.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.90 / 0.88
- google/gemini-3.1-pro-preview: 1.00 / 0.05 / 0.95

**text_signage_or_markings**: score 16, raised in 5/9 calls, at center, middle-right, bottom-left

- claude-opus-5.5: Text on left worker's vest is garbled, illegible orange lettering typical of AI generation. (center, moderate)
- claude-opus-5.5: Right worker's vest logo is a smeared, unreadable patch. (middle-right, weak)
- claude-opus-5.5: Text on left worker's vest back is garbled orange pseudo-lettering, and the right vest's logo is an illegible scribble. (center, strong)
- claude-opus-5.5: Text on left worker's vest back is garbled orange gibberish lettering, typical of AI text rendering. (center, strong)

**people_anatomy**: score 9, raised in 3/9 calls, at middle-left, bottom-left, bottom-right

- claude-opus-5.5: The left worker's hand blends into the wet ground, and his body proportions look slightly off. (middle-left, weak)
- gemini-3.1-pro-preview: The right hand of the worker crouching on the left, which is touching the ground, is malformed and lacks distinct fingers, appearing instead as a continuous fleshy lump. (bottom-left, strong)
- gemini-3.1-pro-preview: The left hand of the worker crouching on the right is poorly defined and blends unnaturally into the dark sleeve, lacking recognizable finger structure. (bottom-right, strong)
- gemini-3.1-pro-preview: The person standing in the background on the far left, near the fence, is poorly rendered. Their lower half lacks definition and seems to blend incorrectly with the background elements. (middle-left, moderate)

**track_geometry**: score 8, raised in 4/9 calls, at whole-image, center

- claude-opus-5.5: The two tracks diverge from nowhere with no visible switch or junction, and the rails curve smoothly with an odd, idealized symmetry. (whole-image, moderate)
- claude-opus-5.5: The two tracks curve separately into the two depot doors with no visible switch or junction. The rails look embedded in a seamless slab in an idealized way. (whole-image, moderate)
- claude-opus-5.5: The tracks diverge smoothly with no visible switch, frog or point blades where the branches separate, which is implausible for a real depot. (center, moderate)
- gemini-3.1-pro-preview: As the tracks recede into the mid-ground, the rails lose definition. The grooves in the concrete (flangeways) alongside the rails become indistinct or disappear, and the rail width appears slightly inconsistent. (center, moderate)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Two workers crouched in mirrored poses, each centered on a branch, looks like a staged synthetic scenario. (whole-image, moderate)
- claude-opus-5.5: The scene is near-symmetric, with two crouching workers placed in mirrored positions on the two tracks in front of two matching doors. (whole-image, moderate)
- claude-opus-5.5: Two crouching workers are placed symmetrically, one on each branch, with an overly clean, staged look and two matching portals in the depot. (whole-image, moderate)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-center

- claude-opus-5.5: Overhead wires are sparse and inconsistent, with no coherent catenary over the tracks. (top-center, weak)
- claude-opus-5.5: The overhead wires are sparse and inconsistent, and the catenary does not follow the tracks. (top-center, moderate)

## seedream-4.5-group-1.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.88 / 0.88
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.05

**track_geometry**: score 12, raised in 4/9 calls, at center, bottom-left

- claude-opus-5.5: Tracks embedded in concrete with odd gauge consistency; left track rails curve unnaturally and the tie bar between rails floats on the slab surface rather than being functional hardware. (center, moderate)
- claude-opus-5.5: Left track rails curve and converge oddly toward the shed; rails embedded in concrete with inconsistent gauge and smooth, toy-like bars between them (center, moderate)
- claude-opus-5.5: Embedded rails curve and converge oddly; left track gauge appears inconsistent, rails seem to merge into slab without proper groove or fastening detail. (center, moderate)
- gemini-3.1-pro-preview: The metal crossbars the workers on the left are handling look like rungs of a ladder and do not connect to the rails with any recognizable or mechanically sound fastening system. (bottom-left, strong)

**people_anatomy**: score 12, raised in 2/9 calls, at middle-right, bottom-left

- gemini-3.1-pro-preview: The worker on the right track lacks a defined lower body; it appears as a torso resting directly on the ground with arms melting into the rail. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket appear as mangled, formless stumps blending into the object they are supposed to be holding. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker on the right track has highly distorted anatomy; their legs appear to be a tangled mass of fabric without discernible bone structure, and the posture is physically impossible. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the leftmost worker on the left track are formless blobs resting on the rail, completely lacking fingers or articulation. (bottom-left, strong)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at bottom-left, center

- claude-opus-5.5: Tool bags and tools on the ground are vague, with indistinct shapes and no clear tool function. (bottom-left, weak)
- claude-opus-5.5: Gauge/tie bars across rails look like plain rods with no fastening details, merging into the rails (center, moderate)
- claude-opus-5.5: Tie bars/gauge tools across the rails look like generic bars, floating and simplified, with no clear clamping mechanism. (center, moderate)
- gemini-3.1-pro-preview: The equipment being handled by the three workers on the left is an indistinct, amorphous shape that merges illogically with their hands and the track. (bottom-left, strong)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at bottom-left, center

- claude-opus-5.5: Three workers kneeling in a neat row with nearly identical poses and an evenly spaced staged composition; the right worker is posed similarly. (bottom-left, moderate)
- claude-opus-5.5: Three workers kneel in a neat staged row with similar poses and generic hi-vis; bags placed symmetrically beside them (bottom-left, moderate)
- claude-opus-5.5: Three workers kneeling in a neat row with nearly identical poses, each with a tool bag beside them; staged, symmetrical arrangement typical of generated imagery. (center, moderate)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, uniform rendering with a painterly wet-concrete sheen and soft detail typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, clean rendering of wet concrete and building with uniform painterly reflections (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly wet concrete and uniform rendering of the hi-vis clothing. (whole-image, moderate)

## seedream-4.5-group-2.jpg: mean P(AI) 0.58 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.85 / 0.70 / 0.72
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.99

**people_anatomy**: score 17, raised in 3/9 calls, at bottom-center, middle-right, bottom-left, bottom-right

- gemini-3.1-pro-preview: The worker with yellow pants has severely mangled legs, with the lower right leg appearing to be completely missing and a disconnected boot resting nearby. (bottom-center, strong)
- gemini-3.1-pro-preview: The lower body of the worker on the right track is distorted, with the feet appearing as an undefined amalgamation of shapes rather than distinct boots. (middle-right, strong)
- gemini-3.1-pro-preview: The leftmost worker's left foot resembles a formless blob rather than a distinct boot. (bottom-left, moderate)
- gemini-3.1-pro-preview: The boots of the kneeling workers lack clear structure and appear to melt or blend unnaturally into the wet concrete. (bottom-left, strong)

**tools_or_small_objects**: score 16, raised in 4/9 calls, at bottom-left, bottom-center, middle-right

- claude-opus-5.5: The rod or gauge bar across the left track runs oddly under the kneeling workers and ends ambiguously near the leftmost worker. (bottom-left, weak)
- gemini-3.1-pro-preview: The tools being handled by the workers on the left are vague, intersecting lines that do not resemble functional equipment. (bottom-center, moderate)
- gemini-3.1-pro-preview: The tool bag next to the worker on the right merges unnaturally with the track and lacks coherent structural details. (middle-right, moderate)
- gemini-3.1-pro-preview: The tool bags placed on the ground between the workers look like indistinct blobs of color, lacking zippers, pockets, or realistic seams. (bottom-center, strong)

**track_geometry**: score 9, raised in 5/9 calls, at center, whole-image, bottom-center, middle-right

- claude-opus-5.5: The two tracks diverge with no visible switch, and the tram rails look embedded in concrete in a simplified way. The transverse bars are uniform and shiny. (center, moderate)
- claude-opus-5.5: The grooved rails embedded in concrete are mostly coherent, but both pairs converge somewhat smoothly and uniformly, with little realistic wear detail. (whole-image, weak)
- claude-opus-5.5: The two diverging tracks start abruptly with no visible switch or frog mechanism, and the rails curve apart in an idealized way. (center, moderate)
- gemini-3.1-pro-preview: The embedded rails, particularly where the middle worker on the left is touching them, appear flat and lack the defined flangeway groove expected in such infrastructure. (bottom-center, moderate)

**composition_or_staging**: score 7, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Classic trolley-problem staging: three workers kneeling on the left track, one on the right, all facing away in near-identical poses and gear. (whole-image, strong)
- claude-opus-5.5: Scene is staged like a trolley-problem setup: three workers kneeling on one branch, one on the other, neatly arranged in a symmetric composition. (whole-image, moderate)
- claude-opus-5.5: The scene matches the classic trolley-problem layout: a track splits into two branches, with three workers on the left branch and one on the right. This staged arrangement is common in generated imagery. (whole-image, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at center, bottom-left

- claude-opus-5.5: The leftmost worker kneels outside the left rail, and the workers' alignment relative to the rails is odd. Each crouches over a transverse bar between the rails with no clear task. (center, moderate)
- claude-opus-5.5: The three workers kneel in near-identical poses with near-identical gear and bags, which looks like repeated templating. (bottom-left, weak)
- gemini-3.1-pro-preview: The hands of the worker on the far left seem to merge directly into the thin metal rod they are holding, with no defined fingers visible. (bottom-left, strong)

## seedream-4.5-two-1.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.90 / 0.90 / 0.88
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**track_geometry**: score 19, raised in 5/9 calls, at center, middle-right, bottom-center, bottom-left, bottom-right

- claude-opus-5.5: Left track's sleepers and ballast merge oddly into concrete apron; right rail of left track runs through where worker kneels with inconsistent sleeper spacing near bottom. (center, moderate)
- claude-opus-5.5: Right track rails set directly in concrete with no fastenings, gauge appears to vary and edges blend with slab seams unrealistically. (middle-right, moderate)
- claude-opus-5.5: Left track ballasted with sleepers runs into a smooth concrete slab; the right worker kneels on the rail itself, and the sleeper spacing and ballast edges blend inconsistently. (center, moderate)
- claude-opus-5.5: The right track's rails sit on plain concrete with no fastenings visible, and the rail curvature looks overly smooth and painterly. (middle-right, moderate)

**tools_or_small_objects**: score 11, raised in 5/9 calls, at bottom-left, bottom-center

- claude-opus-5.5: Yellow tool connected to a cable that wanders loosely across ground, shape of tool indistinct. (bottom-left, weak)
- claude-opus-5.5: The yellow power tool and cable are vague and appear to be lying on nothing coherent; the workers' hands are not interacting with any discernible task. (bottom-left, moderate)
- claude-opus-5.5: Yellow power tool and cable lying on wet ground are smudged and indistinct, without a clear form. (bottom-left, weak)
- gemini-3.1-pro-preview: The tool bag on the ground next to the right worker is a misshapen blob; the pockets and handles are not clearly defined or structurally logical. (bottom-center, strong)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, uniform rendering with painterly wet reflections and generic clean staging typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: The image has a uniform, slightly airbrushed rendering, idealized puddle reflections, and a generic staged depot look. (whole-image, moderate)
- claude-opus-5.5: The scene has an overly clean, uniform rendering, with painterly wet reflections and generic depot props. (whole-image, moderate)

**buildings**: score 5, raised in 3/9 calls, at top-center, middle-left

- claude-opus-5.5: The tracks lead into shed doors, but the left track entry alignment and the interior perspective look slightly off. (top-center, weak)
- gemini-3.1-pro-preview: Looking into the open doorways of the building, the interior details (lights, scaffolding) resolve into a confusing, abstract jumble of shapes. (top-center, moderate)
- gemini-3.1-pro-preview: The small door situated between the two large bays has a nonsensical, poorly defined structure in front of it that does not clearly represent stairs or a platform. (middle-left, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Workers' hands vague and merged with rails; right worker's knee pad/leg shapes ambiguous. (center, moderate)
- claude-opus-5.5: Right worker's leg and boot placement is ambiguous, with the hi-vis trouser leg blending into the rail and bag. (center, moderate)

## seedream-4.5-two-2.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.02

**overhead_wires_or_poles**: score 11, raised in 5/9 calls, at top-center, top-right

- claude-opus-5.5: Overhead wires are sparse and inconsistent, poles with arms not supporting coherent catenary (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent with poles; catenary arms don't connect logically to wires. (top-right, moderate)
- claude-opus-5.5: Catenary wires are sparse and inconsistent, with poles having no coherent wire attachment pattern. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires leading into the doorways are messy and lack proper structural support, with some wires terminating in mid-air or attaching to vague, floating shapes. (top-center, moderate)

**track_geometry**: score 9, raised in 4/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Embedded rails curve smoothly but the left track's rails converge oddly toward the depot door with inconsistent gauge; no visible switch connecting tracks despite branching layout (center, moderate)
- claude-opus-5.5: Embedded rails lack visible flangeways or consistent gauge detail; left track rails curve smoothly but the right rail of left track merges oddly with the concrete slab edge. (bottom-center, moderate)
- claude-opus-5.5: Embedded rails curve smoothly but lack visible switch, flangeways or realistic rail head detail; the left track's rails merge oddly into the concrete near the building. (center, moderate)
- gemini-3.1-pro-preview: The right rail of the left track is inconsistent; it appears as a single thin line at the bottom, disappears entirely near the tool bag, and then reappears as a proper grooved rail further back. (bottom-left, strong)

**people_anatomy**: score 8, raised in 3/9 calls, at center, bottom-left, bottom-center

- claude-opus-5.5: Kneeling worker's legs and boots appear ambiguous; the left worker's hands and feet blend into a shapeless mass. (center, moderate)
- gemini-3.1-pro-preview: The hands and tools of the worker on the left are rendered as an amorphous blob, and their left boot appears to merge seamlessly into the wet concrete. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower bodies of the workers are deformed. The left worker's boots appear as amorphous blobs that merge into the ground, while the right worker's legs and feet lack clear anatomical structure and separation. (bottom-center, strong)

**texture_noise_or_sharpness**: score 7, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly clean, smooth rendered surfaces, uniform wet sheen and generic depot structures typical of diffusion output (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly wet concrete and soft, uniform texture with no sensor noise. (whole-image, moderate)
- gemini-3.1-pro-preview: The expansion joints cut into the concrete pavement are highly irregular, wobbly, and form illogical, curving patterns rather than the straight, engineered grid typical of real poured concrete slabs. (whole-image, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: Tool bag has vague, indistinct straps and cable lead with no clear device (center, weak)
- claude-opus-5.5: Tool bag has a smeary, undefined form with a strap that dissolves into the ground. (center, weak)
- gemini-3.1-pro-preview: A black cable extending from the tool bag towards the right ends abruptly on the wet concrete without connecting to any tool or power source. (bottom-center, strong)
- gemini-3.1-pro-preview: The black and yellow tool bag on the ground next to the right worker is a nonsensical jumble of shapes, lacking coherent straps, pockets, or handles. (bottom-center, moderate)

## seedream-5.0-pro-group-1.jpg: mean P(AI) 0.54 (fails)

- openai/gpt-6-sol: 0.06 / 0.18 / 0.12
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.80
- google/gemini-3.1-pro-preview: 0.98 / 0.05 / 0.98

**people_anatomy**: score 11, raised in 3/9 calls, at center, bottom-right, middle-right, middle-left

- claude-opus-5.5: Workers' hands and faces are vague, and limbs blend into the rails and the ground. (center, moderate)
- gemini-3.1-pro-preview: The lower body of the worker on the right track is severely malformed, appearing to melt into the ground and blending confusingly with the dark object next to him. (bottom-right, strong)
- gemini-3.1-pro-preview: The worker on the right track lacks a defined head or neck; the yellow helmet appears to be unnaturally fused directly onto the shoulder/upper back area. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the workers on the left track are completely undefined, appearing as amorphous blobs that melt seamlessly into the tools and the metal rails. (middle-left, strong)

**overhead_wires_or_poles**: score 10, raised in 5/9 calls, at top-left, top-center

- claude-opus-5.5: Poles carry cantilever arms, but the few wires run in inconsistent directions and don't form a coherent catenary over the tracks. (top-left, moderate)
- claude-opus-5.5: Catenary is sparse and inconsistent. Single thin wires and cantilever arms don't line up over the tracks as a real tram depot's overhead would. (top-left, moderate)
- claude-opus-5.5: The catenary wiring is sparse and inconsistent, with wires that do not connect logically over the tracks. (top-center, weak)
- gemini-3.1-pro-preview: The overhead electrical wires appear disjointed and structural, often terminating abruptly in mid-air or lacking logical connections to the supporting poles. (top-center, strong)

**tools_or_small_objects**: score 9, raised in 4/9 calls, at middle-left, center, bottom-left

- claude-opus-5.5: Tools on the ground are vague, melted shapes, and the workers' hands don't clearly grip any identifiable tool. (middle-left, moderate)
- claude-opus-5.5: Tools on the ground and in the workers' hands are vague, smeared shapes with no clear function. (center, moderate)
- claude-opus-5.5: Tools on the ground near the left group are smeared, indistinct shapes rather than identifiable implements. (center, moderate)
- gemini-3.1-pro-preview: The hands of the three workers on the left are huddled together, but there are no distinct tools visible; they appear to be interacting with indistinct, blob-like shapes on the rails. (bottom-left, strong)

**reflections_or_wet_surfaces**: score 7, raised in 5/9 calls, at bottom-left, whole-image, bottom-center

- claude-opus-5.5: The colored reflections of the hi-vis vests are plausible but blurry and smeared. (bottom-left, weak)
- claude-opus-5.5: The wet concrete has an overly uniform sheen, and the reflections are soft and painterly. (whole-image, weak)
- claude-opus-5.5: Reflections of the hi-vis vests are plausible, but they are blurred and generic. (bottom-left, weak)
- gemini-3.1-pro-preview: The reflections of the workers on the wet concrete are poorly defined and do not accurately reflect the specific shapes and poses of the figures above them. (bottom-center, moderate)

**track_geometry**: score 6, raised in 3/9 calls, at center, middle-left

- claude-opus-5.5: The rails curve smoothly into the concrete without a visible switch or crossing structure, and the gauge spacing looks inconsistent between the two tracks. (center, moderate)
- claude-opus-5.5: Rails sit directly on smooth concrete with no visible groove, fastenings or embedding detail, and the two tracks diverge without any plausible switch or connecting geometry. (center, moderate)
- gemini-3.1-pro-preview: As the left set of tracks enters the dark doorway of the building, the rails seem to lose definition and merge incorrectly, failing to maintain parallel lines. (middle-left, moderate)

## seedream-5.0-pro-group-2.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.75 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.00 / 0.05

**track_geometry**: score 9, raised in 4/9 calls, at center, bottom-left, middle-left

- claude-opus-5.5: Left track pair curves oddly; the left rail and right rail converge/diverge inconsistently, with the tracks emerging from a door but the rails not aligning cleanly into the depot opening. (center, moderate)
- claude-opus-5.5: The left track's rails converge and the gauge varies noticeably along their length, more than perspective explains, and they don't align cleanly with the depot door they lead into. (bottom-left, moderate)
- claude-opus-5.5: Left track rails converge oddly; left track leads toward left bay but the rails curve and merge unnaturally with the concrete, rail spacing inconsistent near the workers. (center, moderate)
- gemini-3.1-pro-preview: The steel rails of the left track become wobbly, lose definition, and appear to melt into the concrete surface around where the workers are positioned. (middle-left, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left

- claude-opus-5.5: Overhead wires and cantilever arms are sparse and illogical, not forming a coherent catenary system. (top-left, moderate)
- claude-opus-5.5: The overhead line structures are sparse and inconsistent: the wires don't clearly run along the tracks and the cantilever arms connect ambiguously. (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and don't form a coherent catenary system over the tracks. (top-left, moderate)

**people_anatomy**: score 6, raised in 1/9 calls, at center, middle-right

- gemini-3.1-pro-preview: The worker furthest to the right in the left group (wearing yellow) has an anatomically incorrect lower body, with a leg stretching backwards in a physically impossible way. (center, strong)
- gemini-3.1-pro-preview: The lower body of the worker on the right track is poorly defined and seems to blend into the ground and the object next to him. (middle-right, strong)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at center

- claude-opus-5.5: Three workers kneel in a neat row across the left track with similar poses; staged look typical of generated scenes. (center, moderate)
- claude-opus-5.5: The three workers kneel in a tidy, staged row and have no clear tools or task at the rail. The lone worker on the right mirrors the same pose. (center, weak)
- claude-opus-5.5: Three workers kneeling in a neat row inside the gauge, posed uniformly; right worker kneels directly on a rail area with bag, staged look. (center, moderate)

**reflections_or_wet_surfaces**: score 5, raised in 3/9 calls, at bottom-left, center

- claude-opus-5.5: Reflections of workers are blurry colored blobs, somewhat plausible but overly smooth. (bottom-left, weak)
- claude-opus-5.5: The workers' reflections are saturated, smeared colour blobs that look painted on rather than shaped by the uneven wet concrete. (center, moderate)
- claude-opus-5.5: Reflections of workers are soft, overly colorful blobs without proper geometry matching the bodies. (center, moderate)

## seedream-5.0-pro-two-1.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.72 / 0.75 / 0.65
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.05

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and inconsistent; catenary lines start and end abruptly with no coherent span wiring over the tracks. (top-center, moderate)
- claude-opus-5.5: The catenary is incoherent: few wires, which run diagonally from pole arms to nowhere instead of forming a consistent contact-wire system over the tracks. (top-left, moderate)
- claude-opus-5.5: Catenary wires are sparse and inconsistent; they don't clearly run along the track centerlines as a real tram depot's contact wire would. (top-center, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The concrete and wet surfaces have an overly smooth, painterly texture with a uniform soft sharpness typical of generated images. (whole-image, moderate)
- claude-opus-5.5: Surfaces are overly smooth and painterly, and the background equipment is soft and lacks definition. (whole-image, moderate)
- claude-opus-5.5: Surfaces look uniformly smooth and painterly, and the puddles have a soft, generic rendering. (whole-image, weak)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: The workers' tool bags and the tool between them are blobby and indistinct, with no clear functional detail. (center, moderate)
- claude-opus-5.5: The tool the two workers share on the rail is vague and smeared, and the bags beside them are amorphous blobs. (center, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The staged dashcam view of two workers kneeling on one branch, with a symmetric depot behind, matches a typical prompt-driven scene. (whole-image, weak)
- claude-opus-5.5: The scene is a neat, symmetrical depot with two doors and two tracks, framed by a windscreen at the bottom, which matches typical generated scenarios. (whole-image, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-left

- claude-opus-5.5: The cable drum, pallets and cabinets are generic, with simplified shapes and fuzzy detail. (middle-left, weak)

## seedream-5.0-pro-two-2.jpg: mean P(AI) 0.18 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.15 / 0.20
- google/gemini-3.1-pro-preview: 0.05 / 0.01 / 0.98

**overhead_wires_or_poles**: score 6, raised in 1/9 calls, at top-left, top-right

- gemini-3.1-pro-preview: The overhead wires (catenary) are nonsensical, floating in the sky without connecting properly to the poles or each other, appearing as random squiggles. (top-left, strong)
- gemini-3.1-pro-preview: Similar to the left side, the overhead wires are fragmented, faint, and do not form a logical structural system. (top-right, strong)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The tools or equipment next to the kneeling workers are indistinct blobs that seem to melt into the ground and the workers' hands. (middle-left, moderate)

**track_geometry**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The flangeway (the groove next to the rail in the concrete) is inconsistent in width and definition, sometimes seeming to disappear entirely. (middle-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The chain-link fence in the background has an irregular pattern that dissolves into noise rather than maintaining a consistent structure. (middle-left, moderate)
