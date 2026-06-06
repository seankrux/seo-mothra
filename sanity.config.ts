import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "TODO_PROJECT_ID";
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
