export const siteUrl = "https://www.seomothra.com";

export function getLiveUrl(type: string, slug?: string) {
  if (!slug) return null;
  if (type === "post") return `${siteUrl}/blog/${slug}`;
  if (type === "service") return `${siteUrl}/services/${slug}`;
  if (type === "page") return slug === "home" ? siteUrl : `${siteUrl}/${slug}`;
  return null;
}
