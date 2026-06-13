export const post = {
  name: "post",
  title: "Blog Post",
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
    { name: "publishedAt", title: "Published At", type: "datetime", group: "content" },
    {
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
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
    { name: "readTime", title: "Read Time", type: "string", group: "content" },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3, group: "content" },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      group: "content",
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
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }], group: "content" },
    { name: "featured", title: "Featured Post", type: "boolean", initialValue: false, group: "content" },
    { name: "seoTitle", title: "SEO Title", type: "string", group: "seo" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 3, group: "seo" },
    { name: "canonicalUrl", title: "Canonical URL", type: "url", group: "seo" },
    { name: "noIndex", title: "No Index", type: "boolean", group: "seo", initialValue: false },
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      category: "category",
      media: "mainImage",
      noIndex: "noIndex",
    },
    prepare({ title, slug, category, media, noIndex }: { title?: string; slug?: string; category?: string; media?: unknown; noIndex?: boolean }) {
      return {
        title: title || "Untitled Post",
        subtitle: `${noIndex ? "Noindex • " : ""}/blog/${slug || "missing-slug"}${category ? ` • ${category}` : ""}`,
        media,
      };
    },
  },
};
