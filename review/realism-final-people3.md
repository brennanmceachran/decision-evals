# Realism check: final-people3

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 198 | 16/16 |
| tools_or_small_objects | 154 | 16/16 |
| people_anatomy | 143 | 16/16 |
| buildings | 54 | 9/16 |
| people_pose_or_placement | 47 | 12/16 |
| background_clutter | 44 | 12/16 |
| composition_or_staging | 25 | 10/16 |
| camera_or_windscreen | 21 | 7/16 |
| people_clothing_or_gear | 20 | 9/16 |
| texture_noise_or_sharpness | 20 | 10/16 |
| overhead_wires_or_poles | 15 | 7/16 |
| switch_mechanism | 7 | 2/16 |
| lighting_or_shadows | 3 | 2/16 |
| reflections_or_wet_surfaces | 1 | 1/16 |
| text_signage_or_markings | 1 | 1/16 |

## x-group-L-10.jpg: mean P(AI) 0.42 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.30 / 0.68 / 0.75
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.99

**track_geometry**: score 14, raised in 5/9 calls, at center, middle-right, bottom-center

- claude-opus-5.5: The left track pair diverges strangely: the inner rail near center curves toward the workers while the left rail heads toward the left shed. The grooved rails don't form a consistent gauge pair converging logically. (center, moderate)
- claude-opus-5.5: The left track's right rail runs straight into the central gravel/concrete divider and the two tracks diverge without any physical switch or frog; the left track pair also has inconsistent gauge as it approaches the shed. (center, moderate)
- claude-opus-5.5: Left track's right rail and right track's left rail run as single isolated grooved rails without a consistent paired rail; gauge between rails on left branch looks inconsistent and rails merge oddly near the gravel wedge (center, moderate)
- claude-opus-5.5: Right branch rails curve into the shed but the inner rail continues to disappear into the gravel area without a proper junction (middle-right, moderate)

**tools_or_small_objects**: score 12, raised in 7/9 calls, at middle-right, center, middle-left

- gpt-6-sol: The distant worker’s hands and the object at the rail are indistinct, making their exact interaction hard to resolve. (middle-right, weak)
- gpt-6-sol: The workers' hands and small tools around the left track are hard to distinguish precisely. (center, weak)
- claude-opus-5.5: The tool and cables on the ground between workers look somewhat ambiguous, though not clearly malformed. (center, weak)
- claude-opus-5.5: The tools on the ground near the left workers (a bag, an orange clamp and a box) are blobby and ambiguous, and there is a thin rod that connects to nothing clear. (center, moderate)

**people_anatomy**: score 9, raised in 3/9 calls, at middle-right, center

- gpt-6-sol: The distant worker’s hands and the rail work area are hard to distinguish, though distance and blur could explain this. (middle-right, weak)
- gemini-3.1-pro-preview: The lower body and legs of the lone worker on the right track are poorly defined and appear to melt into the wet ground and the rail. (middle-right, moderate)
- gemini-3.1-pro-preview: The three workers on the left track have blobby, poorly defined hands, and their limbs merge indistinctly into each other and the wet ground. (center, strong)
- gemini-3.1-pro-preview: The single worker on the right track has no discernible hands, and his posture and helmet appear melted and structurally nonsensical. (middle-right, strong)

**background_clutter**: score 7, raised in 2/9 calls, at middle-right, top-center

