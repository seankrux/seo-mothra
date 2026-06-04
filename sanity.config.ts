import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "TODO_PROJECT_ID";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "seo-mothra",
  title: "SEO Mothra",
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  basePath: "/studio",
  plugins: [visionTool()],
  schema: {
    types: schemaTypes
  }
});
