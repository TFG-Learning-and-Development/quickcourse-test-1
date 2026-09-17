import kitPackage from "@quick-course-kit/local-release/package.json";

// The pinned Git dependency currently omits its generated public manifest.
// Keep the learner document stamped with the installed Kit version while course
// authoring remains restricted to registry items with approved production maps.
export const kitManifest = {
  kitVersion: kitPackage.version,
} as const;
