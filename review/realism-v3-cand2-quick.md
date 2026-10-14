# Realism check: v3-cand2-quick

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| overhead_wires_or_poles | 26 | 4/4 |
| tools_or_small_objects | 25 | 4/4 |
| track_geometry | 24 | 4/4 |
| people_anatomy | 20 | 4/4 |
| people_pose_or_placement | 19 | 4/4 |
| texture_noise_or_sharpness | 15 | 4/4 |
| reflections_or_wet_surfaces | 8 | 4/4 |
| background_clutter | 5 | 2/4 |
| composition_or_staging | 2 | 2/4 |
| camera_or_windscreen | 1 | 1/4 |
| buildings | 1 | 1/4 |
| people_clothing_or_gear | 1 | 1/4 |

## e-group-L-2.jpg: mean P(AI) 0.29 (passes)

- anthropic/claude-opus-5.5: 0.85 / 0.78 / 0.75
- openai/gpt-6-sol: 0.03 / 0.06 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.05

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left

- claude-opus-5.5: The overhead wires are sparse and inconsistent. The catenary arms don't align with the tracks below them. (top-left, moderate)
- claude-opus-5.5: The poles and wires do not form a coherent catenary system over the tracks. The wires end or drift off ambiguously. (top-left, moderate)
- claude-opus-5.5: The catenary is sparse and inconsistent: wires end abruptly and don't properly span the tracks feeding the depot doors. (top-left, moderate)

**track_geometry**: score 5, raised in 3/9 calls, at center

- claude-opus-5.5: The two tracks diverge oddly: the left track curves toward the left door while the right track starts abruptly mid-slab with no clear switch connection, and the rails are embedded in a featureless concrete apron. (center, moderate)
- claude-opus-5.5: The two tracks emerge separately from the foreground with no visible switch or connection, and the rail curvature toward the doors looks smooth but schematic. (center, moderate)
- claude-opus-5.5: The track layout is ambiguous. The two branches simply sit side by side with no visible switch, and the rail curvature toward the doors is somewhat irregular. (center, weak)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-left

- claude-opus-5.5: The workers are crouched in a neat row, and their tool interactions are vague: a yellow frame with an unclear purpose and a bag on the rail. (middle-left, moderate)
- claude-opus-5.5: The three workers are evenly spaced and posed in generic crouches. The tools and the yellow gauge frame are vaguely defined. (middle-left, moderate)

**reflections_or_wet_surfaces**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The wet surface reflections are smooth and uniformly painterly, with the soft, clean rendering typical of generators. (whole-image, weak)
- claude-opus-5.5: The wet concrete has a uniform, painterly sheen, and the reflections of the workers are soft and smeared. (whole-image, weak)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, uniform wet concrete with a painterly, low-detail rendering typical of generated images. (whole-image, moderate)

## e-group-L-3.jpg: mean P(AI) 0.42 (fails)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.88 / 0.88 / 0.85
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.05

**tools_or_small_objects**: score 12, raised in 4/9 calls, at center, middle-right

- claude-opus-5.5: Tools held by workers are vague, indistinct shapes; the worker kneeling on a blob-like bag/object. (center, moderate)
- claude-opus-5.5: Tools held by workers are vague, blob-like shapes without clear function. (middle-right, moderate)
- claude-opus-5.5: Tools held by workers are vague, blob-like shapes without clear function (middle-right, moderate)
- gemini-3.1-pro-preview: The third worker from the left is handling an object that looks like a strangely textured, irregular block rather than a recognizable tool or piece of equipment. The way their hands interact with it is also unnatural. (center, strong)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at middle-left

