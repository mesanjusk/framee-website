export default function Page() {
  return (
    <div style={{ paddingTop: 20 }}>
      <h1>Services</h1>
      <p style={{ color: "#374151", maxWidth: "80ch" }}>
        A simple list helps reviewers quickly understand what your business does.
        Replace or expand these based on your real offerings.
      </p>

      <div className="grid cols-3" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Photo & Poster Framing</h3>
          <p style={{ color: "#374151" }}>Custom sizes, mounting, and finishing.</p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Certificate Frames</h3>
          <p style={{ color: "#374151" }}>Professional frames for offices and institutions.</p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Canvas & Prints</h3>
          <p style={{ color: "#374151" }}>High quality printing with material options.</p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Business Branding</h3>
          <p style={{ color: "#374151" }}>Banners, posters, social creatives.</p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Delivery / Pickup</h3>
          <p style={{ color: "#374151" }}>Pickup and delivery as per location and timeline.</p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Support</h3>
          <p style={{ color: "#374151" }}>WhatsApp / phone / email support for updates and queries.</p>
        </div>
      </div>
    </div>
  );
}
