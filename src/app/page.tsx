import Link from "next/link";
import { BUSINESS } from "../config/business";

/* ====================================================
   SVG DOODLE COMPONENTS — hand-drawn minimal style
   ==================================================== */

function HeartDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 41s-18-11-18-24c0-6.5 4.5-11 9-11 3 0 6.5 2 9 6 2.5-4 6-6 9-6 4.5 0 9 4.5 9 11C42 30 24 41 24 41z"/>
      <path d="M15 20c0 0 1 3 3 5" strokeWidth="1.2" opacity="0.5"/>
    </svg>
  );
}

function RingsDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="18" cy="24" r="10"/>
      <circle cx="30" cy="24" r="10"/>
      <path d="M24 18c0 0-2 2-2 6s2 6 2 6" strokeWidth="1.2" opacity="0.5"/>
    </svg>
  );
}

function EnvelopeDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="12" width="38" height="26" rx="3"/>
      <path d="M5 16l19 14L43 16"/>
      <path d="M5 38l13-11M43 38l-13-11"/>
      <path d="M20 28c1 1 2 2 4 2s3-1 4-2" strokeWidth="1.2" stroke="#D8B36A"/>
    </svg>
  );
}

function FlowerDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="24" cy="24" r="5"/>
      <ellipse cx="24" cy="10" rx="4" ry="7" transform="rotate(0 24 10)"/>
      <ellipse cx="24" cy="38" rx="4" ry="7" transform="rotate(0 24 38)"/>
      <ellipse cx="10" cy="24" rx="7" ry="4" transform="rotate(0 10 24)"/>
      <ellipse cx="38" cy="24" rx="7" ry="4" transform="rotate(0 38 24)"/>
      <ellipse cx="13" cy="13" rx="4" ry="7" transform="rotate(45 13 13)"/>
      <ellipse cx="35" cy="35" rx="4" ry="7" transform="rotate(45 35 35)"/>
      <ellipse cx="35" cy="13" rx="4" ry="7" transform="rotate(-45 35 13)"/>
      <ellipse cx="13" cy="35" rx="4" ry="7" transform="rotate(-45 13 35)"/>
    </svg>
  );
}

function LeafDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 38C12 22 22 10 40 8C38 24 28 36 10 38Z"/>
      <path d="M10 38C18 28 28 20 40 8"/>
      <path d="M22 28C20 24 18 20 16 18" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  );
}

function SparkleDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M24 6l3 15-3 3-3-3L24 6z"/>
      <path d="M24 42l-3-15 3-3 3 3L24 42z"/>
      <path d="M6 24l15-3 3 3-3 3L6 24z"/>
      <path d="M42 24l-15 3-3-3 3-3L42 24z"/>
      <path d="M10.5 10.5l11.3 9.8-1.4 2.1-2.1-1.4L10.5 10.5z"/>
      <path d="M37.5 37.5l-11.3-9.8 1.4-2.1 2.1 1.4L37.5 37.5z"/>
      <path d="M37.5 10.5l-9.8 11.3-2.1-1.4 1.4-2.1L37.5 10.5z"/>
      <path d="M10.5 37.5l9.8-11.3 2.1 1.4-1.4 2.1L10.5 37.5z"/>
      <circle cx="24" cy="24" r="2.5" fill="#2E5E4E"/>
    </svg>
  );
}

function GiftDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="22" width="36" height="20" rx="2"/>
      <rect x="8" y="16" width="32" height="8" rx="2"/>
      <line x1="24" y1="16" x2="24" y2="42"/>
      <path d="M24 16C24 16 18 12 16 8C14 4 18 3 20 5C22 7 24 16 24 16"/>
      <path d="M24 16C24 16 30 12 32 8C34 4 30 3 28 5C26 7 24 16 24 16"/>
      <path d="M10 30h6M32 30h6" strokeWidth="1.2" stroke="#D8B36A" opacity="0.8"/>
    </svg>
  );
}

function ScrollDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 10h24c2.2 0 4 1.8 4 4v22c0 2.2-1.8 4-4 4H14"/>
      <path d="M14 10c-3.5 0-6 2-6 4v22c0 3.5 3.5 4 6 4V10z"/>
      <line x1="20" y1="20" x2="34" y2="20"/>
      <line x1="20" y1="26" x2="34" y2="26"/>
      <line x1="20" y1="32" x2="29" y2="32"/>
    </svg>
  );
}

function AcrylicDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="10" y="7" width="28" height="38" rx="3"/>
      <line x1="17" y1="17" x2="31" y2="17"/>
      <line x1="17" y1="23" x2="31" y2="23"/>
      <line x1="17" y1="29" x2="25" y2="29"/>
      <circle cx="35" cy="13" r="3" stroke="#D8B36A"/>
      <path d="M10 20l-4-4M10 30l-4 4" strokeWidth="1.2" opacity="0.5"/>
    </svg>
  );
}

function WaxSealDoodle({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#2E5E4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="24" cy="28" r="16"/>
      <circle cx="24" cy="28" r="11"/>
      <path d="M24 8l2-6M24 8l-2-6"/>
      <path d="M24 20c0 0-3 2-3 5s3 5 3 5s3-2 3-5S24 20 24 20z" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

function CheckDoodle({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2E5E4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12l5 5L20 7"/>
    </svg>
  );
}

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
    badge: "bestseller" as const,
    bg: "linear-gradient(150deg, #EAF7F0 0%, #c3e8d0 100%)",
    Doodle: FlowerDoodle,
  },
  {
    name: "Floral Elegance Invite",
    category: "Wedding Cards",
    price: "₹1,999",
    rating: "4.8",
    reviews: 94,
    badge: "new" as const,
    bg: "linear-gradient(150deg, #fef9ec 0%, #f5e0a0 100%)",
    Doodle: HeartDoodle,
  },
  {
    name: "Acrylic Luxury Box",
    category: "Box Invitations",
    price: "₹4,999",
    rating: "5.0",
    reviews: 57,
    badge: "bestseller" as const,
    bg: "linear-gradient(150deg, #f0f4ff 0%, #d0dcff 100%)",
    Doodle: AcrylicDoodle,
  },
  {
    name: "Save the Date Card",
    category: "Save the Date",
    price: "₹899",
    rating: "4.7",
    reviews: 203,
    badge: null,
    bg: "linear-gradient(150deg, #fff0f5 0%, #ffc8dc 100%)",
    Doodle: EnvelopeDoodle,
  },
  {
    name: "Scroll Invitation",
    category: "Scroll Invitations",
    price: "₹3,299",
    rating: "4.9",
    reviews: 41,
    badge: "new" as const,
    bg: "linear-gradient(150deg, #f5f0ff 0%, #dac0ff 100%)",
    Doodle: ScrollDoodle,
  },
  {
    name: "Digital RSVP Card",
    category: "Digital Invites",
    price: "₹599",
    rating: "4.8",
    reviews: 312,
    badge: null,
    bg: "linear-gradient(150deg, #f0fff6 0%, #b8f0cc 100%)",
    Doodle: RingsDoodle,
  },
];

const categories = [
  { name: "Wedding Cards", desc: "Luxury suites & stationery", Doodle: FlowerDoodle },
  { name: "Save the Date", desc: "Announce your special day", Doodle: HeartDoodle },
  { name: "Digital Invites", desc: "Shareable e-invitations", Doodle: SparkleDoodle },
  { name: "RSVP Cards", desc: "Elegant response cards", Doodle: EnvelopeDoodle },
  { name: "Box Invitations", desc: "Premium unboxing experience", Doodle: GiftDoodle },
  { name: "Luxury Collections", desc: "Foil, acrylic & embossed", Doodle: WaxSealDoodle },
  { name: "Acrylic Cards", desc: "Modern transparent designs", Doodle: AcrylicDoodle },
  { name: "Scroll Invitations", desc: "Classic handcrafted scrolls", Doodle: ScrollDoodle },
];

