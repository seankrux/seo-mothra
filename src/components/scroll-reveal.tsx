"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    const connect = () => {
      document
        .querySelectorAll(".reveal, .stagger-reveal")
        .forEach((el) => observer.observe(el));
    };

    connect();
    // Re-observe after React finishes rendering async page content
    const t = setTimeout(connect, 100);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
