# Realism check: sd-w1

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 141 | 20/24 |
| people_anatomy | 139 | 22/24 |
| tools_or_small_objects | 118 | 22/24 |
| overhead_wires_or_poles | 96 | 17/24 |
| texture_noise_or_sharpness | 38 | 17/24 |
| background_clutter | 38 | 13/24 |
| people_pose_or_placement | 32 | 10/24 |
| buildings | 29 | 9/24 |
| text_signage_or_markings | 22 | 9/24 |
| people_clothing_or_gear | 21 | 7/24 |
| switch_mechanism | 13 | 5/24 |
| lighting_or_shadows | 12 | 3/24 |
| composition_or_staging | 11 | 6/24 |
| camera_or_windscreen | 10 | 7/24 |
| reflections_or_wet_surfaces | 2 | 1/24 |

## s-group-L-1.jpg: mean P(AI) 0.19 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.12 / 0.25
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.05

**people_anatomy**: score 7, raised in 2/9 calls, at middle-left, bottom-right, bottom-left

- gpt-6-sol: The crouching workers’ hands are partly obscured and not clearly resolved. (middle-left, weak)
- gemini-3.1-pro-preview: The crouching worker on the right track has a severely deformed lower body, appearing to have three distinct leg-like shapes that melt indistinguishably into the ground and surrounding gear. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower bodies and legs of the three crouching workers on the left merge together and into the ground in an unnatural, blob-like manner, lacking distinct feet or anatomical structure. (bottom-left, strong)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at middle-right, middle-left, center

