import Link from "next/link";
import { BUSINESS } from "../config/business";

const highlights = [
  { title: "Wedding Invitations", desc: "Luxury wedding suites—save the date, invites, RSVP, inserts, envelopes." },
  { title: "Engagement & Ring Ceremony", desc: "Modern, floral, minimal, royal, and theme-based designs." },
  { title: "Birthday & Kids Events", desc: "Cute, colorful, cartoon themes with premium finishes." },
  { title: "Baby Shower & Naming", desc: "Soft pastels, traditional motifs, and custom typography." },
  { title: "Anniversary & Housewarming", desc: "Elegant designs with personalized details." },
  { title: "Corporate & Launch Events", desc: "Professional invitations, passes, and event stationery." },
];

export default function Page() {
  return (
    <div>
      <section className="hero">
        <div className="badge">Boutique Designer Cards • Premium Printing • Custom Themes</div>
        <h1>
          <span className="kicker">Designer boutique</span> invitation cards for every event.
        </h1>
        <p>
          {BUSINESS.description} Explore collections, share your theme, and we will create a premium invite that matches your vibe.
        </p>

        <div className="hstack" style={{ marginTop: 16 }}>
          <Link className="btn" href="/gallery">View Gallery</Link>
          <Link className="btn secondary" href="/contact">Get Quote</Link>
          {BUSINESS.whatsapp ? (
            <a className="btn secondary" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          ) : null}
        </div>
      </section>

      <section className="grid cols-3" style={{ marginTop: 10 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Our Specialty</h3>
          <p className="muted" style={{ marginBottom: 0 }}>
            Boutique designs with premium finishes—foil, emboss, texture, acrylic, laser-cut, and custom packaging (as per requirement).
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Fast Design Approval</h3>
          <p className="muted" style={{ marginBottom: 0 }}>
            We share drafts for approval, then proceed to printing. Clear timelines and transparent pricing.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Local + Online</h3>
          <p className="muted" style={{ marginBottom: 0 }}>
            Serving Gondia and beyond. Pickup/delivery options available depending on location.
          </p>
        </div>
      </section>

      <section style={{ marginTop: 18 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Collections</h2>
          <p className="muted" style={{ marginTop: 6 }}>
            Popular categories we design for. If you have a custom theme, we can create a new design from scratch.
          </p>

          <div className="grid cols-3" style={{ marginTop: 14 }}>
            {highlights.map((h) => (
              <div key={h.title} className="tile">
                <div className="tileTop" />
                <div className="tileBody">
                  <div className="tileTitle">{h.title}</div>
                  <p className="tileDesc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>How ordering works</h3>
          <ol className="list">
            <li>Share event details (date, venue, names, theme reference).</li>
            <li>We share design options & finalize size/material.</li>
            <li>Approval → printing → packing → pickup/delivery.</li>
          </ol>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>For Meta/WhatsApp review</h3>
          <ul className="list" style={{ marginBottom: 0 }}>
            <li>This site shows our business identity, product/services, and contact details.</li>
            <li>Privacy Policy and Terms are publicly accessible.</li>
            <li>Website loads without login and is accessible worldwide.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
