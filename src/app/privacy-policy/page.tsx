import { BUSINESS } from "../../config/business";

export default function Page() {
  return (
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <h1>Privacy Policy</h1>
      <p style={{ color: "#374151", maxWidth: "90ch" }}>
        This policy explains how {BUSINESS.name} collects and uses personal information.
        Replace placeholders to match your operations.
      </p>

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Information we collect</h3>
        <ul style={{ color: "#374151" }}>
          <li>Contact details you provide (name, phone, email).</li>
          <li>Order-related details (product/service requirements, delivery preferences).</li>
          <li>Communication records (WhatsApp/SMS/email) for support and updates.</li>
        </ul>

        <h3>How we use information</h3>
        <ul style={{ color: "#374151" }}>
          <li>To provide services and customer support.</li>
          <li>To send order updates and respond to queries.</li>
          <li>To improve our services and prevent fraud/abuse.</li>
        </ul>

        <h3>Sharing</h3>
        <p style={{ color: "#374151" }}>
          We do not sell personal data. We may share data with service providers (e.g., hosting, messaging)
          only to deliver our services, and only as necessary.
        </p>

        <h3>Data retention</h3>
        <p style={{ color: "#374151" }}>
          We keep data only as long as required for service delivery, legal obligations, and support.
        </p>

        <h3>Contact</h3>
        <p style={{ color: "#374151", marginBottom: 0 }}>
          If you have privacy questions, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>
      </div>
    </div>
  );
}
