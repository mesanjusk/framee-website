import { BUSINESS } from "../../config/business";

export default function Page() {
  return (
    <div style={{ paddingTop: 20 }}>
      <h1>Contact</h1>
      <p style={{ color: "#374151", maxWidth: "80ch" }}>
        Use real contact details. Meta/WhatsApp reviewers rely on this to confirm business legitimacy.
      </p>

      <div className="grid cols-2" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Support</h3>
          <div className="kv"><div className="k">Email</div><div className="v"><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div></div>
          <div className="kv" style={{ marginTop: 10 }}><div className="k">Phone</div><div className="v"><a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a></div></div>
          <div className="kv" style={{ marginTop: 10 }}><div className="k">Address</div><div className="v">{BUSINESS.address}</div></div>
          <div className="kv" style={{ marginTop: 10 }}><div className="k">Working Hours</div><div className="v">{BUSINESS.hours}</div></div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Message</h3>
          <p style={{ color: "#374151" }}>
            Add a form only if you have a backend/email handler. For policy compliance, contact details are enough.
          </p>
          <ul style={{ color: "#374151", marginBottom: 0 }}>
            <li>Reply time: within 24 hours</li>
            <li>For urgent support, call the number above</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
