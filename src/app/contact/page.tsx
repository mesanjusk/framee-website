import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sanjusk Cards for custom wedding invitation quotes. Reach us via email, phone, or WhatsApp — we typically respond within a few hours.",
};

function EnvelopeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="18" height="14" rx="2.5"/>
      <path d="M2 7l9 7 9-7"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2H9l1.5 4L9 7.5C9.9 9.4 12.6 12.1 14.5 13l1.5-1.5L20 13V16C20 16 19 20 11 14C5 10 2 6 2 6C2 6 2 2 6 2z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 2C6 2 2 6 2 11C2 12.8 2.5 14.4 3.4 15.8L2 20L6.4 18.6C7.8 19.5 9.4 20 11 20C16 20 20 16 20 11C20 6 16 2 11 2Z"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 2C7.7 2 5 4.7 5 8C5 12.5 11 20 11 20C11 20 17 12.5 17 8C17 4.7 14.3 2 11 2Z"/>
      <circle cx="11" cy="8" r="2.5"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="9"/>
      <path d="M11 6v5l3 3"/>
    </svg>
  );
}

const contactItems = [
  {
    Icon: EnvelopeIcon,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    note: "We reply within 4–6 hours",
  },
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: BUSINESS.phone,
    href: `tel:${BUSINESS.phone}`,
    note: "Call during business hours",
  },
  {
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: BUSINESS.whatsapp ?? "#",
    note: "Fastest way to reach us",
  },
  {
    Icon: PinIcon,
    label: "Address",
    value: BUSINESS.address,
    href: null,
    note: "Local pickup available",
  },
  {
    Icon: ClockIcon,
    label: "Business Hours",
    value: BUSINESS.hours,
    href: null,
    note: "Indian Standard Time (IST)",
  },
];

const quoteChecklist = [
  "Event type (wedding, engagement, birthday, etc.)",
  "Event date and venue name",
  "Quantity required",
  "Card size preference (if known)",
  "Theme or color scheme reference",
  "Finish preference (foil / emboss / laser-cut / acrylic)",
  "Delivery timeline and location",
];

export default function Page() {
  return (
    <div className="pageInner">
      <div className="container">

        {/* Page Hero */}
        <div className="pageHero">
          <div className="sectionTag" style={{ marginBottom: 20 }}>
            Get in Touch
          </div>
          <h1 className="pageTitle">
            Let&apos;s Start<br />
            <span style={{ color: "var(--forest)", fontStyle: "italic" }}>Designing Together</span>
          </h1>
          <p className="pageSubtitle">
            Ready to create your dream invitations? Share your details and we&apos;ll get back to you
            with options, pricing, and a timeline that works for you.
          </p>
        </div>

        <div className="grid cols-2" style={{ marginBottom: 56 }}>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {contactItems.map(({ Icon, label, value, href, note }) => (
              <div key={label} style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                padding: "18px 20px", background: "var(--mint)",
                border: "1px solid var(--sage)", borderRadius: "var(--radius-sm)"
              }}>
                <div style={{
                  width: 44, height: 44, background: "white",
                  borderRadius: 12, display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0, boxShadow: "var(--shadow)"
                }}>
                  <Icon />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--forest)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 3 }}
                    >
                      {value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 3 }}>{value}</div>
                  )}
                  <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="card">
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, marginBottom: 8 }}>
                Quote Checklist
              </h2>
              <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 20, lineHeight: 1.6 }}>
                To give you an accurate quote quickly, please share as many of these details as possible:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {quoteChecklist.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{
                      width: 22, height: 22, background: "var(--mint)", borderRadius: 6,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1, fontSize: 11, fontWeight: 700, color: "var(--forest)"
                    }}>
                      {i + 1}
                    </span>
                    <span style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="infoCard">
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10, color: "var(--forest)" }}>
                Need it urgently?
              </h3>
              <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 16 }}>
                WhatsApp is the fastest way to reach us. We aim to respond within 1–2 hours during business hours.
              </p>
              {BUSINESS.whatsapp && (
                <a
                  className="btn primary"
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: "fit-content" }}
                >
                  Message on WhatsApp
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
