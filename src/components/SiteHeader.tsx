"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "../config/business";
import { BrandMark } from "./BrandMark";

const NAV_ITEMS = [
  { href: "/services", label: "Collections" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav">
        <Link href="/" className="brand-link" aria-label={BUSINESS.name}>
          <span className="brand-mark">
            <BrandMark />
          </span>
          <span className="brand-name">sanjusk</span>
          <span className="brand-tag">
            CARDS
            <br />
            STUDIO
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hstack" style={{ gap: 8, flexWrap: "nowrap" }}>
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
            <Link className="btn btn-primary nav-cta" href="/contact">
              Get Quote
            </Link>
          )}
          <button
            type="button"
            className="nav-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
