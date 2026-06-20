import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Sanjusk Cards' gallery of premium wedding invitations, engagement cards, save the date, RSVP cards, acrylic invites, and luxury stationery.",
};

function GalleryDoodle({ type }: { type: "flower" | "heart" | "ring" | "leaf" | "scroll" | "sparkle" | "gift" | "acrylic" | "seal" }) {
  const props = { fill: "none", stroke: "#2E5E4E", strokeWidth: "1.6", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const map: Record<string, JSX.Element> = {
    flower: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><circle cx="24" cy="24" r="5"/><ellipse cx="24" cy="10" rx="4" ry="7"/><ellipse cx="24" cy="38" rx="4" ry="7"/><ellipse cx="10" cy="24" rx="7" ry="4"/><ellipse cx="38" cy="24" rx="7" ry="4"/><ellipse cx="13" cy="13" rx="4" ry="7" transform="rotate(45 13 13)"/><ellipse cx="35" cy="35" rx="4" ry="7" transform="rotate(45 35 35)"/><ellipse cx="35" cy="13" rx="4" ry="7" transform="rotate(-45 35 13)"/><ellipse cx="13" cy="35" rx="4" ry="7" transform="rotate(-45 13 35)"/></svg>,
    heart: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><path d="M24 41s-18-11-18-24c0-6.5 4.5-11 9-11 3 0 6.5 2 9 6 2.5-4 6-6 9-6 4.5 0 9 4.5 9 11C42 30 24 41 24 41z"/></svg>,
    ring: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><circle cx="18" cy="24" r="10"/><circle cx="30" cy="24" r="10"/></svg>,
    leaf: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><path d="M10 38C12 22 22 10 40 8C38 24 28 36 10 38Z"/><path d="M10 38C18 28 28 20 40 8"/></svg>,
    scroll: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><path d="M14 10h24c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H14"/><path d="M14 10c-3.5 0-6 2-6 4v22c0 3.5 3.5 4 6 4V10z"/><line x1="20" y1="20" x2="34" y2="20"/><line x1="20" y1="26" x2="34" y2="26"/><line x1="20" y1="32" x2="29" y2="32"/></svg>,
    sparkle: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><path d="M24 6l3 15-3 3-3-3L24 6z"/><path d="M24 42l-3-15 3-3 3 3L24 42z"/><path d="M6 24l15-3 3 3-3 3L6 24z"/><path d="M42 24l-15 3-3-3 3-3L42 24z"/><circle cx="24" cy="24" r="2.5" fill="#2E5E4E"/></svg>,
    gift: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><rect x="6" y="22" width="36" height="20" rx="2"/><rect x="8" y="16" width="32" height="8" rx="2"/><line x1="24" y1="16" x2="24" y2="42"/><path d="M24 16C24 16 18 12 16 8C14 4 18 3 20 5C22 7 24 16 24 16"/><path d="M24 16C24 16 30 12 32 8C34 4 30 3 28 5C26 7 24 16 24 16"/></svg>,
    acrylic: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><rect x="10" y="7" width="28" height="38" rx="3"/><line x1="17" y1="17" x2="31" y2="17"/><line x1="17" y1="23" x2="31" y2="23"/><line x1="17" y1="29" x2="25" y2="29"/><circle cx="35" cy="13" r="3" stroke="#D8B36A"/></svg>,
    seal: <svg width="52" height="52" viewBox="0 0 48 48" {...props} aria-hidden="true"><circle cx="24" cy="28" r="16"/><circle cx="24" cy="28" r="11"/><path d="M24 8l2-6M24 8l-2-6"/></svg>,
  };
  return map[type] ?? map.flower;
}

const galleryItems = [
  { label: "Royal Wedding Suite", sub: "Gold foil + floral theme", h: 300, bg: "linear-gradient(150deg,#EAF7F0,#c3e8d0)", doodle: "flower" as const },
  { label: "Minimal Typography", sub: "Clean layouts, pastel palette", h: 220, bg: "linear-gradient(150deg,#fef9ec,#f5e0a0)", doodle: "sparkle" as const },
  { label: "Acrylic Luxury Box", sub: "Premium transparent invite", h: 340, bg: "linear-gradient(150deg,#f0f4ff,#d0dcff)", doodle: "acrylic" as const },
  { label: "Floral Save the Date", sub: "Delicate floral watercolor style", h: 200, bg: "linear-gradient(150deg,#fff0f5,#ffc8dc)", doodle: "heart" as const },
  { label: "Laser-cut Pocket Invite", sub: "Premium pocket with inserts", h: 310, bg: "linear-gradient(150deg,#f5f0ff,#dac0ff)", doodle: "scroll" as const },
  { label: "Traditional Motifs", sub: "Classic Indian patterns", h: 250, bg: "linear-gradient(150deg,#fff9f0,#ffd8a0)", doodle: "seal" as const },
  { label: "Wax Seal Collection", sub: "Luxe wax sealed suites", h: 270, bg: "linear-gradient(150deg,#f0fff6,#a0e8b8)", doodle: "leaf" as const },
  { label: "Kids Birthday Theme", sub: "Cartoon + vibrant colors", h: 190, bg: "linear-gradient(150deg,#ffeef5,#ffbcd9)", doodle: "gift" as const },
  { label: "Engagement Rings Card", sub: "Ring ceremony invitation", h: 290, bg: "linear-gradient(150deg,#eff5ff,#b0c8ff)", doodle: "ring" as const },
  { label: "Corporate Event Pass", sub: "Formal, brand-aligned design", h: 230, bg: "linear-gradient(150deg,#EAF7F0,#2E5E4E)", doodle: "scroll" as const },
  { label: "Box Invitation Set", sub: "Premium unboxing experience", h: 260, bg: "linear-gradient(150deg,#fef9ec,#c49a50)", doodle: "gift" as const },
  { label: "Scroll Invitation", sub: "Handcrafted classic scroll", h: 200, bg: "linear-gradient(150deg,#f5f0ff,#9a7abf)", doodle: "sparkle" as const },
];

export default function Page() {
  return (
    <div className="pageInner">
      <div className="container">

        {/* Page Hero */}
        <div className="pageHero">
          <div className="sectionTag" style={{ marginBottom: 20 }}>
            Our Portfolio
          </div>
          <h1 className="pageTitle">
            Gallery of<br />
            <span style={{ color: "var(--forest)", fontStyle: "italic" }}>Creations</span>
          </h1>
          <p className="pageSubtitle">
            A curated collection of our handcrafted wedding invitations, engagement cards,
            and premium stationery pieces — each uniquely designed for real couples.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="galleryGrid" style={{ marginBottom: 60 }}>
          {galleryItems.map((item, i) => (
            <div key={i} className="galleryItem">
              <div
                className="galleryItemInner"
                style={{ height: item.h, background: item.bg }}
              >
                <div style={{ opacity: 0.45, pointerEvents: "none" }}>
                  <GalleryDoodle type={item.doodle} />
                </div>
                <div className="galleryLabel">
                  <div style={{ fontWeight: 600 }}>{item.label}</div>
                  <div style={{ fontSize: 11.5, color: "var(--muted)", fontFamily: "Poppins, sans-serif", fontWeight: 400, marginTop: 2 }}>{item.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div style={{
          background: "var(--mint)", border: "1px solid var(--sage)",
          borderRadius: "var(--radius-lg)", padding: "52px 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 28
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700,
              color: "var(--text)", marginBottom: 10, lineHeight: 1.1
            }}>
              Love what you see?<br />
              <span style={{ color: "var(--forest)", fontStyle: "italic" }}>Let&apos;s create yours.</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 460, lineHeight: 1.7 }}>
              Share your event details and theme inspiration — we&apos;ll craft a bespoke invitation that&apos;s perfectly yours.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
            <Link className="btn primary" href="/contact">Contact Us</Link>
            {BUSINESS.whatsapp && (
              <a className="btn secondary" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
