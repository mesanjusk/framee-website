"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "../config/business";
import { BrandMark } from "./BrandMark";
import { Magnetic } from "./motion/Magnetic";

const NAV_ITEMS = [
  { href: "/services", label: "Collections" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setShrunk(y > 40);
        // Only hide on scroll-down once we're past the header's own height,
        // and never while the mobile menu is open.
        setHidden((prevHidden) => {
          if (open) return false;
          if (y < 120) return false;
          if (y > lastY.current + 4) return true;
          if (y < lastY.current - 4) return false;
          return prevHidden;
        });
        lastY.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [open]);

  return (
    <header className={`site-header${shrunk ? " is-shrunk" : ""}${hidden ? " is-hidden" : ""}`}>
      <div className="nav">
        <Link href="/" className="brand-link" aria-label={BUSINESS.name}>
          <span className="brand-mark">
            <BrandMark />
          </span>
          <span className="brand-name">SK Digital</span>
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
            <Magnetic strength={0.35}>
              <a
                className="btn btn-primary nav-cta"
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={15} />
                <span className="nav-cta-label">WhatsApp</span>
              </a>
            </Magnetic>
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

      <nav className={`nav-mobile${open ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="nav-mobile-inner">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} tabIndex={open ? undefined : -1}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
