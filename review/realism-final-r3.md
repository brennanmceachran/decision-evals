# Realism check: final-r3

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 320 | 30/32 |
| people_anatomy | 192 | 31/32 |
| tools_or_small_objects | 153 | 29/32 |
| background_clutter | 97 | 24/32 |
| overhead_wires_or_poles | 66 | 18/32 |
| people_pose_or_placement | 61 | 14/32 |
| texture_noise_or_sharpness | 52 | 25/32 |
| switch_mechanism | 47 | 13/32 |
| camera_or_windscreen | 36 | 13/32 |
| people_clothing_or_gear | 19 | 7/32 |
| buildings | 14 | 7/32 |
| composition_or_staging | 10 | 5/32 |
| reflections_or_wet_surfaces | 6 | 5/32 |
| text_signage_or_markings | 5 | 4/32 |

## w-two-L-1.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.08
- anthropic/claude-opus-5.5: 0.10 / 0.07 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.98

**track_geometry**: score 11, raised in 2/9 calls, at bottom-center, middle-right

- gemini-3.1-pro-preview: The concrete sleepers (ties) from the left and right tracks physically intersect and crisscross each other in the space between the tracks, which is structurally impossible. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner (left) rail of the right track fades out and completely disappears into the ballast before it reaches the concrete apron near the building. (middle-right, strong)
- gemini-3.1-pro-preview: The layout of the rails where the two tracks meet is nonsensical; it lacks a proper switch mechanism, and rails appear to merge, split, and abruptly end, particularly the disjointed rail segment underneath the worker in orange. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the right-hand track seems to fade out or melt into the ground ballast before it reaches the building. (middle-right, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at bottom-center, middle-left

- gpt-6-sol: The workers’ hands and the small hardware between them are hard to distinguish clearly. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish clearly. (bottom-center, weak)
- gemini-3.1-pro-preview: The tools and hands of the workers are depicted as an indistinct, amorphous black blob rather than recognizable hands holding specific equipment. (middle-left, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The concrete pipes lying on the ground behind the chain-link fence are warped, irregularly shaped, and seamlessly meld into one another. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects lying behind the fence appears blobby and poorly defined, with the individual cylinders melting into each other. (center, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The hands of the workers and the tools they are using melt together into indistinct, amorphous dark shapes that blend directly into the rails. (bottom-left, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: An overhead catenary wire curving downwards from the top left edge simply fades out and disappears into the sky without connecting to any pole or structure. (top-left, moderate)

## w-two-L-2.jpg: mean P(AI) 0.44 (fails)

- anthropic/claude-opus-5.5: 0.30 / 0.30 / 0.30
- openai/gpt-6-sol: 0.03 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 17, raised in 5/9 calls, at center, bottom-center, bottom-left

- claude-opus-5.5: Left track's inner rail appears to continue diagonally toward the right track area while the right track begins abruptly; the rails don't form a coherent turnout and the left branch geometry is odd, with the right rail of the left track merging toward the center (center, moderate)
- claude-opus-5.5: Left and right tracks diverge oddly: the left track's right rail curves toward the right track but the two branches don't form a coherent turnout; the gap between them at the bottom has no frog or switch, rails just run in parallel separated by gravel (center, moderate)
- claude-opus-5.5: Sleeper spacing and the fastenings on the left track look slightly irregular, with ties that appear to merge near the inner rail (bottom-center, weak)
- claude-opus-5.5: Left and right track pairs diverge with no switch, frog or connecting rails; the inner rails simply end/converge at the bottom edge in an implausible way, two separate tracks splaying apart without a turnout (bottom-center, moderate)

**people_anatomy**: score 10, raised in 4/9 calls, at bottom-center, bottom-left, center, middle-left

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish clearly. (bottom-center, weak)
- gemini-3.1-pro-preview: The boots and lower legs of the worker in the yellow-green jacket are indistinct and appear to melt into the gravel and rail. (bottom-left, strong)
- gemini-3.1-pro-preview: The lower legs and boots of the worker in the orange high-visibility jacket are vaguely rendered and appear to melt into the ground and the wooden sleepers. (center, strong)
- gemini-3.1-pro-preview: The worker kneeling in the yellow high-visibility jacket has a confusing and physically impossible arrangement of boots visible underneath him, appearing to have three feet. (middle-left, strong)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at center, bottom-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish, leaving that small area visually ambiguous. (center, weak)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket and the area where they touch the rail are smudged, with no clear distinction between the person's gear and the steel rail. (bottom-left, strong)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket, along with whatever tool he is holding, melt into an indistinct blob that blends seamlessly into the steel rail. (center, strong)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead catenary wires are very faint, disjointed, and do not logically connect to the support poles or to each other in a functional way. (top-center, moderate)
- gemini-3.1-pro-preview: Several overhead catenary wires appear to end abruptly in the sky without connecting to any supporting pole or structure. (top-left, strong)
- gemini-3.1-pro-preview: A thin overhead wire entering the frame from the top left simply terminates and vanishes in mid-air near the support pole without connecting to any structure. (top-left, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at middle-right, center

- gemini-3.1-pro-preview: The chain-link fence seems to partially merge with or pass directly through the side of the portable toilet in the background. (middle-right, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical pipes lying on the ground behind the tracks are warped, lack circular symmetry on their openings, and appear to fuse into one another. (center, moderate)

## w-two-L-3.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.08
- openai/gpt-6-sol: 0.06 / 0.05 / 0.03
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 1.00

**track_geometry**: score 12, raised in 3/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet in a sharp V-shape without any proper switch mechanism like a frog or switch blades, which is structurally impossible for a train to navigate. (bottom-center, strong)
- gemini-3.1-pro-preview: The concrete sleepers in the area between the diverging tracks are chaotic, intersecting with each other at illogical angles. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet at a sharp point without a proper turnout mechanism (no switch blades or frog), and the wooden sleepers (ties) underneath them physically intersect and overlap at impossible angles. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks do not connect to form a functional switch or frog; they overlap impossibly and blur into the ballast. (bottom-center, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-left

- gpt-6-sol: The workers’ hands and tools are hard to distinguish where they meet the rail. (middle-left, weak)
- gemini-3.1-pro-preview: The workers' lower bodies and legs lack definition, blending directly into the gravel, shadows, and rails without distinct feet or proper anatomical structure. (middle-left, strong)
- gemini-3.1-pro-preview: The worker on the right has lower legs that melt completely into the track bed, with no defined feet or boots visible. (middle-left, strong)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The overhead wires in the top left appear disconnected, with some lines ending abruptly in mid-air. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires appear erratic, with some segments seeming to disappear into the sky or failing to connect logically to the support structures. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires are disjointed, fading in and out of the sky without making logical or physical connections to the support structures. (top-center, strong)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at middle-left, center

- gpt-6-sol: The workers’ hands and anything they may be holding are hard to distinguish where they overlap the rail. (middle-left, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects (likely meant to be pipes or concrete rolls) near the fence features misshapen, uneven, and merged forms rather than consistent, distinct objects. (center, moderate)
- gemini-3.1-pro-preview: The row of cylindrical objects lying behind the tracks are fused together into a single, melted-looking mass with inconsistent shapes. (center, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The workers on the track appear somewhat blob-like up close, with limbs and tools poorly defined and blending into the rail and ballast. (middle-left, moderate)
- gemini-3.1-pro-preview: The worker on the left has undefined hands and tools that blend nonsensically into the rail they are supposedly working on. (middle-left, moderate)

## w-two-L-4.jpg: mean P(AI) 0.28 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.15
- openai/gpt-6-sol: 0.05 / 0.04 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**people_anatomy**: score 12, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The worker in the orange shirt has an anomalous yellow shape, resembling a secondary small hard hat or fleshy growth, attached to the right side of his neck and shoulder area. (center, strong)
- gemini-3.1-pro-preview: The worker in the yellow-green shirt has a left leg that blends indistinctly into the gravel and rail behind it, missing a clearly defined boot or lower leg structure. (center, strong)
- gemini-3.1-pro-preview: The worker in the yellow-green jacket has an indistinct left foot that looks like an amorphous black blob melting directly into the side of the metal rail. (center, strong)
- gemini-3.1-pro-preview: The hands of the worker on the right blend into the rail as a blurry, fleshy mass, completely lacking defined fingers, gloves, or a distinctly rendered tool. (center, strong)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the two diverging tracks approach each other in the foreground but fail to form a coherent railway switch; there is no visible frog or point mechanism, and the rails seem to just end or merge nonsensically. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction entirely lacks switch points, moving blades, or a frog; instead, four continuous rails are drawn running parallel and simply curving away from each other into two diverging paths, which is physically impossible for a functioning railway. (bottom-center, strong)

**background_clutter**: score 5, raised in 2/9 calls, at center, middle-right

- gemini-3.1-pro-preview: The pile of cylindrical objects (likely pipes) located behind the fence are fused together with irregular, melted appearances rather than being distinct, uniform manufactured objects. (center, strong)
- gemini-3.1-pro-preview: The stack of cylindrical pipes behind the chainlink fence features distorted, warped shapes and unevenly sized, organic-looking holes rather than uniform manufactured dimensions. (middle-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, center

- gpt-6-sol: Fine details look hazy, particularly around the workers and distant building. (whole-image, weak)
- gpt-6-sol: The workers’ hands and the nearby rail hardware are indistinct, making their exact interaction hard to verify. (center, weak)
- gpt-6-sol: Some small details look soft or smeared, especially around the workers and distant objects. (whole-image, weak)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: An overhead line extending towards the right from the leftmost pole simply fades away and vanishes into the sky without connecting to the next support structure. (top-left, moderate)

## w-two-L-5.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.12
- openai/gpt-6-sol: 0.02 / 0.04 / 0.08
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 20, raised in 3/9 calls, at bottom-left, bottom-center, middle-right, middle-left, center

- gemini-3.1-pro-preview: The rails directly under and immediately in front of the two workers do not follow logical parallel lines; the inner rail seems to split or merge nonsensically into the gravel and the other rail. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet at a sharp point, forming an inverted 'V' with no continuing track below it, completely lacking functional switch components like a frog or switch points. (bottom-center, strong)
- gemini-3.1-pro-preview: The railway ties (sleepers) beneath the workers are highly irregular, positioned at random, skewed angles, and some merge seamlessly into the surrounding gravel rather than being distinct wooden or concrete blocks. (bottom-left, strong)
- gemini-3.1-pro-preview: The rails on the right branch curve towards the building but then fade abruptly into the concrete surface without continuing inside or ending logically. (middle-right, strong)

**tools_or_small_objects**: score 8, raised in 5/9 calls, at bottom-center, center

- gpt-6-sol: The workers’ hands and the equipment between them are indistinct, making their exact activity hard to verify. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the objects between them are hard to distinguish, leaving fine details difficult to verify. (bottom-center, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish, leaving some shapes ambiguous. (bottom-center, weak)
- gemini-3.1-pro-preview: The pile of pipes or cylindrical objects in the background has distorted, swirly patterns on their circular ends, and the individual pipes blend into one another like a single blob. (center, strong)

**people_anatomy**: score 7, raised in 2/9 calls, at bottom-left, middle-left

- gemini-3.1-pro-preview: The lower body of the worker in the yellow vest is highly distorted, with legs and feet lacking definition and appearing to melt into the track bed. (bottom-left, strong)
- gemini-3.1-pro-preview: The worker in the orange vest is missing a distinct right leg, with their lower body blending indistinguishably into the track structure and shadows. (bottom-left, moderate)
- gemini-3.1-pro-preview: The hands and the tools held by the workers are indistinct, mushy shapes that blend unintelligibly into the rails they are supposedly working on. (middle-left, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The lower bodies of the two workers blend into indistinguishable, formless blobs that merge unnaturally with the track ballast and each other. (bottom-left, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The thin overhead wires connected to the support poles appear discontinuous, vanishing in mid-air or floating without logical connection points. (top-center, moderate)

## w-two-L-6.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rail of the right-hand track terminates abruptly in the gravel, failing to connect to the switch structure. (bottom-center, strong)
- gemini-3.1-pro-preview: The wooden sleepers in the triangular space between the diverging tracks are jumbled, overlapping, and placed at impossible intersecting angles. (bottom-center, strong)
- gemini-3.1-pro-preview: The railway junction completely lacks functional switch components like points and a frog; the inner rails impossibly merge into each other and the gravel, and the sleepers form an incorrect V-shape instead of spanning both tracks. (bottom-center, strong)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The junction where the tracks split lacks recognizable mechanical components like a frog or switch points; instead, the rails and ties blur into a messy, fused area. (bottom-center, strong)
- gemini-3.1-pro-preview: Instead of functional switch components, the converging rails melt together into an unstructured, continuous mass of metal. (bottom-center, strong)

**background_clutter**: score 6, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical objects (like concrete pipes) behind the chain-link fence has irregular, melting shapes and nonsensical end caps. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects behind the fence features distorted, non-uniform shapes that seamlessly blend into each other. (center, moderate)
- gemini-3.1-pro-preview: The cylindrical objects stacked behind the fence are amorphous, blobby, and lack clear, distinct physical edges. (center, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: Horizontal overhead wires pass continuously across the sky and behind the poles without any visible hardware attaching them to the support structures. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire appears to split unnaturally and dissolve into the sky near the leftmost supporting pole. (top-left, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at center

- gpt-6-sol: The workers’ hands and the exact point where they meet the rail are indistinct. (center, weak)
- gpt-6-sol: The workers’ hands and small tools are hard to distinguish at this resolution, though no clear anatomical error is visible. (center, weak)
- gpt-6-sol: The workers’ hands and the small equipment between them are somewhat indistinct, which could conceal generated details but is also consistent with image softness. (center, weak)

## w-two-L-7.jpg: mean P(AI) 0.44 (fails)

- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.62
- openai/gpt-6-sol: 0.03 / 0.04 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 13, raised in 3/9 calls, at center, bottom-center, bottom-right

- claude-opus-5.5: Two tracks diverge from a common point near bottom center with consistent sleeper spacing and plausible rail curvature; however the split has no visible switch blades or frog, the inner rails simply curve apart. (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks intersect without any switch mechanism or crossing (frog); they appear to simply melt into or pass through each other. (bottom-center, strong)
- gemini-3.1-pro-preview: The rail ties (sleepers) on the right track have highly inconsistent shapes, widths, and spacing. (bottom-right, moderate)
- gemini-3.1-pro-preview: At the bottom center, a single middle rail splits into a Y-shape to form the inner rails of the diverging tracks. This is physically impossible for standard train wheels, and there is no visible switch point or frog mechanism. (bottom-center, strong)

**overhead_wires_or_poles**: score 8, raised in 4/9 calls, at top-right, top-left, top-center

- claude-opus-5.5: Overhead catenary poles and wires are sparse and somewhat inconsistent, cantilever arms without clear contact wire over tracks. (top-right, weak)
- gemini-3.1-pro-preview: The overhead wire attached to the leftmost pole seems to simply fade out into the sky rather than continuing coherently. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires appear as faint lines that criss-cross randomly in the sky without making logical or functional connections to the support poles. (top-center, strong)
- gemini-3.1-pro-preview: The overhead catenary wires are faint, broken in places, and do not appear to form a logical, tensioned network connecting to the support poles. (top-center, moderate)

**people_anatomy**: score 6, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The extended left leg and boot of the worker in the yellow jacket dissolve into an undefined dark, muddy blob on the ground. (bottom-left, strong)
- gemini-3.1-pro-preview: The left leg of the worker in the yellow jacket extends backward and dissolves into a shapeless, muddy dark blob without a defined foot or boot. (bottom-left, strong)

**tools_or_small_objects**: score 6, raised in 2/9 calls, at center, bottom-center

- gemini-3.1-pro-preview: The object resting on the ground near the worker in the orange jacket, presumably a tool bag, is an indistinct, amorphous lump lacking real-world structure or detail. (center, moderate)
- gemini-3.1-pro-preview: The pile of concrete pipes or cylinders near the fence in the background appears fused together, lacking distinct edges and proper cylindrical forms. (center, moderate)
- gemini-3.1-pro-preview: The bag resting on the ground next to the kneeling worker in orange is an indistinct, textured blob lacking clear seams, structure, or straps. (bottom-center, moderate)

**composition_or_staging**: score 5, raised in 2/9 calls, at center

- claude-opus-5.5: Very symmetric staged composition with workers neatly placed on each branch, typical of generated stock imagery; texture smooth. (center, moderate)
- gemini-3.1-pro-preview: A continuous wire mesh fence runs horizontally across both sets of railway tracks in the midground, an impossible layout that would physically block trains from accessing the building. (center, strong)

## w-two-L-8.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- openai/gpt-6-sol: 0.04 / 0.03 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 14, raised in 3/9 calls, at bottom-right, center, middle-right, bottom-left

- gemini-3.1-pro-preview: The concrete sleepers (ties) on the right curving track lose their consistent rectangular shape, becoming distorted, unevenly spaced, and blending into the surrounding ballast. (bottom-right, moderate)
- gemini-3.1-pro-preview: The junction where the tracks split has no switch mechanism (points, throw bars) and the rails merge and cross each other in a physically impossible, nonsensical manner. (center, strong)
- gemini-3.1-pro-preview: The sleepers (ties) on the curving right track appear as flat, painted dashed white lines rather than physical 3D structural blocks. (middle-right, strong)
- gemini-3.1-pro-preview: The right rail of the left track vanishes under the worker in yellow and does not connect logically to the rest of the rail system. (bottom-left, strong)

**people_pose_or_placement**: score 9, raised in 3/9 calls, at bottom-center, center, middle-left

- gemini-3.1-pro-preview: The lower half of the worker in the yellow jacket loses all definition, blending completely into an indistinct muddy shadow on the tracks without discernible legs or feet. (bottom-center, strong)
- gemini-3.1-pro-preview: The hands of the worker in the yellow shirt appear to melt directly into the rail and ground, lacking defined fingers and without holding distinct tools. (center, strong)
- gemini-3.1-pro-preview: The worker in the yellow jacket has hands that blend indistinctly into the rail without clearly holding any tool, and his left leg or shoe seems to melt directly into the metal base of the rail. (middle-left, strong)

**background_clutter**: score 7, raised in 4/9 calls, at top-center, middle-left, middle-right, center

- gpt-6-sol: The small circular objects stacked near the building are indistinct and difficult to identify precisely. (top-center, weak)
- gemini-3.1-pro-preview: The stack of cylindrical objects (like pipes) behind the chainlink fence are fused together into a continuous blobby mass rather than being distinct individual items. (middle-left, moderate)
- gemini-3.1-pro-preview: The stack of cylindrical objects (possibly pipes) in front of the middle building door have irregular, melty shapes that blend together. (middle-right, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (like pipes or rolls) sitting on the ground behind the fence look deformed, melty, and blend into one another in an unnatural way. (center, moderate)

**people_anatomy**: score 4, raised in 2/9 calls, at center, bottom-left

- gpt-6-sol: The workers' hands and the equipment immediately around them are hard to distinguish. (center, weak)
- gemini-3.1-pro-preview: The worker in the orange shirt has physically impossible legs; the right foot appears to be twisted entirely backwards or detached, and the knees blend unnaturally into the track sleepers. (bottom-left, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead wires are very faint, break arbitrarily in the sky, and do not appear to connect structurally in a logical way to the poles. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wire connecting to the top of the leftmost pole appears to fade out and abruptly disappear into the sky rather than continuing normally. (top-left, moderate)

## w-two-R-1.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.06 / 0.06
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**track_geometry**: score 8, raised in 2/9 calls, at bottom-center, bottom-right

- gemini-3.1-pro-preview: In the area where the tracks split, the concrete ties (sleepers) are arranged haphazardly, overlapping strangely and not properly supporting the rails. (bottom-center, moderate)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a single solid rail pointing towards the bottom edge, lacking any switch points or movable blades, which is a mechanically impossible configuration. (bottom-center, strong)
- gemini-3.1-pro-preview: The wooden sleepers underneath the right track are laid at highly irregular, non-perpendicular angles relative to the rails. (bottom-right, strong)

**people_anatomy**: score 6, raised in 3/9 calls, at bottom-right, bottom-center

- gpt-6-sol: The workers' hands and the equipment they are handling are hard to distinguish at this resolution. (bottom-right, weak)
- gemini-3.1-pro-preview: The hands and lower limbs of the two kneeling workers appear to melt into the tools and rails, with indistinct shapes and a confusing overlap of blue pants/pads. (bottom-right, strong)
- gemini-3.1-pro-preview: The legs and boots of the worker in the orange shirt are indistinct and melt into the surrounding rails and ballast without clear anatomical definition. (bottom-center, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-right, bottom-center, bottom-right

- gpt-6-sol: The equipment around the workers' hands is hard to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers' hands and the equipment beside the rail are hard to distinguish precisely. (bottom-center, weak)
- gemini-3.1-pro-preview: The tools lying on the ground next to the workers (like the red and black object to the left) are blocky and lack defined mechanical components or functional handles. (bottom-right, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a solid 'Y' shape without any movable points (switch blades) or gaps for wheel flanges, representing a physical impossibility for a functional railway. (bottom-center, strong)

**background_clutter**: score 3, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The pile of cylindrical objects (like pipes or rolls) behind the fence lacks definition, appearing mushy and poorly grounded with inconsistent shading. (middle-left, weak)
- gemini-3.1-pro-preview: The chainlink fence running behind the tracks has uneven posts, and the wire mesh patterns dissolve and become incoherent in several places. (center, moderate)

## w-two-R-2.jpg: mean P(AI) 0.36 (fails)

- anthropic/claude-opus-5.5: 0.15 / 0.30 / 0.30
- openai/gpt-6-sol: 0.04 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.30 / 1.00

**track_geometry**: score 13, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: Left and right track pairs appear disconnected and inconsistent; the right track's left rail emerges from the middle of the left track's area without a proper switch/frog structure, and the tracks don't converge logically (center, moderate)
- claude-opus-5.5: The left and right tracks diverge oddly; the inner rails of the two branches meet near the bottom without a proper frog or switch structure, and the right track splits into two curving branches in an implausible way. (bottom-center, moderate)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks meet in a chaotic jumble of concrete sleepers, completely lacking any physical switch mechanism or logical track crossing. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the left and right tracks merge into a solid 'V' shape, lacking the necessary frog or gap for wheel flanges to pass through safely. (bottom-center, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the small objects beside the rail are hard to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small objects between them are difficult to distinguish, leaving their exact task unclear. (middle-right, weak)
- gemini-3.1-pro-preview: The row of cylindrical objects lying behind the fence are heavily distorted, seemingly melted together, and lack consistent three-dimensional shape. (center, strong)
- gemini-3.1-pro-preview: The row of cylindrical objects (like pipes) on the ground are irregularly shaped, squashed, and melted into one another. (center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead electrical wires form an illogical pattern, with lines crossing arbitrarily or appearing to terminate without proper support structures. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are faint, lack realistic tension or sag, and appear to dissolve or fail to connect logically to the catenary support structures. (top-center, moderate)

**people_anatomy**: score 3, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small items between them are indistinct, making their exact interaction hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of both workers and the tools they are supposedly holding are rendered as indistinct, merged dark blobs without clear shapes. (middle-right, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-right, whole-image

- gpt-6-sol: The workers’ faces and gear look softer than the nearby rails and sleepers. (middle-right, weak)
- gemini-3.1-pro-preview: The gravel ballast between the tracks lacks the crisp, granular detail of a real photograph, appearing instead as a slightly smudged, repetitive texture. (whole-image, weak)

## w-two-R-3.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.30
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 17, raised in 4/9 calls, at center, bottom-center, middle-left

- claude-opus-5.5: The two tracks diverge as separate lines rather than forming a coherent turnout. The left track's right rail and the right track's left rail run toward each other without a frog or a proper switch. (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet at a sharp point under the workers, but these inner rails do not continue towards the bottom of the frame. A train would have no inner rails to run on in the foreground, making this track layout physically impossible. (bottom-center, strong)
- gemini-3.1-pro-preview: At the point where the tracks merge, the concrete sleepers (ties) become a confused, disorganized jumble of blocks that do not properly span or support the rails, unlike the neatly arranged sleepers further up the tracks. (bottom-center, strong)
- gemini-3.1-pro-preview: At the point where the tracks diverge, the concrete sleepers (ties) are laid chaotically, overlapping at impossible angles rather than forming a coherent support structure for the rails. (bottom-center, strong)

**people_anatomy**: score 6, raised in 3/9 calls, at bottom-center

- gpt-6-sol: The workers’ hands and arms are difficult to distinguish where they meet over the switch. (bottom-center, weak)
- gemini-3.1-pro-preview: The hands of the worker on the left (in the white hard hat) lack definition and appear to melt into the rail they are working on, with no distinct tools visible. (bottom-center, moderate)
- gemini-3.1-pro-preview: The boot of the worker on the left appears to melt amorphously into the ground, and both workers' hands and tools blend indistinguishably into the rails they are supposed to be working on. (bottom-center, strong)

**switch_mechanism**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The workers' hands and the rail junction overlap, making the exact hardware difficult to distinguish. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks simply cross over each other as solid, unbroken lines. There is no frog, flangeway, or switch points, making it physically impossible for a train wheel to traverse the junction. (bottom-center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead wires do not form a logical catenary system and appear to connect arbitrarily to the flat, featureless facade of the building rather than proper tensioning anchors. (top-center, moderate)
- gemini-3.1-pro-preview: An overhead power line appears to terminate abruptly in mid-air near the top left corner, not connecting to any supporting pole or structure. (top-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical pipes or objects behind the chain-link fence lacks clear edges; the objects blend into one another and the surrounding dirt in an unnatural, 'melty' way typical of AI generation. (center, moderate)

## w-two-R-4.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.99

**track_geometry**: score 9, raised in 3/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: There is a nonsensical section of rails and ties between the two main diverging tracks that merges impossibly into the right track, failing to form a functional switch. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails between the two workers intersect without any mechanical switch or frog; the inner rail from the right track appears to simply phase directly through the inner rail of the left track. (center, strong)
- gemini-3.1-pro-preview: At the point where the tracks diverge, the wooden ties (sleepers) are placed separately for each track and angle away from one another, instead of using long, continuous switch ties that span beneath both tracks as required structurally. (bottom-center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at center

- gpt-6-sol: The workers’ hands and the equipment at the junction overlap, making the exact tool difficult to distinguish. (center, weak)
- gpt-6-sol: The workers’ hands and equipment at the joint are indistinct, making their exact task hard to verify. (center, weak)
- gemini-3.1-pro-preview: The dark equipment or tool bag situated between the two kneeling workers is an undefined blob that visually blends into their legs and the track. (center, moderate)
- gemini-3.1-pro-preview: The tools the workers appear to be using on the track are amorphous, dark shapes that lack recognizable mechanical features, handles, or clear interaction with the rail. (center, strong)

**background_clutter**: score 6, raised in 3/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The pile of cylindrical pipes or rolls near the fence in the background is deformed, with the individual objects appearing 'melted' together. (center, moderate)
- gemini-3.1-pro-preview: The chain-link fence behind the tracks in the background dissolves into an unstructured, blurry cross-hatch pattern rather than distinct wire links. (middle-left, moderate)
- gemini-3.1-pro-preview: The pile of pipes in the background near the fence has inconsistent cylindrical shapes, with some of the hollow ends merging into solid, flat masses. (center, moderate)

**people_anatomy**: score 6, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The hands of both workers are rendered as indistinct blobs, and the left worker's left hand seems to melt into the rail and an undefined tool. (center, strong)
- gemini-3.1-pro-preview: The workers' hands and arms blend indistinctly into the rails and surrounding objects, forming nonsensical blobs without clear fingers or structure. (center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires fade in and out of existence, with one very faint, disjointed wire drooping nonsensically down towards the right worker's head. (top-center, moderate)
- gemini-3.1-pro-preview: The thin overhead wires in the sky intersect at strange angles and some seem to terminate abruptly in mid-air rather than connecting to a physical support structure. (top-center, moderate)

## w-two-R-5.jpg: mean P(AI) 0.47 (fails)

- anthropic/claude-opus-5.5: 0.72 / 0.15 / 0.30
- openai/gpt-6-sol: 0.06 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 1.00

**track_geometry**: score 19, raised in 5/9 calls, at center, middle-right, bottom-center, middle-left

- claude-opus-5.5: The two tracks diverge but there is no switch mechanism, frog, or point blades connecting them; the left track's inner rail and right track's left rail simply run separately, and the converging geometry near the bottom-center is implausible (center, moderate)
- claude-opus-5.5: Right track rails merge oddly into the far track and the concrete pad without a clear turnout; sleeper spacing is uneven and some sleepers extend beyond the ballast (middle-right, moderate)
- claude-opus-5.5: Two separate tracks diverge oddly: left track curves left while right track has no proper switch/frog connecting them; inner rails of both tracks run parallel very close without a turnout mechanism, geometry is implausible (bottom-center, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge directly into a single solid piece of rail without any moving switch points or a crossing frog, which is physically impossible for a functional railway. (bottom-center, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at bottom-right

- gpt-6-sol: The seated workers’ hands and lower bodies are hard to distinguish at this resolution. (bottom-right, weak)
- gemini-3.1-pro-preview: The hands, tools, and lower legs of the workers are indistinct, rendering as dark, formless blobs that merge with the bags beside them and the gravel. (bottom-right, moderate)
- gemini-3.1-pro-preview: The lower half of the worker in the orange high-vis shirt blends ambiguously into the black tool bag and the ground, lacking clear anatomical structure for his legs. (bottom-right, moderate)
- gemini-3.1-pro-preview: The lower bodies of the two workers kneeling on the tracks lack definition and appear to melt amorphously into the ground and rails, with nearby tools looking like shapeless blobs. (bottom-right, strong)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at center, bottom-right

- gpt-6-sol: The workers' hands and nearby equipment are hard to distinguish from the ballast and rails. (center, weak)
- gpt-6-sol: Some objects around the workers' hands are hard to distinguish, though their small size and partial occlusion could explain this. (bottom-right, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects (pipes or rolls) lying on the ground near the fence is highly indistinct, with the shapes melting together and lacking sharp edges. (center, moderate)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-left

- claude-opus-5.5: Overhead catenary wires are sparse and disconnected from poles in places; cantilever arms do not clearly hold wires over tracks (top-left, weak)
- gemini-3.1-pro-preview: The thin overhead wire extending to the left from the structural pole abruptly terminates in mid-air. (top-left, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The turnout junction completely lacks essential functional components such as switch blades, tie bars, or a point machine to direct a train onto either track. (bottom-center, strong)

## w-two-R-6.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.98

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The track junction lacks movable switch points, check rails, or a proper frog; the inner rails simply merge into a solid V-shape that a train could not physically navigate, and the cross ties do not properly span the divergence. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails of both tracks are noticeably wavy with inconsistent thickness, and the inner rail of the left track appears to merge into the ground rather than maintaining a continuous solid line. (bottom-center, strong)

**tools_or_small_objects**: score 5, raised in 4/9 calls, at middle-right, center, bottom-right

- gpt-6-sol: The workers’ hands and equipment are indistinct, making their exact activity difficult to verify. (middle-right, weak)
- gpt-6-sol: The workers’ hands and nearby equipment are difficult to distinguish precisely. (center, weak)
- gpt-6-sol: The dark objects beside the workers' hands are indistinct, making their exact shapes hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The black tool bag sitting to the right of the worker on the right is a jumbled, shapeless mass of textures lacking any recognizable straps, buckles, or tools. (bottom-right, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left, middle-left

- gemini-3.1-pro-preview: The thin horizontal overhead wire in the upper left section abruptly fades out and disappears into the sky without connecting to any support structure. (top-left, strong)
- gemini-3.1-pro-preview: The base of the thick metal pole on the left side appears poorly defined and seems to melt into its concrete footing rather than being bolted or structurally attached. (middle-left, weak)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: Several of the concrete pipes or cylinders piled in the midground appear to melt and merge seamlessly into one another rather than being distinct stacked objects. (center, moderate)
- gemini-3.1-pro-preview: The stack of cylindrical pipes resting near the fence has a melted, repetitive appearance where individual pipes lack clear boundaries and structural integrity. (center, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The workers' legs and the tools/bags next to them are indistinct, smudged blobs that merge nonsensically with the steel rails and wooden ties they are supposedly kneeling on. (bottom-right, strong)

## w-two-R-7.jpg: mean P(AI) 0.21 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.07
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.25 / 0.25 / 0.99

**track_geometry**: score 6, raised in 1/9 calls, at bottom-center, middle-right

- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a solid, poorly defined V-shape rather than a functional mechanical switch frog. Additionally, the railroad ties beneath this intersection overlap and mash together nonsensically. (bottom-center, strong)
- gemini-3.1-pro-preview: The steel rails abruptly disappear or sink into the ground directly underneath where the workers are kneeling. (middle-right, strong)

**people_anatomy**: score 5, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers' hands and legs are hard to distinguish where they overlap the rails and equipment. (middle-right, weak)
- gpt-6-sol: The workers’ hands and nearby equipment are too indistinct to resolve clearly, leaving some shapes ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The lower bodies of both workers merge indistinctly with the ground and the rails. The worker in the yellow vest appears to have an unnatural, blob-like appendage extending backwards. (middle-right, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical objects (like pipes or concrete tubes) near the fence consists of squashed, uneven, and blobby shapes rather than rigid, uniform cylinders. (center, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: The horizontal overhead wire extending towards the left side lacks the complex supporting catenary structures, insulators, and tensioning typically found on electrified rail lines. (top-left, moderate)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and nearby small objects are hard to distinguish, leaving some local shapes ambiguous. (middle-right, weak)

## w-two-R-8.jpg: mean P(AI) 0.31 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.60 / 0.80
- openai/gpt-6-sol: 0.02 / 0.12 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.99

**track_geometry**: score 11, raised in 4/9 calls, at bottom-center, bottom-left

- claude-opus-5.5: The two tracks diverge from the camera position with no switch or frog connecting them; the inner rails simply split apart, which reads more like two separate tracks than a turnout, though plausible for a depot fan. (bottom-center, weak)
- claude-opus-5.5: The two branches diverge with no frog, switch blades, or connecting rails; left track curves away and right track starts abruptly, an implausible junction layout (bottom-center, moderate)
- claude-opus-5.5: The two tracks diverge with the inner rails of each branch converging near the bottom center without any frog, switch blades, or crossing; the left track's right rail and right track's left rail just meet, which is physically implausible for a real turnout. (bottom-center, strong)
- claude-opus-5.5: Sleepers on left track have irregular spacing and clip placement, with rail fastenings looking smeared and inconsistent. (bottom-left, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish and look slightly muddled. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects behind the fence are melded together and lack clear, individual shapes. (center, strong)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-right, top-left

- claude-opus-5.5: Overhead catenary wires and cantilevers are sparse and inconsistently connected to poles. (top-right, weak)
- gemini-3.1-pro-preview: The overhead wires attached to the leftmost pole abruptly fade out or disappear in mid-air. (top-left, moderate)

**people_anatomy**: score 3, raised in 3/9 calls, at bottom-right, middle-right

- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish cleanly. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and tools overlap and are difficult to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The hands and lower arms of the workers are indistinct, and they do not appear to be holding identifiable tools despite their working posture. (bottom-right, weak)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Smooth, slightly graded cinematic look with uniform softness typical of stock video frames or generated video (whole-image, weak)
- gpt-6-sol: The image has a soft, somewhat smeared appearance, especially in small background details. (whole-image, weak)

## x-group-R-1.jpg: mean P(AI) 0.40 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.85
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.98

**track_geometry**: score 18, raised in 4/9 calls, at center, bottom-center, middle-right

- claude-opus-5.5: The two track pairs diverge with no frog, switch blades, or crossing; the inner rails of each branch simply separate across a gravel wedge, which is not a plausible turnout layout. (center, strong)
- claude-opus-5.5: The left branch's right rail and the right branch's left rail run as independent embedded grooves that never connect to form a switch, as though two separate tracks were drawn side by side. (bottom-center, moderate)
- claude-opus-5.5: The two track pairs diverge with no switch, frog or connecting rails at the fork; the inner rails of each branch simply end in the gravel wedge, which is physically implausible for a real junction. (center, strong)
- claude-opus-5.5: The rail spacing and the curvature of the left branch look uneven. The left track's rails curve inconsistently toward the shed. (bottom-center, moderate)

**people_pose_or_placement**: score 9, raised in 4/9 calls, at middle-right, middle-left

- claude-opus-5.5: Three workers kneel in a tight cluster on the right track in matching hi-vis gear and helmets, with blurry, ill-defined hands and tools. (middle-right, moderate)
- claude-opus-5.5: Three kneeling workers form a staged cluster centered between the rails, posed symmetrically. Their hands and tools are indistinct. (middle-right, moderate)
- claude-opus-5.5: Three workers crouch in a staged cluster on the right track, while one worker on the left kneels between the rails. The scene feels arranged for a trolley-dilemma composition. (middle-right, moderate)
- gemini-3.1-pro-preview: The lower body of the worker crouching on the left track melts seamlessly into the dark shadows and grooves of the rail, lacking distinct boots or a realistic physical connection to the ground. (middle-left, strong)

**people_anatomy**: score 7, raised in 5/9 calls, at middle-right

- gpt-6-sol: The overlapping workers' hands and lower legs are difficult to distinguish at this resolution, so small generated-image errors cannot be ruled out there. (middle-right, weak)
- gpt-6-sol: The three crouching workers overlap, making some hands and legs hard to distinguish. (middle-right, weak)
- gpt-6-sol: The crouching workers' hands and legs are difficult to distinguish where they overlap. (middle-right, weak)
- claude-opus-5.5: The workers' limbs and tools are somewhat smeared and indistinct; the bag and hands blend together. (middle-right, weak)

**camera_or_windscreen**: score 4, raised in 3/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: Raindrop bokeh on the lens is spread across the upper frame and looks plausible, but similar rain effects are common in generated video stills. (top-center, weak)
- claude-opus-5.5: Raindrop blobs look pasted over the upper half of the frame, including the dark doorways, with uniform bokeh discs. (top-left, weak)
- gemini-3.1-pro-preview: The simulated water droplets scattered across the upper portion of the frame look uniform and artificially overlaid, lacking the varied refraction and depth typical of real water on a lens or window. (top-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The image has a smooth, slightly soft cinematic look with low fine-grain detail, typical of a video-generator frame. (whole-image, weak)
- gemini-3.1-pro-preview: The overall image exhibits a slightly smooth, painterly texture, particularly noticeable in the ground surfaces and building facades, which lacks authentic photographic grain. (whole-image, moderate)

## x-group-R-2.jpg: mean P(AI) 0.62 (fails)

- anthropic/claude-opus-5.5: 0.85 / 0.85 / 0.85
- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 19, raised in 4/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The kneeling workers' hands and feet are partly obscured and difficult to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The middle worker in the group of three has a severely malformed head and neck area, appearing as an indistinct blob of dark and yellow colors with no discernible human features or clear helmet shape. (middle-right, strong)
- gemini-3.1-pro-preview: The single worker kneeling on the left track has a strange, detached brown shape resembling an extra boot resting on the ground behind his legs. (middle-left, strong)
- gemini-3.1-pro-preview: The worker kneeling on the left track has a disconnected brown boot shape lying on the ground behind his actual legs. (middle-left, strong)

**track_geometry**: score 18, raised in 5/9 calls, at center, bottom-left, bottom-center, middle-right

- claude-opus-5.5: The two diverging track pairs do not form a coherent turnout; the inner rails of left and right tracks run parallel and never meet at a frog, and the left track's rails curve inconsistently. (center, moderate)
- claude-opus-5.5: The two track pairs diverge from a common point but have no switch blades, frog, or guard rails; the inner rails simply split apart at a gravel wedge, which is not how real turnouts are built. (center, strong)
- claude-opus-5.5: The left track's rails curve inconsistently. The outer rail sweeps far left toward the shed while the inner rail runs straight, so the gauge is not kept. (bottom-left, moderate)
- claude-opus-5.5: Two embedded grooved-rail tracks diverge from a gravel wedge without any visible switch blades, frog, or connecting geometry; the rails simply split apart in an implausible way. (center, strong)

**tools_or_small_objects**: score 10, raised in 7/9 calls, at middle-left, center, middle-right

- claude-opus-5.5: The left worker's hands and the tool on the rail are indistinct, and a smudgy object lies by his feet. (middle-left, weak)
- claude-opus-5.5: The kneeling worker on the left holds an indistinct object at the rail. Tools are blurry and do not resolve into real equipment. (middle-left, weak)
- claude-opus-5.5: The left worker's tools and the object beside his knee are vague blobs rather than identifiable implements. (middle-left, moderate)
- gpt-6-sol: The workers’ hands and the small objects around the rails are difficult to distinguish clearly. (center, weak)

**people_pose_or_placement**: score 6, raised in 3/9 calls, at middle-right, center

- claude-opus-5.5: The three workers on the right are tightly clustered, kneeling identically along a rail with vague hands and tools merging into the rail. (middle-right, moderate)
- claude-opus-5.5: Three workers are clustered tightly side by side, kneeling on a rail, with their hands merging into indistinct tools. The scene looks staged and the hand details are vague. (center, moderate)
- claude-opus-5.5: Three workers kneel tightly clustered on the right track, with blended limbs and indistinct tools. The hands of the middle worker merge with the rail area. (middle-right, moderate)

**background_clutter**: score 5, raised in 2/9 calls, at center, top-center

- gemini-3.1-pro-preview: The chain-link fence in the background lacks a consistent diamond pattern, degrading into random visual noise, and the traffic cones placed near it appear distorted and melted. (center, strong)
- gemini-3.1-pro-preview: The orange traffic cones near the fence merge incoherently with the wooden pallets directly behind them, lacking clear boundaries. (top-center, moderate)

## x-group-R-3.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.78 / 0.88 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.75 / 0.98

**track_geometry**: score 14, raised in 6/9 calls, at bottom-center, middle-right

- claude-opus-5.5: Embedded grooved rails curve and diverge, but the left track's rails and right track pair don't form a consistent switch/turnout; the right track appears to have widely spaced rails with workers kneeling between with odd gauge (bottom-center, moderate)
- claude-opus-5.5: Embedded grooved rails curve and diverge inconsistently; the right track's rails do not form a coherent gauge pair, with one rail running alone near center and another far right, and the junction lacks any switch mechanism. (bottom-center, strong)
- claude-opus-5.5: Rail pairs don't form consistent gauge; left track's rails diverge oddly and right track's left rail is a single grooved rail with no matching partner at consistent gauge, tracks don't connect logically into a switch (bottom-center, moderate)
- gemini-3.1-pro-preview: The track curving towards the right group of workers has 3 to 4 parallel grooves or lines, which does not match the structure of real train or tram rails. (bottom-center, strong)

**people_anatomy**: score 13, raised in 5/9 calls, at middle-right, center, bottom-right, middle-left

- gpt-6-sol: The three workers’ overlapping arms, hands, and tools are difficult to distinguish precisely. (middle-right, weak)
- claude-opus-5.5: The middle worker's legs and feet are vague, boots merging with a sack-like bag; hands are indistinct at the rail. (center, moderate)
- gemini-3.1-pro-preview: The hands of the rightmost worker in orange are indistinct, featureless blobs without defined fingers or recognizable tools. (bottom-right, strong)
- gemini-3.1-pro-preview: Worker legs appear to merge with the ground. (bottom-right, moderate)

**people_clothing_or_gear**: score 8, raised in 4/9 calls, at middle-right, bottom-center, center

- claude-opus-5.5: Reflective tape patterns on vests are irregular (X shape on center worker, uneven stripes), helmet/earmuff attachments smeared (middle-right, weak)
- gemini-3.1-pro-preview: The reflective 'X' pattern on the back of the middle worker's orange jacket is asymmetrical, and the intersecting lines do not connect logically. (middle-right, moderate)
- gemini-3.1-pro-preview: Tool bags look like shapeless blobs. (bottom-center, moderate)
- gemini-3.1-pro-preview: The footwear and tool bags beneath the middle orange worker are a jumbled, indistinct mass of shapes that do not resemble actual boots or equipment. (center, strong)

**background_clutter**: score 8, raised in 3/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The chain-link fence behind the tracks lacks a consistent grid structure, dissolving into irregular diagonal noise and smudged textures. (middle-left, strong)
- gemini-3.1-pro-preview: Pallets and cones are merged into one object. (center, moderate)
- gemini-3.1-pro-preview: Behind the chain-link fence, the stack of wooden pallets and the orange traffic cones are warped, fused together, and lack proper three-dimensional structure. (center, strong)

**camera_or_windscreen**: score 7, raised in 5/9 calls, at top-left, top-center, top-right

- claude-opus-5.5: Raindrop bokeh appears overlaid on the building openings, a stylized cinematic effect common in generated images (top-left, weak)
- claude-opus-5.5: Raindrops on the lens appear as uniform bokeh dots mainly over dark doorways, looking like an overlay effect. (top-left, weak)
- claude-opus-5.5: Rain droplets on lens uniformly scattered as soft dots over upper image, typical of generated 'rain' look (top-center, weak)
- gemini-3.1-pro-preview: The simulated raindrops on the lens are perfectly uniform, semi-transparent circles that look like flat digital overlays rather than real, naturally distorting water droplets. (top-right, moderate)

## x-group-R-4.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.75 / 0.72 / 0.65
- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.20

**track_geometry**: score 10, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: The tracks split into two branches with no visible switch blades, frog, or diverging point; the rails simply fork with a dirt wedge between them, which is not a functional turnout layout. (center, moderate)
- claude-opus-5.5: The left branch's inner rail and the right branch's inner rail run as separate parallel grooves in the foreground with no common track bed joining them, an odd and inconsistent geometry. (bottom-center, moderate)
- claude-opus-5.5: Track layout is odd: two separate pairs of grooved rails diverge, but the inner rails of each branch don't form a coherent switch/frog; the left pair and right pair appear as independent curving tracks meeting at nothing, and gauge varies along the curves (center, moderate)
- claude-opus-5.5: The two track pairs diverge and run toward the depot, but the left pair and the right pair look like separate tracks with no visible switch or frog joining them in the foreground. The inner rails also curve in an odd way. (center, moderate)

**tools_or_small_objects**: score 5, raised in 4/9 calls, at middle-left

- claude-opus-5.5: Worker on left track has hands merging with an undefined tool object; no clear equipment visible (middle-left, moderate)
- gpt-6-sol: The left worker's hands and their contact with the rail are too soft to make out clearly. (middle-left, weak)
- gpt-6-sol: The left worker’s hands and the object at the rail are indistinct, making the activity hard to verify. (middle-left, weak)
- gpt-6-sol: The left worker's hands and the small object at the rail are difficult to distinguish, a minor ambiguity that could resemble generated detail. (middle-left, weak)

**people_pose_or_placement**: score 3, raised in 3/9 calls, at middle-right

- claude-opus-5.5: Three workers kneel in a neat row along the right branch while one works alone on the left. The poses look staged, and their hands and tools are vague. (middle-right, weak)
- claude-opus-5.5: Three workers kneel in a tidy row along the right track, all in similar crouched poses with indistinct hands and tools (middle-right, weak)
- claude-opus-5.5: Three workers kneel in a neat row along the right track, and one kneels alone on the left. The staging is plausible, but their hands and tools are indistinct. (middle-right, weak)

**buildings**: score 2, raised in 2/9 calls, at top-left, top-center

- claude-opus-5.5: The shed interiors, chain-link fence, pallets, and traffic cones are plausible, but the fence posts and the interior detail are smeared and indistinct. (top-left, weak)
- claude-opus-5.5: Corrugated shed, chain-link fence, cones and pallets look plausible but fence posts and wall details are slightly soft and smeared (top-center, weak)

**reflections_or_wet_surfaces**: score 1, raised in 1/9 calls, at bottom-right

- claude-opus-5.5: The wet asphalt sheen and puddles look plausible, but the rail grooves blend into the pavement without crisp edges. (bottom-right, weak)

## x-group-R-5.jpg: mean P(AI) 0.50 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.80 / 0.85
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.99

**track_geometry**: score 12, raised in 5/9 calls, at center, bottom-center, bottom-left, middle-right

- claude-opus-5.5: The center rail appears as a single grooved rail running between two tracks without a clear pairing; the track gauge and rail pairs do not form consistent two-rail tracks, and the right-hand track's rails diverge oddly. (center, moderate)
- claude-opus-5.5: Rails are embedded grooved tram rails, but the left track's rails converge oddly and the right pair splits into two tracks without any visible switch blades or frog; the middle rail pair appears to merge with a gravel area rather than a proper turnout (bottom-center, moderate)
- claude-opus-5.5: The left track's right rail curves away and does not form a coherent turnout with the right branch; the center rail pair near the bottom merges oddly into a single grooved strip with no matching gauge partner, and the rails just end or fade into the asphalt. (center, strong)
- gemini-3.1-pro-preview: The rails curving away to the left appear more like flush, painted reflective strips or shallow grooves rather than having the distinct 3D profile of steel railway tracks. (bottom-left, moderate)

**people_anatomy**: score 10, raised in 3/9 calls, at center, middle-right, middle-left

- claude-opus-5.5: The three workers on the right are clustered tightly with merged legs and hands. Their tools are indistinct and none is clearly identifiable. (center, moderate)
- gemini-3.1-pro-preview: The worker in the orange jacket has hands that are rendered as amorphous blobs that merge directly into the track and whatever tool he might be holding. (center, strong)
- gemini-3.1-pro-preview: The worker on the far right has no distinct legs or boots; his lower body dissolves into a dark, shapeless blob on the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The hands and boots of the solo worker on the left track are rendered as formless, blurry blobs rather than distinct anatomical features or footwear. (middle-left, moderate)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at middle-left, center, bottom-left

- claude-opus-5.5: The lone worker kneels between the rails of the left track, apparently working on nothing specific; the object near his knee is an indistinct blob. (middle-left, weak)
- claude-opus-5.5: Three workers kneel tightly clustered on one rail, appearing to work on nothing specific; hands blend into the rail with no clear tools (center, moderate)
- claude-opus-5.5: The kneeling worker on the left sits beside the rail, not on it, and has an oddly shaped object at his feet. His legs and boots blend into a dark blob. (bottom-left, moderate)
- gemini-3.1-pro-preview: The lower legs and boots of the leftmost worker in the right-hand group dissolve into vague, muddy shapes that blend unnaturally with the wet ground. (center, strong)

**tools_or_small_objects**: score 6, raised in 5/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The workers’ hands and small objects at the right-hand rail are difficult to distinguish where they overlap. (center, weak)
- gpt-6-sol: The three workers' hands and equipment overlap, making the exact tool arrangement difficult to resolve. (center, weak)
- gpt-6-sol: The workers’ hands and equipment at the right-hand rail are difficult to distinguish and appear crowded together. (middle-right, weak)
- claude-opus-5.5: The tools held by the group of three are smeared and indistinct, with no recognizable tool shapes. (center, moderate)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: Where the track splits into two branches, the shiny rails simply bifurcate smoothly without any of the necessary mechanical components of a real railway switch, such as switch blades, a frog, or check rails. (bottom-center, strong)
- gemini-3.1-pro-preview: The central rail splits into two branches forming a static Y-shape groove without any moving switch point (blade) to guide a train wheel, which is physically nonsensical and would cause a derailment. (bottom-center, strong)

## x-group-R-6.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers' hands and equipment overlap in a dark patch, making their exact grips hard to distinguish. (middle-right, weak)
- gpt-6-sol: The workers’ hands and equipment near the right rail are hard to distinguish, leaving their exact interaction unclear. (middle-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The three workers' hands and gear are hard to distinguish where they cluster around the rail. (middle-right, weak)

## x-group-R-7.jpg: mean P(AI) 0.33 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.95 / 0.95 / 0.75

**people_anatomy**: score 8, raised in 3/9 calls, at middle-right, bottom-right

- gemini-3.1-pro-preview: The hands of the workers, particularly the worker in the yellow and green jacket resting a hand on the rail, lack clear fingers or structure, fusing ambiguously with the metal and ground. (middle-right, strong)
- gemini-3.1-pro-preview: The lower bodies and legs of the three workers on the right blend into indistinct, formless blobs rather than having clear shapes of boots and trousers. (bottom-right, strong)
- gemini-3.1-pro-preview: Workers' legs merge into ambiguous blobs. (bottom-right, moderate)

**track_geometry**: score 8, raised in 3/9 calls, at bottom-center, bottom-right, bottom-left

- gemini-3.1-pro-preview: Between the two sets of diverging tracks at the bottom of the frame, there is an extra, anomalous dark line resembling a rail groove that serves no mechanical purpose and fades out illogically. (bottom-center, strong)
- gemini-3.1-pro-preview: The track geometry under the group of three workers is nonsensical, featuring multiple, closely-spaced metal lines that do not form a functional, standard-gauge track pair. (bottom-right, strong)
- gemini-3.1-pro-preview: Left track shows three parallel rails. (bottom-left, moderate)

**people_clothing_or_gear**: score 5, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The gear, tool bags, or kneeling pads surrounding the legs of the three workers are shapeless, amorphous blobs that lack any structural details like seams or straps, appearing to melt directly into the wet ground. (middle-right, strong)
- gemini-3.1-pro-preview: The hard hat and ear protection on the rightmost worker in the grey/blue jacket appear fused together and structurally misshapen. (middle-right, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at top-center, center

- gemini-3.1-pro-preview: While the poles of the chain-link fence are straight, the wire mesh itself is depicted as incoherent, fuzzy visual noise rather than a defined geometric grid. (top-center, moderate)
- gemini-3.1-pro-preview: Fence mesh dissolves into noise. (center, moderate)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at bottom-right, middle-right

- gpt-6-sol: The three workers' overlapping knees and gear make their exact positions somewhat hard to separate. (bottom-right, weak)
- gemini-3.1-pro-preview: Worker hands overlap and fuse unnaturally. (middle-right, moderate)

## x-group-R-8.jpg: mean P(AI) 0.36 (fails)

- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.08
- openai/gpt-6-sol: 0.02 / 0.02 / 0.01
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.98

**people_anatomy**: score 14, raised in 3/9 calls, at middle-left, center, middle-right

- gemini-3.1-pro-preview: The left worker's right arm ends in an indistinct blur, and his legs and the tools beside him merge together into an unrecognizable mass. (middle-left, strong)
- gemini-3.1-pro-preview: The leftmost worker on the right track (in yellow) lacks distinguishable legs; his lower body appears to melt directly into the dark rail groove. (center, strong)
- gemini-3.1-pro-preview: The worker on the far right is missing a lower body entirely, with his torso appearing to rest directly on the ground surface. (middle-right, strong)
- gemini-3.1-pro-preview: The legs and boots of the worker in the yellow jacket (the closest one on the right track) merge ambiguously into a dark, undefined mass on the ground, lacking clear anatomical structure. (center, moderate)

**track_geometry**: score 12, raised in 2/9 calls, at bottom-center, bottom-right, middle-right

- gemini-3.1-pro-preview: The rails from the left and right tracks do not merge into a logical switch or junction; instead, the rail lines terminate abruptly or fade nonsensically into the concrete. (bottom-center, strong)
- gemini-3.1-pro-preview: The track curving towards the right door appears to have three distinct, parallel rail grooves, which is incorrect for standard railway tracks. (bottom-right, strong)
- gemini-3.1-pro-preview: The railway switch point where the tracks diverge lacks realistic moving mechanical parts, and the rails appear to simply melt or blend into the concrete rather than forming a functional junction. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the right-hand track breaks into multiple nonsensical parallel lines and then abruptly disappears into the concrete near the workers. (middle-right, strong)

**tools_or_small_objects**: score 10, raised in 4/9 calls, at center, middle-right

- gpt-6-sol: The kneeling workers' hands and nearby small tools are indistinct, making their exact shapes hard to verify. (center, weak)
- gpt-6-sol: The tools and hands near the rightmost workers are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The traffic cones near the pallets in the background are deformed; one is unnaturally thin and spiky, while another resembles a melted blob rather than a rigid cone. (center, strong)
- gemini-3.1-pro-preview: The tools scattered on the ground near the workers on the right track are shapeless and indistinct, appearing as random blobs of color (black and yellow) rather than recognizable equipment. (middle-right, strong)

**background_clutter**: score 6, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The wooden pallets stacked in the background are amorphous and lack distinct, individual boards. (center, moderate)
- gemini-3.1-pro-preview: The wire mesh of the chain-link fence in the background is structurally inconsistent, with the pattern breaking down into blurry noise in several areas instead of maintaining distinct links. (center, moderate)
- gemini-3.1-pro-preview: The orange traffic cones by the fence appear slightly squashed and misshapen, and the stack of wooden pallets lacks distinct structural lines. (center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at middle-right, whole-image

- gpt-6-sol: The workers' hands and nearby equipment are too small and soft to identify clearly; this leaves some details uncertain, though it is also consistent with the photograph's distance and rain. (middle-right, weak)
- gemini-3.1-pro-preview: Despite the apparent sharpness of the wet ground, small details throughout the image (tools, background objects, hands) possess a soft, painterly, and muddy quality characteristic of AI generation. (whole-image, strong)

## x-two-R-1.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.98

**tools_or_small_objects**: score 9, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: Hands, equipment, and rail edges near the workers overlap in a dark area that is difficult to resolve precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The tools or equipment the workers are presumably using appear as undefined, messy blobs rather than distinct objects. (middle-right, strong)
- gemini-3.1-pro-preview: The objects scattered on the ground around the workers' knees look like melted, indistinct shapes rather than recognizable tools or equipment. (bottom-right, moderate)
- gemini-3.1-pro-preview: The tools on the ground and the objects the workers are handling are indistinct, shapeless blobs that seem to merge into the ground and their hands. (middle-right, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and legs are hard to distinguish where they overlap the rails and equipment. (middle-right, weak)
- gpt-6-sol: The workers’ hands and lower legs are hard to distinguish where they overlap the rails. (middle-right, weak)
- gemini-3.1-pro-preview: The legs and arms of both kneeling workers are amorphous and melt indistinguishably into the dark shadows and the ground beneath them. (middle-right, strong)
- gemini-3.1-pro-preview: The lower bodies of both workers, particularly their legs and feet, are rendered as formless dark blobs that blend unnaturally into the wet ground and the steel rails. (bottom-right, strong)

**track_geometry**: score 7, raised in 3/9 calls, at middle-right, bottom-right, bottom-left

- gemini-3.1-pro-preview: The metal rails of the track become heavily distorted, changing width and losing their structural edges right where they pass under the workers. (middle-right, moderate)
- gemini-3.1-pro-preview: The left rail of the right-hand track appears to vanish or morph into the ground texture precisely where the worker in the orange vest is kneeling. (bottom-right, strong)
- gemini-3.1-pro-preview: The inner flangeway (groove) of the left track becomes inconsistently shallow and appears to fade out towards the bottom edge of the image. (bottom-left, moderate)

**background_clutter**: score 6, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: By the fence, the orange safety cones are misshapen, and one appears to melt directly into a structurally nonsensical wooden pallet. (middle-left, strong)
- gemini-3.1-pro-preview: Behind the chainlink fence, the orange traffic cones and wooden pallets are poorly defined, blending into each other without clear edges or bases. (center, strong)

**camera_or_windscreen**: score 6, raised in 3/9 calls, at top-center, whole-image

- gemini-3.1-pro-preview: The simulated water droplets across the top of the image are perfectly circular, flat overlays that fail to accurately refract the background scene behind them. (top-center, strong)
- gemini-3.1-pro-preview: The image features simulated water droplets on a lens or glass, a common stylistic choice in AI generation used to artificially enhance realism and mask rendering imperfections. (whole-image, moderate)
- gemini-3.1-pro-preview: The image features an overlay of blurry spots resembling raindrops on a lens or window, a common technique used by AI generators to add perceived realism and obscure fine details. (whole-image, weak)

## x-two-R-2.jpg: mean P(AI) 0.18 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.01
- anthropic/claude-opus-5.5: 0.62 / 0.75 / 0.12
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**track_geometry**: score 6, raised in 2/9 calls, at center, bottom-center

- claude-opus-5.5: The track layout is ambiguous: the left pair of rails curves toward the left shed, and the right pair runs straight to the right shed. The two pairs never connect through a switch or frog; they appear as separate tracks diverging, with no turnout mechanism visible. (center, moderate)
- claude-opus-5.5: The left track pair curves away toward the left shed while the right pair runs straight to the right shed, yet there is no switch, frog or diverging point visible. The two sets of tracks simply separate at the bottom with a concrete median between them, which is an odd layout. (center, moderate)
- claude-opus-5.5: The right track's rails and flangeway grooves are inconsistent: the left rail of the right track sits in a raised concrete strip, and the groove widths vary. (bottom-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at top-right, whole-image

- gpt-6-sol: Details inside the dark doorway are indistinct; that lack of definition could resemble generated-image softness, though the lighting and wet-window spots also explain it. (top-right, weak)
- claude-opus-5.5: The image has an overall smooth, slightly painterly cinematic look, with rail grooves that look somewhat uniform. (whole-image, weak)
- claude-opus-5.5: The wet asphalt has a smooth, slightly painterly look with uniform puddle stains. The image is soft overall, consistent with video-generation output. (whole-image, moderate)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The precise rail or tool contact near the workers' hands is hard to make out. (center, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers' hands and the hardware immediately around them are hard to distinguish, though they are small in the frame. (middle-right, weak)

**switch_mechanism**: score 1, raised in 1/9 calls, at center

- claude-opus-5.5: There are no switch points, frog, or guard rails where the branches split. The gravel wedge simply separates two independent embedded tracks, which is odd for a yard fan. (center, weak)

## x-two-R-3.jpg: mean P(AI) 0.19 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.20 / 0.25 / 0.12
- google/gemini-3.1-pro-preview: 0.98 / 0.05 / 0.02

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small object between them are hard to distinguish. (center, weak)
- gpt-6-sol: The objects beside the workers are indistinct enough that their exact shapes are hard to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The object resembling a tool bag next to the kneeling worker in orange is an amorphous, multi-colored blob without any structural details like straps, seams, or zippers. (center, strong)

**track_geometry**: score 7, raised in 3/9 calls, at center, bottom-center, middle-right

- claude-opus-5.5: The left track curves away into the left shed while the right track continues straight. Neither branch shows a switch or frog connecting them. The layout looks like two separate shed roads, yet it reads as an odd fork with an unpaved gravel wedge between them. (center, moderate)
- claude-opus-5.5: The two track pairs diverge abruptly; the right pair appears to start from nothing in the middle of the apron, and the inner rails do not connect through a proper switch or frog, so the geometry is physically odd. (bottom-center, moderate)
- gemini-3.1-pro-preview: The groove of the inner rail on the right track simply dissolves into flat concrete directly underneath and in front of the workers, lacking physical continuity. (middle-right, strong)

**background_clutter**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence in the background fails to maintain a consistent diamond pattern, turning into a chaotic, blurry mesh, and the top rail of the fence is visibly wavy. (center, strong)

**people_anatomy**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands of both workers and whatever tools they might be holding are fused together into indistinct, blurry dark masses on the rail. (middle-right, moderate)

**camera_or_windscreen**: score 1, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The prominent simulated water spots or lens dirt across the top of the frame is a common stylistic artifact added by AI models to create an artificial sense of realism and grit. (top-center, weak)

## x-two-R-4.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.06
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.95

**people_anatomy**: score 3, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and boots are hard to distinguish where they overlap the rails. (middle-right, weak)
- gemini-3.1-pro-preview: The right leg and boot of the kneeling worker in orange blend seamlessly into the track machinery and ground without clear physical boundaries. (middle-right, moderate)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands of both workers and the tools they are handling on the ground merge into an indistinct, muddy clump with the rail. (middle-right, strong)

**background_clutter**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The chain-link fence behind the orange cones has an irregular mesh that dissolves into a blur in several places, and the stacked pallets behind the cones lack defined wooden slats. (middle-left, strong)

**buildings**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The vertical corrugated metal texture on the building wall to the far right loses its strict vertical structure, turning into a smeared, chaotic pattern. (top-right, moderate)

**track_geometry**: score 2, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The flangeway groove on the inner rail of the left-hand track inconsistently fills with what looks like concrete in sections rather than maintaining a continuous depth. (bottom-left, moderate)

## x-two-R-5.jpg: mean P(AI) 0.42 (fails)

- openai/gpt-6-sol: 0.08 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.65 / 0.72 / 0.33
- google/gemini-3.1-pro-preview: 0.95 / 0.95 / 0.01

**track_geometry**: score 14, raised in 4/9 calls, at bottom-center, center, middle-right, middle-left

- claude-opus-5.5: The right track pair's rails converge oddly; the left rail of the right pair runs toward the workers while the right rail diverges, and the gauge looks inconsistent near the workers, with a crossing piece that doesn't connect logically. (bottom-center, moderate)
- claude-opus-5.5: The tracks of the right branch emerge from a gravel area without a clear switch mechanism linking them to the left branch, so the junction layout looks implausible. (center, moderate)
- claude-opus-5.5: Right track pair: left rail near bottom-center and right rail diverge oddly; the two workers kneel on a track whose gauge widens unnaturally toward the foreground, and rails merge into concrete without a coherent switch structure (bottom-center, moderate)
- gemini-3.1-pro-preview: The distance between the rails on the right track significantly narrows as it extends past the workers toward the building entrance, representing an impossible change in track gauge. (middle-right, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at center, bottom-center, bottom-right

- gpt-6-sol: The workers’ hands and the small objects between them are hard to distinguish, leaving some fine detail ambiguous. (center, weak)
- gpt-6-sol: The workers' hands and the object between them are hard to distinguish, though the area is also small and soft-focused. (center, weak)
- gemini-3.1-pro-preview: The green bag resting on the ground between the two workers is rendered as an amorphous blob without clear seams, straps, or functional structure. (bottom-center, moderate)
- gemini-3.1-pro-preview: The brown and green objects lying on the ground between the workers are amorphous blobs that lack the recognizable structure, straps, or zippers of actual tool bags. (bottom-right, strong)

**people_anatomy**: score 3, raised in 2/9 calls, at middle-right, bottom-center

- gpt-6-sol: The workers' hands and the exact point where their tools meet the rail are partly obscured and difficult to resolve. (middle-right, weak)
- gemini-3.1-pro-preview: The right hand of the worker in orange, which is resting on the track, appears as a featureless, fused blob without clear finger articulation. (bottom-center, moderate)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The overall image is slightly smooth and over-clean, with a cinematic grade typical of video-generation stills, and the wet asphalt textures are somewhat uniform. (whole-image, moderate)
- claude-opus-5.5: The overall softness and 720p frame look like a video still, which could also suit AI video output (whole-image, weak)

**background_clutter**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence behind the workers has a completely garbled wire mesh pattern that fails to form regular, consistent diamonds. (center, strong)

## x-two-R-6.jpg: mean P(AI) 0.15 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- openai/gpt-6-sol: 0.04 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.02

**tools_or_small_objects**: score 6, raised in 3/9 calls, at center, middle-right, middle-left, bottom-left

- gpt-6-sol: The workers’ hands and the small items beside the rail are difficult to distinguish; their shapes are somewhat muddled. (center, weak)
- gpt-6-sol: The object and hand positions between the workers are difficult to make out, leaving some local detail ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The orange traffic cones by the fence are misshapen; one looks like a very thin, distorted spike rather than a standard cone, and another is just a red blob. (middle-left, moderate)
- gemini-3.1-pro-preview: There is an unexplained dark, rectangular peg-like artifact sticking straight up out of the inner rail of the left track. (bottom-left, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The hands of both workers, as well as the tools they are supposed to be holding, are rendered as indistinct, blurry blobs that melt into each other and the ground. (center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The inner (left) rail of the right-hand track appears to vanish or turn into an undefined muddy texture right where the workers are kneeling. (center, strong)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The stack of wooden pallets in the background has irregular, melting slats that do not follow a logical physical structure. (middle-left, moderate)

**people_clothing_or_gear**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: A bright yellow loop near the left worker’s knee is difficult to trace to a specific piece of gear. (middle-right, weak)

## x-two-R-7.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.02

**people_anatomy**: score 6, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers' hands and nearby equipment are hard to distinguish, though rain and distance could explain this. (middle-right, weak)
- gemini-3.1-pro-preview: The worker in the orange high-visibility jacket lacks a distinct head or neck, appearing instead as a rounded, formless lump, and his lower body merges unnaturally into the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The extended left foot of the worker in the yellow jacket terminates in a dark, formless shape that blends entirely into the wet pavement without a distinct shoe outline. (middle-right, moderate)

**background_clutter**: score 5, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence in the background lacks actual interlocking links; instead, it is rendered as simple crosshatched lines that blur into a solid gray wash in several places. (center, strong)
- gemini-3.1-pro-preview: The stack of wooden pallets near the fence appears as a solid block with drawn-on horizontal lines, lacking the depth and empty gaps between individual boards. (center, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the objects beside them are difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The tools and objects resting on the tracks around the workers are chaotic, blob-like masses of black and gray that do not resemble recognizable equipment. (middle-right, strong)

**track_geometry**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The inner grooved rail of the right track has an inconsistent width, and the groove itself seems to vanish and reappear unnaturally beneath the workers. (middle-right, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and nearby equipment are difficult to distinguish at this resolution, limiting confidence in their fine details. (middle-right, weak)

## x-two-R-8.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.99

**tools_or_small_objects**: score 6, raised in 4/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers' hands and the equipment between them are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The objects or tools on the track between the two workers are a jumbled, unidentifiable mass of mechanical-looking textures with no coherent structure. (bottom-right, strong)

**people_anatomy**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The lower bodies and legs of both kneeling workers are formless, dark blobs that seem to melt into the wet ground and tracks rather than showing distinct human anatomy or clothing folds. (bottom-right, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: Where the tracks diverge in the foreground, there is no actual switch mechanism (like a frog or points); the grooves in the concrete simply branch out and blur together inconsistently. (bottom-center, strong)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The orange traffic cones by the fence are misshapen, with some lacking the distinct pointed cone shape and appearing more like irregular cylinders. (middle-left, moderate)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chainlink fence in the background has inconsistent mesh patterns and the posts do not clearly connect to the ground or the fencing material. (center, moderate)
