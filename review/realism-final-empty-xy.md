# Realism check: final-empty-xy

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 12 | 3/4 |
| background_clutter | 7 | 3/4 |
| buildings | 5 | 2/4 |
| texture_noise_or_sharpness | 4 | 2/4 |
| camera_or_windscreen | 3 | 1/4 |
| tools_or_small_objects | 3 | 1/4 |
| composition_or_staging | 2 | 2/4 |
| overhead_wires_or_poles | 2 | 1/4 |

## x-empty-L.jpg: mean P(AI) 0.16 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.15 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.02

**track_geometry**: score 6, raised in 1/9 calls, at bottom-center, bottom-left

- gemini-3.1-pro-preview: The inner rails of the two diverging tracks run parallel and extremely close together towards the bottom edge, failing to form a logical switch or crossing mechanism expected where tracks split. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails themselves have inconsistent structures, with the inner rail of the left track splitting into a messy double line that lacks the clean geometry of a real grooved tram rail. (bottom-left, strong)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-left, middle-left, top-right

- gpt-6-sol: Shapes inside the left doorway are indistinct; viewed alone, that lack of definition could resemble generated detail, though the dark interior and wet window explain it. (top-left, weak)
- gpt-6-sol: Shapes deep inside the dark doorway are indistinct and difficult to identify, which could superficially resemble generated detail. (middle-left, weak)
- gpt-6-sol: The shed interior is very dark and indistinct, limiting how much of its detail can be checked. (top-right, weak)

**camera_or_windscreen**: score 3, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The supposed water droplets on the lens or window are uniform, blurry circles with identical highlight patterns that do not authentically refract or distort the background behind them, appearing like a stamped overlay. (top-right, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The wooden pallet and orange traffic cones behind the chain-link fence are warped and lack the distinct, rigid shapes of their real-world counterparts. (center, moderate)

**buildings**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The left edge of the doorway opening for the right-hand bay blends vaguely into the corrugated metal wall, lacking a defined structural frame or clear edge. (top-right, moderate)

## x-empty-R.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.07 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**background_clutter**: score 2, raised in 2/9 calls, at middle-right, top-right

- gpt-6-sol: Objects inside the right doorway are hard to distinguish and have somewhat amorphous outlines, though the dark interior could explain this. (middle-right, weak)
- gpt-6-sol: The shed interior is very dark and its contents are difficult to distinguish, leaving a small amount of visual ambiguity. (top-right, weak)

**track_geometry**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The distant rails become hard to distinguish where they approach the dark entrance; their exact path is visually ambiguous. (middle-right, weak)

## y-empty-L.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.06
- openai/gpt-6-sol: 0.04 / 0.04 / 0.02
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**background_clutter**: score 3, raised in 3/9 calls, at top-center, middle-right

- gpt-6-sol: Small objects at the far end of the shed are indistinct and somewhat smudged. (top-center, weak)
- gpt-6-sol: Distant objects along the wall are indistinct and hard to resolve; this could be generated detail, though distance and low contrast also explain it. (middle-right, weak)
- gpt-6-sol: Distant objects along the rear wall are indistinct and difficult to identify, though their small size could explain this. (middle-right, weak)

## y-empty-R.jpg: mean P(AI) 0.14 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.02

**track_geometry**: score 5, raised in 1/9 calls, at bottom-left, bottom-right

- gemini-3.1-pro-preview: The rails of the left track lose their grooved profile, appear to change gauge, and morph into a flat texture as they approach the shadow line. (bottom-left, strong)
- gemini-3.1-pro-preview: The inner rail of the right track wavers irregularly and loses its consistent width and shape just before entering the shadowed area. (bottom-right, moderate)

**tools_or_small_objects**: score 3, raised in 2/9 calls, at center

- gpt-6-sol: The small equipment between the inspection pits is indistinct enough that its shape is hard to verify. (center, weak)
- gemini-3.1-pro-preview: The small blue and red object on the tracks in the mid-ground is an incoherent blob lacking defined wheels or recognizable features of a cart or piece of equipment. (center, moderate)

**buildings**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The diagonal steel bracing in the roof trusses frequently merges into other beams, disappears mid-air, and lacks logical structural connection points. (top-center, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: A thin overhead wire descends from the top left corner but abruptly fades into the sky without attaching to any visible support or insulator. (top-left, moderate)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The nearly symmetrical, empty view of the depot could resemble a generated architectural scene, though it is also a natural camera position. (whole-image, weak)
