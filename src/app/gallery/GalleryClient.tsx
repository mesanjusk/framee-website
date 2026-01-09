"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BUSINESS } from "../../config/business";
import { galleryCategories, galleryItems, type GalleryItem } from "../../data/gallery";

export function GalleryClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || "All");
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return galleryItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <div className="galleryFilters" style={{ marginTop: 24 }}>
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filterButton${activeCategory === category ? " filterButtonActive" : ""}`}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
        <input
          className="searchInput"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by style or finish"
          aria-label="Search gallery"
        />
      </div>

      <div className="galleryGrid">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="galleryCard"
            onClick={() => setSelectedItem(item)}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={420}
              height={320}
              className="galleryImage"
            />
            <div className="galleryMeta">
              <h3 className="cardTitle">{item.title}</h3>
              <p className="muted">{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="card" style={{ marginTop: 32 }}>
        <h3 className="cardTitle">Ready to design your suite?</h3>
        <p className="muted">
          Share your event details, preferred finishes, and quantities. We will craft a quote and
          timeline.
        </p>
        <div className="stack">
          <Link className="button" href="/quote">
            Request Quote
          </Link>
          {BUSINESS.whatsapp ? (
            <a className="button secondary" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          ) : null}
        </div>
      </div>

      {selectedItem ? (
        <div
          className="lightboxBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
        >
          <div className="lightboxContent" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightboxClose"
              onClick={() => setSelectedItem(null)}
              aria-label="Close"
            >
              Close
            </button>
            <Image
              src={selectedItem.image}
              alt={selectedItem.alt}
              width={820}
              height={620}
              style={{ borderRadius: 16 }}
            />
            <div style={{ marginTop: 16 }}>
              <h3 className="cardTitle">{selectedItem.title}</h3>
              <p className="muted">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
