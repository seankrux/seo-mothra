import { PortableText, type PortableTextBlock } from "next-sanity";

const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => <h2 className="mt-8 mb-4 text-3xl font-bold text-[#1a1c1c]">{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3 className="mt-6 mb-3 text-2xl font-bold text-[#1a1c1c]">{children}</h3>,
    normal: ({ children }: { children?: React.ReactNode }) => <p className="mb-4 leading-relaxed text-[#444840]">{children}</p>,
  },
  types: {
    image: ({ value }: { value: { url?: string; alt?: string } }) => value?.url ? <img src={value.url} alt={value.alt || ""} className="my-8 w-full rounded-lg" /> : null,
    codeBlock: ({ value }: { value: { code?: string } }) => value?.code ? <pre className="my-8 overflow-x-auto rounded-2xl bg-[#1a1c1c] p-5 text-sm text-white"><code>{value.code}</code></pre> : null,
    callout: ({ value }: { value: { text?: string } }) => value?.text ? <div className="my-6 rounded-lg border border-[#46583c]/20 bg-[#46583c]/5 p-4 text-sm text-[#444840]">{value.text}</div> : null,
  },
};

export function PortableTextRenderer({ content }: { content: PortableTextBlock[] | undefined }) {
  if (!content?.length) return null;
  return <div className="prose max-w-none"><PortableText value={content} components={components as never} /></div>;
}
