import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms for Sanjusk Cards invitation design, printing, and communication policies.",
  openGraph: {
    title: "Sanjusk Cards | Terms & Conditions",
    description: "Read the terms for invitation design, printing, and communications.",
  },
};

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">Terms & Conditions</span>
          <h1 className="sectionTitle">Clear expectations for every premium order.</h1>
          <p className="muted" style={{ maxWidth: "75ch" }}>
            These terms govern your use of {BUSINESS.name}'s services. Please review before confirming a
            custom order.
          </p>

          <Card style={{ marginTop: 24 }}>
            <h3 className="cardTitle">Service</h3>
            <p className="muted">
              We provide invitation card design, printing, and related stationery services as described
              on this website. Timelines depend on requirements and availability.
            </p>

            <h3 className="cardTitle">Pricing & Payment</h3>
            <p className="muted">
              Pricing is shared before confirmation. Payments are accepted via approved channels shared
              by our team.
            </p>

            <h3 className="cardTitle">Refunds & Cancellations</h3>
            <p className="muted">
              Custom work may have limited cancellation or refund options depending on production
              progress. We will communicate clearly before starting work.
            </p>

            <h3 className="cardTitle">Communication</h3>
            <p className="muted">
              If you contact us on WhatsApp, you agree to receive service-related messages such as
              updates and support replies.
            </p>

            <h3 className="cardTitle">Contact</h3>
            <p className="muted" style={{ marginBottom: 0 }}>
              Questions? Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
            </p>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
