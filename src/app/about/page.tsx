import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sanjusk Cards — a boutique invitation card studio designing premium, theme-based invitations for weddings, engagements, birthdays, and more.",
};

function LeafDoodle() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 38C12 22 22 10 40 8C38 24 28 36 10 38Z"/>
      <path d="M10 38C18 28 28 20 40 8"/>
    </svg>
  );
}

function HeartDoodle() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 41s-18-11-18-24c0-6.5 4.5-11 9-11 3 0 6.5 2 9 6 2.5-4 6-6 9-6 4.5 0 9 4.5 9 11C42 30 24 41 24 41z"/>
    </svg>
  );
}

function StarDoodle() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#D8B36A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 6l4.5 13H42l-11.2 8.1L34.9 41 24 32.9 13.1 41l4.1-13.9L6 19H19.5z"/>
    </svg>
  );
}

const values = [
  {
    title: "Artisan Quality",
    desc: "Every card is crafted with premium materials and obsessive attention to detail — nothing leaves our studio unless it's perfect.",
    Doodle: LeafDoodle,
  },
  {
    title: "Made with Love",
    desc: "We pour genuine care into every design, understanding that your invitation is the first chapter of your wedding story.",
    Doodle: HeartDoodle,
  },
  {
    title: "Five Star Service",
    desc: "Transparent timelines, clear pricing, and a smooth approval-to-delivery process that our couples love.",
    Doodle: StarDoodle,
  },
];

export default function Page() {
  return (
    <div className="pageInner">
      <div className="container">

        {/* Page Hero */}
        <div className="pageHero">
          <div className="sectionTag" style={{ marginBottom: 20 }}>
            Our Story
          </div>
          <h1 className="pageTitle">
            About<br />
            <span style={{ color: "var(--forest)", fontStyle: "italic" }}>{BUSINESS.name}</span>
          </h1>
          <p className="pageSubtitle">
            A boutique invitation card studio with a passion for turning your love story
            into a beautiful, tangible first impression.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid cols-2" style={{ marginBottom: 56 }}>
          <div className="card">
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, marginBottom: 16 }}>
              Who We Are
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-soft)", lineHeight: 1.8, marginBottom: 14 }}>
              {BUSINESS.description}
            </p>
            <p style={{ fontSize: 14.5, color: "var(--muted)", lineHeight: 1.75 }}>
              Based in {BUSINESS.address}, we serve clients locally and worldwide, combining
              traditional craftsmanship with modern design sensibilities.
            </p>
          </div>

          <div className="infoCard">
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, marginBottom: 20, color: "var(--forest)" }}>
              Business Details
            </h2>
            <dl style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Studio", value: BUSINESS.name },
                { label: "Location", value: BUSINESS.address },
                { label: "Hours", value: BUSINESS.hours },
                { label: "Website", value: BUSINESS.website },
                { label: "Email", value: BUSINESS.email },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt style={{ fontSize: 11, fontWeight: 700, color: "var(--forest)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>
                    {label}
                  </dt>
                  <dd style={{ fontSize: 14.5, color: "var(--text-soft)" }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, marginBottom: 12 }}>
            Our <span style={{ color: "var(--forest)", fontStyle: "italic" }}>Values</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 36, maxWidth: 520 }}>
            The principles that guide everything we create.
          </p>
          <div className="grid cols-3">
            {values.map((v, i) => (
              <div key={i} className="featureCard">
                <div className="featureIconWrap">
                  <v.Doodle />
                </div>
                <div className="featureTitle">{v.title}</div>
                <div className="featureDesc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="grid cols-2" style={{ marginBottom: 56 }}>
          <div className="card">
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, marginBottom: 16 }}>
              What We Design
            </h3>
            <ul className="list" style={{ fontSize: 14.5, lineHeight: 2 }}>
              <li>Designer invitation cards for weddings, engagements, birthdays, baby showers, and more</li>
              <li>Matching stationery sets — inserts, RSVP cards, envelopes, and tags</li>
              <li>Luxury finishes — foil, emboss, laser-cut, acrylic, and handmade paper</li>
              <li>Printing and finishing support based on your exact requirements</li>
              <li>Digital invitations for easy WhatsApp &amp; social media sharing</li>
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="infoCard">
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10, color: "var(--forest)" }}>
                For Reviewers &amp; Partners
              </h3>
              <ul className="list" style={{ fontSize: 14, lineHeight: 1.85 }}>
                <li>This website shows our business identity, products, and contact details</li>
                <li>Privacy Policy and Terms are publicly accessible</li>
                <li>Site loads without login and is accessible worldwide</li>
                <li>All content is authentic and belongs to {BUSINESS.name}</li>
              </ul>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <Link className="btn primary" href="/services">View Collections</Link>
              <Link className="btn secondary" href="/contact">Get in Touch</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
