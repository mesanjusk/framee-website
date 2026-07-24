"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Every scroll-scrubbed effect on the site lives here, in one GSAP
 * context: hero/organic-bg parallax, the hero-panel 3D tilt, the
 * curved-banner drift, and the pinned "How it works" step sequence.
 *
 * Mounted once in the root layout, like ScrollReveal. Re-scoped on every
 * pathname change — the layout persists across client-side navigation, so
 * without this the triggers created for the homepage would go stale (or
 * silently find nothing) after navigating away and back.
 */
export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const heroTiltWrap = document.querySelector<HTMLElement>(".hero-tilt-wrap");
      const organicBgs = document.querySelectorAll<HTMLElement>(".organic-bg");
      const curvedBanner = document.querySelector<HTMLElement>(".curved-banner svg")?.closest<HTMLElement>(".curved-banner");

      if (hero) {
        gsap.to(hero, {
          "--parallax-a": 70,
          "--parallax-b": -50,
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
        });
      }

      if (heroTiltWrap) {
        gsap.to(heroTiltWrap, {
          "--tilt-x": 7,
          "--tilt-y": 5,
          ease: "none",
          scrollTrigger: { trigger: heroTiltWrap, start: "top top", end: "bottom top", scrub: true },
        });
      }

      organicBgs.forEach((el) => {
        gsap.to(el, {
          "--parallax-a": 40,
          "--parallax-b": -30,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      if (curvedBanner) {
        gsap.fromTo(
          curvedBanner,
          { "--curve-drift": -22 },
          {
            "--curve-drift": 22,
            ease: "none",
            scrollTrigger: { trigger: curvedBanner, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      }

      // — pinned, scroll-scrubbed "How it works" — desktop only. Mobile
      // keeps the plain horizontal scroll-row (see .pin-steps-mobile /
      // .pin-steps-desktop in globals.css); pinning a 400vh section is
      // exactly the kind of thing that gets janky on mobile Safari.
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const track = document.querySelector<HTMLElement>(".pin-steps");
          const sticky = document.querySelector<HTMLElement>(".pin-steps-sticky");
          const steps = gsap.utils.toArray<HTMLElement>(".pin-step");
          if (!track || !sticky || !steps.length) return;

          steps[0].classList.add("is-active");

          ScrollTrigger.create({
            trigger: track,
            start: "top top",
            end: "bottom bottom",
            pin: sticky,
            onUpdate(self) {
              const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
              steps.forEach((el, i) => el.classList.toggle("is-active", i === idx));
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
