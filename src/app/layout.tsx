import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { BUSINESS } from "../config/business";

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

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      {label}
    </Link>
  );
}

function BrandMark() {
  return <div className="brand-mark">S</div>;
}

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
        {/* ===== HEADER ===== */}
        <header className="site-header">
          <div className="nav">
            <Link href="/" className="brand-link" aria-label={BUSINESS.name}>
              <BrandMark />
              <div>
                <div className="brand-name">{BUSINESS.name}</div>
                <div className="brand-tag">Wedding Invitation Studio</div>
              </div>
            </Link>

            <nav className="nav-links" aria-label="Primary navigation">
              <NavLink href="/services" label="Collections" />
              <NavLink href="/gallery" label="Gallery" />
              <NavLink href="/about" label="About" />
              <NavLink href="/contact" label="Contact" />
            </nav>

            {BUSINESS.whatsapp ? (
              <a
                className="btn btn-primary nav-cta"
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            ) : (
              <Link className="btn btn-primary nav-cta" href="/contact">Get Quote</Link>
            )}
          </div>
        </header>

        {/* ===== MAIN ===== */}
        <main>{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              {/* Brand Column */}
              <div>
                <Link href="/" className="brand-link" aria-label={BUSINESS.name}>
                  <BrandMark />
                  <div>
                    <div className="brand-name">{BUSINESS.name}</div>
                    <div className="brand-tag" style={{ color: "color-mix(in srgb, var(--color-neutral-100) 55%, transparent)" }}>
                      Wedding Invitation Studio
                    </div>
                  </div>
                </Link>
                <p className="footer-desc">
                  Crafting bespoke wedding invitations that tell your unique love story.
                  Premium quality, delivered with care.
                </p>
                <div className="footer-socials">
                  {BUSINESS.instagram && (
                    <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram">
                      <Instagram size={16} />
                    </a>
                  )}
                  {BUSINESS.whatsapp && (
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="footer-social" aria-label="WhatsApp">
                      <MessageCircle size={16} />
                    </a>
                  )}
                  <a href={`mailto:${BUSINESS.email}`} className="footer-social" aria-label="Email">
                    <Mail size={16} />
                  </a>
                </div>
              </div>

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
                  <li style={{ color: "color-mix(in srgb, var(--color-neutral-100) 55%, transparent)", fontSize: 13.5 }}>
                    {BUSINESS.address}
                  </li>
                  <li style={{ color: "color-mix(in srgb, var(--color-neutral-100) 55%, transparent)", fontSize: 13.5 }}>
                    {BUSINESS.hours}
                  </li>
                  <li>
                    <Link href="/privacy-policy" style={{ fontSize: 12.5 }}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms" style={{ fontSize: 12.5 }}>Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <div className="footer-heading">Stay Inspired</div>
                <p className="footer-desc" style={{ maxWidth: "none" }}>
                  Get design inspiration, offers, and wedding stationery tips.
                </p>
                <div className="footer-newsletter">
                  <input
                    type="email"
                    className="input"
                    placeholder="your@email.com"
                    aria-label="Email address for newsletter"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copy">
                © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Crafted in India.
              </div>
              <div className="footer-bottom-links">
                <Link href="/privacy-policy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/contact">Contact</Link>
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
