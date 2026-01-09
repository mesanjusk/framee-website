import Link from "next/link";
import { BUSINESS } from "../config/business";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerColumns">
          <div>
            <div className="footerTitle">{BUSINESS.name}</div>
            <p className="muted">{BUSINESS.description}</p>
            <p className="muted">{BUSINESS.address}</p>
          </div>

          <div>
            <div className="footerTitle">Explore</div>
            <div className="footerLinks">
              <Link href="/collections">Collections</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/finishes">Finishes & Materials</Link>
              <Link href="/quote">Request Quote</Link>
            </div>
          </div>

          <div>
            <div className="footerTitle">Contact</div>
            <div className="footerLinks">
              <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              {BUSINESS.whatsapp ? (
                <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              ) : null}
              {BUSINESS.instagram ? (
                <a href={BUSINESS.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="footerLinks">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>

        <p className="muted" style={{ marginTop: 16 }}>
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
