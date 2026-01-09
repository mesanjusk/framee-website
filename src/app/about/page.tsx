import type { Metadata } from "next";
import { BUSINESS } from "../../config/business";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sanjusk Cards, a boutique invitation studio crafting premium designer stationery in Gondia, Maharashtra.",
  openGraph: {
    title: "Sanjusk Cards | About",
    description: "Learn about our boutique invitation studio and premium design process.",
  },
};

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">About</span>
          <h1 className="sectionTitle">{BUSINESS.name}: boutique invitation artistry.</h1>
          <p className="muted" style={{ maxWidth: "75ch" }}>
            {BUSINESS.name} is a designer invitation studio focused on premium, theme-based stationery.
            Every suite blends modern typography, luxe finishes, and a refined approval process.
          </p>

          <div className="grid cols-2" style={{ marginTop: 28 }}>
            <Card>
              <h3 className="cardTitle">Business details</h3>
              <p className="muted"><strong>Brand:</strong> {BUSINESS.name}</p>
              <p className="muted"><strong>Website:</strong> {BUSINESS.website}</p>
              <p className="muted"><strong>Location:</strong> {BUSINESS.address}</p>
              <p className="muted"><strong>Hours:</strong> {BUSINESS.hours}</p>
            </Card>
            <Card>
              <h3 className="cardTitle">What we do</h3>
              <ul className="list" style={{ marginBottom: 0 }}>
                <li>Custom invitation cards for weddings, engagements, birthdays, and corporate events.</li>
                <li>Matching stationery: RSVP, inserts, envelopes, and packaging.</li>
                <li>Print production and finishing curated to match your theme and budget.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
