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
        <header className="header">
          <div className="container">
            <div className="nav">
              <Link href="/" className="brand" aria-label={BUSINESS.name}>
                <div className="brandMark" />
                <div className="brandText">
                  <div className="brandName">{BUSINESS.name}</div>
                  <div className="brandTag">{BUSINESS.tagline}</div>
                </div>
              </Link>

              <nav className="navlinks" aria-label="Primary">
                <NavLink href="/services" label="Collections" />
                <NavLink href="/gallery" label="Gallery" />
                <NavLink href="/about" label="About" />
                <NavLink href="/contact" label="Contact" />
                <NavLink href="/privacy-policy" label="Privacy" />
                <NavLink href="/terms" label="Terms" />
              </nav>
            </div>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="grid cols-2">
              <div>
                <div className="footerTitle">{BUSINESS.name}</div>
                <div className="muted">{BUSINESS.address}</div>
                <div className="muted" style={{ marginTop: 8 }}>{BUSINESS.hours}</div>
              </div>

              <div>
                <div className="footerTitle">Support</div>
                <div className="muted">
                  Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </div>
                <div className="muted">
                  Phone: <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
                </div>
                {BUSINESS.whatsapp ? (
                  <div className="muted">
                    WhatsApp: <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="divider" />

            <div className="muted">
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
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
