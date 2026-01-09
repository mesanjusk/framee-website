import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sanjusk Cards for boutique invitation card design, quotes, and consultation in Gondia, Maharashtra.",
  openGraph: {
    title: "Sanjusk Cards | Contact",
    description: "Reach out for premium invitation card design, quotes, and consultations.",
  },
};

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">Contact</span>
          <h1 className="sectionTitle">Let us craft your invitation story.</h1>
          <p className="muted" style={{ maxWidth: "75ch" }}>
            Reach out for pricing, timelines, and personalized guidance. We respond quickly on WhatsApp
            and phone.
          </p>

          <div className="grid cols-2" style={{ marginTop: 28 }}>
            <Card>
              <h3 className="cardTitle">Studio details</h3>
              <p className="muted"><strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
              <p className="muted"><strong>Phone:</strong> <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a></p>
              {BUSINESS.whatsapp ? (
                <p className="muted">
                  <strong>WhatsApp:</strong> <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                </p>
              ) : null}
              <p className="muted"><strong>Address:</strong> {BUSINESS.address}</p>
              <p className="muted"><strong>Hours:</strong> {BUSINESS.hours}</p>
            </Card>

            <Card>
              <h3 className="cardTitle">Quick checklist</h3>
              <ul className="list" style={{ marginBottom: 0 }}>
                <li>Event type and date</li>
                <li>Quantity required</li>
                <li>Preferred size or format</li>
                <li>Theme references or color palette</li>
                <li>Finish preferences (foil, emboss, laser-cut)</li>
                <li>Delivery timeline & city</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
