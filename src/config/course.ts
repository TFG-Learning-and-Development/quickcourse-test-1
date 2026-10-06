export const course = {
  id: "quick-course-starter",
  title: "Quick Course",
  description: "A course project ready for storyboard mapping and implementation.",
  language: "en",
  version: "0.1.0",
} as const;

export type CourseConfig = typeof course;
