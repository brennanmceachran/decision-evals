# Realism check: final-r6

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 719 | 66/70 |
| people_anatomy | 560 | 64/70 |
| tools_or_small_objects | 385 | 65/70 |
| texture_noise_or_sharpness | 195 | 56/70 |
| buildings | 170 | 39/70 |
| background_clutter | 164 | 52/70 |
| people_pose_or_placement | 141 | 39/70 |
| overhead_wires_or_poles | 102 | 34/70 |
| people_clothing_or_gear | 83 | 29/70 |
| composition_or_staging | 71 | 36/70 |
| camera_or_windscreen | 68 | 27/70 |
| switch_mechanism | 29 | 11/70 |
| text_signage_or_markings | 14 | 8/70 |
| lighting_or_shadows | 12 | 6/70 |
| reflections_or_wet_surfaces | 7 | 4/70 |

## u-group-L-1.jpg: mean P(AI) 0.59 (fails)

- anthropic/claude-opus-5.5: 0.80 / 0.75 / 0.70
- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 16, raised in 4/9 calls, at middle-left, center, middle-right, bottom-left

- claude-opus-5.5: Worker in orange vest has helmet with ear defenders merged oddly; hands and tools blend into a dark mass near the rail (middle-left, moderate)
- gemini-3.1-pro-preview: The lower half of the worker kneeling on the right track is an indistinct blob, lacking defined legs or feet. (center, strong)
- gemini-3.1-pro-preview: The worker kneeling on the right track has severely malformed lower legs, with small, indistinct boot-like shapes appearing to be attached directly to the back of the thighs or knees. (middle-right, strong)
- gemini-3.1-pro-preview: The boots and lower legs of the worker closest to the camera on the left track are melted together into a large, indistinct lump that blends strangely with the ground. (bottom-left, strong)

**track_geometry**: score 14, raised in 6/9 calls, at center, middle-right

- claude-opus-5.5: Left track pair: inner rail of left track and the right track diverge oddly; the left track's right rail curves toward center without a clear switch or junction connecting to the right track, tracks appear to fork without a coherent turnout mechanism (center, moderate)
- claude-opus-5.5: Two grooved tram tracks diverge with no visible switch or connection between them; the left track runs into the left arch and the right track into the right arch, while the paved area between lacks any logical junction (center, moderate)
- claude-opus-5.5: The right-hand track's rails converge and merge oddly toward the far arch, and the cobbled infill between the rails has inconsistent edges. (middle-right, moderate)
- gemini-3.1-pro-preview: The rails of the left track seem to disappear into the ground near the workers rather than continuing towards a logical junction or switch. (center, strong)

**tools_or_small_objects**: score 13, raised in 8/9 calls, at bottom-left, bottom-center

- claude-opus-5.5: Bags/kit on ground are amorphous, indistinct shapes without clear straps or features (bottom-left, weak)
- claude-opus-5.5: The bags on the ground are amorphous, and the objects in the workers' hands are undefined blobs rather than recognizable tools (bottom-left, moderate)
- gpt-6-sol: The workers’ hands and the small objects around the left rail are hard to distinguish, leaving some fine detail ambiguous. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and equipment overlap and are difficult to distinguish precisely. (bottom-left, weak)

**texture_noise_or_sharpness**: score 10, raised in 7/9 calls, at whole-image, bottom-center, middle-right, bottom-right

- claude-opus-5.5: Smooth, painterly cobble textures and soft haze typical of generative video stills; cobbles repeat uniformly (whole-image, moderate)
- claude-opus-5.5: The cobblestone setts are plausibly rendered but become smeared and repetitive toward the edges (bottom-center, weak)
- claude-opus-5.5: The image has a soft, slightly smeared texture across the cobbles and bricks, lacking crisp fine detail. (whole-image, weak)
- gpt-6-sol: The lone worker’s hands and nearby rail hardware look soft rather than clearly defined. (middle-right, weak)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: Multiple poles rise but carry no visible overhead wires or brackets, poles are plain sticks (top-center, moderate)
- claude-opus-5.5: Several poles stand without overhead wires attached and are placed somewhat arbitrarily (top-center, weak)
- claude-opus-5.5: Several tall poles stand across the depot yard, but no overhead wires or span cables are visible between them, which is odd for a tram depot. (top-center, moderate)

## u-group-L-10.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.20 / 0.12 / 0.15
- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 12, raised in 6/9 calls, at middle-left, bottom-left, center, bottom-right

- gpt-6-sol: The overlapping workers' hands and legs are difficult to distinguish at this resolution. (middle-left, weak)
- gpt-6-sol: The workers’ hands and equipment are hard to distinguish where their bodies overlap. (bottom-left, weak)
- gpt-6-sol: The right worker’s lower legs and nearby dark equipment are difficult to distinguish. (center, weak)
- gemini-3.1-pro-preview: The worker sitting furthest back in the group has a highly distorted and featureless face and head area. (bottom-left, strong)

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, bottom-left, bottom-right

- gemini-3.1-pro-preview: The point where the two tracks diverge lacks any physical switching mechanism (like points or a frog); the inner rails simply intersect and overlap each other in a structurally impossible way. (bottom-center, strong)
- gemini-3.1-pro-preview: The left-most rail of the left track simply fades away and disappears into the cobblestone texture in the foreground. (bottom-left, strong)
- gemini-3.1-pro-preview: The two rails of the right track are set extremely close together, creating an implausibly narrow gauge for a standard railway depot. (bottom-right, strong)

**texture_noise_or_sharpness**: score 8, raised in 4/9 calls, at whole-image, center, bottom-center

- gpt-6-sol: Fine detail is somewhat soft, particularly on the distant building and workers. (whole-image, weak)
- gemini-3.1-pro-preview: The cobblestone pattern between the tracks morphs irregularly into smooth, flat ground with no logical structural transition or edging. (center, moderate)
- gemini-3.1-pro-preview: The lines separating the cobblestones appear to continue directly over the surface of the rails in several places. (bottom-center, moderate)
- gemini-3.1-pro-preview: When zoomed in, the image exhibits a pervasive 'painterly' or smeared texture, especially in the brickwork and cobbles, lacking real photographic grain and sharp micro-details. (whole-image, strong)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The bags or tools resting on the ground next to the group of workers appear as formless, melting blobs rather than distinct objects. (bottom-left, moderate)
- gemini-3.1-pro-preview: The dark object resting on the cobbles next to the kneeling worker is an amorphous blob, completely lacking defined features like straps, seams, zippers, or recognizable tools. (bottom-right, strong)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The hard hats worn by the group of workers appear misshapen, lacking sharp edges or clear structural details, and look somewhat melted. (bottom-left, strong)

## u-group-L-2.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.72 / 0.75 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 22, raised in 5/9 calls, at bottom-center, center, middle-right, bottom-left, bottom-right

- claude-opus-5.5: Left track rails converge oddly; the right rail of the left track and the left track's gauge appear inconsistent, and the two tracks have no visible switch connecting them despite diverging layout (bottom-center, moderate)
- claude-opus-5.5: Left track: the left rail curves from the arch toward the workers, but the right rail of that pair appears to run oddly; the inner rail between the workers seems inconsistent in gauge and merges with paved surface near the bottom-center (center, moderate)
- claude-opus-5.5: Right track pair heads to the right arch with cobbles between, but the rail gauge narrows and widens unevenly, and the cobble strips beside the rails do not align with the rail edges (middle-right, moderate)
- gemini-3.1-pro-preview: Where the two sets of tracks converge, the steel rails simply fade and disappear into the flat pavement instead of forming a proper mechanical switch or frog. (center, strong)

**people_anatomy**: score 12, raised in 3/9 calls, at middle-right, bottom-left

- gemini-3.1-pro-preview: The legs and lower body of the lone worker on the right track merge indistinctly into a muddy mass with the ground and rail, lacking anatomical definition. (middle-right, strong)
- gemini-3.1-pro-preview: The middle worker in the group of three appears to have no distinct legs, looking as though their lower body is melting into the ground. The left worker also has malformed, stubby legs. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower body of the single worker on the right track is highly distorted, appearing to have an extra appendage or kneeling on a strange, fleshy lump that resembles another leg. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right has severely mangled lower body anatomy; the legs appear to be melting into a jumbled mass without clear structure or logical joints. (middle-right, strong)

**texture_noise_or_sharpness**: score 10, raised in 6/9 calls, at middle-right, top-left, bottom-right, bottom-center, whole-image, center

- gpt-6-sol: The kneeling worker and nearby equipment are somewhat soft, making small details hard to verify. (middle-right, weak)
- gpt-6-sol: The distant arch and some masonry details are hazy and hard to resolve, though this could be photographic softness. (top-left, weak)
- claude-opus-5.5: Cobblestones in track bed are repetitive and smoothly rendered, slightly painterly (bottom-right, weak)
- claude-opus-5.5: Cobblestone texture is smooth and uniformly patterned, with cobbles softening into mush near the frame edges (bottom-center, moderate)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at bottom-center, middle-left, bottom-left

- gpt-6-sol: The workers' hands and the small items at the rail are too indistinct to identify clearly. (bottom-center, weak)
- claude-opus-5.5: Bags on ground are blobby, undefined shapes; hands of workers merge with rail without clear tools (middle-left, moderate)
- gemini-3.1-pro-preview: The dark bags or pieces of equipment resting on the ground next to the leftmost worker appear as melted, shapeless blobs without functional details. (bottom-left, moderate)
- gemini-3.1-pro-preview: The dark object (possibly a bag) resting on the ground next to the leftmost worker is a shapeless, muddy blob with indistinguishable features. (bottom-left, moderate)

**background_clutter**: score 7, raised in 3/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The stack of materials in the background looks like a singular, solid lump with horizontal striations rather than a pile of distinct, individual steel rails. (center, moderate)
- gemini-3.1-pro-preview: The stacked pile of rails or metal beams in the background center merges into a solid, blurry block at the ends rather than showing individual items. (center, strong)
- gemini-3.1-pro-preview: The stack of materials (possibly rails or lumber) in the background is an indistinct, brown, smudged texture without clearly defined individual pieces or ends. (middle-left, moderate)

## u-group-L-3.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- openai/gpt-6-sol: 0.06 / 0.07 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**people_anatomy**: score 15, raised in 5/9 calls, at middle-right, bottom-center, bottom-left

