/**
 * A short gradient blend dropped between two hard-cut section backgrounds,
 * so the join reads as a bleed rather than a stripe. No animation of its
 * own — it's what makes the "background color transition" idea from the
 * audit real without needing a scroll-scrubbed cross-fade on every section.
 */
export function SectionSeam({ from, to }: { from: string; to: string }) {
  return <div className="section-seam" aria-hidden="true" style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }} />;
}
