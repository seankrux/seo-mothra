import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { OpenLiveUrlAction } from "./sanity/actions/open-live-url";
import { mainDocuments, locations } from "./sanity/presentation";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "wj6g4kk6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL ?? "https://www.seomothra.com";
const singletonTypes = new Set(["siteSettings", "home"]);
const liveUrlTypes = new Set(["home", "page", "post", "service"]);

export default defineConfig({
  name: "seo-mothra",
  title: "SEO Mothra",
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        initial: previewUrl,
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      allowOrigins: ["http://localhost:*", "https://www.seomothra.com", "https://seomothra.com"],
      resolve: { mainDocuments, locations },
    }),
    visionTool(),
  ],
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
