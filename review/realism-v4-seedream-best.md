# Realism check: v4-seedream-best

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 71 | 8/8 |
| overhead_wires_or_poles | 65 | 8/8 |
| texture_noise_or_sharpness | 42 | 8/8 |
| people_pose_or_placement | 38 | 8/8 |
| people_anatomy | 31 | 7/8 |
| tools_or_small_objects | 28 | 7/8 |
| text_signage_or_markings | 19 | 5/8 |
| composition_or_staging | 17 | 7/8 |
| buildings | 17 | 7/8 |
| camera_or_windscreen | 12 | 7/8 |
| reflections_or_wet_surfaces | 7 | 5/8 |
| background_clutter | 2 | 1/8 |
| people_clothing_or_gear | 1 | 1/8 |

## e-group-L-2.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.01

**track_geometry**: score 10, raised in 4/9 calls, at center, middle-right, bottom-right

- claude-opus-5.5: Left track's two rails diverge oddly: one rail curves while the other heads straight to the left depot door; workers kneel on the outer rail with no clear gauge consistency, and the rails seem to pass through without proper gauge spacing (center, moderate)
- claude-opus-5.5: Right track rails are embedded in a raised concrete strip with grooved edges that look painted on; geometry of rails converging to door is plausible but slightly inconsistent with the left (middle-right, weak)
- claude-opus-5.5: Left track rails: the left rail of the left track curves toward the left, while the right rail continues; the two rails of the left track diverge without a proper switch, appearing as a gauge-inconsistent pair (center, moderate)
- claude-opus-5.5: Right track rails converge toward the building but rail spacing appears to narrow unnaturally relative to perspective, and the track emerges from the depot without clear connection to the left track (middle-right, weak)

**overhead_wires_or_poles**: score 8, raised in 4/9 calls, at top-right, top-left, top-center

- claude-opus-5.5: Overhead wire span from poles terminates oddly and lacks consistent catenary over tracks (top-right, weak)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent; poles carry arms with wires that do not form a coherent network over tracks (top-left, moderate)
- claude-opus-5.5: The overhead wires are sparse and disconnected. They do not form a coherent catenary system over the tracks. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wires connecting to the horizontal structures are extremely thin, jagged, disjointed, and do not form a physically logical catenary system. (top-center, strong)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at middle-left, whole-image

