import type { Metadata } from "next";
import Link from "next/link";
import {
  Flower2,
  Heart,
  Gem,
  Mail,
  ScrollText,
  Sparkles,
  Gift,
  Layers,
  Stamp,
} from "lucide-react";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse SK Digital Cards' gallery of premium wedding invitations, engagement cards, save the date, RSVP cards, acrylic invites, and luxury stationery.",
};

const galleryItems = [
  { label: "Royal Wedding Suite", sub: "Gold foil + floral theme", h: 260, Icon: Flower2 },
  { label: "Minimal Typography", sub: "Clean layouts, pastel palette", h: 190, Icon: Sparkles },
  { label: "Acrylic Luxury Box", sub: "Premium transparent invite", h: 300, Icon: Layers },
  { label: "Floral Save the Date", sub: "Delicate floral watercolor style", h: 180, Icon: Heart },
  { label: "Laser-cut Pocket Invite", sub: "Premium pocket with inserts", h: 270, Icon: ScrollText },
  { label: "Traditional Motifs", sub: "Classic Indian patterns", h: 220, Icon: Stamp },
  { label: "Wax Seal Collection", sub: "Luxe wax sealed suites", h: 240, Icon: Stamp },
  { label: "Kids Birthday Theme", sub: "Cartoon + vibrant colors", h: 170, Icon: Gift },
  { label: "Engagement Rings Card", sub: "Ring ceremony invitation", h: 250, Icon: Gem },
  { label: "Corporate Event Pass", sub: "Formal, brand-aligned design", h: 200, Icon: ScrollText },
  { label: "Box Invitation Set", sub: "Premium unboxing experience", h: 230, Icon: Gift },
  { label: "Scroll Invitation", sub: "Handcrafted classic scroll", h: 180, Icon: Mail },
];

export default function Page() {
  return (
    <div className="page-inner">
      <div className="container">

        {/* Page Hero */}
        <div className="page-hero">
          <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>Our Portfolio</span>
          <h1 className="page-title">
            Gallery of <span className="accent">Creations</span>
          </h1>
          <p className="page-sub">
            A curated collection of our handcrafted wedding invitations, engagement cards,
            and premium stationery pieces — each uniquely designed for real couples.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="gallery-grid" style={{ marginBottom: "var(--space-8)" }}>
          {galleryItems.map((item, i) => (
            <div key={i} className="gallery-item">
              <div className="media-tile" style={{ height: item.h, aspectRatio: "auto" }}>
                <item.Icon size={44} color="var(--color-neutral-600)" />
              </div>
              <div className="gallery-label">
                <div className="gallery-label-title">{item.label}</div>
                <div className="gallery-label-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="cta-band" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "var(--space-6)"
        }}>
          <div>
            <h2 style={{ marginBottom: "var(--space-2)" }}>
              Love what you see? Let&apos;s create yours.
            </h2>
            <p className="section-desc" style={{ margin: 0 }}>
              Share your event details and theme inspiration — we&apos;ll craft a bespoke invitation that&apos;s perfectly yours.
            </p>
          </div>
          <div className="hstack" style={{ flexShrink: 0 }}>
            <Link className="btn btn-secondary" href="/contact">Contact Us</Link>
            {BUSINESS.whatsapp && (
              <a className="btn btn-ghost" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
