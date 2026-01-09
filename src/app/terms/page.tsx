import { BUSINESS } from "../../config/business";

export default function Page() {
  return (
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <h1>Terms & Conditions</h1>
      <p style={{ color: "#374151", maxWidth: "90ch" }}>
        These terms govern your use of {BUSINESS.name}'s services. Replace placeholders based on your real policies.
      </p>

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Service</h3>
        <p style={{ color: "#374151" }}>
          We provide invitation card design, printing, and related stationery services as described on this website. Timelines depend on requirements and availability.
        </p>

        <h3>Pricing & Payment</h3>
        <p style={{ color: "#374151" }}>
          Pricing is shared before confirmation. Payments (if applicable) are accepted via approved channels shared by our team.
        </p>

        <h3>Refunds & Cancellations</h3>
        <p style={{ color: "#374151" }}>
          Custom work may have limited cancellation/refund depending on progress. We will communicate clearly before starting work.
        </p>

        <h3>Communication</h3>
        <p style={{ color: "#374151" }}>
          If you contact us on WhatsApp, you agree to receive service-related messages such as updates and support replies.
        </p>

        <h3>Contact</h3>
        <p style={{ color: "#374151", marginBottom: 0 }}>
          Questions? Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>
      </div>
    </div>
  );
}
