# Realism check: final-r2

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 585 | 44/46 |
| people_anatomy | 351 | 39/46 |
| tools_or_small_objects | 304 | 44/46 |
| buildings | 167 | 32/46 |
| texture_noise_or_sharpness | 152 | 43/46 |
| background_clutter | 100 | 38/46 |
| overhead_wires_or_poles | 93 | 26/46 |
| people_pose_or_placement | 89 | 25/46 |
| people_clothing_or_gear | 64 | 24/46 |
| composition_or_staging | 60 | 28/46 |
| switch_mechanism | 23 | 8/46 |
| text_signage_or_markings | 15 | 9/46 |
| lighting_or_shadows | 14 | 5/46 |
| camera_or_windscreen | 11 | 5/46 |
| reflections_or_wet_surfaces | 6 | 4/46 |
| vehicles | 2 | 1/46 |

## u-group-L-1.jpg: mean P(AI) 0.40 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.20 / 0.15
- openai/gpt-6-sol: 0.04 / 0.04 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 13, raised in 4/9 calls, at center, bottom-center, middle-right, bottom-left

- claude-opus-5.5: Two tram track branches diverge but there is no switch/frog connecting them; the left and right tracks simply run separately with no physical junction visible, odd for a branching layout (center, moderate)
- gemini-3.1-pro-preview: The rails where the tracks diverge do not form a physically possible mechanical switch; the inner rails seem to disappear into a smooth, muddy patch instead of forming points or a frog. (bottom-center, strong)
- gemini-3.1-pro-preview: The left rail of the right-hand track appears to terminate or fade out directly underneath the kneeling worker instead of continuing smoothly. (middle-right, moderate)
- gemini-3.1-pro-preview: The rails do not form a consistent track with a constant gauge; there are three or more rails clustered together that seem to point in different directions towards the background arches, which makes no physical sense for a railway. (bottom-left, strong)

**people_anatomy**: score 11, raised in 3/9 calls, at bottom-left, middle-left, center, bottom-right

- gemini-3.1-pro-preview: The left leg of the kneeling worker in the yellow high-vis jacket ends in a shapeless dark blob instead of a distinct boot or shoe. (bottom-left, strong)
- gemini-3.1-pro-preview: The standing worker on the far left has a left leg that completely loses form and melts into a dark blob on the ground. (middle-left, strong)
- gemini-3.1-pro-preview: The hands of the kneeling worker in the orange jacket (on the left track) are undefined and blend seamlessly into the metal rail. (center, strong)
- gemini-3.1-pro-preview: The lone kneeling worker's lower body and legs are undefined, merging indistinctly into a black bag or shadow on the ground. (bottom-right, moderate)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at bottom-center