- gemini-3.1-pro-preview: The chain-link fence in the background has a distorted, chaotic mesh pattern that does not form a consistent grid. (middle-right, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background completely lacks a consistent wire mesh structure, devolving into random crosshatch noise. (top-center, strong)
- gemini-3.1-pro-preview: The stack of pallets near the cones by the fence is rendered as a solid block with horizontal stripes rather than individual wooden boards with gaps. (top-center, moderate)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: Three workers crouch in a tight cluster on the left track and a single worker kneels on the right track. All four are posed similarly with no clear task, which looks like stock-scene staging. (center, weak)
- claude-opus-5.5: Three workers clustered tightly kneeling with orange-vest worker's legs and the right worker's body merging oddly; hands indistinct (center, moderate)

## x-group-L-11.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.20 / 0.12 / 0.12
- openai/gpt-6-sol: 0.01 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 14, raised in 6/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The overlapping workers' hands and legs are difficult to distinguish at this resolution. (center, weak)
- gpt-6-sol: The closely overlapping workers' arms and legs are difficult to separate at a glance. (center, weak)
- gpt-6-sol: The overlapping workers' hands and legs are difficult to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The group of workers on the left is fused together; the figures in yellow jackets appear to share limbs and their bodies melt into one another in an anatomically impossible way. (middle-left, strong)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-center

- gemini-3.1-pro-preview: The rails do not have a standard dual-rail or grooved structure; instead, they consist of three or more wobbly, parallel metal strips that merge and split nonsensically along the ground. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails splitting towards the right consist of three separate, parallel lines etched into the ground that do not form a coherent pair of tracks or connect to a functional switch mechanism. (bottom-center, strong)
- gemini-3.1-pro-preview: The tracks splitting in the foreground do not form a physically possible switch; the inner rails run parallel and then vaguely merge into the concrete without a proper crossing or frog mechanism. (bottom-center, strong)

**background_clutter**: score 6, raised in 3/9 calls, at middle-left, center, top-center

- gemini-3.1-pro-preview: The chainlink fence in the background has an inconsistent mesh pattern, and several of the metal posts appear to float or dissolve rather than firmly connecting to the ground. (middle-left, moderate)
- gemini-3.1-pro-preview: Behind the chain-link fence, the orange traffic cones appear distorted and partially formed, blending into the surrounding ground. (center, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background has inconsistent mesh that disappears in several places, and the wooden pallet next to the orange cones appears melted and structurally distorted. (top-center, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The object or bag sitting on the ground next to the lone worker on the right track is a formless, indistinct blob without the defined straps or structure of a real piece of equipment. (middle-right, moderate)
- gemini-3.1-pro-preview: The object on the ground that resembles a tool bag or bucket next to the group of workers is an indistinct, misshapen blob. (middle-left, moderate)

**camera_or_windscreen**: score 2, raised in 2/9 calls, at top-center, whole-image

- gemini-3.1-pro-preview: The circular blobs meant to simulate water droplets on a lens or window look somewhat artificially stamped and lack realistic, varied refraction of the background. (top-center, weak)
- gemini-3.1-pro-preview: The image features simulated water droplets as if shot through a wet window, a common generative technique used to add a layer of realism and obscure fine details that might reveal AI generation. (whole-image, weak)

## x-group-L-12.jpg: mean P(AI) 0.16 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.02

**track_geometry**: score 6, raised in 1/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The rails near the group of three workers lack 3D depth, appearing almost flat or painted onto the wet surface, and their structure becomes mushy where the workers are interacting with them. (bottom-left, strong)
- gemini-3.1-pro-preview: The rails forming the right track appear as inconsistent, shallow grooves in the pavement rather than solid steel rails, and lack logical geometry for a functioning track. (bottom-right, strong)

**people_anatomy**: score 5, raised in 3/9 calls, at middle-left

- gpt-6-sol: The workers’ hands and tools are hard to distinguish at this resolution, making those small details difficult to verify. (middle-left, weak)
- gemini-3.1-pro-preview: The hands and specific tools of the crouching workers appear somewhat blurry and indistinct, which could be mistaken for an AI artifact (though likely just motion blur or low resolution). (middle-left, weak)
- gemini-3.1-pro-preview: The left leg and foot of the worker in the yellow jacket on the left track are indistinct and seem to melt directly into the ground without a defined boot. (middle-left, strong)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The workers' hands and small items at the rails are difficult to distinguish, leaving some local details ambiguous. (center, weak)
- gpt-6-sol: The right worker’s hands and the object beside the rail are difficult to make out. (middle-right, weak)
- gemini-3.1-pro-preview: The wooden pallets stacked in the background by the fence look like solid blocks with horizontal lines drawn on them, rather than constructed from individual wooden planks. (middle-left, moderate)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The helmet and head area of the solitary worker on the right track look distorted and lack the clear shape of a standard hard hat. (middle-right, moderate)

## x-group-L-13.jpg: mean P(AI) 0.61 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.88 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 23, raised in 6/9 calls, at center, bottom-center, bottom-left, middle-left

- claude-opus-5.5: The two diverging track pairs have no frog, switch blades, or crossing where the inner rails should meet; the rails simply run parallel and separate without a functional turnout structure. (center, strong)
- claude-opus-5.5: The rail gauge looks inconsistent. The left track's rails converge oddly toward the workers, and the inner rails of each branch sit beside raised concrete strips that do not make sense as track structure. (bottom-center, moderate)
- claude-opus-5.5: The two diverging track pairs have odd geometry: the inner rails of each branch run parallel without a proper frog or switch point, and the left track's rails converge oddly toward the depot without a logical connection. (center, moderate)
- claude-opus-5.5: The two track pairs diverge oddly: the left pair's inner rail and the right pair's inner rail don't form a coherent switch or frog; the tracks simply split with a wide gravel wedge and no switch mechanism connecting them (center, moderate)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at middle-right, middle-left

- gpt-6-sol: The right-hand worker’s tool and its contact with the rail are indistinct. (middle-right, weak)
- gpt-6-sol: Some hands and small tools near the left rail are hard to distinguish precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The hands of the middle and right workers on the left track merge indistinguishably into the tools they are holding and the track itself. (middle-left, strong)
- gemini-3.1-pro-preview: The hands of the single worker and the tool he is holding are malformed, appearing as a grey blob that melts seamlessly into the rail. (middle-right, moderate)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-left, middle-right

- gpt-6-sol: The overlapping hands and tools of the left-hand workers are hard to distinguish precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The lone worker on the right track has a highly distorted head and neck area, and their hands blend into a single undifferentiated mass with the rail. (middle-right, strong)
- gemini-3.1-pro-preview: The lower halves of the three workers blend indistinctly into each other and the ground; the leftmost worker's leg appears to merge directly into a black bag. (middle-left, strong)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at middle-left, center

- claude-opus-5.5: Three workers are crowded together on the left track holding vague tools. Their hands and tools blend together, and the gestures are not clearly doing any task. (middle-left, moderate)
- claude-opus-5.5: The workers kneel with tools that are vaguely defined and not clearly engaging the rail. The hands and tools merge together at the contact points. (center, moderate)
- claude-opus-5.5: Three workers cluster tightly with similar kneeling poses and generic tools; the hands and tools are vaguely rendered (middle-left, weak)

**camera_or_windscreen**: score 5, raised in 4/9 calls, at top-center, top-left

- claude-opus-5.5: Rain droplets appear on the lens over the upper area, a plausible cinematic touch typical of video-generation output. (top-center, weak)
- claude-opus-5.5: Raindrop blobs appear on the lens over the building area, which is a plausible cinematic effect, though they look uniformly blurred. (top-center, weak)
- claude-opus-5.5: Raindrop bokeh on the lens appears mostly over the dark doorway areas, which gives a cinematic, stock-video look (top-left, weak)
- gemini-3.1-pro-preview: The simulated water droplets in the upper left form perfectly uniform, circular patterns that look like a digital overlay rather than natural water on glass. (top-left, moderate)

## x-group-L-14.jpg: mean P(AI) 0.35 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.75

**tools_or_small_objects**: score 13, raised in 5/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The workers' hands and the small objects at the rail junction are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The workers’ hands and the small object at the switch are difficult to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The tools and materials surrounding the kneeling workers appear as indistinct, amorphous dark blobs lacking recognizable handles, mechanical shapes, or sharp edges. (middle-left, strong)
- gemini-3.1-pro-preview: The tool or object the worker on the right is interacting with is a nonsensical grey mass that merges seamlessly with his body and the rail. (middle-right, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at middle-left, middle-right

- gpt-6-sol: The workers' hands and faces are too small and soft to check for fine anatomical errors. (middle-left, weak)
- gemini-3.1-pro-preview: The lower body of the worker on the right track lacks clear structural definition, with his legs and feet blending indistinctly into the dark shadow or reflection beneath him. (middle-right, moderate)
- gemini-3.1-pro-preview: The worker on the right lacks defined feet or boots; his legs end in indistinct, formless blobs. (middle-right, strong)
- gemini-3.1-pro-preview: Worker's lower body merges vaguely into the pavement. (middle-right, moderate)

**background_clutter**: score 7, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The orange traffic cones visible in the background behind the chain-link fence are misshapen with uneven, wobbly white reflective stripes. (center, weak)
- gemini-3.1-pro-preview: The chain-link fence in the background has an irregular mesh that blurs into solid patches, and the posts do not logically connect to or support the wire. (center, strong)
- gemini-3.1-pro-preview: The stack of wooden pallets near the fence is fused into a single block with inconsistent and illogical lines where individual boards should be. (center, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center, center, bottom-left

- gemini-3.1-pro-preview: The lines forming the embedded rails are wobbly, vary inconsistently in thickness, and blur unnaturally into the surrounding wet pavement rather than maintaining the rigid, sharp geometry of milled steel. (bottom-center, moderate)
- gemini-3.1-pro-preview: Track junction lacks necessary crossing mechanisms. (center, moderate)
- gemini-3.1-pro-preview: Rails look like multiple thin grooves, not solid steel. (bottom-left, moderate)

**camera_or_windscreen**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: Large, dark circular spots intended to simulate water droplets on a lens appear as flat, semi-transparent digital overlays that fail to realistically refract light, show specular highlights, or distort the background. (top-center, strong)
- gemini-3.1-pro-preview: Water spots appear uniformly distributed and artificial. (top-center, moderate)

## x-group-L-15.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.60 / 0.75 / 0.33
- google/gemini-3.1-pro-preview: 0.02 / 0.70 / 0.02

**tools_or_small_objects**: score 5, raised in 4/9 calls, at middle-left, center, middle-right

- gpt-6-sol: The hands and equipment where the two leftmost workers meet are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the small objects beside the rails are hard to distinguish. (center, weak)
- gpt-6-sol: The hands and equipment where the left-side workers meet are hard to distinguish; this could suggest generated detail, though the distance and rain also explain it. (middle-left, weak)
- gemini-3.1-pro-preview: Indistinct bag shape. (middle-right, moderate)

**track_geometry**: score 5, raised in 1/9 calls, at center

- claude-opus-5.5: Within the left track, the left rail sweeps off toward the left shed while the right rail runs nearly straight up the middle, so the gap between the two rails visibly widens. A real track keeps a constant gauge. (center, strong)
- claude-opus-5.5: The two tracks split at a 'V' of gravel but there is no frog, points or switch blade where they diverge. Each pair of grooved rails simply bends apart. (center, moderate)

**composition_or_staging**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Cinematic, symmetrical staging: three workers neatly kneeling on the left branch and one on the right, framed exactly at the split, with a 16:9 video-frame look. This is typical of text-to-video output. (whole-image, moderate)
- claude-opus-5.5: The symmetric, cinematic framing of workers neatly kneeling on both tracks, plus the 16:9 video-frame feel and soft overall rendering, could suggest generated stock-video footage. (whole-image, weak)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, center

- claude-opus-5.5: The cones, pallets and fence are coherent, but the fence posts and the interior of the shed are soft and slightly mushy. (top-center, weak)
- gemini-3.1-pro-preview: Fence poles misaligned. (center, moderate)

**camera_or_windscreen**: score 2, raised in 2/9 calls, at top-center

- claude-opus-5.5: Rain droplets on the lens are spread uniformly and evenly bokeh'd across the sky and building areas, a stylised look often seen in generated footage. (top-center, weak)
- claude-opus-5.5: Raindrop blobs appear on the lens and soft cinematic grading covers the scene. This is common in video-generation outputs, though real cameras also show it. (top-center, weak)

## x-group-L-16.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.75 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.99

**track_geometry**: score 9, raised in 4/9 calls, at bottom-center, bottom-left

- claude-opus-5.5: Two embedded grooved-rail tracks diverge with no visible switch blades or frog; the left track's rails curve oddly and the gauge looks inconsistent between the branches (bottom-center, moderate)
- claude-opus-5.5: Two embedded groove-rail tracks diverge from nowhere: the left pair and right pair don't connect through a proper switch/frog; the inner rails simply run parallel separated by a concrete strip, an implausible layout (bottom-center, moderate)
- claude-opus-5.5: Grooved embedded rails diverge oddly; the left track pair and right track pair don't form a coherent switch or junction, and the rail spacing looks inconsistent between branches (bottom-center, moderate)
- gemini-3.1-pro-preview: The rails directly underneath the group of three workers lose their three-dimensional shape and multiply into several flat, indistinct parallel lines on the ground. (bottom-left, strong)

**people_anatomy**: score 8, raised in 5/9 calls, at middle-right, bottom-left

- gpt-6-sol: The distant worker's hands and legs are hard to distinguish from the rails and dark clothing, leaving some visual ambiguity. (middle-right, weak)
- gpt-6-sol: The distant worker’s hands and lower body are difficult to distinguish. (middle-right, weak)
- claude-opus-5.5: Lone worker on right track is crouched in a compressed blob-like pose with indistinct legs (middle-right, weak)
- claude-opus-5.5: The lone worker on the right has a compressed, blob-like body with indistinct limbs (middle-right, moderate)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at bottom-center, center, bottom-left

- gpt-6-sol: The workers’ hands and the small objects near the rails are hard to distinguish; this could resemble AI-generated muddiness, though rain and distance also explain it. (bottom-center, weak)
- claude-opus-5.5: The bag and tools near the workers' feet are blobby and lack defined shapes (center, weak)
- claude-opus-5.5: Objects near the workers' hands and feet (a bag, a dark mass) are mushy and undefined (center, moderate)
- gemini-3.1-pro-preview: There is an unidentifiable, yellowish-brown blob on the ground next to the kneeling worker in orange, which lacks the clear shape of any real tool or piece of equipment. (bottom-left, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at center, middle-left

- claude-opus-5.5: Three crouching workers cluster between and on the left track with indistinct hands and tools; the worker in the middle has an ambiguous object and blurred hands (center, moderate)
- claude-opus-5.5: Three workers crouched in a tight symmetric row all facing away, with the middle one oddly straddling; bodies and boots merge with ground and bags, hands not clearly defined (center, moderate)
- claude-opus-5.5: Three workers crouch tightly together in a staged cluster, hands converging on an indistinct spot with no clear tool or task visible (middle-left, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Smooth, slightly waxy rendering of the wet asphalt and the corrugated metal, typical of video-diffusion frames (whole-image, moderate)
- claude-opus-5.5: Overall smooth, slightly waxy rendering of wet asphalt and clothing, lacking fine sensor noise (whole-image, weak)
- claude-opus-5.5: Smooth, uniform rendering of the wet asphalt and gravel, with a slightly painterly look (whole-image, weak)

## x-group-L-9.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.06 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 13, raised in 4/9 calls, at middle-right, bottom-left, middle-left

- gpt-6-sol: The kneeling worker's dark lower legs are difficult to distinguish from the rails and wet pavement. (middle-right, weak)
- gemini-3.1-pro-preview: The worker on the right track has no visible lower half; their torso merges inexplicably into the wet ground. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right track appears to be missing a lower body and legs; the torso ends abruptly and merges indistinctly with the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the front-left worker, as well as the tools they are holding, are fused together into an indistinct, formless blob. (bottom-left, strong)

**tools_or_small_objects**: score 11, raised in 5/9 calls, at center, middle-right, bottom-left

- gpt-6-sol: The workers’ hands and the small parts near the left rail are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers’ hands and equipment at the left-hand rail are hard to distinguish, leaving some fine-detail ambiguity. (center, weak)
- gemini-3.1-pro-preview: Beside the worker on the right, there is an amorphous, detached object that resembles a pair of boots lying horizontally on the ground without a body. (middle-right, strong)
- gemini-3.1-pro-preview: The bag or gear placed next to the leftmost worker is an indistinct, messy blob lacking structure or clear seams. (bottom-left, moderate)

**track_geometry**: score 7, raised in 3/9 calls, at bottom-center, middle-left

- gemini-3.1-pro-preview: The track branching to the right consists of three parallel lines grooved into the ground, which does not make sense for a standard two-rail track. (bottom-center, strong)
- gemini-3.1-pro-preview: The grooved rails of the left track seem to lose their defined edges and blend inconsistently into the surrounding wet asphalt near the workers. (middle-left, weak)
- gemini-3.1-pro-preview: The rails diverge in a nonsensical way. Instead of a switch mechanism on a standard gauge track, there are two pairs of closely spaced parallel rails curving in opposite directions, which does not form a functional railway track. (bottom-center, strong)

**camera_or_windscreen**: score 4, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The simulated water droplets scattered across the top half of the image are highly uniform, a common technique AI uses to mimic lens artifacts and obscure background details. (top-center, weak)
- gemini-3.1-pro-preview: The translucent circular spots simulating water droplets on a lens or window appear overly uniform and artificial, lacking realistic optical distortion of the background. (top-center, moderate)
- gemini-3.1-pro-preview: There are out-of-focus spots resembling water droplets on a lens or window, which is a common effect added to AI images to simulate physical camera imperfections. (top-center, weak)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The workers on the left track are positioned around rails that are much too close together to be a standard railway gauge, making their working poses anatomically and logically confusing. (middle-left, strong)

## y-group-L-10.jpg: mean P(AI) 0.41 (fails)

- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.82
- openai/gpt-6-sol: 0.04 / 0.02 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.10 / 0.98

**track_geometry**: score 13, raised in 4/9 calls, at bottom-left, center, bottom-right

- claude-opus-5.5: Left track rails curve inconsistently; the rail pair widens and the left rail merges oddly with the shadowed area, and the gauge does not stay constant toward the depot (bottom-left, moderate)
- claude-opus-5.5: Tracks in the foreground don't clearly connect to the inspection pits in the background; the rail layout ends ambiguously on the concrete (center, moderate)
- claude-opus-5.5: Left track's rails curve inconsistently; the inner rail seems to merge into pavement and the gauge between rails varies along the curve, with no proper sleepers or grooved-rail logic (bottom-left, moderate)
- claude-opus-5.5: Right track rails splay apart and curve toward the depot without a clear connection to the inspection pit tracks in the background; the tracks don't lead into the pits coherently (bottom-right, moderate)

**tools_or_small_objects**: score 9, raised in 7/9 calls, at bottom-right, center, middle-right

- claude-opus-5.5: Orange tool bag next to the right worker is blobby with no defined structure; the worker's hands hold an indistinct object (bottom-right, weak)
- claude-opus-5.5: Orange tool bag beside the right worker is blobby, with no distinct handles or details (center, weak)
- claude-opus-5.5: Orange bag/tool next to right worker is blobby and undefined; left workers' hands hold nothing identifiable (center, weak)
- gpt-6-sol: The tool and the right worker’s hands are hard to distinguish where they overlap. (middle-right, weak)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at center, middle-left, bottom-left

- claude-opus-5.5: Workers kneel directly on the rails in a staged cluster, all looking at the ground with no visible task or tool contact; the group on the left has merged legs and feet (center, moderate)
- claude-opus-5.5: Three workers crouch in a tight, staged cluster on the rail, all kneeling on it with no obvious task or tools, typical of generated stock-like staging (middle-left, weak)
- claude-opus-5.5: Three workers crouched in a tight cluster on the left and one on the right, posed symmetrically like a staged stock scene; the right worker kneels oddly over a rail with an indistinct tool object (center, moderate)
- gemini-3.1-pro-preview: The three workers on the left merge together awkwardly; the leftmost worker's lower body lacks definition and blends into the ground/shadows, and his arm appears fused with the middle worker's vest. (bottom-left, strong)

**buildings**: score 3, raised in 2/9 calls, at top-center

- claude-opus-5.5: Roof truss structure plausible but vertical pole at center stands in the middle of a pit lane, and the overhead wires are faint and inconsistent (top-center, weak)
- gemini-3.1-pro-preview: Looking at the criss-crossing steel trusses in the roof structure above the entrance, several diagonal beams simply terminate in mid-air or fail to connect logically to other structural elements. (top-center, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The right leg and foot of the lone worker on the right blend seamlessly into the concrete ground, with no discernible shoe or defined edge. (bottom-right, strong)

## y-group-L-11.jpg: mean P(AI) 0.54 (fails)

- openai/gpt-6-sol: 0.06 / 0.06 / 0.08
- anthropic/claude-opus-5.5: 0.68 / 0.30 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**people_anatomy**: score 18, raised in 5/9 calls, at middle-left, center, bottom-left, bottom-right, middle-right

- claude-opus-5.5: Hands and limbs of kneeling workers are blurry and merged with tools; faces hidden (middle-left, weak)
- claude-opus-5.5: The middle workers on the left track overlap oddly; the yellow-helmet worker's body merges behind the orange worker and their hands and tools are indistinct (center, moderate)
- gemini-3.1-pro-preview: The middle worker in the left group has hands that melt into the surrounding objects and an awkwardly positioned head. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker on the right is kneeling but lacks defined lower legs or boots, merging directly into the shadow and track. (bottom-right, strong)

**tools_or_small_objects**: score 17, raised in 8/9 calls, at middle-right, middle-left, center, bottom-left, bottom-right

- gpt-6-sol: The right-hand worker's hands and the small objects beside the rail are hard to distinguish; this could conceal generated detail, though distance also explains it. (middle-right, weak)
- gpt-6-sol: The hands and small objects where the two orange-clad workers meet the rail are difficult to distinguish. (middle-left, weak)
- claude-opus-5.5: Tools held by the workers on the left are smeared, indistinct metal shapes lacking clear form (center, moderate)
- claude-opus-5.5: The tools in the hands of the left workers are somewhat indistinct and blend into the rail, which is slightly ambiguous. (middle-left, weak)

**track_geometry**: score 12, raised in 5/9 calls, at bottom-center, bottom-left

- claude-opus-5.5: Left track curves sharply while right track diverges; rails embedded in concrete with no clear connection or switch between them, tracks lead off ambiguously toward pits (bottom-center, moderate)
- claude-opus-5.5: Left track curves into the shed area but the rails fade into the pavement without clear continuation or connection to the inspection pits; the track layout is ambiguous (bottom-center, moderate)
- gemini-3.1-pro-preview: The rails near the group of three workers are disjointed, have inconsistent thickness, and do not form continuous parallel lines. (bottom-left, strong)
- gemini-3.1-pro-preview: Right at the point where the group of workers is kneeling, the detailed structure of the rail and its groove seem to dissolve and blend inconsistently into the surrounding concrete. (bottom-left, moderate)

**buildings**: score 10, raised in 4/9 calls, at top-center, center

- claude-opus-5.5: Roof truss structure is mostly coherent but some diagonal members appear irregular and inconsistent in spacing (top-center, weak)
- gemini-3.1-pro-preview: The tracks extending into the inspection pits inside the shed are notably wavy and lack structural rigidity. (center, moderate)
- gemini-3.1-pro-preview: Looking into the shed at the inspection pits, the rails spanning the gaps appear very thin and lack the substantial supporting structures that would be necessary in reality. (center, moderate)
- gemini-3.1-pro-preview: The inspection pits in the background have confusing geometry, and the railway tracks leading into them are misaligned or disappear illogically. (center, strong)

**composition_or_staging**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric, cinematic staging with workers neatly placed on two diverging grooved rails in a depot; looks like stock-footage style generative output (whole-image, moderate)
- claude-opus-5.5: The symmetrical, cinematic framing and color grade with workers neatly placed on each branch has a stock-footage feel that could also match video-generator output. (whole-image, weak)
- claude-opus-5.5: Highly symmetric cinematic framing with two curving tracks diverging and workers placed neatly on each, typical of generated stock-style scenes (whole-image, moderate)

## y-group-L-12.jpg: mean P(AI) 0.35 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.65 / 0.20 / 0.25
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.95

**track_geometry**: score 14, raised in 4/9 calls, at bottom-left, bottom-right, bottom-center

- claude-opus-5.5: Left rails curve toward the depot but appear to fade/merge into the flat concrete without clear connection to the pit tracks inside the shed; groove rails in pavement end ambiguously. (bottom-left, moderate)
- claude-opus-5.5: Right track pair curves away toward the right edge and doesn't clearly connect to any track inside the depot; the inner rail near the worker seems to taper oddly. (bottom-right, moderate)
- claude-opus-5.5: Grooved tram rails embedded in concrete curve in from the left and right; the curves are smooth and consistent with real embedded track, though the left and right branches don't clearly connect to the depot pit tracks in the center (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rail of the left track pair appears to vanish under the workers and does not continue parallel to the outer rail, which itself abruptly fades into the concrete further up. (bottom-left, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-left, bottom-right

- claude-opus-5.5: Three kneeling workers have soft, somewhat mushy faces and hands; the leftmost figure's body blends into the bag beside him. (middle-left, moderate)
- gemini-3.1-pro-preview: The legs of the worker furthest to the right in the left-hand group seem to blend seamlessly into the concrete and the neighboring worker. (middle-left, moderate)
- gemini-3.1-pro-preview: The lower body and feet of the worker on the right track are indistinct and appear to melt into the ground and shadow. (bottom-right, strong)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at middle-left, bottom-center

- gpt-6-sol: The left workers’ hands and the small objects beside the rail are difficult to distinguish precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The tools or equipment the workers are using are rendered as indistinct, shapeless blobs lacking any mechanical or functional details. (bottom-center, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at middle-right, center

- claude-opus-5.5: Equipment and cabinets along walls are vague, smeared blobs without identifiable detail. (middle-right, weak)
- gemini-3.1-pro-preview: The equipment or structure visible inside the central inspection pit in the background is a nonsensical, jumbled mass of shapes rather than discernible machinery. (center, moderate)

**buildings**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The zig-zag cross-bracing in the roof trusses consists of chaotic, intersecting lines that do not form structurally sound triangles, with some beams ending mid-air. (top-center, strong)

## y-group-L-13.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.08 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.99

**people_anatomy**: score 13, raised in 4/9 calls, at middle-left, bottom-left, bottom-right

- gpt-6-sol: The crouching workers’ hands and tools are difficult to distinguish clearly. (middle-left, weak)
- gemini-3.1-pro-preview: The hands of the worker in the front and the tools they are holding melt into a continuous, indistinct brown smudge on the rail. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the single worker on the right track blend directly into the rail as a formless mass, lacking any definition of fingers or tools. (bottom-right, strong)
- gemini-3.1-pro-preview: The group of three workers exhibits severe anatomical blending; the middle figure with the red/orange helmet lacks a distinct lower body and appears fused with the worker in front. (bottom-left, strong)

**track_geometry**: score 9, raised in 3/9 calls, at center, bottom-left

- gemini-3.1-pro-preview: The curved rails coming from the foreground do not logically connect or switch into the straight tracks and inspection pits inside the depot; they appear to misalign and fade away. (center, strong)
- gemini-3.1-pro-preview: The inner steel rail of the left track loses its defined structure and abruptly disappears into a muddy texture where the workers are positioned. (bottom-left, strong)
- gemini-3.1-pro-preview: The train tracks curving into the main building appear to simply vanish or blend into the flat concrete floor just inside the entrance, rather than connecting logically to the inspection pits further inside. (center, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-right, bottom-left, bottom-right

- gpt-6-sol: The right worker's hands and the small object at the rail are hard to distinguish from each other. (middle-right, weak)
- gemini-3.1-pro-preview: The objects lying on the ground next to the group of workers are amorphic, unrecognizable blobs that do not resemble real tools or equipment bags. (bottom-left, strong)
- gemini-3.1-pro-preview: The object or bag sitting on the ground next to the lone worker is a smooth, undefined brown blob lacking any specific features or textures of a real physical object. (bottom-right, moderate)
- gemini-3.1-pro-preview: The object resting on the ground to the left of the solitary worker is a completely shapeless, indistinct blob that does not resemble any specific tool or bag. (bottom-right, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The bodies of the second and third workers in the group appear to merge unnaturally, with confusing overlapping boundaries. (bottom-left, moderate)
- gemini-3.1-pro-preview: The worker's hands and the tool they are supposedly using are poorly defined and seem to merge physically with the steel rail itself. (bottom-right, moderate)
- gemini-3.1-pro-preview: The hands and tools of the three workers grouped on the left blend together into undefined dark shapes where they meet the rails. (bottom-left, moderate)

**buildings**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The steel trusswork supporting the roof consists of chaotic, intersecting lines that do not form a coherent or physically possible structural pattern, with some diagonal beams ending abruptly in mid-air. (top-center, strong)

## y-group-L-14.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.99

**track_geometry**: score 15, raised in 3/9 calls, at bottom-left, bottom-right, center

- gemini-3.1-pro-preview: The rails of the track curve, but where the workers are kneeling, they seem to split into three irregular lines or merge nonsensically into the concrete. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the right-hand curved track appears to fade away or merge into the flat concrete just before reaching the shed entrance. (bottom-right, strong)
- gemini-3.1-pro-preview: The rails forming the left track curve are unnaturally wavy and are depicted as inconsistent, roughly parallel lines that fail to form a coherent, solid physical rail. (bottom-left, strong)
- gemini-3.1-pro-preview: Inside the depot building, the rails running alongside the maintenance pits are discontinuous, disappearing and reappearing while blending unnaturally into the surrounding floor. (center, strong)

**tools_or_small_objects**: score 13, raised in 6/9 calls, at bottom-center, bottom-left, center, bottom-right

- gpt-6-sol: The dark equipment beside the left workers' hands is difficult to distinguish and has a somewhat tangled outline. (bottom-center, weak)
- gpt-6-sol: The workers' hands and small rail-side equipment are difficult to resolve precisely. (bottom-left, weak)
- gpt-6-sol: The equipment beside the left-hand workers is difficult to distinguish precisely. (bottom-center, weak)
- gemini-3.1-pro-preview: The tools being used by the workers are amorphous, melted-looking blobs lacking any distinct mechanical features. (bottom-left, strong)

**buildings**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal steel trusses holding up the roof have irregular spacing, and some cross-beams terminate mid-air without connecting to other structural elements. (top-center, moderate)
- gemini-3.1-pro-preview: Diagonal struts in the roof truss structure intersect illogically, with some beams ending abruptly in mid-air instead of connecting to structural joints. (top-center, strong)
- gemini-3.1-pro-preview: The metal roof trusses are highly irregular, with diagonal supports ending abruptly or crossing nonsensically. (top-center, strong)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The lower bodies of the three workers merge together and into the track, lacking distinct legs or feet. (bottom-left, strong)

**people_anatomy**: score 2, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The kneeling worker's lower body and legs blend seamlessly into the concrete and shadow, lacking defined anatomy or clothing folds. (bottom-right, moderate)

## y-group-L-15.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.05 / 0.08 / 0.04
- anthropic/claude-opus-5.5: 0.68 / 0.68 / 0.25
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.98

**track_geometry**: score 16, raised in 6/9 calls, at bottom-left, bottom-right, bottom-center

- claude-opus-5.5: Left track rails curve abruptly and the left rail merges oddly; the track sits in a shallow trough that doesn't connect cleanly to the depot pit lines ahead (bottom-left, moderate)
- claude-opus-5.5: Right curved track ends/fades into plain concrete toward the center without a clear connection to the depot roads; rails lack visible fastenings or a groove pattern consistent with embedded tram rail (bottom-right, moderate)
- claude-opus-5.5: Left grooved rails curve smoothly but appear to terminate abruptly/merge into concrete toward the shed with no clear continuation to the inspection pits; track layout between foreground rails and pit rails is not coherent (bottom-center, moderate)
- claude-opus-5.5: Left and right tram tracks curve in from the foreground but do not clearly connect to the inspection pit tracks in the shed; the curving rails seem to end ambiguously in the concrete apron (bottom-center, moderate)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-left, bottom-left, bottom-right

- gpt-6-sol: The small tools and rail junction around the three workers are difficult to distinguish precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The objects sitting on the ground next to the left group of workers appear as indistinct, blob-like masses rather than recognizable tools or equipment bags. (bottom-left, moderate)
- gemini-3.1-pro-preview: The tools and equipment scattered on the ground between the three workers form an amorphous, blended jumble of shapes rather than distinct, identifiable objects. (bottom-left, strong)
- gemini-3.1-pro-preview: The tool bag sitting next to the lone worker on the right has nonsensical, melting straps that blend into the fabric rather than attaching logically. (bottom-right, moderate)

**buildings**: score 8, raised in 4/9 calls, at top-center

- claude-opus-5.5: Roof truss structure is broadly coherent but the bracing pattern is irregular and the skylights blend into a smeared haze toward the vanishing point (top-center, weak)
- gemini-3.1-pro-preview: The metal truss structure supporting the roof contains intersecting diagonal beams that disappear abruptly, change thickness randomly, and form nonsensical structural patterns. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal cross-bracing within the steel roof trusses above the main depot entrance is structurally inconsistent, featuring beams that intersect at impossible angles or fail to connect logically. (top-center, moderate)
- gemini-3.1-pro-preview: Within the roof structure, several of the thin diagonal bracing struts cross over one another randomly without connecting at proper structural nodes or joints. (top-center, moderate)

**people_anatomy**: score 8, raised in 3/9 calls, at middle-left, bottom-right, bottom-left

- claude-opus-5.5: Three crouching workers on left have merged bodies and limbs; the leftmost figure's legs and the middle worker's lower body blend together with indistinct boots (middle-left, moderate)
- gemini-3.1-pro-preview: The knee and leg of the lone worker on the right appear to merge and blend directly into both the adjacent steel rail and the dark bag resting next to him. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower bodies and legs of the three workers in the left group merge together into a dark, indistinguishable mass, lacking clear individual limbs or logical seating positions. (bottom-left, strong)

**people_clothing_or_gear**: score 5, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The worker on the right side of the three-person group has a completely distorted head and helmet area, appearing as a blurry, melted shape lacking defining features. (bottom-left, strong)
- gemini-3.1-pro-preview: The brown bag or pack located just behind the leftmost worker is rendered as a shapeless blob, lacking defined structural details like seams, zippers, or distinct straps. (bottom-left, moderate)

## y-group-L-16.jpg: mean P(AI) 0.63 (fails)

- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.82
- openai/gpt-6-sol: 0.06 / 0.04 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 25, raised in 6/9 calls, at bottom-left, bottom-right, bottom-center, middle-left, center

- claude-opus-5.5: Embedded grooved rails curve in from the left and converge oddly; the left rail pair appears to terminate or merge illogically near the workers with no clear switch or frog. (bottom-left, moderate)
- claude-opus-5.5: The right track's two rails diverge rather than stay parallel at gauge, and the inner rail fades into the pavement, which is not a coherent track layout. (bottom-right, moderate)
- claude-opus-5.5: The left track's rails curve inconsistently: the outer rail bends toward the left edge while the inner rail runs straight toward the center, so the gauge widens and the pair no longer reads as a coherent track. (bottom-left, moderate)
- claude-opus-5.5: The right tracks emerge from flat concrete with no switch or frog, and the rail pair diverges unnaturally in the foreground. (bottom-right, moderate)

**tools_or_small_objects**: score 15, raised in 8/9 calls, at bottom-left, bottom-center

- claude-opus-5.5: The tools and bags at the workers' hands are indistinct blobs rather than recognizable tools. (bottom-left, moderate)
- claude-opus-5.5: Tools and bags at the workers' feet are blobby and lack identifiable shapes (bottom-center, moderate)
- gpt-6-sol: The hands and small equipment around the two central workers are hard to distinguish precisely, though distance could explain this. (bottom-center, weak)
- gpt-6-sol: The tools and hands between the three workers are difficult to distinguish and look somewhat muddled. (bottom-center, weak)

**people_anatomy**: score 14, raised in 4/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: The hands and tools of the three left workers blend into an indistinct mass of objects on the ground; the tools are not identifiable. (bottom-left, moderate)
- gemini-3.1-pro-preview: The legs and boots of the three workers grouped together are tangled and structurally illogical, with what appear to be malformed or extra feet. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker on the right has a right leg and boot that are deformed and seem to merge directly into the metal track. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the workers on the left are indistinct, rendered as smooth, melted blobs rather than defined hands or gloves holding tools. (bottom-left, strong)

**buildings**: score 8, raised in 5/9 calls, at top-center

- claude-opus-5.5: Roof trusses and skylight glazing repeat plausibly, but some truss members intersect inconsistently and the poles lack clear bases or fixings. (top-center, weak)
- claude-opus-5.5: The roof truss structure is repetitive and fairly coherent, though some bracing members merge or end ambiguously. (top-center, weak)
- claude-opus-5.5: Roof truss and skylight structure is plausible but the bracing members repeat irregularly; columns don't line up with the trusses consistently (top-center, weak)
- gemini-3.1-pro-preview: The diagonal beams in the roof trusses show structural inconsistencies, with some lines ending abruptly or intersecting in ways that don't make architectural sense. (top-center, moderate)

**composition_or_staging**: score 4, raised in 3/9 calls, at center, whole-image

- claude-opus-5.5: Workers are posed symmetrically in matching hi-vis gear, all kneeling at rails with no visible task. This reads as a stock-like generated scene. (center, weak)
- claude-opus-5.5: Four workers crouch on the rails in neat cinematic poses with no visible task or work equipment. The scene looks staged, with a filmic color grade. (center, moderate)
- claude-opus-5.5: Cinematic, symmetric framing with a film-like grade and slight softness typical of generated stock imagery (whole-image, weak)

## y-group-L-9.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.08 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.72 / 0.80 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**tools_or_small_objects**: score 16, raised in 7/9 calls, at middle-left, bottom-left, center, bottom-right

- gpt-6-sol: The workers’ hands and the small objects at the rail are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the small objects beside the rail are hard to distinguish clearly. (bottom-left, weak)
- claude-opus-5.5: The tools and bags beside the workers are blobby with no clear object identity, and a thin rod or cable crosses the rail ambiguously. (center, moderate)
- claude-opus-5.5: Long thin rod/bar held by the workers is a vague line with no clear tool form; objects on the ground near the center worker are indistinct blobs (bottom-left, moderate)

**track_geometry**: score 15, raised in 4/9 calls, at bottom-left, center, bottom-right

- claude-opus-5.5: Left track rails curve oddly; the inner rail near the workers seems to merge and diverge without a coherent gauge, and a dark cable/rod runs diagonally across between workers' hands. (bottom-left, moderate)
- claude-opus-5.5: The tracks in the foreground do not clearly connect to the inspection pits in the depot; the rails fade into the concrete with no visible continuation toward the shed. (center, moderate)
- claude-opus-5.5: The left track's rails curve inconsistently: the outer rail near the kneeling worker seems to merge with or vanish into the ground, and the rail gauge looks irregular. (bottom-left, moderate)
- claude-opus-5.5: Left track rails curve oddly; the rail pair under the workers doesn't keep consistent gauge and the inner rail seems to merge into the concrete near the kneeling man's tool (bottom-left, moderate)

**people_anatomy**: score 12, raised in 4/9 calls, at bottom-left, bottom-right

- gpt-6-sol: Some workers’ hands and tools are hard to distinguish where they meet the rails. (bottom-left, weak)
- claude-opus-5.5: Hands of the crouching workers are mushy and poorly defined; the white-helmet worker's limbs blend with the yellow-helmet worker (bottom-left, moderate)
- gemini-3.1-pro-preview: The face of the middle worker in the left group is severely distorted and blurred into an unrecognizable shape. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the solitary worker appear to merge directly into the metal rail rather than gripping tools, and his visible foot lacks definition, looking like a formless blob. (bottom-right, strong)

**buildings**: score 10, raised in 4/9 calls, at top-center, center

- claude-opus-5.5: The roof truss structure is broadly coherent, though the bracing repeats somewhat uniformly; the background equipment is smeared. (top-center, weak)
- gemini-3.1-pro-preview: The distant structural beams and roof trusses form a chaotic, intersecting lattice that lacks logical physical support or architectural continuity. (top-center, strong)
- gemini-3.1-pro-preview: The metal roof trusses of the open shed form a chaotic, structurally illogical web where beams cross over each other without connecting and some end abruptly. (top-center, strong)
- gemini-3.1-pro-preview: The metal truss framework supporting the shed roof becomes chaotic, asymmetrical, and loses logical structural integrity as it recedes into the background. (center, strong)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Three workers are clustered tightly with overlapping limbs; the hands of the front worker and the center worker are ambiguous and blend into tools. (bottom-left, weak)
- claude-opus-5.5: Three workers crouch together over a single spot on the rail, a staged-looking cluster, and their limbs and hands are mushy and poorly defined where they handle the tools. (bottom-left, moderate)
- gemini-3.1-pro-preview: The hands of the solitary worker on the right appear to melt directly into the track rail, lacking any definition or distinct tool. (bottom-right, moderate)
