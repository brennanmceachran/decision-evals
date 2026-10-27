# Realism check: final-frozen-fresh

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 82 | 14/24 |
| people_anatomy | 75 | 14/24 |
| tools_or_small_objects | 70 | 17/24 |
| texture_noise_or_sharpness | 41 | 16/24 |
| background_clutter | 37 | 14/24 |
| buildings | 31 | 12/24 |
| people_pose_or_placement | 22 | 7/24 |
| overhead_wires_or_poles | 21 | 9/24 |
| camera_or_windscreen | 9 | 3/24 |
| composition_or_staging | 7 | 4/24 |
| switch_mechanism | 7 | 3/24 |
| people_clothing_or_gear | 6 | 3/24 |
| text_signage_or_markings | 5 | 2/24 |
| lighting_or_shadows | 3 | 2/24 |

## u-empty-L.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.01 / 0.02

**background_clutter**: score 3, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: Details inside the distant right arch are indistinct and slightly smeared, which could be mistaken for generated detail. (middle-right, weak)
- gemini-3.1-pro-preview: The stack of rusty rails or pipes in the courtyard lacks definition; the individual items merge into a single blobby texture without distinct ends. (center, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the left and right diverging tracks meet at a sharp point, forming a 'V', but neither rail connects back to the single set of rails entering from the bottom of the frame, creating an impossible junction where a train would derail. (bottom-center, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-left, whole-image

- gpt-6-sol: Details inside the left arch are dark and indistinct, which could resemble generated-image smearing, though the shadow also explains it. (middle-left, weak)
- gpt-6-sol: Distant details are somewhat soft and low-contrast, which could also occur in an AI-generated image. (whole-image, weak)

**buildings**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The windows set into the brick arches of the building have muddy, indistinct panes and frames that blend together nonsensically upon closer inspection. (center, moderate)

## u-empty-R.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- openai/gpt-6-sol: 0.03 / 0.04 / 0.06
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.01

**background_clutter**: score 2, raised in 2/9 calls, at top-left, top-center

- gpt-6-sol: Dark shapes inside the left arch blend together and are difficult to identify; this is also explainable by the deep shade. (top-left, weak)
- gpt-6-sol: Objects beside the building and details within the left archway are indistinct, which could conceal generated errors, though distance and low light also explain it. (top-center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: Details inside the left arch are unusually hard to distinguish, though deep shadow could explain this. (middle-left, weak)

## u-group-L.jpg: mean P(AI) 0.35 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.75 / 0.20
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**track_geometry**: score 12, raised in 4/9 calls, at center, top-left, middle-right, bottom-center

- claude-opus-5.5: The tram tracks diverge into two branches with no visible switch blades or frog at the junction; the rails simply end or fade into the cobbles, and the left track's rails curve inconsistently. (center, moderate)
- claude-opus-5.5: The distant left track splits into multiple rails that merge and fade illogically toward the arch. (top-left, moderate)
- claude-opus-5.5: Left track's right rail curves upward toward the left and the right track's left rail continues; the two branches diverge without a coherent switch or frog connecting them, an odd layout (center, moderate)
- gemini-3.1-pro-preview: The inner rail of the right-hand track abruptly disappears and turns into a discontinuous, jagged line directly beneath where the worker is kneeling. (middle-right, strong)

**people_anatomy**: score 9, raised in 2/9 calls, at center, middle-right, middle-left

- gemini-3.1-pro-preview: The three workers on the left have poorly defined, melting legs and disproportionate limbs; the worker on the far left has a lower body that indistinctly blends into the ground and surrounding bags. (center, strong)
- gemini-3.1-pro-preview: The solitary worker on the right track has legs that appear merged together, and his hands are formless blobs resting on the rail. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right side of the left group is missing his lower body, with his torso appearing to melt into a brown bag or pile on the ground. (middle-left, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at middle-left, bottom-center, center

- gpt-6-sol: Hands and tools where the three workers cluster are difficult to distinguish, leaving some shapes ambiguous. (middle-left, weak)
- claude-opus-5.5: The cobble setts look smooth and repetitive, with a soft, painterly sheen across the asphalt patches. (bottom-center, weak)
- gemini-3.1-pro-preview: The transition between the cobblestones and the smooth asphalt in the central area is unnatural, with cobblestone patterns faintly bleeding into the smooth surface. (center, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at center, middle-right

- gpt-6-sol: The workers' hands and the small objects near the rails are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The kneeling worker’s hands and the object at the rail are difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of bags or equipment sitting to the left of the left-most worker consists of indistinct, merged blobs rather than identifiable objects. (center, moderate)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center, middle-right

- claude-opus-5.5: The three workers huddle on the left track over an unclear task; their hands and tools are indistinct. (center, weak)
- gemini-3.1-pro-preview: The hand and tool of the lone worker on the right track merge seamlessly into the steel rail he is supposedly working on. (middle-right, strong)

## u-group-R.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.06
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at middle-right, whole-image, bottom-right, center

- gpt-6-sol: The workers' hands and equipment are indistinct, making their exact actions hard to verify. (middle-right, weak)
- gpt-6-sol: Fine details are generally soft, including the distant worker and brickwork; this could also result from the photograph's resolution. (whole-image, weak)
- gpt-6-sol: The workers’ hands and the object between them are indistinct, though they occupy a small part of the image. (middle-right, weak)
- gemini-3.1-pro-preview: The cobblestone pattern degrades into random, unstructured diagonal lines and smudged shapes. (bottom-right, moderate)

**track_geometry**: score 6, raised in 1/9 calls, at center, middle-right

- gemini-3.1-pro-preview: There is no switch mechanism or frog where the two branch lines meet; the inner rails simply vanish into the smooth gray pavement. (center, strong)
- gemini-3.1-pro-preview: The left-hand rail of the right branch track disappears completely into the ground just behind the kneeling worker in orange, failing to continue towards the archway. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands of the workers merge directly into a dark, shapeless mass on the ground rather than holding recognizable tools. (middle-right, strong)
- gemini-3.1-pro-preview: The hands and tools of the three workers grouped together merge into indistinct, muddy blobs, making it impossible to identify what they are holding. (middle-right, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-right

- gpt-6-sol: The kneeling workers' hands and the object between them are too small and soft to make out clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The central worker in the group of three is an amorphous blob missing a recognizable head or natural body structure. (middle-right, strong)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The reflective stripes on the high-visibility clothing are irregular, disconnected, and nonsensical in their placement. (middle-right, moderate)

## u-two-L.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**tools_or_small_objects**: score 3, raised in 3/9 calls, at bottom-left

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish clearly, leaving some ambiguity in the fine details. (bottom-left, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are hard to distinguish clearly. (bottom-left, weak)
- gpt-6-sol: The workers' hands and the object between them are difficult to distinguish clearly; this could be generation blur, though distance and image quality also explain it. (bottom-left, weak)

## u-two-R.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.05

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at middle-right, whole-image, center

- gpt-6-sol: The workers’ hands and the small object between them are too soft to identify clearly. (middle-right, weak)
- gpt-6-sol: The workers' hands and the small area where they meet the rail are indistinct, making the exact action hard to resolve. (middle-right, weak)
- gpt-6-sol: The image is somewhat hazy and soft, especially around the workers' hands, making fine details hard to verify. (whole-image, weak)
- gemini-3.1-pro-preview: The detailed cobblestone texture unnaturally melts into a smooth, flat grey surface between the two tracks without a defined edge or logical transition. (center, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The rails do not form a consistent, parallel track; the inner rail seemingly disappears into the ground near the workers, and the distance between the visible rails varies wildly. (middle-right, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The lower body of the worker in the orange jacket is anatomically distorted, appearing to have a third leg or an indistinct fleshy mass extending beneath his chest. (middle-right, strong)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The objects the workers are interacting with on the track are not recognizable tools, but rather an indistinct, blurred amalgamation of shapes. (center, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The windows set inside the brick arches lack structural logic, appearing as flat, smudged dark patches without distinct frames or sills. (top-center, moderate)

## w-empty-L.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.07
- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at top-left, bottom-center

- gpt-6-sol: Details inside the dark warehouse opening are hard to distinguish, which leaves some visual ambiguity. (top-left, weak)
- gpt-6-sol: The broad paved area looks relatively smooth compared with the gravel beside it, though that is plausible for concrete. (bottom-center, weak)

**background_clutter**: score 2, raised in 2/9 calls, at top-center

- gpt-6-sol: The small pile of pipes is indistinct at this resolution, making its individual pieces hard to verify. (top-center, weak)
- gpt-6-sol: The small pile of pipes is visually crowded, making individual pipe edges difficult to distinguish at this resolution. (top-center, weak)

## w-empty-R.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at center, top-left, middle-right

- gpt-6-sol: The broad pavement area looks somewhat flat and low-detail, though this could result from the surface and image resolution. (center, weak)
- gpt-6-sol: Small bright specks and some distant edges look indistinct; this could suggest generated detail, though it is also consistent with a soft or dirty photograph. (top-left, weak)
- gpt-6-sol: Some distant gravel and vegetation look indistinct, though ordinary image softness could explain this. (middle-right, weak)

## w-group-L.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.07
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.99

**people_anatomy**: score 7, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The overlapping hands, legs, and equipment of the three workers are difficult to distinguish precisely. (center, weak)
- gemini-3.1-pro-preview: The three workers clustered on the left track have malformed, indistinct limbs that appear to melt into each other and the ground. The middle worker in orange has a featureless white blob for a head/helmet. (middle-left, strong)
- gemini-3.1-pro-preview: The rightmost worker in the group of three has severely distorted lower legs, with one leg appearing to bend backward and sink into the ground unnaturally. (middle-left, strong)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at middle-left

- gpt-6-sol: The workers' hands and small items around the left rails are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The workers' hands and small equipment by the rail are difficult to distinguish clearly. (middle-left, weak)
- gemini-3.1-pro-preview: Despite the workers appearing to be engaged in manual labor on the tracks, there are no recognizable tools in their hands; they are only holding formless, blob-like objects. (middle-left, moderate)
- gemini-3.1-pro-preview: The object resting on the ground next to the leftmost worker is a shapeless, unidentifiable blob rather than a distinct tool or bag. (middle-left, moderate)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-right, center

- gemini-3.1-pro-preview: The rightmost rail of the right-hand track appears wobbly and seemingly splits into two parallel, ghosted lines near the bottom edge of the frame. (bottom-right, strong)
- gemini-3.1-pro-preview: The left rail of the right-hand track simply starts abruptly in the middle of the concrete, rather than connecting to a main line or switch. (center, strong)

**camera_or_windscreen**: score 3, raised in 2/9 calls, at top-center, whole-image

- gemini-3.1-pro-preview: There are faint, repeating circular artifact spots overlaid across the top portion of the image, resembling an artificial filter for lens dirt or a window reflection. (top-center, weak)
- gemini-3.1-pro-preview: There are numerous faint, circular artifacts resembling sensor dust or water spots distributed across the upper half of the image, appearing artificially overlaid. (whole-image, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: There is no functional switch mechanism (points, frog) visible where the tracks diverge; the rails appear drawn on the ground rather than forming a realistic junction. (center, strong)

## w-group-R.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- openai/gpt-6-sol: 0.02 / 0.04 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 11, raised in 3/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The worker kneeling on the left track has indistinct, stump-like hands, and the shape of his hard hat merges unnaturally with his body. (middle-left, moderate)
- gemini-3.1-pro-preview: The boots of the kneeling worker in the orange vest are heavily distorted, appearing as formless shapes that melt into the concrete surface. (center, strong)
- gemini-3.1-pro-preview: The left arm of the yellow-vested worker on the left side of the group disappears into a dark, undefined smear that connects directly to the orange worker's leg. (center, strong)
- gemini-3.1-pro-preview: The boots of the worker in the orange shirt are poorly defined, lacking clear structure, and seem to melt into the concrete ground. (center, strong)

**track_geometry**: score 10, raised in 3/9 calls, at middle-right, center, bottom-right

- gemini-3.1-pro-preview: The rails embedded in the concrete on the right branch track appear flat, similar to painted stripes, and lack the continuous deep flangeways required for train wheels. The left rail even seems to vanish under the workers. (middle-right, strong)
- gemini-3.1-pro-preview: The transition of the left track from the dirt ballast to the concrete is physically awkward, and the railroad ties (sleepers) look unevenly spaced and slightly warped. (center, moderate)
- gemini-3.1-pro-preview: The flangeway grooves next to the rails on the right track have irregular, blurry edges and appear painted onto the surface rather than being physical recesses in the concrete. (bottom-right, moderate)
- gemini-3.1-pro-preview: The steel rails of the right branch track lose their continuous line and distinct shape where they pass beneath the group of kneeling workers. (center, strong)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and the object at the rail junction are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers’ hands and the small object beside the right-hand rail are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers' hands and equipment at the right-hand rail are difficult to distinguish, leaving a little visual ambiguity. (center, weak)
- gemini-3.1-pro-preview: The pile of pipes in the background has irregular, misshapen circular ends that merge into one another rather than looking like distinct stacked cylinders. (middle-left, strong)

**people_pose_or_placement**: score 6, raised in 2/9 calls, at middle-right, center

- gemini-3.1-pro-preview: The three workers kneeling on the right track have confusing and merging body parts; the left-most worker in yellow has an unnatural leg arrangement and his hands appear as indistinct blobs. (middle-right, strong)
- gemini-3.1-pro-preview: The worker in the yellow shirt on the left side of the three-person group has a knee that appears to intersect directly through the solid steel rail. (center, strong)

**background_clutter**: score 4, raised in 2/9 calls, at top-center, center

- gemini-3.1-pro-preview: The horizontal corrugations on the closed roller doors are wavy, crooked, and inconsistently spaced. (top-center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (pipes) in the middle distance is a fused, indistinct mass where individual shapes merge unnaturally. (center, moderate)

## w-two-L.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.99

**track_geometry**: score 9, raised in 2/9 calls, at middle-left, bottom-center, bottom-right

- gemini-3.1-pro-preview: The inner rail of the left track abruptly ends underneath the worker in the orange vest, with no logical continuation. Additionally, the track curving towards the left building appears to have three rails instead of the standard two. (middle-left, strong)
- gemini-3.1-pro-preview: At the point where the tracks would theoretically branch, there is a complete absence of any switch mechanism (points, throw levers); the rails simply merge into the concrete. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails for the right-hand track that are embedded in the concrete lack depth and a proper cross-sectional profile, appearing more like flat ribbons laid on the surface. (bottom-right, strong)

**tools_or_small_objects**: score 8, raised in 5/9 calls, at middle-left, center

- gpt-6-sol: The workers’ hands and the small objects beside the rails are hard to distinguish, leaving some uncertainty about their shapes. (middle-left, weak)
- gpt-6-sol: The workers’ hands and dark equipment overlap in a small area that is difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are somewhat hard to distinguish. (center, weak)
- gemini-3.1-pro-preview: The items resting on the ground next to both workers appear as formless, dark blobs rather than distinct tools or toolbags, and they blend unnaturally into the ground and the workers' clothing. (middle-left, moderate)

**people_anatomy**: score 6, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The lower body of the worker in the orange vest is severely malformed. His right leg blends into a dark blob, and there appears to be a disembodied boot or extra leg structure just to the right of his actual leg position. (middle-left, strong)
- gemini-3.1-pro-preview: The worker in the orange vest has a severely distorted head and neck angle, appearing anatomically impossible, as if looking backwards while hunched over. (middle-left, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: A thin, vertical grey pole located just to the left of the thick main pole on the right side of the image inexplicably terminates in mid-air near the top edge of the frame. (top-right, moderate)

**people_pose_or_placement**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The worker in the yellow shirt has a large, indistinct dark mass attached to his left leg or knee area that does not resemble a natural fold of clothing, a recognizable tool, or a clear shadow. (middle-left, moderate)

## w-two-R.jpg: mean P(AI) 0.33 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.04 / 0.02
- google/gemini-3.1-pro-preview: 0.95 / 0.65 / 0.99

**people_anatomy**: score 9, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ overlapping hands and equipment are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The workers' hands and feet are indistinct blobs, and the right worker's left arm appears to be a stub that melts into the object below it. (bottom-right, strong)
- gemini-3.1-pro-preview: Indistinct limbs. (middle-right, moderate)
- gemini-3.1-pro-preview: The arms and hands of the two workers kneeling on the track are a jumbled, amorphous mass of flesh and unrecognizable tool textures, lacking distinct fingers or a logical grip. (middle-right, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and equipment at the rail are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The tools and workers’ hands at the rail are crowded and difficult to distinguish individually. (middle-right, weak)
- gemini-3.1-pro-preview: The tools and gear scattered around the kneeling workers lack recognizable shapes and blend amorphously into the rails and ground. (bottom-right, strong)
- gemini-3.1-pro-preview: Amorphous tools. (middle-right, moderate)

**background_clutter**: score 6, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: In the stack of concrete pipes in the distance, some pipes are correctly hollow while others are completely solid flat circles, and they merge unnaturally into one another. (center, strong)
- gemini-3.1-pro-preview: The stack of cylindrical pipes or tubes in the background appears melted together, lacking defined individual shapes and proper shadows. (center, strong)

**track_geometry**: score 5, raised in 1/9 calls, at bottom-center, middle-left

- gemini-3.1-pro-preview: The rails from the left and right tracks curve towards the bottom center but fail to form a logical railway switch or junction, instead simply running parallel or blending nonsensically into the concrete surface. (bottom-center, strong)
- gemini-3.1-pro-preview: The transition from the solid concrete pad to the dirt and railroad ties along the left track features a jagged, wavy, and unnatural edge that does not resemble real-world construction. (middle-left, moderate)

**buildings**: score 4, raised in 2/9 calls, at top-center, middle-left

- gemini-3.1-pro-preview: The horizontal lines defining the slats on the closed roller doors are wavy and uneven, rather than straight and parallel. (top-center, moderate)
- gemini-3.1-pro-preview: The structure and machinery visible inside the open dark bay door on the left are indistinct, messy, and lack logical architectural or mechanical definition. (middle-left, moderate)

## x-empty-L.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-right

- gpt-6-sol: The interior of the right shed is indistinct, which makes its details difficult to verify, though darkness and window spots could explain it. (top-right, weak)
- gpt-6-sol: The right-hand shed interior is very dark and indistinct, so its contents are difficult to verify; this is a weak ambiguity rather than a clear artifact. (top-right, weak)
- gpt-6-sol: The right shed interior is very dark and indistinct, making its details difficult to verify. (top-right, weak)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The symmetric fork composition with no people is somewhat staged, but this is typical of a stock or film frame. (whole-image, weak)
- claude-opus-5.5: Empty yard with no people; the scene looks staged as a trolley-problem setup, though the layout is plausible for a real depot (whole-image, weak)

## x-empty-R.jpg: mean P(AI) 0.15 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.98

**track_geometry**: score 4, raised in 3/9 calls, at middle-right, bottom-left

- gpt-6-sol: The rails become hard to follow where they approach the dark doorway, leaving their precise continuation unclear. (middle-right, weak)
- gpt-6-sol: The rails become difficult to trace inside the dark opening, leaving a small amount of visual ambiguity. (middle-right, weak)
- gemini-3.1-pro-preview: The flangeway (the groove next to the rail) of the leftmost rail has an inconsistent width and appears to duplicate or become wavy in certain sections along the curve. (bottom-left, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at top-right, center

- gpt-6-sol: Shapes inside the right doorway are muddy and difficult to identify, which could superficially suggest generated detail, though the dark interior also explains it. (top-right, weak)
- gemini-3.1-pro-preview: The chain-link fence behind the gravel area lacks a regular grid pattern; the wires turn into random, disconnected squiggles and blurry smudges upon closer inspection. (center, strong)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The orange traffic cones and the wooden pallet appear to be melting into one another, lacking distinct boundaries and proper three-dimensional structure. (center, strong)

**buildings**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: Above the left doorway, the vertical lines of the corrugated metal siding blend inconsistently into the flat frame of the door opening. (top-left, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The base of the central vertical pole does not connect cleanly to the ground; it fades ambiguously into the surrounding gravel and pavement. (center, moderate)

## x-group-L.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.02

**track_geometry**: score 6, raised in 1/9 calls, at bottom-center, bottom-left

- gemini-3.1-pro-preview: The inner rails of the left and right tracks converge to a sharp V-point and abruptly end, with no track continuing toward the bottom of the frame. (bottom-center, strong)
- gemini-3.1-pro-preview: Because the inner rail ends at the center, the outer rail continues alone toward the bottom left corner, creating a track gauge that expands to an impossible width. (bottom-left, strong)

**tools_or_small_objects**: score 4, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The toolbags and equipment on the ground next to the group of three workers are formless, melting blobs of color without structural logic or clear straps. (middle-left, moderate)
- gemini-3.1-pro-preview: The orange traffic cones behind the chain-link fence are misshapen and asymmetric, with some blending into undefined red and orange shapes. (middle-left, moderate)

**people_anatomy**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The workers’ hands and the equipment beside them are difficult to distinguish, leaving some fine detail ambiguous. (center, weak)
- gpt-6-sol: The crouching workers' hands and tools are partly obscured and difficult to distinguish precisely. (center, weak)

**people_pose_or_placement**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The lower legs and feet of the worker on the right track melt indistinctly into the rail and the surrounding dark objects, lacking clear anatomy. (middle-right, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The roller mechanism and track above the right open bay door are rendered as a series of smudged, undefined blobs rather than distinct mechanical hardware. (top-right, moderate)

## x-group-R.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.02 / 0.95 / 0.02

**tools_or_small_objects**: score 6, raised in 4/9 calls, at middle-right, middle-left

- gpt-6-sol: The objects around the right-hand workers are hard to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small equipment are hard to distinguish, with some edges running together. (middle-right, weak)
- gpt-6-sol: The small objects around the right-hand workers' hands are indistinct and difficult to identify. (middle-right, weak)
- gemini-3.1-pro-preview: The objects and tools surrounding the kneeling worker are indistinct, formless blobs rather than recognizable equipment. (middle-left, strong)

**camera_or_windscreen**: score 3, raised in 1/9 calls, at whole-image

- gemini-3.1-pro-preview: The water droplets across the top of the image appear as a uniform, artificial overlay (like a filter), lacking realistic refraction or distortion of the background behind them. (whole-image, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The steel rails lack consistent, sharp three-dimensional edges. The flangeways (grooves) are messy, irregular, and sometimes seem to fade into the surrounding pavement. (bottom-center, strong)

**people_anatomy**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands and lower arms of the worker in orange on the right blend indistinctly into the tools or ground they are touching, lacking clear separation. (middle-right, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: The vertical lines of the corrugated metal siding on the building are wavy and inconsistently spaced. (top-left, moderate)

## x-two-L.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The object between the workers' hands is hard to distinguish and has an irregular outline. (center, weak)
- gpt-6-sol: The workers' hands and the track hardware between them are difficult to distinguish, leaving a slightly muddled shape. (center, weak)

**switch_mechanism**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The small object and rail hardware between the workers are indistinct, making their exact arrangement difficult to verify. (middle-left, weak)

## x-two-R.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.95

**tools_or_small_objects**: score 4, raised in 2/9 calls, at middle-right

- gpt-6-sol: The dark object beside the workers is difficult to resolve and has an indistinct outline. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of objects and debris to the right of the workers forms an indistinct, merged blob of grey and black, lacking the defined shapes of recognizable tools or excavated material. (middle-right, strong)

**people_anatomy**: score 3, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: The workers' hands and the exact point where they meet the rail are hard to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The kneeling worker on the left appears to be missing a defined right leg or boot; his body simply dissolves into a dark smudge near the ground. (center, moderate)

**camera_or_windscreen**: score 3, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: A large water droplet (bokeh ball) in the sky area has a distinct polygonal shape. This is an optical contradiction, as large bokeh requires a wide-open (round) aperture, while stopped-down (polygonal) apertures produce much smaller bokeh. (top-right, strong)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The reflective white 'X' on the back of the yellow-vested worker is incomplete, with the top-right section inexplicably replaced by a flat orange patch. (center, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: A wooden pallet in the background is balancing perfectly upright on its narrow edge on uneven dirt without any visible support or leaning against anything. (center, moderate)

## y-empty-L.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.04 / 0.06 / 0.04
- anthropic/claude-opus-5.5: 0.07 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**background_clutter**: score 2, raised in 2/9 calls, at top-right, center

- gpt-6-sol: Distant equipment and upright shapes along the far wall are hard to distinguish individually. (top-right, weak)
- gpt-6-sol: The small objects around the central post are indistinct and somewhat muddled, though distance could explain this. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Distant equipment and the far end of the depot are indistinct, making small details difficult to verify. (center, weak)

## y-empty-R.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: Distant equipment is indistinct, making small details difficult to verify; this is also consistent with a low-resolution photograph. (center, weak)
- gpt-6-sol: The distant rails and equipment are indistinct, making some small details difficult to verify. (center, weak)

**background_clutter**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Some distant equipment is indistinct enough that its shapes are hard to verify. (center, weak)

## y-group-L.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.06 / 0.05 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.95

**people_anatomy**: score 9, raised in 3/9 calls, at middle-left, bottom-right, bottom-left

- gpt-6-sol: The crouching workers’ hands and knees are hard to distinguish where they overlap the rails. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right track has a malformed lower body, with the boots and legs merging unnaturally and lacking clear anatomical structure. (bottom-right, strong)
- gemini-3.1-pro-preview: The group of three workers have indistinct hands, tools, and lower bodies that merge into amorphous blobs rather than defined shapes. (bottom-left, strong)
- gemini-3.1-pro-preview: The solitary worker crouching on the right track has undefined, blob-like hands and tools that lack clear detail. (bottom-right, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at center, bottom-left

- gemini-3.1-pro-preview: The rails spanning the maintenance pits deeper inside the building are crooked, uneven, and lack structural coherence. (center, moderate)
- gemini-3.1-pro-preview: The steel rails near the left group of workers lose their distinct 3D profile and appear to melt or blend into the flat concrete surface. (bottom-left, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at bottom-left, middle-left

- gemini-3.1-pro-preview: The worker in the orange vest has an undefined lower half that appears to melt directly into the concrete track area. (bottom-left, strong)
- gemini-3.1-pro-preview: The overlapping, compressed poses of the workers tightly clustered on the left track appear somewhat jumbled and blob-like, which could superficially mimic AI anatomy errors despite being physically possible. (middle-left, weak)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: Equipment and objects lining the walls inside the shed are indistinct, undefined blobs rather than recognizable mechanical tools. (middle-left, moderate)
- gemini-3.1-pro-preview: The equipment, toolboxes, and objects visible deep inside the maintenance shed appear as blurry, undefined shapes lacking structural logic. (center, moderate)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead power line running diagonally towards the top left corner terminates abruptly in mid-air. (top-left, strong)

## y-group-R.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.75

**buildings**: score 7, raised in 2/9 calls, at top-center, center

- gemini-3.1-pro-preview: The metal roof truss structure features diagonal supports that cross each other in a nonsensical pattern, failing to form logical structural triangles. (top-center, strong)
- gemini-3.1-pro-preview: The inspection pits inside the depot lack proper perspective and depth, appearing more like distorted, flat shapes painted on the floor. (center, moderate)
- gemini-3.1-pro-preview: Roof structure lines cross randomly. (top-center, moderate)

**people_anatomy**: score 6, raised in 3/9 calls, at middle-right, bottom-right, bottom-left

- gpt-6-sol: The kneeling workers’ hands and the objects beside the rails are difficult to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The metal track rail appears to physically merge into or pass directly through the knee/leg area of the worker on the far right of the group. (bottom-right, strong)
- gemini-3.1-pro-preview: Lower body blends into track. (bottom-left, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The groove of the curved track rail on the left side is noticeably wobbly and its width is inconsistent along the curve. (bottom-left, moderate)
- gemini-3.1-pro-preview: Rail details lose shape near workers. (bottom-right, moderate)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: An overhead wire is depicted hanging down and terminating abruptly in mid-air, without connecting to any supporting structure. (top-right, strong)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and small items at the rail junction are indistinct, making their exact interaction hard to verify. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small items beside the rail are difficult to distinguish clearly. (bottom-right, weak)

## y-two-L.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.98

**track_geometry**: score 6, raised in 3/9 calls, at center, bottom-left

- gpt-6-sol: The distant rails and dark floor channels are hard to distinguish individually, which could be mistaken for generated geometry, though distance and shadow also explain it. (center, weak)
- gemini-3.1-pro-preview: The rails emerging from the middle bay of the shed abruptly fade and disappear into smooth, unbroken concrete, failing to connect to the rest of the rail network. (center, strong)
- gemini-3.1-pro-preview: The steel rail being worked on loses its defined shape and groove, seemingly melting into the ground directly underneath the workers. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at middle-left, whole-image

- gpt-6-sol: The workers' hands and the small objects between them are indistinct, making those details difficult to verify. (middle-left, weak)
- gemini-3.1-pro-preview: Upon closer inspection, the image lacks crisp photographic detail, displaying a soft, painterly, and blurred effect across many surfaces, typical of AI generation artifacts. (whole-image, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: Despite being a complex branching layout, there are no switch points or intersecting rails visible in the foreground to allow a vehicle to navigate into the central bay. (bottom-center, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The bodies of the two workers are poorly defined; their arms and hands blend into indistinguishable dark blobs instead of holding clear tools, and the yellow worker's leg appears unnaturally thin and distorted. (bottom-left, strong)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: A white rectangular sign hanging from the roof support structure contains illegible, distorted characters typical of AI pseudo-text. (center, moderate)

## y-two-R.jpg: mean P(AI) 0.07 (passes)

- openai/gpt-6-sol: 0.05 / 0.05 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and small objects beside the rail are indistinct, making their exact interaction hard to verify. (middle-right, weak)
- gpt-6-sol: The workers' hands and the objects beside the rail are hard to distinguish clearly. (middle-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers' hands and equipment meet in a small, indistinct patch where their exact positions are hard to resolve. (middle-right, weak)
