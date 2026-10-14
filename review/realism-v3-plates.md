# Realism check: v3-plates

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 112 | 8/8 |
| switch_mechanism | 60 | 7/8 |
| overhead_wires_or_poles | 45 | 8/8 |
| background_clutter | 17 | 6/8 |
| composition_or_staging | 12 | 6/8 |
| texture_noise_or_sharpness | 11 | 5/8 |
| buildings | 8 | 4/8 |
| reflections_or_wet_surfaces | 6 | 2/8 |
| vehicles | 4 | 1/8 |
| tools_or_small_objects | 4 | 2/8 |
| text_signage_or_markings | 3 | 2/8 |
| lighting_or_shadows | 1 | 1/8 |

## c-empty-L.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.03 / 0.02
- anthropic/claude-opus-5.5: 0.06 / 0.10 / 0.10
- google/gemini-3.1-pro-preview: 0.95 / 0.98 / 0.98

**track_geometry**: score 10, raised in 3/9 calls, at bottom-center, middle-right

- gpt-6-sol: Several rails meet near the lower edge, and their individual paths are difficult to trace at the junction. (bottom-center, weak)
- gemini-3.1-pro-preview: The track switch geometry is physically impossible for a train to navigate. The inner rails form a rigid 'V' shape pointing towards the camera without any movable switch blades (points) or a crossing path to allow a right wheel to transition to the left track. (bottom-center, strong)
- gemini-3.1-pro-preview: The track switch point where the inner rails intersect has no defined flangeways for train wheels, and the solid steel rails blend nonsensically into the concrete. (bottom-center, strong)
- gemini-3.1-pro-preview: The left rail of the right branch track appears to vanish or become severely distorted as it enters the building. (middle-right, strong)

**buildings**: score 5, raised in 2/9 calls, at middle-left, middle-right

- gemini-3.1-pro-preview: The interior of the left maintenance shed lacks distinct structural details, appearing instead as an indistinct, blurry collection of vague shapes. (middle-left, moderate)
- gemini-3.1-pro-preview: Similar to the left shed, the interior of the right shed is rendered with smeared, undefined textures rather than recognizable mechanical equipment or architecture. (middle-right, moderate)
- gemini-3.1-pro-preview: The yellow and black hazard striping on the right vertical pillar of the left building's doorway is uneven, with inconsistent angles and spacing. (middle-left, weak)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-right, top-center

- gemini-3.1-pro-preview: The overhead electrical wire leading towards the building on the right simply ends or dissolves into the building's facade rather than being properly anchored or suspended. (top-right, moderate)
- gemini-3.1-pro-preview: An overhead wire extending horizontally to the right from the leftmost pole terminates abruptly in mid-air. (top-center, strong)

