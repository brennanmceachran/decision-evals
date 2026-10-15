# Realism check: real-photos-plain

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 36 | 7/18 |
| text_signage_or_markings | 23 | 10/18 |
| overhead_wires_or_poles | 16 | 6/18 |
| texture_noise_or_sharpness | 13 | 7/18 |
| switch_mechanism | 12 | 3/18 |
| vehicles | 11 | 5/18 |
| composition_or_staging | 10 | 6/18 |
| buildings | 7 | 3/18 |
| background_clutter | 6 | 4/18 |
| tools_or_small_objects | 4 | 1/18 |
| other | 3 | 2/18 |
| lighting_or_shadows | 2 | 2/18 |

## r01.jpg: mean P(AI) 0.02 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.03 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.01 / 0.01 / 0.05

**overhead_wires_or_poles**: score 2, raised in 2/9 calls, at top-center

- gpt-6-sol: The dense crossing wires look unusually chaotic at first glance, though their attachments to poles and pantographs remain plausible. (top-center, weak)
- gpt-6-sol: Several overhead wires cross in a dense, somewhat hard-to-follow pattern. (top-center, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Several yellow-and-white trams overlap at the junction, making their arrangement look unusually crowded at first glance. (middle-right, weak)

## r02.jpg: mean P(AI) 0.03 (passes)

- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.05
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, top-right

- gpt-6-sol: The contrast and edge sharpness are unusually pronounced, though this could be camera processing. (whole-image, weak)
- gpt-6-sol: Some distant equipment and street detail look blocky and hard to resolve, though that could be ordinary image compression. (top-right, weak)
- gpt-6-sol: The image has unusually crisp, high-contrast edges, which can also occur in processed photographs. (whole-image, weak)

## r03.jpg: mean P(AI) 0.02 (passes)

- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- openai/gpt-6-sol: 0.01 / 0.01 / 0.01
- google/gemini-3.1-pro-preview: 0.01 / 0.01 / 0.02

**text_signage_or_markings**: score 3, raised in 3/9 calls, at middle-right, center

- gpt-6-sol: Some distant tram destination displays are hard to read, though their small size readily explains this. (middle-right, weak)
- gpt-6-sol: The foreground tram’s destination display is faint and difficult to read. (center, weak)
- gpt-6-sol: The foreground tram’s destination display is hard to read, though windscreen reflections could explain it. (center, weak)

## r04.jpg: mean P(AI) 0.03 (passes)

- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.00 / 0.01 / 0.05

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- gpt-6-sol: The several yellow trams are arranged across an unusually open, nearly symmetrical yard view. (whole-image, weak)
- gpt-6-sol: A tram faces the camera near the center while another prominent tram occupies the right, giving the scene an unusually neat arrangement. (whole-image, weak)

**text_signage_or_markings**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The tram’s destination display is difficult to read at this size. (middle-right, weak)

**vehicles**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: Several very similar yellow trams appear across the yard; the repetition could initially resemble generated duplication, though it fits a tram depot. (whole-image, weak)

**lighting_or_shadows**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The vivid blue sky and strongly defined vehicle edges give the image a slightly polished appearance. (whole-image, weak)

## r05.jpg: mean P(AI) 0.02 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.00

**vehicles**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Several distant yellow trams look repetitive at this scale, though that is plausible in a tram yard. (middle-right, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Distant trams, wires, and small figures are crowded together and hard to distinguish; this could look like generated detail, though distance also explains it. (middle-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The trams and pavement look unusually crisp and evenly defined, though this could result from ordinary image processing. (whole-image, weak)

## r06.jpg: mean P(AI) 0.14 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.01 / 0.99 / 0.05

**vehicles**: score 6, raised in 2/9 calls, at middle-left, center, middle-right

- gpt-6-sol: The tightly overlapping row of similar yellow trams makes individual vehicle boundaries hard to follow at a glance. (middle-left, weak)
- gemini-3.1-pro-preview: The front wheels of the middle tram (numbered roughly 2228) appear as indistinct dark shapes resting on flat concrete, with no visible tracks beneath them. (center, strong)
- gemini-3.1-pro-preview: The white van parked in the background next to the building has misshapen wheels and a distorted, melty-looking front end. (middle-right, moderate)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The network of overhead catenary wires is highly chaotic, with lines intersecting at random angles, fading out, or dead-ending in mid-air without logical support structures. (top-center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The grooved tram rails in the foreground appear to fade into and blend completely with the flat concrete ground surface, rather than remaining distinct structural elements. (bottom-center, strong)

**composition_or_staging**: score 2, raised in 2/9 calls, at middle-left

- gpt-6-sol: The overlapping row of similar yellow trams makes their boundaries difficult to follow at a glance. (middle-left, weak)
- gpt-6-sol: The many similar yellow trams make the scene look unusually repetitive, though that is plausible at a tram depot. (middle-left, weak)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The text written on the side of the tram, 'EN DURCH BERLIN.', appears to be an incomplete or slightly garbled generation of a typical transit slogan. (middle-right, moderate)

## r07.jpg: mean P(AI) 0.24 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.05 / 0.04
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.99

**track_geometry**: score 16, raised in 3/9 calls, at top-center, middle-right, bottom-right, center

- gpt-6-sol: The distant switchwork is visually crowded, making some rail connections hard to trace at this resolution. (top-center, weak)
- gemini-3.1-pro-preview: There are four or five closely spaced parallel rails running together, which is physically impossible for a functional train track that requires only two rails. (middle-right, strong)
- gemini-3.1-pro-preview: The rails near the bottom edge terminate abruptly and unevenly in the dirt, lacking any logical continuation or buffer stop. (bottom-right, strong)
- gemini-3.1-pro-preview: Rails cross over one another with blurry 'X' intersections, lacking any of the necessary mechanical components like frogs or switch points. (middle-right, strong)

**switch_mechanism**: score 5, raised in 3/9 calls, at top-center

- gpt-6-sol: Several rails cross and converge in a dense switch area that is difficult to trace individually at this distance. (top-center, weak)
- gpt-6-sol: Several rails cross and branch in a dense switch area; at this distance, some connections are difficult to follow. (top-center, weak)
- gemini-3.1-pro-preview: Where the tracks split in the distance, the rails merge and overlap like a tangled bundle rather than having properly defined switch points, frogs, and crossing structures. (top-center, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The pile of objects (presumably pipes or poles) lying on the ground between the dirt area and the tracks looks like an unstructured, messy blob of lines upon closer inspection. (top-center, moderate)
- gemini-3.1-pro-preview: The pile of dark cylindrical objects beside the tracks is amorphous and lacks definition, with the individual objects blending into a single mass. (top-center, moderate)

**vehicles**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The white vehicle parked next to the industrial building appears amorphous and lacks clear structural details like distinct windows, doors, or a coherent shape. (top-right, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The tire tracks in the dirt have a slightly smooth, brushed-on appearance upon close inspection, lacking sharp granular details expected of gravel or dry earth. (middle-left, weak)

## r08.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.05 / 0.06 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.99

**switch_mechanism**: score 5, raised in 3/9 calls, at top-center

- gpt-6-sol: The distant junction is crowded and its individual rail connections are difficult to follow. (top-center, weak)
- gpt-6-sol: The distant junction is crowded and its individual rail connections are difficult to follow at this resolution. (top-center, weak)
- gemini-3.1-pro-preview: The area where the main tracks converge lacks any coherent physical switch mechanism, appearing instead as a blurry and illogical jumble of merging lines. (top-center, strong)

**track_geometry**: score 4, raised in 2/9 calls, at top-center, top-right

- gpt-6-sol: The distant junction is visually crowded, making a few rail connections hard to follow at this resolution. (top-center, weak)
- gemini-3.1-pro-preview: The rails in the distant, curving side tracks intersect haphazardly and fade into the ground unnaturally, lacking logical continuity. (top-right, strong)

**texture_noise_or_sharpness**: score 4, raised in 1/9 calls, at center, middle-left

- gemini-3.1-pro-preview: The gravel ballast between the tracks is extremely uniform and lacks the definition of individual stones, strongly resembling a procedurally generated noise texture. (center, moderate)
- gemini-3.1-pro-preview: Upon closer inspection, the vegetation covering the embankment appears mushy and indistinct, lacking realistic leaf structures or branching. (middle-left, moderate)

## r11.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.01 / 0.01

**text_signage_or_markings**: score 3, raised in 3/9 calls, at top-center, middle-right

- gpt-6-sol: The white writing on the weathered gate is hard to decipher; distorted lettering can be an AI artifact, though fading could also explain it. (top-center, weak)
- gpt-6-sol: The small, crowded lettering on the yellow sign is difficult to verify at this resolution. (middle-right, weak)
- gpt-6-sol: White lettering on the weathered gray panel is partly difficult to read and looks irregular. (top-center, weak)

## r12.jpg: mean P(AI) 0.24 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.01

**overhead_wires_or_poles**: score 6, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: A dense, nonsensical cluster of thick gray poles with crossarms pointing in random directions, mostly lacking any connecting wires. (center, strong)
- gemini-3.1-pro-preview: Numerous thick grey poles are placed seemingly randomly between and alongside the tracks without logical cantilever assemblies or consistent wiring, appearing structurally nonsensical. (center, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-right, bottom-center

- gemini-3.1-pro-preview: The steel rails in the foreground switch merge into one another and the ballast, lacking sharp edges, distinct check rails, or proper mechanical structure. (bottom-right, strong)
- gemini-3.1-pro-preview: Where the tracks intersect, they cross directly over each other without proper switch components like frogs or check rails; they appear to just melt together. (bottom-center, strong)

**text_signage_or_markings**: score 5, raised in 3/9 calls, at top-left, middle-left

- gpt-6-sol: Small markings on the distant red industrial vehicles are difficult to read and could appear distorted, though distance also explains this. (top-left, weak)
- gpt-6-sol: Some lettering on the distant red-and-white industrial structures is hard to make out, which could superficially resemble generated text, though distance also explains it. (top-left, weak)
- gemini-3.1-pro-preview: The white logos painted on the side of the red trailers consist of illegible, alien-like characters. (middle-left, strong)

**buildings**: score 4, raised in 2/9 calls, at top-left, middle-left

- gemini-3.1-pro-preview: The ventilation pipes and roof structures on the industrial buildings are malformed, seemingly melting into each other and the roofline. (top-left, moderate)
- gemini-3.1-pro-preview: The stepped concrete retaining wall is made of uneven, warped blocks with inconsistent shapes and textures. (middle-left, moderate)

**background_clutter**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The curved concrete retaining wall features bizarre, repetitive, blocky structures that appear to float or serve no structural purpose. (middle-left, strong)

## r14.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.06
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.99

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The rail junction is visually crowded and hard to trace in places. (bottom-center, weak)
- gemini-3.1-pro-preview: The tram or train tracks form a nonsensical junction; rails curve and intersect haphazardly, with some lines simply fading into the dirt or asphalt without forming a functional switch. (bottom-center, strong)

**composition_or_staging**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: Inside the window of the small guard booth on the right, there is a fully rendered miniature front view of a white car complete with a driver, which makes no physical sense either as an object inside the tiny booth or as a reflection. (middle-right, strong)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires exhibit strange artifacts, terminating abruptly in mid-air or blending nonsensically into the foliage of the trees behind them. (top-center, strong)

**switch_mechanism**: score 2, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The rail junction is visually crowded, making its exact mechanical layout hard to follow. (bottom-center, weak)
- gpt-6-sol: The small rail junction and adjacent hardware are difficult to trace precisely at this resolution. (bottom-center, weak)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The license plate on the front of the white car is composed of illegible, warped squiggles rather than recognizable letters and numbers. (middle-left, moderate)

## r15.jpg: mean P(AI) 0.03 (passes)

- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.02 / 0.01 / 0.01

**track_geometry**: score 2, raised in 2/9 calls, at center, middle-right

- gpt-6-sol: Some distant rail junctions are hard to trace individually and could initially look irregular. (center, weak)
- gpt-6-sol: Several curved rails overlap near the depot, making the switch layout difficult to follow by eye. (middle-right, weak)

**overhead_wires_or_poles**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The dense wire crossings are visually confusing in places, though none is an obvious fabrication. (top-center, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The distant figures and construction materials are too small to identify clearly. (middle-right, weak)

## r16.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.02

**text_signage_or_markings**: score 3, raised in 3/9 calls, at middle-right

- gpt-6-sol: Two circular roadside signs appear blank or hard to read, which could resemble an AI-generated omission, though their backs may simply face the camera. (middle-right, weak)
- gpt-6-sol: Two circular signs appear almost blank inside their red borders; that is slightly unusual, though it may be their actual design. (middle-right, weak)
- gpt-6-sol: Two circular signs appear nearly blank from this viewpoint, which looks slightly unusual. (middle-right, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at bottom-right

- gpt-6-sol: A blue-and-yellow barrier cuts across the foreground without an immediately clear purpose. (bottom-right, weak)

## r18.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.02 / 0.00 / 0.05

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The dense, overlapping wires and poles are difficult to trace individually, a minor potential AI cue. (middle-right, weak)

**buildings**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The distant apartment windows form repetitive grids that could superficially resemble generated patterning, although the variation looks plausible. (top-center, weak)

**overhead_wires_or_poles**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: Several thin wires overlap, making individual connections hard to follow. (top-right, weak)

## r20.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.05 / 0.04 / 0.05
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at top-right

- gpt-6-sol: Some distant branches and fence details are hard to distinguish, which could superficially resemble generated texture. (top-right, weak)
- gpt-6-sol: The dense branches become difficult to distinguish individually, which could resemble generated texture but is also consistent with a busy distant background. (top-right, weak)

**track_geometry**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The rails become difficult to follow where they approach the closed gate; taken alone, that could look like an inconsistent ending. (top-center, weak)

## r21.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.00

**text_signage_or_markings**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The distant tram destination display is difficult to read and looks somewhat muddled, though its small size could explain this. (middle-right, weak)

**other**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: A bright red diagonal strip in front of the left tram looks briefly disconnected from its surroundings, though it could be construction tape. (middle-left, weak)

**vehicles**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: A bright red diagonal strip crosses the left tram and is hard to identify at a glance. (middle-left, weak)

## r22.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.05 / 0.01 / 0.01

**buildings**: score 2, raised in 2/9 calls, at top-center

- gpt-6-sol: Many windows and facade details repeat closely, a pattern that could resemble generated imagery but is also normal for these buildings. (top-center, weak)
- gpt-6-sol: The highly repetitive windows and decorative facade could resemble generated patterning, though the details remain orderly. (top-center, weak)

**text_signage_or_markings**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The small plate beneath the pole-mounted warning sign is hard to read, though its size and distance could account for that. (top-center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The crisp edges and vivid colors give the image a slightly processed look. (whole-image, weak)

## r23.jpg: mean P(AI) 0.02 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.01 / 0.01 / 0.02

**text_signage_or_markings**: score 2, raised in 2/9 calls, at top-center

- gpt-6-sol: The illuminated characters are partly ambiguous, which could superficially resemble AI-generated lettering. (top-center, weak)
- gpt-6-sol: The bright LED display is hard to read and its letter shapes look somewhat irregular, though glare could explain this. (top-center, weak)

**lighting_or_shadows**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The illuminated display blooms strongly enough that its characters are difficult to read. (top-center, weak)
