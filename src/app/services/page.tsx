export default function Page() {
  const finishes = [
    "Matte / Gloss lamination",
    "Foil (gold/silver/rose-gold) as per design",
    "Emboss / Deboss",
    "Texture / handmade paper options",
    "Laser-cut elements",
    "Acrylic / premium card stock options",
    "Envelope + wax seal style packaging (optional)",
  ];

  return (
    <div style={{ paddingTop: 20 }}>
      <h1>Collections</h1>
      <p className="muted" style={{ maxWidth: "80ch" }}>
        We design boutique invitation cards and matching stationery sets. Replace/extend this list based on your exact offerings.
      </p>

      <div className="grid cols-3" style={{ marginTop: 18 }}>
        <div className="tile"><div className="tileTop" /><div className="tileBody"><div className="tileTitle">Wedding Suites</div><p className="tileDesc">Save the date, invitation, RSVP, inserts, envelopes, tags.</p></div></div>
        <div className="tile"><div className="tileTop" /><div className="tileBody"><div className="tileTitle">Engagement / Ring Ceremony</div><p className="tileDesc">Royal, floral, minimal, modern typography themes.</p></div></div>
        <div className="tile"><div className="tileTop" /><div className="tileBody"><div className="tileTitle">Birthday / Kids</div><p className="tileDesc">Cartoon themes, fun colors, premium prints.</p></div></div>
        <div className="tile"><div className="tileTop" /><div className="tileBody"><div className="tileTitle">Baby Shower / Naming</div><p className="tileDesc">Cute, pastel, traditional motifs and custom detailsPure</p></div></div>
        <div className="tile"><div className="tileTop" /><div className="tileBody"><div className="tileTitle">Anniversary / Housewarming</div><p className="tileDesc">Elegant invites with matching inserts.</p></div></div>
        <div className="tile"><div className="tileTop" /><div className="tileBody"><div className="tileTitle">Corporate Events</div><p className="tileDesc">Launch invites, passes, and formal stationery.</p></div></div>
      </div>

      <div className="grid cols-2" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Premium finishes</h3>
          <ul className="list" style={{ marginBottom: 0 }}>
            {finishes.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Customization</h3>
          <p className="muted">
            We customize content, colors, fonts, and layout to match your event theme. Share reference images and we can create a fresh design.
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            For quotes, share quantity, size, finish, and timeline.
          </p>
        </div>
      </div>
    </div>
  );
}
