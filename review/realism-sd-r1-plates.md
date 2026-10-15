# Realism check: sd-r1-plates

Judges: anthropic/claude-opus-5.5, openai/gpt-6-sol, google/gemini-3.1-pro-preview; 3 calls each per image. Gate: mean P(AI) ≤ 0.35.
Tell score = AI-pointing evidence weighted weak 1 / moderate 2 / strong 3, summed over judges and calls.

## Recurring tells across all images

| Category | Score | Images where raised |
|---|---|---|
| track_geometry | 61 | 7/8 |
| overhead_wires_or_poles | 35 | 7/8 |
| background_clutter | 11 | 4/8 |
| text_signage_or_markings | 10 | 4/8 |
| buildings | 10 | 4/8 |
| texture_noise_or_sharpness | 10 | 5/8 |
| switch_mechanism | 8 | 4/8 |
| camera_or_windscreen | 6 | 2/8 |
| composition_or_staging | 5 | 2/8 |
| lighting_or_shadows | 2 | 2/8 |
| tools_or_small_objects | 1 | 1/8 |

## s-1.jpg: mean P(AI) 0.37 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.10
- google/gemini-3.1-pro-preview: 0.99 / 0.95 / 0.98

**track_geometry**: score 13, raised in 5/9 calls, at bottom-center, center, middle-left

- gpt-6-sol: The rails meet at a sharply angled crossing that is visually complex, though the rail edges remain continuous. (bottom-center, weak)
- gpt-6-sol: The branching and crossing rails are visually complicated, so their exact connections are difficult to trace at a glance. (center, weak)
- gemini-3.1-pro-preview: The inner rails of the two tracks intersect to form a solid 'X' with no flangeways (grooves) for the wheel flanges to pass through, making it physically impossible for a tram to use. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the two branching tracks cross each other forming a solid 'X' without the necessary flangeway gaps (the gaps in a frog that allow wheel flanges to pass). (bottom-center, strong)

**overhead_wires_or_poles**: score 8, raised in 4/9 calls, at top-center

- gpt-6-sol: Several thin wires appear to end or overlap ambiguously against the bright sky; their connections are hard to trace. (top-center, weak)
- gemini-3.1-pro-preview: The overhead wires are disjointed and illogical; for instance, a vertical wire drops down from a horizontal line and simply terminates in mid-air. (top-center, strong)
- gemini-3.1-pro-preview: The overhead wires exhibit chaotic connections, with some lines appearing to intersect illogically or fade out without proper physical attachment to the supporting structures. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead wires are somewhat messy, with some lines appearing to merge arbitrarily or lacking clear, physically plausible attachment points to the support structures. (top-center, moderate)

**switch_mechanism**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: There is a complete absence of any switch mechanism (points, switch blades, tie bars) where the tracks diverge. (bottom-center, strong)

**text_signage_or_markings**: score 3, raised in 2/9 calls, at bottom-left

- gemini-3.1-pro-preview: The painted ground markings (white and yellow lines) are blurry, chaotic, and do not follow a clear or logical pattern. (bottom-left, moderate)
- gemini-3.1-pro-preview: The yellow painted markings on the concrete surface are indistinct, nonsensical shapes rather than clear lines or symbols. (bottom-left, weak)

## s-2.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.06
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.98

**track_geometry**: score 10, raised in 4/9 calls, at bottom-center

- gpt-6-sol: The overlapping rails at the junction are difficult to trace at a glance and could appear irregular. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails from the two sheds intersect and cross over each other forming an 'X', while the outer rails diverge towards the edges of the frame. This results in an impossibly expanding track gauge (width between the rails) as the tracks approach the foreground, which would derail any train or tram. (bottom-center, strong)
- gemini-3.1-pro-preview: The two rails of the left track diverge in opposite directions towards the bottom corners of the image, making the track gauge physically impossible for any real vehicle to use. (bottom-center, strong)
- gemini-3.1-pro-preview: The point where the inner rails of the left and right tracks intersect lacks proper physical structure, such as defined grooves for wheel flanges or check rails, instead appearing as lines that simply blend into each other. (bottom-center, strong)

**background_clutter**: score 6, raised in 3/9 calls, at top-left, middle-right

