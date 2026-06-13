export const home = {
  name: "home",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "content", title: "Content" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { name: "title", title: "Internal Title", type: "string", initialValue: "Homepage", group: "hero" },
    { name: "heroEyebrow", title: "Hero Eyebrow", type: "string", group: "hero" },
    { name: "heroTitle", title: "Hero Title", type: "string", group: "hero" },
    { name: "heroHighlight", title: "Hero Highlight", type: "string", group: "hero" },
    { name: "heroDescription", title: "Hero Description", type: "text", rows: 3, group: "hero" },
    { name: "primaryCtaLabel", title: "Primary CTA Label", type: "string", group: "hero" },
    { name: "primaryCtaUrl", title: "Primary CTA URL", type: "string", group: "hero" },
    { name: "secondaryCtaLabel", title: "Secondary CTA Label", type: "string", group: "hero" },
    { name: "secondaryCtaUrl", title: "Secondary CTA URL", type: "string", group: "hero" },
    { name: "trustedBy", title: "Trusted By", type: "array", of: [{ type: "string" }], group: "hero" },
    {
      name: "stats",
      title: "Stats",
      type: "array",
      group: "content",
      of: [{ type: "object", fields: [{ name: "value", title: "Value", type: "string" }, { name: "label", title: "Label", type: "string" }] }],
    },
    {
      name: "serviceCards",
      title: "Homepage Service Cards",
      type: "array",
      group: "content",
      of: [{ type: "object", fields: [{ name: "icon", title: "Icon", type: "string" }, { name: "title", title: "Title", type: "string" }, { name: "description", title: "Description", type: "text", rows: 3 }, { name: "url", title: "URL", type: "string" }] }],
    },
    { name: "content", title: "Flexible Content", type: "array", group: "content", of: [{ type: "block" }, { type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt Text", type: "string" }] }] },
    { name: "seoTitle", title: "SEO Title", type: "string", group: "seo" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 3, group: "seo" },
    { name: "canonicalUrl", title: "Canonical URL", type: "url", group: "seo" },
    { name: "noIndex", title: "No Index", type: "boolean", initialValue: false, group: "seo" },
  ],
  preview: {
    prepare() {
      return { title: "Homepage", subtitle: "/" };
    },
  },
};
