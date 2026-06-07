export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 3,
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    { name: "author", title: "Author Name", type: "string" },
    { name: "role", title: "Role / Company", type: "string" },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    },
    { name: "rating", title: "Rating (1–5)", type: "number" },
  ],
};
