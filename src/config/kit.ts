import kitPackage from "@quick-course-kit/local-release/package.json";

// The installed source release does not include its generated manifest file.
// Its package version is retained for the document metadata.
export const kitManifest = {
  kitVersion: kitPackage.version,
} as const;
