"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const coffeeItems = [
  {
    name: "Yirgacheffe, Ethiopia",
    origin: "Yirgacheffe Region, Ethiopia",
    roast: "Light",
    notes: "Blueberry, jasmine, tea-like clarity",
    price: "$5.50",
    flag: "🇪🇹",
    intensity: 1,
  },
  {
    name: "Huila, Colombia",
    origin: "Huila Department, Colombia",
    roast: "Medium",
    notes: "Chocolate, nutella, balanced sweetness",
    price: "$5.50",
    flag: "🇨🇴",
    intensity: 3,
  },
  {
    name: "Kayon Mountain, Kenya",
    origin: "Kayon Mountain, Kenya",
    roast: "Light-Medium",
    notes: "Blackcurrant, stone fruit, wine-like complexity",
    price: "$6.00",
    flag: "🇰🇪",
    intensity: 2,
  },
  {
    name: "Central Valley, Costa Rica",
    origin: "Central Valley, Costa Rica",
    roast: "Medium",
    notes: "Caramel, almond, smooth and approachable",
    price: "$5.50",
    flag: "🇨🇷",
    intensity: 3,
  },
  {
    name: "Sidamo, Ethiopia",
    origin: "Sidamo Region, Ethiopia",
    roast: "Light",
    notes: "Strawberry, bergamot, floral notes",
    price: "$6.00",
    flag: "🇪🇹",
    intensity: 1,
  },
  {
    name: "Geisha, Panama",
    origin: "Boquete, Panama",
    roast: "Light",
    notes: "Rose, tropical fruit, extraordinary clarity",
    price: "$8.00",
    flag: "🇵🇦",
    intensity: 1,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Selection",
    description:
      "You choose your origin. We grind it fresh moments before brewing, capturing every volatile flavor compound.",
    icon: "✦",
  },
  {
    step: 2,
    title: "Blooming",
    description:
      "We saturate the grounds with hot water, allowing CO₂ to escape and the bean's complexity to awaken.",
    icon: "◎",
  },
  {
    step: 3,
    title: "Pouring",
    description:
      "With precision and intention, we pour slowly and deliberately. Temperature, timing, and technique unlock the origin's true character.",
    icon: "⟁",
  },
  {
    step: 4,
    title: "Patience",
    description:
      "Pour-over takes 3–4 minutes. This isn't speed. This is ritual. Time to breathe, to be present, to anticipate.",
    icon: "◷",
  },
  {
    step: 5,
    title: "Savoring",
    description:
      "A cup that reveals itself as it cools. Layers of flavor, clarity, and connection to soil, sun, and hands that grew it.",
    icon: "☽",
  },
];

const roastColorMap: Record<string, string> = {
  Light: "bg-amber-100 text-amber-800",
  "Light-Medium": "bg-amber-200 text-amber-900",
  Medium: "bg-orange-200 text-orange-900",
};

