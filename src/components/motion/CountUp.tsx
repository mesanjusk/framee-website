"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a number up from 0 the first time it scrolls into view. Accepts
 * the full display string (e.g. "1000+", "5.0★") and animates only the
 * leading numeric part, keeping any prefix/suffix static.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\D*)([\d.]+)(.*)$/);
    const el = ref.current;
    if (!el || !match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    setDisplay(prefix + "0" + suffix);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    let done = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !done) {
            done = true;
            observer.disconnect();
            const duration = 1100;
            const start = performance.now();
            const ease = (t: number) => 1 - Math.pow(1 - t, 3);
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / duration);
              const current = target * ease(progress);
              setDisplay(prefix + current.toFixed(decimals) + suffix);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={`count-up${className ? ` ${className}` : ""}`}>
      {display}
    </span>
  );
}
