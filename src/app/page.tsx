import Link from "next/link";
import {
  Flower2,
  Heart,
  Gem,
  Mail,
  Leaf,
  Sparkles,
  Gift,
  ScrollText,
  Layers,
  Stamp,
  Check,
} from "lucide-react";
import { BUSINESS } from "../config/business";

/* ====================================================
   DATA
   ==================================================== */

const products = [
  {
    name: "Royal Wedding Suite",
    category: "Wedding Cards",
    price: "₹2,499",
    rating: "4.9",
    reviews: 128,
    badge: "Bestseller",
    Icon: Flower2,
  },
  {
    name: "Floral Elegance Invite",
    category: "Wedding Cards",
    price: "₹1,999",
    rating: "4.8",
    reviews: 94,
    badge: "New",
    Icon: Heart,
  },
  {
    name: "Acrylic Luxury Box",
    category: "Box Invitations",
    price: "₹4,999",
    rating: "5.0",
    reviews: 57,
    badge: "Bestseller",
    Icon: Layers,
  },
  {
    name: "Save the Date Card",
    category: "Save the Date",
    price: "₹899",
    rating: "4.7",
    reviews: 203,
    badge: null,
    Icon: Mail,
  },
  {
    name: "Scroll Invitation",
    category: "Scroll Invitations",
    price: "₹3,299",
    rating: "4.9",
    reviews: 41,
    badge: "New",
    Icon: ScrollText,
  },
  {
    name: "Digital RSVP Card",
    category: "Digital Invites",
    price: "₹599",
    rating: "4.8",
    reviews: 312,
    badge: null,
    Icon: Gem,
  },
];

const categories = [
  { name: "Wedding Cards", desc: "Luxury suites & stationery", Icon: Flower2 },
  { name: "Save the Date", desc: "Announce your special day", Icon: Heart },
  { name: "Digital Invites", desc: "Shareable e-invitations", Icon: Sparkles },
  { name: "RSVP Cards", desc: "Elegant response cards", Icon: Mail },
  { name: "Box Invitations", desc: "Premium unboxing experience", Icon: Gift },
  { name: "Luxury Collections", desc: "Foil, acrylic & embossed", Icon: Stamp },
  { name: "Acrylic Cards", desc: "Modern transparent designs", Icon: Layers },
  { name: "Scroll Invitations", desc: "Classic handcrafted scrolls", Icon: ScrollText },
];

const features = [
  {
    title: "Premium Quality",
    desc: "Finest card stocks with luxury finishes — foil, emboss, laser-cut, acrylic, and more.",
    Icon: Flower2,
  },
  {
    title: "Custom Design",
    desc: "Every card is designed from scratch to perfectly match your theme and vision.",
    Icon: Gem,
  },
  {
    title: "Fast Delivery",
    desc: "Proof approval within 24 hours. Printing and dispatch within 3–5 working days.",
    Icon: Sparkles,
  },
  {
    title: "Worldwide Shipping",
    desc: "Delivering joy to couples across 50+ countries with trusted courier partners.",
    Icon: Leaf,
  },
  {
    title: "Eco Friendly",
    desc: "Sustainable card materials and eco-conscious printing practices we believe in.",
    Icon: ScrollText,
  },
  {
    title: "1000+ Happy Couples",
    desc: "Trusted by couples across India and beyond for over 5 years with glowing reviews.",
    Icon: Heart,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Choose Design",
    desc: "Browse our collections or share your inspiration and theme references with us.",
  },
  {
    num: "02",
    title: "Personalize",
    desc: "Share your names, date, venue, wording, and any customization requests.",
  },
  {
    num: "03",
    title: "Approve Proof",
    desc: "Review your digital proof carefully and request any final adjustments.",
  },
  {
    num: "04",
    title: "Delivered",
    desc: "Your beautiful invitations are printed, carefully packed, and delivered to you.",
  },
];