- gpt-6-sol: Details inside the dark depot entrance are hard to distinguish, which offers little opportunity to check their structure. (top-left, weak)
- gemini-3.1-pro-preview: Behind the fence on the right side, the stack of objects (resembling a wooden pallet and spools) melts together with indistinct, physically illogical geometry. (middle-right, moderate)
- gemini-3.1-pro-preview: The cluster of objects near the fence, which vaguely resembles a wooden pallet and a cable drum, is melded together into a distorted, formless mass with undefined textures. (middle-right, strong)

**camera_or_windscreen**: score 5, raised in 2/9 calls, at bottom-right

- gemini-3.1-pro-preview: The structural lines depicting the windshield wiper arms intersect and overlap in a chaotic, non-mechanical manner, failing to form a coherent, solid metal object. (bottom-right, strong)
- gemini-3.1-pro-preview: The windshield wipers in the foreground lack articulated joints or mechanical 3D depth, appearing instead as somewhat flat, thick black lines drawn over the image. (bottom-right, moderate)

**overhead_wires_or_poles**: score 5, raised in 2/9 calls, at top-left

- gemini-3.1-pro-preview: The overhead catenary wires are drawn inconsistently, appearing disconnected or terminating in mid-air without logical attachment points to support structures or the building. (top-left, moderate)
- gemini-3.1-pro-preview: An overhead contact wire extends from the left side of the frame but fades out and ends abruptly in mid-air before attaching to anything. (top-left, strong)

**buildings**: score 4, raised in 2/9 calls, at top-center

- gemini-3.1-pro-preview: The vertical seams between the white panels above the central closed doors are inconsistent, with lines arbitrarily starting and stopping rather than running the full height of the panels. (top-center, moderate)
- gemini-3.1-pro-preview: The large white sliding doors between the bays have irregular, inconsistent widths and lack any coherent tracks or guides on the ground for them to slide along. (top-center, moderate)

## s-3.jpg: mean P(AI) 0.15 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.95 / 0.02 / 0.01

**track_geometry**: score 10, raised in 3/9 calls, at bottom-center, center, middle-left

- gpt-6-sol: The closely overlapping rails at the crossing are somewhat difficult to trace at a glance. (bottom-center, weak)
- gpt-6-sol: The rails cross in a dense X shape, making the exact junction layout difficult to follow at a glance. (bottom-center, weak)
- gemini-3.1-pro-preview: The tracks merge in a way that suggests a diamond crossing or a complex switch, but the actual rails appear to blend into each other without clear flangeways or crossing frogs where they intersect. The rails look like they just cross over physically overlapping. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rail of the left track and the inner rail of the right track cross in an X shape, but lack the mechanical structure (frog, check rails) needed for a train to actually traverse it safely. (center, strong)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at bottom-left

- gemini-3.1-pro-preview: There are white markings on the ground that look like letters 'C N', but they are distorted, nonsensical, and seem painted over irregular ground features in a weird way. (bottom-left, moderate)

**overhead_wires_or_poles**: score 2, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: There are faint overhead wires that seem to attach to the building facade randomly, without proper insulators or tensioning structures. (top-center, moderate)

**buildings**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: Between the two large doorways, there is a strange, translucent, square-ish artifact on the ground leaning against the wall, resembling glass or plastic, which lacks coherent structure or purpose. (center, moderate)

**texture_noise_or_sharpness**: score 2, raised in 1/9 calls, at whole-image

- gemini-3.1-pro-preview: The overall image has a slightly painterly, soft quality, especially in the concrete textures and the distant details inside the sheds. (whole-image, moderate)

## t-1.jpg: mean P(AI) 0.27 (passes)

- anthropic/claude-opus-5.5: 0.10 / 0.10 / 0.10
- openai/gpt-6-sol: 0.02 / 0.06 / 0.02
- google/gemini-3.1-pro-preview: 0.05 / 0.98 / 0.99

**overhead_wires_or_poles**: score 7, raised in 2/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead catenary wires, particularly above the right track, have hanging support structures that are poorly defined, messy, and sometimes appear to attach to nothing. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead power lines above the tracks crisscross in an illogical manner, with some wire segments abruptly ending in mid-air against the sky without attaching to any support structure. (top-center, strong)
- gemini-3.1-pro-preview: A wire hangs loosely from the cantilever arm of the leftmost pole and terminates abruptly in mid-air, serving no functional purpose. (top-left, moderate)

