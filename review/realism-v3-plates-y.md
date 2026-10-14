# Realism check: v3-plates-y

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| overhead_wires_or_poles | 11 | 3/6 |
| composition_or_staging | 10 | 5/6 |
| buildings | 9 | 3/6 |
| track_geometry | 8 | 2/6 |
| texture_noise_or_sharpness | 6 | 3/6 |
| tools_or_small_objects | 4 | 2/6 |
| lighting_or_shadows | 2 | 2/6 |
| background_clutter | 1 | 1/6 |
| camera_or_windscreen | 1 | 1/6 |

## e-1.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.02

**composition_or_staging**: score 3, raised in 3/9 calls, at whole-image, top-center

- gpt-6-sol: The two shed openings and branching tracks form an unusually balanced composition, though this is plausible in a rail yard. (whole-image, weak)
- gpt-6-sol: The two open bays and diverging tracks form an unusually tidy, near-symmetric composition. (whole-image, weak)
- gpt-6-sol: The two depot openings and branching tracks form an unusually balanced, near-symmetrical composition. (top-center, weak)

## e-2.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.00 / 0.02 / 0.05

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- gpt-6-sol: The two similar entrances and rail branches create an unusually balanced, nearly symmetrical view. (whole-image, weak)
- gpt-6-sol: The two rail branches lead to similar open bays, creating an unusually balanced composition, though this is plausible for an industrial facility. (whole-image, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: Details deep inside the left opening are indistinct, which could conceal generated errors but is also consistent with the distance and low light. (middle-left, weak)

## e-3.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.98

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at top-right, middle-left, top-left

- gpt-6-sol: Fine details inside the distant bay are indistinct, though this is also consistent with the distance and low light. (top-right, weak)
- gpt-6-sol: The distant lights and structural details inside the left bay are indistinct, making their exact geometry hard to verify. (middle-left, weak)
- gemini-3.1-pro-preview: The bare trees in the background behind the fence are rendered as indistinct, fuzzy smudges rather than having clearly defined branches and twigs. (top-left, moderate)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires between the left and center poles zigzag unnaturally, intersect at odd angles, and lack the proper physical tension or support structures of a real catenary system. (top-center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The gauge (width between the rails) of the left track appears to narrow inconsistently as it approaches the building, and the inner rail has slight, unnatural wavy distortions. (middle-left, strong)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The large wooden cable drum sitting between the two building doors appears completely flat and lacks depth, looking like a 2D circular texture rather than a 3D object with a central axle. (center, moderate)

**lighting_or_shadows**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: The small lights receding inside the right bay look somewhat repetitive, though that is plausible for an industrial building. (top-right, weak)

## f-1.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**buildings**: score 2, raised in 2/9 calls, at middle-right, top-center

- gpt-6-sol: The two bay interiors have unusually similar rows of lights and structural details, though matching depot bays would naturally look alike. (middle-right, weak)
- gpt-6-sol: The two illuminated bays look unusually similar, though matching bays are expected in a depot. (top-center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Small objects against the wall between the bays are indistinct; distance and low light could also explain this. (center, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The two illuminated depot entrances and their approaching tracks look unusually similar. (whole-image, weak)

## f-2.jpg: mean P(AI) 0.17 (passes)

- openai/gpt-6-sol: 0.04 / 0.08 / 0.04
- anthropic/claude-opus-5.5: 0.25 / 0.33 / 0.70
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center, top-left, top-right

- claude-opus-5.5: The overhead wires are sparse: a few thin wires slant down from the poles toward the doors, but there is no full catenary visibly suspended over the tracks. This is somewhat odd for a tram depot. (top-center, weak)
- claude-opus-5.5: The overhead contact wiring is sparse. Only a few diagonal wires run from poles toward the doors, with no clear catenary directly above each track, which is somewhat unusual for a tram depot. (top-center, weak)
- claude-opus-5.5: A single wire droops diagonally from the top of the left pole toward the building with no proper catenary over the track. A tram depot would normally have contact wires running above each track into the bays. (top-left, moderate)
- claude-opus-5.5: A lone wire on the right angles down from the top edge toward the door area. It does not connect to any coherent span or contact-wire system over the right track. (top-right, moderate)

**composition_or_staging**: score 3, raised in 3/9 calls, at whole-image

- gpt-6-sol: The two curving tracks and brightly lit entrances form a notably balanced composition. (whole-image, weak)
- gpt-6-sol: The two illuminated bays and branching tracks make a notably balanced composition. (whole-image, weak)
- gpt-6-sol: The two illuminated bays and curving tracks make an unusually balanced, empty scene, though that is plausible for a depot. (whole-image, weak)

**buildings**: score 2, raised in 2/9 calls, at top-center, center

- gpt-6-sol: The large wall is unusually plain and uniform, which could suggest generated simplification, though it is plausible for an industrial building. (top-center, weak)
- claude-opus-5.5: The facade panels and the depot interiors are very clean and generic, with repeated lighting and little real-world wear or detail. (center, weak)

**camera_or_windscreen**: score 1, raised in 1/9 calls, at bottom-center

- claude-opus-5.5: A dark, softly rendered dashboard or windscreen edge across the bottom has an indistinct shape. (bottom-center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The surfaces have a smooth, painterly finish, and the far objects such as cages and doors are mushy. (whole-image, weak)

## f-3.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.05 / 0.99 / 0.01

**buildings**: score 5, raised in 3/9 calls, at top-center, center

- gpt-6-sol: The broad facade looks unusually plain and uniform, though that is also plausible for an industrial depot. (top-center, weak)
- gpt-6-sol: The broad depot facade is unusually plain, though that is also plausible for an industrial building. (top-center, weak)
- gemini-3.1-pro-preview: The grey pedestrian door in the middle of the building facade is completely flat and lacks any visible hardware, such as a handle, hinges, or a frame. (center, strong)

**track_geometry**: score 5, raised in 1/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: As the right-hand track enters the building, the two rails unnaturally converge and merge into a single line, losing their parallel gauge completely. (middle-right, strong)
- gemini-3.1-pro-preview: Inside the left-hand building entrance, the rails of the track become wobbly and appear to lose their consistent width and structural integrity. (middle-left, moderate)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The metal cages or stacked pallets located just to the right of the central door are indistinct, with their structural lines melding together in an illogical way. (center, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead wire extending horizontally to the left from the supporting pole appears to simply fade out into the sky without connecting to another structure. (top-left, moderate)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The two illuminated entrances and branching tracks form an unusually balanced, near-symmetrical scene. (whole-image, weak)
