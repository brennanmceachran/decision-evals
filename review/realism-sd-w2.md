# Realism check: sd-w2

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| people_anatomy | 177 | 16/16 |
| track_geometry | 102 | 15/16 |
| tools_or_small_objects | 96 | 15/16 |
| overhead_wires_or_poles | 88 | 12/16 |
| background_clutter | 43 | 11/16 |
| texture_noise_or_sharpness | 33 | 13/16 |
| people_pose_or_placement | 29 | 8/16 |
| text_signage_or_markings | 27 | 9/16 |
| people_clothing_or_gear | 20 | 8/16 |
| lighting_or_shadows | 20 | 7/16 |
| composition_or_staging | 17 | 9/16 |
| buildings | 14 | 5/16 |
| camera_or_windscreen | 10 | 8/16 |
| switch_mechanism | 6 | 3/16 |
| vehicles | 3 | 1/16 |

## s-group-L-1.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.15
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.99

**tools_or_small_objects**: score 10, raised in 4/9 calls, at middle-right, bottom-left, bottom-right

- gpt-6-sol: The right-hand worker's hands and the equipment beside the rail are hard to distinguish, leaving some fine detail ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The objects or tools the group of workers are interacting with are indistinct, mushy dark shapes lacking any recognizable mechanical detail. (bottom-left, moderate)
- gemini-3.1-pro-preview: The equipment lying on the ground next to the group of three workers consists of indistinct, melded shapes lacking the crisp details of actual tools or machinery. (bottom-left, moderate)
- gemini-3.1-pro-preview: The hands of the worker and the object he is working on are fused into an indistinct, muddy brown blob lacking any mechanical detail or discernible shape. (bottom-right, strong)

**background_clutter**: score 10, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The vertical bars of the metal security fence located behind the wooden pallets are uneven, wobbly, and irregularly spaced. (center, moderate)
- gemini-3.1-pro-preview: The wooden pallets stacked in the middle have deformed slats that merge into one another, lacking the rigid geometry of real wood. (center, moderate)
- gemini-3.1-pro-preview: The vertical bars of the grey metal fence between the buildings are highly irregular in thickness, strangely wavy, and inconsistently spaced. (center, strong)
- gemini-3.1-pro-preview: The large wooden cable spool lying on its side has a weird, swirly spiral pattern on its face instead of the expected straight wooden planks. (center, strong)

**overhead_wires_or_poles**: score 9, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires form chaotic, non-functional intersecting patterns and zig-zags rather than a logical, structured catenary system. (top-center, strong)
- gemini-3.1-pro-preview: The thin overhead wires are disconnected in places, fade out mid-air, and trace erratic, squiggly paths rather than forming a coherent, taut catenary system. (top-center, strong)
- gemini-3.1-pro-preview: The overhead wires are disconnected, jagged, and terminate randomly in mid-air or pass through solid objects illogically. (top-center, strong)

**people_anatomy**: score 8, raised in 3/9 calls, at bottom-right

- gemini-3.1-pro-preview: The worker has a disproportionately small head/helmet compared to their wide torso, and their legs appear as undefined blobs. (bottom-right, strong)
- gemini-3.1-pro-preview: The feet and lower legs of the worker kneeling on the right track are malformed, appearing to merge seamlessly into the ground without defined boots or structure. (bottom-right, moderate)
- gemini-3.1-pro-preview: The left boot of the worker kneeling on the right track appears to be melting into and merging with the metal rail. (bottom-right, strong)

**buildings**: score 4, raised in 2/9 calls, at center, middle-right

- gemini-3.1-pro-preview: The vertical white frames separating the window panes on the building facade are uneven, not perfectly vertical, and some do not connect properly from top to bottom. (center, moderate)
- gemini-3.1-pro-preview: The metal palisade fence behind the cable spools has vertical bars that warp, merge together, and vary inconsistently in thickness. (middle-right, moderate)

## s-group-L-2.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.95

**people_anatomy**: score 10, raised in 4/9 calls, at middle-left, middle-right, bottom-left

- gpt-6-sol: The crouching workers’ hands and legs overlap and are difficult to distinguish clearly. (middle-left, weak)
- gemini-3.1-pro-preview: The three workers crouched on the left track have lower bodies that merge into a shapeless dark mass, lacking distinct legs, feet, or clear interaction with tools. (middle-left, strong)
- gemini-3.1-pro-preview: The legs and feet of the solitary worker squatting on the right track are malformed, lacking clear anatomical structure and appearing to meld together uncomfortably. (middle-right, strong)
- gemini-3.1-pro-preview: The lower bodies of the three clustered workers are indistinct and blend into each other and the ground; the worker in the orange jacket in particular lacks defined legs. (bottom-left, strong)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The overhead wires are fragmented, follow illogical paths, and some abruptly end in mid-air without connecting to anything. (top-left, strong)
- gemini-3.1-pro-preview: The overhead wires exhibit illogical geometry, with some lines appearing to intersect randomly or fade away without proper structural connections. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires intersect in confusing, nonsensical ways, with one wire seeming to pass directly into or through the solid roof of the building on the left. (top-left, strong)

