import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { CanvasBackground } from "@/components/canvas-background";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: {
    default: "SEO Mothra | Transforming Brands. Delivering Results.",
    template: "%s | SEO Mothra",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "SEO",
    "Sanity CMS",
    "premium web design",
    "technical SEO",
    "content strategy",
    "AEO",
    "schema markup",
    "CRO",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "SEO Mothra | Transforming Brands. Delivering Results.",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Mothra | Transforming Brands. Delivering Results.",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon-fallback.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f9f9f8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f9f9f8] text-[#1a1c1c] selection:bg-[#46583c] selection:text-white">
        <CanvasBackground />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
