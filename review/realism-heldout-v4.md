# Realism check: heldout-v4

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 67 | 8/12 |
| people_anatomy | 42 | 7/12 |
| tools_or_small_objects | 40 | 9/12 |
| overhead_wires_or_poles | 36 | 7/12 |
| texture_noise_or_sharpness | 27 | 11/12 |
| background_clutter | 25 | 9/12 |
| switch_mechanism | 24 | 5/12 |
| buildings | 14 | 5/12 |
| people_clothing_or_gear | 3 | 1/12 |
| people_pose_or_placement | 2 | 1/12 |
| camera_or_windscreen | 1 | 1/12 |
| composition_or_staging | 1 | 1/12 |

## u-empty-L.jpg: mean P(AI) 0.08 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.30

**background_clutter**: score 1, raised in 1/9 calls, at top-left

- gpt-6-sol: Equipment beneath the left arch is indistinct and difficult to identify, though it is also in deep shadow. (top-left, weak)

**camera_or_windscreen**: score 1, raised in 1/9 calls, at top-left

- gpt-6-sol: Haze and faint glare obscure part of the scene; this could be camera or windscreen glare, though a generated image could imitate it. (top-left, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at middle-left

- gpt-6-sol: The area inside the left arch is murky and indistinct, which could resemble generated detail but is also consistent with deep shadow. (middle-left, weak)

## u-empty-R.jpg: mean P(AI) 0.05 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.08
- openai/gpt-6-sol: 0.04 / 0.08 / 0.03
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.02

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-left, middle-right

- gpt-6-sol: Shapes inside the left arch are indistinct and merge into the shadows, though this could be ordinary low-light detail loss. (middle-left, weak)
- gpt-6-sol: The dark area inside the right arch is indistinct, making its contents difficult to identify. (middle-right, weak)

**background_clutter**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The dark shapes inside the right archway are difficult to identify and look somewhat amorphous. (middle-right, weak)

## u-group-L.jpg: mean P(AI) 0.39 (fails)

- anthropic/claude-opus-5.5: 0.68 / 0.65 / 0.10
- openai/gpt-6-sol: 0.03 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.02 / 0.98 / 0.98

**people_anatomy**: score 10, raised in 4/9 calls, at middle-left, middle-right

- claude-opus-5.5: The workers' hands and tools are blurry and indistinct, and it is not clear what work they are doing on the rails. (middle-left, weak)
- gpt-6-sol: The workers’ hands and tools are hard to distinguish where all three crouch together. (middle-left, weak)
- gemini-3.1-pro-preview: The worker in the center of the left group (wearing orange) has a head and neck area that is an undefined, blurry mass beneath the hard hat. (middle-left, strong)
- gemini-3.1-pro-preview: The lower body and legs of the lone worker on the right track are poorly defined and appear to melt into the surrounding ground. (middle-right, moderate)

**track_geometry**: score 9, raised in 3/9 calls, at bottom-center, center, bottom-left

- claude-opus-5.5: The two diverging tracks have no visible frog, switch blades, or connecting rails; the left and right track pairs simply separate with tarmac between them, which is physically implausible for a branching junction. (bottom-center, moderate)
- claude-opus-5.5: The two branch tracks diverge but have no visible switch blades, frog, or connecting rails; each track runs as an independent pair with no junction mechanism. (center, moderate)
- claude-opus-5.5: The left track's right rail and the right track's left rail curve apart smoothly and end abruptly at the bottom edge, giving an implausible split layout. (bottom-center, moderate)
- gemini-3.1-pro-preview: The steel rails of the left track lose their distinct 3D shape and appear to merge into the ground texture and into each other near the bottom edge. (bottom-left, strong)

**tools_or_small_objects**: score 7, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and small items beside the rails are indistinct, making those details hard to verify. (center, weak)
- gemini-3.1-pro-preview: The objects resting on the ground next to the group of three workers appear as indistinct, amorphous blobs rather than recognizable bags or tools. (middle-left, strong)
- gemini-3.1-pro-preview: The tools or bags resting on the ground next to the left group of workers are amorphous, indistinct brown blobs that appear to unnaturally intersect with the metal rail. (middle-left, strong)

**texture_noise_or_sharpness**: score 6, raised in 3/9 calls, at center, bottom-right

- gpt-6-sol: The workers’ hands and nearby small equipment are hard to distinguish, which leaves some detail uncertain. (center, weak)
- gemini-3.1-pro-preview: The cobblestone pattern between the rails on the right track transitions abruptly between unnaturally perfect uniformity and blurry smudges. (bottom-right, moderate)
- gemini-3.1-pro-preview: The cobblestone pattern between the rails of the right-hand track warps and stretches perfectly to follow the curve, resembling a digitally mapped texture rather than individually laid stones. (bottom-right, strong)

**overhead_wires_or_poles**: score 4, raised in 3/9 calls, at top-center

- claude-opus-5.5: The poles stand without clearly attached overhead wires, and some poles sit oddly in the middle of the yard. (top-center, weak)
- claude-opus-5.5: The poles are present, but overhead wires are barely visible or absent, which is inconsistent for a tram depot. (top-center, weak)
- gemini-3.1-pro-preview: There are several tall poles characteristic of a tram or electrified train depot, but there are no overhead wires attached to them or spanning the yard. (top-center, moderate)

## u-group-R.jpg: mean P(AI) 0.10 (passes)

- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.15
- openai/gpt-6-sol: 0.02 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.30 / 0.05

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at middle-left, middle-right

- gpt-6-sol: The distant worker and nearby equipment are too soft to resolve into clear details, which slightly limits confidence. (middle-left, weak)
- gpt-6-sol: The distant worker and nearby equipment are too soft to identify clearly, which could conceal generated details but is also consistent with distance and image quality. (middle-left, weak)
- gpt-6-sol: The workers’ hands and the equipment between them are indistinct, making their exact interaction hard to verify. (middle-right, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at center

- claude-opus-5.5: Four workers are kneeling on the tracks in a staged, stock-footage-like arrangement, which is slightly suspicious. (center, weak)

## u-two-L.jpg: mean P(AI) 0.17 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.06
- anthropic/claude-opus-5.5: 0.12 / 0.12 / 0.15
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.99

**tools_or_small_objects**: score 5, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and dark trackside equipment overlap, making the exact tool shape difficult to discern. (center, weak)
- gpt-6-sol: The workers’ hands and tool are difficult to distinguish where they meet the rail; this is a possible artifact, though distance and softness could explain it. (middle-left, weak)
- gemini-3.1-pro-preview: The tools being used by the workers are not identifiable objects; they are just dark, undefined blobs lacking handles or mechanical structure. (center, strong)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and the tool junction are hard to make out; the softness leaves some detail ambiguous. (center, weak)
- gemini-3.1-pro-preview: The transition between the detailed cobblestone surface and the smooth gray surface lacks a logical boundary, blending together like a smudged texture. (middle-left, moderate)

**people_anatomy**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The worker in the yellow jacket appears to be missing a right hand, with the arm blending indistinctly into his leg, and his helmet seems fused to his head and earmuffs. (center, strong)

**track_geometry**: score 3, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The junction of the rails where the workers are located makes no physical sense, with rails intersecting at odd angles, merging improperly, and seemingly ending out of nowhere. (center, strong)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of materials (likely rails or sleepers) in the middle distance is rendered as a blurry, streaky mass of lines rather than distinct, individual objects. (center, moderate)

## u-two-R.jpg: mean P(AI) 0.06 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.12
- openai/gpt-6-sol: 0.03 / 0.04 / 0.04
- google/gemini-3.1-pro-preview: 0.05 / 0.02 / 0.05

**tools_or_small_objects**: score 2, raised in 2/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the object between them are hard to distinguish and appear to merge into a dark patch. (middle-right, weak)
- gpt-6-sol: The workers’ hands and the small object at the rail are difficult to distinguish clearly. (middle-right, weak)

**people_anatomy**: score 1, raised in 1/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the object between them are too indistinct to verify their exact shapes. (middle-right, weak)

## w-empty-L.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.07 / 0.10
- openai/gpt-6-sol: 0.06 / 0.06 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.95

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a solid, sharp 'V' shape without any switch mechanism, points, frog, or gaps for wheel flanges to pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: The concrete sleepers (ties) beneath the intersecting rails are distorted, bending and melting into continuous, irregular shapes instead of being distinct rectangular blocks. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks meet at a sharp point and abruptly end, providing no continuous rails for a train approaching from the bottom of the frame. (bottom-center, strong)

**background_clutter**: score 8, raised in 4/9 calls, at center

- gpt-6-sol: The cluster of short concrete pipes has repetitive, somewhat indistinct openings. (center, weak)
- gemini-3.1-pro-preview: The pile of cylindrical objects (possibly pipes) behind the fence lacks clear definition, with the individual pieces appearing blobby and melting into one another. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical concrete pipes lying on the ground behind the tracks appears warped, with irregular shapes and dark voids that blend into one another unnaturally. (center, strong)
- gemini-3.1-pro-preview: The chain-link fence located just behind the pile of pipes loses its structured mesh pattern and devolves into chaotic, formless noise. (center, moderate)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: Overhead catenary wires are poorly defined, with some appearing to fade out into the sky or disconnect illogically from their supporting structures. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires are faint and disconnected, fading into the sky instead of forming a logical and continuous catenary suspension system. (top-center, moderate)
- gemini-3.1-pro-preview: The thin horizontal wire extending to the right from the left pole simply fades away into the building's facade in mid-air, failing to connect to the other pole or structure. (top-center, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center

- gpt-6-sol: The stacked cylindrical objects have somewhat soft, hard-to-distinguish outlines. (center, weak)
- gemini-3.1-pro-preview: The stack of cylindrical pipes resting between the two tracks is melded together into a single, lumpy mass; the individual pipes lack defined boundaries, and their open ends are irregularly shaped and deformed. (center, strong)

**buildings**: score 4, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The railway track on the right side leads directly into a closed, flat corrugated metal door with no gap, track continuation, or clearance visible underneath. (middle-right, moderate)
- gemini-3.1-pro-preview: The grid pattern on the translucent or glass bay door on the right side is wobbly, with lines that are inconsistent and do not follow a logical, rigid perspective. (middle-right, moderate)

## w-empty-R.jpg: mean P(AI) 0.37 (fails)

- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.08
- openai/gpt-6-sol: 0.04 / 0.07 / 0.03
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 9, raised in 2/9 calls, at bottom-center, middle-right

- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a perfectly sharp 'V' shape without any switch blades, frog, or moving mechanisms required for a functional railway junction. (bottom-center, strong)
- gemini-3.1-pro-preview: The left rail of the right-hand track ends abruptly and inexplicably before reaching the concrete apron at the building entrance. (middle-right, strong)
- gemini-3.1-pro-preview: The inner rails of the two tracks merge into a solid point without any crossing (frog) or switch points, making the track physically impossible to navigate. (bottom-center, strong)

**overhead_wires_or_poles**: score 7, raised in 3/9 calls, at middle-right, top-right

- gemini-3.1-pro-preview: The thick grey pole stands on a concrete base that appears slightly disjointed and floating, while the pole itself bends unnaturally near the top. (middle-right, moderate)
- gemini-3.1-pro-preview: The horizontal overhead wire appears to abruptly stop or fade out into the sky near the thick cylindrical pole, rather than connecting logically. (top-right, moderate)
- gemini-3.1-pro-preview: The overhead wires are drawn as random straight lines that do not form a logical catenary system or connect sensibly to the support poles. (top-right, strong)

**tools_or_small_objects**: score 4, raised in 2/9 calls, at center, bottom-left

- gemini-3.1-pro-preview: The pile of cylindrical objects (like concrete pipes) in front of the middle door has blurred, undefined edges, with individual pieces appearing to melt into one another. (center, moderate)
- gemini-3.1-pro-preview: The small white object located at the base of the dark diagonal line (wiper/frame) is blurry, misshapen, and does not look like a recognizable mechanical attachment. (bottom-left, moderate)

**buildings**: score 4, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The chainlink fence next to the building is inconsistently rendered, with the wire mesh pattern blurring out and disappearing in several spots. (middle-left, moderate)
- gemini-3.1-pro-preview: The gray vertical support column on the left side of the open bay door appears to terminate awkwardly at the top, not cleanly connecting to the beam above it. (middle-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, top-right

- gpt-6-sol: Distant surfaces look hazy and soft, which could be mistaken for generated detail. (whole-image, weak)
- gpt-6-sol: The image is hazy and fine details are soft, making small structural details difficult to check. (whole-image, weak)
- gpt-6-sol: Details inside the dark building entrance are indistinct; the exposure and distance could also explain this. (top-right, weak)

## w-group-L.jpg: mean P(AI) 0.38 (fails)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.12
- openai/gpt-6-sol: 0.02 / 0.04 / 0.08
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**people_anatomy**: score 12, raised in 5/9 calls, at bottom-center, center, middle-right, middle-left, bottom-left

- gpt-6-sol: The overlapping hands and tools of the left-track workers are difficult to distinguish clearly. (bottom-center, weak)
- gpt-6-sol: The kneeling workers’ hands and lower legs are hard to distinguish where they overlap the rails and equipment. (center, weak)
- gemini-3.1-pro-preview: The lower half of the kneeling worker on the right track is ill-defined, with his legs appearing to melt into the gravel and rail. (middle-right, moderate)
- gemini-3.1-pro-preview: The lower right leg of the worker wearing the orange vest seems to blend seamlessly into the gravel and rail, lacking clear anatomical definition. (middle-left, strong)

**track_geometry**: score 8, raised in 2/9 calls, at middle-left, bottom-center

- gemini-3.1-pro-preview: The inner rail of the left track abruptly disappears into the ground right beneath where the worker in the orange vest is positioned. (middle-left, strong)
- gemini-3.1-pro-preview: The intersection where the two inner rails meet is physically impossible; it merges into a solid shape without any functional switch components like a frog, check rails, or switch blades. (bottom-center, strong)
- gemini-3.1-pro-preview: There is a short, unexplained, and detached segment of rail floating between the two diverging tracks in the immediate foreground. (bottom-center, moderate)

**switch_mechanism**: score 6, raised in 2/9 calls, at center, bottom-center

- gemini-3.1-pro-preview: Where the tracks split, there are no movable point rails or a frog; the inner rails simply cross over each other as solid, continuous curves, which is functionally impossible for train wheels. (center, strong)
- gemini-3.1-pro-preview: The point where the inner rails of the two tracks meet lacks any functional switch mechanism like a frog or point blades; the rails simply merge into a V-shape in the gravel. (bottom-center, strong)

**tools_or_small_objects**: score 5, raised in 3/9 calls, at bottom-center, bottom-left, center

- gpt-6-sol: The workers’ hands and small trackside equipment are hard to distinguish, leaving some details visually ambiguous. (bottom-center, weak)
- gemini-3.1-pro-preview: The black object next to the leftmost worker, which should be a tool bag, is rendered as an indistinct, formless blob. (bottom-left, moderate)
- gemini-3.1-pro-preview: The stack of cylindrical objects or pipes in the background appears melted and fused together, with indistinct, smudged edges. (center, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left, top-right

- gemini-3.1-pro-preview: An overhead wire on the left side of the image appears to abruptly terminate in mid-air without connecting to any supporting structure. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire passing in front of the building on the right side becomes faint and appears to terminate in mid-air without connecting to any structure. (top-right, moderate)

## w-group-R.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.12
- openai/gpt-6-sol: 0.08 / 0.03 / 0.04
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.99

**people_anatomy**: score 7, raised in 3/9 calls, at middle-right, bottom-right

- gpt-6-sol: The crouching workers’ hands and legs are hard to distinguish where they overlap the rails. (middle-right, weak)
- gemini-3.1-pro-preview: The lower bodies and hands of the three workers are indistinct, melting into the rails and ground rather than showing distinct limbs and footwear. (bottom-right, strong)
- gemini-3.1-pro-preview: The hands and arms of the workers on the right track appear as indistinct blobs that merge nonsensically into the steel rails and the gravel ballast. (middle-right, strong)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The point where the two tracks converge completely lacks any physical switch components such as points or a frog; instead, the rails simply melt into one another. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails meet at a sharp point, but there are no movable switch blades, tie bars, or a proper frog mechanism that would allow a train to navigate the junction. (bottom-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 2/9 calls, at bottom-right, bottom-left

- gpt-6-sol: The kneeling workers' hands and gear are somewhat soft and difficult to distinguish. (bottom-right, weak)
- gemini-3.1-pro-preview: The fasteners attaching the rails to the sleepers appear as repeating, nonsensical squiggly patterns rather than functional mechanical clips. (bottom-left, strong)

**background_clutter**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The stack of cylindrical objects lying near the fence in the background features misshapen, melted forms that blend into one another. (center, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects lying on the ground behind the fence lacks clear definition, with blurry edges and inconsistent shapes. (center, moderate)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead wires are poorly structured, with some appearing to terminate randomly in the sky without connecting to appropriate supporting hardware. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires appear disjointed, fading in and out of the sky without logically connecting to support structures or continuing continuously. (top-left, moderate)

## w-two-L.jpg: mean P(AI) 0.48 (fails)

- openai/gpt-6-sol: 0.04 / 0.04 / 0.06
- anthropic/claude-opus-5.5: 0.30 / 0.30 / 0.65
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.98

**track_geometry**: score 15, raised in 5/9 calls, at center, bottom-center, bottom-right

- claude-opus-5.5: The two tracks diverge from a common point near the bottom, but there is no switch mechanism, frog, or point blades. The rails simply split apart, which is physically implausible for a real turnout. (center, moderate)
- claude-opus-5.5: The inner rails of the two tracks run close together near the bottom, but no physical junction is visible. This may reflect a cropped view or a stock-footage composition. (bottom-center, weak)
- claude-opus-5.5: Two tracks diverge from foreground but there is no proper switch/frog structure; the inner rails of left and right tracks simply curve apart without a crossing or point blades, which is mechanically implausible for a turnout. (bottom-center, moderate)
- claude-opus-5.5: Left track's rails converge oddly near the workers and the track appears to end/merge into pavement near the building without continuing through the door. (center, weak)

**tools_or_small_objects**: score 6, raised in 3/9 calls, at center, bottom-left

- gpt-6-sol: The workers' hands and any tools at the rail are indistinct, making their exact task hard to verify. (center, weak)
- gemini-3.1-pro-preview: The hands of the workers and the tools they are presumably using are poorly defined, blending indistinctly into the rail and the workers' clothing. (bottom-left, moderate)
- gemini-3.1-pro-preview: The pile of cylindrical objects (like concrete pipes) behind the fence is highly distorted, with individual items squished and melting into one another. (center, strong)

**overhead_wires_or_poles**: score 6, raised in 4/9 calls, at top-left, middle-left

- claude-opus-5.5: The catenary poles and cantilevers look plausible, but the wires are sparse and partly fade out. (top-left, weak)
- gemini-3.1-pro-preview: The overhead wires attached to the mast on the left do not form a logical or continuous catenary system for trains to draw power from; they seem to terminate in mid-air or connect nonsensically. (top-left, moderate)
- gemini-3.1-pro-preview: The base of the overhead catenary pole between the tracks seems to disappear directly into the loose gravel without a clear, solid concrete foundation structure. (middle-left, weak)
- gemini-3.1-pro-preview: The connection of the overhead wire to the pole on the left is structurally nonsensical, with the wire appearing to float or end abruptly without proper insulators. (top-left, moderate)

**switch_mechanism**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The track junction entirely lacks essential switch components such as point blades, tie bars, or a defined frog crossing; instead, the solid steel rails appear to simply melt into one another. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction lacks moving switch blades or a proper frog; the inner rails simply fuse together into a solid V-shape, which would derail a train. (bottom-center, strong)

**people_anatomy**: score 4, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The workers’ hands and the object between them are difficult to distinguish at this resolution. (center, weak)
- gpt-6-sol: The workers’ hands and nearby gear are hard to distinguish clearly at this resolution. (center, weak)
- gemini-3.1-pro-preview: The right hand of the worker in orange is indistinct and appears to meld directly into the rail or the tool he is holding. (middle-left, moderate)

## w-two-R.jpg: mean P(AI) 0.28 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.05 / 0.04 / 0.10
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.98

**track_geometry**: score 11, raised in 3/9 calls, at bottom-center, middle-left, bottom-right

- gpt-6-sol: The rail junction is difficult to trace precisely where the rails converge near the edge of the frame. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks intersect without any switching mechanism or frog; the rails appear to simply melt into each other, making it physically impossible for a train to pass. (bottom-center, strong)
- gemini-3.1-pro-preview: The concrete sleepers (ties) on the left track have irregular spacing and distorted, non-rectangular shapes as they curve. (middle-left, moderate)
- gemini-3.1-pro-preview: The concrete/wooden sleepers (ties) beneath the track junction are mashed together, overlapping at conflicting angles and melting into the gravel, whereas a real switch would have neatly arranged, extra-long ties spanning both tracks. (bottom-center, strong)

**tools_or_small_objects**: score 6, raised in 2/9 calls, at middle-right, center

- gpt-6-sol: The exact shapes of the workers' hands and the objects beside them are difficult to make out. (middle-right, weak)
- gemini-3.1-pro-preview: The row of cylindrical objects (likely meant to be pipes or rolls of material) resting behind the tracks merges into a single continuous, lumpy caterpillar shape rather than remaining distinct individual objects. (center, strong)
- gemini-3.1-pro-preview: The black and brown bags sitting next to the workers are formless, indistinct blobs that lack typical functional details like straps, handles, seams, or defined pockets. (middle-right, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The hands and whatever tools the worker in the orange vest is holding are rendered as indistinct blobs that merge smoothly into the rail. (middle-right, moderate)
- gemini-3.1-pro-preview: The left arm and hand of the crouching worker in the orange high-vis shirt disappear into a dark blob, merging indistinguishably with his knee and the surrounding shadows. (middle-right, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead wire extending from the leftmost pole towards the center seems to dissolve or fade out unnaturally against the sky. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead wire extending horizontally to the left from the leftmost support pole appears to simply fade out and vanish into the sky. (top-left, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The pile of cylindrical objects (pipes or rolls) by the fence lacks consistent geometry, with some appearing to have holes and others rendered as solid blurred shapes. (center, moderate)