**background_clutter**: score 7, raised in 4/9 calls, at top-center, center, top-right

- gpt-6-sol: Objects around the fence and stacked pallets are indistinct, though their distance and the windscreen could explain this. (top-center, weak)
- gemini-3.1-pro-preview: The metal fence in the background between the buildings has vertical bars that are wavy, uneven in thickness, and appear to melt together. (center, moderate)
- gemini-3.1-pro-preview: The stack of wooden pallets located between the two buildings is rendered as a fused, disorganized mass rather than distinct, separate objects. (center, moderate)
- gemini-3.1-pro-preview: The light sources visible deep inside the dark right-hand bay look like disconnected, floating luminous blobs rather than physical light fixtures attached to a structure. (top-right, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The right rail of the left track appears to vanish into the concrete pavement near where the workers are crouched. (bottom-left, strong)
- gemini-3.1-pro-preview: The steel rails on the left track lose their sharp definition and appear to melt or merge unevenly into the surrounding concrete surface right beneath the workers. (bottom-left, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-left, bottom-center, bottom-left

- gpt-6-sol: The workers’ hands and the objects around the left rail are difficult to distinguish. (middle-left, weak)
- gpt-6-sol: The left group’s hands and small equipment blend together at the rail, making the exact tool hard to distinguish. (bottom-center, weak)
- gemini-3.1-pro-preview: The object resting on the ground near the kneeling workers appears as an indistinct, formless brown blob rather than a recognizable tool or bag. (bottom-left, moderate)

## s-group-L-3.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**people_anatomy**: score 15, raised in 4/9 calls, at bottom-center, bottom-left, bottom-right

- claude-opus-5.5: Huddled group of four has overlapping limbs that are somewhat hard to parse, but hands and boots appear plausible. (bottom-center, weak)
- gemini-3.1-pro-preview: The hands of the workers huddled together are formless blobs that merge with the track, and they do not appear to be holding any distinguishable tools. (bottom-left, strong)
- gemini-3.1-pro-preview: The legs of the worker on the right track are highly distorted and illogical, appearing to have extra limbs or melting into the ground and their clothing. (bottom-right, strong)
- gemini-3.1-pro-preview: In the cluster of workers on the left track, arms, hands, and tools blend together in a confusing, amorphous mass, making it impossible to distinguish individual limbs. (bottom-left, strong)

**tools_or_small_objects**: score 10, raised in 6/9 calls, at bottom-center, bottom-left

- gpt-6-sol: The workers’ overlapping hands and equipment at the left rail are difficult to distinguish individually. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and equipment overlap in a way that makes the exact tool being used hard to distinguish. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and equipment overlap densely, making the exact tool arrangement hard to verify; this is a weak possible AI cue. (bottom-left, weak)
- gemini-3.1-pro-preview: The work bags resting on the ground next to the workers are shapeless, smooth lumps lacking clear seams, structure, or realistic straps. (bottom-left, moderate)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead wires in the sky connect in structurally illogical ways, with some lines appearing to float, intersect weirdly, or end abruptly without tensioners. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are routed chaotically, with some lines simply ending in mid-air or intersecting in physically impossible ways. (top-left, strong)
- gemini-3.1-pro-preview: The overhead wires exhibit discontinuous paths, fading into the sky and failing to connect logically to the poles or form a coherent power network. (top-center, strong)

**people_clothing_or_gear**: score 5, raised in 2/9 calls, at bottom-right, bottom-left

- gemini-3.1-pro-preview: The reflective striping on the right worker's trousers is misaligned, and the leg anatomy around the knee and boot appears distorted and melted into the ground. (bottom-right, strong)
- gemini-3.1-pro-preview: The ear defenders on the workers' helmets are inconsistently shaped and appear to merge into the helmets unnaturally. (bottom-left, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The inner rail of the track near the worker's hands appears to blur and melt into the surrounding concrete surface rather than maintaining a defined, sharp edge. (bottom-right, strong)

## s-group-L-4.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.75 / 0.78 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**people_anatomy**: score 19, raised in 4/9 calls, at bottom-left, bottom-center, bottom-right

- gpt-6-sol: The workers’ hands where they meet the rail are hard to distinguish, leaving some detail ambiguous. (bottom-left, weak)
- gemini-3.1-pro-preview: The rightmost worker in the group of three has a heavily distorted lower body; his legs are unrecognizable and appear to melt into the ground. (bottom-center, strong)
- gemini-3.1-pro-preview: The legs and feet of the solitary worker on the right track are indistinct and merge nonsensically with the adjacent bag and concrete. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the three workers are indistinct blobs that seem to melt into the ground or the rails, lacking clear fingers or structure. (bottom-left, strong)

**tools_or_small_objects**: score 11, raised in 7/9 calls, at bottom-left, bottom-right

- gpt-6-sol: The workers’ hands and the small items at the left rail are difficult to distinguish clearly. (bottom-left, weak)
- gpt-6-sol: The right worker’s hands and the object beside the rail are difficult to distinguish, leaving a small visual ambiguity. (bottom-right, weak)
- claude-opus-5.5: The worker on the right track has a bag that merges into the rail area, and his hands hold an indistinct object. (bottom-right, weak)
- claude-opus-5.5: Right worker's hands and the bag beside him are smeared, no clear tool being used (bottom-right, weak)

**track_geometry**: score 10, raised in 5/9 calls, at bottom-left

- claude-opus-5.5: The left track's rails converge oddly; the inner rail near the workers seems to merge and split inconsistently, and the gauge varies along its length. (bottom-left, moderate)
- claude-opus-5.5: Left track rails converge and merge oddly; the right rail of the left track seems to blend into the central paving without a clear gauge-consistent pair, and the left track appears to have three rail lines near the workers (bottom-left, moderate)
- claude-opus-5.5: Left track rails converge oddly; the workers kneel on a rail pair whose gauge and continuity look inconsistent, with the left rail appearing to merge into paving and the curve geometry not matching a real tram turnout (bottom-left, moderate)
- gemini-3.1-pro-preview: The inner rail of the left track loses its defined, continuous shape and becomes blurry and distorted directly underneath the workers' hands. (bottom-left, moderate)

**overhead_wires_or_poles**: score 10, raised in 5/9 calls, at top-center

- claude-opus-5.5: The overhead wires are sparse and disconnected. Some wires end in mid-air or attach to poles without proper hangers, which doesn't look like a coherent tram catenary. (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent, sagging lines connecting poles arbitrarily with no coherent catenary over the tracks (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and randomly strung, not forming a coherent tram catenary over each track; wires terminate arbitrarily (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires exhibit strange artifacts, with some segments appearing to dissolve or disconnect unnaturally against the sky. (top-center, moderate)

**texture_noise_or_sharpness**: score 6, raised in 4/9 calls, at whole-image, top-right

- claude-opus-5.5: There is a uniform film-like grain and soft, painterly detail on surfaces, consistent with AI imitation of a film photo look. (whole-image, weak)
- claude-opus-5.5: Film-like grain and soft dust specks overlaid uniformly, a common stylistic look in generated 'film photo' images (whole-image, weak)
- claude-opus-5.5: Film-like grain and bokeh dust specks applied uniformly, typical of AI 'analog photo' styling; surfaces are overly smooth beneath (whole-image, weak)
- gemini-3.1-pro-preview: There is a pattern of evenly spaced, perfectly round, faint white dots overlaid on the dark doorway, which looks like an artificial digital artifact rather than natural dirt or reflection. (top-right, strong)

## s-group-R-1.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.95

**people_anatomy**: score 13, raised in 4/9 calls, at bottom-right, middle-right

- gpt-6-sol: The rightmost workers’ hands and tools are difficult to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The kneeling workers' hands and faces are indistinct, making fine anatomical details hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The lower body and legs of the worker wearing the orange jacket are undefined and appear to melt indistinguishably into the ground. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the rightmost worker in yellow, who is holding a tool, are poorly rendered and lack distinct fingers, appearing mangled. (bottom-right, moderate)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-left, top-center, top-right

- gemini-3.1-pro-preview: The overhead wire segment angling upwards on the left side terminates abruptly in mid-air without attaching to any pole or structure. (top-left, strong)
- gemini-3.1-pro-preview: The overhead wires connect in chaotic, illogical ways, with some lines ending abruptly in the sky or forming unnatural loops near the roof peaks. (top-center, strong)
- gemini-3.1-pro-preview: The overhead wire leading towards the right-hand shed seems to terminate abruptly in mid-air or against the building facade rather than continuing inside. (top-right, moderate)

**track_geometry**: score 7, raised in 3/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The inner (right) rail of the left track completely disappears into the concrete surface just before it reaches the kneeling worker. (bottom-left, strong)
- gemini-3.1-pro-preview: The left rail of the right-hand track appears to lose its 3D profile and flatten into the ground texture as it passes beneath the worker in the orange jacket. (bottom-right, moderate)
- gemini-3.1-pro-preview: The rails of the track where the three workers are situated lack solid 3D definition and seem to blend unnaturally into the surrounding wet concrete. (bottom-right, moderate)

**background_clutter**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The vertical bars of the metal palisade fence have inconsistent thicknesses, and some appear to merge together or float without reaching the base. (center, moderate)
- gemini-3.1-pro-preview: The vertical bars of the grey metal fence behind the pallets are irregularly spaced, wavy, and some merge together or fail to connect to the ground. (center, strong)

**tools_or_small_objects**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of pallets in the distance is not composed of distinct wooden boards but appears as a fused, brown, textured block, typical of AI generation errors. (center, strong)
- gemini-3.1-pro-preview: The stack of wooden pallets in the background between the tracks is structurally incoherent, with slats that are wavy and merge into one another. (center, moderate)

## s-group-R-2.jpg: mean P(AI) 0.35 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.72 / 0.15 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**people_anatomy**: score 12, raised in 5/9 calls, at bottom-right, middle-right

- gpt-6-sol: The overlapping workers' hands and legs are hard to distinguish precisely, though their positions remain plausible. (bottom-right, weak)
- gpt-6-sol: The three workers overlap around the right rail, making some hands and limbs difficult to distinguish. (bottom-right, weak)
- gpt-6-sol: The overlapping workers' hands and tools at the rail are hard to distinguish clearly. (bottom-right, weak)
- gemini-3.1-pro-preview: The face of the worker in the orange high-visibility jacket is severely distorted and appears to melt into his yellow helmet. (bottom-right, strong)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-center, top-left

- claude-opus-5.5: The overhead wires are sparse and wander without proper tram catenary structure. The poles carry no clear hangers or arms. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires intersect haphazardly and do not form a logical, continuous support structure. (top-center, strong)
- gemini-3.1-pro-preview: The overhead wires form nonsensical loops and intersect in a chaotic web without clear tension or logical connection points to supports. (top-left, strong)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at center, bottom-right

- claude-opus-5.5: The bars or tools the workers are holding blend vaguely into the rail, with no clear tool shape visible. (center, moderate)
- gemini-3.1-pro-preview: The hands of the workers and the tools they are using to work on the rail merge into an indistinct, continuous blob without clear boundaries. (bottom-right, strong)
- gemini-3.1-pro-preview: The black tool bag on the ground between the workers has a melted, indistinct shape lacking structure or clear openings. (center, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center, bottom-right

- claude-opus-5.5: The rails curve into the two depot sheds, but the track pairs don't line up consistently. The left track's rails fade into the paving and the central rail pattern is ambiguous. (bottom-center, moderate)
- gemini-3.1-pro-preview: The rails of the track appear to blend softly into the surrounding concrete rather than maintaining sharp, defined metallic edges. (bottom-right, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image, center

- claude-opus-5.5: The workers are symmetrically staged, with matching tool bags placed beside each group. (whole-image, weak)
- claude-opus-5.5: The scene is neatly composed with workers evenly spread across the frame, a slightly staged editorial look. (center, weak)

## s-group-R-3.jpg: mean P(AI) 0.44 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.30 / 0.80
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.99

**tools_or_small_objects**: score 8, raised in 5/9 calls, at bottom-right, bottom-center, center

- gpt-6-sol: The workers’ hands and small items around the right-hand rail are hard to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The tools and hands where the three workers meet are hard to distinguish precisely. (bottom-right, weak)
- claude-opus-5.5: Tools and bags around the kneeling workers are amorphous; there are yellow objects on the rail with no clear form (bottom-center, moderate)
- claude-opus-5.5: Tools at the workers' hands and the bags on the ground are indistinct blobs rather than identifiable equipment (center, moderate)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-center

- claude-opus-5.5: Overhead wires are sparse and seem to end or connect illogically between poles; there is no coherent tram catenary over the tracks (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and do not connect coherently between the poles. No proper catenary runs above the tracks (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are faint, disconnected, and fade out into the sky without connecting logically to the support poles or forming a structurally sound catenary system. (top-center, strong)

**people_anatomy**: score 6, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: There is an extra, disembodied head wearing a white hardhat fused into the back and shoulder of the central worker in the right group. (bottom-right, strong)
- gemini-3.1-pro-preview: The legs of the kneeling worker in orange in the middle of the group appear to melt seamlessly into the track and ground, with no distinct feet or boots visible. (bottom-right, strong)

**people_pose_or_placement**: score 5, raised in 3/9 calls, at center, bottom-left

- claude-opus-5.5: Workers kneel in a tightly staged cluster on the right track; the person behind the orange-vested worker is partially hidden and oddly merged, with an indistinct body (center, moderate)
- claude-opus-5.5: Workers are posed in a staged cluster, all kneeling at the same point on the right track, with a half-hidden fourth figure behind the orange-vest worker (center, moderate)
- gemini-3.1-pro-preview: The area around the waist and tool belt of the crouching worker on the left is messy and lacks logical structural definition. (bottom-left, weak)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Left track rails curve smoothly into the depot, but the rail pair spacing and the right rail's sweep across the concrete look inconsistent, with the inner rail appearing to merge oddly near the shed entrance (bottom-left, moderate)
- gemini-3.1-pro-preview: The train rails beneath the group of workers on the right are chaotic, intersect at impossible angles, and abruptly disappear into the concrete without forming a continuous track. (bottom-right, strong)

## s-group-R-4.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.12 / 0.68 / 0.68
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.02

**overhead_wires_or_poles**: score 10, raised in 4/9 calls, at top-center, top-left

- claude-opus-5.5: Overhead wires are sparse and loosely connected: some cables end abruptly or fail to connect logically to the poles, with no coherent tram catenary over the tracks (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent for tram depot; some wires end abruptly or attach oddly to poles (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires above the left building are squiggly, chaotically arranged, and several lines terminate abruptly in mid-air without connecting to any support structures. (top-left, strong)
- gemini-3.1-pro-preview: The overhead electrical wires are jagged, randomly disconnected, and one line appears to clip directly through the corrugated roof of the building on the left. (top-center, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at bottom-right

- gpt-6-sol: The three workers' hands and nearby equipment overlap, making some individual shapes difficult to resolve. (bottom-right, weak)
- gemini-3.1-pro-preview: The lower bodies and legs of the three kneeling workers are indistinct and muddy, and their hands merge directly into undefined red and black blobs on the tracks instead of recognizable tools. (bottom-right, strong)
- gemini-3.1-pro-preview: The legs and boots of the three workers on the right lack distinct form, melting into each other and into the ground. (bottom-right, strong)

**people_pose_or_placement**: score 7, raised in 3/9 calls, at center, middle-left

- claude-opus-5.5: Three workers kneel tightly packed on the right track, and their legs, feet and tools blend together beneath them with ambiguous limb boundaries (center, moderate)
- claude-opus-5.5: Three workers kneeling tightly clustered on right track in very similar poses, looking staged; one lone worker on left track (center, moderate)
- gemini-3.1-pro-preview: The worker on the left track appears to be sitting directly on the rails, but the lower half of the body is missing and there is no visible cart or seat. (middle-left, strong)

**tools_or_small_objects**: score 6, raised in 4/9 calls, at bottom-right, center

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish clearly. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and equipment overlap at the rail and are difficult to distinguish individually. (bottom-right, weak)
- gemini-3.1-pro-preview: The stack of wooden pallets near the central fence has irregular geometry, with the planks blending into each other and lacking consistent spacing or straight edges. (center, moderate)
- gemini-3.1-pro-preview: The objects or tools the workers are interacting with on the ground are a nonsensical jumble of dark, undefined shapes rather than distinct equipment. (bottom-right, moderate)

**text_signage_or_markings**: score 6, raised in 4/9 calls, at middle-left, center, bottom-left

- claude-opus-5.5: Small warning sticker and white label on the left shed door look plausible but are illegible blobs; no readable text anywhere in the scene (middle-left, weak)
- claude-opus-5.5: Small warning signs on doors are illegible blobs (middle-left, weak)
- gemini-3.1-pro-preview: The yellow painted lines on the concrete ground between the tracks form jagged, illogical shapes that do not resemble standard, purposeful railway safety or clearance markings. (center, moderate)
- gemini-3.1-pro-preview: The white rectangular ground markings on the left track interact with the rails inconsistently, seeming to float above the rail in one spot. (bottom-left, moderate)

## t-group-L-1.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.20 / 0.99

**track_geometry**: score 13, raised in 3/9 calls, at center, bottom-right, middle-right, bottom-left

- gemini-3.1-pro-preview: Where the inner rails of the two tracks converge, there is no physical switch mechanism or flangeway frog; the rail lines simply fade into the concrete and cross illogically. (center, strong)
- gemini-3.1-pro-preview: The outer rail of the right track is a thick, flat band that looks completely different from the grooved inner rail, and the track gauge widens unrealistically as it approaches the foreground. (bottom-right, strong)
- gemini-3.1-pro-preview: The track diverging to the right seems to curve sharply towards the building entrance but the perspective and alignment of the rails appear slightly off or uneven near the bottom right. (middle-right, weak)
- gemini-3.1-pro-preview: The rails of the tracks, particularly as they extend towards the background, appear to fade into flat lines painted on the concrete rather than maintaining the physical depth and grooves of embedded steel rails. (center, strong)

**tools_or_small_objects**: score 11, raised in 5/9 calls, at center, middle-right

- gpt-6-sol: The workers' hands and small equipment overlap and are hard to distinguish precisely. (center, weak)
- gpt-6-sol: The workers’ hands and small objects around the rails are indistinct, making their exact shapes hard to verify. (center, weak)
- gpt-6-sol: The hands and equipment between the three workers are difficult to distinguish and appear to run together. (center, weak)
- gemini-3.1-pro-preview: The object resting on the ground behind the rightmost worker resembles a tool bag but is rendered as a featureless, lumpy blob with no defined straps or pockets. (middle-right, moderate)

**people_anatomy**: score 11, raised in 3/9 calls, at middle-left, middle-right, bottom-right

- gemini-3.1-pro-preview: The middle worker in the group of three lacks discernible legs; the lower half of his body is rendered as an indistinct, amorphous brown mass. (middle-left, strong)
- gemini-3.1-pro-preview: The solo worker on the right track has a left arm that ends in a featureless stump rather than a hand where it touches the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The worker on the right track has a somewhat ambiguous pose, kneeling but with hands positioned awkwardly on the track, and the tool he's supposedly using is undefined. (bottom-right, moderate)
- gemini-3.1-pro-preview: The left arm and hand of the worker on the right merge indistinguishably into the ground and the tool he is supposedly holding. (middle-right, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: Where the tracks split in the lower foreground, there is no mechanical switch point, frog, or logical track junction; the lines simply merge into each other illogically. (bottom-center, strong)

**background_clutter**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The wooden pallets stacked near the fence in the background have melted, irregular geometry lacking proper straight slats. (top-center, moderate)

## t-group-L-2.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.12
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.05

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The right-hand worker’s hands and the small object beside the rail are too indistinct to identify clearly. (middle-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Haze and limited detail make the distant worker's hands and tool difficult to distinguish; this ambiguity could also occur in an AI image. (middle-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: Hands, legs, and equipment overlap in the kneeling group and are difficult to distinguish individually. (middle-left, weak)

## t-group-L-3.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.06
- anthropic/claude-opus-5.5: 0.70 / 0.25 / 0.72
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.99

**people_anatomy**: score 13, raised in 6/9 calls, at center, middle-left, middle-right

- gpt-6-sol: The overlapping workers' hands and small tools are difficult to distinguish. (center, weak)
- claude-opus-5.5: The group of three workers on the left track has merged limbs and bodies; the orange-vest worker's arms and legs blend into the yellow-vest worker beside him. (center, moderate)
- claude-opus-5.5: Kneeling workers on left track have blended bodies and legs; orange-vest worker's limbs merge with the yellow-vest worker beside him (center, moderate)
- gemini-3.1-pro-preview: The group of three workers on the left track has severe anatomical errors; their bodies merge together, limbs are indistinct or missing, and the person in the back appears as just a floating helmet and partial torso melting into the others. (middle-left, strong)

**track_geometry**: score 11, raised in 5/9 calls, at center

- claude-opus-5.5: Left track rails converge oddly: the left rail curves toward the depot door while the right rail of the same track runs straight; the gauge near the workers appears inconsistent, and the rails seem to merge or fade near the workers. (center, moderate)
- claude-opus-5.5: Left track curves toward left depot door but the rails appear to converge oddly; the left rail pair seems to lack a clear flangeway path connecting to the right track, and the split from a single approach is ambiguous (center, weak)
- claude-opus-5.5: Left track rails merge oddly: the left rail curves toward depot door but the right rail of the left track runs straight into the workers' area without a clear connection; the two tracks diverge with inconsistent gauge near the workers (center, moderate)
- gemini-3.1-pro-preview: The area where the tracks diverge lacks any visible switch mechanism, frogs, or points required for a real railway junction; the rail grooves simply split smoothly in an impossible manner. (center, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at middle-right, whole-image

- gpt-6-sol: The kneeling worker's face and gear are soft and indistinct, though consistent with the image's overall resolution. (middle-right, weak)
- gpt-6-sol: The right-hand worker's hands and nearby equipment look soft, though they are small in the frame. (middle-right, weak)
- claude-opus-5.5: The overall soft, film-like grade with smooth surfaces and slightly mushy detail on the workers' tools and gear is typical of video-generation output. (whole-image, moderate)
- gemini-3.1-pro-preview: Upon closer inspection, the image—especially the concrete pavement and the clothing—has a smoothed, somewhat painterly texture that lacks the natural high-frequency noise or sharp micro-details of a real photograph. (whole-image, strong)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The left workers’ hands and nearby equipment merge into dark shapes that are difficult to distinguish. (center, weak)
- gpt-6-sol: The dark objects beside the orange-vested worker are hard to distinguish and have somewhat muddled outlines. (center, weak)
- claude-opus-5.5: The right worker's tool and bag are indistinct blobs, and his hands are unclear. (middle-right, weak)
- claude-opus-5.5: Bags/tools on ground beside workers are amorphous blobs without defined shape (middle-left, weak)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-left, center, top-center

- gemini-3.1-pro-preview: The overhead wires near the left building entrance are faint, appear to start and stop randomly in mid-air, and do not form a logical or continuous catenary system. (top-left, strong)
- gemini-3.1-pro-preview: The tall grey pole near the center of the image meets the ground very abruptly, missing any realistic base plate, bolts, or concrete foundation. (center, moderate)
- gemini-3.1-pro-preview: The tall poles stand in the yard, but there is no coherent overhead wire system attached to them; the wires are either missing or appear as faint, disconnected squiggles. (top-center, moderate)

## t-group-L-4.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.20 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**people_anatomy**: score 14, raised in 4/9 calls, at middle-right, bottom-left, bottom-right, middle-left

- gpt-6-sol: The crouching worker’s hands, legs, and nearby gear are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The lower bodies of the three workers grouped together are ill-defined, appearing to melt into the ground or each other, with the middle worker in yellow seeming to lack legs entirely. (bottom-left, strong)
- gemini-3.1-pro-preview: The lone worker on the right track has distorted, blob-like legs and feet that do not form coherent anatomical shapes. (bottom-right, moderate)
- gemini-3.1-pro-preview: The three workers clustered together have lower bodies that meld into an indistinguishable jumble. The legs of the worker in the yellow jacket appear fused with the worker to their left. (middle-left, strong)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at middle-right, bottom-right, middle-left

- gpt-6-sol: The right-hand worker's hands and nearby equipment form a dark, hard-to-resolve cluster; this is a minor ambiguity rather than a clear error. (middle-right, weak)
- gpt-6-sol: The crouching worker's hands and tool blend indistinctly into the rail, making their exact arrangement hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The area where the lone worker's hands meet the track lacks distinct tools, appearing instead as undefined, blurry shapes. (bottom-right, moderate)
- gemini-3.1-pro-preview: Despite the pose of actively working on the rails, none of the three workers in the group appear to be holding identifiable tools; their hands merge indistinctly into the track or each other. (middle-left, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-center, bottom-left

- gemini-3.1-pro-preview: The junction of the tram rails under the group of three workers does not form a coherent mechanical switch; the rail grooves blend and disappear illogically. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails, especially the inner rail of the left track, appear wavy, soft-edged, and inconsistent in width as they extend toward the bottom of the frame. (bottom-left, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image, center

- claude-opus-5.5: Scene resembles trolley-problem setup (3 vs 1 on branches), could suggest staging but rendering is realistic (whole-image, weak)
- claude-opus-5.5: Scene looks somewhat staged like stock footage, with workers neatly placed on tracks (center, weak)

**lighting_or_shadows**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The shadow cast by the leftmost worker in the group of three appears somewhat disconnected from the body, and the overall shape of the group's shadow doesn't properly align with the complex shape of three separate bodies. (middle-left, moderate)

## t-group-R-1.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.08 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.22 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.02 / 1.00 / 0.98

**people_anatomy**: score 11, raised in 5/9 calls, at middle-right, middle-left

- gpt-6-sol: The three closely grouped workers overlap, making some arms and legs difficult to distinguish. (middle-right, weak)
- gpt-6-sol: The kneeling workers overlap closely, making some hands and legs difficult to distinguish. (middle-right, weak)
- gpt-6-sol: The kneeling workers' hands, knees, and equipment overlap, making some individual limbs difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The group of three workers consists of merged, indistinguishable bodies and limbs where it is impossible to tell which arm or leg belongs to which person. (middle-right, strong)

**track_geometry**: score 8, raised in 2/9 calls, at center, middle-right, bottom-left

- gemini-3.1-pro-preview: The rails between the two main tracks are incoherent; they merge into the concrete and do not form a physically possible switch or crossing. (center, strong)
- gemini-3.1-pro-preview: The track rails leading out of the right building simply disappear into the ground and do not connect logically to the rails the group of workers is clustered around in the foreground. (middle-right, strong)
- gemini-3.1-pro-preview: The groove of the inner rail on the left track disappears and becomes completely flat as it nears the bottom edge of the frame, which is physically implausible for tram/train tracks. (bottom-left, moderate)

**lighting_or_shadows**: score 6, raised in 2/9 calls, at center, middle-left

- gemini-3.1-pro-preview: There is a large, dark shadow stretching leftward from the group of workers on the right, which completely contradicts the light source coming from the left (indicated by the shadows of the left pole and building interiors). (center, strong)
- gemini-3.1-pro-preview: The worker kneeling on the left track casts almost no shadow, which strongly contradicts the long, dark shadows cast by the poles and the group of workers on the right, indicating an inconsistent light source. (middle-left, strong)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Three workers kneeling on the right track; bodies overlap plausibly, but the figures are somewhat blurred and the arrangement is tightly clustered, limbs hard to separate. (middle-right, weak)
- gemini-3.1-pro-preview: The worker on the far right of the group appears to be missing a left foot; the leg ends abruptly in a brown stump. (middle-right, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: The distant doorway and interior details are hazy and indistinct. (top-right, weak)

## t-group-R-2.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.06 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**people_anatomy**: score 13, raised in 4/9 calls, at bottom-right, middle-left, center

- gpt-6-sol: The workers’ hands and the point where they meet the rail are hard to distinguish, though they occupy a small, shadowed part of the image. (bottom-right, weak)
- gemini-3.1-pro-preview: The worker on the left has a right leg that appears malformed, with an extra unnatural bulge that merges directly into the ground. (middle-left, strong)
- gemini-3.1-pro-preview: The workers in the group of three have indistinct, poorly defined lower bodies and legs that appear to merge into each other and the ground. (bottom-right, strong)
- gemini-3.1-pro-preview: The worker on the left track has a missing or deformed lower body, with their kneeling posture looking unnatural and unsupported. (center, strong)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-center, bottom-right

- gemini-3.1-pro-preview: The rail grooves are wavy and uneven, randomly disappearing or appearing completely filled with concrete in spots where they should be open. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails beneath the group of three workers are indistinct, melting into the pavement without clear, continuous lines expected of train or tram tracks. (bottom-right, strong)
- gemini-3.1-pro-preview: The tracks splitting in the foreground are drawn as flat, dark lines crossing each other, rather than physical rails with proper switches, grooves, or frogs. (bottom-center, strong)

**background_clutter**: score 7, raised in 3/9 calls, at center, top-left

- gemini-3.1-pro-preview: The wooden pallets and the cable spool in the background lack proper 3D perspective and depth, appearing more like flat, painted textures. (center, strong)
- gemini-3.1-pro-preview: The open doorway of the building on the left reveals a dark void with floating, disconnected streaks of light rather than a coherent interior. (top-left, moderate)
- gemini-3.1-pro-preview: The wooden spool and pallets in the background are blobby, soft, and lack realistic structural detail. (center, moderate)

**text_signage_or_markings**: score 5, raised in 1/9 calls, at bottom-right, top-center

- gemini-3.1-pro-preview: The solid white painted line on the ground in the lower right crosses directly over the rail groove without dipping into it or being interrupted. (bottom-right, strong)
- gemini-3.1-pro-preview: The yellow triangular warning sign attached to the middle pole is completely blank with just a dark smudge, lacking any actual symbol or text. (top-center, moderate)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The hands of the leftmost worker in the group of three merge into a gray, indistinguishable blob instead of holding a defined tool. (bottom-right, strong)

## t-group-R-3.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.03 / 0.06 / 0.06
- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.99

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, bottom-right, middle-left

- gemini-3.1-pro-preview: The inner rail of the right-hand track abruptly ends or fades into the concrete, failing to continue continuously towards the bottom edge of the frame. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails underneath the group of three workers are poorly defined, merging into the concrete and failing to maintain a consistent gauge or continuous path towards the building. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner rail of the left track appears to simply vanish into the concrete immediately behind the single kneeling worker. (middle-left, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The three workers overlap tightly, making their hands and individual body outlines hard to distinguish. (middle-right, weak)
- gpt-6-sol: The three workers' hands, tools, and legs overlap around the rail, making some individual limbs hard to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The group of three workers physically blend into each other; the central worker appears to be just a head and shoulders with no lower body, and limbs merge confusingly with surrounding objects. (bottom-right, strong)
- gemini-3.1-pro-preview: The cluster of three workers features merged limbs and bodies, particularly where the worker in the orange jacket intersects with the others, making it impossible to distinguish individual arms or hands. (bottom-right, strong)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish cleanly. (middle-right, weak)
- gemini-3.1-pro-preview: The bags and tools lying on the ground next to the group of workers are indistinct, amorphous blobs without recognizable functional features. (bottom-right, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: While there are tall poles present that are typically used for overhead electrification in a rail depot, there are no visible wires attached to them. (top-center, moderate)

**lighting_or_shadows**: score 2, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The large shadow cast to the left by the group of three workers is unnaturally blocky and uniform, failing to reflect the complex silhouette of three distinct individuals. (bottom-right, moderate)

## t-group-R-4.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 16, raised in 4/9 calls, at middle-right, middle-left, center

- gpt-6-sol: The overlapping hands and gear of the three workers are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The group of three workers have poorly defined limbs, blob-like hands lacking fingers, and slightly misshapen safety helmets. (middle-right, strong)
- gemini-3.1-pro-preview: The left leg of the solitary worker on the left track merges directly into the steel rail, making it appear as if the rail passes straight through the leg. (middle-left, strong)
- gemini-3.1-pro-preview: Within the group of three workers on the right, hands and tools are rendered as formless blobs, and their limbs confusingly meld into one another and the ground. (middle-right, strong)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead wire extending to the left from the central pole abruptly fades out and disappears into the sky. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires above the left building's entrance are disconnected, chaotic zig-zags that float in the air rather than forming a functional, continuous catenary system. (top-left, strong)
- gemini-3.1-pro-preview: The overhead catenary wires near the left building entrance fade out and vanish mid-air instead of connecting to a support structure or the building. (top-left, strong)

**track_geometry**: score 6, raised in 3/9 calls, at bottom-center, bottom-left, middle-left

- gemini-3.1-pro-preview: The tram rails near the bottom edge of the frame appear slightly wavy and lack the sharp, three-dimensional definition of real metal tracks inset in pavement. (bottom-center, moderate)
- gemini-3.1-pro-preview: The flangeway (groove) of the inner rail on the left track inconsistently flattens out and loses its depth as it approaches the worker, rather than maintaining a continuous channel. (bottom-left, moderate)
- gemini-3.1-pro-preview: The steel rails near the solitary worker on the left lose their structural definition and appear to blur or melt into the surrounding concrete. (middle-left, moderate)

**buildings**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The grid of windows on the building's facade shows warped, irregular frames and windowpanes that arbitrarily vary in size. (top-center, moderate)
- gemini-3.1-pro-preview: The vertical mullions (dividers) on the long strip of windows across the building's facade are inconsistent, with some vanishing halfway down the glass. (top-center, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The solitary worker on the left track is squatting in an unnatural, distorted posture, with their lower legs appearing to melt into the ground. (middle-left, strong)
