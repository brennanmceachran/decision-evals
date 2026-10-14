# Realism check: v2-why

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 183 | 14/14 |
| overhead_wires_or_poles | 91 | 14/14 |
| people_anatomy | 54 | 9/14 |
| people_pose_or_placement | 51 | 9/14 |
| switch_mechanism | 47 | 8/14 |
| texture_noise_or_sharpness | 39 | 13/14 |
| vehicles | 38 | 12/14 |
| camera_or_windscreen | 25 | 8/14 |
| buildings | 18 | 7/14 |
| tools_or_small_objects | 17 | 6/14 |
| composition_or_staging | 16 | 5/14 |
| people_clothing_or_gear | 9 | 5/14 |
| text_signage_or_markings | 8 | 3/14 |
| reflections_or_wet_surfaces | 5 | 3/14 |
| background_clutter | 4 | 3/14 |
| lighting_or_shadows | 2 | 1/14 |

## c-empty-L.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.15 / 0.10 / 0.15
- google/gemini-3.1-pro-preview: 0.99 / 0.98 / 0.02

**track_geometry**: score 7, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: The two inner rails converge into a single V frog with no visible switch blades, check rails, or a proper turnout; the left and right tracks simply merge as a Y. The geometry still looks plausible for embedded tram track in a depot. (center, weak)
- gemini-3.1-pro-preview: The inner rails of the merging tracks converge into a solid 'V' or 'Y' shape without any flangeway gaps or a proper 'frog' crossing, which would be necessary for wheel flanges to pass; this switch is physically impossible. (bottom-center, strong)
- gemini-3.1-pro-preview: The point where the inner rails cross forms a solid 'X' of metal without the necessary continuous gaps (flangeways) for the wheel flanges to pass through, which is mechanically impossible for a functioning tram or train track. (bottom-center, strong)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wires in the sky show unnatural sharp angles or steps and appear to disconnect or fade away, rather than hanging in smooth curves under tension. (top-center, strong)
- gemini-3.1-pro-preview: Several overhead wires fade out into the sky without connecting to any supporting structures, or connect in illogical ways. (top-center, moderate)

**texture_noise_or_sharpness**: score 4, raised in 4/9 calls, at whole-image, middle-left, top-left

- gpt-6-sol: Rainy haze and softness obscure some distant details, so small image-generation errors would be hard to rule out. (whole-image, weak)
- gpt-6-sol: The interior of the left depot is dark and indistinct, leaving some small details hard to verify. (middle-left, weak)
- claude-opus-5.5: Some smoothing/JPEG artifacts in distant trees and pavement, but no warped structures (whole-image, weak)
- gemini-3.1-pro-preview: The dark spots visible in the sky area, which might mimic window dirt or sensor dust, are perfectly uniform circular dots that look artificially applied. (top-left, weak)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The stacked pallets and objects near the left shed entrance have a somewhat melted, indistinct appearance lacking precise, logical structure upon closer inspection. (middle-left, moderate)

**vehicles**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The white van parked on the right lacks defined details like proper wheels or tail lights, and its rear section appears slightly melted or distorted. (middle-right, moderate)

## c-empty-R.jpg: mean P(AI) 0.44 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.75 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.99

**track_geometry**: score 17, raised in 5/9 calls, at bottom-center, center

- gpt-6-sol: The rails at the foreground junction are somewhat difficult to trace where they cross and disappear behind the dashboard. (bottom-center, weak)
- gpt-6-sol: The rails form a visually crowded crossing whose exact switch arrangement is hard to make out. (bottom-center, weak)
- claude-opus-5.5: The two inner rails converge into a single V and continue toward the camera as one merged rail, with no frog crossing, no wing rails and no switch blades anywhere. The outer rails stay about two track gauges apart. Two full-gauge tracks sharing one middle rail is not a buildable junction. (bottom-center, strong)
- gemini-3.1-pro-preview: The tracks merge into a single point in the foreground, forming a sharp 'V' shape, but there is no mechanism or physical possibility for a train to navigate this junction; the inner rails simply collide and end abruptly. (bottom-center, strong)

**overhead_wires_or_poles**: score 8, raised in 4/9 calls, at top-center

- claude-opus-5.5: The overhead wires are sparse and loosely connected. There are no clear contact wires running over each track into the shed doors, and the catenary layout looks arbitrary. (top-center, moderate)
- gemini-3.1-pro-preview: Overhead wires appear haphazard, with lines intersecting at unnatural angles or just ending without connecting to supports. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are sketchy, appear disconnected in places, and do not form a coherent, continuous power grid. (top-center, moderate)
- gemini-3.1-pro-preview: Several overhead wires fade out into the sky or lack coherent connections to the catenary support structures. (top-center, moderate)

**buildings**: score 5, raised in 3/9 calls, at top-center, top-left, middle-right

