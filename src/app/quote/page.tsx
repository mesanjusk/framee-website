"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BUSINESS } from "../../config/business";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";


const finishOptions = [
  "Foil stamping",
  "Emboss / Deboss",
  "Laser-cut detailing",
  "Acrylic / vellum",
  "Handmade paper",
  "Wax seal + ribbon",
  "Custom box packaging",
];

const budgetRanges = [
  "Below ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000+",
];

export default function Page() {
  const [eventType, setEventType] = useState("");
  const [names, setNames] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [finishes, setFinishes] = useState<string[]>([]);

  const message = useMemo(() => {
    return (
      `Hi ${BUSINESS.name}, I need invitation cards for ${eventType || "my event"}.\n` +
      `Names: ${names || "-"}\n` +
      `Date: ${date || "-"}\n` +
      `City: ${city || "-"}\n` +
      `Quantity: ${quantity || "-"}\n` +
      `Size: ${size || "-"}\n` +
      `Finish preferences: ${finishes.length ? finishes.join(", ") : "-"}\n` +
      `Budget range: ${budget || "-"}\n` +
      `Notes: ${notes || "-"}`
    );
  }, [budget, city, date, eventType, finishes, names, notes, quantity, size]);

  const handleFinishToggle = (value: string) => {
    setFinishes((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const whatsappUrl = `${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <Section>
        <Container>
          <span className="sectionKicker">Request a Quote</span>
          <h1 className="sectionTitle">Tell us about your event and we will craft your perfect invite.</h1>
          <p className="muted" style={{ maxWidth: "75ch" }}>
            Fill in the details below. We will open a WhatsApp message pre-filled with your requirements so
            you can get a quick premium quote.
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: 28 }}>
            <div className="formGrid">
              <div>
                <label className="muted" htmlFor="eventType">Event type</label>
                <input
                  id="eventType"
                  className="input"
                  value={eventType}
                  onChange={(event) => setEventType(event.target.value)}
                  placeholder="Wedding, Engagement, Birthday..."
                />
              </div>
              <div>
                <label className="muted" htmlFor="names">Name(s)</label>
                <input
                  id="names"
                  className="input"
                  value={names}
                  onChange={(event) => setNames(event.target.value)}
                  placeholder="Bride & Groom, or event host names"
                />
              </div>
              <div>
                <label className="muted" htmlFor="date">Event date</label>
                <input
                  id="date"
                  type="date"
                  className="input"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div>
                <label className="muted" htmlFor="city">City</label>
                <input
                  id="city"
                  className="input"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  placeholder="Gondia, Nagpur, Pune..."
                />
              </div>
              <div>
                <label className="muted" htmlFor="quantity">Quantity</label>
                <input
                  id="quantity"
                  className="input"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  placeholder="Number of invites"
                />
              </div>
              <div>
                <label className="muted" htmlFor="size">Preferred size</label>
                <input
                  id="size"
                  className="input"
                  value={size}
                  onChange={(event) => setSize(event.target.value)}
                  placeholder="A5, square, custom..."
                />
              </div>
            </div>

            <Card style={{ marginTop: 20 }}>
              <h3 className="cardTitle">Finish preferences</h3>
              <div className="checkboxGrid">
                {finishOptions.map((option) => (
                  <label key={option} className="muted" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                      type="checkbox"
                      checked={finishes.includes(option)}
                      onChange={() => handleFinishToggle(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </Card>

            <div className="formGrid" style={{ marginTop: 20 }}>
              <div>
                <label className="muted" htmlFor="budget">Budget range</label>
                <select
                  id="budget"
                  className="select"
                  value={budget}
                  onChange={(event) => setBudget(event.target.value)}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="muted" htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  className="textarea"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Share color palette, theme references, or timeline."
                />
              </div>
            </div>

            <div className="stack" style={{ marginTop: 24 }}>
              <Button type="submit">Send on WhatsApp</Button>
              <Link className="button secondary" href="/collections">
                View Collections
              </Link>
            </div>

            <p className="notice" style={{ marginTop: 16 }}>
              By tapping “Send on WhatsApp” you will open WhatsApp with your details. You can edit the
              message before sending.
            </p>
          </form>
        </Container>
      </Section>
    </div>
  );
}
