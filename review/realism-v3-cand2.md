# Realism check: v3-cand2

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 162 | 12/12 |
| overhead_wires_or_poles | 149 | 12/12 |
| tools_or_small_objects | 117 | 12/12 |
| people_anatomy | 101 | 12/12 |
| people_pose_or_placement | 76 | 12/12 |
| texture_noise_or_sharpness | 66 | 12/12 |
| composition_or_staging | 40 | 10/12 |
| reflections_or_wet_surfaces | 26 | 9/12 |
| background_clutter | 21 | 9/12 |
| camera_or_windscreen | 14 | 9/12 |
| buildings | 9 | 5/12 |
| people_clothing_or_gear | 7 | 2/12 |

## e-group-L-1.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.95 / 1.00 / 0.01

**people_anatomy**: score 12, raised in 2/9 calls, at bottom-left, middle-right, middle-left

- gemini-3.1-pro-preview: The worker furthest to the left has an anatomically impossible lower body, with legs that appear to be formless stumps melting into the ground. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker on the right track has completely undefined feet and lower legs that blend into a blurry grey mass instead of distinct boots. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right track has lower legs and feet that are entirely formless, appearing as unrendered blobs that melt into the concrete. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the leftmost worker are indistinct stumps that fuse directly into the metal rail he is touching. (middle-left, strong)

**track_geometry**: score 11, raised in 4/9 calls, at center, middle-right

- claude-opus-5.5: Left track pair: the left rail sweeps outward while the right rail runs nearly straight, so the gauge widens implausibly toward the foreground and the rails converge oddly toward the depot doors. (center, moderate)
- claude-opus-5.5: The right track splits from the left at no visible switch. Both tracks are simply embedded in the concrete, with no frog or points mechanism. (middle-right, moderate)
- claude-opus-5.5: Two track pairs diverge with no visible switch or connecting geometry; left track rails curve oddly and the gap between tracks is a plain concrete slab with no frog or points (center, moderate)
- claude-opus-5.5: The left track's rails converge and merge oddly toward the depot, with the left rail curving into the right one at the horizon in a way that does not form a plausible turnout or switch. (center, moderate)

**tools_or_small_objects**: score 9, raised in 6/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The workers' hands and small equipment around the left rails are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The right-hand worker's hands and the object at the rail are hard to distinguish, leaving the exact task unclear. (middle-right, weak)
- gpt-6-sol: The right worker’s hands and the small object at the rail are difficult to distinguish. (middle-right, weak)
- claude-opus-5.5: Right worker's tool on the rail is a blurry, indistinct object without clear structure (middle-right, moderate)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-center, top-left

- claude-opus-5.5: The overhead catenary wires are sparse and inconsistent. The wires end at the poles and do not run continuously over the tracks into the depot. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent with pole spacing; catenary doesn't clearly run above tracks (top-left, moderate)
- claude-opus-5.5: The overhead wires are sparse and inconsistent. Cables run diagonally from the pole tops to nowhere, with no coherent catenary over either track. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires connected to the catenary pole simply fade and dissolve into the sky without connecting to another physical anchor. (top-left, strong)

**reflections_or_wet_surfaces**: score 6, raised in 4/9 calls, at bottom-center, bottom-left, middle-left

- claude-opus-5.5: The wet-concrete reflections of the workers' vests are smeared orange and yellow blobs, roughly plausible but soft. (bottom-center, weak)
- claude-opus-5.5: Reflections of hi-vis vests appear as smeared orange/yellow patches somewhat displaced from figures (bottom-left, weak)
- claude-opus-5.5: The orange and yellow reflections in the puddles are smeared and appear on dry-looking concrete patches, inconsistent with the puddle locations. (bottom-left, weak)
- gemini-3.1-pro-preview: The third worker from the left completely lacks a reflection on the highly reflective wet concrete, despite the two workers immediately next to him casting clear reflections. (middle-left, strong)

## e-group-L-2.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.86 / 0.90
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.98

**tools_or_small_objects**: score 11, raised in 5/9 calls, at middle-right, middle-left, center

- gpt-6-sol: The crouching worker's tool and hands are hard to distinguish where they meet the rail. (middle-right, weak)
- gpt-6-sol: The tool or object beside the worker on the right track is difficult to make out clearly. (middle-right, weak)
- claude-opus-5.5: Yellow gauge/frame tool near workers is vague and blends with rails; tools in hands are indistinct (middle-left, moderate)
- claude-opus-5.5: A yellow frame or gauge tool between the workers is ill-defined, and the tools the workers hold are smeared and indistinct. (middle-left, moderate)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-left, top-center