- gpt-6-sol: The two similar depot openings and their repeated interior lights have a slightly uniform appearance, though that is also normal for an industrial site. (top-center, weak)
- gemini-3.1-pro-preview: The building on the left has strange, inconsistent structural lines and windows that lack depth or logical placement. (top-left, moderate)
- gemini-3.1-pro-preview: The interior of the right-hand maintenance shed consists of indistinct, noisy shapes rather than recognizable tools, structures, or train components. (middle-right, moderate)

**switch_mechanism**: score 5, raised in 2/9 calls, at center, bottom-center

- claude-opus-5.5: No point blades, switch heel, check rails or point motor are visible anywhere along the divergence, despite the vehicle sitting right at the junction. (center, moderate)
- gemini-3.1-pro-preview: The track junction is physically impossible; the rails simply merge into a blurry 'X' shape without the necessary mechanical components like moving points, flangeways, or a frog to allow wheels to pass. (bottom-center, strong)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at whole-image, center

- claude-opus-5.5: The image has an overall smoothed, slightly painterly texture on the gravel and puddles, and the fine detail is mushy. (whole-image, weak)
- gemini-3.1-pro-preview: The base of the green electrical cabinet melts amorphously into the gravel and concrete ground without a clearly defined edge or physical contact shadow. (center, moderate)

## c-group-L.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.12
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.98

**track_geometry**: score 12, raised in 3/9 calls, at bottom-center, bottom-left

- gemini-3.1-pro-preview: The track junction is physically impossible; the rails merge into sharp 'V' shapes without any switch blades, tie bars, or gaps for wheel flanges, appearing as lines drawn on the ground rather than 3D objects. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails at the switch point merge in a soft, non-mechanical way, lacking the distinct edges and moving parts of a real track switch. (bottom-center, strong)
- gemini-3.1-pro-preview: The railway switch where the tracks diverge lacks realistic mechanical structure; the rails merge into a solid, wobbly 'V' shape rather than having distinct switch blades, flangeways, and a properly machined frog. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails of the left track appear flat, resembling lines painted on the wet surface rather than physical steel rails with a distinct profile (head, web, foot) or a clear flangeway groove. (bottom-left, strong)

**people_anatomy**: score 8, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The hands of the leftmost worker and the tool they are using are completely indistinct, appearing as a blurred, melted blob rather than defined objects. (middle-left, moderate)
- gemini-3.1-pro-preview: The lower body of the worker on the right track dissolves into a dark, formless blob instead of showing distinct legs and boots. (middle-right, strong)
- gemini-3.1-pro-preview: The right arm of the closest worker on the left track appears to end in a blurry stump, and their legs blend unnaturally into the ground. (middle-left, strong)

