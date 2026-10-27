# Realism check: final-plates

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 53 | 5/8 |
| buildings | 24 | 4/8 |
| overhead_wires_or_poles | 20 | 3/8 |
| composition_or_staging | 18 | 4/8 |
| texture_noise_or_sharpness | 17 | 7/8 |
| background_clutter | 14 | 6/8 |
| tools_or_small_objects | 9 | 4/8 |
| camera_or_windscreen | 6 | 3/8 |
| switch_mechanism | 3 | 1/8 |
| text_signage_or_markings | 1 | 1/8 |

## x-1.jpg: mean P(AI) 0.26 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.01

**overhead_wires_or_poles**: score 6, raised in 2/9 calls, at top-right, top-center

- gemini-3.1-pro-preview: A thin black wire extending leftward from the top of the right pole abruptly vanishes into the sky without connecting to any other structure. (top-right, strong)
- gemini-3.1-pro-preview: The thin lines in the sky, intended to be overhead power wires, are chaotic, disjointed, and some abruptly terminate in mid-air without connecting to poles or continuing out of frame. (top-center, strong)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the diverging left and right tracks come impossibly close to each other near the bottom edge of the frame without any intersecting switch or frog mechanism. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge into a solid point without any moving switch blades, frog, or gaps for wheel flanges, making it physically impossible for a vehicle to navigate the split. (bottom-center, strong)

**camera_or_windscreen**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: Water droplets on the lens appear as flat, translucent grey circles that fail to refract or distort the lines of the roof behind them, acting like a 2D overlay rather than physical water. (top-center, strong)
- gemini-3.1-pro-preview: There are faint, semi-transparent blobs scattered across the upper part of the image, simulating water droplets or dirt on a camera lens, a technique often used in generation to add artificial realism. (top-center, weak)

**buildings**: score 4, raised in 2/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The vertical grooves of the corrugated metal facade above the left doorway are warped, wavy, and non-parallel, lacking the rigidity of real metal panels. (top-left, moderate)
- gemini-3.1-pro-preview: The junction where the left and right corrugated buildings meet has a confused perspective, with the rooflines and walls seeming to blur and melt together rather than forming a clear corner. (top-center, moderate)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at top-center, center

- gpt-6-sol: A small turquoise shape by the fence is too indistinct to identify confidently. (top-center, weak)
- gpt-6-sol: Some distant fence-line objects are indistinct, which could resemble generated detail but is also consistent with distance and low light. (center, weak)

## x-2.jpg: mean P(AI) 0.04 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.06 / 0.10
- openai/gpt-6-sol: 0.01 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**background_clutter**: score 2, raised in 2/9 calls, at top-left

