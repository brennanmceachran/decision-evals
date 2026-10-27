# Realism check: final-people2

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 314 | 27/30 |
| people_anatomy | 233 | 28/30 |
| tools_or_small_objects | 145 | 27/30 |
| buildings | 115 | 21/30 |
| background_clutter | 71 | 23/30 |
| texture_noise_or_sharpness | 61 | 23/30 |
| people_pose_or_placement | 57 | 16/30 |
| overhead_wires_or_poles | 55 | 17/30 |
| composition_or_staging | 43 | 14/30 |
| people_clothing_or_gear | 42 | 13/30 |
| camera_or_windscreen | 28 | 9/30 |
| text_signage_or_markings | 12 | 5/30 |
| switch_mechanism | 11 | 4/30 |
| lighting_or_shadows | 10 | 4/30 |
| reflections_or_wet_surfaces | 1 | 1/30 |

## x-group-L-4.jpg: mean P(AI) 0.25 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.06
- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.95 / 0.99

**tools_or_small_objects**: score 7, raised in 4/9 calls, at middle-left, center

- gpt-6-sol: The workers' hands and nearby equipment are difficult to distinguish precisely. (middle-left, weak)
- gpt-6-sol: The objects beside the two nearby workers are hard to distinguish and have somewhat muddled outlines. (middle-left, weak)
- gemini-3.1-pro-preview: The items scattered on the ground around the workers appear as formless, indistinct blobs rather than recognizable, sharply defined tools. (center, moderate)
- gemini-3.1-pro-preview: The tools and equipment scattered around the workers on the left are indistinct, nonsensical blobs rather than recognizable objects. (middle-left, strong)

**track_geometry**: score 5, raised in 2/9 calls, at center, bottom-center

- gemini-3.1-pro-preview: The rails of the left track near the workers are highly inconsistent, with discontinuous lines, weird branching, and rails that seem to disappear into the ground rather than maintaining a solid structure. (center, strong)
- gemini-3.1-pro-preview: The rails in the foreground seem slightly inconsistent in thickness and do not appear to form a coherent, mechanically sound junction as they split towards the two buildings. (bottom-center, moderate)

**people_pose_or_placement**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The legs of the worker wearing the yellow jacket seem to melt or blend indistinctly into the dark mud and rail structure, lacking clear physical separation. (center, moderate)
- gemini-3.1-pro-preview: The worker in the yellow jacket is kneeling, but his lower legs are missing or completely blended into the muddy surface between the tracks. (center, strong)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-left, middle-right

- gpt-6-sol: The crouched worker's hands and tools are difficult to distinguish where they overlap the track. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right branch track lacks defined limbs; his body appears as an amorphous shape melting into the ground and the rails. (middle-right, strong)

**background_clutter**: score 4, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The orange traffic cones and the wooden pallets resting near the chain-link fence are misshapen and lack correct perspective and geometric definition. (middle-right, moderate)
- gemini-3.1-pro-preview: The orange traffic cones placed near the chain-link fence are misshapen and lack clear definition. (middle-left, moderate)

## x-group-L-5.jpg: mean P(AI) 0.42 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.30 / 0.20 / 0.20
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 1.00

**people_anatomy**: score 16, raised in 6/9 calls, at middle-left, center, middle-right

- gpt-6-sol: The workers' hands and tools where they meet the rail are too small and soft to check clearly for anatomical errors. (middle-left, weak)
- gpt-6-sol: The crouching workers’ hands and legs overlap, making some individual limbs difficult to distinguish. (middle-left, weak)
- gpt-6-sol: The workers' hands and their contact with the rail are hard to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The worker in the orange jacket (furthest right in the left group) lacks defined legs; his lower body melts into an indistinct dark shadow that merges with the ground and rails. (middle-left, moderate)

**track_geometry**: score 15, raised in 5/9 calls, at center, bottom-right, bottom-center, bottom-left

