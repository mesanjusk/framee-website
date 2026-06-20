import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Sanjusk Cards' premium wedding invitation collections — wedding suites, save the date, RSVP cards, acrylic invites, scroll invitations, and more.",
};

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#2E5E4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l4 4L15 5" />
    </svg>
  );
}

function CollectionDoodle({ type }: { type: string }) {
  if (type === "flower") return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="24" cy="24" r="5"/>
      <ellipse cx="24" cy="10" rx="4" ry="7"/>
      <ellipse cx="24" cy="38" rx="4" ry="7"/>
      <ellipse cx="10" cy="24" rx="7" ry="4"/>
      <ellipse cx="38" cy="24" rx="7" ry="4"/>
      <ellipse cx="13" cy="13" rx="4" ry="7" transform="rotate(45 13 13)"/>
      <ellipse cx="35" cy="35" rx="4" ry="7" transform="rotate(45 35 35)"/>
      <ellipse cx="35" cy="13" rx="4" ry="7" transform="rotate(-45 35 13)"/>
      <ellipse cx="13" cy="35" rx="4" ry="7" transform="rotate(-45 13 35)"/>
    </svg>
  );
  if (type === "ring") return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="18" cy="24" r="10"/><circle cx="30" cy="24" r="10"/>
    </svg>
  );
  if (type === "heart") return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 41s-18-11-18-24c0-6.5 4.5-11 9-11 3 0 6.5 2 9 6 2.5-4 6-6 9-6 4.5 0 9 4.5 9 11C42 30 24 41 24 41z"/>
    </svg>
  );
  if (type === "scroll") return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 10h24c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H14"/>
      <path d="M14 10c-3.5 0-6 2-6 4v22c0 3.5 3.5 4 6 4V10z"/>
      <line x1="20" y1="20" x2="34" y2="20"/><line x1="20" y1="26" x2="34" y2="26"/><line x1="20" y1="32" x2="29" y2="32"/>
    </svg>
  );
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="22" width="32" height="18" rx="2"/>
      <rect x="10" y="16" width="28" height="8" rx="2"/>
      <line x1="24" y1="16" x2="24" y2="40"/>
      <path d="M24 16C24 16 19 12 17 8C15 4 18 3 20 5C22 7 24 16 24 16"/>
      <path d="M24 16C24 16 29 12 31 8C33 4 30 3 28 5C26 7 24 16 24 16"/>
    </svg>
  );
}

const collections = [
  {
    title: "Wedding Suites",
    desc: "Complete wedding stationery — save the date, invitation, RSVP, inserts, envelopes, and matching tags.",
    doodle: "flower",
    tags: ["Foil options", "Custom wording", "Matching sets"],
  },
  {
    title: "Engagement & Ring Ceremony",
    desc: "Royal, floral, minimal, and modern typography themes tailored to your celebration.",
    doodle: "ring",
    tags: ["Royal", "Floral", "Minimal"],
  },
  {
    title: "Birthday & Kids Events",
    desc: "Vibrant cartoon themes, fun colors, and premium print finishes for all ages.",
    doodle: "heart",
    tags: ["Kids themes", "Fun colors", "Premium print"],
  },
  {
    title: "Baby Shower & Naming",
    desc: "Soft pastels, traditional motifs, and custom typography for welcoming new arrivals.",
    doodle: "heart",
    tags: ["Pastels", "Traditional", "Modern"],
  },
  {
    title: "Anniversary & Housewarming",
    desc: "Elegant invitations with matching insert sets for life's milestone moments.",
    doodle: "scroll",
    tags: ["Elegant", "Matching inserts", "Milestone"],
  },
  {
    title: "Corporate Events",
    desc: "Professional launch invitations, event passes, and branded formal stationery.",
    doodle: "scroll",
    tags: ["Professional", "Branded", "Formal"],
  },
];

const finishes = [
  "Matte / Gloss lamination",
  "Foil (gold / silver / rose-gold)",
  "Emboss / Deboss texture",
  "Handmade paper options",
  "Laser-cut elements",
  "Acrylic / premium card stock",
  "Envelope + wax seal packaging",
  "Custom box presentation",
];

export default function Page() {
  return (
    <div className="pageInner">
      <div className="container">

        {/* Page Hero */}
        <div className="pageHero">
          <div className="sectionTag" style={{ marginBottom: 20 }}>
            Our Collections
          </div>
          <h1 className="pageTitle">
            Premium Invitation<br />
            <span style={{ color: "var(--forest)", fontStyle: "italic" }}>Collections</span>
          </h1>
          <p className="pageSubtitle">
            We design and print boutique invitation cards and matching stationery sets.
            Every design is custom-crafted to match your theme and budget.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid cols-3" style={{ marginBottom: 64 }}>
          {collections.map((c, i) => (
            <div key={i} className="tile">
              <div className="tileTop">
                <CollectionDoodle type={c.doodle} />
              </div>
              <div className="tileBody">
                <div className="tileTitle">{c.title}</div>
                <p className="tileDesc">{c.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
                  {c.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: 11, fontWeight: 600, padding: "3px 10px",
                      background: "var(--mint)", borderRadius: 999, color: "var(--forest)",
                      border: "1px solid var(--sage)"
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="grid cols-2" style={{ marginBottom: 64 }}>
          {/* Finishes */}
          <div className="card">
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, marginBottom: 8 }}>
              Premium Finishes
            </h2>
            <p className="muted" style={{ marginBottom: 20 }}>
              We offer a wide range of luxury finishes to elevate your invitations.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {finishes.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckIcon />
                  <span style={{ fontSize: 14.5, color: "var(--text-soft)" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customization */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="infoCard">
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, marginBottom: 12, color: "var(--forest)" }}>
                Fully Customizable
              </h3>
              <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 12 }}>
                We customize content, colors, fonts, and layout to match your event theme exactly.
                Share reference images and we&apos;ll create a fresh design from scratch.
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                For quotes, share: quantity, size, finish preference, and your timeline.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 12 }}>
                How to Order
              </h3>
              <ol style={{ paddingLeft: 18, color: "var(--muted)", fontSize: 14.5, lineHeight: 2 }}>
                <li>Share event details — date, venue, names, theme reference</li>
                <li>We share design options and finalize size &amp; material</li>
                <li>Approve the digital proof</li>
                <li>Printing &rarr; packing &rarr; delivery</li>
              </ol>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn primary" href="/contact">
                Get a Quote
              </Link>
              {BUSINESS.whatsapp && (
                <a className="btn secondary" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
