"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Enter-only route transition — a fade + rise replays each time the
 * pathname changes, via a key-remount (no exit choreography; that needs a
 * mount-lifecycle library, which wasn't worth adding for this alone).
 *
 * Driven by a transition + an `.is-entering` class toggled off shortly
 * after mount, not a CSS `animation` — see the comment in globals.css for
 * why: an animation's fill-mode leaves `translate` stuck at a non-`none`
 * value forever, which breaks `position: fixed` for every descendant.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <Entering pathKey={pathname}>{children}</Entering>;
}

function Entering({ pathKey, children }: { pathKey: string; children: ReactNode }) {
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    setEntering(true);
    const id = requestAnimationFrame(() => setEntering(false));
    return () => cancelAnimationFrame(id);
  }, [pathKey]);

  return <div className={`page-transition${entering ? " is-entering" : ""}`}>{children}</div>;
}
