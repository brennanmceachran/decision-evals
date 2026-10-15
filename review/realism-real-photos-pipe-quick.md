# Realism check: real-photos-pipe-quick

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 14 | 3/18 |
| overhead_wires_or_poles | 11 | 3/18 |
| background_clutter | 8 | 2/18 |
| vehicles | 6 | 1/18 |
| texture_noise_or_sharpness | 4 | 2/18 |
| buildings | 3 | 1/18 |
| text_signage_or_markings | 2 | 1/18 |

## r01.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.01 / 0.01 / 0.01
- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.01

No AI-pointing evidence raised.

## r02.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.01

No AI-pointing evidence raised.

## r03.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.01 / 0.01 / 0.01
- anthropic/claude-opus-5.5: 0.05 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.01

No AI-pointing evidence raised.

## r04.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.05
- google/gemini-3.1-pro-preview: 0.02 / 0.00 / 0.05

No AI-pointing evidence raised.

## r05.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

No AI-pointing evidence raised.

## r06.jpg: mean P(AI) 0.03 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.01
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.01

No AI-pointing evidence raised.

## r07.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

No AI-pointing evidence raised.

## r08.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

No AI-pointing evidence raised.

## r11.jpg: mean P(AI) 0.03 (passes)

- anthropic/claude-opus-5.5: 0.04 / 0.05 / 0.05
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.05

No AI-pointing evidence raised.

## r12.jpg: mean P(AI) 0.14 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.05 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.99

**track_geometry**: score 5, raised in 1/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: The railway tracks cross over one another without any of the necessary mechanical infrastructure (such as frogs, switch blades, or check rails); the rails simply blend and draw over each other impossibly. (bottom-center, strong)
- gemini-3.1-pro-preview: As the tracks curve to the left, they appear to merge directly into a concrete barrier or retaining wall without a clear path. (center, moderate)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: There is a chaotic cluster of electrification masts that lack logical placement, cantilever structures, or connecting overhead wires, with some seemingly placed too close to the rails. (center, strong)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The logos or text markings on the sides of the red trailers in the background are garbled and illegible, a common artifact in AI-generated imagery. (middle-left, moderate)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The texture of the dirt and gravel on the embankment has a smeared, repetitive, and somewhat painted quality rather than looking like loose natural material. (bottom-left, moderate)

## r14.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.04 / 0.06 / 0.05
- anthropic/claude-opus-5.5: 0.07 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.05

**vehicles**: score 6, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The white car is highly distorted. The front bumper, grille, and headlights lack realistic definition and appear smudged together. (middle-left, strong)
- gemini-3.1-pro-preview: The white car has distorted, asymmetrical front features (like the grille and headlights) and lacks any visible wheels, with the wheel areas appearing as flat black shadows. (center, strong)

**background_clutter**: score 6, raised in 2/9 calls, at center, middle-right, middle-left

- gemini-3.1-pro-preview: The red metal gates have structural inconsistencies; the vertical and horizontal bars do not align logically, and sections seem to fade into the background. (center, moderate)
- gemini-3.1-pro-preview: The red metal gate's structure is illogical; the vertical bars have inconsistent thicknesses and intersect the horizontal frame in impossible, physically incorrect ways. (middle-right, moderate)
- gemini-3.1-pro-preview: The red gate on the left lacks a bottom horizontal frame, with the vertical bars ending unevenly and awkwardly in the grass, giving it a floating appearance. (middle-left, moderate)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires are fragmented, disconnected, and have illogical blobs or structural elements floating in the air. (top-center, strong)
- gemini-3.1-pro-preview: The overhead wires exhibit unnatural kinks and squiggles, and some lines appear to terminate abruptly in mid-air or have indistinct, blob-like insulators. (top-center, moderate)

**buildings**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The window on the small building has white framing that forms nonsensical, impossible shapes rather than standard panes. (middle-right, strong)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The layout of the tracks is nonsensical, with rails merging and crossing in non-functional ways, and the leftmost rail simply fading into the dirt without a logical continuation. (bottom-center, strong)

## r15.jpg: mean P(AI) 0.14 (passes)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.01
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.10 / 0.02 / 0.98

**track_geometry**: score 6, raised in 1/9 calls, at bottom-center, middle-right

- gemini-3.1-pro-preview: The complex railway switch mechanisms are heavily malformed. The steel rails blur together, have gaps, and lack functional components like points and frogs, making them physically impossible for a train to navigate. (bottom-center, strong)
- gemini-3.1-pro-preview: The tracks curving towards the building on the right show inconsistent gauge. Furthermore, some rails appear to disappear into the concrete or turn into flat lines rather than raised steel profiles. (middle-right, strong)

**overhead_wires_or_poles**: score 3, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead electrical wires form chaotic, non-functional webs. Many wires intersect without necessary mounting hardware, zigzag randomly, or simply end abruptly in mid-air. (top-center, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of white bags or materials situated behind the fence near the middle of the image lacks defined shapes, appearing as merged, indistinct lumps. (center, moderate)

## r16.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05
- anthropic/claude-opus-5.5: 0.04 / 0.05 / 0.05

No AI-pointing evidence raised.

## r18.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.01

No AI-pointing evidence raised.

## r20.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.01
- anthropic/claude-opus-5.5: 0.05 / 0.05 / 0.05
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

No AI-pointing evidence raised.

## r21.jpg: mean P(AI) 0.03 (passes)

- anthropic/claude-opus-5.5: 0.04 / 0.04 / 0.04
- openai/gpt-6-sol: 0.01 / 0.02 / 0.01
- google/gemini-3.1-pro-preview: 0.01 / 0.05 / 0.05

No AI-pointing evidence raised.

## r22.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.01
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.01
- anthropic/claude-opus-5.5: 0.08 / 0.07 / 0.08

No AI-pointing evidence raised.

## r23.jpg: mean P(AI) 0.04 (passes)

- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.05 / 0.04 / 0.04

No AI-pointing evidence raised.