- gpt-6-sol: Objects inside the dark shed are hard to distinguish and could, in isolation, resemble muddled generated detail. (top-left, weak)
- gpt-6-sol: Shapes deep inside the left bay are indistinct and hard to identify, though darkness and wet glass could explain this. (top-left, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-left

- gpt-6-sol: The left depot interior is very dark and its contents are difficult to resolve; this limits how much detail can be checked. (top-left, weak)

## x-3.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at center, top-right

- gpt-6-sol: Some concrete areas look unusually smooth and blurred, though this could be image compression or the window. (center, weak)
- gpt-6-sol: Details inside the dark bay are indistinct and slightly smeared, making them harder to verify. (top-right, weak)

**track_geometry**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: The rails become difficult to distinguish inside the dark right-hand doorway, leaving their continuation somewhat ambiguous. (top-right, weak)

## x-4.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.02 / 0.01 / 0.01
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 15, raised in 3/9 calls, at bottom-center, whole-image, middle-right

- gemini-3.1-pro-preview: Two central rails emerge from the bottom edge and immediately diverge in opposite directions (one left, one right), rather than remaining parallel to form a usable track. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails do not form parallel pairs with a consistent gauge; they are drawn as independent curved lines that would be physically impossible for a wheeled vehicle to navigate. (whole-image, strong)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge together in a blurry smudge without any physical switch points, blades, or frogs. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner (left) rail of the track curving towards the right building abruptly disappears into the concrete halfway across the yard. (middle-right, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The wooden pallet near the fence lacks a coherent structural grid, and the orange traffic cones next to it are rendered as indistinct, blurry smudges. (center, moderate)
- gemini-3.1-pro-preview: The traffic cones and the wooden pallet near the fence in the background appear somewhat melted and lack sharp, consistent geometry. (center, moderate)

**buildings**: score 4, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The corrugated metal siding on the building facade has irregular, misaligned vertical seams that do not follow a logical architectural structure. (top-center, moderate)
- gemini-3.1-pro-preview: The structural beams above the left garage door blend together strangely, with vertical lines dissolving into the corrugated texture rather than forming distinct structural elements. (top-left, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, center, top-right

- gpt-6-sol: Some distant details are soft and indistinct, which could resemble AI-generated texture but is also consistent with the hazy view. (whole-image, weak)
- gpt-6-sol: The broad concrete area looks comparatively smooth and low in detail. (center, weak)
- gpt-6-sol: Details inside the dark workshop opening are indistinct, making that area harder to assess for structural errors. (top-right, weak)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: There is a complete absence of any switch mechanism, points, or frogs necessary for a single track to split into two separate paths; the outer rails just diverge in opposite directions. (bottom-center, strong)

## y-1.jpg: mean P(AI) 0.09 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.08
- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- google/gemini-3.1-pro-preview: 0.25 / 0.25 / 0.01

**background_clutter**: score 2, raised in 2/9 calls, at middle-left

- gpt-6-sol: Small items and possible figures deep inside the depot are indistinct enough that their shapes cannot be verified. (middle-left, weak)
- gpt-6-sol: Some small objects beside the work bays are indistinct and hard to identify. (middle-left, weak)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image

- gpt-6-sol: The depot and tracks are unusually close to symmetrical around the central column. (whole-image, weak)
- gpt-6-sol: The unusually centered, near-symmetrical view could resemble a generated composition, though the shed itself explains it. (whole-image, weak)

## y-2.jpg: mean P(AI) 0.59 (fails)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.08
- anthropic/claude-opus-5.5: 0.80 / 0.68 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.98

**track_geometry**: score 25, raised in 6/9 calls, at center, middle-left, bottom-center, middle-right, bottom-left, bottom-right

- claude-opus-5.5: The two central inspection-pit lanes inside the shed have no rails leading into them; both visible tracks curve away toward the side bays, leaving the pits disconnected from any track. (center, strong)
- claude-opus-5.5: The left track curves sharply into the side bay doorway, and its rails seem to fade and merge near the floor rather than continuing on a coherent path. (middle-left, moderate)
- claude-opus-5.5: Both foreground tracks curve outward into the side bays. The central inspection-pit lanes appear to have no track feeding into them from the foreground, which is an odd layout. (bottom-center, moderate)
- claude-opus-5.5: The two inspection-pit lanes under the shed start abruptly with no rails leading into them from the foreground; the only foreground tracks curve away to the side bays, which makes no operational sense for a depot. (center, strong)

**overhead_wires_or_poles**: score 12, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: The overhead wires run diagonally from the poles to the roof in a pattern that does not match the track layout below, so they do not form a plausible catenary over the rails. (top-center, moderate)
- claude-opus-5.5: The catenary wires are sparse and ambiguous. They attach to the poles in a simplified way that does not clearly follow the tracks below. (top-center, weak)
- claude-opus-5.5: Overhead wires run diagonally from the poles to the roof corners rather than following the tracks as a working catenary would, and they do not continue over the curving rails. (top-center, moderate)
- gemini-3.1-pro-preview: A thin wire connects from the upper edge to the vertical pole, but there is no corresponding catenary wire continuing into the building to power the trains. (top-left, strong)

**composition_or_staging**: score 11, raised in 7/9 calls, at whole-image, top-center, center

- gpt-6-sol: The two bays and branching tracks look unusually symmetrical, though that is plausible for a depot photographed head-on. (whole-image, weak)
- gpt-6-sol: The roof and two bays are strikingly symmetrical, a pattern that can also occur in generated images. (top-center, weak)
- gpt-6-sol: The nearly symmetrical bays and centrally placed small trolley have a somewhat staged appearance. (center, weak)
- claude-opus-5.5: The scene is almost perfectly mirror-symmetric: bays, poles, windows, tracks and equipment repeat left and right in an idealized way. (whole-image, moderate)

**buildings**: score 6, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The structural beams and trusses in the roof form a chaotic, intersecting mesh that does not create a logical or physically sound support system. (top-center, strong)
- gemini-3.1-pro-preview: The roof structure has beams and skylights that are asymmetrical and merge into each other haphazardly, lacking structural logic. (top-center, strong)

**texture_noise_or_sharpness**: score 5, raised in 4/9 calls, at center, whole-image, middle-left

- gpt-6-sol: The small object between the bays is too indistinct to identify confidently. (center, weak)
- claude-opus-5.5: There is a film-like grain and soft lighting, but the ballast and sleepers are rendered uniformly and look smoothed. (whole-image, weak)
- claude-opus-5.5: The film-like grain and soft, uniform tonality look like a cinematic or generated aesthetic. (whole-image, weak)
- gemini-3.1-pro-preview: The tools, workbenches, and equipment visible inside the left bay are blurry, mushy, and lack the distinct, recognizable forms one would expect in a real photograph. (middle-left, moderate)

## y-3.jpg: mean P(AI) 0.32 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.03
- anthropic/claude-opus-5.5: 0.30 / 0.15 / 0.68
- google/gemini-3.1-pro-preview: 0.65 / 0.05 / 0.95

**buildings**: score 10, raised in 3/9 calls, at top-center, center, top-left

- claude-opus-5.5: Roof trusses and skylight panels show repetitive but slightly irregular, smeared truss members and cross-bracing that don't fully resolve into consistent structure (top-center, moderate)
- gemini-3.1-pro-preview: Roof pillars misaligned with overhead trusses. (center, moderate)
- gemini-3.1-pro-preview: Diagonal bracing in the roof trusses forms physically impossible, chaotic webs of thin lines that fail to connect to main structural nodes. (top-center, strong)
- gemini-3.1-pro-preview: The framing pattern of the skylight panels is highly irregular, with intersecting lines forming nonsensical shapes instead of a standard structural grid. (top-left, strong)

**track_geometry**: score 6, raised in 4/9 calls, at bottom-left, bottom-center, middle-right

- claude-opus-5.5: Left track curves toward an inspection pit, but the rail pair alignment with the pit opening is ambiguous; rails appear to lead between pits rather than cleanly into them (bottom-left, weak)
- claude-opus-5.5: Embedded grooved rails curve smoothly into the shed toward inspection pits; rail curvature looks plausible but tracks lead to pits somewhat oddly, with the curves ending abruptly at pit edges (bottom-center, weak)
- gemini-3.1-pro-preview: Tracks curve away, leaving central pits disconnected. (bottom-center, moderate)
- gemini-3.1-pro-preview: The gauge of the right-hand track appears to narrow unnaturally as it approaches the inspection pit. (middle-right, moderate)

**composition_or_staging**: score 4, raised in 4/9 calls, at whole-image

- gpt-6-sol: The depot is nearly symmetrical, with tracks framing a central aisle. (whole-image, weak)
- claude-opus-5.5: Highly symmetric, empty scene with a cinematic film aesthetic often seen in generated images (whole-image, weak)
- claude-opus-5.5: The scene is a symmetric, empty, cinematic composition, which is common in AI imagery, though also in documentary photography. (whole-image, weak)
- claude-opus-5.5: Perfectly symmetric, empty, cinematic depot with no people or signage text (whole-image, weak)

**background_clutter**: score 3, raised in 2/9 calls, at middle-right, middle-left

- gpt-6-sol: The dark equipment along the wall is indistinct enough that its individual shapes are hard to verify. (middle-right, weak)
- claude-opus-5.5: Workshop equipment, tool carts and cabinets along walls are blobby and indistinct, lacking legible detail or labels (middle-left, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, middle-right

- gpt-6-sol: The distant equipment is soft and low-contrast, making its details difficult to verify. (whole-image, weak)
- gpt-6-sol: Distant equipment is indistinct and difficult to resolve into individual objects. (middle-right, weak)
- claude-opus-5.5: Film-like grain, haze and flare with soft overall rendering, typical of stylized generated 'analog' imagery but also consistent with real film (whole-image, weak)

## y-4.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.01 / 0.05

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The distant track pits and equipment are indistinct, making their exact shapes hard to verify. (center, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Small objects along the distant wall are indistinct, making their shapes hard to verify. (middle-right, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gpt-6-sol: The small equipment near the central column is indistinct and somewhat visually blended. (center, weak)
