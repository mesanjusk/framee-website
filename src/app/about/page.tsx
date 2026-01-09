import { BUSINESS } from "../../config/business";

export default function Page() {
  return (
    <div style={{ paddingTop: 20 }}>
      <h1>About {BUSINESS.name}</h1>
      <p style={{ color: "#374151", maxWidth: "80ch" }}>
        {BUSINESS.name} is a service-based business focused on framing, printing, and creative work.
        We aim to deliver consistent quality with clear communication and policies.
      </p>

      <div className="grid cols-2" style={{ marginTop: 18 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Business Details</h3>
          <div className="kv"><div className="k">Legal / Brand Name</div><div className="v">{BUSINESS.name}</div></div>
          <div className="kv" style={{ marginTop: 10 }}><div className="k">Website</div><div className="v">{BUSINESS.website}</div></div>
          <div className="kv" style={{ marginTop: 10 }}><div className="k">Address</div><div className="v">{BUSINESS.address}</div></div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Compliance Statement</h3>
          <p style={{ color: "#374151" }}>
            We do not offer restricted products/services. We communicate pricing and delivery timelines clearly,
            and we respect user privacy. If we ever update our offerings, we also update our policies and website accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}
