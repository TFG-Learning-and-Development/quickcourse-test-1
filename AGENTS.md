# Quick Course Starter

This repository is a course project template. Build accessible courses from supplied source material using the pinned Quick Course Kit release. Compose the Kit; do not redesign or recreate it.

## Before implementation

- Inspect `src/config/course.ts`, supplied files in `course/storyboard/`, local media, `course/component-map.md`, and the pinned Kit manifest and guidance.
- For new course construction or meaningful structural/content changes, update the component map before implementation, then keep it aligned with the course.
- Confirm the intended scope and flag ambiguity early.
- For initial course builds, produce the component map for human review before full implementation unless the task explicitly authorises implementation in the same pass.

## Source and content

- Supplied storyboard content is authoritative and must be reproduced verbatim in learner-facing course content.
- Do not rewrite, paraphrase, shorten, expand, summarise, improve, correct, re-title, or otherwise change supplied copy.
- Do not invent learner-facing headings, labels, numbering, eyebrows, summaries, captions, instructions, or other copy that is not present in the storyboard.
- Preserve the storyboard's semantic hierarchy. Content identified as a heading must remain a heading; body copy must remain body copy; do not promote body copy into headings or demote headings into eyebrows for visual styling.
- Storyboard heading hierarchy should drive the course section structure and, where navigation is used, the navigation structure.
- Presentation may change, but authored meaning, wording, hierarchy, and order must remain faithful to the storyboard unless the task explicitly instructs otherwise.
- If supplied copy does not fit a Kit component cleanly, choose a different component or report the limitation. Never solve a layout problem by rewriting the content.
- Use ordinary semantic content when it is clearest. Choose a governed Kit component only when it improves the learning purpose.
- Interactive presentation can carry required learning content only when that content remains accessible, discoverable, keyboard-operable, and understandable.
- When no appropriate Kit component exists, use ordinary semantic markup or the closest governed Kit capability where appropriate, and report the Kit gap. Do not create a near-duplicate component.

## Course shell and typography

- Use the standard governed Quick Course Kit navigation for the course shell unless the source explicitly requires a different navigation model. Do not invent substitute navigation rows or custom anchor-link bars.
- Navigation labels must use the exact relevant storyboard heading text. Do not shorten, paraphrase, or invent navigation labels.
- Preserve storyboard typography roles. Ordinary storyboard body copy should use one consistent standard body-text treatment.
- Do not create extra body sizes, lead paragraphs, pseudo-subheadings, labels, eyebrows, or emphasis styles merely for visual variety.
- Use an eyebrow only when one is explicitly supplied by the storyboard. Do not create an eyebrow from heading or body copy.
- Keep learner-facing typography restrained. Visual interest should come from composition, imagery, spacing, and governed components rather than unnecessary font-style variation.

## Hero and media guidance

- For most Quick Courses, prefer an image-led opening hero when a suitable supplied image exists.
- Use a minimal/text-led hero when no suitable image is available or when the available image quality is too poor for a large presentation.
- Do not enlarge low-resolution images beyond a size that causes obvious pixelation or blur. Adapt the composition to the asset rather than forcing the asset into a preferred layout.
- Low-resolution images may sometimes be used as larger background support only when a faded, overlaid, low-contrast, or otherwise softened treatment makes the quality limitation unobtrusive.
- Do not use poor-quality images as crisp full-bleed hero backgrounds or other large detailed visual treatments.
- Position images according to their subject and crop. Do not apply a generic centred crop when it creates awkward composition.
- If a person is visibly cropped at the bottom of the source image, align that image to the bottom edge of the section or image field so the person does not appear to float.
- Preserve important focal points such as faces, products, and key visual details when cropping or positioning media.
- In decorative heroes, banners, openers, and closers, prefer one primary decorative image. Do not use multiple competing decorative images unless the storyboard explicitly requires them.
- Multiple images are appropriate when the images themselves are instructional content that learners need to inspect, compare, or understand.


## Component selection and interaction rhythm

- Choose components based on the learning purpose, not simply to add visual variety.
- Do not repeat the same interaction type in adjacent sections unless there is a clear instructional reason.
- Prefer the simplest governed component that accurately supports the storyboard intent.
- If the storyboard requires a specific learning action, use a component that actually performs that action. Do not substitute a weaker interaction merely because it is available.
- Use Matching when learners need to actively pair or categorise related items. Do not replace a true matching task with FlipCards or another reveal-only interaction.
- Avoid unnecessary interaction density. Not every section needs an interactive component.
- Maintain visual and interaction rhythm across the course by alternating appropriately between plain content, media, and interactive moments.


## Boundaries

- Use public exports from the pinned Kit package. Do not modify, copy, or import from Kit source, the workbench, or `node_modules` internals.
- Keep course-local code separate from Kit code. Do not create a second design system.
- This repository does not manage Kit lifecycle status, approval data, workboard entries, SCORM packaging, or Kit release generation.

## Quality

- Preserve semantic structure, visible keyboard focus, responsive reflow, readable contrast, and meaningful media alternatives.
- For learner-facing UI changes, inspect the result in a browser before calling it visually complete. A successful build is not visual acceptance.
- Run available checks and report anything that cannot be verified accurately.