const features = [
  {
    title: "Premium Quality",
    desc: "Finest card stocks with luxury finishes — foil, emboss, laser-cut, acrylic, and more.",
    Doodle: FlowerDoodle,
  },
  {
    title: "Custom Design",
    desc: "Every card is designed from scratch to perfectly match your theme and vision.",
    Doodle: RingsDoodle,
  },
  {
    title: "Fast Delivery",
    desc: "Proof approval within 24 hours. Printing and dispatch within 3–5 working days.",
    Doodle: SparkleDoodle,
  },
  {
    title: "Worldwide Shipping",
    desc: "Delivering joy to couples across 50+ countries with trusted courier partners.",
    Doodle: LeafDoodle,
  },
  {
    title: "Eco Friendly",
    desc: "Sustainable card materials and eco-conscious printing practices we believe in.",
    Doodle: ScrollDoodle,
  },
  {
    title: "1000+ Happy Couples",
    desc: "Trusted by couples across India and beyond for over 5 years with glowing reviews.",
    Doodle: HeartDoodle,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Choose Design",
    desc: "Browse our collections or share your inspiration and theme references with us.",
    Doodle: FlowerDoodle,
  },
  {
    num: "02",
    title: "Personalize",
    desc: "Share your names, date, venue, wording, and any customization requests.",
    Doodle: SparkleDoodle,
  },
  {
    num: "03",
    title: "Approve Proof",
    desc: "Review your digital proof carefully and request any final adjustments.",
    Doodle: EnvelopeDoodle,
  },
  {
    num: "04",
    title: "Delivered",
    desc: "Your beautiful invitations are printed, carefully packed, and delivered to you.",
    Doodle: GiftDoodle,
  },
];

const testimonials = [
  {
    text: "Absolutely stunning wedding cards! The quality is exceptional and the team was so patient with all our customizations. Every single guest was blown away.",
    name: "Priya & Rahul",
    location: "Mumbai, India",
    rating: 5,
    initials: "PR",
  },
  {
    text: "We ordered acrylic box invitations and the unboxing experience was truly magical. Worth every rupee. Sanjusk Cards exceeded every one of our expectations.",
    name: "Ananya & Dev",
    location: "Bangalore, India",
    rating: 5,
    initials: "AD",
  },
  {
    text: "Fast, professional, and absolutely gorgeous! The scroll invitations were exactly what we had dreamed of. Every guest complimented them. Highly recommend!",
    name: "Meera & Karan",
    location: "Delhi, India",
    rating: 5,
    initials: "MK",
  },
];

