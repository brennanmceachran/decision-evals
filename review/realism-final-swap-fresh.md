# Realism check: final-swap-fresh

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| people_anatomy | 28 | 3/3 |
| track_geometry | 20 | 2/3 |
| tools_or_small_objects | 18 | 3/3 |
| texture_noise_or_sharpness | 12 | 3/3 |
| overhead_wires_or_poles | 12 | 2/3 |
| background_clutter | 8 | 2/3 |
| people_pose_or_placement | 7 | 2/3 |
| buildings | 7 | 2/3 |
| text_signage_or_markings | 2 | 1/3 |
| camera_or_windscreen | 2 | 1/3 |
| people_clothing_or_gear | 2 | 1/3 |

## u-group-L-8.jpg: mean P(AI) 0.56 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.70 / 0.65 / 0.68
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.98

**people_anatomy**: score 18, raised in 3/9 calls, at bottom-left, middle-right

- gemini-3.1-pro-preview: The lower bodies of the three workers are indistinct and malformed, with their legs ending in formless dark masses that merge into the ground rather than appearing as distinct limbs and footwear. (bottom-left, strong)
- gemini-3.1-pro-preview: The lone worker on the right track lacks definable hands, and appears to be touching the track with blurred, stumpy appendages. (middle-right, strong)
- gemini-3.1-pro-preview: The lower body of the worker on the right track lacks defined legs or boots, blending amorphously into the ground and the rail. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the workers on the left track and the tools they are supposedly using merge into indistinct, blurry blobs without clear structural boundaries. (bottom-left, strong)

**track_geometry**: score 11, raised in 4/9 calls, at center, bottom-right, bottom-left

- claude-opus-5.5: Left track rails curve and converge oddly; the right rail of the left track and the left track pair don't form a consistent gauge as they recede toward the left archway, with the inner rail drifting. (center, moderate)
- claude-opus-5.5: Left track's rails appear to converge and diverge oddly; the two branches don't clearly connect through a coherent switch/junction near the arch entrances, and the left track's rail spacing narrows toward the top-left (center, moderate)
- claude-opus-5.5: Left track rails converge and splay inconsistently; the right rail of the left track curves smoothly but the gauge between rails varies noticeably along its length, and the two branches diverge with no visible switch or frog connecting them (center, moderate)
- gemini-3.1-pro-preview: The cobblestone pattern between the rails on the right track appears as a flat, distorted texture map that fails to follow the perspective and curve of the track realistically. (bottom-right, strong)

**tools_or_small_objects**: score 9, raised in 6/9 calls, at bottom-left, bottom-center, middle-right, center

- gpt-6-sol: The workers' hands and small track-side equipment are hard to distinguish clearly. (bottom-left, weak)
- gpt-6-sol: The workers’ hands and small items at the rail joint are difficult to distinguish clearly. (bottom-center, weak)
- claude-opus-5.5: The kneeling worker on the right holds an indistinct object near the rail, with no clear tool shape. (middle-right, weak)
- claude-opus-5.5: Tools held by workers are blurry, undefined shapes; no clear wrench or bar visible (center, weak)

**texture_noise_or_sharpness**: score 8, raised in 5/9 calls, at bottom-left, whole-image, bottom-center

- gpt-6-sol: The workers’ hands and the small rail fittings are soft enough that their exact shapes are hard to verify. (bottom-left, weak)
- claude-opus-5.5: An overall smooth, slightly painterly texture on the cobbles and asphalt, with a cinematic grade and no fine sensor noise. (whole-image, moderate)
- claude-opus-5.5: Cobblestone pattern is fairly regular and smooth, slightly painterly (bottom-center, weak)
- claude-opus-5.5: Cobblestones and asphalt have a smooth, painterly uniformity with soft, repetitive sett patterns lacking real-world variation (whole-image, moderate)

**overhead_wires_or_poles**: score 8, raised in 5/9 calls, at top-center

- claude-opus-5.5: Several tram poles but no overhead wires visible between them, which is inconsistent for a tram depot. (top-center, moderate)
- claude-opus-5.5: Poles standing but no overhead wires attached despite tram depot setting; poles end abruptly (top-center, weak)
- claude-opus-5.5: Several poles stand without any visible overhead wires or attachments, a pattern common in generated tram scenes (top-center, weak)
- gemini-3.1-pro-preview: Several tall, uniformly smooth grey poles stand in the yard without any visible wires, attachments, or clear functional purpose shown in the frame. (top-center, moderate)

## w-group-R-1.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 9, raised in 3/9 calls, at bottom-left, bottom-center, middle-left

- gemini-3.1-pro-preview: The track structure curving to the left has bizarre, ladder-like cross pieces embedded in the concrete next to a very thin rail line, which does not resemble standard railway construction. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge into a single line in the foreground without any logical switch mechanism. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the left track loses its definition and appears to melt or disappear completely into the concrete surface just beyond the kneeling worker. (middle-left, strong)

**people_anatomy**: score 9, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The hands and arms of the worker on the far right of the group of three blend indistinctly into the dark tools or rails on the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The middle worker in the yellow shirt lacks defined legs, with his lower body melting into the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The left hand of the worker on the left track is a formless blob merging with the rail. (middle-left, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-right, middle-right, center

- gpt-6-sol: The workers’ hands and equipment overlap in a small, somewhat indistinct area, making individual objects hard to resolve. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and small equipment where they meet the rail are difficult to distinguish, leaving some shapes ambiguous. (bottom-right, weak)
- gpt-6-sol: The hands and small equipment where the three workers meet the rail are hard to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The equipment scattered on the ground in front of the group of three workers consists of indistinct, fused shapes that do not resemble functional tools or machinery. (bottom-right, strong)

**buildings**: score 6, raised in 3/9 calls, at top-left, middle-left

- gemini-3.1-pro-preview: The structure around the dark open doorway on the left building features nonsensical intersecting lines and a pillar that seems to merge impossibly into the wall. (top-left, strong)
- gemini-3.1-pro-preview: Vertical lines on the metal building facade are wavy and inconsistently spaced. (top-left, moderate)
- gemini-3.1-pro-preview: The vertical paneling lines on the upper facade of the building on the left are unevenly spaced, and some lines arbitrarily stop halfway down the wall. (middle-left, weak)

**background_clutter**: score 6, raised in 2/9 calls, at center, top-center

- gemini-3.1-pro-preview: The pile of pipes in the background consists of merged circular shapes rather than distinct cylinders. (center, strong)
- gemini-3.1-pro-preview: The stacked pipes near the fence in the background have distorted, non-circular openings, and several of the pipes appear to fuse seamlessly into one another. (top-center, strong)

## u-group-L-7.jpg: mean P(AI) 0.07 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- openai/gpt-6-sol: 0.10 / 0.07 / 0.06
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The workers’ hands and equipment near the left rail are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers’ hands, tools, and nearby cables are difficult to distinguish clearly. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: Fine details are somewhat soft, especially around the workers and distant masonry; this could also be ordinary photographic blur. (whole-image, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The kneeling worker's hands and the object by the rail are hard to distinguish clearly. (middle-right, weak)
