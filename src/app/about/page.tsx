import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Heart, Star } from "lucide-react";
import { BUSINESS } from "../../config/business";
import { Words } from "../../components/Words";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SK Digital Cards — a boutique invitation card studio designing premium, theme-based invitations for weddings, engagements, birthdays, and more.",
};

const values = [
  {
    title: "Artisan Quality",
    desc: "Every card is crafted with premium materials and obsessive attention to detail — nothing leaves our studio unless it's perfect.",
    Icon: Leaf,
  },
  {
    title: "Made with Care",
    desc: "We pour genuine care into every design, understanding that your invitation is the first chapter of your wedding story.",
    Icon: Heart,
  },
  {
    title: "Five Star Service",
    desc: "Transparent timelines, clear pricing, and a smooth approval-to-delivery process that our couples love.",
    Icon: Star,
  },
];

const details = [
  { label: "Studio", value: BUSINESS.name },
  { label: "Location", value: BUSINESS.address },
  { label: "Hours", value: BUSINESS.hours },
  { label: "Website", value: BUSINESS.website },
  { label: "Email", value: BUSINESS.email },
];

export default function Page() {
  return (
    <div className="page-inner">
      <div className="container">

        {/* Page Hero */}
        <div className="page-hero reveal reveal-stagger">
          <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>Our Story</span>
          <h1 className="page-title">
            <Words text="About" /> <span className="accent"><Words text={BUSINESS.name} startIndex={1} /></span>
          </h1>
          <p className="page-sub">
            A boutique invitation card studio with a passion for turning your love story
            into a beautiful, tangible first impression.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-2" style={{ marginBottom: "calc(var(--space-8) * 1.5)" }}>
          <div className="card reveal" style={{ padding: "var(--space-4)" }}>
            <h2 style={{ fontSize: 24 }}>Who We Are</h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.8 }}>{BUSINESS.description}</p>
            <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.75 }}>
              Based in {BUSINESS.address}, we serve clients across India, combining
              traditional craftsmanship with modern design sensibilities.
            </p>
          </div>

          <div className="card reveal" style={{ padding: "var(--space-4)", background: "var(--color-bg)", border: "1px solid var(--color-divider)", transitionDelay: "80ms" }}>
            <h2 style={{ fontSize: 24, color: "var(--color-accent-700)" }}>Business Details</h2>
            <dl className="definition-list">
              {details.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: "calc(var(--space-8) * 1.5)" }}>
          <h2 className="reveal reveal-stagger"><Words text="Our" /> <span className="accent"><Words text="Values" startIndex={1} /></span></h2>
          <p className="section-desc" style={{ marginBottom: "var(--space-6)" }}>
            The principles that guide everything we create.
          </p>
          <div className="grid grid-3">
            {values.map((v, i) => (
              <div key={i} className="card reveal" style={{ padding: "var(--space-4)", gap: "var(--space-3)", transitionDelay: `${i * 70}ms` }}>
                <div className="icon-badge-lg">
                  <v.Icon size={26} />
                </div>
                <div className="card-title">{v.title}</div>
                <p className="card-body" style={{ opacity: 1, color: "color-mix(in srgb, var(--color-text) 65%, transparent)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="grid grid-2">
          <div className="card reveal" style={{ padding: "var(--space-4)" }}>
            <h3>What We Design</h3>
            <ul style={{ paddingLeft: 18, fontSize: 14.5, lineHeight: 2, margin: 0, color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>
              <li>Designer invitation cards for weddings, engagements, birthdays, baby showers, and more</li>
              <li>Matching stationery sets — inserts, RSVP cards, envelopes, and tags</li>
              <li>Luxury finishes — foil, emboss, laser-cut, acrylic, and handmade paper</li>
              <li>Printing and finishing support based on your exact requirements</li>
              <li>Digital invitations for easy WhatsApp &amp; social media sharing</li>
            </ul>
          </div>

          <div className="stack reveal" style={{ transitionDelay: "80ms" }}>
            <div className="card" style={{ padding: "var(--space-4)", background: "var(--color-bg)", border: "1px solid var(--color-divider)" }}>
              <h3 style={{ fontSize: 20, color: "var(--color-accent-700)" }}>For Reviewers &amp; Partners</h3>
              <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.85, margin: 0, color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>
                <li>This website shows our business identity, products, and contact details</li>
                <li>Privacy Policy and Terms are publicly accessible</li>
                <li>Site loads without login and is accessible worldwide</li>
                <li>All content is authentic and belongs to {BUSINESS.name}</li>
              </ul>
            </div>

            <div className="hstack">
              <Link className="btn btn-primary" href="/services">View Collections</Link>
              <Link className="btn btn-secondary" href="/contact">Get in Touch</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
