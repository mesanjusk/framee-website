export type GalleryCategory =
  | "Wedding"
  | "Engagement"
  | "Birthday"
  | "Baby Shower"
  | "Housewarming"
  | "Corporate";

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  tags: string[];
  image: string;
  alt: string;
}

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Wedding",
  "Engagement",
  "Birthday",
  "Baby Shower",
  "Housewarming",
  "Corporate",
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Regal Floral Wedding Suite",
    category: "Wedding",
    tags: ["foil", "rose gold", "suite"],
    image: "/gallery/wedding-01.svg",
    alt: "Rose-gold floral wedding invitation suite",
  },
  {
    id: 2,
    title: "Minimal Ivory Wedding Invite",
    category: "Wedding",
    tags: ["minimal", "ivory", "monogram"],
    image: "/gallery/wedding-02.svg",
    alt: "Minimal ivory wedding invitation with monogram",
  },
  {
    id: 3,
    title: "Engagement Luxe Pocket Card",
    category: "Engagement",
    tags: ["pocket", "foil", "floral"],
    image: "/gallery/engagement-01.svg",
    alt: "Engagement invitation with luxe pocket fold",
  },
  {
    id: 4,
    title: "Modern Ring Ceremony",
    category: "Engagement",
    tags: ["modern", "typography", "sage"],
    image: "/gallery/engagement-02.svg",
    alt: "Modern typography engagement invitation",
  },
  {
    id: 5,
    title: "Playful Birthday Card",
    category: "Birthday",
    tags: ["colorful", "kids", "illustration"],
    image: "/gallery/birthday-01.svg",
    alt: "Playful birthday invitation with illustration",
  },
  {
    id: 6,
    title: "Elegant 30th Celebration",
    category: "Birthday",
    tags: ["elegant", "gold", "adult"],
    image: "/gallery/birthday-02.svg",
    alt: "Elegant birthday invitation with gold accents",
  },
  {
    id: 7,
    title: "Baby Shower Pastel Set",
    category: "Baby Shower",
    tags: ["pastel", "handmade", "soft"],
    image: "/gallery/baby-01.svg",
    alt: "Pastel baby shower invitation set",
  },
  {
    id: 8,
    title: "Naming Ceremony Charm",
    category: "Baby Shower",
    tags: ["traditional", "motifs", "custom"],
    image: "/gallery/baby-02.svg",
    alt: "Traditional naming ceremony invitation",
  },
  {
    id: 9,
    title: "Housewarming Blessing",
    category: "Housewarming",
    tags: ["classic", "warm", "family"],
    image: "/gallery/housewarming-01.svg",
    alt: "Classic housewarming invitation with warm tones",
  },
  {
    id: 10,
    title: "New Home Minimal",
    category: "Housewarming",
    tags: ["minimal", "linen", "type"],
    image: "/gallery/housewarming-02.svg",
    alt: "Minimal housewarming invitation with linen texture",
  },
  {
    id: 11,
    title: "Corporate Launch Invite",
    category: "Corporate",
    tags: ["formal", "brand", "launch"],
    image: "/gallery/corporate-01.svg",
    alt: "Corporate launch invitation with formal layout",
  },
  {
    id: 12,
    title: "Executive Gala Suite",
    category: "Corporate",
    tags: ["gala", "black tie", "suite"],
    image: "/gallery/corporate-02.svg",
    alt: "Executive gala invitation suite",
  },
];
