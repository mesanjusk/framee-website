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
  robots: {
    index: true,
    follow: true,
  },
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} style={{ padding: "8px 10px", borderRadius: 10 }}>
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
  };

  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <div className="nav">
              <div className="hstack">
                <Link href="/" style={{ fontWeight: 800, fontSize: 18 }}>
                  {BUSINESS.name}
                </Link>
                <span className="badge">Verified-ready website</span>
              </div>
              <nav className="navlinks" aria-label="Primary">
                <NavLink href="/about" label="About" />
                <NavLink href="/services" label="Services" />
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
              <div className="kv">
                <div className="k">Business</div>
                <div className="v">{BUSINESS.name}</div>
                <div style={{ marginTop: 6 }}>{BUSINESS.address}</div>
              </div>
              <div className="kv">
                <div className="k">Support</div>
                <div>
                  Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </div>
                <div>
                  Phone: <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
                </div>
                <div style={{ marginTop: 6 }}>{BUSINESS.hours}</div>
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
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