- claude-opus-5.5: Overhead catenary wires are sparse and do not consistently connect to poles or run above tracks (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent with the track layout; the wires end abruptly near the poles. (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and do not consistently connect to the poles or follow the tracks (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire structure extending from the left pole features wires that terminate abruptly in mid-air instead of connecting logically. (top-left, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at middle-left, whole-image

- gpt-6-sol: The workers' hands and small equipment are too soft to identify clearly, leaving some detail uncertain. (middle-left, weak)
- claude-opus-5.5: Smooth, painterly wet concrete and soft uniform detail across the frame, with reflections looking smeared (whole-image, moderate)
- claude-opus-5.5: Surfaces are uniformly smooth and painterly, with mushy detail on the pallets, the cable drum and the fences. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly concrete texture and soft details on the distant depot doors and pallets, typical of generative rendering (whole-image, moderate)

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Two separate tracks appear to diverge from nowhere; the right track's left rail curves oddly and there's no visible switch connecting them, rails seem to merge into the concrete inconsistently (center, moderate)
- claude-opus-5.5: Left and right tracks diverge as separate parallel pairs with no visible switch connecting them; the gap between them is plain concrete and the curves look stylized rather than engineered. (center, moderate)
- claude-opus-5.5: Two tracks diverge with no visible switch or frog in the foreground; the left track's rails curve oddly and the tracks appear to be embedded in plain concrete with no continuity toward the camera (center, moderate)

**composition_or_staging**: score 4, raised in 2/9 calls, at middle-left, whole-image

- claude-opus-5.5: Three workers crouched in a tidy row on left track and one on right, all in similar poses, staged look typical of generated depot scenes (middle-left, weak)
- claude-opus-5.5: Classic trolley-problem staging: three workers kneeling on the left track and one on the right track, all facing away, seen from a tram cab dashboard (whole-image, strong)

## e-group-L-3.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.02

**tools_or_small_objects**: score 10, raised in 5/9 calls, at middle-right, center

- gpt-6-sol: The kneeling worker's hand and the slim tool beside the rail are hard to distinguish precisely. (middle-right, weak)
- claude-opus-5.5: Right worker holds a long tool that merges ambiguously with the rail and ground; tools are indistinct (middle-right, moderate)
- claude-opus-5.5: The tools held by the workers are vague, smeared shapes, and the box by the third worker is indistinct. (center, moderate)
- claude-opus-5.5: Tools held by workers are vague, ill-defined shapes; a bag/box object near the third worker merges with the ground (center, moderate)

**overhead_wires_or_poles**: score 8, raised in 4/9 calls, at top-left

- claude-opus-5.5: Overhead catenary wires are sparse and disconnected, poles with arms that don't support a coherent wire system over the tracks (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and end without connecting coherently to the poles. (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, poles with arms but wires ending ambiguously (top-left, weak)
- gemini-3.1-pro-preview: The overhead wire structures are disjointed, with cables that do not connect logically to the support poles and appear to float or terminate abruptly. (top-left, strong)

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Left track's rails: the right rail of the left track runs toward the depot but tracks seem embedded in concrete with no clear switch; rails merge and converge unnaturally toward the left door, gauge looks inconsistent with worker positions (center, moderate)
- claude-opus-5.5: The left track's rails run straight into the depot while the right track curves oddly; the two tracks don't connect plausibly, and rail spacing differs between them. (center, moderate)
- claude-opus-5.5: Left track's right rail curves strangely and the two tracks diverge without any visible switch/frog; track layout looks schematic and inconsistent with depot entrances (center, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-left, center

- claude-opus-5.5: Three workers kneeling side by side across/on the left track in a neat row, staged arrangement; middle worker's tool blends into rail (middle-left, moderate)
- claude-opus-5.5: Three workers are crouched in a neat row across and between the left rails in a staged way, and their tools blend into the rails. (center, moderate)
- claude-opus-5.5: Three workers kneel in a neat row directly on/between rails, staged evenly; the left worker's legs blend into the rail (middle-left, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-left

- gpt-6-sol: The three workers’ hands and tools are hard to distinguish at this distance. (middle-left, weak)
- gemini-3.1-pro-preview: The hands and lower body of the worker in the orange jacket (the rightmost person in the left group) blend amorphously into the tool bag or object they are handling. (middle-left, strong)

## e-group-R-1.jpg: mean P(AI) 0.62 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.82 / 0.85
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**people_anatomy**: score 13, raised in 4/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The left worker's hands and the nearby rail are hard to distinguish, leaving a small possible visual inconsistency. (center, weak)
- gemini-3.1-pro-preview: The hands of the worker on the left track lack distinct fingers or structure, appearing to merge seamlessly into the track and an undefined tool. (middle-left, strong)
- gemini-3.1-pro-preview: The worker furthest to the right has highly distorted lower legs and feet, which appear as indistinct dark blobs merging with the concrete rather than recognizable limbs or boots. (middle-right, strong)
- gemini-3.1-pro-preview: The worker furthest back on the right set of tracks appears to lack a lower body, resembling a torso resting directly on the ground. (center, strong)

**overhead_wires_or_poles**: score 13, raised in 6/9 calls, at top-left, top-center

- claude-opus-5.5: The overhead wires are sparse and inconsistent; poles carry brackets but there is no coherent catenary over the tracks (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and end abruptly; poles have bracket arms that do not hold wires coherently over the tracks (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent; catenary wires do not clearly run along tracks, arms end abruptly (top-center, moderate)
- gemini-3.1-pro-preview: The connection of the overhead wire to the leftmost pole is blurry and indistinct, lacking a clear mechanical attachment point. (top-left, moderate)

**people_pose_or_placement**: score 10, raised in 5/9 calls, at middle-right, middle-left

- claude-opus-5.5: Three workers on the right cluster in similar kneeling poses; the rightmost worker kneels outside the rails beside a basket, with staged-looking symmetry against the single worker on the left (middle-right, weak)
- claude-opus-5.5: Workers kneel in near-identical poses on a wet slab; the worker in the yellow vest appears to straddle/sit on the rail with a tool bar that blends into the track (middle-right, moderate)
- claude-opus-5.5: Worker on right track kneels with a tool bar lying across rails; worker beside the track kneels at a basket with no clear task; poses look staged and generic (middle-right, moderate)
- gemini-3.1-pro-preview: The lower body and legs of the worker furthest to the right appear to melt into and physically merge with the bag or object sitting next to them. (middle-right, strong)

**tools_or_small_objects**: score 10, raised in 4/9 calls, at middle-right, bottom-right

- claude-opus-5.5: The tool/bar between the workers on the right track is vague and merges into the rail (middle-right, moderate)
- gemini-3.1-pro-preview: The kneeling worker in the yellow vest is holding what should be a tool, but it has no clear shape or geometry and blends directly into the concrete and track. (bottom-right, strong)
- gemini-3.1-pro-preview: The worker in the yellow vest is holding a long bar-like tool that does not connect logically to the track; its end blurs indistinctly into the ground. (middle-right, moderate)
- gemini-3.1-pro-preview: The tools being used by the workers and the bag/box next to the far-right worker lack defined edges and shapes, blending into hands and the surrounding ground in a mushy manner. (middle-right, strong)

**track_geometry**: score 9, raised in 4/9 calls, at bottom-center, center

- claude-opus-5.5: Two embedded tram tracks diverge with no visible switch/frog; the left track curves away and the right track starts from nowhere, with rails inconsistent with a real junction layout (bottom-center, moderate)
- claude-opus-5.5: Two embedded grooved tracks diverge into depot doors with no visible switch blades or frog; the left track lies on its own concrete strip that doesn't connect logically to the right track (center, moderate)
- claude-opus-5.5: Two separate tracks diverge without any visible switch or connection; left track has rails converging oddly, and tracks embedded in concrete with inconsistent groove/flangeway rendering (center, moderate)
- gemini-3.1-pro-preview: The train rails lack the proper three-dimensional profile of actual tracks (like a flat-bottom or bullhead shape) and appear more like slightly raised flat strips or uneven grooves in the concrete. (bottom-center, strong)

## e-group-R-2.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.95 / 0.02 / 0.01

**tools_or_small_objects**: score 8, raised in 6/9 calls, at middle-right, middle-left

- gpt-6-sol: The rightmost worker's hands and the objects beside them are indistinct, though they are small in the frame. (middle-right, weak)
- gpt-6-sol: The rightmost worker's hand and the dark object beside it are difficult to distinguish clearly. (middle-right, weak)
- claude-opus-5.5: A small white object or tool near the hi-vis worker floats ambiguously across the rail with unclear structure. (middle-right, weak)
- claude-opus-5.5: Left worker holds an ill-defined tool merging with the rail (middle-left, weak)

**track_geometry**: score 8, raised in 3/9 calls, at center, bottom-left

- claude-opus-5.5: Two embedded tram tracks run parallel into separate depot doors with no visible switch or connection; the left track's rails curve oddly and the gauge looks inconsistent between the left and right tracks. (center, moderate)
- claude-opus-5.5: Left track rails converge oddly; the right rail of the left track bends and the rails appear embedded in concrete without any gauge consistency or flangeway detail, with rails fading toward the depot doors (bottom-left, moderate)
- claude-opus-5.5: Right track narrows unnaturally into the distance and the left rail of the right track runs alongside a raised concrete strip; the two tracks don't clearly connect to the depot doors (center, moderate)
- claude-opus-5.5: The two embedded tracks curve apart oddly; the left track's rails converge toward the depot door but the right track has a single rail line running into the gap with odd spacing, and the track pairs do not form a coherent switch layout (center, moderate)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at center, whole-image

- gpt-6-sol: The workers’ hands and tools are difficult to distinguish at this distance, leaving some local details uncertain. (center, weak)
- claude-opus-5.5: The image has a smooth, slightly painterly rendering with uniform softness and generic building detail. (whole-image, moderate)
- claude-opus-5.5: Overall soft, smeared texture on fence, pallets and building details, with mushy small objects (whole-image, moderate)
- gemini-3.1-pro-preview: When zoomed in, fine details across the image, such as the ground texture and the workers' gear, resolve into a smudgy, 'painterly' appearance characteristic of AI diffusion models rather than sharp photographic detail. (whole-image, moderate)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-left

- claude-opus-5.5: The catenary poles have short, incomplete wire spans. The overhead wiring does not form a coherent system over the tracks. (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, with wires ending abruptly and not connecting logically between poles (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire structures exhibit discontinuous lines, with some wire segments appearing to simply end abruptly in the sky without connecting to anything. (top-left, strong)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-right

- claude-opus-5.5: Three workers kneel in a tight, posed cluster around the right track. Their tools are indistinct metal bars that do not clearly engage the rail. (middle-right, moderate)
- claude-opus-5.5: Three workers kneel in a neat staged cluster on the right track, one with a vague tool/bag blob; poses are generic and tools are indistinct (middle-right, moderate)
- claude-opus-5.5: Three workers kneel in a neat staged arrangement on the right track, all in near-identical poses doing unclear work on the rail surface with vague tools (middle-right, moderate)

## e-group-R-3.jpg: mean P(AI) 0.49 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.02 / 0.95 / 0.95

**tools_or_small_objects**: score 11, raised in 7/9 calls, at middle-right, middle-left, center

- gpt-6-sol: The rightmost worker's hands and the object beside them are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and tools near the right-hand rails are difficult to distinguish precisely. (middle-right, weak)
- claude-opus-5.5: Tools held by workers are vague, ill-defined bars/objects merging with rails; toolbox shape smudged (middle-right, moderate)
- claude-opus-5.5: Left worker's tool is a thin rod with unclear grip and contact point on the rail (middle-left, weak)

**texture_noise_or_sharpness**: score 9, raised in 6/9 calls, at middle-right, whole-image, middle-left, bottom-center

- gpt-6-sol: The distant worker’s hands and nearby tools are too small and soft to verify their exact shapes. (middle-right, weak)
- claude-opus-5.5: Overall smooth, slightly painterly rendering of building facade and background trees with uniform softness (whole-image, weak)
- claude-opus-5.5: Overall smooth, slightly painterly rendering with soft uniform detail on building panels and fence (whole-image, weak)
- claude-opus-5.5: Overly smooth, uniform rendering of building cladding and ground with soft painterly detail (whole-image, moderate)

**track_geometry**: score 9, raised in 4/9 calls, at center, middle-left

- claude-opus-5.5: Left track pair converges toward left depot door, but right track pair appears to have only two rails diverging oddly; inner right rail runs straight while outer one curves, gauge inconsistent between rails near workers (center, moderate)
- claude-opus-5.5: Left track pair and right track pair diverge oddly; the right track's left rail starts mid-concrete with no connection to the left track, and gauge widths look inconsistent between the two tracks (center, moderate)
- claude-opus-5.5: Left track's right rail and right track's left rail diverge oddly; the right track's left rail runs as a single rail through the middle concrete with inconsistent gauge relative to its partner rail, and track paths don't connect logically to the depot doors (center, moderate)
- gemini-3.1-pro-preview: The inner rail of the left track loses its flangeway groove just behind the worker, appearing to merge flatly into the surrounding concrete. (middle-left, strong)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-right, top-center, top-left

- claude-opus-5.5: Overhead wires attach ambiguously to poles; catenary looks incomplete and wires fade out (top-right, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, with wires ending abruptly and not connecting logically between poles (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and poorly connected to the poles; catenary does not follow the tracks into the depot (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wire extending from the horizontal support arm on the left pole appears to vanish into the sky rather than continuing coherently along the track path. (top-left, strong)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at center, middle-right, middle-left

- claude-opus-5.5: Four workers evenly staged in crouching poses, all kneeling at track with similar tools, composition looks staged and symmetrical (center, weak)
- claude-opus-5.5: Three workers clustered on right track in similar crouched poses, tools and boxes indistinct; the worker in the yellow vest holds an ambiguous tool bar spanning the rails (middle-right, moderate)
- claude-opus-5.5: Three workers clustered on right track crouching with indistinct tools; the orange-vest worker behind blends into others, hands and tools are mushy (middle-right, moderate)
- gemini-3.1-pro-preview: The worker on the left track has legs that seem to blend unnaturally into the mud and concrete, and the tool he is holding ends abruptly without a clear shape. (middle-left, moderate)

## f-group-L-1.jpg: mean P(AI) 0.66 (fails)

- openai/gpt-6-sol: 0.17 / 0.12 / 0.16
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**people_anatomy**: score 16, raised in 5/9 calls, at middle-right, middle-left, bottom-right, bottom-left

- gpt-6-sol: The kneeling worker's hands and the tool or rail beside them are difficult to distinguish. (middle-right, weak)
- gpt-6-sol: The workers' faces and hands are too small and soft to check for anatomical consistency. (middle-left, weak)
- gemini-3.1-pro-preview: The worker on the right track lacks defined legs; his lower body appears to melt directly into the rail and the reflective ground. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right track has a nonsensical posture where a tool handle appears to pass through his leg, and there is an unexplained extra rod-like appendage hanging from his right side. (bottom-right, strong)

**track_geometry**: score 15, raised in 5/9 calls, at center, bottom-left, middle-right

- claude-opus-5.5: Left track's rails converge oddly; the left rail of the left track and right rail merge into a narrow single pair toward the shed, and rail gauge appears inconsistent with worker spacing between rails (center, moderate)
- claude-opus-5.5: Left track's rails converge oddly: the left rail and right rail of the left track diverge to very different widths, the right rail curving away to meet the worker kneeling between tracks; gauge inconsistent (center, moderate)
- claude-opus-5.5: Left track's two rails converge oddly: the right rail of the left track curves inward and splits, with the worker kneeling between rails that don't maintain consistent gauge; the rails appear to merge toward the depot door without a proper switch. (center, moderate)
- gemini-3.1-pro-preview: The right rail of the left track becomes inconsistently thin and eventually fades completely into the wet ground before reaching the building entrance. (bottom-left, strong)

**overhead_wires_or_poles**: score 14, raised in 6/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: Overhead wires and cantilever arms on poles are sparse and don't connect coherently over the tracks (top-center, weak)
- claude-opus-5.5: Overhead catenary wires are sparse and don't clearly align over tracks; poles with cantilever arms lacking proper contact wire runs (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent; poles' arms don't clearly connect to a coherent wire system over the tracks. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wire extending to the right from the leftmost pole simply ends in mid-air, failing to connect to another structure or continue off-screen. (top-left, moderate)

**composition_or_staging**: score 8, raised in 5/9 calls, at top-center, whole-image

- gpt-6-sol: The two illuminated depot entrances look unusually similar, though their repeated design is plausible. (top-center, weak)
- gpt-6-sol: The two similar depot entrances and workers positioned on both tracks make the scene unusually balanced. (whole-image, weak)
- claude-opus-5.5: Highly symmetric staged scene: two identical shed doors, each with a track leading in, workers neatly arranged kneeling on rails, typical of generated trolley-problem style imagery (whole-image, moderate)
- claude-opus-5.5: Perfectly symmetric staging: two identical depot doorways each with a track entering, workers neatly placed kneeling on rails, cinematic dusk look (whole-image, moderate)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at middle-right, center, middle-left

- gpt-6-sol: The right worker's hands and the small objects at the rail junction are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and equipment near the rails are difficult to distinguish clearly. (center, weak)
- claude-opus-5.5: Tools and boxes near workers are smudged, undefined shapes without clear function (center, weak)
- gemini-3.1-pro-preview: The object held by the leftmost worker is an indistinct, blurry gray line that merges seamlessly with the ground surface rather than looking like a solid tool. (middle-left, moderate)

## f-group-L-2.jpg: mean P(AI) 0.64 (fails)

- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.85
- openai/gpt-6-sol: 0.12 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 21, raised in 6/9 calls, at center, middle-right, bottom-left, middle-left

- claude-opus-5.5: Left track rails converge oddly; the right rail of the left track bends sharply near the workers and rails appear to merge or overlap at the depot entrance, inconsistent with real gauge geometry (center, moderate)
- claude-opus-5.5: Left track's right rail curves back toward the left track at the base near the workers, and the rails seem to merge or bend unnaturally; the left track splits oddly into the depot entrance (center, moderate)
- claude-opus-5.5: Left track's inner rail curves inward and merges oddly; the two rails of the left track converge unnaturally near the workers rather than staying parallel into the depot door (center, moderate)
- gemini-3.1-pro-preview: The right-hand rail of the right track disappears or loses physical definition entirely underneath the worker kneeling on it. (middle-right, strong)

**overhead_wires_or_poles**: score 14, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and inconsistent; cantilever arms don't clearly support a contact wire over each track (top-center, weak)
- claude-opus-5.5: Overhead catenary wires are sparse and disconnected, with cantilever arms not aligned over the tracks they would serve (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and do not clearly follow tracks into the depot; cantilever arms end ambiguously (top-center, moderate)
- gemini-3.1-pro-preview: The faint lines in the sky intended to be overhead wires intersect at random angles and do not form a logical, tensioned structural suspension system for a tramway. (top-center, strong)

**tools_or_small_objects**: score 10, raised in 7/9 calls, at middle-left, bottom-left, middle-right

- claude-opus-5.5: Tools held by the workers are smeared, ill-defined bars and a basket-like object with no clear function (middle-left, weak)
- gpt-6-sol: The workers' hands and the small object near the rail are hard to make out, leaving their exact interaction unclear. (middle-left, weak)
- gpt-6-sol: The workers' hands and the small object beside the left rail are too indistinct to identify confidently. (middle-left, weak)
- gpt-6-sol: The kneeling workers' hands and the small object near the left rail are difficult to distinguish clearly. (middle-left, weak)

**composition_or_staging**: score 7, raised in 5/9 calls, at whole-image, top-center

- claude-opus-5.5: Highly symmetric, cinematic staging: two depot doors, two tracks, workers neatly posed on each, with a moody dusk grade typical of generated stock imagery (whole-image, moderate)
- claude-opus-5.5: Highly symmetrical twin depot doors with tracks leading in, cinematic dusk lighting and wet reflections typical of generated scenes (whole-image, weak)
- claude-opus-5.5: Highly symmetrical staged scene: two identical depot doors each with a track, workers neatly placed, cinematic dusk lighting typical of generated stock imagery (whole-image, moderate)
- gpt-6-sol: The two similarly lit depot entrances and workers positioned on both tracks give the scene an unusually balanced appearance. (whole-image, weak)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-left, middle-right

- claude-opus-5.5: Workers' hands and tools are mushy; the tool held by the left worker blends into the rail, kneeling poses slightly melted (middle-left, moderate)
- gemini-3.1-pro-preview: The lower legs of the worker kneeling on the right track merge indistinctly into the wet ground texture; distinct boots or feet are not visible. (middle-right, strong)
- gemini-3.1-pro-preview: The worker furthest back on the left track lacks distinct lower body features, appearing as an indistinct orange shape. (middle-left, moderate)

## f-group-L-3.jpg: mean P(AI) 0.64 (fails)

- openai/gpt-6-sol: 0.07 / 0.06 / 0.04
- anthropic/claude-opus-5.5: 0.90 / 0.85 / 0.90
- google/gemini-3.1-pro-preview: 0.95 / 0.98 / 0.99

**track_geometry**: score 21, raised in 5/9 calls, at center, middle-left, middle-right

- claude-opus-5.5: Left track's rails converge oddly: the left rail runs to the left door while the right rail curves up toward the same door, so the gauge is inconsistent and the rails don't form a coherent parallel pair. (center, strong)
- claude-opus-5.5: Embedded rails appear as raised metallic strips without a flangeway groove, and they fade inconsistently into the pavement. (middle-left, moderate)
- claude-opus-5.5: Left track's rails converge oddly: the left rail and a second inner rail start near the worker positions and merge toward the depot door in an inconsistent way; the left track gauge appears to vary, and rails seem to originate from nowhere behind the workers. (center, moderate)
- claude-opus-5.5: Right track rails come from the right depot door but there's no clear connecting switch between the two tracks; the layout is overly symmetrical and staged. (middle-right, weak)

**overhead_wires_or_poles**: score 17, raised in 6/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: Catenary wires and cantilever arms are sparse and don't connect logically over the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and terminate ambiguously; the cantilever arms don't clearly support contact wires above the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead wire cantilevers on the poles look simplistic and the wires run illogically, not aligned over the tracks (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire has a vertical dropper that ends in mid-air without attaching to a lower contact wire, and the main wire fades out before reaching the building. (top-left, strong)

**tools_or_small_objects**: score 12, raised in 6/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The exact shapes of the workers’ hands and small tools near the left rail are difficult to distinguish. (center, weak)
- claude-opus-5.5: Tools held by the kneeling workers are vague bars that merge with the rails, with no identifiable gauge or wrench shapes. (middle-left, moderate)
- claude-opus-5.5: Tools held by the kneeling workers are vague bars that blend into the rails; the center worker's bag is shapeless. (middle-left, moderate)
- claude-opus-5.5: Tools held by the kneeling workers are vague bars that merge into the rails, with no clear tool shapes (middle-left, moderate)

**people_anatomy**: score 8, raised in 2/9 calls, at center, middle-left, middle-right

- claude-opus-5.5: The workers' hands and feet are smeared and lack definition, and the third worker's bag blends into his body (center, moderate)
- gemini-3.1-pro-preview: The lower legs and feet of the leftmost worker in the orange jacket are poorly defined and appear to melt indistinguishably into the wet ground and the rail. (middle-left, strong)
- gemini-3.1-pro-preview: The worker on the right track has formless lower legs that blend into the ground's reflection, and his hands lack distinct fingers, appearing to merge with the tool he is holding. (middle-right, strong)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at center, whole-image

- gpt-6-sol: The workers’ hands and the small objects beside the rails are indistinct, making those details hard to verify. (center, weak)
- claude-opus-5.5: Painterly, over-smoothed texture with mushy fine detail on fences, cages, and signage. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly texture on the wet asphalt and building facade with uniform grain, typical of diffusion output. (whole-image, weak)
- claude-opus-5.5: Overall painterly smoothness with uniform pseudo-grain typical of diffusion upscaling (whole-image, moderate)

## f-group-R-1.jpg: mean P(AI) 0.65 (fails)

- anthropic/claude-opus-5.5: 0.85 / 0.88 / 0.88
- openai/gpt-6-sol: 0.08 / 0.05 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 17, raised in 5/9 calls, at center, bottom-left, middle-right

- claude-opus-5.5: Two separate track pairs converge toward two doors but the rail gauge is inconsistent: left pair narrows dramatically and right pair rails splay unevenly; no switches or connecting geometry, rails appear embedded oddly with flat ground (center, moderate)
- claude-opus-5.5: Left track rails converge oddly toward a single point near the depot door, the gauge narrowing unrealistically; rails appear to merge rather than run parallel into the shed (bottom-left, moderate)
- claude-opus-5.5: Right track's rails similarly pinch together near the shed entrance; no switch hardware, sleepers or grooved-rail details visible (center, moderate)
- claude-opus-5.5: Rails converge oddly: the left track's two rails bend toward each other near the depot doors with no switch hardware, and the right track's rails narrow unrealistically toward the door. Gauge appears inconsistent. (center, moderate)

**overhead_wires_or_poles**: score 14, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires attached to poles are sparse and don't align with track centers; catenary arms end abruptly (top-center, moderate)
- claude-opus-5.5: Overhead wires attach to poles inconsistently, one wire drops vertically from bracket into nothing; no catenary over tracks entering shed (top-center, moderate)
- claude-opus-5.5: Catenary wires come off the poles and cantilever arms but don't follow the tracks properly. Several wires end abruptly in the sky. (top-center, moderate)
- gemini-3.1-pro-preview: An overhead wire extending horizontally from the left pole abruptly fades and disappears mid-air without connecting to the right pole. (top-center, strong)

**people_pose_or_placement**: score 12, raised in 6/9 calls, at middle-right, middle-left

- claude-opus-5.5: Three workers kneeling evenly spaced with generic poses; tools (bar, box) vague and blend into rails (middle-right, moderate)
- claude-opus-5.5: Three workers kneeling in a neat staged row, tools/box with indistinct shapes; left worker kneels between rails with unclear tool (middle-right, weak)
- claude-opus-5.5: Three workers kneel symmetrically on the right track with vague tools, and one tool bar merges into the rail. The figures are soft and lack detailed hands. (middle-right, moderate)
- gpt-6-sol: All three workers are crouched close together, giving the arrangement a slightly staged appearance, though they appear to be working on the same rail. (middle-right, weak)

**people_anatomy**: score 8, raised in 3/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The workers on the right track have indistinct, malformed lower bodies that merge into undefined dark shapes. (middle-right, strong)
- gemini-3.1-pro-preview: The lower body of the worker kneeling on the left track lacks definition and melts indistinctly into the wet ground surface. (middle-left, moderate)
- gemini-3.1-pro-preview: The worker on the left of the group of three (in the orange vest) has a severely malformed body, appearing as a hunched shape without distinct legs or arms. (middle-right, strong)

**composition_or_staging**: score 6, raised in 4/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric staged scene with identical twin portals and evenly placed orange bollards, cinematic dusk grade typical of generators (whole-image, moderate)
- claude-opus-5.5: Highly symmetric twin depot doors with two tracks, cinematic dusk lighting, typical generated layout (whole-image, weak)
- claude-opus-5.5: The two depot doorways and track layout are almost perfectly mirrored, with a staged cinematic dusk look and an evenly glossy wet surface. (whole-image, moderate)
- gpt-6-sol: The two similar doorways and workers positioned on both tracks make the scene unusually balanced, though the depot layout explains it. (whole-image, weak)

## f-group-R-2.jpg: mean P(AI) 0.68 (fails)

- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- openai/gpt-6-sol: 0.17 / 0.38 / 0.08
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**track_geometry**: score 19, raised in 6/9 calls, at center, whole-image, bottom-center, top-left, bottom-right, middle-left

- claude-opus-5.5: Two separate track pairs embedded in asphalt with no visible switch or connection; rails appear as simple grooved lines without rail clips, groove detail, or drainage, and spacing/gauge of left pair looks inconsistent as it converges (center, moderate)
- claude-opus-5.5: Two separate track pairs lead into two depot doors but the rails are embedded in asphalt with no visible connection, switches or continuation; the right track's rails converge oddly near the door and the left track's rails bow outward unnaturally toward the camera (whole-image, moderate)
- claude-opus-5.5: Two embedded tram tracks lead into depot doors, but the left track's rails curve oddly and the right track splits into a pair near the bottom with inconsistent gauge; rails lack any switch blades or frog where they diverge. (center, moderate)
- gemini-3.1-pro-preview: The gauge (the distance between the two rails) of the left track appears significantly wider than the gauge of the right track in the foreground. (bottom-center, strong)

**overhead_wires_or_poles**: score 14, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: Poles have cantilever arms with wires that hang loosely and don't align over the tracks; catenary is sparse and doesn't form a coherent overhead system (top-center, moderate)
- claude-opus-5.5: Catenary poles have cantilever arms but the overhead wires are sparse, ending abruptly or not aligned over the tracks (top-center, moderate)
- claude-opus-5.5: Overhead wire poles have cantilever arms with wires that end abruptly or droop to nowhere; no consistent catenary over the tracks. (top-center, moderate)
- gemini-3.1-pro-preview: The thin overhead wire connected to the left pole extends a short distance and then fades completely into the sky without connecting to a proper catenary system. (top-left, moderate)

**people_anatomy**: score 13, raised in 5/9 calls, at middle-right, bottom-left

- claude-opus-5.5: Kneeling workers have smeared, mushy hands and indistinct tools; the center-right worker's legs and boots blend into the ground. (middle-right, moderate)
- gpt-6-sol: The workers' hands and the objects beside them are difficult to distinguish at this resolution, leaving some shapes ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The lower bodies and legs of the three workers blend ambiguously into the wet ground and rails without clear anatomical definition or distinct footwear. (middle-right, strong)
- gemini-3.1-pro-preview: The legs and hands of the workers on the right track are indistinct and blobby, merging unnaturally with the ground and their tools. (middle-right, strong)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at middle-right, middle-left, bottom-left

- gpt-6-sol: The workers' hands and the small items beside the right-hand rails are indistinct, making their exact activity hard to resolve. (middle-right, weak)
- gpt-6-sol: The tools and workers' hands around the right-hand rails are difficult to distinguish, with some shapes appearing to merge. (middle-right, weak)
- gemini-3.1-pro-preview: The long tool being used by the lone worker merges seamlessly into the metal rail without a distinct boundary or shadow. (middle-left, strong)
- gemini-3.1-pro-preview: The tool held by the worker on the left track has undefined edges and appears to merge directly into the rail. (bottom-left, moderate)

**people_pose_or_placement**: score 7, raised in 3/9 calls, at middle-right, center, bottom-right

- claude-opus-5.5: Workers kneel symmetrically on tracks in staged arrangement; the tool/level between right-track workers is vague and merges with rails (middle-right, moderate)
- claude-opus-5.5: Workers all kneeling symmetrically on rails with vague tools; the yellow-vest worker's legs and hands merge into the rail and a yellow bar; faces are not resolved (center, moderate)
- gemini-3.1-pro-preview: The worker in the yellow vest has an unnatural posture, and the yellow tool beside them appears to clip through their leg and the track. (bottom-right, strong)

## f-group-R-3.jpg: mean P(AI) 0.66 (fails)

- openai/gpt-6-sol: 0.18 / 0.08 / 0.14
- anthropic/claude-opus-5.5: 0.85 / 0.88 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**overhead_wires_or_poles**: score 21, raised in 6/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: The overhead catenary wires are sparse and don't clearly align with the tracks; the cantilever arms end abruptly (top-center, moderate)
- claude-opus-5.5: Overhead wires hang from poles but do not follow the tracks into the depot; catenary geometry is incoherent (top-center, moderate)
- claude-opus-5.5: Catenary wires from poles are sparse and don't run along the tracks into the depot coherently; wires end abruptly (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires connected to the left pole vanish into the sky and have structurally impossible, blurred connections. (top-left, strong)

**track_geometry**: score 20, raised in 6/9 calls, at center, bottom-left, middle-right

- claude-opus-5.5: Two separate track pairs each converge into a building door with rails embedded in asphalt, but the tracks have no visible connection or switch; the left track's rails narrow oddly toward the door and the gauge appears inconsistent (center, moderate)
- claude-opus-5.5: Left track rails are embedded grooves in asphalt that converge oddly toward the depot door with no visible sleepers or proper rail profile; the rails appear as smooth shiny strips (bottom-left, moderate)
- claude-opus-5.5: Tracks have no visible connection to the depot doors' internal tracks in a consistent way; right track pair splits strangely with rails diverging near workers (center, moderate)
- claude-opus-5.5: Two separate track pairs converge toward two depot doors, but the left track's rails narrow/curve oddly and the gauge looks inconsistent along its length; rails embedded in asphalt without visible grooves or ties (center, moderate)

**tools_or_small_objects**: score 13, raised in 7/9 calls, at middle-right, bottom-right, middle-left

- gpt-6-sol: The equipment beside the nearest worker is indistinct, making its shape difficult to verify. (middle-right, weak)
- gpt-6-sol: The object beside the nearest worker is difficult to make out and has somewhat indistinct edges. (middle-right, weak)
- claude-opus-5.5: The basket beside the yellow-vest worker and the tools in the workers' hands are smeared and lack defined shapes (middle-right, moderate)
- claude-opus-5.5: Basket next to yellow-vest worker and the tool held by the left worker are smeared and ill-defined (middle-right, weak)

**people_anatomy**: score 12, raised in 3/9 calls, at middle-left, middle-right, bottom-right

- gemini-3.1-pro-preview: The worker on the left track has indistinct, blurred legs that merge into the ground, and a poorly defined hand holding a tool. (middle-left, strong)
- gemini-3.1-pro-preview: The closest worker on the right track has blocky, formless legs and an elongated, oddly shaped yellow helmet. (middle-right, strong)
- gemini-3.1-pro-preview: The worker closest to the camera in the yellow jacket appears to be missing lower legs, with the body ending abruptly at the knees or blending into the ground. (bottom-right, strong)
- gemini-3.1-pro-preview: In the group of workers on the right, the individual in the orange vest in the background appears to have no lower body, with their torso merging directly into the ground. (middle-right, strong)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at middle-right, bottom-right

- claude-opus-5.5: Three workers crouch in a neat staggered line directly on the rails, posed symmetrically like a staged scene; the left worker kneels between the rails holding an indistinct tool (middle-right, moderate)
- claude-opus-5.5: Three workers on the right track crouch in staged, evenly spaced poses directly on the rails, with indistinct hands and tools merging into the rail (middle-right, moderate)
- claude-opus-5.5: Workers crouched directly on the rails in staged symmetric arrangement, one kneeling over the rail with a tool merging into the rail; feet and legs blend into the ground (middle-right, moderate)
- gemini-3.1-pro-preview: The object next to the worker in yellow is undefined and blends into the wet ground texture. (bottom-right, moderate)
