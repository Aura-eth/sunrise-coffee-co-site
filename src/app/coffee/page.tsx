"use client";

import { useState } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const coffeeItems = [
  {
    origin: "Ethiopia, Yirgacheffe",
    region: "Africa",
    altitude: "1,700\u20142,200m",
    processing: "Washed",
    notes: ["Floral", "Wild berry", "Tea-like clarity"],
    roast: "Light",
    brewing: "Pour-over (recommended), Chemex",
    price: "$18/12oz",
    roastColor: "#e8b84b",
  },
  {
    origin: "Kenya, AA Grade",
    region: "Africa",
    altitude: "1,600\u20142,000m",
    processing: "Washed",
    notes: ["Citrus", "Black tea", "Bright finish"],
    roast: "Light",
    brewing: "Pour-over (ideal), Aeropress",
    price: "$19/12oz",
    roastColor: "#e8b84b",
  },
  {
    origin: "Rwanda, Burundi Border",
    region: "Africa",
    altitude: "1,800\u20142,100m",
    processing: "Natural",
    notes: ["Red fruit", "Wine-like", "Complex"],
    roast: "Light",
    brewing: "Pour-over (recommended), Chemex",
    price: "$18/12oz",
    roastColor: "#e8b84b",
  },
  {
    origin: "Colombia, Geisha",
    region: "Americas",
    altitude: "1,500\u20141,800m",
    processing: "Natural",
    notes: ["Stone fruit", "Chocolate", "Creamy body"],
    roast: "Medium",
    brewing: "Pour-over, French press",
    price: "$17/12oz",
    roastColor: "#c87941",
  },
  {
    origin: "Guatemala, Huehuetenango",
    region: "Americas",
    altitude: "1,400\u20141,700m",
    processing: "Washed",
    notes: ["Nutty", "Caramel", "Balanced sweetness"],
    roast: "Medium",
    brewing: "Pour-over, immersion",
    price: "$16/12oz",
    roastColor: "#c87941",
  },
  {
    origin: "Peru, Cusco",
    region: "Americas",
    altitude: "1,300\u20141,600m",
    processing: "Washed",
    notes: ["Cocoa", "Hazelnut", "Smooth finish"],
    roast: "Medium-dark",
    brewing: "Pour-over, Moka pot",
    price: "$15/12oz",
    roastColor: "#7a3e1e",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Farm Origin",
    description:
      "We partner directly with farms and cooperatives. We know the growers, the altitude, the soil. Transparency starts here.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Careful Sourcing",
    description:
      "Our team selects only the finest lots. Each origin is tasted, evaluated, and approved before roasting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3a9 9 0 100 18A9 9 0 0012 3z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Small-Batch Roasting",
    description:
      "Roasted fresh in Scottsdale in small quantities. We roast to order, never sitting on old stock.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
        <path d="M12 6v2" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Hand-Pour Brewing",
    description:
      "Poured over ceramic by hand. The ritual of pour-over brings out the unique character of each origin.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M8 3h8l-1 9H9L8 3z" />
        <path d="M9 12c0 4 6 4 6 0" />
        <path d="M7 21h10" />
        <path d="M12 12v9" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What makes single-origin coffee special?",
    answer:
      "Single-origin coffee comes from one farm, region, or micro-lot. This means you taste the unique characteristics of that specific place\u2014the soil, altitude, climate, and processing. Multi-origin blends mix flavors; single-origins let each origin shine.",
  },
  {
    question: "Why pour-over instead of espresso?",
    answer:
      "Pour-over allows full control over water temperature, contact time, and brewing speed. This brings out the subtle notes and complexity in single-origin beans. Espresso is wonderful, but it masks the unique character of each origin.",
  },
  {
    question: "How should I store my beans at home?",
    answer:
      "Keep beans in an airtight container, away from light, heat, and moisture. A cool, dark pantry is ideal. Avoid the freezer\u2014temperature fluctuations damage the beans. Grind just before brewing for best results.",
  },
  {
    question: "Can I order beans online or for home brewing?",
    answer:
      "We currently brew and serve at our Scottsdale location. Visit us to discuss options for beans to take home\u2014we\u2019re exploring ways to share our coffees with our community.",
  },
  {
    question: "What\u2019s the difference between roast levels?",
    answer:
      "Light roasts preserve the origin\u2019s unique flavors\u2014more acidity, complexity, origin character. Medium roasts balance origin flavor with roasted body. Dark roasts emphasize roasted body and richness. We recommend light roasts for single-origin to taste the place it came from.",
  },
  {
    question: "How do I brew pour-over at home?",
    answer:
      "You\u2019ll need: a pour-over cone (ceramic or plastic), filters, a gooseneck kettle, a scale, and freshly ground beans. Use water just off boil (195\u2014205\u00b0F). Start with a small amount to \u2018bloom\u2019 the grounds for 30 seconds, then pour in slow circles. Total brew time is 3\u20144 minutes. We\u2019re happy to guide you in person.",
  },
];

