import { defineDocuments, defineLocations } from "sanity/presentation";

export const mainDocuments = defineDocuments([
  { route: "/", type: "home" },
  { route: "/blog/:slug", filter: `_type == "post" && slug.current == $slug` },
  { route: "/services/:slug", filter: `_type == "service" && slug.current == $slug` },
  { route: "/:slug", filter: `_type == "page" && slug.current == $slug` },
]);

export const locations = {
  home: defineLocations({
    message: "Homepage content is used on /",
    tone: "positive",
  }),
  siteSettings: defineLocations({
    message: "Site settings are used globally across the website.",
    tone: "caution",
  }),
  page: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc) => ({
      locations: [{ title: doc?.title || "Untitled Page", href: doc?.slug === "home" ? "/" : `/${doc?.slug}` }],
    }),
  }),
  post: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc) => ({
      locations: [{ title: doc?.title || "Untitled Post", href: `/blog/${doc?.slug}` }],
    }),
  }),
  service: defineLocations({
    select: { title: "title", slug: "slug.current" },
    resolve: (doc) => ({
      locations: [{ title: doc?.title || "Untitled Service", href: `/services/${doc?.slug}` }],
    }),
  }),
};
