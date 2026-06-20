import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${BUSINESS.name} — our service, pricing, refund, and communication policies.`,
};

export default function Page() {
  return (
    <div className="pageInner">
      <div className="container">
        <div className="pageHero">
          <h1 className="pageTitle">Terms &amp; Conditions</h1>
          <p className="pageSubtitle">
            These terms govern your use of {BUSINESS.name}&apos;s services. By placing an order you agree to these terms.
          </p>
        </div>

        <div className="card" style={{ maxWidth: 780 }}>
          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Our Service</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              We provide invitation card design, printing, and related stationery services as described on this website.
              Timelines depend on requirements, complexity, and availability.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Pricing &amp; Payment</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              Pricing is shared and agreed upon before order confirmation. Payments are accepted via approved channels
              communicated directly by our team.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Refunds &amp; Cancellations</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              Custom design work may have limited cancellation or refund options depending on the stage of progress.
              We will communicate all policies clearly before beginning work on your order.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Communication</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              By contacting us on WhatsApp you agree to receive service-related messages including order updates,
              design proofs, and support replies.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, marginBottom: 10 }}>Questions</h3>
            <p style={{ fontSize: 14.5, color: "var(--text-soft)", lineHeight: 1.75 }}>
              For any questions about these terms, email us at{" "}
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
