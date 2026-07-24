/**
 * Infinite CSS-only ticker — no JS animation loop. Items are rendered
 * twice back-to-back so the 50%-translate loop point is seamless; the
 * duplicate is aria-hidden so screen readers only announce the content once.
 */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-band">
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((pass) => (
            <div key={pass} aria-hidden={pass === 1 ? true : undefined}>
              {items.map((item, i) => (
                <span key={i} className="marquee-item">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
