# Realism check: final-people-uw

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 363 | 28/30 |
| people_anatomy | 214 | 26/30 |
| tools_or_small_objects | 123 | 29/30 |
| overhead_wires_or_poles | 113 | 26/30 |
| background_clutter | 91 | 26/30 |
| switch_mechanism | 68 | 18/30 |
| texture_noise_or_sharpness | 60 | 23/30 |
| people_pose_or_placement | 60 | 16/30 |
| composition_or_staging | 27 | 10/30 |
| buildings | 21 | 10/30 |
| people_clothing_or_gear | 17 | 8/30 |
| camera_or_windscreen | 12 | 11/30 |
| text_signage_or_markings | 4 | 3/30 |

## u-group-L-1.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.06 / 0.05 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.62 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 24, raised in 6/9 calls, at center, bottom-left, bottom-center, middle-left, bottom-right

- claude-opus-5.5: The two branches diverge with no visible switch blades, frog, or connecting rails; the left track simply curves away and the right track appears separately, as though two unconnected track pairs meet at a smooth paved area. (center, moderate)
- claude-opus-5.5: The left track's rails curve inconsistently; the left rail bends toward the far-left arch while the inner rail heads elsewhere, and the gauge appears to vary. (bottom-left, moderate)
- claude-opus-5.5: The left track's rails run in a direct line out of the bottom of the frame. The right track appears separately, with no frog or switch connecting the two branches; it looks like two parallel tracks diverging without a junction. (bottom-center, moderate)
- claude-opus-5.5: The left track curves toward the left arch while its inner rail also continues. Where the rails join near the top-left, the geometry is ambiguous and the rail gauge looks inconsistent. (middle-left, moderate)

**people_anatomy**: score 10, raised in 4/9 calls, at middle-right, bottom-left

- gpt-6-sol: The right-hand worker's hands and the object by the rail are difficult to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the solitary worker on the right track are indistinct and appear to meld smoothly into the brown, amorphous object he is working on. (middle-right, moderate)
- gemini-3.1-pro-preview: The hands of the worker kneeling on the right track are completely merged into the tool or basket he is holding, appearing as a blurred, indistinct mass. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket closest to the camera on the left track lack defined fingers and appear to melt into the object he is working on. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 6, raised in 5/9 calls, at center, whole-image, bottom-center

- gpt-6-sol: The workers' hands and small tools are soft and difficult to distinguish, which could resemble AI-generated detail, though distance and image softness also explain it. (center, weak)
- gpt-6-sol: Fine detail is somewhat soft, particularly on the distant building and workers' equipment. (whole-image, weak)
- claude-opus-5.5: The cobblestone pattern between the rails is somewhat smeary and irregular, merging into the asphalt without clear edges. (bottom-center, weak)
- gemini-3.1-pro-preview: The distinct cobblestone pattern between the rails on both branches abruptly and unnaturally dissolves into a smooth, featureless grey texture at the junction. (center, moderate)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at middle-right, center, bottom-left

- gpt-6-sol: The right-hand worker's hands and equipment are difficult to distinguish clearly; this is a weak possible AI cue, though distance and image softness could explain it. (middle-right, weak)
- claude-opus-5.5: The bags and toolboxes are vague, without identifiable tools, and the workers' hands touch nothing specific on the rails. (center, moderate)
- gemini-3.1-pro-preview: The black bag sitting next to the worker in the yellow jacket appears as a solid, featureless black block with melted-looking handles, lacking realistic fabric or structural details. (bottom-left, moderate)

**composition_or_staging**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The scene looks cinematic and staged: four workers in perfectly clean hi-vis gear are kneeling between the rails with toolboxes, in the soft glow of golden hour. (whole-image, weak)
- claude-opus-5.5: The scene is cinematic and stock-like: four workers crouch symmetrically on two branch tracks under soft, low-sun lighting. (whole-image, weak)
- claude-opus-5.5: A cinematic, stock-like trolley-problem staging: four workers on one branch and one on the other, all kneeling, framed symmetrically from an elevated tram-cab viewpoint. (whole-image, moderate)

## u-group-L-2.jpg: mean P(AI) 0.45 (fails)

- anthropic/claude-opus-5.5: 0.75 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.05 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**people_anatomy**: score 12, raised in 4/9 calls, at center, middle-right, bottom-left

- gpt-6-sol: The foreground workers’ hands overlap the rail and are hard to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The worker kneeling on the right track has a malformed right hand that looks like a blob, and his left arm is either missing or fused unnaturally into his knee. (middle-right, strong)
- gemini-3.1-pro-preview: The worker in the yellow high-vis jacket has physically impossible leg anatomy, appearing to kneel on a stump or weirdly folded limb. (center, strong)
- gemini-3.1-pro-preview: The worker on the right track has a nonsensical pose where their lower body seems to vanish into a blob, and their arm blends into the rail/ground. (middle-right, strong)

**track_geometry**: score 8, raised in 3/9 calls, at bottom-left, bottom-center

