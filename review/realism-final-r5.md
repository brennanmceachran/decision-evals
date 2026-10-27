# Realism check: final-r5

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 121 | 16/20 |
| tools_or_small_objects | 119 | 19/20 |
| people_anatomy | 101 | 17/20 |
| background_clutter | 47 | 12/20 |
| overhead_wires_or_poles | 18 | 5/20 |
| buildings | 18 | 7/20 |
| texture_noise_or_sharpness | 17 | 11/20 |
| switch_mechanism | 16 | 4/20 |
| people_pose_or_placement | 16 | 6/20 |
| composition_or_staging | 13 | 8/20 |
| camera_or_windscreen | 7 | 5/20 |
| people_clothing_or_gear | 6 | 3/20 |
| text_signage_or_markings | 2 | 1/20 |
| vehicles | 2 | 1/20 |
| reflections_or_wet_surfaces | 2 | 2/20 |

## w-two-R-1.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.15 / 0.12
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.99

**tools_or_small_objects**: score 9, raised in 5/9 calls, at middle-right, center

- gpt-6-sol: The workers' hands and the equipment between them are difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The equipment between the workers is dark and difficult to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The equipment between the workers is hard to distinguish and has an irregular outline; it could be a generation artifact, though occlusion and image softness also explain it. (middle-right, weak)
- gemini-3.1-pro-preview: The cluster of objects between the two workers is a nonsensical, melted blob of brown and dark textures with no discernible individual tools or bags. (middle-right, strong)

**people_anatomy**: score 6, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The worker in the yellow jacket has a left hand that is completely formless, appearing as a dark, unarticulated stump resting on the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The area between the two workers where their hands and tools should be is a jumbled, indistinct blob of colors and shapes rather than defined objects. (middle-right, strong)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-right, middle-right

- gemini-3.1-pro-preview: The inner steel rail of the right-hand track seems to lose its raised, three-dimensional profile and flatten out unnaturally into the pavement right beside the kneeling workers. (bottom-right, moderate)
- gemini-3.1-pro-preview: The inner rail of the right-hand track appears to melt into the concrete ground just before reaching the worker in the yellow jacket. (middle-right, strong)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, center

