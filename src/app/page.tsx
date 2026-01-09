import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS } from "../config/business";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Card } from "../components/Card";

export const metadata: Metadata = {
  title: "Luxury Invitation Cards",
  description:
    "Premium boutique invitation cards for weddings, engagements, birthdays, and every celebration. Custom finishes, handcrafted details, and designer guidance.",
  openGraph: {
    title: "Sanjusk Cards | Luxury Invitation Cards",
    description:
      "Premium boutique invitation cards for weddings, engagements, birthdays, and every celebration.",
  },
};

const highlights = [
  {
    title: "Bespoke Wedding Suites",
    description: "Signature sets with RSVP, inserts, envelopes, and custom packaging.",
  },
  {
    title: "Engagement & Ring Ceremonies",
    description: "Modern typography, floral compositions, and royal themes.",
  },
  {
    title: "Boutique Celebrations",
    description: "Birthdays, baby showers, housewarmings, and milestone events.",
  },
];

const finishes = [
  "Foil stamping (gold, rose-gold, silver)",
  "Emboss + deboss textures",
  "Laser-cut details and pocket folds",
  "Acrylic, handmade, and textured papers",
  "Wax seal closures and ribbon accents",
  "Custom envelopes and belly bands",
];

const steps = [
  {
    title: "Share your vision",
    description: "Tell us your event details, inspirations, quantities, and budget range.",
  },
  {
    title: "Design & approval",
    description: "We craft premium concepts, refine typography, and confirm finishes.",
  },
  {
    title: "Print & delivery",
    description: "After approval we produce, pack, and coordinate delivery/pickup.",
  },
];

const reasons = [
  {
    title: "Boutique aesthetics",
    description: "Curated palettes, layered textures, and elegant typography.",
  },
  {
    title: "Guided personalization",
    description: "We translate your theme into a cohesive stationery suite.",
  },
  {
    title: "Premium finishing",
    description: "Hand-finished details, fine papers, and luxe packaging.",
  },
  {
    title: "Clear timelines",
    description: "Transparent pricing, design approvals, and delivery updates.",
  },
];

export default function Page() {
  return (
    <div>
      <Container>
        <section className="hero">
          <div className="heroContent">
            <span className="badge">Boutique invitation studio · Gondia</span>
            <h1>Premium invitation cards crafted for unforgettable celebrations.</h1>
            <p>
              {BUSINESS.description} Discover curated collections, premium finishes, and a seamless
              design-to-print experience.
            </p>
            <div className="stack">
              <Link className="button" href="/quote">
                Request a Quote
              </Link>
              <Link className="button secondary" href="/gallery">
                View Gallery
              </Link>
              {BUSINESS.whatsapp ? (
                <a className="button secondary" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              ) : null}
            </div>
          </div>

          <div className="heroCard">
            <div className="heroHighlight">Signature Wedding Suite</div>
            <p className="muted">
              Layered inserts, velvet ribbons, and luxe foil details tailored to your love story.
            </p>
            <Image
              src="/gallery/wedding-01.svg"
              alt="Premium wedding invitation suite"
              width={520}
              height={420}
              style={{ borderRadius: 18, marginTop: 16 }}
              priority
            />
          </div>
        </section>
      </Container>

      <Section>
        <Container>
          <div className="grid cols-3">
            {highlights.map((item) => (
              <Card key={item.title}>
                <h3 className="cardTitle">{item.title}</h3>
                <p className="muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid cols-2">
            <div>
              <span className="sectionKicker">Finishes & Materials</span>
              <h2 className="sectionTitle">Luxurious textures and handcrafted details.</h2>
              <p className="muted">
                Choose from premium stocks and finishing techniques to elevate your invitation suite.
              </p>
            </div>
            <Card>
              <ul className="list" style={{ margin: 0 }}>
                {finishes.map((finish) => (
                  <li key={finish}>{finish}</li>
                ))}
              </ul>
              <div className="stack" style={{ marginTop: 20 }}>
                <Link className="button" href="/finishes">
                  Explore Finishes
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid cols-2">
            <Card>
              <span className="sectionKicker">How it works</span>
              <h2 className="sectionTitle">A refined, guided process.</h2>
              <div className="timeline">
                {steps.map((step, index) => (
                  <div key={step.title} className="timelineItem">
                    <div className="timelineStep">{index + 1}</div>
                    <div className="timelineContent">
                      <h4>{step.title}</h4>
                      <p className="muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div>
              <span className="sectionKicker">Why choose us</span>
              <h2 className="sectionTitle">Designed with care, delivered with precision.</h2>
              <div className="grid" style={{ marginTop: 20 }}>
                {reasons.map((reason) => (
                  <Card key={reason.title}>
                    <h3 className="cardTitle">{reason.title}</h3>
                    <p className="muted">{reason.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="instagramCard">
            <span className="sectionKicker">Instagram</span>
            <h2 className="sectionTitle">See real invitations &amp; behind-the-scenes.</h2>
            <p className="muted">
              Follow our latest boutique designs, material swatches, and new launches on Instagram.
            </p>
            {BUSINESS.instagram ? (
              <a className="button" href={BUSINESS.instagram} target="_blank" rel="noreferrer">
                Visit @sanju.sk.digital
              </a>
            ) : null}
          </div>
        </Container>
      </Section>
    </div>
  );
}
