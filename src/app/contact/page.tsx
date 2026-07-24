import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "../../config/business";
import { Words } from "../../components/Words";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SK Digital Cards for custom wedding invitation quotes. Reach us via email, phone, or WhatsApp — we typically respond within a few hours.",
};

const contactItems = [
  {
    Icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    note: "We reply within 4–6 hours",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: BUSINESS.phone,
    href: `tel:${BUSINESS.phone}`,
    note: "Call during business hours",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: BUSINESS.whatsapp ?? "#",
    note: "Fastest way to reach us",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: BUSINESS.address,
    href: null,
    note: "Local pickup available",
  },
  {
    Icon: Clock,
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
    <div className="page-inner">
      <div className="container">

        {/* Page Hero */}
        <div className="page-hero reveal reveal-stagger">
          <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>Get in Touch</span>
          <h1 className="page-title">
            <Words text="Let's Start" /> <span className="accent"><Words text="Designing Together" startIndex={2} /></span>
          </h1>
          <p className="page-sub">
            Ready to create your dream invitations? Share your details and we&apos;ll get back to you
            with options, pricing, and a timeline that works for you.
          </p>
        </div>

        <div className="grid grid-2">

          {/* Contact Info */}
          <div className="stack">
            {contactItems.map(({ Icon, label, value, href, note }, i) => (
              <div key={label} className="contact-row reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="contact-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent-700)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text)", display: "block", marginBottom: 3, textDecoration: "none" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>{value}</div>
                  )}
                  <div className="text-muted" style={{ fontSize: 12.5 }}>{note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Checklist */}
          <div className="stack reveal" style={{ transitionDelay: "80ms" }}>
            <div className="card" style={{ padding: "var(--space-4)" }}>
              <h2 style={{ fontSize: 22 }}>Quote Checklist</h2>
              <p className="text-muted" style={{ fontSize: 14, marginBottom: "var(--space-4)", lineHeight: 1.6 }}>
                To give you an accurate quote quickly, please share as many of these details as possible:
              </p>
              <ul className="checklist">
                {quoteChecklist.map((item, i) => (
                  <li key={i}>
                    <span className="checklist-num">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: "var(--space-4)", background: "var(--color-bg)", border: "1px solid var(--color-divider)" }}>
              <h3 style={{ fontSize: 19, color: "var(--color-accent-700)" }}>Need it urgently?</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
                WhatsApp is the fastest way to reach us. We aim to respond within 1–2 hours during business hours.
              </p>
              {BUSINESS.whatsapp && (
                <a
                  className="btn btn-primary"
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