- claude-opus-5.5: The two track pairs diverge in a V, but neither connects to a switch or frog. The tracks on the left and right simply run apart toward separate depot doors, and the junction geometry where the tracks should meet is missing. (center, moderate)
- claude-opus-5.5: Two track pairs diverge from a single area but the tracks don't form a coherent switch; the left pair and right pair appear as separate curved grooved rails with no frog or switch blades, and the inner rails of each branch run separately without a junction (center, moderate)
- gemini-3.1-pro-preview: The outer right rail of the right-hand track completely disappears halfway down the frame, leaving only a single inner rail continuing to the bottom edge of the image. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner rails of both tracks diverge from a set of parallel lines at the bottom center without any physical switch mechanism, points, or frog, which is physically impossible for a rail junction. (bottom-center, strong)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The tools being handled by the group of three workers are amorphous, dark blobs that lack any recognizable mechanical structure, handles, or clear purpose. (middle-left, moderate)
- gemini-3.1-pro-preview: The objects the workers are supposed to be holding or working on are completely indistinct, appearing as formless grey and brown blobs rather than actual tools. (middle-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center, middle-left

- gemini-3.1-pro-preview: Near the fence, the orange traffic cones are misshapen and flat, while the stack of pallets consists only of horizontal slats lacking any vertical support blocks. (center, moderate)
- gemini-3.1-pro-preview: Behind the wire fence, the stacked wooden pallets and orange traffic cones are warped, melting into one another without defined edges or structure. (middle-left, moderate)

**camera_or_windscreen**: score 2, raised in 2/9 calls, at whole-image, top-center

- gemini-3.1-pro-preview: The image features simulated water droplets on a lens or window, which is a common stylistic choice in AI generation used to add artificial grit and obscure finer details that might otherwise reveal the image's synthetic nature. (whole-image, weak)
- gemini-3.1-pro-preview: There are artificial-looking water droplets applied uniformly across the upper portion of the image that do not refract the background accurately, a common post-processing or generative artifact. (top-center, weak)

## x-group-L-6.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 11, raised in 5/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The crouched workers' overlapping hands and legs are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The crouching workers’ hands and gear are difficult to distinguish and appear partly merged at this distance. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right track has a severely mangled lower body; it appears as a dark, formless blob with disjointed leg-like shapes sticking out in unnatural directions. (middle-right, strong)
- gemini-3.1-pro-preview: In the group of three workers on the left, their bodies blend together unnaturally. The worker in the orange jacket lacks distinct legs, and the two workers in yellow appear to merge into each other. (middle-left, strong)

**track_geometry**: score 6, raised in 2/9 calls, at middle-right, bottom-center

- gemini-3.1-pro-preview: On the right-hand track, behind the kneeling worker, the inner (left) rail fades out and disappears completely into the wet pavement, while the outer (right) rail appears to duplicate or split illogically. (middle-right, strong)
- gemini-3.1-pro-preview: The track junction is physically impossible. The two grooved rails entering from the bottom become the outer rails of the left and right branches, while the inner rails of the branches form a 'V' that terminates abruptly in the ground without connecting to the bottom track. (bottom-center, strong)

**people_clothing_or_gear**: score 5, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The reflective orange striping on the yellow jackets in the left-hand group is chaotic, fragmented, and does not logically follow the construction or folds of a real garment. (middle-left, strong)
- gemini-3.1-pro-preview: The group of three workers on the left track have limbs and tools that seem to melt or blend into each other and the track, lacking clear structural separation. (middle-left, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at center

- gpt-6-sol: The overlapping workers' hands and equipment are difficult to distinguish, leaving some local shapes ambiguous. (center, weak)
- gemini-3.1-pro-preview: The chain-link fence in the background has a highly inconsistent mesh pattern, dissolving from a criss-cross grid into smudged, solid grey areas. (center, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The three workers on the left track merge into a confusing mass of high-visibility clothing. The limbs and tools of the middle and rightmost workers intertwine illogically, making it impossible to distinguish individual body parts. (middle-left, strong)

## x-group-L-7.jpg: mean P(AI) 0.50 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.85 / 0.72
- google/gemini-3.1-pro-preview: 0.98 / 0.01 / 0.99

**people_anatomy**: score 14, raised in 7/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The crouched workers overlap, making some hands and legs difficult to distinguish. (center, weak)
- gpt-6-sol: The crouching workers’ hands and legs are difficult to distinguish where they overlap. (middle-left, weak)
- claude-opus-5.5: Three kneeling workers clustered with merged limbs and indistinct hands/tools; legs and boots blend together (middle-left, moderate)
- claude-opus-5.5: The three kneeling workers merge together; their limbs and tools are indistinct and the hands blend into the rail area. (middle-left, moderate)

**track_geometry**: score 14, raised in 5/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Two tram tracks diverge into separate branches with no visible switch blades or frog; tracks just split as separate grooved rails with a gravel wedge between, physically implausible junction (center, moderate)
- claude-opus-5.5: Inner rails of each branch run in odd paired grooves; left branch's right rail and right branch's left rail curve smoothly without proper gauge consistency (bottom-center, moderate)
- claude-opus-5.5: The two tram track pairs diverge as separate parallel sets with no actual switch, frog or connecting rails; the middle area becomes a gravel wedge with no physical junction, which is implausible for a depot fan. (center, moderate)
- claude-opus-5.5: The two grooved track pairs approach each other in the foreground but have no visible switch, frog or junction. The concrete strips and gravel V between them look smooth and schematic rather than built. (center, moderate)

**people_pose_or_placement**: score 6, raised in 4/9 calls, at middle-right, middle-left

- claude-opus-5.5: The lone worker on the right floats slightly above the rail, and his legs and the bag beside him are smeared. (middle-right, weak)
- claude-opus-5.5: The lone worker on the right kneels with a bag beside the rail in a posed way, with the rail apparently passing under his knee and no clear task. (middle-right, weak)
- gemini-3.1-pro-preview: The right worker's lower body is poorly defined, with the left leg appearing to end in a stump or merge into the ground. (middle-right, moderate)
- gemini-3.1-pro-preview: The legs of the rightmost worker in the group of three seem to blend unnaturally with the ground and the worker next to them, lacking clear separation or logical positioning. (middle-left, moderate)

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at whole-image, middle-left, bottom-left, bottom-center

- gpt-6-sol: The workers and distant warehouse details are soft, limiting how confidently small features can be checked. (whole-image, weak)
- gpt-6-sol: The workers’ hands and equipment are too soft to make out clearly, leaving a little uncertainty about their exact shapes. (middle-left, weak)
- claude-opus-5.5: Asphalt and puddles have smooth, painterly texture lacking fine sensor grain (bottom-left, weak)
- claude-opus-5.5: The wet asphalt has a smooth, painterly texture and the rail grooves are overly clean and uniformly curved. (bottom-center, moderate)

**camera_or_windscreen**: score 5, raised in 4/9 calls, at top-center

- claude-opus-5.5: Rain droplets on lens rendered as soft blobs uniformly over the upper building area, typical of generated 'cinematic' look (top-center, weak)
- claude-opus-5.5: Raindrop bokeh on the lens is evenly distributed over the sky and building but absent from the lower frame, an overlay-like look. (top-center, weak)
- claude-opus-5.5: Uniform out-of-focus raindrop bokeh is spread evenly across the upper frame, a common cinematic trope in AI video frames. The 1280x720 frame size also matches typical AI video output. (top-center, weak)
- gemini-3.1-pro-preview: The spots in the upper half of the image, intended to mimic water droplets on a lens or glass pane, appear as perfectly uniform, flat circles that fail to refract the light or background realistically as actual water would. (top-center, moderate)

## x-group-L-8.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.99

**people_anatomy**: score 15, raised in 5/9 calls, at middle-right, middle-left

- gpt-6-sol: The right-hand worker’s limbs are difficult to distinguish where they overlap the rail and dark objects. (middle-right, weak)
- gpt-6-sol: The three crouching workers overlap, making some arms and legs hard to distinguish. (middle-left, weak)
- gpt-6-sol: The crouching workers' hands and lower legs are hard to distinguish where they overlap. (middle-left, weak)
- gemini-3.1-pro-preview: The group of three workers on the left track merge into one another. The middle worker in the orange jacket lacks a clearly defined head, and their lower bodies melt indiscriminately into the wet ground. (middle-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The orange traffic cones and wooden pallets near the fence are misshapen and melt into the surrounding objects and ground. (middle-left, moderate)
- gemini-3.1-pro-preview: The stacked wooden pallets and orange traffic cones behind the fence are heavily smudged and lack defined, realistic shapes. (center, moderate)

**camera_or_windscreen**: score 4, raised in 2/9 calls, at whole-image, top-center

- gemini-3.1-pro-preview: There are simulated water droplets on the camera lens. While realistic, this is a common artifact added by AI image generators to simulate a "gritty" photographic look, which contrasts with the severe structural failures in the scene. (whole-image, weak)
- gemini-3.1-pro-preview: The out-of-focus raindrops appear as uniform, translucent gray circles lacking natural bright highlights or any optical distortion of the background, resembling a digital overlay rather than real water on a lens. (top-center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The single track coming from the bottom splits into two diverging tracks, but the inner rails of the diverging tracks simply meet at a point and terminate. They do not connect to a switch mechanism or the lower rails, creating an impossible geometry where a vehicle would derail. (bottom-center, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The diverging rails lack any functional junction components such as switch blades (points) or a frog, and instead look like simple parallel lines drawn onto the pavement. (bottom-center, strong)

## x-group-R-4.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, bottom-right

- gemini-3.1-pro-preview: The inner rails of both the left and right tracks fail to connect at a switch or frog; instead, they simply fade out and terminate abruptly in the concrete pavement. (bottom-center, strong)
- gemini-3.1-pro-preview: The railway tracks diverge to the left and right without any connecting switch mechanism or frog; the rails simply appear side-by-side and then bend in opposite directions. (bottom-center, strong)
- gemini-3.1-pro-preview: The track curving to the right appears to consist of three or more wobbly, parallel rails or grooves, which is structurally nonsensical for standard train or tram tracks. (bottom-right, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and small equipment overlap and are difficult to distinguish individually. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small objects at the right rail are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the workers on the right, and the objects they are interacting with on the track, are rendered as formless blobs rather than distinct tools or mechanical parts. (middle-right, strong)
- gemini-3.1-pro-preview: The objects or tools being handled by the group of three workers are indistinguishable, merging into dark, formless blobs that blend directly into the ground and rails. (middle-right, strong)

**people_anatomy**: score 8, raised in 3/9 calls, at middle-right

- gemini-3.1-pro-preview: The group of three workers is fused together into an indistinct mass; the central figure lacks a clear lower body, and their limbs and torsos blend unrecognizably into one another and the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the far right of the group has poorly defined lower anatomy, with legs and boots melting into vague dark shapes that lack physical structure. (middle-right, moderate)
- gemini-3.1-pro-preview: The cluster of three workers on the right track merges together; the central worker lacks defined legs, and the rightmost worker's hands and tools form an amorphous, undefined blob. (middle-right, strong)

**background_clutter**: score 7, raised in 3/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The chain-link fence behind the tracks loses its geometric pattern and devolves into a chaotic, messy texture, particularly visible between the two groups of workers. (center, moderate)
- gemini-3.1-pro-preview: The chain-link fence behind the tracks has a chaotic, inconsistent mesh that dissolves into random lines rather than forming a proper repeating grid pattern. (center, moderate)
- gemini-3.1-pro-preview: The wooden pallet leaning near the traffic cones has unnaturally thin, densely packed slats that do not resemble standard pallet construction. (center, weak)
- gemini-3.1-pro-preview: The orange traffic cones and stacked wooden pallets behind the chain-link fence are distorted, lack straight edges, and appear to be melting or blending together. (middle-left, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The vertical lines of the corrugated metal siding above the dark open doorway are noticeably wavy and uneven, failing to maintain the rigid structure of real metal sheeting. (top-right, moderate)

## x-group-R-5.jpg: mean P(AI) 0.06 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.12 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**tools_or_small_objects**: score 3, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers' hands and equipment near the right rail are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and equipment where they meet the rail are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The dark equipment beside the workers' hands is difficult to distinguish and has an indistinct shape. (middle-right, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Somewhat staged-looking symmetric shot of workers on both branches, though it resembles a corporate video still (whole-image, weak)

**people_pose_or_placement**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The three workers overlap closely, making some limbs hard to separate. (middle-right, weak)

## x-group-R-6.jpg: mean P(AI) 0.46 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.27 / 0.25 / 0.60
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 12, raised in 4/9 calls, at center, middle-right

- gpt-6-sol: The left worker’s hands and lower legs have little discernible detail at this distance. (center, weak)
- gemini-3.1-pro-preview: The hands of the workers on the right merge seamlessly into the tools and rails they are supposedly holding, lacking any defined fingers or realistic grip. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the far right of the group is hunched over and lacks distinct limbs, appearing as an amorphous blob of clothing with a misshapen yellow hard hat. (middle-right, strong)
- gemini-3.1-pro-preview: The right foot and boot of the middle worker in the yellow jacket blend seamlessly into the wet ground without a clear edge or definition. (center, moderate)

**tools_or_small_objects**: score 12, raised in 5/9 calls, at middle-right, center, middle-left

- gpt-6-sol: The overlapping tools, hands, and rails around the three workers are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The tools and workers' hands at the right-hand rail are difficult to distinguish clearly, leaving their exact interaction ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The tools being used by the workers are rendered as indistinct, grey, amorphous blobs rather than recognizable mechanical equipment. (center, strong)
- gemini-3.1-pro-preview: The long silver tool being handled by the worker in the orange and yellow jacket bends unnaturally and appears to merge directly into the rail groove rather than interacting with it realistically. (center, strong)

**track_geometry**: score 10, raised in 4/9 calls, at whole-image, bottom-center, middle-right, bottom-right

- claude-opus-5.5: Two curved grooved tracks diverge toward separate doors with no visible switch, frog or crossing. Each rail pair's gauge appears inconsistent, and the inner rails near the bottom center sit oddly close together. (whole-image, moderate)
- gemini-3.1-pro-preview: The rails do not form a logical turnout or parallel tracks; they have inconsistent spacing, split abruptly, and fade into the concrete in ways that would not physically function. (bottom-center, strong)
- gemini-3.1-pro-preview: The rail lines underneath the group of three workers split into a confusing, inconsistent number of parallel grooves that do not form a functional track gauge or switch mechanism. (middle-right, strong)
- gemini-3.1-pro-preview: The flangeway (groove) of the inner rail on the right track loses its definition and merges into a messy, inconsistent line near where the workers are grouped. (bottom-right, moderate)

**people_pose_or_placement**: score 5, raised in 2/9 calls, at center

- claude-opus-5.5: The orange-vested worker on the right track kneels directly on the rail, holding a bag that merges into his leg. The long bar tool spans the track ambiguously between him and the white-helmet worker. (center, moderate)
- gemini-3.1-pro-preview: The lower body and leg of the worker in the orange vest on the right track appear to melt directly into the wet ground. (center, strong)

**background_clutter**: score 5, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The chain-link fence in the background has an inconsistent mesh pattern that degrades into solid smudges and irregular lines instead of a uniform grid. (middle-left, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background features an inconsistent, garbled mesh pattern rather than a regular, structured grid. (center, strong)

## x-group-R-7.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.35 / 0.27 / 0.60
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**track_geometry**: score 7, raised in 3/9 calls, at center, bottom-right, middle-left

- claude-opus-5.5: The two grooved tracks run separately toward the camera, with a gravel wedge between them and no visible switch or frog joining them. As a real yard layout this is somewhat unusual, though possible. (center, weak)
- gemini-3.1-pro-preview: The rails on the right curve are uneven, lack a consistent gauge, and appear to melt or blur into the ground near the workers. (bottom-right, strong)
- gemini-3.1-pro-preview: As the rails of the left track curve towards the building entrance, they lose their parallel grooved structure, wobble, and blend unnaturally into the ground surface. (middle-left, strong)

**people_pose_or_placement**: score 6, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The group of three workers consists of indistinct, overlapping bodies and limbs that blend confusingly into each other and the dark work area. (middle-right, strong)
- gemini-3.1-pro-preview: The three workers clustered on the right track merge into an indistinct mass, with their lower bodies and limbs fusing into each other and the ground in a non-physical way. (middle-right, strong)

**tools_or_small_objects**: score 6, raised in 2/9 calls, at middle-right, bottom-left

- gemini-3.1-pro-preview: The objects or tools the group of workers are manipulating are formless, undefined dark blobs lacking recognizable structure. (middle-right, strong)
- gemini-3.1-pro-preview: The brown bag or piece of equipment resting beside the worker on the left track melts directly into the wet asphalt and the rail without a clear boundary or shadow. (bottom-left, strong)

**people_anatomy**: score 5, raised in 5/9 calls, at middle-right

- gpt-6-sol: The three workers’ hands and equipment overlap in a dark cluster, making some individual limbs hard to distinguish. (middle-right, weak)
- gpt-6-sol: The workers’ hands and legs are difficult to distinguish where they overlap near the rails. (middle-right, weak)
- claude-opus-5.5: The three crouching workers' hands and tools are indistinct and blend together at the rail. This is ambiguous given the distance and motion. (middle-right, weak)
- claude-opus-5.5: The three clustered workers overlap closely, and their hands and limbs are hard to separate, though nothing is clearly malformed. (middle-right, weak)

**background_clutter**: score 5, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The orange safety cones or bollards behind the wire fence are irregularly shaped and asymmetric. (middle-left, moderate)
- gemini-3.1-pro-preview: The chain-link fence, traffic cones, and pallets in the mid-ground are structurally misshapen, with the fence posts appearing to float or dissolve into the ground below them. (center, strong)

## x-group-R-8.jpg: mean P(AI) 0.62 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 18, raised in 5/9 calls, at center, bottom-left, bottom-center, middle-right

- claude-opus-5.5: The two track pairs diverge oddly: the left pair's inner rail and the right pair's inner rail curve apart with a wide gravel wedge between them, but there is no frog, switch blades, or plausible junction connecting them; the geometry doesn't form a functional turnout. (center, strong)
- claude-opus-5.5: Rails appear as grooved embedded strips with inconsistent gauge; the left track's rails widen in spacing toward the foreground in a way not consistent with perspective. (bottom-left, moderate)
- claude-opus-5.5: Two pairs of grooved rails curve away illogically; the left track's rails diverge and the inner rails of each pair run into separate branches with no switch, frog, or connection, forming an implausible layout. (center, strong)
- claude-opus-5.5: Tracks diverge from a common point but the left and right branches don't form a coherent switch; rails of the two branches seem to separate without frog/points, and inner rails run parallel oddly into the gravel wedge (bottom-center, moderate)

**texture_noise_or_sharpness**: score 10, raised in 5/9 calls, at center, whole-image

- gpt-6-sol: The workers’ hands and the objects beside the rails are difficult to resolve, leaving some fine details uncertain. (center, weak)
- claude-opus-5.5: Overall smooth, slightly waxy rendering of wet asphalt and corrugated walls with little fine detail; frame resembles a video-model still. (whole-image, moderate)
- claude-opus-5.5: The image has a smooth, painterly wet asphalt texture and soft, mushy detail in the fence and pallets, typical of generative output. (whole-image, moderate)
- claude-opus-5.5: Smooth, slightly waxy rendering of wet asphalt and people faces with little genuine detail; video-generator look (whole-image, moderate)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-right, middle-left

- gpt-6-sol: The workers' hands and nearby items at the rails are hard to distinguish and seem to blend together in places. (middle-right, weak)
- gemini-3.1-pro-preview: The bag or piece of equipment sitting next to the solitary worker on the left track is an amorphous, poorly defined blob lacking mechanical detail. (middle-left, moderate)
- gemini-3.1-pro-preview: The bag or piece of equipment next to the kneeling worker on the left blends seamlessly into his knee and the steel rail. (middle-left, moderate)
- gemini-3.1-pro-preview: The orange safety cones near the fence are severely malformed, looking melted or like amorphous blobs rather than structured cones. (middle-left, strong)

**background_clutter**: score 8, raised in 3/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The traffic cones and adjacent objects near the fence by the pallet are misshapen, with one red object looking melted or structurally unsound. (middle-left, moderate)
- gemini-3.1-pro-preview: The orange traffic cones and the wooden pallet near the fence are misshapen and appear to be melting into one another. (middle-left, strong)
- gemini-3.1-pro-preview: The chain-link fence behind the workers lacks a coherent grid structure, degrading into chaotic squiggles and noise upon closer inspection. (center, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-right

- gpt-6-sol: The three crouching workers overlap, making some hands and legs difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The rightmost worker in the yellow hi-vis has a right arm that appears to dissolve into the wet ground, lacking clear hand or wrist structure. (middle-right, strong)
- gemini-3.1-pro-preview: The lower bodies of the three workers on the right are highly distorted, with legs disappearing into the ground or blending together into indistinct shapes. (middle-right, strong)

## y-group-L-4.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**track_geometry**: score 11, raised in 3/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The steel rails near the left group of workers are inconsistent, with the inner rail appearing to break, warp, or merge irregularly into the surrounding concrete. (bottom-left, strong)
- gemini-3.1-pro-preview: The rails underneath the group of three workers split and melt into the concrete without forming a coherent switch mechanism or continuous lines. (bottom-left, strong)
- gemini-3.1-pro-preview: The track near the single worker curves towards the depot but fades out and disappears into the ground before reaching the building entrance. (bottom-right, strong)
- gemini-3.1-pro-preview: The metal rails running through the group of three workers appear to multiply, split, and merge irregularly into the concrete, lacking consistent geometric continuity. (bottom-left, moderate)

**people_anatomy**: score 10, raised in 4/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The hands and equipment between the three workers overlap enough that individual shapes are hard to distinguish. (bottom-center, weak)
- gemini-3.1-pro-preview: The hands and any tools held by the middle and right workers in the left group are merged into a garbled, undefined jumble of shapes. (bottom-left, strong)
- gemini-3.1-pro-preview: The rightmost worker in the left group has an arm that extends downwards and ends in an indistinct, smooth grey blob rather than a recognizable hand or tool. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower body and legs of the middle worker in the yellow vest are indistinct and appear to melt or blend unnaturally into the dark mass beneath him. (bottom-left, strong)

**buildings**: score 9, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The complex metal truss structure of the roof features multiple intersecting beams that simply end abruptly in mid-air or merge illogically with other elements. (top-center, strong)
- gemini-3.1-pro-preview: The steel truss structure of the roof features diagonal supports that float disconnectedly, cross each other without joints, and melt into adjacent beams. (top-center, strong)
- gemini-3.1-pro-preview: The cross-bracing structural metalwork in the roof trusses above the shed entrance features lines that intersect illogically or fade out without proper joints. (top-center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-right, bottom-center

- gpt-6-sol: The dark object beside the right-hand worker is indistinct. (bottom-right, weak)
- gpt-6-sol: The hands and small equipment between the left-side workers are difficult to distinguish precisely. (bottom-center, weak)
- gemini-3.1-pro-preview: The dark object resting on the ground to the right of the lone worker is an undefined, formless blob rather than a discernible bag or piece of equipment. (bottom-right, moderate)
- gemini-3.1-pro-preview: Near the kneeling worker on the right, there is a distorted, white and black blob that resembles a mangled boot or a small animal, failing to resolve into a recognizable tool or object. (bottom-right, strong)

**people_clothing_or_gear**: score 4, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The hard hats and attached ear protection worn by the workers on the left lack sharp definition, appearing somewhat melted and structurally nonsensical upon close inspection. (bottom-left, moderate)
- gemini-3.1-pro-preview: The dark bag or equipment resting on the ground to the right of the solitary worker blends unnaturally into the cast shadow and the concrete texture. (bottom-right, moderate)

## y-group-L-5.jpg: mean P(AI) 0.48 (fails)

- anthropic/claude-opus-5.5: 0.35 / 0.40 / 0.75
- openai/gpt-6-sol: 0.04 / 0.06 / 0.03
- google/gemini-3.1-pro-preview: 0.75 / 1.00 / 0.98

**track_geometry**: score 20, raised in 6/9 calls, at bottom-left, bottom-right, center

- claude-opus-5.5: Left track rails curve into the depot but the inspection pits and rail lines inside the shed don't clearly connect to the curved grooved rails in the foreground; rails appear to merge into concrete ambiguously (bottom-left, moderate)
- claude-opus-5.5: Left track rails curve inward and converge oddly; the inner rail pair seems to merge with groove-embedded tram rails inconsistently, rail spacing looks uneven near the workers (bottom-left, moderate)
- claude-opus-5.5: Right track curves toward depot but doesn't clearly connect to any of the pit tracks in the shed; rails just fade into concrete (bottom-right, moderate)
- claude-opus-5.5: Left track rails curve toward the depot but appear to end or merge abruptly near the shed entrance without a clear connection to the inspection pit tracks. (bottom-left, moderate)

**people_anatomy**: score 16, raised in 7/9 calls, at bottom-left, middle-right, bottom-right

- claude-opus-5.5: Cluster of four workers overlaps awkwardly; limbs and bodies blend, the rear worker with white helmet is partially fused with neighbors, faces indistinct (bottom-left, moderate)
- claude-opus-5.5: Group of four crouching workers has merged/ambiguous limbs and bodies; the back worker's body overlaps unclearly with others (bottom-left, moderate)
- claude-opus-5.5: Lone kneeling worker on the right has a smeared, poorly defined lower body and boots. (middle-right, weak)
- gpt-6-sol: The four workers overlap closely, making some arms and tools difficult to distinguish. (bottom-left, weak)

**tools_or_small_objects**: score 11, raised in 5/9 calls, at bottom-right, bottom-left

- claude-opus-5.5: Bag next to kneeling worker and object at his feet are lumpy and undefined (bottom-right, weak)
- claude-opus-5.5: Bag beside right worker and items on ground are blobby, not clearly identifiable (bottom-right, weak)
- gemini-3.1-pro-preview: Blobby black shapes near worker. (bottom-right, moderate)
- gemini-3.1-pro-preview: The objects resting on the ground near the worker on the right track are amorphous, dark blobs that do not resemble actual tools or bags. (bottom-right, moderate)

**buildings**: score 5, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: Roof trusses have inconsistent diagonals. (top-center, moderate)
- gemini-3.1-pro-preview: The metal roof trusses in the structure lack geometric coherence, with diagonal braces that disappear or merge nonsensically into other beams. (top-center, moderate)
- gemini-3.1-pro-preview: While the foreground roof trusses are somewhat detailed, the structural elements towards the far end of the shed dissolve into blurry, nonsensical intersecting lines. (top-center, weak)

**composition_or_staging**: score 4, raised in 4/9 calls, at whole-image

- claude-opus-5.5: Highly symmetrical, cinematic stock-like staging with group on one track and lone worker on the other, a typical prompt-like layout (whole-image, weak)
- claude-opus-5.5: Symmetric staged composition with workers neatly placed on each branch, cinematic film-like color grade typical of generated stock imagery (whole-image, weak)
- claude-opus-5.5: Symmetric staging of workers at two diverging tracks in front of a depot looks like a generated stock scene. (whole-image, weak)
- gpt-6-sol: The shed's near-symmetrical framing and workers positioned on both branches look somewhat staged. (whole-image, weak)

## y-group-L-6.jpg: mean P(AI) 0.58 (fails)

- openai/gpt-6-sol: 0.07 / 0.06 / 0.06
- anthropic/claude-opus-5.5: 0.68 / 0.68 / 0.72
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 21, raised in 6/9 calls, at bottom-left, bottom-right, bottom-center, center

- claude-opus-5.5: Left track rails curve and the inner rail merges oddly; the two rails of the left branch don't keep consistent gauge, with the right rail running under kneeling workers into a groove that fades into concrete (bottom-left, moderate)
- claude-opus-5.5: Right branch rails converge toward the depot pits but the left rail of the right track arcs into nowhere near center, no clear connection to the pit tracks (bottom-right, moderate)
- claude-opus-5.5: Embedded grooved rails on left branch: rails converge and curve oddly; the inner rail near the kneeling workers seems to merge with another rail line inconsistently with gauge (bottom-center, moderate)
- claude-opus-5.5: Left track rails curve oddly; the inner rail near workers seems to merge/diverge inconsistently with the outer rail, and the gauge appears to vary along the curve (bottom-left, moderate)

**people_anatomy**: score 12, raised in 4/9 calls, at center, bottom-left, bottom-right, middle-left

- claude-opus-5.5: Workers' hands and tools are indistinct; the orange-vest worker's legs and bag blend together ambiguously (center, weak)
- gemini-3.1-pro-preview: The kneeling worker in the orange vest lacks distinct legs, which instead merge into an amorphous dark blob. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker on the right track has misshapen, indistinct boots and arms that appear fused seamlessly into their torso. (bottom-right, strong)
- gemini-3.1-pro-preview: The boots and legs of the worker kneeling on the right are malformed and appear to melt into the ground. (bottom-right, strong)

**overhead_wires_or_poles**: score 8, raised in 2/9 calls, at top-left, top-center, top-right

- gemini-3.1-pro-preview: The overhead wire connected to the pole on the left fades out and appears to pass illogically into the solid roof structure. (top-left, moderate)
- gemini-3.1-pro-preview: The thick vertical pole on the left side of the shed entrance appears to pass directly through the horizontal steel beams of the roof structure. (top-center, strong)
- gemini-3.1-pro-preview: Several thin overhead wires in the sky above the right side of the shed end abruptly in mid-air without connecting to any supports. (top-right, strong)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The metal roof trusses inside the shed contain chaotic diagonal struts that intersect randomly and fail to connect to main beams logically. (top-center, strong)
- gemini-3.1-pro-preview: The structural steelwork in the shed's roof is a chaotic jumble of randomly intersecting, broken, and non-parallel beams that do not form a logical, load-bearing truss system. (top-center, strong)

**composition_or_staging**: score 5, raised in 4/9 calls, at bottom-center, whole-image

- gpt-6-sol: All four workers are kneeling along the two track branches, a somewhat unusually tidy arrangement. (bottom-center, weak)
- gpt-6-sol: All four workers are kneeling in similar positions on the two branches, giving the scene a slightly staged appearance. (bottom-center, weak)
- claude-opus-5.5: Cinematic film-like grading with workers neatly arranged kneeling on tracks in a staged way typical of generated stock imagery (whole-image, weak)
- claude-opus-5.5: Cinematic stock-like framing with soft film grain and symmetrical depot, typical of video-generator output (whole-image, moderate)

## y-group-L-7.jpg: mean P(AI) 0.41 (fails)

- anthropic/claude-opus-5.5: 0.15 / 0.15 / 0.15
- openai/gpt-6-sol: 0.12 / 0.12 / 0.07
- google/gemini-3.1-pro-preview: 1.00 / 0.98 / 0.98

**track_geometry**: score 17, raised in 3/9 calls, at bottom-left, bottom-right, center

- gemini-3.1-pro-preview: The rails on the left track are disjointed, wobble unnaturally, and seem to disappear and reappear at different angles beneath the three kneeling workers. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the right-hand track abruptly terminates directly underneath the kneeling worker's leg. (bottom-right, strong)
- gemini-3.1-pro-preview: The rails curve with an inconsistent gauge, and the flangeway groove seems to disappear or blend flatly into the concrete near the bottom edge of the frame. (bottom-left, strong)
- gemini-3.1-pro-preview: Where the curving tracks approach the straight tracks leading into the shed, they appear to just fade or melt into the concrete rather than connecting via actual physical switch points. (center, strong)

**buildings**: score 9, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The steel roof trusses and beams inside the depot structure feature chaotic, non-sensical geometry with lines intersecting illogically or ending in mid-air. (top-center, strong)
- gemini-3.1-pro-preview: The metal beams forming the roof trusses are chaotic, with several struts intersecting illogically or terminating without connecting to another support. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal beams making up the roof trusses form chaotic, criss-crossing patterns that do not connect logically and sometimes disappear midway. (top-center, strong)

**people_anatomy**: score 6, raised in 3/9 calls, at bottom-left, bottom-right

- gpt-6-sol: The workers’ hands and the objects between them are difficult to distinguish clearly. (bottom-left, weak)
- gemini-3.1-pro-preview: The worker's hands and whatever tool he is supposedly holding are fused into an indistinct, muddy blob. (bottom-right, moderate)
- gemini-3.1-pro-preview: The boots of the lone worker on the right are highly deformed, appearing mangled and blending unnaturaly into the ground and the rail. (bottom-right, strong)

**composition_or_staging**: score 3, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Symmetrical, stock-footage-like composition with workers neatly placed on both rails, slightly staged (whole-image, weak)
- claude-opus-5.5: Symmetrical staged composition with workers neatly placed on each branch looks like a stock/commercial shoot, slightly posed (whole-image, weak)
- claude-opus-5.5: Symmetric staged shot with workers neatly positioned on both tracks, typical of stock footage but also of AI composition. (whole-image, weak)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at bottom-left

- gpt-6-sol: The workers’ hands and equipment where they meet the rail are difficult to distinguish precisely. (bottom-left, weak)
- gemini-3.1-pro-preview: The objects or tools the workers are interacting with on the ground appear as undefined, blended blobs rather than distinct, identifiable items. (bottom-left, moderate)

## y-group-L-8.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.06 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.02

**track_geometry**: score 9, raised in 2/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The inner rail of the right-hand curved track abruptly disappears into the concrete and does not physically connect to any track leading into the shed. (center, strong)
- gemini-3.1-pro-preview: The tracks curving into the foreground do not align or logically connect with the straight tracks over the inspection pits inside the shed; there is a gap of solid concrete with no switch mechanisms visible. (middle-left, strong)
- gemini-3.1-pro-preview: The yellow painted lines marking the edges of the inspection pits in the background shed are disjointed, wavering, and do not follow correct linear perspective. (center, strong)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The structural steel truss work in the roof has diagonal struts that cross over each other incoherently and fail to connect at logical structural nodes. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal metal beams in the central roof truss are structurally nonsensical, with several beams ending abruptly mid-air or overlapping without connecting joints. (top-center, strong)

**people_anatomy**: score 5, raised in 3/9 calls, at middle-left, bottom-left

- gpt-6-sol: The three crouching workers overlap, making their hands and tools difficult to distinguish. (middle-left, weak)
- gpt-6-sol: The three crouching workers overlap, making some arms and legs difficult to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: In the group of three workers on the left, the middle figure in the yellow hard hat has no discernible torso or limbs, blending in an amorphous way into the adjacent figures. (bottom-left, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The pile of items or equipment resting on the ground to the left of the workers is an indistinct, merged blob lacking recognizable features. (bottom-left, moderate)
- gemini-3.1-pro-preview: The brown rectangular object resting on the track next to the right-side worker lacks structural detail and definition, appearing more like a painted smudge. (bottom-right, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at top-center, whole-image

- gpt-6-sol: The roof trusses form a striking, nearly symmetrical pattern that could at first look generated, though the symmetry suits the building. (top-center, weak)
- claude-opus-5.5: Symmetric staged composition with workers on both branch tracks looks like a stock footage still, but this is plausible for a real shoot (whole-image, weak)

## y-group-R-4.jpg: mean P(AI) 0.47 (fails)

- openai/gpt-6-sol: 0.10 / 0.05 / 0.08
- anthropic/claude-opus-5.5: 0.65 / 0.65 / 0.68
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.98

**track_geometry**: score 13, raised in 5/9 calls, at center, bottom-right, bottom-center, bottom-left

- claude-opus-5.5: The inspection pits and their rails in the middle of the shed have no clear rail connections leading to them from the foreground; the two curved branch tracks sweep off left and right, leaving the depot floor between them mostly empty of rails. (center, moderate)
- claude-opus-5.5: The maintenance pits in the depot have no visible rails leading into them across the open concrete apron; the foreground tracks curve away to the sides instead of connecting to the depot roads, which is an unlikely layout for a working tram depot. (center, moderate)
- claude-opus-5.5: The right-hand branch rails run diagonally and seem to end in open concrete without a clear switch or connection to the other tracks. (bottom-right, moderate)
- claude-opus-5.5: The two foreground branch tracks curve away left and right but do not clearly connect to the inspection-pit tracks in the depot. The rails look smooth and somewhat idealized, with no visible switch or frog linking them. (bottom-center, moderate)

**composition_or_staging**: score 6, raised in 4/9 calls, at whole-image

- gpt-6-sol: The depot is framed almost symmetrically, with workers placed on both foreground branches. (whole-image, weak)
- claude-opus-5.5: The frame is 1280x720 with a cinematic film-grain look and neatly staged worker groups placed symmetrically on the two branches, a combination typical of AI video-generator stills. (whole-image, moderate)
- claude-opus-5.5: The scene is neatly staged: one worker on the left track and a group of three on the right, symmetrically framed. The 1280x720 frame and film-like grade suggest a frame from a generated video. (whole-image, weak)
- claude-opus-5.5: Very symmetric, cinematic framing: one worker on the left branch and a neat group of three on the right, all kneeling in posed positions. The 1280x720 frame size is typical of AI video-generator stills. (whole-image, moderate)

**overhead_wires_or_poles**: score 6, raised in 4/9 calls, at top-center, center, middle-left

- claude-opus-5.5: Support poles stand on the open floor just next to the track paths; the roof trusses are fairly coherent but show some irregular repetition. (top-center, weak)
- claude-opus-5.5: A pole appears to stand between or in the inspection pits far back in the depot, and the overhead wires are faint and indistinct. (center, weak)
- claude-opus-5.5: Tall poles stand isolated in the open floor and carry little visible wiring for a tram depot. The overhead lines are faint and incomplete. (center, weak)
- gemini-3.1-pro-preview: The vertical pole appears to be rendered in front of the horizontal roof beam, yet its base is positioned on the ground inside the shed, creating a physical impossibility regarding depth and structure. (middle-left, strong)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof truss structure is highly irregular, with metal struts randomly changing thickness, bending, or failing to connect logically to the main beams. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal bracing members of the roof trusses show numerous structural inconsistencies, such as beams abruptly stopping, merging into one another, or crossing at impossible geometric angles. (top-center, strong)

**tools_or_small_objects**: score 5, raised in 4/9 calls, at bottom-right, middle-right, bottom-left

- gpt-6-sol: The workers’ hands and the small equipment where they meet the rail are difficult to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers' hands and tools overlap and are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers' hands and tools at the rail are difficult to distinguish and look slightly muddled. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of gear or equipment next to the worker on the left is rendered as a smooth, formless brown blob without recognizable details like straps, zippers, or individual tools. (bottom-left, moderate)

## y-group-R-5.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.04 / 0.06 / 0.08
- anthropic/claude-opus-5.5: 0.80 / 0.68 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 22, raised in 6/9 calls, at bottom-left, bottom-right, bottom-center, center, middle-right

- claude-opus-5.5: Left track rails curve and converge oddly; the left pair of rails do not run parallel with consistent gauge, appearing to splay apart toward the bottom (bottom-left, moderate)
- claude-opus-5.5: Right track rails pass directly under the kneeling workers, and the rail pair geometry doesn't match a consistent gauge or connect cleanly to the pits in the depot (bottom-right, moderate)
- claude-opus-5.5: Tracks in foreground curve and appear to merge/end ambiguously into the concrete; the left track's rails don't connect coherently to the inspection pits in the depot (bottom-center, moderate)
- claude-opus-5.5: Left track rails curve oddly; the left rail and right rail diverge inconsistently, with the left rail sweeping far left while the right rail runs straighter, not maintaining parallel gauge (bottom-left, moderate)

**people_anatomy**: score 9, raised in 3/9 calls, at bottom-right

- gemini-3.1-pro-preview: The three workers appear physically fused together; the central worker in the yellow vest lacks distinct arms, and the legs of the orange-vested worker on their left blend into them. (bottom-right, strong)
- gemini-3.1-pro-preview: The group of three workers displays severely distorted anatomy; their limbs merge into the ground or each other, and their hands are undefined, structureless blobs. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands and tools of the middle worker in the yellow vest on the right are blurry and melt directly into the dark rail structure beneath him. (bottom-right, strong)

**buildings**: score 8, raised in 4/9 calls, at top-center

- claude-opus-5.5: Roof truss structure is plausible but repetitive, with some members that seem to dissolve or fail to connect logically (top-center, weak)
- claude-opus-5.5: Roof truss lattice is repetitive yet irregular, with members that don't consistently join at nodes (top-center, weak)
- gemini-3.1-pro-preview: The structural trusses of the roof contain multiple diagonal beams that intersect nonsensically or terminate abruptly without connecting to joints. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof trusses is chaotic and structurally nonsensical, with lines intersecting randomly, floating, or terminating abruptly instead of forming a functional pattern. (top-center, strong)

**people_clothing_or_gear**: score 8, raised in 3/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The worker on the left has an indistinct, dark, blob-like object attached to their left side that merges with the ground. (bottom-left, moderate)
- gemini-3.1-pro-preview: The lone worker's body and clothing blend seamlessly into the concrete and track below, lacking clear boundaries or visible hands/tools. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower legs and boots of the leftmost worker in orange on the right track form an amorphous shape that blends indistinguishably into the concrete ground. (bottom-right, strong)

**tools_or_small_objects**: score 7, raised in 6/9 calls, at bottom-right, middle-right

- gpt-6-sol: The small objects around the right-hand workers are hard to distinguish individually. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and small equipment overlap in a way that makes individual items difficult to distinguish. (bottom-right, weak)
- gpt-6-sol: The tools and hands between the three workers are difficult to distinguish clearly. (middle-right, weak)
- claude-opus-5.5: Bags and tools on the ground near the workers are amorphous blobs without identifiable form (middle-right, weak)

## y-group-R-6.jpg: mean P(AI) 0.46 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.62 / 0.75 / 0.68
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.98

**track_geometry**: score 21, raised in 5/9 calls, at bottom-left, bottom-right, center

- claude-opus-5.5: Left track curves in from left but its rails do not connect coherently to the pit tracks in the depot; the curve seems to terminate into the paved area without clear continuation (bottom-left, moderate)
- claude-opus-5.5: Right track rails curve toward the right side and don't align with any depot pit; rail grooves appear to fade into pavement (bottom-right, moderate)
- claude-opus-5.5: Left track rails curve into the depot but don't clearly connect to any pit track; the left curve just fades into the asphalt near the shed without a consistent destination (bottom-left, moderate)
- claude-opus-5.5: Inspection pits inside the depot have no rails visibly leading into them from the curved tracks in the foreground; track layout is incoherent (center, moderate)

**people_anatomy**: score 7, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The overlapping hands and equipment among the three workers are difficult to make out precisely. (middle-right, weak)
- gpt-6-sol: The three crouching workers overlap, making their hands and the objects near the rail difficult to distinguish. (bottom-right, weak)
- claude-opus-5.5: Workers kneeling are rendered with vague hands and tools; the figures blend into one another and their legs look indistinct (middle-right, moderate)
- gemini-3.1-pro-preview: The group of three workers exhibits several anomalies: the leftmost worker's helmet is misshapen and 'melted', the middle worker appears to have a backpack fused into their body, and the rightmost worker has confusing leg positioning with a bag that blends into their leg and the ground. (bottom-right, strong)

**buildings**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is mostly coherent but repetitive, with some members ending ambiguously (top-center, weak)
- gemini-3.1-pro-preview: The metal trusses and support beams in the roof of the shed form a chaotic, irregular pattern where lines intersect at unnatural angles or end without proper structural support. (top-center, moderate)
- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof truss structure is highly inconsistent, with many beams terminating in mid-air or intersecting at impossible angles without proper connecting joints. (top-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 4/9 calls, at middle-right, top-center, whole-image

- gpt-6-sol: The workers’ hands and small items beside the right rail are indistinct, making those details difficult to verify. (middle-right, weak)
- gpt-6-sol: The distant depot interior is hazy and lacks detail, though this is also consistent with distance and the lighting. (top-center, weak)
- claude-opus-5.5: Cinematic graded look with soft smooth surfaces, typical of stock video/generated frames; little fine grime detail on pavement (whole-image, weak)
- claude-opus-5.5: Overall soft, slightly painterly rendering of roof trusses and background equipment, with smudgy detail typical of video generation frames (whole-image, weak)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Three workers clustered tightly kneeling on rail with somewhat merged bodies and indistinct hands/tools (middle-right, weak)
- claude-opus-5.5: Three workers crouched tightly together on the right track with blended, indistinct hands and tools; figures look staged and smeared (middle-right, moderate)

## y-group-R-7.jpg: mean P(AI) 0.61 (fails)

- openai/gpt-6-sol: 0.15 / 0.07 / 0.08
- anthropic/claude-opus-5.5: 0.70 / 0.80 / 0.72
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**track_geometry**: score 19, raised in 6/9 calls, at bottom-center, bottom-left, bottom-right, center

- claude-opus-5.5: Grooved embedded rails curve smoothly into a fan of depot roads; the left track's rails diverge oddly, with the left rail swinging far left while the right rail runs straight, and the tracks do not clearly connect to the pits ahead. (bottom-center, moderate)
- claude-opus-5.5: Left track rails curve smoothly but the inner rail appears to merge into a raised curb-like strip, and the rail pair spacing seems inconsistent as it recedes toward the shed. (bottom-left, moderate)
- claude-opus-5.5: Right track rails converge oddly; the left rail of the pair bends toward the right rail near the bottom, so the gauge looks inconsistent. (bottom-right, moderate)
- claude-opus-5.5: Left track rails curve inconsistently; the left rail and right rail don't maintain a constant gauge and the right rail sits on a raised curb-like strip, unlike typical embedded tram track (bottom-left, moderate)

**people_anatomy**: score 17, raised in 6/9 calls, at middle-right, bottom-left, bottom-right

- gpt-6-sol: The three crouching workers overlap, making some hands and legs difficult to distinguish. (middle-right, weak)
- claude-opus-5.5: Three kneeling workers have smudgy hands and tools, and their limbs merge into one another. The orange-vest worker's legs blend into the rail. (middle-right, moderate)
- claude-opus-5.5: Three crouching workers have merged, indistinct hands and tools; limbs blend together around the rail (middle-right, moderate)
- gemini-3.1-pro-preview: The worker squatting on the left appears to have the inner steel rail passing directly through their lower leg or foot, rather than resting on the ground next to or on it. (bottom-left, strong)

**buildings**: score 9, raised in 5/9 calls, at top-center

- claude-opus-5.5: The roof truss structure is mostly coherent but has some irregular, repeated bracing. The central column appears to land in the middle of the track area without a clear footing. (top-center, weak)
- claude-opus-5.5: The roof truss structure is mostly coherent but has slightly irregular repeating members, and the support columns stand in odd positions in the middle of the floor. (top-center, weak)
- gemini-3.1-pro-preview: The diagonal cross-bracing within the roof trusses is chaotic and nonsensical, with lines intersecting randomly rather than forming a functional structural pattern. (top-center, moderate)
- gemini-3.1-pro-preview: The zig-zag structural beams of the roof truss are highly irregular, with varying thicknesses, disconnected joints, and impossible intersecting angles. (top-center, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The overhead wire lines disappear into the structure and connect to the vertical pole in illogical ways, floating or terminating abruptly. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire extending from the left pole splits nonsensically into two separate lines and then fades out into the sky. (top-left, moderate)
- gemini-3.1-pro-preview: Overhead wires are visible against the sky, but they do not appear to align with the tracks below or continue logically into the depot to provide power to trams. (top-center, moderate)

**composition_or_staging**: score 5, raised in 4/9 calls, at whole-image

- gpt-6-sol: One worker on one branch and three grouped on the other create an unusually tidy arrangement. (whole-image, weak)
- claude-opus-5.5: Symmetric, cinematic framing with workers neatly placed on each branch, typical of stock-style generated scenes. (whole-image, weak)
- claude-opus-5.5: The layout is a staged, symmetric trolley-problem setup, with one person on the left branch and three on the right, viewed from a tram's perspective. (whole-image, moderate)
- claude-opus-5.5: Overly symmetrical staged layout with workers neatly placed on each branch, film-like color grade typical of video generators (whole-image, weak)

## y-group-R-8.jpg: mean P(AI) 0.50 (fails)

- openai/gpt-6-sol: 0.03 / 0.06 / 0.06
- anthropic/claude-opus-5.5: 0.78 / 0.75 / 0.80
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.98

**track_geometry**: score 19, raised in 5/9 calls, at center, bottom-right, bottom-left

- claude-opus-5.5: The foreground curved rails do not clearly connect to the inspection pits inside the depot; the rails seem to fade into the concrete with no visible switches or continuous track leading into the shed. (center, moderate)
- claude-opus-5.5: The right branch has an odd rail pairing: one rail runs under the kneeling workers and a second diverges with inconsistent gauge, and there is no clear groove or frog structure. (bottom-right, moderate)
- claude-opus-5.5: Left curved track rails appear to merge into flat ground and lack clear connection to depot tracks; rails curve without visible sleepers or proper groove continuity toward the pits (bottom-left, moderate)
- claude-opus-5.5: Right track pair has rails of inconsistent gauge; the right rail curves away diverging from left rail unrealistically (bottom-right, moderate)

**tools_or_small_objects**: score 10, raised in 6/9 calls, at bottom-right, bottom-left

- gpt-6-sol: The workers’ hands, tools, and rail meet in a visually crowded area where some details are hard to distinguish. (bottom-right, weak)
- claude-opus-5.5: The red tool on the ground and the tool bags are smeared and indistinct, and the workers' hands are not performing any clearly identifiable task on the rail. (bottom-right, weak)
- claude-opus-5.5: Red-handled tool on ground has indistinct shape (bottom-right, weak)
- claude-opus-5.5: Red-handled tool on the ground and tool bags are vague, with smeared shapes rather than defined tools (bottom-right, weak)

**people_anatomy**: score 8, raised in 4/9 calls, at bottom-right

- claude-opus-5.5: Workers' hands and tools blend into rail; orange worker's legs and boot posture ambiguous (bottom-right, weak)
- claude-opus-5.5: Hands of workers on rails are indistinct and merge with tools (bottom-right, weak)
- gemini-3.1-pro-preview: The worker in the orange jacket on the far right has a left leg and foot that lack anatomical structure and appear to melt into the ground. (bottom-right, strong)
- gemini-3.1-pro-preview: The middle worker in the group of three has an oddly shaped torso where their head, neck, and shoulders meld together, and their hands dissolve into an undefined blob merging with the rail. (bottom-right, strong)

**texture_noise_or_sharpness**: score 6, raised in 5/9 calls, at middle-right, whole-image

- gpt-6-sol: The right-hand workers' overlapping hands and tools are hard to distinguish; this could suggest generated detail, though distance and image softness also explain it. (middle-right, weak)
- gpt-6-sol: The workers’ hands and tools at the rail are hard to distinguish, giving that small area a somewhat muddled appearance. (middle-right, weak)
- claude-opus-5.5: The image has a uniform film-like grain with soft, mushy fine detail in the background equipment along the depot walls. (whole-image, weak)
- claude-opus-5.5: Film-like grain and soft cinematic grading, smooth uniform concrete texture (whole-image, weak)

**buildings**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The structural beams and trusses in the roof of the depot form chaotic, non-logical patterns with lines crossing randomly and some terminating in mid-air. (top-center, strong)
- gemini-3.1-pro-preview: In the roof trusses of the building, several of the thin diagonal tension rods fade out or terminate in mid-air before connecting to the main horizontal or vertical beams. (top-center, moderate)

## y-two-L-4.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.02

**track_geometry**: score 6, raised in 1/9 calls, at bottom-center, middle-right

- gemini-3.1-pro-preview: Rails extending from the central inspection pit in the background vanish abruptly into solid concrete in the foreground, lacking the necessary switch points or crossing mechanisms to logically connect with the diverging curved tracks. (bottom-center, strong)
- gemini-3.1-pro-preview: The track curving into the right side of the shed does not align with any visible inspection pit, appearing to aim directly into a flat, solid section of the concrete floor. (middle-right, strong)

**people_anatomy**: score 3, raised in 2/9 calls, at middle-left, bottom-left

- gpt-6-sol: The kneeling workers’ hands and tools are difficult to distinguish where they meet the rail. (middle-left, weak)
- gemini-3.1-pro-preview: The hands of the worker in the orange high-visibility jacket merge amorphously with the track and the tool they are holding, which itself appears as an undefined blob of metal. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at top-center, middle-left

- gpt-6-sol: The distant roof lattice and workshop details are soft and difficult to resolve, which leaves some uncertainty. (top-center, weak)
- gpt-6-sol: The workers’ hands and small objects beside the rail are indistinct, making their exact shapes hard to verify. (middle-left, weak)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The structural zig-zag metal trusses supporting the shed roof form a chaotic jumble of intersecting lines that terminate arbitrarily, failing to create a physically coherent support framework. (top-center, moderate)

**background_clutter**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: Distant equipment inside the shed is indistinct and hard to identify. (top-center, weak)

## y-two-L-5.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**people_anatomy**: score 2, raised in 2/9 calls, at bottom-center, middle-left

- gpt-6-sol: The kneeling workers' hands and tools are hard to distinguish at this distance, leaving some detail uncertain. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish, leaving some uncertainty about their exact positions. (middle-left, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Objects along the distant wall are indistinct, making their individual shapes difficult to verify. (middle-right, weak)

## y-two-L-6.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.62 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.30 / 0.98 / 0.02

**track_geometry**: score 5, raised in 2/9 calls, at center, bottom-left

- claude-opus-5.5: Tracks entering the depot terminate abruptly; the curved rails in foreground do not clearly connect to the inspection pits inside the shed, the left track curves into open concrete with no continuation (center, moderate)
- claude-opus-5.5: Two workers are kneeling between rails of the left curved track, with the rails appearing to merge/converge unnaturally near the bottom edge (bottom-left, weak)
- gemini-3.1-pro-preview: The rails running over the inspection pits inside the shed are visibly wobbly, misaligned, and inconsistent in width, lacking the rigid straightness of real steel rails. (center, moderate)

**composition_or_staging**: score 4, raised in 3/9 calls, at whole-image

- gpt-6-sol: The depot is framed with near symmetry around the central aisle, a polished composition that could also be generated. (whole-image, weak)
- claude-opus-5.5: Staged stock-footage look of workers in an otherwise empty depot; track layout in yard seems illogical (rails curving away rather than into pits) (whole-image, moderate)
- claude-opus-5.5: The shot is clean and stock-footage-like, with workers placed neatly in the foreground, which could also fit a generated scene. (whole-image, weak)

**buildings**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The structural cross-beams in the roof trusses are highly irregular, with metal bars intersecting at impossible angles and failing to connect logically to the main framework. (top-center, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The right leg and boot of the worker in the yellow jacket appear to merge seamlessly into the concrete ground without clear definition. (bottom-left, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, middle-right

- gpt-6-sol: The workers’ hands and the small object beside them are indistinct, which could conceal generated detail but is also consistent with the image resolution. (center, weak)
- gpt-6-sol: Distant workshop equipment is indistinct and difficult to resolve, which could conceal generated-detail errors, though distance also explains it. (middle-right, weak)

## y-two-L-7.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.15 / 0.12
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.99

**buildings**: score 12, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal steel cross-bracing in the shed's roof structure is rendered inconsistently, with several intersecting lines breaking off abruptly or failing to connect properly. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal beams of the roof trusses blend into each other and the horizontal beams in physically impossible ways, lacking distinct joints or logical structural depth. (top-center, strong)
- gemini-3.1-pro-preview: The central vertical pole appears to pass directly through the solid metal crossbeams of the roof structure without any logical physical connection or opening. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal cross-bracing visible in the roof trusses consists of chaotic, intersecting, and incomplete lines that do not form a coherent structural support system. (top-center, strong)

**people_anatomy**: score 10, raised in 3/9 calls, at bottom-left

- gpt-6-sol: The left worker's hand and the object beside the rail are hard to distinguish; this could be a rendering flaw, though the area is small and shadowed. (bottom-left, weak)
- gemini-3.1-pro-preview: The right boot of the worker in the yellow jacket has a strange, undefined black mass attached to the heel, and his left hand merges seamlessly into his knee without defined fingers. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower half of the worker in the orange jacket dissolves into an indistinct dark blob that merges unnaturally with his shadow, lacking defined legs or feet. (bottom-left, strong)
- gemini-3.1-pro-preview: The left leg and knee of the worker in the yellow jacket blend seamlessly into the steel rail he is crouching over, rather than resting behind or on top of it. (bottom-left, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The exact shape of the object between the workers is hard to make out, leaving a small amount of visual ambiguity. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the small object between them are indistinct, making their exact interaction hard to verify. (bottom-left, weak)
- gemini-3.1-pro-preview: The right hand of the worker in yellow, along with the dark tool he appears to be holding, merge seamlessly into the steel rail of the track. (bottom-left, strong)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The left rail of the track where the workers are kneeling loses its structural definition and narrows into a thin, blurred line right beside the yellow-jacketed worker. (bottom-left, moderate)
- gemini-3.1-pro-preview: The rails underneath the two crouching workers exhibit physically impossible geometry, with the inner rail abruptly vanishing and another appearing to merge with the concrete and a worker's leg. (bottom-left, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The track diverging to the left lacks a realistic switch mechanism, such as switch points or a frog; the rails simply split into a continuous 'Y' shape. (bottom-center, strong)

## y-two-L-8.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.06 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.02

**track_geometry**: score 9, raised in 2/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The track in the foreground branches into two separate paths without any visible switch points, moving rails, or a frog mechanism; the metal rails simply split like painted lines. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the left track has a jagged, sudden break right next to the workers, with the metal seemingly disconnecting and merging with the ground and their tools. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the track curving to the right disappears in sections, looking as though concrete has been unnaturally painted over it in uneven patches. (bottom-right, strong)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at bottom-left, bottom-center

- gpt-6-sol: The workers’ hands and the small object at the rail joint are difficult to distinguish precisely. (bottom-left, weak)
- gpt-6-sol: The workers’ hands and the object at the rail are hard to distinguish precisely. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the small object between them are somewhat indistinct, making their exact interaction hard to verify. (bottom-center, weak)
- gemini-3.1-pro-preview: The tool held by the rightmost worker is a featureless dark stick that does not interact logically with the rail, and the tool bag next to the left worker is an amorphous, undefined shape. (bottom-left, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The worker on the right has indistinct, blob-like hands, and his left arm appears to merge unnaturally into his lower body and the ground. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the workers, particularly the one on the right holding a bar, are poorly defined and appear to melt into the object they are manipulating. (bottom-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Equipment, carts, and tool cabinets lined up inside the maintenance shed lack distinct edges or structural logic, appearing instead as vague, melted blobs of color. (center, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Distant equipment and structural details are soft and indistinct. (center, weak)

## y-two-R-4.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- openai/gpt-6-sol: 0.04 / 0.12 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.98

**track_geometry**: score 9, raised in 3/9 calls, at middle-left, bottom-right, bottom-center

- gemini-3.1-pro-preview: The rails of the track curving to the left simply fade out and disappear into the flat concrete surface before reaching the doorway. (middle-left, strong)
- gemini-3.1-pro-preview: The inner rail of the track on the right side appears to merge into the concrete surface and disappear entirely just behind the kneeling worker in the orange jacket. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner rail of the right track lacks the metallic shine and distinct groove seen on the other rails, appearing instead as a blurry dark line that completely vanishes above the worker in orange. (bottom-center, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and lower legs are soft and partly obscured, making their exact shapes difficult to verify. (bottom-right, weak)
- gemini-3.1-pro-preview: The worker in the orange jacket has a lower body that is completely malformed, appearing to melt into the ground without distinct legs or feet. (bottom-right, strong)
- gemini-3.1-pro-preview: The right arm and hand of the worker kneeling in the orange jacket are undefined and blend into a blurry, indistinct shape on the ground. (bottom-right, moderate)
- gemini-3.1-pro-preview: The right hand of the worker in the yellow jacket is an undefined blue blob that merges unnaturally with his knee and the surrounding ground. (bottom-right, moderate)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at bottom-right

- gemini-3.1-pro-preview: The objects resting on the ground next to both workers are indistinct, amorphous blobs that do not resemble recognizable tools or bags. (bottom-right, strong)
- gemini-3.1-pro-preview: The objects resting on the ground next to and behind the workers, which should be tools or bags, are amorphous, blurry blobs lacking distinct functional details. (bottom-right, moderate)
- gemini-3.1-pro-preview: The tool bag lying between the workers has a strap that seems to melt directly into the concrete, and the objects beside the orange worker are indistinct, formless blobs. (bottom-right, moderate)

**buildings**: score 7, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The structural diagonal struts within the roof trusses are inconsistent, appearing randomly in some sections while missing in other identical sections. (top-center, moderate)
- gemini-3.1-pro-preview: The diagonal struts in the metal roof trusses intersect haphazardly, with some ending abruptly or failing to connect to the main structural beams, creating impossible geometry. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof structure contains several beams that intersect awkwardly, melt into one another, or fail to connect properly to the horizontal beams. (top-center, moderate)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-right

- gemini-3.1-pro-preview: A thin overhead wire extending from the top right edge of the frame appears to terminate abruptly in mid-air near the edge of the roof canopy. (top-right, moderate)
- gemini-3.1-pro-preview: A thin overhead wire extending from the top right corner abruptly ends in mid-air against the sky without connecting to the shed or any other structure. (top-right, strong)

## y-two-R-5.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.06 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 12, raised in 6/9 calls, at bottom-right, middle-right

- gpt-6-sol: The workers’ hands and the exact point where they meet the rail are difficult to distinguish. (bottom-right, weak)
- gpt-6-sol: The workers’ hands are hard to distinguish where they meet over the rail, though this could be due to image resolution. (middle-right, weak)
- gpt-6-sol: The workers' hands overlap in a small, dark area, making their exact positions hard to distinguish. (bottom-right, weak)
- gemini-3.1-pro-preview: The hands of both workers and the tools they are holding melt seamlessly into the steel rails, lacking distinct boundaries or realistic articulation. (bottom-right, strong)

**track_geometry**: score 11, raised in 3/9 calls, at middle-right, bottom-right, center

- gemini-3.1-pro-preview: The rails leading into the right-hand service bay appear to split into multiple, overlapping lines and lose their consistent shape as they enter the building. (middle-right, strong)
- gemini-3.1-pro-preview: The rightmost rail appears to split or duplicate into parallel, overlapping lines right where the workers are positioned, failing to maintain the solid structure of a real rail. (bottom-right, strong)
- gemini-3.1-pro-preview: Inside the shed, the rails and inspection pits are illogically constructed; rails seem to disappear into or haphazardly paint over the gaps of the pits. (center, strong)
- gemini-3.1-pro-preview: Inside the shed, the rails running over the inspection pits become indistinct, fading into the concrete or blending illogically with the pit edges. (center, moderate)

**buildings**: score 7, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The cross-bracing and framework of the depot roof are highly irregular and chaotic, with diagonals that stop abruptly or fail to form a logical structural pattern. (top-center, strong)
- gemini-3.1-pro-preview: The roof truss structure exhibits irregular geometric patterns, with several diagonal support struts ending abruptly or not connecting logically to the main beams. (top-center, moderate)
- gemini-3.1-pro-preview: The structural beams and skylight panels in the roof have irregular spacing, wonky angles, and varying thicknesses that do not make sense for standard structural engineering. (top-center, moderate)

**overhead_wires_or_poles**: score 6, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: An overhead tram wire descends from the top edge of the frame and abruptly ends in mid-air, failing to connect to any support structure. (top-left, strong)
- gemini-3.1-pro-preview: A thin overhead wire extends from the structure but terminates abruptly in mid-air without connecting to anything. (top-left, strong)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: The dark tool bags resting on the ground near the workers' knees lack clear seams, straps, or structure, appearing instead as smooth, melty blobs. (bottom-right, moderate)
- gemini-3.1-pro-preview: The tool bags placed on the track next to the workers look like solid, melted blobs rather than functional fabric or leather bags with pockets and seams. (bottom-right, strong)

## y-two-R-6.jpg: mean P(AI) 0.22 (passes)

- anthropic/claude-opus-5.5: 0.75 / 0.12 / 0.12
- openai/gpt-6-sol: 0.06 / 0.08 / 0.03
- google/gemini-3.1-pro-preview: 0.05 / 0.75 / 0.02

**track_geometry**: score 6, raised in 2/9 calls, at bottom-right, center, bottom-left

- claude-opus-5.5: Right track rails in foreground curve and converge oddly; the left rail of the right pair seems to merge into a flat groove with inconsistent gauge as it approaches the depot (bottom-right, moderate)
- claude-opus-5.5: Tracks in the foreground don't clearly connect to the pit lanes inside the depot; rails fade into concrete without logical switches (center, moderate)
- gemini-3.1-pro-preview: Rails inexplicably fade into the concrete surface. (bottom-left, moderate)

**people_anatomy**: score 2, raised in 2/9 calls, at bottom-right

- claude-opus-5.5: Two crouching workers have somewhat smeared hands and a blurry tool area; the bag beside them is indistinct (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish, though the figures are small in the frame. (bottom-right, weak)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Film-like grain and soft cinematic grading typical of video-generator output; overall smooth surfaces with little fine detail (whole-image, moderate)

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish precisely. (bottom-right, weak)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: Roof truss bracing is inconsistent, with unconnected beams. (top-center, moderate)

## y-two-R-7.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and equipment merge into a dark, hard-to-resolve cluster at the rail. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small items at the rails are hard to distinguish, leaving their exact interaction unclear. (bottom-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and nearby tools are indistinct, though they occupy a small part of the frame. (bottom-right, weak)

## y-two-R-8.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.95

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The steel truss structure supporting the roof is structurally illogical; beams intersect at random angles, fail to form coherent geometric patterns, and some appear to float or melt into one another. (top-center, strong)
- gemini-3.1-pro-preview: The diagonal cross-bracing in the roof trusses connects haphazardly, with some struts ending in mid-air or crossing each other without joining at a structural node. (top-center, strong)

**tools_or_small_objects**: score 5, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The equipment between the workers is hard to distinguish and has slightly muddled edges. (middle-right, weak)
- gpt-6-sol: The workers’ hands and equipment at the rail are hard to distinguish and appear somewhat muddled. (middle-right, weak)
- gemini-3.1-pro-preview: The tools or bags sitting on the ground between the kneeling workers are indistinct, amorphous blobs lacking defined edges or mechanical details. (bottom-right, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: In the background where the tracks enter the inspection pits, the lines become a messy jumble, bleeding into one another without clear separation. (center, moderate)
- gemini-3.1-pro-preview: The rails of the tracks leading into the middle maintenance pit appear to fade out or blend entirely into the concrete edge of the pit instead of remaining distinct. (center, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The equipment and objects lined up along the inner wall of the shed are rendered as blurry, indistinct blobs of color rather than recognizable, defined objects. (middle-right, moderate)

**people_clothing_or_gear**: score 2, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The hands of the workers and the tools they are supposedly using lack definition, appearing blurry and somewhat merged with the ground and surrounding objects. (bottom-right, moderate)
