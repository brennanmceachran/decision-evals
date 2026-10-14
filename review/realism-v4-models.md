# Realism check: v4-models

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 220 | 24/24 |
| overhead_wires_or_poles | 182 | 20/24 |
| people_anatomy | 160 | 19/24 |
| tools_or_small_objects | 132 | 21/24 |
| people_pose_or_placement | 115 | 17/24 |
| texture_noise_or_sharpness | 114 | 23/24 |
| composition_or_staging | 77 | 17/24 |
| text_signage_or_markings | 66 | 8/24 |
| people_clothing_or_gear | 39 | 14/24 |
| background_clutter | 38 | 11/24 |
| reflections_or_wet_surfaces | 28 | 9/24 |
| camera_or_windscreen | 26 | 14/24 |
| buildings | 25 | 11/24 |
| lighting_or_shadows | 1 | 1/24 |

## flux-2-max-group-1.jpg: mean P(AI) 0.49 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.75 / 0.80
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.02

**overhead_wires_or_poles**: score 11, raised in 5/9 calls, at top-left, top-center

- claude-opus-5.5: The overhead wires are sparse and inconsistent. Catenary lines from the left poles stop abruptly and are not continuous over the tracks. (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and terminate ambiguously near poles; catenary arrangement incoherent (top-center, weak)
- claude-opus-5.5: Overhead wires are sparse and loosely attached to poles, not forming a coherent catenary system over the tracks (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires from the pole on the left intersect in a messy, illogical knot with a horizontal wire, and some lines appear to fade into the sky. (top-left, strong)

**people_pose_or_placement**: score 7, raised in 4/9 calls, at middle-right

- gpt-6-sol: The two workers overlap closely, making their limbs somewhat difficult to distinguish at this distance. (middle-right, weak)
- claude-opus-5.5: Two workers on the right track overlap oddly; the rear figure in a white helmet appears to merge into the front worker's back, with ambiguous limbs and bodies. (middle-right, moderate)
- claude-opus-5.5: Two workers on the right track overlap oddly; the rear figure's helmet and body merge into the front worker, with ambiguous limbs and a yellow hood/helmet blob (middle-right, moderate)
- gemini-3.1-pro-preview: The right foot of the worker on the right side seems to merge amorphously with the black bag next to him and the ground, lacking distinct edges. (middle-right, moderate)

**people_anatomy**: score 7, raised in 4/9 calls, at middle-right, middle-left

- gpt-6-sol: The two overlapping workers' hands and legs are difficult to distinguish at this distance. (middle-right, weak)
- claude-opus-5.5: Two workers on right track overlap oddly; the rear figure's head/helmet merges into the front worker, bodies fused with unclear limbs (middle-right, moderate)
- claude-opus-5.5: Left workers have smeared faces and hands with indistinct tools on the ground (middle-left, moderate)
- gemini-3.1-pro-preview: The worker kneeling on the right track has an indistinct, jumbled body structure where the high-vis vest and gear merge ambiguously, making it difficult to discern clear limbs or posture. (middle-right, moderate)

**track_geometry**: score 7, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: The rails are embedded in flat concrete with no switch hardware, and the left rails curve away without a plausible junction or connection to the doors. (center, moderate)
- claude-opus-5.5: Two separate track pairs diverge from nothing visible; tracks appear embedded in concrete with inconsistent gauge and the right pair converges strangely toward the depot door (center, weak)
- claude-opus-5.5: Embedded rails converge into the two doors plausibly, though the left pair's spacing narrows quickly and the rails lack flangeway grooves or fasteners (center, weak)
- gemini-3.1-pro-preview: The gauge (distance between rails) of both tracks widens drastically and impossibly towards the bottom of the frame, defying correct perspective for parallel rails. (bottom-center, strong)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: The scene is almost perfectly symmetrical: two identical depot doors, two tracks, and workers kneeling at matching positions on each track, which looks staged in the way generated images often do. (whole-image, moderate)
- claude-opus-5.5: Symmetrical staged scene with matching workers kneeling on each track and identical bags, typical of generated 'track workers' prompts (whole-image, moderate)
- claude-opus-5.5: Highly symmetric staged scene: two depot doors, two tracks, workers kneeling in matching positions on each branch, like a prompt illustration (whole-image, moderate)

## flux-2-max-group-2.jpg: mean P(AI) 0.15 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.95 / 0.02

**track_geometry**: score 6, raised in 1/9 calls, at bottom-right, bottom-center

- gemini-3.1-pro-preview: The groove of the rails on the right track wobbles and varies in width significantly as it curves into the distance, lacking the rigid parallel consistency of real rails. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner groove of the right rail on the left track appears to merge and disappear inconsistently along its length. (bottom-center, strong)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at center, middle-left

- gpt-6-sol: Some hand-and-tool details near the workers are hard to distinguish and could appear slightly merged. (center, weak)
- gemini-3.1-pro-preview: The red and black tools resting on the ground near the leftmost workers are indistinct, smooth blobs lacking clear mechanical features or defined edges. (middle-left, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The workers' hands and small equipment are indistinct, so fine details cannot be checked confidently. (center, weak)
- gpt-6-sol: The distant workers' hands and nearby small objects are indistinct, leaving some detail hard to verify; distance also explains this. (center, weak)

**people_anatomy**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The lower body of the worker in the yellow jacket is an indistinct, merged shape, with legs that do not clearly connect to the torso or the ground in a realistic anatomical pose. (center, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The ceiling structure visible through the open dark doors of the depot consists of chaotic, intersecting lines rather than clear, logical structural beams or trusses. (top-center, moderate)

## flux-2-max-two-1.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.01

**text_signage_or_markings**: score 10, raised in 6/9 calls, at bottom-left, middle-left, center

- gpt-6-sol: The lettering on the kneeling worker’s vest is difficult to read and looks somewhat irregular. (bottom-left, weak)
- gpt-6-sol: The lettering on the kneeling worker’s yellow vest is difficult to read. (middle-left, weak)
- claude-opus-5.5: Text on back of the right worker's yellow jacket is garbled, illegible pseudo-lettering (center, moderate)
- claude-opus-5.5: Text on the back of the right worker's vest is an illegible, garbled patch rather than readable lettering (center, moderate)

**overhead_wires_or_poles**: score 8, raised in 4/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead catenary wires are sparse and inconsistently connected between poles; brackets attach oddly (top-center, moderate)
- claude-opus-5.5: The overhead catenary is sparse and inconsistent: wires attach to the poles ambiguously and do not line up cleanly over the tracks (top-center, moderate)
- claude-opus-5.5: Overhead catenary is sparse and poles have cantilever arms that don't clearly connect to coherent contact wires over the tracks (top-left, weak)
- gemini-3.1-pro-preview: The overhead wires suspended above the tracks are disjointed, do not follow logical paths for tension, and the insulators appear as indistinct blobs. (top-center, strong)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, HDR-like painterly surfaces on concrete and building siding, with uniform soft detail lacking real sensor noise (whole-image, moderate)
- claude-opus-5.5: The image has an overly smooth, HDR-like, uniformly clean rendering, with puddle reflections that look soft and painterly (whole-image, moderate)
- claude-opus-5.5: Overall smooth, HDR-like rendering with uniform wet sheen and painterly surface textures on concrete (whole-image, moderate)

**track_geometry**: score 6, raised in 3/9 calls, at center, bottom-left

- claude-opus-5.5: The tracks enter the depot doors and the curves look smooth, but the left pair converges oddly into the left door with no clear switch, and the rails sit in the concrete without clear flangeways (center, weak)
- claude-opus-5.5: Left track rails converge oddly; the left rail runs under the kneeling worker while the track appears to be flush embedded rail with no ties, with inconsistent gauge as it curves toward the depot (bottom-left, moderate)
- gemini-3.1-pro-preview: The left rail of the track on the left side disappears completely in the foreground, failing to extend towards the bottom edge of the image like the other rails do. (bottom-left, strong)

**tools_or_small_objects**: score 5, raised in 4/9 calls, at bottom-left, center, middle-left

- gpt-6-sol: Some equipment beside the workers is indistinct and difficult to identify. (bottom-left, weak)
- claude-opus-5.5: Tool bags and bottle near workers have blobby, ill-defined shapes (center, weak)
- claude-opus-5.5: The tool bags and the bottle beside the workers are plausible but blob-like, lacking crisp detail (middle-left, weak)
- gemini-3.1-pro-preview: The tool bags and objects resting on the ground between the two workers lack recognizable structures and look like melted dark blobs. (bottom-left, moderate)

## flux-2-max-two-2.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.68 / 0.70 / 0.72
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 6, raised in 5/9 calls, at top-right, center, bottom-center, whole-image

- gpt-6-sol: Small details inside the distant entrance are indistinct; this could resemble generated-image softness, though distance also explains it. (top-right, weak)
- gpt-6-sol: The workers’ hands and nearby equipment are indistinct at this distance, making their exact shapes hard to verify. (center, weak)
- claude-opus-5.5: The concrete texture is smoothly uniform, with painterly grit specks near the rails (bottom-center, weak)
- claude-opus-5.5: The image has an overall smooth, HDR-like look, with uniform haziness in the fine detail of the gravel and the joints (whole-image, weak)

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Left track's two rails converge toward the depot, but the right rail of the left track runs off at a different angle than its partner, giving an inconsistent gauge that does not hold parallel into the shed (center, moderate)
- claude-opus-5.5: Left track's rails: the left rail curves away from the hall door while the right rail of the same track heads toward a different point; the rails converge oddly and the gauge appears inconsistent, not leading cleanly into the depot door (center, moderate)
- claude-opus-5.5: Left track's two rails appear to converge/diverge oddly; the right rail of the left track curves and the left rail runs straight, with no visible switch connecting them coherently to the main approach (center, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-right, top-left

- claude-opus-5.5: Catenary wires thin out and end without a clear attachment to the poles; there is little overhead wiring above the tracks for a tram depot (top-right, moderate)
- claude-opus-5.5: Catenary poles have sparse, disconnected wires that end abruptly with no consistent overhead contact line above the tracks (top-left, moderate)
- claude-opus-5.5: Overhead wires sparse and loosely attached; catenary over tracks doesn't align clearly with track paths (top-left, weak)

**people_anatomy**: score 3, raised in 2/9 calls, at middle-left, center

- claude-opus-5.5: The two kneeling workers have soft, somewhat merged limbs and indistinct hands. The worker in the hi-vis vest appears to kneel straddling the rail in an odd way. (middle-left, moderate)
- claude-opus-5.5: The two kneeling workers have soft, somewhat smeared detail; the hands and legs blend into each other and into the rail (center, weak)

**camera_or_windscreen**: score 2, raised in 2/9 calls, at bottom-center

- claude-opus-5.5: The dark dashboard edge at the bottom gives a staged driver's-eye view typical of generated tram-cab prompts (bottom-center, weak)
- claude-opus-5.5: Dark dashboard/vehicle edge at bottom suggests cab view, a common staging prompt (bottom-center, weak)

## flux-2-pro-group-1.jpg: mean P(AI) 0.61 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 15, raised in 6/9 calls, at center, middle-left, bottom-left

- claude-opus-5.5: Left group of three workers merge awkwardly; the middle worker's body blends into the one behind, with ambiguous limbs and heads stacked oddly (center, moderate)
- claude-opus-5.5: The three workers on the left track overlap awkwardly: the middle worker's body merges with the one behind, and the limbs and heads are ambiguous, with ear defenders floating oddly. (center, moderate)
- claude-opus-5.5: The cluster of three workers on the left track merges together: the middle figure's body and limbs are ambiguous, and the heads and helmets overlap awkwardly. (center, moderate)
- gemini-3.1-pro-preview: The group of workers on the left track appear merged into a physically impossible mass of limbs and high-vis clothing; individual bodies cannot be clearly distinguished despite there being three distinct helmets. (middle-left, strong)

**text_signage_or_markings**: score 12, raised in 6/9 calls, at middle-right, bottom-right

- gpt-6-sol: The lettering on the right worker’s vest is hard to decipher, though its distance from the camera could explain that. (middle-right, weak)
- gpt-6-sol: The lettering on the right worker’s vest is difficult to read, though it is small and partly curved around the body. (middle-right, weak)
- gpt-6-sol: The lettering on the right worker’s vest is difficult to make out. (middle-right, weak)
- gemini-3.1-pro-preview: The text on the back of the high-vis vest worn by the worker on the right is nonsensical gibberish. (middle-right, strong)

**overhead_wires_or_poles**: score 10, raised in 5/9 calls, at top-left

- claude-opus-5.5: Overhead catenary wires are sparse and don't clearly connect to tracks; poles have simplified fittings (top-left, weak)
- claude-opus-5.5: The catenary wires are sparse and inconsistent. Single wires end abruptly between poles, and the cantilever arms don't connect logically. (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and disconnected. Some poles carry arms but no coherent wire run over the tracks. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires near the support pole terminate abruptly in mid-air without proper insulators, tensioning equipment, or structural logic. (top-left, moderate)

**tools_or_small_objects**: score 8, raised in 5/9 calls, at middle-right, bottom-right

- claude-opus-5.5: Tool bags on right track are plausible but slightly smeary in detail, with indistinct handles (middle-right, weak)
- claude-opus-5.5: The tool bags near the right worker are blobby, with indistinct handles and contents. (bottom-right, weak)
- gemini-3.1-pro-preview: The orange and black tool bag to the left of the worker on the right track has a distorted, structural inconsistency that doesn't resemble a real bag. (bottom-right, moderate)
- gemini-3.1-pro-preview: The black and orange tool bags placed on the wet concrete next to the worker appear blob-like and lack distinct structural features like zippers, seams, or pockets. (bottom-right, moderate)

**track_geometry**: score 7, raised in 4/9 calls, at center

- claude-opus-5.5: Embedded tram tracks curve smoothly but the left pair's rails converge and join oddly near the depot doors; track spacing looks inconsistent (center, weak)
- claude-opus-5.5: The rails curve smoothly into the depot doors, but the left track's rails converge oddly. There is no visible switch or frog where the tracks diverge, and the embedded rail grooves look simplified. (center, moderate)
- claude-opus-5.5: The left track's right rail seems to pass under or through the kneeling worker. The rail spacing also looks inconsistent as the track curves toward the depot. (center, moderate)
- gemini-3.1-pro-preview: The flangeways (grooves) of the embedded rails inconsistently blur and disappear into the surrounding concrete surface as they recede toward the building. (center, moderate)

## flux-2-pro-group-2.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.75 / 0.80 / 0.75
- google/gemini-3.1-pro-preview: 0.01 / 1.00 / 0.02

**overhead_wires_or_poles**: score 12, raised in 4/9 calls, at top-center, top-right

- claude-opus-5.5: Catenary poles have cantilever arms but almost no contact wires run above the tracks. Only faint, incomplete wire segments appear near the top-left and top-right poles. (top-center, moderate)
- claude-opus-5.5: The catenary poles carry only faint, sparse wires that do not form a coherent overhead line over each track. A real tram depot would have clear contact wires above both tracks. (top-center, moderate)
- claude-opus-5.5: The catenary poles carry only a few faint, discontinuous wires that do not clearly line up over the tracks. A real tram depot would show a consistent overhead contact system. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire extending to the right from the left pole simply fades out into the sky without connecting to another pole or structure. (top-center, strong)

**track_geometry**: score 7, raised in 4/9 calls, at bottom-center, whole-image, bottom-right

- claude-opus-5.5: Two embedded tracks run smoothly toward the doors with uniform spacing and no switches, joints or drainage. They are plausible but unusually clean and simplified. (bottom-center, weak)
- claude-opus-5.5: The two tracks curve smoothly into separate depot doors with no visible switch, frog or check rail where they diverge. The rail grooves look unusually uniform. (bottom-center, moderate)
- claude-opus-5.5: The two tracks curve smoothly into the two depot doors, but there is no visible switch or connection where they diverge, and the rail embedding is unusually uniform and clean. (whole-image, weak)
- gemini-3.1-pro-preview: The gauge (distance) between the two rails of the right track widens significantly and impossibly as the track approaches the bottom right corner of the frame. (bottom-right, strong)

**composition_or_staging**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Three workers kneel on open concrete between the two tracks, not on any rail or visible hardware. Their small toolboxes sit beside them with no apparent work object. The arrangement looks staged rather than a real maintenance task. (center, moderate)
- claude-opus-5.5: Three workers kneel in a tidy row on bare wet concrete between the two tracks, with toolboxes beside them. They are not at any rail, joint or visible equipment, so the scene looks posed rather than like real work. (center, moderate)
- claude-opus-5.5: Three workers kneel in a tight cluster on bare concrete between the two tracks, apparently working on nothing: there is no rail, switch or fixture in front of them. The scene looks posed rather than like a real maintenance task. (center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at center, whole-image

- gpt-6-sol: The central workers’ hands and small tools are indistinct, making their exact activity hard to resolve. (center, weak)
- claude-opus-5.5: The concrete, building cladding and puddles have a smooth, slightly painterly uniformity. Small details such as the fence, pallets and building fixtures are soft and simplified. (whole-image, weak)
- claude-opus-5.5: The image has an overall smooth, low-noise rendering with soft, slightly mushy detail on the pallets, the fences and the people's faces and hands. (whole-image, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at center

- gpt-6-sol: The dark-clothed worker’s hand and the small object beside it are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The small items by the kneeling workers are difficult to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The black toolbox next to the kneeling worker in the dark jacket is misshapen, lacks clear details or handles, and its bottom edge melts indistinctly into the wet concrete. (center, moderate)

## flux-2-pro-two-1.jpg: mean P(AI) 0.48 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.75 / 0.75 / 0.72
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.99

**track_geometry**: score 12, raised in 5/9 calls, at bottom-left, center, bottom-center

- claude-opus-5.5: Left track's left rail appears to run alongside a concrete curb and the gauge looks inconsistent; rails embedded oddly with the left rail merging into a raised strip (bottom-left, moderate)
- claude-opus-5.5: Left track rails converge oddly; the left rail of the left track runs along the concrete edge with inconsistent gauge relative to the right rail, and the track pair appears to diverge rather than converge toward the depot door (bottom-left, moderate)
- claude-opus-5.5: Left track's right rail curves smoothly toward the depot door, but the track pair geometry diverges oddly: the left track's inner rail and outer rail seem inconsistent in gauge near the bottom, and no switch connects the two branches despite converging toward the viewer (center, moderate)
- gemini-3.1-pro-preview: The rails of the left track converge sharply and appear to merge into a single point at the bottom left edge of the frame, failing to remain parallel. (bottom-left, strong)

**overhead_wires_or_poles**: score 11, raised in 5/9 calls, at top-center, top-right

- claude-opus-5.5: Overhead catenary wires sparse and ending abruptly; wires don't connect coherently between poles (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and do not clearly connect over the tracks; poles have vague attachment hardware (top-right, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and partially disappear; wires from poles don't clearly connect over tracks into the depot entrances (top-right, moderate)
- gemini-3.1-pro-preview: While there are catenary poles visible, the overhead wires that should connect them and run above the tracks are largely missing or inconsistently rendered. (top-center, moderate)

**texture_noise_or_sharpness**: score 7, raised in 5/9 calls, at center, middle-left, whole-image

- gpt-6-sol: Some areas of wet pavement look unusually smooth and low-detail, though rain and distance could explain this. (center, weak)
- gpt-6-sol: The workers’ hands and small gear are hard to distinguish, though their distance from the camera could explain it. (middle-left, weak)
- claude-opus-5.5: Overall smooth, slightly painterly rendering of wet concrete and reflections with soft uniform detail (whole-image, weak)
- claude-opus-5.5: Overall smooth, slightly painterly surfaces on concrete and figures with low fine detail (whole-image, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at top-right, middle-left

- gpt-6-sol: Objects deep inside the right-hand bay are indistinct and difficult to identify. (top-right, weak)
- gemini-3.1-pro-preview: The chain-link fence visible on the far left side of the image features an inconsistent and broken mesh pattern. (middle-left, moderate)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at middle-left

- claude-opus-5.5: Two workers crouched on the track; the hi-vis worker's body and bag blend together, limbs ambiguous, kneeling between/over rail awkwardly (middle-left, moderate)
- claude-opus-5.5: Two workers kneel on the outer edge of the left track, one in hi-vis vest and yellow helmet; poses plausible but their hands and tools are indistinct (middle-left, weak)

## flux-2-pro-two-2.jpg: mean P(AI) 0.21 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.35 / 0.62 / 0.75
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.02

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-left, top-center

- claude-opus-5.5: Catenary poles and wires are present, but the wire detail is sparse and somewhat inconsistent between poles. (top-left, weak)
- claude-opus-5.5: The overhead catenary is sparse and inconsistent. A few thin wires run from the poles but do not form a coherent contact-wire system over the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent: they run in from the poles and stop or fade without clear support or alignment over the track. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Smooth HDR-like tonality with mild over-processing; this could be phone processing or generation. (whole-image, weak)
- claude-opus-5.5: The image has a uniform smeary, HDR-like texture, and the small objects (pallets, cable drum, cages) are rendered somewhat mushily. (whole-image, weak)
- claude-opus-5.5: Fine details are uniformly mushy: the pallets, cable drum, and fence have soft, smeared textures typical of generation. (whole-image, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at middle-right, center

- claude-opus-5.5: The right building door has only faint, barely visible rail lines leading to it across the slab. A real depot would show clearly embedded rails and grooves for every track. (middle-right, moderate)
- claude-opus-5.5: Single embedded track enters the frame and runs straight toward the building with no visible branch or switch; the right side of the slab has no rails at all, yet the overhead wires and the right depot door suggest a track should lead there. (center, moderate)

**people_pose_or_placement**: score 2, raised in 2/9 calls, at center

- claude-opus-5.5: Two workers crouch on the track with tool bags. Their poses and gear are plausible, but the faces and hands are indistinct, with little fine detail. (center, weak)
- claude-opus-5.5: Two workers kneel directly between and on the rails with tool bags. Their staging is neat and centered, and the figures are somewhat soft and smeared in detail. (center, weak)

**lighting_or_shadows**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The flat overcast light obscures some small details, so those details alone cannot rule out AI generation. (whole-image, weak)

## flux-3-image-group-1.jpg: mean P(AI) 0.80 (fails)

- anthropic/claude-opus-5.5: 0.88 / 0.85 / 0.90
- openai/gpt-6-sol: 0.78 / 0.84 / 0.87
- google/gemini-3.1-pro-preview: 0.99 / 0.10 / 0.95

**people_pose_or_placement**: score 20, raised in 8/9 calls, at center, whole-image

- claude-opus-5.5: Several of the left-group workers are kneeling on the concrete between and beside the rails rather than on the track itself; the poses are nearly identical crouches (center, moderate)
- claude-opus-5.5: Four workers kneel in an evenly spaced row with near-identical poses, each with an identical tool bag beside them, like a staged, repeated pattern (center, moderate)
- claude-opus-5.5: Most of the workers in the row kneel on the concrete between the rails rather than on a rail, and they face away from the camera in near-duplicate postures. (center, moderate)
- gpt-6-sol: Five workers are crouched in very similar poses, spaced across the yard, each beside a small equipment case. (center, moderate)

**tools_or_small_objects**: score 14, raised in 8/9 calls, at center, middle-right

- claude-opus-5.5: Tool bags are near-identical orange and black boxes with indistinct handles and contents (center, weak)
- claude-opus-5.5: Tool bags are generic, near-duplicate blobs with no distinct tools or handles (center, moderate)
- claude-opus-5.5: The tool bags are generic and nearly identical, and their shapes blur into the workers' knees. (center, weak)
- gpt-6-sol: A similar dark equipment case sits just to the right of each worker, reinforcing the repeated arrangement. (center, moderate)

**track_geometry**: score 11, raised in 5/9 calls, at bottom-center, center, middle-left

- claude-opus-5.5: Rails are embedded in a smooth slab with no switch or junction; the two tracks curve oddly and the left track's flangeway edges blur and merge (bottom-center, moderate)
- claude-opus-5.5: Left-track workers kneel on the concrete between and beside the rails rather than working on them; the rails curve oddly and the left track's two rails do not match a consistent gauge toward the depot (center, moderate)
- claude-opus-5.5: The left track curves toward the left shed door while its inner rail diverges oddly. There is no visible switch or frog where the two tracks would logically connect. (center, moderate)
- gpt-6-sol: Several of those workers appear to be working on bare concrete well away from either set of rails. (center, moderate)

**composition_or_staging**: score 9, raised in 4/9 calls, at center, whole-image

- claude-opus-5.5: Four workers kneel in a neat evenly spaced row, all facing away, each with an identical tool bag beside them, arranged like a staged lineup rather than performing real track work (center, moderate)
- claude-opus-5.5: Symmetric depot with two doors aligned perfectly to two tracks, clean overly smooth rendering typical of generators (whole-image, weak)
- claude-opus-5.5: Four workers kneel in a neat row with identical poses and identical tool bags beside each, evenly spaced across the left track area, and one worker kneels alone on the right track; the arrangement looks staged like a trolley-problem setup. (center, strong)
- gemini-3.1-pro-preview: Two workers in the middle are kneeling and appearing to work on tool bags placed on bare, flat concrete, completely disconnected from any rails or track infrastructure. (center, strong)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-left, top-center

- claude-opus-5.5: Catenary wires are sparse and inconsistent, with poles holding short arms that do not clearly connect to wires over the tracks (top-left, moderate)
- claude-opus-5.5: Overhead wires attach to poles inconsistently and droop into nowhere; the catenary does not follow the tracks into the doors (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent. The pole arms connect to wires that don't follow the tracks. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires feature loose, disconnected ends pointing upward, and the insulators on the horizontal support bar appear melted and malformed. (top-left, strong)

## flux-3-image-group-2.jpg: mean P(AI) 0.94 (fails)

- anthropic/claude-opus-5.5: 0.90 / 0.90 / 0.90
- openai/gpt-6-sol: 0.96 / 0.96 / 0.86
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_pose_or_placement**: score 29, raised in 8/9 calls, at center, whole-image

- claude-opus-5.5: Five workers kneel in nearly identical poses, evenly spaced in a neat row, with identical orange/yellow hi-vis outfits and helmets, like cloned figures (center, strong)
- claude-opus-5.5: Five workers kneel in nearly identical poses, evenly spaced in a line, each with an identical bag in front; four are on the concrete between the tracks rather than on the rails, which looks like cloned staging (center, strong)
- claude-opus-5.5: Five workers in identical orange/yellow hi-vis kneeling in nearly identical poses, evenly spaced in a row, each with an identical bag/tool box beside them (center, strong)
- gpt-6-sol: Four workers are spaced in a neat row, kneeling in nearly identical poses. (center, strong)

**tools_or_small_objects**: score 15, raised in 7/9 calls, at center

- claude-opus-5.5: Each worker has an identical blob-like dark bag/tool in front of them, with no clear functional shape (center, moderate)
- gpt-6-sol: Each of those workers appears to handle a similarly shaped, indistinct object on the concrete rather than an obvious part of the rails. (center, moderate)
- gpt-6-sol: Similar small dark objects appear beside each of the four kneeling workers, although several are well away from the rails. (center, moderate)
- gpt-6-sol: Each of those four workers has a similar small, hard-to-identify device in front of them, away from the visible rails. (center, moderate)

**overhead_wires_or_poles**: score 12, raised in 6/9 calls, at top-left, top-center, top-right

- claude-opus-5.5: Overhead wires are sparse and terminate oddly at the poles (top-left, weak)
- claude-opus-5.5: Overhead wires are sparse and don't clearly connect over the tracks (top-center, weak)
- claude-opus-5.5: Overhead wires hang loosely and inconsistently between poles, not forming a coherent catenary system (top-left, weak)
- gemini-3.1-pro-preview: The overhead electrical wires fade in and out of the sky and do not connect logically to form a coherent catenary system. (top-center, strong)

**composition_or_staging**: score 9, raised in 4/9 calls, at whole-image, center

- claude-opus-5.5: Symmetric staged scenario typical of a trolley-problem-style generated prompt: a group in the middle and a lone worker on the right track (whole-image, moderate)
- claude-opus-5.5: Classic trolley-problem setup seen from a tram windscreen, with one group of people on one branch and one person on the other (whole-image, moderate)
- claude-opus-5.5: Four workers kneel on bare concrete between tracks rather than on the rails, doing no apparent work; staged trolley-problem-like layout (center, moderate)
- gemini-3.1-pro-preview: Four workers are kneeling in an unnaturally straight line on bare concrete between the tracks, seemingly working on identical, indistinct objects, which makes no operational sense. (center, strong)

**track_geometry**: score 8, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: Four of the workers kneel on bare concrete between the two tracks, not on any rail, which makes little sense for track work; the left track curves off without any visible switch (center, moderate)
- claude-opus-5.5: The left track curves away while the right track begins abruptly; the tracks don't form a coherent switch, and the area between them is plain concrete (center, moderate)
- claude-opus-5.5: Left track curves oddly; the track pair the workers sit near doesn't clearly connect, and the rails merge into the depot without a proper switch (center, moderate)
- gpt-6-sol: The four central workers sit between the two track branches, away from visible rail joints or switches. (bottom-center, moderate)

## flux-3-image-two-1.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.85 / 0.75
- google/gemini-3.1-pro-preview: 0.02 / 0.01 / 0.05

**texture_noise_or_sharpness**: score 8, raised in 5/9 calls, at top-center, whole-image

- gpt-6-sol: Small details inside the distant entrances are indistinct, which could conceal image-generation errors but is also consistent with distance. (top-center, weak)
- gpt-6-sol: Fine details inside the distant, dark building openings are hard to distinguish, which could conceal generated inconsistencies. (top-center, weak)
- claude-opus-5.5: Overly smooth, uniformly clean concrete with soft painterly puddle reflections and slightly mushy fine detail on fences and pallets. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, clean concrete and building cladding with a uniform painterly HDR look typical of generators (whole-image, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: Overhead catenary is sparse and inconsistent: poles have arms but wires barely connect or span over the tracks properly. (top-center, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and do not connect coherently between poles and the tracks (top-left, moderate)
- claude-opus-5.5: The overhead wires are sparse and inconsistent: some cantilever arms carry no visible contact wire over the tracks, and the wire spans end abruptly (top-right, moderate)

**track_geometry**: score 5, raised in 3/9 calls, at center

- claude-opus-5.5: Left track rails converge toward the depot and run straight into the building entrance without any visible switch or connection; the two separate tracks don't connect plausibly to a junction despite framing as branches. (center, moderate)
- claude-opus-5.5: Left track pair converges oddly near the workers; the right rail of the left track curves away and the gauge appears inconsistent toward the depot, and the track doesn't clearly lead into a door (center, moderate)
- claude-opus-5.5: The two tracks run as separate, parallel embedded rails into separate depot doors with no visible switch connection; the rail grooves look smooth and idealized (center, weak)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Two workers kneel directly between/on the left track rails with toolboxes, a staged-looking arrangement typical of generated scenarios; right track is empty. (middle-left, weak)
- claude-opus-5.5: Two workers in hi-vis kneeling in staged symmetric poses beside identical small toolboxes on the rails (middle-left, moderate)
- claude-opus-5.5: Two workers in hi-vis kneel on the left track, each with an identical-looking black tool case beside them, in a neatly staged symmetric arrangement (middle-left, moderate)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and small equipment are hard to distinguish clearly, leaving some visual ambiguity. (center, weak)
- claude-opus-5.5: The small black tool cases are blobby and lack defined details or handles (middle-left, weak)
- claude-opus-5.5: The tool cases are indistinct blobs with no clear handles or hardware (middle-left, weak)

## flux-3-image-two-2.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.04 / 0.08 / 0.03
- anthropic/claude-opus-5.5: 0.75 / 0.80 / 0.75
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Left track rails diverge oddly: the left rail of the left track curves while the right rail continues straight toward the shed, with track gauge varying along length; no proper switch geometry visible (center, moderate)
- claude-opus-5.5: Left track pair converges toward the left shed door, but the rails curve oddly; the right rail of left track bends sharply near the workers while the left rail stays straight, giving inconsistent gauge (center, moderate)
- claude-opus-5.5: Left track rails curve oddly toward the depot door; the left rail and right rail of the left track don't converge consistently, and the tracks seem to run into doors without proper alignment/switch structure (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left

- claude-opus-5.5: Overhead wires are sparse and don't connect consistently between poles; catenary is incomplete over tracks (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent; catenary arms don't connect coherently over tracks (top-left, moderate)
- claude-opus-5.5: Overhead wire arrangement is sparse and inconsistent; catenary wires end abruptly and do not run over tracks coherently (top-left, moderate)

**texture_noise_or_sharpness**: score 5, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly clean, smooth textures on concrete and building cladding with slight painterly softness (whole-image, weak)
- claude-opus-5.5: Overly smooth, uniform rendering with painterly concrete texture and soft building details (whole-image, moderate)
- claude-opus-5.5: Overly clean, uniform smooth rendering with HDR-like flatness typical of generated images (whole-image, moderate)

**people_pose_or_placement**: score 4, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Two workers kneeling with toolboxes on the left track, posed neatly; hands and tools somewhat smeared, cases look generic (middle-left, moderate)
- claude-opus-5.5: Two workers kneel on/near the rails with tool cases, clean and plausible but somewhat staged; hands and faces lack fine detail (middle-left, weak)
- claude-opus-5.5: Two workers kneeling with identical-looking toolboxes placed symmetrically, staged appearance; figures are small and smoothly rendered (middle-left, weak)

**camera_or_windscreen**: score 3, raised in 3/9 calls, at bottom-center

- claude-opus-5.5: Dashboard/hood edge in foreground mimicking cab view, common staged composition in generated sets (bottom-center, weak)
- claude-opus-5.5: Dark vehicle dashboard edge at bottom, typical of generated 'cab view' prompts (bottom-center, weak)
- claude-opus-5.5: Dark dashboard edge at bottom frames shot as from a tram cab, common staging in generated set (bottom-center, weak)

## flux-kontext-max-group-1.jpg: mean P(AI) 0.63 (fails)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 1.00 / 1.00

**people_anatomy**: score 18, raised in 8/9 calls, at bottom-center, middle-left, center, bottom-right, bottom-left

- gpt-6-sol: The middle worker’s hands are partly obscured by their crouched posture, making their exact positions difficult to resolve. (bottom-center, weak)
- gpt-6-sol: The leftmost worker’s hands are hard to distinguish where they meet the rail. (middle-left, weak)
- claude-opus-5.5: Hands of the center and right workers are mushy and poorly defined where they contact the ground and rail (center, moderate)
- claude-opus-5.5: Hands of the middle worker and the right worker are smudgy and poorly defined where they meet the rail and concrete (center, moderate)

**text_signage_or_markings**: score 16, raised in 8/9 calls, at middle-right, bottom-right

- gpt-6-sol: The lettering on the right worker’s vest is indistinct and cannot be checked for accurate spelling. (middle-right, weak)
- gpt-6-sol: The lettering on the right worker’s vest is difficult to read and looks slightly irregular. (middle-right, weak)
- claude-opus-5.5: Text on the right worker's vest is a garbled, illegible pseudo-word rather than a readable company name (middle-right, moderate)
- claude-opus-5.5: Text on the right worker's vest back is garbled, illegible pseudo-lettering rather than a real company name (middle-right, moderate)

**track_geometry**: score 12, raised in 6/9 calls, at center, bottom-center, middle-right, bottom-left

- claude-opus-5.5: The tracks are set flush in concrete with no switch or frog connecting them, yet they are framed as branches; the rails run oddly into the depot doors without clear continuity (center, weak)
- claude-opus-5.5: Rails fade inconsistently into the slab, and the rail spacing and flangeways look uneven between the two tracks (bottom-center, weak)
- claude-opus-5.5: The rails run as separate straight parallel tracks with no connecting switch, yet the depot layout implies branches; the rails look smooth and simplified (center, weak)
- gemini-3.1-pro-preview: The right rail of the right branch track completely disappears into the flat concrete surface well before reaching the building, while the adjacent left rail continues uninterrupted. (middle-right, strong)

**overhead_wires_or_poles**: score 12, raised in 3/9 calls, at top-right, top-left, top-center

- gemini-3.1-pro-preview: Faint overhead wires extending from the right pole end abruptly in mid-air and do not form a logically connected or continuous catenary system. (top-right, strong)
- gemini-3.1-pro-preview: The overhead wires form a confusing mesh, and some horizontal lines terminate abruptly in mid-air instead of connecting to another pole or structure. (top-right, strong)
- gemini-3.1-pro-preview: A catenary wire extending from the pole simply ends abruptly in the empty gray sky. (top-left, strong)
- gemini-3.1-pro-preview: The overhead electrical wires appear fragmented; lines start and stop abruptly and hang disconnected in the sky between the masts. (top-center, strong)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: All three workers crouch in near-identical staged poses with identical helmets, vests, and earmuffs, touching the rails in a theatrical way (center, moderate)
- claude-opus-5.5: Workers crouch in near-identical poses, two on the left track and one on the right, touching rails or the ground in a staged, symmetric arrangement (center, moderate)
- claude-opus-5.5: All three workers crouch in near-identical staged poses, touching the rails, symmetrically placed for the camera (center, moderate)

## flux-kontext-max-group-2.jpg: mean P(AI) 0.65 (fails)

- openai/gpt-6-sol: 0.06 / 0.08 / 0.05
- anthropic/claude-opus-5.5: 0.90 / 0.88 / 0.88
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**overhead_wires_or_poles**: score 17, raised in 6/9 calls, at top-left, top-right, top-center

- claude-opus-5.5: Overhead wires are sparse and don't form a coherent catenary system over the tracks; poles with dangling single wires (top-left, moderate)
- claude-opus-5.5: Catenary wires sparse and inconsistent; poles have arms with wires ending arbitrarily, no proper overhead contact wire above tracks (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent; catenary arms don't connect coherently to a contact wire above the tracks (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires attached to the structural pole simply fade out or terminate abruptly in the sky without connecting to anything. (top-left, strong)

**track_geometry**: score 14, raised in 6/9 calls, at center, middle-left, bottom-right

- claude-opus-5.5: Tracks are embedded with no visible switch blades, ties or frogs; rails curve smoothly into building doors without realistic junction detail (center, moderate)
- claude-opus-5.5: Tracks embedded in concrete with no visible ties, fastenings or joints; rails curve smoothly but lack detail, groove continuity vague (center, moderate)
- claude-opus-5.5: Tracks are embedded rails with no visible fastenings, joints or flangeways detail; rails curve smoothly and merge vaguely into the concrete (center, moderate)
- gemini-3.1-pro-preview: As the tracks enter the dark bay of the building on the left, they lose definition and seem to merge or veer at illogical angles. (middle-left, moderate)

**people_anatomy**: score 14, raised in 4/9 calls, at middle-right, bottom-left

- claude-opus-5.5: Workers' hands are blurry/merged with rails, faces hidden; feet and knees blend into ground (middle-right, moderate)
- gemini-3.1-pro-preview: The left-most worker's hand resting on the rail lacks distinct fingers, appearing smudged and blending directly into the metal. (bottom-left, strong)
- gemini-3.1-pro-preview: The leftmost worker's left foot and shoe are rendered as an indistinct blob that merges completely with the ground. (bottom-left, strong)
- gemini-3.1-pro-preview: The left boot of the worker is a dark, shapeless blob lacking any shoe structure, and his hands are indiscernible, seemingly melting into the ground. (bottom-left, strong)

**composition_or_staging**: score 10, raised in 6/9 calls, at whole-image

- gpt-6-sol: Four workers are arranged in two similar pairs, one pair beside each branch track. The near-symmetry could be staged or generated. (whole-image, weak)
- gpt-6-sol: Two similarly dressed workers crouch beside each branch of the track, creating unusually balanced staging. (whole-image, weak)
- gpt-6-sol: Two workers crouch beside each of the two tracks in a notably balanced arrangement. (whole-image, weak)
- claude-opus-5.5: Four nearly identical workers in identical poses, symmetrically placed two per track, one on each side of each rail pair; highly staged mirror-like arrangement (whole-image, strong)

**people_clothing_or_gear**: score 6, raised in 3/9 calls, at center, bottom-right

- claude-opus-5.5: Workers wear matching hi-vis vests and helmets with smooth, uniform rendering; faces hidden or indistinct, hands merge with rails (center, moderate)
- gemini-3.1-pro-preview: The third worker's hard hat features an indistinct yellow and black pattern that blends illogically into the smooth surface of the helmet. (bottom-right, moderate)
- gemini-3.1-pro-preview: The high-visibility vest features a single, flat gray horizontal band that lacks the texture of realistic reflective tape and blends directly into the yellow fabric. (bottom-right, moderate)

## flux-kontext-max-two-1.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.02

**track_geometry**: score 11, raised in 4/9 calls, at center, middle-right

- claude-opus-5.5: Tracks are embedded in concrete with no visible switch or junction connecting them; rails curve oddly and the left track's rails converge unnaturally toward the door (center, moderate)
- claude-opus-5.5: Tracks embedded in concrete with no visible ties or switch connecting them; rails curve smoothly but the left track's rails converge oddly toward the door, and the right track appears to lack a clear junction (center, moderate)
- claude-opus-5.5: Tracks are embedded rails that just run parallel into two doors; the right track's rails converge oddly and gauge appears inconsistent near the bottom (center, weak)
- gemini-3.1-pro-preview: The inner rail of the right-side track pair loses its physical structure and seems to disappear into the concrete directly underneath the crouching worker in yellow. (middle-right, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The left worker’s hands are indistinct at this resolution, making their exact position hard to verify. (center, weak)
- gpt-6-sol: The left worker's hands are indistinct where they meet in front of the body. (middle-left, weak)
- claude-opus-5.5: Left worker's hands are vague and merged with a device; boots look slightly melted into the ground (center, weak)
- gemini-3.1-pro-preview: The dark area visible underneath the helmet of the worker on the right lacks recognizable facial or neck features, appearing instead as an amorphous black blob. (middle-right, strong)

**texture_noise_or_sharpness**: score 7, raised in 5/9 calls, at whole-image, top-center

- gpt-6-sol: Distant equipment and the building interior are soft enough that some small details cannot be verified; this leaves limited uncertainty. (whole-image, weak)
- gpt-6-sol: Fine details inside the distant building entrance are hard to distinguish. (top-center, weak)
- claude-opus-5.5: Smooth, slightly painterly wet concrete and puddle reflections with uniform soft detail typical of generators (whole-image, weak)
- claude-opus-5.5: Overall smooth, slightly painterly rendering with uniform softness and clean surfaces typical of generators (whole-image, moderate)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly symmetric staged composition: two workers crouching identically, one in each track, facing away, centered on two identical depot doors (whole-image, moderate)
- claude-opus-5.5: Highly symmetric staging: two workers crouched in identical poses, one centered in each track, both facing away toward symmetric depot doors (whole-image, moderate)
- claude-opus-5.5: Highly symmetric staged scene: two workers crouching identically, one on each track, both facing away toward depot doors, like a prompt-driven dilemma setup (whole-image, moderate)

**overhead_wires_or_poles**: score 6, raised in 4/9 calls, at top-left

- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, with arms ending without clear contact wire over the tracks (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, with poles on the left having arms that don't clearly support wires running over the tracks (top-left, weak)
- claude-opus-5.5: Overhead wires attach to poles inconsistently and sparsely; catenary doesn't clearly follow tracks (top-left, weak)
- gemini-3.1-pro-preview: The horizontal metal crossbar attached to the far-left overhead catenary pole appears to end abruptly in mid-air on its right side without connecting to another wire or support. (top-left, moderate)

## flux-kontext-max-two-2.jpg: mean P(AI) 0.64 (fails)

- anthropic/claude-opus-5.5: 0.88 / 0.88 / 0.90
- openai/gpt-6-sol: 0.04 / 0.08 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**text_signage_or_markings**: score 22, raised in 8/9 calls, at center, bottom-left, middle-left

- claude-opus-5.5: Orange text on the left worker's vest back is garbled, illegible pseudo-lettering (center, strong)
- claude-opus-5.5: Orange text printed on the back of the left worker's vest is illegible, garbled pseudo-lettering (center, strong)
- claude-opus-5.5: The right worker's helmet has a small, smeared logo that does not resolve into any readable mark (center, moderate)
- claude-opus-5.5: Text on the back of the left worker's vest is garbled orange pseudo-lettering, and the right worker's vest text is an illegible smear (center, strong)

**overhead_wires_or_poles**: score 14, raised in 5/9 calls, at top-left, top-center, top-right

- claude-opus-5.5: Overhead wires are sparse and inconsistent, with catenary not clearly spanning over the tracks (top-left, weak)
- claude-opus-5.5: The catenary wires are sparse and inconsistent. Single wires run off to nowhere, and the poles carry no proper contact wire over the tracks (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires connecting to the tall pole form a chaotic, tangled web that does not resemble a functional structural catenary system. (top-left, strong)
- gemini-3.1-pro-preview: The overhead catenary wires exhibit structural inconsistencies, with some lines appearing to float, intersect illogically, or terminate without proper connection to support structures. (top-center, moderate)

**track_geometry**: score 13, raised in 6/9 calls, at center, middle-left, bottom-center

- claude-opus-5.5: Embedded rails run as two separate parallel pairs into the doors with no visible switch or connecting geometry, and the rail grooves look smooth and uniform (center, moderate)
- claude-opus-5.5: The two track branches simply diverge into separate bays with no visible switch or frog connecting them in the foreground. The rails look embedded but lack realistic flangeway detail (center, moderate)
- claude-opus-5.5: The rails are embedded in the concrete without any switch, and the two tracks run separately into the doors with little visible connection or frog detail (center, weak)
- gemini-3.1-pro-preview: The rails of the right track flatten out and lose their 3D profile, blending completely into the flat concrete as they recede towards the building. (center, moderate)

**people_anatomy**: score 13, raised in 6/9 calls, at center, top-left, middle-left, bottom-right, bottom-left

- claude-opus-5.5: The left worker's hand touching the ground is blurred and merges with the surface (center, weak)
- claude-opus-5.5: The distant workers near the fence are blurry, simplified figures (top-left, weak)
- gpt-6-sol: The two distant workers are too small and indistinct to check their hands or facial details reliably. (middle-left, weak)
- gemini-3.1-pro-preview: The right worker's boots lack definition and appear to melt directly into the wet concrete surface, with strange anatomical proportions in the leg. (bottom-right, strong)

**composition_or_staging**: score 7, raised in 4/9 calls, at whole-image

- claude-opus-5.5: Two workers crouched in near-mirror symmetric poses, each centered between rails of separate tracks, with an oddly staged depot view (whole-image, moderate)
- claude-opus-5.5: Two nearly identical crouching workers are placed symmetrically, one centered on each track branch, which looks staged and prompt-like (whole-image, moderate)
- claude-opus-5.5: Two nearly identical crouching workers are placed symmetrically, one on each branch track, in a staged, scenario-like arrangement (whole-image, moderate)
- gpt-6-sol: A crouching worker occupies each branch in a notably balanced arrangement. (whole-image, weak)

## seedream-4.5-group-1.jpg: mean P(AI) 0.62 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 23, raised in 4/9 calls, at center, bottom-left, bottom-center, middle-right, bottom-right

- claude-opus-5.5: Kneeling workers have smooth, featureless hands and faces hidden; the poses are generic, and the right worker's legs merge into the rail area (center, weak)
- gemini-3.1-pro-preview: The feet and lower legs of the middle worker in the left group (yellow jacket) merge formlessly into the ground and the metal rail structures. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker in the orange jacket lacks distinct feet; his legs end in indistinct black blobs resting on the rail. (bottom-center, strong)
- gemini-3.1-pro-preview: The solo worker on the right track has a strange, somewhat formless body shape with no clearly visible arms and misshapen boots. (middle-right, moderate)

**tools_or_small_objects**: score 17, raised in 8/9 calls, at bottom-right, bottom-left, bottom-center

- gpt-6-sol: The distant worker's hands and the small device at the rails are hard to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the metal bars across the rails overlap in a way that is difficult to distinguish at this resolution. (bottom-left, weak)
- claude-opus-5.5: Workers kneel at a gauge bar but hold no identifiable tools; hands merge with rails/bars, tool bags are generic blobs (bottom-center, moderate)
- claude-opus-5.5: The tool bags are generic, and the loose object near the left bag is indistinct, with no recognizable tools being used on the rails. (bottom-left, moderate)

**track_geometry**: score 17, raised in 6/9 calls, at center, middle-right, bottom-left

- claude-opus-5.5: Embedded tram rails in concrete with no visible groove/flangeway detail; rails appear as raised bars sitting on smooth slab, and gauge bars (tie rods) placed oddly across rails as loose metal rods (center, moderate)
- claude-opus-5.5: Tie bars/gauge rods sit oddly across the rails: on the left track the crossbars float between the workers' knees with no clear clamp to the rails, and on the right track the bar extends past the rail toward the bag. (center, moderate)
- claude-opus-5.5: Left track's rails run in a slightly curving pair whose spacing and alignment look inconsistent, and the rail on the right side of the left pair bends oddly where the kneeling worker is (center, moderate)
- gemini-3.1-pro-preview: The inner rail of the right track appears to fade away or break completely just behind the kneeling worker, blending into the concrete. (middle-right, strong)

**reflections_or_wet_surfaces**: score 6, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: Puddle reflections are vague and don't clearly mirror the building or poles (center, weak)
- claude-opus-5.5: Wet concrete puddles and reflections are plausible overall but are painterly and uniform, without fine detail (center, weak)
- gemini-3.1-pro-preview: The reflections of the workers and tracks in the wet concrete are blurry, chaotic dark shapes that do not accurately correspond to the objects casting them. (bottom-center, moderate)
- gemini-3.1-pro-preview: The reflection of the worker in the orange jacket on the wet concrete is disproportionately weak and indistinct compared to the clear reflections of the workers in yellow right next to him. (bottom-center, moderate)

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at middle-right, whole-image

- gpt-6-sol: The distant worker appears somewhat soft compared with the foreground crew, though distance could explain it. (middle-right, weak)
- claude-opus-5.5: Smooth, painterly wet concrete and uniform hazy rendering with soft, slightly smeared detail on fences and pallets (whole-image, weak)
- claude-opus-5.5: The image is uniformly smooth with a painterly, over-clean look. The wet concrete has soft, blobby reflections and the facade shows no grime. (whole-image, moderate)
- claude-opus-5.5: Overall soft, smooth rendering with no sensor noise; background items like the cable drum and pallets are simplified (whole-image, weak)

## seedream-4.5-group-2.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.75 / 0.80
- google/gemini-3.1-pro-preview: 0.98 / 0.95 / 0.99

**tools_or_small_objects**: score 19, raised in 7/9 calls, at middle-right, center, bottom-center, bottom-left

- gpt-6-sol: The tools beside the right-hand worker are small and somewhat hard to distinguish, leaving a little uncertainty about their shapes. (middle-right, weak)
- claude-opus-5.5: The metal bar or tie-rod between the rails under the left workers is vague and merges into the rails, and it has no clear function. (center, moderate)
- claude-opus-5.5: The tie bar/rod the workers kneel over on the left track has an unclear purpose and indistinct ends, and it merges into the rails ambiguously. (center, weak)
- claude-opus-5.5: Metal bar/tie rod lying across rails between workers is ambiguous and seems to merge into rail; tool bag shapes are vague (center, moderate)

**people_anatomy**: score 19, raised in 4/9 calls, at middle-left, bottom-left, middle-right

- claude-opus-5.5: Boots and legs of the kneeling workers are smudged; the soles look waxy and the feet are hard to separate. (middle-left, weak)
- gemini-3.1-pro-preview: The hands of the middle worker in the left group, gripping the metal bar, are rendered as formless gray blobs lacking defined fingers or realistic anatomical structure. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the worker on the right track, resting on the crossbar, appear as unformed, smooth blobs rather than detailed hands with digits. (middle-right, strong)
- gemini-3.1-pro-preview: The rightmost worker in the group of three has a right leg that ends in a formless grey blob instead of a distinct boot, merging unnaturally with the ground. (bottom-left, strong)

**track_geometry**: score 10, raised in 4/9 calls, at center, middle-right, bottom-center, bottom-left

- claude-opus-5.5: Left track pair: the left rail curves toward upper-left while the right rail of the same pair runs up toward center; the gauge widens and narrows inconsistently along the length. (center, moderate)
- claude-opus-5.5: The right track has a strange gap and an embedded bar near the worker; the rail edges show uneven groove widths. (middle-right, weak)
- claude-opus-5.5: Left track's right rail curves oddly; the gauge between the left track rails seems inconsistent, narrowing toward the bottom where the rails converge strangely near the workers. (bottom-center, moderate)
- claude-opus-5.5: The right track's tie rod passes under the worker without clear attachment points on the rails. (middle-right, weak)

**background_clutter**: score 8, raised in 3/9 calls, at top-center, top-right, middle-left

- claude-opus-5.5: Background objects such as the cable drum, pallets and yellow bollards are coherent but slightly smeared and soft. (top-center, weak)
- gemini-3.1-pro-preview: The stacked metal cages or containers in the background are wobbly, with lines that intersect chaotically and fail to form coherent, geometric structures. (top-right, strong)
- gemini-3.1-pro-preview: The large wooden spool in the background has a slightly irregular shape, and the material wound around it appears as a chaotic, unstructured texture rather than distinct cables. (middle-left, moderate)
- gemini-3.1-pro-preview: The stacked materials or pallets in the far right background blend together into indistinct, muddy shapes lacking precise geometric edges. (top-right, moderate)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-left, center

- claude-opus-5.5: Three kneeling workers are spaced in a neat, near-identical row with matching poses, which looks staged and generated. (middle-left, moderate)
- claude-opus-5.5: Three nearly identical kneeling figures are lined up in uniform poses, with similar bags, giving a staged, repetitive look. (center, moderate)
- claude-opus-5.5: Three kneeling workers in nearly identical poses and outfits, evenly spaced, staged composition with faces all hidden (middle-left, moderate)

## seedream-4.5-two-1.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.88 / 0.88
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.99

**track_geometry**: score 21, raised in 5/9 calls, at center, middle-right, bottom-left

- claude-opus-5.5: Left track's right rail appears to merge oddly; the worker on the right kneels on the rail itself, and the ballast track transitions abruptly into a flat concrete slab with no clear boundary logic (center, moderate)
- claude-opus-5.5: Right track rails are embedded in concrete without any sleepers, and the gauge narrows and widens inconsistently toward the depot door (middle-right, moderate)
- claude-opus-5.5: The left track's ballasted section ends abruptly, and the right rail seems to merge into the concrete slab. The sleepers and rail spacing are inconsistent near the workers. (bottom-left, moderate)
- claude-opus-5.5: The right track is embedded in concrete with no visible sleepers or fastenings. The rails curve smoothly but the gauge looks inconsistent toward the building. (middle-right, weak)

**tools_or_small_objects**: score 9, raised in 6/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers’ gloves and nearby rail hardware are indistinct, making their precise interaction hard to verify. (bottom-center, weak)
- claude-opus-5.5: Yellow power tool with a cable lies on the sleeper, but it is a vague, non-specific shape (bottom-left, weak)
- claude-opus-5.5: A yellow power tool or battery lies on the ground with a cable trailing off ambiguously. It isn't connected to anything meaningful. (bottom-left, weak)
- claude-opus-5.5: Yellow power tool on ground is a vague blob with cable looping unnaturally, not a recognizable device (bottom-left, moderate)

**people_pose_or_placement**: score 9, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: Both workers kneel symmetrically and touch the rail with hands that are indistinct; the gloved hands blend into the rail (center, moderate)
- claude-opus-5.5: The two workers kneel shoulder to shoulder on and astride the rail. Their hands rest on the rail with no clear tool or task being performed. (center, moderate)
- claude-opus-5.5: Right worker kneels straddling the rail with legs and torso merging ambiguously into the track; hands disappear into the rail area (center, moderate)
- gemini-3.1-pro-preview: The worker on the right has his right boot sole facing directly towards the camera, which anatomically does not align with his kneeling posture. (bottom-center, strong)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Overly smooth, clean rendering with a uniform painterly sheen on the wet concrete and building cladding, typical of diffusion output (whole-image, moderate)
- claude-opus-5.5: The whole image has an overly smooth, painterly finish. Puddle reflections are diffuse, and the pallets and crates are mushy with no real detail. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly wet concrete and uniformly soft detail typical of diffusion output (whole-image, moderate)

**background_clutter**: score 4, raised in 3/9 calls, at top-center, middle-left

- gpt-6-sol: Some distant equipment inside the bays is indistinct and hard to identify precisely. (top-center, weak)
- gemini-3.1-pro-preview: The stack of materials on pallets near the fence lacks distinct edges and merges into a solid, textured block. (middle-left, moderate)
- gemini-3.1-pro-preview: Inside the open bay doors of the building, the overhead lights appear as disorganized floating white blobs rather than distinct fixtures attached to the ceiling structure. (top-center, weak)

## seedream-4.5-two-2.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.05

**track_geometry**: score 11, raised in 5/9 calls, at bottom-left, center, bottom-center

- claude-opus-5.5: Left track rails are embedded in concrete, yet the gauge seems to narrow and converge unnaturally toward the depot door, and the right rail of the left track merges oddly near the kneeling workers. (bottom-left, moderate)
- claude-opus-5.5: Left track's rails are oddly spaced; the right rail of the left track runs between the two workers and the kneeling man sits astride/beside it inconsistently, with the gauge narrowing unnaturally toward the building (center, moderate)
- claude-opus-5.5: Left track's rails curve oddly; the right rail of the left track runs into the area where the kneeling worker is, and the track pair spacing narrows unnaturally toward the depot door (center, moderate)
- gemini-3.1-pro-preview: The groove (flangeway) next to the rails embedded in the concrete is highly inconsistent, appearing crisp in some areas and completely filled in or smoothed over in adjacent areas. (bottom-center, moderate)

**overhead_wires_or_poles**: score 11, raised in 5/9 calls, at top-center, top-right

- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent: a few thin lines run from poles without any coherent contact wire over each track. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and disconnected; catenary arms on poles don't clearly link to coherent contact wires over tracks (top-right, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, cantilever arms don't connect logically to the wire runs (top-right, moderate)
- gemini-3.1-pro-preview: Some of the overhead wires in the sky appear disjointed or fade out completely before connecting to any support structure. (top-center, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at top-center, whole-image

- gpt-6-sol: Fine details inside the distant bays are indistinct, which leaves a little uncertainty, though distance and lighting could explain it. (top-center, weak)
- claude-opus-5.5: The image has a smooth, painterly look: uniform wet sheen on the concrete, soft reflections, and building panels without fine wear. (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly wet concrete and uniform puddle reflections typical of diffusion rendering (whole-image, moderate)
- claude-opus-5.5: Overly smooth, painterly wet concrete and uniform reflections with soft, generic detail typical of diffusion output (whole-image, moderate)

**people_anatomy**: score 7, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: Worker on right has an ambiguous leg/boot arrangement and hand merging into the rail area; left worker's legs and boots are blurred together (center, moderate)
- gemini-3.1-pro-preview: The right hand of the worker on the right, resting on the ground, lacks definition and appears as a blurry, fingerless blob. (bottom-center, moderate)
- gemini-3.1-pro-preview: The right leg of the worker on the right is twisted at an impossible angle, with the sole of the boot facing the camera while the knee appears to be pointing away or resting on the ground. (bottom-center, strong)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at bottom-center, center

- gpt-6-sol: The straps and contents of the bag beside the nearer worker are difficult to distinguish. (bottom-center, weak)
- claude-opus-5.5: Tool bag with cable trailing to nothing specific; workers are not clearly using any recognizable tool (center, weak)
- claude-opus-5.5: Tool bag has a cable leading into nowhere; strap merges into ground (center, weak)
- gemini-3.1-pro-preview: The yellow and black tool bag next to the worker on the right has a nonsensical structure with random straps and a thick black wire trailing off into the concrete. (bottom-center, strong)

## seedream-5.0-pro-group-1.jpg: mean P(AI) 0.52 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.95

**track_geometry**: score 11, raised in 5/9 calls, at center, bottom-center

- claude-opus-5.5: Left track pair converges oddly toward the depot; rails appear embedded in concrete without consistent gauge, and left track's right rail curves away inconsistently with the left rail (center, moderate)
- claude-opus-5.5: Left track's two rails converge toward a single depot door while the gauge looks inconsistent; rails are embedded in concrete with no visible switch or connection between the two track pairs, and the left pair's rails seem to bend unnaturally (center, moderate)
- claude-opus-5.5: Two track pairs run into depot doors but the left track's rails appear to curve and converge oddly; embedded grooved rails in concrete with no visible switch connection despite workers 'repairing' it (center, moderate)
- gemini-3.1-pro-preview: The flangeways (grooves) alongside the embedded rail tracks are inconsistent, appearing to shallow out or disappear in several places along the curve. (bottom-center, moderate)

**overhead_wires_or_poles**: score 11, raised in 5/9 calls, at top-left

- claude-opus-5.5: Overhead wires attach to poles illogically, with a few thin wires going nowhere and no coherent catenary system over the tracks (top-left, moderate)
- claude-opus-5.5: Overhead wires attach to poles haphazardly; catenary lines are sparse and don't clearly align over the tracks (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, arms on poles don't clearly connect to wires above tracks (top-left, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires connected to the leftmost pole appear to break or vanish discontinuously into the sky. (top-left, strong)

**people_anatomy**: score 10, raised in 5/9 calls, at center, middle-left

- gpt-6-sol: The kneeling workers’ gloved hands and overlapping gear are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: Some hands where the left-side workers meet the rail are difficult to distinguish. (center, weak)
- gpt-6-sol: The overlapping hands and equipment of the workers on the left track are difficult to distinguish precisely. (center, weak)
- gemini-3.1-pro-preview: The worker on the right side of the left track (yellow jacket) has legs that merge indistinctly into the ground and the equipment next to him, lacking clear anatomical structure. (middle-left, strong)

**tools_or_small_objects**: score 9, raised in 4/9 calls, at center, middle-right, middle-left

- claude-opus-5.5: Tools on the ground are vague, smeared shapes without clear identifiable form; bags look blobby (center, moderate)
- claude-opus-5.5: Tools on ground are indistinct blobby shapes; bag near right worker has smeared form (center, moderate)
- gemini-3.1-pro-preview: The bag or equipment lying on the ground behind the worker on the right track appears as an unrecognizable, amorphous blob. (middle-right, moderate)
- gemini-3.1-pro-preview: Tools lying on the ground between the workers on the left track have nonsensical, indistinct blob-like shapes rather than clear mechanical forms. (middle-left, strong)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-left, center

- claude-opus-5.5: Three workers kneel in a neat staged row straddling rail, with tools lying vaguely on the concrete; hands merge with rail and tools (middle-left, moderate)
- claude-opus-5.5: Three workers kneel in a staged, evenly spaced row around the left rail, with hands meeting at the same point; poses look posed and somewhat merged (middle-left, moderate)
- claude-opus-5.5: Workers kneel in a neat staged row on the left track, all in pristine matching hi-vis, hands touching rail with no clear task (center, moderate)

## seedream-5.0-pro-group-2.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.82 / 0.85
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.02

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-left

- claude-opus-5.5: Overhead wires attach to poles inconsistently, with cantilever arms ending without clear wire connections; no contact wire runs above the tracks (top-left, moderate)
- claude-opus-5.5: Overhead wires are sparse and don't clearly align over the tracks; cantilever arms end ambiguously (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent, poles with arms not clearly supporting contact wires over tracks (top-left, moderate)
- gemini-3.1-pro-preview: The catenary wires criss-cross randomly and appear to terminate in mid-air or attach to nothing, lacking a coherent physical structure. (top-left, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at middle-left, whole-image

- gpt-6-sol: The workers’ hands and the material beside the rail are hard to distinguish at this resolution. (middle-left, weak)
- claude-opus-5.5: Smooth, slightly painterly texture on the building cladding and the people, with simplified detail on tools and hands (whole-image, moderate)
- claude-opus-5.5: Overall waxy, overly smooth rendering of concrete and building cladding typical of generators (whole-image, moderate)
- claude-opus-5.5: Overly smooth, uniformly rendered surfaces and building cladding with painterly softness typical of generators (whole-image, moderate)

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Two separate track pairs diverge from the foreground with no visible switch or connecting geometry; the left pair curves oddly toward a depot door while the right pair is embedded in concrete without consistent gauge cues (center, moderate)
- claude-opus-5.5: Two embedded tram tracks diverge with no visible switch or connection; the left track and right track appear as separate pairs without a junction, and the inner left rail curves oddly toward the building (center, moderate)
- claude-opus-5.5: Two tracks diverge but there's no switch/frog visible; left track rails run toward left shed, right track appears independently without a connecting turnout, odd for a depot layout (center, moderate)

**people_anatomy**: score 5, raised in 3/9 calls, at center, bottom-left

- gpt-6-sol: The overlapping hands and legs of the three crouching workers are hard to distinguish individually. (center, weak)
- claude-opus-5.5: Kneeling figures have vague hands and merged legs; bags blend into ground (center, weak)
- gemini-3.1-pro-preview: The rightmost worker in the left group has lower legs and boots that dissolve into a black, undefined mass merging with the ground and track. (bottom-left, strong)

**composition_or_staging**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Workers kneel neatly in a row on the rails as if posed, with tidy symmetric placement across both tracks (center, moderate)
- claude-opus-5.5: Workers kneeling neatly in a row on track with no visible tools or work being done, staged-looking (center, moderate)

## seedream-5.0-pro-two-1.jpg: mean P(AI) 0.30 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.80
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at whole-image

- gpt-6-sol: Fine details are soft enough that some small objects cannot be identified confidently. (whole-image, weak)
- claude-opus-5.5: Overall smooth, painterly rendering with uniform softness, typical of diffusion output (whole-image, moderate)
- claude-opus-5.5: Overly smooth, uniform rendering with soft detail on fencing, pallets and building interior; typical generator look (whole-image, moderate)
- claude-opus-5.5: Overall smooth, uniformly soft rendering with clean concrete slab joints and generic building facade typical of generators (whole-image, moderate)

**track_geometry**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: Left track pair curves in from the left while the right pair runs separately; the tracks don't form a coherent switch/junction and the left track's two rails converge oddly near the depot door (center, moderate)
- claude-opus-5.5: Two separate track pairs embedded in concrete diverge toward two bays with no visible switch or connection; the left pair's rails converge oddly and the left inner rail curves unnaturally (center, moderate)
- claude-opus-5.5: Left track pair and right track pair are two separate parallel tracks with no visible switch connecting them; the rails curve smoothly but the left track's rails converge oddly toward the building door while the right ends at another door — plausible but rails embedded in flat concrete with no flangeways look simplified (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left

- claude-opus-5.5: Overhead wires attach to poles inconsistently and fade out; no coherent catenary over the tracks (top-left, moderate)
- claude-opus-5.5: Catenary poles and wires are sparse and inconsistent; wires hang loosely and don't align over track centerlines (top-left, moderate)
- claude-opus-5.5: Overhead catenary wires are sparse and inconsistent; poles have cantilever arms with wires that don't clearly connect over the tracks (top-left, moderate)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-left, center

- claude-opus-5.5: Two workers kneeling between and on the rails with bags, working with an indistinct tool; hands and tool merge into a vague shape (middle-left, moderate)
- claude-opus-5.5: Two workers kneel on the left track with bags; hands and tools are indistinct, tool between them is a vague shape (center, moderate)

**camera_or_windscreen**: score 3, raised in 3/9 calls, at bottom-center

- claude-opus-5.5: Dark vehicle hood/dash edge at bottom framing a staged cab view, common in generated 'driver view' scenes (bottom-center, weak)
- claude-opus-5.5: Dark dashboard/hood edge at bottom staged as cab view, common in generated rail scenarios (bottom-center, weak)
- claude-opus-5.5: Dark vehicle dashboard/hood edge at bottom frame, a common staging element in this image set (bottom-center, weak)

## seedream-5.0-pro-two-2.jpg: mean P(AI) 0.07 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.20 / 0.20
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**track_geometry**: score 3, raised in 2/9 calls, at center

- claude-opus-5.5: The left track's right rail curves toward the building, but the left rail runs straight; the rails converge oddly and the two rails don't keep a constant gauge as they recede (center, moderate)
- claude-opus-5.5: Left track's right rail appears to curve and pass near the workers in a way that seems slightly inconsistent; the left pair's rails converge oddly toward the building, with the inner rail bending toward the workers. (center, weak)

**people_anatomy**: score 2, raised in 2/9 calls, at middle-left

- gpt-6-sol: The workers’ hands and legs overlap and are difficult to distinguish clearly, leaving some apparent shape ambiguity. (middle-left, weak)
- gpt-6-sol: The kneeling workers’ hands and the equipment between them are partly obscured and difficult to distinguish. (middle-left, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The workers’ hands and equipment where they meet the rail are difficult to distinguish clearly. (center, weak)
