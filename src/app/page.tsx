import Link from "next/link";
import { BUSINESS } from "../config/business";

export default function Page() {
  return (
    <div>
      <section className="hero">
        <div className="badge">Fast • Reliable • Policy-compliant</div>
        <h1>{BUSINESS.tagline}</h1>
        <p>
          {BUSINESS.description} This website is intentionally simple and
          crawlable so Meta/WhatsApp reviewers can verify the business quickly.
        </p>
        <div className="hstack" style={{ marginTop: 16 }}>
          <Link className="btn" href="/contact">Contact Us</Link>
          <Link className="btn secondary" href="/services">See Services</Link>
        </div>
      </section>

      <section className="grid cols-3" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Framing</h3>
          <p style={{ color: "#374151" }}>
            Custom photo frames, certificates, posters, and wall art with clean finishing.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Printing</h3>
          <p style={{ color: "#374151" }}>
            High-quality prints for personal and business needs with transparent pricing.
          </p>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Creative Services</h3>
          <p style={{ color: "#374151" }}>
            Design support for banners, social media creatives, and branding assets.
          </p>
        </div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Why Meta/WhatsApp disables businesses</h3>
          <ul style={{ color: "#374151", marginBottom: 0 }}>
            <li>Website was not accessible or returned an error.</li>
            <li>Website had no clear business identity, policies, or contacts.</li>
            <li>Mismatch between business details and website content.</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>What you should update</h3>
          <ul style={{ color: "#374151", marginBottom: 0 }}>
            <li>Set your official domain in Business Manager.</li>
            <li>Ensure pages load without login/password.</li>
            <li>Keep Privacy Policy & Terms published.</li>
            <li>Keep Contact page with real email/phone/address.</li>
          </ul>
          <div className="hstack" style={{ marginTop: 10 }}>
            <Link className="btn secondary" href="/privacy-policy">Privacy Policy</Link>
            <Link className="btn secondary" href="/terms">Terms</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