const galleryItems = [
  { height: 280, bg: "linear-gradient(150deg, #EAF7F0 0%, #c3e8d0 100%)", label: "Royal Wedding Suite", Doodle: FlowerDoodle },
  { height: 200, bg: "linear-gradient(150deg, #fef9ec 0%, #f5e0a0 100%)", label: "Gold Foil Invite", Doodle: HeartDoodle },
  { height: 320, bg: "linear-gradient(150deg, #f5f0ff 0%, #dac0ff 100%)", label: "Luxury Scroll", Doodle: ScrollDoodle },
  { height: 220, bg: "linear-gradient(150deg, #fff0f5 0%, #ffc8dc 100%)", label: "Floral Save the Date", Doodle: EnvelopeDoodle },
  { height: 300, bg: "linear-gradient(150deg, #f0fff6 0%, #a0e8b8 100%)", label: "Acrylic Box Invite", Doodle: AcrylicDoodle },
  { height: 240, bg: "linear-gradient(150deg, #fff9f0 0%, #ffd8a0 100%)", label: "Engagement Card", Doodle: RingsDoodle },
  { height: 260, bg: "linear-gradient(150deg, #EAF7F0 0%, #2E5E4E 80%)", label: "Classic Elegance", Doodle: WaxSealDoodle },
  { height: 190, bg: "linear-gradient(150deg, #ffeef5 0%, #ffbcd9 100%)", label: "Digital Invite", Doodle: SparkleDoodle },
  { height: 290, bg: "linear-gradient(150deg, #eff5ff 0%, #b0c8ff 100%)", label: "Modern Typography", Doodle: LeafDoodle },
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
      <section className="hero">
        <div className="heroBg" aria-hidden="true" />

        {/* Decorative vines - top-left */}
        <svg
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.06, pointerEvents: "none" }}
          width="320" height="320" viewBox="0 0 320 320" fill="none"
          aria-hidden="true"
        >
          <path d="M10 310C10 310 60 200 160 160C260 120 310 10 310 10" stroke="#2E5E4E" strokeWidth="2" strokeLinecap="round"/>
          <path d="M50 310C50 310 90 220 180 180C270 140 310 50 310 50" stroke="#2E5E4E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <circle cx="160" cy="160" r="4" fill="#2E5E4E"/>
          <circle cx="80" cy="240" r="3" fill="#2E5E4E" opacity="0.5"/>
          <circle cx="240" cy="80" r="3" fill="#2E5E4E" opacity="0.5"/>
        </svg>

        <div className="container">
          <div className="heroContent">
            {/* Left side */}
            <div className="heroLeft">
              <div className="heroBadge">
                <span style={{ display: "inline-flex", width: 14, height: 14, flexShrink: 0 }}>
                  <HeartDoodle size={14} />
                </span>
                Premium Wedding Invitation Studio
              </div>

              <h1 className="heroTitle">
                Create Your<br />
                <em>Dream Wedding</em><br />
                Invitation
              </h1>

              <p className="heroSubtitle">
                Bespoke, handcrafted invitation cards designed to reflect your love story.
                From classic elegance to modern luxury — every detail perfectly yours.
              </p>

              <div className="heroCtas">
                <Link className="btn primary" href="/services">
                  Explore Collection
                </Link>
                <Link className="btn secondary" href="/contact">
                  Customize Your Card
                </Link>
              </div>

              <div className="heroStats">
                <div className="heroStat">
                  <div className="statNum">1000+</div>
                  <div className="statLabel">Happy Couples</div>
                </div>
                <div className="heroStat">
                  <div className="statNum">50+</div>
                  <div className="statLabel">Countries</div>
                </div>
                <div className="heroStat">
                  <div className="statNum">5.0★</div>
                  <div className="statLabel">Avg Rating</div>
                </div>
              </div>
            </div>

            {/* Right side — stacked card preview */}
            <div className="heroRight">
              <div className="heroCardStack">
                {/* Back card */}
                <div
                  className="heroCardBg animFloat3"
                  style={{ top: 30, right: -20, width: 280, height: 370, transform: "rotate(9deg)", opacity: 0.55 }}
                />
                {/* Middle card */}
                <div
                  className="heroCardBg animFloat2"
                  style={{ top: 16, right: 10, width: 290, height: 380, transform: "rotate(4deg)", background: "var(--sage)", opacity: 0.7 }}
                />
                {/* Main card */}
                <div
                  className="heroCard animFloat"
                  style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: 300, height: 390 }}
                >
                  <div className="heroCardInner">
                    <div style={{ marginBottom: 20 }}>
                      <FlowerDoodle size={80} />
                    </div>
                    <div className="heroCardTitle">Your Perfect Card</div>
                    <div className="heroCardSub">
                      Crafted with love for<br />your most special day
                    </div>
                    <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                      <span style={{
                        padding: "6px 14px", background: "var(--forest)", color: "white",
                        borderRadius: 8, fontSize: 12, fontWeight: 600
                      }}>
                        ★ Bestseller
                      </span>
                      <span style={{
                        padding: "6px 14px", background: "var(--mint)",
                        borderRadius: 8, fontSize: 12, fontWeight: 600, color: "var(--forest)"
                      }}>
                        Personalize
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating decorative dots */}
                <div className="heroFloatDot animFloat2" style={{
                  top: -20, right: 20, width: 52, height: 52,
                  background: "var(--gold)", opacity: 0.18
                }} />
                <div className="heroFloatDot animFloat3" style={{
                  bottom: 20, left: -24, width: 38, height: 38,
                  background: "var(--sage)"
                }} />
                <div className="heroFloatDot animFloat" style={{
                  top: 80, left: -14, width: 22, height: 22,
                  background: "var(--forest)", opacity: 0.25
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRODUCTS
          ============================================================ */}
      <section className="section sectionSage">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionTag">
              <span style={{ display: "inline-flex", width: 14, height: 14, flexShrink: 0 }}>
                <SparkleDoodle size={14} />
              </span>
              Our Collections
            </div>
            <h2 className="sectionTitle">
              Explore <span className="accent">Premium</span> Designs
            </h2>
            <p className="sectionDesc">
              Each card is crafted with the finest materials and meticulous attention to every detail.
            </p>
          </div>

          <div className="productsGrid">
            {products.map((p, i) => (
              <article key={i} className="productCard">
                <div className="productImageWrap">
                  <div className="productImageBg" style={{ background: p.bg }}>
                    <div className="productDoodleWrap">
                      <p.Doodle size={76} />
                    </div>
                  </div>
                  {p.badge && (
                    <span className={`productBadge ${p.badge === "bestseller" ? "badgeBestseller" : "badgeNew"}`}>
                      {p.badge === "bestseller" ? "★ Bestseller" : "✦ New"}
                    </span>
                  )}
                  <button className="wishlistBtn" aria-label="Add to wishlist" type="button">♡</button>
                  <button className="quickViewBtn" type="button">Quick View</button>
                </div>

                <div className="productInfo">
                  <div className="productCategoryLabel">{p.category}</div>
                  <div className="productName">{p.name}</div>
                  <div className="productRating">
                    <span className="stars">★★★★★</span>
                    <span className="ratingText">{p.rating} ({p.reviews} reviews)</span>
                  </div>
                  <div className="productFooter">
                    <span className="productPrice">{p.price}</span>
                    <span className="personalizeTag">✦ Personalize</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 52 }}>
            <Link className="btn primary" href="/services">
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
          <div className="sectionHeader">
            <div className="sectionTag">
              <span style={{ display: "inline-flex", width: 14, height: 14, flexShrink: 0 }}>
                <LeafDoodle size={14} />
              </span>
              Browse by Type
            </div>
            <h2 className="sectionTitle">
              Find Your <span className="accent">Perfect</span> Style
            </h2>
            <p className="sectionDesc">
              From traditional elegance to modern luxury, we have designs for every taste and budget.
            </p>
          </div>

          <div className="categoriesGrid">
            {categories.map((cat, i) => (
              <Link key={i} href="/services" className="categoryCard">
                <div className="categoryIconWrap">
                  <cat.Doodle size={36} />
                </div>
                <div className="categoryName">{cat.name}</div>
                <div className="categoryDesc">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US
          ============================================================ */}
      <section className="section sectionSage">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionTag">
              <span style={{ display: "inline-flex", width: 14, height: 14, flexShrink: 0 }}>
                <HeartDoodle size={14} />
              </span>
              Why Choose Us
            </div>
            <h2 className="sectionTitle">
              Crafted with <span className="accent">Care</span>
            </h2>
            <p className="sectionDesc">
              We believe every wedding invitation should be as unique as the love story it represents.
            </p>
          </div>

          <div className="featuresGrid">
            {features.map((f, i) => (
              <div key={i} className="featureCard">
                <div className="featureIconWrap">
                  <f.Doodle size={32} />
                </div>
                <div className="featureTitle">{f.title}</div>
                <div className="featureDesc">{f.desc}</div>
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
          <div className="sectionHeader">
            <div className="sectionTag">
              <span style={{ display: "inline-flex", width: 14, height: 14, flexShrink: 0 }}>
                <SparkleDoodle size={14} />
              </span>
              How It Works
            </div>
            <h2 className="sectionTitle">
              Your <span className="accent">Journey</span> to Beautiful Invitations
            </h2>
            <p className="sectionDesc">
              A simple, seamless process from your idea to your doorstep in just four steps.
            </p>
          </div>

          <div className="processGrid">
            {processSteps.map((step, i) => (
              <div key={i} className="processCard">
                <span className="processNum">{step.num}</span>
                <div className="processDoodleWrap">
                  <step.Doodle size={56} />
                </div>
                <div className="processTitle">{step.title}</div>
                <div className="processDesc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="section sectionSage">
        <div className="container">
          <div className="sectionHeader">
            <div className="sectionTag">
              <span style={{ display: "inline-flex", width: 14, height: 14, flexShrink: 0 }}>
                <HeartDoodle size={14} />
              </span>
              Happy Couples
            </div>
            <h2 className="sectionTitle">
              Words from <span className="accent">Real Couples</span>
            </h2>
            <p className="sectionDesc">
              Over a thousand couples have trusted us with the most important invitations of their lives.
            </p>
          </div>

          <div className="testimonialsGrid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonialCard">
                <span className="quoteGlyph">&ldquo;</span>
                <p className="testimonialText">{t.text}</p>
                <div className="testimonialStars">{"★".repeat(t.rating)}</div>
                <div className="testimonialAuthor">
                  <div className="testimonialAvatar">{t.initials}</div>
                  <div>
                    <div className="testimonialName">{t.name}</div>
                    <div className="testimonialLocation">{t.location}</div>
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
          <div className="sectionHeader">
            <div className="sectionTag">
              <span style={{ display: "inline-flex", width: 14, height: 14, flexShrink: 0 }}>
                <FlowerDoodle size={14} />
              </span>
              Our Work
            </div>
            <h2 className="sectionTitle">
              A Glimpse of Our <span className="accent">Creations</span>
            </h2>
            <p className="sectionDesc">
              Browse through our portfolio of handcrafted, personalized invitations.
            </p>
          </div>

          <div className="galleryGrid">
            {galleryItems.map((item, i) => (
              <div key={i} className="galleryItem">
                <div
                  className="galleryItemInner"
                  style={{ height: item.height, background: item.bg }}
                >
                  <div style={{ opacity: 0.45, pointerEvents: "none" }}>
                    <item.Doodle size={56} />
                  </div>
                  <div className="galleryLabel">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link className="btn secondary" href="/gallery">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div className="ctaSection">
            <div className="ctaBg" aria-hidden="true" />

            {/* Doodle decorations */}
            <div className="ctaDoodleLeft" aria-hidden="true">
              <FlowerDoodle size={110} />
            </div>
            <div className="ctaDoodleRight" aria-hidden="true">
              <LeafDoodle size={90} />
            </div>
            <div style={{ position: "absolute", top: "50%", left: 120, transform: "translateY(-50%)", opacity: 0.07 }} aria-hidden="true">
              <HeartDoodle size={70} />
            </div>
            <div style={{ position: "absolute", top: "50%", right: 120, transform: "translateY(-50%)", opacity: 0.07 }} aria-hidden="true">
              <RingsDoodle size={70} />
            </div>

            <div className="ctaContent">
              <h2 className="ctaTitle">
                Let&apos;s Create Your<br />
                <em>Dream Wedding</em> Invitation
              </h2>
              <p className="ctaDesc">
                Share your vision and we&apos;ll craft an invitation that perfectly captures your love story.
                Free consultation, no obligation.
              </p>
              <div className="ctaBtns">
                {BUSINESS.whatsapp && (
                  <a
                    className="btn gold"
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Free Consultation
                  </a>
                )}
                <Link className="btn outline" href="/services">
                  Start Designing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST BAR
          ============================================================ */}
      <section style={{ padding: "32px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "40px", flexWrap: "wrap"
          }}>
            {[
              "Premium Quality Materials",
              "100% Custom Design",
              "Worldwide Delivery",
              "5-Star Rated Studio",
              "1000+ Happy Couples",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "inline-flex", width: 18, height: 18, color: "var(--forest)", flexShrink: 0 }}>
                  <CheckDoodle size={18} />
                </span>
                <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--text-soft)", whiteSpace: "nowrap" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
