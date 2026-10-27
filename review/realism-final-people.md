# Realism check: final-people

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 235 | 21/24 |
| people_anatomy | 181 | 22/24 |
| tools_or_small_objects | 173 | 24/24 |
| buildings | 90 | 17/24 |
| background_clutter | 59 | 18/24 |
| people_pose_or_placement | 58 | 13/24 |
| texture_noise_or_sharpness | 46 | 19/24 |
| camera_or_windscreen | 27 | 12/24 |
| people_clothing_or_gear | 26 | 9/24 |
| overhead_wires_or_poles | 22 | 8/24 |
| composition_or_staging | 17 | 10/24 |
| lighting_or_shadows | 7 | 3/24 |
| text_signage_or_markings | 5 | 3/24 |
| switch_mechanism | 3 | 1/24 |
| reflections_or_wet_surfaces | 2 | 2/24 |

## x-group-L-1.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 10, raised in 3/9 calls, at middle-left, middle-right

- gpt-6-sol: The leftmost worker’s hands are hard to distinguish where they overlap the dark rail. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right track lacks distinct boots, feet, or lower legs; his lower body appears to melt amorphously into the rail and ground. (middle-right, strong)
- gemini-3.1-pro-preview: The worker furthest to the left has indistinguishable arms and legs that blend together into a continuous, poorly defined mass on the track. (middle-left, strong)
- gemini-3.1-pro-preview: The lower body and legs of the worker in the orange jacket are completely mangled and appear to melt directly into the dark pavement. (middle-left, strong)

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, middle-left, center

