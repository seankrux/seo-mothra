import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SEO Mothra | Premium SEO Website",
    template: "%s | SEO Mothra"
  },
  description: "Premium SEO website platform with Sanity CMS, modern design, and high-intent content architecture.",
  metadataBase: new URL("https://seo-mothra.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
