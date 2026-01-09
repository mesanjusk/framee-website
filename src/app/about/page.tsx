import { BUSINESS } from "../../config/business";

export default function Page() {
  return (
    <div style={{ paddingTop: 20 }}>
      <h1>About {BUSINESS.name}</h1>
      <p className="muted" style={{ maxWidth: "80ch" }}>
        {BUSINESS.name} is a boutique invitation card studio. We design premium, theme-based invitations and stationery sets for all events.
        Our focus is elegant design, print quality, and a smooth approval-to-delivery process.
      </p>

      <div className="grid cols-2" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Business Details</h3>
          <div className="muted"><b>Brand:</b> {BUSINESS.name}</div>
          <div className="muted" style={{ marginTop: 8 }}><b>Website:</b> {BUSINESS.website}</div>
          <div className="muted" style={{ marginTop: 8 }}><b>Location:</b> {BUSINESS.address}</div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>What we do</h3>
          <ul className="list" style={{ marginBottom: 0 }}>
            <li>Designer invitation cards for weddings, engagements, birthdays, baby showers, and more</li>
            <li>Matching stationery: inserts, RSVP, envelopes, tags</li>
            <li>Printing + finishing support based on requirements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
