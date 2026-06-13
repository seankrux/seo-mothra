import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { OpenLiveUrlAction } from "./sanity/actions/open-live-url";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wj6g4kk6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const singletonTypes = new Set(["siteSettings"]);
const liveUrlTypes = new Set(["page", "post", "service"]);

export default defineConfig({
  name: "seo-mothra",
  title: "SEO Mothra",
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  document: {
    actions: (prev, context) => {
      if (liveUrlTypes.has(context.schemaType)) {
        return [OpenLiveUrlAction, ...prev];
      }

      return prev;
    },
    newDocumentOptions: (prev) => prev.filter((template) => !singletonTypes.has(template.templateId)),
  },
  schema: {
    types: schemaTypes,
  },
});
