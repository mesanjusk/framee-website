import type { Metadata } from "next";
import Link from "next/link";
import { Check, Flower2, Gem, Heart, ScrollText, Gift } from "lucide-react";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore SK Digital Cards' premium wedding invitation collections — wedding suites, save the date, RSVP cards, acrylic invites, scroll invitations, and more.",
};

const collections = [
  {
    title: "Wedding Suites",
    desc: "Complete wedding stationery — save the date, invitation, RSVP, inserts, envelopes, and matching tags.",
    Icon: Flower2,
    tags: ["Foil options", "Custom wording", "Matching sets"],
  },
  {
    title: "Engagement & Ring Ceremony",
    desc: "Royal, floral, minimal, and modern typography themes tailored to your celebration.",
    Icon: Gem,
    tags: ["Royal", "Floral", "Minimal"],
  },
  {
    title: "Birthday & Kids Events",
    desc: "Vibrant cartoon themes, fun colors, and premium print finishes for all ages.",
    Icon: Gift,
    tags: ["Kids themes", "Fun colors", "Premium print"],
  },
  {
    title: "Baby Shower & Naming",
    desc: "Soft pastels, traditional motifs, and custom typography for welcoming new arrivals.",
    Icon: Heart,
    tags: ["Pastels", "Traditional", "Modern"],
  },
  {
    title: "Anniversary & Housewarming",
    desc: "Elegant invitations with matching insert sets for life's milestone moments.",
    Icon: ScrollText,
    tags: ["Elegant", "Matching inserts", "Milestone"],
  },
  {
    title: "Corporate Events",
    desc: "Professional launch invitations, event passes, and branded formal stationery.",
    Icon: ScrollText,
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
    <div className="page-inner">
      <div className="container">

        {/* Page Hero */}
        <div className="page-hero">
          <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>Our Collections</span>
          <h1 className="page-title">
            Premium Invitation <span className="accent">Collections</span>
          </h1>
          <p className="page-sub">
            We design and print boutique invitation cards and matching stationery sets.
            Every design is custom-crafted to match your theme and budget.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-3" style={{ marginBottom: "calc(var(--space-8) * 1.5)" }}>
          {collections.map((c, i) => (
            <div key={i} className="tile-card">
              <div className="media-tile">
                <c.Icon size={44} color="var(--color-neutral-600)" />
              </div>
              <div className="card-body-inner">
                <div className="card-title">{c.title}</div>
                <p className="card-body" style={{ opacity: 1, color: "color-mix(in srgb, var(--color-text) 62%, transparent)" }}>
                  {c.desc}
                </p>
                <div className="hstack" style={{ marginTop: "var(--space-2)" }}>
                  {c.tags.map((tag) => (
                    <span key={tag} className="tag tag-outline">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="grid grid-2">
          {/* Finishes */}
          <div className="card" style={{ padding: "var(--space-4)" }}>
            <h2 style={{ fontSize: 24 }}>Premium Finishes</h2>
            <p className="text-muted" style={{ marginBottom: "var(--space-4)" }}>
              We offer a wide range of luxury finishes to elevate your invitations.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)", margin: 0 }}>
              {finishes.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <Check size={16} color="var(--color-accent)" />
                  <span style={{ fontSize: 14.5 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customization */}
          <div className="stack">
            <div className="card" style={{ padding: "var(--space-4)", background: "var(--color-bg)", border: "1px solid var(--color-divider)" }}>
              <h3 style={{ fontSize: 20, color: "var(--color-accent-700)" }}>Fully Customizable</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>
                We customize content, colors, fonts, and layout to match your event theme exactly.
                Share reference images and we&apos;ll create a fresh design from scratch.
              </p>
              <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                For quotes, share: quantity, size, finish preference, and your timeline.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--space-4)" }}>
              <h3 style={{ fontSize: 19 }}>How to Order</h3>
              <ol style={{ paddingLeft: 18, fontSize: 14.5, lineHeight: 2, margin: 0, color: "color-mix(in srgb, var(--color-text) 75%, transparent)" }}>
                <li>Share event details — date, venue, names, theme reference</li>
                <li>We share design options and finalize size &amp; material</li>
                <li>Approve the digital proof</li>
                <li>Printing &rarr; packing &rarr; delivery</li>
              </ol>
            </div>

            {/* CTA */}
            <div className="hstack">
              <Link className="btn btn-primary" href="/contact">
                Get a Quote
              </Link>
              {BUSINESS.whatsapp && (
                <a className="btn btn-secondary" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
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
