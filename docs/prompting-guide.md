# Prompting GPT Image 2.5

This guide is organised around the capability areas OpenAI names in the
[Images 2.5 announcement](https://openai.com/index/introducing-chatgpt-images-2-5/) (September 8, 2026).
Every pattern below is the one actually used by the prompts in this repository, and each prompt here
ships with the image it produced, so you can check the pattern against a real result.

## The one habit that matters most on 2.5

Two of the four headline improvements — precision editing and multi-turn consistency — are about
**what the model does not change**. That makes the "hands off" half of a prompt load-bearing:

```text
Replace only the cream boucle sofa with a dark forest-green velvet chesterfield of the same
three-seat footprint. Keep everything else in the frame exactly as it is: the coffee table and
the two books, the ceramic vase, the fig tree, the floorboards, the window and the direction
and softness of the light. Rebuild the contact shadow under the new sofa.
```

Drop the second and third sentences and you get a repainted room instead of a swapped sofa.
Three things are worth naming explicitly every time: the **single element** that changes, the
**inventory** that must survive, and the **physical consequences** of the change (contact shadow,
reflection, occlusion) that the model should rebuild rather than leave stale.

## Capability areas and how to write for them

| Capability | What to put in the prompt |
| --- | --- |
| Reference fidelity | Name the features that must remain recognisable — face shape, a mole, the hairline, a brand treatment — then change only environment, pose, wardrobe and light |
| Precision editing | One element, an explicit preserve-list, and the physics to rebuild |
| Multi-turn consistency | Restate the invariants on every turn; never assume the earlier turn is remembered |
| Complex layout & typography | Write every string verbatim, state the hierarchy, and say what must stay legible |
| Transparent background | Ask for alpha explicitly and forbid drop shadows, halos and background fill |
| Style direction | Name the medium *and its artefacts*: 2mm misregistration, paper tooth, halftone, foxing |
| Sketch to image | Say the drawing is layout guidance only, then describe the finished materials and light |
| Template formats | Pick the format (Poster, Merch, Flyer) and fill every information slot with real copy |

## Typography: spell it out, literally

The announcement calls out better handling of real-world information and complex layouts. In practice
that only pays off if you write the copy out. Compare:

```text
❌  a conference badge sheet with names and QR codes
✅  six badges, each with a thin teal rule on top, the event name "NORTHFIELD DESIGN SUMMIT" in
    condensed sans caps, a large attendee name, a smaller role line, and a square QR placeholder
    bottom right. Names: ELENA VOSS / Speaker, MARCUS HALE / Attendee, …
```

Two extra habits that hold up: state **where** each string sits relative to the others, and add a
constraint like "every line of type crisp and correctly spelled" when the layout is dense.

For numbers, make the data internally consistent before you send it. A ratio chart that says
`1:16, 22 g coffee, 352 g water` is checkable arithmetic; `1:16, 22 g, 340 g` invites the model to
"fix" one of the numbers for you.

## Transparent backgrounds

Ask for the alpha channel, forbid the things that usually sneak in, and name the hard part:

```text
… photographed as a product cutout on a fully transparent background. Edges must be clean and
anti-aliased around the thin arm, the cord and the perforations, with no halo, no drop shadow
and no background fill. PNG with alpha.
```

Thin geometry (cords, wire, hair, perforations) is where cutouts fail, so call it out by name.

## Style: name the artefacts, not just the style

"Risograph style" gets you a filter. The artefacts get you the medium:

```text
… printed in fluorescent pink and teal on uncoated cream stock. Deliberate 2mm ink
misregistration on the pink plate, visible paper tooth, ink mottling in the solid areas and a
slightly starved roller streak across the top third. Flat shapes, halftone shading, no gradients.
```

The same trick works for blueprints (uniform stroke weights, no shading, no perspective), ukiyo-e
(keyblock outlines, bokashi gradient, woodgrain in the sky) and film stock (grain, halation, gate weave).

## Sketch and Templates

`@Sketch` in ChatGPT lets a drawing act as the layout guide. When you prompt around it, separate the
two jobs — the sketch owns the arrangement, the text owns the finish:

```text
Interpret this rough napkin sketch as the layout guide for a finished photograph, keeping the
drawn arrangement but rendering it photorealistically: … Keep the sketched proportions and the
position of every element; add realistic materials, contact shadows and dust in the light beam.
```

Templates ("Poster", "Merch") work the same way in reverse: the format owns the structure, and your
job is to fill every slot — headline, subhead, body, dates, location, list, footer — with real copy
rather than placeholders.

## Where to run these today

Atlas Cloud does not serve `gpt-image-2.5-flare` or `gpt-image-2.5-sunburst` yet. The newest GPT Image
generation available there is GPT Image 2, which is what every preview in this repository was rendered on:

- [GPT Image 2 text-to-image](https://www.atlascloud.ai/models/openai/gpt-image-2/text-to-image)
- [GPT Image 2 edit](https://www.atlascloud.ai/models/openai/gpt-image-2/edit)

The prompts are written for 2.5's documented capability areas, so the same set can be re-run for a
side-by-side the day the 2.5 endpoints land.
