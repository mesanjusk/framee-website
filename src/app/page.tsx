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
import { BrandMark } from "../components/BrandMark";
import { Words } from "../components/Words";
import { ScrollRow } from "../components/motion/ScrollRow";
import { Magnetic } from "../components/motion/Magnetic";
import { CountUp } from "../components/motion/CountUp";
import { Marquee } from "../components/motion/Marquee";
import { SectionSeam } from "../components/motion/SectionSeam";

/* ====================================================
   DATA
   ==================================================== */

const cardColors = ["#c6a4ee", "#fbd13d", "#f2a8cd", "#7dd957"];
const bubbleColors = ["#ffffff", "var(--color-purple)", "var(--color-teal)", "var(--color-pink-soft)", "var(--color-green)", "#ffffff"];
const stepColors = ["var(--color-purple)", "var(--color-pink-soft)", "var(--color-yellow)", "var(--color-teal)"];

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
    title: "Pan-India Shipping",
    desc: "Delivering joy to couples across India with trusted courier partners.",
    Icon: Leaf,
  },
  {
    title: "Eco Friendly",
    desc: "Sustainable card materials and eco-conscious printing practices we believe in.",
    Icon: ScrollText,
  },
  {
    title: "1000+ Happy Couples",
    desc: "Trusted by couples across India for over 5 years with glowing reviews.",
    Icon: Heart,
  },
];

