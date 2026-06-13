import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["siteSettings", "home"]);
const mainTypes = new Set(["page", "post", "service", "testimonial"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("SEO Mothra CMS")
    .items([
      S.listItem()
        .title("Homepage")
        .id("home")
        .child(S.document().schemaType("home").documentId("home")),
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("post").title("Blog Posts"),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return Boolean(id && !singletonTypes.has(id) && !mainTypes.has(id));
      }),
    ]);
