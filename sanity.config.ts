import { schemaTypes } from "./sanity/schemas";

// Falls back to the real SEO Mothra project id so the embedded /studio works
// even if NEXT_PUBLIC_SANITY_PROJECT_ID is missing from the environment.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wj6g4kk6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const config = {
  name: "seo-mothra",
  title: "SEO Mothra",
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  basePath: "/studio",
  schema: {
    types: schemaTypes
  }
};

export default config;
