import { BUSINESS } from "../../config/business";

export default function Page() {
  return (
    <div style={{ paddingTop: 20, paddingBottom: 10 }}>
      <h1>Contact</h1>
      <p className="muted" style={{ maxWidth: "80ch" }}>
        For quotes, share event name, date, quantity, size, preferred theme, and finish (foil/emboss/laser-cut etc.).
      </p>

      <div className="grid cols-2" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Support</h3>
          <div className="muted"><b>Email:</b> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div>
          <div className="muted" style={{ marginTop: 8 }}><b>Phone:</b> <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a></div>
          {BUSINESS.whatsapp ? (
            <div className="muted" style={{ marginTop: 8 }}><b>WhatsApp:</b> <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
          ) : null}
          <div className="muted" style={{ marginTop: 8 }}><b>Address:</b> {BUSINESS.address}</div>
          <div className="muted" style={{ marginTop: 8 }}><b>Hours:</b> {BUSINESS.hours}</div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Quick checklist for quote</h3>
          <ul className="list" style={{ marginBottom: 0 }}>
            <li>Event type + date</li>
            <li>Quantity required</li>
            <li>Card size (if known)</li>
            <li>Theme reference / color preference</li>
            <li>Finish preference (foil/emboss/texture/laser-cut)</li>
            <li>Delivery timeline & location</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
