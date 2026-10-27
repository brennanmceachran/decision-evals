# Realism check: final-swap-fresh2

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| people_anatomy | 40 | 3/3 |
| track_geometry | 30 | 3/3 |
| tools_or_small_objects | 27 | 3/3 |
| overhead_wires_or_poles | 13 | 3/3 |
| texture_noise_or_sharpness | 7 | 3/3 |
| background_clutter | 7 | 3/3 |
| people_pose_or_placement | 6 | 2/3 |
| buildings | 5 | 2/3 |
| composition_or_staging | 4 | 2/3 |
| people_clothing_or_gear | 3 | 1/3 |
| camera_or_windscreen | 2 | 2/3 |
| text_signage_or_markings | 2 | 1/3 |

## w-group-R-2.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.22 / 0.27 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**tools_or_small_objects**: score 14, raised in 4/9 calls, at middle-right, center, bottom-right, middle-left

- gpt-6-sol: The workers' hands and equipment near the right rail are difficult to distinguish from one another. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of what appears to be concrete pipes in the background consists of melded, irregular cylindrical shapes with inconsistent or missing hollow centers. (center, strong)
- gemini-3.1-pro-preview: The brown bag or object resting on the ground to the right of the workers is a smooth, formless blob completely lacking functional details like straps, pockets, or seams. (bottom-right, moderate)
- gemini-3.1-pro-preview: The tools and bags lying on the ground next to the workers are formless, melded blobs rather than distinct, recognizable objects. (middle-right, moderate)

**track_geometry**: score 11, raised in 3/9 calls, at center, bottom-left, bottom-center

- gemini-3.1-pro-preview: The transition of the tracks from being embedded in pavement to resting on ballast is extremely abrupt and messy, with rails appearing to sit loosely on top of poorly defined sleepers. (center, strong)
- gemini-3.1-pro-preview: The track gauge (distance between rails) changes abruptly as the rails transition from the paved surface to the gravel area. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks approach each other but then simply fade into the concrete without any visible switch mechanism or logical intersection. (bottom-center, strong)
- gemini-3.1-pro-preview: The steel rails embedded in the concrete in the foreground lack the complex, deep profile (like a groove) of real tram tracks, instead appearing somewhat flat and drawn onto the surface. (bottom-center, moderate)

**people_anatomy**: score 11, raised in 3/9 calls, at middle-right

