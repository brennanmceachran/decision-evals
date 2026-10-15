# Realism check: real-photos-pipe

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 72 | 12/18 |
| text_signage_or_markings | 50 | 11/18 |
| overhead_wires_or_poles | 36 | 6/18 |
| vehicles | 31 | 8/18 |
| texture_noise_or_sharpness | 17 | 9/18 |
| buildings | 13 | 5/18 |
| switch_mechanism | 10 | 3/18 |
| background_clutter | 8 | 5/18 |
| tools_or_small_objects | 7 | 2/18 |
| composition_or_staging | 4 | 3/18 |
| lighting_or_shadows | 2 | 1/18 |

## r01.jpg: mean P(AI) 0.13 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.01
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.01 / 0.95 / 0.01

**text_signage_or_markings**: score 3, raised in 3/9 calls, at middle-left

- gpt-6-sol: The destination display and some small tram markings are difficult to read. (middle-left, weak)
- gpt-6-sol: The tram's small destination display is hard to read, though larger lettering such as “BUDA PEST” is legible. (middle-left, weak)
- gemini-3.1-pro-preview: The logo placed between the words 'BUDA' and 'PEST' on the side of the first tram is a garbled, asymmetrical shape rather than a distinct, recognizable transit logo. (middle-left, weak)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-center

