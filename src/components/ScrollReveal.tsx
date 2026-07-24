"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mounted once (in the root layout) so every page gets on-scroll reveal
 * animations for free: any element with the `reveal` class fades/slides in
 * the first time it enters the viewport. No wrapper DOM nodes, so it can't
 * break flex/grid direct-child selectors elsewhere in the CSS.
 *
 * `.reveal-stagger` is the same mechanism — it also gets `.reveal-visible`
 * added, but its own CSS keeps it static; the animation happens on the
 * `.word` spans inside it instead (see globals.css and Words.tsx).
 *
 * The root layout persists across client-side navigation, so the effect is
 * keyed on the pathname — otherwise it would only ever scan the first page.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal:not(.reveal-visible), .reveal-stagger:not(.reveal-visible)"
    );
    if (!targets.length) return;

    // No JS-driven animation support (old browser, reduced motion) — just show everything.
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
