export const page = {
  name: "page",
  title: "Page",
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      group: "content",
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
    { name: "seoTitle", title: "SEO Title", type: "string", group: "seo" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 3, group: "seo" },
    { name: "canonicalUrl", title: "Canonical URL", type: "url", group: "seo" },
    { name: "noIndex", title: "No Index", type: "boolean", group: "seo", initialValue: false },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      media: "mainImage",
      noIndex: "noIndex",
    },
    prepare({ title, slug, media, noIndex }: { title?: string; slug?: string; media?: unknown; noIndex?: boolean }) {
      const path = slug === "home" ? "/" : `/${slug || "missing-slug"}`;
      return {
        title: title || "Untitled Page",
        subtitle: `${noIndex ? "Noindex • " : ""}${path}`,
        media,
      };
    },
  },
};
