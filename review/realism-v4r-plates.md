# Realism check: v4r-plates

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 51 | 6/8 |
| overhead_wires_or_poles | 26 | 4/8 |
| texture_noise_or_sharpness | 19 | 7/8 |
| switch_mechanism | 16 | 1/8 |
| background_clutter | 13 | 4/8 |
| buildings | 5 | 4/8 |
| tools_or_small_objects | 5 | 2/8 |
| composition_or_staging | 5 | 2/8 |
| camera_or_windscreen | 2 | 1/8 |
| lighting_or_shadows | 1 | 1/8 |

## u-1.jpg: mean P(AI) 0.09 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.22 / 0.15 / 0.25
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, middle-right

- gpt-6-sol: Some distant details are indistinct and the image has a soft, slightly smeared appearance. (whole-image, weak)
- gpt-6-sol: Some details around the right-hand arch look unusually soft and indistinct, though the glass haze could explain it. (middle-right, weak)
- claude-opus-5.5: Somewhat soft, compressed texture with mild smoothing on cobbles and roof, possibly video-frame or heavy compression. (whole-image, weak)

**buildings**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The repeated arched windows have a somewhat uniform appearance, though that is also plausible for this building. (top-center, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Shapes inside the dark right entrance are indistinct enough to look slightly irregular, though the glass haze could explain them. (middle-right, weak)

**track_geometry**: score 1, raised in 1/9 calls, at bottom-right

- claude-opus-5.5: Right track pair curves toward the right arch with parallel rails; the two branches diverge with no visible switch connecting them, which is somewhat odd but plausible for a depot fan. (bottom-right, weak)

## u-2.jpg: mean P(AI) 0.09 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.10 / 0.30 / 0.20
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.02

**track_geometry**: score 4, raised in 2/9 calls, at center, bottom-left

- claude-opus-5.5: The four rails diverge oddly: the inner left rail of the left track and the inner right track rails do not form coherent gauge pairs, and the left pair converges and narrows unnaturally toward the depot doors. (center, moderate)
- claude-opus-5.5: The left track's rail pair has inconsistent spacing, and its groove/flangeway rendering looks smeared. (bottom-left, weak)
- claude-opus-5.5: The leftmost pair of rails looks narrowly spaced compared with the right track, which is slightly ambiguous (bottom-left, weak)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-center, whole-image, top-left

- gpt-6-sol: Some distant wall and doorway details are indistinct; this could resemble generated softness, though haze also explains it. (top-center, weak)
- gpt-6-sol: The distant brickwork is hazy and indistinct, an effect that could also occur in an AI-generated image. (whole-image, weak)
- gpt-6-sol: The darkest archway has little discernible detail, which could resemble generated-image softness, though underexposure also explains it. (top-left, weak)

## u-3.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.01 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-left, middle-left

- gpt-6-sol: Details inside the left arch are unusually indistinct, though the darkness could explain this. (top-left, weak)
- gpt-6-sol: The distant left arch is hazy and its details are hard to resolve, a weak possible AI cue. (top-left, weak)
- gpt-6-sol: Objects inside the dark left arch are indistinct and slightly smeared; this could suggest generation, though low light also explains it. (middle-left, weak)

## u-4.jpg: mean P(AI) 0.06 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.05 / 0.05 / 0.05

**buildings**: score 2, raised in 2/9 calls, at top-center, middle-right

- gpt-6-sol: Some distant roof and brickwork details are indistinct, making their precise structure hard to verify. (top-center, weak)
- gpt-6-sol: Some recessed brick arches look quite repetitive, though that is also normal for this building. (middle-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The scene has a uniformly hazy, low-contrast appearance that could also occur in a generated image. (whole-image, weak)

## w-1.jpg: mean P(AI) 0.33 (passes)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.10 / 0.68
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.01

**overhead_wires_or_poles**: score 10, raised in 3/9 calls, at top-right, top-left

- claude-opus-5.5: Catenary wires attach to poles illogically, ending abruptly or dangling, and do not run along the tracks into the sheds. (top-right, moderate)
- gemini-3.1-pro-preview: The horizontal wire connecting to the pole on the far left appears to fade out and disappear as it extends towards the center, rather than connecting continuously. (top-left, strong)
- gemini-3.1-pro-preview: A thin wire extending horizontally to the right from the pole simply vanishes into the sky without connecting to any structure. (top-right, strong)
- gemini-3.1-pro-preview: The thin diagonal wire coming from the top left edge ends vaguely near the vertical pole without a coherent mechanical connection or insulator. (top-left, moderate)

**track_geometry**: score 9, raised in 5/9 calls, at bottom-right, bottom-center, bottom-left

- gpt-6-sol: The bright sleepers look notably repetitive at a glance, though that is normal for track construction. (bottom-right, weak)
- claude-opus-5.5: Two tracks diverge from the camera position toward separate shed doors, and both start abruptly at the bottom edge with no visible common switch or connecting track. The layout is unusually symmetric, but it could simply be the cropped ends of two separate sidings. (bottom-center, weak)
- claude-opus-5.5: Left track's sleepers sit unevenly and inconsistently relative to the rails; rails curve and diverge with a confusing near-mirror symmetry to the right track rather than forming a coherent turnout from one line. (bottom-left, moderate)
- gemini-3.1-pro-preview: The rail ties (sleepers) and the fastening mechanisms connecting them to the rails lack realistic depth and detail, appearing somewhat flat and uniform. (bottom-right, moderate)

**background_clutter**: score 7, raised in 3/9 calls, at center, middle-right

- gpt-6-sol: The small pile of pipes or similar materials is difficult to distinguish individually. (center, weak)
- gpt-6-sol: The small pile of cylindrical items in front of the building is hard to resolve and has somewhat muddled outlines. (center, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects in front of the building lacks clear definition, appearing smooth, bulbous, and merged together like typical AI rendering artifacts rather than distinct physical items like pipes or logs. (center, strong)
- gemini-3.1-pro-preview: The fence structure separating the track area from the building is very faint and appears to dissolve into indistinct noise rather than maintaining a consistent wire mesh pattern. (middle-right, moderate)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: The pile of pipes and the portable toilet look plausible, but the pipe ends are blobby and lack clean detail. (center, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects (resembling pipes or logs) in front of the building are fused together into a single amorphous mass, lacking distinct edges or separation. (center, strong)

**composition_or_staging**: score 2, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Strongly symmetrical composition, with two tracks curving away from each other into two identical open shed doors at either end of the building, which looks staged. (whole-image, moderate)

## w-2.jpg: mean P(AI) 0.61 (fails)

- anthropic/claude-opus-5.5: 0.78 / 0.90 / 0.75
- openai/gpt-6-sol: 0.07 / 0.04 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 30, raised in 8/9 calls, at center, bottom-center, middle-left

- claude-opus-5.5: Each branch keeps its own full set of sleepers right down to the convergence point, and the sleepers interleave and overlap in the V instead of forming the shared long timbers a turnout uses. (center, moderate)
- claude-opus-5.5: Each branch keeps its own full set of sleepers, and the two sets overlap and interleave near the bottom instead of forming a shared set of long turnout timbers. (bottom-center, strong)
- claude-opus-5.5: The left branch's outer rail curves sharply outward while its gauge appears to change along its length, which is inconsistent with real rail curvature. (center, moderate)
- claude-opus-5.5: The two branches never become a single track. They stay as two full-width tracks sharing a middle rail, and their sleepers run into each other in the V area, which is not a plausible turnout layout. (center, moderate)

**switch_mechanism**: score 16, raised in 6/9 calls, at bottom-center

- claude-opus-5.5: The inner rails of the two branches simply converge into a V and appear to fuse at the bottom center. There are no switch blades, no frog, no check rails and no point machine, so this is not a functional turnout. (bottom-center, strong)
- claude-opus-5.5: The two tracks split from one track, but there are no switch points, no frog, and no guard rails. The inner rails simply converge into a V and merge, which a working turnout cannot do. (bottom-center, strong)
- claude-opus-5.5: The inner rails of the two branches simply merge into one rail at the bottom center, with no switch blades, frog, guard rails or point machine — a junction that could not route a vehicle. (bottom-center, strong)
- gpt-6-sol: The closely spaced inner rails meet near the bottom edge, where the precise junction is hard to make out. (bottom-center, weak)

**overhead_wires_or_poles**: score 11, raised in 6/9 calls, at top-center

- claude-opus-5.5: Several tall masts stand without clear catenary, cantilevers or registration arms; only faint, indistinct wire traces are visible. (top-center, moderate)
- claude-opus-5.5: The catenary poles stand between and beside the tracks, but the overhead wiring is faint and incoherent, with no clear contact wires running above each track. (top-center, moderate)
- claude-opus-5.5: Several catenary poles stand in the open gravel area between the tracks, and the overhead wiring above them is faint and does not clearly follow the tracks. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wires connect to the poles haphazardly, with some wires appearing to end abruptly in mid-air or float without tension. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image, bottom-left

- claude-opus-5.5: The ballast and dirt textures are fairly uniform and smooth, with a slightly soft, synthetic look. (whole-image, weak)
- gemini-3.1-pro-preview: The ballast (gravel) beneath the tracks has a repetitive, slightly blurred texture that lacks the sharp definition of real individual stones. (bottom-left, weak)
- gemini-3.1-pro-preview: The white rectangular markings on the railway ties are inconsistently applied, with some ties having crisp markings, others partial, and some none, in a haphazard rather than weathered pattern. (bottom-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical objects (likely pipes) between the two tracks appear squished and melted into one another. (center, moderate)

## w-3.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.07 / 0.06 / 0.06
- openai/gpt-6-sol: 0.08 / 0.06 / 0.05
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**tools_or_small_objects**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The small cylindrical materials near the warehouse have irregular, somewhat hard-to-resolve openings. (top-center, weak)

**overhead_wires_or_poles**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: Some thin overhead lines and their connections are difficult to follow against the warehouse facade. (top-right, weak)

**buildings**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The repeated roll-up doors and window bays look somewhat uniform, though their structure remains coherent. (top-center, weak)

**track_geometry**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The right branch curves toward a closed-looking part of the building rather than an obvious open bay; the track's destination is unclear. (middle-right, weak)

## w-4.jpg: mean P(AI) 0.25 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.72 / 0.20 / 0.30
- google/gemini-3.1-pro-preview: 0.02 / 0.90 / 0.02

**track_geometry**: score 6, raised in 2/9 calls, at center, bottom-center

- claude-opus-5.5: Two separate tracks diverge with no switch, frog, or connection between them; the left track curves left and the right track has no physical link to it, which is implausible for a single track the camera is on (center, moderate)
- claude-opus-5.5: The camera vehicle appears to sit on neither track, centered over the gravel between the two branches (bottom-center, moderate)
- claude-opus-5.5: Two separate tracks diverge left and right but neither connects to a common origin or switch near the camera; the tracks appear disconnected at the bottom, an odd layout for a depot exit (center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at bottom-right, middle-right

- gpt-6-sol: The pale sleepers look somewhat repetitive and uniform, though this is plausible for a maintained track. (bottom-right, weak)
- gemini-3.1-pro-preview: The horizontal corrugation lines on the closed roller door become wavy, distorted, and merge together in the upper right section of the door. (middle-right, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- claude-opus-5.5: Catenary wires are sparse and disconnected; the cantilever arms don't clearly suspend contact wires over the tracks (top-center, weak)
- gemini-3.1-pro-preview: A thin overhead wire slanting down from the left simply disappears into the blue sky before connecting to another wire or pole. (top-center, strong)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, center

- gpt-6-sol: The distant pipes and equipment are indistinct; that lack of detail could conceal generated artifacts, though distance and the dirty windscreen also explain it. (top-center, weak)
- gemini-3.1-pro-preview: The stack of concrete pipes in the distance appears as a slightly melted, indistinct blob of circles rather than sharply defined physical cylinders. (center, moderate)

**composition_or_staging**: score 3, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Perfectly symmetric split-track staging typical of generated trolley-problem scenes (whole-image, moderate)
- claude-opus-5.5: The perfectly symmetric split of the two tracks is somewhat staged-looking, though it is plausible for a depot entrance (whole-image, weak)