const testimonials = [
  {
    text: "Absolutely stunning wedding cards! The quality is exceptional and the team was so patient with all our customizations. Every single guest was blown away.",
    name: "Priya & Rahul",
    location: "Mumbai, India",
    initials: "PR",
  },
  {
    text: "We ordered acrylic box invitations and the unboxing experience was truly magical. Worth every rupee. Sanjusk Cards exceeded every one of our expectations.",
    name: "Ananya & Dev",
    location: "Bangalore, India",
    initials: "AD",
  },
  {
    text: "Fast, professional, and absolutely gorgeous! The scroll invitations were exactly what we had dreamed of. Every guest complimented them. Highly recommend!",
    name: "Meera & Karan",
    location: "Delhi, India",
    initials: "MK",
  },
];

const galleryItems = [
  { label: "Royal Wedding Suite", Icon: Flower2 },
  { label: "Gold Foil Invite", Icon: Heart },
  { label: "Luxury Scroll", Icon: ScrollText },
  { label: "Floral Save the Date", Icon: Mail },
  { label: "Acrylic Box Invite", Icon: Layers },
  { label: "Engagement Card", Icon: Gem },
];

const trustPoints = [
  "Premium Quality Materials",
  "100% Custom Design",
  "Worldwide Delivery",
  "5-Star Rated Studio",
  "1000+ Happy Couples",
];

/* ====================================================
   PAGE COMPONENT
   ==================================================== */

