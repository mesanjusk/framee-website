import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name} — how we collect, use, and protect your personal information.`,
};

export default function Page() {
  return (
    <div className="pageInner">
      <div className="container">
        <div className="pageHero">
          <h1 className="pageTitle">Privacy Policy</h1>
          <p className="pageSubtitle">
            This policy explains how {BUSINESS.name} collects and uses personal information when you interact with us.
          </p>
        </div>

        <div className="card" style={{ maxWidth: 780 }}>
          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Information We Collect</h3>
            <ul className="list">
              <li>Contact details you provide (name, phone number, email address)</li>
              <li>Order-related details (product requirements, design preferences, delivery information)</li>
              <li>Communication records (WhatsApp / SMS / email) for support and order updates</li>
            </ul>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>How We Use Information</h3>
            <ul className="list">
              <li>To provide our design and printing services</li>
              <li>To send order updates and respond to your queries</li>
              <li>To improve our services and prevent fraud or abuse</li>
            </ul>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Sharing of Information</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              We do not sell personal data. We may share data with service providers (e.g., hosting, messaging platforms)
              only as necessary to deliver our services.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Data Retention</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              We retain data only as long as required for service delivery, legal obligations, and support.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Contact</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              If you have any privacy questions, contact us at{" "}
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--forest)", fontWeight: 600 }}>
                {BUSINESS.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
