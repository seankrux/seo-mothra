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
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f9f9f8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-[#f9f9f8] text-[#1a1c1c] selection:bg-[#46583c] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#46583c] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold"
        >
          Skip to content
        </a>
        <CanvasBackground />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