export default function Page() {
  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="hero section-flush">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="tag tag-outline" style={{ marginBottom: "var(--space-4)" }}>
                Premium Wedding Invitation Studio
              </span>

              <h1 className="hero-title">
                Create Your <span className="accent">Dream Wedding</span> Invitation
              </h1>

              <p className="hero-sub">
                Bespoke, handcrafted invitation cards designed to reflect your love story.
                From classic elegance to modern luxury — every detail perfectly yours.
              </p>

              <div className="hero-ctas">
                <Link className="btn btn-primary" href="/services">
                  Explore Collection
                </Link>
                <Link className="btn btn-secondary" href="/contact">
                  Customize Your Card
                </Link>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="stat-num">1000+</div>
                  <div className="stat-label">Happy Couples</div>
                </div>
                <div>
                  <div className="stat-num">50+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div>
                  <div className="stat-num">5.0★</div>
                  <div className="stat-label">Avg Rating</div>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <Flower2 size={48} color="var(--color-accent-700)" />
              <div>
                <div className="card-title">Your Perfect Card</div>
                <p className="card-body" style={{ margin: 0 }}>
                  Crafted with care for your most special day
                </p>
              </div>
              <div className="hstack">
                <span className="tag tag-accent">★ Bestseller</span>
                <span className="tag tag-neutral">Personalize</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRODUCTS
          ============================================================ */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
              Our Collections
            </span>
            <h2>Explore <span style={{ color: "var(--color-accent)" }}>Premium</span> Designs</h2>
            <p className="section-desc">
              Each card is crafted with the finest materials and meticulous attention to every detail.
            </p>
          </div>

          <div className="grid grid-3">
            {products.map((p, i) => (
              <article key={i} className="tile-card">
                <div className="media-tile">
                  <p.Icon size={56} color="var(--color-neutral-600)" />
                  {p.badge && (
                    <span
                      className={`tag ${p.badge === "Bestseller" ? "tag-accent" : "tag-neutral"}`}
                      style={{ position: "absolute", top: "var(--space-3)", left: "var(--space-3)" }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="card-body-inner">
                  <div className="card-kicker">{p.category}</div>
                  <div className="card-title">{p.name}</div>
                  <div className="card-meta">
                    {p.rating} ★ · {p.reviews} reviews
                  </div>
                  <div className="hstack" style={{ justifyContent: "space-between", marginTop: "var(--space-2)" }}>
                    <span className="card-price">{p.price}</span>
                    <span className="tag tag-outline">Personalize</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "var(--space-8)" }}>
            <Link className="btn btn-primary" href="/services">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CATEGORIES
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
              Browse by Type
            </span>
            <h2>Find Your <span style={{ color: "var(--color-accent)" }}>Perfect</span> Style</h2>
            <p className="section-desc">
              From traditional elegance to modern luxury, we have designs for every taste and budget.
            </p>
          </div>

          <div className="grid grid-4">
            {categories.map((cat, i) => (
              <Link key={i} href="/services" className="category-card">
                <div className="icon-badge" style={{ marginBottom: "var(--space-3)" }}>
                  <cat.Icon size={20} />
                </div>
                <div className="card-title" style={{ fontSize: 15 }}>{cat.name}</div>
                <div className="card-body" style={{ opacity: 1, color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>
                  {cat.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US
          ============================================================ */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
              Why Choose Us
            </span>
            <h2>Crafted with <span style={{ color: "var(--color-accent)" }}>Care</span></h2>
            <p className="section-desc">
              We believe every wedding invitation should be as unique as the love story it represents.
            </p>
          </div>

          <div className="grid grid-3">
            {features.map((f, i) => (
              <div key={i} className="card" style={{ padding: "var(--space-4)", gap: "var(--space-3)" }}>
                <div className="icon-badge-lg">
                  <f.Icon size={26} />
                </div>
                <div className="card-title">{f.title}</div>
                <p className="card-body" style={{ opacity: 1, color: "color-mix(in srgb, var(--color-text) 65%, transparent)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
              How It Works
            </span>
            <h2>Your <span style={{ color: "var(--color-accent)" }}>Journey</span> to Beautiful Invitations</h2>
            <p className="section-desc">
              A simple, seamless process from your idea to your doorstep in just four steps.
            </p>
          </div>

          <div className="grid grid-4">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step">
                <span className="process-num">{step.num}</span>
                <div className="card-title" style={{ fontSize: 17 }}>{step.title}</div>
                <p className="card-body" style={{ opacity: 1, color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head">
            <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
              Happy Couples
            </span>
            <h2>Words from <span style={{ color: "var(--color-accent)" }}>Real Couples</span></h2>
            <p className="section-desc">
              Over a thousand couples have trusted us with the most important invitations of their lives.
            </p>
          </div>

          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="card-title" style={{ fontSize: 14 }}>{t.name}</div>
                    <div className="card-meta">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GALLERY
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="tag tag-outline" style={{ marginBottom: "var(--space-3)" }}>
              Our Work
            </span>
            <h2>A Glimpse of Our <span style={{ color: "var(--color-accent)" }}>Creations</span></h2>
            <p className="section-desc">
              Browse through our portfolio of handcrafted, personalized invitations.
            </p>
          </div>

          <div className="grid grid-3">
            {galleryItems.map((item, i) => (
              <div key={i} className="tile-card">
                <div className="media-tile">
                  <item.Icon size={48} color="var(--color-neutral-600)" />
                </div>
                <div className="gallery-label">
                  <div className="gallery-label-title">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "var(--space-8)" }}>
            <Link className="btn btn-secondary" href="/gallery">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION — the poster statement, the accent runs as a field
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Let&apos;s Create Your Dream Wedding Invitation</h2>
            <p className="section-desc" style={{ marginBottom: "var(--space-6)" }}>
              Share your vision and we&apos;ll craft an invitation that perfectly captures your love story.
              Free consultation, no obligation.
            </p>
            <div className="hstack">
              {BUSINESS.whatsapp && (
                <a
                  className="btn btn-secondary"
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Free Consultation
                </a>
              )}
              <Link className="btn btn-ghost" href="/services">
                Start Designing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST BAR
          ============================================================ */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-list">
            {trustPoints.map((item, i) => (
              <div key={i} className="trust-item">
                <Check size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