- gpt-6-sol: The distant worker's lower legs blend into the dark track area and are not clearly separable. (middle-right, weak)
- gpt-6-sol: The distant worker's hands and lower legs are indistinct, making their exact pose hard to resolve. (middle-right, weak)
- gemini-3.1-pro-preview: The worker kneeling on the right track has lower legs that melt and blend indistinguishably into the rails and ground. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the worker on the left in the yellow jacket are rendered as undefined, blurry blobs without distinct fingers or tools. (bottom-center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-center, middle-left, center, bottom-left

- gpt-6-sol: The workers' hands and equipment at the left rail are hard to distinguish, leaving some uncertainty about their exact task. (bottom-center, weak)
- gpt-6-sol: The equipment between the three workers is difficult to distinguish and looks somewhat muddled. (middle-left, weak)
- gemini-3.1-pro-preview: The stack of long materials (likely meant to be rails or pipes) in the background is poorly defined, appearing as an amorphous, textured block rather than distinct, separate pieces. (center, moderate)
- gemini-3.1-pro-preview: There is an amorphous, vaguely brown blob sitting on the rail between the two leftmost workers that lacks the defined shape of any recognizable tool or bag. (bottom-left, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at middle-left, top-center

- gemini-3.1-pro-preview: The tall pole standing in front of the brick building has no defined base and appears to just fade into the ground surface. (middle-left, moderate)
- gemini-3.1-pro-preview: Several vertical poles have inconsistent thickness along their length and lack clear, logical connection points to the ground. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at whole-image, top-left

- gemini-3.1-pro-preview: The image has a pervasive soft, painterly quality, with fine details like cobblestones and brickwork looking smudged rather than sharp. (whole-image, moderate)
- gemini-3.1-pro-preview: There are strange, smudgy, and slightly circular visual artifacts overlaying the building and sky area that do not resemble natural lens flare or dirt on a window. (top-left, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Where the left and right tracks should intersect and diverge, there are no steel rails, frogs, or switch mechanisms; it is just a smooth, flat gray patch. (center, strong)

## u-group-L-4.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.08 / 0.06 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 18, raised in 3/9 calls, at bottom-left, middle-right, middle-left

- gemini-3.1-pro-preview: The legs and lower bodies of the three workers blend together into an indistinguishable, physically impossible mass. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker kneeling on the right track has a distorted, blob-like head, and their legs appear to merge directly into the metal rail. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right track has a malformed lower body that appears to melt into a dark, indistinct blob on the rail, with no clear legs or feet visible. (middle-right, strong)
- gemini-3.1-pro-preview: The leftmost worker in the group of three has legs that lack defined structure and seem to blend unnaturally into the ground and surrounding shadows. (middle-left, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-left, center

- gpt-6-sol: The workers’ hands and the small items near the rail are difficult to make out precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The stack of steel rails lying on the ground in the background is wavy, uneven, and melted-looking, lacking the rigid straightness of real rails. (center, strong)
- gemini-3.1-pro-preview: Despite appearing to work on the tracks, the workers' hands are rendered as formless shapes, and there are no distinct, recognizable tools being held or used. (middle-left, moderate)
- gemini-3.1-pro-preview: The stack of long materials (which look like pipes or rails) in the background is blurry, with poorly defined, melded ends. (center, moderate)

**texture_noise_or_sharpness**: score 7, raised in 5/9 calls, at center, whole-image, middle-left

- gpt-6-sol: The workers’ hands and the small area where they meet the rail are too soft to inspect closely. (center, weak)
- gpt-6-sol: The image has a soft, hazy look that obscures some fine details, though this is also plausible for a photograph. (whole-image, weak)
- gpt-6-sol: The workers' hands and the exact spot they are working on are hard to distinguish; that ambiguity could conceal generated details, though distance also explains it. (middle-left, weak)
- gemini-3.1-pro-preview: The transition from the cobblestone texture between the tracks to the smooth gray surface further back is highly smudged and lacks a realistic boundary. (center, moderate)

**track_geometry**: score 7, raised in 3/9 calls, at bottom-left

- gemini-3.1-pro-preview: The inner rail of the left track disappears into a smudge beneath the group of workers and does not re-emerge logically. (bottom-left, moderate)
- gemini-3.1-pro-preview: The rails in the foreground, particularly on the left, appear slightly wavy and inconsistent in width, and the far left rail seems to fade into the cobblestones near the bottom edge. (bottom-left, moderate)
- gemini-3.1-pro-preview: The cobblestone paving between and around the rails is highly irregular, with individual bricks melting together, changing size arbitrarily, and lacking a coherent structural pattern. (bottom-left, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The vertical pole located between the tracks near the building appears to sprout directly from the smooth ground without a proper base or mounting. (top-center, moderate)
- gemini-3.1-pro-preview: There are thin grey poles in the background that appear to go straight into the ground without proper structural bases, and there are no visible wires attached to them. (top-center, moderate)

## u-group-L-5.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.20
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 13, raised in 4/9 calls, at middle-left, middle-right

- gpt-6-sol: The workers' hands and tools where they meet the rail are hard to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The worker furthest to the right in the left group (wearing red/orange) lacks a clearly defined head, and their body structure merges unnaturally into the ground. (middle-left, strong)
- gemini-3.1-pro-preview: The worker on the right track has unrecognizable, mangled legs that do not form a coherent kneeling pose and blend into dark blobs. (middle-right, strong)
- gemini-3.1-pro-preview: The worker kneeling on the right track has severely malformed legs and feet. Instead of distinct limbs and boots, the lower body is a jumbled, indistinct blob of shapes. (middle-right, strong)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at center, bottom-left

- gpt-6-sol: The workers' hands and the small area they are working on are too soft to make out clearly; this could conceal generated details, though distance also explains it. (center, weak)
- gpt-6-sol: The workers' hands and the small track hardware are indistinct, leaving some details hard to verify. (center, weak)
- gemini-3.1-pro-preview: The boundary between the textured cobblestones and the smooth grey pavement is amorphous and morphs unnaturally, rather than showing a distinct structural edge. (center, moderate)
- gemini-3.1-pro-preview: The cobblestone texture on the ground unnaturally blends into and flows over the metal rails in several places, indicating poor separation of distinct objects by the generative model. (bottom-left, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at center, bottom-center

- gemini-3.1-pro-preview: The inner rail of the left track appears to fade away and disappear into the smooth grey pavement texture in the mid-ground rather than continuing towards the building. (center, moderate)
- gemini-3.1-pro-preview: The layout of the railway tracks is completely nonsensical. The rails merge and cross over each other in impossible ways, and the track branching to the right has an impossibly narrow gauge that would not fit any standard train. (bottom-center, strong)

**background_clutter**: score 5, raised in 2/9 calls, at center, top-center

- gemini-3.1-pro-preview: The stack of materials (which appears to be rails or pipes) lying on the ground between the tracks is an unstructured, blurry mass of horizontal lines that lack defined ends or three-dimensional form. (center, strong)
- gemini-3.1-pro-preview: The large stack of rails or pipes in the middle distance melts together into a solid, textured blob rather than showing distinct, individual items. (top-center, moderate)

**people_pose_or_placement**: score 5, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The group of three workers are kneeling directly on top of the rails, but the rails seem to disappear or melt into the ground directly underneath them and their tools are blurry and undefined. (middle-left, moderate)
- gemini-3.1-pro-preview: The lower half of the worker on the right track dissolves into a shapeless dark mass that merges indistinguishably with the cobblestones. (center, strong)

## u-group-L-6.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.08 / 0.06 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 19, raised in 3/9 calls, at bottom-right, middle-left, middle-right

- gemini-3.1-pro-preview: The worker on the right track has a lower body that melts completely into the tracks and ground, lacking identifiable legs or realistic posture. (bottom-right, strong)
- gemini-3.1-pro-preview: The far left worker's lower body appears to sink into or blend seamlessly with the rails, with no defined legs or feet visible. (middle-left, strong)
- gemini-3.1-pro-preview: A detached work boot appears to be lying on the ground next to the leg of the middle kneeling worker on the left track. (middle-left, strong)
- gemini-3.1-pro-preview: The leftmost worker on the left track is missing the lower half of his body, appearing to merge seamlessly into the ground. (middle-left, strong)

**track_geometry**: score 10, raised in 3/9 calls, at middle-left, middle-right, center

- gemini-3.1-pro-preview: The rails leading into the left arch waver and lose their structural integrity and parallel alignment as they go further back. (middle-left, moderate)
- gemini-3.1-pro-preview: The left rail of the right-hand track curves abruptly and appears to pass directly into or through the kneeling worker's body. (middle-right, strong)
- gemini-3.1-pro-preview: The rails of the right track are not parallel and have a wobbly geometry as they curve towards the background. (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks fail to intersect; they simply disappear into the smooth asphalt pavement where a crossing (frog) must physically exist. (center, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image, bottom-right

- gpt-6-sol: Fine details, particularly the workers' hands and tools, are soft enough that they cannot be checked closely for anomalies. (whole-image, weak)
- gpt-6-sol: The subdued, slightly soft image makes fine details such as the workers’ hands difficult to verify. (whole-image, weak)
- gemini-3.1-pro-preview: The cobblestone pattern between the rails appears flat, repetitive, and somewhat painted-on, lacking the irregular 3D depth and shading of actual paving stones. (bottom-right, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of metal rails or pipes in the background has ends that melt together into an undefined, solid mass rather than individual distinct objects. (center, moderate)
- gemini-3.1-pro-preview: The objects being held and used by the workers appear as indistinct, formless metallic blobs rather than identifiable, structured hand tools. (center, moderate)

**buildings**: score 3, raised in 2/9 calls, at top-center, top-right

- gpt-6-sol: Some distant arched windows look repetitive and indistinct, which could raise slight suspicion of generated detail. (top-center, weak)
- gemini-3.1-pro-preview: The dark archway on the right contains undefined, nonsensical architectural structures, and the track entering it abruptly disappears into the darkness. (top-right, moderate)

## u-group-L-7.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.06 / 0.03 / 0.06
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.99

**people_anatomy**: score 11, raised in 2/9 calls, at bottom-right, bottom-left, bottom-center, middle-right

- gemini-3.1-pro-preview: The lower half of the worker on the right is deformed, with stubby, disproportionate legs that appear to melt into the track and cobblestones. (bottom-right, strong)
- gemini-3.1-pro-preview: The leftmost worker in the yellow jacket has a left leg and boot that appear unnaturally articulated, almost detached from the body where they touch the ground. (bottom-left, moderate)
- gemini-3.1-pro-preview: The kneeling worker in the orange jacket has malformed lower limbs, appearing to have a confusing jumble of boots or feet, with one pointing backwards at an unnatural angle. (bottom-center, strong)
- gemini-3.1-pro-preview: The worker kneeling on the right track has an anatomically incorrect lower body, with a black boot sticking straight out to the side that doesn't align with a human kneeling posture. (middle-right, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at bottom-left, bottom-right, bottom-center

- gpt-6-sol: The workers’ hands and equipment at the left rail are difficult to distinguish in the dark, crowded area. (bottom-left, weak)
- gpt-6-sol: The workers' hands and small equipment overlap and are difficult to distinguish clearly. (bottom-left, weak)
- gemini-3.1-pro-preview: The worker on the right track is holding indistinct, blob-like tools that blend seamlessly into his hands and the rail itself. (bottom-right, strong)
- gemini-3.1-pro-preview: Although the workers appear to be performing maintenance on the tracks, none are holding clearly defined tools; their hands merge into indistinct, muddy shapes near the rails. (bottom-center, strong)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The rails of the left track have inconsistent width, and the inner rail shows a strange, blurry double-line artifact just below where the group of workers is kneeling. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner steel rail of the right-hand track loses its defined edge and seems to warp or blend into the adjacent cobblestones just below the worker. (bottom-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The workers’ hands and the small items beside the rail are hard to distinguish. (bottom-center, weak)
- gemini-3.1-pro-preview: The boundary between the patterned cobblestones and the smooth asphalt is muddy, with individual stones melting and losing their defined shapes as they transition into the flat surface. (bottom-center, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, center

- gpt-6-sol: Some distant windows and stacked materials have indistinct details. (top-center, weak)
- gemini-3.1-pro-preview: The stack of materials (likely metal rails or pipes) in the background center is wavy and lacks the rigid, straight lines expected of such objects. (center, moderate)

## u-group-L-8.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.06 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.95

**people_pose_or_placement**: score 8, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The lone worker's lower body appears to melt into the track and cobblestones; no defined legs or logical kneeling posture is visible. (middle-right, strong)
- gemini-3.1-pro-preview: A group of workers are huddled on the left track, but their poses are indistinct and one worker seems to blend into another. (middle-left, strong)
- gemini-3.1-pro-preview: The worker on the right track has a slightly strange posture, kneeling directly over the rails with an obscured right leg. (middle-right, moderate)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-left

- gpt-6-sol: The overlapping workers make some limbs and individual outlines difficult to distinguish at this distance. (middle-left, weak)
- gemini-3.1-pro-preview: The cluster of workers on the left track are merged together into an incoherent mass of limbs and clothing; the worker in the front right of this group appears to have a disjointed, red tube-like leg that does not connect logically to a body. (middle-left, strong)
- gemini-3.1-pro-preview: The group of workers is a confused amalgamation of limbs and torsos, making it impossible to distinguish individual bodies or anatomical structures clearly. (middle-left, strong)

**track_geometry**: score 7, raised in 2/9 calls, at middle-left, bottom-left, bottom-right

- gemini-3.1-pro-preview: The rails on the left track seem to disappear or melt into the cobblestones just in front of the group of workers, lacking clear definition or a visible switch mechanism. (middle-left, moderate)
- gemini-3.1-pro-preview: The left set of tracks merges in a highly unrealistic way; the inner rail simply vanishes into the ground before connecting to anything. (bottom-left, strong)
- gemini-3.1-pro-preview: The right set of tracks is unusually narrow, looking more like a miniature railway gauge than standard gauge. (bottom-right, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at middle-right, bottom-center

- gpt-6-sol: The right-hand worker’s hands and nearby dark equipment are difficult to distinguish, which could resemble generated-image smearing, though distance and low light also explain it. (middle-right, weak)
- gemini-3.1-pro-preview: The transition between the detailed cobblestone sections and the smooth ground is blurry, smudged, and lacks a realistic physical boundary. (bottom-center, moderate)
- gemini-3.1-pro-preview: The transition between the cobblestones and the smooth tarmac is muddy and lacks clear definition. (bottom-center, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-left, middle-right

- gpt-6-sol: The workers’ hands and small equipment merge into a dark, hard-to-identify cluster. (middle-left, weak)
- gpt-6-sol: The dark equipment beside the worker on the right is hard to identify precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The bags and equipment scattered around the left group of workers are rendered as formless, indistinct blobs rather than recognizable tools. (middle-left, moderate)

## u-group-L-9.jpg: mean P(AI) 0.57 (fails)

- anthropic/claude-opus-5.5: 0.75 / 0.75 / 0.80
- openai/gpt-6-sol: 0.07 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.70 / 0.98 / 0.99

**people_anatomy**: score 16, raised in 5/9 calls, at center, bottom-right, bottom-left, middle-right

- claude-opus-5.5: Workers' hands and tools are vague, blurry blobs with no distinct tool shapes at the rail (center, moderate)
- claude-opus-5.5: Hands of the central kneeling workers blur together near the rail; boots and legs somewhat merged in the middle worker (center, weak)
- gemini-3.1-pro-preview: Worker is missing lower legs, blending directly into track. (bottom-right, moderate)
- gemini-3.1-pro-preview: Workers have undefined, blob-like hands merging with the rails. (bottom-left, moderate)

**track_geometry**: score 15, raised in 6/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Left track pair: inner rail of left track curves strangely; three workers kneel across a gauge that seems inconsistent, with rails merging oddly near bottom-center and cobble pattern not matching rail flow (center, moderate)
- claude-opus-5.5: Tracks diverge from the camera position with no visible switch/frog mechanism connecting the two branches; rails just separate abruptly (bottom-center, moderate)
- claude-opus-5.5: Left track's right rail curves and appears to merge oddly; the two branches diverge without any visible switch/frog connecting them, tracks just run separately into arches yet layout suggests a junction with no mechanism (center, moderate)
- claude-opus-5.5: Left track rails converge oddly; the left rail curves toward a cobbled path while the right rail runs straight through the asphalt, and the gauge appears inconsistent near the kneeling workers (bottom-left, moderate)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at bottom-center, center, bottom-left

- gpt-6-sol: The workers’ hands and equipment at the left-hand rail are hard to distinguish, leaving some detail ambiguous. (bottom-center, weak)
- gpt-6-sol: The workers' hands and the small equipment between them are hard to distinguish, leaving their exact interaction unclear. (bottom-center, weak)
- gemini-3.1-pro-preview: Material pile lacks structure, appearing fused. (center, weak)
- gemini-3.1-pro-preview: The tools being used by the group of three workers are indistinct blobs of gray and brown, lacking the defined shapes of actual railway maintenance equipment. (bottom-left, strong)

**texture_noise_or_sharpness**: score 8, raised in 5/9 calls, at bottom-right, whole-image, center

- claude-opus-5.5: Cobblestone pattern smooth and repetitive with mushy edges near rails (bottom-right, weak)
- claude-opus-5.5: Soft, hazy, smoothed texture across cobbles and ground with painterly quality typical of generative video frames (whole-image, moderate)
- claude-opus-5.5: Overall soft, hazy rendering with smooth cobbles lacking crisp individual stone detail, typical of video-model frames (whole-image, moderate)
- gpt-6-sol: The workers' hands and equipment at the rail joint are difficult to distinguish. (center, weak)

**composition_or_staging**: score 4, raised in 3/9 calls, at whole-image, bottom-center

- claude-opus-5.5: Cinematic, soft hazy lighting with clean staging of workers in matching hi-vis, typical of AI-generated stock-style scenes (whole-image, weak)
- claude-opus-5.5: Scene closely resembles a trolley-problem setup: three people on one branch, one on the other, all kneeling on the rails at a fork, staged and symmetrical (whole-image, moderate)
- gpt-6-sol: The three-person group on one branch and lone worker on the other make an unusually tidy visual arrangement. (bottom-center, weak)

## u-two-L-1.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**tools_or_small_objects**: score 3, raised in 3/9 calls, at bottom-left, middle-left

- gpt-6-sol: The workers’ hands and the items between them are difficult to distinguish precisely. (bottom-left, weak)
- gpt-6-sol: The workers' hands and the object between them are hard to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are hard to distinguish clearly. (bottom-left, weak)

**people_pose_or_placement**: score 1, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The extended back leg of the worker in the orange jacket appears somewhat indistinct and dark, blending into the shadow and ground, which could look slightly unusual at first glance. (bottom-left, weak)

## u-two-L-10.jpg: mean P(AI) 0.20 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.30 / 0.99 / 0.05

**background_clutter**: score 6, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The pile of rails in the background resembles a single solid block with striped surface textures rather than individual stacked items. (top-center, strong)
- gemini-3.1-pro-preview: The yellow dumpster is misshapen, appearing melted and lacking clear structural edges or details. (top-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at center, middle-left, bottom-right

- gpt-6-sol: The workers' hands and the small object between them are difficult to resolve, leaving a little local ambiguity. (center, weak)
- gpt-6-sol: The workers’ hands and the object between them are too soft to identify clearly; this could suggest generated detail, though distance and image quality also explain it. (middle-left, weak)
- gemini-3.1-pro-preview: The cobblestones follow the track curve with unnatural, procedural precision, lacking the irregularities of real laid stones. (bottom-right, moderate)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The hands and tools of the kneeling workers are indistinct, blurred blobs that merge improperly with the track. (middle-left, strong)

**track_geometry**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The rail beneath the workers loses its defined shape and appears to melt into the surrounding ground. (center, strong)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The workers' hands and the small object between them are difficult to distinguish. (middle-left, weak)

## u-two-L-2.jpg: mean P(AI) 0.33 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.35 / 0.68
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.01

**track_geometry**: score 9, raised in 4/9 calls, at center, bottom-center, middle-right

- claude-opus-5.5: Two tram tracks diverge with no visible switch blades or frog connecting them; left and right tracks appear as separate unconnected pairs that just splay apart from a paved area, an implausible layout (center, moderate)
- claude-opus-5.5: The left and right tram tracks diverge without any visible switch blades, frog, or connecting rails at the junction; the two branches simply separate with an asphalt gap between them, which is implausible for a real track layout. (center, moderate)
- claude-opus-5.5: The inner rail of the left track and the gap to the right track show inconsistent gauge and rail spacing as they approach the camera. (bottom-center, weak)
- claude-opus-5.5: The left and right track pairs diverge with no connecting switch or frog visible in the foreground. The rails just separate into two independent paths, which is implausible for a real junction. (center, moderate)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at bottom-center, bottom-right, whole-image

- gpt-6-sol: The workers’ hands and the objects immediately around the rail are somewhat indistinct. (bottom-center, weak)
- claude-opus-5.5: Cobblestone setts between rails have smeared, repetitive, somewhat melted patterning toward the foreground (bottom-center, moderate)
- claude-opus-5.5: The cobblestone setts are mostly regular, but they get smeary and soft in places. (bottom-right, weak)
- claude-opus-5.5: The overall soft haze and cinematic grade are paired with smooth, slightly mushy textures on the cobbles and the rail pile. (whole-image, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center, top-right

- claude-opus-5.5: Several poles stand in the yard but no overhead wires are clearly visible. Pole placement is somewhat random. (top-center, weak)
- claude-opus-5.5: There are several poles but almost no visible overhead wires. The poles are spaced arbitrarily, and two poles stand close together near the center. (top-center, moderate)
- gemini-3.1-pro-preview: Several grey poles stand randomly in the yard without visible bases, brackets, or overhead wires attached to them. (top-right, moderate)

**people_clothing_or_gear**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: The hi-vis vests have fairly coherent reflective strips and the helmets carry ear defenders. The orange vest's strips are slightly smeared. (center, weak)
- gemini-3.1-pro-preview: The lower bodies and trousers of both workers form indistinct, amorphous shapes that blend unnaturally into the ground and their bags. (center, strong)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at bottom-center, center

- gpt-6-sol: The workers’ hands and the small objects beside the rail are hard to distinguish, leaving their exact activity unclear. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the object between them are too soft to identify clearly; this could be a generated-detail issue, though distance and image softness also explain it. (bottom-center, weak)
- claude-opus-5.5: Tool bag and tools near workers' hands are blobby and undefined (center, weak)

## u-two-L-3.jpg: mean P(AI) 0.16 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.02 / 1.00 / 0.02

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at top-center, bottom-left, bottom-right

- gpt-6-sol: Distant brickwork and windows are soft enough that fine details cannot be checked closely. (top-center, weak)
- gpt-6-sol: The workers' hands and small gear are difficult to resolve, leaving some fine details ambiguous. (bottom-left, weak)
- gemini-3.1-pro-preview: Cobblestones between the rails have irregular shapes, varying drastically in size and blurring together rather than showing distinct individual stones. (bottom-right, strong)

**buildings**: score 3, raised in 2/9 calls, at top-center

- gpt-6-sol: Several brick arches and windows look highly similar, a repetition that could also occur in an AI-generated image. (top-center, weak)
- gemini-3.1-pro-preview: The brickwork forming the arches over the blind windows is jumbled, with individual bricks melting together and not following a realistic, structural masonry pattern. (top-center, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The left rail of the right-hand track fades out and disappears completely into the paved ground before it reaches the archway. (middle-right, strong)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The red and black object sitting on the ground next to the worker in orange is an indistinct, merged blob lacking recognizable features of a tool, bag, or piece of equipment. (bottom-center, strong)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image, center

- claude-opus-5.5: Stock-footage-like staged framing of the workers, slightly cinematic grade (whole-image, weak)
- claude-opus-5.5: Workers placed on one branch of a split track, resembling a trolley-problem setup, somewhat staged (center, weak)

## u-two-L-4.jpg: mean P(AI) 0.47 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.68 / 0.72 / 0.70
- google/gemini-3.1-pro-preview: 0.99 / 1.00 / 0.02

**track_geometry**: score 15, raised in 5/9 calls, at center, bottom-center

- claude-opus-5.5: Two tracks diverge with no visible connection or switch; the left track and right track appear as separate curves from the depot without a coherent junction where they meet in foreground (center, moderate)
- claude-opus-5.5: Two tram tracks diverge with no visible switch/frog connecting them; the left and right tracks seem to start independently at the bottom of the frame, which makes the junction geometrically odd. (bottom-center, moderate)
- claude-opus-5.5: Two tram tracks curve apart toward separate arched depot entrances with no visible switch or junction connecting them in the foreground; the tracks appear to diverge without a plausible merge point (center, moderate)
- gemini-3.1-pro-preview: The inner rail of the track the workers are on abruptly ends and disappears into the cobblestone texture just past them, failing to continue along the curve into the archway. (bottom-center, strong)

**texture_noise_or_sharpness**: score 10, raised in 7/9 calls, at center, top-center, whole-image, bottom-center, bottom-right

- gpt-6-sol: The workers’ hands and the object at the rail are indistinct, making their exact interaction hard to resolve. (center, weak)
- gpt-6-sol: Distant brickwork and windows are soft enough that some fine details cannot be checked clearly. (top-center, weak)
- claude-opus-5.5: Cobble setts are uniformly smooth and somewhat painterly with soft rendering; slight haze/glow overall like video still (whole-image, weak)
- claude-opus-5.5: The image is overly smooth and soft, with slightly smeared cobble textures, typical of generated video frames. (whole-image, moderate)

**tools_or_small_objects**: score 9, raised in 6/9 calls, at bottom-center, center

- gpt-6-sol: The workers’ hands and the small object at the rail are indistinct, making their exact interaction hard to verify. (bottom-center, weak)
- gpt-6-sol: The dark object at the right worker’s hands is hard to distinguish from the rail hardware. (bottom-center, weak)
- claude-opus-5.5: Tool bags on the ground are blobby and indistinct (center, weak)
- claude-opus-5.5: The tool bags beside the workers are indistinct blobs with no readable tools. (center, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: The lower bodies and legs of both workers, particularly the one on the right, are malformed; legs end abruptly without distinct feet and appear to melt into the ground and surrounding objects. (bottom-center, strong)
- gemini-3.1-pro-preview: The right worker's kneeling right leg appears to melt into the dark ground, lacking a distinct lower leg or boot. (center, moderate)

**people_pose_or_placement**: score 4, raised in 3/9 calls, at center

- claude-opus-5.5: Two workers kneel side by side on the left track, one kneeling on the rail itself; their legs/boots blend somewhat with rails and bags (center, weak)
- claude-opus-5.5: Both workers kneel on the left track, facing away, with nearly identical poses and hi-vis outfits, a staged look. (center, weak)
- claude-opus-5.5: Both workers kneel on the left track; one kneels directly on the rail itself with the right worker's body straddling the rail oddly, and their legs and feet blend into the ground (center, moderate)

## u-two-L-5.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.06 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 1.00

**track_geometry**: score 12, raised in 3/9 calls, at center, middle-right, middle-left

- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a solid, unbroken line. There are no switch blades, tie bars, or a frog (the crossing point), making this a physically impossible and non-functional track junction. (center, strong)
- gemini-3.1-pro-preview: The track branching to the right curves sharply toward the right edge of the frame, completely misaligning with the large railway arch in the background, which has its own separate, unconnected tracks visible inside. (middle-right, strong)
- gemini-3.1-pro-preview: The inner rail of the left track branch abruptly disappears completely as it transitions from the cobblestones onto the smooth pavement. (middle-left, strong)
- gemini-3.1-pro-preview: The inner rails of the two tracks merge into a sharp, physically impossible point without any switch mechanism or continuous path, meaning a train could not navigate it. (center, strong)

**tools_or_small_objects**: score 10, raised in 6/9 calls, at bottom-center, center

- gpt-6-sol: The workers’ hands and the tool between the rails are hard to distinguish precisely. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the small object between them are hard to distinguish, leaving their exact interaction unclear. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the object at the rail joint are difficult to distinguish clearly. (bottom-center, weak)
- gemini-3.1-pro-preview: The object resting on the ground immediately to the right of the kneeling worker in yellow is an amorphous, indistinct blob that lacks the structure of a real toolbag or piece of equipment. (bottom-center, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of long materials behind the workers is rendered as a blurry, amorphous brown mass rather than distinct objects like stacked rails or timber. (center, moderate)
- gemini-3.1-pro-preview: The stacked pile of rails in the background lacks crisp definition, with the ends of the steel profiles smudging and bleeding into one another. (center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at bottom-right, bottom-center

- gemini-3.1-pro-preview: The cobblestone pattern shows significant smudging and unnatural blending, especially in the areas between the rails, lacking defined edges. (bottom-right, moderate)
- gemini-3.1-pro-preview: The detailed cobblestone texture on the ground abruptly and unnaturally dissolves into smooth, featureless patches of grey exactly between the tracks. (bottom-center, moderate)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The reflective silver safety strips on the worker in the yellow jacket are disjointed, uneven, and form nonsensical patterns rather than the standard straight bands. (bottom-center, strong)

## u-two-L-6.jpg: mean P(AI) 0.32 (passes)

- anthropic/claude-opus-5.5: 0.20 / 0.20 / 0.35
- openai/gpt-6-sol: 0.07 / 0.03 / 0.06
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.98

**track_geometry**: score 11, raised in 5/9 calls, at center, bottom-center

- claude-opus-5.5: Left track's rails converge oddly; the workers hold a gauge/bar spanning the rails, yet rail spacing at the bottom appears inconsistent with the top, and the right rail of the left track merges ambiguously near the workers' knees (center, moderate)
- claude-opus-5.5: Left track rails appear to have a strange crossbar/gauge tool between workers; the rail geometry where the left track's right rail meets the worker's tool looks plausible but the two branches don't connect coherently as a junction — they curve away into separate arches without a visible switch (center, weak)
- claude-opus-5.5: Left track appears to have rails that converge oddly; the worker is holding a bar/gauge between rails, and rail spacing on left track narrows abnormally toward the bottom, with the right rail of left track bending unusually (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks fail to cross properly, merging in an impossible geometry where one rail simply ends abruptly in the pavement. (center, strong)

**people_anatomy**: score 7, raised in 4/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers’ hands and the right worker’s lower legs are difficult to distinguish clearly. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the tool are somewhat difficult to distinguish where they overlap. (bottom-center, weak)
- gemini-3.1-pro-preview: The hands of the worker in the yellow jacket are poorly defined and appear to blend seamlessly into the metal rail they are touching. (bottom-center, moderate)
- gemini-3.1-pro-preview: The hands of the workers and the tools they are holding are indistinct and blend ambiguously into the metal rail. (bottom-left, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: Metal bar laid across the rails between the two workers merges into the rail without clear endpoints or hands gripping it convincingly (center, moderate)
- gpt-6-sol: The workers’ hands and the thin bar at the rail junction are crowded together and difficult to distinguish precisely. (bottom-center, weak)
- gemini-3.1-pro-preview: The supposed tool bags or gear resting next to both workers' knees are rendered as indistinct, shapeless blobs without recognizable features. (bottom-center, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center, middle-right, center

- claude-opus-5.5: Several tall poles but no overhead wires attached despite tram depot setting; poles end abruptly (top-center, weak)
- gemini-3.1-pro-preview: Several tall poles stand around the track junction but are completely bare, lacking any attached overhead wires, lamps, or supporting brackets. (middle-right, moderate)
- gemini-3.1-pro-preview: There are several tall poles placed around the depot yard, but there are no overhead wires attached to them. (center, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The stack of materials (likely intended to be rails or timber) in the background is rendered as a smeared, indistinct mass of lines without clear edges. (middle-left, moderate)

## u-two-L-7.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.99

**people_anatomy**: score 7, raised in 3/9 calls, at center

- gpt-6-sol: The workers' hands and the rail junction are difficult to distinguish where they overlap, leaving a small area of visual ambiguity. (center, weak)
- gemini-3.1-pro-preview: The hands of both workers lack defined fingers and appear to melt amorphously into the metal rail they are supposedly touching or holding. (center, strong)
- gemini-3.1-pro-preview: The hands of both workers where they interact with the rail are fused together into an indistinct, smeared blob lacking defined fingers. (center, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The central rail bifurcates into a solid 'Y' shape without any of the mechanical components required for a train switch, such as movable points, a frog, or check rails, making it physically impossible for flanged wheels to pass. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails fail to form coherent parallel pairs with a consistent gauge; a single stray rail curves from the bottom center towards the left, merging nonsensically without a switch mechanism. (bottom-center, strong)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at top-center, bottom-right

- gpt-6-sol: Some distant brick and window details are soft enough to obscure their precise shapes. (top-center, weak)
- gemini-3.1-pro-preview: The cobblestone pattern between the rails of the right track abruptly loses detail and becomes a blurry, smudged texture towards the lower edge of the frame. (bottom-right, moderate)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The worker on the right has an amorphous, distorted mass of dark shapes attached to his right hip instead of recognizable tools, gear, or clothing folds. (center, strong)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The workers' hands and the small object at the rail are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers’ hands and the small object at the rail are indistinct, making their exact interaction hard to verify. (center, weak)

## u-two-L-8.jpg: mean P(AI) 0.17 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.20 / 0.12
- openai/gpt-6-sol: 0.02 / 0.02 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.95 / 0.02

**track_geometry**: score 4, raised in 2/9 calls, at center, middle-right

- claude-opus-5.5: The left track's rails converge oddly. The inner rail of the left track curves, and the two tracks' geometry doesn't form a coherent junction; the left rails pass under the workers with a plausible gauge, though. (center, moderate)
- gemini-3.1-pro-preview: The gauge (distance between the rails) of the right-hand track appears to widen unrealistically as the track curves and recedes towards the background archway. (middle-right, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at bottom-center, center

- gpt-6-sol: The workers’ hands and the equipment between them are hard to distinguish precisely. (bottom-center, weak)
- gemini-3.1-pro-preview: The stack of materials, likely intended to be rails or sleepers, is rendered as a blurry, striated brown mass without distinct individual items. (center, strong)

**buildings**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The windows inside the brick arches of the main building have wobbly, uneven glazing bars and frames that do not form coherent architectural shapes. (center, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at bottom-left, whole-image

- gpt-6-sol: The workers' hands and the object between them are too soft to identify clearly; this could conceal generated detail, though distance and image quality also explain it. (bottom-left, weak)
- gpt-6-sol: The hazy, somewhat soft image makes small details harder to verify and could also occur in an AI-generated image. (whole-image, weak)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The bag or tool kit resting on the ground to the left of the workers has indistinct edges and straps that melt into the surrounding pavement. (bottom-left, moderate)

## u-two-L-9.jpg: mean P(AI) 0.16 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.99

**tools_or_small_objects**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The workers' hands and the small tool at the rail are somewhat hard to distinguish. (bottom-center, weak)
- gemini-3.1-pro-preview: The tool bag next to the right worker is filled with nonsensical, merged shapes and floating handles rather than distinct, identifiable tools. (bottom-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at top-center, bottom-center

- gpt-6-sol: Distant brickwork and equipment look somewhat soft and indistinct, which could also occur in a generated image. (top-center, weak)
- gpt-6-sol: Some distant brickwork and yard details look hazy and indistinct, though this is also consistent with the lighting and image quality. (top-center, weak)
- gemini-3.1-pro-preview: The cobblestone pattern between the workers' legs smears into a continuous, blurry texture instead of retaining the shapes of individual stones. (bottom-center, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the diverging tracks meet between the workers but fail to form a functional switch or connect to a main line, instead melting vaguely into the ground. (bottom-center, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The left worker's hands and the tool he is holding blend into a single, amorphous mass without clear boundaries or fingers. (bottom-center, strong)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The horizontal reflective stripe on the right worker's orange jacket is disjointed and fails to align logically across the folds of the fabric. (bottom-center, moderate)

## x-group-L-1.jpg: mean P(AI) 0.58 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.72 / 0.70 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**track_geometry**: score 17, raised in 6/9 calls, at center, middle-left, middle-right, bottom-center

- claude-opus-5.5: The two branch tracks diverge in a way that makes no sense: the inner rails curve apart, leaving a wide gravel/concrete wedge with no switch, frog or crossing, and the left track's rails are unevenly spaced. (center, moderate)
- claude-opus-5.5: Two tracks diverge from a common origin but there is no switch/frog mechanism; the inner rails of each branch simply run parallel with a strip of pavement between, which is physically odd for a junction (center, moderate)
- claude-opus-5.5: Two track branches diverge from the foreground but there is no visible switch/frog where they split; inner rails of each branch run parallel with a paved gap between them, and the left track's rails seem to curve inconsistently toward the buildings (center, moderate)
- gemini-3.1-pro-preview: The two sets of tracks converge into a flat patch of dirt without any visible switch mechanism, frog, or points to join them. (center, strong)

**tools_or_small_objects**: score 11, raised in 5/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The workers' hands and equipment at the left rail joint are difficult to distinguish. (center, weak)
- claude-opus-5.5: Tools and bags at workers' feet are indistinct blobs; hands' activity unclear (middle-left, weak)
- gemini-3.1-pro-preview: The tools and equipment scattered around the group of three workers are indistinct, amorphous blobs rather than recognizable mechanical items. (middle-left, moderate)
- gemini-3.1-pro-preview: The gear or bag sitting on the ground next to the lone worker is a messy, unidentifiable shape with no clear straps or structure. (middle-right, moderate)

**people_anatomy**: score 8, raised in 4/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The workers' hands and tools where they meet the rail are difficult to distinguish. (center, weak)
- gpt-6-sol: The crouching workers’ hands and tools are hard to distinguish where they overlap. (center, weak)
- gemini-3.1-pro-preview: The worker on the right track lacks distinct feet; his lower legs appear to blend directly into the muddy ground and the rail in an amorphous way. (middle-right, strong)
- gemini-3.1-pro-preview: The three workers are physically melded together; the left arm of the middle worker disappears into the worker beside him, and their legs dissolve into indistinct shapes on the ground. (middle-left, strong)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at middle-left, center

- claude-opus-5.5: Three workers huddle tightly on the left track with indistinct hands and tools. Their bags blend into the ground and their limbs merge together. (middle-left, moderate)
- claude-opus-5.5: Three workers huddle closely on the left track in a staged-looking cluster, one lone worker on right track, symmetric cinematic composition (middle-left, weak)
- claude-opus-5.5: Three workers huddle tightly on the left track with merged limbs and ambiguous hands; the kneeling figure on the right track has indistinct legs blending into a bag (middle-left, moderate)
- gemini-3.1-pro-preview: The group of three workers on the left track merges into a confusing mass of limbs and high-vis clothing; the interaction of their hands and tools with the track is indistinct and illogical. (center, strong)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The image has an overall smooth, cinematic, stock-video look, with soft fine detail on the fences and cones. (whole-image, weak)
- claude-opus-5.5: Overall smooth, slightly waxy rendering of wet asphalt and corrugated walls with soft, uniform detail and stock-footage-like grading (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly wet asphalt and uniformly soft detail throughout, with cinematic color grading resembling stock-video AI output (whole-image, moderate)

## x-group-L-10.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, middle-right

- gpt-6-sol: The workers’ hands and the tools immediately around them are hard to distinguish, a weak possible generation cue, though distance and windscreen blur also explain it. (center, weak)
- gpt-6-sol: The lone worker’s hands and tools are too soft to inspect closely; that obscurity could hide image-generation errors. (middle-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The workers' hands and tools are difficult to distinguish where they meet the rails. (center, weak)

## x-group-L-2.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.88 / 0.85
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.99

**track_geometry**: score 26, raised in 5/9 calls, at center, bottom-center, top-right, bottom-right, bottom-left, middle-right

- claude-opus-5.5: The two branches don't form a coherent turnout: the left pair of rails and the right pair diverge without any switch blades, frog or shared rail. The inner rails simply run parallel as separate grooves. (center, strong)
- claude-opus-5.5: The left branch's rails sit in an odd raised concrete strip, and the left outer rail curves off toward the shed in a way that doesn't match a track gauge. (bottom-center, moderate)
- claude-opus-5.5: The two track branches diverge without any switch, frog or connecting rails; the left track's rails and the right track's rails simply separate into a gravel wedge, which is an implausible layout. (center, strong)
- claude-opus-5.5: The rail gauge differs between the branches. The left pair is widely spaced, while the right pair is spread unevenly, and the inner rails curve smoothly in a stylized way. (bottom-center, moderate)

**people_anatomy**: score 16, raised in 7/9 calls, at middle-left, top-right, middle-right

- gpt-6-sol: The workers’ hands and legs are difficult to distinguish where they overlap. (middle-left, weak)
- gpt-6-sol: The overlapping arms and legs of the crouched workers are difficult to distinguish individually, which leaves some uncertainty about their shapes. (middle-left, weak)
- claude-opus-5.5: The lone worker on the right appears kneeling but merges with a vague dark equipment blob on the rail. (top-right, weak)
- claude-opus-5.5: The three kneeling workers merge together. Their limbs and hands are indistinct around the tools, and one worker's legs blend into the ground. (middle-left, moderate)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at middle-left, center

- gpt-6-sol: The workers’ hands and the equipment between them are indistinct, making their exact interaction hard to verify. (middle-left, weak)
- claude-opus-5.5: The red tool bag and the equipment beside the workers are blobby and lack identifiable form. (middle-left, weak)
- claude-opus-5.5: The red tool bag and the brown bag are amorphous, with no identifiable handles or tools. (middle-left, weak)
- gemini-3.1-pro-preview: The orange traffic cones positioned near the fence are misshapen, asymmetrical, and appear to have a melted texture. (middle-left, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at center, middle-right

- claude-opus-5.5: The three workers on the left blend into each other; hands and tools merge into an indistinct mass with no clear task. (center, moderate)
- claude-opus-5.5: The lone worker kneels on the track with a blurry object beneath him, and his legs blend into the rail area. (middle-right, weak)
- gemini-3.1-pro-preview: The hands and tools of the three workers huddled on the left track merge into a dark, undefined, blurry blob without clear structure or logical interaction. (center, strong)

**camera_or_windscreen**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: Rain droplets appear only over the building and sky area as bokeh blobs, an inconsistent windscreen effect typical of generated video frames. (top-center, moderate)
- claude-opus-5.5: Raindrop bokeh on the lens appears as uniform circles over the building area, giving a cinematic, generated look. (top-center, weak)
- gemini-3.1-pro-preview: The circular and hexagonal 'water droplets' or lens artifacts in the upper portion of the frame appear stamped over the image with unnatural uniformity. (top-center, moderate)

## x-group-L-3.jpg: mean P(AI) 0.35 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.90

**tools_or_small_objects**: score 10, raised in 3/9 calls, at bottom-left, middle-right, bottom-center

- gemini-3.1-pro-preview: The objects resting on the ground near the left group of workers are amorphous, undefined blobs that do not resemble any recognizable tools. (bottom-left, strong)
- gemini-3.1-pro-preview: The objects or bags lying on the ground next to the workers on the left lack clear structure or recognizable features, resembling formless lumps rather than manufactured gear. (bottom-left, moderate)
- gemini-3.1-pro-preview: The tool being used by the lone worker on the right merges indistinctly with the rail and lacks clear mechanical parts. (middle-right, moderate)
- gemini-3.1-pro-preview: The objects resting on the ground near the rightmost worker on the left track are formless, blobby shapes lacking the distinct details and structure of actual tools or bags. (bottom-center, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: Both branching paths appear to be constructed of three parallel rails or grooves, which is a nonsensical design for standard railways or tramways. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the left track appears as a soft, slightly wobbly double groove rather than a solid metal rail with a sharp, defined profile. (bottom-center, strong)

**background_clutter**: score 5, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The traffic cones near the fence appear distorted and melted, particularly the leftmost one which loses its conical shape entirely. (middle-left, strong)
- gemini-3.1-pro-preview: The chain-link fencing in the background behind the left track appears to blur and merge inconsistently with the indistinct shapes behind it. (center, moderate)

**people_anatomy**: score 4, raised in 3/9 calls, at middle-left, center

- gpt-6-sol: The crouching workers’ hands and tools overlap and are difficult to distinguish. (middle-left, weak)
- gpt-6-sol: The clustered workers’ hands and tools are difficult to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The hands of the workers touching the tracks lack defined fingers and appear to melt or blend seamlessly into the ground. (middle-left, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at middle-left, whole-image

- gpt-6-sol: The workers’ hands and the small objects around the rail are hard to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The overall image, especially the wet ground, has a smoothed, painterly texture typical of AI generation, lacking the crisp detail of a real photograph. (whole-image, strong)

## x-group-L-4.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.05

**people_anatomy**: score 6, raised in 4/9 calls, at middle-left, middle-right

- gpt-6-sol: The crouching workers’ hands and footwear are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The crouching workers’ hands and lower legs are indistinct, making some poses difficult to resolve. (middle-left, weak)
- gpt-6-sol: The workers' hands and the small details around their feet are hard to make out, so those features cannot be fully checked. (middle-left, weak)
- gemini-3.1-pro-preview: The worker kneeling on the right track has an amorphous, ill-defined lower body that melts into the dark reflections on the wet ground, lacking distinct legs or feet. (middle-right, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of both branch tracks merge into a single point, while their corresponding outer rails diverge widely to the edges of the frame, resulting in a physically impossible, ever-expanding track gauge towards the camera. (bottom-center, strong)

**people_pose_or_placement**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The rightmost worker in the group of three on the left track has a highly distorted posture, with their legs blending unnaturally into the ground and appearing mangled. (middle-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The objects stacked behind the chain-link fence, such as the wooden pallets and orange traffic cones, appear melted together and lack coherent, distinct structures. (center, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: A faint line meant to represent an overhead wire originates near the concrete pole but abruptly fades out and disappears into the sky without connecting to any other infrastructure. (top-right, moderate)

## x-group-L-5.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.15 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**track_geometry**: score 9, raised in 2/9 calls, at middle-left, bottom-right, bottom-left

- gemini-3.1-pro-preview: The inner rail of the left track pair disappears entirely into the smooth pavement just below the group of workers, making the track structurally impossible. (middle-left, strong)
- gemini-3.1-pro-preview: The groove of the inner rail on the right track is heavily distorted, wavy, and inconsistently wide, which is physically impossible for a solid steel tram rail. (bottom-right, strong)
- gemini-3.1-pro-preview: The left-most rail features a groove that inexplicably fills in with pavement and reappears, lacking the continuous solid structure of real embedded tracks. (bottom-left, strong)

**people_anatomy**: score 6, raised in 4/9 calls, at middle-left, middle-right

- gpt-6-sol: The crouching workers’ hands and feet are difficult to distinguish where they overlap near the rails. (middle-left, weak)
- gpt-6-sol: The overlapping hands and gear around the three crouching workers are difficult to make out clearly. (middle-left, weak)
- claude-opus-5.5: The single worker on the right track is small and somewhat indistinct, but nothing is clearly malformed. (middle-right, weak)
- gemini-3.1-pro-preview: The worker on the right side of the left group has a lower body that merges into an indistinct, formless dark mass lacking clear leg structure. (middle-left, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at middle-left

- gpt-6-sol: The three workers’ hands and the small items near the rails overlap, making their exact contacts difficult to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The workers on the left are not holding identifiable tools; their hands merge into blurry, indistinct dark shapes resting on the rails. (middle-left, strong)

**people_pose_or_placement**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The solitary worker on the right track has legs that appear disproportionately short relative to their torso, resulting in an unnatural crouching pose. (middle-right, moderate)

**buildings**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence behind the left group of workers lacks defined supporting posts and seems to melt directly into the corrugated building wall. (center, moderate)

## x-group-L-6.jpg: mean P(AI) 0.30 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.35

**people_anatomy**: score 11, raised in 4/9 calls, at center, middle-left, bottom-left, middle-right

- gpt-6-sol: The nearby workers’ hands and lower legs are hard to distinguish where their bodies overlap. (center, weak)
- gpt-6-sol: The crouched workers’ hands and legs are partly hidden where they cluster around the rails, making their exact positions hard to read. (middle-left, weak)
- gemini-3.1-pro-preview: The hands of the workers clustered on the left track are rendered as shapeless blobs of color that merge into the muddy ground and tools, lacking clear fingers or grip. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower body and legs of the foreground worker on the left track merge into a shapeless, textured mass that resembles a sandbag, with no clearly defined boots or feet. (bottom-left, strong)

**track_geometry**: score 9, raised in 3/9 calls, at center, bottom-left, bottom-right, bottom-center

- gpt-6-sol: The rails around the kneeling workers are partly hidden and difficult to trace precisely. (center, weak)
- gemini-3.1-pro-preview: The physical structure and distinct rails of the left track seem to dissolve and lose their defined gauge as they pass underneath the group of workers. (bottom-left, strong)
- gemini-3.1-pro-preview: The rails of the right-hand track have an inconsistent gauge, narrowing sharply as they curve towards the building, and the left rail of this pair breaks into multiple indistinct, thin lines. (bottom-right, strong)
- gemini-3.1-pro-preview: The right-most rail of the left-hand track has a groove that abruptly disappears and reappears, with the shiny surface reflection being broken and illogical. (bottom-center, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The middle worker in the group of three (white helmet) has a lower body and legs that disappear unnaturally into the track surface without coherent anatomical structure. (bottom-left, strong)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The worker on the right track is sitting on a piece of equipment that is an indistinct, merged blob of dark shapes and vague wheel-like forms, blending into his lower body. (middle-right, strong)

**buildings**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The horizontal metal lintel above the dark opening of the right-hand bay is uneven and wavy, rather than rigid and straight like real structural steel. (top-right, moderate)

## x-group-L-7.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.75 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.01

**track_geometry**: score 8, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: Two embedded grooved-rail tracks diverge from the foreground but have no switch, frog or connecting rails; the left pair and right pair simply split apart as independent tracks with an unexplained gravel wedge between them (center, moderate)
- claude-opus-5.5: Inner rails of each pair run as doubled parallel grooves of inconsistent width; rail gauge between pairs looks uneven compared with the outer rails (bottom-center, moderate)
- claude-opus-5.5: The two track pairs diverge in a Y with no visible switch, frog, or crossing; the inner rails of each branch run separately with no connection where they should meet, which is implausible for a real turnout. (center, moderate)
- claude-opus-5.5: The two track pairs diverge in a V shape with no visible switch, frog, or connecting rails; the inner rails simply split apart at the bottom of the frame with a gravel wedge between them, which is implausible as a real junction. (center, moderate)

**tools_or_small_objects**: score 6, raised in 5/9 calls, at middle-right, center, middle-left

- gpt-6-sol: The right worker's hands and the item beside the rail are difficult to make out, leaving their interaction somewhat ambiguous. (middle-right, weak)
- gpt-6-sol: The workers' hands and the equipment at the left track are difficult to distinguish clearly. (center, weak)
- claude-opus-5.5: Tools near the right worker's hands and the bag beside him are blobby and undefined (middle-right, weak)
- claude-opus-5.5: The bag and tools next to the right worker are an indistinct blob with no recognizable tool shapes. (middle-right, weak)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Three workers kneel clustered over the rail with hands merging into indistinct tools and bags; faces are hidden and the limbs blend together (middle-left, moderate)
- claude-opus-5.5: Three workers kneel in a tight cluster on the left track and one is isolated on the right, a staged-looking arrangement. Their hands and tools are vague and blend into the bags. (middle-left, moderate)
- claude-opus-5.5: Three workers kneel in a tight cluster on the left track and one kneels on the right track, all in near-identical poses; the arrangement looks staged and symmetrical. (middle-left, weak)

**reflections_or_wet_surfaces**: score 3, raised in 3/9 calls, at bottom-right

- claude-opus-5.5: Wet asphalt sheen is smooth and evenly painterly, with puddles lacking sharp reflection detail (bottom-right, weak)
- claude-opus-5.5: The wet asphalt has a smooth, painterly sheen and soft puddle patches that lack fine aggregate texture. (bottom-right, weak)
- claude-opus-5.5: The wet asphalt has smooth, somewhat painterly sheen and soft reflections, with an overall diffuse, slightly smeared texture. (bottom-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The workers' hands and the objects beside the rail are too soft to identify clearly; this leaves a little uncertainty about fine details. (middle-left, weak)

## x-group-L-8.jpg: mean P(AI) 0.50 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.82 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.05

**track_geometry**: score 21, raised in 5/9 calls, at center, bottom-left, bottom-center, middle-right

- claude-opus-5.5: Two tram track pairs diverge oddly: the left pair's inner rail and right pair's inner rail don't form a coherent switch/turnout; tracks appear as separate pairs with a gravel wedge between, rail gauge inconsistent between branches (center, moderate)
- claude-opus-5.5: Left track's left rail and right rail are spaced very widely at the bottom, with the gauge narrowing unnaturally toward the workers; perspective inconsistent with right pair (bottom-left, moderate)
- claude-opus-5.5: Two tram track pairs diverge oddly: left pair and right pair don't connect into a coherent switch; the inner rails of each track run separately with no frog or junction, gravel wedge between them (center, moderate)
- claude-opus-5.5: Left track rails are unevenly spaced and the left rail fades/merges into pavement near the workers, inconsistent gauge (bottom-left, moderate)

**people_anatomy**: score 15, raised in 5/9 calls, at middle-right, center, middle-left

- gpt-6-sol: The lone worker’s hands and the rail contact point are difficult to distinguish at this resolution. (middle-right, weak)
- gpt-6-sol: The kneeling workers’ hands and the exact objects they are handling are difficult to distinguish. (center, weak)
- gpt-6-sol: The crouching workers’ hands and tools are difficult to distinguish at this distance. (center, weak)
- gemini-3.1-pro-preview: The worker kneeling on the right track has a severely distorted lower body that appears to melt into the ground or the track, lacking distinct legs or feet. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at middle-left, center

- claude-opus-5.5: Bag/tool lumps near kneeling worker are amorphous and indistinct (middle-left, weak)
- gemini-3.1-pro-preview: Despite appearing to work on the tracks, the group of workers on the left are not holding any distinguishable tools; their hands blend into indistinct blobs. (middle-left, moderate)
- gemini-3.1-pro-preview: The orange safety cones near the pallets by the fence are misshapen and appear to be melting into the ground. (center, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence in the background is poorly defined, with wavy posts and mesh that blends indistinctly into the objects behind it. (center, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background has vertical posts that disappear abruptly, and the wire mesh turns into an unstructured blurry texture. (center, moderate)

**people_pose_or_placement**: score 3, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Three workers kneel in a tidy row on the left track with a fourth isolated on the right; staged, stock-like arrangement; hands blend into rails with no clear tools (middle-left, weak)
- claude-opus-5.5: Three workers kneeling in a row along one rail, posed symmetrically, hands on rail without visible tools doing anything specific (middle-left, weak)
- claude-opus-5.5: Three workers are kneeling in a tight row along the same rail, all with similar poses and featureless hands working at nothing clearly defined. This looks staged and generic. (middle-left, weak)

## x-group-L-9.jpg: mean P(AI) 0.35 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.08
- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.98 / 0.75 / 0.99

**people_anatomy**: score 12, raised in 5/9 calls, at center, middle-left, bottom-left, middle-right

- gpt-6-sol: The kneeling workers’ hands and tools are difficult to distinguish where they meet the rails. (center, weak)
- gpt-6-sol: The crouching workers' hands and tools are partly hidden where they overlap the rails, making their exact positions hard to resolve. (center, weak)
- gemini-3.1-pro-preview: In the group of three workers, the lower body and legs of the middle worker are indistinct and appear to melt or blend nonsensically into the worker kneeling directly in front of them. (middle-left, moderate)
- gemini-3.1-pro-preview: Middle left worker lacks distinct lower body. (bottom-left, moderate)

**track_geometry**: score 8, raised in 3/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge into a solid 'V' or 'Y' shape without any functional switch points, frog, or flangeway gaps that would allow a train wheel to pass. (bottom-center, strong)
- gemini-3.1-pro-preview: Left rails merge into concrete behind workers. (center, moderate)
- gemini-3.1-pro-preview: The steel rails, particularly where the workers are positioned, lose their three-dimensional profile and blend into the ground, appearing more like flat dark smudges or painted grooves. (bottom-center, strong)

**people_clothing_or_gear**: score 6, raised in 2/9 calls, at bottom-left, center

- gemini-3.1-pro-preview: The reflective 'X' pattern on the back of the closest worker on the left has inconsistencies; specifically, the top right segment of the X appears to end abruptly or fade unnaturally into the vest. (bottom-left, weak)
- gemini-3.1-pro-preview: The tool pouches attached to the hips of the workers on the left look like smooth, formless brown blobs without any structural details like seams, flaps, or tools sticking out. (bottom-left, strong)
- gemini-3.1-pro-preview: The reflective safety stripes on the back of the central worker's orange jacket are wobbly, uneven in thickness, and do not drape naturally over the body. (center, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-right, bottom-right

- gpt-6-sol: The right worker's hand and tool blend into the dark rail area, making their exact shapes difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the worker kneeling on the right track lack definition and seem to merge directly into the rail groove, with no recognizable tools visible despite the posture suggesting active work. (middle-right, moderate)
- gemini-3.1-pro-preview: Pouches on right worker are formless blobs. (bottom-right, weak)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Fence poles dissolve in background. (center, moderate)

## x-two-L-1.jpg: mean P(AI) 0.26 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**people_anatomy**: score 6, raised in 4/9 calls, at center

- gpt-6-sol: The workers’ hands overlap the rail and tools, making their exact positions hard to distinguish. (center, weak)
- gpt-6-sol: The workers’ hands at the switch are difficult to distinguish, leaving their exact grip unclear. (center, weak)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket blend amorphously into the tools and the rail groove, lacking distinct fingers or structural logic. (center, moderate)
- gemini-3.1-pro-preview: The lower body of the worker in orange is distorted, with the legs and black boots blending into a fused, indistinct shape that does not correctly depict a kneeling posture. (center, moderate)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-left, bottom-center

- gemini-3.1-pro-preview: The left track is missing its outer left rail in the foreground asphalt; only the inner right rail is visible near the workers, while the left rail magically appears only closer to the shed. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the left-curving track simply fades out into the wet pavement and does not connect to any rails continuing towards the bottom of the image, making it topologically impossible. (bottom-center, strong)

**background_clutter**: score 5, raised in 2/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The traffic cones placed behind the chainlink fence are highly deformed, with one appearing impossibly tall and needle-thin. (center, strong)
- gemini-3.1-pro-preview: The chain-link fence behind the workers has clearly defined solid vertical posts, but the wire mesh between them is mostly missing, rendering as faint, random squiggles. (middle-left, moderate)

**text_signage_or_markings**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The black patch on the back of the yellow worker's jacket contains illegible, gibberish squiggles rather than real letters. (middle-left, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: Where the tracks ostensibly diverge into left and right branches, there are no visible mechanical components of a switch, such as switch blades, tie bars, or a frog; the lines simply branch smoothly like a drawing. (bottom-center, strong)

## x-two-L-10.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**tools_or_small_objects**: score 3, raised in 3/9 calls, at center

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish; this could raise slight suspicion, though the distance and softness explain it. (center, weak)
- gpt-6-sol: The workers’ hands and the small objects at the rail junction are difficult to distinguish, leaving some fine-detail uncertainty. (center, weak)
- gpt-6-sol: The workers' hands and the small object between them are difficult to distinguish. (center, weak)

## x-two-L-2.jpg: mean P(AI) 0.47 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.70 / 0.35
- google/gemini-3.1-pro-preview: 0.99 / 0.96 / 0.99

**track_geometry**: score 19, raised in 4/9 calls, at center, bottom-center, middle-right, bottom-left

- claude-opus-5.5: The left track pair's inner rail runs under the kneeling workers and then merges oddly with the right track's left rail near the bottom center; the gauge between rails is inconsistent, and the right pair's rails converge toward the depot without a clear switch mechanism. (center, moderate)
- gemini-3.1-pro-preview: Where the two tracks converge between the workers, the rails turn into a nonsensical set of parallel lines that do not form a logical switch or valid rail profile. (bottom-center, strong)
- gemini-3.1-pro-preview: The outer (rightmost) rail of the right branch track simply fades away and disappears into the ground surface before reaching the building. (middle-right, strong)
- gemini-3.1-pro-preview: The track junction is logically incoherent; the inner rails of the diverging branches do not meet at a visible frog or switch mechanism, but instead run awkwardly parallel before fading into the ground. (bottom-center, strong)

**tools_or_small_objects**: score 13, raised in 7/9 calls, at center, bottom-center

- gpt-6-sol: The workers’ hands and the equipment between them are hard to distinguish. (center, weak)
- gpt-6-sol: The workers’ hands and the small items at the rail joint are partly obscured, making their exact interaction difficult to verify. (center, weak)
- claude-opus-5.5: The bag or tool bundle by the workers' knees is an indistinct, mushy object with no identifiable tools. The hands touching the rail show no clear tool either. (center, moderate)
- claude-opus-5.5: The tool bag on the track between the workers is a somewhat amorphous brown lump, and what the workers are holding is hard to make out. (center, weak)

**people_anatomy**: score 11, raised in 4/9 calls, at center, bottom-left, bottom-center

- claude-opus-5.5: The workers' hands and feet are blurred and merged. The left worker's legs and boots tuck under his body ambiguously. (center, weak)
- claude-opus-5.5: The workers' hands near the rail are small and indistinct. This could be ordinary motion or low resolution, but it hides any clear tool interaction. (center, weak)
- gemini-3.1-pro-preview: The left worker's visible left boot is twisted at an anatomically impossible 90-degree angle relative to his kneeling posture. (bottom-left, strong)
- gemini-3.1-pro-preview: The right worker's left leg is completely missing or merges indiscriminately into the ground and the object beside him. (bottom-center, strong)

**camera_or_windscreen**: score 5, raised in 3/9 calls, at top-center, whole-image

- claude-opus-5.5: Raindrops on the lens appear only as faint blurry spots in the upper area and the sky. They look plausible, but the rendering is somewhat uniform. (top-center, weak)
- gemini-3.1-pro-preview: Water droplets are overlaid across the entire image in a very uniform manner, a common AI technique used to simulate realism and mask generating artifacts. (whole-image, moderate)
- gemini-3.1-pro-preview: The large, semi-transparent water droplets scattered across the image appear uniform and artificial, characteristic of a digital filter simulating a dirty lens. (whole-image, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The stacked wooden pallets in the distance have distorted, uneven slats that meld together with incorrect perspective. (center, moderate)
- gemini-3.1-pro-preview: The stack of wooden pallets near the fence appears melted together into a solid block, missing the distinct horizontal and vertical slats of real pallets. (middle-left, moderate)

## x-two-L-3.jpg: mean P(AI) 0.20 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.30 / 0.20 / 0.25
- google/gemini-3.1-pro-preview: 0.01 / 0.99 / 0.02

**texture_noise_or_sharpness**: score 4, raised in 4/9 calls, at middle-left, whole-image

- gpt-6-sol: The exact rail junction beneath the workers is difficult to make out and its edges look slightly blended, though rain and distance could explain this. (middle-left, weak)
- claude-opus-5.5: The image has a somewhat smooth, low-contrast, cinematic look with mild compression, which is ambiguous. (whole-image, weak)
- claude-opus-5.5: Slightly smooth, video-frame-like rendering with mild compression; the aesthetic could suggest generation but is also typical of video stills (whole-image, weak)
- claude-opus-5.5: Slightly soft, video-frame-like rendering with mild compression. Edges are a bit smooth, which could suggest generation. (whole-image, weak)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The rails beneath the workers are difficult to follow where they meet and are partly hidden by the workers. (bottom-center, weak)
- gemini-3.1-pro-preview: The right rail of the left track has its dark groove on the outside (right side of the shiny rail head) instead of the inside, meaning a train's wheel flange would not fit. (bottom-center, strong)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at center, middle-left

- gpt-6-sol: The workers' hands and the small objects beside them are hard to distinguish, which leaves their exact interaction ambiguous. (center, weak)
- gemini-3.1-pro-preview: The tools and pouches on the ground next to both workers are indistinct, amorphous blobs rather than recognizable equipment. (middle-left, moderate)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires are disconnected straight lines that end abruptly in mid-air and fail to attach coherently to the poles. (top-center, strong)

**people_anatomy**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The worker in the yellow jacket has a left foot that appears mangled and bent at a highly unnatural angle beneath his leg. (middle-left, moderate)

## x-two-L-4.jpg: mean P(AI) 0.20 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.60 / 0.25 / 0.75
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.02

**track_geometry**: score 7, raised in 3/9 calls, at bottom-center, center

- claude-opus-5.5: The left track's inner rail and the right track's left rail do not form a coherent switch or junction. The two pairs of grooved rails run separately, with a flat concrete strip between them and no frog or points. (bottom-center, moderate)
- claude-opus-5.5: The left branch track narrows and curves oddly toward the workers. The rail gauge looks inconsistent between the foreground and the area near the workers. (center, weak)
- claude-opus-5.5: The left track's inner rail and the right track's left rail diverge oddly; the tracks split from a single throat region, but the geometry of the inner rails at the bottom center lacks a proper frog or switch, with rails simply running in parallel then splitting (center, moderate)
- claude-opus-5.5: Embedded tram rails diverge into two branches, but the left branch's rails do not clearly connect to the right branch at a switch; the junction area is just concrete with no frog or switch blades visible (center, moderate)

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at center, whole-image

- gpt-6-sol: The workers’ hands and the small items beside the rail are difficult to make out; that lack of detail could conceal generated artifacts, though distance and the wet windscreen also explain it. (center, weak)
- gpt-6-sol: The image is soft and some small objects are hard to resolve, which limits certainty about fine details. (whole-image, weak)
- claude-opus-5.5: Smooth, slightly video-compressed texture with soft detail on the workers. It is ambiguous and could come from a video frame or from generation. (whole-image, weak)
- claude-opus-5.5: Overall smooth, slightly waxy rendering of the wet asphalt and the workers, typical of video-generation models (whole-image, moderate)

**switch_mechanism**: score 2, raised in 1/9 calls, at bottom-center

- claude-opus-5.5: No visible switch point or tongue where tracks split; rails appear to simply fade into the concrete strip between branches (bottom-center, moderate)

**composition_or_staging**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Classic trolley-problem setup: track splitting with people on one branch and none on the other, a common generated-scenario composition (whole-image, moderate)

**people_anatomy**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The right worker’s hand and lower legs are difficult to distinguish where they overlap the rails and gear. (center, weak)

## x-two-L-5.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- openai/gpt-6-sol: 0.02 / 0.06 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 11, raised in 5/9 calls, at center, bottom-left, middle-left

- gpt-6-sol: The workers’ hands and the equipment beside them are indistinct, making those small details difficult to verify. (center, weak)
- gpt-6-sol: The crouching workers' hands and lower legs are hard to distinguish where they overlap the rails and equipment. (center, weak)
- gemini-3.1-pro-preview: The left leg of the worker in the orange shirt appears to disappear or merge directly into the rail and ground, and both workers' hands are indistinct blobs. (bottom-left, strong)
- gemini-3.1-pro-preview: The anatomy of the two workers is highly indistinct; the worker in yellow lacks defined legs, appearing as a solid mass merging with the ground, while the worker in orange has limbs that blend seamlessly into vague shapes instead of holding distinct tools. (middle-left, strong)

**track_geometry**: score 9, raised in 3/9 calls, at center, middle-right, bottom-center

- gemini-3.1-pro-preview: The inner rails of the diverging tracks simply fade into the wet asphalt where they should intersect, completely lacking any physical switch mechanism, points, or a frog. (center, strong)
- gemini-3.1-pro-preview: The right-hand track structure is physically nonsensical, displaying three irregular, wavy lines or grooves embedded in the ground rather than two parallel rails. (middle-right, strong)
- gemini-3.1-pro-preview: The inner rail of the track curving towards the right building bay abruptly vanishes into the flat wet concrete and fails to continue to the bottom edge of the image. (bottom-center, strong)

**background_clutter**: score 7, raised in 3/9 calls, at middle-left

- gemini-3.1-pro-preview: The wire fence behind the orange traffic cones is rendered as a chaotic, irregular jumble of squiggly lines rather than a consistent chainlink grid. (middle-left, strong)
- gemini-3.1-pro-preview: Near the fence in the background, the orange traffic cones are melted and misshapen, lacking proper structural form. (middle-left, moderate)
- gemini-3.1-pro-preview: The orange traffic cones positioned near the chain-link fence in the background are severely misshapen and melt directly into the wooden pallets next to them. (middle-left, moderate)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at bottom-left, middle-left, center

- gemini-3.1-pro-preview: The tool bags sitting on the ground next to the workers lack any defined shape, straps, or details, appearing as amorphous lumps. (bottom-left, moderate)
- gemini-3.1-pro-preview: The object resting on the ground immediately to the left of the orange-clad worker is a completely shapeless, muddy blob rather than a recognizable tool or piece of equipment. (middle-left, strong)
- gemini-3.1-pro-preview: The objects and tools resting on the ground next to the worker in the orange shirt appear as indistinct, amorphous brown blobs rather than recognizable equipment. (center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at center, whole-image

- gpt-6-sol: The workers’ hands and the small objects near the rails are difficult to make out, which could conceal generated details, though distance and rain also explain it. (center, weak)
- gemini-3.1-pro-preview: Beneath the simulated layer of water droplets, the image exhibits a distinctly painterly, muddy texture, completely lacking the fine, sharp details expected in a real photograph of concrete, clothing, and metal. (whole-image, strong)

## x-two-L-6.jpg: mean P(AI) 0.50 (fails)

- anthropic/claude-opus-5.5: 0.60 / 0.72 / 0.12
- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 24, raised in 5/9 calls, at center, middle-right, bottom-left, bottom-center, middle-left

- claude-opus-5.5: Left track pair curves toward left shed and right pair runs straight to right shed, but the two layouts don't form a coherent junction; the inner left rail fades into concrete with no switch, and the grooved rails look smoothed and uniform (center, moderate)
- claude-opus-5.5: Left track's two rails diverge oddly: inner rail curves toward center gravel area while the left rail runs straight down, gauge appears inconsistent; the left-branch track's rails don't form a coherent parallel pair toward the shed (center, moderate)
- claude-opus-5.5: Right track rails seem to have widening/narrowing spacing and the inner rail heads toward the gravel pad rather than a clear path; no switch/frog at the junction point (middle-right, moderate)
- gemini-3.1-pro-preview: The Y-junction of the tracks lacks any switch mechanism (points or frog). The inner rails of both curves merge into a solid surface without a continuous flange-way, making it impossible for a train/tram to navigate. (center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at center, bottom-center, middle-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish, which leaves a small possibility of generated detail. (center, weak)
- gemini-3.1-pro-preview: The area where the left worker's hands meet the track is a blurred, indistinct mess with no recognizable tools or clear interaction with the object being worked on. (center, moderate)
- gemini-3.1-pro-preview: The hands of both workers and whatever tools they are holding are completely indistinguishable and fused into a generic blob on the track. (bottom-center, moderate)
- gemini-3.1-pro-preview: The hands of the workers and the objects they are interacting with are rendered as indistinct, muddy blobs without clear boundaries or tool shapes. (middle-left, moderate)

**people_anatomy**: score 6, raised in 3/9 calls, at center, middle-left, bottom-center

- claude-opus-5.5: The two kneeling workers have somewhat smeared hands and feet, and the tool on the rail is indistinct; the boots and legs merge together (center, moderate)
- gpt-6-sol: The workers’ hands and the area where they meet the rail are too small and soft to resolve clearly. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right in the yellow jacket has malformed legs, appearing to have an extra leg or boot protruding backwards at an unnatural angle. (bottom-center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center, middle-left

- claude-opus-5.5: Two workers crouched between rails with plausible hi-vis vests and helmets; hands and tools somewhat indistinct (center, weak)
- gemini-3.1-pro-preview: The lower bodies of both kneeling workers are malformed and appear to seamlessly melt into the dark ground and the steel rails beneath them. (middle-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The orange traffic cones near the fence are misshapen, melted together, and lack clear definition. (middle-left, moderate)
- gemini-3.1-pro-preview: Behind the chainlink fence, the orange traffic cones and stacked pallets are warped and incomplete, with one cone appearing to float without a base. (center, moderate)

## x-two-L-7.jpg: mean P(AI) 0.44 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.65 / 0.65 / 0.65
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.98

**track_geometry**: score 17, raised in 4/9 calls, at center, bottom-left, bottom-center, bottom-right, middle-right

- claude-opus-5.5: The rails of the left curved track seem to bend and pinch toward the gravel area in a way that is hard to reconcile with a constant gauge. The right track's rails merge smoothly into the building. (center, moderate)
- claude-opus-5.5: The two rails of the left branch are inconsistent. The outer rail sweeps left toward the building while the inner rail runs nearly straight, so the gauge widens implausibly toward the foreground. (bottom-left, moderate)
- claude-opus-5.5: There is no visible switch, frog or point blades where the tracks diverge. The rails just spread apart across bare asphalt. (center, moderate)
- gemini-3.1-pro-preview: The section of track directly beneath the workers shows three distinct, parallel shiny rail lines grouped closely together, which is structurally nonsensical for a standard railway. (bottom-center, strong)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at center, bottom-left, middle-left

- gpt-6-sol: The workers’ hands and the small object at the rail junction are difficult to distinguish. (center, weak)
- claude-opus-5.5: The tool the orange-vest worker uses against the rail is indistinct and the hands blend into it, with no clear tool shape. (center, moderate)
- claude-opus-5.5: The tool bag beside the yellow-vest worker is a mushy jumble of shapes with no identifiable tools. (bottom-left, weak)
- claude-opus-5.5: The tool bag on the ground has indistinct contents with no readable tool shapes. (middle-left, weak)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at center, whole-image

- gpt-6-sol: The workers' hands and the small track components are indistinct, making fine details hard to verify. (center, weak)
- claude-opus-5.5: Smooth, low-detail rendering of the asphalt, gravel and clothing at a 1280x720 frame size, typical of generated video. (whole-image, moderate)
- claude-opus-5.5: The wet asphalt, gravel and corrugated walls look uniformly smooth and painterly, with little sensor noise and a soft, slightly waxy rendering. (whole-image, moderate)
- claude-opus-5.5: Wet asphalt and puddles look uniformly smooth and painterly, with soft detail and none of the fine grain a real camera would record. (whole-image, weak)

**camera_or_windscreen**: score 5, raised in 3/9 calls, at whole-image, top-center

- claude-opus-5.5: Evenly scattered raindrop bokeh blobs sit over the dark doorways, giving a stylized cinematic overlay of the kind common in AI video frames. (whole-image, moderate)
- gemini-3.1-pro-preview: The water droplets appearing across the top of the image look like a flat, uniform digital filter overlay, failing to realistically refract the light or objects behind them. (top-center, moderate)
- gemini-3.1-pro-preview: The water droplets on the lens appear as a flat, uniform overlay pattern without realistically refracting the light or distorting the scene behind them. (whole-image, weak)

**people_anatomy**: score 4, raised in 3/9 calls, at center

- gpt-6-sol: The workers’ hands and lower legs are partly hidden by their kneeling positions and gear, making their exact shapes hard to verify. (center, weak)
- claude-opus-5.5: The hands of the worker in the yellow vest blend into the rail area with indistinct fingers and tool. (center, weak)
- gemini-3.1-pro-preview: The lower legs and boots of the kneeling worker in the orange jacket lack definition, appearing as muddy, formless blobs that blend unnaturally into the ground. (center, moderate)

## x-two-L-8.jpg: mean P(AI) 0.07 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.30 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-left

- gpt-6-sol: The dark objects beside the workers' hands are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the objects beside the rail are difficult to distinguish; this could conceal a generated detail, though the image is blurry overall. (middle-left, weak)

**track_geometry**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: The left track's two rails diverge and curve in ways that don't form a consistent gauge; the left rail of the left track curves away toward the left shed while the right rail heads straight, producing an implausible track pair layout with gravel wedge between branches (center, moderate)

**people_anatomy**: score 1, raised in 1/9 calls, at bottom-left

- gpt-6-sol: The workers’ hands and dark gear overlap and are difficult to distinguish precisely. (bottom-left, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Symmetric fork composition with workers placed neatly on one track looks somewhat staged, like a stock shot (whole-image, weak)

## x-two-L-9.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.72 / 0.75 / 0.82
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.98

**track_geometry**: score 24, raised in 7/9 calls, at middle-left, whole-image, center, bottom-left, middle-right, bottom-center

- gpt-6-sol: Some rail lines become hard to follow where the wet pavement and curves meet. (middle-left, weak)
- claude-opus-5.5: Two curved embedded grooved-rail tracks diverge into two sheds, but no switch/frog connects them; left track curves oddly with inconsistent gauge between rails near the workers (whole-image, moderate)
- claude-opus-5.5: The left and right track pairs diverge with no switch frog or points; the inner rails curve away separately with no junction mechanism where they would have to meet. (center, moderate)
- claude-opus-5.5: The left track's rails are irregularly spaced and the gauge appears to vary as they curve toward the shed. (bottom-left, moderate)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at bottom-left

- gpt-6-sol: The contents of the small tool bag are hard to distinguish, leaving some shapes ambiguous. (bottom-left, weak)
- claude-opus-5.5: Tool bag contains indistinct metallic tool shapes that don't resolve into recognizable wrenches or sockets (bottom-left, moderate)
- gemini-3.1-pro-preview: The small bag lying on the ground between the workers features malformed straps and nonsensical, unreadable text or logos. (bottom-left, moderate)
- gemini-3.1-pro-preview: The object resting on the ground between the two workers resembles a crumpled piece of canvas with distorted, meaningless characters on it, rather than a recognizable tool or bag. (bottom-left, strong)

**people_anatomy**: score 7, raised in 4/9 calls, at bottom-left

- claude-opus-5.5: Left worker's hands are blurry and merge with the rail area; gloves lack defined fingers (bottom-left, weak)
- gemini-3.1-pro-preview: The visible hand of the worker in the yellow jacket resting near the rail lacks defined fingers and dissolves into a formless dark smudge. (bottom-left, moderate)
- gemini-3.1-pro-preview: The left arm and hand of the worker in yellow blur indistinctly into his clothing and the ground, lacking defined anatomical structure. (bottom-left, moderate)
- gemini-3.1-pro-preview: The visible foot of the worker in the yellow jacket (on the far left) is rendered as a dark, unstructured blob rather than a distinct work boot. (bottom-left, moderate)

**background_clutter**: score 6, raised in 3/9 calls, at middle-left

- gemini-3.1-pro-preview: The orange traffic cones near the fence in the background are deformed, with one appearing as a melted, amorphous blob rather than a distinct, structured shape. (middle-left, moderate)
- gemini-3.1-pro-preview: The mesh of the chain-link fence behind the tracks fades in and out inconsistently, completely disappearing in some sections between the posts. (middle-left, moderate)
- gemini-3.1-pro-preview: The wooden pallet visible behind the chain-link fence has warped, uneven slats and sits next to traffic cones that appear melted and distorted. (middle-left, moderate)

**camera_or_windscreen**: score 4, raised in 3/9 calls, at top-center, whole-image

- claude-opus-5.5: Raindrop blur spots on lens across upper image, film-like grade typical of video generators (top-center, weak)
- gemini-3.1-pro-preview: The image features water droplets that appear as a uniform two-dimensional overlay across the entire frame, rather than interacting realistically with the scene's depth and lighting. (whole-image, moderate)
- gemini-3.1-pro-preview: The prominent simulated water droplets across the top of the frame are a frequent stylistic addition used by AI models to mimic a dirty lens or window. (top-center, weak)

## x-two-R-1.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.15 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.95 / 0.02 / 0.02

**people_anatomy**: score 4, raised in 2/9 calls, at center, middle-right

- gpt-6-sol: The workers’ hands and gear where they meet the rails are hard to distinguish, leaving a small amount of visual ambiguity. (center, weak)
- gemini-3.1-pro-preview: The hands and immediate surroundings of the kneeling workers blend into indistinct, amorphous blobs on the rails, lacking clear structure of tools or fingers. (middle-right, strong)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-right, middle-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish. (middle-right, weak)
- gpt-6-sol: The workers' hands and the small object between them are indistinct, making their exact interaction hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The orange traffic cones by the fence are misshapen and uneven, and the adjacent wooden pallet looks like a solid block rather than having individual slats. (middle-left, moderate)

**background_clutter**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence behind the dirt area exhibits an erratic, chaotic pattern of lines rather than a consistent diamond grid. (center, strong)

**track_geometry**: score 1, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The right rail of the left track appears strangely doubled or blurred in construction compared to the clean single line of the left rail. (bottom-left, weak)

## x-two-R-10.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.99

**people_anatomy**: score 9, raised in 4/9 calls, at center, middle-right

- gpt-6-sol: The workers’ hands and the rail hardware blend together, making their exact positions hard to distinguish. (center, weak)
- gpt-6-sol: The kneeling workers’ hands and tools are hard to distinguish where they meet the rail. (center, weak)
- gpt-6-sol: The workers' hands and the exact point where they meet the rail are hard to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The legs and boots of the worker on the right are severely distorted, with the left foot appearing as a massive, shapeless blob attached at an unnatural angle. (middle-right, strong)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The objects on the ground to the right of the workers are indistinct, unidentifiable blobs rather than clear tools. (middle-right, moderate)

**track_geometry**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The rails on the right-hand track branch seem to lose definition and fade away just before entering the building's doorway. (center, moderate)

**buildings**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence behind the tracks has an irregular, garbled mesh pattern that does not form a consistent geometric grid. (center, moderate)

## x-two-R-2.jpg: mean P(AI) 0.48 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.72 / 0.68 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 1.00

**track_geometry**: score 19, raised in 5/9 calls, at center, bottom-right, bottom-center

- claude-opus-5.5: The two track pairs diverge from a common area but have no visible switch, frog, or point blades; the left pair curves into the left shed while the right pair runs straight, with no physical connection between them. (center, moderate)
- claude-opus-5.5: The right track's rail spacing looks inconsistent. The left rail of the pair appears doubled as a flangeway groove, while the right rail sits in a wide channel, and the gauge seems to narrow oddly toward the shed. (bottom-right, moderate)
- claude-opus-5.5: The two tracks split into a Y, but there is no visible switch, frog or connecting rail where they diverge. The left track appears to begin from nothing near the bottom-center. (center, moderate)
- claude-opus-5.5: The tracks split into two diverging pairs from a single point in the foreground, but there is no switch, frog, or point blades. Each pair simply runs as independent grooved rails, which is a physically odd layout. (center, moderate)

**people_anatomy**: score 8, raised in 4/9 calls, at center, bottom-right, middle-right

- gpt-6-sol: The kneeling workers’ hands and gear are difficult to distinguish where they overlap. (center, weak)
- claude-opus-5.5: Both workers face away with their heads bowed, hiding their faces and hands. Their legs and boots blend into the ground, and their tools are indistinct. (center, weak)
- gemini-3.1-pro-preview: The hands of the worker in the yellow jacket are an undefined, blurry mass that merges into the ground and whatever object he is supposed to be holding. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands, tools, and legs of the kneeling workers are poorly defined, appearing as formless, merged blobs that blend unnaturally into the ground and their clothing. (middle-right, strong)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at center, bottom-right

- claude-opus-5.5: Both workers kneel side by side between and over the rails with their backs to the camera, which looks like a staged composition. Their hands are obscured and no clear tool is visible. (center, weak)
- claude-opus-5.5: Two workers kneel side by side, straddling or inside the right-hand track and facing away from the camera. The staging is clean and cinematic, typical of generated stock-style scenes. (center, weak)
- gemini-3.1-pro-preview: The worker in the orange vest has a strange, disjointed shape resembling a third boot or knee pad sticking out from his right side, unattached to a logical limb. (bottom-right, strong)

**background_clutter**: score 5, raised in 3/9 calls, at top-center, center

- claude-opus-5.5: The background cones, pallets and fence look generally coherent, but their details are soft and generic. (top-center, weak)
- gemini-3.1-pro-preview: The chain-link fence in the background dissolves into a blurry, textureless gray smudge in several areas, particularly behind the wooden pallets. (center, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background has an inconsistent, patchy mesh pattern, and the orange traffic cones behind it appear misshapen or partially dissolved into the background. (center, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-right, middle-left

- gpt-6-sol: The workers’ hands and equipment overlap in a dark, hard-to-resolve area that leaves some uncertainty. (middle-right, weak)
- gpt-6-sol: The dark object between the workers' hands and the rails is difficult to identify clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The orange traffic cones visible behind the fence near the left building entrance are misshapen, flattened, and lack proper geometric structure. (middle-left, moderate)

## x-two-R-3.jpg: mean P(AI) 0.50 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.80 / 0.78
- google/gemini-3.1-pro-preview: 0.95 / 0.98 / 0.02

**track_geometry**: score 14, raised in 4/9 calls, at center, bottom-center, top-right, bottom-right

- claude-opus-5.5: Track layout is incoherent: the left curved pair and the right pair don't form a plausible junction; inner left rail and right rails converge into a flat concrete median with no switch, frog, or connection, and the right track appears to fade into the gravel triangle. (center, strong)
- claude-opus-5.5: The tracks diverge as two separate curves with no switch points, frog, or connecting rails; the left track curves into the left shed while the right pair runs straight, and the inner rail of the right track has no physical junction with the left track. (center, moderate)
- claude-opus-5.5: The right track's left rail appears as a doubled or grooved strip that does not match its right rail. The gauge between the rails also looks inconsistent. (bottom-center, moderate)
- claude-opus-5.5: Track layout is incoherent: the left pair of curved rails and the right pair don't form a plausible switch or junction; the inner left rail curves away separately and the right track's rails seem to merge into embedded grooves without frog or points (center, moderate)

**people_anatomy**: score 7, raised in 4/9 calls, at middle-right

- gpt-6-sol: The kneeling workers’ hands and lower legs are difficult to distinguish where they overlap the rails. (middle-right, weak)
- gpt-6-sol: The workers’ lower legs and tan gear overlap in a patch that is difficult to visually separate. (middle-right, weak)
- gemini-3.1-pro-preview: The right hand of the worker in orange lacks defined fingers or a distinct glove shape, blurring indistinctly into the ground and the object below it. (middle-right, strong)
- gemini-3.1-pro-preview: The left hand of the worker in the yellow jacket appears indistinct and merges poorly with the rail, while the right foot/boot of the worker in orange lacks clear definition and blends into the shadow. (middle-right, moderate)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the object between them are indistinct, making that small area hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The item lying on the ground between the two workers is a mushy, indistinct brown mass that lacks the clear edges, straps, or structure of a toolbag or actual tools. (middle-right, strong)
- gemini-3.1-pro-preview: The object sitting on the ground between the worker in orange and the rail is an indistinct, tan-colored, amorphous blob rather than a recognizable tool bag or piece of equipment. (middle-right, strong)

**people_clothing_or_gear**: score 5, raised in 2/9 calls, at center, middle-right

- claude-opus-5.5: Hi-vis vests and hardhats look plausible, but the tool bag and the objects in the workers' hands are indistinct blobs with no identifiable tools. (center, moderate)
- gemini-3.1-pro-preview: The right boot of the worker in the orange jacket is rendered as a shapeless brown blob that merges completely into the concrete and nearby objects. (middle-right, strong)

**switch_mechanism**: score 4, raised in 2/9 calls, at center, bottom-center

- claude-opus-5.5: Workers appear to be working on a switch, yet no point blades, frog, or switch machine is visible near them. (center, moderate)
- gemini-3.1-pro-preview: The embedded tracks bifurcate into two paths, but the grooves simply split in a Y-shape without any movable switch blades or mechanism box required for real tramway turnouts. (bottom-center, moderate)

## x-two-R-4.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.18
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**people_anatomy**: score 13, raised in 4/9 calls, at middle-right, bottom-right, center

- gpt-6-sol: The workers’ hands and the rail fitting are hard to distinguish where they meet. (middle-right, weak)
- gemini-3.1-pro-preview: The lower bodies and boots of the two kneeling workers appear as dark, amorphous shapes that melt into the wet concrete, lacking defined shoe or leg structures. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower body and legs of the worker in the orange jacket are completely undefined, appearing as a dark, shapeless mass that melts into the railway track. (center, strong)
- gemini-3.1-pro-preview: The boots of the worker in the yellow jacket are malformed, looking blobby and somewhat duplicated, failing to distinctly separate from the surrounding wet ground. (middle-right, strong)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-right, bottom-left, center

- gemini-3.1-pro-preview: The steel rails the workers are kneeling over appear as flat lines on the ground with no three-dimensional volume, and they seamlessly disappear into the workers' knees. (bottom-right, strong)
- gemini-3.1-pro-preview: The left pair of tracks has inconsistent width and rail profiles, resembling shallow grooves or painted lines that shift in thickness along the curve. (bottom-left, moderate)
- gemini-3.1-pro-preview: The structure of the grooved rails directly beneath the workers becomes muddy and loses its precise parallel edges, merging inconsistently with the pavement. (center, moderate)
- gemini-3.1-pro-preview: The groove of the leftmost rail appears to fill in and disappear into the concrete surface unnaturally near the bottom edge of the frame. (bottom-left, moderate)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at middle-right, center

- gpt-6-sol: The workers' hands and the object between them are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of both workers lack clear definition, and the objects they are interacting with on the track appear as indistinct, smeared colored blobs (like the red shape next to the orange worker) rather than discernible tools. (center, strong)
- gemini-3.1-pro-preview: The hands of both workers and whatever tools they are supposed to be using are merged into a continuous, blurry gray mass on the track without distinct fingers or handles. (center, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The stack of pallets and orange traffic cones near the fence are rendered as blurred, indistinct blocks of color without structural details. (center, moderate)
- gemini-3.1-pro-preview: Behind the fence, one of the orange traffic cones appears to be misshapen or partially melted compared to a normal cone. (middle-left, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The point where the tracks diverge lacks any physical switching hardware like moving points, throw rods, or tie plates; the rails simply melt smoothly into the concrete in a soft 'V' shape. (center, strong)

## x-two-R-5.jpg: mean P(AI) 0.07 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.22
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**composition_or_staging**: score 3, raised in 3/9 calls, at center, whole-image

- claude-opus-5.5: The two workers kneeling neatly by the rail and centered in frame look somewhat staged, like stock footage (center, weak)
- claude-opus-5.5: The workers are kneeling on the rails in a way that looks somewhat posed, like a stock footage frame, but it is still plausible. (center, weak)
- claude-opus-5.5: The clean, cinematic stock-footage framing at 720p could fit generated video, but nothing specific points to generation. (whole-image, weak)

**track_geometry**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Several closely spaced rail edges near the workers' hands are difficult to distinguish, making the junction somewhat ambiguous. (center, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The workers’ hands and the small object at the rail junction are difficult to distinguish clearly. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and the small object between them are hard to distinguish; this could suggest generated detail, though rain and image resolution also explain it. (bottom-right, weak)

## x-two-R-6.jpg: mean P(AI) 0.30 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.20 / 0.15 / 0.30
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.99

**people_anatomy**: score 14, raised in 4/9 calls, at middle-right, bottom-right, center, bottom-center

- gpt-6-sol: The orange-clad worker’s lower legs are difficult to distinguish from the dark wet ground. (middle-right, weak)
- gpt-6-sol: The orange-clad worker’s boots and knees blend into the dark wet pavement, making their outlines hard to distinguish. (bottom-right, weak)
- gemini-3.1-pro-preview: The right hand of the worker on the left merges indistinctly into the metal surface of the rail, lacking defined fingers or a glove outline. (center, strong)
- gemini-3.1-pro-preview: The left arm and hand of the worker on the right terminate in an undefined dark mass that blends into his leg and the ground. (middle-right, strong)

**tools_or_small_objects**: score 6, raised in 2/9 calls, at center, middle-right

- gpt-6-sol: The left worker's hand and the object beside the rail are difficult to make out precisely. (center, weak)
- gemini-3.1-pro-preview: There is an amorphous, dark, blob-like object resting on the ground next to the left worker's knee that does not resemble a recognizable tool or piece of equipment. (center, strong)
- gemini-3.1-pro-preview: A brown, textured, organic-looking blob sits on the ground to the right of the right worker, looking more like debris or an artifact than a logical object in this context. (middle-right, moderate)

**track_geometry**: score 6, raised in 1/9 calls, at bottom-center, middle-left

- gemini-3.1-pro-preview: The intersecting rails lack proper switch mechanisms (like frogs or movable points); the rails simply merge into one another or cross as solid continuous lines, which would block wheel flanges. (bottom-center, strong)
- gemini-3.1-pro-preview: The left rail of the track curving towards the left building bay appears to vanish into the concrete before reaching the doorway, while the right rail continues. (middle-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, bottom-center

- gemini-3.1-pro-preview: The chain-link fencing in the background exhibits a messy, inconsistent pattern rather than distinct, regular wire links. (middle-left, moderate)
- gemini-3.1-pro-preview: The objects or piles of debris on the ground next to the knees of both workers are amorphous, unidentifiable blobs with no clear structure. (bottom-center, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at center, whole-image

- claude-opus-5.5: Both workers kneel on a single track in a somewhat stock-footage-like posed arrangement (center, weak)
- claude-opus-5.5: The scene is cleanly composed like stock footage, with two workers posed symmetrically on the rails. That staging could suggest generated video. (whole-image, weak)

## x-two-R-7.jpg: mean P(AI) 0.18 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.20
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.20

**track_geometry**: score 8, raised in 2/9 calls, at center, bottom-left, bottom-center

- claude-opus-5.5: Two track pairs diverge without any switch/frog connection; left pair curves into left shed while right pair runs straight, and the tracks seem to emerge separately rather than from a coherent turnout (center, moderate)
- gemini-3.1-pro-preview: The outer rail of the left track abruptly fades out and completely vanishes near the bottom edge of the image. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the right track is abnormally depicted with three or four parallel, somewhat wavy metallic lines that do not form a realistic grooved rail profile. (bottom-center, strong)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish, leaving a small area of visual ambiguity. (middle-right, weak)
- gpt-6-sol: The workers' hands and the small objects at the rail are hard to distinguish, leaving their precise interaction unclear. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small items beside the rail are hard to distinguish, leaving some local ambiguity. (middle-right, weak)

**people_anatomy**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The kneeling workers' hands lack distinct fingers or discernible tools, instead appearing as blurred, indistinct blobs melting into the ground. (middle-right, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence in the background is structurally inconsistent, with its criss-cross mesh pattern dissolving into blurry gray smudges in several places. (center, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: A thin overhead wire extends inward from the right side but abruptly fades into the sky before connecting to a pole or building. (top-right, moderate)

## x-two-R-8.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.15 / 0.22
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.98

**track_geometry**: score 8, raised in 2/9 calls, at bottom-center, bottom-right, bottom-left

- gemini-3.1-pro-preview: The rails between and under the workers merge, split, and disappear into the ground in a physically impossible manner, failing to form a coherent track switch or intersection. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails where the workers are positioned do not look like solid steel; they dissolve into formless, muddy shapes that do not connect logically. (bottom-right, strong)
- gemini-3.1-pro-preview: The tracks on the left curve have an unusually narrow gauge, and the inner rail structure looks somewhat painted on or inconsistent. (bottom-left, moderate)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at center, middle-right, bottom-right

- gpt-6-sol: The workers' hands and nearby small objects are hard to distinguish, with some dark shapes blending together. (center, weak)
- gpt-6-sol: The workers' hands and small items at the rail are difficult to distinguish and look somewhat muddled. (middle-right, weak)
- gemini-3.1-pro-preview: The area where the workers' hands are engaged with the track consists of amorphous, blurry blobs rather than definable tools or track components. (center, moderate)
- gemini-3.1-pro-preview: The objects or tools the workers are supposed to be manipulating are completely undefined and blend into the ground. (bottom-right, moderate)

**people_pose_or_placement**: score 6, raised in 2/9 calls, at middle-right, bottom-right

- gemini-3.1-pro-preview: The worker on the right has indistinct, fused lower limbs, and there appears to be an extra, detached boot-like object lying on the ground just to his right. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right (in orange) appears to be kneeling on undefined, blobby masses rather than a solid surface or distinct rails. (bottom-right, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at top-right, whole-image, center

- gpt-6-sol: The dark shed interior is indistinct, which could conceal generated detail, though the low light and water spots readily explain it. (top-right, weak)
- claude-opus-5.5: The image is slightly soft overall with a compressed, video-frame look. Fine details such as the workers' hands are somewhat smeared, which is mildly ambiguous. (whole-image, weak)
- gemini-3.1-pro-preview: The immediate area surrounding the workers, their hands, and the tracks they are touching has a distinctly 'painterly' and smeared texture, lacking the photographic sharpness seen in other parts of the image. (center, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The right arm of the worker on the left (in yellow) seems to merge directly into the ground without clear definition of a hand. (bottom-right, strong)

## x-two-R-9.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.12 / 0.25 / 0.20
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**tools_or_small_objects**: score 14, raised in 4/9 calls, at bottom-center, bottom-right

- claude-opus-5.5: The tool bag holds wrenches and spanners with plausible shapes. Both bags look slightly smeared and indistinct. (bottom-center, weak)
- gemini-3.1-pro-preview: The tool bag sitting next to the worker in the yellow vest contains an amalgamation of jagged, indistinct shapes rather than recognizable tools. (bottom-center, strong)
- gemini-3.1-pro-preview: The object resting on the outer rail on the right side is an amorphous, unrecognizable blob of texture resembling garbage rather than track equipment. (bottom-right, moderate)
- gemini-3.1-pro-preview: The tools visible in the open bag beside the worker on the left are indistinct, melted-looking blobs that do not resemble real tools. (bottom-center, moderate)

**camera_or_windscreen**: score 8, raised in 3/9 calls, at whole-image, top-right, top-center

- gemini-3.1-pro-preview: There are uniform, circular artifacts resembling water spots overlaid across the entire image that look like an artificial digital filter rather than actual lens droplets. (whole-image, moderate)
- gemini-3.1-pro-preview: The simulated water droplets or bokeh effects overlaid on the dark doorway exhibit a faint, unnatural grid-like pattern. (top-right, strong)
- gemini-3.1-pro-preview: The simulated water droplets or bokeh on the lens appear as perfectly flat, uniform gray circles that lack any realistic optical refraction or highlights. (top-center, strong)

**track_geometry**: score 7, raised in 3/9 calls, at center

- gpt-6-sol: The closely spaced, crossing rails near the workers are visually difficult to trace at a glance, though they could be part of the switch. (center, weak)
- gemini-3.1-pro-preview: The train rails in the middle of the junction intersect and merge into each other nonsensically, lacking actual mechanical switch components like points or a frog. (center, strong)
- gemini-3.1-pro-preview: The inner rails of the two separate tracks converge and melt together at the point where the workers are kneeling, lacking any logical switch points or frog, forming an impossible track layout. (center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The black boots of the worker in the yellow vest lack distinct shape and seem to melt seamlessly into the dark, wet ground. (center, moderate)
- gemini-3.1-pro-preview: The lower half of the worker in the yellow jacket is malformed; his legs appear to blend into the ground or are positioned at impossible angles. (center, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The stack of wooden pallets near the fence in the background is structurally malformed, with uneven and misaligned slats. (middle-left, moderate)
- gemini-3.1-pro-preview: The stacked pallets visible behind the wire fence are rendered as a fused, messy lattice rather than distinct wooden boards. (middle-left, weak)

## y-group-L-1.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.06
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.72

**people_anatomy**: score 8, raised in 3/9 calls, at middle-left, bottom-left, bottom-right

- gpt-6-sol: The kneeling workers’ hands and legs are hard to distinguish where they overlap near the rails. (middle-left, weak)
- gemini-3.1-pro-preview: The limbs of the three workers are indistinct, blending into each other and the ground; the central worker has a noticeably misshapen helmet and head area. (bottom-left, strong)
- gemini-3.1-pro-preview: Worker hands blend indistinctly into the rail. (bottom-right, moderate)
- gemini-3.1-pro-preview: Hands and tools appear as blurry blobs. (bottom-left, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The rails of the track on the left are uneven, overly wide in sections, and appear to merge or lose their defined shape near where the workers are positioned. (bottom-left, strong)
- gemini-3.1-pro-preview: Rail geometry loses definition near worker. (bottom-right, moderate)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at middle-left, bottom-left

- gpt-6-sol: The workers' hands and small items around the left rails are hard to distinguish clearly. (middle-left, weak)
- gemini-3.1-pro-preview: The tools or equipment the group of workers are ostensibly using are rendered as undefined, blurry blobs rather than recognizable objects. (bottom-left, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, center

- gpt-6-sol: Small objects deep inside the depot are blurry and difficult to identify. (top-center, weak)
- gemini-3.1-pro-preview: The tools, workbenches, and general equipment inside the maintenance shed are depicted as smudged, painterly shapes lacking photographic clarity. (center, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The crouching worker on the right appears to lack defined legs or feet, with the torso appearing to rest directly on or blend into the tracks. (bottom-right, strong)

## y-group-L-10.jpg: mean P(AI) 0.48 (fails)

- anthropic/claude-opus-5.5: 0.15 / 0.72 / 0.40
- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**track_geometry**: score 16, raised in 5/9 calls, at bottom-left, center, bottom-center, bottom-right

- claude-opus-5.5: Left track rails curve in from the left but the inner rail seems to diverge oddly; the rail pair near the workers widens and the right rail runs straight while the left curves, inconsistent gauge (bottom-left, moderate)
- claude-opus-5.5: Tracks entering depot pits don't clearly connect to the branch tracks in foreground; foreground rails end/merge into concrete without logical connection to the shed tracks (center, moderate)
- claude-opus-5.5: Left track's right rail curves into the center and merges/terminates ambiguously; rails near bottom bend unnaturally without consistent gauge to the depot tracks (bottom-center, moderate)
- claude-opus-5.5: Tracks in foreground don't clearly connect to the inspection pits in the shed; rails appear to fade into concrete (center, moderate)

**people_anatomy**: score 14, raised in 5/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Group of three kneeling workers has merged limbs and ambiguous hands around a central point; poses look generic and slightly blended (bottom-left, moderate)
- gpt-6-sol: The workers' hands and the point where their tools meet the rail are difficult to distinguish. (bottom-left, weak)
- gemini-3.1-pro-preview: The hands of the workers, especially the middle worker in yellow, are rendered as featureless blobs that melt directly into the rail without any discernible fingers or tools. (bottom-left, moderate)
- gemini-3.1-pro-preview: The kneeling worker's legs are malformed; the right leg appears to end in a stump or bend unnaturally, and the left boot is misshapen and merges with the ground. (bottom-right, strong)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The zig-zag structural steel trusses supporting the depot roof are highly irregular, with diagonal struts that are squiggly, do not connect to joints logically, or disappear mid-span. (top-center, strong)
- gemini-3.1-pro-preview: The steel trusses supporting the roof structure are squiggly rather than straight, and the diagonal cross-bracing lines are inconsistent and do not connect logically. (top-center, strong)
- gemini-3.1-pro-preview: Some of the diagonal bracing beams within the roof structure of the shed appear to disconnect or blend into one another illogically upon close inspection. (top-center, moderate)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Three workers huddled tightly over a rail with indistinct hands and tools; staged stock-like composition (bottom-left, weak)
- gemini-3.1-pro-preview: The lower legs and feet of the worker kneeling on the right track are indistinct and appear to merge amorphously with the ground and shadow. (bottom-right, moderate)
- gemini-3.1-pro-preview: The group of three workers have indistinct hands and limbs that seem to merge into one another and into the tracks they are purportedly working on, with no clearly defined tools. (bottom-left, moderate)

**background_clutter**: score 5, raised in 4/9 calls, at middle-right, middle-left

- claude-opus-5.5: Workshop clutter along walls is plausible but somewhat smeared and indistinct (middle-right, weak)
- gpt-6-sol: Distant equipment and figures are indistinct, leaving some fine details hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The equipment and structures along the inside walls of the shed melt together into vague, unrecognizable shapes lacking geometric definition. (middle-left, moderate)
- gemini-3.1-pro-preview: The equipment and objects lining the walls inside the shed are indistinct, blurry, and lack coherent structure, which is characteristic of AI-generated backgrounds. (middle-right, weak)

## y-group-L-2.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.15
- openai/gpt-6-sol: 0.06 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 12, raised in 3/9 calls, at center, bottom-left, bottom-right

- gemini-3.1-pro-preview: The tracks in the foreground curve towards the building but fade out and disappear into the ground surface before actually entering the shed. Furthermore, they do not align with the inspection pits visible inside. (center, strong)
- gemini-3.1-pro-preview: The rails underneath the group of three workers do not form a consistent track gauge, branch at impossible angles, and fail to connect continuously to the tracks visible inside the shed. (bottom-left, strong)
- gemini-3.1-pro-preview: The rail that the lone worker is kneeling on appears to pass straight through his leg, and the parallel line of the flangeway disappears entirely near him. (bottom-right, strong)
- gemini-3.1-pro-preview: The two curving branch tracks abruptly end in the flat concrete area without joining together or forming any logical switch mechanism. (center, strong)

**people_anatomy**: score 11, raised in 5/9 calls, at middle-left, bottom-left

- gpt-6-sol: The workers’ hands and faces are indistinct, making their exact shapes hard to verify. (middle-left, weak)
- gpt-6-sol: The crouching workers’ hands and tools are difficult to distinguish clearly, leaving some detail ambiguous. (middle-left, weak)
- gemini-3.1-pro-preview: The hands of the workers kneeling on the left track are poorly defined blobs that merge seamlessly with the tools and the track surface. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker in the orange vest on the right side of the left group has a left arm that ends abruptly in a stump without a hand. (bottom-left, strong)

**buildings**: score 7, raised in 3/9 calls, at top-center, top-right

- gemini-3.1-pro-preview: The diagonal beams in the roof trusses of the shed are highly inconsistent; many do not connect to the horizontal beams, bend unnaturally, or disappear mid-air. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal cross-bracing within the metal roof trusses is highly inconsistent, with structural lines ending mid-air or failing to connect at logical joints. (top-center, moderate)
- gemini-3.1-pro-preview: The steel roof trusses form impossible, non-structural geometric patterns (zigzags and random intersecting lines) instead of coherent, load-bearing beams. (top-right, moderate)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-right, middle-left

- gemini-3.1-pro-preview: The overhead wires visible against the sky are disjointed, with gaps and unnatural zig-zag shapes that do not form continuous tensioned lines. (top-right, moderate)
- gemini-3.1-pro-preview: The tall grey pole on the left side appears to intersect and merge directly into the solid fascia board of the building's overhang, rather than passing in front of or behind it. (middle-left, strong)

**people_clothing_or_gear**: score 5, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The helmet and attached ear defenders of the leftmost worker appear as a single, fused, asymmetrical shape rather than distinct manufactured pieces of equipment. (bottom-left, moderate)
- gemini-3.1-pro-preview: The worker's lower body and the orange tool he is using blend seamlessly into the steel rail and the surrounding shadow. (bottom-right, strong)

## y-group-L-3.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.75 / 0.75 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 20, raised in 6/9 calls, at center, bottom-right, bottom-left, middle-left

- claude-opus-5.5: The curved embedded tram rails in the foreground do not connect coherently to the depot pit tracks; the left pair diverges oddly and the right pair curves away without matching any track in the shed. (center, moderate)
- claude-opus-5.5: The curved embedded tracks in the foreground do not connect logically to the straight pit tracks in the depot; the left track pair spreads unusually wide and the rails seem to end or merge ambiguously. (center, moderate)
- claude-opus-5.5: The two foreground track pairs curve into the depot, but their connection to the pit tracks under the shed is inconsistent; the rails seem to fade into the pavement without proper turnouts. (center, moderate)
- claude-opus-5.5: The right track's rails converge oddly. The left rail near the worker is a single groove rail that does not maintain a consistent gauge with the right rail. (bottom-right, moderate)

**people_anatomy**: score 14, raised in 5/9 calls, at middle-left, middle-right, bottom-left, bottom-right

- gpt-6-sol: The crouching workers’ hands and faces are too small and soft to inspect clearly. (middle-left, weak)
- claude-opus-5.5: The right-hand worker's legs and boots merge oddly with a dark bag shape behind him. (middle-right, weak)
- gemini-3.1-pro-preview: The hands and boots of the workers in the left group are amorphous blobs that seem to melt into the concrete and surrounding objects. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker kneeling on the right track has featureless stumps for hands, and his lower body lacks defined anatomical structure, blending into the rail. (bottom-right, strong)

**tools_or_small_objects**: score 12, raised in 8/9 calls, at bottom-left, middle-right

- gpt-6-sol: The small orange items beside the workers are somewhat indistinct, making their exact shapes hard to verify. (bottom-left, weak)
- gpt-6-sol: The right worker’s hand-to-rail contact is indistinct, though this could be due to distance. (middle-right, weak)
- claude-opus-5.5: The orange objects beside the workers are indistinct blobs with no clear tool form. (bottom-left, weak)
- claude-opus-5.5: The orange objects on the ground are indistinct blobs with no clear tool shape. (bottom-left, weak)

**people_pose_or_placement**: score 9, raised in 4/9 calls, at middle-left, center, bottom-right

- claude-opus-5.5: Three workers kneel in a tight staged cluster on the left track, and a single kneeling worker on the right track mirrors them. The grouping looks composed rather than doing a coherent task. (middle-left, moderate)
- claude-opus-5.5: The three workers cluster closely, with overlapping, ambiguous limbs, and the middle kneeling worker's legs merge with the rail. (middle-left, moderate)
- claude-opus-5.5: Four workers kneel on the rails in a staged way and do not appear to be doing any identifiable task. The tools are vague orange blobs. (center, moderate)
- gemini-3.1-pro-preview: The person on the right track is kneeling on the rail with their face basically against the ground, holding what looks like a chunk of metal embedded in their leg, in a pose that makes little sense. (bottom-right, strong)

**buildings**: score 9, raised in 5/9 calls, at top-center, center

- claude-opus-5.5: The roof truss structure is mostly coherent but has irregular repeating struts and inconsistent column spacing. (top-center, weak)
- claude-opus-5.5: The roof truss structure is broadly coherent, but the bracing pattern repeats with some irregular, merging members. (top-center, weak)
- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof trusses of the shed is chaotic and inconsistent, not forming a coherent structural engineering pattern. (top-center, moderate)
- gemini-3.1-pro-preview: In the background, the inspection pit structures inside the shed are distorted, asymmetrical, and don't align logically with tracks. (center, strong)

## y-group-L-4.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.95

**people_anatomy**: score 19, raised in 6/9 calls, at bottom-right, bottom-left

- claude-opus-5.5: Right worker's legs and boots blend into an indistinct mass; hands merge with the tool on the rail (bottom-right, moderate)
- claude-opus-5.5: Workers' hands and tools merge into rails; faces hidden under helmets, limbs somewhat mushy (bottom-left, weak)
- claude-opus-5.5: Hands of the kneeling workers are blurred and merge with tools; the tools themselves are indistinct (bottom-left, weak)
- gemini-3.1-pro-preview: The worker on the right track has a left hand that appears as an undefined fleshy stump merging into the track, lacking fingers or a recognizable tool. (bottom-right, strong)

**track_geometry**: score 17, raised in 6/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Left track rails converge oddly; the workers kneel on a rail pair whose gauge and curvature look inconsistent, with an inner rail merging into the slab edge (bottom-left, moderate)
- claude-opus-5.5: Left track rails merge and taper oddly; the inner rail near the kneeling workers bends and widens inconsistently, gauge not constant (bottom-left, moderate)
- claude-opus-5.5: Right track rails curve but appear to emerge from nowhere toward the depot; the curve does not connect cleanly to the inspection pits in the background (bottom-right, moderate)
- claude-opus-5.5: Left track rails curve oddly; the inner rail where workers kneel appears to merge with a raised curb/slab edge rather than a coherent rail pair with consistent gauge (bottom-left, moderate)

**tools_or_small_objects**: score 15, raised in 9/9 calls, at bottom-center, middle-left, bottom-left, bottom-right

- gpt-6-sol: The overlapping hands and small objects at the left rail junction are difficult to distinguish clearly. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and small items at the rail junction are difficult to distinguish precisely. (middle-left, weak)
- gpt-6-sol: The overlapping hands, tools, and rail hardware between the central workers are difficult to distinguish precisely. (bottom-center, weak)
- claude-opus-5.5: Bags and tools near the workers' knees are amorphous blobs without clear identity (bottom-center, moderate)

**buildings**: score 7, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The metal trusses and beams forming the roof structure of the shed cross in erratic ways, with some beams ending abruptly or not connecting logically to support the roof. (top-center, moderate)
- gemini-3.1-pro-preview: The steel truss structure of the roof contains numerous diagonal support beams that either intersect nonsensically, end abruptly without connecting to a main beam, or create structurally illogical patterns. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal braces in the roof's metal truss structure connect chaotically and lack logical architectural consistency upon close inspection. (top-center, moderate)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric, cinematic staging with workers neatly posed at two diverging tracks, film-like color grade typical of video generators (whole-image, moderate)
- claude-opus-5.5: Highly symmetric cinematic composition: two curving branch tracks mirrored left/right with workers clustered on each, like a staged trolley-problem setup (whole-image, moderate)
- claude-opus-5.5: Highly symmetric, cinematic composition with workers neatly placed on two diverging tracks, typical of AI-generated stock scenes (whole-image, moderate)

## y-group-L-5.jpg: mean P(AI) 0.54 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.75 / 0.35 / 0.68
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.99

**track_geometry**: score 18, raised in 5/9 calls, at bottom-center, center, bottom-left

- claude-opus-5.5: Left track rails curve and converge oddly; the left track's right rail and the right track's left rail sweep toward each other without a coherent switch or junction connecting to the depot pit tracks. (bottom-center, moderate)
- claude-opus-5.5: The tracks in the foreground do not clearly connect to the pit lanes inside the shed; the rails fade into concrete before reaching the building. (center, moderate)
- claude-opus-5.5: Left track's rails curve inconsistently; the right rail of the left track widens into a broad flat strip near the bottom, and gauge between the rails varies along the curve (bottom-center, moderate)
- claude-opus-5.5: Tracks entering the depot do not clearly connect to the inspection pits; the curved embedded rails in the foreground fade out into plain concrete without any visible continuation toward the bays (center, moderate)

**people_anatomy**: score 13, raised in 4/9 calls, at bottom-left, bottom-right

- gpt-6-sol: Where the three workers huddle, their hands and tools are difficult to distinguish from one another. (bottom-left, weak)
- gemini-3.1-pro-preview: The lower body of the worker is an indistinct dark mass lacking clearly defined legs, feet, or kneeling posture. (bottom-right, strong)
- gemini-3.1-pro-preview: The worker kneeling on the right track is missing his right leg/foot; his lower body appears to melt nonsensically into the ground and shadow. (bottom-right, strong)
- gemini-3.1-pro-preview: The three workers on the left have poorly defined, blocky hands that appear to blend into the tools they are holding or the ground, and the legs of the worker on the right of this group merge unnaturally into the concrete. (bottom-left, strong)

**tools_or_small_objects**: score 10, raised in 6/9 calls, at bottom-left, bottom-center, bottom-right

- gpt-6-sol: The workers’ hands and small equipment overlap in a hard-to-parse cluster at the rail. (bottom-left, weak)
- gpt-6-sol: Hands and small objects where the three workers meet are difficult to distinguish and appear somewhat merged. (bottom-center, weak)
- claude-opus-5.5: Tools and bags near the workers are indistinct blobs with no identifiable equipment. (bottom-left, moderate)
- gemini-3.1-pro-preview: The object resting on the ground to the right of the worker appears as a shapeless, melted blob rather than a defined tool bag. (bottom-right, moderate)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: Several diagonal cross-bracing rods in the roof's steel structure simply break off or disappear before connecting to the main beams. (top-center, moderate)
- gemini-3.1-pro-preview: The structural metal beams in the roof trusses form an overly complex, illogical pattern where many diagonal supports intersect randomly or terminate in mid-air without connecting to other structures. (top-center, strong)
- gemini-3.1-pro-preview: The metal trusses supporting the roof have structural inconsistencies, with several diagonal beams intersecting awkwardly or ending without connecting to load-bearing nodes. (top-center, strong)

**people_pose_or_placement**: score 7, raised in 4/9 calls, at bottom-left

- claude-opus-5.5: Three workers kneel tightly clustered on one rail, posed symmetrically, and the right worker kneels alone; the arrangement looks staged and generic. (bottom-left, weak)
- claude-opus-5.5: Three workers huddled together with nearly identical kneeling poses over a rail with indistinct tools; hands and tools merge into blurry shapes (bottom-left, weak)
- gemini-3.1-pro-preview: The hands of the leftmost worker in orange merge seamlessly into an undefined, chaotic dark shape instead of holding distinct tools. (bottom-left, strong)
- gemini-3.1-pro-preview: The leftmost worker in the orange vest has his left leg blending indistinguishably into the brown tool bag next to him. (bottom-left, moderate)

## y-group-L-6.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 17, raised in 3/9 calls, at bottom-right, bottom-left, bottom-center

- gemini-3.1-pro-preview: The worker kneeling on the right track has severely distorted legs, with a shoe or foot-like object appearing disconnected near their knee, and the leg seems to merge with the track. (bottom-right, strong)
- gemini-3.1-pro-preview: The limbs of the worker on the far left are poorly defined and appear to melt into the ground and their own clothing, lacking clear anatomical structure. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker in the orange jacket has what appears to be an extra, disembodied boot or lower leg section resting on the ground to the right of his knee. (bottom-center, strong)
- gemini-3.1-pro-preview: The leftmost worker's left boot is positioned at an impossible angle and does not seem to connect naturally to a leg, while the workers' lower bodies blend into a confusing mass. (bottom-left, strong)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The left group’s overlapping gloves and equipment are difficult to distinguish precisely. (bottom-center, weak)
- gpt-6-sol: The three workers’ hands and small objects around the rail are hard to distinguish and appear visually crowded. (bottom-left, weak)
- gemini-3.1-pro-preview: The items the workers are interacting with on the ground lack definition and look like amorphous blobs instead of identifiable tools. (bottom-left, moderate)
- gemini-3.1-pro-preview: Where the three workers on the left should be holding tools and working on the track, their hands and the tools merge into indistinct, muddy blobs. (bottom-left, strong)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-left

- gemini-3.1-pro-preview: The tracks beneath the three workers consist of multiple extra rails that merge and branch nonsensically, rather than a standard two-rail track. (bottom-left, strong)
- gemini-3.1-pro-preview: The metal rails underneath the group of three workers are nonsensical; they split, merge into each other, and one rail abruptly ends near the knee of the leftmost worker. (bottom-left, strong)
- gemini-3.1-pro-preview: The tram tracks under the left group of workers split into multiple thin, parallel metallic lines that merge and disappear illogically. (bottom-left, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: A thin wire or line descends from the top of the frame and terminates abruptly in mid-air without connecting to any structure. (top-left, strong)
- gemini-3.1-pro-preview: An overhead wire appears to pass directly in front of the central vertical pole without any visible insulator or attachment hardware. (top-center, moderate)

**people_pose_or_placement**: score 2, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The worker on the right track is kneeling in a way that makes his left lower leg appear missing, ending in a poorly defined boot blob. (bottom-right, moderate)

## y-group-L-7.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.15 / 0.08 / 0.08
- anthropic/claude-opus-5.5: 0.85 / 0.80 / 0.68
- google/gemini-3.1-pro-preview: 0.99 / 0.75 / 0.99

**track_geometry**: score 18, raised in 6/9 calls, at bottom-left, bottom-right, bottom-center, center

- claude-opus-5.5: Embedded tram rails curve from the depot but don't clearly connect to the inspection pit tracks; the rails seem to sweep in from nowhere and the left pair ends ambiguously toward the building edge. (bottom-left, moderate)
- claude-opus-5.5: Left track's curved rails don't connect logically to the depot's inspection pits; the rails sweep in from nowhere and the gauge looks inconsistent between the two rails as they curve (bottom-left, moderate)
- claude-opus-5.5: Right track's rails curve toward the hall but do not clearly align with any of the shed's pit tracks (bottom-right, moderate)
- claude-opus-5.5: The two curved grooved-rail tracks in the foreground do not clearly link to the straight pit tracks inside the depot. The left pair veers toward the side door and the right pair toward the right wall, which is an odd and illogical layout. (bottom-center, moderate)

**people_anatomy**: score 15, raised in 7/9 calls, at middle-left, center, bottom-left, bottom-center, bottom-right

- gpt-6-sol: The crouching workers’ overlapping hands and tools are difficult to distinguish. (middle-left, weak)
- gpt-6-sol: The crouching workers' hands and overlapping legs are difficult to distinguish clearly. (middle-left, weak)
- claude-opus-5.5: The center kneeling worker's legs and boots are oddly fused and folded, with indistinct feet. (center, weak)
- claude-opus-5.5: Kneeling worker in the center has odd, merged legs and boots; limbs blend into the body shape (center, moderate)

**buildings**: score 10, raised in 5/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is broadly coherent, but the depot pits and tracks inside don't line up cleanly with the outdoor rails. (top-center, weak)
- claude-opus-5.5: Roof trusses repeat in a plausible way, but the bracing intersections are somewhat irregular and smeared toward the vanishing point (top-center, weak)
- gemini-3.1-pro-preview: The zig-zag truss structure of the shed roof is nonsensical; diagonal beams intersect randomly, pass through each other, and do not meet at proper structural nodes. (top-center, strong)
- gemini-3.1-pro-preview: Roof truss bracing is inconsistent. (top-center, moderate)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at whole-image

- gpt-6-sol: Fine details are soft, especially on the workers, though this could result from the camera or image resolution. (whole-image, weak)
- claude-opus-5.5: Film-like grain and a soft, cinematic grade typical of video-model output; detail in the background is smeared. (whole-image, moderate)
- claude-opus-5.5: Smooth, slightly soft film-like grade with clean surfaces, typical of a generative video frame (whole-image, weak)
- claude-opus-5.5: A soft, filmic grain with smeared fine detail in the background clutter (equipment along the walls) is typical of AI video-frame generation. (whole-image, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Three workers kneel in a neat row at a rail with nothing visible being worked on; the worker in the center kneels on bare concrete away from any rail, a staged arrangement. (center, moderate)
- claude-opus-5.5: Workers kneel in tidy, staged poses on the rails and hands appear to touch the rail with no visible tools or task, which looks more like a composition than real work (center, moderate)
- claude-opus-5.5: The middle worker kneels on bare concrete between the tracks, not working on any rail. All four workers are evenly spaced and posed alike without visible tools, which looks like generic staging. (center, moderate)

## y-group-L-8.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.08 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.70 / 0.72 / 0.72
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 25, raised in 6/9 calls, at bottom-left, bottom-right, center

- claude-opus-5.5: Left track curves then rails seem to merge oddly into the depot floor; the groove rails don't connect cleanly to the pit tracks in the background, and track paths are ambiguous (bottom-left, moderate)
- claude-opus-5.5: Left track curves sweep in from the left but don't clearly connect to the pit tracks in the depot; rails appear to merge vaguely into the concrete floor without proper switch or continuation (bottom-left, moderate)
- claude-opus-5.5: Right track pair curves toward the depot but fades out near the pillar without a coherent connection to the inspection pits (bottom-right, moderate)
- claude-opus-5.5: Left track rails curve and merge oddly toward the depot; the inner rail path near workers doesn't connect cleanly with the curved outer rail, and the rails fade into concrete without clear continuation into the pit tracks (bottom-left, moderate)

**people_anatomy**: score 15, raised in 8/9 calls, at bottom-left, bottom-center, middle-left, bottom-right

- gpt-6-sol: The clustered workers' hands and their contact with the rail are difficult to distinguish. (bottom-left, weak)
- gpt-6-sol: The overlapping workers' hands and legs are difficult to distinguish at this resolution. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the object between them are indistinct, making those details hard to verify. (bottom-left, weak)
- claude-opus-5.5: Group of four workers huddled with overlapping limbs; figures blend together, hands and tools are indistinct mush (middle-left, moderate)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at middle-left, center, bottom-right, bottom-left

- claude-opus-5.5: Long rod/tool extending from left group lies across rail ambiguously, with unclear origin and holder (middle-left, weak)
- claude-opus-5.5: Long bars/tools near the left group are thin and ambiguous, with no clear grip or purpose (center, weak)
- claude-opus-5.5: Bag next to the right worker is a vague blob with indistinct shape (bottom-right, weak)
- gemini-3.1-pro-preview: The brown object resting on the track next to the right worker is a shapeless, undefined blob rather than a recognizable tool or work bag. (bottom-right, moderate)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The metal truss structures in the roof have diagonal beams that terminate in mid-air or merge illogically with other beams instead of forming a coherent load-bearing frame. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal steel beams in the roof trusses intersect randomly, start and stop abruptly, and form structurally impossible shapes. (top-center, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires visible at the top of the image fade out into the sky rather than connecting to the structural supports or continuing along the track. (top-center, moderate)
- gemini-3.1-pro-preview: The thin overhead power lines visible against the sky are fragmented and disjointed, failing to form continuous, physically plausible cables. (top-center, strong)

## y-group-L-9.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.04 / 0.06 / 0.05
- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 17, raised in 5/9 calls, at bottom-left, bottom-right

- gpt-6-sol: The three workers' overlapping hands and equipment are difficult to distinguish clearly. (bottom-left, weak)
- gpt-6-sol: The three workers' overlapping hands and equipment are difficult to distinguish. (bottom-left, weak)
- gemini-3.1-pro-preview: The worker in the middle of the group of three lacks a discernible head or helmet, with the orange torso simply blending into the surroundings. (bottom-left, strong)
- gemini-3.1-pro-preview: The single worker on the right has a highly distorted white helmet that appears misaligned with the body, and the arms merge amorphously with the dark object in front of them. (bottom-right, strong)

**track_geometry**: score 14, raised in 3/9 calls, at bottom-center, bottom-left, center, bottom-right

- gemini-3.1-pro-preview: The junction where the tracks split lacks physical switch mechanisms like point blades or frogs; the lines representing the rails simply merge and smear into the concrete. (bottom-center, strong)
- gemini-3.1-pro-preview: The right rail of the left branching track completely disappears into the concrete exactly where the group of workers is positioned. (bottom-left, strong)
- gemini-3.1-pro-preview: There are no visible frogs, switches, or logical connecting joints where the curved foreground tracks should merge with the straight tracks inside the shed; the lines merely fade into the pavement. (center, strong)
- gemini-3.1-pro-preview: The perspective and alignment of the tracks curving into the shed do not logically connect with the straight inspection pits visible deeper inside the building. (center, strong)

**buildings**: score 9, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The metal trusses supporting the roof are a chaotic jumble of intersecting diagonal lines that do not form a logical, load-bearing structural framework. (top-center, strong)
- gemini-3.1-pro-preview: The zig-zag cross bracing in the main roof truss contains diagonal beams that end abruptly in mid-air or merge into other beams without proper joints, forming a structurally impossible pattern. (top-center, strong)
- gemini-3.1-pro-preview: The zig-zagging diagonal beams in the roof's metal trusses are chaotic, with many beams seemingly floating or terminating in mid-air without structural logic. (top-center, strong)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at bottom-left, center

- gpt-6-sol: The tools and hands where the three workers overlap are difficult to distinguish. (bottom-left, weak)
- gemini-3.1-pro-preview: A small red cart or object sitting between the tracks in the middle distance is a blurry, structureless shape without distinct wheels or edges. (center, moderate)

**composition_or_staging**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The scene looks symmetrical and staged like stock footage, which is a weak hint but common in real stock video. (whole-image, weak)
- claude-opus-5.5: Symmetric staged composition with workers placed neatly on each track, somewhat stock-like (whole-image, weak)
- claude-opus-5.5: The symmetrical, stock-footage-like staging of workers kneeling on the tracks is slightly posed, though it is common in real stock imagery. (whole-image, weak)

## y-two-L-1.jpg: mean P(AI) 0.58 (fails)

- openai/gpt-6-sol: 0.04 / 0.08 / 0.04
- anthropic/claude-opus-5.5: 0.75 / 0.80 / 0.62
- google/gemini-3.1-pro-preview: 0.95 / 0.98 / 0.95

**track_geometry**: score 23, raised in 6/9 calls, at center, bottom-left, middle-left, bottom-center, middle-right

- claude-opus-5.5: Curved tracks in foreground don't clearly connect to the inspection pit tracks inside the depot; the left track curves toward nowhere coherent and the right track pair diverges without matching any bay (center, moderate)
- claude-opus-5.5: Left track rails: the workers kneel on/between rails whose spacing appears inconsistent, the inner rail passing under the orange worker's knee merges oddly (bottom-left, moderate)
- claude-opus-5.5: The tracks curving into the depot do not clearly connect to the pit roads inside; the left and right curved rails seem to fade into the plain concrete apron rather than leading to specific bays. (center, moderate)
- claude-opus-5.5: The left branch's rails are unevenly spaced. The inner rail where the workers kneel wanders and seems to merge with the outer one near the bottom edge. (bottom-left, moderate)

**people_anatomy**: score 12, raised in 5/9 calls, at bottom-left, bottom-center

- claude-opus-5.5: Workers' hands converge on the rail with indistinct fingers and no clearly defined tool; poses look staged (bottom-left, weak)
- claude-opus-5.5: The workers' hands at the rail are blurry and merge with an indistinct tool; the boots and gear lack crisp definition. (bottom-left, weak)
- gemini-3.1-pro-preview: The leftmost foot of the worker in the yellow vest appears as an indistinct, shapeless blob melting into the ground rather than a defined boot. (bottom-left, strong)
- gemini-3.1-pro-preview: The right hand of the worker in the orange jacket seems to merge formlessly with the rail he is touching. (bottom-center, moderate)

**texture_noise_or_sharpness**: score 5, raised in 5/9 calls, at bottom-center, whole-image

- gpt-6-sol: The workers' hands and the object between them are hard to distinguish; this softness could conceal an AI artifact. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the rail section between them are too soft to resolve clearly. (bottom-center, weak)
- claude-opus-5.5: Film-like grain and soft tonal rendering, somewhat smooth concrete lacking fine wear detail (whole-image, weak)
- claude-opus-5.5: The image has a film-like grain and softness. The concrete texture is uniform and smooth, with few real-world stains or markings for a working depot. (whole-image, weak)

**buildings**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal bracing in the roof structure is chaotic, with beams intersecting randomly rather than forming a coherent structural pattern. (top-center, strong)
- gemini-3.1-pro-preview: The metal truss structure supporting the roof contains numerous intersecting beams that do not connect properly or terminate abruptly in mid-air. (top-center, moderate)

**composition_or_staging**: score 4, raised in 4/9 calls, at top-center, whole-image, bottom-left

- gpt-6-sol: The shed roof and inspection pits have a notably symmetrical composition, though the structure itself accounts for it. (top-center, weak)
- gpt-6-sol: The nearly symmetrical depot framing and prominently placed workers look somewhat staged. (whole-image, weak)
- claude-opus-5.5: Highly symmetrical cinematic stock-like framing with two hi-vis workers centered in an empty depot (whole-image, weak)
- claude-opus-5.5: Two workers in contrasting yellow and orange hi-vis kneel symmetrically on the rail in a neat, stock-photo-like pose that suits a prompt. (bottom-left, weak)

## y-two-L-10.jpg: mean P(AI) 0.30 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- openai/gpt-6-sol: 0.03 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.35

**track_geometry**: score 8, raised in 2/9 calls, at center, bottom-left, bottom-right

- gemini-3.1-pro-preview: There are no tracks leading from the concrete apron in the foreground into the maintenance pits visible inside the shed. (center, strong)
- gemini-3.1-pro-preview: The rail track directly beneath the kneeling workers seems to merge into the concrete or disappear abruptly beneath the person in orange. (bottom-left, strong)
- gemini-3.1-pro-preview: The right-hand track curve is uneven and the parallel lines defining the rails waver inconsistently. (bottom-right, moderate)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal members of the roof trusses intersect randomly and illogically, failing to form proper structural nodes or triangles. (top-center, strong)
- gemini-3.1-pro-preview: The roof trusses and support beams in the background hangar structure are chaotic; some lines intersect at impossible angles or disappear into the roof panels. (top-center, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: An overhead wire on the left side appears to pass directly through the solid structural framework of the roof. (top-left, strong)
- gemini-3.1-pro-preview: There are wires hanging near the roof structure that don't connect logically to poles or seem to float in the sky just outside the hangar. (top-center, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The small object (possibly a cart) located between the middle and right inspection pits is an indistinct, formless blob. (center, moderate)
- gemini-3.1-pro-preview: The maintenance pits in the center distance lack clear definition and the equipment scattered around them looks like formless blobs rather than distinct objects. (center, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-center, center

- gpt-6-sol: Distant equipment and structural details are indistinct, making those small areas difficult to verify. (top-center, weak)
- gpt-6-sol: The distant roof structure and equipment are dark and difficult to resolve, which leaves some details hard to verify. (top-center, weak)
- gpt-6-sol: Small objects deep inside the depot are indistinct, which could conceal generated details but is also consistent with distance. (center, weak)

## y-two-L-2.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.04 / 0.06 / 0.04
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Fine details around the workers’ hands and the rail junction are somewhat indistinct, which could conceal generated errors but is also consistent with image softness. (center, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The workers’ hands and the equipment between them are hard to distinguish and appear somewhat muddled. (middle-left, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The depot is framed with unusually strong near-symmetry around the central aisle. (whole-image, weak)

## y-two-L-3.jpg: mean P(AI) 0.45 (fails)

- anthropic/claude-opus-5.5: 0.30 / 0.60 / 0.10
- openai/gpt-6-sol: 0.04 / 0.08 / 0.02
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**track_geometry**: score 13, raised in 5/9 calls, at bottom-left

- claude-opus-5.5: The left track's rails converge and curve inconsistently; the rail under the workers seems to merge with another rail near the bag, and the gauge looks irregular. (bottom-left, moderate)
- claude-opus-5.5: The left track's rails look inconsistent: the worker kneels with one rail passing between the two figures, and the rail spacing and continuity near their knees appear muddled where the rails meet the ground. (bottom-left, moderate)
- gemini-3.1-pro-preview: The train tracks around the workers are disjointed, and an inexplicable, detached segment of rail appears near the yellow worker's knee. (bottom-left, strong)
- gemini-3.1-pro-preview: The steel rails of the left track abruptly disappear into the concrete surface right where the workers are positioned, failing to continue smoothly towards the shed. (bottom-left, strong)

**people_anatomy**: score 12, raised in 3/9 calls, at bottom-left, bottom-center

- gemini-3.1-pro-preview: The lower body of the worker in the yellow jacket is poorly rendered, with legs and boots blending into an indistinguishable mass that lacks proper anatomical structure. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker in the yellow jacket appears to have malformed lower legs and feet, with multiple boot-like shapes pointing in impossible directions. (bottom-center, strong)
- gemini-3.1-pro-preview: The right arm and hand of the worker in the orange jacket merge nonsensically into the ground or equipment they are working on. (bottom-left, strong)
- gemini-3.1-pro-preview: The legs and boots of the workers appear to melt into the ground and the rails. The worker in orange seems to have an indistinct or extra appendage near his left side. (bottom-left, strong)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The steel truss structure supporting the shed roof consists of chaotic, intersecting lines that do not form a logical, physically possible geometric framework. (top-center, strong)
- gemini-3.1-pro-preview: The complex steel roof truss structure in the far background of the shed breaks down into a chaotic, messy pattern of intersecting lines that do not form a logical physical structure. (top-center, strong)
- gemini-3.1-pro-preview: The roof trusses of the depot exhibit structural inconsistencies, with some diagonal beams fading out or connecting at angles that don't make sense. The skylight panels are irregularly shaped. (top-center, moderate)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish clearly. (bottom-center, weak)
- gemini-3.1-pro-preview: The bag or pile of items next to the worker in the orange jacket melts unnaturally into the texture of the concrete ground. (bottom-left, moderate)
- gemini-3.1-pro-preview: The bag or object sitting to the left of the orange-clad worker is a formless, blurry blob that lacks distinct features of a real tool bag. (bottom-left, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image, top-center

- claude-opus-5.5: The image has a cinematic, stock-footage color grade with soft, slightly smeared detail in the background equipment. (whole-image, weak)
- gpt-6-sol: The distant roof structure and equipment become hard to distinguish where many fine lines overlap. (top-center, weak)
- gemini-3.1-pro-preview: The entire image has a slightly soft, almost painterly texture, lacking the crisp, consistent detail expected in a real photograph of this resolution. (whole-image, moderate)

## y-two-L-4.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- openai/gpt-6-sol: 0.03 / 0.07 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.90 / 0.05

**track_geometry**: score 9, raised in 2/9 calls, at bottom-left, bottom-right, center

- gemini-3.1-pro-preview: The inner rail of the curved track on the left abruptly terminates just in front of the kneeling workers, with no switch points or structural continuation. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the curved track on the right fades away and completely disappears into the concrete as it approaches the building entrance. (bottom-right, strong)
- gemini-3.1-pro-preview: The tracks curving into the shed from the foreground do not logically connect to the rails running over the maintenance pits inside; they appear to fade out or misalign at the threshold. (center, strong)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal metal supports in the roof trusses are chaotic, with beams intersecting nonsensically or ending in mid-air instead of connecting to main joints. (top-center, strong)
- gemini-3.1-pro-preview: The steel truss structure above the shed entrance has diagonal beams that do not form consistent triangles, with several members appearing to float or fail to connect to the main horizontal chords. (top-center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at middle-right, top-right

- gemini-3.1-pro-preview: The vertical grey pole on the right plunges straight into the concrete without any visible mounting flange, base plate, or logical structural footing. (middle-right, moderate)
- gemini-3.1-pro-preview: The overhead wires are chaotic, lacking clear connection points to the poles or structure, and some lines appear to fade out abruptly against the sky. (top-right, moderate)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center, bottom-left

- gpt-6-sol: The small red object near the distant tracks is hard to identify and has indistinct edges. (center, weak)
- gpt-6-sol: The small dark shapes around the workers’ knees and the rail are hard to distinguish clearly. (bottom-left, weak)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The tool pouches and gear hanging from the workers' waists are rendered as completely formless, indistinct dark blobs lacking any mechanical detail. (bottom-left, moderate)

## y-two-L-5.jpg: mean P(AI) 0.26 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.18 / 0.12
- openai/gpt-6-sol: 0.04 / 0.06 / 0.04
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.75

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-center

- gpt-6-sol: The workers' hands and the small equipment at the rail junction are difficult to distinguish precisely. (bottom-center, weak)
- gpt-6-sol: The workers' hands and the small objects around the rail are difficult to distinguish clearly. (bottom-center, weak)
- gemini-3.1-pro-preview: The item resting on the ground to the right of the worker in orange is a completely shapeless, indistinct brown mass rather than a recognizable tool, bag, or piece of equipment. (bottom-center, strong)
- gemini-3.1-pro-preview: Objects next to workers are indistinct lumps. (bottom-center, moderate)

**buildings**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The metal truss framework of the shed roof features chaotic, merging zig-zag lines that do not connect logically to form a stable, realistic structure. (top-center, strong)
- gemini-3.1-pro-preview: Roof trusses cross randomly and lack structural logic. (top-center, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at center, bottom-left

- gemini-3.1-pro-preview: Inside the maintenance shed, the rails alongside the inspection pits become extremely blurry and appear to fade entirely into the concrete surface rather than maintaining a continuous metal profile. (center, strong)
- gemini-3.1-pro-preview: Inner rail near workers disappears into the ground. (bottom-left, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The hands and footwear of the worker in the yellow jacket lack definition and appear to melt or blend indistinctly into the surrounding track and ground. (bottom-left, moderate)
- gemini-3.1-pro-preview: Worker's hands merge indistinctly with tools or track. (bottom-left, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at center, top-center

- claude-opus-5.5: The symmetric framing, with two workers neatly placed at the track junction, looks somewhat staged and stock-like. (center, weak)
- gpt-6-sol: The depot roof appears unusually symmetrical, though that is plausible for this kind of building. (top-center, weak)

## y-two-L-6.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.20 / 0.10
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 16, raised in 4/9 calls, at bottom-left, center, bottom-right

- claude-opus-5.5: Left track's rails converge toward the depot and then appear to fade into the concrete before reaching the inspection pits, with no clear continuation into the bays (bottom-left, moderate)
- gemini-3.1-pro-preview: The inner rail of the left track completely vanishes into the concrete pavement exactly where the workers are located, instead of continuing smoothly. (bottom-left, strong)
- gemini-3.1-pro-preview: The curved rails coming from the foreground on both the left and right sides abruptly end and fade into flat concrete, completely failing to connect to the straight tracks over the inspection pits inside the building. (center, strong)
- gemini-3.1-pro-preview: The rails of the track on the right curve upwards but have no clear groove or continuation through the concrete joint line, simply terminating as they reach the flatter gray surface. (bottom-right, strong)

**people_anatomy**: score 11, raised in 5/9 calls, at middle-left, bottom-left

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish at this image size. (middle-left, weak)
- gpt-6-sol: The workers' hands and the area where they meet the rail are difficult to make out clearly. (middle-left, weak)
- gemini-3.1-pro-preview: The legs and boots of the two kneeling workers are morphed into incomprehensible, merged shapes, with what appears to be a disembodied or backwards-facing boot near the worker on the right. (bottom-left, strong)
- gemini-3.1-pro-preview: The anatomy of the kneeling workers is severely distorted. Their limbs meld into each other and into the ground, and their legs lack defined structure or realistic posing. (bottom-left, strong)

**buildings**: score 7, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The complex metal truss framework supporting the roof contains several diagonal cross-beams that inexplicably blend together or fail to connect to logical structural joints. (top-center, moderate)
- gemini-3.1-pro-preview: The steel truss structure supporting the roof of the depot is a chaotic mess of intersecting lines; many beams do not connect logically or support anything, terminating abruptly. (top-center, moderate)
- gemini-3.1-pro-preview: The diagonal metal beams in the roof trusses intersect randomly and do not form consistent structural triangles, with some beams disappearing into nothing. (top-center, strong)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The yellow safety lines painted on the concrete floor around the central inspection pits vary randomly in thickness and fade out inconsistently. (center, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The objects and equipment lining the left wall inside the depot resolve into indistinct, nonsensical blobs rather than recognizable tools or machinery upon closer inspection. (middle-left, moderate)

## y-two-L-7.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.02

**track_geometry**: score 8, raised in 2/9 calls, at center, bottom-right, bottom-left

- gemini-3.1-pro-preview: The inner rail of the left track appears to lead directly into or terminate at the base of a structural support column for the building, making it unusable for any vehicle. (center, strong)
- gemini-3.1-pro-preview: The right track's inner rail becomes extremely faint and fades out entirely near the bottom edge of the frame. (bottom-right, moderate)
- gemini-3.1-pro-preview: A straight rail cuts directly through the curved inner rail of the leftward-branching track just behind the workers, which is physically impossible for a functioning railway. (bottom-left, strong)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at center, bottom-center, bottom-left

- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The workers’ hands and small equipment where they meet the rail are hard to distinguish clearly. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and rail hardware overlap in a dark, indistinct cluster, making the exact tool connections hard to verify. (bottom-left, weak)
- gemini-3.1-pro-preview: The tools scattered next to the tool bag by the workers are indistinct, blob-like shapes that lack the defined edges of actual metal tools. (bottom-left, moderate)

**buildings**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The complex steel truss structures supporting the roof have numerous diagonal beams that merge nonsensically into one another or fail to connect at logical joints. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal steel trusses in the roof structure are inconsistent, with several beams terminating abruptly or merging into each other at nonsensical angles. (top-center, moderate)

**people_clothing_or_gear**: score 4, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The boot of the worker on the right (his right foot) is a featureless black blob without structure or detail. (bottom-left, weak)
- gemini-3.1-pro-preview: The ear defender on the left worker's head appears to melt seamlessly into the hard hat rather than being a distinct attached object. (bottom-left, strong)

**background_clutter**: score 3, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The service pits and objects inside the depot are rendered as amorphous, low-detail smudges rather than distinct architectural features. (center, moderate)
- gemini-3.1-pro-preview: A small cart-like object in the middle distance between the central tracks is an illegible, formless blob. (center, weak)

## y-two-L-8.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.25 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 14, raised in 4/9 calls, at bottom-center, center, middle-right

- claude-opus-5.5: The left track pair's rails converge and diverge inconsistently; the inner rail near the workers seems to merge with the other rail without any clear switch or frog structure. (bottom-center, moderate)
- gemini-3.1-pro-preview: The straight tracks running along the inspection pits inside the shed terminate abruptly at the entrance and do not connect to any tracks on the exterior concrete apron. (center, strong)
- gemini-3.1-pro-preview: The curved tracks in the foreground do not logically connect to the straight tracks entering the building; rails cross and disappear into the concrete without any functional switch mechanisms or frogs. (center, strong)
- gemini-3.1-pro-preview: The rails for the left and right curved tracks do not connect to a main line or to each other; they simply end abruptly or merge into the flat concrete in the center foreground. (bottom-center, strong)

**tools_or_small_objects**: score 9, raised in 6/9 calls, at bottom-left

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish clearly. (bottom-left, weak)
- gpt-6-sol: The equipment between the workers is hard to make out and has indistinct edges. (bottom-left, weak)
- claude-opus-5.5: The tool and its yellow machine on the rail are somewhat indistinct, though this is consistent with motion blur and low resolution. (bottom-left, weak)
- gemini-3.1-pro-preview: The equipment and tools on the ground between the two workers are rendered as an undefined, messy blob of shapes rather than distinct objects. (bottom-left, moderate)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The metal roof trusses and diagonal bracing form chaotic, intersecting lines that do not make logical structural sense. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal struts in the roof's steel trusses form chaotic, irregular zig-zag patterns, with many pieces intersecting illogically or floating without connecting to nodes. (top-center, strong)

**people_anatomy**: score 6, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The legs of the worker on the right (in orange) appear unnaturally short and blend indistinguishably into the ground. (bottom-left, strong)
- gemini-3.1-pro-preview: The workers' hands and boots are malformed, appearing as indistinct blobs that melt into the tools and the ground. (bottom-left, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The thin lines representing overhead wires visible against the sky are disconnected, random squiggles that do not form a coherent catenary system. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires against the sky appear as random lines that do not connect to visible suspension structures or follow logical paths for a tramway. (top-center, moderate)

## y-two-L-9.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.98 / 0.95 / 0.99

**track_geometry**: score 12, raised in 3/9 calls, at center, bottom-right, bottom-left

- gemini-3.1-pro-preview: The tracks leading to the maintenance pits in the middle of the shed do not connect to the tracks in the foreground; they simply fade out and end abruptly on the flat concrete floor. (center, strong)
- gemini-3.1-pro-preview: The rails running along the inspection pits in the background lose their distinct edges and appear to melt or blend seamlessly into the concrete floor. (center, strong)
- gemini-3.1-pro-preview: The two rails of the track curving to the right are not parallel; the distance between them (the gauge) widens significantly as they approach the bottom edge of the frame. (bottom-right, strong)
- gemini-3.1-pro-preview: The rails where the men are working lack a distinct, consistent profile, and the left rail appears to melt or blur into the concrete beneath the worker on the left. (bottom-left, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish, leaving a small area that could conceal an image-generation error. (bottom-center, weak)
- gemini-3.1-pro-preview: The bag sitting to the right of the rightmost worker is an amorphous, blob-like shape with black straps that do not attach logically to the object. (bottom-center, moderate)
- gemini-3.1-pro-preview: The bag or piece of equipment sitting on the ground next to the worker on the right is a shapeless brown blob lacking any defining features like straps, seams, or buckles. (bottom-left, strong)
- gemini-3.1-pro-preview: The tool bags placed on the ground next to the workers are amorphous and lack defined structural details like straps, zippers, or clear compartments. (bottom-left, moderate)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal patterns inside the translucent skylight panels on the roof are irregular, wavy, and inconsistent in direction, unlike manufactured building materials. (top-center, moderate)
- gemini-3.1-pro-preview: The diagonal struts within the metal roof truss system exhibit structural inconsistencies, with some beams appearing to end abruptly in mid-air or merge nonsensically into others. (top-center, strong)
- gemini-3.1-pro-preview: The steel roof trusses exhibit chaotic geometry, with diagonal bracing members that do not connect to logical joints, cross over each other incorrectly, or simply fade into thin air. (top-center, strong)

**background_clutter**: score 5, raised in 3/9 calls, at center, middle-right

- gpt-6-sol: Equipment and markings at the far end are indistinct, making their shapes difficult to verify. (center, weak)
- gemini-3.1-pro-preview: The equipment and workbenches lined up along the wall inside the right side of the shed are heavily distorted, appearing as smeared shapes rather than distinct objects. (middle-right, moderate)
- gemini-3.1-pro-preview: The inspection pits and the equipment surrounding them inside the shed lack sharp lines and coherent perspective, rendering instead as blurry, indistinct smudges. (center, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The workers’ hands and the rail area between them are hard to distinguish, leaving a little uncertainty about their exact interaction. (bottom-center, weak)
- gemini-3.1-pro-preview: The lower body of the worker on the right is indistinct and seems to meld seamlessly into the dark bag and the concrete below, lacking defined legs or a coherent kneeling posture. (bottom-center, strong)
