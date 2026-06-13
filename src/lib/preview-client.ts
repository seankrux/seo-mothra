import { sanityClient } from "./sanity";

export function previewClient() {
  const visual = { enabled: true, studioUrl: "/studio" };
  return sanityClient.withConfig({
    useCdn: false,
    perspective: "drafts",
    token: process.env.SANITY_API_READ_TOKEN,
    ["stega"]: visual,
  });
}