**people_pose_or_placement**: score 7, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The furthest worker on the left track appears to be kneeling on or emerging from a black, undefined shape. (middle-left, moderate)
- gemini-3.1-pro-preview: The workers kneeling on the left have limbs and contact points (knees, hands) that blend indistinctly into the wet ground, lacking clear physical separation from the surface. (middle-left, strong)
- gemini-3.1-pro-preview: The single worker on the right track appears to be kneeling directly on top of a thin rail line without any clear interaction or visible tools, and his form looks somewhat soft and pasted in. (middle-right, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at center, middle-left, whole-image

- gpt-6-sol: Fine details around the workers’ hands and tools are hard to distinguish and slightly smeared. (center, weak)
- gpt-6-sol: The workers' small-scale details look somewhat soft, making their hands and tools hard to distinguish. (middle-left, weak)
- gemini-3.1-pro-preview: The image has a global smoothed, slightly painterly texture, lacking the fine, sharp grain and crisp detail that would be present in a real photograph taken under these flat lighting conditions. (whole-image, moderate)

**vehicles**: score 3, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The white van parked on the right has distorted, irregular windows, and its front wheel appears to melt into the concrete surface. (middle-right, strong)

## c-group-R.jpg: mean P(AI) 0.61 (fails)

- openai/gpt-6-sol: 0.03 / 0.04 / 0.04
- anthropic/claude-opus-5.5: 0.80 / 0.88 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 23, raised in 6/9 calls, at bottom-center, whole-image, center, bottom-left

- claude-opus-5.5: The inner rails of the two branches meet in a V at dead center beneath the camera. That leaves three rails across the foreground (left, center and right) instead of the two rails of the single track the vehicle should be sitting on. It is not a coherent turnout layout. (bottom-center, strong)
- claude-opus-5.5: The two inner rails converge into a simple V and stop at a point near the bottom-center, with no frog, check rails or continuing rails, so the junction is physically impossible as track. (bottom-center, strong)
- claude-opus-5.5: The outer rails sit far apart at the bottom of the frame, around x≈260 and x≈1040. No single track has a gauge that wide, which suggests each branch is invented rather than a real turnout. (whole-image, strong)
- claude-opus-5.5: The two inner rails simply converge into a V-shaped point near the bottom center with no switch blades, closure rails, or a proper frog. The outer rails stay far apart, so there is no single approach track. This does not work as a real turnout. (center, strong)

**people_anatomy**: score 8, raised in 4/9 calls, at middle-right, top-right

- gpt-6-sol: The rightmost worker’s hand and tool area are hard to distinguish, though distance and rain could explain this. (middle-right, weak)
- claude-opus-5.5: The kneeling workers in hi-vis vests are small and blob-like, with indistinct hands and tools, and they are posed symmetrically along the rails. (top-right, weak)
- gemini-3.1-pro-preview: The group of three workers on the right track have poorly defined bodies, with limbs blending unnaturally into the ground and their tools appearing as indistinct, amorphous blobs. (middle-right, strong)
- gemini-3.1-pro-preview: The worker bending over on the far right has a right leg that appears to melt seamlessly into the wet concrete, lacking distinct definition of a foot or boot. (middle-right, strong)

**texture_noise_or_sharpness**: score 7, raised in 4/9 calls, at middle-right, whole-image

- gpt-6-sol: The workers' hands and small nearby objects are difficult to distinguish, leaving some detail ambiguous. (middle-right, weak)
- claude-opus-5.5: The image has a smeared, waxy texture with mottled noise on the concrete and buildings. Fine details such as the fences, trees and overhead wire fittings are soft and indistinct. (whole-image, moderate)
- claude-opus-5.5: Surfaces look smeared and painterly. The gravel, concrete joints, and background trees have a soft, upscaled-looking texture. (whole-image, moderate)
- gemini-3.1-pro-preview: The image exhibits a subtle painterly smoothness and smudged rendering, particularly visible in the reflections on the wet concrete and the details of the distant buildings. (whole-image, moderate)

**switch_mechanism**: score 6, raised in 3/9 calls, at center, bottom-center

- claude-opus-5.5: There are no switch blades, check rails, frog casting or point motor where the tracks diverge. The rails simply bend apart and merge into a groove. (center, moderate)
- claude-opus-5.5: There are no switch blades, point machines or tie bars where the tracks diverge. (center, moderate)
- claude-opus-5.5: There is no switch mechanism, point motor, or movable tongue anywhere at the junction of the rails. (bottom-center, moderate)

**text_signage_or_markings**: score 6, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The yellow and black hazard warning stripes painted on the pillars of the left building's doorway are squiggly, uneven, and poorly defined. (middle-left, moderate)
- gemini-3.1-pro-preview: The warning label on the front of the green electrical cabinet is just a blank yellow smudge without any discernible symbol. (center, moderate)
- gemini-3.1-pro-preview: The yellow and black hazard stripes painted on the entrance frame of the left building are uneven, wavy, and seem to blend messily into the wall. (middle-left, moderate)

## c-two-L.jpg: mean P(AI) 0.58 (fails)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.80 / 0.63 / 0.75
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.95

**track_geometry**: score 14, raised in 5/9 calls, at bottom-center, center

- claude-opus-5.5: The two inner rails merge into a single rail in the bottom center, with no frog, check rails, or switch blades, leaving three rails in a row. The left and right branches would have to share one middle rail, which is not a workable track layout. (bottom-center, strong)
- claude-opus-5.5: The two inner rails meet in an X-shaped point at the bottom center and then splay apart, while the two outer rails stay very far apart. There are no switch blades, check rails or a proper frog, so this is not a normal turnout layout. (center, moderate)
- claude-opus-5.5: The inner rails of the left and right tracks simply cross in an X at the bottom center. There are no switch blades, check rails or proper frog, and both tracks keep full width right up to the crossing, so the two tracks would physically overlap. This is not a workable track layout. (bottom-center, strong)
- gemini-3.1-pro-preview: The innermost rails of the two diverging tracks cross directly over each other in an 'X' shape. This is physically impossible for a railway switch, which requires a frog mechanism with gaps for wheel flanges to pass. (bottom-center, strong)

**switch_mechanism**: score 9, raised in 4/9 calls, at center, bottom-center

- claude-opus-5.5: There are no visible point blades, switch machine, or frog where the tracks diverge. The rails simply bend apart in a smooth V. (center, moderate)
- claude-opus-5.5: No point blades, switch motor, tie bars or drainage boxes are visible where the tracks diverge, even though crews are apparently working on the track. (bottom-center, moderate)
- claude-opus-5.5: Despite the diverging-track layout, no point blades, switch levers or point motor are visible anywhere near the divergence. (center, moderate)
- gemini-3.1-pro-preview: The switch where the two tracks diverge lacks movable points, frogs, or flangeways for wheel flanges; the inner rails simply intersect and form an 'X' that looks drawn onto the concrete. (bottom-center, strong)

**people_pose_or_placement**: score 7, raised in 4/9 calls, at middle-left

- gpt-6-sol: The two workers have very similar crouched poses and orange safety vests. (middle-left, weak)
- claude-opus-5.5: Two workers in hi-vis vests kneel side by side in matching poses on the wet slab, with no visible task or tools. It looks staged. (middle-left, weak)
- claude-opus-5.5: Two workers in orange hi-vis vests and white helmets kneel in nearly identical poses side by side on the left track. Their hands blend vaguely into the rail area. (middle-left, moderate)
- gemini-3.1-pro-preview: The kneeling worker on the right (closer to the center) has severely distorted anatomy. Their legs appear to bend at impossible angles and blend confusingly into the ground and their clothing. (middle-left, strong)

**people_anatomy**: score 6, raised in 4/9 calls, at middle-left

- gpt-6-sol: The workers’ hands and lower legs are indistinct, making their exact poses hard to verify. (middle-left, weak)
- gpt-6-sol: The two crouching workers' hands and lower legs are somewhat indistinct at this distance. (middle-left, weak)
- claude-opus-5.5: The two kneeling workers are small and somewhat smeared. Their hands and tools blend into the ground and the figures look near-identical in pose and gear. (middle-left, weak)
- gemini-3.1-pro-preview: The workers crouching on the tracks have blobby, indistinct anatomy, with arms that appear to be missing or fused seamlessly into the ground. (middle-left, strong)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: The overhead wires are sparse and loosely attached to the poles. There is no clear contact wire over each track, which is unusual for a tram depot. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wire suspension consists of illogical zigzag lines and dots instead of structured insulators, cantilever arms, and registration pipes. (top-center, moderate)
- gemini-3.1-pro-preview: A thin overhead wire appears to terminate arbitrarily in the sky without connecting to a pole or supporting structure. (top-center, moderate)

## c-two-R.jpg: mean P(AI) 0.41 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.30 / 0.68 / 0.68
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.01

**track_geometry**: score 16, raised in 6/9 calls, at bottom-center, center, middle-right

- gpt-6-sol: The overlapping rails at the junction look visually crowded at this resolution. (bottom-center, weak)
- claude-opus-5.5: The rails form an odd crossing: the left-branch inner rail and the right-branch rail merge into a sharp V that continues forward as a single narrow pair, with no switch blades, check rails or frog structure. This is not a coherent turnout layout. (center, moderate)
- claude-opus-5.5: The right track's rails converge into the shed oddly. Its gauge spacing appears inconsistent with the left track. (middle-right, weak)
- claude-opus-5.5: The rail geometry is inconsistent. The inner rails of the two branches converge into a single V-point frog-like shape, with no proper switch blades, check rails, or flangeways that would make a functional turnout. (center, moderate)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center

- claude-opus-5.5: Overhead wires are sparse and do not clearly connect to the poles in a coherent tram catenary layout. (top-center, weak)
- gemini-3.1-pro-preview: The overhead catenary wires appear as faint, somewhat fragmented lines that seem to start and stop abruptly and do not logically connect to the support poles in a physically sound manner. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires and their supporting structures are disjointed, with some wires fading away into the sky rather than forming a continuous, tensioned system. (top-center, moderate)

**tools_or_small_objects**: score 4, raised in 3/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and the small object beside the rail are hard to distinguish clearly; this is a weak possible generation artifact, though distance and rain could explain it. (middle-right, weak)
- gpt-6-sol: The workers' hands and the small objects beside the rails are hard to distinguish. (middle-right, weak)
- gemini-3.1-pro-preview: The items the workers are interacting with on the ground are indistinct dark shapes that blend seamlessly into the wet concrete and the workers' hands, lacking the defined edges of real tools. (middle-right, moderate)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at whole-image

- gpt-6-sol: The distant details are soft and hazy, which could resemble AI-generated texture, though it is also consistent with a wet view through glass. (whole-image, weak)
- claude-opus-5.5: The image has an overall soft, slightly smeared texture in the gravel and background clutter, with indistinct objects near the pallets. (whole-image, weak)
- claude-opus-5.5: The overall image has a smooth, slightly painterly quality, with muddy fine detail in the gravel and background trees. (whole-image, moderate)

**people_pose_or_placement**: score 4, raised in 3/9 calls, at middle-right

- claude-opus-5.5: Two workers in orange hi-vis kneel on the track in nearly identical poses and clothing, with tools ambiguous at their hands, as if staged. (middle-right, weak)
- claude-opus-5.5: Two workers kneel on the right branch, one on each rail, in near-identical poses and hi-vis outfits. This looks like a staged, duplicated arrangement. (middle-right, weak)
- gemini-3.1-pro-preview: The hands and tools of the worker on the right blend indistinctly into the wet ground and each other, lacking defined edges or clear physical interaction. (middle-right, moderate)

## d-empty-L.jpg: mean P(AI) 0.14 (passes)

- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.02

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The closely overlapping rails at the crossing are difficult to trace individually at this resolution. (bottom-center, weak)
- gemini-3.1-pro-preview: The diverging train tracks meet in an impossible 'X' shape where the inner rails simply terminate at a sharp point instead of forming a functional switch. (bottom-center, strong)

**texture_noise_or_sharpness**: score 3, raised in 2/9 calls, at top-right, middle-left

- gpt-6-sol: Small features inside the distant entrance are soft and somewhat repetitive, though distance and rain could explain this. (top-right, weak)
- gemini-3.1-pro-preview: The bare trees in the distant background have a smeared, painterly texture lacking natural photographic detail. (middle-left, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: A single catenary wire appears to hang down vertically from the sky and ends abruptly in mid-air without connecting to anything. (top-center, moderate)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The two illuminated entrances and diverging tracks form an unusually tidy, near-symmetrical composition. (whole-image, weak)

## d-empty-R.jpg: mean P(AI) 0.36 (fails)

- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.98 / 0.99 / 0.99

**track_geometry**: score 11, raised in 5/9 calls, at bottom-center

- gpt-6-sol: The compact rail crossing is difficult to resolve precisely at this distance, though it is not a clear error. (bottom-center, weak)
- gpt-6-sol: The rails form an unusual-looking X near the bottom of the frame, though the grooves remain largely continuous. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks intersect as continuous, solid lines forming a perfect 'X'. There are no flangeways, frogs, or switch components, which makes it physically impossible for a train's flanged wheels to pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks intersect in a continuous, solid 'X' shape, lacking the mandatory gaps or flangeways required for wheel flanges to pass through. (bottom-center, strong)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead catenary wires appear to terminate abruptly in mid-air near the support structures or lack realistic tension and logical mechanical connection points. (top-center, strong)
- gemini-3.1-pro-preview: The overhead power wires above the tracks are sparse, disconnected, and fade out into the sky rather than forming a functional, continuous catenary system. (top-center, strong)
- gemini-3.1-pro-preview: The overhead catenary wires appear somewhat chaotic and disconnected, lacking clear continuous paths or proper tensioning structures where they meet the central poles. (top-center, moderate)

**vehicles**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The crane attachment and the cargo on the flatbed of the parked white truck merge together into indistinct, structurally nonsensical shapes. (center, moderate)
- gemini-3.1-pro-preview: The red crane apparatus mounted behind the cab of the parked flatbed truck is structurally garbled and indistinct. (center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The tracks branch out into two paths directly in front of the camera, but there are no switch blades, points, or mechanisms visible to route a vehicle onto either branch. (bottom-center, strong)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at whole-image

- gemini-3.1-pro-preview: The image exhibits a universally soft, slightly painterly quality, lacking the crisp photographic grain and distinct fine details expected, particularly visible in the background and the textures of the wet ground. (whole-image, moderate)

## d-group-L.jpg: mean P(AI) 0.45 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.27 / 0.65 / 0.15
- google/gemini-3.1-pro-preview: 0.98 / 0.98 / 0.99

**track_geometry**: score 12, raised in 5/9 calls, at bottom-center

- gpt-6-sol: The rails form a complicated crossing whose alignment is a little difficult to parse at first glance. (bottom-center, weak)
- claude-opus-5.5: The two inner rails converge into an X-shaped crossing in front of the camera with no switch blades, check rails, or a proper frog, while the outer rails sit far apart. The result is an implausible turnout layout rather than a coherent track. (bottom-center, moderate)
- gemini-3.1-pro-preview: The intersection of the embedded rail grooves forms a smeared, physically illogical shape where the lines melt together rather than forming a distinct, machined mechanical crossing. (bottom-center, strong)
- gemini-3.1-pro-preview: The tracks cross each other forming a solid 'X'. There are no flangeways, frogs, or moving parts that would allow a train wheel's flange to pass through the intersection, making it physically impossible. (bottom-center, strong)

**people_pose_or_placement**: score 12, raised in 4/9 calls, at middle-left, middle-right

- claude-opus-5.5: Five workers kneel in a tight cluster on the left track, all in identical poses, which looks somewhat staged; their bodies, helmets and reflective bands are rendered coherently. (middle-left, weak)
- claude-opus-5.5: Five workers in identical orange hi-vis and white helmets kneel in a neat line along the left track in similar poses. It looks staged and repetitive. (middle-left, moderate)
- gemini-3.1-pro-preview: The workers on the left track lack clear anatomy. Their limbs and bodies are indistinct and appear to merge seamlessly into the ground, rails, or the tools they are holding. (middle-left, strong)
- gemini-3.1-pro-preview: The single worker on the right track has an unnatural posture, with ill-defined limbs and a torso that blends into the surrounding wet concrete. (middle-right, strong)

**people_anatomy**: score 6, raised in 3/9 calls, at middle-left, bottom-left

- gpt-6-sol: Some workers' hands and legs are hard to distinguish at this distance, leaving slight uncertainty about their forms. (middle-left, weak)
- gemini-3.1-pro-preview: Several workers on the left track appear as indistinct blobs of orange without clearly defined limbs, hands, or tools when viewed closely. (middle-left, moderate)
- gemini-3.1-pro-preview: The group of workers on the tracks appear as formless blobs of orange and silver; their limbs are indistinguishable and melt into the wet concrete and each other. (bottom-left, strong)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-left, top-center

- claude-opus-5.5: The overhead wires are sparse and inconsistent with the tracks below; the catenary does not clearly follow either branch. (top-left, weak)
- gemini-3.1-pro-preview: The overhead catenary wires and their support structures lack engineering coherence, with some lines appearing to tangle unnaturally or disappear into the building. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires meant to power the trains are faint, cross each other nonsensically, and simply disappear into the sky rather than connecting to continuous infrastructure. (top-left, moderate)

**vehicles**: score 4, raised in 2/9 calls, at center

- gemini-3.1-pro-preview: The white truck parked between the buildings has a recognizable cab, but the equipment on its bed is a nonsensical jumble of structural shapes that do not form any coherent machinery like a crane or typical truck bed. (center, moderate)
- gemini-3.1-pro-preview: The white truck parked in the background has completely smooth, deformed wheels, and the crane attachment is just a formless red and grey smudge lacking any mechanical parts. (center, moderate)

## d-group-R.jpg: mean P(AI) 0.32 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.60 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.99

**track_geometry**: score 11, raised in 5/9 calls, at bottom-center, center, middle-right

- gpt-6-sol: The exact rail connections at the crossing are somewhat hard to follow through the glare and windscreen. (bottom-center, weak)
- gpt-6-sol: The rails form a visually complex crossing near the camera that is somewhat difficult to follow. (bottom-center, weak)
- claude-opus-5.5: The two inner rails converge into a sharp V at the bottom center like a frog, but there is no proper switch mechanism, point blades, or guard rails. The geometry of the diverging track looks simplified. (center, moderate)
- claude-opus-5.5: Near the workers the right track's rails seem to merge or blur, with inconsistent gauge. (middle-right, weak)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: The catenary wires above the tracks are chaotic and some appear to end abruptly in mid-air without connecting to any support. (top-left, strong)
- gemini-3.1-pro-preview: Some of the overhead contact wires appear to fade out or terminate abruptly in mid-air without connecting to any tensioning structure or pole. (top-center, moderate)

**people_anatomy**: score 5, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The workers lack fine detail, and the closest worker on the right track has somewhat distorted, stubby-looking arms. (middle-right, moderate)
- gemini-3.1-pro-preview: The workers on the track lack defined limbs, particularly their legs and feet, which seem to melt seamlessly into the wet concrete and rails. (middle-right, strong)

**people_pose_or_placement**: score 2, raised in 2/9 calls, at middle-right

- claude-opus-5.5: Four workers in matching orange vests and white helmets cluster kneeling on the right track, while a single kneeling worker sits on the left track. The arrangement looks staged and symmetric, typical of generated scenes. (middle-right, weak)
- gemini-3.1-pro-preview: Because two workers on the right track are kneeling very close together (one directly behind the other), their shapes slightly blend together due to image resolution, which might vaguely resemble AI body merging. (middle-right, weak)

**vehicles**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The white truck parked in the background has distorted wheels that blend into the ground, and the structure of its flatbed and rear area is indistinct and structurally nonsensical. (center, moderate)

## d-two-L.jpg: mean P(AI) 0.27 (passes)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.05

**people_anatomy**: score 4, raised in 3/9 calls, at center, middle-left

- gpt-6-sol: The workers' hands and lower legs are somewhat indistinct at this resolution. (center, weak)
- gpt-6-sol: The kneeling workers' hands and lower legs are difficult to make out clearly. (center, weak)
- gemini-3.1-pro-preview: The legs and lower body of the kneeling worker on the right appear to melt into the wet ground, lacking clear anatomical definition. (middle-left, moderate)

**track_geometry**: score 4, raised in 2/9 calls, at bottom-center

- gpt-6-sol: The rails cross in a visually complex junction that could initially look inconsistent. (bottom-center, weak)
- gemini-3.1-pro-preview: The intersection of the inner rails forms a solid 'X' with no gaps or crossing flangeways for train wheels to pass through, creating an impossible rail junction. (bottom-center, strong)

**overhead_wires_or_poles**: score 4, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead wires above the tracks seem to fade out into the sky or connect to support poles in illogical, disjointed ways. (top-left, moderate)
- gemini-3.1-pro-preview: Some of the overhead wires appear to terminate abruptly in mid-air or are disconnected from any logical supporting structures or poles. (top-left, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The track crossing (frog) where the two lines diverge is formed as a solid 'X' without any gaps (flangeways) for the train wheel flanges to pass through, which is physically impossible for a functional railway. (bottom-center, strong)

**people_pose_or_placement**: score 3, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The inner rail of the left track appears to pass directly through the right leg/knee area of the worker kneeling on the right, indicating a severe rendering error. (middle-left, strong)

## d-two-R.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 13, raised in 4/9 calls, at bottom-center, middle-left

- gpt-6-sol: The rails at the foreground crossing are visually busy and a little difficult to follow. (bottom-center, weak)
- gemini-3.1-pro-preview: The crossing of the inner rails forms a solid 'X' without any gaps, frogs, or flangeways, making it physically impossible for flanged railway wheels to pass through the intersection. (bottom-center, strong)
- gemini-3.1-pro-preview: The intersection where the rails cross forms a solid continuous 'X' without any gaps, grooves, or check rails that are mechanically required for wheel flanges to pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: The two rails of the left track converge as they approach the building, losing the correct track gauge, and the right rail vanishes entirely before reaching the doorway. (middle-left, strong)

**people_anatomy**: score 9, raised in 4/9 calls, at middle-right

- gpt-6-sol: The workers’ hands and equipment are hard to distinguish at this distance, leaving some fine details ambiguous. (middle-right, weak)
- gemini-3.1-pro-preview: The left worker kneeling on the track has a malformed right leg that appears to be missing a proper boot and merges indistinctly with the ground. (middle-right, strong)
- gemini-3.1-pro-preview: The workers kneeling on the track have indistinct, blobby lower bodies that seem to melt into the ground, and the hands of the rightmost worker fuse indistinguishably into the metal bar. (middle-right, strong)
- gemini-3.1-pro-preview: The hands of the workers blend indistinctly into the silver tool they are holding, lacking clear fingers or a realistic grasp. (middle-right, moderate)

**overhead_wires_or_poles**: score 8, raised in 3/9 calls, at top-left, top-center

- gemini-3.1-pro-preview: Several overhead wires appear kinked, disconnected, or end abruptly in the sky without connecting to insulators or support poles. (top-left, strong)
- gemini-3.1-pro-preview: The overhead catenary wires form a nonsensical web, with some lines ending abruptly in mid-air and others intersecting without proper physical tension or support structures. (top-center, strong)
- gemini-3.1-pro-preview: The overhead wires are discontinuous and appear to float or connect illogically to the support structures, rather than forming a functional mechanical system. (top-center, moderate)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The long metal bar handled by the workers interacts confusingly with the left worker's body, seeming to pass behind his arm but without clear spatial logic. (middle-right, moderate)

**vehicles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The red crane mechanism mounted on the white flatbed truck is rendered as a jumbled, incoherent mass of shapes rather than distinct, articulated mechanical parts. (top-center, moderate)

## a-51.jpg: mean P(AI) 0.63 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.90 / 0.88 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 15, raised in 5/9 calls, at center, bottom-center, middle-right, middle-left

- claude-opus-5.5: The rails do not keep a consistent gauge. On the left branch one rail runs straight up while its partner veers toward the center frog. On the right branch the two rails converge and pinch together near the kneeling worker, so neither branch forms a plausible parallel pair. (center, strong)
- claude-opus-5.5: The switch frog area is a smooth merged X shape without proper switch blades, point mechanism, or guard rails; the rails blend into each other unrealistically. (bottom-center, moderate)
- claude-opus-5.5: The right track's rails bulge/curve in a wavy manner near the kneeling worker rather than staying parallel at constant gauge. (middle-right, moderate)
- claude-opus-5.5: The switch has a frog and diverging rails, but the right branch rails curve and merge in a somewhat smeared, ambiguous way near the frog. The groove rails also blend into the concrete. (bottom-center, moderate)

**overhead_wires_or_poles**: score 14, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: The catenary wires are sparse and inconsistent. A center pole stands in the grass without clearly supporting the tracks, and the cross-span wires end ambiguously. (top-center, moderate)
- claude-opus-5.5: The catenary wires run inconsistently; a central pole stands in the grass with wires connecting oddly, and the overhead lines from the top of frame don't align with the tracks below. (top-center, weak)
- claude-opus-5.5: The catenary wires and cross-spans are mostly coherent, though some attachment points to the poles are vague. (top-center, weak)
- gemini-3.1-pro-preview: The catenary wires floating in the sky simply terminate in mid-air or connect to each other in nonsensical geometric patterns rather than forming a functional overhead line system. (top-center, strong)

**switch_mechanism**: score 12, raised in 5/9 calls, at bottom-center

- gpt-6-sol: Some rail joins at the switch are hard to distinguish at this viewing distance, making the exact mechanism unclear. (bottom-center, weak)
- claude-opus-5.5: The frog and switch area is an odd X-shaped crossing that lacks believable switch blades, guard rails or a point mechanism. (bottom-center, moderate)
- gemini-3.1-pro-preview: The inner rails of the two tracks merge into a solid V-shape with no flangeways or movable switch blades, which would be physically impossible for train wheels to pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: The track junction lacks moving parts, points, or a proper frog; the flangeway grooves simply merge or disappear into solid concrete, making it physically impossible for a train to navigate. (bottom-center, strong)

**composition_or_staging**: score 9, raised in 5/9 calls, at whole-image, center

- gpt-6-sol: The two sheds and branches form a notably balanced composition, though that is possible in a photograph. (whole-image, weak)
- gpt-6-sol: The workers' similar orange vests and their distribution across the two tracks give the scene a somewhat staged appearance, though they fit a track-work setting. (whole-image, weak)
- claude-opus-5.5: Classic trolley-problem setup seen from a driver's cab: five workers standing on one branch of a switch and a single worker kneeling on the other branch. (whole-image, moderate)
- claude-opus-5.5: Five workers stand in a neat formation on/around the left track facing away, while one lone worker kneels on the right track — a staged trolley-problem setup typical of generated imagery. (center, moderate)

**people_pose_or_placement**: score 8, raised in 4/9 calls, at middle-left, center

- claude-opus-5.5: The five workers wear near-identical vests, helmets and ear defenders and stand stiffly in a cluster with their backs to the camera on the rail, which looks posed and cloned. (middle-left, moderate)
- claude-opus-5.5: Workers are near-identical clones in vest, helmet and earmuffs, with uniform stiff postures. (center, moderate)
- claude-opus-5.5: The five workers stand stiffly in a near-symmetrical formation with their backs to the camera, all facing the same direction. The poses look uniform and unnatural for a real work crew. (middle-left, moderate)
- gemini-3.1-pro-preview: The feet and legs of the workers walking away on the left track lack articulation and seem to smudge into the surface of the concrete. (center, moderate)

## b-two.jpg: mean P(AI) 0.90 (fails)

- anthropic/claude-opus-5.5: 0.90 / 0.92 / 0.93
- openai/gpt-6-sol: 0.76 / 0.82 / 0.76
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 24, raised in 8/9 calls, at center, bottom-center

- claude-opus-5.5: Instead of a proper switch with points and a frog, the inner rails of the two tracks cross each other in a simple X in the middle of the paving. That is not how a diverging tram junction is built. (center, strong)
- claude-opus-5.5: The tracks form an X-shaped crossing where the left branch's rail crosses diagonally into the right branch, with no proper frog, switch points, or diamond crossing. The geometry is implausible. (center, strong)
- claude-opus-5.5: The two branches form an X-shaped crossing with no frog, guard rails, or switch blades; rails merge and cross in a way that is physically implausible for a turnout. (center, strong)
- claude-opus-5.5: The left branch track has a third rail running between its rails, beside the workers, with inconsistent gauge. (center, moderate)

**overhead_wires_or_poles**: score 17, raised in 6/9 calls, at top-center, middle-right

- claude-opus-5.5: The catenary wires fan out and converge inconsistently. Some span wires end in mid-air and do not follow the track routes; the hangers are vague. (top-center, moderate)
- claude-opus-5.5: The overhead catenary wires wander inconsistently and do not follow the track paths. Some wires end mid-air or connect illogically between poles. (top-center, moderate)
- claude-opus-5.5: The catenary wires do not align with the tracks. Wires end or cross arbitrarily between poles, and the pole placement is random. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires are disconnected, floating in mid-air, and branch in illogical zigzag patterns that do not connect to the support poles properly. (top-center, strong)

**camera_or_windscreen**: score 11, raised in 5/9 calls, at whole-image, bottom-left, bottom-right

- claude-opus-5.5: The cab frame and wiper are plausible, but the wiper arm geometry on the left is odd and doubled. (whole-image, weak)
- claude-opus-5.5: The wiper arm and the windscreen frame lines are oddly doubled and bend unnaturally. (bottom-left, moderate)
- gemini-3.1-pro-preview: The windshield wiper mechanism visible inside the cabin has multiple overlapping, nonsensical arms that do not appear mechanically functional. (bottom-left, moderate)
- gemini-3.1-pro-preview: There is a strange, distorted circular artifact in the reflection on the lower right side of the window that does not correspond to a realistic optical reflection or lens flare. (bottom-right, moderate)

**switch_mechanism**: score 8, raised in 3/9 calls, at bottom-center

- claude-opus-5.5: There are no switch blades, point machine or check rails at the divergence. The rails just merge and cross smoothly. (bottom-center, strong)
- claude-opus-5.5: The rails converge near the cab with no visible switch blades or mechanism. A rail simply crosses another rail at an odd angle. (bottom-center, moderate)
- gemini-3.1-pro-preview: The track junction is physically impossible; the intersecting rails cross over each other as flat lines rather than having proper functional points, frogs, and gaps for wheel flanges. (bottom-center, strong)

**buildings**: score 4, raised in 3/9 calls, at middle-right, center

- claude-opus-5.5: The two depot sheds are near-identical mirror copies with the same blue door, placed symmetrically at the end of each track, with a staged look. (middle-right, moderate)
- claude-opus-5.5: Two nearly identical symmetric depot sheds sit at the ends of the two branches. This looks like overly neat staging. (middle-right, weak)
- claude-opus-5.5: The two depot buildings are near-identical and placed symmetrically, each with a single track entering, giving a staged, generated look. (center, weak)
