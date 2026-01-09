import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore boutique invitation collections for weddings, engagements, birthdays, baby showers, housewarmings, and corporate events.",
  openGraph: {
    title: "Sanjusk Cards | Collections",
    description: "Explore boutique invitation collections for every celebration.",
  },
};

const collections = [
  {
    title: "Wedding Suites",
    description: "Full invitation suites with inserts, RSVP, envelopes, tags, and custom packaging.",
    tags: ["Luxury", "Foil", "Custom packaging"],
    category: "Wedding",
    image: "/gallery/wedding-02.svg",
  },
  {
    title: "Engagement & Ring Ceremony",
    description: "Elegant pocket cards, floral themes, and typography-forward designs.",
    tags: ["Modern", "Floral", "Royal"],
    category: "Engagement",
    image: "/gallery/engagement-01.svg",
  },
  {
    title: "Birthdays & Milestones",
    description: "Playful palettes or refined metallic accents for milestone celebrations.",
    tags: ["Vibrant", "Illustration", "Foil"],
    category: "Birthday",
    image: "/gallery/birthday-01.svg",
  },
  {
    title: "Baby Shower & Naming",
    description: "Pastel palettes, soft textures, and custom motifs for new arrivals.",
    tags: ["Pastel", "Handmade", "Soft"],
    category: "Baby Shower",
    image: "/gallery/baby-01.svg",
  },
  {
    title: "Housewarming",
    description: "Warm, elegant invites that celebrate new beginnings and blessings.",
    tags: ["Warm", "Traditional", "Minimal"],
    category: "Housewarming",
    image: "/gallery/housewarming-01.svg",
  },
  {
    title: "Corporate Events",
    description: "Formal invitations, launch passes, and premium event stationery.",
    tags: ["Formal", "Branding", "Executive"],
    category: "Corporate",
    image: "/gallery/corporate-01.svg",
  },
];

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">Collections</span>
          <h1 className="sectionTitle">Curated invitation collections with boutique craftsmanship.</h1>
          <p className="muted" style={{ maxWidth: "70ch" }}>
            Each collection is fully customizable. Choose a base style and we will tailor the palette,
            typography, finishes, and packaging to your event.
          </p>

          <div className="grid cols-3" style={{ marginTop: 30 }}>
            {collections.map((collection) => (
              <div key={collection.title} className="collectionCard">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={420}
                  height={320}
                  style={{ borderRadius: 16 }}
                />
                <div>
                  <h3 className="cardTitle">{collection.title}</h3>
                  <p className="muted">{collection.description}</p>
                </div>
                <div className="collectionTags">
                  {collection.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="stack">
                  <Link className="button" href="/quote">
                    Request Quote
                  </Link>
                  <Link className="button secondary" href={`/gallery?category=${encodeURIComponent(collection.category)}`}>
                    View in Gallery
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
