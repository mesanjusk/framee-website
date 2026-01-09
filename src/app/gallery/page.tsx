import Link from "next/link";
import { BUSINESS } from "../../config/business";

const samples = [
  { title: "Royal Wedding Suite", desc: "Gold + floral theme, matching RSVP & inserts." },
  { title: "Minimal Typography", desc: "Clean modern layouts, pastel palette." },
  { title: "Laser-cut Pocket Invite", desc: "Premium pocket style with inserts." },
  { title: "Traditional Motifs", desc: "Classic Indian patterns with elegant type." },
  { title: "Kids Birthday Theme", desc: "Cartoon style with vibrant colors." },
  { title: "Corporate Invite", desc: "Formal, brand-aligned invitation design." },
];

export default function Page() {
  return (
    <div style={{ paddingTop: 20, paddingBottom: 10 }}>
      <h1>Gallery</h1>
      <p className="muted" style={{ maxWidth: "80ch" }}>
        Replace these placeholders with real images later. For Meta verification, a clear gallery section helps reviewers understand your product.
      </p>

      <div className="grid cols-3" style={{ marginTop: 18 }}>
        {samples.map((s) => (
          <div key={s.title} className="tile">
            <div className="tileTop" />
            <div className="tileBody">
              <div className="tileTitle">{s.title}</div>
              <p className="tileDesc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <h3 style={{ marginTop: 0 }}>Want a quote?</h3>
        <p className="muted" style={{ marginTop: 6 }}>
          Share event name, quantity, size, finish, and your preferred theme.
        </p>
        <div className="hstack" style={{ marginTop: 10 }}>
          <Link className="btn" href="/contact">Contact</Link>
          {BUSINESS.whatsapp ? (
            <a className="btn secondary" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