- gpt-6-sol: The workers’ hands and small equipment where they meet the left rail are difficult to distinguish, leaving some detail ambiguous. (bottom-center, weak)
- gemini-3.1-pro-preview: The objects lying on the ground next to the kneeling workers appear as indistinct, melting dark lumps rather than identifiable tools. (bottom-center, strong)
- gemini-3.1-pro-preview: The objects that appear to be tools or bags resting on the ground next to the kneeling workers are formless, undefined blobs. (bottom-center, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at center, bottom-center

- gpt-6-sol: The workers' hands and the small items beside the rail are soft enough that their exact shapes are hard to verify. (center, weak)
- gpt-6-sol: The workers' hands and the small objects near the rail are indistinct. (bottom-center, weak)
- gemini-3.1-pro-preview: The distinct cobblestone pattern between the rails abruptly changes to a smooth, undefined blurry texture exactly around the complex rail junction and where the workers are positioned. (center, moderate)
- gemini-3.1-pro-preview: The cobblestone pattern between the tracks is wavy, inconsistent, and blends unnaturally into the smoother ground sections. (bottom-center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at bottom-right, middle-right

- gemini-3.1-pro-preview: The arm of the worker on the right track appears to blend seamlessly into the rail and ground, lacking distinct separation or clear grasp of a tool. (bottom-right, moderate)
- gemini-3.1-pro-preview: The worker on the right track appears to be kneeling with his left knee directly balanced on the narrow, raised rail, which is an unnatural and impractical pose. (middle-right, moderate)

## u-group-L-2.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.08 / 0.04 / 0.08
- anthropic/claude-opus-5.5: 0.68 / 0.75 / 0.78
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**people_anatomy**: score 18, raised in 5/9 calls, at center, middle-right, bottom-right, bottom-left

- claude-opus-5.5: The hands of the kneeling workers are smeared and merge into the bags or tools; fingers cannot be resolved. (center, moderate)
- claude-opus-5.5: The hands of the three workers on the left merge into the objects near the rail, and their limbs are hard to resolve. (center, weak)
- gemini-3.1-pro-preview: The left hand of the lone worker on the right track is an indistinct, undefined blob resting on the rail. (middle-right, strong)
- gemini-3.1-pro-preview: The legs of the rightmost worker in the group of three are confusingly positioned, with a disproportionately large knee pad on a leg that seems disconnected from the body. (center, strong)

**tools_or_small_objects**: score 16, raised in 9/9 calls, at center, bottom-center, bottom-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers’ hands and the small equipment around the left-hand rail are difficult to distinguish clearly. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the small equipment at the switch are hard to distinguish, leaving some shapes ambiguous. (bottom-center, weak)
- claude-opus-5.5: Workers kneel around the rail holding indistinct, blob-like bags and tools; no identifiable task, fastener, or tool is clearly being used on the track. (center, moderate)

**track_geometry**: score 11, raised in 5/9 calls, at bottom-left, center, top-right, bottom-center

- claude-opus-5.5: The left rail of the left track runs beneath the first worker's knees and boot with an ambiguous junction; the rail edges look soft and slightly inconsistent in width. (bottom-left, weak)
- claude-opus-5.5: The left track's right rail and the right track's left rail run toward each other at the bottom without any frog or switch, and there is no coherent junction connecting the two branches. (center, moderate)
- claude-opus-5.5: Left track's rails curve oddly; the left track appears to merge and the inner rail of left track and right track geometry don't form a coherent junction—the two tracks diverge from nowhere with no switch visible in foreground (center, moderate)
- claude-opus-5.5: Right track leads into arch but rails become narrow/ambiguous near the building (top-right, weak)

**texture_noise_or_sharpness**: score 8, raised in 5/9 calls, at whole-image, center

- gpt-6-sol: Fine details are somewhat soft, making small objects and faces hard to verify. (whole-image, weak)
- claude-opus-5.5: The cobblestones and asphalt have a uniform, smoothed, painterly texture with a cinematic haze typical of AI video frames; there is no real sensor noise. (whole-image, moderate)
- claude-opus-5.5: Smooth cinematic grading, cobblestones somewhat repetitive and soft, typical of video-generation output (whole-image, moderate)
- gemini-3.1-pro-preview: The transition between the detailed cobblestones and the flat, smooth ground in the central junction area is blurry, abrupt, and physically illogical. (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 4/9 calls, at top-center, middle-left

- claude-opus-5.5: The poles stand in a tram depot, yet overhead wires are barely visible or absent. (top-center, weak)
- claude-opus-5.5: The poles stand in the middle of the yard with few or no overhead wires attached, and their placement is somewhat arbitrary. (top-center, weak)
- gemini-3.1-pro-preview: Several tall, simple grey poles are placed seemingly at random in the background without any visible overhead wires attached to them. (top-center, moderate)
- gemini-3.1-pro-preview: The base of the tall vertical pole nearest to the left group of workers vanishes into the ground without a distinct structural foundation or realistic shadow. (middle-left, moderate)

## u-group-L-3.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.85 / 0.98

**tools_or_small_objects**: score 10, raised in 6/9 calls, at bottom-left, center, middle-left

- gpt-6-sol: The workers’ hands and equipment at the rail are difficult to distinguish, leaving some small details ambiguous. (bottom-left, weak)
- gpt-6-sol: The workers’ hands and objects at the left-hand rail are indistinct, making their exact interaction hard to verify. (center, weak)
- gpt-6-sol: The workers’ hands and equipment at the rail joint are difficult to distinguish, though they occupy a small, dark area. (bottom-left, weak)
- gemini-3.1-pro-preview: The tools and bags scattered around the group of three workers lack distinct edges or structural details, appearing as smooth, amorphous blobs. (center, moderate)

**track_geometry**: score 9, raised in 3/9 calls, at middle-left, middle-right, center

- gemini-3.1-pro-preview: The inner rail of the left track is discontinuous and appears to vanish or merge seamlessly into the kneeling orange-clad worker and their gear. (middle-left, strong)
- gemini-3.1-pro-preview: The two rails of the track on the right do not remain parallel as they curve towards the tunnel; the inner rail curves significantly more sharply than the outer one. (middle-right, strong)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks do not cross or form a functional junction (frog); they instead fade nonsensically into a flat patch of ground texture. (center, strong)

**people_anatomy**: score 6, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The hands and feet of the solitary worker on the right track are indistinct and melt into the surrounding ground and bag. (middle-right, strong)
- gemini-3.1-pro-preview: The legs of the workers in the group of three are confused and merged, with an extra, disconnected black boot appearing next to the orange-clad worker's left knee. (middle-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center, top-center

- gemini-3.1-pro-preview: The pile of stacked materials in the background appears as a single solid block with horizontal striations painted on, rather than distinct individual objects. (center, moderate)
- gemini-3.1-pro-preview: The stack of rails or pipes in the background has inconsistent, wobbly ends that merge into one another rather than appearing as distinct physical objects. (top-center, moderate)

**texture_noise_or_sharpness**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The textured cobblestone pattern abruptly loses its structure and 'melts' into a flat, featureless grey surface between the tracks. (bottom-center, strong)

## u-group-L-4.jpg: mean P(AI) 0.46 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.35 / 0.72 / 0.70
- google/gemini-3.1-pro-preview: 0.30 / 1.00 / 0.99

**track_geometry**: score 14, raised in 5/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Left track's two rails converge toward the arched shed but the gauge between them is narrow and consistent; rails on left branch and right branch don't connect as a believable junction; left track rails seem to merge/terminate oddly near the timber pile (center, moderate)
- claude-opus-5.5: Left track: worker at center sits between rails, but rails converge/curve oddly; the right rail of the left track and gauge appear coherent but the track ends abruptly toward the back without clear connection to arches (center, weak)
- claude-opus-5.5: Left track's rails converge oddly; the left rail of the left track and right rail curve inconsistently, and the two tracks do not form a coherent switch/junction—they split without any frog or switch blades (center, moderate)
- gemini-3.1-pro-preview: The right rail of the left-hand track becomes abnormally thin and fades away abruptly just beyond the kneeling worker's hands. (bottom-center, strong)

**people_anatomy**: score 12, raised in 4/9 calls, at center, middle-right, bottom-left

- claude-opus-5.5: Worker in yellow helmet has a compressed, oddly folded body; hands and tools near rail blend into indistinct shapes (center, moderate)
- claude-opus-5.5: Kneeling worker on right track has merged, indistinct limbs and bag (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the middle worker in the group of three are completely undefined, melting into an indistinct blob with the rail and tools. (bottom-left, strong)
- gemini-3.1-pro-preview: The left leg and foot of the worker kneeling on the right edge of the left track blend unnaturally into the dark ground without any distinct footwear. (center, strong)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at bottom-center, center, middle-left, bottom-left

- gpt-6-sol: The workers' hands and the small items beside the left rail are difficult to distinguish precisely. (bottom-center, weak)
- claude-opus-5.5: Tools held by the kneeling workers are smeared and lack defined shape; no clear wrenches or bars (center, moderate)
- claude-opus-5.5: Tools in workers' hands are vague, smeared shapes rather than identifiable wrenches or gauges (middle-left, moderate)
- claude-opus-5.5: Tools in workers' hands are smeared, undefined shapes rather than recognizable wrenches or bars (center, moderate)

**texture_noise_or_sharpness**: score 7, raised in 5/9 calls, at middle-right, bottom-center, whole-image, bottom-right

- gpt-6-sol: The distant worker’s hands and the object beside the rail are indistinct, making their exact shapes hard to verify. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small objects near the rail are difficult to resolve. (bottom-center, weak)
- gpt-6-sol: Fine details are somewhat soft, limiting scrutiny of faces and rail fittings. (whole-image, weak)
- claude-opus-5.5: Cobblestone texture smooth and repetitive with painterly softness typical of generative video frames (whole-image, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-left, center, middle-right

- claude-opus-5.5: Three workers clustered on left track in staged poses, hands near rail with tools that are indistinct blobs (middle-left, moderate)
- claude-opus-5.5: Three workers clustered on the left track, one kneeling between rails and one straddling the rail; the middle worker's body and helmet blend oddly with hands, tools indistinct (center, moderate)
- gemini-3.1-pro-preview: The lower body and legs of the lone worker on the right track merge indistinctly into the dark shape (bag or shadows) next to him. (middle-right, moderate)

## u-group-L-5.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.08 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.80 / 0.72 / 0.80
- google/gemini-3.1-pro-preview: 0.95 / 0.98 / 0.99

**track_geometry**: score 18, raised in 6/9 calls, at center, middle-right, bottom-right, bottom-left, bottom-center

- claude-opus-5.5: Left track's right rail and right track's left rail diverge from a common point without a proper frog or switch; the tracks appear to split in an implausible Y with no turnout mechanism visible (center, moderate)
- claude-opus-5.5: Left track rails curve oddly; the right rail of the left track merges and bends near the kneeling worker, and the paired rails don't maintain consistent gauge through the curve into the depot (center, moderate)
- claude-opus-5.5: Right track rails splay outward toward the arch then converge oddly; the cobbled track bed has inconsistent patterns between rails (middle-right, weak)
- claude-opus-5.5: Left track's right rail appears to merge/bend oddly near the kneeling worker; the two branches diverge without a clear switch/frog connecting them, and the rails' geometry looks inconsistent (center, moderate)

**texture_noise_or_sharpness**: score 13, raised in 7/9 calls, at bottom-center, bottom-left, whole-image, middle-right

- gpt-6-sol: The workers’ hands and the small details where they meet the track are indistinct, making those details hard to verify. (bottom-center, weak)
- gpt-6-sol: Hands and small details where the workers meet the rails are indistinct, making them difficult to verify. (bottom-left, weak)
- claude-opus-5.5: Smooth, slightly painterly cobblestone rendering and uniform haze typical of generative video frames (whole-image, moderate)
- claude-opus-5.5: Overall soft, slightly smeared texture on cobbles and figures with hazy glow, typical of generated video frames (whole-image, moderate)

**tools_or_small_objects**: score 11, raised in 5/9 calls, at bottom-left, center, middle-left

- gpt-6-sol: The workers’ hands and the small items near the rail are difficult to distinguish precisely. (bottom-left, weak)
- claude-opus-5.5: Tools and bags held by workers are indistinct blobs; no clear identifiable equipment (center, moderate)
- claude-opus-5.5: Objects near the workers' hands (bag/tool by front worker) are amorphous blobs without clear tool shapes (middle-left, moderate)
- gemini-3.1-pro-preview: The hands of the workers on the left track interacting with the rail are indistinct, merging together without clear fingers or recognizable tools. (bottom-left, strong)

**people_anatomy**: score 11, raised in 3/9 calls, at bottom-left, bottom-center

- gemini-3.1-pro-preview: The boots of the worker in the orange vest on the left track are malformed, appearing as soft blobs that blend into the rail and ground rather than distinct footwear. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the middle worker on the left track (in the orange vest) lack definition and appear to merge into an indistinct blob on the rail. (bottom-left, moderate)
- gemini-3.1-pro-preview: The worker with the yellow helmet in the left group appears to have no arms; his jacket ends abruptly without sleeves or hands visible. (bottom-center, strong)
- gemini-3.1-pro-preview: The hands of the worker in the orange vest in the left group are rendered as indistinct, formless blobs lacking fingers. (bottom-left, strong)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at center, middle-left

- claude-opus-5.5: Worker in blue/yellow kneels directly straddling a rail with legs merging awkwardly into the rail area; the left group's limbs overlap ambiguously (center, moderate)
- claude-opus-5.5: Three workers clustered tightly on the left track, kneeling and oddly overlapping, with limbs and boots blending; hands holding indistinct tools (middle-left, moderate)
- claude-opus-5.5: Three workers clustered on left track, one alone on right track, composed like a staged dilemma scene; poses kneeling with hands on rails but no clear tools being used (middle-left, weak)

## u-group-L-6.jpg: mean P(AI) 0.51 (fails)

- anthropic/claude-opus-5.5: 0.68 / 0.62 / 0.20
- openai/gpt-6-sol: 0.03 / 0.07 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 18, raised in 3/9 calls, at middle-right, bottom-left, center

- gemini-3.1-pro-preview: The worker on the right track has a highly distorted left leg that stretches out unnaturally and melts into the cobblestones. (middle-right, strong)
- gemini-3.1-pro-preview: The worker in the bright orange vest has a left arm that dissolves into a shapeless brown blob on the ground, lacking hand or tool details. (bottom-left, strong)
- gemini-3.1-pro-preview: The kneeling worker in the bright yellow jacket on the left track has no defined hands or lower arms; they merge completely with their legs and the track. (center, strong)
- gemini-3.1-pro-preview: The worker on the right track has a highly distorted lower body that melts into the ground and an unidentifiable shape behind them, lacking distinct legs or feet. (middle-right, strong)

**track_geometry**: score 14, raised in 6/9 calls, at center, bottom-center, bottom-left, middle-left

- claude-opus-5.5: Left track has an odd crossbar/rail segment running between the rails where workers kneel, connecting the two rails horizontally in a way that doesn't match normal trackwork; the left track seems to curve and merge oddly. (center, moderate)
- claude-opus-5.5: The right rail of the left track and its relationship to the asphalt and cobbles is inconsistent; the rail runs through asphalt without a groove setting near the workers. (bottom-center, weak)
- claude-opus-5.5: Left track: the worker in orange appears to have a rail running oddly between him and the yellow-vest worker; there seems to be a crossbar/rail segment connecting the two rails near their knees that doesn't follow consistent track geometry, and the left track's rails appear to merge into a single line behind the workers. (center, moderate)
- claude-opus-5.5: The right rail of the left track and the paved area show inconsistent flangeway/groove continuity; the rails curve and vanish into the cobbles without a clear switch mechanism. (bottom-center, weak)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at bottom-center, middle-right, middle-left, bottom-left

- gpt-6-sol: The metal piece beside the left-track workers is difficult to distinguish from the rail it crosses. (bottom-center, weak)
- gpt-6-sol: The right-hand worker's hands, tool, and nearby dark objects are difficult to distinguish, leaving their exact arrangement ambiguous. (middle-right, weak)
- gpt-6-sol: The right worker's hands and the small object beside the rail are difficult to make out precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the workers on the left and any tools they might be using are indistinct, merging into blurry blobs on the rails. (middle-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center, top-center

- gemini-3.1-pro-preview: The stack of materials (likely intended to be rails) in the background is a blurry, fused mass of lines with no clear three-dimensional structure. (center, moderate)
- gemini-3.1-pro-preview: The stack of materials (like rails or pipes) in the background has soft, wavy edges instead of being rigid and straight. (top-center, moderate)

**people_clothing_or_gear**: score 3, raised in 2/9 calls, at center, middle-left

- claude-opus-5.5: Workers' hi-vis vests, hard hats with ear defenders and kneeling poses are plausible, but faces/hands are small and somewhat smeared. (center, weak)
- gemini-3.1-pro-preview: The reflective silver strips on the workers' high-visibility jackets follow illogical curves and shapes that do not conform to natural fabric folds or standard safety gear designs. (middle-left, moderate)

## u-group-L-7.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.04 / 0.08 / 0.08
- anthropic/claude-opus-5.5: 0.15 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.95

**tools_or_small_objects**: score 9, raised in 5/9 calls, at bottom-center, middle-right

- gpt-6-sol: The equipment and hands beside the left-hand rail are hard to distinguish precisely. (bottom-center, weak)
- gpt-6-sol: The central workers’ hands and the dark equipment at the rail are difficult to distinguish from one another. (bottom-center, weak)
- gemini-3.1-pro-preview: The equipment or tools on the ground immediately to the left of the lone worker are amorphous, undefined blobs lacking structural logic. (middle-right, moderate)
- gemini-3.1-pro-preview: The tools or equipment resting on the ground next to the lone worker form an indistinct, unidentifiable blob rather than distinct objects. (middle-right, moderate)

**people_anatomy**: score 8, raised in 2/9 calls, at middle-right, bottom-left

- gemini-3.1-pro-preview: The lower half of the solitary worker on the right track is heavily distorted, merging into a jumble of indistinct shapes and an unattached boot rather than clear legs. (middle-right, strong)
- gemini-3.1-pro-preview: The leftmost worker in the group of three appears to have their left boot fused seamlessly into the rail and surrounding cobblestone texture. (bottom-left, moderate)
- gemini-3.1-pro-preview: The three workers are physically melded together; the worker in the orange jacket appears to have a misplaced boot protruding from his thigh or knee area, and their hands are featureless blobs. (bottom-left, strong)

**track_geometry**: score 8, raised in 2/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: The left (inner) rail of the right-hand track disappears entirely into the cobblestone texture just behind the kneeling worker. (bottom-right, strong)
- gemini-3.1-pro-preview: The rails of the left track are discontinuous under and around the kneeling workers, with sections seemingly missing or blending into their clothing. (bottom-left, strong)
- gemini-3.1-pro-preview: The outermost rail of the left track loses its three-dimensional profile towards the bottom edge, appearing to flatten out and merge with the surrounding ground. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 5, raised in 2/9 calls, at center, top-right, bottom-right

- gpt-6-sol: The workers' hands and equipment where they overlap are somewhat indistinct, making small details hard to verify. (center, weak)
- gpt-6-sol: Details inside the distant archway look soft and smeared, though distance and low light could explain this. (top-right, weak)
- gemini-3.1-pro-preview: The pattern of the cobblestones degrades into unnatural, continuous wavy lines rather than remaining as distinct, individual blocks. (bottom-right, strong)

**background_clutter**: score 3, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of steel rails in the background lacks definition at the ends, with the individual rails smudging into a continuous texture. (center, weak)
- gemini-3.1-pro-preview: The pile of stacked rails or pipes in the background has ends that melt into a dark, unstructured smudge rather than showing individual cross-sections. (center, moderate)

## u-group-L-8.jpg: mean P(AI) 0.23 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.15 / 0.12 / 0.62
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.99

**tools_or_small_objects**: score 5, raised in 4/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The workers' hands and small items at the rail are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The right worker's hands and the small object at the rail are difficult to distinguish. (middle-right, weak)
- claude-opus-5.5: Bags and tools on ground are blobby and undefined (middle-left, weak)
- gemini-3.1-pro-preview: The gear or bag sitting on the ground to the left of the leftmost worker is a shapeless, muddy brown blob. (middle-left, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-center, center

- claude-opus-5.5: Two tram track branches diverge from a common origin but the left pair and right pair are each continuous rails embedded in cobbles with no switch; the left track's rails converge/curve oddly toward the archway and the right branch has no visible frog or junction connecting them (bottom-center, moderate)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks do not connect or form a logical railway switch (points or frog); instead, they simply disappear into the cobblestones. (center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center, middle-left

- claude-opus-5.5: Three workers huddled tightly on left track all kneeling in nearly identical poses, hands converging on one point between rails; poses look staged and limbs partially merge (center, moderate)
- gemini-3.1-pro-preview: The rightmost worker in the left group (yellow jacket) lacks distinct legs or lower body, seeming to blend directly into the ground and rail. (middle-left, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-right, middle-left

- claude-opus-5.5: Lone worker on right kneels with body leaning over rail; legs and boots blend into dark mass, hand near rail indistinct (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket on the left are a jumbled, indistinct blob merging with the rail and tools. (middle-left, strong)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at middle-right, whole-image

- gpt-6-sol: The kneeling worker's hands and boots look somewhat soft-edged, though they are small in the frame. (middle-right, weak)
- gpt-6-sol: The cobbles, brickwork, and workers are somewhat soft and hazy, making fine details difficult to verify. (whole-image, weak)
- claude-opus-5.5: Smooth, slightly hazy cinematic look with soft cobble textures that repeat uniformly (whole-image, weak)

## u-two-L-1.jpg: mean P(AI) 0.17 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.12
- openai/gpt-6-sol: 0.03 / 0.02 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.05

**texture_noise_or_sharpness**: score 6, raised in 5/9 calls, at whole-image, center, bottom-center

- gpt-6-sol: The distant masonry and the workers' hands are somewhat indistinct, making fine details hard to verify. (whole-image, weak)
- gpt-6-sol: The workers’ hands and the small object at the rail junction are difficult to distinguish. (center, weak)
- gpt-6-sol: The workers’ hands and the small parts at the rail joint are hard to distinguish, leaving their exact interaction unclear. (center, weak)
- gemini-3.1-pro-preview: The cobblestone pattern in the space between the diverging tracks degrades into a chaotic, smeared texture rather than maintaining the regular, constructed appearance of laid stone. (bottom-center, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The layout of the rails in the foreground is physically nonsensical; the rails do not form a coherent junction or switch, and the right rail of the left track appears to abruptly end or vanish under the workers. (bottom-center, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The left hand of the worker on the right is rendered as an indistinct, fleshy lump that seems to melt into the metal rail, completely lacking formed fingers or a realistic glove structure. (center, strong)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The brown object resting on the ground to the left of the left-most worker is an amorphous, undefined blob that lacks the specific details or structure of a real tool bag or piece of equipment. (middle-left, moderate)

**background_clutter**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: Some distant windows and yard objects are indistinct in the haze. (top-center, weak)

## u-two-L-2.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.12
- openai/gpt-6-sol: 0.04 / 0.08 / 0.04
- google/gemini-3.1-pro-preview: 0.98 / 0.95 / 0.99

**track_geometry**: score 9, raised in 3/9 calls, at bottom-center, center, bottom-right

- gemini-3.1-pro-preview: Where the tracks split into a Y-junction, there is no functional switch mechanism (points) or crossing (frog); the inner rails impossibly melt into each other and the paving. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction where the left and right lines meet lacks a proper mechanical switch or crossing (frog); the rails appear to smudge and melt into each other nonsensically. (center, strong)
- gemini-3.1-pro-preview: The inner (left) rail of the right-hand track simply ends and fades into the flat pavement instead of continuing downwards to the edge of the frame. (bottom-right, strong)

**people_anatomy**: score 8, raised in 2/9 calls, at bottom-left, bottom-center

- gemini-3.1-pro-preview: The hands of the worker in orange are rendered as indistinct, formless smudges rather than distinct gloves or fingers interacting with the rail. (bottom-left, moderate)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket are indistinguishable, appearing as vaguely colored, fused blobs rather than holding a tool with distinct fingers. (bottom-left, strong)
- gemini-3.1-pro-preview: The left hand of the worker in the yellow jacket resting against his knee looks like a shapeless stump or melted glove. (bottom-center, strong)

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at bottom-center, center

- gpt-6-sol: The workers’ hands and the small object beside the rail are somewhat indistinct, making their exact interaction hard to verify. (bottom-center, weak)
- gpt-6-sol: Fine details around the workers’ hands and the rails are soft and difficult to distinguish. (center, weak)
- gpt-6-sol: The workers’ hands and the small details at the rail are somewhat indistinct, making them difficult to check for distortions. (center, weak)
- gemini-3.1-pro-preview: The defined cobblestones abruptly and unnaturally melt into a completely smooth, featureless asphalt surface between the tracks. (bottom-center, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The kneeling worker in the yellow jacket has poorly defined legs that seem to blend into the ground, and his right arm and hand lack clear anatomical structure. (bottom-left, strong)

**composition_or_staging**: score 2, raised in 2/9 calls, at center, whole-image

- claude-opus-5.5: Staged stock-footage feel with two workers posed at track, but this is typical of real stock video (center, weak)
- claude-opus-5.5: Somewhat staged stock-footage look with two workers posed at the rail, but nothing physically inconsistent (whole-image, weak)

## u-two-L-3.jpg: mean P(AI) 0.29 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.25 / 0.12
- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.98

**track_geometry**: score 8, raised in 2/9 calls, at center, bottom-center, middle-left

- claude-opus-5.5: Two tram tracks diverge from the bottom of the frame, but the right track seems to begin out of nowhere in the middle of the asphalt with no clear switch or junction connecting it to the left track; the layout is implausible (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the left and right tracks meet at a 'V' point, but there is no rail leading into this point from the bottom of the frame, making the switch non-functional and physically impossible. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the left track abruptly ends and fades into the smooth pavement in the middle of the yard, rather than continuing toward the tunnel entrance. (middle-left, strong)

**tools_or_small_objects**: score 6, raised in 5/9 calls, at bottom-center

- gpt-6-sol: The workers’ hands and the object between them are dark and difficult to distinguish precisely. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish, which could conceal generated detail but is also consistent with the image’s resolution. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and nearby equipment are hard to distinguish, leaving some small-object details ambiguous. (bottom-center, weak)
- gemini-3.1-pro-preview: The tools and materials on the ground between and around the workers are unidentifiable, amorphous blobs lacking distinct mechanical shapes. (bottom-center, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The worker in the orange jacket appears to be missing a right lower leg or boot; the anatomy below the knee blends indistinctly into the ground. (bottom-center, moderate)
- gemini-3.1-pro-preview: The worker on the right in the orange jacket appears to be missing his lower body or legs entirely; his torso seems to melt directly into the ground. (bottom-center, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of rusty metal rails or pipes in the background is rendered as a merged, blurry texture where individual items do not align or maintain consistent shapes. (center, moderate)
- gemini-3.1-pro-preview: The stack of what appears to be rusty rails or lumber in the background is a blurry, indistinct mass lacking the defined edges and shapes of individual objects. (center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The junction where the tracks split left and right lacks any functional switch mechanism, such as switch blades or a frog where the inner rails would cross; the rails simply run parallel and fade out illogically. (bottom-center, strong)

## u-two-L-4.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.06 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.95

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at center, bottom-left

- gpt-6-sol: The workers' hands and the tool are indistinct, making their exact interaction hard to verify. (center, weak)
- gemini-3.1-pro-preview: The cobblestone texture between the rails on the left track is highly irregular and awkwardly blends into the smooth tarmac and the rails themselves in an unnatural way. (bottom-left, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The railway track where the workers are kneeling loses its parallel structure, with rails appearing to merge, split into extra faint lines, and fade into the ground texture rather than maintaining a consistent gauge. (center, strong)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: Thin overhead wires extending from the vertical poles simply end abruptly in mid-air against the sky without connecting to other poles or structures. (top-left, strong)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center, bottom-center

- gpt-6-sol: The workers' hands and the object between the rails are indistinct, so their exact interaction is difficult to verify. (center, weak)
- gpt-6-sol: The workers’ hands and the object between the rails are difficult to distinguish precisely. (bottom-center, weak)

**people_anatomy**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The hands of both workers, particularly the right hand of the worker in the yellow jacket, are rendered as indistinct blobs without clearly defined fingers or a realistic grip on the tools. (center, moderate)

## u-two-L-5.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.15 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.02

**track_geometry**: score 7, raised in 3/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Left track curves from left arch toward foreground while right track curves to right arch; tracks don't merge cleanly and the left track rails look somewhat inconsistent in gauge near the workers, but overall plausible depot layout (center, weak)
- gemini-3.1-pro-preview: The rails at the switch junction fail to connect logically; one rail terminates abruptly under the worker in yellow, and there is no visible crossing mechanism (frog) where the inner rails should intersect. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails of the left track, particularly the left rail, lack a clear 3D profile and flange groove required for embedded track, instead appearing flat or merged with the cobblestones. (bottom-left, strong)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at bottom-left, center, bottom-right

- gpt-6-sol: The workers’ hands and the small area where they meet the rails are too soft to verify in detail. (bottom-left, weak)
- gemini-3.1-pro-preview: The pile of materials in the central background (presumably rails or lumber) appears as a solid, smudged block of generic texture rather than a pile of distinct, individual objects. (center, moderate)
- gemini-3.1-pro-preview: The cobblestone pattern shows signs of 'melting', where individual stones lose their distinct edges and blend into adjacent smoother surfaces. (bottom-right, moderate)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at bottom-left, center

- gemini-3.1-pro-preview: The object resting on the ground to the left of the worker in orange is an indistinct, coiled metallic blob rather than a recognizable tool or bag. (bottom-left, strong)
- gemini-3.1-pro-preview: The brown tool bag resting next to the worker in yellow is an amorphous shape without discernible straps, pockets, or structure. (center, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at bottom-left, middle-left

- gpt-6-sol: The workers’ hands and their activity at the rail are too soft to make out clearly. (bottom-left, weak)
- gemini-3.1-pro-preview: The hands of the worker in the yellow jacket are indistinct and blob-like, lacking defined fingers and merging into the tool or ground. (middle-left, strong)

**buildings**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The brickwork around the curve of the rightmost archway degrades into a chaotic, blended texture where individual bricks are no longer clearly defined or following the architectural curve. (middle-right, moderate)

## u-two-L-6.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.06
- anthropic/claude-opus-5.5: 0.15 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.05

**tools_or_small_objects**: score 9, raised in 5/9 calls, at middle-left, bottom-left

- gpt-6-sol: The object around the left worker's hands is indistinct and difficult to identify. (middle-left, weak)
- gpt-6-sol: The object near the workers' hands is hard to make out and has a somewhat indistinct outline. (middle-left, weak)
- gpt-6-sol: The object between the workers' hands and the rail is difficult to make out and looks somewhat muddled. (middle-left, weak)
- gemini-3.1-pro-preview: The tools and hands of the kneeling workers are indistinct, smudged blobs that merge seamlessly into the ground and rails without clear boundaries. (bottom-left, strong)

**texture_noise_or_sharpness**: score 6, raised in 2/9 calls, at bottom-left, bottom-center

- gemini-3.1-pro-preview: The cobblestones in the immediate foreground corner are heavily smeared and lose all structural definition, looking like a painted texture rather than individual stones. (bottom-left, strong)
- gemini-3.1-pro-preview: The cobblestones between and around the tracks frequently melt into one another, forming continuous striated lines rather than individual stones. (bottom-center, strong)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: The cobblestones between the rails of the right-hand track are highly irregular, smeared, and do not align in a logical pattern typical of paved track beds. (bottom-right, moderate)
- gemini-3.1-pro-preview: The outer rail of the right-hand track fades completely into the cobblestone pattern, with its groove simply vanishing. (bottom-right, strong)

**buildings**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The brickwork on the central building's arches is distorted and 'melted', with lines of bricks failing to follow the architectural curve properly. (top-center, strong)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The knee and lower leg of the worker wearing the yellow hat appear to sink into and merge with the solid metal rail. (bottom-left, strong)

## u-two-L-7.jpg: mean P(AI) 0.09 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.01 / 0.01 / 0.30

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-right, top-left

- gpt-6-sol: Details inside the right archway are indistinct; distance and shadow could also explain this. (middle-right, weak)
- gpt-6-sol: Details inside the distant arch are unusually indistinct, though distance and low light could explain this. (top-left, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The nearer worker's hands and the object beside the rail are hard to distinguish precisely. (center, weak)

**buildings**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The brick arches and windows repeat in a way that could superficially resemble generated architecture, though their structure remains coherent. (top-center, weak)

## u-two-L-8.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.25
- google/gemini-3.1-pro-preview: 0.02 / 0.95 / 0.99

**track_geometry**: score 8, raised in 3/9 calls, at bottom-center, center, middle-right

- claude-opus-5.5: Left track's right rail, where the orange-clad worker kneels, splits and runs off toward the bottom-center, diverging in a way inconsistent with a proper gauge pair; the left track's two rails do not stay parallel (bottom-center, moderate)
- gemini-3.1-pro-preview: The grooved rail that the worker in the orange jacket is working on abruptly disappears into the cobblestone pavement just behind his hands. (center, strong)
- gemini-3.1-pro-preview: The inner (left) rail of the track curving to the right abruptly disappears into the smooth pavement in the middle distance, leaving only one rail continuing towards the right archway. (middle-right, strong)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at whole-image, bottom-center, middle-right

- gpt-6-sol: Some distant details look soft and indistinct, which could resemble AI-generated texture, though it is also consistent with a hazy photograph. (whole-image, weak)
- gpt-6-sol: The workers’ hands and the small objects by the rail are indistinct, making their exact shapes hard to verify. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the small object near the rail are blurry enough that their exact shapes are hard to distinguish. (bottom-center, weak)
- gemini-3.1-pro-preview: The detailed cobblestone texture between the rails of the right track suddenly melts into a smooth, featureless grey surface. (middle-right, strong)

**tools_or_small_objects**: score 4, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The hands of the worker in the orange jacket and the tool he is holding are merged into an indistinct, blurry blob. (bottom-center, moderate)
- gemini-3.1-pro-preview: The brown object or bag sitting on the ground next to the kneeling worker in orange lacks any defined shape or details, appearing as a generic textured blob. (bottom-center, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The hands of the worker in the orange jacket are indistinguishable blobs that appear to melt into the metal tool he is supposedly holding, with no realistic grip visible. (center, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of rails in the background appears as a single, solid textured block with horizontal lines drawn on it, rather than a pile of individual discrete metal rails. (center, moderate)

## wplate-1.jpg: mean P(AI) 0.19 (passes)

- openai/gpt-6-sol: 0.03 / 0.07 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.25 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.05

**track_geometry**: score 11, raised in 2/9 calls, at bottom-center, middle-left, bottom-right

- claude-opus-5.5: Track geometry is odd: the two tracks diverge as separate lines with no visible switch connecting them in the foreground. The left track's rail and guard rail have a strange doubled appearance. (bottom-center, moderate)
- gemini-3.1-pro-preview: An extra, incomplete rail segment appears out of nowhere between the main rails of the left track. (bottom-center, strong)
- gemini-3.1-pro-preview: As the left track approaches the building, the rails lose their 3D profile and seem to melt flat into the concrete apron. (middle-left, strong)
- gemini-3.1-pro-preview: The inner guard rail on the right track ends with a blunt, disconnected tip rather than tapering or bolting into the main rail. (bottom-right, strong)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, middle-right

- gpt-6-sol: The image is somewhat soft, making fine details inside the depot openings difficult to distinguish. (whole-image, weak)
- gpt-6-sol: Details inside the dark right-hand entrance are indistinct and somewhat smeared. (middle-right, weak)
- gpt-6-sol: The image is unusually muted and hazy, obscuring some fine detail; this could resemble generated imagery, though it is also consistent with a photograph. (whole-image, weak)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: The horizontal overhead wire extending to the left from the support pole abruptly ends in mid-air against the sky. (top-left, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical objects (like pipes) behind the chainlink fence are distorted and melted together into an indistinguishable blob. (center, moderate)

## wplate-2.jpg: mean P(AI) 0.54 (fails)

- openai/gpt-6-sol: 0.06 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.75 / 0.25 / 0.82
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 27, raised in 7/9 calls, at bottom-center, center

- gpt-6-sol: The two tracks come very close at the bottom edge, making their separation briefly hard to read. (bottom-center, weak)
- claude-opus-5.5: Both tracks curve symmetrically away from each other like a mirrored layout. Their sleeper sets appear to overlap or abut at the merge point instead of forming a continuous turnout. (center, moderate)
- claude-opus-5.5: The inner rails of the two tracks meet at the bottom, and each track keeps its own short sleepers right to that point instead of the long shared ties typical of a turnout. This is slightly unusual. (bottom-center, weak)
- claude-opus-5.5: Each branch has its own separate set of sleepers right up to the divergence point, instead of the long shared timbers a real turnout uses. This would make the junction unbuildable as shown. (bottom-center, strong)

**overhead_wires_or_poles**: score 9, raised in 5/9 calls, at top-right, top-center, top-left

- claude-opus-5.5: Catenary poles and wires are sparse and loosely connected; the wires do not clearly follow the tracks. (top-right, weak)
- claude-opus-5.5: Overhead catenary is very sparse, with thin wires that do not clearly follow either track. There is little or no visible support hardware above the tracks. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wires above the tracks fade out and do not logically connect to form a continuous, functional catenary system. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires appear disconnected, zigzag in unnatural angles, and abruptly fade into the sky. (top-left, strong)

**background_clutter**: score 8, raised in 3/9 calls, at top-center, center, middle-right

- gpt-6-sol: The pale cylindrical objects near the portable toilet have somewhat indistinct, overlapping outlines. (top-center, weak)
- gemini-3.1-pro-preview: A pile of cylindrical objects on the ground between the two track branches is melted together into a blurry, indistinct mass that lacks structural separation. (center, strong)
- gemini-3.1-pro-preview: The chain-link fence behind the tracks is incompletely rendered, with the mesh fading in and out of existence and disconnecting from the posts. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (resembling concrete pipes) are melted together, lacking defined individual edges or shadows. (middle-right, moderate)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- claude-opus-5.5: The two tracks converge into a V where the inner rails simply meet, with no switch points, frog, guard rails or shared turnout ties; each track keeps its own separate sleepers, which is physically implausible for a real junction. (bottom-center, strong)
- claude-opus-5.5: The two tracks split from one point without any turnout hardware: no switch points, no frog, no guard rails. The inner rails of the two branches simply converge and nearly touch at the bottom edge. (bottom-center, strong)

**buildings**: score 4, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: Inside the dark, open bay door of the building, there are disjointed, floating white rectangular shapes that do not form coherent interior lights or structures. (middle-left, moderate)
- gemini-3.1-pro-preview: Inside the open building doorway, the ceiling lights are rendered as amorphous, floating bright blobs rather than distinct physical fixtures. (middle-left, moderate)

## wplate-3.jpg: mean P(AI) 0.26 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.05

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, middle-right

- gemini-3.1-pro-preview: The inner rails of the two tracks converge but end abruptly without any switch mechanism, and the concrete sleepers clash in an unnatural, disjointed way. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails on the right track appear somewhat wobbly, and the gauge (distance between the rails) seems to fluctuate as the track approaches the building. (middle-right, weak)
- gemini-3.1-pro-preview: The sleepers (ties) between the inner rails of the two diverging tracks are arranged in physically impossible, chaotic patterns, overlapping and melting into each other. (bottom-center, strong)
- gemini-3.1-pro-preview: There are faint, random parallel lines in the dirt resembling miniature rails that serve no purpose and lead nowhere. (middle-right, moderate)

**overhead_wires_or_poles**: score 7, raised in 2/9 calls, at top-right, middle-left

- gemini-3.1-pro-preview: The overhead wires attached to the poles are faintly drawn, discontinuous, and appear to vanish into the sky without connecting logically. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead power wires are fragmented, fade out into the sky, and do not connect logically to the support structures or masts. (top-right, strong)
- gemini-3.1-pro-preview: The thick grey vertical pole on the far left rests on a flat, unrealistic disc-shaped base on top of the dirt, lacking any visible bolts or structural anchoring. (middle-left, moderate)

**background_clutter**: score 5, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The chain-link fence running along the background has an incoherent and inconsistent mesh pattern that breaks down upon closer inspection. (middle-left, moderate)
- gemini-3.1-pro-preview: A pile of cylindrical objects, possibly concrete pipes, appears melted together with misshapen, irregular openings that lack solid structure. (center, strong)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-center, whole-image, top-left

- gpt-6-sol: Some distant facade details look soft and indistinct, making them hard to verify. (top-center, weak)
- gpt-6-sol: Some distant details are soft and hard to distinguish, which could also occur in an AI-generated image. (whole-image, weak)
- gpt-6-sol: The dark depot opening obscures some interior details, making that area difficult to verify. (top-left, weak)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of pipes on the ground appears smudged and melded together into a solid blob, lacking clear individual cylindrical shapes or hollow centers. (center, strong)

## wplate-4.jpg: mean P(AI) 0.33 (passes)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.68 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.05

**track_geometry**: score 15, raised in 3/9 calls, at bottom-center, bottom-left, whole-image

- claude-opus-5.5: Both tracks diverge sharply at the bottom of the frame with no switch, frog, or connecting rails. The two tracks appear to emerge independently from the frame edge, an implausible layout for a real depot entrance. (bottom-center, moderate)
- claude-opus-5.5: The left track's sleepers are unevenly spaced and some appear to float or merge near the curve. The rail fastenings repeat in a slightly irregular, smeared way. (bottom-left, moderate)
- gemini-3.1-pro-preview: The concrete sleepers (ties) from the left and right tracks intersect and overlap each other in a physically impossible criss-cross pattern, with the rail appearing to be painted over them. (bottom-center, strong)
- gemini-3.1-pro-preview: The fasteners holding the steel rails to the concrete sleepers are rendered uniformly as blurry, melted blobs rather than distinct mechanical clips. (whole-image, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-right

- claude-opus-5.5: The overhead catenary is sparse and inconsistent: thin wires end or cross arbitrarily between poles, and there is no coherent contact wire above either track. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire leading to the right pole abruptly fades out into the sky and lacks proper mechanical connection to the support structure. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires are faint, disjointed, and some abruptly terminate in mid-air without connecting to any support structures. (top-center, moderate)

**buildings**: score 4, raised in 3/9 calls, at top-right, top-center, middle-left

- gpt-6-sol: Some distant facade and doorway details are indistinct, which could also occur in a generated image. (top-right, weak)
- claude-opus-5.5: The depot facade's roller doors, glazing panels, and mullions are mostly regular, but some panel divisions misalign across the building. (top-center, weak)
- gemini-3.1-pro-preview: Inside the dark open bay of the building, the bright rectangular shapes resembling windows or skylights are irregularly spaced and appear to float without a coherent structural layout. (middle-left, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects (like concrete pipes) behind the tracks is rendered as a lumpy, indistinct mass where individual pipes melt into one another. (center, moderate)
- gemini-3.1-pro-preview: The stack of cylindrical objects (like concrete pipes) between the tracks lacks distinct edges, with the shapes melting into each other and the ground. (center, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at top-center, whole-image

- gpt-6-sol: The distant facade looks somewhat hazy and low in detail, though this is also consistent with a photograph taken through a windscreen. (top-center, weak)
- gemini-3.1-pro-preview: The image features artificial film grain and dust spots applied to simulate an old photograph or a view through a dirty window, a common stylistic overlay in AI generation. (whole-image, weak)

## wplate-5.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at center, top-center, top-right

- gpt-6-sol: The broad paved area looks somewhat smooth and low-detail compared with the tracks and buildings. (center, weak)
- gpt-6-sol: Some of the distant pipe edges are indistinct, which could resemble generated detail but is also consistent with distance and image resolution. (top-center, weak)
- gpt-6-sol: Details inside the dark depot entrance are difficult to make out; that lack of clarity could conceal generated inconsistencies, though it is also normal in a photograph. (top-right, weak)

## wplate-6.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 22, raised in 4/9 calls, at bottom-right, bottom-center, bottom-left

- gpt-6-sol: The sleepers look unusually regular at a glance, though that is also expected for a railway track. (bottom-right, weak)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks cross over each other without any switch mechanism or frog, simply overlapping in a physically impossible way. (bottom-center, strong)
- gemini-3.1-pro-preview: The concrete ties (sleepers) under the left track do not properly span the width between the two rails, appearing disjointed and chaotic. (bottom-left, strong)
- gemini-3.1-pro-preview: The concrete ties under the right track terminate unevenly and sometimes appear to melt into the ballast on the outer edge. (bottom-right, moderate)

**overhead_wires_or_poles**: score 11, raised in 3/9 calls, at top-left, top-right, top-center

- gemini-3.1-pro-preview: The overhead catenary wires attached to the pole are faint, lack proper insulators, and do not form a logical structural network for powering a train. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire extending horizontally to the left from the support pole abruptly fades into the sky without connecting to another structure. (top-left, strong)
- gemini-3.1-pro-preview: The wires attached to the pole form a nonsensical, floating structure that does not resemble a functional catenary system and lines fade into the background. (top-right, strong)
- gemini-3.1-pro-preview: The overhead wires attached to the masts do not form a logical or continuous catenary system; they fade into the sky or terminate without proper tensioning or connections. (top-center, strong)

**buildings**: score 8, raised in 3/9 calls, at top-center, middle-left

- gemini-3.1-pro-preview: The roofline of the corrugated metal building exhibits an unnatural, wavy sag in the middle that does not align with the vertical structure below it. (top-center, moderate)
- gemini-3.1-pro-preview: The roofline of the grey building has a distinct, unnatural wave or bump that does not look like intentional architectural design. (top-center, moderate)
- gemini-3.1-pro-preview: The interior visible through the large open doorway consists of chaotic, indistinct structural elements rather than logical building supports or equipment. (middle-left, moderate)
- gemini-3.1-pro-preview: The roofline of the central part of the building sags and waves in a structurally unsound and unrealistic manner. (top-center, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at bottom-right, whole-image

- gpt-6-sol: The sleepers look unusually uniform at a glance, though regular spacing is expected on a railway. (bottom-right, weak)
- gpt-6-sol: The image is hazy, and details inside the depot openings are indistinct; that softness could superficially resemble generated imagery. (whole-image, weak)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical objects (pipes or tubes) on the ground between the tracks appears melted together, lacking distinct edges or structural integrity. (center, moderate)

## x-group-L-1.jpg: mean P(AI) 0.28 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.15
- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**people_anatomy**: score 10, raised in 3/9 calls, at center, middle-right, bottom-left

- gpt-6-sol: The crouching workers’ hands and the rail they are handling are somewhat hard to distinguish. (center, weak)
- gemini-3.1-pro-preview: The worker kneeling on the right track has a jumbled, malformed lower half with indistinct limbs that resemble an extra, misshapen leg. (middle-right, strong)
- gemini-3.1-pro-preview: The rightmost worker on the left branch track has poorly defined arms and hands that appear to meld seamlessly into the rail they are touching. (center, strong)
- gemini-3.1-pro-preview: The worker on the far left has indistinct legs that appear to merge together, and his left hand blends amorphously into the ground. (bottom-left, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The track junction where the rails diverge is physically impossible; it lacks any mechanical switch points or tie bars, and the rail grooves simply melt into the pavement. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the track curving towards the right building abruptly disappears into the wet concrete and fails to connect to any switch mechanism or continuous line. (bottom-center, strong)

**composition_or_staging**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The workers are arranged neatly along the rails in a somewhat staged, stock-like layout. (whole-image, weak)
- claude-opus-5.5: Somewhat staged-looking arrangement of workers kneeling symmetrically along rails, stock-photo feel (whole-image, weak)
- claude-opus-5.5: The scene looks like a staged stock shot, with workers neatly placed on both branches (whole-image, weak)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and the small items near the rails are difficult to make out precisely, leaving some ambiguity in the fine details. (center, weak)
- gemini-3.1-pro-preview: The orange traffic cones visible in the background near the fence are distinctly misshapen, looking melted or asymmetrical. (middle-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The orange traffic cones and surrounding objects near the fence in the background are distorted, blob-like, and lack clear structure. (middle-left, moderate)

## x-group-L-2.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.70 / 0.70
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.98

**track_geometry**: score 12, raised in 4/9 calls, at center, middle-left, bottom-center, middle-right

- claude-opus-5.5: Two track pairs converge toward the foreground in a mirrored V, but the inner rails don't form a coherent switch/frog; the tracks run parallel and separate without any turnout mechanism, making the junction layout implausible. (center, moderate)
- claude-opus-5.5: On the left track, the left rail sweeps sharply left toward the left shed door while the right rail runs fairly straight toward the pole and gravel area, so the two rails of one track seem to diverge instead of staying parallel. (middle-left, moderate)
- claude-opus-5.5: The two tracks split into a V with no visible switch, frog or guard rail. Each simply ends in a separate curve, with a gravel wedge filling the gap between them. (center, weak)
- claude-opus-5.5: The two branches have inconsistent, unusually wide and differing rail spacing. The left branch's rails splay apart toward the foreground, and the inner rails do not resolve into a coherent switch or frog where they meet near the V of gravel. (bottom-center, moderate)

**people_anatomy**: score 11, raised in 5/9 calls, at center, middle-left

- gpt-6-sol: The hands and legs of the three closely grouped workers are difficult to distinguish where their bodies overlap. (center, weak)
- gpt-6-sol: The kneeling workers’ hands and tools are difficult to distinguish, leaving some fine details ambiguous. (middle-left, weak)
- claude-opus-5.5: The three workers are clustered tightly with merged limbs; the hands and tools at the rail are indistinct, and the orange object between them is a vague blob. (middle-left, moderate)
- claude-opus-5.5: The three kneeling workers on the left merge together. Their hands and tools are smeared, and their poses are generic. (middle-left, weak)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-right, middle-left

- claude-opus-5.5: The tool bag next to the right worker and the bar he holds are smeary, with no defined structure. (middle-right, weak)
- claude-opus-5.5: The tools and bags beside the workers (an orange device, a pile near the right worker) are indistinct blobs with no readable structure. (middle-right, weak)
- gemini-3.1-pro-preview: The tools and equipment scattered on the ground next to the left group of workers are unidentifiable, shapeless blobs. (middle-left, moderate)

**background_clutter**: score 4, raised in 3/9 calls, at top-left, top-center, middle-left

- claude-opus-5.5: The shed interior and fence details look plausible but mushy, with pallets and cones rendered with low-detail edges. (top-left, weak)
- claude-opus-5.5: The fence, pallets and cones are coherent, but the fence posts and the junk behind them are smeared. (top-center, weak)
- gemini-3.1-pro-preview: The orange traffic cones placed near the fence in the background appear distorted and melted. (middle-left, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric staged composition with two identical shed doorways, each feeding one track, and workers neatly placed on each branch, giving a stock-image feel. (whole-image, weak)
- claude-opus-5.5: The scene is near-symmetric, with a worker group placed neatly on each branch and a door at the end of each track. It looks staged in a typical generated way. (whole-image, weak)

## x-group-L-3.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.02

**track_geometry**: score 9, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: Two tram track pairs diverge into a V with no visible switch, frog, or connecting geometry; the inner rails of each branch simply run parallel without a realistic junction (center, moderate)
- claude-opus-5.5: The track layout is implausible: two separate embedded track pairs diverge in a V with no switch or frog connecting them, and the inner rails of the left and right pairs don't form a coherent junction. (center, moderate)
- claude-opus-5.5: Two embedded grooved-rail tracks diverge in a V from the depot yard but there is no switch/frog connecting them; the inner rails of each branch simply run parallel without a physical junction, which is physically implausible. (center, moderate)
- gemini-3.1-pro-preview: The diverging tracks lack a necessary crossing point (frog) for the inner rails; instead, the inner rails merge into an undefined, nonsensical groove that a flanged train wheel could not navigate. (bottom-center, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at middle-left, center, middle-right

- gpt-6-sol: The workers' hands and tools are indistinct where they cluster around the rail, making their exact positions hard to resolve. (middle-left, weak)
- gpt-6-sol: The overlapping hands and legs of the three kneeling workers are difficult to distinguish, which could suggest generated detail, though their overlap and distance also explain it. (center, weak)
- claude-opus-5.5: The lone worker on the right track has a smeared, ill-defined lower body and tool, with hands merging into the rail. (middle-right, weak)
- gemini-3.1-pro-preview: The worker in the orange jacket on the left track has an anatomically impossible lower body, appearing as a jumbled mass of extra legs or limbs pointing in conflicting directions. (middle-left, strong)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Three workers kneel in a tight row all bent over the same rail with similar poses; hands and tools are indistinct blobs (middle-left, moderate)
- claude-opus-5.5: Three workers kneel in a tight row at the track with no visible tools or meaningful work in progress. One appears to straddle the rail awkwardly, and the hands are indistinct. (middle-left, moderate)
- claude-opus-5.5: Three workers kneel clustered together on the left track in a staged, near-identical crouch; their hands and tools blur together into indistinct shapes. (middle-left, moderate)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overall soft, video-frame-like rendering with smooth gradients and no fine sensor noise, typical of generated video stills (whole-image, moderate)
- claude-opus-5.5: The image has an overall smooth, slightly painterly texture. The wet asphalt patches look generic and the shed interiors are mushy, with nondescript shapes. (whole-image, moderate)
- claude-opus-5.5: Smooth, overly clean wet asphalt with soft, painterly puddles and a uniform cinematic grade typical of video-generation output. (whole-image, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, middle-left

- claude-opus-5.5: Pallet, cones, and fence are rendered softly with smeared detail; fence posts and contents behind are vague (top-center, weak)
- gemini-3.1-pro-preview: The orange traffic cone standing next to the wooden pallets in the background is asymmetrical, appears slightly melted, and lacks the crisp definition of a real physical object. (middle-left, moderate)

## x-group-L-4.jpg: mean P(AI) 0.47 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.68 / 0.70 / 0.72
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**track_geometry**: score 13, raised in 4/9 calls, at center, bottom-left, bottom-center, middle-left, bottom-right

- claude-opus-5.5: Embedded grooved rails curve away into two separate branches with no visible switch or connection where they diverge; the inner rails of left and right tracks never meet in a plausible turnout, the gravel wedge simply separates them (center, moderate)
- claude-opus-5.5: Left branch outer rail and inner rail spacing appears inconsistent, with the left rail converging oddly toward the group of workers (bottom-left, weak)
- claude-opus-5.5: Embedded grooved rails curve away from each other into two depot tracks, but there is no visible switch blade or frog joining them; the branches simply separate across a gravel area, which is odd for a real junction (center, moderate)
- claude-opus-5.5: Two embedded tram track pairs diverge from shed doors, but the left track's left rail and the right track's rails don't form a coherent switch/turnout; tracks simply appear as separate pairs without a junction point where they would merge in foreground (center, moderate)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at middle-left, center

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish, a slight AI-like ambiguity that could also result from distance and rain. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the small object at the left-hand switch are hard to distinguish. (center, weak)
- gemini-3.1-pro-preview: The tools and equipment between the group of three workers are completely unidentifiable, melted blobs of color rather than distinct objects. (middle-left, moderate)
- gemini-3.1-pro-preview: The hands of the workers on the left and the tools they are presumably using are merged into indistinct, amorphous blobs on the rail. (middle-left, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-left, middle-right

- claude-opus-5.5: Three kneeling workers have coherent PPE, ear defenders, hard hats; hands blend into a vague object at center with indistinct tools (middle-left, weak)
- gemini-3.1-pro-preview: The three workers on the left track have fused, indistinct lower bodies and limbs that blend into each other and the ground. (middle-left, strong)
- gemini-3.1-pro-preview: The kneeling worker on the right track has a deformed lower body, with legs that appear to melt seamlessly into the wet concrete. (middle-right, strong)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image, center

- claude-opus-5.5: Overall soft, slightly smeared rendering with a video-frame-like quality and no crisp fine detail (whole-image, moderate)
- claude-opus-5.5: Smooth, slightly painterly wet asphalt and uniform video-like softness typical of generated video frames (whole-image, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background breaks down into a messy, inconsistent pattern that does not resemble actual wire mesh upon closer inspection. (center, moderate)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at middle-left, middle-right

- gpt-6-sol: The three workers' hands and equipment overlap, making their exact positions hard to distinguish. (middle-left, weak)
- claude-opus-5.5: Three workers kneel clustered in a group on the left track; poses plausible but hands/tools at center are mushy and indistinct (middle-left, moderate)
- gemini-3.1-pro-preview: The single worker on the right appears to be kneeling awkwardly, with the structure of the track seeming to pass straight through their lower legs. (middle-right, moderate)

## x-group-L-5.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.72 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 23, raised in 6/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Two embedded grooved-rail tracks diverge from the shed doors but then run nearly parallel toward the camera with odd spacing; each 'track' looks like single rails paired across gap inconsistently, and the right track's rails don't form a consistent gauge with the left (center, moderate)
- claude-opus-5.5: The two track pairs diverge without any switch, frog, or crossing; each branch is an isolated pair of rails, and the inner rails run in odd parallel curves that don't form a coherent turnout. (center, strong)
- claude-opus-5.5: The rails are embedded grooved rails with smooth, uniform concrete edging that looks too clean and idealized, with no joints or fasteners visible. (bottom-center, moderate)
- claude-opus-5.5: The two branches diverge from nowhere: there is no actual switch, frog or connection. The left pair's inner rail and the right pair's inner rail run as independent curves separated by a gravel wedge, with no physical turnout. (center, strong)

**people_anatomy**: score 16, raised in 6/9 calls, at center, middle-left, middle-right, bottom-right

- gpt-6-sol: The crouching workers’ hands and tools are hard to distinguish where they overlap the rails. (center, weak)
- gpt-6-sol: The clustered workers' hands and knees are somewhat hard to distinguish where they overlap. (center, weak)
- claude-opus-5.5: Kneeling workers have blurry, somewhat merged hands and tools; the orange-vested worker's legs and boots blend with the ground (middle-left, moderate)
- gemini-3.1-pro-preview: The lower body of the worker in the yellow jacket on the right merges indistinguishably into formless brown blobs, lacking defined legs, boots, or clearly separate bags/tools. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The items being handled by the workers on the left track appear as undefined, amorphous smudges rather than distinct mechanical tools. (middle-left, moderate)
- gemini-3.1-pro-preview: The objects placed on the ground next to the solitary worker appear as formless, textured lumps rather than distinct tools, bags, or equipment. (middle-right, strong)

**composition_or_staging**: score 4, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Symmetrical staged composition with workers neatly kneeling on rails, cinematic grading, typical of video-generation stills (whole-image, moderate)
- claude-opus-5.5: Workers kneel symmetrically along both branches doing vague tasks, and the two sheds are framed almost symmetrically; it looks like a stock-style staged scene. (whole-image, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, middle-left

- gpt-6-sol: Some small objects along the fence are indistinct, a minor ambiguity that could also result from distance and the window. (top-center, weak)
- gemini-3.1-pro-preview: The orange traffic cones by the fence in the background are vaguely shaped and appear to be melting into the ground. (middle-left, moderate)

## x-group-L-6.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.25 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.01 / 0.99 / 0.99

**people_anatomy**: score 11, raised in 4/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The workers’ hands and legs are hard to distinguish where they overlap the rails. (center, weak)
- gpt-6-sol: The workers’ hands and equipment where they meet the switch are difficult to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The worker furthest to the right in the group of three has a completely mangled lower body that melts into an indistinct dark blob without defined legs or feet. (middle-left, strong)
- gemini-3.1-pro-preview: The solitary worker on the right track lacks discernible legs or feet, with their lower body appearing to fuse directly into the wet pavement. (middle-right, strong)

**track_geometry**: score 6, raised in 3/9 calls, at bottom-center, bottom-left

- claude-opus-5.5: The left track pair is spaced oddly: the left rail curves off toward the far left while the right rail runs separately, and the gauge doesn't stay consistent along the curve. These grooved rails embedded in pavement read as plausible tram track, though. (bottom-center, weak)
- gemini-3.1-pro-preview: The rail closest to the viewer on the left track has an inconsistent number of parallel lines/grooves and loses its structural definition as it approaches the workers. (bottom-left, strong)
- gemini-3.1-pro-preview: The grooves in the left track rails are inconsistent, appearing to split into multiple faint, unstructured lines that lose depth as they approach the workers. (bottom-left, moderate)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The hands of the workers on the left merge indistinguishably with dark, shapeless masses instead of recognizable tools. (middle-left, moderate)
- gemini-3.1-pro-preview: The worker on the right track is interacting with objects that are entirely undefined, smeared dark blobs, lacking any structure or detail of actual tools. (middle-right, strong)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The objects stored behind the chain-link fence near the left building entrance are rendered as melting, nonsensical shapes. (middle-left, moderate)
- gemini-3.1-pro-preview: The chain-link fence behind the workers has an inconsistent mesh pattern that vanishes in several spots, and the orange cones behind it appear warped and melted. (middle-left, moderate)

**texture_noise_or_sharpness**: score 3, raised in 1/9 calls, at whole-image

- gemini-3.1-pro-preview: When examined closely, the image lacks photographic grain and fine details. Edges and objects have a painterly, smeared appearance typical of AI generation, especially noticeable on clothing folds and ground textures. (whole-image, strong)

## x-group-L-7.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.98 / 0.01 / 0.02

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-left

- gpt-6-sol: The three workers overlap, making their hands and the object at the rail hard to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The three workers clustered together on the left have merged bodies; the worker with the white hard hat appears to lack a lower body, blending into the back of the worker in the orange jacket. (middle-left, strong)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-left

- gpt-6-sol: The three crouching workers overlap, making some of their hands and legs difficult to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The left hand of the worker in the yellow jacket on the far left is an undefined shape that blends seamlessly into the track and ground. (middle-left, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at middle-right

- gpt-6-sol: The right worker's hands and the object beside the rail are hard to distinguish, though distance and blur could explain this. (middle-right, weak)
- gemini-3.1-pro-preview: The tool being used by the worker on the right track is an amorphous, unidentifiable grey and black blob that merges with the rails. (middle-right, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the two track branches curve towards each other as they approach the foreground, but fail to form a logical switch, crossing, or frog, instead just blurring out. (bottom-center, strong)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The chain-link fencing between the buildings has an inconsistent mesh pattern, and some poles appear disconnected or bent at odd angles. (middle-left, moderate)

## x-group-L-8.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.75 / 0.80 / 0.75
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**track_geometry**: score 8, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: Two track pairs diverge from a central gravel wedge, but the inner rails curve away without any switch blades, frog, or connection; the left and right tracks seem to be separate pairs with no plausible junction geometry (center, moderate)
- claude-opus-5.5: The two track pairs diverge from a dirt median in an odd way: the inner rails of each branch curve apart with no switch, frog, or continuous connection, so the layout is not physically coherent as a junction. (center, moderate)
- claude-opus-5.5: The rail grooves have uniform, smooth channels with inconsistent gauge, and the left track's left rail fades into the asphalt. (bottom-center, moderate)
- claude-opus-5.5: The two track pairs diverge from separate depot doors but the inner rails don't connect into a coherent turnout; the left pair's right rail and the right pair's left rail run into a gravel triangle with no switch or frog (center, moderate)

**tools_or_small_objects**: score 4, raised in 4/9 calls, at middle-right, middle-left

- gpt-6-sol: The right worker’s hands and the object at the rail are difficult to distinguish and appear to run together slightly. (middle-right, weak)
- claude-opus-5.5: Bag/cable on the ground left of the workers is an indistinct blob; the tools in the workers' hands are not legible (middle-left, weak)
- claude-opus-5.5: An object on the ground at left (bag or cable) is an amorphous lump, and the tools near the right worker are indistinct. (middle-left, weak)
- claude-opus-5.5: The tool bag and cable on the ground are blobby and lack clear structure (middle-left, weak)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image

- gpt-6-sol: Fine details on the workers and in the dark entrances are indistinct, limiting certainty. (whole-image, weak)
- claude-opus-5.5: Smooth, slightly waxy asphalt and wet-surface rendering with soft, uniform detail typical of video generators (whole-image, moderate)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at middle-left

- claude-opus-5.5: Three workers crouch tightly clustered on the left track with somewhat merged legs and boots; the orange-vest worker's lower body is ambiguous (middle-left, moderate)
- claude-opus-5.5: The three crouching workers have plausible poses, but their hands and tools are vague and they are not clearly doing any identifiable task. (middle-left, weak)

**people_clothing_or_gear**: score 2, raised in 2/9 calls, at middle-right, middle-left

- claude-opus-5.5: Lone worker on the right track has a hi-vis jacket whose reflective bands are fuzzy, and a vague tool by his knees (middle-right, weak)
- claude-opus-5.5: Hi-vis vests are generic, with no logos or text; reflective bands are slightly smeared and the workers' hands are vague, holding indistinct tools (middle-left, weak)

## y-group-L-1.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**people_anatomy**: score 13, raised in 3/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: The lone worker kneeling on the right has deformed lower legs and boots that appear to melt seamlessly into the concrete pavement without distinct edges. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the workers on the left, particularly the one on the far right of the group, are formless blobs that blend directly into the rails and tools. (bottom-left, moderate)
- gemini-3.1-pro-preview: In the group of three workers, the middle worker's left arm blends indistinctly into the worker on his right, and the rightmost worker has missing or malformed legs. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower halves and feet of the three workers on the left are indistinct blobs, lacking defined boots or correct anatomical structure. (bottom-left, strong)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The rails directly underneath the group of three workers are a nonsensical jumble of lines that do not form a continuous track, switch, or logical physical structure. (bottom-left, strong)
- gemini-3.1-pro-preview: The left rail of the track the single worker is on abruptly disappears into the concrete behind him, and the track gauge appears unrealistically narrow. (bottom-right, strong)
- gemini-3.1-pro-preview: The tracks curving to the right have inconsistent parallel lines, with the inner rails appearing to abruptly stop, merge, or vary in thickness unnaturally. (bottom-right, strong)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof trusses above the depot entrance is highly inconsistent, with some structural beams appearing to connect to nothing or disappearing mid-air. (top-center, strong)
- gemini-3.1-pro-preview: Some of the diagonal metal struts in the complex roof truss structure terminate abruptly or do not connect logically to the main beams. (top-center, moderate)
- gemini-3.1-pro-preview: The diagonal support beams in the roof trusses are chaotic, intersecting randomly, changing thickness, and sometimes floating without proper structural connections. (top-center, strong)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at bottom-left, bottom-center, middle-left

- gpt-6-sol: The workers' hands and small objects at the rail junction are difficult to distinguish clearly. (bottom-left, weak)
- gpt-6-sol: The workers’ hands and small objects where they meet the rail are difficult to distinguish. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the small objects around the rails are indistinct, making their exact interactions hard to verify. (middle-left, weak)
- gemini-3.1-pro-preview: The bags and tools scattered around the kneeling workers are blobby and lack defined shapes or details. (bottom-left, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The vertical structural poles supporting the roof have inconsistent thickness and indistinct bases where they meet the ground. (top-center, moderate)

## y-group-L-2.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.06 / 0.08 / 0.03
- anthropic/claude-opus-5.5: 0.60 / 0.35 / 0.72
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 21, raised in 5/9 calls, at bottom-left, bottom-right, bottom-center, center

- claude-opus-5.5: Left track rails curve oddly: outer rail at far left and inner rail converge inconsistently; gauge appears to vary between the two rails near workers (bottom-left, moderate)
- claude-opus-5.5: Right track rails pass under the worker and continue but rails sweep in a way that doesn't clearly connect to the depot pit tracks; geometry of junction ambiguous (bottom-right, weak)
- claude-opus-5.5: Left track rails curve oddly: the left rail runs straight down while the right rail converges, and the track gauge appears inconsistent near the workers; rail pair seems to merge/diverge without a proper switch. (bottom-left, moderate)
- claude-opus-5.5: Right track rails flow from the shed in an unusual sweeping arc; the two rails of the pair don't maintain constant spacing toward the top. (bottom-right, weak)

**people_anatomy**: score 8, raised in 5/9 calls, at middle-left, center, bottom-right

- gpt-6-sol: The workers’ hands and the objects between them are hard to distinguish. (middle-left, weak)
- gpt-6-sol: The overlapping hands and tools of the central workers are difficult to distinguish clearly. (middle-left, weak)
- claude-opus-5.5: Workers' hands and tools are blurry and indistinct; the kneeling figures blend into each other around the rail, with limbs hard to resolve. (center, moderate)
- gemini-3.1-pro-preview: The right foot and lower leg of the worker squatting on the right track lack definition and seem to merge unnaturally into the ground and surrounding shadow. (bottom-right, moderate)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The steel trusses supporting the roof inside the shed are a chaotic, inconsistent mesh of intersecting lines rather than a logical, load-bearing structure. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal beams in the roof's metal truss structure are highly inconsistent, with many lines crossing nonsensically, fading out, or failing to connect to the main framework. (top-center, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at bottom-left, bottom-right

- gpt-6-sol: The tools and hands where the left-side workers meet the rails are difficult to distinguish clearly. (bottom-left, weak)
- gemini-3.1-pro-preview: The dark bag or tool belt sitting on the ground next to the lone worker is an indistinct, melted blob lacking defined features. (bottom-right, moderate)
- gemini-3.1-pro-preview: The tool bag resting on the ground to the left of the kneeling workers is a shapeless blob lacking realistic details such as seams, straps, or compartments. (bottom-left, moderate)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at middle-left, bottom-left

- claude-opus-5.5: Four workers clustered tightly with overlapping limbs; hands of center workers somewhat indistinct where they meet the rail (middle-left, weak)
- claude-opus-5.5: Four kneeling workers cluster tightly around one rail with hands and tools partly obscured, so their exact actions are hard to read. The grouping looks somewhat staged. (middle-left, weak)
- gemini-3.1-pro-preview: The group of workers is visually fused together; the person with the white hardhat behind the kneeling worker in yellow seems merged into their body without clear spatial separation. (bottom-left, strong)

## y-group-L-3.jpg: mean P(AI) 0.58 (fails)

- openai/gpt-6-sol: 0.12 / 0.08 / 0.18
- anthropic/claude-opus-5.5: 0.75 / 0.80 / 0.35
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**tools_or_small_objects**: score 13, raised in 5/9 calls, at bottom-left, bottom-right

- gpt-6-sol: The gear beside the kneeling workers is somewhat indistinct, making individual items hard to identify. (bottom-left, weak)
- claude-opus-5.5: Right worker's hand holds a vague smeared object; bag beside him lacks defined form (bottom-right, weak)
- gemini-3.1-pro-preview: The bags or tools lying next to the workers are shapeless, melting blobs without distinct straps, buckles, or recognizable forms. (bottom-left, moderate)
- gemini-3.1-pro-preview: The tool bag or equipment next to the leftmost worker is an undefined, melting blob of shapes rather than distinct objects with clear structures. (bottom-left, strong)

**people_anatomy**: score 12, raised in 4/9 calls, at bottom-center, bottom-left, bottom-right

- gpt-6-sol: The hands and gear around the middle workers overlap, making their exact positions hard to resolve. (bottom-center, weak)
- gemini-3.1-pro-preview: The rightmost worker in the group of three has an extra, malformed shoe or undefined appendage sticking out from behind his right leg. (bottom-left, strong)
- gemini-3.1-pro-preview: The right foot and lower leg of the lone worker are missing or completely merged into an undefined brown blob. (bottom-right, strong)
- gemini-3.1-pro-preview: The right hand of the worker on the right track seems to merge into the rail or the undefined tool he is holding, lacking clear fingers or grasp. (bottom-right, moderate)

**track_geometry**: score 11, raised in 5/9 calls, at bottom-left, bottom-right, center

- claude-opus-5.5: Left track rails curve oddly; workers kneel on/over rail with the left rail of the pair seeming to merge and the gauge inconsistent near the group (bottom-left, moderate)
- claude-opus-5.5: Right branch rails converge and diverge unnaturally; the right worker kneels between rails with gauge narrowing unrealistically (bottom-right, moderate)
- claude-opus-5.5: Left track rails curve and converge oddly; workers kneel directly on rails with rail gauge inconsistent, rails appear to merge into a single groove near bottom (bottom-left, moderate)
- claude-opus-5.5: The inspection pits in the depot have no clearly visible rails running from the open concrete apron into them, so the track layout looks disconnected. (center, weak)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof trusses is chaotic; many metal beams abruptly end without connecting to the frame. (top-center, strong)
- gemini-3.1-pro-preview: The metal truss structure of the shed roof contains many intersecting lines that do not form a coherent, physically sound architectural pattern; several structural members break, float, or merge nonsensically. (top-center, strong)
- gemini-3.1-pro-preview: The steel trusses supporting the roof of the depot form a chaotic, non-structural web of intersecting diagonal lines rather than a logical, engineered framework. (top-center, moderate)

**composition_or_staging**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric cinematic staging with workers neatly arranged on two branches, typical of generated stock imagery (whole-image, weak)
- claude-opus-5.5: Highly symmetrical cinematic composition, people neatly arranged in groups on two branches, stock-photo staging typical of generated images (whole-image, moderate)
- claude-opus-5.5: The symmetric, cinematic framing with neatly arranged workers looks somewhat staged, like stock footage. (whole-image, weak)

## y-group-L-4.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**track_geometry**: score 19, raised in 5/9 calls, at bottom-center, center, bottom-left, bottom-right, middle-left

- claude-opus-5.5: Left track's rails run inconsistently: the right rail of the left pair widens and curves away oddly, and the gauge between the two rails does not stay consistent toward the depot pits (bottom-center, moderate)
- claude-opus-5.5: Tracks entering the depot do not clearly connect to the inspection pits; the rails fade into the concrete without a coherent layout (center, moderate)
- claude-opus-5.5: Grooved tram rails curve into the depot but the left pair and right pair don't connect coherently to the pit tracks inside the shed; rails fade or merge oddly near the entrance (bottom-center, moderate)
- claude-opus-5.5: Left track rails converge oddly: the left rail curves away toward the left door while the right rail runs straight, with inconsistent gauge and no clear switch or connection to the depot pit tracks. (bottom-left, moderate)

**tools_or_small_objects**: score 15, raised in 5/9 calls, at bottom-right, bottom-left

- gpt-6-sol: The object beside the lone worker is indistinct and hard to identify. (bottom-right, weak)
- claude-opus-5.5: The bag beside the right worker is an indistinct blob with no clear structure. (bottom-right, weak)
- gemini-3.1-pro-preview: The object sitting on the track next to the lone worker on the right is an amorphous, blurry brown blob that lacks the defined features of a real tool bag or equipment. (bottom-right, moderate)
- gemini-3.1-pro-preview: Similarly, the reddish object on the ground to the right of the three workers is indistinct and merges weirdly with the shadow and ground. (bottom-left, moderate)

**people_anatomy**: score 10, raised in 4/9 calls, at bottom-right, bottom-left

- gpt-6-sol: The kneeling worker’s hands are hidden near the rail, making their exact position hard to verify. (bottom-right, weak)
- gpt-6-sol: The three workers' hands and the objects between them are difficult to make out precisely. (bottom-left, weak)
- gemini-3.1-pro-preview: The worker in the orange jacket is kneeling in an unnatural posture, and his legs and feet lack distinct anatomical structure, appearing as formless blocks. (bottom-right, strong)
- gemini-3.1-pro-preview: The yellow safety helmet of the worker on the right appears to melt directly into the orange collar of his jacket, with no defining edge, shadow, or neck visible. (bottom-right, strong)

**buildings**: score 10, raised in 6/9 calls, at top-center

- claude-opus-5.5: Roof truss structure is plausibly symmetric, but the columns and bracing are irregular and merge in places (top-center, weak)
- claude-opus-5.5: Roof truss lattice is regular yet some diagonal members terminate inconsistently; skylights blend smoothly (top-center, weak)
- claude-opus-5.5: The roof truss structure is mostly coherent, but the central pole stands in the middle of the pit tracks with no clear purpose. (top-center, weak)
- gemini-3.1-pro-preview: The metal truss structure of the shed roof contains diagonal cross-braces that appear to intersect nonsensically or fade out before connecting to a main beam. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at center, whole-image

- gpt-6-sol: The distant equipment and track details are soft, making small inconsistencies difficult to rule out. (center, weak)
- claude-opus-5.5: Film-like grain and color grading resemble cinematic AI video output, and background detail is soft (whole-image, weak)
- claude-opus-5.5: Smooth, filmic, slightly soft rendering typical of video-generation models; concrete lacks fine grit detail (whole-image, moderate)

## y-group-L-5.jpg: mean P(AI) 0.57 (fails)

- openai/gpt-6-sol: 0.03 / 0.06 / 0.04
- anthropic/claude-opus-5.5: 0.62 / 0.75 / 0.72
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**tools_or_small_objects**: score 21, raised in 9/9 calls, at bottom-right, bottom-center, bottom-left

- gpt-6-sol: The dark equipment beside the right-hand worker is hard to distinguish precisely; its shape could raise a slight AI concern, though distance also explains it. (bottom-right, weak)
- gpt-6-sol: The equipment beside the left workers' hands is blurry and difficult to identify precisely. (bottom-center, weak)
- gpt-6-sol: The small equipment beside the right-hand worker is difficult to distinguish and looks somewhat muddled. (bottom-right, weak)
- claude-opus-5.5: Tool next to right worker on the rail is indistinct and merges with the rail (bottom-right, weak)

**track_geometry**: score 20, raised in 6/9 calls, at bottom-left, bottom-right, center, middle-left

- claude-opus-5.5: Left track rails converge and curve oddly; the left rail curves toward the right rail near the workers and the gauge appears inconsistent, with the inner rail running straight under the crouching workers (bottom-left, moderate)
- claude-opus-5.5: Right track rails in the foreground appear to widen and curve in a way that doesn't clearly connect to the shed pit tracks; the track layout leading into the depot is ambiguous (bottom-right, moderate)
- claude-opus-5.5: The left track's rails converge and merge oddly; the rail on which the workers kneel curves inconsistently with the other rail and has no visible switch structure. (bottom-left, moderate)
- claude-opus-5.5: The right track curves toward the depot pits, but the rail pair does not clearly connect to the pit tracks behind it. (bottom-right, weak)

**buildings**: score 11, raised in 3/9 calls, at top-center, center

- gemini-3.1-pro-preview: The structural beams and trusses of the shed roof are irregular, wobbly, and asymmetrical, lacking the precise geometry of a real metal structure. (top-center, moderate)
- gemini-3.1-pro-preview: The structural latticework just inside the roof opening is inconsistent; the diagonal bracing lines start and stop arbitrarily and do not form a coherent support framework. (top-center, strong)
- gemini-3.1-pro-preview: The cross-bracing pattern in the roof structure above the large entrance is completely nonsensical. The zig-zag lines intersect at random angles, vary wildly in thickness, and fail to form logically continuous or structurally sound geometric shapes. (top-center, strong)
- gemini-3.1-pro-preview: The inspection pits visible inside the depot lack proper 3D depth and perspective; they look more like flat, dark rectangles painted onto the concrete surface rather than recessed trenches. (center, strong)

**people_anatomy**: score 4, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The hands and lower bodies of the three workers grouped together are blurry and poorly defined, seemingly blending into each other and the ground. (bottom-left, moderate)
- gemini-3.1-pro-preview: The lower legs and footwear of the person crouching on the far left are poorly defined and appear to melt directly into the concrete surface. (bottom-left, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Highly staged stock-footage-like composition with workers in hi-vis arranged neatly on two symmetric branches, typical of generated 'tram maintenance' scenes (whole-image, weak)
- claude-opus-5.5: Cinematic stock-like staging with workers neatly posed on both tracks, soft film-grain look typical of generated stock imagery (whole-image, weak)

## y-group-L-6.jpg: mean P(AI) 0.47 (fails)

- anthropic/claude-opus-5.5: 0.75 / 0.65 / 0.72
- openai/gpt-6-sol: 0.02 / 0.02 / 0.04
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.05

**track_geometry**: score 18, raised in 5/9 calls, at bottom-left, center

- claude-opus-5.5: Left track's rails curve inconsistently: the left rail runs from the shed toward the bottom while the right rail has an odd gauge relationship, with the two rails diverging and converging unnaturally near the workers (bottom-left, moderate)
- claude-opus-5.5: Tracks in the foreground don't clearly connect to the pit tracks inside the shed; the rails seem to fade into the concrete without proper switches or a junction (center, moderate)
- claude-opus-5.5: Left track's rails seem to converge and merge oddly near the bottom; the inner rail behind the workers curves in a way that doesn't form a consistent gauge with the outer rail (bottom-left, moderate)
- claude-opus-5.5: Tracks entering the depot terminate into inspection pits, but the curved tracks in the foreground don't clearly connect to the pit tracks; the floor between them is plain concrete with no rail continuation (center, moderate)

**people_pose_or_placement**: score 9, raised in 4/9 calls, at bottom-left, bottom-right, middle-right

- claude-opus-5.5: Three kneeling workers huddled together, with tools blending into blobs at their feet; their hands and tools aren't clearly defined (bottom-left, moderate)
- claude-opus-5.5: Three workers huddled closely with slightly merged bodies and indistinct tool in hands; faces hidden (bottom-left, weak)
- gemini-3.1-pro-preview: The worker crouching on the right track has lower limbs and hands that blend confusingly into the rail and tools, lacking clear anatomical definition and separation. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower body of the single worker on the right track merges formlessly into the ground and the rail itself, lacking defined legs or feet. (middle-right, strong)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers' hands and equipment overlap in a small, hard-to-resolve cluster. (bottom-center, weak)
- gemini-3.1-pro-preview: The equipment or tools being used by the group of three workers appears as an indistinct, multi-colored blob without clear mechanical structure or shape. (bottom-left, strong)
- gemini-3.1-pro-preview: The items placed on the ground next to the group of three workers are indistinct, blurred blobs that do not resemble recognizable tools or equipment. (bottom-left, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at bottom-left

- claude-opus-5.5: The three crouching workers are overlapped and somewhat merged; the limbs and tools near their feet are smeared and indistinct (bottom-left, moderate)
- gemini-3.1-pro-preview: The rightmost worker in the group of three has legs that appear mangled and merge unnaturally into the ground and surrounding shadows. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 4, raised in 4/9 calls, at whole-image, middle-right

- claude-opus-5.5: Overall soft, filmic, stock-video look with a slightly waxy concrete texture (whole-image, weak)
- claude-opus-5.5: Film-like grain and soft cinematic color grading typical of generated stock-video style frames (whole-image, weak)
- gpt-6-sol: The distant worker and nearby rail fittings are soft enough that small details are difficult to verify. (middle-right, weak)
- gpt-6-sol: The distant workers and equipment look somewhat indistinct, which could resemble generated detail, though distance and image resolution also explain it. (middle-right, weak)

## y-group-L-7.jpg: mean P(AI) 0.57 (fails)

- openai/gpt-6-sol: 0.05 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.60 / 0.75 / 0.72
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 26, raised in 5/9 calls, at bottom-left, bottom-right, bottom-center, center

- claude-opus-5.5: Left curved track rails converge oddly; the inner rail near workers seems to merge with groove inconsistently, and the curves don't clearly connect to the depot pit tracks in the background (bottom-left, moderate)
- claude-opus-5.5: Right track pair curves away but doesn't plausibly connect to any track inside the depot; the rails just fade into concrete (bottom-right, moderate)
- claude-opus-5.5: The embedded grooved rails curve out of the depot and sweep apart in a plausible way. However, the left-pair tracks diverge oddly toward the bottom, and the rails seem to end or merge ambiguously near the foreground. (bottom-center, moderate)
- claude-opus-5.5: The depot inspection pits and the tracks inside the shed do not clearly connect to the curved tracks outside; the transition across the apron is vague. (center, moderate)

**people_anatomy**: score 16, raised in 7/9 calls, at middle-right, center, middle-left, bottom-left

- gpt-6-sol: The two crouched workers overlap, making their arms and gear difficult to separate clearly. (middle-right, weak)
- gpt-6-sol: The two crouching workers overlap enough that their arms and legs are difficult to distinguish individually. (middle-right, weak)
- claude-opus-5.5: In the three-person group on the left, the limbs and boots of the kneeling workers merge, and no hands or tools are clearly visible doing any task. (center, moderate)
- claude-opus-5.5: Kneeling workers' limbs and hands blend together; hands at track are indistinct blobs, legs of the third worker merge with the rail (middle-left, moderate)

**buildings**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is mostly consistent, but the far trusses get repetitive and slightly irregular. (top-center, weak)
- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof trusses has inconsistent patterns, with some structural members appearing to end abruptly or overlap illogically. (top-center, moderate)
- gemini-3.1-pro-preview: The structural beams in the roof trusses consist of intersecting lines that do not form logical, physically possible connections. (top-center, strong)

**tools_or_small_objects**: score 6, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: The hands of the worker on the right blend directly into the rail as formless blobs, with no distinct tools visible despite the pose suggesting work is being performed. (bottom-right, strong)
- gemini-3.1-pro-preview: The dark tool or object being handled by the worker on the right appears to be seamlessly fused into the steel rail. (bottom-right, strong)

**composition_or_staging**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Wide 16:9 low-resolution cinematic frame with film-like grain and a symmetrical, staged layout typical of AI video generators. (whole-image, moderate)
- claude-opus-5.5: Symmetric cinematic staging with worker groups placed on each branch, typical of generated stock-footage stills (whole-image, weak)
- claude-opus-5.5: A symmetric stock-style composition with workers placed neatly on each track. (whole-image, weak)

## y-group-L-8.jpg: mean P(AI) 0.70 (fails)

- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- openai/gpt-6-sol: 0.24 / 0.68 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 20, raised in 6/9 calls, at bottom-left, bottom-right, center

- claude-opus-5.5: Left track rails converge oddly; the rail under the orange-vest worker bends and merges with the left rail pair in an implausible way, with the gauge inconsistent (bottom-left, moderate)
- claude-opus-5.5: Right track curves sweep into the depot area but do not connect cleanly to any of the pit tracks; the rails fade into concrete (bottom-right, moderate)
- claude-opus-5.5: Left track rails appear inconsistent: the rail under the kneeling workers seems to merge/diverge oddly, with the right rail passing beneath the orange-vest worker but the left rail fading near the group, lacking clear sleepers or fixings (bottom-left, moderate)
- claude-opus-5.5: Rails from foreground don't clearly connect to the depot pit tracks; embedded rails curve and vanish into concrete without logical connections (center, moderate)

**people_anatomy**: score 15, raised in 5/9 calls, at bottom-center, bottom-left, bottom-right

- gpt-6-sol: The kneeling workers’ hands, knees, and the object between them blend into an indistinct dark cluster. (bottom-center, moderate)
- gpt-6-sol: The clustered workers’ hands and tools are difficult to distinguish where they overlap. (bottom-left, weak)
- gemini-3.1-pro-preview: The legs and bodies of the four clustered workers meld together making it impossible to distinguish individual limbs, and the worker in the orange vest has distorted, melded shoes. (bottom-left, strong)
- gemini-3.1-pro-preview: The kneeling worker has deformed hands blending into an unrecognizable tool, and the tool bag beside him is a shapeless textured blob. (bottom-right, strong)

**tools_or_small_objects**: score 14, raised in 8/9 calls, at bottom-right, middle-right, bottom-center, bottom-left

- claude-opus-5.5: Worker's hands hold an indistinct tool that blends into the rail; bags on ground are blobby (bottom-right, weak)
- claude-opus-5.5: Right worker's hands hold an indistinct object at the rail; bag beside him is a shapeless form (bottom-right, moderate)
- claude-opus-5.5: Right worker's hands hold an indistinct tool that blends into the rail; no clear tool shape (middle-right, moderate)
- gpt-6-sol: The workers' hands and the object at the rail are partly obscured, making the exact repair activity hard to identify. (bottom-center, weak)

**buildings**: score 10, raised in 4/9 calls, at top-center

- claude-opus-5.5: Roof truss structure is mostly coherent but some diagonal members and wires terminate oddly; pits in the depot are plausible (top-center, weak)
- gemini-3.1-pro-preview: The steel roof trusses feature diagonal beams that intersect randomly and disappear midway across spans, showing impossible structural engineering. (top-center, strong)
- gemini-3.1-pro-preview: The structural beams and cross-bracing in the roof trusses are inconsistent, with many diagonal members intersecting at nonsensical points or disappearing midway. (top-center, strong)
- gemini-3.1-pro-preview: The zig-zag structural beams of the roof truss are inconsistent, with lines intersecting illogically and breaking pattern. (top-center, strong)

**people_clothing_or_gear**: score 6, raised in 3/9 calls, at center, bottom-left

- claude-opus-5.5: Orange vest reflective strips and helmet/earmuff details look slightly smoothed and generic; bags on ground are amorphous blobs (center, moderate)
- claude-opus-5.5: Hi-vis vests have smooth, uniform reflective stripes and helmets with earmuffs look generic; tool bags are vague blobs (center, weak)
- gemini-3.1-pro-preview: The boots of the worker in the orange vest look like melted, uniform material rather than structured footwear. (bottom-left, strong)

## y-group-R-1.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.70 / 0.75 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**track_geometry**: score 20, raised in 4/9 calls, at bottom-left, bottom-right, whole-image

- claude-opus-5.5: Left track pair curves toward center; the inner rail runs into the open floor near the center pole with no clear continuation or connection to the depot tracks, making the layout incoherent (bottom-left, moderate)
- claude-opus-5.5: Right track rails curve from the bottom toward the right side and fade out ambiguously into the concrete instead of joining the inspection-pit tracks (bottom-right, moderate)
- claude-opus-5.5: Left curved track rails converge toward the depot but end abruptly into the concrete without connecting cleanly to the pit tracks in the shed; rail spacing appears inconsistent along the curve (bottom-left, moderate)
- claude-opus-5.5: Right branch rails curve toward the right shed bays but merge ambiguously with the floor; the inner rail near the kneeling workers fades oddly (bottom-right, moderate)

**tools_or_small_objects**: score 8, raised in 5/9 calls, at bottom-right

- gpt-6-sol: The workers' hands and small objects beside the rail are difficult to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and small equipment at the rail junction are difficult to distinguish cleanly. (bottom-right, weak)
- claude-opus-5.5: Items on the ground (bags/gloves) are vague blobs without clear tool definition (bottom-right, weak)
- gemini-3.1-pro-preview: The group of workers on the right are gathered around and touching a gray, amorphous mass on the rails instead of distinct, recognizable tools. (bottom-right, strong)

**buildings**: score 7, raised in 2/9 calls, at top-center, center

- gemini-3.1-pro-preview: The metal roof trusses exhibit impossible geometry, with diagonal struts terminating in mid-air or blending into other beams without proper joints. (top-center, strong)
- gemini-3.1-pro-preview: The yellow safety lines painted on the ground around the inspection pits inside the shed are highly irregular, jagged, and randomly discontinuous. (center, moderate)
- gemini-3.1-pro-preview: The steel truss structure of the roof contains several diagonal members that intersect impossibly, bend, or fail to connect to the nodes properly. (top-center, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at bottom-right, bottom-left

- claude-opus-5.5: Workers' hands and tools are smeared/indistinct; the object on the ground near the center worker is an amorphous blob (bottom-right, moderate)
- gemini-3.1-pro-preview: The worker squatting on the left track has a right leg that appears to be a stumpy, formless blob merging into the concrete. (bottom-left, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at center, whole-image

- gpt-6-sol: Distant equipment and work areas are indistinct, making their small details difficult to verify. (center, weak)
- claude-opus-5.5: Soft, smooth film-like rendering with slightly mushy details in distant equipment and background (whole-image, weak)
- claude-opus-5.5: Soft, slightly waxy filmic rendering with smudged background equipment typical of video-generation models (whole-image, moderate)

## y-group-R-2.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.06 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.72 / 0.80 / 0.72
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 25, raised in 6/9 calls, at bottom-left, bottom-right, center

- claude-opus-5.5: Left track curves sweep in from the left but don't clearly connect to any of the depot pit tracks; the rails seem to end or merge vaguely into the concrete near the shed entrance. (bottom-left, moderate)
- claude-opus-5.5: Right pair of rails diverges with an inconsistent gauge; the inner rail near the workers runs at an odd angle relative to the outer rail, more like two separate curves than a parallel track. (bottom-right, moderate)
- claude-opus-5.5: Left track rails curve oddly; the inner rail seems to merge into a raised curb/edge and the gauge appears inconsistent, with rails splitting toward the shed without a proper switch. (bottom-left, moderate)
- claude-opus-5.5: Tracks entering the shed fade into the floor and pits, with no clear continuation from the foreground rails to the pit tracks. (center, moderate)

**people_anatomy**: score 13, raised in 6/9 calls, at bottom-right, middle-right

- gpt-6-sol: The workers' hands and tools are difficult to distinguish where they meet near the rail. (bottom-right, weak)
- gpt-6-sol: The crouching workers’ hands and legs are difficult to distinguish clearly. (middle-right, weak)
- claude-opus-5.5: Workers' bodies and tools are blurry, hands indistinct and objects near their feet are amorphous blobs (middle-right, moderate)
- gemini-3.1-pro-preview: The anatomy of the three clustered workers is mangled. Their limbs merge together indistinctly, the middle worker appears to lack lower legs entirely, and the rightmost worker's leg position is anatomically incorrect and disjointed. (bottom-right, strong)

**buildings**: score 12, raised in 5/9 calls, at top-center, center

- claude-opus-5.5: The roof truss lattice is plausible but somewhat irregular; the diagonal bracing repeats inconsistently across bays. (top-center, weak)
- claude-opus-5.5: The roof truss structure is mostly regular and symmetric, but some trusses look smeared and repetitive in the distance. (top-center, weak)
- gemini-3.1-pro-preview: The inspection pits inside the depot have wavy, jagged edges that are not parallel. The structural integrity of the tracks passing over these pits is completely undefined and blurry. (center, strong)
- gemini-3.1-pro-preview: Looking closely at the steel roof trusses, several of the thin diagonal bracing rods terminate abruptly in mid-air or merge into other structural members at nonsensical angles. (top-center, moderate)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at center, middle-right, bottom-right

- claude-opus-5.5: The three crouching workers overlap closely and their legs and feet blend together; hands and tools are indistinct. (center, moderate)
- claude-opus-5.5: Three workers crouch tightly together on and around the right rail in a staged-looking group, and their limbs and boots blend together at the base. (middle-right, weak)
- gemini-3.1-pro-preview: The workers appear to be clipping into or merging with the steel rails rather than resting realistically on the ground around them. (bottom-right, moderate)

**background_clutter**: score 4, raised in 3/9 calls, at middle-left, top-right

- gpt-6-sol: Equipment along the distant wall is indistinct and hard to identify. (middle-left, weak)
- gpt-6-sol: Distant equipment along the wall is indistinct and visually muddled. (top-right, weak)
- gemini-3.1-pro-preview: The tools, cabinets, and equipment lining the left wall inside the building lack any fine detail and are rendered as indistinct, smoothed-over blobs. (middle-left, moderate)

## y-group-R-3.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.95

**track_geometry**: score 14, raised in 3/9 calls, at center, bottom-right

- gemini-3.1-pro-preview: The tracks entering the shed merge and disappear into the flat floor texture in inconsistent ways, and the inspection pits lack proper, crisp geometric definition and depth. (center, strong)
- gemini-3.1-pro-preview: The curved tracks in the foreground do not align properly with the straight tracks and maintenance pits inside the shed; the right track seems to point towards the solid concrete between openings. (center, strong)
- gemini-3.1-pro-preview: The rail underneath the group of three workers appears to abruptly end or melt into the knee of the worker on the right. (bottom-right, strong)
- gemini-3.1-pro-preview: The curved tracks in the foreground simply fade and disappear into the flat concrete apron instead of connecting to the straight tracks visible inside the depot. (center, strong)

**people_anatomy**: score 12, raised in 3/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: In the group of workers on the right, the rightmost worker's arm ends in an undefined blob instead of a recognizable hand, and the middle worker's lower body anatomy is vaguely defined and blends into the surrounding gear. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the solitary worker on the left track merge indistinctly into a blurry mass with the rail and the tools he is supposedly holding. (bottom-left, moderate)
- gemini-3.1-pro-preview: The workers on the right have malformed lower bodies; the worker in the yellow jacket has legs that merge into a single indistinct shape, and the rightmost worker's leg is anatomically incorrect. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower body of the worker in the yellow high-visibility jacket merges nonsensically with the tools and bags around his waist and legs. (bottom-right, moderate)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The zigzag bracing within the roof trusses features lines that merge, disappear randomly, and have inconsistent thickness, which is physically impossible for a real structural steel framework. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal bracing struts in the roof structure are inconsistent, with some appearing to not connect to the main beams logically. (top-center, moderate)
- gemini-3.1-pro-preview: The diagonal braces within the steel roof trusses are arranged chaotically, crisscrossing randomly rather than following a logical, structurally sound repeating pattern. (top-center, strong)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at bottom-right, middle-right, bottom-left

- gpt-6-sol: The workers’ hands and the small items at the rail are hard to distinguish, leaving some detail ambiguous. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and tools overlap the rails, making the exact task difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the solitary worker and the tool he is holding are rendered as indistinguishable, blurry blobs. (bottom-left, moderate)
- gemini-3.1-pro-preview: The brown bag or equipment resting on the ground next to the lone worker is a smooth, shapeless blob lacking defining features or straps. (bottom-left, moderate)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The tools and bags resting on the ground near the group of three workers are rendered as smooth, shapeless blobs without distinct features, straps, or fastenings. (bottom-right, strong)

## y-group-R-4.jpg: mean P(AI) 0.40 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.20
- openai/gpt-6-sol: 0.06 / 0.05 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 1.00

**people_anatomy**: score 12, raised in 3/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: The faces and hands of the three workers are distorted and blob-like; the rightmost worker has an unrecognizable, fleshy facial area and asymmetrical ear protection. (bottom-right, strong)
- gemini-3.1-pro-preview: The workers in the group of three have distorted, indistinct hands that appear to melt into the rails, and the furthest right worker has a helmet fused unnaturally with their face and ear protection. (bottom-right, strong)
- gemini-3.1-pro-preview: The single worker's hands are formless blobs lacking fingers, appearing to merge seamlessly into the concrete and track groove. (bottom-left, strong)
- gemini-3.1-pro-preview: The three workers are fused together into an amorphous mass, with indistinct, melting limbs and gear that cannot be clearly separated into distinct individuals. (bottom-right, strong)

**track_geometry**: score 11, raised in 2/9 calls, at center, bottom-right, bottom-left

- gemini-3.1-pro-preview: The yellow painted lines and concrete edges defining the inspection pits inside the shed are wavy and fail to follow correct, straight perspective lines. (center, moderate)
- gemini-3.1-pro-preview: The rails of the track near the group of three workers merge into a single indistinct line, cross each other nonsensically, and disappear into the concrete. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner rail of the left track abruptly ends or merges with the concrete before it reaches the crouched worker. (bottom-left, strong)
- gemini-3.1-pro-preview: The curved tracks in the foreground dead-end on the concrete apron and fail to connect logically to the straight tracks and maintenance pits inside the depot. (center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-right, bottom-left, center

- gpt-6-sol: The workers' hands and small tools are difficult to distinguish clearly, leaving some local detail ambiguous. (bottom-right, weak)
- gpt-6-sol: Hands and equipment where the three workers meet the rail are difficult to distinguish and look slightly merged. (bottom-right, weak)
- gemini-3.1-pro-preview: The worker's hands end in featureless dark masses without discernible tools, and an unexplained, shapeless dark object rests on the track beside them. (bottom-left, strong)
- gemini-3.1-pro-preview: The object sitting in the middle maintenance pit inside the depot is an indistinct, nonsensical blob of orange and grey parts rather than a recognizable piece of equipment. (center, moderate)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal bracing lines within the roof truss structure intersect nonsensically, bend, and merge into one another. (top-center, strong)
- gemini-3.1-pro-preview: The structural beams of the roof trusses in the background intersect randomly and do not form a logical, physical weight-bearing pattern. (top-center, strong)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: An undefined, brown, box-like object appears seamlessly melded into the leg and hip area of the leftmost worker in the group of three. (bottom-right, strong)

## y-group-R-5.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.06
- anthropic/claude-opus-5.5: 0.30 / 0.68 / 0.68
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 21, raised in 5/9 calls, at bottom-left, bottom-right, middle-left, middle-right, center

- claude-opus-5.5: Left track's two rails curve in from the lower edge but do not form a consistent gauge or connect to any track in the depot; they seem to fade into the paved floor without a logical route. (bottom-left, moderate)
- claude-opus-5.5: Right rails run diagonally toward the upper right and do not clearly link to the inspection-pit tracks in the depot, making the layout ambiguous. (bottom-right, moderate)
- claude-opus-5.5: Left grooved tram rails curve but converge oddly toward the center maintenance pits; the inner rail and outer rail spacing varies and the tracks don't clearly connect to the pit tracks in the depot (bottom-left, moderate)
- claude-opus-5.5: Right track pair curves away toward right side with no clear continuation; tracks seem to end into flat concrete near the pits (bottom-right, moderate)

**tools_or_small_objects**: score 13, raised in 8/9 calls, at middle-left, bottom-right, center, bottom-left

- gpt-6-sol: The tool and hands beside the lone worker are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The equipment and workers’ hands around the right-hand rail are difficult to distinguish precisely. (bottom-right, weak)
- claude-opus-5.5: Tool bag beside left worker is somewhat indistinct and blob-like (middle-left, weak)
- claude-opus-5.5: The bags or tools beside the workers are vague blobs with no readable structure. (center, weak)

**people_anatomy**: score 12, raised in 5/9 calls, at middle-right, bottom-right

- gpt-6-sol: The three crouching workers' arms and legs overlap, making some limb boundaries ambiguous. (middle-right, weak)
- claude-opus-5.5: The three workers huddled together have hard-to-separate limbs and overlapping bodies; the hands and the tools at the rail lack crisp, coherent detail. (middle-right, moderate)
- gemini-3.1-pro-preview: The legs and lower bodies of the three workers grouped together merge into one another and into the ground in an anatomically impossible way. (bottom-right, strong)
- gemini-3.1-pro-preview: The group of three workers blends together incoherently; the worker in the orange vest on the far right has legs that merge into a dark, formless shadow rather than distinct boots or limbs. (bottom-right, strong)

**buildings**: score 9, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The structural beams and framing within the skylights form chaotic, criss-crossing zig-zags that lack architectural coherence or logic. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal metal beams in the roof trusses intersect chaotically, with some beams ending abruptly, changing thickness, or merging into others without coherent structural joints. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal bracing in the metal roof trusses is inconsistent and structurally unsound, with struts forming random patterns and lines that break or fail to connect at the joints. (top-center, strong)

**composition_or_staging**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric staged stock-footage look with workers placed neatly on each branch; video-frame quality with lens flare (whole-image, weak)
- claude-opus-5.5: The scene is a symmetric, stock-like staging of workers posed on two branching tracks, which is typical of generated video frames. (whole-image, weak)
- claude-opus-5.5: Highly symmetric staged stock-footage-like scene with workers placed symmetrically on two branches (whole-image, weak)

## y-group-R-6.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.68 / 0.65 / 0.62
- google/gemini-3.1-pro-preview: 0.70 / 0.99 / 0.98

**track_geometry**: score 18, raised in 6/9 calls, at bottom-left, bottom-right, center, middle-left

- claude-opus-5.5: Left grooved rails curve smoothly but the inner rail and outer rail converge/diverge inconsistently with the depot track pits ahead; the curve doesn't clearly connect to any pit track (bottom-left, moderate)
- claude-opus-5.5: Right branch rails curve toward the center but then fade/merge into concrete near the pole without a clear connection to the inspection pits (bottom-right, moderate)
- claude-opus-5.5: Left grooved rail pair curves away; inner rail of left track lacks a matching partner geometry, rails seem to diverge oddly from the depot pits without clear connection (bottom-left, moderate)
- claude-opus-5.5: Tracks leading into inspection pits in the background don't clearly connect to the foreground curved rails; the central floor area has no rails linking them (center, moderate)

**people_anatomy**: score 17, raised in 3/9 calls, at bottom-right, bottom-left, bottom-center

- gemini-3.1-pro-preview: Worker legs lack structure. (bottom-right, moderate)
- gemini-3.1-pro-preview: The worker on the left track appears to have a lower body that melts into the concrete, with no distinct legs visible. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower half of the worker in the yellow jacket kneeling on the right track is a chaotic jumble of shapes rather than distinct legs and boots. (bottom-center, strong)
- gemini-3.1-pro-preview: The worker in the orange jacket (middle of the right group) has an abnormally stubby lower body and a misshapen helmet. (bottom-right, strong)

**tools_or_small_objects**: score 7, raised in 6/9 calls, at bottom-right, middle-right, middle-left

- gpt-6-sol: The workers' hands and small objects beside the rails are difficult to distinguish at this resolution. (bottom-right, weak)
- gpt-6-sol: The workers' hands and small objects beside the rails are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small tools at the rail are difficult to distinguish clearly. (bottom-right, weak)
- claude-opus-5.5: Tool held by left worker is vague, blending into the ground (middle-left, weak)

**buildings**: score 7, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: Roof struts intersect randomly. (top-center, moderate)
- gemini-3.1-pro-preview: The steel truss structure of the roof features intersecting and disappearing diagonal beams that do not form a coherent engineering framework. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal metal struts in the roof truss structure are disjointed; some pieces appear to float or connect at impossible angles without completing a coherent frame. (top-left, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at middle-right, center

- claude-opus-5.5: Workbenches and cabinets along walls are blurred, smeared shapes without discernible detail (middle-right, weak)
- gemini-3.1-pro-preview: The inspection pits inside the shed are indistinct dark shapes that do not align logically with the tracks entering the building. (center, moderate)

## y-group-R-7.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.98

**tools_or_small_objects**: score 11, raised in 4/9 calls, at bottom-right, center

- gpt-6-sol: The workers' hands and the equipment beside the right rail are difficult to distinguish and look somewhat muddled. (bottom-right, weak)
- gpt-6-sol: The tools and hands around the right rail are hard to distinguish individually, leaving some shapes ambiguous. (bottom-right, weak)
- gemini-3.1-pro-preview: There is a small, structurally nonsensical cart-like object sitting across the tracks in the middle distance inside the shed. (center, strong)
- gemini-3.1-pro-preview: The object lying on the ground next to the rightmost kneeling worker is an indistinct, formless brown blob rather than a discernible tool or bag. (bottom-right, strong)

**track_geometry**: score 6, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: Inside the shed, the tracks and inspection pits lose structural integrity, with rail lines merging, bending at odd angles, and disappearing randomly. (center, strong)
- gemini-3.1-pro-preview: Rails are visible over the middle maintenance pit inside the shed, but there are no tracks leading to this pit across the solid concrete apron in the foreground. (center, strong)

**people_anatomy**: score 6, raised in 2/9 calls, at bottom-right, middle-right

- gemini-3.1-pro-preview: The rightmost worker's lower leg and boot seem to merge indistinguishably into the ground and the object next to him. (bottom-right, moderate)
- gemini-3.1-pro-preview: The face of the middle worker in the group of three is highly distorted, appearing to merge into a solid yellow shape connected to his collar. (middle-right, moderate)
- gemini-3.1-pro-preview: The left arm of the leftmost worker in the group of three looks unnaturally smooth, and his hand blends seamlessly into the surface of the track. (middle-right, moderate)

**lighting_or_shadows**: score 5, raised in 1/9 calls, at bottom-left, whole-image

- gemini-3.1-pro-preview: There is a large, distinct, cross-shaped shadow on the ground that has no apparent physical object casting it. (bottom-left, strong)
- gemini-3.1-pro-preview: The workers on the right cast distinct shadows to the bottom right, but the worker on the left does not have a matching directional shadow, just a diffuse dark patch beneath him. (whole-image, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: Several diagonal support beams in the roof trusses inside the shed do not connect logically to the main framework or just fade away. (top-center, moderate)

## y-group-R-8.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.04 / 0.07 / 0.12
- anthropic/claude-opus-5.5: 0.75 / 0.75 / 0.63
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 27, raised in 6/9 calls, at bottom-left, center, bottom-right

- claude-opus-5.5: Left curved embedded rails converge oddly; the inner rail pair widens and curves without consistent gauge, and the right curve track's rails diverge inconsistently near the bottom (bottom-left, moderate)
- claude-opus-5.5: Tracks entering the depot pits do not clearly connect to the curved tracks in the foreground; rails fade into pavement ambiguously (center, moderate)
- claude-opus-5.5: Left curved track rails converge oddly; the inner rail curves toward the worker and seems to merge with the outer track rails without a clear switch or consistent gauge. (bottom-left, moderate)
- claude-opus-5.5: Right branch rails curve inconsistently; the rail near the group appears to run into the floor with no clear connection to the pit tracks in the depot. (bottom-right, moderate)

**people_anatomy**: score 10, raised in 5/9 calls, at middle-left, middle-right, bottom-right

- gpt-6-sol: The left worker's hand and the object beside it are indistinct, making their exact interaction hard to read. (middle-left, weak)
- claude-opus-5.5: Crouching workers' bodies and limbs blend together; hands and tools ambiguous (middle-right, weak)
- claude-opus-5.5: The three crouching workers' limbs and tools blend together; the hands and the bags on the ground are indistinct blobs. (middle-right, moderate)
- gemini-3.1-pro-preview: The head and face of the worker on the left side of the group of three are distorted and melted. (bottom-right, strong)

**buildings**: score 10, raised in 4/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is mostly coherent, but the bracing members merge and repeat somewhat irregularly toward the vanishing point. (top-center, weak)
- gemini-3.1-pro-preview: The metal trusses supporting the shed roof are irregular, with diagonal beams that connect at random points or disappear. (top-center, strong)
- gemini-3.1-pro-preview: The steel roof trusses exhibit impossible geometry, with diagonal beams that bend, merge improperly, or terminate in mid-air. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal bracing beams in the roof structure intersect chaotically and do not form a physically coherent truss system, with several lines ending abruptly or merging nonsensically. (top-center, strong)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at bottom-left, middle-right, middle-left, bottom-right

- gpt-6-sol: The left worker's hands and the small objects beside the rail are hard to distinguish precisely. (bottom-left, weak)
- gpt-6-sol: The small objects around the kneeling workers' hands are difficult to distinguish and partly merge together. (middle-right, weak)
- gpt-6-sol: The left worker's hand, tool, and nearby bag are difficult to distinguish precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The pile of equipment the group of three workers is interacting with is an undefined, indistinct blob. (bottom-right, moderate)

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at middle-right, whole-image

- gpt-6-sol: The workers' hands and equipment at the rail junction look somewhat indistinct. (middle-right, weak)
- claude-opus-5.5: Has a cinematic film-like grade with soft uniform grain and a smooth concrete surface, typical of video-generation output. (whole-image, weak)
- claude-opus-5.5: Uniform film-like grain and soft, cinematic color grading, typical of generated video frames. (whole-image, weak)
- gemini-3.1-pro-preview: When viewed closely, the image has a smooth, slightly blurry, and painterly texture typical of AI-generated images, lacking fine photographic grain. (whole-image, moderate)
