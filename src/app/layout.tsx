import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { BUSINESS } from "../config/business";
import { BrandMark } from "../components/BrandMark";
import { SiteHeader } from "../components/SiteHeader";
import { ScrollReveal } from "../components/ScrollReveal";
import { ScrollFX } from "../components/motion/ScrollFX";
import { PageLoadSplash } from "../components/motion/PageLoadSplash";
import { CustomCursor } from "../components/motion/CustomCursor";
import { PageTransition } from "../components/motion/PageTransition";
import { Magnetic } from "../components/motion/Magnetic";

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  metadataBase: new URL(BUSINESS.website),
  openGraph: {
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: BUSINESS.description,
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: BUSINESS.website,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressCountry: "IN",
    },
    sameAs: [BUSINESS.instagram].filter(Boolean),
  };

  return (
    <html lang="en">
      <body>
        {/* If JS is disabled, ScrollReveal never runs to add .reveal-visible —
            this keeps hero/section content visible instead of stuck at opacity:0. */}
        <noscript>
          <style>{`
            .reveal { opacity: 1 !important; translate: 0 0 !important; }
            .reveal-stagger .word { opacity: 1 !important; transform: none !important; }
            .media-reveal { clip-path: none !important; }
          `}</style>
        </noscript>
        <ScrollReveal />
        <ScrollFX />
        <PageLoadSplash />
        <CustomCursor />

        {/* ===== HEADER ===== */}
        <SiteHeader />

        {/* ===== MAIN ===== */}
        <main>
          <PageTransition>{children}</PageTransition>
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="site-footer">
          <div className="container">
            {/* Brand + quick-contact chips */}
            <Link href="/" className="brand-link" aria-label={BUSINESS.name} style={{ marginBottom: "var(--space-4)" }}>
              <span className="brand-mark"><BrandMark color="#fff" /></span>
              <span className="brand-name">SK Digital</span>
              <span className="brand-tag">CARDS<br />STUDIO</span>
            </Link>

            <div className="footer-chips">
              {BUSINESS.whatsapp && (
                <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="footer-chip">
                  <span className="footer-chip-emoji" aria-hidden="true">💬</span>
                  <span>
                    <span className="footer-chip-eyebrow">Message us on</span>
                    <span className="footer-chip-label">WhatsApp</span>
                  </span>
                </a>
              )}
              {BUSINESS.instagram && (
                <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="footer-chip">
                  <span className="footer-chip-emoji" aria-hidden="true">📸</span>
                  <span>
                    <span className="footer-chip-eyebrow">Follow us on</span>
                    <span className="footer-chip-label">Instagram</span>
                  </span>
                </a>
              )}
            </div>

            <div className="footer-grid">
              {/* Quick Links */}
              <div>
                <div className="footer-heading">Quick Links</div>
                <ul className="footer-links">
                  <li><Link href="/services">Collections</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <div className="footer-heading">Contact</div>
                <ul className="footer-links">
                  <li>
                    <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                  </li>
                  <li>
                    <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
                  </li>
                  <li style={{ color: "color-mix(in srgb, #fff 65%, transparent)", fontSize: 13.5 }}>
                    {BUSINESS.address}
                  </li>
                  <li style={{ color: "color-mix(in srgb, #fff 65%, transparent)", fontSize: 13.5 }}>
                    {BUSINESS.hours}
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <div className="footer-heading" style={{ fontSize: 22 }}>Stay inspired</div>
                <p className="footer-desc" style={{ maxWidth: "none" }}>
                  Get design inspiration, offers, and wedding stationery tips.
                </p>
                <div className="footer-newsletter">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email Address"
                    aria-label="Email address for newsletter"
                  />
                  <Magnetic>
                    <button className="btn-split" type="button" style={{ width: "fit-content" }}>
                      <span className="btn-split-label">Subscribe</span>
                      <span className="btn-split-arrow">→</span>
                    </button>
                  </Magnetic>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-bottom-links">
                <Link href="/terms">Terms of Service</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className="footer-socials">
                {BUSINESS.instagram && (
                  <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                )}
                <a href={`mailto:${BUSINESS.email}`} className="footer-social" aria-label="Email">
                  <Mail size={16} />
                </a>
                {BUSINESS.whatsapp && (
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="footer-social" aria-label="WhatsApp">
                    <MessageCircle size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="footer-strip">
            <div className="container footer-strip-row">
              <p className="footer-copy">
                © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Crafted with ♥ in India.
              </p>
              <div className="footer-strip-contact">
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
              </div>
            </div>
          </div>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