**vehicles**: score 4, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: The white van exhibits structural inconsistencies, such as a crooked vertical line separating the rear doors and a yellow license plate that is just an indistinct smudge. (middle-right, moderate)
- gemini-3.1-pro-preview: The white van parked on the right lacks sharp photographic detail; its wheels, wheel arches, and license plate area appear smudged and indistinct. (middle-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at whole-image, top-center

- gpt-6-sol: Some distant details are indistinct, which could superficially resemble AI-generated softness, though rain and distance also explain it. (whole-image, weak)
- gpt-6-sol: Small objects in the distant yard are indistinct, though rain and distance could explain this. (top-center, weak)
- gpt-6-sol: The distant details are soft and low-contrast, an effect that could superficially resemble AI smoothing. (whole-image, weak)

## d-empty-L.jpg: mean P(AI) 0.14 (passes)

- anthropic/claude-opus-5.5: 0.06 / 0.06 / 0.06
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.02 / 0.01

**track_geometry**: score 8, raised in 1/9 calls, at bottom-center, middle-left

- gemini-3.1-pro-preview: The track crossing is physically impossible; the rails simply cross like drawn lines forming an 'X' without the necessary grooves or frogs for wheel flanges to pass. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails forming the 'V' shape just above the crossing merge into a solid metallic mass rather than maintaining distinct, functional rail profiles. (bottom-center, strong)
- gemini-3.1-pro-preview: The right rail of the left branch track becomes inconsistently thin and appears to vanish as it gets closer to the building entrance. (middle-left, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-left

- gemini-3.1-pro-preview: An overhead catenary wire extending towards the left side fades into the grey sky without connecting to another pole or structure. (top-left, moderate)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: Small equipment and details deep inside the left entrance are indistinct; this offers little basis for checking their shapes. (top-center, weak)

**composition_or_staging**: score 1, raised in 1/9 calls, at whole-image

- gpt-6-sol: The two similar entrances and branching tracks create an unusually balanced composition. (whole-image, weak)

**buildings**: score 1, raised in 1/9 calls, at top-left

- gpt-6-sol: The repeated lights and structures receding into the left doorway look somewhat uniform, which could be mistaken for generated repetition. (top-left, weak)

## e-1.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 15, raised in 3/9 calls, at middle-left, bottom-right, bottom-center, center

- gemini-3.1-pro-preview: The leftmost rail of the track leading into the left bay completely disappears into the flat, wet concrete well before reaching the building entrance. (middle-left, strong)
- gemini-3.1-pro-preview: A short, malformed segment of metal resembling a check rail sits parallel to the main rail, with an unexplained, shape-shifting black blob resting on top of it. (bottom-right, strong)
- gemini-3.1-pro-preview: The rails crossing each other form a solid 'X' without any flangeway gaps for train wheels to pass through, a structural impossibility for a functioning railway. (bottom-center, strong)
- gemini-3.1-pro-preview: The rails leading towards the left open bay become indistinct and appear to melt or fade into the wet concrete floor before reaching the building. (center, strong)

**switch_mechanism**: score 8, raised in 3/9 calls, at bottom-left

- gemini-3.1-pro-preview: The conduits and rods connecting the grey control box to the track switch are wavy, structurally disjointed, and appear to melt into the ground. (bottom-left, strong)
- gemini-3.1-pro-preview: The connecting rods from the grey switch box end in a blurry, undefined connection point at the rails, lacking the specific mechanical structure of a real point machine. (bottom-left, moderate)
- gemini-3.1-pro-preview: The linkage rods from the grey trackside control box connect to the rails, but the rails themselves do not form proper tapering switch blades (points); they appear as blocky, irregular shapes. (bottom-left, strong)

**overhead_wires_or_poles**: score 6, raised in 3/9 calls, at top-center

- gemini-3.1-pro-preview: The thin overhead wires leading toward the bays fade abruptly into the sky or the building facade without any clear mounting brackets or tensioning equipment. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead electrical wires appear as faint, disconnected lines that do not form a coherent or mechanically sound catenary system. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires converging towards the building facade seem to fade out or attach ambiguously to the flat metal cladding rather than distinct structural anchor points. (top-center, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left, center

- gemini-3.1-pro-preview: The large wooden cable spool next to the building has an asymmetrical, warped shape, an off-center hole, and swirling textures instead of distinct wooden planks. (middle-left, moderate)
- gemini-3.1-pro-preview: The yellow cage or structure located between the tracks right in front of the building has messy, incomplete vertical bars that seem to blend together. (center, moderate)

**composition_or_staging**: score 3, raised in 3/9 calls, at top-center, center

- gpt-6-sol: The two open bays and branching tracks make a notably balanced, nearly symmetrical scene. (top-center, weak)
- gpt-6-sol: The two large openings and branching rails form an unusually tidy, nearly symmetrical composition; this is also plausible for a depot. (center, weak)
- gpt-6-sol: The two similarly sized bays and branching tracks create a near-symmetrical composition, a pattern AI images can also produce. (top-center, weak)

## e-2.jpg: mean P(AI) 0.15 (passes)

- openai/gpt-6-sol: 0.03 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.08 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.99

**track_geometry**: score 6, raised in 4/9 calls, at center

- gpt-6-sol: The tight X-shaped rail crossing is difficult to trace precisely at this resolution and could initially look malformed. (center, weak)
- gpt-6-sol: The overlapping rails at the central crossing are visually intricate and somewhat hard to trace. (center, weak)
- gpt-6-sol: The rails form a complex crossing and diverge toward the two depot entrances; the central X looks unusual at first glance. (center, weak)
- gemini-3.1-pro-preview: The inner rails of the diverging tracks intersect and merge into a solid 'X' shape without any gaps or flangeways required for train wheels to pass through. (center, strong)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: The rods extending from the grey switch box connect to a disjointed piece of rail that ends abruptly, failing to form a functional switch blade. (bottom-left, strong)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: An overhead catenary wire stretches from the mast on the left and simply fades out into the sky without connecting to a support or continuing logically. (top-center, moderate)

**background_clutter**: score 2, raised in 1/9 calls, at middle-left

- gemini-3.1-pro-preview: The metal palisade fence has inconsistent spacing, and several vertical bars appear to warp or melt into each other. (middle-left, moderate)

## e-3.jpg: mean P(AI) 0.36 (fails)

- anthropic/claude-opus-5.5: 0.07 / 0.08 / 0.06
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 12, raised in 4/9 calls, at bottom-center, center, middle-left

- gpt-6-sol: The tightly overlapping rails at the crossing are difficult to trace individually, a slight visual ambiguity. (bottom-center, weak)
- gemini-3.1-pro-preview: The intersecting railway tracks form a solid 'X' shape without any gaps, frogs, or flangeways that are physically necessary for train wheels to pass through a crossing. (center, strong)
- gemini-3.1-pro-preview: The leftmost rail of the track entering the left building bay appears to dissolve or merge smoothly into the concrete ground just before the entrance. (middle-left, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks merge into a solid 'X' shape. There are no flangeways (gaps) for train wheels to pass through, making the intersection physically impossible to navigate. (center, strong)

**switch_mechanism**: score 8, raised in 3/9 calls, at bottom-left

- gemini-3.1-pro-preview: A switch motor box is present next to a fixed diamond crossing, which makes no sense as there are no movable tracks here. Furthermore, its connecting rods attach to the outside of the rail web instead of movable switch points. (bottom-left, strong)
- gemini-3.1-pro-preview: The rods extending from the switch box do not connect to defined, movable switch points on the track; instead, they appear to terminate abruptly or merge into the concrete and solid rail structure. (bottom-left, moderate)
- gemini-3.1-pro-preview: The metal rods extending from the grey switch motor box terminate in a blurry, undefined mess against the rail, failing to connect to any movable switch points. (bottom-left, strong)

**overhead_wires_or_poles**: score 5, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: Looking inside the left building bay, there are segments of overhead wires that appear to float erratically or connect to the ceiling in nonsensical ways. (top-center, weak)
- gemini-3.1-pro-preview: The overhead electrical wire leading towards the left bay appears to terminate by merging directly into the exterior corrugated siding above the door, rather than passing continuously into the building. (top-left, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires extending from the support poles do not continue logically towards or into the building; instead, they abruptly fade out or merge into the corrugated facade. (top-center, moderate)

**background_clutter**: score 4, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The stack of wooden pallets next to the cable spool looks like a solid block with horizontal lines painted on it, lacking the actual gaps and internal structure of real pallets. (middle-left, moderate)
- gemini-3.1-pro-preview: The chain-link fence in the background behind the wooden spool lacks a consistent geometric mesh, appearing instead as irregular, smudged patterns typical of AI generation. (middle-left, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at whole-image, center

- gpt-6-sol: The two depot bays and branching tracks form a notably balanced, centered composition. (whole-image, weak)
- gpt-6-sol: The near-symmetric twin bays and prominent X-shaped crossing have a composed appearance, though both are plausible for this facility. (center, weak)

## f-1.jpg: mean P(AI) 0.61 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.70 / 0.85 / 0.88
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 26, raised in 6/9 calls, at center, bottom-center, middle-left

- claude-opus-5.5: The two inner rails form a long, clean X with no visible switch blades or heel joints ahead of the crossing. The rail spacing near the camera looks wider than either branch track's gauge further back, which makes it hard to read as a working wye turnout. (center, moderate)
- claude-opus-5.5: The two inner rails cross each other in a large X with no frog, guard rails or flangeways, and each branch's rail pair cannot be traced to a consistent gauge back to the single approach track. The layout is not a buildable turnout. (center, strong)
- claude-opus-5.5: Four parallel rails run at the bottom with irregular spacing, and some rail segments sit on raised concrete strips that simply end. Real track would show two clear gauges or a proper switch. (bottom-center, moderate)
- claude-opus-5.5: The two inner rails cross in a simple X with no proper frog, guard rails or switch points. Each rail jumps from one track to the other, so the gauge of both tracks becomes nonsensical. (center, strong)

**switch_mechanism**: score 17, raised in 6/9 calls, at bottom-left, bottom-center

- claude-opus-5.5: A switch-machine box sends a rod toward the rails, but there is no clear moving point blade where the rod meets the track. The linkage looks decorative rather than functional. (bottom-left, moderate)
- claude-opus-5.5: The switch-machine box connects by a rod running into the slab rather than to visible movable switch blades or points. There are no tie bars. (bottom-left, moderate)
- claude-opus-5.5: The switch machine box's throw rod runs to the outer rail area but connects to no visible switch points. (bottom-left, moderate)
- gemini-3.1-pro-preview: The track splits into two, but there are no visible moving switch points (blades) to direct a train; the rails just smoothly branch off from one another. (bottom-center, strong)

**overhead_wires_or_poles**: score 12, raised in 6/9 calls, at top-center, top-left

- claude-opus-5.5: Only a few thin wires drop toward each door, with no full catenary, droppers or registration arms on the poles. This is sparse and inconsistent for an electrified depot. (top-center, weak)
- claude-opus-5.5: Only a few thin wires hang above the doors, with no proper catenary, droppers or registration arms over the tracks, despite the tall poles. (top-center, moderate)
- claude-opus-5.5: Only a few thin, vague wires drop toward the door openings. There is no coherent catenary over the tracks despite the many poles. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are very faint, disjointed, and seem to disappear into the sky rather than forming a coherent continuous catenary system for powering trains. (top-center, strong)

**composition_or_staging**: score 4, raised in 4/9 calls, at top-center, whole-image, middle-left

- gpt-6-sol: The two illuminated bays look nearly symmetrical, a repetition that can occur in generated images but is also natural for a depot. (top-center, weak)
- gpt-6-sol: The two similar bays and the nearly symmetrical branching tracks have a staged-looking regularity. (whole-image, weak)
- gpt-6-sol: The two lit depot bays and branching tracks are unusually symmetrical, though that could simply be the facility's layout. (middle-left, weak)
- claude-opus-5.5: The scene is perfectly symmetric, with two identical bay doors and a clean, staged dusk mood typical of generated imagery. (whole-image, weak)

**reflections_or_wet_surfaces**: score 2, raised in 2/9 calls, at whole-image

- claude-opus-5.5: Wet asphalt reflections are evenly smooth and stylized, with a uniformly polished, painterly look. (whole-image, weak)
- gemini-3.1-pro-preview: The glossy, highly detailed reflections on the wet concrete are very prominent and stylized, a common hallmark of AI generation models aiming for a hyper-realistic aesthetic. (whole-image, weak)

## f-2.jpg: mean P(AI) 0.63 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.88 / 0.90 / 0.85
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 27, raised in 6/9 calls, at center, bottom-center

- claude-opus-5.5: The inner rails form a plain X crossing in the middle of the slab with no proper frog, guard rails or diamond structure, and the rail pairs do not keep a consistent gauge as they diverge toward the two portals. (center, strong)
- claude-opus-5.5: In the foreground the rails come in pairs that are too close together (about 520 px and 580 px), which does not correspond to any coherent track layout. (bottom-center, moderate)
- claude-opus-5.5: The two inner rails simply cross in an X. Each branch ends up pairing rails that start far apart at the bottom (about x≈520 with x≈900), so there is no consistent gauge and no real turnout or frog geometry. (center, strong)
- claude-opus-5.5: The crossing area has odd embedded plates and grooves that do not match a real diamond crossing or frog. (center, moderate)

**switch_mechanism**: score 17, raised in 6/9 calls, at bottom-left, middle-left

- claude-opus-5.5: The switch machine box's throw rod runs into a single rail where there are no visible switch points or movable blades. (bottom-left, strong)
- claude-opus-5.5: A point-machine box has a rod running to the rail, but there are no switch blades or moving points anywhere. The linkage just ends at the rail. (bottom-left, strong)
- claude-opus-5.5: The switch machine box has a throw rod that ends at a single rail with no visible switch points. It looks generic rather than mechanically connected. (bottom-left, moderate)
- gemini-3.1-pro-preview: The grey switch mechanism box has a linkage rod that extends towards the track but simply attaches to the concrete or the side of a continuous rail. There are no movable switch point blades for it to operate. (bottom-left, strong)

**overhead_wires_or_poles**: score 10, raised in 5/9 calls, at top-center, top-left

- claude-opus-5.5: The overhead wires end abruptly and attach vaguely near the portals, with no consistent catenary over the tracks. (top-center, moderate)
- claude-opus-5.5: Catenary wires dangle and end vaguely near the doors, with no coherent support structure. (top-center, moderate)
- claude-opus-5.5: The overhead wires are sparse and end oddly near the building. There is no coherent catenary over the tracks. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wire support structures on the poles are blurry and lack detail, and the wires themselves appear to fade out or terminate illogically in mid-air. (top-left, strong)

**reflections_or_wet_surfaces**: score 4, raised in 2/9 calls, at middle-right

- gemini-3.1-pro-preview: Despite the highly reflective, wet ground that clearly mirrors the overhead lights, the bright orange bollard on the right casts almost no corresponding orange reflection. (middle-right, moderate)
- gemini-3.1-pro-preview: An orange bollard is standing on the wet concrete but casts essentially no reflection, which contradicts the strong, sharp reflections cast by the rails and lights on the same surface. (middle-right, moderate)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at middle-right, whole-image

- gpt-6-sol: Some pavement detail is soft and smeared, though this is also consistent with a wet, low-light photograph. (middle-right, weak)
- gpt-6-sol: Some distant fixtures look soft, making their fine details difficult to check. (whole-image, weak)
- claude-opus-5.5: The image has a smooth, HDR-like rendering with soft, painterly detail in the depot interiors and the fence. (whole-image, weak)

## f-3.jpg: mean P(AI) 0.23 (passes)

- openai/gpt-6-sol: 0.04 / 0.03 / 0.04
- anthropic/claude-opus-5.5: 0.60 / 0.15 / 0.12
- google/gemini-3.1-pro-preview: 0.99 / 0.05 / 0.01

**track_geometry**: score 8, raised in 3/9 calls, at bottom-center, center, middle-left

- gpt-6-sol: The rails form a visible crossing and continue toward the two depot entrances; the junction is complex enough to warrant a closer look. (bottom-center, weak)
- claude-opus-5.5: The two inner rails cross in a clean X (frog) before any visible switch blades. Near the camera the inner rails stay well apart from the outer stock rails rather than tapering against them, which is an unusual layout for a real turnout. (center, moderate)
- gemini-3.1-pro-preview: The inner rails of the two diverging tracks intersect to form a solid, continuous 'X' shape. Real railway crossings require gaps (flangeways) and frogs for the wheel flanges to pass through, making this solid intersection physically impossible. (center, strong)
- gemini-3.1-pro-preview: As the track enters the left bay, the gauge (distance between the two rails) appears to widen significantly in a way that is structurally incorrect for a railway. (middle-left, moderate)

**switch_mechanism**: score 4, raised in 2/9 calls, at bottom-left

- claude-opus-5.5: The point machine box and its rods reach toward the left rail, but there are no clearly articulated moving switch blades where the rods meet the track. (bottom-left, weak)
- gemini-3.1-pro-preview: A switch motor box is connected to the rails via metal rods, but the rails themselves lack movable switch points (blades). The rails are drawn as continuous lines, rendering the switch mechanism non-functional. (bottom-left, strong)

**texture_noise_or_sharpness**: score 3, raised in 3/9 calls, at middle-right, whole-image

- gpt-6-sol: Some distant equipment by the doors is indistinct, which could resemble generated detail, though distance and low light also explain it. (middle-right, weak)
- claude-opus-5.5: There is a slightly smoothed, painterly texture on the asphalt and trees, suggesting generation or heavy processing. (whole-image, weak)
- claude-opus-5.5: There is slight oversharpening and compression smoothing, likely from upscaling or a video frame, but no melted or nonsensical details. (whole-image, weak)

**overhead_wires_or_poles**: score 3, raised in 2/9 calls, at top-left, top-center

- claude-opus-5.5: The overhead wires are sparse and fade out ambiguously near the poles and doorways. (top-left, weak)
- gemini-3.1-pro-preview: The overhead catenary wires appear disconnected, disjointed, and chaotic. They do not form a logical, continuous electrical network needed to power trams or trains. (top-center, moderate)

**tools_or_small_objects**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: The base of the orange and white bollards on the right side seem to fade or melt indistinctly into the wet ground, lacking a realistic physical base or logical anchor point. (middle-right, moderate)