export default function CoffeePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        .font-cormorant {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .font-source {
          font-family: 'Source Sans 3', system-ui, sans-serif;
        }

        body, .coffee-page {
          font-family: 'Source Sans 3', system-ui, sans-serif;
          background-color: #faf7f2;
          color: #2c2117;
        }

        .warm-filter {
          filter: sepia(20%) saturate(110%) brightness(98%);
        }

        .section-texture {
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(210, 150, 80, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(180, 110, 50, 0.05) 0%, transparent 50%);
        }

        .card-hover {
          transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(100, 60, 20, 0.12);
        }

        @keyframes pourDrop {
          0% { stroke-dashoffset: 200; opacity: 0; }
          10% { opacity: 1; }
          80% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.7; }
        }
        @keyframes ripple {
          0% { r: 4; opacity: 0.8; }
          100% { r: 18; opacity: 0; }
        }
        @keyframes dropFall {
          0% { cy: 30; opacity: 0; }
          20% { opacity: 1; }
          100% { cy: 90; opacity: 0; }
        }
        .pour-stream {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: pourDrop 2.4s ease-in-out infinite;
        }
        .pour-drop {
          animation: dropFall 2.4s ease-in 0.6s infinite;
        }
        .pour-ripple {
          animation: ripple 1.2s ease-out 1.8s infinite;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-headline {
          animation: fadeSlideUp 1.1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.2s both;
        }
        .hero-subline {
          animation: fadeSlideUp 1.1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.45s both;
        }
        .hero-divider {
          animation: fadeSlideUp 1.1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.65s both;
        }

        .intensity-pip {
          transition: background-color 0.2s;
        }

        .step-line {
          background: linear-gradient(to bottom, rgba(180, 120, 60, 0.3), rgba(180, 120, 60, 0.05));
        }

        .story-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(210, 150, 80, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
      `}</style>

      <div className="coffee-page min-h-screen">

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden section-texture"
          style={{ backgroundColor: "#faf7f2" }}
        >
          {/* Subtle warm background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(210,160,80,0.10) 0%, transparent 70%)",
            }}
          />

          {/* Animated Pour SVG — decorative */}
          <div className="absolute right-[8%] top-[15%] opacity-30 hidden lg:block pointer-events-none">
            <svg width="80" height="140" viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Kettle spout suggestion */}
              <path d="M50 10 Q55 20 48 30" stroke="#b87333" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Pour stream */}
              <path
                className="pour-stream"
                d="M48 30 Q44 50 46 70 Q47 80 45 95"
                stroke="#b87333"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Water drop */}
              <ellipse className="pour-drop" cx="45" cy="30" rx="3" ry="4" fill="#b87333" opacity="0.7" />
              {/* Cup outline */}
              <path
                d="M28 100 Q27 120 35 128 Q45 134 55 128 Q63 120 62 100 Z"
                stroke="#b87333"
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
              />
              <line x1="25" y1="100" x2="65" y2="100" stroke="#b87333" strokeWidth="1.5" opacity="0.5" />
              {/* Ripple */}
              <circle className="pour-ripple" cx="45" cy="100" r="4" stroke="#b87333" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Left decorative pour */}
          <div className="absolute left-[8%] bottom-[20%] opacity-20 hidden lg:block pointer-events-none" style={{ transform: "scaleX(-1)" }}>
            <svg width="60" height="110" viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 Q55 20 48 30" stroke="#8b5e3c" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path
                className="pour-stream"
                d="M48 30 Q44 50 46 70 Q47 80 45 95"
                stroke="#8b5e3c"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                style={{ animationDelay: "1.2s" }}
              />
              <path d="M28 100 Q27 120 35 128 Q45 134 55 128 Q63 120 62 100 Z" stroke="#8b5e3c" strokeWidth="1.5" fill="none" opacity="0.6" />
              <line x1="25" y1="100" x2="65" y2="100" stroke="#8b5e3c" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
            {/* Eyebrow */}
            <p
              className="font-source text-xs font-semibold uppercase tracking-[0.28em] mb-8 hero-divider"
              style={{ color: "#b87333" }}
            >
              Sunrise Coffee Co.
            </p>

            {/* Headline */}
            <h1
              className="font-cormorant hero-headline mb-6 leading-[1.08]"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
                fontWeight: 300,
                color: "#1c1208",
                letterSpacing: "-0.01em",
              }}
            >
              Our Single-Origin
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>Selection</em>
            </h1>

            {/* Divider */}
            <div className="hero-divider flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16" style={{ backgroundColor: "rgba(184,115,51,0.35)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#b87333" }} />
              <div className="h-px w-16" style={{ backgroundColor: "rgba(184,115,51,0.35)" }} />
            </div>

            {/* Subline */}
            <p
              className="font-source hero-subline leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "#6b4f35",
                fontWeight: 300,
                letterSpacing: "0.01em",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Carefully sourced, beautifully roasted, intentionally poured.
              <br className="hidden sm:block" />
              Discover the story in every cup.
            </p>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-divider"
            style={{ opacity: 0.4 }}
          >
            <span className="font-source text-xs tracking-widest uppercase" style={{ color: "#8b5e3c" }}>
              Explore
            </span>
            <div
              className="w-px h-8"
              style={{
                background: "linear-gradient(to bottom, #b87333, transparent)",
              }}
            />
          </div>
        </section>

        {/* ─── MENU SHOWCASE ───────────────────────────────────── */}
        <section
          id="menu-showcase"
          className="py-28 px-6 section-texture"
          style={{ backgroundColor: "#f5f0e8" }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <FadeInUp delay={0}>
                <p
                  className="font-source text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                  style={{ color: "#b87333" }}
                >
                  Seasonal Selections
                </p>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h2
                  className="font-cormorant mb-5"
                  style={{
                    fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                    fontWeight: 300,
                    color: "#1c1208",
                    lineHeight: 1.1,
                  }}
                >
                  Current Rotation
                </h2>
              </FadeInUp>
              <FadeInUp delay={200}>
                <p
                  className="font-source max-w-md mx-auto"
                  style={{ color: "#7a5c3e", fontSize: "1.05rem", fontWeight: 300 }}
                >
                  Seasonal selections showcasing the best from our partner farms
                </p>
              </FadeInUp>
            </div>

            {/* Coffee Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffeeItems.map((item, i) => (
                <FadeInUp key={item.name} delay={i * 80}>
                  <div
                    className="card-hover rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: "#faf7f2",
                      border: "1px solid rgba(180,115,51,0.15)",
                    }}
                  >
                    {/* Card top accent */}
                    <div
                      className="h-1"
                      style={{
                        background:
                          item.roast === "Light"
                            ? "linear-gradient(90deg, #e8c99a, #d4a96a)"
                            : item.roast === "Medium"
                            ? "linear-gradient(90deg, #c07840, #a05e28)"
                            : "linear-gradient(90deg, #d4a060, #b07838)",
                      }}
                    />

                    <div className="p-7">
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{item.flag}</span>
                            <span
                              className={cn(
                                "font-source text-xs font-semibold px-2.5 py-0.5 rounded-full",
                                roastColorMap[item.roast] ?? "bg-stone-100 text-stone-700"
                              )}
                            >
                              {item.roast}
                            </span>
                          </div>
                          <h3
                            className="font-cormorant leading-tight mt-2"
                            style={{
                              fontSize: "1.45rem",
                              fontWeight: 400,
                              color: "#1c1208",
                            }}
                          >
                            {item.name}
                          </h3>
                        </div>
                        <div className="text-right flex-none">
                          <span
                            className="font-cormorant"
                            style={{ fontSize: "1.5rem", fontWeight: 500, color: "#b87333" }}
                          >
                            {item.price}
                          </span>
                        </div>
                      </div>

                      {/* Origin */}
                      <div className="flex items-center gap-2 mb-4">
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0C3.238 0 1 2.238 1 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.762-2.238-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
                            fill="#b87333"
                            opacity="0.7"
                          />
                        </svg>
                        <span
                          className="font-source text-sm"
                          style={{ color: "#8b6040", fontWeight: 400 }}
                        >
                          {item.origin}
                        </span>
                      </div>

                      {/* Divider */}
                      <div
                        className="mb-4"
                        style={{ height: "1px", backgroundColor: "rgba(180,115,51,0.12)" }}
                      />

                      {/* Tasting notes */}
                      <div>
                        <p
                          className="font-source text-xs uppercase tracking-widest mb-2"
                          style={{ color: "#b87333", opacity: 0.8 }}
                        >
                          Tasting Notes
                        </p>
                        <p
                          className="font-source"
                          style={{ color: "#4a3422", fontSize: "0.95rem", lineHeight: 1.6 }}
                        >
                          {item.notes}
                        </p>
                      </div>

                      {/* Intensity bar */}
                      <div className="mt-5 flex items-center gap-3">
                        <span
                          className="font-source text-xs"
                          style={{ color: "#a07850", letterSpacing: "0.05em" }}
                        >
                          Intensity
                        </span>
                        <div className="flex gap-1">
                          {[1, 2, 3].map((pip) => (
                            <div
                              key={pip}
                              className="intensity-pip w-5 h-1.5 rounded-full"
                              style={{
                                backgroundColor:
                                  pip <= item.intensity
                                    ? "#b87333"
                                    : "rgba(184,115,51,0.18)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Brewing method note */}
            <FadeInUp delay={200}>
              <div className="mt-16 text-center">
                <div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                  style={{
                    backgroundColor: "rgba(184,115,51,0.08)",
                    border: "1px solid rgba(184,115,51,0.2)",
                  }}
                >
                  <span className="text-lg">☕</span>
                  <span
                    className="font-source text-sm"
                    style={{ color: "#7a5c3e", fontWeight: 400 }}
                  >
                    All coffees prepared as hand-poured single-origin pour-over
                  </span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* ─── STORY / SOURCING PHILOSOPHY ─────────────────────── */}
        <section
          id="story"
          className="py-28 px-6"
          style={{ backgroundColor: "#faf7f2" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Image */}
              <FadeInUp delay={0}>
                <div
                  className="story-image-wrap relative rounded-2xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 24px 80px rgba(100,60,20,0.14), 0 4px 20px rgba(100,60,20,0.08)",
                  }}
                >
                  <img
                    src="https://source.unsplash.com/900x700/?coffee+farmer+harvest+origin+Africa"
                    alt="Coffee farmer tending to crops at a partner farm"
                    className="w-full object-cover warm-filter"
                    style={{ height: "clamp(360px, 50vw, 560px)" }}
                  />
                  {/* Warm overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(210,150,60,0.12) 0%, rgba(0,0,0,0.08) 60%, rgba(100,50,10,0.22) 100%)",
                    }}
                  />
                  {/* Caption badge */}
                  <div
                    className="absolute bottom-6 left-6 right-6 px-5 py-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(250,247,242,0.92)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(180,115,51,0.2)",
                    }}
                  >
                    <p
                      className="font-source text-xs"
                      style={{ color: "#7a5c3e", lineHeight: 1.5 }}
                    >
                      <span style={{ color: "#b87333", fontWeight: 600 }}>Direct trade.</span>{" "}
                      Every farm visited in person.
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {/* Text */}
              <div>
                <FadeInUp delay={100}>
                  <p
                    className="font-source text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                    style={{ color: "#b87333" }}
                  >
                    Our Sourcing Philosophy
                  </p>
                </FadeInUp>

                <FadeInUp delay={150}>
                  <h2
                    className="font-cormorant mb-8 leading-[1.1]"
                    style={{
                      fontSize: "clamp(2rem, 3.8vw, 3rem)",
                      fontWeight: 300,
                      color: "#1c1208",
                    }}
                  >
                    Every cup carries{" "}
                    <em style={{ fontStyle: "italic" }}>the story of the farmer</em>{" "}
                    who grew it.
                  </h2>
                </FadeInUp>

                <FadeInUp delay={200}>
                  <div
                    className="space-y-5 font-source"
                    style={{ color: "#5c4030", fontSize: "1.03rem", lineHeight: 1.8, fontWeight: 300 }}
                  >
                    <p>
                      We believe every cup of coffee carries the story of the farmer who grew it.
                      That&apos;s why we&apos;ve built direct relationships with small, ethical farms
                      across Africa and South America.
                    </p>
                    <p>
                      We visit our partner farms personally, understand their practices, and ensure
                      fair pricing that honors their work. When you order a pour-over at Sunrise
                      Coffee, you&apos;re not just purchasing a beverage — you&apos;re supporting
                      sustainable agriculture, generational farming families, and your own connection
                      to something real.
                    </p>
                    <p>
                      We rotate our selection seasonally, bringing you the best of each harvest.
                      Each origin has its own character, its own terroir. We&apos;re here to help
                      you discover it.
                    </p>
                  </div>
                </FadeInUp>

                {/* Pillars */}
                <FadeInUp delay={250}>
                  <div className="mt-10 grid grid-cols-3 gap-4">
                    {[
                      { icon: "⬡", label: "Direct Trade" },
                      { icon: "◌", label: "Sustainably Grown" },
                      { icon: "◈", label: "Traceable Origin" },
                    ].map((pillar) => (
                      <div
                        key={pillar.label}
                        className="text-center py-4 px-2 rounded-xl"
                        style={{
                          backgroundColor: "rgba(184,115,51,0.07)",
                          border: "1px solid rgba(184,115,51,0.15)",
                        }}
                      >
                        <div
                          className="text-xl mb-1.5"
                          style={{ color: "#b87333" }}
                        >
                          {pillar.icon}
                        </div>
                        <p
                          className="font-source text-xs font-semibold"
                          style={{ color: "#7a5030", letterSpacing: "0.04em" }}
                        >
                          {pillar.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ATMOSPHERIC IMAGE BAND ──────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ height: "clamp(280px, 40vw, 480px)" }}
          aria-hidden="true"
        >
          <img
            src="https://source.unsplash.com/1600x600/?pour+over+coffee+brewing+close-up+hands+ritual"
            alt=""
            className="absolute inset-0 w-full h-full object-cover warm-filter"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(250,247,242,0.25) 0%, rgba(0,0,0,0.3) 50%, rgba(28,18,8,0.55) 100%)",
            }}
          />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <p
              className="font-cormorant"
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                color: "rgba(250,247,242,0.88)",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "0.04em",
              }}
            >
              &ldquo;Not faster. Better.&rdquo;
            </p>
          </div>
        </section>

        {/* ─── PROCESS STEPS ───────────────────────────────────── */}
        <section
          id="process-steps"
          className="py-28 px-6 section-texture"
          style={{ backgroundColor: "#f5f0e8" }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <FadeInUp delay={0}>
                <p
                  className="font-source text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                  style={{ color: "#b87333" }}
                >
                  How We Brew
                </p>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h2
                  className="font-cormorant mb-5"
                  style={{
                    fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                    fontWeight: 300,
                    color: "#1c1208",
                    lineHeight: 1.1,
                  }}
                >
                  The Pour-Over Ritual
                </h2>
              </FadeInUp>
              <FadeInUp delay={200}>
                <p
                  className="font-source max-w-sm mx-auto"
                  style={{ color: "#7a5c3e", fontSize: "1.05rem", fontWeight: 300 }}
                >
                  Why we brew this way, and why it matters
                </p>
              </FadeInUp>
            </div>

            {/* Steps — vertical timeline */}
            <div className="relative">
              {/* Timeline spine */}
              <div
                className="absolute left-7 top-0 bottom-0 w-px hidden sm:block"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(184,115,51,0.4) 0%, rgba(184,115,51,0.1) 100%)",
                }}
              />

              <div className="space-y-0">
                {processSteps.map((step, i) => (
                  <FadeInUp key={step.step} delay={i * 100}>
                    <div
                      className="relative flex gap-8 sm:gap-12"
                      style={{ paddingBottom: i < processSteps.length - 1 ? "2.5rem" : 0 }}
                    >
                      {/* Number bubble */}
                      <div className="flex-none flex flex-col items-center">
                        <ShineBorder
                          borderRadius={9999}
                          borderWidth={1}
                          duration={4 + i * 0.5}
                          color={["#e8c99a", "#b87333", "#d4a060"]}
                          className="flex-none"
                        >
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
                            style={{ backgroundColor: "#faf7f2" }}
                          >
                            <span
                              className="font-cormorant"
                              style={{
                                fontSize: "1.4rem",
                                fontWeight: 400,
                                color: "#b87333",
                                lineHeight: 1,
                              }}
                            >
                              {step.step}
                            </span>
                          </div>
                        </ShineBorder>
                      </div>

                      {/* Content */}
                      <div
                        className="flex-1 pb-2"
                        style={{ paddingTop: "0.7rem" }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <h3
                            className="font-cormorant"
                            style={{
                              fontSize: "1.55rem",
                              fontWeight: 400,
                              color: "#1c1208",
                            }}
                          >
                            {step.title}
                          </h3>
                          <span
                            className="font-source text-sm"
                            style={{ color: "#b87333", opacity: 0.6 }}
                          >
                            {step.icon}
                          </span>
                        </div>
                        <p
                          className="font-source"
                          style={{
                            color: "#5c4030",
                            fontSize: "1rem",
                            lineHeight: 1.75,
                            fontWeight: 300,
                            maxWidth: "520px",
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Closing note */}
            <FadeInUp delay={200}>
              <div
                className="mt-20 text-center py-10 px-8 rounded-2xl"
                style={{
                  backgroundColor: "rgba(184,115,51,0.06)",
                  border: "1px solid rgba(184,115,51,0.18)",
                }}
              >
                <p
                  className="font-cormorant"
                  style={{
                    fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "#4a3020",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;A cup that reveals itself as it cools. Layers of flavor, clarity,
                  and connection to soil, sun, and hands that grew it.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3 mt-5">
                  <div className="h-px w-10" style={{ backgroundColor: "rgba(184,115,51,0.35)" }} />
                  <span
                    className="font-source text-xs uppercase tracking-widest"
                    style={{ color: "#b87333", opacity: 0.8 }}
                  >
                    Sunrise Coffee Co.
                  </span>
                  <div className="h-px w-10" style={{ backgroundColor: "rgba(184,115,51,0.35)" }} />
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

      </div>
    </>
  );
}
