"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS } from "../config/business";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/gallery", label: "Gallery" },
  { href: "/finishes", label: "Finishes" },
  { href: "/quote", label: "Quote" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Link href="/" className="brand" aria-label={BUSINESS.name}>
            <div className="brandMark" />
            <div>
              <div className="brandName">{BUSINESS.name}</div>
              <div className="brandTag">{BUSINESS.tagline}</div>
            </div>
          </Link>

          <nav className="navLinks" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`navLink${isActive ? " navLinkActive" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
