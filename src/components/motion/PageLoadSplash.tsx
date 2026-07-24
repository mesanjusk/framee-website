"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "../BrandMark";

/**
 * Full-screen branded loader shown for one beat on first paint, then wipes
 * away to reveal the page — logo pulse + curved clip-path reveal. Mounted
 * once in the root layout, so it only ever plays on a hard page load, not
 * on client-side route changes (the layout tree persists across those).
 */
export function PageLoadSplash() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }
    const leaveTimer = setTimeout(() => setLeaving(true), 700);
    const removeTimer = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`page-splash${leaving ? " is-leaving" : ""}`} aria-hidden="true">
      <div className="page-splash-wipe" />
      <span className="page-splash-mark">
        <BrandMark color="#fff" />
      </span>
    </div>
  );
}
