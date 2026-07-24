/**
 * Splits `text` into individually-staggered <span class="word"> elements.
 * Used inside a `.reveal-stagger` ancestor (see globals.css) — the words
 * stay invisible until that ancestor is scrolled into view, then cascade
 * in one after another via each span's own transition-delay.
 */
export function Words({
  text,
  startIndex = 0,
  step = 40,
}: {
  text: string;
  startIndex?: number;
  step?: number;
}) {
  const words = text.split(" ");
  const nodes: React.ReactNode[] = [];
  words.forEach((word, i) => {
    if (i > 0) nodes.push(" ");
    nodes.push(
      <span key={i} className="word" style={{ transitionDelay: `${(startIndex + i) * step}ms` }}>
        {word}
      </span>
    );
  });
  return <>{nodes}</>;
}
