"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function animateEntrance(scope: ParentNode) {
  const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
  const root = scope.querySelector<HTMLElement>("[data-page-root]");
  if (!root) return;

  const targets = root.querySelectorAll<HTMLElement>(
    "[data-hero-eyebrow], [data-hero-title], [data-hero-copy], [data-hero-cta], [data-reveal]",
  );

  if (!targets.length) return;

  gsap.killTweensOf(targets);
  gsap.set(targets, { autoAlpha: 0, y: reducedMotion ? 0 : 16 });

  gsap.to(targets, {
    autoAlpha: 1,
    y: 0,
    duration: reducedMotion ? 0 : 0.7,
    ease: "power3.out",
    stagger: reducedMotion ? 0 : 0.06,
    clearProps: "transform",
  });

  const cards = root.querySelectorAll<HTMLElement>("[data-card]");
  if (cards.length) {
    gsap.set(cards, { autoAlpha: 0, y: reducedMotion ? 0 : 18 });
    gsap.to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: reducedMotion ? 0 : 0.6,
      ease: "power2.out",
      stagger: reducedMotion ? 0 : 0.05,
      delay: reducedMotion ? 0 : 0.05,
      clearProps: "transform",
    });
  }
}

export function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    animateEntrance(document);

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
    );

    if (reducedMotion || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          gsap.to(target, {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            clearProps: "transform",
          });
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    items.forEach((item) => {
      gsap.set(item, { autoAlpha: 0, y: 18 });
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
