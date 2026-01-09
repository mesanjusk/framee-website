import { Suspense } from "react";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { GalleryClient } from "./GalleryClient";

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">Gallery</span>
          <h1 className="sectionTitle">Browse our premium invitation designs.</h1>
          <p className="muted" style={{ maxWidth: "75ch" }}>
            Explore curated styles across every celebration. Filter by category or search for finishes and
            themes.
          </p>

          <Suspense fallback={<p className="muted">Loading gallery...</p>}>
            <GalleryClient />
          </Suspense>
        </Container>
      </Section>
    </div>
  );
}
