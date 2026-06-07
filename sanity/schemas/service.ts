export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    { name: "icon", title: "Material Icon Name", type: "string" },
    { name: "description", title: "Short Description", type: "text", rows: 3 },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "content",
      title: "Full Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      group: "seo",
    },
  ],
  groups: [{ name: "seo", title: "SEO" }],
};
