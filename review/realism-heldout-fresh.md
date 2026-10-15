# Realism check: heldout-fresh

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 158 | 18/22 |
| people_anatomy | 110 | 15/22 |
| overhead_wires_or_poles | 77 | 15/22 |
| texture_noise_or_sharpness | 39 | 17/22 |
| vehicles | 38 | 11/22 |
| tools_or_small_objects | 37 | 13/22 |
| people_pose_or_placement | 27 | 10/22 |
| switch_mechanism | 23 | 5/22 |
| background_clutter | 18 | 6/22 |
| buildings | 16 | 7/22 |
| text_signage_or_markings | 13 | 6/22 |
| composition_or_staging | 10 | 6/22 |
| people_clothing_or_gear | 5 | 3/22 |
| camera_or_windscreen | 4 | 3/22 |
| reflections_or_wet_surfaces | 1 | 1/22 |

## sd-s-3.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.02

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-right, top-right

- gpt-6-sol: The interior of the right shed is very dark and indistinct, making its contents difficult to verify. (middle-right, weak)
- gpt-6-sol: The very dark shed interior obscures object details, making that area difficult to verify. (top-right, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Objects inside the right-hand shed are hard to identify; that ambiguity could suggest generated detail, though the dark doorway readily explains it. (middle-right, weak)

## sd-s-group-L-1.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.04
- anthropic/claude-opus-5.5: 0.20 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.99

**people_anatomy**: score 13, raised in 3/9 calls, at middle-left, middle-right, bottom-left, bottom-right

- gpt-6-sol: The left-track workers' hands and overlapping legs are hard to distinguish clearly. (middle-left, weak)
- gemini-3.1-pro-preview: The three workers are severely deformed; the person in the orange jacket has no visible head, and the limbs of the others are melted into each other and the ground. (middle-left, strong)
- gemini-3.1-pro-preview: The worker on the right track is an amorphous blob of high-visibility clothing without distinct arms, legs, or a clearly defined head. (middle-right, strong)
- gemini-3.1-pro-preview: The hands and limbs of the three workers are poorly defined, blending into each other and the ground. (bottom-left, strong)

**tools_or_small_objects**: score 7, raised in 5/9 calls, at middle-right, middle-left, bottom-left

- gpt-6-sol: The small object beside the worker on the right track is indistinct and difficult to identify. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small items at rail level are difficult to distinguish, leaving some local shapes ambiguous. (middle-left, weak)
- gpt-6-sol: The small items beside the lone worker are hard to resolve individually. (middle-right, weak)
- gemini-3.1-pro-preview: The tools and objects scattered around the workers on the left track are unidentifiable, melting blobs rather than distinct objects. (middle-left, moderate)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: An overhead wire extending to the left from the central pole abruptly ends in the sky without connecting to anything. (top-center, moderate)
- gemini-3.1-pro-preview: Overhead wires appear disjointed, branch off illogically, and fade into the sky without connecting to anything. (top-center, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of wooden pallets consists of warped, intersecting shapes that do not form structurally sound individual pallets. (center, strong)
- gemini-3.1-pro-preview: The stack of pallets near the center appears melted and fused together rather than distinct wooden structures. (center, weak)

**track_geometry**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The rails of the left track seem to become uneven and lose their defined structure as they enter the dark building. (middle-left, moderate)

## sd-s-group-R-2.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.15 / 0.20 / 0.15
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.99

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, center, bottom-right

- gemini-3.1-pro-preview: The rail section being worked on by the group of three people does not pair with another rail to form a track of consistent gauge; it appears to head straight into the dead space between the two buildings rather than entering either doorway. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the left track appears to fade away into the concrete just behind the leftmost worker, failing to connect smoothly with the rails visible inside the left building. (center, strong)
- gemini-3.1-pro-preview: The inner rail of the right track bends at an unnatural angle and seems to merge or disappear completely under the hands of the group of three workers. (bottom-right, strong)

**people_anatomy**: score 9, raised in 2/9 calls, at bottom-right, middle-right

- gemini-3.1-pro-preview: The hands of the worker in the orange vest and the worker on the far right are indistinct and appear fused with the tool they are holding, forming a muddy, undefined blob. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands of the worker on the far right and the worker in the orange vest are poorly defined and appear to melt into the tool they are holding and the track itself. (bottom-right, strong)
- gemini-3.1-pro-preview: The left arm of the worker in the orange vest seems to vanish or merge into the back of the worker in the yellow vest kneeling in front of him. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at middle-right, bottom-right

- gpt-6-sol: The workers' hands and small equipment at the right-hand rail are difficult to distinguish and appear crowded together. (middle-right, weak)
- gpt-6-sol: The workers’ hands and small items at the rail are indistinct, making their exact interaction hard to verify. (bottom-right, weak)
- gemini-3.1-pro-preview: The tool being held by the workers on the right track is a shapeless metal bar that does not resemble a functional railway tool and blends seamlessly into the track. (bottom-right, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The thin lines representing overhead wires are faint, disjointed, and do not connect logically to each other or the supporting poles in a continuous network. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are thin, faint, and some appear to terminate abruptly in mid-air or do not connect logically to the supporting structures. (top-center, moderate)

**people_pose_or_placement**: score 3, raised in 2/9 calls, at bottom-right

- gpt-6-sol: Three workers cluster around the right-hand rail; their overlapping arms and tools make the exact hand positions hard to distinguish. (bottom-right, weak)
- gemini-3.1-pro-preview: The visible profile of the face of the worker in the orange vest is heavily distorted, smeared, and lacks recognizable human features. (bottom-right, moderate)

## sd-s-two-L-2.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.08 / 0.06
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.01

**people_anatomy**: score 1, raised in 1/9 calls, at bottom-center

- gpt-6-sol: The workers' hands and the object between them are hard to distinguish at this resolution, leaving a small possibility of generated detail. (bottom-center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at bottom-center

- gpt-6-sol: The workers’ hands and the small object between them are hard to distinguish, leaving that interaction visually ambiguous. (bottom-center, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at bottom-center

- gpt-6-sol: The workers’ hands and the small object between the rails are difficult to distinguish clearly; that ambiguity could conceal a generated detail, though the image resolution also explains it. (bottom-center, weak)

## sd-s-two-R-1.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**people_anatomy**: score 2, raised in 2/9 calls, at bottom-right

- gpt-6-sol: The workers' hands and lower bodies are partly obscured, making their exact positions difficult to verify. (bottom-right, weak)
- gpt-6-sol: The workers’ hands and the area where they meet the rails are too small and partly obscured to check their exact shapes. (bottom-right, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: Equipment inside the right shed is indistinct in the darkness, making those details difficult to verify. (top-right, weak)

## sd-t-4.jpg: mean P(AI) 0.05 (passes)

- openai/gpt-6-sol: 0.04 / 0.02 / 0.04
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-right, middle-right

- gpt-6-sol: The right depot doorway and its interior are unusually indistinct, though glare and deep shade could explain this. (top-right, weak)
- gpt-6-sol: Details inside the right-hand shed are indistinct and somewhat blotchy, though the dark interior and glare could explain this. (middle-right, weak)
- gpt-6-sol: Haze and low contrast obscure details inside the right depot doorway, a softness that could also occur in a generated image. (top-right, weak)

## sd-t-group-L-2.jpg: mean P(AI) 0.29 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.30
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.95

**track_geometry**: score 13, raised in 3/9 calls, at center, bottom-center, middle-right, middle-left

- claude-opus-5.5: Left track rails converge oddly; the left rail of the left track runs toward the workers while the right rail curves differently, and the rails don't form a consistent gauge pair with a clear switch connection (center, moderate)
- gemini-3.1-pro-preview: The right-hand rail of the left track splits into confusing, multiple parallel grooves or lines towards the bottom of the frame, rather than maintaining a consistent tram rail profile. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the right track abruptly disappears and fades into the concrete surface just past the kneeling worker, losing its groove entirely. (middle-right, strong)
- gemini-3.1-pro-preview: The inner rail of the left track under the group of workers appears to lack a continuous groove for a tram wheel and seems to melt into the solid concrete just behind them. (middle-left, strong)

**people_anatomy**: score 10, raised in 4/9 calls, at center, middle-right, middle-left

- gpt-6-sol: The overlapping hands and gear of the left-branch workers are difficult to distinguish cleanly. (center, weak)
- gpt-6-sol: The crouching workers’ hands and tools are difficult to distinguish, leaving some details that could be mistaken for generated artifacts. (center, weak)
- gemini-3.1-pro-preview: The middle worker in the orange vest on the left track lacks a discernible lower body, with his torso blending directly into a dark, formless shadow beneath him. (center, strong)
- gemini-3.1-pro-preview: The lower half of the single kneeling worker on the right track blends seamlessly into the rail and ground, lacking clearly defined legs, feet, or boots. (middle-right, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at middle-right, middle-left

- gpt-6-sol: The tool or equipment beside the worker on the right is hard to distinguish clearly. (middle-right, weak)
- gemini-3.1-pro-preview: The tools or bags resting on the ground near the group of three workers lack defined edges and look somewhat like indistinct blobs, which can occasionally be an artifact of AI generation (though here likely due to resolution and compression). (middle-left, weak)
- gemini-3.1-pro-preview: The tools being used by the group of three workers on the left are indistinct, structureless dark blobs lacking any mechanical detail. (middle-left, strong)

**people_pose_or_placement**: score 4, raised in 2/9 calls, at center

- claude-opus-5.5: Three workers kneeling clustered on the left track with tool bags; poses plausible but figures are somewhat soft and generic (center, weak)
- gemini-3.1-pro-preview: The worker in the yellow jacket on the right side of the left group has an indistinct head, and his right arm melts ambiguously into the ground and the bag next to him. (center, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The wooden pallets and cable spool in the background are vaguely rendered, appearing slightly melted together without crisp geometric edges. (center, moderate)
- gemini-3.1-pro-preview: The stacked objects in the background, which resemble pallets or construction materials, are rendered as blurry, formless blocks without the expected structural lines of real wooden pallets. (center, moderate)

## sd-t-group-R-3.jpg: mean P(AI) 0.17 (passes)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.02
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.05

**track_geometry**: score 6, raised in 1/9 calls, at center, middle-right

- gemini-3.1-pro-preview: The track junction lacks movable switch blades (points) and a crossing (frog). The inner rails of the diverging branches simply originate from a central 'V' shape without connecting to the rails coming from the bottom of the frame, making the switch physically impossible for flanged wheels to navigate. (center, strong)
- gemini-3.1-pro-preview: Beneath the group of three workers, the two rails of the track converge to an impossibly narrow gauge that does not match the width of the track entering the depot door in the background. (middle-right, strong)

**people_anatomy**: score 4, raised in 3/9 calls, at middle-right

- gpt-6-sol: The kneeling workers' hands and legs are difficult to distinguish where they overlap the rails. (middle-right, weak)
- gpt-6-sol: The kneeling workers' hands and legs are difficult to distinguish where they overlap. (middle-right, weak)
- gemini-3.1-pro-preview: The worker in the orange jacket on the right side has poorly defined limbs, particularly his arms and lower body, which seem to merge ambiguously with the ground and rails. (middle-right, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-right

- gpt-6-sol: Details inside the workshop doorway are unusually indistinct, though the glare could explain this. (top-right, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers' hands and small objects where they meet the rail are hard to distinguish. (middle-right, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Somewhat stock-like staging of workers kneeling at the rails, but plausible as a commissioned shoot (whole-image, weak)

## sd-t-two-L-3.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.02

**people_anatomy**: score 6, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The workers lack distinct hands and facial features; their heads appear to meld directly into their poorly shaped hard hats. (center, strong)
- gemini-3.1-pro-preview: The lower half of the worker in the yellow jacket is an amorphous blob lacking defined legs or feet, merging seamlessly into the dark tool bag beside him. (center, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead catenary wires fade out inexplicably into the sky and do not connect properly. (top-center, strong)
- gemini-3.1-pro-preview: Despite the presence of tall, sturdy poles designed for an overhead line system typical of a tram or train depot, there are no visible catenary wires connecting them. (top-center, moderate)

**track_geometry**: score 5, raised in 2/9 calls, at bottom-center, center

- gemini-3.1-pro-preview: The grooves in the tram rails appear and disappear inconsistently, and the rails themselves look slightly wobbly. (bottom-center, moderate)
- gemini-3.1-pro-preview: A bizarre piece of rail extends horizontally between the two workers, intersecting the inner curved rail at a right angle and ending near the left worker's hand, which is nonsensical for real track infrastructure. (center, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center

- gpt-6-sol: The workers' hands and the small items beside them are hard to distinguish clearly. (center, weak)
- gemini-3.1-pro-preview: The tools and bags resting on the ground next to the workers are formless, indistinct blobs that lack structural details. (center, strong)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The hands of the worker in the orange jacket disappear completely into the rail he is touching, with no distinct fingers, gloves, or tools visible. (center, strong)

## sd-t-two-R-3.jpg: mean P(AI) 0.06 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.04
- anthropic/claude-opus-5.5: 0.12 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.10 / 0.05 / 0.01

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The dark equipment and hands near the workers' knees are hard to distinguish precisely. (middle-right, weak)
- gpt-6-sol: The dark equipment between the workers and the rail is visually indistinct. (middle-right, weak)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-right, top-right

- gpt-6-sol: The workers’ hands and small equipment are indistinct, making their exact interaction with the rail hard to resolve. (middle-right, weak)
- gpt-6-sol: Haze and low detail around the distant depot entrance make some objects difficult to verify. (top-right, weak)

**track_geometry**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The left track enters a building but appears to curve sharply inside or fade out in an unnatural way. (middle-left, moderate)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: The image has a stock-footage feel with a slightly staged look of workers at the rail, but nothing about it is implausible (whole-image, weak)

## v2-c-empty-L.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.01 / 0.99

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at top-center, whole-image

- gpt-6-sol: Distant objects are hazy and difficult to distinguish, a softness that could also occur in generated imagery. (top-center, weak)
- gpt-6-sol: Some distant equipment and structures are indistinct enough that small rendering errors would be hard to assess. (top-center, weak)
- gemini-3.1-pro-preview: Upon closer inspection, many textures (like the ground and distant building walls) have a smudged, painterly quality typical of AI generation rather than photographic noise. (whole-image, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The tightly overlapping rails at the nearest part of the junction are difficult to trace individually. (bottom-center, weak)
- gemini-3.1-pro-preview: The point where the tracks split lacks a functional switch mechanism or a proper crossing (frog) with flangeways; the inner rails simply merge into a solid, physically impossible shape that would block train wheels. (bottom-center, strong)

**vehicles**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The white van has distorted geometry, uneven panel lines, and lacks coherent details like realistic taillights or door handles. (middle-right, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: An overhead wire appears to connect directly into the side of the building's roof in a nonsensical manner for a catenary system. (top-left, moderate)

**buildings**: score 1, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The yellow and black hazard stripes on the entrance frame of the left shed are painted unevenly and look smudged or irregular. (middle-left, weak)

## v2-c-empty-R.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.02

**track_geometry**: score 9, raised in 5/9 calls, at bottom-center, center

- gpt-6-sol: The rails converge through a complex junction; the exact crossing is hard to distinguish at the lower edge. (bottom-center, weak)
- gpt-6-sol: The rails overlap in a visually complicated crossing that is difficult to trace at a glance. (bottom-center, weak)
- gpt-6-sol: The rails at the nearest crossing are visually crowded, making their exact arrangement hard to follow. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a solid point without any gaps for wheel flanges to pass, and lack any visible switch mechanism, making it physically impossible for trains to use. (bottom-center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead electrical wires attached to the central pole are faint, structurally incoherent, and appear to terminate mid-air rather than forming a continuous catenary system. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires appear disconnected in places, fade into the cloudy sky, and lack logical supporting tension structures. (top-center, moderate)

**vehicles**: score 4, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The white van exhibits distorted rear panel lines, and its license plate is merely a smudged yellow rectangle without legible characters. (middle-left, moderate)
- gemini-3.1-pro-preview: The white van has smudged details, lacks clear door panel gaps or handles, and the license plate area is an indistinct blur. (middle-left, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The track switch lacks movable point blades and a distinct frog; instead, the grooves simply merge into a physically impossible star-like shape in the concrete. (bottom-center, strong)

**buildings**: score 2, raised in 2/9 calls, at top-right, middle-right

- gpt-6-sol: The dark shed interior has little visible detail beyond a row of lights. (top-right, weak)
- gemini-3.1-pro-preview: The yellow and black hazard stripes on the entrance pillars of the shed are uneven and poorly defined. (middle-right, weak)

## v2-c-group-L.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.40 / 0.18 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 10, raised in 3/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The lower body and legs of the worker furthest to the left seem to melt and blend indistinctly into the wet ground and rail. (middle-left, moderate)
- gemini-3.1-pro-preview: The lower body of the worker kneeling on the right track lacks definition, merging indistinctly into the wet ground and the rails, making it look as though the rails disappear underneath him. (middle-right, strong)
- gemini-3.1-pro-preview: The lower body of the worker on the right track dissolves into a dark, formless blob that blends directly into the rail, lacking distinct legs or feet. (middle-right, strong)
- gemini-3.1-pro-preview: The leftmost worker appears to be partially sunken into the wet concrete, with his lower legs and knees lacking definition and melting into the ground. (middle-left, moderate)

**overhead_wires_or_poles**: score 9, raised in 4/9 calls, at top-center, top-right

- claude-opus-5.5: Overhead wires sparse and loosely connected to poles; wire paths are somewhat random rather than following tracks as tram catenary would. (top-center, moderate)
- gemini-3.1-pro-preview: An overhead line above the right-hand track fades out and terminates abruptly in the sky without connecting to a support structure. (top-right, moderate)
- gemini-3.1-pro-preview: One of the thin overhead wires traversing the sky abruptly ends in mid-air without connecting to any pole or building. (top-right, strong)
- gemini-3.1-pro-preview: Several overhead electrical wires appear disjointed, crossing haphazardly or terminating abruptly in mid-air without attaching to any supporting structure. (top-center, moderate)

**track_geometry**: score 8, raised in 3/9 calls, at center, middle-right, bottom-center

- claude-opus-5.5: Track layout is odd: the central diverging rails converge into a single frog in the foreground, but the outer left and right rails don't form coherent paired gauges with the center rails; left track rails appear widely spaced and the right branch outer rail runs separately — geometry is plausible-ish but somewhat inconsistent. (center, moderate)
- gemini-3.1-pro-preview: The two rails of the track leading into the right building appear to converge and merge into a single line just before entering the structure, which is mechanically impossible. (middle-right, strong)
- gemini-3.1-pro-preview: The intersection where the two inner rails cross forms a solid 'X' shape without the necessary gaps (flangeways) or a frog mechanism that would allow train wheels to pass. (bottom-center, strong)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The point where the tracks diverge lacks realistic switch mechanics (like points, blades, or tie bars) and instead looks like a softly blended 'Y' shape molded into the concrete. (bottom-center, strong)
- gemini-3.1-pro-preview: The point where the two sets of tracks diverge is mechanically nonsensical; the rails simply melt into a blurred X-shape rather than having functional switch points, a frog, and check rails. (bottom-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 4/9 calls, at middle-left, center, whole-image

- gpt-6-sol: Small details around the workers' hands and tools are indistinct and slightly smeared. (middle-left, weak)
- gpt-6-sol: Small tools and distant details are indistinct; that softness could conceal generated artifacts, though it is also consistent with rain and viewing through glass. (center, weak)
- claude-opus-5.5: Overall soft, slightly smeared texture with compression-like blur consistent with upscaled or generated imagery; vans and background objects lack fine detail. (whole-image, weak)
- claude-opus-5.5: Heavy compression and posterization flatten fine detail, which makes close inspection harder. (whole-image, weak)

## v2-c-group-R.jpg: mean P(AI) 0.50 (fails)

- openai/gpt-6-sol: 0.02 / 0.04 / 0.02
- anthropic/claude-opus-5.5: 0.85 / 0.80 / 0.78
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**track_geometry**: score 16, raised in 6/9 calls, at bottom-center, center

- gpt-6-sol: Several rails bunch together near the foreground junction, making their exact paths hard to distinguish. (bottom-center, weak)
- claude-opus-5.5: The two inner rails of the left and right tracks merge into a single V at the bottom center with no frog, check rails or point blades, so two tracks appear to share one rail. A real turnout cannot work this way. (bottom-center, strong)
- claude-opus-5.5: Two outer rails sit very far apart, with a single V-shaped rail pair meeting in the middle. This forms two tracks that share a center rail, with no switch blades, check rails or second frog. It is not a functional turnout layout. (bottom-center, strong)
- claude-opus-5.5: The two inner rails converge into a single V-shaped merge at the bottom center with no switch blades, guard rails, or continuing track. The left and right tracks then run as two full-gauge tracks side by side, which is not a coherent turnout layout. (center, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at middle-right, whole-image

- gpt-6-sol: The workers' hands and nearby small objects are indistinct; this could suggest generated detail, though their distance and the wet conditions also explain it. (middle-right, weak)
- claude-opus-5.5: Smeared, painterly textures appear on the wet concrete, the gravel and the distant buildings. Fine details such as the shed interiors and the van are mushy. (whole-image, moderate)
- claude-opus-5.5: The image has an overall smooth, painterly texture. Distant buildings and trees are mushy, and concrete slab seams have soft, inconsistent detail. (whole-image, moderate)
- claude-opus-5.5: There is an overall smoothed, slightly painterly texture, and the background details (fence, trees, distant buildings) are mushy. (whole-image, moderate)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-center

- claude-opus-5.5: The overhead wires sag and terminate inconsistently, with odd junctions near the poles. There is no coherent tram catenary over the tracks. (top-center, moderate)
- claude-opus-5.5: The overhead wires are sparse and do not clearly follow the tracks into the sheds. The catenary arrangement looks incomplete. (top-center, weak)
- gemini-3.1-pro-preview: The overhead contact wires appear to fade in and out of existence and do not connect logically to the supporting structures. (top-center, weak)
- gemini-3.1-pro-preview: The overhead electrical cables are chaotic and nonsensical; thin lines intersect aimlessly, some hang loose without tension, and they do not form a coherent power delivery system. (top-center, strong)

**people_anatomy**: score 7, raised in 3/9 calls, at middle-right, middle-left

- claude-opus-5.5: The kneeling workers are soft, blob-like figures with indistinct hands and tools. Their limbs merge into their bodies. (middle-right, moderate)
- gemini-3.1-pro-preview: The workers on the right track appear as misshapen blobs; the middle worker is missing a clear head, and the rightmost worker has an unnatural posture with poorly defined legs. (middle-right, strong)
- gemini-3.1-pro-preview: The worker kneeling on the left track has legs and feet that form an indistinct, melded dark mass, blending unnaturally into the ground. (middle-left, moderate)

**switch_mechanism**: score 6, raised in 3/9 calls, at center

- claude-opus-5.5: There is no visible switch mechanism, tongue rails, point motor or drainage box where the tracks diverge. The rails simply curve apart across the concrete. (center, moderate)
- claude-opus-5.5: There is no visible point blade, tie bar or switch motor where the tracks diverge, even though this is supposedly an active depot junction. (center, moderate)
- claude-opus-5.5: There is no visible point mechanism, tie bars, or proper frog casting at the junction, only a smeared joint where the rails meet. (center, moderate)

## v2-c-two-L.jpg: mean P(AI) 0.47 (fails)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.70 / 0.15 / 0.30
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.98

**track_geometry**: score 15, raised in 3/9 calls, at bottom-center, middle-right, middle-left

- claude-opus-5.5: The two inner rails converge into a single V-shaped rail at the bottom center while the outer rails stay far apart. That leaves three rails with no switch blades, check rails, or a proper frog, so the layout cannot work as a real turnout. (bottom-center, strong)
- gemini-3.1-pro-preview: At the bottom center where the inner rails of the two tracks intersect, they form a solid 'X' with continuous, overlapping rail grooves, completely lacking the necessary gaps (flangeways) in the metal for a train wheel to actually pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: Following the right-hand track towards the right building, its outer (right) rail fades into the concrete and disappears completely before entering the doorway, leaving only a single inner rail continuing inside. (middle-right, strong)
- gemini-3.1-pro-preview: The diverging tracks lack a functional switch mechanism (points, frog); the inner rails simply form a messy, blurry 'X' shape that a train could not navigate. (bottom-center, strong)

**overhead_wires_or_poles**: score 7, raised in 4/9 calls, at top-center, top-right

- claude-opus-5.5: The overhead wires are sparse and do not clearly follow both track branches into the sheds. (top-center, weak)
- gemini-3.1-pro-preview: The overhead electrical wires are faint, disjointed, and do not connect logically to the supporting infrastructure or the sheds. (top-center, moderate)
- gemini-3.1-pro-preview: In the sky above the right building, a dark overhead wire descends from the top edge but simply ends abruptly in mid-air without attaching to any structure or pole. (top-right, strong)
- gemini-3.1-pro-preview: The overhead wires are very faint, wispy, and do not appear to connect logically to the supporting infrastructure. (top-center, weak)

**switch_mechanism**: score 6, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: There are no visible point blades, switch rods, or point mechanism anywhere along the diverging section, which is unusual for a tram depot junction. (center, moderate)
- claude-opus-5.5: No switch blades or point mechanism are visible near the frog. This is plausibly just out of frame below the windscreen, but it is slightly ambiguous. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the converging tracks intersect as solid lines without a functional frog mechanism or flange gaps, making it physically impossible for a train wheel to pass through the crossing. (bottom-center, strong)

**people_anatomy**: score 6, raised in 3/9 calls, at middle-left

- gemini-3.1-pro-preview: The lower body of the worker on the right is malformed, with the legs appearing as indistinct shapes that melt into the wet ground. (middle-left, moderate)
- gemini-3.1-pro-preview: The hands and lower arms of both workers kneeling on the left track are completely undefined and appear to melt seamlessly into the rails and wet concrete. (middle-left, moderate)
- gemini-3.1-pro-preview: The legs of the kneeling workers appear indistinct and seem to meld directly into the wet concrete ground. (middle-left, moderate)

**vehicles**: score 4, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The white van parked on the right lacks basic details like door seams or handles on its side, and its rear-right wheel area blends indistinctly into the ground. (middle-right, moderate)
- gemini-3.1-pro-preview: The white van parked near the right building has distorted, misshapen rear wheels and a slightly warped overall structure. (middle-right, moderate)

## v2-c-two-R.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.15
- google/gemini-3.1-pro-preview: 0.95 / 0.99 / 0.99

**people_anatomy**: score 11, raised in 4/9 calls, at middle-right, center

- gpt-6-sol: The two workers’ hands and tools are indistinct, making those details difficult to verify. (middle-right, weak)
- gemini-3.1-pro-preview: The kneeling worker on the left (closest to the center) appears to have no lower legs or feet; his body just blends or melts into the wet ground below the knees. (middle-right, strong)
- gemini-3.1-pro-preview: The hands or tools of the worker on the right are indistinct, appearing as malformed, metallic-looking blobs rather than defined hands holding specific tools. (middle-right, moderate)
- gemini-3.1-pro-preview: The worker kneeling on the left side of the right track has an undefined, blurry lower body that morphs indistinguishably into the wet concrete. (center, strong)

**track_geometry**: score 10, raised in 4/9 calls, at bottom-center

- gpt-6-sol: The closely overlapping rails at the junction are somewhat hard to trace visually, though they may simply be switchwork. (bottom-center, weak)
- gemini-3.1-pro-preview: The track junction is physically impossible; the rails merge into a solid 'Y' shape without any movable points, blades, or a frog mechanism required for a real railway switch. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge into a single line extending straight down the center of the lower track, which is a physically impossible configuration for a functional railway switch. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction lacks a physical switch mechanism; the inner rails merge into a solid V-shape that would be impossible for train wheel flanges to navigate. (bottom-center, strong)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-center, top-right

- gemini-3.1-pro-preview: The overhead wires appear disjointed and do not connect logically to the supporting structures or follow realistic catenary curves. (top-center, moderate)
- gemini-3.1-pro-preview: An overhead wire passes directly above the horizontal arm of the central support pole without actually attaching to or being supported by the structure. (top-center, moderate)
- gemini-3.1-pro-preview: Overhead wires in the sky intersect randomly and terminate abruptly in mid-air or at the building roofline without logical attachment points. (top-right, strong)

**vehicles**: score 4, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The white van parked beside the right building lacks clear rear wheels or wheel wells, appearing to melt directly into the pavement. (middle-right, moderate)
- gemini-3.1-pro-preview: The white van lacks distinct panel details, and its license plate is a solid, unreadable yellow blob. (middle-right, moderate)

**text_signage_or_markings**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The yellow and black hazard stripes painted on the columns framing the entrance of the right-hand building are distinctly squiggly, uneven, and fail to remain parallel. (middle-right, strong)

## v2-d-empty-L.jpg: mean P(AI) 0.35 (fails)

- openai/gpt-6-sol: 0.01 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.05 / 0.06
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 15, raised in 3/9 calls, at bottom-center, middle-right, center

- gemini-3.1-pro-preview: The tracks merge in the foreground but there are no flangeways or proper points mechanism, just rails physically intersecting inappropriately. (bottom-center, strong)
- gemini-3.1-pro-preview: The right-hand track bends and appears to sink into or merge with the concrete ground rather than maintaining a consistent rail profile. (middle-right, strong)
- gemini-3.1-pro-preview: The central track leading towards the right building appears to be a single rail, not a pair of rails, branching off the main junction. (center, strong)
- gemini-3.1-pro-preview: The inner rails of the two tracks intersect to form a simple 'X' shape without any switch points, movable rails, or a frog, making it a physically impossible track junction for a train to navigate. (bottom-center, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead wires are disconnected, float in mid-air, and do not logically connect to the poles or the building. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires appear extremely thin, fade into the background, and lack the continuous tension and proper connection points of real railway infrastructure. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire appears to attach directly to the flat side of the concrete pole in a structurally nonsensical way, lacking proper insulators or support arms. (top-left, moderate)

**buildings**: score 5, raised in 3/9 calls, at middle-right, top-center, top-right

- gemini-3.1-pro-preview: The structure of the building on the right looks inconsistent, with the open doorway/garage looking unnaturally integrated into the facade. (middle-right, weak)
- gemini-3.1-pro-preview: The roofline and structure connecting the two main building bays feature irregular, jagged shapes and vague pipes that do not form a coherent architectural design. (top-center, moderate)
- gemini-3.1-pro-preview: The vertical, cylindrical structures on the far right edge of the building appear warped, uneven, and slightly melted. (top-right, moderate)

**vehicles**: score 5, raised in 3/9 calls, at center

- gemini-3.1-pro-preview: The truck parked in the center has distorted proportions, specifically around the cab and the flatbed, appearing somewhat melted or overly simplified. (center, moderate)
- gemini-3.1-pro-preview: The red crane mechanism on the white flatbed truck is an indistinct, merged mass of color that lacks recognizable mechanical components or articulation. (center, moderate)
- gemini-3.1-pro-preview: The small white truck's crane arm merges unclearly with the gray building facade behind it, and its wheels lack distinct structural detail. (center, weak)

**background_clutter**: score 3, raised in 2/9 calls, at top-center, center

- gpt-6-sol: Small objects deep inside the depot are indistinct, which makes their shapes difficult to verify. (top-center, weak)
- gemini-3.1-pro-preview: The pile of pallets and materials next to the white electrical cabinet appears as a fused, indistinct block of textures rather than clearly stacked individual items. (center, moderate)

## v2-d-empty-R.jpg: mean P(AI) 0.25 (passes)

- anthropic/claude-opus-5.5: 0.05 / 0.06 / 0.06
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.01

**track_geometry**: score 9, raised in 3/9 calls, at bottom-center, middle-right

- gpt-6-sol: The rails form a tight X-shaped crossing, an unusual-looking but physically plausible track layout. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the two tracks intersect to form a solid 'X'. Real railway crossings (frogs) require gaps (flangeways) for the wheel flanges to pass through, making this continuous line intersection mechanically impossible. (bottom-center, strong)
- gemini-3.1-pro-preview: The right rail of the right-hand track appears to fade away and vanish directly into the concrete surface before reaching the building entrance. (middle-right, moderate)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks cross each other in a simple 'X' shape, but the shiny rail heads simply merge without any of the physical infrastructure (like a crossing frog or gaps for wheel flanges) required for a real track crossing. (bottom-center, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-right, top-center

- gemini-3.1-pro-preview: The catenary wires hanging above the right track are jagged, appear disjointed in places, and do not connect logically or structurally to the support gantry. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wire extending from the pole on the right towards the center appears to simply fade and vanish into the grey sky instead of connecting to a support structure or continuing seamlessly. (top-center, strong)

**composition_or_staging**: score 4, raised in 2/9 calls, at whole-image, bottom-center

- gpt-6-sol: The two illuminated bays and branching tracks create an unusually balanced composition, although the depot layout accounts for it. (whole-image, weak)
- gemini-3.1-pro-preview: The perspective implies the view is from a train cab, but rather than a single pair of parallel rails underneath the vehicle, the image shows four rails diverging outward from the immediate foreground. (bottom-center, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of wooden pallets and adjacent materials located between the tracks blend together into an indistinct, fused mass without clear structural edges. (center, moderate)
- gemini-3.1-pro-preview: The collection of materials between the tracks, including what looks like pallets and orange posts, appears upon closer inspection as an indistinct, fused mass of textures rather than separate, logically stacked objects. (center, moderate)

**buildings**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The vertical seams on the grey metal cladding of the building are inconsistent; some lines stop abruptly or disappear, especially in the area above the open bay doors. (middle-left, moderate)

## v2-d-group-L.jpg: mean P(AI) 0.53 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.30 / 0.72 / 0.68
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**people_anatomy**: score 18, raised in 7/9 calls, at middle-left, middle-right

- gpt-6-sol: The crouching workers' hands and nearby track hardware are difficult to distinguish at this resolution. (middle-left, weak)
- gpt-6-sol: The workers’ hands and tools are hard to distinguish where they meet the track. (middle-left, weak)
- gpt-6-sol: The distant workers' hands and tools are indistinct, making those small details difficult to verify. (middle-left, weak)
- claude-opus-5.5: The kneeling figures are small and soft, with indistinct hands and tools; the yellow objects near them are vague blobs. (middle-left, weak)

**track_geometry**: score 18, raised in 5/9 calls, at bottom-center, center, middle-right, middle-left

- claude-opus-5.5: The two branch tracks meet in a single X-shaped crossing at the bottom center with no switch blades, closure rails, or guard rails. Near the camera, the three visible rails are spaced far wider than any plausible track gauge. (bottom-center, strong)
- claude-opus-5.5: The rail spacing of each branch shrinks unnaturally toward the buildings. The left track's rails near the workers are only a small fraction of the gap seen at the bottom, which perspective alone does not explain. (center, moderate)
- claude-opus-5.5: The two inner rails converge into an X-shaped frog at the bottom center, yet no switch blades or check rails are visible. The left track's gauge also appears to widen greatly toward the camera compared with its gauge near the depot. (center, moderate)
- gemini-3.1-pro-preview: The width and depth of the grooves in the embedded rails fluctuate unnaturally as the track recedes towards the building. (middle-right, moderate)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-right, top-left

- gemini-3.1-pro-preview: The overhead wires above the right track are jagged, vary inconsistently in thickness, and connect to supports in a structurally nonsensical way. (top-right, strong)
- gemini-3.1-pro-preview: The overhead wires are fragmented and connect to the supporting poles in confusing, illogical ways, missing a continuous catenary system. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire suspended above the right track appears to end abruptly in mid-air just before reaching the building entrance. (top-right, moderate)

**people_pose_or_placement**: score 4, raised in 3/9 calls, at middle-left

- claude-opus-5.5: Five workers kneel directly in the track gauge with nearly identical hi-vis outfits and poses, which looks staged; the poses are anatomically plausible, though. (middle-left, weak)
- claude-opus-5.5: Five workers in near-identical orange hi-vis jackets and white helmets kneel in a neat line along the left track in similar poses, which looks staged and repetitive. (middle-left, moderate)
- claude-opus-5.5: Five workers in near-identical orange jackets and white helmets kneel in similar poses along one track, with a single worker on the other. The arrangement looks staged and repetitive. (middle-left, weak)

**vehicles**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The white flatbed truck has indistinct, blurry wheels and a front grille that lacks correct mechanical details or geometry. (center, moderate)
- gemini-3.1-pro-preview: The flatbed truck parked between the tracks features a crane structure behind the cab that is an incoherent, jumbled mess of shapes rather than a functional mechanical arm. (center, moderate)

## v2-d-group-R.jpg: mean P(AI) 0.26 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.02 / 0.99 / 0.99

**track_geometry**: score 7, raised in 3/9 calls, at bottom-center

- gpt-6-sol: The foreground rail crossing is visually difficult to trace precisely, though that could be due to perspective and the wet surface. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the two converging tracks cross each other as solid, continuous lines. There is no frog, gap, or switch mechanism present to allow a train's wheel flanges to pass through the intersection, making the tracks physically unusable. (bottom-center, strong)
- gemini-3.1-pro-preview: The intersection of the inner rails forms a continuous 'X' without any switch points, gaps, or a frog mechanism to allow wheel flanges to pass through, which is physically impossible for a real railway switch. (bottom-center, strong)

**people_anatomy**: score 7, raised in 2/9 calls, at middle-right, middle-left

- gemini-3.1-pro-preview: The group of workers on the right-hand track have slightly distorted, amorphous appearances with poorly defined limbs, blending into the surrounding environment. (middle-right, moderate)
- gemini-3.1-pro-preview: The workers on the right track, especially the closest one, lack distinct lower bodies or legs, appearing to melt or merge directly into the wet concrete surface. (middle-right, strong)
- gemini-3.1-pro-preview: The single worker on the left track appears as a blurry, vaguely human-shaped blob of orange and dark colors without distinguishable anatomical features or limbs. (middle-left, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: An overhead power line extending from a support pole abruptly terminates and fades into the sky in mid-air, instead of logically connecting to the rest of the catenary system. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wires are faint, disjointed, and seem to disappear or connect arbitrarily in the sky rather than forming a coherent structural network. (top-center, moderate)

**vehicles**: score 4, raised in 2/9 calls, at middle-right, center

- gemini-3.1-pro-preview: The crane mounted on the flatbed of the white truck appears as an indistinct, jumbled mass of shapes rather than a clearly defined, functional mechanical structure. (middle-right, moderate)
- gemini-3.1-pro-preview: The wheels on the white flatbed truck appear flattened, misshapen, and lack distinct rims or tires. (center, moderate)

**people_pose_or_placement**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: Several workers are clustered in similar crouched poses around the right-hand rails, a repetition that could superficially suggest generation. (middle-right, weak)

## v2-d-two-L.jpg: mean P(AI) 0.26 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.06 / 0.12
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.02

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The rails cross in a simple 'X' pattern grooved into the concrete. There are no visible switch points (movable rails) to direct a train, nor a proper frog mechanism for wheel flanges to pass through the intersection safely, which is mechanically impossible for a functioning railway. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the two tracks intersect in the foreground forming a solid 'X'. There is no frog or gap for a wheel flange to pass through, making this track layout physically impossible for a real railway or tramway. (bottom-center, strong)

**people_anatomy**: score 4, raised in 2/9 calls, at middle-left

- gpt-6-sol: The two kneeling workers' hands and lower bodies are hard to distinguish at this distance. (middle-left, weak)
- gemini-3.1-pro-preview: The lower legs and knees of the worker on the right (closer to the center) melt indistinctly into the concrete and the rail, lacking defined shapes for boots or pants interacting with the ground. (middle-left, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead wires are depicted as simple, solitary lines stretching across the sky. They lack the necessary supporting structures, such as a catenary wire, droppers, and realistic tensioning equipment at the poles or buildings. (top-center, moderate)
- gemini-3.1-pro-preview: The network of overhead catenary wires appears slightly chaotic, with some lines seemingly fading out or terminating without connecting to a physical support structure in a logical way. (top-left, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at top-center, whole-image

- gpt-6-sol: Fine details in the distant truck and workshop interiors are indistinct; this could resemble generated-image softness, though rain and distance also explain it. (top-center, weak)
- gpt-6-sol: Fine details inside the distant depot opening are soft and hard to distinguish, which could also occur in an AI-generated image. (top-center, weak)
- gemini-3.1-pro-preview: Despite the appearance of water droplets on a windshield adding gritty realism, many background elements and the ground texture have a slightly painterly, smudged quality typical of AI upscaling. (whole-image, weak)

**background_clutter**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The materials, pallets, and structures stacked between the two building entrances merge into indistinct, jumbled shapes without coherent edges or logical construction when examined closely. (middle-right, moderate)

## v2-d-two-R.jpg: mean P(AI) 0.14 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.01

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The rails cross in a dense junction whose exact routing is difficult to follow at a glance. (bottom-center, weak)
- gemini-3.1-pro-preview: The rails in the foreground cross each other in a simple 'X' shape. This lacks any of the necessary structural components of a real railway crossing or switch, such as frogs or check rails. Furthermore, if this is meant to be a junction from a single track, the layout implies the track gauge narrows to zero where the rails cross, which is physically impossible for a train to navigate. (bottom-center, strong)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The worker on the right appears to be kneeling on the rail, but his boot merges indistinctly into the metal, and the continuity of the rail itself seems broken or distorted beneath him. (middle-right, strong)

**people_anatomy**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands of both workers, where they are supposedly gripping the metal bar, are rendered as featureless blobs without distinguishable fingers or a clear anatomical grip. (middle-right, moderate)

**vehicles**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The red crane structure mounted on the white flatbed truck in the background is poorly defined, lacking logical mechanical details like joints, hydraulic pistons, or cables. (center, moderate)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers' hands and the small items at the rails are hard to distinguish. (middle-right, weak)