- claude-opus-5.5: Three workers kneel in a neat row symmetrically on the track, staged composition; the right worker mirrors them. (middle-left, moderate)
- claude-opus-5.5: Three workers kneel in a neat row symmetrically on and between rails, staged composition; the middle one kneels directly on the rail. (middle-left, moderate)
- claude-opus-5.5: Three workers kneeling side by side directly on/between rails in a staged lineup, plus a lone worker on the right, posed symmetrically (middle-left, moderate)
- gemini-3.1-pro-preview: The boots and knees of the workers, especially the leftmost one, appear to melt or blend into the wet concrete and track flangeways rather than resting physically on the surface. (middle-left, moderate)

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Left track rails converge and terminate oddly; rails appear embedded in concrete without consistent gauge, and the left track's rails seem to not lead cleanly into the depot door. (center, moderate)
- claude-opus-5.5: Two embedded tram tracks diverge with no visible switch; the left track's rails converge oddly into the depot, and gauge appears inconsistent between left and right tracks. (center, moderate)
- claude-opus-5.5: Embedded tram rails in a depot apron with no visible switch connecting branches; tracks curve oddly and the left track's rails don't clearly lead into the shed doors (center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overall smooth, slightly airbrushed rendering of concrete and building siding typical of diffusion output. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly surface and overly clean reflections typical of diffusion output. (whole-image, weak)
- claude-opus-5.5: Smooth, painterly concrete texture and uniformly clean building with soft generic detail (whole-image, weak)

**overhead_wires_or_poles**: score 4, raised in 3/9 calls, at top-left

- claude-opus-5.5: Overhead wires attach inconsistently to poles and don't span tracks logically. (top-left, weak)
- claude-opus-5.5: Overhead wire spans and pole arms are inconsistent, wires end abruptly and don't align with tracks. (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent, poles with arms not supporting a coherent catenary (top-left, weak)

## e-group-R-2.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.68 / 0.75 / 0.72
- google/gemini-3.1-pro-preview: 0.95 / 0.05 / 0.05

**tools_or_small_objects**: score 8, raised in 3/9 calls, at center, middle-right, bottom-right

- claude-opus-5.5: The tools on the rails (a bar or gauge) are smeared and lack clear structure. (center, weak)
- claude-opus-5.5: The tools the workers are holding are vague, smeared shapes with no recognizable function. (middle-right, moderate)
- gemini-3.1-pro-preview: The worker in the yellow vest is interacting with a white, blocky object on the rail that is amorphous and lacks the mechanical detail of a real track tool. (middle-right, strong)
- gemini-3.1-pro-preview: The bag or object sitting on the ground next to the rightmost worker is an indistinct, vaguely textured blob rather than a discernible piece of equipment. (bottom-right, moderate)

**track_geometry**: score 7, raised in 4/9 calls, at center, middle-left

- claude-opus-5.5: The far ends of the rails fade and merge somewhat indistinctly near the depot doors. The track curvature is smooth but generic. (center, weak)
- claude-opus-5.5: The rails of the two tracks bend and widen inconsistently toward the foreground, and the gauge of the right track changes noticeably along its length, which is unlikely for real rails. (center, moderate)
- claude-opus-5.5: Rails fade and blur toward the depot doors instead of continuing as clearly defined track, and the track spacing looks slightly inconsistent. (center, moderate)
- gemini-3.1-pro-preview: The rails of the left track lose their defined edges and seem to smudge into the surrounding concrete just beyond the kneeling worker. (middle-left, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center, top-right

- claude-opus-5.5: The overhead wires are sparse and run diagonally from the poles rather than forming a coherent catenary above each track, which is implausible for a tram depot. (top-center, moderate)
- claude-opus-5.5: The catenary wires are sparse and don't clearly follow the tracks or attach to the poles in a logical way. (top-right, weak)
- gemini-3.1-pro-preview: The overhead catenary wires appear to fade out abruptly in the sky and lack clear, realistic attachment hardware connecting them to the support poles. (top-center, moderate)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-right

- claude-opus-5.5: The workers kneel in staged, evenly spaced poses with indistinct tools, and their hands and tools are blurred. (middle-right, moderate)
- claude-opus-5.5: The three workers on the right sit in near-identical generic kneeling poses with no visible faces, and their hands merge vaguely into undefined tools. (middle-right, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The image has an overall smooth, slightly painterly texture with uniform softness, typical of a generative model. (whole-image, moderate)
- claude-opus-5.5: Surfaces are overly smooth and painterly, and the wet concrete has a uniform, synthetic sheen. (whole-image, moderate)

## e-group-R-3.jpg: mean P(AI) 0.47 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.62 / 0.65 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.05

**people_anatomy**: score 12, raised in 2/9 calls, at middle-right, bottom-right

- gemini-3.1-pro-preview: The person in the orange jacket positioned behind the worker in the yellow vest lacks distinguishable legs and appears to be just a torso merging into the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The kneeling worker on the far right has severely distorted lower body anatomy, appearing to meld indiscriminately with the black bag or object beside them. (bottom-right, strong)
- gemini-3.1-pro-preview: The worker in the orange jacket furthest back on the right track lacks a defined lower body; their torso appears to melt indistinctly into the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the far right has a jumbled, indistinguishable mass of dark shapes instead of recognizable legs and feet. (middle-right, strong)

**overhead_wires_or_poles**: score 11, raised in 5/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: Catenary poles and span cross-arms are present, but no consistent contact wire runs above either track; the few wires visible run at odd diagonals that don't line up with the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent for a tram depot. A single wire droops oddly from a pole, and the catenary does not follow the tracks. (top-left, moderate)
- claude-opus-5.5: The overhead wires are sparse and do not connect logically to the catenary over the tracks. (top-center, weak)
- gemini-3.1-pro-preview: The structural beams and wires attached to the overhead mast do not connect logically, with some fading out into thin air or turning into chaotic, disconnected scribbles. (top-right, strong)

**track_geometry**: score 6, raised in 2/9 calls, at center, middle-right, bottom-right

- claude-opus-5.5: The left track's two rails converge oddly and appear to merge or run unnaturally close toward the depot entrance, with inconsistent gauge. (center, moderate)
- claude-opus-5.5: The right track's rail spacing is inconsistent: the near rails sit far apart while the distant rails converge abnormally. (middle-right, moderate)
- gemini-3.1-pro-preview: The inner rail of the right-hand track exhibits inconsistent thickness and slightly wobbly geometry as it approaches the bottom of the frame. (bottom-right, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image, middle-left

- claude-opus-5.5: The concrete and puddle surfaces are unusually smooth and uniform, with a painterly softness typical of generated images. (whole-image, moderate)
- claude-opus-5.5: The wet concrete has a smooth, painterly look, and the reflections are soft and generic. (whole-image, weak)
- gemini-3.1-pro-preview: The stacked pallets near the wooden spool have a melted, blurry texture, lacking the defined straight lines of real wooden slats. (middle-left, moderate)

**reflections_or_wet_surfaces**: score 4, raised in 2/9 calls, at center, middle-left

- claude-opus-5.5: The reflections of the orange vests in the wet concrete are plausible but soft and smeared. (center, weak)
- gemini-3.1-pro-preview: The reflection of the long metal bar held by the worker on the left track appears as a horizontal line on the wet concrete, which contradicts the diagonal angle of the physical object. (middle-left, strong)
