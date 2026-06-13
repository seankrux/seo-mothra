export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "siteTitle", title: "Site Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "siteDescription", title: "Site Description", type: "text", rows: 3 },
    { name: "ogImage", title: "Open Graph Image", type: "image", options: { hotspot: true } },
    { name: "supportEmail", title: "Support Email", type: "string" },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "siteTitle",
      media: "ogImage",
    },
    prepare({ title, media }: { title?: string; media?: unknown }) {
      return {
        title: title || "SEO Mothra Site Settings",
        subtitle: "Global singleton settings",
        media,
      };
    },
  },
};