- gpt-6-sol: The workers’ hands and the small objects beside the rail are hard to distinguish. (middle-left, weak)
- gpt-6-sol: The workers’ hands and small items at rail level are hard to distinguish and look somewhat smeared. (middle-left, weak)
- claude-opus-5.5: Overly smooth, uniformly processed look with painterly texture on concrete and trees (whole-image, moderate)
- claude-opus-5.5: The image has an overall smooth, painterly texture. Concrete joints and puddles look soft, with a uniform AI-like sheen. (whole-image, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at middle-left, middle-right

- claude-opus-5.5: Worker hands and tools are blurry smudges; leftmost worker's gear on ground is an indistinct mass (middle-left, moderate)
- gemini-3.1-pro-preview: The worker in the orange jacket on the right track has malformed lower anatomy; his right leg appears to merge into his left or disappear, and clear feet or boots are missing. (middle-right, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-left

- claude-opus-5.5: Three workers crouch in a neat row straddling rails with tools and pads that blend into wet concrete; hands and tools are indistinct mush (middle-left, moderate)
- claude-opus-5.5: Three workers crouch in a neat row on the left track, one at each rail and one between them. The arrangement looks staged, and their hands and tools are smeared and indistinct. (middle-left, moderate)

## e-group-R-3.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at top-right, whole-image

- gpt-6-sol: Fine details inside the distant building bay look indistinct, though distance and low light could explain this. (top-right, weak)
- claude-opus-5.5: Overly smooth, painterly HDR look on concrete and building siding, typical of diffusion output (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly concrete and puddles with a uniform HDR-like rendering; the dark speckle grit along the rails looks like generated texture. (whole-image, moderate)
- claude-opus-5.5: Overall smooth, painterly rendering with an HDR-like look; concrete slab joints are soft, and the gravel along the rails looks smeared. (whole-image, moderate)

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Two embedded rail pairs in concrete with no visible switch or connection; left track curves toward left door, right toward right door, but rails appear simplified with no flangeways or joints (center, moderate)
- claude-opus-5.5: Embedded tram rails in concrete lack proper groove/flangeway detail; the left track pair curves and converges oddly, and the right track's left rail continues straight with no switch connection between the two branches, which is inconsistent for a yard throat. (center, moderate)
- claude-opus-5.5: Two separate embedded track pairs run toward two different bay doors, but neither has a visible switch or junction; the rails simply parallel each other with no connection, and the rails curve gently in a slightly irregular way. (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left, top-center

- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent; poles with cantilever arms don't clearly support wires over tracks (top-left, moderate)
- claude-opus-5.5: Catenary wires are sparse and don't connect coherently between poles; the poles have arms with no consistent contact wire over the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead wires attach to poles inconsistently; the catenary arms don't clearly line up above the tracks, and the wires end abruptly. (top-left, moderate)

**people_anatomy**: score 5, raised in 4/9 calls, at middle-right

- gpt-6-sol: The three workers' overlapping hands and tools are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers' hands and tools are hard to distinguish where they meet the rail; this could look slightly muddled, though the distance and overlap explain it. (middle-right, weak)
- claude-opus-5.5: Worker figures have mushy, indistinct hands and tools; legs and boots blend into ground (middle-right, moderate)
- claude-opus-5.5: Workers' hands and feet blur into their bags; the boots and gloves are indistinct, and the leftmost right-track worker's legs merge with a tool bag. (middle-right, weak)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Three workers kneeling in a tight row all on/between the right track rails, staged pose looking like a generated scenario; left worker kneels centered between rails (middle-right, moderate)
- claude-opus-5.5: Three workers cluster tightly on the right track in a staged, symmetric kneeling arrangement, with one lone worker on the left; the poses are similar and their hands are vague at the rails. (middle-right, moderate)

## e-two-L-2.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.68 / 0.75 / 0.75
- google/gemini-3.1-pro-preview: 0.02 / 0.01 / 0.02

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: Poles with cross-arms stand beside the tracks, but there is no consistent catenary contact wire running above either track. Only a few stray diagonal wires appear near the top-left and top-right. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and do not clearly connect over each track; wires seem to hang without consistent alignment above rails (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent; poles have arms but wires don't clearly connect over tracks (top-left, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Surfaces have a smooth, slightly painterly quality, with soft and uniform detail on the concrete, puddles and building cladding. (whole-image, weak)
- claude-opus-5.5: Overall smooth, slightly painterly rendering of concrete and puddles with uniform soft sharpness typical of generated video frames (whole-image, moderate)
- claude-opus-5.5: Smooth, slightly painterly concrete and puddle reflections with soft uniform detail; building facade overly clean and symmetric (whole-image, weak)

**track_geometry**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Left track pair converges toward left door while right track pair heads to right door; the left pair's rails appear to curve oddly, with the right rail of the left track bending around workers in a way that looks plausible but rails seem unusually narrow-gauge and inconsistent spacing near the far end (center, moderate)
- claude-opus-5.5: Left track pair converges toward the left building door while right track goes to right door; the left track's right rail appears to run oddly, and track spacing/gauge looks inconsistent between the two pairs with no visible switch connection despite both originating from same area (center, moderate)

**people_anatomy**: score 3, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The nearer rail partly obscures one worker's hands, making their exact placement hard to resolve. (center, weak)
- gpt-6-sol: The workers’ hands and tools near the rails are hard to distinguish, leaving some fine detail ambiguous. (middle-left, weak)
- gpt-6-sol: The workers' hands and gear near the rail are difficult to distinguish, though the distance and resolution could explain this. (center, weak)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: Two workers kneeling at the rail with a tool bar between them; hands and tool contact somewhat vague, bags merge into ground (center, weak)
- claude-opus-5.5: Two workers kneeling directly on the track in matching hi-vis, posed neatly with bags, typical staged AI composition; hands and tools are vague (center, moderate)

## e-two-R-2.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.70
- google/gemini-3.1-pro-preview: 0.02 / 0.01 / 0.02

**texture_noise_or_sharpness**: score 6, raised in 6/9 calls, at middle-right, whole-image

- gpt-6-sol: The workers’ hands and small items by the rail are too soft to resolve clearly, leaving some fine details uncertain. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small objects beside the rail are difficult to distinguish at this resolution. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small objects near the rails are difficult to resolve at this distance. (middle-right, weak)
- claude-opus-5.5: Overly smooth, HDR-like rendering of the wet concrete and reflections, with uniformly soft detail and painterly puddles (whole-image, weak)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-right, top-left

- claude-opus-5.5: Overhead catenary is sparse and inconsistent: a few wires hang from poles but don't clearly run over each track into the shed entrances (top-right, moderate)
- claude-opus-5.5: Overhead catenary is sparse and inconsistent: thin wires from poles do not form a coherent contact wire over the tracks (top-right, moderate)
- claude-opus-5.5: The catenary poles and arms carry only sparse, thin wires that don't clearly run above the tracks. The wiring looks incomplete or inconsistent for a working tram depot. (top-left, moderate)

**track_geometry**: score 5, raised in 3/9 calls, at center

- claude-opus-5.5: Two embedded track pairs diverge from the foreground with no visible switch blades, frog, or connecting rails; the right pair simply begins at the bottom edge, inconsistent with real depot trackwork (center, moderate)
- claude-opus-5.5: Two embedded track pairs diverge from the foreground without any visible switch, frog or turnout; left pair curves left into the shed with no connection to the right pair, geometry looks implausible for a depot fan (center, moderate)
- claude-opus-5.5: The two tracks curve apart without any visible switch or frog connecting them. The rail grooves look smoothly painted rather than showing realistic flangeway detail. (center, weak)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Two workers in hi-vis kneel on the right track in near-symmetrical poses, their hands merging into indistinct tools at the rail (middle-right, moderate)
- claude-opus-5.5: Two workers kneel on the right track in near-identical poses, hands on the rail with indistinct tools, staged-looking placement (middle-right, moderate)

**camera_or_windscreen**: score 2, raised in 2/9 calls, at bottom-center

- claude-opus-5.5: A dark dashboard or windscreen edge along the bottom frames a staged cab-view composition, typical of generated 'driver POV' images (bottom-center, weak)
- claude-opus-5.5: Dark dashboard/hood edge in foreground gives cab-view framing typical of generated 'driver view' prompts (bottom-center, weak)

## f-group-L-1.jpg: mean P(AI) 0.42 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.20 / 0.70 / 0.80
- google/gemini-3.1-pro-preview: 0.95 / 0.05 / 0.99

**track_geometry**: score 12, raised in 4/9 calls, at center, bottom-left, bottom-right

- claude-opus-5.5: Left track's right rail appears to merge/converge oddly near the workers, with a short rail segment entering under them; geometry of the embedded tram rails is somewhat ambiguous but plausible. (center, weak)
- claude-opus-5.5: Left track rails converge into a single narrow line inside the depot doorway; both rails approach each other unnaturally, and the left track's gauge appears inconsistent relative to the right track (bottom-left, moderate)
- gemini-3.1-pro-preview: The left set of tracks appears to vanish or lose its solid structural form exactly where the workers are positioned. (bottom-left, strong)
- gemini-3.1-pro-preview: The two rails of the track on the right converge and completely lose their parallel gauge as they curve toward the building. (bottom-right, strong)

**texture_noise_or_sharpness**: score 11, raised in 6/9 calls, at middle-right, whole-image

- gpt-6-sol: Fine details around the lone worker's hands and the rail are indistinct, though the dim light and distance could account for this. (middle-right, weak)
- claude-opus-5.5: There is some smoothing and compression softness, and the building facade is fairly uniform. This could be denoising rather than generation. (whole-image, weak)
- claude-opus-5.5: Smooth, painterly rendering with uniform softness on the workers and bags; fine detail such as hands and tools is mushy. (whole-image, moderate)
- claude-opus-5.5: Smooth, painterly texture on surfaces and figures with little genuine sensor noise despite dusk lighting (whole-image, moderate)

**people_pose_or_placement**: score 11, raised in 5/9 calls, at bottom-left, middle-left, center, bottom-right, middle-right

- gpt-6-sol: Three workers crouch around a small section of the left track; their hands and tools overlap and are hard to distinguish. (bottom-left, weak)
- claude-opus-5.5: Three workers kneeling in a tight cluster on the left track, posed neatly and symmetrically, with a single worker on the right track; staged-looking arrangement. (middle-left, moderate)
- claude-opus-5.5: Three workers on left track kneel in a tidy symmetric row on the rails with indistinct hands and tools; the right worker's pose is merged with the rail (center, moderate)
- gemini-3.1-pro-preview: The worker on the right track has lower limbs that meld indistinctly into the ground and the rail, lacking clear anatomical structure. (bottom-right, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: Overhead catenary wires are sparse and do not clearly connect to the tracks entering the doors; cantilever arms end abruptly (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are very faint, disjointed, and fail to form a coherent, continuous system connecting the supporting structures. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire infrastructure is faint, broken, or logically disconnected in several places above the tracks. (top-center, moderate)

**people_anatomy**: score 3, raised in 2/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and the equipment between them are hard to distinguish. (center, weak)
- gemini-3.1-pro-preview: The three workers on the left blend into each other, with unclear boundaries between their bodies, limbs, and clothing. (middle-left, moderate)

## f-group-R-3.jpg: mean P(AI) 0.51 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.98

**text_signage_or_markings**: score 12, raised in 5/9 calls, at center, middle-right, bottom-right

- claude-opus-5.5: The lettering on the orange vest's back is garbled and illegible, like pseudo-text. (center, moderate)
- claude-opus-5.5: Lettering on the back of the orange vest is garbled, pseudo-text. (center, moderate)
- claude-opus-5.5: Lettering on orange vest of middle worker is garbled, illegible pseudo-text (middle-right, moderate)
- gemini-3.1-pro-preview: The text on the back of the worker's orange high-visibility jacket is a jumble of nonsensical, illegible characters rather than a real word or logo. (bottom-right, strong)

**overhead_wires_or_poles**: score 11, raised in 4/9 calls, at top-right, top-center, middle-right, top-left

- claude-opus-5.5: The catenary wires attach vaguely to the poles and fade out with no coherent supports over the tracks. (top-right, moderate)
- claude-opus-5.5: Overhead wires sparse and don't align with tracks; catenary arms end ambiguously (top-center, weak)
- gemini-3.1-pro-preview: The large vertical pole on the right side of the yard lacks a defined base or mounting mechanism, appearing to fade directly into the concrete surface. (middle-right, moderate)
- gemini-3.1-pro-preview: The thin lines intended to represent overhead catenary wires in the sky are fragmented, floating arbitrarily, and do not connect logically to each other or the support structures. (top-left, strong)

**track_geometry**: score 10, raised in 4/9 calls, at center, bottom-right, bottom-left

- claude-opus-5.5: The two track pairs converge toward their depot doors, but the rails of the right pair bend and taper inconsistently; the gauge narrows unrealistically near the workers. (center, moderate)
- claude-opus-5.5: Right track's left rail appears doubled/merging oddly near the bottom; the rails converge into the depot without plausible switch hardware or a consistent gauge. (bottom-right, moderate)
- claude-opus-5.5: The left track rails are embedded in asphalt with no sleepers or fastenings visible, and they curve unevenly. (bottom-left, weak)
- claude-opus-5.5: Left track pair converges unnaturally: the two rails of the left track don't stay parallel at consistent gauge, and right track rails splay with odd spacing; rails seem embedded in flat asphalt with no ties or flangeways consistent with tram track (center, moderate)

**composition_or_staging**: score 5, raised in 4/9 calls, at whole-image, middle-right

- gpt-6-sol: The two illuminated depot entrances and worker groups make an unusually balanced composition. (whole-image, weak)
- claude-opus-5.5: The three workers are huddled in a neat cinematic arrangement, all kneeling at one spot on the rail with no visible tools of purpose. The scene has a stock-photo quality. (middle-right, weak)
- claude-opus-5.5: The scene is a symmetric depot with two identical lit bays and two tracks, each with workers, in a cinematic dusk grade typical of generated stock imagery. (whole-image, weak)
- claude-opus-5.5: Highly staged cinematic scene: symmetric depot doors, workers clustered neatly, dusk lighting with glowing wet asphalt typical of generated stock imagery (whole-image, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at middle-left, bottom-right

- claude-opus-5.5: The lone worker on the left is a blob-like crouched figure, and his limbs and helmet merge together. (middle-left, moderate)
- gemini-3.1-pro-preview: The lower legs of the worker in yellow on the far right blend seamlessly into the adjacent tool bag and the ground, lacking distinct anatomical structure. (bottom-right, strong)

## f-two-L-2.jpg: mean P(AI) 0.51 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.98

**tools_or_small_objects**: score 14, raised in 8/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers' hands and the objects beside the rail are indistinct, making their exact shapes hard to verify. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the object between them are indistinct, making their exact interaction hard to verify. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the objects beside the rail are difficult to distinguish, though they may simply be obscured or blurred. (bottom-center, weak)
- claude-opus-5.5: The tool bags and the objects on the ground are amorphous blobs with no distinct tools. (bottom-center, moderate)

**track_geometry**: score 14, raised in 5/9 calls, at center, bottom-left, middle-right

- claude-opus-5.5: Left track's right rail curves toward the building entrance, but its pairing with the left rail is inconsistent: the rails diverge and converge oddly and do not keep a constant gauge toward the portal. (center, moderate)
- claude-opus-5.5: Left track's rails converge oddly toward the depot door; the left rail and right rail of the left track don't keep consistent gauge, and the right rail runs under the worker's knee and continues unbroken with ambiguous geometry. (center, moderate)
- claude-opus-5.5: Left track's right rail curves and converges oddly toward the left rail near the door; the two rails' spacing appears inconsistent, narrowing unnaturally into the shed (center, moderate)
- gemini-3.1-pro-preview: The leftmost rail of the left track runs up to the kneeling worker in the yellow jacket and completely disappears; it does not continue past him toward the building. (bottom-left, strong)

**overhead_wires_or_poles**: score 12, raised in 5/9 calls, at top-center, top-left

- claude-opus-5.5: The catenary wires from the poles end abruptly or wander, and there is no consistent wire over the tracks. (top-center, moderate)
- claude-opus-5.5: Catenary wires on the poles are sparse and don't clearly connect to any coherent overhead system above the tracks; the cantilever arms end with no contact wire over the rails. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and do not clearly run over the tracks into the depot; cantilever arms end without coherent wire support (top-center, moderate)
- gemini-3.1-pro-preview: A wire hanging down from the horizontal arm of the tall pole on the left simply ends abruptly in mid-air without connecting to anything. (top-left, strong)

**buildings**: score 6, raised in 5/9 calls, at top-center, middle-right

- gpt-6-sol: The two similarly lit service bays give the scene a somewhat repetitive appearance, though that is normal for this type of building. (top-center, weak)
- claude-opus-5.5: Very symmetric depot with two identical lit portals; the interiors are smooth and generic. (top-center, weak)
- claude-opus-5.5: Depot doorways have overly clean, symmetric interiors with smeared repeated lighting; small wall details are vague. (top-center, weak)
- claude-opus-5.5: Building is generic and featureless with symmetrical twin doors, overly clean staging; small vents and doors look simplified (top-center, weak)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Both workers kneel directly on a rail. The right worker's legs and feet merge ambiguously with the rail and bag, and the hand/tool contact with the rail is vague. (center, moderate)
- claude-opus-5.5: Both workers kneel directly on/straddling rails in a staged, symmetric pose; the hands of the orange-vest worker blend into the rail area with no clear tool. (center, moderate)
- claude-opus-5.5: Workers kneel directly on rails with tools floating near rail; the right worker's legs and boots merge ambiguously with bag on ground (center, moderate)

## f-two-R-1.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.75 / 0.80
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.98

**track_geometry**: score 10, raised in 4/9 calls, at bottom-left, bottom-right, bottom-center

- claude-opus-5.5: Left track rails converge toward the building but the track is embedded with no switch or connection; the rails curve oddly, narrowing then widening, inconsistent with a real gauge (bottom-left, moderate)
- claude-opus-5.5: Right track's rails merge with a single rail at the bottom toward the camera, and the gauge between rails varies unnaturally near the workers (bottom-right, moderate)
- claude-opus-5.5: Left track pair converges and the right track pair is separate, but the rails show unusual geometry: left track's two rails converge into a single entry in a way that looks like a merging spline without proper switch frog/points; rails lack visible ties or clear embedding grooves consistent with a real depot (bottom-center, moderate)
- claude-opus-5.5: Left track rails are embedded grooved rails with consistent gauge converging toward the left bay; no flangeways or switch blades visible, tracks look like simple inlaid lines (bottom-left, weak)

**overhead_wires_or_poles**: score 10, raised in 4/9 calls, at top-center, top-right, top-left

- claude-opus-5.5: Catenary wires are sparse and do not follow the tracks into the depot doors; poles' cantilevers end without meaningful wire runs (top-center, moderate)
- claude-opus-5.5: Catenary wires are sparse and do not clearly continue into the shed entrances; cantilever arms look simplified (top-center, weak)
- claude-opus-5.5: Overhead wires from the poles are sparse and do not clearly continue into the depot doors as a catenary would; the wires end ambiguously (top-center, moderate)
- gemini-3.1-pro-preview: The connections on the right catenary pole are rendered as undefined, melted blobs, and the attached wires branch off in chaotic, nonsensical directions rather than forming a coherent power system. (top-right, strong)

**people_anatomy**: score 8, raised in 5/9 calls, at middle-right, bottom-right

- gpt-6-sol: The kneeling workers' hands and the area where they meet the rail are too dark and soft to resolve clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and nearby gear are hard to distinguish at this resolution, leaving some visual ambiguity. (middle-right, weak)
- claude-opus-5.5: Workers' hands and tools are indistinct blobs at the rail; no clear tool visible despite apparent work (middle-right, moderate)
- claude-opus-5.5: Two workers crouched on the right track have somewhat mushy hands and tools; the ground contact and their legs blur together (middle-right, weak)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at whole-image, center

- claude-opus-5.5: Overall smooth, painterly texture with mushy fine detail in the fences and background cages (whole-image, moderate)
- gemini-3.1-pro-preview: The wet ground in the broad areas between the tracks has an overly smooth, smeared quality typical of generative artifacts, lacking the crisp grit and micro-detail expected of a real paved surface. (center, moderate)

**composition_or_staging**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric, stock-photo-like composition of two identical depot doors with two kneeling workers in hi-vis, typical of generated imagery (whole-image, weak)
- claude-opus-5.5: Highly symmetric, cinematic stock-like scene with two identical illuminated portals, evenly spaced bollards and moody dusk lighting (whole-image, moderate)
