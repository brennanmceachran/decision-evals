# Realism check: v3-best-quick

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 67 | 7/10 |
| overhead_wires_or_poles | 63 | 7/10 |
| texture_noise_or_sharpness | 47 | 7/10 |
| people_anatomy | 41 | 6/10 |
| tools_or_small_objects | 41 | 5/10 |
| people_pose_or_placement | 33 | 7/10 |
| composition_or_staging | 15 | 4/10 |
| reflections_or_wet_surfaces | 12 | 4/10 |
| background_clutter | 10 | 4/10 |
| people_clothing_or_gear | 7 | 3/10 |
| camera_or_windscreen | 4 | 3/10 |
| text_signage_or_markings | 2 | 1/10 |
| buildings | 1 | 1/10 |

## e-group-L-2.jpg: mean P(AI) 0.63 (fails)

- anthropic/claude-opus-5.5: 0.88 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98
- openai/gpt-6-sol: 0.03 / 0.08 / 0.03

**overhead_wires_or_poles**: score 16, raised in 6/9 calls, at top-left, top-right, top-center

- claude-opus-5.5: Overhead wires attach inconsistently to poles, wire paths end abruptly (top-left, weak)
- claude-opus-5.5: Overhead wires and poles are sparse and do not form coherent catenary over tracks (top-left, weak)
- claude-opus-5.5: Overhead wires are sparse and disconnected, poles with arms that don't support coherent catenary. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires hanging from the support arm on the left pole end abruptly in the sky and fail to connect logically to any continuous catenary system. (top-left, strong)

**people_anatomy**: score 13, raised in 6/9 calls, at middle-left, center, middle-right, bottom-left

- claude-opus-5.5: Workers' hands and tools blurred and merged with toolboxes (middle-left, weak)
- claude-opus-5.5: Figures have blurry hands and merged limbs with tools (middle-left, weak)
- claude-opus-5.5: Workers' limbs and hands are mushy and indistinct, tools blend into hands. (center, weak)
- gemini-3.1-pro-preview: The lower body of the worker on the right track is an amorphous, undefined mass that blends nonsensically into the ground and the adjacent black bag. (middle-right, strong)

**track_geometry**: score 12, raised in 5/9 calls, at center, bottom-right, whole-image