**track_geometry**: score 6, raised in 2/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the left and right tracks merge into a sharp V-point and terminate completely, with no track continuing towards the foreground for a train's inner wheels to follow, which is physically impossible. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the left and right tracks merge into a sharp V point and simply terminate at the bottom edge of the frame, without any continuing track, frog, or switch mechanism, creating an impossible layout for trains to traverse. (bottom-center, strong)

**texture_noise_or_sharpness**: score 4, raised in 3/9 calls, at top-center, middle-right

- gpt-6-sol: Backlighting and haze leave some distant building details soft, making those details harder to verify. (top-center, weak)
- gpt-6-sol: The dark shed interior has indistinct details that are difficult to verify visually. (middle-right, weak)
- gemini-3.1-pro-preview: The wire mesh fence on the far right has an inconsistent, blurry texture where the individual links and wires melt together or disappear randomly. (middle-right, moderate)

**switch_mechanism**: score 1, raised in 1/9 calls, at bottom-center

- gpt-6-sol: The inner rails come very close together, while the switch details are difficult to make out. (bottom-center, weak)

**tools_or_small_objects**: score 1, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The stack of wooden pallets and the large cable spool between the two building entrances have a slightly melted, indistinct appearance upon close inspection. (center, weak)

## t-2.jpg: mean P(AI) 0.15 (passes)

- anthropic/claude-opus-5.5: 0.08 / 0.10 / 0.08
- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- google/gemini-3.1-pro-preview: 0.02 / 0.05 / 0.99

**text_signage_or_markings**: score 3, raised in 2/9 calls, at bottom-left

- gpt-6-sol: The pale pavement markings are indistinct and irregular; their shapes are a little hard to interpret. (bottom-left, weak)
- gemini-3.1-pro-preview: The white painted lines on the ground are chaotic and form a nonsensical pattern rather than recognizable directional or safety markings. (bottom-left, moderate)

**track_geometry**: score 3, raised in 1/9 calls, at bottom-center

- gemini-3.1-pro-preview: The inner rails of the diverging tracks merge into a single, solid 'V' shape without any flangeway gaps for wheels to cross or movable switch points, which is a physically impossible structure for a functioning rail switch. (bottom-center, strong)

**texture_noise_or_sharpness**: score 2, raised in 2/9 calls, at middle-left, top-right

- gpt-6-sol: Details inside the dark left bay are indistinct, making that area difficult to assess. (middle-left, weak)
- gpt-6-sol: The dark entrance obscures some interior details, making that area harder to verify visually. (top-right, weak)

**background_clutter**: score 2, raised in 1/9 calls, at center

- gemini-3.1-pro-preview: The blue fencing and the spool-like object in the middle distance are blurry and lack clear structure, appearing to melt into the ground and each other. (center, moderate)

**overhead_wires_or_poles**: score 1, raised in 1/9 calls, at top-center

- gemini-3.1-pro-preview: The overhead wire connecting to the central pole appears thin and disjointed, lacking the complex tensioning structure typical of actual tram or train catenary systems. (top-center, weak)

## t-3.jpg: mean P(AI) 0.36 (fails)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.02
- anthropic/claude-opus-5.5: 0.08 / 0.06 / 0.08
- google/gemini-3.1-pro-preview: 0.99 / 0.99 / 0.99

**track_geometry**: score 15, raised in 4/9 calls, at bottom-center, middle-left, middle-right

- gpt-6-sol: Rails from the two curved branches cross near the foreground, but the crossing hardware is difficult to make out. (bottom-center, weak)
- gemini-3.1-pro-preview: The inner rails of the two tracks meet at an 'X' crossing and then inexplicably disappear or merge vaguely downwards, failing to form a functional switch mechanism or maintain a coherent track gauge for a vehicle approaching from the bottom. (bottom-center, strong)
- gemini-3.1-pro-preview: The inner rails of the two tracks cross each other in a continuous 'X' shape without any gap (frog) or moving point mechanism, which would make it physically impossible for a train wheel flange to pass through. (bottom-center, strong)
- gemini-3.1-pro-preview: The right-hand rail of the track heading into the left bay appears to fade out and completely disappear into the concrete surface just before the entrance. (middle-left, strong)

**overhead_wires_or_poles**: score 11, raised in 3/9 calls, at top-center, top-left

