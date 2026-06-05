export function SiteFooter() {
  return (
    <footer className="border-t border-[#7a9b6d]/20 py-12 text-sm text-[#6b6560]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <h3 className="font-semibold text-[#2a2622]">SEO Mothra</h3>
            <p className="mt-2">
              Premium SEO & growth strategy for agencies and scaling brands.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#2a2622]">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="/services" className="hover:text-[#7a9b6d]">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#7a9b6d]">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#7a9b6d]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#2a2622]">Connect</h4>
            <p className="mt-2">hello@seo-mothra.com</p>
            <p>(512) 555-0123</p>
          </div>
        </div>
        <div className="border-t border-[#7a9b6d]/20 pt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SEO Mothra. All rights reserved.</p>
          <p>Built with premium design, SEO obsession, and conversion focus.</p>
        </div>
      </div>
    </footer>
  );
}