- claude-opus-5.5: Left track rails converge oddly toward the depot; the rail spacing and curvature look inconsistent near the workers, with the left rail bending in an unnatural way. (bottom-left, moderate)
- gemini-3.1-pro-preview: The rails underneath the group of three workers do not form a logical track pair or switch; there appear to be multiple rails running too closely together without a consistent gauge. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks do not connect to a proper switch mechanism; instead, they end abruptly or disappear nonsensically into the ground near the workers. (bottom-center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-left, bottom-center, center

- gpt-6-sol: The workers’ hands and small objects at the rail joint are difficult to distinguish clearly. (bottom-left, weak)
- gpt-6-sol: The workers' hands and the small equipment at the left-hand rail are somewhat hard to distinguish. (bottom-center, weak)
- gemini-3.1-pro-preview: Despite being posed as if performing manual labor on the tracks, the workers' hands are empty or melded into the rails without any recognizable tools. (bottom-left, strong)
- gemini-3.1-pro-preview: Despite being in active 'working' poses, none of the workers are holding clearly defined tools; their hands are just vaguely shaped near the tracks. (center, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image, bottom-center

- claude-opus-5.5: The cobblestone setts and the asphalt look smooth and somewhat painterly, and the brick pattern is uniform and lacks fine variation. (whole-image, weak)
- gemini-3.1-pro-preview: The cobblestone texture between the tracks looks overly uniform and slightly smeared or 'painted' rather than composed of distinct stones. (bottom-center, weak)
- gemini-3.1-pro-preview: The cobblestone pattern between the two sets of tracks in the foreground becomes chaotic and loses its structured rows, warping unnaturally. (bottom-center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Three workers kneel on the left track in a staged, evenly spaced arrangement, with one lone worker on the right track, resembling a generated trolley-problem style composition. (center, moderate)
- gemini-3.1-pro-preview: The worker in the orange high-vis jacket on the left track has hands that lack definition and appear to melt into the rail and his own clothing. (center, moderate)

## u-group-L-3.jpg: mean P(AI) 0.23 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.72
- google/gemini-3.1-pro-preview: 0.98 / 0.05 / 0.02

**track_geometry**: score 8, raised in 2/9 calls, at bottom-center, center, bottom-left

- claude-opus-5.5: Left track's rails converge oddly: the right rail of the left track bends in a way inconsistent with parallel gauge near the workers, and tracks join without a plausible switch/frog; geometry looks drawn rather than engineered. (bottom-center, moderate)
- gemini-3.1-pro-preview: The railway tracks do not logically connect or intersect where they meet. There is no switch mechanism or frog, and the rails simply fade out or disappear into the cobblestones. (center, strong)
- gemini-3.1-pro-preview: The rails underneath the left group of workers are malformed and discontinuous, with the lines of the track disappearing and reappearing illogically. (bottom-left, strong)

**tools_or_small_objects**: score 5, raised in 4/9 calls, at bottom-center, center, bottom-left

- gpt-6-sol: The workers' hands and small equipment at the rail junction are difficult to distinguish and look somewhat muddled. (bottom-center, weak)
- gpt-6-sol: Hands and small equipment at the left-hand work point are difficult to distinguish and appear somewhat merged together. (bottom-center, weak)
- claude-opus-5.5: Objects on the ground between workers are an unreadable mush, not identifiable tools. (center, weak)
- gemini-3.1-pro-preview: The workers on the left are handling indistinct, amorphous masses rather than identifiable tools, track parts, or equipment. (bottom-left, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at center, middle-right

- claude-opus-5.5: Cluster of four workers on the left track have merged limbs and indistinct hands; the kneeling figures blend into each other and into a tangled heap of objects. (center, moderate)
- gemini-3.1-pro-preview: The worker kneeling on the right track has legs that appear anatomically impossible, with the lower half of his body seemingly melting into the ground. (middle-right, strong)

**composition_or_staging**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Scene resembles a staged scenario with workers on one branch and a single worker on the other, typical of trolley-problem style generations. (whole-image, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The distant building and workers' hands are hazy and hard to resolve, which could conceal generated details but is also consistent with a low-contrast photograph. (whole-image, weak)

## u-group-L-4.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- openai/gpt-6-sol: 0.03 / 0.06 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**people_anatomy**: score 15, raised in 6/9 calls, at bottom-left, middle-right

- gpt-6-sol: Hands and equipment where the three workers overlap are difficult to distinguish, which could suggest a generated detail but is also explained by occlusion and low light. (bottom-left, weak)
- gpt-6-sol: The kneeling worker's hands and the object near the rail are difficult to distinguish. (middle-right, weak)
- gpt-6-sol: The workers' hands and the object they are handling are hard to distinguish where their bodies overlap. (bottom-left, weak)
- gemini-3.1-pro-preview: The limbs of the three workers on the left track merge into one another and the ground; the closest worker's arm and leg are fused into a single indistinct shape. (bottom-left, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: The left rail of the right-hand track is completely missing in the foreground, with the cobblestones ending abruptly against plain asphalt, but the rail suddenly appears further up near the worker. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner rail of the left track appears to abruptly end or melt into the ground underneath the worker in the orange vest. (bottom-left, strong)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image, center, bottom-center

- gpt-6-sol: Fine detail is somewhat soft and hazy, especially in the darker arches; this could reflect the photograph's conditions rather than generation. (whole-image, weak)
- gemini-3.1-pro-preview: The stack of long materials (likely rails or lumber) in the middle distance has a smeared, painterly texture where the individual pieces lack sharp edges or separation. (center, moderate)
- gemini-3.1-pro-preview: The cobblestone texture on the ground, especially between the two branching tracks, looks warped and flows like a liquid rather than appearing as individually laid stones. (bottom-center, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The tall metal pole in the middle ground simply disappears into the asphalt without any base plate, flange, or mounting hardware. (middle-left, moderate)
- gemini-3.1-pro-preview: There are several tall, grey vertical poles standing around the yard, but they lack distinct bases connecting them to the ground and have no wires attached to them. (center, moderate)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: Beneath the worker on the right track, there is an undefined, greenish-brown textured mass that blends into their legs, failing to resemble recognizable boots or tools. (middle-right, strong)

## u-group-L-5.jpg: mean P(AI) 0.63 (fails)

- openai/gpt-6-sol: 0.06 / 0.06 / 0.04
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**tools_or_small_objects**: score 17, raised in 9/9 calls, at bottom-center, center, bottom-left, middle-right

- gpt-6-sol: The workers’ hands and small items where they meet the rail are difficult to distinguish precisely. (bottom-center, weak)
- gpt-6-sol: Hands and small objects where the three workers meet the rail are hard to distinguish clearly. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and small items beside the left rail are difficult to resolve and look somewhat muddled. (center, weak)
- claude-opus-5.5: The tools held by the workers are vague bars and blobs. The bags on the ground are amorphous, and no clear wrenches or spanners are visible. (center, moderate)

**track_geometry**: score 16, raised in 6/9 calls, at center, middle-right, bottom-center, bottom-left, middle-left

- claude-opus-5.5: The two track pairs curve apart from the depot but do not form a real turnout. There is no frog, no switch blades, and the left track's rails lack consistent gauge and connection to the right pair. (center, moderate)
- claude-opus-5.5: Left track's rails diverge oddly; the right rail of the left track curves away and seems to merge into open asphalt without a proper switch or connection to the right track, inconsistent trackwork (center, moderate)
- claude-opus-5.5: Left track pair has inconsistent gauge; rails converge and diverge oddly, and the left track's right rail and the right track's left rail don't form a coherent junction—the tracks just split with no switch (center, moderate)
- gemini-3.1-pro-preview: As the rails on the right track curve away, they lose their 3D profile and appear to be painted flat onto the cobblestone surface. (middle-right, moderate)

**people_anatomy**: score 16, raised in 5/9 calls, at center, bottom-left, middle-right, bottom-center

- claude-opus-5.5: Hands of kneeling workers are mushy and indistinct; man in orange vest's arms disappear ambiguously (center, moderate)
- claude-opus-5.5: Kneeling workers have mushy hands and feet that blend into the cobbles; the right worker's hands and tool are indistinct (center, moderate)
- gemini-3.1-pro-preview: The hands of the leftmost worker merge seamlessly into the metal bar he is holding, which in turn blends directly into the rail. (bottom-left, strong)
- gemini-3.1-pro-preview: The right hand of the lone worker on the right track is poorly defined, appearing malformed and blending into the object he is holding. (middle-right, strong)

**texture_noise_or_sharpness**: score 8, raised in 4/9 calls, at middle-right, bottom-center, center

- gpt-6-sol: The kneeling worker’s boots and the nearby rail edge look somewhat soft and indistinct. (middle-right, weak)
- claude-opus-5.5: The cobblestone setts between the rails have a repetitive, overly uniform pattern and soft, mushy detail. (bottom-center, weak)
- gemini-3.1-pro-preview: The stack of materials (like rails or pipes) in the middle distance appears as a continuous textured mass rather than distinct, separate items. (center, moderate)
- gemini-3.1-pro-preview: The cobblestone pattern between the rails where the left group is working becomes chaotic and loses the regular structure seen elsewhere on the path. (bottom-center, moderate)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-center, center

- claude-opus-5.5: Several tall poles stand with no visible overhead wires or attachments. They end abruptly at the top and their placement is inconsistent. (top-center, moderate)
- claude-opus-5.5: Multiple tram poles but no overhead wires visible connecting them; poles stand arbitrarily in the yard (top-center, moderate)
- claude-opus-5.5: Multiple poles with no overhead wires attached, placed arbitrarily (top-center, weak)
- gemini-3.1-pro-preview: The base of the tall pole near the center left lacks a shadow or structural foundation, making it look like it was placed artificially on top of the ground. (center, moderate)

## u-group-L-6.jpg: mean P(AI) 0.34 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.65
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**track_geometry**: score 9, raised in 3/9 calls, at center, bottom-center, middle-left

- claude-opus-5.5: Left track pair curves leftward, but the rails don't clearly connect to a coherent junction; the two branches diverge from nowhere with gravel/asphalt between and no visible switch, frog or common origin (center, moderate)
- claude-opus-5.5: Left track's right rail and right track's left rail run into frame bottom with inconsistent spacing; gauge of left track appears to widen toward the bottom unrealistically (bottom-center, weak)
- gemini-3.1-pro-preview: The rails appear as flat gray lines painted onto the surface rather than having a raised or grooved 3D profile typical of real railway or tram tracks. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner (right) rail of the left track abruptly disappears into the pavement just behind the group of three workers, failing to continue towards the archway. (middle-left, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at middle-left, middle-right

- gpt-6-sol: The workers’ hands and the objects they are handling are difficult to distinguish. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the exact point where they meet the rail are difficult to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The three workers on the left have indistinct limbs that merge into dark, shapeless blobs on the ground, with the central worker appearing to lack legs entirely. (middle-left, strong)
- gemini-3.1-pro-preview: The single worker on the right lacks a discernible lower body and appears to be fused with or kneeling on an amorphous dark grey blob. (middle-right, strong)

**tools_or_small_objects**: score 6, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The worker on the right kneels next to an amorphous gray mass, and there is an unnaturally thin, perfectly straight line or pole lying across the tracks just behind him. (middle-right, moderate)
- gemini-3.1-pro-preview: A long, straight pole rests across the right track, intersecting the rail and the worker's form in a physically impossible way without being held. (middle-right, moderate)
- gemini-3.1-pro-preview: The hands and tools of the three workers on the left are fused together into indistinct, blurry masses without any defined shapes. (middle-left, moderate)

**background_clutter**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of materials in the central background, which should be distinct rails or sleepers, is rendered as a blurry, indistinct bundle of lines. (center, moderate)
- gemini-3.1-pro-preview: The yellow skip (dumpster) in the background has wavy, irregular edges and appears to melt into the ground. (center, strong)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-center

- claude-opus-5.5: Multiple poles but almost no overhead wires visible on what looks like a tram depot; poles end at top abruptly (top-center, weak)
- gemini-3.1-pro-preview: The tall gray poles lack any fixtures, tensioners, or overhead wires, appearing simply as plain, featureless cylinders sticking out of the ground. (top-center, moderate)

## w-group-L-1.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.85 / 0.70 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 27, raised in 6/9 calls, at center, bottom-center, top-left, bottom-right

- claude-opus-5.5: The inner rails of the left and right tracks converge toward the bottom center into a single merged rail-like shape with no frog, switch blades, or plausible junction hardware; the track topology is physically incoherent. (center, strong)
- claude-opus-5.5: The sleepers of the left track extend under the converging rail area inconsistently, and the rail spacing does not hold a constant gauge. (bottom-center, moderate)
- claude-opus-5.5: The inner rails of the two branches converge into a simple V at the bottom edge with no frog, check rails or switch blades, which is not how a real diverging junction is built. (bottom-center, strong)
- claude-opus-5.5: The sleepers of the left track and the right track stay separate and run independently right up to the point where the rails meet, rather than forming a continuous turnout sleeper set. (center, moderate)

**people_anatomy**: score 12, raised in 3/9 calls, at center, middle-right, bottom-left, middle-left

- gpt-6-sol: The workers’ hands and tools are hard to distinguish where they meet the rails, leaving some shapes ambiguous. (center, weak)
- gemini-3.1-pro-preview: The hands and lower arms of the solitary worker on the right track merge formlessly into the steel rail, with no distinct fingers, gloves, or hand tools visible. (middle-right, strong)
- gemini-3.1-pro-preview: The arms and hands of the three workers on the left track blend ambiguously into each other and into the rails they are working on, lacking structural definition. (bottom-left, moderate)
- gemini-3.1-pro-preview: The rightmost worker in the group of three appears to be missing legs, with his torso merging directly into the ballast and shadows. (middle-left, strong)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at center, middle-left

- claude-opus-5.5: The workers kneel on the rails in nearly identical poses with no tools visibly engaging the track, which looks staged and generic. (center, moderate)
- claude-opus-5.5: Four workers are kneeling close together on the rails with no visible tools or work activity in their hands; the scene looks staged and evenly spaced. (center, moderate)
- claude-opus-5.5: Three workers kneel straddling the rails in near-identical poses with hands on the rail, a staged, repetitive arrangement. Their hands and tools are indistinct. (center, moderate)
- gemini-3.1-pro-preview: The leftmost worker's lower body and tools blend vaguely into the rails and ground, lacking clear anatomical definition or physical separation from the environment. (middle-left, moderate)

**overhead_wires_or_poles**: score 6, raised in 4/9 calls, at top-right, top-center

- claude-opus-5.5: The overhead wire supports and cantilevers are sparse and do not clearly connect to a contact wire above either track. (top-right, weak)
- claude-opus-5.5: The catenary poles and cantilever arms are sparse, and the wires are barely present or inconsistent for an electrified depot. (top-right, weak)
- gemini-3.1-pro-preview: The overhead wires are faint, fade in and out, and do not logically connect between the poles in a mechanically sound way. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are very faint, lack proper insulators or tensioning, and do not form a coherent catenary system to supply power. (top-center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The junction where the tracks split lacks any switch points, tie rods, or a frog; the solid steel rails simply bifurcate into a 'Y' shape, which is mechanically impossible for train wheels to navigate. (bottom-center, strong)

## w-group-L-2.jpg: mean P(AI) 0.51 (fails)

- openai/gpt-6-sol: 0.06 / 0.06 / 0.06
- anthropic/claude-opus-5.5: 0.32 / 0.35 / 0.75
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**people_anatomy**: score 13, raised in 7/9 calls, at middle-left, bottom-left, center

- gpt-6-sol: The workers’ hands and faces are difficult to resolve, so small anatomical inconsistencies cannot be ruled out. (middle-left, weak)
- gpt-6-sol: The clustered workers’ hands and arms are hard to distinguish where their bodies overlap. (bottom-left, weak)
- gpt-6-sol: Overlapping arms and hands in the group on the left are hard to distinguish clearly. (center, weak)
- claude-opus-5.5: Workers' limbs and hands somewhat merged and indistinct, the kneeling poses blend with rails (center, weak)

**track_geometry**: score 12, raised in 4/9 calls, at bottom-center, center, bottom-left, middle-right

- claude-opus-5.5: Two tracks run side by side in the foreground and then fan apart with no visible switch points or frog. This is unusual, though a depot fan layout could look like this. (bottom-center, weak)
- claude-opus-5.5: Two tracks diverge but the left track's right rail and right track's left rail converge toward the bottom without any frog, switch blades, or proper junction; geometry of the split is implausible (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet at a sharp point and abruptly terminate, completely lacking the complex frog and switch mechanisms required for a real railway junction. (bottom-center, strong)
- gemini-3.1-pro-preview: The concrete ties (sleepers) under the rails are irregularly shaped, unevenly spaced, and appear to melt or blur into the gravel ballast. (bottom-left, strong)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-left, top-center

- claude-opus-5.5: The catenary poles and cantilever arms are mostly consistent, but the overhead wiring is sparse and somewhat unclear. (top-left, weak)
- claude-opus-5.5: Overhead catenary wires sparse and inconsistently attached to poles (top-left, weak)
- gemini-3.1-pro-preview: The overhead wires are depicted as haphazard lines that cross each other illogically and do not form a functional catenary system attached properly to the poles. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires form an illogical, spiderweb-like structure that ignores physics, with several wires simply terminating abruptly in mid-air. (top-center, strong)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image, center

- claude-opus-5.5: Four workers kneel on the left branch and one on the right branch, a textbook trolley-problem arrangement that is common in AI prompts, though it could also be a deliberate staged shoot. (whole-image, moderate)
- claude-opus-5.5: Four workers kneel on the left branch and one on the right, closely mirroring the classic trolley-problem setup, which suggests deliberate staging or generation. (center, moderate)
- claude-opus-5.5: Classic trolley-problem staging: four workers on one branch, one on the other, kneeling on rails in front of the camera (whole-image, moderate)

**background_clutter**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of pipes or cylindrical objects lying on the ground behind the workers is misshapen, asymmetrical, and uneven, not resembling rigid manufactured items. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical concrete pipes near the fence is distorted, with individual pipes fusing together and lacking consistent, circular hollow openings. (center, strong)

## w-group-L-3.jpg: mean P(AI) 0.54 (fails)

- openai/gpt-6-sol: 0.07 / 0.04 / 0.05
- anthropic/claude-opus-5.5: 0.68 / 0.80 / 0.20
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 1.00

**track_geometry**: score 23, raised in 6/9 calls, at center, bottom-center, middle-left, bottom-right, bottom-left

- claude-opus-5.5: The two tracks diverge from nothing; the inner rails of the left and right branches don't connect to any common switch or frog, and the gravel between them simply blends into a paved area, which is an implausible layout. (center, moderate)
- claude-opus-5.5: The sleepers on the left track are irregularly spaced and partly floating, and the rail fastenings look repetitive and smudged. (bottom-center, weak)
- claude-opus-5.5: The two tracks diverge from each other without any switch, frog, or connecting rails; the left track's rails curve oddly and the ballast area between them is flat concrete, which makes the layout physically implausible. (center, strong)
- claude-opus-5.5: The inner rails of the two tracks converge toward the bottom edge in a V shape with no visible junction hardware, and the sleepers are spaced inconsistently. (bottom-center, moderate)

**people_anatomy**: score 12, raised in 6/9 calls, at middle-right, middle-left

- gpt-6-sol: The crouching worker’s lower legs blend into the track and gravel, making the pose slightly difficult to parse. (middle-right, weak)
- gpt-6-sol: The workers' overlapping hands and equipment are difficult to distinguish clearly. (middle-left, weak)
- gpt-6-sol: The workers' overlapping gloves and hands are difficult to distinguish individually. (middle-left, weak)
- claude-opus-5.5: The three kneeling workers' hands and tools merge into an indistinct cluster at the rail, with no clear tool shapes. (middle-left, moderate)

**overhead_wires_or_poles**: score 10, raised in 4/9 calls, at top-center

- claude-opus-5.5: The overhead catenary wires are sparse and inconsistent; the cantilever arms don't attach to coherent contact wires above the tracks. (top-center, moderate)
- claude-opus-5.5: The overhead poles and wires have inconsistent geometry; the cantilever arms don't connect logically to any catenary over the tracks. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires visible against the sky fade out into nothing or end abruptly without connecting to any supporting structures. (top-center, strong)
- gemini-3.1-pro-preview: An overhead wire stretches horizontally and vanishes directly into the solid grey panels of the building facade. (top-center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-left

- claude-opus-5.5: Three workers crouch tightly clustered on the left track with blended limbs, and their tool interactions are unclear. (middle-left, moderate)
- gemini-3.1-pro-preview: The worker on the right side of the left group appears to have their lower body and legs physically merged with the steel rail they are sitting near. (middle-left, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The chain-link fence running in front of the building has irregularly wavy posts and a mesh pattern that dissolves into noise rather than forming a coherent grid. (middle-left, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical items behind the fence appears as a blobby, merged mass lacking distinct individual shapes. (center, moderate)

## w-group-L-4.jpg: mean P(AI) 0.41 (fails)

- anthropic/claude-opus-5.5: 0.80 / 0.12 / 0.30
- openai/gpt-6-sol: 0.19 / 0.12 / 0.14
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.99

**track_geometry**: score 19, raised in 5/9 calls, at bottom-center, center, middle-right

- claude-opus-5.5: The two tracks diverge with no proper switch mechanism or frog. The inner rails simply merge into a V at the bottom, which is physically implausible. (bottom-center, strong)
- claude-opus-5.5: The left track's rails curve inconsistently. The right rail bends toward the right track and the sleepers end abruptly, with no continuity to a shared track bed. (center, moderate)
- claude-opus-5.5: The two branch tracks diverge in a wide V with no switch blades, frog, or connecting rails at the junction, which is not a functional rail layout. (center, moderate)
- gpt-6-sol: The rails’ meeting area is visually complex enough that their exact connections are hard to trace. (bottom-center, weak)

**people_anatomy**: score 6, raised in 4/9 calls, at center, middle-right, bottom-left

- gpt-6-sol: The crouching workers’ hands and tools are hard to distinguish where they overlap the rails. (center, weak)
- gpt-6-sol: The three workers’ hands and tools overlap and are difficult to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The legs of the solitary worker on the right track lack definition and appear to blend directly into the track and gravel, with no distinct feet visible. (middle-right, moderate)
- gemini-3.1-pro-preview: The legs of the middle worker in the orange jacket seem to blend unnaturally into the legs of the worker in the yellow vest next to him. (bottom-left, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left, top-center

- claude-opus-5.5: The overhead wires are sparse and inconsistently attached to the poles, and the catenary over the tracks is incomplete. (top-left, moderate)
- gemini-3.1-pro-preview: An overhead wire extends to the right from the central pole but vanishes abruptly in mid-air instead of continuing to the next support. (top-center, moderate)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: Three workers kneel clustered between and on the rails, with poses that look staged. Hands and tools are vague at the work point. (center, moderate)
- claude-opus-5.5: The three kneeling workers on the left track are evenly lined up across the gauge in a staged-looking arrangement; their hands and tools are vague. (center, weak)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The point where the tracks diverge lacks any moving switch blades (points); the rails simply merge solidly into one another or cross over without logical separation. (bottom-center, strong)

## w-group-L-5.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- openai/gpt-6-sol: 0.03 / 0.06 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 10, raised in 3/9 calls, at center, bottom-center, bottom-left, bottom-right

- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet and fuse into a solid V-shape, lacking a logical crossing frog or continuous rails. (center, strong)
- gemini-3.1-pro-preview: The junction where the inner rails of the two diverging tracks should meet lacks a proper mechanical switch point or frog; the rails simply blur and merge together in a physically impossible way. (bottom-center, strong)
- gemini-3.1-pro-preview: The rail fastenings on the sleepers appear as random, misaligned yellow and orange blobs rather than identical, structured mechanical clips. (bottom-left, moderate)
- gemini-3.1-pro-preview: The wooden sleepers (ties) on the right branch of the track appear irregularly spaced and some blend unnaturally into the surrounding gravel ballast. (bottom-right, moderate)

**people_anatomy**: score 6, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The worker kneeling on the right track has a left leg that blends into an amorphous brown blob, and his feet and hands lack distinct structural definition. (middle-right, strong)
- gemini-3.1-pro-preview: The legs and boots of the worker on the right track are indistinct and malformed, appearing as shapeless blobs that do not correctly interact with the ground. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at center, bottom-left

- gpt-6-sol: The workers’ hands and equipment where they meet the left-hand rails are hard to distinguish. (center, weak)
- gemini-3.1-pro-preview: The tools and gear scattered around the leftmost worker appear as ambiguous, formless black and grey shapes. (bottom-left, moderate)
- gemini-3.1-pro-preview: The black object resting on the ground next to the rightmost worker in the left group looks melted and formless, lacking the clear edges of a real bag or tool. (center, moderate)

**people_pose_or_placement**: score 5, raised in 2/9 calls, at bottom-right, middle-left

- gemini-3.1-pro-preview: The lower body and legs of the worker on the right track dissolve into formless blobs that blend directly into the steel rail. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower half of the kneeling worker in the orange vest on the left track merges confusingly with a black object or bag beside them. (middle-left, moderate)

**background_clutter**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The pile of cylindrical objects or pipes near the fence is completely fused together into a continuous, lumpy mass rather than distinct items. (middle-left, strong)

## w-group-L-6.jpg: mean P(AI) 0.44 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.70
- google/gemini-3.1-pro-preview: 1.00 / 0.99 / 0.98

**background_clutter**: score 8, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The row of cylindrical objects lying on the ground behind the chain-link fence are fused together into a continuous, lumpy mass rather than appearing as distinct, individual pipes or rolls. (center, strong)
- gemini-3.1-pro-preview: The stack of cylindrical objects (likely pipes) in the background appears somewhat melted and the individual shapes are poorly defined, blending into each other. (center, moderate)
- gemini-3.1-pro-preview: The pile of what appears to be concrete pipes or cylinders behind the fence consists of fused, indistinct shapes rather than separate, defined objects. (center, strong)

**track_geometry**: score 7, raised in 3/9 calls, at center, bottom-left, bottom-center

- claude-opus-5.5: Left track's rails converge oddly: a rail from the left track curves across toward the right track near bottom-center, with inconsistent gauge and a rail seemingly merging without proper switch frog/points (center, moderate)
- gemini-3.1-pro-preview: The railway sleepers (ties) on the left track are highly irregular in spacing, shape, and angle, with some appearing distorted or melting unnaturally into the surrounding ballast. (bottom-left, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks approach each other at the bottom edge of the frame but lack any visible switch mechanism, frog, or logical structural connection for a junction. (bottom-center, strong)

**people_anatomy**: score 6, raised in 4/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The workers' hands and the equipment between them are difficult to distinguish at this resolution, leaving some fine detail ambiguous. (center, weak)
- gpt-6-sol: The crouching worker's legs and hands are difficult to distinguish in the soft, shadowed area. (middle-right, weak)
- claude-opus-5.5: Cluster of three workers has merged/ambiguous limbs and bodies; leftmost worker's legs and the middle worker's body blend together (middle-left, moderate)
- gemini-3.1-pro-preview: The worker in the orange vest in the center of the left group appears to have lower body parts that blend indistinctly into the ballast and rails. (middle-left, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-right, top-left

- claude-opus-5.5: Overhead catenary poles and wires appear sparse and partially disconnected, wires not clearly attaching to poles (top-right, weak)
- gemini-3.1-pro-preview: The horizontal wire extending from the top of the pole on the left abruptly terminates in mid-air and does not connect to the rest of the catenary system. (top-left, strong)
- gemini-3.1-pro-preview: An overhead wire attached to the leftmost pole appears to just end abruptly in mid-air above the track. (top-left, moderate)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The junction where the tracks diverge lacks any functional switch components, such as point blades or a frog. Instead, the inner rails simply merge into a solid, impenetrable 'V' shape, making it physically impossible for flanged train wheels to pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: The two tracks diverge without any of the necessary mechanical components of a switch, such as switch blades, tie bars, or a frog; they simply emerge as separate curving lines from the bottom of the frame. (bottom-center, strong)

## w-group-R-1.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.06
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.30
- google/gemini-3.1-pro-preview: 0.85 / 0.99 / 0.99

**track_geometry**: score 12, raised in 4/9 calls, at center, bottom-center, bottom-left, bottom-right

- claude-opus-5.5: Track geometry is odd: left branch has a strange gauge with an inner rail curving, and the two branches split without coherent switch blades; rails converge illogically at bottom center (center, moderate)
- gemini-3.1-pro-preview: The track splitting in the foreground features rails that disappear or merge awkwardly; the inner rails forming the point don't connect properly and seem to float or end abruptly. (bottom-center, strong)
- gemini-3.1-pro-preview: The left track curves towards a building, but the rails appear inconsistent in width and the sleepers are spaced irregularly and look somewhat distorted. (bottom-left, moderate)
- gemini-3.1-pro-preview: The rails beneath the group of three workers are jumbled and nonsensical, appearing as multiple overlapping or incomplete lines rather than two parallel steel rails. (bottom-right, strong)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The overhead wires have slight inconsistencies and don't seem entirely logical in their connections to the poles. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires fade in and out against the sky and do not connect logically to the support structures. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires cross each other randomly in the sky and do not connect logically to the support poles to form a functional catenary system. (top-center, strong)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The point where the tracks diverge lacks a functional switch; the rails simply cross over or merge into one another without a frog or movable points. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction is physically impossible; the rails converge into a solid V-shape without a functioning switch, points, or frog to guide train wheels. (bottom-center, strong)

**people_pose_or_placement**: score 5, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: The bodies and limbs of the three workers grouped together are poorly defined, melding into each other and the surrounding ballast. (bottom-right, moderate)
- gemini-3.1-pro-preview: The cluster of three workers features jumbled anatomy, with arms, tools, and the rail itself blending into an indistinguishable mass. (bottom-right, strong)

**texture_noise_or_sharpness**: score 4, raised in 4/9 calls, at bottom-right, whole-image

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish, which leaves some visual ambiguity. (bottom-right, weak)
- gpt-6-sol: The workers' hands and the equipment between them are too soft to identify clearly, leaving some small details uncertain. (bottom-right, weak)
- gpt-6-sol: The workers' hands and the equipment between them are too soft to make out clearly. (bottom-right, weak)
- gemini-3.1-pro-preview: The overall image has a grainy texture and slight blurriness typical of some AI generations or low-quality digital photos. (whole-image, weak)

## w-group-R-2.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.10
- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at bottom-right, middle-right

- gpt-6-sol: Fine details around the workers’ hands and tools are too soft to distinguish clearly, which limits confidence. (bottom-right, weak)
- gpt-6-sol: The workers' hands and nearby small tools are difficult to distinguish, leaving some fine details ambiguous. (middle-right, weak)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and small equipment are hard to distinguish, leaving some detail uncertain. (bottom-right, weak)
- gemini-3.1-pro-preview: The tools and equipment scattered around the group of three workers appear somewhat blobby and indistinct, lacking clear geometric definition. (bottom-right, weak)

**background_clutter**: score 1, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The row of cylindrical objects stacked behind the wire fence appears unusually smooth and lacks the expected texture or wear of real industrial materials. (center, weak)

## w-group-R-3.jpg: mean P(AI) 0.44 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.30 / 0.75 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.99

**track_geometry**: score 18, raised in 4/9 calls, at center, bottom-center, bottom-right, bottom-left

- claude-opus-5.5: The two branches diverge from the foreground without any visible switch points, frog, or guard rails; the left track simply curves away from the right track with no connecting turnout hardware. (center, moderate)
- claude-opus-5.5: Sleepers on the two tracks are separate and awkwardly spaced, and the inner rails curve apart in a smooth, idealized way rather than following a real turnout layout. (bottom-center, moderate)
- claude-opus-5.5: The two branches diverge from the foreground without any switch points, frog, or closure rails; the inner rails simply separate, which is physically implausible for a real turnout. (center, strong)
- claude-opus-5.5: The rail spacing and curvature look odd. The left track's inner rail curves inward while the sleepers do not align consistently across the two tracks. (bottom-center, moderate)

**people_anatomy**: score 9, raised in 4/9 calls, at middle-right, middle-left

- gpt-6-sol: The workers' hands and tools are difficult to distinguish where they meet the rail. (middle-right, weak)
- gpt-6-sol: The crouching workers’ hands and legs are difficult to distinguish where they overlap. (middle-right, weak)
- gpt-6-sol: The crouching workers' hands and the rail hardware are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The solitary worker crouching on the left track has no discernible lower body; the torso appears to melt directly into the rails and ground. (middle-left, strong)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at middle-right, center

- claude-opus-5.5: Three workers kneel close together on the right track and one crouches alone on the left track. This is a staged-looking 'trolley problem' arrangement that is common in generated images. (middle-right, moderate)
- claude-opus-5.5: Three workers are clustered on the right track while one is alone on the left, a staged, dilemma-like composition. (center, moderate)
- claude-opus-5.5: Three workers are clustered on the right track, crouched with their hands on the rail, but they are doing no clear task and hold no visible tools; their limbs blend together. (middle-right, moderate)
- gemini-3.1-pro-preview: The person kneeling in the orange jacket appears to merge ambiguously with the person working directly behind them. (middle-right, moderate)

**overhead_wires_or_poles**: score 4, raised in 3/9 calls, at top-left, top-right

- claude-opus-5.5: The poles and catenary wires are sparse and don't connect coherently over the tracks; one wire ends ambiguously. (top-left, weak)
- claude-opus-5.5: The catenary poles carry arms, but the wires are sparse and do not clearly run over the tracks. (top-right, weak)
- gemini-3.1-pro-preview: A faint overhead wire extends from the left pole but appears to terminate or fade into the sky without connecting to anything. (top-left, moderate)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects near the fence consists of warped, non-uniform shapes that fuse into one another instead of being distinct pipes. (center, strong)

## w-group-R-4.jpg: mean P(AI) 0.53 (fails)

- anthropic/claude-opus-5.5: 0.25 / 0.70 / 0.72
- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 21, raised in 6/9 calls, at bottom-center, center, bottom-left, middle-left

- claude-opus-5.5: The two tracks diverge oddly: the left track's right rail and the right track's left rail come down and nearly merge at the bottom, with no clear frog or switch structure, which is geometrically ambiguous. (bottom-center, moderate)
- claude-opus-5.5: Left track curves left and right track curves right with no switch/frog connecting them; the two inner rails diverge abruptly from a shared point in an implausible way (center, moderate)
- claude-opus-5.5: Sleeper spacing and fastenings look somewhat uniform and repetitive, ties under right track merge oddly with gravel (bottom-center, weak)
- claude-opus-5.5: Two tracks diverge from a single point in the foreground in a way that is physically odd: the inner rails of both branches converge to the bottom center without a proper frog or switch, forming an implausible Y. (center, moderate)

**people_anatomy**: score 16, raised in 5/9 calls, at center, middle-right, bottom-right, bottom-left

- claude-opus-5.5: The workers are crouched in generic poses and their hands and tools are indistinct, and the two orange-vest workers overlap closely with merged limbs. (center, moderate)
- gpt-6-sol: The overlapping arms and gear of the workers on the right are somewhat hard to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The three workers are merged and distorted; the middle worker's lower body is an amorphous blob, and the worker on the right lacks a defined face under a misshapen helmet. (bottom-right, strong)
- gemini-3.1-pro-preview: The right leg of the lone kneeling worker terminates in a blocky, indistinct white mass that blends into the ground rather than a recognizable foot or boot. (bottom-left, moderate)

**overhead_wires_or_poles**: score 4, raised in 3/9 calls, at top-left

- claude-opus-5.5: Overhead catenary poles and wires are sparse and do not clearly connect over the tracks consistently (top-left, weak)
- claude-opus-5.5: The overhead wires are sparse and do not clearly connect to the poles or form a coherent catenary over the tracks. (top-left, moderate)
- gemini-3.1-pro-preview: A thin wire extending to the right from the leftmost pole simply vanishes into the sky without connecting to another structure. (top-left, weak)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects near the fence, which should be individual pipes, is rendered as a fused, melting mass of interconnected shapes. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (likely intended to be pipes) resting behind the fence merges into a soft, poorly defined mass lacking distinct individual edges. (center, moderate)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and nearby small objects are indistinct, making their exact interaction hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects in the background between the two tracks appears melted and lacks defined, separate shapes. (center, moderate)

## w-group-R-5.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.15 / 0.10
- openai/gpt-6-sol: 0.06 / 0.06 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 15, raised in 3/9 calls, at bottom-center, bottom-right

- gemini-3.1-pro-preview: The inner rails of the diverging tracks meet at a sharp point without any switch mechanism, switch blades, or a frog to allow train wheels to pass. (bottom-center, strong)
- gemini-3.1-pro-preview: The wooden ties (sleepers) between the diverging tracks overlap and interleave in physically impossible, chaotic ways instead of being distinct structural supports. (bottom-center, strong)
- gemini-3.1-pro-preview: Where the two sets of tracks converge, there is no functional switch mechanism or frog. The steel rails simply intersect as solid, unbroken lines, and the concrete sleepers (ties) overlap each other in a chaotic, physically impossible arrangement. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction entirely lacks a switch mechanism, frog, or switch blades. The rails simply merge and split like clay, forming an impossible geometry for train wheels. (bottom-center, strong)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers' hands and tools at the rail are somewhat hard to distinguish, though they are partly occluded. (middle-right, weak)
- gemini-3.1-pro-preview: The power tool held by the leftmost worker in the right-hand group lacks defined mechanical parts and visually merges into the rail it is supposed to be working on. (middle-right, moderate)
- gemini-3.1-pro-preview: The tool being used by the worker in the middle of the group of three is an amorphous shape that lacks clear mechanical definition and appears to blend directly into his hands and the rail. (middle-right, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-right, top-center

- gemini-3.1-pro-preview: The overhead wires are faint, broken in places, and do not connect logically to form a functional catenary system supported by the poles. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wires are disjointed, faintly fading in and out of the sky, and crossing without logical connections to the poles. (top-center, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects, resembling concrete pipes, located behind the chain-link fence appears melted together into a single, lumpy mass rather than distinct, separate items. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects near the fence in the background is lumpy, uneven, and the individual cylinders appear to melt into one another. (center, moderate)

**people_anatomy**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands and arms of the three workers on the right track are indistinct, blended together, and appear to melt into the rails and each other. (middle-right, moderate)

## w-group-R-6.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.10
- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 1.00 / 1.00

**people_anatomy**: score 14, raised in 5/9 calls, at bottom-right, middle-right, middle-left

- gpt-6-sol: The workers' overlapping hands and legs are difficult to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The workers' hands and gear overlap near the rail, making individual shapes hard to distinguish. (bottom-right, weak)
- gemini-3.1-pro-preview: The three workers have heavily distorted limbs that blend into the ground, rails, and each other. The rightmost worker's legs are indistinct blobs rather than defined boots and clothing. (middle-right, strong)
- gemini-3.1-pro-preview: The lone worker's anatomy is distorted; his right leg appears as a shapeless stump and his arms seem to merge directly into the metal rail. (middle-left, strong)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-center, bottom-right

- gemini-3.1-pro-preview: Where the two tracks converge, there is no physical switch mechanism, crossing (frog), or check rails. The steel rails simply melt together into a blurry, illogical shape. (bottom-center, strong)
- gemini-3.1-pro-preview: The rightmost rail loses its structural profile and flattens into a 2D grey stripe near the bottom edge of the image. (bottom-right, strong)
- gemini-3.1-pro-preview: The concrete sleepers beneath the intersecting tracks appear to overlap and melt into each other chaotically, rather than using the long, continuous switch ties required at junctions. (bottom-center, strong)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The overhead wire approaching the leftmost pole terminates in thin air and does not connect to any visible insulators or supporting brackets on the pole. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires appear to float and randomly disconnect, failing to attach to the support structures in a logical or physical manner. (top-center, strong)
- gemini-3.1-pro-preview: The overhead wires start and stop abruptly in mid-air and do not connect logically to any catenary supports or insulators. (top-left, strong)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers' hands and small equipment at rail level are hard to distinguish, leaving some visual ambiguity. (middle-right, weak)
- gemini-3.1-pro-preview: The workers appear to be working on the track, but they are interacting with undefined, metallic-looking blobs rather than recognizable railway tools. (middle-right, strong)
- gemini-3.1-pro-preview: The tools and objects the three workers are using blend into an unrecognizable, cohesive mass of metal and indistinct shapes. (middle-right, strong)

**background_clutter**: score 6, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects (possibly pipes or rolls) sitting in front of the chainlink fence is a continuous, smudged texture lacking distinct edges between individual items. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects or pipes behind the fence are distorted, unevenly shaped, and smoothly blend into one another. (center, moderate)
- gemini-3.1-pro-preview: The cylindrical objects stacked behind the chain-link fence have irregular, malformed openings and melt into one another. (center, moderate)

## w-two-L-1.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.04 / 0.06 / 0.06
- anthropic/claude-opus-5.5: 0.15 / 0.35 / 0.65
- google/gemini-3.1-pro-preview: 0.95 / 0.02 / 0.05

**track_geometry**: score 11, raised in 3/9 calls, at center, bottom-center, bottom-right

- claude-opus-5.5: Left track's right rail curves into the center and merges oddly; the two tracks diverge without a coherent switch, frog or connecting rails, and sleepers of the two tracks overlap inconsistently near the bottom center (center, moderate)
- claude-opus-5.5: Left track curves left while right track goes right; the inner rails of the two tracks appear to merge/converge oddly at bottom center without a proper switch frog or clear divergence structure (center, moderate)
- claude-opus-5.5: Sleepers on the two tracks have regular spacing and fastenings, though left track sleepers extend inconsistently near merge (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the two tracks meet at a sharp 'V' point without a frog or flangeways, creating a solid intersection that real train wheels with inner flanges could not pass through. (bottom-center, strong)

**people_pose_or_placement**: score 4, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: Two workers in hi-vis kneel at the rail with plausible gear and poses, but their hands and tools are vague (center, weak)
- claude-opus-5.5: Two workers kneel on the track; their hands and tools blend into the rail area with indistinct details, faces hidden (center, weak)
- gemini-3.1-pro-preview: The workers are kneeling on a section of the track where the rail appears to split or duplicate illogically, and their hands and tools blend indistinctly into the dark shapes of the rail. (bottom-center, moderate)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The workers’ hands and equipment overlap in a small, hard-to-resolve area near the rail. (center, weak)
- gpt-6-sol: The workers’ hands and the object they are handling at the switch are difficult to distinguish. (center, weak)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The pile of what appears to be concrete pipes or rolls behind the chain-link fence has sections that melt together with indistinct, wobbly edges. (center, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The workers’ hands and the rail hardware they are handling are too soft to distinguish clearly. (center, weak)

## w-two-L-2.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**track_geometry**: score 8, raised in 3/9 calls, at bottom-center, bottom-left

- gemini-3.1-pro-preview: Where the two tracks converge, the wooden sleepers (ties) from each track irregularly overlap and crash into each other, rather than using the long, continuous shared sleepers required for a junction. (bottom-center, strong)
- gemini-3.1-pro-preview: The fasteners intended to clip the rails to the concrete sleepers are rendered as indistinct, rusty smudges rather than defined mechanical components. (bottom-left, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge seamlessly into a single point, forming an impossible Y-shape without a frog or any crossing mechanism to allow train wheels to pass. (bottom-center, strong)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The thin overhead wire stretching horizontally across the upper frame fades out and disappears into the background building without logically connecting to the supporting poles. (top-center, moderate)
- gemini-3.1-pro-preview: An overhead suspension wire appears to terminate directly into the flat, solid paneling of the building's facade instead of running into the depot or connecting to another pole. (top-left, strong)
- gemini-3.1-pro-preview: The overhead wiring is shown as a simple, thin horizontal line connecting the poles straight across, which does not logically follow the curved paths of the tracks below. (top-center, moderate)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the two diverging tracks form a 'V' shape but simply terminate in the ballast without connecting to an incoming track or forming a functional frog mechanism. (bottom-center, strong)
- gemini-3.1-pro-preview: The point where the tracks diverge lacks any moving switch blades, check rails, or a frog; the solid steel rails impossibly merge directly into a V-shape. (bottom-center, strong)

**tools_or_small_objects**: score 5, raised in 4/9 calls, at center, middle-right

- gpt-6-sol: The dark equipment between the workers is difficult to identify clearly. (center, weak)
- gpt-6-sol: The workers’ hands and the objects between them are hard to distinguish, leaving some local detail ambiguous. (center, weak)
- gemini-3.1-pro-preview: The stack of cylindrical pipes lying near the fence in the background appears somewhat melted together, lacking defined edges between individual objects. (middle-right, weak)
- gemini-3.1-pro-preview: The objects around the workers, particularly the yellow item near the right worker's knee, are indistinct, melty blobs lacking the clear definition of real tools. (center, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: A pile of grey, cylindrical objects (perhaps pipes) stacked behind the fence merges together into a single, poorly defined mass with smeared edges. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects or pipes situated behind the fence appears as merged, repetitive shapes rather than distinct, individual items. (center, moderate)

## w-two-L-3.jpg: mean P(AI) 0.24 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.75

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a solid, triangular point of ballast instead of forming a continuous steel frog or switch mechanism. (bottom-center, strong)
- gemini-3.1-pro-preview: The right rail of the left track is discontinuous, breaking and misaligning significantly just behind the workers. (center, strong)
- gemini-3.1-pro-preview: Rails merge poorly. (bottom-center, strong)

**people_anatomy**: score 3, raised in 2/9 calls, at center

- gpt-6-sol: The workers’ faces and hands are indistinct, though they are small in the frame and viewed through a dirty windscreen. (center, weak)
- gemini-3.1-pro-preview: Legs blend into ground. (center, moderate)

**people_pose_or_placement**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The worker in yellow has indistinct anatomical features, with their hands and the tool they are supposedly using blending amorphously into the rail. (center, moderate)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: There are undefined, blob-like black shapes next to the yellow worker's feet that do not clearly resemble standard tools or gear. (center, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical objects (likely pipes) by the fence are uneven, lumpy, and inconsistent in diameter. (center, moderate)

## w-two-L-4.jpg: mean P(AI) 0.35 (passes)

- openai/gpt-6-sol: 0.07 / 0.05 / 0.04
- anthropic/claude-opus-5.5: 0.15 / 0.10 / 0.72
- google/gemini-3.1-pro-preview: 0.00 / 0.99 / 0.99

**track_geometry**: score 18, raised in 4/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Track diverging from a single approach: the left branch's right rail curves toward the right branch, and the gap where the branches meet is plausibly gravel, but the tracks visible at the bottom split into two separate gauges without clear frog or switch parts. (center, weak)
- claude-opus-5.5: The two tracks diverge from a common point near the bottom-center, but there is no frog, switch blades or guard rails. The inner rails simply touch and splay apart, which is not how a real turnout works. (center, strong)
- claude-opus-5.5: The inner rails of the left and right tracks merge into a V near the camera with no crossing hardware. The sleepers on the two tracks are not shared and do not interleave sensibly. (bottom-center, moderate)
- gemini-3.1-pro-preview: The rails where the track splits cross over each other seamlessly like spaghetti, completely lacking the physical frog mechanism required for wheels to pass. (bottom-center, strong)

**people_anatomy**: score 7, raised in 4/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and tools are hard to distinguish at this distance, leaving some fine detail uncertain. (center, weak)
- gpt-6-sol: The kneeling worker’s hands and lower legs are hard to distinguish precisely. (center, weak)
- gemini-3.1-pro-preview: The hands and arms of the worker in the yellow jacket blend into the rail, lacking distinct tool or hand shapes. (middle-left, moderate)
- gemini-3.1-pro-preview: The lower body of the worker on the right lacks definition, with his legs appearing to melt into the gravel and the rail rather than interacting with them naturally. (middle-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects near the fence are misshapen, blurry, and appear melted into one another. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (likely pipes) near the fence is indistinct and smeared, looking more like a repeating texture than individual, solid objects. (center, moderate)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-left

- claude-opus-5.5: The overhead wires are sparse and loosely connected to the poles. There is no clear contact wire above the tracks. (top-left, weak)
- gemini-3.1-pro-preview: There are faint lines representing overhead wires that cross in front of the poles but do not seem to attach to them or form a coherent suspension system. (top-left, moderate)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The left worker’s hands and nearby object are indistinct, making their exact interaction hard to verify. (middle-left, weak)

## w-two-L-5.jpg: mean P(AI) 0.49 (fails)

- openai/gpt-6-sol: 0.06 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.25 / 0.80 / 0.30
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 21, raised in 6/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: The two tracks diverge as separate tracks without proper switch geometry; the left track's rails don't connect logically to the right track, and the rails merge strangely at the bottom center. (center, moderate)
- claude-opus-5.5: The two tracks diverge as separate lines with no switch points, frog, or connecting rails, and the left track's rails seem to merge or abruptly widen near the bottom center. This is physically implausible track layout. (center, strong)
- claude-opus-5.5: The inner rail of the left track curves sharply toward the right track. The sleepers of the two tracks overlap in an impossible way where they meet. (bottom-center, moderate)
- claude-opus-5.5: The two tracks diverge in a strange way: the left track's right rail and the right track's left rail converge into a V at the bottom center with no frog, switch points, or proper turnout. The geometry looks physically implausible for a real junction. (center, moderate)

**background_clutter**: score 9, raised in 3/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The pile of cylindrical objects (like concrete pipes or rolls) in front of the building is highly deformed, with the individual pieces melting into one another and lacking consistent circular openings. (center, strong)
- gemini-3.1-pro-preview: The chain-link fence in front of the building has an inconsistent mesh that dissolves in certain areas, blending seamlessly into the background rather than overlaying it. (middle-left, moderate)
- gemini-3.1-pro-preview: The pile of concrete pipes or cylinders behind the fence features irregular, melting shapes that seem to blend seamlessly into one another. (center, moderate)
- gemini-3.1-pro-preview: The pile of what looks like pipes or cylindrical rolls near the fence is fused together into a single, melted-looking, organic mass rather than being distinct individual objects. (center, moderate)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at center, middle-left, bottom-left

- gpt-6-sol: The workers’ hands and the objects beside their knees are difficult to distinguish and appear somewhat blended. (center, weak)
- gpt-6-sol: The workers’ hands and nearby small objects are indistinct, making their exact interaction with the rail hard to verify. (middle-left, weak)
- gemini-3.1-pro-preview: The brown object or toolbag sitting on the track behind the worker in yellow is a completely undefined, lumpy mass with nonsensical strap-like details. (bottom-left, moderate)
- gemini-3.1-pro-preview: The bag or toolbelt resting on the ground next to the worker in the yellow jacket is rendered as a deformed, amorphous blob without recognizable structure. (bottom-left, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-right, top-center, top-left

- claude-opus-5.5: The catenary poles and wires are sparse. Some wires end ambiguously and the cantilever arms are oddly placed. (top-right, weak)
- gemini-3.1-pro-preview: The overhead catenary wires appear discontinuous, fading in and out against the sky instead of forming a coherent, tensioned network. (top-center, moderate)
- gemini-3.1-pro-preview: The leftmost catenary pole seems to go straight up and disappear directly into the thin overhang of the building's roof without any logical physical attachment. (top-left, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-left

- gpt-6-sol: The workers’ hands and lower legs are difficult to distinguish where they overlap the rails and equipment. (middle-left, weak)
- gemini-3.1-pro-preview: The kneeling workers are malformed; their helmets are misshapen, their limbs lack definition, and their bodies awkwardly merge into the ground and adjacent unidentifiable blobs (possibly toolbags). (middle-left, strong)

## w-two-L-6.jpg: mean P(AI) 0.30 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.03 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.30

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The concrete sleepers (ties) from the left and right diverging tracks physically intersect and visually fuse together in a herringbone pattern, which is impossible. Real switches use long, continuous sleepers spanning both tracks. (bottom-center, strong)
- gemini-3.1-pro-preview: The point where the two tracks converge towards the bottom foreground lacks a functional railway switch mechanism; the inner rails simply terminate or blend into the ballast without a frog, switch points, or check rails. (bottom-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at center, middle-right

- gpt-6-sol: The workers' hands and the objects between them are difficult to resolve, leaving some fine detail ambiguous. (center, weak)
- gpt-6-sol: The workers' hands and nearby small objects are too soft to make out clearly, so their details cannot be fully checked. (center, weak)
- gemini-3.1-pro-preview: The ballast and sleepers on the right track exhibit a slightly smooth, indistinct texture characteristic of AI rendering, lacking the crisp, particulate detail of real crushed stone. (middle-right, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center, middle-left

- gpt-6-sol: The objects around the workers’ hands and feet are indistinct, making the exact task hard to identify. (center, weak)
- gemini-3.1-pro-preview: The dark equipment resting on the tracks next to the kneeling workers appears as an amorphous, melted blob without recognizable structural or mechanical components. (middle-left, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The diverging Y-junction lacks a visible frog (the mechanical crossing point for the inner rails) and switch blades; the inner rails simply run close together at the bottom and curve apart without ever crossing. (bottom-center, strong)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead wires attached to the leftmost pole are extremely faint, erratic, and appear to float or disconnect mid-air, rather than forming a continuous, tensioned catenary system. (top-left, strong)

## w-two-R-1.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.06 / 0.05 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 10, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and lower legs are difficult to distinguish where they overlap the rails and equipment. (middle-right, weak)
- gemini-3.1-pro-preview: The legs of the worker in the yellow jacket lack defined boots; they end in indistinct blobs, and his left knee appears to melt into the steel rail. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower body of the worker in the orange jacket is poorly defined, with legs and feet appearing to melt into the tracks and nearby indeterminate objects. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower bodies of both kneeling workers are poorly defined, with their legs appearing to melt indistinguishably into the track, ballast, and each other without clear feet or hands. (bottom-right, strong)

**switch_mechanism**: score 7, raised in 3/9 calls, at bottom-center

- gpt-6-sol: The rail connection near the workers is partly obscured and difficult to trace precisely, a weak possible generation clue. (bottom-center, weak)
- gemini-3.1-pro-preview: The track junction lacks moving switch points and a flangeway gap at the frog. The inner rails meet at a solid intersection that train wheel flanges could not physically pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: The point where the two tracks meet at the bottom center forms a physically impossible junction. There is no proper frog or switch point, the rails simply melt into one another, and the wooden sleepers beneath the V-shape are disjointed and stop abruptly instead of spanning the tracks. (bottom-center, strong)

**track_geometry**: score 7, raised in 2/9 calls, at middle-left, bottom-center, bottom-left

- gemini-3.1-pro-preview: The inner edges of the rails on the left curve have bizarre, repeating block-like protrusions that do not resemble real rail fasteners or track infrastructure. (middle-left, moderate)
- gemini-3.1-pro-preview: The junction where the two tracks split completely lacks a switch mechanism; the inner rails simply melt into one another, and the wooden sleepers are arranged chaotically, crossing and blending unnaturally. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails on the curving left track exhibit ghosting and doubling along their inner edges, and the rail thickness fluctuates irregularly. (bottom-left, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: An overhead wire passes near the leftmost vertical pole but lacks clear, physical attachments or insulators, and seems to fade nonsensically into the sky. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires cross in arbitrary ways and seem to fade into the flat surface of the building rather than attaching to structural anchor points or insulators. (top-center, moderate)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and nearby equipment are partly obscured and difficult to distinguish. (bottom-right, weak)
- gemini-3.1-pro-preview: The tools and the bag next to the worker in the yellow jacket lack clear structure, appearing as amorphous brown blobs without distinct straps, handles, or mechanical details. (bottom-right, moderate)

## w-two-R-2.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.04 / 0.06 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**track_geometry**: score 14, raised in 3/9 calls, at bottom-center, bottom-right

- gemini-3.1-pro-preview: The two tracks diverge without a functional switch mechanism (no points or frog). The inner rails simply terminate or cross in a nonsensical way at the bottom edge, and the concrete sleepers (ties) in this area are a garbled, overlapping mess of impossible angles. (bottom-center, strong)
- gemini-3.1-pro-preview: The left rail of the right-hand track, just below the workers, appears to split inexplicably or has a secondary, ghostly rail line running parallel to it for a short distance. (bottom-center, moderate)
- gemini-3.1-pro-preview: The point where the two tracks diverge lacks a realistic switch mechanism or frog; the inner rails intersect chaotically and blur into each other. (bottom-center, strong)
- gemini-3.1-pro-preview: Underneath the seated workers, the rails are malformed, with segments seemingly duplicating or ending abruptly without logical connections. (bottom-right, strong)

**people_anatomy**: score 6, raised in 3/9 calls, at bottom-right, middle-right

- gpt-6-sol: The workers’ hands and the area where they meet the rail are indistinct, making those details hard to verify. (bottom-right, weak)
- gemini-3.1-pro-preview: The hands and tools of the workers crouching on the tracks are poorly defined, appearing as indistinct, blurry blobs that meld into the steel rails rather than resting on or gripping them. (middle-right, moderate)
- gemini-3.1-pro-preview: The lower body of the worker on the right (wearing the yellow hard hat) appears to merge directly into the rail and ground, lacking defined legs or feet. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects (like pipes or rolls) sitting in front of the building's closed doors lacks distinct edges and details, merging into a continuous, smudgy shape. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical pipes or objects behind the chain-link fence is heavily distorted, with the individual shapes melting and fusing into one another. (center, strong)

**composition_or_staging**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: A dark, blurry diagonal line in the foreground and smudges across the right side of the image suggest it is taken through a dirty window, likely from a vehicle (like a train) moving towards the tracks. However, because the tracks in the immediate foreground do not connect to a single path that the camera's vehicle could be on, the physical perspective is logically impossible. (bottom-right, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: Where the tracks diverge in the foreground, there are no mechanical switch points, throw rods, or frogs visible; the solid rails simply split unnaturally into two paths. (bottom-center, strong)

## w-two-R-3.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.98

**people_anatomy**: score 6, raised in 3/9 calls, at center, bottom-right, middle-right

- gpt-6-sol: The workers’ hands are difficult to distinguish where they meet the rails. (center, weak)
- gemini-3.1-pro-preview: The bodies of the two workers are highly distorted and blob-like. They lack defined limbs or hands, and their forms appear to melt into the rails and ground they are working on. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower body of the worker in the yellow jacket appears to melt into the surrounding ballast and rail, with no clearly defined boots or realistic resting posture on the uneven ground. (middle-right, moderate)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The point where the two tracks merge lacks any functional switch mechanism; the inner rails simply melt together into a confusing, physically impossible junction, and the sleepers (ties) underneath are randomly placed. (bottom-center, strong)
- gemini-3.1-pro-preview: At the point where the tracks diverge, the concrete sleepers are short and overlap each other in a chaotic, physically impossible manner. A real railway switch requires long, continuous bearers that span across both tracks until they are sufficiently separated. (bottom-center, strong)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-right, center, bottom-right

- gpt-6-sol: The workers’ hands and the small objects beside the rail are hard to distinguish, leaving their exact task unclear. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the hardware they are handling are indistinct, so their exact interaction is hard to verify. (center, weak)
- gemini-3.1-pro-preview: The area where the workers are interacting with the rail is an indistinct, undefined blob, lacking any discernible tools, rail fastenings, or clear separation between hands, equipment, and the steel rail. (bottom-right, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The tracks branch out smoothly from a single line without any of the necessary mechanical components for a turnout, such as point blades (switch rails), tie rods, or a frog (the V-shaped crossing). (bottom-center, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead wire extending to the right from the leftmost pole simply vanishes into thin air without connecting to anything. (top-left, moderate)

## w-two-R-4.jpg: mean P(AI) 0.09 (passes)

- openai/gpt-6-sol: 0.06 / 0.08 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.25

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at bottom-right, middle-right

- gpt-6-sol: The workers’ hands and nearby rail hardware are somewhat soft and difficult to distinguish. (bottom-right, weak)
- gpt-6-sol: Some details around the workers' hands and equipment are indistinct, though this could be ordinary image softness. (middle-right, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at bottom-right

- gpt-6-sol: The workers' hands and the objects beside them are somewhat indistinct, making their exact shapes hard to verify. (bottom-right, weak)

## w-two-R-5.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 12, raised in 3/9 calls, at bottom-center, bottom-right

- gemini-3.1-pro-preview: The inner rails of the two tracks merge into a point to form a 'V' shape, lacking a proper frog, switch points, or continuation, making the track physically impossible for a train to navigate. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction is physically impossible; the rails converge and intersect without any switch mechanism, and the wooden sleepers are laid randomly across the intersecting rails. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the left track simply disappears or terminates abruptly underneath the crouching workers. (bottom-center, strong)
- gemini-3.1-pro-preview: The wooden sleepers (ties) under the right track do not span continuously between the two rails; they appear as separate, disconnected blocks under each individual rail, which is structurally impossible for maintaining track gauge. (bottom-right, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers' hands and the objects between them are too small and soft to make out clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the track hardware between them are hard to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The lower body and legs of the worker in the orange shirt blend nonsensically into the ground and the bag next to him, lacking defined anatomical structure. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands and lower bodies of the two workers crouching on the tracks are blurry and merge indistinguishably into the rails, ballast, and each other. (middle-right, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: In the pile of cylindrical objects (like pipes or logs) in front of the fence, several of the objects appear to melt or merge into one another. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical pipes or objects behind the chain-link fence consists of fused, nonsensical blobs with inconsistent shading and hollows. (center, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead catenary wires are thin, disjointed, and do not logically connect to the support poles or follow realistic tension curves. (top-center, moderate)
- gemini-3.1-pro-preview: The horizontal overhead wire intersects the vertical pole in a messy, physically implausible way without any discernible brackets or insulators. (top-left, moderate)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the equipment between them are hard to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects (possibly pipes or rolls) behind the chainlink fence are poorly rendered, melting together into an indistinct, lumpy mass. (center, moderate)

## w-two-R-6.jpg: mean P(AI) 0.20 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.25 / 0.25
- openai/gpt-6-sol: 0.03 / 0.04 / 0.07
- google/gemini-3.1-pro-preview: 0.98 / 0.05 / 0.05

**track_geometry**: score 7, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: Two tracks diverge but the left and right branches don't connect plausibly; there is no visible switch/frog connecting them, the geometry of rails converging at bottom center is odd (left track's right rail and right track's left rail approach each other without a turnout). (center, moderate)
- claude-opus-5.5: Left and right track branches diverge from the bottom without a proper switch/frog; the inner rails simply split apart with no connecting turnout mechanism, and the sleepers of the two branches overlap oddly in the middle (bottom-center, moderate)
- claude-opus-5.5: Right track has a curving rail continuing toward the building on the right while the main rail bends; rail joins look plausible but sleeper spacing on right track shifts irregularly (center, weak)
- gemini-3.1-pro-preview: The wooden railway ties on the inner side of the left track vary wildly in length and spacing, with some blending abnormally into the dirt between the tracks. (bottom-center, moderate)

**background_clutter**: score 5, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical pipes behind the tracks features highly irregular, merging shapes with wavy, non-circular openings rather than uniform geometric forms. (center, strong)
- gemini-3.1-pro-preview: The chainlink fence located behind the stacked pipes is structurally incoherent; the wire mesh pattern randomly vanishes and reappears between the vertical posts. (center, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish at this resolution. (middle-right, weak)
- gemini-3.1-pro-preview: The workers' hands and the tools they are presumably holding appear as formless blobs, and their lower legs melt indistinctly into the track ballast and rails. (middle-right, strong)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small items between them are difficult to resolve precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish clearly. (middle-right, weak)
