export const home = {
  name: "home",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "title", title: "Internal Title", type: "string", initialValue: "Homepage" },
    { name: "heroEyebrow", title: "Hero Eyebrow", type: "string" },
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroHighlight", title: "Hero Highlight", type: "string" },
    { name: "heroDescription", title: "Hero Description", type: "text", rows: 3 },
    { name: "primaryCtaLabel", title: "Primary CTA Label", type: "string" },
    { name: "primaryCtaUrl", title: "Primary CTA URL", type: "string" },
    { name: "secondaryCtaLabel", title: "Secondary CTA Label", type: "string" },
    { name: "secondaryCtaUrl", title: "Secondary CTA URL", type: "string" },
    { name: "trustedBy", title: "Trusted By", type: "array", of: [{ type: "string" }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 3 },
    { name: "canonicalUrl", title: "Canonical URL", type: "url" },
    { name: "noIndex", title: "No Index", type: "boolean", initialValue: false },
  ],
  preview: {
    prepare() {
      return { title: "Homepage", subtitle: "/" };
    },
  },
};
