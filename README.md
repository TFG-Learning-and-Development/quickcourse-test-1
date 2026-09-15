# Quick Course Starter

Quick Course Starter is the repository template for building one Astro-based Quick Course from approved source material. It consumes a pinned release of the Quick Course Kit; it does not contain the Kit workbench or duplicate its components.

## Start a course

1. Set the course metadata in `src/config/course.ts`.
2. Add supplied source material in `course/storyboard/`.
3. Create and review the implementation plan in `course/component-map.md`.
4. Add course media under `public/media/`.
5. Build the course in `src/pages/` and course-local modules when needed.

Read [course authoring](docs/course-authoring.md) and [storyboard mapping](docs/storyboard-mapping.md) before implementation.

## Kit dependency

This Starter uses the generated Quick Course Kit release through `@quick-course-kit/local-release`. The current `file:` dependency is a local development arrangement. A future private package release should stay pinned to a specific Kit version.

Use the Kit package exports and manifest as the source of truth for available governed components. Do not copy Kit source, import the Kit workbench directly, or recreate Kit components here.

## Commands

```text
npm install
npm run dev
npm run build
```
