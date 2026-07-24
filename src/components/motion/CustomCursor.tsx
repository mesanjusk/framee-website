"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop, fine-pointer trailing cursor dot. Only hides the native cursor
 * (via the `custom-cursor-active` class on <html>) once this has actually
 * mounted and confirmed a fine pointer — see the CSS for the no-JS/coarse
 * pointer fallback that keeps the native cursor visible.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e: PointerEvent) => {
      dot.style.translate = `${e.clientX}px ${e.clientY}px`;
      dot.classList.add("is-visible");
    };
    const over = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      dot.classList.toggle("is-hovering", !!target.closest("a, button, .word-cloud-item, .floating-label"));
    };
    const leave = () => dot.classList.remove("is-visible");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