const africaItems = coffeeItems.filter((c) => c.region === "Africa");
const americasItems = coffeeItems.filter((c) => c.region === "Americas");

export default function CoffeePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .coffee-card {
          position: relative;
          transition: transform 0.3s var(--ease-out, ease-out), box-shadow 0.3s ease;
        }
        .coffee-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #C85A17;
          border-radius: 3px 0 0 3px;
          transform: scaleY(0.3);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .coffee-card:hover::before {
          transform: scaleY(1);
        }
        .coffee-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #C85A17 !important;
        }
        .roast-pip {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
          vertical-align: middle;
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }
        .timeline-line {
          background: linear-gradient(to bottom, #C85A17, transparent);
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .note-tag {
          transition: background 0.2s ease, color 0.2s ease;
        }
        .coffee-card:hover .note-tag {
          background: rgba(200, 90, 23, 0.12);
          color: #C85A17;
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #faf6f1 0%, #f0e8de 50%, #ede0d3 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "8%",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,90,23,0.07) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "5%",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,90,23,0.05) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-24">
          <FadeInUp delay={0}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ color: "#C85A17" }}
            >
              Sunrise Coffee Co
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)", color: "#1a1410" }}
            >
              Our Single-Origin
              <br />
              <span style={{ color: "#C85A17" }}>Selection</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
              style={{ color: "#6b5744", fontFamily: "var(--font-body, sans-serif)" }}
            >
              Thoughtfully sourced from origins around the world.
              <br />
              Every coffee has a story.
            </p>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div style={{ height: "1px", width: "40px", background: "#C85A17", opacity: 0.5 }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "#9c7a60" }}>
                Roasted fresh in Scottsdale
              </span>
              <div style={{ height: "1px", width: "40px", background: "#C85A17", opacity: 0.5 }} />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== MENU SHOWCASE ===== */}
      <section
        id="menu-showcase"
        className="py-24 px-6"
        style={{ background: "#fdfaf7" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-4">
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#C85A17" }}
              >
                Current Offerings
              </span>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)", color: "#1a1410" }}
            >
              Current Offerings
            </h2>
          </FadeInUp>
          <FadeInUp delay={150}>
            <p className="text-center mb-20" style={{ color: "#9c7a60" }}>
              All beans roasted fresh in Scottsdale
            </p>
          </FadeInUp>

          {/* Africa Region */}
          <FadeInUp delay={0}>
            <div className="flex items-center gap-4 mb-10">
              <h3
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: "#C85A17" }}
              >
                Africa
              </h3>
              <div
                className="flex-1"
                style={{ height: "1px", background: "linear-gradient(to right, #C85A17, transparent)" }}
              />
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {africaItems.map((item, i) => (
              <FadeInUp key={item.origin} delay={i * 80}>
                <div
                  className="coffee-card bg-white rounded-2xl border p-7 h-full flex flex-col"
                  style={{ borderColor: "#e8ddd4" }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h4
                        className="font-bold text-lg leading-tight mb-1"
                        style={{ color: "#1a1410", fontFamily: "var(--font-heading, Georgia, serif)" }}
                      >
                        {item.origin}
                      </h4>
                      <span className="text-xs" style={{ color: "#9c7a60" }}>
                        {item.altitude}
                      </span>
                    </div>
                    <span
                      className="text-lg font-bold flex-shrink-0 ml-3"
                      style={{ color: "#C85A17" }}
                    >
                      {item.price}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="note-tag text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(200,90,23,0.07)", color: "#7a4a2e" }}
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto space-y-2 pt-4" style={{ borderTop: "1px solid #f0e8de" }}>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: "#9c7a60" }}>Processing</span>
                      <span className="font-medium" style={{ color: "#3d2b1f" }}>{item.processing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: "#9c7a60" }}>Roast</span>
                      <span className="font-medium flex items-center" style={{ color: "#3d2b1f" }}>
                        <span className="roast-pip" style={{ background: item.roastColor }} />
                        {item.roast}
                      </span>
                    </div>
                    <div className="flex items-start justify-between text-sm gap-2">
                      <span style={{ color: "#9c7a60" }} className="flex-shrink-0">Brew</span>
                      <span className="font-medium text-right" style={{ color: "#3d2b1f" }}>{item.brewing}</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Americas Region */}
          <FadeInUp delay={0}>
            <div className="flex items-center gap-4 mb-10">
              <h3
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: "#C85A17" }}
              >
                Americas
              </h3>
              <div
                className="flex-1"
                style={{ height: "1px", background: "linear-gradient(to right, #C85A17, transparent)" }}
              />
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {americasItems.map((item, i) => (
              <FadeInUp key={item.origin} delay={i * 80}>
                <div
                  className="coffee-card bg-white rounded-2xl border p-7 h-full flex flex-col"
                  style={{ borderColor: "#e8ddd4" }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h4
                        className="font-bold text-lg leading-tight mb-1"
                        style={{ color: "#1a1410", fontFamily: "var(--font-heading, Georgia, serif)" }}
                      >
                        {item.origin}
                      </h4>
                      <span className="text-xs" style={{ color: "#9c7a60" }}>
                        {item.altitude}
                      </span>
                    </div>
                    <span
                      className="text-lg font-bold flex-shrink-0 ml-3"
                      style={{ color: "#C85A17" }}
                    >
                      {item.price}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="note-tag text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(200,90,23,0.07)", color: "#7a4a2e" }}
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto space-y-2 pt-4" style={{ borderTop: "1px solid #f0e8de" }}>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: "#9c7a60" }}>Processing</span>
                      <span className="font-medium" style={{ color: "#3d2b1f" }}>{item.processing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: "#9c7a60" }}>Roast</span>
                      <span className="font-medium flex items-center" style={{ color: "#3d2b1f" }}>
                        <span className="roast-pip" style={{ background: item.roastColor }} />
                        {item.roast}
                      </span>
                    </div>
                    <div className="flex items-start justify-between text-sm gap-2">
                      <span style={{ color: "#9c7a60" }} className="flex-shrink-0">Brew</span>
                      <span className="font-medium text-right" style={{ color: "#3d2b1f" }}>{item.brewing}</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ATMOSPHERE BAND ===== */}
      <section
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
        style={{ background: "#1a1410" }}
      >
        <img
          src="https://source.unsplash.com/1600x600/?pour+over+coffee+brewing+close-up+steam+morning+light"
          alt="Pour over coffee brewing"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,20,16,0.9) 0%, rgba(26,20,16,0.5) 50%, rgba(26,20,16,0.8) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <FadeInUp delay={0}>
            <p
              className="text-xl md:text-3xl font-light italic"
              style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-heading, Georgia, serif)" }}
            >
              &ldquo;Every origin has a story. We&rsquo;re just here to pour it.&rdquo;
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== PROCESS STEPS ===== */}
      <section
        id="process-steps"
        className="py-24 px-6"
        style={{ background: "#faf6f1" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <span
              className="block text-center text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#C85A17" }}
            >
              Process
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)", color: "#1a1410" }}
            >
              From Farm to Cup
            </h2>
          </FadeInUp>
          <FadeInUp delay={150}>
            <p className="text-center mb-20" style={{ color: "#9c7a60" }}>
              The journey of every bean
            </p>
          </FadeInUp>

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <FadeInUp key={step.step} delay={i * 100}>
                <div className="flex gap-8 md:gap-12">
                  {/* Left: number + line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10"
                      style={{
                        background: i === 0 ? "#C85A17" : "white",
                        color: i === 0 ? "white" : "#C85A17",
                        border: "2px solid #C85A17",
                        boxShadow: "0 4px 16px rgba(200,90,23,0.15)",
                      }}
                    >
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div
                        className="w-px flex-1 mt-4 mb-0"
                        style={{
                          minHeight: "80px",
                          background:
                            "linear-gradient(to bottom, #C85A17 0%, rgba(200,90,23,0.2) 100%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Right: content */}
                  <div
                    className={cn(
                      "pb-12 flex-1",
                      i === processSteps.length - 1 && "pb-0"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(200,90,23,0.1)", color: "#C85A17" }}
                      >
                        {step.icon}
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: "#1a1410", fontFamily: "var(--font-heading, Georgia, serif)" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-base md:text-lg leading-relaxed max-w-lg"
                      style={{ color: "#6b5744" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ATMOSPHERE BAND 2 ===== */}
      <section
        className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://source.unsplash.com/1600x700/?single+origin+coffee+beans+origin+farm+landscape+Ethiopia+Kenya"
          alt="Coffee farm landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,20,16,0.3) 0%, rgba(26,20,16,0.6) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <FadeInUp delay={0}>
            <h3
              className="text-2xl md:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)" }}
            >
              Sourced with intention.
              <br />
              Roasted with care.
            </h3>
            <p className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.7)" }}>
              We travel to origin. We know the farmers by name.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        id="faq"
        className="py-24 px-6"
        style={{ background: "#fdfaf7" }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeInUp delay={0}>
            <span
              className="block text-center text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#C85A17" }}
            >
              FAQ
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
              style={{ fontFamily: "var(--font-heading, Georgia, serif)", color: "#1a1410" }}
            >
              Questions About Our Coffee
            </h2>
          </FadeInUp>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeInUp key={i} delay={i * 60}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    border: openFaq === i ? "1.5px solid #C85A17" : "1.5px solid #e8ddd4",
                    background: openFaq === i ? "rgba(200,90,23,0.03)" : "white",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                  }}
                >
                  <button
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span
                      className="font-semibold text-base md:text-lg pr-4 leading-snug"
                      style={{ color: "#1a1410" }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: openFaq === i ? "#C85A17" : "rgba(200,90,23,0.1)",
                        color: openFaq === i ? "white" : "#C85A17",
                        transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="7" y1="1" x2="7" y2="13" />
                        <line x1="1" y1="7" x2="13" y2="7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: openFaq === i ? "400px" : "0px",
                      opacity: openFaq === i ? 1 : 0,
                    }}
                  >
                    <p
                      className="px-6 pb-6 text-base leading-relaxed"
                      style={{ color: "#6b5744" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Bottom CTA */}
          <FadeInUp delay={200}>
            <div
              className="mt-16 rounded-2xl p-8 md:p-10 text-center"
              style={{
                background: "linear-gradient(135deg, #1a1410 0%, #2e1f14 100%)",
              }}
            >
              <p
                className="text-lg md:text-xl font-light italic mb-4"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-heading, Georgia, serif)" }}
              >
                Still have questions? Come visit us.
              </p>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                Our baristas are always happy to talk coffee.
              </p>
              <a
                href="/visit"
                className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "#C85A17", color: "white" }}
              >
                Find Us in Scottsdale
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
