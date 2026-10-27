# Realism check: final-people-w

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 117 | 8/8 |
| people_anatomy | 94 | 8/8 |
| overhead_wires_or_poles | 39 | 8/8 |
| tools_or_small_objects | 31 | 7/8 |
| background_clutter | 28 | 8/8 |
| people_pose_or_placement | 25 | 4/8 |
| switch_mechanism | 15 | 5/8 |
| texture_noise_or_sharpness | 13 | 6/8 |
| buildings | 7 | 3/8 |
| people_clothing_or_gear | 6 | 3/8 |
| composition_or_staging | 2 | 1/8 |
| text_signage_or_markings | 1 | 1/8 |

## w-group-L-10.jpg: mean P(AI) 0.49 (fails)

- anthropic/claude-opus-5.5: 0.62 / 0.60 / 0.10
- openai/gpt-6-sol: 0.03 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 19, raised in 5/9 calls, at center, bottom-center, middle-right, bottom-right, middle-left

- claude-opus-5.5: The two branches diverge plausibly, but the left track's rails converge oddly near the bottom-center where the inner rails of both branches nearly meet without a proper frog or switch structure; the sleepers look uniform and clean. (center, moderate)
- claude-opus-5.5: The two tracks diverge oddly: the left track's right rail and the right track's left rail come within inches of each other near the bottom with no switch frog or proper turnout. The left track's sleepers also appear to merge into concrete pavement. (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks intersect and merge into a solid V-shape without a proper switch frog or flangeways, which is physically impossible for a functional railway. (bottom-center, strong)
- gemini-3.1-pro-preview: The distance between the two rails on the right track varies wildly, with the track gauge appearing much wider near the worker than it is in the foreground. (middle-right, strong)

**people_anatomy**: score 17, raised in 5/9 calls, at middle-left, middle-right, center

- claude-opus-5.5: The three workers on the left are clustered tightly, with blended limbs and hands around the rail; the faces and hands lack detail. (middle-left, moderate)
- gpt-6-sol: The workers’ hands and equipment overlap in a small, hard-to-resolve area, making their exact positions difficult to verify. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right track has a malformed left foot that resembles a large, indistinct blob seamlessly blending into the rail structure. (middle-right, strong)
- gemini-3.1-pro-preview: The rightmost worker in the group of three on the left track is a misshapen mass of yellow high-visibility clothing without clearly defined limbs or a discernible head. (center, strong)

**overhead_wires_or_poles**: score 8, raised in 4/9 calls, at top-left, top-right, top-center

