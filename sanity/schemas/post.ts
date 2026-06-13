export const post = {
  name: "post",
  title: "Blog Post",
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
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "SEO Strategy", value: "SEO Strategy" },
          { title: "AEO", value: "AEO" },
          { title: "CRO", value: "CRO" },
          { title: "Technical SEO", value: "Technical SEO" },
          { title: "Content Strategy", value: "Content Strategy" },
          { title: "Technical", value: "Technical" },
        ],
      },
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt Text", type: "string" }],
        },
        {
          name: "codeBlock",
          title: "Code Block",
          type: "object",
          fields: [
            { name: "language", title: "Language", type: "string" },
            { name: "code", title: "Code", type: "text" },
          ],
        },
        {
          name: "callout",
          title: "Callout",
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "Tip", value: "tip" },
                  { title: "Warning", value: "warning" },
                  { title: "Info", value: "info" },
                ],
              },
              initialValue: "info",
            },
            { name: "text", title: "Text", type: "text", rows: 3 },
          ],
        },
      ],
    },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "featured", title: "Featured Post", type: "boolean", initialValue: false },
    { name: "seoTitle", title: "SEO Title", type: "string", group: "seo" },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      group: "seo",
    },
    { name: "canonicalUrl", title: "Canonical URL", type: "url", group: "seo" },
    { name: "noIndex", title: "No Index", type: "boolean", group: "seo", initialValue: false },
  ],
  groups: [{ name: "seo", title: "SEO" }],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
