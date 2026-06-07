export function SiteFooter() {
  return (
    <footer className="py-12 bg-white/60 backdrop-blur-md border-t border-[rgba(26,28,28,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#46583c]/10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#46583c] text-sm">
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

          <p className="text-[#444840]/50 text-sm">
            © {new Date().getFullYear()} SEO Mothra Agency. All rights reserved.
          </p>

          <div className="flex gap-6 text-[#444840]/50">
            <a
              className="hover:text-[#46583c] transition-colors"
              href="#"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined">facebook</span>
            </a>
            <a
              className="hover:text-[#46583c] transition-colors"
              href="#"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a
              className="hover:text-[#46583c] transition-colors"
              href="#"
              aria-label="Website"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
