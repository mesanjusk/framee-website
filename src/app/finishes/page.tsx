import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export const metadata: Metadata = {
  title: "Finishes & Materials",
  description: "Explore premium invitation finishes including foil stamping, embossing, laser-cut details, acrylic, handmade paper, and wax seals.",
  openGraph: {
    title: "Sanjusk Cards | Finishes & Materials",
    description: "Explore premium invitation finishes and handcrafted materials.",
  },
};

const finishes = [
  {
    title: "Foil Stamping",
    description: "Gold, silver, rose-gold, and custom foils for regal highlights.",
  },
  {
    title: "Emboss & Deboss",
    description: "Raised or recessed detailing for tactile elegance.",
  },
  {
    title: "Laser-cut Artistry",
    description: "Intricate patterns, pocket folds, and ornate frames.",
  },
  {
    title: "Acrylic & Vellum",
    description: "Modern transparent layers, vellum wraps, and overlays.",
  },
  {
    title: "Handmade Papers",
    description: "Soft textures, deckled edges, and premium cotton blends.",
  },
  {
    title: "Wax Seals & Ribbons",
    description: "Hand-sealed closures with ribbons and luxury packaging.",
  },
];

const materials = [
  "300-350 GSM premium cardstocks",
  "Textured linen, canvas, or matte finishes",
  "Color-matched envelopes and liners",
  "Envelope addressing and monograms",
  "Custom wax seal stamps",
  "Invitation boxes for luxury suites",
];

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">Finishes & Materials</span>
          <h1 className="sectionTitle">Add couture-level details to your invitation suite.</h1>
          <p className="muted" style={{ maxWidth: "75ch" }}>
            We curate every layer, texture, and embellishment to match your event theme. Choose your
            preferred finishes and we will craft a cohesive premium suite.
          </p>

          <div className="grid cols-3" style={{ marginTop: 28 }}>
            {finishes.map((finish) => (
              <Card key={finish.title}>
                <h3 className="cardTitle">{finish.title}</h3>
                <p className="muted">{finish.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid cols-2">
            <Card>
              <h2 className="sectionTitle" style={{ marginTop: 0 }}>
                Materials we love
              </h2>
              <ul className="list" style={{ marginBottom: 0 }}>
                {materials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="sectionTitle" style={{ marginTop: 0 }}>
                Need help choosing?
              </h2>
              <p className="muted">
                Share your event style, budget range, and timeline. We will recommend the perfect
                combination of papers and finishing techniques.
              </p>
              <div className="stack" style={{ marginTop: 20 }}>
                <Link className="button" href="/quote">
                  Request a Quote
                </Link>
                <Link className="button secondary" href="/gallery">
                  Browse Gallery
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
