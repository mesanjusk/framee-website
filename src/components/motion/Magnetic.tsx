"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

/**
 * Wraps a single child (a CTA) and gently pulls it toward the cursor within
 * a radius, snapping back on leave. Desktop, fine-pointer only — on touch
 * this is a no-op wrapper with zero added listeners.
 */
export function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isFine = useRef<boolean | null>(null);

  const handleMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (isFine.current === null) {
      isFine.current = window.matchMedia("(pointer: fine)").matches;
    }
    if (!isFine.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.translate = `${x}px ${y}px`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.translate = "0 0";
  };

  return (
    <span ref={ref} className="magnetic" onPointerMove={handleMove} onPointerLeave={handleLeave}>
      {children}
    </span>
  );
}