- gpt-6-sol: The cluster of pipes near the building has indistinct edges and overlapping shapes. (top-center, weak)
- gemini-3.1-pro-preview: The wire mesh fence behind the stacked pipes has an inconsistent pattern, with sections where the crosshatching dissolves and disappears entirely. (center, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: A thin wire attached to the top of the leftmost pole extends a short distance to the right and then vanishes abruptly in mid-air. (top-left, moderate)

## w-two-R-2.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.05 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 12, raised in 3/9 calls, at bottom-center, middle-left, bottom-left, center

- gemini-3.1-pro-preview: The left steel rail of the right-hand track appears to lose its three-dimensional profile, flattening out and merging nonsensically into the left worker's knee and clothing. (bottom-center, strong)
- gemini-3.1-pro-preview: The wooden ties (sleepers) only appear on the left half of the track gauge and do not extend across to the right rail. (middle-left, strong)
- gemini-3.1-pro-preview: The section of track embedded in the pavement lacks the necessary flangeway grooves for train wheels, appearing simply as flat, flush lines on the surface. (bottom-left, strong)
- gemini-3.1-pro-preview: The left rail of the right-hand track appears to abruptly disappear beneath the kneeling worker and does not continue logically or clearly through the paved area. (center, strong)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at bottom-right

- gpt-6-sol: The tools and workers' hands overlap in a way that is difficult to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The workers' hands and the tools between them are difficult to distinguish precisely. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and nearby tools are hard to distinguish at this resolution, leaving some small-object detail ambiguous. (bottom-right, weak)
- gemini-3.1-pro-preview: The objects scattered on the ground between the two workers, meant to be tools, are unrecognizable, melded metallic blobs. (bottom-right, strong)

**people_anatomy**: score 9, raised in 3/9 calls, at bottom-right

- gemini-3.1-pro-preview: The right worker's right foot/boot is severely malformed, appearing as an indistinct, lumpy mass rather than structured footwear. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower bodies of the kneeling workers merge strangely with the ground and rails, lacking distinct boots or legs. (bottom-right, strong)
- gemini-3.1-pro-preview: The lower legs and boots of the kneeling workers are misshapen and indistinct, appearing to melt into the pavement and surrounding equipment rather than having clear, solid forms. (bottom-right, strong)

**background_clutter**: score 6, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects (likely pipes) in the background has inconsistent structures, with some appearing hollow and others looking oddly solid or misshapen at the ends. (center, moderate)
- gemini-3.1-pro-preview: The pile of pipes in the distance is rendered as a messy, fused cluster of circular textures rather than distinct cylindrical objects. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects in the background (which resemble concrete pipes) features dark openings that are irregularly shaped and non-circular. (center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Where the tracks converge, they simply disappear into solid pavement with no visible switch mechanisms or flangeways for wheels to cross. (center, strong)

## w-two-R-3.jpg: mean P(AI) 0.39 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.15 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 14, raised in 3/9 calls, at center, middle-right

- gemini-3.1-pro-preview: The worker in the orange jacket appears to have three distinct boots or leg-like appendages extending behind him. (center, strong)
- gemini-3.1-pro-preview: The lower half of the worker in the yellow jacket is malformed, with legs melting into the ground and lacking defined boots. (center, strong)
- gemini-3.1-pro-preview: The worker on the left (in the yellow shirt) is missing distinct lower legs and feet; his lower half blends amorphously into the ground. (center, strong)
- gemini-3.1-pro-preview: The lower half of the worker in the orange high-visibility vest is anatomically nonsensical, with legs blending into the ground and only a single, oddly placed boot visible. (middle-right, strong)

**track_geometry**: score 12, raised in 3/9 calls, at middle-left, middle-right, bottom-center

- gemini-3.1-pro-preview: The wooden sleepers (ties) on the left track lose their shape and blur into flat horizontal smudges as they approach the building. (middle-left, strong)
- gemini-3.1-pro-preview: The inner rail of the right-hand track disappears entirely underneath the workers and does not continue towards the building in the background. (middle-right, strong)
- gemini-3.1-pro-preview: Where the left track transitions from concrete to ballast, the railway sleepers (cross-ties) are misaligned, blurry, and do not logically connect the two rails. (middle-left, strong)
- gemini-3.1-pro-preview: The railway tracks embedded in the paved surface lack continuous flangeways (grooves for wheel flanges), appearing instead as flat metal strips painted on the concrete in several areas. (bottom-center, strong)

**tools_or_small_objects**: score 9, raised in 5/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish, though the image resolution could explain this. (middle-right, weak)
- gpt-6-sol: The workers' hands and the object they are working on are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The bag lying on the ground to the right of the workers is an indistinct, shapeless blob lacking clear straps or realistic fabric structure. (center, moderate)
- gemini-3.1-pro-preview: The bag or piece of equipment resting on the ground to the right of the orange-shirted worker is a melted, undefined shape without clear structure. (middle-right, moderate)

**buildings**: score 4, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: The interior visible through the open doorway of the left building is a blurry, undefined dark area without coherent structural or mechanical details. (top-left, moderate)
- gemini-3.1-pro-preview: The vertical seams on the corrugated metal facade of the building on the left wobble and bend inconsistently. (top-left, moderate)

**background_clutter**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The stack of pipes or tubes in the background is rendered as a single solid blob with black holes painted on, rather than separate cylindrical objects with depth. (top-center, strong)

## w-two-R-4.jpg: mean P(AI) 0.38 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.02
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 1.00

**people_anatomy**: score 14, raised in 3/9 calls, at center, bottom-right, middle-right

- gemini-3.1-pro-preview: The hands of the worker in the orange jacket merge entirely into an indistinct, formless blob where they meet the rail. (center, strong)
- gemini-3.1-pro-preview: The legs of the worker in the yellow jacket are indistinct and appear to melt into the ground without clear anatomical structure. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the worker in the orange jacket lack definition and seem to blend directly into the tool or track he is working on. (center, moderate)
- gemini-3.1-pro-preview: The worker in the orange shirt has no definable legs; his lower body merges into a dark, formless blob on the ground. (center, strong)

**tools_or_small_objects**: score 10, raised in 6/9 calls, at center, middle-right, bottom-right

- gpt-6-sol: The orange-clad worker’s hands and the object at the rail are difficult to distinguish at this resolution. (center, weak)
- gpt-6-sol: The dark tool near the orange-clad worker’s hands is hard to distinguish from the rail. (center, weak)
- gpt-6-sol: The dark tool near the orange-clad worker's hands is difficult to distinguish from the rail. (center, weak)
- gemini-3.1-pro-preview: The bag or backpack on the ground beside the worker in yellow lacks defined features like straps or seams, appearing as a solid, textured mass. (middle-right, moderate)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: Thin lines in the sky meant to be overhead wires terminate abruptly in mid-air without attaching to any supporting structures. (top-left, strong)
- gemini-3.1-pro-preview: The overhead wires are fragmented, appear to float aimlessly against the sky, and do not connect logically to the support poles. (top-center, moderate)
- gemini-3.1-pro-preview: An overhead wire visible against the sky on the left side fades out and disappears into nothingness rather than connecting to a pole. (top-left, moderate)

**track_geometry**: score 7, raised in 3/9 calls, at middle-left

- gemini-3.1-pro-preview: On the left track, the transition from embedded rail to exposed rail on sleepers is poorly defined, and the sleepers do not appear physically attached to the rails. (middle-left, moderate)
- gemini-3.1-pro-preview: The rails of the track on the left become wavy and inconsistent in width as they transition toward the dark entrance of the building. (middle-left, moderate)
- gemini-3.1-pro-preview: The sleepers on the left track are irregularly shaped, unevenly spaced, and blend unnaturally into the surrounding gravel and concrete. (middle-left, strong)

**background_clutter**: score 7, raised in 3/9 calls, at top-center, center

- gemini-3.1-pro-preview: The stack of pipes in the distance is rendered as a fused mass with distorted, non-circular ends. (top-center, moderate)
- gemini-3.1-pro-preview: The stack of pipes or cylinders in the background has individual pieces that meld into one another, losing distinct edges. (center, strong)
- gemini-3.1-pro-preview: The pile of pipes stacked in the background consists of shapes that are melded together, lacking distinct, individual cylindrical outlines. (center, moderate)

## w-two-R-5.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.02

**track_geometry**: score 6, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The right rail of the left track severely misaligns at the transition from the embedded asphalt to the ballast, resulting in the ballasted track having a visibly narrower gauge. (middle-left, strong)
- gemini-3.1-pro-preview: On the ballasted section of the left track, the steel rails slice across the concrete sleepers at awkward, non-perpendicular angles without any visible plates or fasteners. (middle-left, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and equipment overlap in a dark, hard-to-parse cluster beside the rail. (middle-right, weak)
- gpt-6-sol: The small tools and hands where the workers meet the rail are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The tools and tool bags around the kneeling workers lack defined edges, merging into an amorphous, unrecognizable jumble of metal and leather. (middle-right, strong)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish at this resolution. (middle-right, weak)
- gemini-3.1-pro-preview: The lower body of the worker in the white hard hat is indistinct; his left boot appears as a melted black blob merged with the rail, and his right leg is missing. (middle-right, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stacked concrete pipes near the portable toilet have inconsistent features, with some ends appearing hollow while others are solid or melted together. (center, moderate)

## w-two-R-6.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- openai/gpt-6-sol: 0.06 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 12, raised in 2/9 calls, at middle-left, bottom-center, bottom-left, center

- gemini-3.1-pro-preview: The wooden sleepers (ties) on the curved section of the left track are irregularly spaced, not parallel, and do not appear to structurally support the rails. (middle-left, strong)
- gemini-3.1-pro-preview: The inner rail of the left track appears to abruptly fade out and disappear into the concrete pavement without a clear groove or structural continuation. (bottom-center, strong)
- gemini-3.1-pro-preview: The leftmost rail of the left track abruptly ends and fades into the solid asphalt/concrete surface near the bottom edge of the frame. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the right-hand track appears to run directly through the kneeling leg of the worker in the orange vest, lacking correct spatial depth. (center, strong)

**tools_or_small_objects**: score 10, raised in 6/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the small equipment between them are difficult to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The objects between the workers’ hands are difficult to distinguish, leaving the exact task unclear. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small objects between them are difficult to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The area where the workers are focusing their attention is an undefined, dark blob; there are no discernible tools or track components they are interacting with. (middle-right, strong)

**switch_mechanism**: score 9, raised in 3/9 calls, at center, bottom-center

- gemini-3.1-pro-preview: Where the two tracks diverge, there is no visible switch mechanism (points), and the rails just vaguely emerge from the pavement. (center, strong)
- gemini-3.1-pro-preview: Despite the large concrete pad suggesting a track junction or turnout, there are no switch points, frog components, or connecting rails visible between the two completely separate diverging tracks. (center, strong)
- gemini-3.1-pro-preview: Where the left and right tracks diverge, there is no physical switch mechanism or frog visible; the rails simply fade into or emerge from the solid concrete surface. (bottom-center, strong)

**people_anatomy**: score 6, raised in 2/9 calls, at center, middle-right

- gemini-3.1-pro-preview: The lower body of the worker in the orange vest is heavily distorted, seemingly merging into the pavement, with an inexplicable black shape resembling a disconnected shoe protruding near his left knee. (center, strong)
- gemini-3.1-pro-preview: The hands of the worker in the yellow shirt are poorly defined, blending into indistinct blobs rather than having clear, articulated fingers. (middle-right, strong)

**people_pose_or_placement**: score 5, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands of the worker in the yellow shirt blend indistinguishably into the ground and the object he is supposedly working on. (middle-right, moderate)
- gemini-3.1-pro-preview: The lower body and left arm of the worker in the orange shirt merge confusingly into a dark, undefined mass on the ground, making his posture physically nonsensical. (middle-right, strong)

## w-two-R-7.jpg: mean P(AI) 0.42 (fails)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.75 / 0.10
- google/gemini-3.1-pro-preview: 0.75 / 0.99 / 0.99

**track_geometry**: score 15, raised in 4/9 calls, at center, middle-left, middle-right

- claude-opus-5.5: Left track curves toward the left shed, but the right track's left rail sweeps leftward toward the left track area while its right rail runs straight to the right shed; the rails of the right pair do not stay parallel, so the gauge is inconsistent. (center, moderate)
- claude-opus-5.5: The left track's ballast section shows tightly packed sleepers that merge oddly into the concrete-embedded section. The rail ends are abrupt and there is no plausible turnout connection between the two tracks. (middle-left, moderate)
- gemini-3.1-pro-preview: Rails stop abruptly. No switch or frog. (center, moderate)
- gemini-3.1-pro-preview: The inner rails of both the left and right tracks fade completely into the concrete and do not connect logically to the ballasted track sections behind them. (center, strong)

**people_anatomy**: score 11, raised in 4/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish where their arms meet the rail. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the object between them are indistinct where they meet the rail. (middle-right, weak)
- gemini-3.1-pro-preview: The worker in the orange vest has a highly distorted, blurred head and his right arm appears fused into his leg and the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The worker in the yellow shirt has a highly distorted lower body, with legs that blur and merge into the surrounding ground and rails, making it look as if he has extra appendages. (center, strong)

**tools_or_small_objects**: score 7, raised in 4/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: Tool bag merges with pavement. (middle-right, moderate)
- gemini-3.1-pro-preview: The tool bags and items resting on the ground next to the workers are indistinct, formless blobs lacking structural details. (middle-right, moderate)
- gemini-3.1-pro-preview: The tool bags situated next to the workers are rendered as indistinct, melted-looking blobs with no discernible structure, pockets, or straps. (middle-right, moderate)

**background_clutter**: score 5, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The pile of pipes stacked in the background features irregular, non-circular openings that seem to melt into one another. (center, strong)
- gemini-3.1-pro-preview: The stack of pipes or cylinders resting in the gravel area in the background have irregular, misshapen forms with uneven, melted-looking ends. (center, moderate)

**overhead_wires_or_poles**: score 2, raised in 2/9 calls, at top-center

- claude-opus-5.5: Poles are present but the overhead wiring is sparse and incoherent for a tram depot. Pole bases sit oddly on the track and pavement. (top-center, weak)
- gemini-3.1-pro-preview: The faint lines indicating wires or cables in the sky above the buildings are disconnected, squiggly, and do not appear to span logically between structural points. (top-center, weak)

## w-two-R-8.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**tools_or_small_objects**: score 11, raised in 4/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the objects between them are difficult to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: The pile of pipes in the background consists of irregular, fused cylindrical shapes that lack the defined, uniform edges and hollows of real stacked pipes. (center, strong)
- gemini-3.1-pro-preview: The tool bag resting on the rail next to the yellow-jacket worker is an undefined, melted-looking blob lacking any clear structural features like pockets or straps. (middle-right, moderate)
- gemini-3.1-pro-preview: The dark object resting on the track between the two workers, which looks like a tool bag, is a nonsensical blob featuring random, meaningless circular indentations. (center, moderate)

**people_anatomy**: score 10, raised in 4/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and legs are partly obscured by their bodies and equipment, making their exact positions difficult to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The lower body and feet of the kneeling worker in the yellow jacket are a confusing jumble of unformed shapes, including what looks like an extra boot pointing in an unnatural direction. (middle-right, strong)
- gemini-3.1-pro-preview: The lower body and left leg of the worker in the yellow vest are indistinct and appear to melt or blur directly into the ground and surrounding shadow. (middle-right, strong)
- gemini-3.1-pro-preview: The legs and boots of both workers are severely malformed, appearing as melted, indistinct shapes that blend unnaturally into the ground and surrounding objects. (middle-right, strong)

**background_clutter**: score 7, raised in 3/9 calls, at center, top-center

- gemini-3.1-pro-preview: The chain-link fence behind the pile of pipes loses its geometric grid structure and seemingly dissolves into a blurry texture. (center, moderate)
- gemini-3.1-pro-preview: The pile of what appears to be pipes or tubes in the background is rendered as a messy, formless cluster of circular shapes rather than distinct cylindrical objects. (top-center, strong)
- gemini-3.1-pro-preview: The stack of cylindrical pipes or tubes in the background are melted together, lacking clear, individual defined edges. (center, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at middle-left, bottom-right

- gemini-3.1-pro-preview: The pavement texture appears to incorrectly bleed over the top edge of the inner rail on the left track. (middle-left, moderate)
- gemini-3.1-pro-preview: The steel rails in the foreground exhibit wobbly, uneven edges and inconsistent specular highlights along their length. (bottom-right, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-right, middle-left

- gemini-3.1-pro-preview: The grey pole located to the right of the center has a highly irregular, lumpy shape that inexplicably changes thickness. (top-right, strong)
- gemini-3.1-pro-preview: The metal pole on the far left abruptly disappears into the ground without any visible base plate, bolts, or foundation. (middle-left, weak)

## x-two-R-1.jpg: mean P(AI) 0.20 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.25 / 0.68 / 0.72
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**track_geometry**: score 8, raised in 2/9 calls, at center, bottom-center, bottom-right

- claude-opus-5.5: The left track curves away while the right pair runs straight toward the right shed door. Where the branches split there is no visible frog, switch blades or junction. The rails simply separate across the concrete without a plausible turnout. (center, moderate)
- claude-opus-5.5: The inner rail of the right track near the bottom has an odd doubled groove and a paved strip between the tracks. The gauge between rails looks inconsistent. (bottom-center, moderate)
- claude-opus-5.5: Left track pair curves toward left building door while right pair heads to right door, but the inner rail of left track and outer rail of right track merge oddly near the center without a proper switch/frog; track layout is inconsistent (center, moderate)
- claude-opus-5.5: Right track rails appear as wide grooved channels with inconsistent gauge; the right rail splits into a double line near the workers (bottom-right, moderate)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at middle-right, center

- gpt-6-sol: The workers' hands and the object at the rail are difficult to distinguish, leaving that interaction visually ambiguous. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish and appear somewhat blended. (middle-right, weak)
- claude-opus-5.5: Tool bag beside track is an indistinct mass of shapes without identifiable tools (center, weak)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: The image has a stock-footage-like staged look with a low-contrast, smooth rendering of the wet surfaces. (whole-image, weak)
- claude-opus-5.5: Stock-footage-like staged scene with very clean symmetrical composition of two doors and two tracks (whole-image, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish precisely. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: There is slight overall softness, like a frame from compressed video, which is also common in generated video stills. (whole-image, weak)

## x-two-R-10.jpg: mean P(AI) 0.30 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.15
- google/gemini-3.1-pro-preview: 0.30 / 0.99 / 0.99

**track_geometry**: score 9, raised in 2/9 calls, at middle-right, bottom-right, bottom-left

- gemini-3.1-pro-preview: The flangeway groove of the left rail on the right track completely disappears into a flat, textured gray surface just before it reaches the kneeling worker in yellow. (middle-right, strong)
- gemini-3.1-pro-preview: The inner rail of the right track breaks into multiple wobbly, inconsistent lines near where the workers are kneeling. (bottom-right, strong)
- gemini-3.1-pro-preview: The leftmost rail loses its three-dimensional structure and turns into a flat, inconsistent streak as it reaches the bottom edge of the frame. (bottom-left, strong)

**tools_or_small_objects**: score 8, raised in 4/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small object between them are difficult to distinguish, leaving some uncertainty about the interaction. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small object between them are difficult to distinguish, leaving their exact interaction with the rail ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The dark objects resting on the ground next to both workers are entirely formless, blurry blobs that lack any structural features of real tools, equipment, or bags. (middle-right, strong)
- gemini-3.1-pro-preview: There are unidentifiable, amorphous blob-like objects resting on the tracks directly next to the workers. (middle-right, strong)

**people_anatomy**: score 5, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the rail hardware they are handling are hard to distinguish precisely. (middle-right, weak)
- gemini-3.1-pro-preview: Worker limbs seem slightly indistinct. (middle-right, weak)
- gemini-3.1-pro-preview: The lower half of the worker in the yellow jacket is highly indistinct; the legs merge directly into the ground and the track without clear, anatomically correct shapes or footwear. (middle-right, strong)

**background_clutter**: score 5, raised in 3/9 calls, at top-left, center, middle-left

- gpt-6-sol: The dark warehouse interior contains indistinct shapes that cannot be readily identified. (top-left, weak)
- gemini-3.1-pro-preview: The orange traffic cones placed behind the chainlink fence are misshapen, and their white stripes are irregular and messy. (center, moderate)
- gemini-3.1-pro-preview: The orange traffic cones placed behind the chain-link fence are misshapen and asymmetrical. (middle-left, moderate)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The legs and lower bodies of the kneeling workers lack distinct definition and appear to melt or blend into the surrounding ground and track. (middle-right, strong)

## x-two-R-11.jpg: mean P(AI) 0.20 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.60 / 0.75 / 0.27
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**track_geometry**: score 7, raised in 2/9 calls, at center, bottom-right

- claude-opus-5.5: Two tracks diverge but the left branch's right rail and right branch's left rail don't connect into a coherent switch; the tracks appear as separate pairs that never physically merge in the foreground, an odd layout with grass wedge between (center, moderate)
- claude-opus-5.5: Right branch rails: the right rail has an unusual reddish wide groove and the rail spacing looks inconsistent with the left track's gauge (bottom-right, weak)
- claude-opus-5.5: The two track pairs diverge from a single point in a V shape, yet the inner rails don't connect logically; there's no switch or frog where the tracks split, and each branch looks like an independent pair that simply starts at the bottom edge. (center, moderate)
- claude-opus-5.5: On the right branch the rails are spaced inconsistently. The left rail is a doubled grooved channel while the right rail has a red-stained strip, so the gauge looks implausibly wide for a pair. (bottom-right, moderate)

**people_anatomy**: score 3, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers' hands and the point where they meet the track are hard to distinguish. (middle-right, weak)
- gpt-6-sol: The workers’ hands and knees are hard to distinguish where they overlap at the rail; this could conceal a generation error, though the distance and blur also explain it. (middle-right, weak)
- gpt-6-sol: The workers' hands and knees are difficult to distinguish where they meet the dark rail and pavement. (middle-right, weak)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Slightly smooth, video-like rendering with soft textures typical of generated video frames (whole-image, weak)
- claude-opus-5.5: Softness and compression resemble a video frame. The image is slightly smooth overall but has no obvious generative artifacts. (whole-image, weak)

**composition_or_staging**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The scene is symmetric and staged as a fork, with workers placed on one branch; this resembles a generated trolley-problem style scenario. (whole-image, moderate)

**people_pose_or_placement**: score 1, raised in 1/9 calls, at middle-right

- claude-opus-5.5: The two workers kneel side by side directly on the rail with the tool bag in front of them. Their poses are plausible, but the figures are somewhat smooth, with little detail in their hands. (middle-right, weak)

## x-two-R-12.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**tools_or_small_objects**: score 3, raised in 3/9 calls, at center

- gpt-6-sol: The workers’ hands and the object at the rail are hard to distinguish, leaving the precise task visually ambiguous. (center, weak)
- gpt-6-sol: The workers’ hands and the small object between them are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish and appear to run together. (center, weak)

## x-two-R-2.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.02

**tools_or_small_objects**: score 9, raised in 2/9 calls, at middle-right, center, bottom-left, bottom-right

- gpt-6-sol: The workers’ hands and the small parts at the rail are hard to distinguish, leaving their exact task visually unclear. (middle-right, weak)
- gemini-3.1-pro-preview: The wooden pallet visible behind the fence appears as a solid block with horizontal texture lines rather than having distinct, separated wooden slats. (center, strong)
- gemini-3.1-pro-preview: There is a random, disconnected short vertical stump or piece of metal protruding from the ground between the left track and the center area, serving no apparent purpose. (bottom-left, strong)
- gemini-3.1-pro-preview: The object resting on the ground to the right of the worker in the orange jacket is an amorphous, poorly defined lumpy mass instead of a recognizable tool bag or piece of equipment. (bottom-right, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands of both workers are rendered as indistinct, dark blobs that melt into the tools and the rail they are working on, lacking any articulated fingers or clear tool grip. (middle-right, strong)

**track_geometry**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The leftmost rail of the left track loses its defined shape and fades entirely into the asphalt ground before reaching the dark doorway of the building. (middle-left, strong)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small area where they meet the rail are blurry, making their exact interaction hard to resolve. (middle-right, weak)

**switch_mechanism**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The rails and workers' hands overlap in a small, hard-to-parse area, leaving the exact work difficult to identify. (middle-right, weak)

## x-two-R-3.jpg: mean P(AI) 0.08 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.22 / 0.20 / 0.12
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.02

**tools_or_small_objects**: score 3, raised in 3/9 calls, at center

- gpt-6-sol: The objects between the workers' hands are hard to identify precisely, though the distance and rain-obscured view could explain this. (center, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are difficult to distinguish, leaving some detail uncertain. (center, weak)
- gpt-6-sol: The object between the workers' hands is hard to distinguish, leaving some fine detail ambiguous. (center, weak)

**track_geometry**: score 2, raised in 1/9 calls, at center

- claude-opus-5.5: The left track's right rail and the right track's left rail run in parallel, but the gravel V between them shows no physical connection to the tracks entering the depot doors; the right track's left rail seems to end abruptly near the workers. (center, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at center, whole-image

- claude-opus-5.5: Very clean symmetric stock-like framing of the junction with workers neatly placed on the right branch (center, weak)
- claude-opus-5.5: The scene looks like a stock or corporate-video style frame, which is plausible either as a real shoot or as a generated image. (whole-image, weak)

## x-two-R-4.jpg: mean P(AI) 0.15 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.05

**tools_or_small_objects**: score 8, raised in 4/9 calls, at center, middle-right

- gpt-6-sol: The workers’ hands and the dark objects around the rail are difficult to distinguish clearly. (center, weak)
- gpt-6-sol: The workers' hands and the small parts near the rail are hard to distinguish clearly. (center, weak)
- gpt-6-sol: The workers’ hands and the small objects at the rail are hard to distinguish; the image does not resolve their exact shapes. (center, weak)
- gemini-3.1-pro-preview: The object or tool the two workers are supposedly handling is completely indistinct, forming a shapeless dark mass instead of recognizable mechanical parts. (middle-right, strong)

**people_anatomy**: score 5, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The knee and leg of the person wearing the yellow jacket appear to melt directly into the groove of the tram rail, rather than compressing and resting realistically on top of the surface. (middle-right, strong)
- gemini-3.1-pro-preview: The visible boot of the person in the orange suit is entirely malformed, looking like a smooth, shapeless brown lump extending from the leg. (middle-right, moderate)

**buildings**: score 4, raised in 1/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The chain-link fence in the background is poorly rendered; several vertical posts disappear into the corrugated wall behind them, and the top horizontal rails are discontinuous. (center, moderate)
- gemini-3.1-pro-preview: Inside the left building entrance, the light sources are rendered as floating, glowing blobs without any defined fixtures or structural attachment to the ceiling. (middle-left, moderate)

**camera_or_windscreen**: score 2, raised in 1/9 calls, at whole-image

- gemini-3.1-pro-preview: There is a very uniform, artificial-looking water droplet or 'dirty window' effect across the upper portion of the image, often used by AI to simulate realism or hide imperfections. (whole-image, moderate)

## x-two-R-5.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.06 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.35 / 0.75 / 0.35
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.98

**track_geometry**: score 10, raised in 4/9 calls, at center, bottom-center, top-right

- claude-opus-5.5: The track layout is odd: two separate tracks diverge from the foreground, with the left track curving to the left building and the right track splitting toward the right building. The paths look plausible, but the rails in the middle merge awkwardly with no visible switch or frog. (center, moderate)
- claude-opus-5.5: The two track pairs diverge from the foreground in an odd way. The left pair curves left, while the right pair runs separately and does not form a coherent switch or frog. The rails look embedded but do not connect logically. (center, moderate)
- claude-opus-5.5: The rails near the camera have an odd doubled groove. Spacing between the left pair differs from the right pair, which is inconsistent gauge. (bottom-center, moderate)
- claude-opus-5.5: Track layout is odd: the left pair of rails curves left while the right pair curves right, with a large gravel/dirt wedge between them and no switch frog connecting the branches; rails appear as separate grooved pairs that don't share a common diverging point (center, moderate)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and nearby objects blend together at the rail junction, leaving some details visually ambiguous. (middle-right, weak)
- gpt-6-sol: The workers' hands and the object between them are difficult to distinguish, though distance and window blur could explain this. (middle-right, weak)
- gemini-3.1-pro-preview: The tools or objects the workers are supposed to be using on the track are completely undefined, appearing as formless dark blobs that merge directly into their hands and the ground. (middle-right, strong)

**background_clutter**: score 4, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The chain-link fence in the background is highly inconsistent, with the diamond mesh pattern dissolving into a solid grey smudge in several places. (center, moderate)
- gemini-3.1-pro-preview: Near the wooden pallets in the background, one of the orange traffic cones is oddly stretched, overly tall, and visually merges into the wooden slats of the pallet. (center, moderate)

**switch_mechanism**: score 3, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: The workers’ hands and the rail hardware between them are difficult to distinguish clearly. (middle-right, weak)
- claude-opus-5.5: There are no switch points or frogs where the tracks would need to diverge. The rails simply curve apart through the gravel area. (center, moderate)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Two workers in hi-vis gear kneel at the right track with coherent poses, helmets and reflective strips. Their hands and the tools in them are a bit vague. (middle-right, weak)
- claude-opus-5.5: Two workers kneel together on the right track in hi-vis gear. Their hands and tools are indistinct and merge into a blob at the rail. (middle-right, moderate)

## x-two-R-6.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.05

**tools_or_small_objects**: score 3, raised in 3/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers' hands and the object between them are hard to distinguish, leaving the exact task unclear. (middle-right, weak)
- gpt-6-sol: The workers’ hands and dark equipment at the rail are hard to distinguish and appear somewhat merged. (middle-right, weak)
- gemini-3.1-pro-preview: The hands of the workers and the tools they are using appear somewhat indistinct and blended into the rail, which can sometimes be an AI artifact (though likely due to dark gloves, low resolution, and image compression here). (bottom-right, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Stock-footage-like framing of workers at a junction, somewhat staged but typical of real stock video (whole-image, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small objects between them are indistinct, leaving some detail hard to verify. (middle-right, weak)

## x-two-R-7.jpg: mean P(AI) 0.18 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.15 / 0.10 / 0.27
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.02

**track_geometry**: score 6, raised in 2/9 calls, at center, middle-right, bottom-left

- claude-opus-5.5: The inner rails of the two branches do not visibly join in a switch. The gravel wedge between them looks somewhat unusual. (center, weak)
- gemini-3.1-pro-preview: The embedded rail the men are working on loses its defined flangeway groove and railhead structure right around where they are touching it, turning into a messy smudge. (middle-right, strong)
- gemini-3.1-pro-preview: The lines forming the left set of tracks in the foreground are inconsistent, with the grooves appearing to have wobbly, irregular widths rather than parallel lines. (bottom-left, moderate)

**tools_or_small_objects**: score 3, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the objects at the rail junction are hard to distinguish. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the nearby track hardware are hard to distinguish clearly. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the object at the rail are hard to distinguish, leaving a small area of visual ambiguity. (middle-right, weak)

**people_anatomy**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The worker in the yellow high-visibility jacket is missing his right leg; his left knee appears to melt directly into the ground, and his hands are an indistinct blur merging with the rail. (center, strong)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The hands and tools of the second worker (in the dark jacket) are completely fused with the rail they are working on, forming a nonsensical metallic mass. (center, strong)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The chain-link fence behind the traffic cones loses its distinct interlocking diamond pattern and breaks down into random, blurry cross-hatching. (middle-left, moderate)

## x-two-R-8.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and feet are hard to distinguish where they overlap the rails; this leaves some detail unverifiable, though the distance and image softness could explain it. (middle-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the nearby dark equipment are difficult to distinguish; this is a weak possible AI clue, though distance and rain could explain it. (middle-right, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the dark object beside the rail are difficult to distinguish precisely. (middle-right, weak)

## x-two-R-9.jpg: mean P(AI) 0.18 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.95 / 0.02 / 0.30

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at middle-right, center

- gpt-6-sol: The workers' hands and nearby rail details are too soft to inspect closely; that could conceal generated errors, though it also fits the image's overall softness. (middle-right, weak)
- gpt-6-sol: Some small trackside details look soft and indistinct, though rain and camera distance could explain this. (middle-right, weak)
- gpt-6-sol: The workers' knees and hands are somewhat indistinct where they meet the rails, making those small details hard to verify. (center, weak)

**people_anatomy**: score 3, raised in 2/9 calls, at center

- gpt-6-sol: The workers’ hands, knees and the dark objects around them are difficult to distinguish precisely. (center, weak)
- gemini-3.1-pro-preview: The lower left leg of the kneeling worker in the yellow jacket blends indistinctly into the rail and wet ground, lacking a clearly defined boot or realistic point of physical contact. (center, moderate)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The tools and objects the workers are allegedly using appear as amorphous dark blobs without any recognizable structure, handles, or mechanical parts. (center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The grooves in the tram rails, particularly on the inner rails in the foreground, inconsistently shallow out and merge completely flush with the surrounding wet pavement instead of maintaining a continuous channel. (bottom-center, strong)

**buildings**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: Visible through the open doorway of the left shed, the interior ceiling structure is chaotic and nonsensical, featuring rectangular lights that appear to be floating without logical support. (middle-left, moderate)
