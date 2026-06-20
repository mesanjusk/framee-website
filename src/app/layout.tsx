import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
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
    <Link className="navlink" href={href}>
      {label}
    </Link>
  );
}

function BrandMark() {
  return (
    <div className="brandMark">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C11 3 6 7 6 11.5C6 14.5 8.2 17 11 17C13.8 17 16 14.5 16 11.5C16 7 11 3 11 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13C7 13 9 15.5 11 15.5C13 15.5 15 13 15 13" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="17" cy="5" r="2" fill="white" opacity="0.7"/>
      </svg>
    </div>
  );
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
        <header className="header">
          <div className="container">
            <div className="nav">
              <Link href="/" className="brand" aria-label={BUSINESS.name}>
                <BrandMark />
                <div>
                  <div className="brandName">{BUSINESS.name}</div>
                  <div className="brandTag">Wedding Invitation Studio</div>
                </div>
              </Link>

              <nav className="navlinks" aria-label="Primary navigation">
                <NavLink href="/services" label="Collections" />
                <NavLink href="/gallery" label="Gallery" />
                <NavLink href="/about" label="About" />
                <NavLink href="/contact" label="Contact" />
              </nav>

              {BUSINESS.whatsapp ? (
                <a
                  className="navCta"
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M7.5 1C3.9 1 1 3.9 1 7.5C1 8.8 1.4 10 2.1 11L1 14L4.1 12.9C5.1 13.6 6.2 14 7.5 14C11.1 14 14 11.1 14 7.5C14 3.9 11.1 1 7.5 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  WhatsApp
                </a>
              ) : (
                <Link className="navCta" href="/contact">Get Quote</Link>
              )}
            </div>
          </div>
        </header>

        {/* ===== MAIN ===== */}
        <main>{children}</main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="container">
            <div className="footerGrid">
              {/* Brand Column */}
              <div className="footerBrand">
                <Link href="/" className="brand" aria-label={BUSINESS.name}>
                  <BrandMark />
                  <div>
                    <div className="brandName">{BUSINESS.name}</div>
                    <div className="brandTag">Wedding Invitation Studio</div>
                  </div>
                </Link>
                <p className="footerDesc">
                  Crafting bespoke wedding invitations that tell your unique love story.
                  Premium quality, delivered with care.
                </p>
                <div className="footerSocials">
                  {BUSINESS.instagram && (
                    <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className="footerSocial" aria-label="Instagram">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3"/>
                        <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.3"/>
                        <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor"/>
                      </svg>
                    </a>
                  )}
                  {BUSINESS.whatsapp && (
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="footerSocial" aria-label="WhatsApp">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1.5C4.4 1.5 1.5 4.4 1.5 8C1.5 9.3 1.9 10.5 2.6 11.5L1.5 14.5L4.6 13.4C5.6 14.1 6.7 14.5 8 14.5C11.6 14.5 14.5 11.6 14.5 8C14.5 4.4 11.6 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  <a href={`mailto:${BUSINESS.email}`} className="footerSocial" aria-label="Email">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="1.5" y="3.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M1.5 5.5L8 9.5L14.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <div className="footerHeading">Quick Links</div>
                <ul className="footerLinks">
                  <li><Link href="/services">Collections</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <div className="footerHeading">Contact</div>
                <ul className="footerLinks">
                  <li>
                    <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                  </li>
                  <li>
                    <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
                  </li>
                  <li style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
                    {BUSINESS.address}
                  </li>
                  <li style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
                    {BUSINESS.hours}
                  </li>
                  <li>
                    <Link href="/privacy-policy" style={{ fontSize: 13 }}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms" style={{ fontSize: 13 }}>Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <div className="footerHeading">Stay Inspired</div>
                <p className="footerNewsletterDesc">
                  Get design inspiration, offers, and wedding stationery tips.
                </p>
                <div className="footerNewsletterForm">
                  <input
                    type="email"
                    className="footerInput"
                    placeholder="your@email.com"
                    aria-label="Email address for newsletter"
                  />
                  <button className="footerNewsletterBtn" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="footerBottom">
              <div className="footerCopy">
                © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Crafted with ♥ in India.
              </div>
              <div className="footerBottomLinks">
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
