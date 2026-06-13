import { PortableText, type PortableTextBlock } from "next-sanity";

const components = {
  block: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-bold text-[#1a1c1c] mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-bold text-[#1a1c1c] mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-[#444840] leading-relaxed mb-4">{children}</p>
    ),
  },
  types: {
    image: ({ value }: { value: any }) => (
      <figure className="my-8">
        <img
          src={value.asset?.url || ""}
          alt={value.alt || ""}
          className="w-full rounded-lg"
        />
        {value.alt && (
          <figcaption className="text-sm text-[#6b6e68] mt-2 text-center">
            {value.alt}
          </figcaption>
        )}
      </figure>
    ),
    callout: ({ value }: { value: any }) => {
      const bgColor =
        value.type === "tip"
          ? "bg-[#46583c]/5"
          : value.type === "warning"
            ? "bg-yellow-50"
            : "bg-blue-50";
      const borderColor =
        value.type === "tip"
          ? "border-[#46583c]/20"
          : value.type === "warning"
            ? "border-yellow-200"
            : "border-blue-200";
      return (
        <div
          className={`${bgColor} border ${borderColor} rounded-lg p-4 my-6 flex gap-3`}
        >
          <span className="text-xl mt-0.5">
            {value.type === "tip"
              ? "💡"
              : value.type === "warning"
                ? "⚠️"
                : "ℹ️"}
          </span>
          <p className="text-[#444840] text-sm">{value.text}</p>
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value: any; children: React.ReactNode }) => (
      <a
        href={value.href}
        className="text-[#46583c] underline hover:text-[#3a4c31]"
        target={value.blank ? "_blank" : undefined}
        rel={value.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

export function PortableTextRenderer({
  content,
}: {
  content: PortableTextBlock[] | undefined;
}) {
  if (!content) return null;
  return (
    <div className="prose max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