- gpt-6-sol: The small equipment beside the right-hand worker is blurry and difficult to distinguish. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small equipment where they meet the rail are hard to distinguish, leaving some shapes ambiguous. (middle-left, weak)
- gpt-6-sol: The workers’ hands and small equipment are difficult to distinguish clearly, leaving some local detail ambiguous. (middle-left, weak)
- gemini-3.1-pro-preview: The large wooden cable drum resting near the pallets appears to be sliced in half horizontally, with its bottom section missing or merging perfectly flat into the concrete surface. (center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The inner metal rail of the right-hand track fades completely into the surrounding pavement texture before it reaches the worker, losing its three-dimensional shape. (bottom-right, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: One of the thin overhead wires extending to the left from the central pole terminates abruptly in mid-air against the cloudy sky without connecting to another support. (top-center, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The image has a film-like grain and a muted colour palette, which some AI images also imitate (whole-image, weak)

## s-group-L-2.jpg: mean P(AI) 0.34 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.30 / 0.80 / 0.80
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.98

**tools_or_small_objects**: score 12, raised in 6/9 calls, at bottom-right, bottom-left, center, bottom-center

- gpt-6-sol: The object beside the right-hand worker is indistinct, so its shape is difficult to verify. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and small track hardware are hard to distinguish where they overlap. (bottom-left, weak)
- gpt-6-sol: The right-hand worker's hands and the object at the rail are difficult to distinguish. (bottom-right, weak)
- claude-opus-5.5: Tools near workers' hands are indistinct blobs; no clear tool shapes (center, moderate)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and inconsistent; poles lack clear catenary attachments, wires end ambiguously (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent: some wires end abruptly or sag at odd angles between poles and do not form a coherent tram catenary (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires branching out towards the top left do not follow a logical tension system, crossing and fading in a nonsensical, messy pattern typical of AI generation. (top-left, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-left, center

- claude-opus-5.5: Left track rails seem to diverge oddly; the right rail of the left track curves toward center while the left rail continues straight, without a coherent switch structure where workers kneel (bottom-left, moderate)
- claude-opus-5.5: Left track rails converge oddly; the left rail appears to fade and merge near the workers' feet, with the gauge inconsistent toward the depot door (bottom-left, moderate)
- claude-opus-5.5: Right branch track curves smoothly toward the right shed while a groove line sweeps across the concrete with no clear switch mechanism linking the two branches (center, moderate)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at center, bottom-left

- claude-opus-5.5: Three workers crouched in a neat row, similar poses and uniform helmets/vests, staged look typical of generated scenes (center, weak)
- claude-opus-5.5: Workers are crouched in neat staged poses with uniform hi-vis outfits; hands and tools are indistinct, blending into the rail (center, moderate)
- gemini-3.1-pro-preview: The hands of the workers, particularly the middle worker in yellow, seem to merge indistinctly into the objects or ground they are touching, rather than showing a clear grasp. (bottom-left, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The film-like grain and muted colour grading are uniform; the image is slightly soft overall, a smooth look that some generators produce (whole-image, weak)
- claude-opus-5.5: Film grain and soft rendering uniform; fine details like vest text and pallets slightly mushy (whole-image, weak)

## s-group-L-3.jpg: mean P(AI) 0.52 (fails)

- anthropic/claude-opus-5.5: 0.15 / 0.72 / 0.72
- openai/gpt-6-sol: 0.02 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**overhead_wires_or_poles**: score 13, raised in 5/9 calls, at top-center

- claude-opus-5.5: Overhead wires sag and terminate arbitrarily between poles, with no coherent catenary over the tracks entering the depot. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and wander without clear attachment to poles; no proper tram catenary structure (top-center, moderate)
- gemini-3.1-pro-preview: Several overhead wires appear to dead-end in the open sky rather than connecting to poles or continuing out of frame. (top-center, strong)
- gemini-3.1-pro-preview: Wires above the buildings appear broken, intersecting at odd angles, and fading into the sky without logical connection points. (top-center, strong)

**people_anatomy**: score 13, raised in 5/9 calls, at middle-left, bottom-center, bottom-left, bottom-right

- gpt-6-sol: The kneeling workers’ hands and tools overlap at a small scale, making their exact positions hard to distinguish. (middle-left, weak)
- gpt-6-sol: The left-hand workers’ hands and tools are hard to distinguish where they meet the rails, though distance and blur could explain this. (bottom-center, weak)
- gemini-3.1-pro-preview: The hands of the three workers, as well as any tools they might be using, are rendered as indistinct, merged blobs without clear structure. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the three workers on the left track are poorly rendered, appearing as formless shapes rather than defined hands holding specific tools. (bottom-left, strong)

**track_geometry**: score 12, raised in 5/9 calls, at center, bottom-left, bottom-right

- claude-opus-5.5: Left track pair: the left rail curves toward the left depot door while the right rail continues straight toward the center pole area; the rails of the left track don't form a consistent gauge pair and diverge illogically. (center, moderate)
- claude-opus-5.5: Left track rails curve in from bottom but the inner rail seems to merge oddly near the workers; rail spacing inconsistent between the two rails of left branch (bottom-left, moderate)
- gemini-3.1-pro-preview: The rails on the right curve appear completely flat, lacking the 3D depth and necessary groove for wheel flanges, looking more like lines painted on the concrete. (bottom-right, strong)
- gemini-3.1-pro-preview: The outer rail of the left track becomes blurry and wavy, seemingly losing its physical 3D structure as it approaches the bottom edge. (bottom-left, strong)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at bottom-right, center

- gemini-3.1-pro-preview: The brown bag placed next to the single kneeling worker appears to melt seamlessly into the concrete surface rather than resting on top of it. (bottom-right, moderate)
- gemini-3.1-pro-preview: The stack of pallets and the wooden cable drum look warped, with textures melting into each other rather than discrete objects. (center, moderate)
- gemini-3.1-pro-preview: The brown object situated next to the worker on the right track is a formless, indistinct blob rather than a recognizable bag or piece of equipment. (bottom-right, moderate)

**buildings**: score 5, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The vertical mullions separating the window panes on the left building are wavy, uneven, and inconsistent in width. (middle-left, moderate)
- gemini-3.1-pro-preview: The white vertical bars (mullions) on the lower windows of the left building are uneven, bent, and not parallel. (middle-left, strong)

## s-group-R-1.jpg: mean P(AI) 0.49 (fails)

- openai/gpt-6-sol: 0.01 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.75 / 0.75 / 0.80
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.99

**people_anatomy**: score 11, raised in 4/9 calls, at bottom-right, middle-right, bottom-left

- gpt-6-sol: The overlapping workers' hands and lower legs are difficult to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The overlapping boots and hands of the three workers are difficult to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The worker kneeling on the left track has indistinct, blob-like tools or limbs merging with his left leg and the ground. (bottom-left, strong)
- gemini-3.1-pro-preview: The three workers clustered on the right track have bodies and limbs that blend together at the bottom; the leftmost yellow worker's feet melt into the pavement, and the orange and rightmost yellow workers share a jumbled mass of indistinguishable legs and tools. (bottom-right, strong)

**overhead_wires_or_poles**: score 11, raised in 5/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and loosely connected to poles, with no coherent catenary layout over the tracks entering sheds (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and irregular, some wires end abruptly or connect to buildings in implausible ways; poles lack proper catenary hardware (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and disconnected from poles in illogical ways; catenary does not run over the tracks consistently (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire connecting towards the left building fades out and appears disjointed against the sky. (top-left, moderate)

**track_geometry**: score 10, raised in 4/9 calls, at bottom-left, bottom-right, bottom-center, center

- claude-opus-5.5: Left track pair curves and appears to merge/terminate oddly; the left rail runs into paving and the inner rail path is inconsistent with the depot door it should lead to (bottom-left, moderate)
- claude-opus-5.5: Right track rails converge oddly toward the shed and the right rail's spacing changes along its length (bottom-right, moderate)
- claude-opus-5.5: Left track pair curves smoothly but the rails converge/diverge inconsistently; the left track's two rails appear to run as grooved rails embedded in concrete with plausible gauge, though the right track's left rail seems to merge oddly near the workers (bottom-center, weak)
- claude-opus-5.5: Rails of the left track curve and merge with paving in ambiguous way; the left-track rails don't clearly connect to the depot entrance tracks, and the grooved tram rails fade/merge oddly near the center (center, moderate)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at middle-right, center

- claude-opus-5.5: Workers' hands hold no clearly defined tools; objects on the ground near them are indistinct blobs (middle-right, moderate)
- gemini-3.1-pro-preview: The wooden cable spool resting near the middle fence is irregularly shaped and appears flattened or melted on one side. (center, moderate)
- gemini-3.1-pro-preview: The stack of wooden pallets and the large cable spool next to the fence are poorly defined, with edges that bleed into one another in a 'melting' fashion typical of AI rendering. (center, moderate)

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at bottom-right, whole-image

- gpt-6-sol: The workers’ hands and the exact object they are handling are difficult to distinguish; that local ambiguity could conceal generated detail, though distance also explains it. (bottom-right, weak)
- claude-opus-5.5: Film-like grain and soft color grading uniformly applied; small details such as signage and pallets are mushy (whole-image, weak)
- claude-opus-5.5: Film-like grain and muted color grading with soft rendering of faces and hands; workers' hands and tools are indistinct blobs (whole-image, moderate)
- claude-opus-5.5: Film-like grain and color grading with soft orb-like 'raindrop' spots on the right that look like applied effect (whole-image, weak)

## s-group-R-2.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.98

**people_anatomy**: score 13, raised in 4/9 calls, at middle-right, bottom-right, bottom-left

- gpt-6-sol: The three workers' overlapping hands and equipment are hard to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The limbs of the three workers on the right track, particularly their legs and hands, blend into the ground, their clothing, or indistinct objects they are supposedly holding. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower body and legs of the worker on the left track merge indistinguishably into the ground and the object they are working on, lacking clear articulation. (bottom-left, strong)
- gemini-3.1-pro-preview: The crouching workers on the right track appear to have legs and lower bodies that melt into the dark, wet-looking surface below them, without clearly defined boots or kneeling postures. (bottom-right, strong)

**background_clutter**: score 10, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The metal fence in the middle of the image is highly irregular, with bent, missing, or merged vertical bars that do not follow a logical structure. (center, strong)
- gemini-3.1-pro-preview: The stack of wooden pallets and the cable spool appear melted and lack distinct structural details like individual planks or a clear spindle. (center, strong)
- gemini-3.1-pro-preview: The vertical metal bars of the fence located behind the wooden cable drum vary noticeably in thickness and spacing. (center, moderate)
- gemini-3.1-pro-preview: The vertical bars of the metal security fence behind the pallets are unevenly spaced and appear to blend directly into the building wall behind them. (center, moderate)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at middle-right, bottom-left, center

- gpt-6-sol: The workers’ hands and small objects at the right rail are hard to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small objects where they meet the right-hand rail are hard to distinguish, a minor ambiguity that could resemble AI-generated detail. (middle-right, weak)
- gemini-3.1-pro-preview: The object or tool the worker on the left is handling is an undefined, blurry dark mass without clear mechanical structure or shape. (bottom-left, strong)
- gemini-3.1-pro-preview: The stack of wooden pallets appears more like a solid, textured block rather than individual slats with realistic structural gaps and shadows. (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead wires are fragmented, seemingly disconnecting in mid-air and not attaching logically to the support structures. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are faint, disjointed, and do not appear to have logical tension or connection points to the support poles or the surrounding infrastructure. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires have structural inconsistencies, with some lines intersecting incoherently and others terminating abruptly in mid-air. (top-left, moderate)

**buildings**: score 5, raised in 1/9 calls, at top-left, center

- gemini-3.1-pro-preview: The vertical lines of the corrugated metal siding on the building are wobbly and uneven, especially above the large open doorway. (top-left, strong)
- gemini-3.1-pro-preview: The window frames on the lower section of the left building are inconsistent; some vertical mullions are thick, others thin, and some appear to fade away. (center, moderate)

## s-group-R-3.jpg: mean P(AI) 0.60 (fails)

- openai/gpt-6-sol: 0.03 / 0.06 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**tools_or_small_objects**: score 16, raised in 6/9 calls, at bottom-right, center

- gpt-6-sol: The workers' hands and tools at the right-hand rail are partly obscured and difficult to resolve precisely. (bottom-right, weak)
- claude-opus-5.5: Tools held by the crouched workers blend into the rails as vague dark bars without clear form (center, moderate)
- claude-opus-5.5: Tools held by workers blend into rails; the bar in left worker's hands is ill-defined, wrench shapes merge with rail (center, moderate)
- gemini-3.1-pro-preview: The workers on the right are interacting with vague, unidentifiable objects that seem to melt into the rails rather than looking like distinct tools. (bottom-right, strong)

**track_geometry**: score 14, raised in 5/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Left track rails curve in a plausible way but the left worker kneels between rails working on nothing clearly defined; the rail pair spacing narrows oddly near the bottom (bottom-left, moderate)
- claude-opus-5.5: Right track's rails converge strangely; the rails under the three workers seem to merge with the workers' tools and the gauge appears inconsistent (bottom-right, moderate)
- claude-opus-5.5: Left track pair: the inner rail curves and seems to diverge/merge inconsistently with the outer rail, rails in embedded street track with uneven gauge toward foreground (bottom-left, moderate)
- claude-opus-5.5: Right track's two rails converge oddly near the workers and the left rail's groove appears to pass under kneeling worker's knees with tool fused into rail (bottom-right, moderate)

**overhead_wires_or_poles**: score 13, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and attach inconsistently to poles; poles lack proper catenary hardware for a tram depot (top-center, moderate)
- claude-opus-5.5: Overhead wires sag and connect arbitrarily between poles and building with no coherent catenary system (top-center, weak)
- claude-opus-5.5: Overhead wires are sparse and inconsistent; poles carry few attachments and wires wander without clear catenary structure for a tram depot (top-center, moderate)
- gemini-3.1-pro-preview: Overhead wires are thin, chaotic, and appear to end abruptly or merge directly into the building's roof without proper mounting fixtures. (top-left, strong)

**people_anatomy**: score 10, raised in 4/9 calls, at bottom-right

- gpt-6-sol: The hands and tools where the three workers gather are difficult to distinguish clearly. (bottom-right, weak)
- gemini-3.1-pro-preview: The hands of the worker in the high-vis yellow jacket on the far right are poorly defined, blending seamlessly into the object they are touching. (bottom-right, strong)
- gemini-3.1-pro-preview: The worker kneeling on the far right has a right leg and foot that are severely mangled and blend seamlessly into the wet ground. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands and arms of the workers in the group of three, particularly the one in the middle wearing yellow, are indistinct and appear to merge into each other or the tools they are holding. (bottom-right, strong)

**composition_or_staging**: score 6, raised in 3/9 calls, at whole-image

- claude-opus-5.5: Highly stylized cinematic film-like grade with haze, soft glow, and dust specks typical of AI 'film photo' prompts; workers posed neatly in a row (whole-image, moderate)
- claude-opus-5.5: Polished film-like grading with soft haze, dust specks and evenly staged workers typical of generated stock imagery (whole-image, moderate)
- claude-opus-5.5: Highly polished film-look aesthetic with soft haze, floating dust specks and cinematic color grading typical of generative 'editorial' imagery (whole-image, moderate)

## s-two-L-1.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.72 / 0.75 / 0.75
- openai/gpt-6-sol: 0.02 / 0.06 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.98

**track_geometry**: score 10, raised in 4/9 calls, at bottom-left, bottom-right, bottom-center

- claude-opus-5.5: Left track's rails curve into the left shed, but the inner rail near the workers seems to wander and merge oddly with paving joints; gauge looks inconsistent along the curve. (bottom-left, moderate)
- claude-opus-5.5: Left track rails curve oddly; the inner rail on the left branch appears to merge and fade inconsistently near the workers, and track gauge varies between branches (bottom-left, moderate)
- claude-opus-5.5: Right branch has two rails entering right shed but the paving and rail alignment look smooth and simplified with no switch or connection to left branch visible (bottom-right, weak)
- claude-opus-5.5: Left track's two rails diverge and splay unnaturally; the right rail of the left track curves toward the center and the gauge appears inconsistent, with workers kneeling between rails that don't run parallel (bottom-left, moderate)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-center

- claude-opus-5.5: Overhead wires are sparse and terminate ambiguously at poles; the catenary doesn't form a coherent tram overhead system over the tracks. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and don't connect logically between poles; poles stand with no clear catenary over tracks entering depot (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and loosely strung between poles without clear catenary hangers or a coherent tram overhead layout over the tracks into the depot (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire extending from the pole on the left arches upwards and terminates abruptly in mid-air without connecting to anything. (top-center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at bottom-center, bottom-left

- claude-opus-5.5: Tools and objects at the workers' feet are indistinct blobs with no identifiable equipment; the orange worker's tool merges with the ground (bottom-center, moderate)
- gpt-6-sol: The workers’ hands and the small objects beside the rail are hard to distinguish precisely. (bottom-left, weak)
- gpt-6-sol: The workers' hands and the objects beside the rail are hard to distinguish at this resolution. (bottom-center, weak)
- gemini-3.1-pro-preview: The objects and tools on the ground around the workers' hands and knees are indistinct, jumbled masses of texture and color rather than recognizable, discrete objects. (bottom-center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at bottom-left, center

- claude-opus-5.5: Both workers kneel symmetrically side by side on the same rail; the tools and objects at their knees are vague, smeared blobs with no clear purpose. (bottom-left, moderate)
- claude-opus-5.5: Two workers kneel symmetrically on the same track with tools smeared into indistinct blobs at their knees (center, moderate)

**background_clutter**: score 4, raised in 3/9 calls, at center

- claude-opus-5.5: Pallets, cable drum and fence are plausible but softly rendered; the fence gate merges oddly with the pallet stacks. (center, weak)
- claude-opus-5.5: Pallets and cable drum near fence are plausible but somewhat mushy in detail (center, weak)
- gemini-3.1-pro-preview: The vertical bars of the metal fence in the background are uneven, bending, and merging into one another in a way inconsistent with manufactured fencing. (center, moderate)

## s-two-L-2.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.02

**people_anatomy**: score 4, raised in 2/9 calls, at bottom-left

- gpt-6-sol: The workers’ hands overlap near the rail and are difficult to distinguish individually. (bottom-left, weak)
- gemini-3.1-pro-preview: The worker on the right has a jumbled, nonsensical arrangement of at least three or four distinct black boots emerging from beneath his legs. (bottom-left, strong)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers’ hands and the small object at the rail are difficult to distinguish clearly, leaving some local detail ambiguous. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the small object between them are hard to distinguish clearly. (bottom-center, weak)
- gemini-3.1-pro-preview: The objects or tools being held by the workers are amorphous, blending seamlessly into their gloved hands and the metal of the rails. (bottom-left, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The rails of the left track narrow unrealistically and seem to lose their grooves, merging together as they approach the dark entrance of the building. (middle-left, strong)

**buildings**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: Several vertical white frames (mullions) on the lower windows of the building on the left disappear abruptly halfway down the glass panes. (middle-left, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stacked wooden pallets next to the building are fused together into a solid, melted-looking block without distinct individual slats. (center, moderate)

## s-two-L-3.jpg: mean P(AI) 0.15 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at middle-right, top-right

- gpt-6-sol: Objects deep inside the right depot doorway are indistinct, so their fine structure cannot be checked. (middle-right, weak)
- gpt-6-sol: Small details inside the dark shed and on its doorway are hard to resolve, so they offer little opportunity to check for generation errors. (top-right, weak)
- gpt-6-sol: The dark workshop interior is indistinct, making its details difficult to verify. (top-right, weak)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The inner rail of the right-hand track abruptly ends and disappears into the concrete halfway towards the building. (bottom-right, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The hands and feet of both workers are ill-defined, appearing as amorphous blobs that merge into the ground and their tool bags. (bottom-left, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The metal fence in the background has vertical bars that are unevenly spaced, bent, and in some places merge together. The objects behind it (like pallets) are nonsensical shapes. (center, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires are haphazardly drawn; they do not form a coherent catenary system to power vehicles and some lines terminate in mid-air. (top-center, moderate)

## s-two-R-1.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**tools_or_small_objects**: score 2, raised in 2/9 calls, at bottom-right

- gpt-6-sol: The workers’ hands and the small objects beside the rail are difficult to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the small equipment between them are hard to distinguish clearly. (bottom-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at bottom-right

- gpt-6-sol: The workers' hands, legs, and nearby dark equipment overlap in a way that is hard to resolve precisely. (bottom-right, weak)

## s-two-R-2.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.01

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The dark equipment by the workers’ hands is hard to distinguish, so its exact shape cannot be checked. (middle-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and lower legs are difficult to distinguish where they overlap the track and equipment. (middle-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The small objects beside the workers are indistinct enough that their shapes are hard to verify. (middle-right, weak)

**background_clutter**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: The very dark depot interior obscures details that might otherwise help verify the scene. (top-right, weak)

## s-two-R-3.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small objects at the rail are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the hardware at the rail are hard to distinguish, leaving some fine detail ambiguous. (middle-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the object at the rail are hard to distinguish at this resolution. (middle-right, weak)

## t-group-L-1.jpg: mean P(AI) 0.42 (fails)

- anthropic/claude-opus-5.5: 0.30 / 0.15 / 0.30
- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.95

**track_geometry**: score 13, raised in 4/9 calls, at center, middle-right

- claude-opus-5.5: Left track's two rails diverge oddly: the left rail curves toward the left depot door while the right rail continues toward the center, so the gauge appears inconsistent near the workers (center, moderate)
- claude-opus-5.5: Left track's rails converge and the left rail curves oddly; the gauge appears inconsistent near the workers, with the left rail curving off toward the left building while the right rail runs straight (center, moderate)
- gemini-3.1-pro-preview: The inner (left) rail of the right-hand track abruptly disappears into the concrete surface just below the kneeling worker, lacking any logical continuation or switch. (middle-right, strong)
- gemini-3.1-pro-preview: The distinct groove of the tram rail on the left track disappears and flattens into a single undefined line exactly where the workers are gathered. (center, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at center

- gpt-6-sol: The overlapping workers' hands and lower legs are difficult to distinguish, so their anatomy cannot be checked confidently. (center, weak)
- gpt-6-sol: The kneeling workers’ hands and feet are difficult to distinguish where they overlap the rails. (center, weak)
- gemini-3.1-pro-preview: The legs of the worker in the orange jacket on the right side of the left group are malformed and blend amorphously into the ground as undefined shapes. (center, strong)
- gemini-3.1-pro-preview: The rightmost worker in the group of three on the left has malformed legs and feet; the blue trousers and brown boot-like shapes blend together and do not form coherent limbs. (center, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: The poles exist, but the overhead catenary wires are largely missing or faint above the tram tracks (top-center, weak)
- gemini-3.1-pro-preview: The scene features grooved tram rails and tall support poles, yet the complex overhead catenary wiring necessary for a tram depot is completely missing, showing only faint, disconnected wisps in the sky. (top-center, strong)
- gemini-3.1-pro-preview: Despite the presence of several tall catenary poles meant for electrified rail, there are absolutely no overhead wires visible connecting them or running above the tracks. (top-center, moderate)

**lighting_or_shadows**: score 6, raised in 1/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The shadow stretching to the left from the middle worker in the group of three is a long, thick, solid rectangle that does not correspond to the shape of a kneeling person. (middle-left, strong)
- gemini-3.1-pro-preview: The worker on the right track is holding a thin metal bar, but the shadow it casts across the track to his left is a disproportionately wide, thick dark line. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at center, middle-right

- gpt-6-sol: Hands and small items around the three workers are difficult to distinguish, though their distance from the camera could explain this. (center, weak)
- gemini-3.1-pro-preview: The worker on the right track has a solid, thick black shape extending near their hands that resembles a shadow but functions visually like a poorly generated, indistinguishable tool. (middle-right, moderate)
- gemini-3.1-pro-preview: The hands of the solitary worker on the right track merge into an indistinct, smooth grey mass on the rail, rather than holding a discernible tool. (middle-right, moderate)

## t-group-L-2.jpg: mean P(AI) 0.31 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.68 / 0.30 / 0.68
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.99

**track_geometry**: score 9, raised in 4/9 calls, at center, bottom-right

- claude-opus-5.5: Left track's rails diverge and curve toward the left shed door, but the rail geometry looks inconsistent; the left pair converges oddly with rails crossing into the paving without a clear switch. (center, moderate)
- claude-opus-5.5: Left track's rails curve toward the left depot door, but the right rail of the left pair seems to drift and merge oddly with the pavement near the workers; the gauge looks inconsistent between the foreground and the workers' position (center, moderate)
- claude-opus-5.5: Left track pair: the left rail curves toward the left building door while the right rail runs straight toward center; rails don't form a consistent parallel gauge pair, suggesting incoherent track layout. (center, moderate)
- gemini-3.1-pro-preview: The gauge (distance between the two rails) of the track on the right becomes impossibly wide towards the foreground compared to the track on the left, defying physical perspective. (bottom-right, strong)

**texture_noise_or_sharpness**: score 7, raised in 5/9 calls, at top-right, middle-right, whole-image

- gpt-6-sol: Details inside the right workshop doorway look indistinct and smeared. (top-right, weak)
- gpt-6-sol: Haze and low contrast make the distant worker and shed interior difficult to resolve, leaving some details ambiguous. (top-right, weak)
- gpt-6-sol: Glare makes the distant worker and right shed entrance indistinct, leaving some details hard to verify. (middle-right, weak)
- claude-opus-5.5: Overall smooth, slightly waxy textures on the pavement and figures, with soft detail in faces and hands. (whole-image, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-right, middle-left

- gpt-6-sol: The distant worker's legs and hands are hard to distinguish from the track and nearby objects. (middle-right, weak)
- gemini-3.1-pro-preview: The left leg of the rightmost worker in the left group (wearing a yellow jacket) appears malformed, ending in a stump-like shape that merges unnaturally with the ground. (middle-left, strong)

**people_clothing_or_gear**: score 4, raised in 2/9 calls, at center, middle-left

- claude-opus-5.5: Hi-vis vests with reflective striping and helmets look coherent; orange vest logo patch is blurry/illegible. (center, weak)
- gemini-3.1-pro-preview: The text on the back of the orange high-visibility jacket consists of meaningless, illegible yellow squiggles rather than actual letters or a recognizable logo. (middle-left, strong)

**people_pose_or_placement**: score 3, raised in 3/9 calls, at center

- claude-opus-5.5: Three workers kneel in a tight, evenly spaced row over the rail, a staged-looking arrangement with similar poses. (center, weak)
- claude-opus-5.5: Three workers kneel in a tight symmetric cluster straddling one rail, looking staged; their hands and tools are vague (center, weak)
- claude-opus-5.5: Three workers kneel tightly clustered straddling a rail with hands converging on one point; plausible but staged-looking. (center, weak)

## t-group-L-3.jpg: mean P(AI) 0.46 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.20 / 0.75 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**track_geometry**: score 10, raised in 4/9 calls, at center, middle-left, bottom-center

- claude-opus-5.5: Left track pair appears to have one rail diverging oddly, rails of left track not exactly parallel near workers (center, weak)
- claude-opus-5.5: Left track's rails diverge oddly: the left rail curves off toward the left shed while the right rail heads straight, so the gauge is not maintained and the pair doesn't form a coherent track (center, moderate)
- claude-opus-5.5: Extra rail lines run toward the left shed and merge ambiguously with the track the workers kneel on (middle-left, weak)
- gemini-3.1-pro-preview: The track layout is physically impossible. Two rails coming from the bottom cross over each other to form the inner rails of the two diverging tracks, while the outer rails of the diverging tracks simply materialize out of the concrete further up with no connection. (bottom-center, strong)

**people_anatomy**: score 8, raised in 2/9 calls, at middle-right, center

- gemini-3.1-pro-preview: The lone worker on the right track has a disproportionately small and distorted head/helmet, and their lower body merges indistinctly with the ground and adjacent objects. (middle-right, strong)
- gemini-3.1-pro-preview: The arms and hands of the rightmost worker in the group of three merge into an undefined, blurry blob where they meet the tools and the rail. (center, moderate)
- gemini-3.1-pro-preview: The lower body of the middle worker in the left group is a jumbled, formless blob of grey fabric without distinct legs or feet. (center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at center, middle-right

- gpt-6-sol: The left-hand workers’ hands and equipment where they meet the rails are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The equipment beside the worker on the right track is difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The piece of equipment resting on the ground next to the lone worker is an indistinct, melted-looking jumble of red and black without recognizable mechanical parts. (middle-right, moderate)
- gemini-3.1-pro-preview: The objects being manipulated by the group of three workers are indistinct, melting into their hands and the rails. (center, strong)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-center, top-left

- claude-opus-5.5: Catenary poles are present, but the overhead wires are nearly absent or vanish, which is inconsistent for a tram depot (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are discontinuous, fading in and out of the sky rather than forming unbroken lines. (top-center, moderate)
- gemini-3.1-pro-preview: The vertical pole on the far left edge of the frame has inconsistent thickness and appears slightly warped. (top-left, weak)
- gemini-3.1-pro-preview: The overhead wires visible above the depot entrance on the left are disjointed, branching nonsensically, and fade into the sky. (top-left, moderate)

**text_signage_or_markings**: score 4, raised in 2/9 calls, at bottom-right, center

- gemini-3.1-pro-preview: The painted white lines on the concrete curve smoothly but then nonsensically fade out into a blurry, unstructured texture. (bottom-right, moderate)
- gemini-3.1-pro-preview: Faint pink lines painted on the concrete between the tracks fade out randomly and do not form logical markings. (center, moderate)

## t-group-R-1.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**people_anatomy**: score 14, raised in 3/9 calls, at bottom-right, middle-left

- gemini-3.1-pro-preview: The lower leg and foot of the rightmost worker in the group of three are distorted and merge unnaturally with the ground surface. (bottom-right, strong)
- gemini-3.1-pro-preview: The group of three workers on the right are physically merged together; the worker on the far right has a severely deformed leg bent at an unnatural angle, and their hands blend into a shapeless mass instead of holding distinct tools. (bottom-right, strong)
- gemini-3.1-pro-preview: The lone worker on the left track has distorted proportions, with legs that appear unnaturally small compared to the upper body, and hands that lack defined fingers. (middle-left, moderate)
- gemini-3.1-pro-preview: The rightmost worker's leg has a severely distorted anatomy with what looks like an extra boot or fused leg segments. (bottom-right, strong)

**tools_or_small_objects**: score 10, raised in 5/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The three workers' hands and equipment overlap, making the exact tool shapes difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the three grouped workers disappear into a clump of melted, undefined shapes rather than grasping distinct tools. (bottom-right, strong)
- gemini-3.1-pro-preview: The equipment the three workers are interacting with is an incoherent, blobby mixture of colors and shapes that does not resemble any real track maintenance tools. (bottom-right, strong)

**people_clothing_or_gear**: score 6, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The boots of the worker on the left track are replaced by a jumble of small, wheel-like shapes resting directly on the rail. (middle-left, strong)
- gemini-3.1-pro-preview: The middle worker of the group has a blurred, gray head that lacks the distinct shape or details of a real hard hat or head. (middle-right, strong)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: The inner groove of the right rail becomes messy and loses its parallel structure right where the group of workers is kneeling. (bottom-center, moderate)
- gemini-3.1-pro-preview: The inner rail of the right track seems to disappear into the workers and doesn't clearly connect through the area they are working on. (center, moderate)

**buildings**: score 3, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The vertical dividers (mullions) in the long strip of windows on the background building are wobbly, crooked, and unevenly spaced. (top-center, moderate)
- gemini-3.1-pro-preview: The lighting inside the dark open doorway of the building on the left consists of floating, disconnected white dashes that do not look like structural light fixtures. (top-left, weak)

## t-group-R-2.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.20 / 0.15 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 1.00 / 0.99

**people_anatomy**: score 14, raised in 6/9 calls, at bottom-right, middle-right, middle-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish, leaving some visual ambiguity. (bottom-right, weak)
- gpt-6-sol: The workers' hands and equipment overlap, making some individual limbs hard to distinguish. (middle-right, weak)
- claude-opus-5.5: Lone worker kneeling on left track has partially merged legs/boots that read slightly ambiguous at low resolution (middle-left, weak)
- gemini-3.1-pro-preview: The lower body and legs of the lone kneeling worker are a formless, melted blob of pixels that lacks clear anatomy and blends into the surrounding ground. (middle-left, strong)

**track_geometry**: score 12, raised in 3/9 calls, at bottom-center, center, bottom-right

- gemini-3.1-pro-preview: The rails of the right-hand track curve downwards and then abruptly disappear into the flat concrete, failing to connect to a switch mechanism or the main track line. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction or switch lacks physical steel rails or deep grooves, appearing instead as faded, flat lines painted onto the concrete. (center, strong)
- gemini-3.1-pro-preview: The steel rails of the track appear to pass directly through or merge seamlessly into the legs and knees of the kneeling workers. (bottom-right, strong)
- gemini-3.1-pro-preview: The rails in the right-hand track curve sharply inward, and the rightmost rail disappears or merges strangely near the workers. (bottom-center, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The faint lines in the sky intended to be overhead wires are erratic, starting and stopping randomly without connecting to any support structures or the building. (top-center, strong)
- gemini-3.1-pro-preview: Expected overhead tram wires are largely missing from the poles, represented only by a few faint, disconnected lines floating in the sky. (top-center, moderate)
- gemini-3.1-pro-preview: The vertical poles appear relatively straight, but the overhead wires connecting them are either missing or faintly rendered without logical connection points. (top-center, weak)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers' hands and equipment at the rail are hard to distinguish, leaving some small-object details ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The tools or objects the workers are handling are indistinct blobs that blend into their hands and clothing. (bottom-right, moderate)

**people_clothing_or_gear**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The three workers are merged together; the middle worker's yellow helmet fuses unnaturally into the right worker's shoulder and high-vis jacket. (bottom-right, strong)

## t-group-R-3.jpg: mean P(AI) 0.08 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.25 / 0.15
- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.02

**track_geometry**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: Left track pair: inner rail curves left while the right rail of the left branch runs straight to center; the track gauge appears inconsistent, with rails diverging oddly and no clear switch frog connecting the branches (center, moderate)

**people_anatomy**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The three workers' hands and tools near the rail are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and equipment where they meet the rail are difficult to distinguish precisely. (middle-right, weak)

**camera_or_windscreen**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: Haze over the right-hand building reduces detail; it could reflect image-generation softness, though it also looks like glare through a windscreen. (top-right, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The right-hand workers’ hands and the small objects at the rail are difficult to distinguish clearly. (center, weak)

## t-two-L-1.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.12
- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**people_anatomy**: score 8, raised in 3/9 calls, at center

- gpt-6-sol: The orange-vested worker’s hands and equipment are difficult to distinguish where they meet the rail. (center, weak)
- gemini-3.1-pro-preview: The hands of the worker in the orange vest, as well as the tools he is supposedly holding, are an indistinct, melted jumble that blends directly into the rail. (center, moderate)
- gemini-3.1-pro-preview: The right arm and leg of the worker in the orange jacket blend into a completely indistinct mass, making it unclear how they are positioned or what they are holding. (center, strong)
- gemini-3.1-pro-preview: The lower half of the worker in the yellow jacket appears somewhat blobby and poorly defined, merging strangely with the ground and the rail. (center, moderate)

**track_geometry**: score 6, raised in 2/9 calls, at center, bottom-center

- gemini-3.1-pro-preview: The rails in the foreground appear to be a single track, but they split impossibly: the left rail goes into the left building entrance and the right rail goes into the right entrance, which would stretch a vehicle to the width of the building. (center, strong)
- gemini-3.1-pro-preview: The inner rail of the right curving track does not connect to a switch or frog; it simply fades into the concrete near the rail where the orange-clad worker is kneeling, making the track layout physically impossible. (bottom-center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: There are tall vertical poles that look like supports for an overhead catenary system, but there are no wires, brackets, or tensioning equipment attached to them. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires intersect randomly in the sky and do not follow a logical routing to provide power along the paths of the tracks. (top-center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Where the inner rails from the left and right tracks should cross or meet, there is no switch mechanism, frog, or logical intersection; the rails simply fade or merge amorphously into the concrete. (center, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, top-right

- gpt-6-sol: The workers' hands and the area where they meet the rail are indistinct, leaving some fine detail hard to verify. (center, weak)
- gpt-6-sol: The right-hand workshop entrance is hazy and lacks fine detail, which could resemble AI-generated softness, though it is also consistent with glare. (top-right, weak)

## t-two-L-2.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.02

**track_geometry**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The pair of rails curving towards the right building completely disconnect and end abruptly in the concrete paving without any switch or points connecting them to the main track. (middle-right, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The hands of the workers and the tools they are presumably holding blend into an unformed, mushy mass where they interact with the rail. (center, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and the small hardware between them are indistinct, making their exact interaction hard to verify. (center, weak)
- gpt-6-sol: The workers’ hands and the small hardware between them are indistinct, making their exact interaction hard to verify. (middle-left, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The workers’ hands and the small objects between them are difficult to distinguish clearly. (center, weak)

## t-two-L-3.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.02

**people_anatomy**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The workers’ hands and the objects immediately around them are hard to distinguish. (center, weak)
- gpt-6-sol: The workers’ hands and the area where they meet the rail are hard to distinguish. (center, weak)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at top-right

- gpt-6-sol: Haze and low contrast obscure details inside the right workshop doorway. (top-right, weak)
- gpt-6-sol: The right-hand shed entrance is unusually hazy and indistinct compared with the foreground. (top-right, weak)

## t-two-R-1.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.06 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.95 / 0.02

**tools_or_small_objects**: score 6, raised in 4/9 calls, at bottom-right, middle-right, center

- gpt-6-sol: The workers’ hands, equipment, and rail hardware overlap in a small area that is difficult to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers' hands and the object between them are difficult to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and equipment between the rails are difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The equipment bag on the ground near the workers is a shapeless, textured blob lacking distinct functional details like zippers or clear straps. (center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The right rail of the left track loses its 3D groove and turns into a flat, painted-looking grey ribbon as it curves towards the building. (middle-left, strong)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: An overhead wire extending leftwards from the central pole abruptly vanishes into the sky without connecting to another structure. (top-center, strong)

**people_anatomy**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The left hand of the worker in the yellow jacket is an undefined dark blob lacking individual fingers, seemingly fused with a shapeless tool. (center, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: The right warehouse entrance is hazy and indistinct compared with the foreground. (top-right, weak)

## t-two-R-2.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 12, raised in 3/9 calls, at bottom-right, bottom-center, center

- gemini-3.1-pro-preview: The two rails of the right-hand track do not remain parallel; the left rail goes straight towards the doorway while the right rail curves sharply to the right, creating a physically impossible, massively widening track gauge. (bottom-right, strong)
- gemini-3.1-pro-preview: Where the inner rails of the two tracks should intersect (the frog), the geometry is just a blurry, unstructured smudge instead of distinct, intersecting metal components. (bottom-center, strong)
- gemini-3.1-pro-preview: The rail line immediately under the worker in the green jacket loses its defined groove and straight edge, turning into a wavy, muddy texture. (center, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet in a V-shape just behind the workers and do not connect to the incoming single track at the bottom, making it physically impossible for a tram to travel through the junction. (center, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-right

- gemini-3.1-pro-preview: The right leg of the worker in the yellow jacket is malformed, appearing unnaturally thin, oddly angled, and blending indistinctly into the ground without a proper shoe or foot. (middle-right, strong)
- gemini-3.1-pro-preview: The hands and lower arms of the worker in the orange jacket merge indistinctly into the rail and ground, lacking defined anatomy or identifiable tools. (middle-right, moderate)
- gemini-3.1-pro-preview: The hands of the worker in orange are indistinct smudges merging with the rail, and the right leg of the worker in yellow appears to melt into the ground. (middle-right, moderate)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at middle-right, center

- gemini-3.1-pro-preview: The bags or equipment lying on the ground next to both workers are amorphous, textured blobs lacking any structural details, seams, or defined shapes expected of real tool bags. (middle-right, moderate)
- gemini-3.1-pro-preview: The object resting on the ground to the left of the worker in the green jacket is a formless, melted-looking blob rather than a recognizable tool bag or piece of equipment. (center, strong)
- gemini-3.1-pro-preview: The bags or objects placed on the ground next to both workers are rendered as formless, indistinct grey blobs. (middle-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at middle-right, center, top-right

- gpt-6-sol: The workers’ hands and nearby tools are too soft to distinguish clearly, leaving some fine details uncertain. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the objects immediately beside the rails are too soft to identify clearly; this could conceal generated detail, though distance and glare also explain it. (center, weak)
- gpt-6-sol: The right shed entrance is hazy and its interior details are difficult to distinguish; this could be generated softness, though glare also explains it. (top-right, weak)

**lighting_or_shadows**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The shadows cast by the two workers point almost horizontally to the left, which completely contradicts the shadows cast by the vertical poles in the background that point towards the bottom right. (center, strong)

## t-two-R-3.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.01 / 0.01

**tools_or_small_objects**: score 5, raised in 4/9 calls, at middle-right

- gpt-6-sol: The dark equipment around the workers’ hands is difficult to distinguish, leaving its exact shape ambiguous. (middle-right, weak)
- gpt-6-sol: The dark gear around the workers’ feet is difficult to distinguish from their boots and the rails. (middle-right, weak)
- gpt-6-sol: The workers' hands and equipment at rail level are hard to distinguish and appear somewhat merged. (middle-right, weak)
- gemini-3.1-pro-preview: The object sitting on the ground immediately to the right of the worker in yellow is a completely indistinct, blurry blob that lacks the defined edges or recognizable features of a real toolbag or piece of equipment. (middle-right, moderate)

**lighting_or_shadows**: score 3, raised in 1/9 calls, at whole-image

- gemini-3.1-pro-preview: There is a massive contradiction in the lighting: the workers cast distinct, dark shadows to the left (indicating a light source on the right), while the tall pole in the center of the image casts a shadow to the right and has a bright highlight on its left side (indicating a light source on the left). (whole-image, strong)

**background_clutter**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of wooden pallets and the circular cable spool in the background are melted and fused together, showing severely distorted structural geometry and incorrect perspective. (center, strong)

**track_geometry**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The inner (left) rail of the right-hand track loses its defined groove structure and abruptly becomes a flat, messy line as it passes underneath the worker in orange. (middle-right, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: A prominent overhead wire visible near the top center of the frame abruptly ends in mid-air, fading into the sky instead of connecting to a support structure. (top-center, moderate)
