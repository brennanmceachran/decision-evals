# Realism check: v4-seedream-quick

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| overhead_wires_or_poles | 139 | 24/24 |
| track_geometry | 113 | 23/24 |
| texture_noise_or_sharpness | 99 | 24/24 |
| people_pose_or_placement | 69 | 18/24 |
| people_anatomy | 68 | 13/24 |
| tools_or_small_objects | 61 | 14/24 |
| composition_or_staging | 36 | 16/24 |
| reflections_or_wet_surfaces | 29 | 12/24 |
| camera_or_windscreen | 20 | 11/24 |
| buildings | 14 | 7/24 |
| background_clutter | 12 | 8/24 |
| people_clothing_or_gear | 11 | 4/24 |
| text_signage_or_markings | 10 | 2/24 |
| lighting_or_shadows | 1 | 1/24 |

## e-group-L-1.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.70 / 0.80 / 0.85
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.01

**track_geometry**: score 6, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: The two tracks are described as branches, yet no switch or junction is visible; they run as separate parallel pairs from the bottom edge, and the rail curvature looks smoothly stylized rather than engineered. (center, moderate)
- claude-opus-5.5: Two embedded tracks diverge without any visible switch point or frog; the left track's rails curve oddly and the right track appears unrelated, an implausible layout for a branching yard. (center, moderate)
- claude-opus-5.5: Two embedded tracks diverge but there is no visible switch point or frog; left track's right rail curves oddly and tracks appear to be separate parallel pairs without a junction mechanism, despite implying a branch. (bottom-center, moderate)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Three near-identical workers in matching hi-vis gear are evenly staged around the rail, with a similar lone worker on the right, which looks like a composed generated scene. (middle-left, weak)
- claude-opus-5.5: Three workers are crouched in a neat row straddling the rail, with near-identical poses and gear, which looks like a staged, generated arrangement. (middle-left, moderate)
- claude-opus-5.5: Three workers crouched in a neat row on the left track and one on the right, staged symmetrically; poses are generic with smeared hands and tools. (middle-left, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The wet concrete reflections and the building facade have a smooth, slightly painterly uniformity, and the far details are soft and generic. (whole-image, weak)
- claude-opus-5.5: The image has a uniformly smooth, slightly painterly texture on the concrete and building cladding. (whole-image, weak)
- claude-opus-5.5: Overly smooth, painterly wet concrete and building panels with soft, uniform detail typical of diffusion output. (whole-image, moderate)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-center, top-left

- claude-opus-5.5: The catenary wiring is sparse and inconsistent: poles carry arms with only faint, partial wires that do not form a coherent overhead system over the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead wires attach inconsistently to poles and terminate oddly; catenary doesn't follow tracks properly. (top-left, weak)

**reflections_or_wet_surfaces**: score 2, raised in 2/9 calls, at center

- claude-opus-5.5: The wet-surface reflections under the workers are soft yellow blobs that lack the detailed shapes a real reflection would show. (center, weak)
- claude-opus-5.5: Yellow vest reflections plausible but blurry; puddle shapes vague. (center, weak)

## e-group-L-2.jpg: mean P(AI) 0.21 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.25 / 0.70 / 0.70
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- claude-opus-5.5: Poles carry cantilever arms, but there are almost no contact wires running above the tracks; the few visible wires are disconnected diagonals that don't form a coherent catenary system. (top-center, moderate)
- claude-opus-5.5: Poles carry only a few thin wires that trail off at odd angles; there is no coherent catenary running above the tracks entering the depot doors. (top-center, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Workers' faces are hidden and their hands and tools are vague, smeared blobs. There is no clear interaction with any identifiable work item on the rails. (center, moderate)
- claude-opus-5.5: The kneeling workers' hands and tools merge into a muddy blob at the rail, with no distinct work being performed. (center, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Slightly smooth, processed look but no obvious generative artifacts. (whole-image, weak)
- claude-opus-5.5: Surfaces are overly smooth and painterly. The wet concrete reflections are uniform, and the fine detail on the building and fence is soft and repetitive. (whole-image, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at center

- claude-opus-5.5: Workers in matching hi-vis are posed symmetrically on the rails, three on the left and one on the right, which looks like a typical staged generative composition. (center, weak)

**track_geometry**: score 1, raised in 1/9 calls, at bottom-left

- claude-opus-5.5: The left track's rails converge into the depot plausibly, but the gauge and curvature look inconsistent compared with the right track. (bottom-left, weak)

## e-group-L-3.jpg: mean P(AI) 0.31 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.05
- anthropic/claude-opus-5.5: 0.88 / 0.88 / 0.85

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Tracks diverge into two separate branches with no visible switch/frog; left track rails appear to curve oddly and the gap between branches is plain concrete with no transition hardware. (center, moderate)
- claude-opus-5.5: Two tracks diverge without any visible switch/frog; rails simply curve apart into separate depot doors with no connecting turnout hardware, which is implausible. (center, moderate)
- claude-opus-5.5: Two tracks diverge from nowhere; the left pair and right pair don't connect logically to a switch or to the depot doors, rails curve oddly toward the building entrances. (center, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Workers kneel on and straddle rails with tools that blur into indistinct clumps; hands and objects lack clear definition. (middle-left, moderate)
- claude-opus-5.5: Three workers kneel in a neat row across the rail with no clear task or tools visible; staging looks generic. (middle-left, moderate)
- claude-opus-5.5: Three workers kneeling in a tight cluster straddling a rail, staged composition typical of generated scenes; hands blend with rail. (middle-left, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-left, top-right

- claude-opus-5.5: Overhead wires are sparse and inconsistent; poles' cantilevers don't connect coherently to a catenary over the tracks. (top-left, moderate)
- claude-opus-5.5: Overhead wires on poles are sparse and don't form a coherent catenary over the tracks. (top-left, weak)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, arms on poles don't hold a coherent contact wire over tracks. (top-right, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Smooth, painterly wet concrete and generic building textures with soft, uniform detail. (whole-image, weak)
- claude-opus-5.5: Smooth, painterly concrete and puddle textures with uniform soft rendering typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, uniform wet concrete and building cladding with painterly rendering. (whole-image, weak)

**camera_or_windscreen**: score 3, raised in 3/9 calls, at bottom-center

- claude-opus-5.5: Dark dashboard/hood edge at bottom gives cab-view framing, plausible but common in generated prompts. (bottom-center, weak)
- claude-opus-5.5: Dark dashboard/hood edge framing is a common generated 'cab view' trope. (bottom-center, weak)
- claude-opus-5.5: Dashboard edge framing typical of generated driver-view prompts. (bottom-center, weak)

## e-group-R-1.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.90 / 0.92 / 0.93
- google/gemini-3.1-pro-preview: 0.98 / 0.95 / 0.02

**track_geometry**: score 12, raised in 5/9 calls, at center, bottom-right

- claude-opus-5.5: Tracks embedded in concrete diverge oddly; left track appears to originate from nowhere with no switch visible, geometry of the two branches is inconsistent with real depot trackwork. (center, moderate)
- claude-opus-5.5: Two parallel tracks diverge with no switch or frog visible; left track rails appear to curve oddly toward the far shed while right track runs into the other bay, with ambiguous continuity near the building. (center, moderate)
- claude-opus-5.5: Two parallel embedded tracks with no visible switch connecting them; left track rails merge toward the depot oddly and the right track's rails converge unnaturally into a single line near the far building. (center, moderate)
- gemini-3.1-pro-preview: The rails of the right track lose their physical structure and continuity where the workers are interacting with them, appearing to bend or melt into the workers' bodies. (bottom-right, strong)

**people_anatomy**: score 11, raised in 3/9 calls, at middle-right, bottom-right, middle-left

- claude-opus-5.5: Workers' hands and legs are smeared and indistinct; the middle worker's legs and boots blend with the rail. (middle-right, moderate)
- gemini-3.1-pro-preview: The workers kneeling on the right track have severely malformed limbs. Their arms and hands appear as undefined stumps or blobs that merge seamlessly into the steel rails. (bottom-right, strong)
- gemini-3.1-pro-preview: The worker on the left track has a highly unnatural posture, and his lower body seems to blend vaguely into the track and wet concrete without clear physical boundaries. (middle-left, strong)
- gemini-3.1-pro-preview: The worker on the far right has a deformed right leg that appears to merge indistinctly into the brown bag or the ground next to him. His head also appears disproportionately small. (bottom-right, strong)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-right, top-left

- claude-opus-5.5: Overhead catenary wires are sparse and don't connect coherently between poles. (top-right, weak)
- claude-opus-5.5: Overhead wires are sparse and inconsistent, with catenary lines ending abruptly and not aligning with the tracks. (top-left, moderate)
- claude-opus-5.5: Overhead wires attach inconsistently to poles and do not form a coherent catenary system over the tracks. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires are faint, disjointed, and do not appear to connect logically to the supporting pole or the building structure. (top-right, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, painterly wet concrete and soft details on building and fences typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly wet concrete and reflections with a uniform rendering look; the fine detail on fences and pallets is mushy. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly wet concrete and background objects (pallets, cages) with soft, mushy detail. (whole-image, weak)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Workers kneeling staged symmetrically on tracks with bags, a typical generated 'trolley problem' composition. (center, moderate)
- claude-opus-5.5: Three workers kneel in a tidy row on the right track and one on the left, a staged-looking arrangement typical of generated trolley-problem scenes. (center, moderate)

## e-group-R-2.jpg: mean P(AI) 0.31 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.02
- anthropic/claude-opus-5.5: 0.90 / 0.85 / 0.90
- google/gemini-3.1-pro-preview: 0.05 / 0.00 / 0.05

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Two tracks diverge from nothing at the bottom without a visible switch; the rails curve oddly and the right track's left rail bends unnaturally into the concrete. (center, moderate)
- claude-opus-5.5: The two tracks have no visible origin, switch or connection. The rail spacing and curvature look inconsistent, and the left track bends oddly toward the depot. (center, moderate)
- claude-opus-5.5: Two separate track pairs diverge with no visible switch; tracks begin abruptly near camera with odd embedded geometry and the right track's rails converge oddly into the depot door. (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left, top-center

- claude-opus-5.5: Overhead catenary wires and poles are inconsistent, with wires ending abruptly and poles with arms that don't connect logically. (top-left, moderate)
- claude-opus-5.5: Catenary poles carry only a few thin, disconnected wires that do not run continuously along the tracks or into the depot doors. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent, cantilever arms don't connect to a coherent catenary over the tracks. (top-left, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-right

- claude-opus-5.5: Workers kneel in staged positions directly on the rails with vague bags and tools; the hands and tools are smeared. (middle-right, moderate)
- claude-opus-5.5: The workers are symmetrically staged, kneeling on or between the rails with nondescript bags and no clear task or tools. The orange-vest worker sits right on the rail. (middle-right, moderate)
- claude-opus-5.5: Three workers kneeling in a neat row all doing the same vague task on rails, staged-looking; bags blend into ground. (middle-right, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The image has an overly smooth, painterly wet-concrete texture and soft, mushy details on fences and pallets. (whole-image, moderate)
- claude-opus-5.5: The concrete and puddles look overly smooth and painterly, and the building cladding is uniformly soft. (whole-image, weak)
- claude-opus-5.5: Overly smooth, painterly concrete and puddle textures with soft generic detail typical of diffusion images. (whole-image, moderate)

**composition_or_staging**: score 1, raised in 1/9 calls, at bottom-center

- claude-opus-5.5: The dashboard-view framing with a symmetric depot and two identical door openings looks generic and generated. (bottom-center, weak)

## e-group-R-3.jpg: mean P(AI) 0.30 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The image has an overly smooth, painterly HDR look, and the concrete wet texture is uniform. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly HDR-like rendering of concrete and puddles with uniform sheen (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly concrete and wet surfaces with uniform HDR-like rendering. (whole-image, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left

- claude-opus-5.5: Overhead wires attach inconsistently to the poles and fade out without a coherent catenary system. (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, poles with arms but wires not clearly connecting over tracks (top-left, moderate)
- claude-opus-5.5: Overhead wires attach inconsistently to poles and fade out; catenary arrangement doesn't make structural sense. (top-left, moderate)

**track_geometry**: score 5, raised in 3/9 calls, at center

- claude-opus-5.5: Two embedded tracks run parallel without visible switch connection; rails converge toward the building doors plausibly, but the right track's left rail merges oddly near the workers. (center, moderate)
- claude-opus-5.5: Two parallel tracks lead into separate bays with no visible switch connecting them, yet the staging looks like a divergence; rails embedded in concrete look plausibly rendered but oddly uniform (center, weak)
- claude-opus-5.5: Two parallel embedded tracks with no visible switch or connection; left track converges oddly toward the left bay while rails appear smooth and uniform, somewhat idealized geometry. (center, moderate)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Three workers are clustered in a staged row on the right track, with the middle worker's legs and the tools blending ambiguously. (middle-right, moderate)
- claude-opus-5.5: Three workers kneeling in a neat row, all facing away, staged symmetrically with the lone worker on the left track; typical generated composition. (middle-right, moderate)

**composition_or_staging**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Highly staged scene: workers neatly kneeling on rails in symmetric groups, typical of generated 'worker on track' prompts (whole-image, moderate)

## e-two-L-1.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05
- anthropic/claude-opus-5.5: 0.78 / 0.72 / 0.70

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: The catenary poles have bracket arms, but there are almost no contact wires over the tracks. The few wires visible lead nowhere coherent. (top-center, moderate)
- claude-opus-5.5: Overhead wiring is sparse and illogical: a few wires drift diagonally from poles without forming a coherent catenary over the tracks. (top-center, moderate)
- claude-opus-5.5: The poles carry only a few thin, loosely drawn wires that do not form a coherent catenary over either track; the cantilever arms end without plausible contact-wire geometry. (top-left, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The image has an overly smooth, painterly, uniformly processed texture. The building and ground lack fine real-world detail. (whole-image, moderate)
- claude-opus-5.5: Uniform painterly smoothness on the concrete and building cladding, with the over-processed HDR look typical of generated images. (whole-image, moderate)
- claude-opus-5.5: The image is overly smooth and clean, with painterly concrete and puddle textures typical of generators. (whole-image, weak)

**reflections_or_wet_surfaces**: score 3, raised in 2/9 calls, at center, middle-left

- claude-opus-5.5: The green reflection below the left worker is a detached, blurry blob that does not match the worker's kneeling pose or position. (center, moderate)
- claude-opus-5.5: The worker's reflection in the wet pavement is a vague green blob with no structure, offset from the figure. (middle-left, weak)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: The right worker kneels directly over and onto the rail, with legs and boots merging ambiguously with the rail and tool bag. (center, weak)
- claude-opus-5.5: Two workers kneel symmetrically on either side of one rail, which looks staged; their hands merge into the rail without clear tool contact. (center, moderate)

**track_geometry**: score 3, raised in 2/9 calls, at bottom-center, center

- claude-opus-5.5: The left track's rail spacing narrows oddly near the workers, and the grooved rails blend unnaturally into the slab. (bottom-center, weak)
- claude-opus-5.5: The embedded rails look like smooth uniform bands with little groove or fastening detail, and the curvature of the left pair looks slightly inconsistent toward the shed. (center, moderate)

## e-two-L-2.jpg: mean P(AI) 0.21 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.02
- anthropic/claude-opus-5.5: 0.75 / 0.20 / 0.80
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**track_geometry**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Left track rails converge oddly: the right rail of the left track curves in toward the workers without a coherent switch structure, rail widths look inconsistent (center, moderate)
- claude-opus-5.5: Left track rails converge oddly; the left track's right rail appears to curve and the rails lack proper ties/embedment consistency, and the left track ends abruptly near the door while the right track curves smoothly into the other door (center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, painterly textures on concrete and fences with uniform softness (whole-image, moderate)
- claude-opus-5.5: Smooth, overly clean, slightly painterly concrete and puddle textures typical of generative output (whole-image, moderate)

**people_pose_or_placement**: score 2, raised in 2/9 calls, at middle-left

- claude-opus-5.5: Two workers kneeling on the left track with a long tool/bar spanning between rails; poses plausible but hands and tools somewhat smeared (middle-left, weak)
- claude-opus-5.5: Two workers kneeling on the left track, one holding a tool across the gauge; poses plausible but hands and tools are blurry and ill-defined (middle-left, weak)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- claude-opus-5.5: Overhead catenary wires are sparse and don't follow the tracks consistently; the poles' cross-arms connect to nothing coherent (top-left, moderate)

**camera_or_windscreen**: score 1, raised in 1/9 calls, at bottom-center

- claude-opus-5.5: Dark dashboard/vehicle hood edge at bottom, typical of tram cab view staging in generated scenario images (bottom-center, weak)

## e-two-L-3.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.02 / 0.95 / 0.02

**texture_noise_or_sharpness**: score 8, raised in 4/9 calls, at whole-image

- claude-opus-5.5: The image has a smooth, painterly rendering, and its wet-surface reflections are uniformly soft, which is typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: The image has an overly smooth, painterly wet-concrete texture and soft, uniform detail typical of AI generation. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly wet concrete and reflections with a uniform, synthetic rendering quality. (whole-image, moderate)
- gemini-3.1-pro-preview: When inspected closely, fine details throughout the image exhibit a smudgy, 'painterly' effect typical of AI generation, lacking natural, crisp photographic grain. (whole-image, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left, top-right, top-center

- claude-opus-5.5: The catenary wires are sparse and inconsistent, ending abruptly between poles. (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and not consistently attached to poles; the catenary arrangement is implausible for a tram depot. (top-right, weak)
- gemini-3.1-pro-preview: The overhead electrical wires are very thin, chaotic, and appear to break or fade out into the sky discontinuously, lacking logical physical connections to the support structures. (top-center, strong)

**track_geometry**: score 5, raised in 3/9 calls, at whole-image, center

- claude-opus-5.5: The tracks lack sleepers or clear embedding transitions, and the left rails curve in an inconsistent way relative to the depot doors. (whole-image, moderate)
- claude-opus-5.5: Tracks embedded in concrete look plausible, but the left track's rails converge oddly toward the depot doors and lack any clear switch connection. (whole-image, weak)
- claude-opus-5.5: Left track gauge narrows oddly; the left track's right rail converges toward the building in a way inconsistent with parallel rails, and the track merges ambiguously near the depot doors. (center, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at center, bottom-left

- claude-opus-5.5: Kneeling workers have mushy hands and boots blending into the rail; the orange-vest worker's legs are oddly arranged over the rail. (center, moderate)
- gemini-3.1-pro-preview: The worker in the orange jacket has a strangely shaped, blob-like right leg and foot that lacks clear physical definition. Both workers also have poorly defined, blurry hands that merge with the ground. (bottom-left, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Two workers kneel on the left track; the orange-clad worker straddles the rail awkwardly and his legs and boots merge oddly with the rail. (center, moderate)
- claude-opus-5.5: Two workers kneel on the left track; one straddles the rail oddly, with the kneeling orange-vest worker's legs appearing to merge into the rail area. (center, moderate)

## e-two-R-1.jpg: mean P(AI) 0.35 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.65 / 0.72 / 0.62
- google/gemini-3.1-pro-preview: 0.98 / 0.05 / 0.05

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-left

- claude-opus-5.5: Overhead poles have short arms, and the wires run diagonally without a coherent catenary over the tracks; the support structure doesn't make engineering sense. (top-left, moderate)
- claude-opus-5.5: Overhead catenary is sparse and inconsistent; poles carry arms with few wires that don't clearly connect over the tracks. (top-left, moderate)
- gemini-3.1-pro-preview: Some of the thin overhead wires attached to the poles simply fade out and disappear into the sky rather than connecting logically to other structures or continuing out of frame. (top-left, strong)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at center, middle-right, bottom-right

- claude-opus-5.5: Tool bags and the items in the workers' hands are vague, mushy shapes without clear tool definition. (center, moderate)
- claude-opus-5.5: The tool bags and the tools in the workers' hands are indistinct blobs with no clear tool shapes. (middle-right, moderate)
- gemini-3.1-pro-preview: The tool bags resting on the wet concrete next to the workers lack specific details like pockets, straps, or discernible tools, instead appearing as formless, generic textured blobs. (bottom-right, moderate)

**buildings**: score 5, raised in 4/9 calls, at top-center

- claude-opus-5.5: The depot building is very uniform and clean, with the doorways and fixtures lacking signage or fine detail, giving a generic rendered look. (top-center, weak)
- claude-opus-5.5: Depot facade is overly clean and generic, with symmetrical open bays and simplified details. (top-center, weak)
- claude-opus-5.5: The depot facade, doors and fixtures are coherent but very clean and simplified, with sparse detail. (top-center, weak)
- gemini-3.1-pro-preview: The vertical access ladder attached to the exterior wall of the building between the two bay doors has wavy, non-parallel side rails and irregularly spaced rungs. (top-center, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The hands of the workers, particularly the one in the orange vest, merge indistinguishably and unrealistically with the tools and the metal rails they are touching. (bottom-right, strong)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Overall smooth, slightly painterly rendering with uniform softness and lack of fine sensor noise typical of generated images. (whole-image, moderate)

## e-two-R-2.jpg: mean P(AI) 0.24 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.85 / 0.30
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.05

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Two kneeling workers sit on the right track, posed symmetrically and working on the rail with small tools; the hands and tools are somewhat mushy and indistinct. (middle-right, moderate)
- claude-opus-5.5: Two workers in hi-vis kneel on the right track in staged symmetric poses, with hands and tools that blend into the rail. (middle-right, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Over-smooth, HDR-like rendering of the wet concrete, with a painterly quality and uniform reflections typical of generative models. (whole-image, moderate)
- claude-opus-5.5: The image has an overly smooth HDR look, with uniform wet concrete and an over-processed sheen. (whole-image, weak)
- claude-opus-5.5: There is some HDR-like processing and slight over-smoothing, but nothing structurally broken. (whole-image, weak)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and inconsistent; the catenary spans don't clearly connect over the tracks, and some wires end abruptly. (top-center, moderate)
- claude-opus-5.5: The overhead catenary wires are sparse and inconsistent, and the wires end abruptly at the poles. (top-left, moderate)

**camera_or_windscreen**: score 2, raised in 2/9 calls, at bottom-center

- claude-opus-5.5: A dark vehicle hood edge appears at the bottom, a common staging device in synthetic dashcam-style images. (bottom-center, weak)
- claude-opus-5.5: A dark dashboard edge is visible, suggesting the photo was taken from a vehicle cab, which is a common prompt framing. (bottom-center, weak)

**track_geometry**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: Embedded tram rails diverge into two separate tracks without any visible switch or frog; the tracks appear disconnected near the bottom, an implausible layout. (center, moderate)

## e-two-R-3.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.01

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left, top-center

- claude-opus-5.5: Catenary wires hang from poles at odd angles and do not form a coherent overhead line system. (top-left, moderate)
- claude-opus-5.5: Catenary poles and arms are present, but the overhead wires are sparse, faint, and incoherent; there is no proper contact wire over the tracks. (top-center, moderate)
- claude-opus-5.5: Catenary poles and cantilever arms appear but the overhead contact wires are sparse and inconsistent, with few wires actually spanning the tracks. (top-center, moderate)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, uniform textures on wet concrete and building; painterly softness typical of generators. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly concrete and puddle textures with a uniform soft rendering typical of generative models. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly wet concrete and uniform building cladding, typical of diffusion rendering. (whole-image, moderate)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at center

- claude-opus-5.5: Tool bags and hand-held items are mushy and indistinct; no clear tools being used. (center, weak)
- claude-opus-5.5: The tool bags and the tools in the workers' hands are blobby and indistinct. (center, weak)
- claude-opus-5.5: The tool bags and the tools in the workers' hands are indistinct blobs with no clear functional detail. (center, weak)

**buildings**: score 2, raised in 2/9 calls, at top-center

- claude-opus-5.5: Generic, clean depot facade with symmetric bays and little real-world wear. (top-center, weak)
- claude-opus-5.5: The depot doors and the interior lighting are generic and repetitive, and the ladder and fixtures are vaguely rendered. (top-center, weak)

**reflections_or_wet_surfaces**: score 2, raised in 2/9 calls, at bottom-right

- claude-opus-5.5: The reflection of the orange-vested worker is plausible, but it is smeared and lacks detail. (bottom-right, weak)
- claude-opus-5.5: The orange reflection of the worker is plausible but soft and smeared. (bottom-right, weak)

## f-group-L-1.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.75 / 0.35 / 0.33
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.99

**people_anatomy**: score 7, raised in 2/9 calls, at middle-left, middle-right

- claude-opus-5.5: Workers' poses are natural, but hands and tools are blurred and indistinct, and legs merge somewhat with the rail area. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right track lacks visible legs or lower body structure, appearing to melt directly into the track and wet ground. (middle-right, strong)
- gemini-3.1-pro-preview: The three workers on the left have indistinct, merging bodies. Their limbs blend together, and they lack clearly defined hands interacting with their work. (middle-left, strong)

**track_geometry**: score 4, raised in 2/9 calls, at top-right, middle-right

- claude-opus-5.5: Right track's rail gauge at the depot door shrinks to about 20px, while the left track at the same depth is about 55px. The perspective is inconsistent between two tracks at the same distance. (top-right, moderate)
- gemini-3.1-pro-preview: The solid metal rail seems to lose its 3D structure, disappearing or flattening out unnaturally beneath the body of the worker. (middle-right, moderate)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The objects being used by the workers and the bag/equipment sitting on the ground beside them are formless, blurry blobs with no recognizable mechanical details. (middle-left, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- claude-opus-5.5: Overhead wires run diagonally from the poles and do not form a coherent catenary above the tracks, which is implausible for a tram depot. (top-center, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Overall smooth, slightly painterly texture with soft details on fences and pallets. (whole-image, weak)
- claude-opus-5.5: There is slight overall softness and a smoothed look, possibly from upscaling or compression. (whole-image, weak)

## f-group-L-2.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.08 / 0.06 / 0.04
- anthropic/claude-opus-5.5: 0.85 / 0.75 / 0.85
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.05

**texture_noise_or_sharpness**: score 8, raised in 4/9 calls, at whole-image, bottom-center

- claude-opus-5.5: The image has a smooth, painterly rendering with uniform wet-asphalt reflections and soft, generic building details such as the cages and doors. (whole-image, moderate)
- claude-opus-5.5: Surfaces have an overly smooth, painterly finish, and the building panels, crates and the depot interior look uniformly soft and generic. (whole-image, moderate)
- claude-opus-5.5: Overall painterly smoothness with soft upscaled-like texture, typical of generative images (whole-image, moderate)
- gemini-3.1-pro-preview: The wet pavement exhibits a characteristic AI 'painterly' or smudged texture, lacking the fine, sharp grain of a real photograph taken in such lighting conditions. (bottom-center, moderate)

**people_anatomy**: score 7, raised in 2/9 calls, at middle-left, middle-right

- claude-opus-5.5: The three kneeling workers are tightly overlapping, and their limbs and hands blend into a smeared mass around the rail. They are also kneeling on the gauge area without any discernible tools. (middle-left, moderate)
- gemini-3.1-pro-preview: The legs and lower bodies of the three workers are indistinct, melting into the ground and each other. The worker in orange lacks clear arm structure. (middle-left, strong)
- gemini-3.1-pro-preview: The hands of the worker on the right track are poorly defined and appear to merge directly into the rail or an indistinct tool. (middle-right, moderate)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at middle-right, middle-left

- claude-opus-5.5: The right worker's hands touch the rail with no clear tool, and the dark object near his knees is ill-defined. (middle-right, weak)
- claude-opus-5.5: The kneeling workers' hands meet at the rail with no clearly defined tools, and the objects on the ground are indistinct blobs. (middle-left, moderate)
- claude-opus-5.5: Objects near workers' feet and hands are smeared blobs without identifiable tool shapes (middle-left, moderate)

**composition_or_staging**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The scene is a highly symmetric, stock-like composition at dusk, with a windscreen-wiper foreground. This is typical of prompt-generated imagery. (whole-image, moderate)
- claude-opus-5.5: The scene is near-symmetrical and stock-like: two identical bays, staged workers and a windscreen frame. (whole-image, weak)
- claude-opus-5.5: Highly symmetrical two-bay depot with mirrored poles, doors, and lights; idealized stock-photo composition with windscreen edge foreground (whole-image, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: The overhead catenary is sparse and does not align convincingly with the tracks below it, and the wires end abruptly. (top-center, moderate)
- claude-opus-5.5: Catenary arms extend from the poles, but the contact wires do not run continuously above the tracks; some wires droop or drop vertically in implausible ways. (top-center, moderate)
- claude-opus-5.5: Catenary wires are sparse and don't clearly connect over tracks in a functional layout (top-center, weak)

## f-group-L-3.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.08 / 0.08 / 0.06
- anthropic/claude-opus-5.5: 0.80 / 0.85 / 0.75
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.98

**people_anatomy**: score 10, raised in 3/9 calls, at middle-left, center, middle-right

- claude-opus-5.5: Workers' hands and tools are blurred and indistinct, limbs merge with tools and rail (middle-left, moderate)
- claude-opus-5.5: The kneeling workers have mushy, ill-defined hands and tools, and their limbs blend together around the rail. (center, moderate)
- gemini-3.1-pro-preview: The middle worker on the left track appears to be missing a distinct head or helmet, with their upper body blending into a single mass. (center, strong)
- gemini-3.1-pro-preview: The single worker on the right track has mangled or missing lower legs, blending unnaturally into the dark object on the track. (middle-right, strong)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-center

- claude-opus-5.5: Overhead catenary wires are sparse and don't clearly align over the tracks into the depot doors; wires end ambiguously (top-center, moderate)
- claude-opus-5.5: Catenary wires attach illogically: the overhead wires don't align with the tracks below and terminate arbitrarily. (top-center, moderate)
- claude-opus-5.5: The catenary wires are sparse and don't clearly connect over the tracks; the poles' cantilever arms end ambiguously. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires are faint, disjointed, and do not logically connect to the support structures or continue smoothly across the span. (top-center, strong)

**track_geometry**: score 6, raised in 3/9 calls, at bottom-center, bottom-left, middle-left

- claude-opus-5.5: Embedded rails converge and curve somewhat oddly; left track rails appear to merge with inconsistent gauge near the workers, and the tracks lack proper flangeways in places (bottom-center, moderate)
- claude-opus-5.5: Rails are embedded in pavement with no visible flangeway grooves or ties; the left track's rails converge and diverge oddly, with the gauge looking inconsistent near the workers. (bottom-left, moderate)
- gemini-3.1-pro-preview: Inside the left bay of the building, the rails appear to split with incorrect perspective and wobbly geometry. (middle-left, moderate)

**composition_or_staging**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric cinematic composition with blue-hour lighting, windscreen wiper foreground, typical of generated stock-like scenes (whole-image, weak)
- claude-opus-5.5: The scene is symmetrically staged, with two identical bays, a cinematic dusk grade, and a windscreen-wiper foreground typical of generated 'dashcam' style images. (whole-image, weak)
- claude-opus-5.5: The scene is a perfectly symmetric twin-bay depot with workers neatly placed on each track and a windscreen-edge foreground, giving a staged, stock-like look. (whole-image, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Smooth, painterly wet asphalt and uniform building surfaces with soft detail (whole-image, weak)
- claude-opus-5.5: Surfaces look smooth and painterly, and the background details (cages, doors) are soft and generic. (whole-image, weak)
- claude-opus-5.5: Smooth painterly textures appear on the wet asphalt and walls, and the fine details are soft overall. (whole-image, weak)

## f-group-R-1.jpg: mean P(AI) 0.62 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.88 / 0.87 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.95

**tools_or_small_objects**: score 13, raised in 6/9 calls, at center, middle-right, bottom-right, bottom-left

- claude-opus-5.5: Tools and cables near hands are mushy, undefined shapes. (center, moderate)
- claude-opus-5.5: Objects near the workers' hands are a smeared jumble of cables and indistinct shapes. (middle-right, moderate)
- claude-opus-5.5: The tools and cables near the workers' hands are smeared and undefined (bottom-right, moderate)
- gemini-3.1-pro-preview: There is a dark, amorphous shape resting next to the left worker's leg that lacks the definition of a real tool bag or object. (bottom-left, moderate)

**track_geometry**: score 9, raised in 4/9 calls, at center, bottom-right

- claude-opus-5.5: Left track pair diverges oddly: left rail curves while right rail runs straight, with inconsistent gauge narrowing toward depot doors; tracks appear to lack proper sleepers/embedding transitions. (center, moderate)
- claude-opus-5.5: Rails embedded in pavement curve and converge oddly; the left track's rails bend inconsistently and the right track's rails don't align with the depot door track geometry. (center, moderate)
- claude-opus-5.5: Left track pair converges oddly toward the depot door; rail spacing and curvature look inconsistent, with the left track ending abruptly at the windscreen edge (center, moderate)
- gemini-3.1-pro-preview: The rails where the group of three workers are positioned seem to multiply and cross over each other illogically, not forming a functional track. (bottom-right, strong)

**people_anatomy**: score 9, raised in 3/9 calls, at middle-right, bottom-right

- gemini-3.1-pro-preview: The lower halves and legs of the three workers are merged into an indistinct, anatomically nonsensical jumble. (middle-right, strong)
- gemini-3.1-pro-preview: The lower bodies and legs of the three workers grouped together lack distinct anatomical structure, seemingly melding into each other and the ground. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands and particularly the feet/boots of the workers on the right are indistinct, shapeless blobs rather than defined boots. (bottom-right, strong)

**reflections_or_wet_surfaces**: score 8, raised in 2/9 calls, at bottom-right, bottom-left, bottom-center

- gemini-3.1-pro-preview: Despite the wet, reflective ground, the "reflections" underneath the workers are solid, dark voids instead of reflecting their bright orange and yellow clothing. (bottom-right, strong)
- gemini-3.1-pro-preview: Similar to the right side, the reflection beneath the solitary worker is a solid dark blob that does not match the lighting or the high-visibility jacket. (bottom-left, strong)
- gemini-3.1-pro-preview: While the ground is wet and reflects light, the texture is overly smooth and uniform, lacking the nuanced imperfections of real wet asphalt or concrete. (bottom-center, moderate)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-center, top-right

- claude-opus-5.5: Overhead wires appear sparse and do not plausibly span over the tracks into the depot. (top-center, weak)
- claude-opus-5.5: Catenary wires are sparse, and the arms do not connect coherently to any contact wire above the tracks (top-center, moderate)
- gemini-3.1-pro-preview: The connection mechanism between the overhead wire and the rightmost pole looks sketchy and structurally illogical. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wire support structure on the far right has a floating V-shape that does not logically connect to the wires or the pole in a functional way. (top-right, moderate)

## f-group-R-2.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.90 / 0.88 / 0.90
- google/gemini-3.1-pro-preview: 1.00 / 0.85 / 0.10

**overhead_wires_or_poles**: score 15, raised in 5/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: Overhead wires and cantilever arms are sparse and illogical, wires end abruptly and don't align with tracks. (top-center, moderate)
- claude-opus-5.5: The catenary wires are sparse and do not align with the tracks. The poles hold cantilever arms that run to nowhere coherent. (top-center, moderate)
- claude-opus-5.5: Overhead wires attach illogically to the poles and fade out without proper catenary over the tracks. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires extending from the poles towards the building simply fade out into the sky or dark openings without physically connecting to the infrastructure inside the bays. (top-center, strong)

**track_geometry**: score 9, raised in 4/9 calls, at center, bottom-center, bottom-right

- claude-opus-5.5: Two separate track pairs converge oddly; rails appear as single grooves embedded in asphalt with inconsistent gauge and no clear connection to depot entrances' internal tracks. (center, moderate)
- claude-opus-5.5: The tracks are two separate pairs that never connect, each curving toward a different depot door. Neither has a proper switch or frog structure, and the rails sit oddly flush with the pavement. (bottom-center, moderate)
- claude-opus-5.5: Two separate track pairs run into separate bays without any visible switch or connection; rails are oddly smooth, single-groove, and the right track's rails converge strangely near the workers. (bottom-center, moderate)
- gemini-3.1-pro-preview: The rails lack a proper 3D structure or groove typical for embedded tram tracks, appearing painted on or flat. Additionally, the rails seem to disappear or merge directly into the workers and the ground. (bottom-right, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at whole-image, bottom-center

- claude-opus-5.5: Smooth painterly textures, mushy background details on building doors and cages typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: The surfaces are smooth and painterly, and the wet reflections are uniform. (whole-image, weak)
- claude-opus-5.5: Overly smooth, painterly wet asphalt and building surfaces with the soft, uniform rendering typical of generators. (whole-image, moderate)
- gemini-3.1-pro-preview: The wet ground surface has a slightly smoothed, almost painterly texture, lacking the fine, gritty micro-detail expected of wet asphalt or concrete. (bottom-center, moderate)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at center, middle-right, middle-left

- claude-opus-5.5: The bag beside the left worker and the debris near the right group are blobby and undefined. (center, weak)
- claude-opus-5.5: Tools and hands around the rail are smeared and lack defined shapes. (middle-right, moderate)
- gemini-3.1-pro-preview: The bag or object sitting next to the worker on the left is a shapeless, undefined gray blob. (middle-left, moderate)
- gemini-3.1-pro-preview: The object or bag on the ground next to the worker on the left track is an indistinct, amorphous blob lacking clear features. (middle-left, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at center, middle-right

- claude-opus-5.5: Workers kneeling in staged symmetric arrangement, tools and bag blob-like; worker on left kneels between rails with nothing to work on. (center, moderate)
- claude-opus-5.5: Three workers crouch in a tidy staged row straddling the rail. Their hands and tools are indistinct. (middle-right, moderate)
- claude-opus-5.5: Three workers crouch shoulder to shoulder in a neat staged row on the rail, with hands merging into indistinct tools; the left worker's bag melts into the ground. (middle-right, moderate)

## f-group-R-3.jpg: mean P(AI) 0.42 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.06
- anthropic/claude-opus-5.5: 0.88 / 0.88 / 0.90
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.02

**track_geometry**: score 9, raised in 3/9 calls, at bottom-right, middle-left, bottom-left

- claude-opus-5.5: Right track rails are inconsistent: the left rail of the right track has a doubled/forked groove that merges oddly, and the rails don't form a coherent switch from the foreground. (bottom-right, moderate)
- claude-opus-5.5: Right track rails are inconsistent: the left rail of the right track splits into a doubled line near the workers and the gauge/spacing looks implausible as it converges to the depot door. (bottom-right, moderate)
- claude-opus-5.5: Left track has no visible switch or connection to the right track despite apparent branching layout; rails seem to float on asphalt without proper embedding. (middle-left, weak)
- claude-opus-5.5: Left track rails converge and diverge oddly; the left rail curves inward in a way inconsistent with gauge, and rails appear to merge into pavement without proper embedding. (bottom-left, moderate)

**text_signage_or_markings**: score 9, raised in 4/9 calls, at center, middle-right

- claude-opus-5.5: Lettering on the orange vest is garbled, illegible pseudo-text. (center, moderate)
- claude-opus-5.5: Lettering on the orange vest back is garbled, illegible pseudo-text. (center, moderate)
- gemini-3.1-pro-preview: The text on the back of the orange high-visibility jacket is nonsensical gibberish, a common artifact in AI-generated images. (middle-right, strong)

**people_pose_or_placement**: score 7, raised in 4/9 calls, at middle-right, center, middle-left

- claude-opus-5.5: Three workers huddled tightly over one spot with merged limbs and ambiguous hand/leg placement; the middle worker's boots blend into the rail. (middle-right, moderate)
- claude-opus-5.5: Three workers huddle symmetrically in a staged cluster with bags placed neatly; their hands merge into an indistinct mass at the rail. (center, moderate)
- claude-opus-5.5: Three workers huddled symmetrically in a staged cluster, bags placed neatly; typical generated composition. (center, weak)
- gemini-3.1-pro-preview: The solitary worker on the left track has a distorted posture, and their form seems to merge unnaturally with the track and the ground. (middle-left, moderate)

**overhead_wires_or_poles**: score 4, raised in 3/9 calls, at top-center, top-right

- claude-opus-5.5: Overhead wires are sparse and don't connect logically to the tracks or depot entrances. (top-center, weak)
- claude-opus-5.5: Overhead wires attach to poles illogically and fade out without catenary structure. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wire structures attached to the pole on the right do not follow logical physical tension rules, with some wires appearing to end abruptly or connect haphazardly. (top-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, painterly wet asphalt and uniform glossy rendering typical of diffusion output. (whole-image, weak)
- claude-opus-5.5: Smooth, painterly wet asphalt and uniformly clean building facade with soft over-processed detail. (whole-image, moderate)

## f-two-L-1.jpg: mean P(AI) 0.30 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.05
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Left track rails converge oddly; the right rail of the left track runs far apart from left rail near the bottom and the gauge appears inconsistent, with workers kneeling between rails on flat pavement without visible switch. (center, moderate)
- claude-opus-5.5: Left track's rails converge oddly; the right rail of the left pair narrows toward the depot and the gauge appears inconsistent, and the tracks don't connect to the building doors plausibly. (center, moderate)
- claude-opus-5.5: Left track's two rails converge strangely; the right rail of the left track bends sharply toward the depot door while gauge appears inconsistent, and rails seem to emerge without proper sleepers/embedding consistency. (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: Overhead wires and cantilever arms are sparse and do not connect coherently over tracks into depot doors. (top-center, moderate)
- claude-opus-5.5: The overhead wires and cantilever arms are sparse and don't align with the tracks below; the catenary looks incomplete. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, cantilever arms don't clearly connect to contact wire over tracks. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Smooth painterly textures on wet asphalt and building facade, lacking real sensor detail. (whole-image, moderate)
- claude-opus-5.5: The image has a smooth, painterly rendering with an overly uniform wet sheen. (whole-image, weak)
- claude-opus-5.5: Smooth, painterly wet asphalt texture and overly clean symmetric depot composition typical of generators. (whole-image, weak)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: The workers kneel between the rails with their hands merging into vague tools, and their bags have mushy shapes. (center, moderate)
- claude-opus-5.5: Workers kneel between/on rails with vague tool interaction; hands merge into indistinct objects; bags look like amorphous blobs. (center, moderate)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: Bags and tools near workers are blobby and indistinct; hands merge with objects. (center, moderate)

## f-two-L-2.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05
- anthropic/claude-opus-5.5: 0.68 / 0.68 / 0.72

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: The poles carry cantilever arms, but there is no coherent contact wire over either track. The few wires present run diagonally to nowhere, which is inconsistent with a real tram depot catenary. (top-center, moderate)
- claude-opus-5.5: Tram depot has only sparse, loosely drawn wires from the pole brackets; no coherent catenary runs above each track into the bays as a real depot would need. (top-center, moderate)
- claude-opus-5.5: Catenary poles carry arms, but the wires are sparse and run diagonally rather than following the tracks into the depot doors, which makes no functional sense. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Surfaces are uniformly smooth and painterly, with clean wet reflections and little real sensor noise for a dusk scene. (whole-image, moderate)
- claude-opus-5.5: The image has a smooth, painterly rendering with an overly uniform, staged twilight look. (whole-image, weak)
- claude-opus-5.5: The whole image has a smooth, painterly rendering with uniform softness and few fine sensor-noise details. (whole-image, weak)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center, bottom-center

- claude-opus-5.5: The workers' hands, tools and bags blend into mushy, indistinct shapes at the rail with no clear task being performed. (center, moderate)
- claude-opus-5.5: The bags and tools beside the workers are smeared, blobby shapes with no clear structure. (bottom-center, moderate)

**people_anatomy**: score 1, raised in 1/9 calls, at center

- claude-opus-5.5: The workers' hands and tools at the rail are vague and blended, and the bags beside them have indistinct forms. (center, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The symmetric two-bay staging with neatly aligned bollards and lights looks idealized. (whole-image, weak)

## f-two-L-3.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05
- anthropic/claude-opus-5.5: 0.70 / 0.70 / 0.72

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: Poles carry bracket arms, but there is almost no coherent catenary over either track; the few thin wires run diagonally and do not line up with the rails. (top-center, moderate)
- claude-opus-5.5: Overhead contact wires are sparse and loosely connected to the cantilever arms; the wiring geometry over the tracks is vague. (top-center, weak)
- claude-opus-5.5: Poles carry cantilever arms, but there is no coherent catenary wire running over the tracks. Only a few thin wires dangle without connecting logically. (top-center, moderate)

**composition_or_staging**: score 4, raised in 2/9 calls, at whole-image

- claude-opus-5.5: A very staged, symmetric layout: two tracks leading into two identical bay doors, workers placed only on the left track and the right track left empty, shot through a windscreen. (whole-image, moderate)
- claude-opus-5.5: Highly symmetrical, idealized composition: two identical bays, two neatly diverging tracks, and workers posed in the foreground. This reads like a stock-style generated scene. (whole-image, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The image has an overall smooth, painterly softness, with the details on the building and the carts in the background slightly mushy. (whole-image, weak)
- claude-opus-5.5: Wet asphalt and the building facade have a smooth, painterly uniformity, with soft, generic detail and no fine real-world grime. (whole-image, moderate)

**people_pose_or_placement**: score 2, raised in 2/9 calls, at middle-left

- claude-opus-5.5: The left worker kneels with his hands on the bare pavement beside the rail rather than on any visible object, and the bag next to the second worker blends into the ground. (middle-left, weak)
- claude-opus-5.5: Two workers kneel in a staged, picturesque way, each hand placed on a rail, with somewhat smeared hand and glove detail. (middle-left, weak)

**track_geometry**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: The rails read as raised metallic strips lying on top of the asphalt rather than grooved rails embedded in pavement, and the left track's gauge converges and curves unevenly. (center, moderate)

## f-two-R-1.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.08 / 0.12 / 0.02
- anthropic/claude-opus-5.5: 0.65 / 0.60 / 0.66
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: The poles have cantilever arms, but there is no coherent contact wire running above either track. The few wires present run diagonally to nowhere, which is implausible for an electrified tram depot. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and don't clearly follow the track alignment into the depot doors; the cantilever arms hold wires that run diagonally off-frame rather than over the rails. (top-left, moderate)
- claude-opus-5.5: Overhead wiring is sparse and inconsistent: thin wires run from pole arms but no proper contact wire follows the track centerlines into the depot doors. (top-center, moderate)

**track_geometry**: score 2, raised in 2/9 calls, at center, bottom-left

- claude-opus-5.5: The two tracks curve smoothly into separate doors, with no visible switch, crossing or connecting geometry. The rails merge into the asphalt very cleanly. (center, weak)
- claude-opus-5.5: The left track's rails curve and converge somewhat smoothly, but the gauge narrows unevenly toward the depot. (bottom-left, weak)

**composition_or_staging**: score 2, raised in 2/9 calls, at bottom-center, whole-image

- claude-opus-5.5: A windscreen edge framing a symmetric depot scene with workers kneeling right on the rail looks like a staged, prompt-like composition. (bottom-center, weak)
- claude-opus-5.5: The depot is highly symmetric, with two matching lit portals and tracks splitting neatly toward each, and an evenly glossy wet surface, giving a clean, idealized scene. (whole-image, weak)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The image has an overall painterly smoothness, and background objects such as the cages and bollards are rendered with a generic, soft quality. (whole-image, moderate)

**reflections_or_wet_surfaces**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The wet-asphalt reflections are consistent with the light sources, but the image has an overall polished, staged cinematic look. (whole-image, weak)

## f-two-R-2.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.75 / 0.72
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: Poles carry bracket arms, but the overhead contact wires are sparse and don't run coherently above both tracks into the depot doors. (top-center, moderate)
- claude-opus-5.5: Catenary arms on the poles do not connect to any coherent contact wire system over the tracks; wires end or droop arbitrarily. (top-center, moderate)
- claude-opus-5.5: Poles carry cantilever arms, but no contact wire actually runs above either track; the few wires sag diagonally to nowhere, which is inconsistent with tram catenary. (top-center, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-right

- claude-opus-5.5: The right track's rails diverge and converge unevenly, and the gauge looks inconsistent between the foreground and the door opening. (bottom-right, moderate)
- claude-opus-5.5: The right track's rails converge oddly into the depot entrance, with no visible switch or proper junction where the tracks diverge. (bottom-right, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: The tool bags and tools near the workers are smeared and lack defined structure, and the workers' hands merge with the tools. (center, moderate)
- claude-opus-5.5: The tools in the workers' hands and the tool bags are mushy and ill-defined, with no clear functional shapes. (center, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The image has an overly clean, uniform rendering with painterly wet-asphalt reflections, typical of a generated image. (whole-image, moderate)
- claude-opus-5.5: Wet asphalt has a smeared, painterly texture, and the ground patches look blotchy rather than like actual drains or fixtures. (whole-image, weak)

**composition_or_staging**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The symmetric staging, with twin depot doors aligned to twin tracks, reads like a prompt-driven composition. (whole-image, weak)
- claude-opus-5.5: A symmetrical, cinematic dusk scene with hi-vis workers is staged like stock imagery, which is typical of generated images. (whole-image, weak)
- claude-opus-5.5: A highly symmetric, cinematic depot scene with two identical lit portals and stock-photo-style posed workers. (whole-image, weak)

## f-two-R-3.jpg: mean P(AI) 0.32 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.30 / 0.30 / 0.27
- google/gemini-3.1-pro-preview: 0.05 / 0.95 / 0.98

**overhead_wires_or_poles**: score 6, raised in 4/9 calls, at top-center, top-right, top-left

- claude-opus-5.5: Overhead wiring is sparse for a tram depot, with only a few diagonal wires from the poles. This is slightly odd but not impossible. (top-center, weak)
- claude-opus-5.5: Overhead wiring is sparse and somewhat simplified for a tram depot, though it is still plausible. (top-center, weak)
- gemini-3.1-pro-preview: The complex overhead wiring and its connections to the structural poles lack logical engineering detail and appear as vague, disconnected lines in places. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wire extending diagonally from the pole on the left seems to simply fade away and disappear into the sky without connecting to a structural support. (top-left, moderate)

**tools_or_small_objects**: score 6, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: The object or bag resting on the ground to the right of the workers is an indistinct, shapeless blob, typical of AI rendering failures for small, complex objects. (bottom-right, strong)
- gemini-3.1-pro-preview: The objects or tools lying on the ground next to the workers are amorphous, blurry blobs lacking clear structure or recognizable features. (bottom-right, strong)

**track_geometry**: score 5, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The rails of the left track seem to fade away and lose their structural integrity, merging into the ground surface before actually entering the building bay. (middle-left, strong)
- gemini-3.1-pro-preview: The rails leading into the rightmost building entrance appear to narrow and converge uncharacteristically in the distance, losing consistent track gauge. (middle-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image, bottom-center

- claude-opus-5.5: There is slight compression and an overall smoothness, but no clear generative artifacts. (whole-image, weak)
- gemini-3.1-pro-preview: The wet pavement and its reflections have a smooth, almost painterly or brush-stroke-like texture, lacking the fine, chaotic detail of a real photograph. (bottom-center, moderate)

**reflections_or_wet_surfaces**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: Despite the highly reflective wet ground, the workers and several of the orange bollards do not have accurate reflections. The reflections under the workers are just dark, shapeless patches that don't reflect the bright yellow of their jackets. (bottom-center, strong)
