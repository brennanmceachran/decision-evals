# Realism check: sd-r2-plates

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| texture_noise_or_sharpness | 17 | 6/8 |
| overhead_wires_or_poles | 11 | 3/8 |
| text_signage_or_markings | 10 | 4/8 |
| tools_or_small_objects | 9 | 1/8 |
| track_geometry | 9 | 3/8 |
| buildings | 9 | 4/8 |
| background_clutter | 8 | 4/8 |
| composition_or_staging | 5 | 2/8 |
| switch_mechanism | 3 | 1/8 |
| lighting_or_shadows | 2 | 1/8 |

## s-1.jpg: mean P(AI) 0.14 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.06 / 0.07 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.95

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the two diverging tracks simply merge into a 'V' shape embedded in the concrete, entirely lacking the moving switch blades or frog mechanisms required for a rail vehicle to navigate a junction. (bottom-center, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, top-right

- gpt-6-sol: The pallets and cable reel are somewhat indistinct at this resolution, making their fine details hard to verify. (center, weak)
- gpt-6-sol: Details inside the right shed are indistinct, which could conceal generated inconsistencies, though the dark interior also explains it. (top-right, weak)

**lighting_or_shadows**: score 2, raised in 1/9 calls, at top-right

- gemini-3.1-pro-preview: The lights visible inside the dark right-hand building appear as randomly scattered, blurry white streaks, failing to form a logical array or grid typical of warehouse lighting. (top-right, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: A thin overhead wire visible against the sky abruptly fades out in mid-air and fails to logically connect to any of the nearby vertical support poles. (top-left, moderate)

**text_signage_or_markings**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: Some pale ground markings are fragmented and difficult to follow, though worn paint could explain them. (center, weak)

## s-2.jpg: mean P(AI) 0.26 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.99

**tools_or_small_objects**: score 9, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of wooden pallets lacks distinct, straight individual boards and spacer blocks, instead merging into a cohesive, messy block of wood texture with irregular lines. (center, strong)
- gemini-3.1-pro-preview: The large wooden cable spool has an irregularly shaped, non-circular center hole, and the wooden planks making up its side are warped and do not form a flat circular face. (center, strong)
- gemini-3.1-pro-preview: The stack of wooden pallets and cable reels in the background are visually merged. The pallets appear as a solid textured block rather than distinct stacked boards, and the large reel has a misshapen, off-center hole. (center, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of both tracks converge sharply at the bottom edge but do not appear to form a logical switch or frog. Additionally, the camera's centered perspective between the divergent tracks suggests the vehicle is not aligned with any valid rails directly beneath it. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails from the left and right tracks converge into a sharp V-shape without any visible switch mechanism, points, or frog, which is mechanically impossible for a functional tramway or railway. (bottom-center, strong)

**text_signage_or_markings**: score 4, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The warning sign on the left building wall and the small white sign on the pole contain indistinct, meaningless squiggles instead of legible text or recognizable safety symbols. (middle-left, moderate)
- gemini-3.1-pro-preview: The white painted box with a diagonal cross on the ground to the left of the tracks is highly irregular, smeared, and its lines do not meet cleanly at the corners. (middle-left, moderate)

**background_clutter**: score 3, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: Objects inside the dark depot doorway are indistinct, leaving some details difficult to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The vertical bars of the palisade fence behind the pallets are unevenly spaced and angled, and the left section of the fence abruptly melts into a solid, textureless wavy surface. (center, moderate)

**buildings**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The brickwork on the right building, just above the white door, becomes completely smeared and loses its mortar pattern, turning into a solid brownish patch. (middle-right, strong)

## s-3.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.07 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.01

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-right, top-left

- gpt-6-sol: Objects deep inside the right shed are hard to distinguish; that ambiguity could resemble generated detail, though the dark interior also explains it. (middle-right, weak)
- gpt-6-sol: Details inside the dark shed are too indistinct to verify individually; that ambiguity offers slight support for AI generation. (top-left, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Objects inside the right shed are very indistinct, making their exact shapes hard to verify. (middle-right, weak)

## s-4.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.05

**buildings**: score 2, raised in 2/9 calls, at top-left

- gpt-6-sol: The very dark shed interior has indistinct details that could conceal generated errors, though the lighting readily explains them. (top-left, weak)
- gpt-6-sol: Objects inside the dark shed are indistinct and somewhat amorphous, though low exposure could explain this. (top-left, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-left

- gpt-6-sol: Details deep inside the left bay are indistinct, which makes that area harder to assess for generation artifacts. (top-left, weak)

## t-1.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**text_signage_or_markings**: score 2, raised in 2/9 calls, at center

- gpt-6-sol: The faded white pavement markings are difficult to interpret; their indistinct shapes could suggest generated detail, though wear and glare also explain them. (center, weak)
- gpt-6-sol: Some faint white pavement markings are hard to make out and look irregular. (center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The glare and haze soften distant details, making some surfaces hard to verify. (whole-image, weak)

## t-2.jpg: mean P(AI) 0.06 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.15 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.05

**background_clutter**: score 2, raised in 2/9 calls, at top-left, top-center

- gpt-6-sol: Shapes inside the dark left shed are indistinct, making their details difficult to verify. (top-left, weak)
- gpt-6-sol: The backlit building surfaces are hazy and indistinct, limiting how much their details can be checked. (top-center, weak)

**track_geometry**: score 1, raised in 1/9 calls, at bottom-center

- claude-opus-5.5: No switch blades visible at divergence; tracks appear as separate curves, slightly unusual but plausible as camera position past the switch (bottom-center, weak)

**buildings**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: The right doorway is very dark and reveals little interior detail, making that area harder to verify. (top-right, weak)

## t-3.jpg: mean P(AI) 0.28 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.75 / 0.72
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 8, raised in 5/9 calls, at middle-right

- gpt-6-sol: Haze and windscreen spots obscure some details of the right-hand shed, making them hard to verify. (middle-right, weak)
- gpt-6-sol: The right-hand depot entrance is hazy and indistinct, obscuring some structural detail. (middle-right, weak)
- claude-opus-5.5: Floating bokeh/dust specks over the right shed and haze produce a stylized cinematic film look typical of generative outputs (middle-right, moderate)
- claude-opus-5.5: Speckled dust/bokeh particles over the right shed doorway and interior look like an added film-grain/haze effect, and the interior detail dissolves into mush (middle-right, moderate)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- claude-opus-5.5: Overhead wires are sparse and inconsistent; wires end or connect oddly to poles, and the left-center pole has a wire that doesn't route over the tracks in a plausible catenary layout (top-center, moderate)
- claude-opus-5.5: Overhead wires are sparse and inconsistent: a single wire runs diagonally from the top to the left pole with no coherent catenary over the tracks; the wires don't follow the track curves (top-center, moderate)
- claude-opus-5.5: The overhead wires are sparse and loosely connected. The left catenary wire ends ambiguously, and the span wires do not clearly cover both tracks the way a real tram depot installation would. (top-center, moderate)

**text_signage_or_markings**: score 3, raised in 3/9 calls, at middle-left, bottom-left, bottom-right

- claude-opus-5.5: Small signs on shed walls are illegible blobs; ground markings are vague (middle-left, weak)
- claude-opus-5.5: Faded painted markings and small signs on the shed walls are illegible blobs (bottom-left, weak)
- claude-opus-5.5: The white painted markings on the concrete are fragmentary and seem to follow no logic. (bottom-right, weak)

**buildings**: score 3, raised in 2/9 calls, at middle-right, middle-left

- claude-opus-5.5: Right shed interior is a mottled dark texture with indistinct structure; door panels look plasticky (middle-right, moderate)
- claude-opus-5.5: The left shed doors and interior lights are rendered softly, and the brick base and signage are indistinct with no readable text. (middle-left, weak)

**composition_or_staging**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: A symmetric twin-shed composition with a cinematic warm haze and film-emulation look is typical of generated 'analog photo' styles (whole-image, moderate)
- claude-opus-5.5: The scene is symmetric, with two branches leading into two sheds and a cable drum placed centrally, under golden backlit haze. This staged aesthetic is common in AI generations. (whole-image, weak)

## t-4.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-right

- gpt-6-sol: The right-hand doorway and facade look hazy and indistinct, which could also occur in a generated image. (top-right, weak)
- gpt-6-sol: The right shed interior is hazy and indistinct, making its details harder to verify; glare could also explain this. (top-right, weak)
- gpt-6-sol: The right-hand doorway is hazy and its interior details are difficult to resolve; this could resemble generated-image smearing, though glare also explains it. (top-right, weak)
