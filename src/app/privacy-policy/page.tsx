import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how Sanjusk Cards handles personal information, orders, and communications.",
  openGraph: {
    title: "Sanjusk Cards | Privacy Policy",
    description: "Read how we handle personal information, orders, and communications.",
  },
};

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">Privacy Policy</span>
          <h1 className="sectionTitle">Your information, handled with care.</h1>
          <p className="muted" style={{ maxWidth: "75ch" }}>
            This policy explains how {BUSINESS.name} collects and uses personal information to deliver
            premium invitation services.
          </p>

          <Card style={{ marginTop: 24 }}>
            <h3 className="cardTitle">Information we collect</h3>
            <ul className="list">
              <li>Contact details you provide (name, phone, email).</li>
              <li>Order-related details (product requirements, delivery preferences).</li>
              <li>Communication records (WhatsApp/SMS/email) for support and updates.</li>
            </ul>

            <h3 className="cardTitle">How we use information</h3>
            <ul className="list">
              <li>To provide services and customer support.</li>
              <li>To send order updates and respond to queries.</li>
              <li>To improve our services and prevent fraud/abuse.</li>
            </ul>

            <h3 className="cardTitle">Sharing</h3>
            <p className="muted">
              We do not sell personal data. We may share data with service providers (e.g., hosting,
              messaging) only to deliver our services.
            </p>

            <h3 className="cardTitle">Data retention</h3>
            <p className="muted">
              We keep data only as long as required for service delivery, legal obligations, and support.
            </p>

            <h3 className="cardTitle">Contact</h3>
            <p className="muted" style={{ marginBottom: 0 }}>
              If you have privacy questions, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
            </p>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
