import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${BUSINESS.name} — our service, pricing, refund, and communication policies.`,
};

export default function Page() {
  return (
    <div className="page-inner">
      <div className="container">
        <div className="page-hero">
          <h1 className="page-title">Terms &amp; Conditions</h1>
          <p className="page-sub">
            These terms govern your use of {BUSINESS.name}&apos;s services. By placing an order you agree to these terms.
          </p>
        </div>

        <div className="legal-doc">
          <section>
            <h3>Our Service</h3>
            <p>
              We provide invitation card design, printing, and related stationery services as described on this website.
              Timelines depend on requirements, complexity, and availability.
            </p>
          </section>

          <section>
            <h3>Pricing &amp; Payment</h3>
            <p>
              Pricing is shared and agreed upon before order confirmation. Payments are accepted via approved channels
              communicated directly by our team.
            </p>
          </section>

          <section>
            <h3>Refunds &amp; Cancellations</h3>
            <p>
              Custom design work may have limited cancellation or refund options depending on the stage of progress.
              We will communicate all policies clearly before beginning work on your order.
            </p>
          </section>

          <section>
            <h3>Communication</h3>
            <p>
              By contacting us on WhatsApp you agree to receive service-related messages including order updates,
              design proofs, and support replies.
            </p>
          </section>

          <section>
            <h3>Questions</h3>
            <p>
              For any questions about these terms, email us at{" "}
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