const processSteps = [
  {
    num: "1",
    emoji: "🎨",
    title: "Choose Design",
    desc: "Browse our collections or share your inspiration and theme references with us.",
  },
  {
    num: "2",
    emoji: "✍️",
    title: "Personalize",
    desc: "Share your names, date, venue, wording, and any customization requests.",
  },
  {
    num: "3",
    emoji: "✅",
    title: "Approve Proof",
    desc: "Review your digital proof carefully and request any final adjustments.",
  },
  {
    num: "4",
    emoji: "🎁",
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
    text: "We ordered acrylic box invitations and the unboxing experience was truly magical. Worth every rupee. SK Digital Cards exceeded every one of our expectations.",
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

const faqs = [
  {
    q: "How long does delivery take?",
    a: "You'll get a digital proof within 24 hours. Printing and dispatch follow within 3–5 working days once approved.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes — we deliver joy to couples across India through trusted courier partners.",
  },
  {
    q: "Can I fully customize my card?",
    a: "Absolutely. Every card is designed from scratch to perfectly match your theme, wording and budget.",
  },
  {
    q: "How do I place an order?",
    a: "Message us on WhatsApp for a free consultation and we'll guide you from design to delivery.",
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
  "Pan-India Delivery",
  "5-Star Rated Studio",
  "1000+ Happy Couples",
];

const marqueeItems = [
  "Handcrafted Invitations",
  "Free Design Consultation",
  "Pan-India Delivery",
  "1000+ Happy Couples",
  "5.0★ Rated Studio",
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
              <p className="script-tag reveal" style={{ marginBottom: "var(--space-3)", transitionDelay: "0ms" }}>
                Shipping across India
              </p>

              <h1 className="hero-title reveal reveal-stagger" style={{ transitionDelay: "90ms" }}>
                <Words text="Invitations worth" />{" "}
                <span className="accent"><Words text="celebrating" startIndex={2} /></span>
              </h1>

              <p className="hero-sub reveal" style={{ transitionDelay: "180ms" }}>
                Bespoke, handcrafted invitation cards designed to reflect your love story.
                From classic elegance to modern luxury — every detail perfectly yours.
              </p>

              <div className="hero-ctas reveal" style={{ transitionDelay: "270ms" }}>
                {BUSINESS.whatsapp && (
                  <Magnetic>
                    <a className="btn-split" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
                      <span className="btn-split-label">Get a free quote</span>
                      <span className="btn-split-arrow">→</span>
                    </a>
                  </Magnetic>
                )}
                <Link className="btn btn-secondary" href="/services">
                  Explore Collection
                </Link>
              </div>

              <div className="hero-stats reveal" style={{ transitionDelay: "360ms" }}>
                <div>
                  <div className="stat-num"><CountUp value="1000+" /></div>
                  <div className="stat-label">Happy Couples</div>
                </div>
                <div>
                  <div className="stat-num"><CountUp value="5+" /></div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div>
                  <div className="stat-num"><CountUp value="5.0★" /></div>
                  <div className="stat-label">Avg Rating</div>
                </div>
              </div>
            </div>

            <div className="hero-tilt-wrap">
              <div className="hero-panel reveal" style={{ transitionDelay: "150ms" }}>
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
        </div>
      </section>
      <SectionSeam from="var(--color-yellow)" to="var(--color-bg)" />

      {/* ============================================================
          OUR COLLECTIONS
          ============================================================ */}
      <section className="section section-flush">
        <div className="container">
          <div className="section-head reveal reveal-stagger" style={{ margin: "0 auto var(--space-8)", textAlign: "center" }}>
            <h2><Words text="Our Collections" /></h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Each card is crafted with the finest materials and meticulous attention to every detail.
            </p>
          </div>

          <ScrollRow count={4}>
            {products.slice(0, 4).map((p, i) => {
              const color = cardColors[i % cardColors.length];
              return (
                <article
                  key={i}
                  className="card petal-card reveal"
                  style={{ background: color, transitionDelay: `${i * 80}ms` }}
                >
                  <div className="petal-ears" aria-hidden="true">
                    <span className="petal-ear is-left" style={{ background: color }} />
                    <span className="petal-ear is-right" style={{ background: color }} />
                  </div>
                  <div className="media-tile media-reveal" style={{ background: "rgba(255,255,255,0.35)", aspectRatio: "4 / 3.4" }}>
                    <p.Icon size={56} color="rgba(20,20,20,0.55)" />
                    <div className="media-tile-cta">
                      <Link href="/services" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: 12 }}>
                        View
                      </Link>
                    </div>
                  </div>
                  <div className="hstack" style={{ gap: 8 }}>
                    <span className="tag" style={{ background: "rgba(255,255,255,0.75)", color: "var(--color-text)" }}>
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className={`tag ${p.badge === "Bestseller" ? "tag-accent" : "tag-accent-2"}`}>
                        {p.badge === "Bestseller" ? "★ Bestseller" : "✦ New"}
                      </span>
                    )}
                  </div>
                  <div className="card-title" style={{ fontSize: 24 }}>{p.name}</div>
                  <p className="card-body" style={{ opacity: 1 }}>
                    {p.rating} ★ · {p.reviews} reviews
                  </p>
                  <div className="card-price">{p.price}</div>
                </article>
              );
            })}
          </ScrollRow>

          <div style={{ marginTop: "var(--space-8)", textAlign: "center" }}>
            <Link className="btn btn-primary" href="/services">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CATEGORIES — oversized word list, not icon cards
          ============================================================ */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head reveal reveal-stagger" style={{ margin: "0 auto var(--space-6)", textAlign: "center" }}>
            <h2><Words text="Choose from" /></h2>
            <p className="script-tag" style={{ display: "block", color: "var(--color-purple-deep)" }}>
              We&rsquo;ve got a card for every kind of celebration
            </p>
          </div>

          <nav className="word-cloud reveal" aria-label="Card categories">
            {categories.map((cat, i) => (
              <Link key={i} href="/services" className="word-cloud-item">
                {cat.name}
              </Link>
            ))}
            <span className="word-cloud-item" style={{ color: "color-mix(in srgb, var(--color-text) 55%, transparent)", cursor: "default" }}>
              and more!
            </span>
          </nav>
        </div>
      </section>

      {/* ============================================================
          BANNER — "Cards for every event"
          ============================================================ */}
      <section className="banner-strip" style={{ background: "var(--color-pink-hot)", color: "#fff" }}>
        <h2 className="reveal reveal-stagger"><Words text="Cards for every event" /></h2>
        <div className="banner-ring reveal" style={{ transitionDelay: "120ms" }}>
          <BrandMark color="#fff" />
        </div>
      </section>
      <SectionSeam from="var(--color-pink-hot)" to="var(--color-yellow)" />

      {/* ============================================================
          WHY SK DIGITAL — floating bubble labels over a blob backdrop
          ============================================================ */}
      <section className="section organic-bg" style={{ background: "var(--color-yellow)" }}>
        <div className="container">
          <div className="section-head reveal reveal-stagger" style={{ margin: "0 auto var(--space-8)", textAlign: "center", maxWidth: 560 }}>
            <p className="script-tag" style={{ fontSize: 32, color: "var(--color-purple-ink)" }}>Why SK Digital?</p>
            <h2><Words text="Crafted with" /> <span className="accent"><Words text="Care" startIndex={2} /></span></h2>
          </div>

          <div className="floating-labels">
            {features.map((f, i) => (
              <div
                key={i}
                className="floating-label reveal"
                style={{ background: bubbleColors[i % bubbleColors.length], transitionDelay: `${i * 70}ms` }}
              >
                {f.title}
              </div>
            ))}
          </div>

          <p className="script-tag reveal" style={{ display: "block", textAlign: "center", marginTop: "var(--space-8)", color: "var(--color-purple-ink)" }}>
            We believe every invitation should be as unique as the story it tells
          </p>
        </div>
      </section>

      {/* ============================================================
          CURVED HANDWRITTEN BANNER
          ============================================================ */}
      <section className="curved-banner reveal" aria-hidden="true">
        <div className="container">
          <svg viewBox="0 0 1200 160" preserveAspectRatio="xMidYMid meet">
            <path id="tagline-curve" d="M -60 140 Q 600 10 1260 140" fill="none" />
            <text>
              <textPath href="#tagline-curve" startOffset="50%" textAnchor="middle">
                Crafted with love, delivered with care
              </textPath>
            </text>
          </svg>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS — pinned, scroll-scrubbed on desktop (see
          ScrollFX.tsx); a plain horizontal scroll row on mobile, where
          pinning a 400vh section risks getting janky (see the audit's
          performance notes). Both versions render the same four steps
          from the same data — only the presentation differs.
          ============================================================ */}
      <section className="section" style={{ background: "var(--color-lilac)", padding: 0 }} id="how-it-works">
        <div className="container" style={{ paddingTop: "calc(var(--space-8) * 2)" }}>
          <div className="section-head reveal reveal-stagger" style={{ margin: "0 auto var(--space-8)", textAlign: "center" }}>
            <h2><Words text="How it works" /></h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              A simple, seamless process from your idea to your doorstep in just four steps.
            </p>
          </div>
        </div>

        {/* — desktop: pinned sequence — */}
        <div className="pin-steps-desktop">
          <div className="pin-steps" style={{ height: `${processSteps.length * 100}vh` }}>
            <div className="pin-steps-sticky">
              <div className="pin-steps-stack">
                {processSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`process-step pin-step${i === 0 ? " is-active" : ""}`}
                    style={{ background: stepColors[i % stepColors.length] }}
                  >
                    <span className="process-num">Step #{step.num}</span>
                    <div style={{ fontSize: 72, textAlign: "center", margin: "var(--space-2) 0 var(--space-3)" }}>
                      {step.emoji}
                    </div>
                    <div className="card-title" style={{ fontSize: 22, color: "var(--color-text)" }}>{step.title}</div>
                    <p className="card-body" style={{ opacity: 1, color: "var(--color-purple-ink)" }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
                <p className="script-tag pin-steps-caption" style={{ color: "var(--color-purple-deep)" }}>
                  Consider us your personal invitation designers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* — mobile: plain horizontal row — */}
        <div className="pin-steps-mobile">
          <div className="container">
            <ScrollRow count={processSteps.length}>
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="process-step reveal"
                  style={{ background: stepColors[i % stepColors.length], transitionDelay: `${i * 80}ms` }}
                >
                  <span className="process-num">Step #{step.num}</span>
                  <div style={{ fontSize: 72, textAlign: "center", margin: "var(--space-2) 0 var(--space-3)" }}>
                    {step.emoji}
                  </div>
                  <div className="card-title" style={{ fontSize: 22, color: "var(--color-text)" }}>{step.title}</div>
                  <p className="card-body" style={{ opacity: 1, color: "var(--color-purple-ink)" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </ScrollRow>
            <p className="script-tag reveal" style={{ display: "block", textAlign: "center", marginTop: "var(--space-6)", color: "var(--color-purple-deep)" }}>
              Consider us your personal invitation designers
            </p>
          </div>
        </div>
      </section>
      <SectionSeam from="var(--color-lilac)" to="var(--color-surface)" />

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head reveal reveal-stagger" style={{ margin: "0 auto var(--space-8)", textAlign: "center" }}>
            <h2><Words text="Words from" /> <span className="accent"><Words text="Real Couples" startIndex={2} /></span></h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Over a thousand couples have trusted us with the most important invitations of their lives.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal" style={{ background: "#fff", transitionDelay: `${i * 80}ms` }}>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="card-title" style={{ fontSize: 15 }}>{t.name}</div>
                    <div className="card-meta">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section className="section section-flush">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 className="reveal reveal-stagger" style={{ textAlign: "center", marginBottom: "var(--space-6)" }}><Words text="Common questions" /></h2>
          <div className="stack" style={{ gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
            {faqs.map((item, i) => (
              <details key={i} className="faq-item reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <summary>
                  <span className="faq-q">{item.q}</span>
                  <span className="faq-plus">+</span>
                </summary>
                <p className="faq-a">{item.a}</p>
              </details>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link className="btn-split" href="/contact" style={{ display: "inline-flex" }}>
              <span className="btn-split-label">Show all FAQ</span>
              <span className="btn-split-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          GALLERY
          ============================================================ */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-head reveal reveal-stagger" style={{ margin: "0 auto var(--space-8)", textAlign: "center" }}>
            <h2><Words text="Made" /> <span className="accent"><Words text="Just for You" startIndex={1} /></span></h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Share your theme, colours and wording, and we&apos;ll craft an invitation that&apos;s entirely yours.
              Free consultation, no obligation — just tell us your vision and we&apos;ll take it from there.
            </p>
          </div>

          <div className="grid grid-3">
            {galleryItems.map((item, i) => {
              const color = cardColors[i % cardColors.length];
              return (
                <div key={i} className="petal-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className="petal-ears" aria-hidden="true">
                    <span className="petal-ear is-left" style={{ background: color }} />
                    <span className="petal-ear is-right" style={{ background: color }} />
                  </div>
                  <div className="tile-card">
                    <div className="media-tile media-reveal" style={{ background: `color-mix(in srgb, ${color} 22%, var(--color-neutral-200))` }}>
                      <item.Icon size={48} color="var(--color-neutral-600)" />
                    </div>
                    <div className="gallery-label">
                      <div className="gallery-label-title">{item.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "var(--space-8)", textAlign: "center" }}>
            <Link className="btn btn-secondary" href="/gallery">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLIENT FAVOURITES
          ============================================================ */}
      <section className="section" style={{ background: "var(--color-yellow)", textAlign: "center" }}>
        <div className="container reveal reveal-stagger" style={{ maxWidth: 520 }}>
          <h2><Words text="Client Favourites" /></h2>
          <p className="section-desc" style={{ margin: "0 auto var(--space-6)" }}>
            Every season our couples pick the designs they love most. These bestselling invitations
            have won hearts across 1000+ celebrations over the years.
          </p>

          <div className="petal-card" style={{ position: "relative", maxWidth: 300, margin: "22px auto 0" }}>
            <div className="petal-ears" aria-hidden="true">
              <span className="petal-ear is-left" style={{ background: "var(--color-purple)" }} />
              <span className="petal-ear is-right" style={{ background: "var(--color-purple)" }} />
            </div>
            {/* confetti burst — springs out once, the first time this card is revealed */}
            <span className="confetti-bit" aria-hidden="true" style={{ left: "12%", top: "-6%", background: "var(--color-pink-hot)", translate: "-26px -18px", transitionDelay: "80ms" }} />
            <span className="confetti-bit" aria-hidden="true" style={{ left: "50%", top: "-10%", background: "var(--color-yellow-deep)", translate: "6px -30px", transitionDelay: "160ms" }} />
            <span className="confetti-bit" aria-hidden="true" style={{ right: "10%", top: "-4%", background: "var(--color-green)", translate: "24px -14px", transitionDelay: "220ms" }} />
            <span className="confetti-bit" aria-hidden="true" style={{ left: "-4%", top: "40%", background: "var(--color-teal)", translate: "-20px 8px", transitionDelay: "300ms" }} />
            <span className="confetti-bit" aria-hidden="true" style={{ right: "-4%", top: "60%", background: "var(--color-purple-deep)", translate: "20px 12px", transitionDelay: "380ms" }} />
            <span className="sticker-badge sticker-pop" style={{ left: -10, top: 4, width: 70, height: 70, fontSize: 17, transitionDelay: "120ms" }}>
              1000+
            </span>
            <span className="sticker-badge sticker-pop" style={{ right: -10, top: 46, width: 78, height: 78, fontSize: 22, transitionDelay: "220ms" }}>
              5.0★
            </span>
            <div className="tile-card">
              <div className="media-tile media-reveal" style={{ height: 340, aspectRatio: "auto", background: "color-mix(in srgb, var(--color-purple) 22%, var(--color-neutral-200))" }}>
                <Flower2 size={56} color="var(--color-neutral-600)" />
              </div>
              <div className="gallery-label">
                <div className="gallery-label-title">Royal Wedding Suite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* ============================================================
          SK DIGITAL EXCLUSIVE — dark poster CTA
          ============================================================ */}
      <section className="section">
        <div className="container">
          <h2 className="reveal reveal-stagger" style={{ marginBottom: "var(--space-6)" }}><Words text="SK Digital Exclusive" /></h2>
          <div className="cta-band reveal" style={{ transitionDelay: "100ms" }}>
            <div className="media-tile" style={{ background: "rgba(255,255,255,0.08)", aspectRatio: "auto", height: 260, marginBottom: "var(--space-6)" }}>
              <Gem size={48} color="rgba(255,255,255,0.5)" />
            </div>
            <p className="section-desc" style={{ marginBottom: "var(--space-6)" }}>
              SK Digital Cards has crafted bespoke invitations for over 5 years, trusted by 1000+ happy couples
              across India. This is our signature limited edition.
            </p>
            {BUSINESS.whatsapp && (
              <Magnetic>
                <a className="btn-split" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
                  <span className="btn-split-label">Get a quote!</span>
                  <span className="btn-split-arrow">→</span>
                </a>
              </Magnetic>
            )}
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
              <div key={i} className="trust-item reveal" style={{ transitionDelay: `${i * 50}ms` }}>
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