- gemini-3.1-pro-preview: The group of three workers have hands and limbs that meld indistinctly into the rails, the ground, and their tools. (middle-right, strong)
- gemini-3.1-pro-preview: The lower body of the worker on the far right blends irregularly into the ground and the object next to them. (middle-right, moderate)
- gemini-3.1-pro-preview: The faces of the workers kneeling on the right track are heavily distorted, featureless, and melted together, lacking discernible human facial structures. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the worker on the far right, touching the track, appear as solid, fleshy blobs without distinct fingers. (middle-right, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-right

- gemini-3.1-pro-preview: The metal pole in the mid-background fades out towards the top and has nonsensical, floating attachments. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wires are disjointed, with some sections appearing to float and end abruptly in mid-air without connecting to anything. (top-right, strong)

**buildings**: score 4, raised in 2/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The corrugated metal siding on the building has wavy vertical lines, and the roofline is jagged and inconsistently rendered. (top-left, moderate)
- gemini-3.1-pro-preview: The vertical corrugation lines on the closed roller door in the background are noticeably wavy and uneven. (top-center, moderate)

## w-group-R-6.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 1.00 / 0.99

**track_geometry**: score 15, raised in 3/9 calls, at center, middle-left, middle-right

- gemini-3.1-pro-preview: The main track splits into two branch tracks without any switch mechanism (such as switch blades or a frog); the inner rails of the branches simply materialize out of the solid concrete pavement. (center, strong)
- gemini-3.1-pro-preview: The left track features a short, isolated section of exposed cross-ties that abruptly and illogically transitions into smooth concrete with flush rails. (middle-left, strong)
- gemini-3.1-pro-preview: Behind the three workers, the railway sleepers (ties) are arranged haphazardly, crisscrossing at random angles instead of sitting parallel to each other. (middle-right, strong)
- gemini-3.1-pro-preview: Behind the single kneeling worker, the parallel continuous rails abruptly change into a transverse, ladder-like grating pattern that is structurally nonsensical for train tracks. (middle-left, strong)

**people_anatomy**: score 14, raised in 3/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: In the group of three workers, the worker on the left (in yellow) is missing a right arm, and his torso merges seamlessly into the adjacent worker in the orange shirt. (middle-right, strong)
- gemini-3.1-pro-preview: The lone worker crouching on the left track has a leg that seems to blend directly into the rail and the shadow below it, lacking clear physical boundaries. (middle-left, moderate)
- gemini-3.1-pro-preview: The worker in the orange shirt has legs that melt formlessly into the rail and the ground, lacking distinct boots or realistic anatomical structure. (middle-right, strong)
- gemini-3.1-pro-preview: The left arm and hands of the solitary worker on the left track dissolve into a dark, undefined smudge on top of the rail. (middle-left, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-right, top-center

- gemini-3.1-pro-preview: An overhead wire attached to the central pole extends out to the right but then completely vanishes into the open sky before connecting to anything else. (top-right, moderate)
- gemini-3.1-pro-preview: An overhead wire extending from the left abruptly vanishes into the sky before attaching to the central pole. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires above the tracks are faint, broken, or completely missing in places where they should logically connect to the support poles. (top-right, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, center

- gpt-6-sol: The stacked pipes and nearby small objects have indistinct edges, though distance and image resolution could explain this. (top-center, weak)
- gemini-3.1-pro-preview: The stack of cylindrical pipes or logs in the background features distorted, melting circular ends that blend into one another and the surrounding weeds. (center, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The kneeling workers' hands and feet are rendered as indistinct, melting blobs that blend directly into the ground and rails, and they appear to be holding no visible tools. (middle-right, strong)

## u-group-L-7.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.08 / 0.03 / 0.16
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**people_anatomy**: score 15, raised in 3/9 calls, at bottom-left, middle-right, bottom-right

- gemini-3.1-pro-preview: The worker wearing the orange jacket appears to be missing their legs below the knee, with the body ending abruptly in a dark, formless mass. (bottom-left, strong)
- gemini-3.1-pro-preview: The legs and boots of the worker in the orange jacket are malformed, appearing to melt into each other and the ground rather than forming distinct limbs. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker on the right track has a lower body that indistinctly merges into the rail and surrounding cobbles without discernible feet or a physically logical kneeling posture. (middle-right, strong)
- gemini-3.1-pro-preview: The arm of the worker in the yellow jacket on the far left appears to merge seamlessly into the side of the worker in the orange jacket. (bottom-left, strong)

**tools_or_small_objects**: score 11, raised in 6/9 calls, at middle-right, bottom-center, bottom-left, bottom-right

- gpt-6-sol: The kneeling worker’s hands and equipment at the rail are hard to distinguish clearly, leaving some uncertainty about their shapes. (middle-right, weak)
- gpt-6-sol: The equipment and hands beside the left rail are somewhat hard to distinguish. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and small equipment near the rail are difficult to distinguish clearly. (bottom-left, weak)
- gemini-3.1-pro-preview: The hands of the workers on the left and the tools they are supposedly using are indistinct, blurry blobs without realistic detail or structure. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at bottom-left, whole-image

- gpt-6-sol: Fine details around the foreground workers’ hands and tools look somewhat soft and muddled. (bottom-left, weak)
- gpt-6-sol: The image is somewhat soft, limiting confidence in fine details such as hands and tools. (whole-image, weak)
- gemini-3.1-pro-preview: Overall, the image exhibits a hazy, painterly quality with a lack of crisp photographic detail and inconsistent textures upon closer inspection. (whole-image, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: The paving stones between and outside the rails on the bottom right become strangely elongated and warped, losing the perspective of cobblestones. (bottom-right, moderate)
- gemini-3.1-pro-preview: The steel rails immediately underneath and near the workers on the left lose their sharp structural edges and seem to blend unnaturally into the texture of the cobblestones. (bottom-left, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The worker kneeling on the right track has an unnatural pose; their right leg and foot appear to merge into the ground or are missing, lacking clear definition. (bottom-right, strong)
