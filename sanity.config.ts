import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

// Falls back to the real SEO Mothra project id so the embedded /studio works
// even if NEXT_PUBLIC_SANITY_PROJECT_ID is missing from the environment.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wj6g4kk6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "seo-mothra",
  title: "SEO Mothra",
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
