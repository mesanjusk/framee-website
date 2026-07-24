"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Wraps `.scroll-row` with a pagination-dot indicator that tracks which
 * card is currently centered. Purely additive — the row's own markup and
 * scroll-snap behavior are untouched, this just observes it.
 */
export function ScrollRow({ children, count }: { children: ReactNode; count: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const cards = Array.from(row.children) as HTMLElement[];
    if (!cards.length) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const center = row.scrollLeft + row.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        cards.forEach((card, i) => {
          const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    };
    row.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      row.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = (i: number) => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.children[i] as HTMLElement | undefined;
    if (card) row.scrollTo({ left: card.offsetLeft - (row.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-row" ref={rowRef}>
        {children}
      </div>
      <div className="scroll-dots" role="tablist" aria-label="Scroll position">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`scroll-dot${i === active ? " is-active" : ""}`}
            aria-label={`Go to item ${i + 1}`}
            aria-selected={i === active}
            role="tab"
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </>
  );
}
