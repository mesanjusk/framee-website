import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name} — how we collect, use, and protect your personal information.`,
};

export default function Page() {
  return (
    <div className="page-inner">
      <div className="container">
        <div className="page-hero">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-sub">
            This policy explains how {BUSINESS.name} collects and uses personal information when you interact with us.
          </p>
        </div>

        <div className="legal-doc">
          <section>
            <h3>Information We Collect</h3>
            <ul>
              <li>Contact details you provide (name, phone number, email address)</li>
              <li>Order-related details (product requirements, design preferences, delivery information)</li>
              <li>Communication records (WhatsApp / SMS / email) for support and order updates</li>
            </ul>
          </section>

          <section>
            <h3>How We Use Information</h3>
            <ul>
              <li>To provide our design and printing services</li>
              <li>To send order updates and respond to your queries</li>
              <li>To improve our services and prevent fraud or abuse</li>
            </ul>
          </section>

          <section>
            <h3>Sharing of Information</h3>
            <p>
              We do not sell personal data. We may share data with service providers (e.g., hosting, messaging platforms)
              only as necessary to deliver our services.
            </p>
          </section>

          <section>
            <h3>Data Retention</h3>
            <p>
              We retain data only as long as required for service delivery, legal obligations, and support.
            </p>
          </section>

          <section>
            <h3>Contact</h3>
            <p>
              If you have any privacy questions, contact us at{" "}
              <a href={`mailto:${BUSINESS.email}`} style={{ fontWeight: 600 }}>
                {BUSINESS.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
