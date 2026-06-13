import { PortableText, type PortableTextBlock } from "next-sanity";
import type { ReactNode } from "react";

type PortableTextImage = {
  url?: string;
  alt?: string;
  metadata?: {
    dimensions?: {
      width?: number;
      height?: number;
    };
  };
};

const components = {
  block: {
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="mt-10 mb-5 text-4xl font-bold text-[#1a1c1c]">{children}</h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="mt-8 mb-4 text-3xl font-bold text-[#1a1c1c]">{children}</h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="mt-6 mb-3 text-2xl font-bold text-[#1a1c1c]">{children}</h3>
    ),
    normal: ({ children }: { children: ReactNode }) => (
      <p className="mb-4 leading-relaxed text-[#444840]">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: ReactNode }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-[#444840]">{children}</ul>
    ),
    number: ({ children }: { children: ReactNode }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-[#444840]">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children: ReactNode }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }: { value: PortableTextImage }) => {
      if (!value?.url) return null;
      return (
        <figure className="my-8">
          <img
            src={`${value.url}?auto=format&w=1200&fit=max`}
            alt={value.alt || ""}
            width={value.metadata?.dimensions?.width}
            height={value.metadata?.dimensions?.height}
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg border border-[rgba(26,28,28,0.08)]"
          />
          {value.alt && (
            <figcaption className="mt-2 text-center text-sm text-[#6b6e68]">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
    codeBlock: ({ value }: { value: { language?: string; code?: string } }) => {
      if (!value?.code) return null;
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-[rgba(26,28,28,0.08)] bg-[#1a1c1c]">
          {value.language && (
            <div className="border-b border-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white/60">
              {value.language}
            </div>
          )}
          <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-white"><code>{value.code}</code></pre>
        </div>
      );
    },
    callout: ({ value }: { value: { type?: string; text?: string } }) => {
      if (!value?.text) return null;
      const bgColor = value.type === "tip" ? "bg-[#46583c]/5" : value.type === "warning" ? "bg-yellow-50" : "bg-blue-50";
      const borderColor = value.type === "tip" ? "border-[#46583c]/20" : value.type === "warning" ? "border-yellow-200" : "border-blue-200";
      return (
        <div className={`${bgColor} ${borderColor} my-6 rounded-lg border p-4`}>
          <p className="text-sm text-[#444840]">{value.text}</p>
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }: { children: ReactNode }) => (
      <strong className="font-bold text-[#1a1c1c]">{children}</strong>
    ),
    em: ({ children }: { children: ReactNode }) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value?: { href?: string; blank?: boolean }; children: ReactNode }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="text-[#46583c] underline hover:text-[#3a4c31]"
          target={value?.blank || isExternal ? "_blank" : undefined}
          rel={value?.blank || isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export function PortableTextRenderer({ content }: { content: PortableTextBlock[] | undefined }) {
  if (!content?.length) return null;
  return <div className="prose max-w-none"><PortableText value={content} components={components} /></div>;
}