- claude-opus-5.5: The overhead wires and poles look plausible but sparse; the wire attachments are vague. (top-left, weak)
- gemini-3.1-pro-preview: Overhead wires intersect at random angles in the sky and do not appear to have logical tension or proper connection points to the supporting poles. (top-right, moderate)
- gemini-3.1-pro-preview: Overhead wire lines appear as faint, disconnected strands in the sky that abruptly end or fade out without connecting to any supporting structures. (top-center, moderate)
- gemini-3.1-pro-preview: Overhead wires span horizontally without proper attachment points and terminate abruptly in mid-air. (top-center, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-left, center, middle-right

- gpt-6-sol: The workers’ hands and equipment at the rail are difficult to distinguish clearly. (middle-left, weak)
- gemini-3.1-pro-preview: The tools and materials being handled by the workers on the left track are rendered as formless, dark smudges lacking any recognizable mechanical features. (center, moderate)
- gemini-3.1-pro-preview: The pile of pipes or cylinders in the background consists of irregular, melted, and warped shapes with inconsistent holes, rather than uniform industrial concrete or metal pipes. (center, strong)
- gemini-3.1-pro-preview: The objects piled next to the worker on the right track form an unrecognizable, textured blob rather than distinct tools or materials. (middle-right, moderate)

**buildings**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The structures and equipment visible inside the open bay of the building are a chaotic, blurry jumble that do not form coherent industrial machinery. (middle-left, moderate)
- gemini-3.1-pro-preview: The portable toilet next to the building has a warped and skewed white roof. (center, moderate)

## w-group-L-11.jpg: mean P(AI) 0.31 (passes)

- openai/gpt-6-sol: 0.04 / 0.05 / 0.08
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.35 / 0.99

**people_anatomy**: score 11, raised in 4/9 calls, at center, middle-right, bottom-left, middle-left

- gpt-6-sol: The workers' overlapping hands and tools at the switch are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The crouching worker's legs are partly obscured and difficult to distinguish from the dark track area. (middle-right, weak)
- gemini-3.1-pro-preview: The hands and feet of the workers, particularly the worker sitting in orange, are indistinct blobs rather than clearly defined boots or gloves. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker in the orange jacket has malformed legs that appear to melt into the steel rail and the surrounding ground. (middle-left, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center, middle-left

- gemini-3.1-pro-preview: The track junction is completely missing the switch points, frog, and mechanical components; the rails just smoothly melt into one another. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails of the track leading towards the left bay of the building fade away into the ground and disappear completely before reaching the structure. (middle-left, strong)

**overhead_wires_or_poles**: score 6, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: The thin overhead wires vanish into the sky abruptly or float without being physically attached to the supporting poles. (top-left, strong)
- gemini-3.1-pro-preview: An overhead wire visible against the sky abruptly terminates in mid-air above the building without connecting to any supporting structure. (top-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects or pipes in the background behind the tracks are melted and fused together. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (pipes) behind the fence lacks clear definition and edges, appearing as a smudged, repetitive texture rather than distinct objects. (center, moderate)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at center, middle-right

- gpt-6-sol: The workers’ hands and small items at the junction are hard to distinguish, leaving some fine detail ambiguous. (center, weak)
- gemini-3.1-pro-preview: The dark object resting on the track near the solo worker on the right is an unidentifiable, formless shape that blends into the rail. (middle-right, moderate)

## w-group-L-12.jpg: mean P(AI) 0.57 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.75 / 0.72 / 0.62
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 24, raised in 6/9 calls, at bottom-center, bottom-left, center, bottom-right

- claude-opus-5.5: The tracks diverge without any switch or frog. The left track's right rail and the right track's left rail come from nowhere and converge into an implausible junction. (bottom-center, moderate)
- claude-opus-5.5: The rails of the left track bend and curve unevenly. The sleepers have an odd spacing relative to the rail curvature. (bottom-left, moderate)
- claude-opus-5.5: Left track's right rail and right track's left rail converge toward the bottom center in an implausible way, with no switch or frog structure, so the two tracks seem to merge incorrectly. (bottom-center, moderate)
- claude-opus-5.5: The left track's left rail curves sharply near the worker in orange, and the sleeper spacing is inconsistent with the rail curvature. (bottom-left, moderate)

**people_anatomy**: score 11, raised in 4/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The left-track workers’ hands and faces are indistinct, making some small anatomical details hard to verify. (center, weak)
- gemini-3.1-pro-preview: The worker kneeling on the right track has poorly defined hands and feet that blend indistinctly into dark blobs and the track itself. (middle-right, moderate)
- gemini-3.1-pro-preview: The hands and lower arms of the two workers in yellow on the left track are indistinct blobs that melt directly into the steel rails, with no defined tools or realistic interaction. (center, strong)
- gemini-3.1-pro-preview: The legs of the worker squatting on the right track are highly distorted and appear to blend seamlessly into the rail and the shadow beneath it. (middle-right, strong)

**people_pose_or_placement**: score 8, raised in 5/9 calls, at center, middle-left, middle-right

- claude-opus-5.5: The workers kneel in a neat staged row, all with near-identical hi-vis vests and helmets. There is no visible tooling engaging the rail. (center, weak)
- claude-opus-5.5: Workers kneel directly on or straddle the rails with vague hand-to-tool contact, and no tools are clearly identifiable. (center, weak)
- claude-opus-5.5: Three workers kneel close together on the left track in staged arrangement, plausible but posed (middle-left, weak)
- gemini-3.1-pro-preview: The legs and boots of the kneeling workers on the left track are poorly defined and seem to meld into the gravel ballast. (middle-left, moderate)

**background_clutter**: score 6, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects behind the wire fence appears as an amorphous, fused mass of tubes rather than distinct, separate pipes. (center, moderate)
- gemini-3.1-pro-preview: The chain-link fence visible in the background between the building and the tracks has an irregular, blurry, and melting mesh pattern rather than a consistent wire grid. (center, moderate)
- gemini-3.1-pro-preview: The pile of objects behind the wire fence is an indistinct jumble of cylindrical shapes that lack coherent definition or purpose. (center, moderate)

**overhead_wires_or_poles**: score 5, raised in 4/9 calls, at top-left, top-center

- claude-opus-5.5: The catenary poles and wires are sparse. The wires don't connect coherently over the tracks. (top-left, weak)
- claude-opus-5.5: The overhead catenary wires are sparse and attach oddly to the poles, with no clear registration arms. (top-left, weak)
- claude-opus-5.5: Overhead wires and poles look coherent but wire connections are sparse and somewhat ambiguous (top-left, weak)
- gemini-3.1-pro-preview: The overhead wires are very faint, broken in places, and do not logically connect to the vertical poles or the building structure. (top-center, moderate)

## w-group-L-13.jpg: mean P(AI) 0.36 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.30 / 0.25
- openai/gpt-6-sol: 0.03 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.45 / 0.99

**track_geometry**: score 13, raised in 5/9 calls, at bottom-center, center

- claude-opus-5.5: The two branch tracks diverge without a coherent switch or frog. The inner rails of each branch run parallel but never connect, so the layout looks like two separate tracks rather than a real turnout. (bottom-center, moderate)
- claude-opus-5.5: The left track's rails curve and converge oddly near the workers. The sleepers appear evenly spaced but their fastenings look repetitive and simplified. (center, weak)
- claude-opus-5.5: Two tracks diverge from a common origin into separate branches but the junction lacks a coherent switch/frog; the left branch's left rail and right branch rails merge oddly, like a staged Y with no frog geometry (center, moderate)
- gemini-3.1-pro-preview: The rails from the two diverging tracks meet in a V-shape but do not connect to a single main line; they simply end or merge into the gravel without any switch points or functional mechanism. (bottom-center, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The worker wearing the orange vest on the left track appears to have legs that are indistinct or merging impossibly with the track and surrounding ground. (middle-left, moderate)
- gemini-3.1-pro-preview: The workers on the left track have slightly blended forms. (center, moderate)
- gemini-3.1-pro-preview: The three workers sitting on the track have melded bodies and limbs; the person in orange lacks distinct legs, and the leftmost person's arm blends unnaturally into the middle person. (middle-left, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-right, top-left

- gemini-3.1-pro-preview: An overhead wire extending from the pole on the right side simply vanishes into the sky instead of continuing to another connection point. (top-right, moderate)
- gemini-3.1-pro-preview: The horizontal overhead wire intersects with the vertical pole in a messy, blurred blob rather than a distinct, physical mounting or tensioning fixture. (top-left, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects lying on the ground behind the workers between the tracks is a blurry, merged mass rather than distinct individual items. (center, moderate)
- gemini-3.1-pro-preview: The stack of cylindrical objects (like concrete pipes) lying in front of the fence is rendered as a continuous, lumpy mass without distinct edges separating the individual items. (center, moderate)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and small objects between them are difficult to distinguish and visually run together. (center, weak)
- gpt-6-sol: The workers’ hands and the objects they are handling are indistinct, making their exact interaction hard to verify. (center, weak)
- gpt-6-sol: The workers’ hands and equipment at rail level are hard to distinguish, leaving some shapes ambiguous. (middle-left, weak)

## w-group-L-14.jpg: mean P(AI) 0.51 (fails)

- openai/gpt-6-sol: 0.06 / 0.04 / 0.05
- anthropic/claude-opus-5.5: 0.68 / 0.65 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 1.00

**track_geometry**: score 24, raised in 5/9 calls, at bottom-center, center, bottom-right

- claude-opus-5.5: Left track's rails converge oddly: inner left rail and right rail of left track seem to merge toward the bottom center, and the two branches' geometry near the bottom doesn't form a coherent turnout; the right rail of the left track and left rail of the right track nearly touch at bottom. (bottom-center, moderate)
- claude-opus-5.5: The two tracks diverge from the bottom with no visible switch or frog. The left track's right rail runs strangely close to the right track's left rail, and the sleeper geometry near the convergence is inconsistent (center, moderate)
- gemini-3.1-pro-preview: Where the two sets of tracks diverge, the rails simply melt into one another instead of forming a mechanical switch or frog. The steel profiles disappear into a flat grey surface. (bottom-center, strong)
- gemini-3.1-pro-preview: The wooden sleepers (ties) between the diverging tracks are drawn haphazardly, overlapping and intersecting at physically impossible angles. (bottom-center, strong)

**people_anatomy**: score 18, raised in 6/9 calls, at center, middle-left, bottom-left, middle-right

- gpt-6-sol: The crouching workers’ hands and tools are difficult to distinguish where their bodies overlap; this could conceal a generated detail. (center, weak)
- gpt-6-sol: The workers’ hands and tools are hard to distinguish where they overlap, though distance and occlusion could explain this. (middle-left, weak)
- claude-opus-5.5: Cluster of three workers on left track have merged limbs and indistinct hands; the kneeling figure's arms and tools blend into the rail. (center, moderate)
- gemini-3.1-pro-preview: The group of three workers is heavily distorted; their bodies, arms, and legs meld together into indistinguishable blobs, and they are missing recognizable hands and feet. (bottom-left, strong)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-right, top-left, top-center

- claude-opus-5.5: Overhead wires and cantilever arms are somewhat sparse and inconsistent; arms attach vaguely to poles. (top-right, weak)
- claude-opus-5.5: The poles and catenary arms look plausible, but the wires are sparse and some poles stand in odd positions relative to the tracks (top-left, weak)
- gemini-3.1-pro-preview: The thin overhead wires branch at random angles and abruptly terminate in mid-air without connecting to any supporting poles or structures. (top-center, strong)

**people_pose_or_placement**: score 5, raised in 2/9 calls, at bottom-left, middle-right

- claude-opus-5.5: Three workers crouch together on the left track; their bodies overlap oddly, with limbs and torsos merging and hard to separate into distinct individuals (bottom-left, moderate)
- gemini-3.1-pro-preview: The lone worker on the right track has an undefined lower body that appears to melt directly into the steel rail they are sitting on. (middle-right, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, whole-image

- gpt-6-sol: The workers’ hands and the equipment between them are indistinct, making those details hard to verify. (center, weak)
- claude-opus-5.5: Soft, slightly smeared texture on ballast and sleepers, with uniform video-like grading. (whole-image, weak)

## w-group-L-7.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.03 / 0.07 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 14, raised in 4/9 calls, at bottom-center, middle-right, center, middle-left

- gpt-6-sol: The overlapping hands, legs, and equipment around the left-track workers are difficult to distinguish clearly. (bottom-center, weak)
- gemini-3.1-pro-preview: The worker kneeling on the right track appears to have no lower legs or feet; their body abruptly ends at the knees, merging unnaturally into the track structure. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the worker wearing the orange shirt are an indistinct, fleshy blur that merges seamlessly into the metal rail they are supposed to be working on. (center, strong)
- gemini-3.1-pro-preview: The worker in the orange shirt has a severely distorted head and helmet that appear to melt directly into his shoulder without a distinct neck or face. (middle-left, strong)

**track_geometry**: score 11, raised in 3/9 calls, at bottom-right, bottom-center

- gemini-3.1-pro-preview: The sleepers (cross ties) on the right-hand track are unevenly spaced and irregularly shaped, with some appearing to melt into the surrounding ballast. (bottom-right, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge into a continuous, sharp 'V' shape, lacking any switch blades, frog, or mechanical components necessary for a real railway junction. (bottom-center, strong)
- gemini-3.1-pro-preview: The sleepers (ties) on the right track, particularly around the worker, are irregularly shaped and appear as flat, slanted stripes painted on the ground rather than 3D rectangular blocks supporting the rails. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner rails of the two branching tracks converge into a 'V' shape and simply terminate. There is no frog, no switch blades, and no single track continuing towards the bottom of the frame, making it physically impossible for a train to navigate this junction. (bottom-center, strong)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and the equipment at the left-hand rail are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The workers’ hands and equipment overlap in a small, hard-to-resolve area; some shapes look indistinct. (center, weak)
- gemini-3.1-pro-preview: The pile of cylindrical pipes or rolls in the background consists of mismatched shapes that blob together and merge into one another illogically. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (likely pipes) in the background is fused together into a single mass, lacking distinct individual shapes or clear openings at the ends. (center, strong)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The chain-link fence behind the pile of pipes is rendered as a messy, chaotic, web-like texture rather than a regular intersecting wire mesh. (middle-left, moderate)
- gemini-3.1-pro-preview: Behind the chain-link fence, there is a pile of cylindrical objects (likely intended to be pipes or logs) that are bizarrely fused and melted together into an unnatural, continuous mass. (center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The point where the inner rails of the diverging tracks meet is a messy, blurred amalgamation of metal and gravel, lacking any discernible or logical switching mechanism. (bottom-center, strong)

## w-group-L-8.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- openai/gpt-6-sol: 0.06 / 0.08 / 0.07
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 11, raised in 2/9 calls, at bottom-center, middle-left

- gemini-3.1-pro-preview: The point where the tracks split lacks a functional switch mechanism; the inner rails merge illogically and the wooden sleepers are jumbled and overlapping in chaotic directions. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails of the left track and the right track merge into a single rail structure in the foreground, forming an illogical 'Y' intersection where trains from both tracks would collide or derail. (bottom-center, strong)
- gemini-3.1-pro-preview: The wooden sleepers underneath the converging rails are chaotic, overlapping, and inconsistently spaced at the junction point. (bottom-center, strong)
- gemini-3.1-pro-preview: The left track seems to bend unnaturally sharply towards the building entrance in the background, without a proper curve radius. (middle-left, moderate)

**people_pose_or_placement**: score 9, raised in 2/9 calls, at bottom-left, middle-right

- gemini-3.1-pro-preview: The three workers on the left track are crouched together in a way that looks staged or physically implausible relative to the rails they are supposedly working on. (bottom-left, moderate)
- gemini-3.1-pro-preview: The worker on the right track appears to be merging into the rail or has an awkward kneeling pose that doesn't align correctly with the track. (middle-right, moderate)
- gemini-3.1-pro-preview: The middle worker in the orange high-visibility shirt on the left track has a distorted lower body, with legs that appear to melt into the trackbed and rails. (bottom-left, strong)
- gemini-3.1-pro-preview: The lone worker on the right track lacks distinct lower legs or feet, seemingly merging directly into the rail they are kneeling on. (middle-right, moderate)

**people_anatomy**: score 8, raised in 3/9 calls, at middle-left, center, bottom-left, middle-right

- gpt-6-sol: The crouched workers' overlapping hands and legs are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The crouching workers’ hands and legs overlap and are difficult to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The rightmost worker in the group of three appears to lack legs, with their lower body blending completely into the ground and rails. (bottom-left, strong)
- gemini-3.1-pro-preview: The single worker on the right track has no discernible lower half, appearing as just a torso and arms resting directly on the track. (middle-right, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead catenary wires are broken, disappearing into the sky rather than connecting in a continuous, logical network. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are thin, faint, and do not connect logically to the support structures or follow the path of the tracks below. (top-center, strong)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at bottom-center, whole-image, center

- gpt-6-sol: The workers' hands and nearby hardware are too soft to distinguish clearly, leaving some details uncertain. (bottom-center, weak)
- gpt-6-sol: Fine details look somewhat soft, limiting confidence in small features. (whole-image, weak)
- gemini-3.1-pro-preview: The gravel and dirt texture between the tracks is uniform and lacks the natural variation expected in an industrial yard. (center, weak)

## w-group-L-9.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- openai/gpt-6-sol: 0.06 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, middle-left, center

- gemini-3.1-pro-preview: The inner rails of the left and right tracks merge into a solid V-shape without functional switch points, a frog, or continuous intersecting rails. (bottom-center, strong)
- gemini-3.1-pro-preview: The track on the left bends sharply left and fades into the concrete apron, failing to align with or enter the open building bay. (middle-left, strong)
- gemini-3.1-pro-preview: The rails on the left track fade into the ground and do not logically continue into the building's bays. (center, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at center, bottom-left, middle-left

- gpt-6-sol: The overlapping workers make some hands and legs difficult to distinguish at this resolution. (center, weak)
- gemini-3.1-pro-preview: The hands and lower arms of the worker on the right side of the left group are indistinct and appear to blend directly into the rail. (bottom-left, moderate)
- gemini-3.1-pro-preview: The limbs of the three workers blend indistinctly into the rails and ballast, with missing or malformed hands and feet. (middle-left, strong)
- gemini-3.1-pro-preview: The lower halves of the workers on the left track merge indistinctly into the dark shadows and ballast, lacking clear anatomical definition of legs or feet. (middle-left, moderate)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at center

- gpt-6-sol: The workers’ hands and the small objects beside the rails are indistinct, making their exact interactions hard to verify. (center, weak)
- gpt-6-sol: The workers’ hands and the objects immediately around them are difficult to distinguish. (center, weak)
- gemini-3.1-pro-preview: The stack of cylindrical objects or pipes lying on the ground behind the fence are fused together into a single amorphous mass without clear individual boundaries. (center, strong)

**background_clutter**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects or pipes behind the chain-link fence has distorted shapes that irregularly melt into one another. (center, moderate)
- gemini-3.1-pro-preview: The pile of pipes near the fence consists of squashed, malformed cylindrical shapes that melt into each other. (center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: The horizontal wire attached to the leftmost pole fades into the sky and does not connect coherently to another pole or structure. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires are wavering, inconsistent in thickness, and appear to disconnect or end abruptly in the sky. (top-left, moderate)
