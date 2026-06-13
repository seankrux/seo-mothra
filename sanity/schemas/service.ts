export const service = {
  name: "service",
  title: "Service",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title" },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    { name: "icon", title: "Material Icon Name", type: "string", group: "content" },
    { name: "description", title: "Short Description", type: "text", rows: 3, group: "content" },
    { name: "features", title: "Features", type: "array", of: [{ type: "string" }], group: "content" },
    { name: "content", title: "Full Content", type: "array", group: "content", of: [{ type: "block" }] },
    { name: "seoTitle", title: "SEO Title", type: "string", group: "seo" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 3, group: "seo" },
    { name: "canonicalUrl", title: "Canonical URL", type: "url", group: "seo" },
    { name: "noIndex", title: "No Index", type: "boolean", group: "seo", initialValue: false },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      noIndex: "noIndex",
    },
    prepare({ title, slug, noIndex }: { title?: string; slug?: string; noIndex?: boolean }) {
      return {
        title: title || "Untitled Service",
        subtitle: `${noIndex ? "Noindex • " : ""}/services/${slug || "missing-slug"}`,
      };
    },
  },
};