- gemini-3.1-pro-preview: The overhead catenary wires appear as faint, disconnected lines that zig-zag aimlessly and do not form a logical, continuous power supply network. (top-center, strong)
- gemini-3.1-pro-preview: A wire extending downwards from the top edge ends abruptly in mid-air above the building's roofline. (top-left, strong)
- gemini-3.1-pro-preview: The overhead catenary lines intersect chaotically, and some thin wire lines appear to terminate abruptly in mid-air without proper supporting structures or tensioning. (top-center, moderate)
- gemini-3.1-pro-preview: The overhead catenary wires are chaotic, with vertical droppers hanging without a continuous contact wire below them, and some wires fading out completely into the sky. (top-center, strong)

**buildings**: score 3, raised in 2/9 calls, at middle-left

- gemini-3.1-pro-preview: The interior of the left bay contains vague, blurry shapes that lack the distinct mechanical details typical of a real maintenance shed. (middle-left, weak)
- gemini-3.1-pro-preview: The objects visible inside the left open bay of the shed are vaguely defined and blurry, lacking the specific mechanical details expected of train or maintenance equipment. (middle-left, moderate)

**background_clutter**: score 2, raised in 2/9 calls, at middle-left

- gpt-6-sol: Objects deep inside the left bay are indistinct, leaving some visual ambiguity. (middle-left, weak)
- gpt-6-sol: Objects deep inside the left depot bay are indistinct and somewhat smeared. (middle-left, weak)

**text_signage_or_markings**: score 2, raised in 1/9 calls, at middle-right

- gemini-3.1-pro-preview: Above the open doors of the right-hand bay, there is a sequence of garbled, repetitive white rectangular shapes that look like pseudo-text typical of AI generation, rather than coherent signage or lights. (middle-right, moderate)

## e-2.jpg: mean P(AI) 0.04 (passes)

- openai/gpt-6-sol: 0.02 / 0.02 / 0.03
- anthropic/claude-opus-5.5: 0.07 / 0.10 / 0.08
- google/gemini-3.1-pro-preview: 0.02 / 0.01 / 0.01

**composition_or_staging**: score 3, raised in 3/9 calls, at top-center, whole-image, middle-right

- gpt-6-sol: The two similar rail-bay entrances give the scene a somewhat repetitive appearance. (top-center, weak)
- gpt-6-sol: The two similar bays and branching tracks give the scene a near-symmetrical appearance, which could superficially suggest generated repetition. (whole-image, weak)
- gpt-6-sol: The two similarly shaped bays and curving tracks give the scene an unusually balanced appearance, though the layout is plausible for a depot. (middle-right, weak)

## f-1.jpg: mean P(AI) 0.12 (passes)

- openai/gpt-6-sol: 0.03 / 0.03 / 0.03
- anthropic/claude-opus-5.5: 0.10 / 0.12 / 0.68
- google/gemini-3.1-pro-preview: 0.02 / 0.02 / 0.05

**track_geometry**: score 4, raised in 1/9 calls, at bottom-left, bottom-right

- claude-opus-5.5: Left track rails are oddly shaped: the left rail curves while the right rail bends inward, rails converge unnaturally toward the depot entrance with inconsistent gauge (bottom-left, moderate)
- claude-opus-5.5: Right track rails splay apart widely near the camera, gauge appears to widen significantly rather than staying constant (bottom-right, moderate)

**composition_or_staging**: score 2, raised in 2/9 calls, at top-center

- gpt-6-sol: The two brightly lit depot bays look unusually similar, though a standardized facility would explain this. (top-center, weak)
- gpt-6-sol: The two depot openings have notably similar framing and repeated rows of interior lights. (top-center, weak)

**buildings**: score 1, raised in 1/9 calls, at top-center

- gpt-6-sol: The two illuminated depot bays look unusually similar, though that is also expected in a purpose-built facility. (top-center, weak)

**overhead_wires_or_poles**: score 1, raised in 1/9 calls, at top-center

- claude-opus-5.5: Overhead catenary wires are sparse and don't clearly align over each track; wires attached to poles end abruptly (top-center, weak)

**texture_noise_or_sharpness**: score 1, raised in 1/9 calls, at whole-image

- claude-opus-5.5: Smooth, slightly painterly HDR-like textures with soft detail on fences and cages (whole-image, weak)
