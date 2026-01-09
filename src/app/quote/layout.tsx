import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Share your event details and instantly message Sanjusk Cards on WhatsApp for a custom invitation quote.",
  openGraph: {
    title: "Sanjusk Cards | Request a Quote",
    description: "Share your event details and message us for a custom invitation quote.",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