- claude-opus-5.5: Left track rails converge oddly toward depot; inner rail curves and merges in implausible way, embedded grooves inconsistent (center, moderate)
- claude-opus-5.5: Two separate track pairs with no visible switch connecting them; left track rails converge oddly toward the depot door with inconsistent gauge (center, moderate)
- claude-opus-5.5: Embedded tram rails lack a proper groove/flangeway and the two track pairs diverge oddly without visible switch connection; left track rails converge unnaturally. (center, moderate)
- gemini-3.1-pro-preview: The rails in the foreground, especially the inner rail of the right track, are extremely uneven, bumpy, and jagged. They do not resemble solid, machined steel rails. (bottom-right, strong)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Workers evenly spaced, all kneeling in identical poses facing away, staged look typical of generated scenes (whole-image, moderate)
- claude-opus-5.5: Workers arranged in a neat, evenly spaced staged pattern, all kneeling identically with toolboxes, typical of generated scenes (whole-image, moderate)
- claude-opus-5.5: Workers arranged in neat staggered rows kneeling identically on tracks, with nearly identical poses and toolboxes, looks staged/generated. (whole-image, moderate)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Smooth, painterly wet concrete and soft detail on workers and toolboxes (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly wet concrete and soft uniform detail; toolboxes and figures lack fine detail (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly wet concrete and soft uniform rendering of building details typical of diffusion output. (whole-image, moderate)

## e-group-R-2.jpg: mean P(AI) 0.55 (fails)

- anthropic/claude-opus-5.5: 0.88 / 0.90 / 0.90
- openai/gpt-6-sol: 0.03 / 0.08 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**track_geometry**: score 12, raised in 5/9 calls, at center, middle-left, whole-image

- claude-opus-5.5: Left track rails converge oddly toward building with inconsistent gauge; right track has curving rail meeting at unclear junction (center, moderate)
- claude-opus-5.5: Rails embedded in concrete diverge oddly; the left track's rails terminate abruptly and the gauge varies, with no clear switch connecting the branches. (center, moderate)
- claude-opus-5.5: Tracks are embedded in concrete but appear disconnected from the depot entrances; the left track curves toward the left door without proper alignment, and the right track's rails diverge and converge oddly. (center, moderate)
- gemini-3.1-pro-preview: The two rails of the left track do not maintain a consistent gauge (distance apart) and appear to pinch together unnaturally as they curve towards the building. (middle-left, strong)

**overhead_wires_or_poles**: score 8, raised in 5/9 calls, at top-left, top-right, top-center

- claude-opus-5.5: Overhead catenary wires are sparse and don't connect logically between poles (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and attach illogically to poles with no consistent catenary system. (top-left, weak)
- claude-opus-5.5: The overhead wires are sparse and inconsistent, with catenary arms that attach to nothing coherent. (top-right, weak)
- gemini-3.1-pro-preview: The overhead catenary wires appear thin, disconnected in places, and fade into the sky rather than forming a coherent structural system. (top-center, moderate)

**people_anatomy**: score 8, raised in 3/9 calls, at middle-right, bottom-right

- claude-opus-5.5: Workers' hands and tools blurry/merged with rails, indistinct (middle-right, moderate)
- gemini-3.1-pro-preview: The workers further down the right track lack defined limbs and structural anatomy, appearing more like indistinct orange blobs. The closest worker's boots also look misshapen and fused. (middle-right, strong)
- gemini-3.1-pro-preview: The right foot and boot of the kneeling worker in the foreground are severely malformed, appearing to face backward or meld unnaturally into the leg. (bottom-right, strong)

**people_pose_or_placement**: score 7, raised in 3/9 calls, at middle-right

- claude-opus-5.5: Four workers on the right track all kneeling in nearly identical poses, evenly spaced, cloned-looking hi-vis outfits. (middle-right, moderate)
- claude-opus-5.5: All workers kneel in near-identical poses facing the same way, which looks staged and repetitive, typical of generated scenes. (middle-right, moderate)
- gemini-3.1-pro-preview: The lower body of the second worker on the right track appears to melt into the wet concrete, lacking distinct anatomical definition or proper contact shadows. (middle-right, strong)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at whole-image

- claude-opus-5.5: Smooth, painterly concrete and reflections with uniform soft detail (whole-image, weak)
- claude-opus-5.5: Overly smooth, painterly textures on the concrete and building with soft, generic detail. (whole-image, moderate)
- claude-opus-5.5: The image has a uniformly soft, painterly smoothness, and the background fence and pallets lack fine detail. (whole-image, weak)
- gemini-3.1-pro-preview: The overall image has a slightly smoothed, painterly quality, particularly noticeable in the midground and background details, which is characteristic of AI generation. (whole-image, moderate)

## e-two-L-3.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.01 / 0.01 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.35 / 0.20
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.98

**track_geometry**: score 7, raised in 2/9 calls, at center, bottom-right, middle-left

- claude-opus-5.5: Left track rails appear to merge and narrow oddly toward the building; the left track and right track have inconsistent gauge and the left track rails converge unnaturally near the workers. (center, moderate)
- gemini-3.1-pro-preview: The gauge (distance between the two rails) of the right-hand track is highly inconsistent, starting wide in the foreground and narrowing drastically as it curves towards the building. (bottom-right, strong)
- gemini-3.1-pro-preview: The rails of the left track lose continuity near the workers; the lines become blurry, merge with the concrete texture, and lack a logical geometric progression towards the foreground. (middle-left, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and inconsistent, with poles having arms that don't connect coherently to catenary over the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead wire arrangement is sparse and somewhat ambiguous, with wires that don't clearly connect to the tracks. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wires attached to the pole on the left split into multiple strands that terminate abruptly in mid-air against the sky. (top-left, strong)

**people_pose_or_placement**: score 2, raised in 1/9 calls, at middle-left

- claude-opus-5.5: Two workers kneeling directly between the rails in a symmetric staged way; the far worker's legs and body are somewhat blob-like. (middle-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The metal fencing on the far right has vertical posts that are inconsistently spaced and vary in thickness, with some appearing distorted or melting into each other. (middle-right, moderate)

**reflections_or_wet_surfaces**: score 1, raised in 1/9 calls, at center

- claude-opus-5.5: Wet concrete reflections are smooth and plausible but the slab joint patterns are irregular and painterly. (center, weak)

## e-two-R-2.jpg: mean P(AI) 0.09 (passes)

- anthropic/claude-opus-5.5: 0.15 / 0.15 / 0.20
- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.10 / 0.05

No AI-pointing evidence raised.

## f-group-L-2.jpg: mean P(AI) 0.81 (fails)

- openai/gpt-6-sol: 0.82 / 0.72 / 0.12
- anthropic/claude-opus-5.5: 0.88 / 0.90 / 0.90
- google/gemini-3.1-pro-preview: 0.99 / 1.00 / 0.99

**overhead_wires_or_poles**: score 15, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and disconnected, with cantilever arms that don't hold a coherent catenary over the tracks. (top-center, moderate)
- claude-opus-5.5: The overhead catenary wires are sparse and do not align over the tracks in a coherent way. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and do not form a coherent catenary over the tracks; the cantilever arms end oddly. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires connecting to the pole on the left appear to fade into the sky and follow illogical paths without proper tension or realistic attachment points. (top-left, strong)

**track_geometry**: score 14, raised in 6/9 calls, at bottom-left, center, middle-left

- claude-opus-5.5: Left track rails converge oddly; the left rail and right rail spacing narrows inconsistently toward the depot entrance, and the rail entering the building seems to merge with another line. (bottom-left, moderate)
- claude-opus-5.5: Left track rails converge oddly; the left rail of the left track runs at an inconsistent angle relative to its partner, and the gauge appears to vary along the track's length. (bottom-left, moderate)
- claude-opus-5.5: Left track's two rails converge oddly; the right rail of the left track curves and appears to merge irregularly with the paved surface, with no proper gauge consistency. (center, moderate)
- gemini-3.1-pro-preview: The rails of the left track appear slightly wavy and inconsistent in width as they recede into the distance, lacking the rigid straightness of real train tracks. (middle-left, moderate)

**tools_or_small_objects**: score 12, raised in 6/9 calls, at center, middle-left, bottom-left

- gpt-6-sol: Equipment beside the workers has vague, irregular shapes rather than clearly defined parts. (center, moderate)
- claude-opus-5.5: The tool bags are indistinct blobs, and the hands and tools blend into the rails. (middle-left, weak)
- claude-opus-5.5: Tool bags and tools are blobby and indistinct, merging with the rails. (center, moderate)
- gemini-3.1-pro-preview: The tool bag next to the closest worker on the left track is an amorphous, blurry blob lacking any specific structural details or recognizable parts. (bottom-left, strong)

**people_anatomy**: score 10, raised in 4/9 calls, at bottom-left, center, middle-right

- gpt-6-sol: The nearest worker’s hands and tool blend together, with indistinct limb shapes. (bottom-left, moderate)
- gpt-6-sol: Some workers’ hands and tools are difficult to distinguish and appear slightly muddled. (center, moderate)
- gemini-3.1-pro-preview: The left leg of the worker closest to the camera appears to melt into the wet pavement, lacking a distinct boot or shoe. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower half of the worker on the right track is an indistinct, dark blob that seamlessly blends into the ground reflection. (middle-right, strong)

**texture_noise_or_sharpness**: score 10, raised in 5/9 calls, at whole-image, bottom-center

- claude-opus-5.5: The image has a smooth, painterly render with soft, uniform reflections on the wet ground. (whole-image, weak)
- claude-opus-5.5: There is a smooth, painterly rendering with soft detail typical of diffusion models. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly rendering with soft, uniform wet reflections typical of diffusion output. (whole-image, moderate)
- gemini-3.1-pro-preview: The wet ground surface has an overly smooth, painterly appearance with repetitive, non-realistic reflection textures characteristic of AI generation. (bottom-center, moderate)

## f-group-R-1.jpg: mean P(AI) 0.80 (fails)

- openai/gpt-6-sol: 0.06 / 0.76 / 0.84
- anthropic/claude-opus-5.5: 0.90 / 0.88 / 0.88
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.95

**tools_or_small_objects**: score 18, raised in 7/9 calls, at middle-right, bottom-right, bottom-left, middle-left

- gpt-6-sol: The objects around the workers’ hands and beside the rails are indistinct and difficult to identify. (middle-right, weak)
- gpt-6-sol: The objects around the workers’ hands and knees are indistinct and difficult to identify as specific tools. (middle-right, moderate)
- claude-opus-5.5: Tool bags next to the workers are amorphous blobs with no defined tools. (bottom-right, moderate)
- claude-opus-5.5: Tools and bags are blobby and indistinct; hands merge with rail. (bottom-right, moderate)

**people_pose_or_placement**: score 12, raised in 6/9 calls, at whole-image, middle-right

- gpt-6-sol: All five workers are crouched in similar positions along the rails, giving the scene an unusually staged appearance. (whole-image, moderate)
- gpt-6-sol: All five workers are posed similarly, crouching along the rails, giving the scene a staged appearance. (whole-image, moderate)
- claude-opus-5.5: Four workers on the right track are evenly spaced in near-identical kneeling poses, a staged, repetitive arrangement. (middle-right, moderate)
- claude-opus-5.5: Workers kneel in near-identical poses evenly spaced along rails, staged look with nondescript tool bags. (middle-right, moderate)

**track_geometry**: score 12, raised in 5/9 calls, at center, bottom-right

- claude-opus-5.5: Tracks enter depot doors but the left track curves oddly; rails appear to merge with the pavement without sleepers or proper grooves, with inconsistent gauge. (center, moderate)
- claude-opus-5.5: Rails converge oddly into depot doors; left track appears as a lone pair embedded in asphalt without proper groove rail detail, and rails bend unnaturally near the doors. (center, moderate)
- claude-opus-5.5: Rails rise out of the pavement as smooth, rounded tubes rather than embedded grooved rail, with no gauge-consistent profile. (center, moderate)
- gemini-3.1-pro-preview: The right-hand track appears to dissolve or merge into the ground beneath the worker closest to the camera, lacking continuous geometry. (bottom-right, strong)

**texture_noise_or_sharpness**: score 9, raised in 5/9 calls, at whole-image, top-right

- claude-opus-5.5: Smooth, painterly surfaces and uniform wet sheen typical of diffusion output. (whole-image, weak)
- claude-opus-5.5: Smooth painterly surfaces with uniform soft detail typical of diffusion output. (whole-image, weak)
- claude-opus-5.5: The image has a smooth, painterly HDR look, and the building facade is overly uniform. (whole-image, moderate)
- gemini-3.1-pro-preview: There are several unnatural, bright static dots scattered across the sky and the top right of the building that do not behave like rain or real light sources, indicating generation artifacts. (top-right, moderate)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-center

- claude-opus-5.5: The overhead wires are sparse and don't align with the tracks; the catenary arms end ambiguously. (top-center, moderate)
- claude-opus-5.5: Overhead wires from poles terminate arbitrarily and don't form coherent catenary over tracks. (top-center, moderate)
- claude-opus-5.5: The overhead catenary wires are sparse and don't connect coherently to the tracks below. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wires are excessively thin, jagged in places, and appear to intersect or fade out arbitrarily against the sky. (top-center, moderate)

## f-two-L-2.jpg: mean P(AI) 0.48 (fails)

- openai/gpt-6-sol: 0.78 / 0.16 / 0.78
- anthropic/claude-opus-5.5: 0.85 / 0.72 / 0.72
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.20

**texture_noise_or_sharpness**: score 9, raised in 5/9 calls, at whole-image

- gpt-6-sol: The broad wet pavement has unusually smooth, uniform texture despite the detailed rails and building. (whole-image, weak)
- gpt-6-sol: The building, workers and pavement have a uniformly soft, slightly painterly appearance, with fine details difficult to resolve. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly wet surfaces and soft building details typical of generators. (whole-image, moderate)
- claude-opus-5.5: There is a painterly, smoothed texture across the wet pavement and building facade, with soft speckled noise rather than true sensor grain. (whole-image, moderate)

**track_geometry**: score 7, raised in 3/9 calls, at bottom-left, center, bottom-center

- claude-opus-5.5: Left track rails are oddly embedded and widen inconsistently; rails appear as single grooved strips with no proper gauge consistency toward the depot entrance. (bottom-left, moderate)
- claude-opus-5.5: Rails lack sleepers/embedded flangeway detail and the left track's rails converge unnaturally near the building. (center, weak)
- claude-opus-5.5: Rails look like smooth, uniformly glossy bands with no visible groove, fastening, or embedding detail, and their curvature into the depot doors is overly idealized. (bottom-left, moderate)
- claude-opus-5.5: The rails look like smooth, tube-like strips with no visible groove detail. Their gauge and curvature look slightly inconsistent toward the foreground. (bottom-center, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: Catenary wires hang from poles but don't align over the tracks; wiring appears incomplete and decorative. (top-center, moderate)
- claude-opus-5.5: The overhead wires are sparse and inconsistent. Cantilever arms hang over the tracks without a coherent contact-wire system running along them. (top-center, moderate)
- claude-opus-5.5: Poles carry bracket arms, but there is no coherent overhead contact wire running above either track; the few wires that appear end or wander without a clear purpose. (top-center, moderate)

**people_anatomy**: score 3, raised in 2/9 calls, at middle-left

- gpt-6-sol: The farther worker’s seated form and equipment blend together indistinctly. (middle-left, moderate)
- claude-opus-5.5: The kneeling workers are rendered generically, with indistinct hands and tools and blobby equipment bags. (middle-left, weak)

**people_pose_or_placement**: score 1, raised in 1/9 calls, at middle-left

- claude-opus-5.5: Workers kneeling directly on rails with generic toolboxes; staged, somewhat smeared figure details. (middle-left, weak)

## f-two-R-3.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.72 / 0.85 / 0.70
- google/gemini-3.1-pro-preview: 0.01 / 0.01 / 0.05

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Smooth, painterly rendering with soft, uniform noise and mushy fine details on the fences and carts. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly texture with mushy fine detail in the background clutter and building fixtures, typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: Surfaces have a smooth, painterly look: the wet asphalt reflections and building facade lack fine, consistent detail. (whole-image, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: The catenary is sparse and does not clearly continue into the shed openings. The cantilever arms do not show a coherent contact wire above each track. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and do not align logically with the tracks below. (top-center, weak)
- claude-opus-5.5: Overhead wires run diagonally from pole arms rather than forming a coherent catenary above each track; the right track enters the shed with no proper contact wire. (top-center, moderate)

**track_geometry**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: Tracks are embedded grooved rails in paving but lack clear switch blades, frog, or connection between the two branches; rails converge oddly toward the depot doors. (center, moderate)
- claude-opus-5.5: The embedded rails curve smoothly and the perspective is plausible, but the rails look uniformly glossy and simplified. (center, weak)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: Depot building is completely generic with no readable signage, numbering, or safety markings, which would be expected at a real tram depot. (center, moderate)

**people_pose_or_placement**: score 2, raised in 2/9 calls, at middle-right

- claude-opus-5.5: The workers' kneeling poses are somewhat blob-like and lack defined tools or hands, though they are staged plausibly. (middle-right, weak)
- claude-opus-5.5: Two workers in hi-vis gear kneel on the right track with bags. Their figures are coherent but soft, with little detail in the hands and tools. (middle-right, weak)

## e-2.jpg: mean P(AI) NaN (fails)

- openai/gpt-6-sol: error
- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

No AI-pointing evidence raised.

## f-1.jpg: mean P(AI) 0.06 (passes)

- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.05
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.15

No AI-pointing evidence raised.
