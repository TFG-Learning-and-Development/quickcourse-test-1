# Course Authoring

## Source of truth

The files in `course/storyboard/` are the course-content authority. Start by reading them, the course configuration, supplied media, the component map, and the pinned Kit manifest.

You may structure and lightly format supplied material so it reads well in a course. Do not invent facts, policy, SME conclusions, procedures, answers, rationale, or client intent. Record uncertainty for human review.

## Authoring flow

1. Review the supplied source and identify learning sections.
2. Draft or update `course/component-map.md`.
3. Review the map with the project team.
4. Implement using the pinned Kit release and ordinary semantic HTML where it is clearest.
5. Test the course, including its learner-facing behaviour and responsive presentation.

Choose a governed Kit component when it supports the learning purpose. Use ordinary content for material that does not need an interaction or specialised presentation. Do not add interaction just to make a page feel varied.

If the Kit does not offer a suitable component, use ordinary markup or the closest appropriate approved option, then report the capability gap. Component authoring metadata is a future Kit-side enhancement, not a Starter responsibility.

## Course-local work

Keep course-specific modules and composition in this repository. Do not copy Kit internals, import from the Kit workbench, or create a competing design system. The Starter currently uses a local `file:` package during development; deployed work should retain an exact, pinned private Kit release.