- gpt-6-sol: A dense network of wires and pantographs spans the junction; some crossings are difficult to trace individually. (top-center, weak)
- gemini-3.1-pro-preview: The catenary wires in the sky cross and intersect randomly without physical connectors or insulators, and some lines appear to fade into nothingness. (top-center, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The tram tracks crossing over each other in the center right lack proper switch mechanisms or frogs; the steel rails simply melt into one another or terminate abruptly. (center, strong)

**vehicles**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The articulation joints and gaps between the trailing tram cars become progressively less defined and physically illogical, melting together into a solid block of color. (middle-right, moderate)

**buildings**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The metal fencing along the right side of the tracks shows vertical posts seamlessly blending into the horizontal rails in an irregular, non-manufactured way. (middle-right, moderate)

## r02.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**track_geometry**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: Sections of rail appear propped up on scattered bricks rather than conventional sleepers; unusual at first glance, though consistent with track construction. (center, weak)
- gpt-6-sol: Sections of rail appear raised on bricks and intermittent supports, an unusual-looking arrangement that could raise suspicion, though it is plausible during construction. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: Fine details around the distant equipment and buildings are difficult to resolve and look somewhat harshly sharpened. (top-right, weak)

## r03.jpg: mean P(AI) 0.13 (passes)

- anthropic/claude-opus-5.5: 0.04 / 0.03 / 0.04
- openai/gpt-6-sol: 0.01 / 0.02 / 0.01
- google/gemini-3.1-pro-preview: 0.98 / 0.02 / 0.00

**text_signage_or_markings**: score 5, raised in 4/9 calls, at middle-left, middle-right, top-left

- gpt-6-sol: Some small lettering on the tram fronts is blurred or difficult to read. (middle-left, weak)
- gpt-6-sol: Some distant destination displays are difficult to read, which could resemble generated text but is also expected at this resolution. (middle-right, weak)
- gpt-6-sol: The red destination text on the leftmost tram is difficult to make out. (top-left, weak)
- gemini-3.1-pro-preview: A sticker on the front of the grey tram reads 'DRINK N DRIVE!', which is a highly illogical public message, indicative of an AI hallucinating text based on common phrases. (middle-left, moderate)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead catenary wires are chaotic, with many intersecting illogically, forming loops, or ending abruptly in mid-air. (top-center, strong)

**vehicles**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The mechanical coupling mechanism on the front of the grey tram is rendered as an indistinct, melted blob of metal rather than recognizable, functional parts. (middle-left, strong)

**track_geometry**: score 2, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The tram tracks curving to the right lack proper depth and structure, appearing more like dark lines drawn flat onto the ground texture rather than physical grooved rails. (bottom-right, moderate)

## r04.jpg: mean P(AI) 0.14 (passes)

- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.05
- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.01 / 0.05

**overhead_wires_or_poles**: score 5, raised in 1/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: A wire extends straight up from the pantograph of the central tram and continues off the top edge of the frame without connecting to any cross-wires or support structures, which is physically impossible for a catenary system. (top-center, strong)
- gemini-3.1-pro-preview: The wires originating from the high-voltage transmission tower are wispy, broken, and do not connect logically to other towers or structures. (top-left, moderate)

**vehicles**: score 4, raised in 1/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The central tram lacks any discernible wheels, bogies, or undercarriage structure; its lower section is just a flat, dark grey area hovering over the pavement. (center, moderate)
- gemini-3.1-pro-preview: The long row of parked trams in the background shows signs of structural merging, with uneven window frames and indistinct body panels that blend into one another. (middle-left, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The tram tracks curving into the foreground appear as flat, rusty stains painted onto the concrete rather than metallic rails with grooves. Additionally, the left rail of the central track abruptly fades away into the pavement. (bottom-center, strong)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- gpt-6-sol: The many similar yellow trams and nearly centered front-facing tram give the scene an unusually orderly appearance. (whole-image, weak)
- gpt-6-sol: Several similar yellow trams are spread across an unusually open, orderly yard. (whole-image, weak)

**text_signage_or_markings**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The small destination display and markings are hard to resolve and look somewhat muddled, though the image resolution could explain this. (middle-right, weak)

## r05.jpg: mean P(AI) 0.03 (passes)

- anthropic/claude-opus-5.5: 0.05 / 0.04 / 0.05
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.02

**background_clutter**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The distant trams and objects are indistinct, making their small details hard to verify. (center, weak)
- gpt-6-sol: The distant yellow trams are difficult to distinguish individually; distance could explain the loss of detail. (center, weak)

**vehicles**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The distant trams are compressed together and difficult to distinguish individually, a minor possible AI-like ambiguity. (middle-right, weak)

## r06.jpg: mean P(AI) 0.24 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.00

**vehicles**: score 14, raised in 2/9 calls, at center, middle-left, middle-right

- gemini-3.1-pro-preview: The pantographs on the roofs of the trams in the middle distance do not connect to a distinct overhead wire, but instead touch a nonsensical tangle of floating lines. (center, strong)
- gemini-3.1-pro-preview: The tram on the left side of the image is unnaturally long, appearing to be composed of at least eight repeating articulated sections with poorly defined, blurry joints. (middle-left, strong)
- gemini-3.1-pro-preview: The white van parked on the far right edge is severely distorted, with its shape seemingly melting into the building behind it. (middle-right, strong)
- gemini-3.1-pro-preview: The tram on the left consists of an impossible number of articulated sections (around 10-11), which is a common AI artifact where a pattern is incorrectly repeated. (middle-left, strong)

**text_signage_or_markings**: score 6, raised in 4/9 calls, at middle-right, center

- gpt-6-sol: Some small lettering on the tram sides is difficult to make out, a weak possible AI clue, though distance and image resolution could explain it. (middle-right, weak)
- gpt-6-sol: Some small lettering on the trams is difficult to make out, though its size and distance could explain that. (middle-right, weak)
- gemini-3.1-pro-preview: The large text on the side of the yellow tram on the right appears to read 'EN DURCH BERLIN' which is incorrect/nonsensical, and the smaller text blocks are illegible gibberish. (middle-right, moderate)
- gemini-3.1-pro-preview: While some text on the right tram is semi-legible ('EN DURCH BERLIN'), the text preceding it and the small text on the front of the center tram are typical AI-generated gibberish. (center, moderate)

**overhead_wires_or_poles**: score 6, raised in 2/9 calls, at whole-image, top-center

- gemini-3.1-pro-preview: The network of overhead wires is highly chaotic, with lines crossing randomly, branching inexplicably, or stopping in mid-air, which does not form a functional catenary system. (whole-image, strong)
- gemini-3.1-pro-preview: The pantograph on the central tram is raised, but the overhead contact wire it should be touching is either missing or abruptly ends, and the surrounding wire geometry is nonsensical. (top-center, strong)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: Some of the tram tracks embedded in the foreground concrete appear to fade out, merge, or lose their grooved definition unnaturally. (bottom-center, moderate)
- gemini-3.1-pro-preview: The tram rails embedded in the concrete/asphalt appear to fade out or lose their groove structure inconsistently, lacking the sharp definition of real rails. (bottom-center, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The distant trams overlap and their small details are difficult to distinguish, a weak possible AI cue that could also result from distance and resolution. (middle-left, weak)

## r07.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.04
- google/gemini-3.1-pro-preview: 1.00 / 0.02 / 0.98

**track_geometry**: score 12, raised in 5/9 calls, at top-center, middle-right

- gpt-6-sol: The distant cluster of crossing rails is difficult to distinguish individually and looks somewhat tangled. (top-center, weak)
- gpt-6-sol: The distant cluster of switch rails is difficult to trace individually and looks somewhat tangled. (top-center, weak)
- gpt-6-sol: The distant crossings are crowded enough that individual rails are difficult to trace. (top-center, weak)
- gemini-3.1-pro-preview: The rails are wavy, not strictly parallel, and seem to arbitrarily sink into or appear out of the dirt, with sleepers (ties) missing in many sections. (middle-right, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: There is a mangled, indistinct metallic-looking object resting on the ground near the distant tracks that lacks any coherent or recognizable structure. (top-center, moderate)
- gemini-3.1-pro-preview: There is a small, dark object or pile situated on the dirt near the track junction that lacks coherent structure or identifiable parts, appearing as an ambiguous blob. (top-center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The track junction in the distance is a chaotic jumble of intersecting lines without logical pathing or necessary switch components like frogs and points. (top-center, strong)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at middle-left, bottom-left

- gemini-3.1-pro-preview: The vegetation growing on the retaining wall blends unnaturally into the rock surface, lacking clear, individual leaf or branch structures upon closer inspection. (middle-left, weak)
- gemini-3.1-pro-preview: The tire tracks in the graded dirt area have a smeared, slightly unnatural texture that looks painted rather than resembling actual displaced earth and gravel. (bottom-left, moderate)

**vehicles**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The red and white object parked next to the building lacks defined features such as wheels, windows, or a distinct geometric shape, appearing instead as a colored blob. (top-right, moderate)

## r08.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.06 / 0.07 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 20, raised in 5/9 calls, at top-right, bottom-left, bottom-right, top-center

- gpt-6-sol: The distant siding rails and junction are difficult to trace individually where they converge. (top-right, weak)
- gpt-6-sol: The distant sidings and junctions are crowded and hard to trace individually, leaving some uncertainty about their exact connections. (top-right, weak)
- gemini-3.1-pro-preview: The rails on the left track appear as flat, rusty lines rather than 3D steel beams, and the rightmost rail of this pair seems to fade or blend directly into the white sleepers without proper physical structure. (bottom-left, strong)
- gemini-3.1-pro-preview: The sleepers (ties) on the right track are exceptionally bright, uniformly rectangular, and appear to have thin brown lines drawn over them instead of supporting actual rails with mounting hardware. (bottom-right, strong)

**texture_noise_or_sharpness**: score 7, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The gravel ballast between the tracks has a very uniform, repetitive noise-like texture that lacks the natural variation in shape, size, and shading of real crushed stone. (center, strong)
- gemini-3.1-pro-preview: The ballast (gravel) covering the ground has a very uniform, repetitive noise texture that lacks the natural variation in stone size, shape, and color found in reality. (center, moderate)
- gemini-3.1-pro-preview: The track ballast (gravel) has an unnaturally uniform, repeating noise-like texture rather than looking like individual rocks of varying shades and depths. (center, moderate)

**switch_mechanism**: score 4, raised in 2/9 calls, at top-center

- gpt-6-sol: Some distant rail junctions are difficult to trace precisely, though their small size could explain this. (top-center, weak)
- gemini-3.1-pro-preview: Where the right track diverges in the distance, there is no physical switch mechanism visible; the rails simply blur and merge together in a structurally impossible way. (top-center, strong)

**tools_or_small_objects**: score 3, raised in 1/9 calls, at bottom-right

- gemini-3.1-pro-preview: The rails appear to rest directly on the white concrete sleepers without any visible fastening clips or hardware, which are essential and prominent in real railway construction. (bottom-right, strong)

**lighting_or_shadows**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: There are no contact shadows or ambient occlusion where the rusty rails meet the bright white sleepers, making the rails look like they are floating or painted on. (middle-left, moderate)

## r11.jpg: mean P(AI) 0.03 (passes)

- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- openai/gpt-6-sol: 0.02 / 0.04 / 0.01
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.01

**text_signage_or_markings**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: Some lettering on the weathered panel beside the yellow sign is indistinct, a weak possible AI cue but also consistent with wear and image resolution. (middle-right, weak)
- gpt-6-sol: The small print on the yellow sign is difficult to make out; this could resemble generated text, though it is also consistent with the image resolution. (middle-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at bottom-center

- gpt-6-sol: Some cobblestone detail looks soft and repetitive at this resolution, though that could result from image compression. (bottom-center, weak)

## r12.jpg: mean P(AI) 0.24 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.95

**overhead_wires_or_poles**: score 10, raised in 4/9 calls, at middle-right, center, bottom-center

- gpt-6-sol: Some overhead wires are difficult to make out despite the many poles, giving the infrastructure a slightly incomplete appearance. (middle-right, weak)
- gpt-6-sol: Some distant wires and pole connections are hard to trace, though their small size could explain this. (middle-right, weak)
- gemini-3.1-pro-preview: The complex network of overhead wires and support structures becomes a structurally illogical tangle, with wires floating or disconnecting improperly. (center, strong)
- gemini-3.1-pro-preview: The thick grey vertical mast in the foreground has an abruptly flat top, and its horizontal crossbeam merges unphysically into the adjacent pole. (bottom-center, moderate)

**text_signage_or_markings**: score 10, raised in 3/9 calls, at top-left, middle-left

- gpt-6-sol: Lettering on the distant red structures is difficult to make out; that ambiguity offers little basis for checking whether it is accurate. (top-left, weak)
- gemini-3.1-pro-preview: White logos and text on the red industrial buildings or vehicles are illegible, nonsensical squiggles typical of AI generation. (top-left, strong)
- gemini-3.1-pro-preview: Black markings painted on the curved concrete retaining wall resemble pseudo-text or gibberish rather than clear numbers or letters. (middle-left, strong)
- gemini-3.1-pro-preview: The white text on the sides of the red truck trailers in the background is garbled, consisting of illegible, nonsensical shapes instead of actual letters. (top-left, strong)

**track_geometry**: score 3, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: The rails at the switch junction appear to simply overlap or blend into each other, missing distinct mechanical components like frogs or check rails. (bottom-right, moderate)
- gemini-3.1-pro-preview: The rails at the track switch appear slightly fused together, lacking the crisp definition and specific mechanical components (like check rails) seen in reality. (bottom-right, weak)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The small structure or railing running along the top of the curved concrete retaining wall is malformed, appearing as a series of merged, indistinct blobs rather than a distinct fence. (middle-left, moderate)

## r14.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.08 / 0.06 / 0.04
- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.10

**track_geometry**: score 2, raised in 2/9 calls, at bottom-right, center

- gpt-6-sol: Several rails appear crowded together near the junction, making the exact routing hard to follow. (bottom-right, weak)
- gpt-6-sol: The overlapping rails at the switch are difficult to trace precisely in this view. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: Fine details are somewhat soft, especially around the gates and track junction, making their exact construction hard to check. (whole-image, weak)

## r15.jpg: mean P(AI) 0.25 (passes)

- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.04
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**overhead_wires_or_poles**: score 9, raised in 3/9 calls, at top-center, top-right

- gpt-6-sol: Some of the distant wire crossings are visually hard to trace, though the dense network could account for that. (top-center, weak)
- gemini-3.1-pro-preview: The catenary wires form a chaotic, nonsensical web, with many lines ending abruptly in mid-air or failing to connect logically to structural supports. (top-center, strong)
- gemini-3.1-pro-preview: The support structures for the overhead wires are overly complex and disorganized, with some metallic elements appearing to merge or intersect unnaturally. (top-right, moderate)
- gemini-3.1-pro-preview: Overhead wires intersect chaotically, form nonsensical angles, and some segments end abruptly in mid-air without connecting to any structure. (top-center, strong)

**track_geometry**: score 7, raised in 3/9 calls, at center

- gpt-6-sol: The cluster of crossing rails is visually busy and initially difficult to trace. (center, weak)
- gemini-3.1-pro-preview: The intersecting rails lack proper mechanical components like frogs or points, and the rails appear to simply melt into one another at irregular angles. (center, strong)
- gemini-3.1-pro-preview: The rails merge and disappear into the ballast in a wavy, unnatural manner rather than forming functional tracks. (center, strong)

**text_signage_or_markings**: score 7, raised in 2/9 calls, at middle-left, bottom-center

- gemini-3.1-pro-preview: The text written on the arm of the yellow excavator reads 'LONG TAYCH PE', which is garbled and nonsensical. (middle-left, strong)
- gemini-3.1-pro-preview: The yellow markings on the square metal ground plate are indistinct, meaningless squiggles rather than recognizable letters, numbers, or standard symbols. (bottom-center, moderate)
- gemini-3.1-pro-preview: The yellow markings on the metal cover in the foreground are blurry, undefined shapes rather than distinct numbers, letters, or symbols. (bottom-center, moderate)

**buildings**: score 4, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The horizontal siding lines on the white building are uneven and inconsistent, and smaller architectural details appear completely flat. (middle-right, moderate)
- gemini-3.1-pro-preview: The horizontal siding on the white building is wavy and inconsistent, and the dark green vertical poles appear to blend strangely into the building's facade. (middle-right, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The track switch consists of multiple overlapping rails that weave through each other without proper switch points or mechanical logic. (bottom-left, strong)

## r16.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**text_signage_or_markings**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: Two prominent red-bordered circular signs appear blank; their meaning is unclear from this view. (middle-right, weak)
- gpt-6-sol: Two circular roadside signs appear blank or indistinct from this viewpoint. (middle-right, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The distant cars and building details are hard to distinguish individually, which could conceal generated inconsistencies. (middle-right, weak)

## r18.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.05 / 0.06 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.01

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: Some distant apartment windows are indistinct and uneven-looking at this resolution. (top-center, weak)

**background_clutter**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: Some distant building and railway details look indistinct, which could conceal generated inconsistencies, though the distance and resolution also explain it. (top-center, weak)

**buildings**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The distant apartment windows and balconies appear repetitive and somewhat soft, though distance and image resolution could explain this. (top-center, weak)

## r20.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.05 / 0.04 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.01 / 0.02

**track_geometry**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The right-hand rails become faint and difficult to follow against the pavement; at first glance this could look inconsistent. (middle-right, weak)
- gpt-6-sol: The right-hand rails become faint and partly blend into the worn paving, which could initially look like an image-generation inconsistency. (middle-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: Some distant paving and rail edges are indistinct, though distance and image resolution could explain this. (top-center, weak)

## r21.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.03 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.05

**vehicles**: score 3, raised in 3/9 calls, at middle-right

- gpt-6-sol: Several trams have very similar rounded fronts, which could look repetitive, though that is expected in one fleet. (middle-right, weak)
- gpt-6-sol: Several trams have very similar rounded fronts, a repetition that could superficially resemble generated duplication but is expected in a fleet. (middle-right, weak)
- gpt-6-sol: Several trams have very similar shapes and livery; repetition can be an AI cue, though it is also expected in a tram fleet. (middle-right, weak)

**text_signage_or_markings**: score 1, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The red crossing markings on the leftmost tram appear slightly jagged, which might happen in AI, but could also be physical tape or paint applied unevenly. (middle-left, weak)

## r22.jpg: mean P(AI) 0.26 (passes)

- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**track_geometry**: score 12, raised in 2/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: The rails where the worker is standing merge, multiply into four or five parallel lines, and end abruptly in a nonsensical, non-functional way. (bottom-center, strong)
- gemini-3.1-pro-preview: The curved track in the foreground appears as a single groove or painted line in the asphalt, lacking the two distinct rails required for a tram or train. (bottom-center, strong)
- gemini-3.1-pro-preview: The tram tracks at the junction merge into solid, impossible blocks of metal without any functional switch points, flangeways, or structural logic. (center, strong)
- gemini-3.1-pro-preview: A solitary curved rail is embedded in the asphalt in the foreground, lacking a corresponding parallel rail to form a functional track gauge. (bottom-center, strong)

**text_signage_or_markings**: score 10, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The traffic signs on the pole feature unintelligible squiggles and gibberish symbols instead of standard road icons or legible text. (middle-right, strong)
- gemini-3.1-pro-preview: The yellow triangular sign contains a meaningless, abstract black shape rather than a recognizable warning symbol. (middle-left, strong)
- gemini-3.1-pro-preview: The white decorative markings on the red brick wall consist of irregular, meaningless dashes and dots resembling AI pseudo-text. (middle-right, moderate)
- gemini-3.1-pro-preview: The road sign attached to the pole contains illegible, gibberish text typical of AI generation. (middle-right, moderate)

**buildings**: score 4, raised in 4/9 calls, at top-center

- gpt-6-sol: The apartment facade has highly repetitive window and balcony patterns, which could superficially resemble generated repetition. (top-center, weak)
- gpt-6-sol: The facade has highly repetitive windows and balconies, a pattern that can also appear in generated images. (top-center, weak)
- gpt-6-sol: The windows and balconies repeat in a very regular pattern, which could superficially resemble generated repetition. (top-center, weak)
- gemini-3.1-pro-preview: Although appearing highly detailed at first glance, some of the balconies and window frames on the tall building blend together or lack coherent depth upon closer inspection. (top-center, weak)

## r23.jpg: mean P(AI) 0.02 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.00

**text_signage_or_markings**: score 3, raised in 3/9 calls, at top-center

- gpt-6-sol: The LED letters are difficult to read and their bright edges appear irregular. (top-center, weak)
- gpt-6-sol: The bright letters on the LED sign are difficult to read, which could initially look like malformed text. (top-center, weak)
- gpt-6-sol: The bright LED letters are hard to read and appear somewhat irregular, though overexposure could explain this. (top-center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Distant trackside details become indistinct, making some small shapes hard to verify. (center, weak)
