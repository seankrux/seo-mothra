"use client";

import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md border border-[rgba(26,28,28,0.08)] px-8 py-4 rounded-full shadow-sm">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#46583c]/10 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-[#46583c]" aria-hidden="true">
              flutter_dash
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#1a1c1c]">
            SEO{" "}
            <span
              className="text-[#46583c]"
              style={{ fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic" }}
            >
              Mothra
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium text-[#1a1c1c]/80">
          <a className="nav-link hover:text-[#46583c] transition-colors" href="/services">Services</a>
          <a className="nav-link hover:text-[#46583c] transition-colors" href="/#process">Process</a>
          <a className="nav-link hover:text-[#46583c] transition-colors" href="/blog">Learn</a>
          <a className="nav-link hover:text-[#46583c] transition-colors" href="/locations">Locations</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden md:block bg-[#46583c] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3a4c31] hover:scale-105 transition-all shadow-md shadow-[#46583c]/20"
          >
            Start Ranking
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#46583c]/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[#1a1c1c]" aria-hidden="true">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 mx-0 bg-white/95 backdrop-blur-md border border-[rgba(26,28,28,0.08)] rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col p-4 gap-1">
            {[
              { href: "/services", label: "Services" },
              { href: "/#process", label: "Process" },
              { href: "/blog", label: "Learn" },
              { href: "/locations", label: "Locations" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-[#1a1c1c]/80 hover:text-[#46583c] hover:bg-[#46583c]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#46583c] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#3a4c31] transition-colors"
            >
              Start Ranking
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