- gemini-3.1-pro-preview: The diverging inner rails do not form a physically logical switch or crossing; they simply split apart from a central point without the necessary intersecting mechanisms (like a frog) for wheeled vehicles. (bottom-center, strong)
- gemini-3.1-pro-preview: The left (outer) rail of the left track simply vanishes into the ground near the worker in the orange jacket. (middle-left, strong)
- gemini-3.1-pro-preview: Where the two sets of tracks diverge, there is no physical switch mechanism or points; the solid rails just morph and blend into the concrete. (center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at middle-left, bottom-center, bottom-left, middle-right

- gpt-6-sol: The orange-jacketed worker’s hands and nearby equipment are difficult to distinguish where they overlap the rails. (middle-left, weak)
- gemini-3.1-pro-preview: The equipment bags resting on the ground next to the workers are rendered as shapeless, textured lumps with no clear openings, handles, or identifiable objects inside. (bottom-center, moderate)
- gemini-3.1-pro-preview: The tool bag placed beside the front-left worker is an amorphous brown blob with indistinct, nonsensical silver shapes resting on it. (bottom-left, moderate)
- gemini-3.1-pro-preview: The tool bag resting on the ground next to the worker on the right track is a featureless, lumpy blob rather than a distinct object. (middle-right, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The orange traffic cones in the background are misshapen and appear to physically melt into the wooden pallets behind them. (middle-left, moderate)
- gemini-3.1-pro-preview: The orange traffic cones visible through the fence are heavily distorted and seem to melt into the surrounding objects and the fence wire. (center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Where the tracks split into two branches, there is no physical switch, crossing (frog), or check rails; the inner rails simply disappear into the wet dirt. (center, strong)

## x-group-L-2.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.15 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**people_anatomy**: score 19, raised in 6/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The left group’s hands and tools overlap at the switch and are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The crouching worker’s lower legs are partly lost against the dark rails and pavement. (middle-right, weak)
- gpt-6-sol: The overlapping hands and equipment of the three workers are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The overlapping arms and tools of the three left-side workers are difficult to distinguish precisely. (center, weak)

**track_geometry**: score 11, raised in 3/9 calls, at bottom-right, bottom-left, bottom-center, middle-left

- gemini-3.1-pro-preview: The flangeway groove of the inner rail on the right-hand track physically splits from a single groove into two distinct, parallel grooves near the bottom edge of the frame. (bottom-right, strong)
- gemini-3.1-pro-preview: The groove of the inner rail on the left track inconsistently disappears and blends into the solid pavement just behind the squatting worker. (bottom-left, moderate)
- gemini-3.1-pro-preview: The inner rail of the left branch track breaks apart, inexplicably duplicates into thinner parallel lines, and dissolves into the ground under the workers. (bottom-center, strong)
- gemini-3.1-pro-preview: The steel rails and grooves on the left track lose their defined, parallel structure and disappear into a blurry texture directly underneath the group of workers. (middle-left, strong)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The items or tools being handled by the group of three workers are rendered as indistinct, shapeless, muddy blobs rather than recognizable equipment. (center, moderate)
- gemini-3.1-pro-preview: The hands and whatever tools the workers on the left might be holding are indistinct, amorphous blobs that blend directly into the work surface. (middle-left, moderate)
- gemini-3.1-pro-preview: The workers on the left are performing manual tasks, but their hands and any tools they are holding are rendered as indistinct, merged blobs lacking fingers or clear shapes. (middle-left, strong)

**camera_or_windscreen**: score 4, raised in 2/9 calls, at whole-image

- gemini-3.1-pro-preview: The apparent water droplets on the camera lens look like a flat, uniform overlay pattern and lack realistic optical distortion or refraction of the scene behind them. (whole-image, moderate)
- gemini-3.1-pro-preview: Water spots across the top half of the image appear as a uniform, flat overlay, looking more like an artificial filter than genuine droplets on a lens or glass. (whole-image, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: Inside the dark open bay of the building on the left, there are irregular, floating bright white slashes that do not logically attach to any visible light fixtures. (top-left, moderate)

## x-group-L-3.jpg: mean P(AI) 0.62 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.80 / 0.85
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 1.00

**track_geometry**: score 20, raised in 5/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: The two branch tracks diverge without any switch, frog, or point blades; they simply split apart as separate rails embedded in the pavement, which is implausible for a real track layout. (center, strong)
- claude-opus-5.5: The left track's rail pair has inconsistent gauge and doubled grooves; the inner rail near the bottom appears as a wide double channel. (bottom-center, moderate)
- claude-opus-5.5: Two embedded track branches diverge without any visible switch blades, frog, or connecting geometry; the left track's inner rail runs into the gravel area and the curves look implausibly separate for a junction. (center, moderate)
- claude-opus-5.5: The left branch has only a single rail groove pair spaced oddly wide, with rails that don't maintain consistent gauge as they curve toward the building. (bottom-left, moderate)

**people_anatomy**: score 18, raised in 4/9 calls, at middle-left, middle-right, center

- gpt-6-sol: The workers’ hands overlap the rails and one another, making a few hand and arm boundaries hard to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The boots and lower legs of the worker on the right track form an incoherent, jumbled brown mass with multiple boot-like shapes that do not resolve into two distinct feet. (middle-right, strong)
- gemini-3.1-pro-preview: The feet and tools underneath the leftmost worker similarly blend into a messy brown blob lacking distinct structural details. (middle-left, moderate)
- gemini-3.1-pro-preview: The lower body of the worker on the right track dissolves into a messy, unrecognizable pile of brown shapes rather than depicting clear legs and boots. (middle-right, strong)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at middle-right, middle-left, center

- gpt-6-sol: The right worker’s hands and the small object at the rail are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small components where they meet the rail are hard to distinguish. (middle-left, weak)
- claude-opus-5.5: The tool bags on the ground are mushy and indistinct, and the hands of the workers lack clear tools. (center, weak)
- gemini-3.1-pro-preview: The brown object or bag resting on the ground near the worker in the orange jacket is an amorphous, structureless blob. (middle-left, moderate)

**camera_or_windscreen**: score 7, raised in 5/9 calls, at top-center, whole-image

- claude-opus-5.5: Raindrop bokeh appears only on the upper building area, as if on a lens, while the lower foreground shows no drops. The overall look is cinematic. (top-center, weak)
- claude-opus-5.5: Rain droplets on the lens appear mostly over the buildings, with soft bokeh that looks plausible but is evenly distributed. (top-center, weak)
- gemini-3.1-pro-preview: The water droplets appearing on the 'lens' are perfectly circular, transparent overlays that do not refract or distort the background behind them, characteristic of a synthetic effect or AI hallucination. (top-center, strong)
- gemini-3.1-pro-preview: Uniform, out-of-focus transparent circles are overlaid across the entire image, mimicking water droplets on a lens but lacking realistic optical interaction with the background. (whole-image, weak)

**background_clutter**: score 6, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The wooden slats of the pallets stacked in the background behind the fence meld together into a solid block on their left side. (center, moderate)
- gemini-3.1-pro-preview: An orange traffic cone located behind the chain-link fence is physically fused into an adjacent wooden pallet. (center, moderate)
- gemini-3.1-pro-preview: The stacked wooden pallets in the background have uneven, melting slats that do not follow realistic perspective or structural logic. (center, moderate)

## x-group-R-1.jpg: mean P(AI) 0.58 (fails)

- anthropic/claude-opus-5.5: 0.72 / 0.75 / 0.68
- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 17, raised in 6/9 calls, at center, bottom-center, bottom-right

- claude-opus-5.5: Track layout is odd: two separate curving tracks diverge with a wide gravel/dirt wedge between them, and the inner rails of each branch do not form a coherent switch or frog; the left track's right rail and right track's left rail run in a dirt-bordered concrete strip without logical connection. (center, moderate)
- claude-opus-5.5: The two branch tracks diverge from no visible switch; the inner rails of the left and right branches don't connect into a coherent turnout, and the right track's left rail appears to emerge from the gravel wedge. (center, moderate)
- claude-opus-5.5: The two branch tracks diverge from a common area, but the rails don't form a coherent switch; the left track's inner rail and the right track's left rail don't connect into a plausible frog or switch, and the track gauge looks inconsistent between the branches. (center, moderate)
- claude-opus-5.5: The right branch's left rail shows doubled, parallel grooves that merge oddly. It looks more like a rendered artifact than a real rail with a flangeway. (bottom-center, moderate)

**people_anatomy**: score 12, raised in 5/9 calls, at center, middle-right

- claude-opus-5.5: Workers' bodies and legs blend into ground; the front worker's leg and bag merge with the rail, feet indistinct. (center, moderate)
- gpt-6-sol: The crouched workers’ hands and lower legs are difficult to distinguish cleanly from their gear and the rails. (middle-right, weak)
- gemini-3.1-pro-preview: The worker in the center of the right group, wearing an orange vest, appears to lack distinct lower legs or boots; his torso merges unnaturally into the ground and the rail. (middle-right, strong)
- gemini-3.1-pro-preview: The workers appear as indistinct, formless blobs lacking clearly defined limbs, hands, tools, or facial features under their helmets. (middle-right, strong)

**tools_or_small_objects**: score 8, raised in 5/9 calls, at center, middle-right, bottom-right, bottom-center

- claude-opus-5.5: The workers' tools and bags are indistinct blobs, and no identifiable tools are seen in their hands. (center, moderate)
- gpt-6-sol: The workers’ hands and nearby equipment are hard to distinguish and appear to run together in places. (middle-right, weak)
- gpt-6-sol: The workers' hands and equipment blend into a dark, hard-to-resolve cluster. (middle-right, weak)
- gemini-3.1-pro-preview: The object resting on the ground next to the front worker on the right track is an amorphous, indistinct blob with a camouflage-like texture, merging smoothly into the wet pavement. (bottom-right, moderate)

**people_pose_or_placement**: score 7, raised in 4/9 calls, at center, middle-left, middle-right

- claude-opus-5.5: Three workers crouch in a tight cluster on the right track in near-identical kneeling poses, and one kneels alone on the left track; the arrangement looks staged and somewhat repetitive. (center, weak)
- claude-opus-5.5: Three workers crouch in a neat row on the right track, all facing away. Their staging looks stock-like and their hands are obscured. (center, weak)
- gemini-3.1-pro-preview: The worker on the left track has hands that appear as formless blobs resting on the rail, with no clear definition of fingers or tools being held. (middle-left, moderate)
- gemini-3.1-pro-preview: The middle worker in the orange vest has an ambiguous lower body that appears to sink or melt into the ground without defined form. (middle-right, strong)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at whole-image, top-center

- claude-opus-5.5: Wet asphalt has smooth, painterly puddle patches and soft, uniform texture lacking fine grit detail. (whole-image, weak)
- claude-opus-5.5: The wet asphalt has a smooth, painterly sheen, and the puddle patches look uniform and smeared rather than having photographic grain. (whole-image, moderate)
- claude-opus-5.5: The wet asphalt has a smooth, somewhat painterly texture, and the puddles lack crisp reflections. (whole-image, weak)
- gemini-3.1-pro-preview: The corrugated metal siding on the building features wavy, irregular lines that break the expected strict, parallel vertical pattern. (top-center, moderate)

## x-group-R-2.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.70 / 0.70 / 0.85
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.98

**track_geometry**: score 14, raised in 5/9 calls, at bottom-center, center, middle-right, bottom-left

- claude-opus-5.5: The left track's rails spread very wide toward the foreground and sweep in a smooth, oddly symmetric curve. The two tracks look like unconnected parallel pairs rather than a real turnout with a frog and switch points. (bottom-center, moderate)
- claude-opus-5.5: Track layout diverges oddly: the left pair of rails and right pair of rails are separate gauged tracks with no visible switch, frog, or connecting points despite the 'branch' layout; the rails simply splay apart from a common origin implied off-frame (center, moderate)
- claude-opus-5.5: The four rails at the bottom form two pairs whose gauge looks far too wide relative to the workers. Near the top of the right branch, the rails appear much closer together than perspective would explain. There is no actual switch or frog; the branches simply split apart in the concrete. (bottom-center, moderate)
- gemini-3.1-pro-preview: Where the left and right tracks diverge, there is no switch mechanism or connecting 'frog'; the grooved inner rails simply fade out or end abruptly in the concrete. (bottom-center, strong)

**tools_or_small_objects**: score 11, raised in 5/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and the small equipment beside the right-hand rail are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the equipment at rail level are hard to distinguish, leaving their exact interaction unclear. (middle-right, weak)
- gemini-3.1-pro-preview: The gear and bags resting on the ground next to the group of three workers appear as fused, indistinct blobs lacking structural details of real equipment. (middle-right, strong)
- gemini-3.1-pro-preview: The objects or tools on the ground near the three workers lack clear mechanical structure, are blurry, and appear to melt into the wet pavement and track grooves. (bottom-right, strong)

**people_anatomy**: score 7, raised in 4/9 calls, at middle-right

- claude-opus-5.5: The three kneeling workers blend together. Their hands and tools are indistinct mushy shapes, and the bags and tools at their feet lack clear structure. (middle-right, weak)
- claude-opus-5.5: The three workers' hands and tools merge into indistinct clumps around the rails. Their legs and feet are smeared and lack clear structure. (middle-right, moderate)
- gemini-3.1-pro-preview: In the group of three workers, the lower body and legs of the middle worker are undefined, appearing to melt into the ground and the worker next to them. (middle-right, moderate)
- gemini-3.1-pro-preview: The lower bodies, legs, and hands of the three workers kneeling on the right are poorly defined, appearing to melt into the ground or merge with unidentifiable objects. (middle-right, moderate)

**background_clutter**: score 7, raised in 5/9 calls, at top-center, center

- claude-opus-5.5: The pallets, cones and fence are rendered somewhat softly and generically, and the fence posts are irregularly spaced. (top-center, weak)
- claude-opus-5.5: Cones, pallets, fence, and shed doors look plausible but objects behind the fence are smeared and nondescript (top-center, weak)
- gemini-3.1-pro-preview: The chain-link fence behind the tracks loses its regular grid pattern in several areas, turning into a blurry, chaotic texture. (center, weak)
- gemini-3.1-pro-preview: The chain-link fence in the background between the tracks consists of irregular, cross-hatched noise rather than a consistent geometric mesh. (center, strong)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Two diverging tracks with a single worker on the left track and a group of three on the right track, a classic trolley-problem layout that is typical of generated prompts. (whole-image, moderate)
- claude-opus-5.5: Symmetrical staged composition of single worker on left track and group on right track suits a prompt-like scenario (whole-image, weak)
- claude-opus-5.5: Classic trolley-problem staging: two diverging tracks with exactly one worker on the left branch and a cluster of three on the right, all kneeling on the rails facing away from the camera. (whole-image, strong)

## x-group-R-3.jpg: mean P(AI) 0.36 (fails)

- anthropic/claude-opus-5.5: 0.06 / 0.10 / 0.10
- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.95

**people_anatomy**: score 16, raised in 4/9 calls, at middle-right, middle-left, bottom-right

- gpt-6-sol: The kneeling workers’ hands and gear are hard to distinguish where they overlap. (middle-right, weak)
- gemini-3.1-pro-preview: The lower bodies, arms, and hands of the three workers grouped together merge indistinctly into each other and the tracks, lacking realistic anatomical structure. (middle-right, strong)
- gemini-3.1-pro-preview: The lower half of the kneeling worker on the left track is entirely undefined, blending completely into a red blob and the surrounding rail surface. (middle-left, strong)
- gemini-3.1-pro-preview: The lower body of the worker in the orange vest is severely malformed; the legs appear to melt into the adjacent bags, and there is an unidentifiable pinkish/fleshy patch on the lower back. (bottom-right, strong)

**tools_or_small_objects**: score 9, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and small items beside the rails are hard to distinguish, leaving some local detail ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The brown object beside the worker in the orange vest, which appears intended to be a tool bag, is an amorphous, smooth lump without defined edges, straps, or pockets. (middle-right, strong)
- gemini-3.1-pro-preview: The objects or bags lying on the ground next to the workers are rendered as completely amorphous, shapeless brown blobs rather than distinct pieces of equipment. (bottom-right, strong)
- gemini-3.1-pro-preview: The brown bag or gear sitting next to the kneeling worker is completely amorphous, without distinct edges or functional details. (bottom-right, moderate)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-left, bottom-center, middle-left

- gemini-3.1-pro-preview: The rails in the immediate foreground appear to be composed of three thin, parallel strips of metal rather than a solid piece of steel with a proper flangeway groove. (bottom-left, moderate)
- gemini-3.1-pro-preview: Where the left and right tracks meet in the foreground, there is no physical switch mechanism (no frog or switch blades); the rails simply fade and merge into the ground texture in an impossible way. (bottom-center, strong)
- gemini-3.1-pro-preview: The left rail of the left track branch becomes inexplicably thin and seems to disappear into the concrete as it curves towards the building. (middle-left, moderate)
- gemini-3.1-pro-preview: The outer rail of the left track has a strange, sharp kink or bump that does not make sense for the smooth curve of a railway. (bottom-left, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The wire mesh fence in the background has a chaotic, irregular crisscross pattern that fails to maintain a consistent chain-link grid. (center, moderate)
- gemini-3.1-pro-preview: The wooden pallet stacked near the fence lacks structural vertical supports and appears as a blurry texture of horizontal lines. (middle-left, weak)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The head and helmet of the worker in the yellow jacket are severely misshapen and asymmetric, lacking structural logic. (center, strong)

## x-two-L-1.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 1.00

**track_geometry**: score 15, raised in 3/9 calls, at middle-right, bottom-center, bottom-right

- gemini-3.1-pro-preview: The inner rail of the right-hand track inexplicably splits into two parallel, closely spaced lines as it extends towards the building. (middle-right, strong)
- gemini-3.1-pro-preview: The junction where the left and right tracks appear to meet lacks any physical switch mechanism (points, frogs); the rails simply blur and merge into one another like lines drawn on the wet surface rather than solid steel objects. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the right-hand track appears as two parallel lines (a groove) in the bottom foreground, but as it curves away toward the building, one of the lines simply vanishes without a logical transition. (bottom-right, strong)
- gemini-3.1-pro-preview: The left rail of the right track and the right rail of the left track converge and merge into a single messy, indistinct line just below the workers instead of crossing properly or maintaining their gauge. (bottom-center, strong)

**people_anatomy**: score 14, raised in 5/9 calls, at center, middle-left

- gpt-6-sol: The yellow-clad worker’s hands and lower leg are hard to distinguish where they meet the rail. (center, weak)
- gpt-6-sol: The yellow-clad worker’s hands and their contact with the rail are indistinct, making that small area difficult to verify. (center, weak)
- gemini-3.1-pro-preview: The worker on the right has a nonsensical lower body structure, with legs that blend into a formless mass and what appears to be a detached boot. (center, strong)
- gemini-3.1-pro-preview: The worker on the left has a left arm that lacks clear articulation and appears to merge directly into the ground or track. (middle-left, strong)

**background_clutter**: score 6, raised in 3/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The orange traffic cones visible behind the chain-link fence are rendered as amorphous blobs without clear edges or structure. (middle-left, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background has a chaotic, inconsistent mesh pattern where the wires do not form a regular grid and frequently appear to start or stop randomly. (center, moderate)
- gemini-3.1-pro-preview: The wooden pallet leaning against the chainlink fence features intersecting, non-parallel slats that form physically impossible geometry. (center, moderate)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The hands and tools of the worker on the left (white hard hat) blend indistinctly into the rail and the wet ground, lacking clear boundaries or defined shapes. (middle-left, moderate)
- gemini-3.1-pro-preview: The left worker's hand blends seamlessly into the steel rail, and the rail's deep groove incorrectly vanishes right at the point of contact. (middle-left, moderate)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at center

- gpt-6-sol: The workers' hands and the rail hardware they are handling are difficult to distinguish. (center, weak)
- gemini-3.1-pro-preview: The brown object resting on the ground next to the worker on the right is an indistinct, lumpy blob rather than a recognizable tool bag or piece of equipment. (center, moderate)

## x-two-L-2.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.99

**track_geometry**: score 11, raised in 2/9 calls, at bottom-left, center, bottom-right

- gemini-3.1-pro-preview: The rails where the workers are kneeling do not form a coherent pair with a defined gauge; instead, there are multiple inconsistent grooves that fade inexplicably into the pavement. (bottom-left, strong)
- gemini-3.1-pro-preview: The junction where the left and right tracks should meet is non-existent; the left track simply appears in the pavement without connecting to the main curve. (center, strong)
- gemini-3.1-pro-preview: The track rails at the junction where the men are working merge together nonsensically without any proper switch mechanism, appearing more like shallow drawn grooves that just disappear into the asphalt. (bottom-left, strong)
- gemini-3.1-pro-preview: The rails curving away to the right look entirely flat, lacking the depth, flange grooves, and physical 3D structure of real rails embedded in a paved surface. (bottom-right, moderate)

**people_anatomy**: score 7, raised in 3/9 calls, at bottom-center, center, bottom-left

- gpt-6-sol: The workers' hands and the object between them are hard to distinguish, leaving some uncertainty about their exact interaction. (bottom-center, weak)
- gemini-3.1-pro-preview: The hands of both workers, particularly where they are touching the ground or tools, are rendered as formless, blurry blobs. (center, strong)
- gemini-3.1-pro-preview: The lower body and legs of the worker on the left (in the yellow jacket) are completely undefined, appearing to melt directly into the ground without rendering boots or kneeling posture correctly. (bottom-left, strong)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at center, bottom-center

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish, leaving a small area of visual ambiguity. (center, weak)
- gemini-3.1-pro-preview: The objects lying on the ground next to the workers appear as indistinct, textural blobs rather than identifiable tools or equipment. (center, moderate)
- gemini-3.1-pro-preview: There is an amorphous, undefined gray and white blob sitting next to the worker in orange, which lacks the structure of any recognizable tool, bag, or equipment. (bottom-center, strong)

**background_clutter**: score 5, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The orange traffic cones visible in the background near the fence are severely distorted and appear to be melting. (middle-left, strong)
- gemini-3.1-pro-preview: The orange traffic cones placed near the fence are misshapen and appear to melt into the surrounding ground rather than standing distinctly. (middle-left, moderate)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The headgear of the worker on the left has a nonsensical, merged structure that fails to resemble a clear helmet, face shield, or earmuffs. (middle-left, moderate)

## x-two-L-3.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish; this could suggest a malformed detail, though distance and blur also explain it. (center, weak)
- gpt-6-sol: The workers' hands and the object between them are difficult to distinguish and appear somewhat muddled. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish, leaving some detail ambiguous. (middle-left, weak)

## x-two-R-1.jpg: mean P(AI) 0.04 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.08
- openai/gpt-6-sol: 0.03 / 0.03 / 0.01
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and lower legs are difficult to distinguish where they meet the tracks; this could resemble generated-image blending, though distance and rain also explain it. (middle-right, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The gear beside the nearer worker is somewhat hard to distinguish from their hands and clothing. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The workers’ hands and exact contact points with the rails are difficult to make out; that ambiguity could conceal generated detail, though distance and rain readily explain it. (center, weak)

## x-two-R-2.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.18 / 0.15 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.01

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-right, whole-image

- gpt-6-sol: The workers’ hands and nearby tools are too indistinct to verify their exact shapes. (middle-right, weak)
- claude-opus-5.5: The image has a slightly soft, compressed, video-frame look with flat grading. Stock footage can look like this, and so can AI output, so it is only mildly ambiguous. (whole-image, weak)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center, middle-right

- gpt-6-sol: The workers’ hands and equipment at rail level are indistinct and somewhat hard to separate visually. (center, weak)
- gpt-6-sol: The workers' hands and the small dark objects beside the rails are hard to distinguish precisely. (middle-right, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The scene is cleanly framed, with the workers placed neatly on one branch, much like a stock 'track choice' setup. (whole-image, weak)

## x-two-R-3.jpg: mean P(AI) 0.14 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.06
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.02

**tools_or_small_objects**: score 5, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: Small dark objects beside the workers are difficult to identify precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The area where the hands of the worker in the yellow jacket meet the track is a blurry, undefined dark mass lacking recognizable fingers or tools. (center, moderate)
- gemini-3.1-pro-preview: The brown and black object resting on the ground to the right of the orange worker is an indistinct, formless blob rather than a recognizable tool bag or piece of equipment. (middle-right, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at center, bottom-right

- gpt-6-sol: The closely spaced rails at the junction are somewhat difficult to trace where they curve and separate. (center, weak)
- gemini-3.1-pro-preview: The track structure on the right side appears to have three distinct parallel rail lines curving together, which is structurally nonsensical for standard railway or tramway tracks. (bottom-right, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The left knee and lower leg of the worker in the orange jacket appear to blend seamlessly into the steel rail beneath him, with no clear boundary between clothing and metal. (middle-right, strong)

**people_pose_or_placement**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Both workers are crouched beside the right-hand rails, with their hands and lower legs partly obscured by their bodies and the track. (center, weak)

## y-group-L-1.jpg: mean P(AI) 0.60 (fails)

- anthropic/claude-opus-5.5: 0.80 / 0.75 / 0.75
- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**tools_or_small_objects**: score 17, raised in 7/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Tools and bags near workers are amorphous blobs without identifiable shape (bottom-left, moderate)
- claude-opus-5.5: The worker's tools and bag beside the rail are blobby and undefined, with no clear tool shapes. (bottom-right, moderate)
- claude-opus-5.5: Bag/tool next to right worker is an indistinct blob; tools on left are vague shapes (bottom-right, weak)
- gpt-6-sol: The workers' hands and small items beside the rail are indistinct and partly merge visually. (bottom-left, weak)

**track_geometry**: score 16, raised in 5/9 calls, at bottom-center, bottom-right, bottom-left, center

- claude-opus-5.5: Left track rails curve in an odd way: the left rail of the left track bends sharply and the two rails don't keep consistent gauge; the right rail of left track widens strangely near bottom (bottom-center, moderate)
- claude-opus-5.5: Right track's rails emerge from the depot area without clear connection to the pit tracks; they merge into the concrete ambiguously near the top (bottom-right, moderate)
- claude-opus-5.5: The embedded grooved rails curve and terminate inconsistently; the left track's right rail and the right track's left rail do not connect logically to the pit tracks in the depot, and the track arrangement leading into the shed doesn't match the rails in the foreground. (bottom-center, moderate)
- claude-opus-5.5: Embedded grooved rails curve in from foreground but don't connect logically to the pit lanes inside the depot; left and right track pairs diverge oddly and the left track's rails don't lead into any visible bay (bottom-center, moderate)

**buildings**: score 10, raised in 4/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is plausible but repetitive, with braces that cross ambiguously; the pole in the center of the pits stands oddly in the middle of the track. (top-center, weak)
- gemini-3.1-pro-preview: The diagonal steel cross-bracing in the roof structure is nonsensical; several beams intersect at impossible angles, fade out, or do not connect to structural nodes. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal cross-bracing beams in the roof trusses are structurally nonsensical, with many beams intersecting without connecting nodes, merging into one another, or ending abruptly in mid-air. (top-center, strong)
- gemini-3.1-pro-preview: The metal truss structure of the shed roof is chaotic, with diagonal beams crossing irregularly and failing to form a logical, repetitive structural pattern. (top-center, strong)

**people_pose_or_placement**: score 9, raised in 4/9 calls, at middle-left, bottom-right, bottom-left

- claude-opus-5.5: Three workers clustered tightly on the left track, with limbs and tools merging; hands and tools are indistinct smudges (middle-left, moderate)
- claude-opus-5.5: Three workers are clustered tightly over the same rail, working on nothing distinct, with indistinct hands and tools merging into the rail. (middle-left, moderate)
- gemini-3.1-pro-preview: The knee and lower leg of the worker on the right appear to merge seamlessly into the dark groove of the rail, lacking a clear physical boundary between the person and the steel. (bottom-right, strong)
- gemini-3.1-pro-preview: The three workers are tangled together awkwardly, with the middle worker's lower body and posture being indistinct and merging with the others. (bottom-left, moderate)

**people_anatomy**: score 8, raised in 3/9 calls, at middle-left, bottom-left, bottom-right

- claude-opus-5.5: Three workers clustered on left track with ambiguous limbs and hands merging into tools; faces hidden, details mushy (middle-left, moderate)
- gemini-3.1-pro-preview: The hands and arms of the three workers are entirely amorphous and blend seamlessly into the tools and rails they are supposedly working on. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the worker on the right are entirely malformed, melting into the tool and the railway track without clear fingers or structure. (bottom-right, strong)

## y-group-L-2.jpg: mean P(AI) 0.61 (fails)

- openai/gpt-6-sol: 0.03 / 0.06 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**track_geometry**: score 17, raised in 6/9 calls, at bottom-center, bottom-left, bottom-right

- claude-opus-5.5: The foreground tracks curve away into the depot, but the rails do not connect coherently to the inspection-pit tracks further back; the rail pairs appear to fade or merge ambiguously. (bottom-center, moderate)
- claude-opus-5.5: The two foreground tracks curve oddly: the left pair converges and widens inconsistently, and the right pair does not connect to any visible pits or tracks in the depot; the gauge between rails appears to vary. (bottom-center, moderate)
- claude-opus-5.5: Foreground tram rails curve and diverge but don't connect logically to the inspection pits or tracks in the depot; rail spacing on the left branch looks inconsistent and the rails seem to float on the slab without proper groove/embedding (bottom-center, moderate)
- gemini-3.1-pro-preview: The steel rails of the track underneath and immediately behind the group of three workers seem to lose definition, breaking or blending unnaturally into the surrounding concrete. (bottom-left, moderate)

**tools_or_small_objects**: score 13, raised in 5/9 calls, at center, bottom-left, bottom-right

- claude-opus-5.5: The tools and bags on the ground are indistinct blobs with no identifiable tool shapes. (center, moderate)
- claude-opus-5.5: The tools and bags on the ground are indistinct blobs, and the red bag and black items near the workers lack clear form. (bottom-left, moderate)
- claude-opus-5.5: Tools and bags on the ground are blobby, undefined shapes with no recognizable tool forms (bottom-left, moderate)
- gemini-3.1-pro-preview: The scattered black objects and bags around the group of three workers appear as shapeless, blurry blobs rather than distinct tools or equipment. (bottom-left, strong)

**buildings**: score 10, raised in 5/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is mostly coherent, but the vertical poles in the middle of the floor and the truss repetition are slightly irregular. (top-center, weak)
- claude-opus-5.5: The roof trusses look repetitive and slightly irregular. The background shelving and equipment are mushy, smeared detail. (top-center, weak)
- gemini-3.1-pro-preview: The diagonal cross-bracing in the metal roof truss structure is inconsistent, with some beams appearing to stop abruptly or merge into other lines illogically. (top-center, moderate)
- gemini-3.1-pro-preview: The metal roof trusses inside the depot consist of nonsensical, overlapping diagonal struts that do not form structurally sound triangles. (top-center, strong)

**people_anatomy**: score 9, raised in 4/9 calls, at middle-left, bottom-left, bottom-right

- claude-opus-5.5: The hands of the clustered workers are merged and undefined, and their limbs blend into each other and the tools. (middle-left, moderate)
- claude-opus-5.5: The three workers' limbs merge together. The hands of the orange-shirted worker are unreadable, and the legs of the blue-hi-vis worker blend into the shadow. (bottom-left, moderate)
- gemini-3.1-pro-preview: The right leg and foot of the kneeling worker on the right merge awkwardly into the ground and shadow, lacking defined anatomy or shoe structure. (bottom-right, strong)
- gemini-3.1-pro-preview: The right hand of the lone worker kneeling on the right track is not rendered properly and appears to melt or merge entirely into his dark trousers. (bottom-right, moderate)

**texture_noise_or_sharpness**: score 6, raised in 5/9 calls, at whole-image, center, middle-left

- gpt-6-sol: Some distant equipment and the workers' hands are too soft to verify fine details, leaving a small possibility of generated detail. (whole-image, weak)
- gpt-6-sol: The workers' hands and the small items around the rails are indistinct, making their exact shapes hard to verify. (center, weak)
- gpt-6-sol: The workers’ hands and small objects at the rail are hard to distinguish; this could resemble AI blending, though the image is also soft at that scale. (middle-left, weak)
- claude-opus-5.5: The image has a film-like soft grain and a cinematic grade typical of generated stock-style images. (whole-image, weak)

## y-group-L-3.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.08 / 0.06 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 17, raised in 5/9 calls, at middle-left, bottom-left, bottom-right

- gpt-6-sol: The three overlapping workers are difficult to distinguish individually, especially around their arms and tools. (middle-left, weak)
- gpt-6-sol: The three overlapping workers' hands and legs are difficult to distinguish individually. (bottom-left, weak)
- gemini-3.1-pro-preview: The worker on the right track has a severely distorted lower body; his legs appear to melt into undefined mechanical shapes and the track itself, and there seems to be a detached boot near him. (bottom-right, strong)
- gemini-3.1-pro-preview: The three workers have heavily distorted, melting anatomy; their limbs indistinctly blend into each other, their equipment, and the ground. (bottom-left, strong)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at middle-right, bottom-left

- gpt-6-sol: The objects beside the kneeling worker are indistinct. (middle-right, weak)
- gemini-3.1-pro-preview: The objects, tools, and bags placed on the ground around the group of three workers lack distinct structure, appearing instead as formless dark blobs that merge with the concrete. (bottom-left, strong)
- gemini-3.1-pro-preview: The objects lying on the ground around the workers are completely formless brown and dark shapes, lacking any features of real mechanical tools or equipment. (bottom-left, strong)

**buildings**: score 6, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The structural metal framework and diagonal bracing in the roof of the depot are inconsistent, with some girders intersecting illogically or abruptly disappearing without connecting to a joint. (top-center, moderate)
- gemini-3.1-pro-preview: The structural metal beams in the roof, particularly in the background, form chaotic and physically implausible connections rather than a coherent truss system. (top-center, moderate)
- gemini-3.1-pro-preview: The metal truss structure supporting the roof has diagonal cross-braces that appear inconsistent; some connect arbitrarily or fade out into empty space, lacking architectural logic. (top-center, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The steel rails of the left track do not continue continuously, but rather appear to melt and disappear nonsensically into the bodies of the kneeling workers. (bottom-left, strong)
- gemini-3.1-pro-preview: The rails on the right curve are noticeably uneven in thickness and slightly wavy, lacking the rigid, uniform appearance of real steel tram or train tracks. (bottom-right, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, whole-image

- gpt-6-sol: Fine details in the distant depot are indistinct, making them difficult to verify individually. (center, weak)
- gemini-3.1-pro-preview: Upon closer inspection, the image exhibits a smooth, somewhat painterly texture lacking natural photographic grain, which is typical of AI-generated images. (whole-image, weak)

## y-group-R-1.jpg: mean P(AI) 0.63 (fails)

- openai/gpt-6-sol: 0.07 / 0.05 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 19, raised in 5/9 calls, at bottom-left, bottom-right, center

- claude-opus-5.5: Left track rails curve but the paired rails don't maintain consistent gauge; the right rail of the left track runs into a raised curb-like strip and the tracks don't connect logically to the depot pits (bottom-left, moderate)
- claude-opus-5.5: Right-side tracks are embedded rails that converge/diverge oddly; the rails the workers kneel on don't lead into any of the shed's pit roads (bottom-right, moderate)
- claude-opus-5.5: Left track curves sweep into the shed but do not connect to any of the inspection pit tracks; rails seem to dissolve into the concrete floor near the shed entrance (bottom-left, strong)
- claude-opus-5.5: Right pair of rails is a grooved embedded rail pair with uneven gauge; rails diverge and run toward the right building wall rather than any logical track (bottom-right, moderate)

**buildings**: score 12, raised in 6/9 calls, at top-center

- claude-opus-5.5: Roof truss structure is plausible but bracing repeats with inconsistent connections; pillar in center sits in the middle of the pit road (top-center, weak)
- claude-opus-5.5: Roof truss lattice has irregular, nonrepeating diagonal members and support poles that pass in front of the roof without clear connections (top-center, moderate)
- claude-opus-5.5: Roof truss structure has irregular, nonrepeating diagonal bracing and beams that don't meet coherently. (top-center, moderate)
- gemini-3.1-pro-preview: The complex steel truss structure of the shed roof contains diagonal members that are inconsistent, with some appearing to vanish or fail to connect logically to the main beams. (top-center, moderate)

**people_anatomy**: score 9, raised in 4/9 calls, at middle-right, bottom-right, bottom-left

- gpt-6-sol: The workers' hands and the rail hardware they are handling are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The lower bodies, feet, and hands of the three workers are indistinct and blend together; the rightmost worker has a shapeless dark blob in place of a left boot. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands and arms of the workers on the right are indistinct, merging directly into the ground or rails, and they appear to be working without any visible tools. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower legs and feet of the lone worker on the left track are indistinct and seem to blend unnaturally into the shadow and ground. (bottom-left, moderate)

**people_pose_or_placement**: score 9, raised in 4/9 calls, at middle-right, bottom-right

- claude-opus-5.5: Three workers clustered evenly kneeling on rails with nearly identical poses, staged look; hands and tools indistinct (middle-right, moderate)
- claude-opus-5.5: Three workers kneeling in a neat row, all working at rail with tiny indistinct tools; hands blur into rails (middle-right, moderate)
- claude-opus-5.5: Three kneeling workers in nearly identical poses clustered on rails, hands vague with no clear tools; staged look. (middle-right, moderate)
- gemini-3.1-pro-preview: The leftmost worker in the group of three has a left leg extended backward where the boot appears to melt into or merge seamlessly with the concrete ground. (bottom-right, strong)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at bottom-right, middle-right, center

- gpt-6-sol: The workers’ hands and the small parts at the switch are hard to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers' hands and equipment overlap at the rail junction, making the exact tool shapes difficult to distinguish. (middle-right, weak)
- claude-opus-5.5: Small cart and equipment in the shed interior are mushy, indistinct shapes. (center, weak)
- gemini-3.1-pro-preview: The hands and whatever tools the three workers on the right are holding are rendered as indistinct, blurry blobs of color rather than defined objects. (bottom-right, strong)

## y-group-R-2.jpg: mean P(AI) 0.28 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- openai/gpt-6-sol: 0.08 / 0.06 / 0.04
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.02

**people_pose_or_placement**: score 6, raised in 3/9 calls, at bottom-right, bottom-left

- gpt-6-sol: Three workers are gathered closely around the rail; their overlapping hands and tools are difficult to distinguish. (bottom-right, weak)
- gemini-3.1-pro-preview: The hands, arms, and tools of the three clustered workers are indistinct and blend together into a muddy, undefined mass. (bottom-right, moderate)
- gemini-3.1-pro-preview: The lone worker on the left track appears to be merging with the rail and ground, lacking distinct legs or a realistic posture for sitting or kneeling on the track. (bottom-left, strong)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal struts and bracing within the metal roof trusses intersect at impossible angles and some lines terminate abruptly without connecting to a main beam. (top-center, strong)
- gemini-3.1-pro-preview: The metal roof trusses and cross-bracing are chaotic, with beams intersecting nonsensically, starting and stopping in mid-air, and lacking structural logic. (top-center, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at bottom-right, bottom-left

- gpt-6-sol: The workers' hands and equipment overlap and are difficult to distinguish. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish precisely. (bottom-right, weak)
- gemini-3.1-pro-preview: The metal tool or bar extending to the right of the seated worker has an illogical, branching shape and seems to fade into the ground without a clear end. (bottom-left, strong)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The inner rail of the left track loses its three-dimensional profile near the seated worker and appears to smear or merge flatly into the concrete. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the left branching track becomes blurry and seems to disappear or merge into the concrete surface near the worker. (bottom-left, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The group of three workers are blending into each other and the ground; the person in the orange vest appears to lack legs, and their interaction with the tools and track is indistinct. (bottom-right, strong)

## y-group-R-3.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.05 / 0.95 / 0.02

**people_anatomy**: score 5, raised in 1/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: The cluster of three workers exhibits severe anatomical blending; limbs and clothing merge into each other, the middle worker lacks a distinct lower body, and the left worker in the group has a strange, unnatural shape protruding backwards like an extra leg. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the single worker on the left track are poorly defined, appearing as indistinct, fleshy stumps resting on the rail. (bottom-left, moderate)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at bottom-right

- gpt-6-sol: The dark tools and hands around the right-hand rail are difficult to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and small items beside the rails are somewhat indistinct. (bottom-right, weak)
- gemini-3.1-pro-preview: The dark object resting on the ground behind the rightmost worker is somewhat indistinct and blob-like, lacking clear structural definition, which can occasionally occur in AI generation. (bottom-right, weak)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal struts in the upper clerestory windows of the shed are inconsistent. Lines are wobbly, fail to connect to the frames logically, and merge into each other irregularly. (top-center, moderate)

**track_geometry**: score 2, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The section of rail immediately under the hands of the three workers lacks realistic 3D depth and metallic profile, looking more like a flat, dark line drawn onto the concrete. (bottom-right, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Fine details around the workers’ hands and tools look somewhat smeared. (middle-right, weak)

## y-two-L-1.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.95

**track_geometry**: score 11, raised in 3/9 calls, at bottom-left, center, middle-right

- gemini-3.1-pro-preview: The inner rail of the left track loses its structure and appears to turn into a dark smudge directly underneath the worker in the orange vest. (bottom-left, strong)
- gemini-3.1-pro-preview: The rails for the maintenance pits inside the shed begin abruptly on the concrete floor and have no visible connection to the tracks approaching from the outside. (center, strong)
- gemini-3.1-pro-preview: The rails on the left curve have inconsistent geometry, with the inner rail appearing to vanish into the concrete directly beneath the workers. (bottom-left, strong)
- gemini-3.1-pro-preview: As the embedded tracks on the right enter the shadow of the building, the parallel grooves lose their defined shape and seem to smear into the concrete floor. (middle-right, moderate)

**tools_or_small_objects**: score 9, raised in 4/9 calls, at middle-left, bottom-left

- gpt-6-sol: The small items beside the workers are indistinct and difficult to identify precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The hands of the worker in the yellow jacket and the objects resting on the ground next to him are merged into an indistinguishable, amorphous brown blob. (bottom-left, strong)
- gemini-3.1-pro-preview: The objects scattered on the ground around the workers appear as formless, smudged blobs rather than distinct, identifiable tools. (bottom-left, moderate)
- gemini-3.1-pro-preview: The tools or equipment lying on the ground next to the crouching workers are rendered as amorphous, indistinct blobs fused with the pavement. (bottom-left, strong)

**buildings**: score 7, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof structure contains lines that intersect at nonsensical angles or disappear midway between major beams. (top-center, moderate)
- gemini-3.1-pro-preview: The metal truss structure of the roof contains illogical connections, with some diagonal beams fading into others or ending abruptly without a proper joint. (top-center, moderate)
- gemini-3.1-pro-preview: The steel truss structure above the depot entrance features irregular and chaotic diagonal bracing, with beams intersecting nonsensically or ending abruptly in mid-air. (top-center, strong)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-left, bottom-left

- gpt-6-sol: The crouching workers' hands and nearby equipment are hard to distinguish precisely. (middle-left, weak)
- gemini-3.1-pro-preview: The lower half of the worker on the right (in the orange vest) appears to melt into the track and concrete, lacking defined legs or footwear. (bottom-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: A blue and orange object sitting on the tracks in the middle distance inside the shed lacks any coherent mechanical structure or identifiable form. (center, moderate)
- gemini-3.1-pro-preview: The tools, cabinets, and equipment visible inside the depot along the walls are rendered as blurry, nonsensical geometric patches without mechanical details. (center, moderate)

## y-two-L-2.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.05

**overhead_wires_or_poles**: score 6, raised in 1/9 calls, at top-left, top-right

- gemini-3.1-pro-preview: An overhead wire enters the frame from the top left and abruptly ends in mid-air before reaching the roof structure. (top-left, strong)
- gemini-3.1-pro-preview: An overhead wire curving downwards towards the top right edge of the frame fades away into the sky without connecting to any support. (top-right, strong)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-left, center

- gpt-6-sol: The workers’ hands and small items beside the rails are indistinct, making their exact shapes hard to verify. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the small items beside them are indistinct, making their exact actions hard to verify. (middle-left, weak)
- gemini-3.1-pro-preview: The small cart or object positioned on the tracks in the middle inspection bay is completely undefined and appears as a blurry blob. (center, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The right arm of the worker in the orange and yellow shirt appears distorted and melds amorphously into the rail and ground. (bottom-left, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The inner rail of the left track loses its defined shape and appears to melt or blend into the concrete ground near where the workers are kneeling. (bottom-left, strong)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: Some of the thinner diagonal struts in the steel roof trusses do not logically connect to the main beams or appear to fade out. (top-center, moderate)

## y-two-L-3.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.90 / 0.98

**tools_or_small_objects**: score 8, raised in 3/9 calls, at bottom-center, bottom-left, center

- gpt-6-sol: The small items beside the workers are hard to distinguish and have somewhat ambiguous shapes. (bottom-center, weak)
- gemini-3.1-pro-preview: The tool bags or gear resting on the ground next to the workers appear somewhat amorphous and lack clear, functional structure like distinct straps or buckles. (bottom-left, moderate)
- gemini-3.1-pro-preview: There is a small, brownish object resting on the tracks over the middle pit that lacks any definable mechanical shape or purpose, looking like an indistinct generated blob. (center, strong)
- gemini-3.1-pro-preview: The straps on the tool bag resting on the ground to the left of the orange worker appear to melt or blend directly into the concrete surface. (bottom-left, moderate)

**buildings**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal bracing within the main roof truss spanning the entrance looks messy; the lines are thin, sketchy, and some do not appear to solidly connect to the horizontal beams. (top-center, moderate)
- gemini-3.1-pro-preview: The diagonal bracing in the roof trusses is chaotic, going in random directions rather than forming a consistent, structurally sound repeating pattern. (top-center, strong)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at center, whole-image

- gpt-6-sol: Small objects deep inside the depot are indistinct, making their shapes difficult to verify. (center, weak)
- gemini-3.1-pro-preview: Upon close inspection, darker areas and complex structures (like the distant background and the roof interior) exhibit a slight muddy or 'painterly' texture typical of diffusion models. (whole-image, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The tracks running over the maintenance pits inside the shed lack 3D depth and clear structural support, appearing in places more like lines painted on the concrete edges rather than suspended steel rails. (center, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The hands of the worker in the yellow vest, along with whatever tool they are holding, merge into an indistinct, muddy blob without clear fingers or object definitions. (bottom-center, strong)

## y-two-R-1.jpg: mean P(AI) 0.58 (fails)

- openai/gpt-6-sol: 0.03 / 0.06 / 0.03
- anthropic/claude-opus-5.5: 0.72 / 0.75 / 0.70
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**track_geometry**: score 22, raised in 6/9 calls, at center, bottom-right, bottom-left

- claude-opus-5.5: The inspection pits and depot tracks in the background have no visible rails connecting to the foreground tracks; the foreground rails curve off to the sides instead of feeding the bays. (center, moderate)
- claude-opus-5.5: The right-branch rails have inconsistent gauge and curvature: the left rail sweeps up toward the right while the right rail runs nearly straight, and they seem to merge behind the workers. (bottom-right, moderate)
- claude-opus-5.5: Right track rails are inconsistent: the left rail of the right-hand pair curves in from the pit area while the right rail runs separately, and the gauge between them looks irregular; the tool the workers hold bridges the rails oddly (bottom-right, moderate)
- claude-opus-5.5: Tracks entering the depot pits do not align cleanly with the curved embedded rails in the foreground; the pit lines and rails fade into the floor (center, moderate)

**tools_or_small_objects**: score 21, raised in 9/9 calls, at bottom-right, center

- gpt-6-sol: The workers' hands and the dark tool at the rail junction are partly obscured, making their exact arrangement hard to verify. (bottom-right, weak)
- gpt-6-sol: The tool and the workers’ hands at the rail junction are difficult to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the tool at the rail joint are difficult to distinguish precisely. (bottom-right, weak)
- claude-opus-5.5: The tool the workers hold is a vague bar lying across the rail, with no clear clamp or gauge mechanism. (bottom-right, weak)

**people_clothing_or_gear**: score 5, raised in 3/9 calls, at center, middle-right, bottom-right

- claude-opus-5.5: Hi-vis vests have plausible reflective stripes and helmets with ear defenders; the bags beside the workers are lumpy and indistinct (center, weak)
- claude-opus-5.5: The hi-vis vests, ear defenders and helmets look plausible, with a cinematic, clean staging typical of generated stock imagery. (middle-right, weak)
- gemini-3.1-pro-preview: The hard hats, particularly the white one, have misshapen, melted-looking ear defenders that do not attach logically to the helmet. (bottom-right, strong)

**buildings**: score 4, raised in 2/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is mostly coherent but repetitive, with somewhat smeared cross-bracing in the distance. (top-center, weak)
- gemini-3.1-pro-preview: The structural steelwork in the roof trusses contains diagonal struts that intersect illogically, float, or fade away without connecting to structural joints. (top-center, strong)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, bottom-right

- gpt-6-sol: Distant equipment and objects inside the shed are indistinct. (top-center, weak)
- gemini-3.1-pro-preview: Behind the worker on the right, resting on the ground, is an unrecognizable object with bizarre, somewhat face-like textural folds, rather than looking like a distinct piece of equipment or a bag. (bottom-right, moderate)

## y-two-R-2.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**track_geometry**: score 14, raised in 3/9 calls, at bottom-right, center, middle-right

- gemini-3.1-pro-preview: The rails the workers are kneeling on simply vanish into the concrete just behind them instead of continuing smoothly into the depot. (bottom-right, strong)
- gemini-3.1-pro-preview: The edges of the inspection pits inside the depot are wobbly and not properly parallel to each other. (center, moderate)
- gemini-3.1-pro-preview: Following the inner rail of the right-hand track forward from where the yellow-jacketed worker is kneeling, the steel rail appears to dissolve and fade directly into the flat concrete surface instead of continuing into the depot bay. (middle-right, strong)
- gemini-3.1-pro-preview: There are inspection pits visible inside the central bays of the shed, but no rails leading to them across the concrete apron in the foreground. (center, strong)

**buildings**: score 9, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The metal truss structure supporting the roof has numerous intersecting lines that do not connect at logical joints, with some diagonal struts ending in mid-air. (top-center, strong)
- gemini-3.1-pro-preview: The structural cross-bracing in the roof's skylights is chaotic; several diagonal metal struts blend into one another, pass through intersecting beams, or terminate without logical connection points. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal framing within the transom windows above the shed entrance is messy and inconsistent, with lines frequently merging or terminating in mid-air. (top-center, strong)

**people_anatomy**: score 5, raised in 3/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and the object between them are partly obscured and difficult to distinguish. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish, though their overlap could explain it. (bottom-right, weak)
- gemini-3.1-pro-preview: The workers' legs are completely mangled; they appear to melt into the ground and the rails, with missing feet and hands. (bottom-right, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at bottom-right

- gpt-6-sol: The items around the workers' hands and knees are difficult to make out. (bottom-right, weak)
- gemini-3.1-pro-preview: The objects lying on the ground next to the workers look like formless, muddy blobs rather than distinct tools, bags, or equipment. (bottom-right, moderate)
- gemini-3.1-pro-preview: The objects or bags lying on the ground next to the workers are amorphous, lacking recognizable structural details typical of real tools or equipment. (bottom-right, moderate)

**lighting_or_shadows**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Despite the strong directional sunlight causing the pole on the left and the workers to cast long, distinct dark shadows to the right, the tall central pole casts no such shadow on the ground. (center, strong)

## y-two-R-3.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.98

**track_geometry**: score 8, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The two rails forming the track on the left diverge significantly as they approach the bottom edge, failing to maintain a parallel distance (constant gauge). (bottom-left, strong)
- gemini-3.1-pro-preview: The rail under the yellow worker appears to branch or split into disconnected, non-parallel lines just below his knee, and the overall track gauge is inconsistent as it curves towards the building. (bottom-right, strong)
- gemini-3.1-pro-preview: The definition of the rail head becomes muddled and warped specifically where the workers' hands and tools interact with it, losing its solid metallic structure. (bottom-right, moderate)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and tools are hard to distinguish where they meet the rail. (bottom-right, weak)
- gemini-3.1-pro-preview: The dark bag resting on the ground to the left of the kneeling workers lacks clear definition and appears slightly amorphous, which can sometimes be an artifact of AI generation, though it could also just be a soft, worn canvas bag. (bottom-right, weak)
- gemini-3.1-pro-preview: The tool bag sitting on the ground next to the orange worker is an indistinct, merged blob lacking functional details like clear straps, openings, or proper fabric folds. (bottom-right, moderate)
- gemini-3.1-pro-preview: The object resting on the ground to the right of the workers (possibly a bag or helmet) is a nonsensical, distorted shape that lacks the defined features of a real object. (bottom-right, strong)

**buildings**: score 6, raised in 3/9 calls, at top-center

- gpt-6-sol: The repeating roof trusses look unusually regular at a glance, though their perspective remains coherent. (top-center, weak)
- gemini-3.1-pro-preview: The steel roof trusses above the central opening contain erratic, zig-zagging lines that do not form proper structural triangles, with some diagonal members ending mid-air without connecting to joints. (top-center, strong)
- gemini-3.1-pro-preview: The complex metal truss structure supporting the roof has multiple beams that intersect at illogical angles or simply disappear without connecting to a main support. (top-center, moderate)

**people_anatomy**: score 5, raised in 3/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and the tools between them are difficult to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish precisely. (bottom-right, weak)
- gemini-3.1-pro-preview: The hands of the worker on the right are highly deformed, appearing as blurry, misshapen blobs that merge unnaturally with the track and the tool he is holding. (bottom-right, strong)

**background_clutter**: score 3, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: Small objects along the distant depot wall are indistinct. (middle-right, weak)
- gemini-3.1-pro-preview: Objects inside the maintenance shed, such as the small cart or structure over the central pit, are rendered as amorphous, blurry patches rather than distinct, structural items. (center, moderate)
