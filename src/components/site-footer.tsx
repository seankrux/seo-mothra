export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 bg-white/60 backdrop-blur-md border-t border-[rgba(26,28,28,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#46583c]/10 rounded-lg flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[#46583c] text-sm"
                  aria-hidden="true"
                >
                  flutter_dash
                </span>
              </div>
              <span className="text-lg font-bold text-[#1a1c1c]">
                SEO{" "}
                <span
                  className="text-[#46583c]"
                  style={{
                    fontFamily: "'Libre Caslon Text', serif",
                    fontStyle: "italic",
                  }}
                >
                  Mothra
                </span>
              </span>
            </div>
            <p className="text-sm text-[#444840] max-w-xs leading-relaxed">
              Premium SEO, CRO &amp; AEO for brands that want to rank, convert,
              and dominate their niche.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-bold uppercase tracking-widest text-[#46583c] mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/locations", label: "Locations" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#444840] hover:text-[#46583c] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#46583c] mb-4">
              Contact
            </p>
            <a
              href="mailto:hello@seomothra.com"
              className="text-sm text-[#444840] hover:text-[#46583c] transition-colors"
            >
              hello@seomothra.com
            </a>
          </div>
        </div>

        <div className="border-t border-[rgba(26,28,28,0.08)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444840] text-sm">
            &copy; {year} SEO Mothra Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#444840]">
            <a
              href="mailto:hello@seomothra.com"
              className="hover:text-[#46583c] transition-colors"
              aria-label="Email SEO Mothra"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                alternate_email
              </span>
            </a>
            <a
              href="https://www.seomothra.com"
              className="hover:text-[#46583c] transition-colors"
              aria-label="SEO Mothra website"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                public
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
