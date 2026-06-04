const sanityConfig = {
  name: "seo-mothra",
  title: "SEO Mothra",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "TODO_PROJECT_ID",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2025-01-01",
  basePath: "/studio"
};

export default sanityConfig;
