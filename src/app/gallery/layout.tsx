import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse boutique invitation designs across weddings, engagements, birthdays, baby showers, housewarmings, and corporate events.",
  openGraph: {
    title: "Sanjusk Cards | Gallery",
    description: "Browse boutique invitation designs across every event category.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
