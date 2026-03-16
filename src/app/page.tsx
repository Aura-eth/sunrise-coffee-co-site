"use client";

import { useState, useEffect, useRef } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setHeroOffset(window.scrollY * 0.35);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        :root {
          --font-heading: 'Crimson Pro', Georgia, serif;
          --font-body: 'Source Sans 3', system-ui, sans-serif;
        }

        body {
          font-family: var(--font-body);
          background-color: #FAF7F2;
          color: #2C1A0E;
        }

        .heading-font { font-family: var(--font-heading); }
        .body-font { font-family: var(--font-body); }

        .gradient-underline {
          background: linear-gradient(90deg, #D4A574, #C85A17);
          background-repeat: no-repeat;
          background-size: 100% 3px;
          background-position: 0 100%;
          padding-bottom: 4px;
        }

        .hero-gradient-left {
          background: linear-gradient(135deg, #2C1A0E 0%, #4A2C1A 40%, #6B3A1F 70%, #8B4A2A 100%);
        }

        .card-flip-container {
          perspective: 1000px;
        }

        .card-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .card-flip-container:hover .card-flip-inner {
          transform: rotateY(180deg);
        }

        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
        }

        .card-back {
          transform: rotateY(180deg);
        }

        .coffee-accent {
          color: #C85A17;
        }

        .warm-border {
          border-color: #D4A574;
        }

        .atmosphere-text-shadow {
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .shimmer-line {
          background: linear-gradient(90deg, #D4A574 0%, #C85A17 50%, #D4A574 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          height: 1px;
          width: 60px;
        }

        .nav-link {
          position: relative;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #D4A574, #C85A17);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .feature-icon-wrap {
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.15), rgba(200, 90, 23, 0.1));
          border: 1px solid rgba(212, 165, 116, 0.3);
        }

        .quote-mark {
          font-family: var(--font-heading);
          font-size: 8rem;
          line-height: 0.6;
          color: #D4A574;
          opacity: 0.4;
          font-style: italic;
        }
      `}</style>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250, 247, 242, 0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212, 165, 116, 0.2)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <a
            href="/"
            className="heading-font text-2xl font-semibold tracking-wide"
            style={{ color: scrolled ? "#2C1A0E" : "#FAF7F2" }}
          >
            Sunrise Coffee Co.
          </a>
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Our Coffee", href: "/coffee" },
              { label: "The Craft", href: "/craft" },
              { label: "About", href: "/about" },
              { label: "Visit", href: "/visit" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{ color: scrolled ? "#4A2C1A" : "rgba(250, 247, 242, 0.85)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/coffee"
              className="px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 rounded-full"
              style={{
                background: "linear-gradient(135deg, #D4A574, #C85A17)",
                color: "#FAF7F2",
              }}
            >
              Explore Coffee
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            style={{ color: scrolled ? "#2C1A0E" : "#FAF7F2" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left: Text side */}
        <div className="hero-gradient-left flex items-center px-8 md:px-16 py-32 lg:py-0 order-2 lg:order-1 relative">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="max-w-lg relative z-10">
            <FadeInUp delay={0}>
              <span
                className="body-font text-xs font-semibold uppercase tracking-widest mb-6 block"
                style={{ color: "#D4A574" }}
              >
                Single-Origin Pour-Over Coffee
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1
                className="heading-font text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                style={{ color: "#FAF7F2" }}
              >
                Every Cup{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(90deg, #D4A574, #C85A17)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Tells a Story
                </span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="shimmer-line mb-8" />
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="body-font text-lg leading-relaxed mb-10"
                style={{ color: "rgba(250, 247, 242, 0.75)" }}
              >
                Single-origin pour-overs crafted with intention. From farm to your hand, we honor the origin of every bean.
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/coffee"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #D4A574, #C85A17)",
                    color: "#FAF7F2",
                    boxShadow: "0 4px 24px rgba(200, 90, 23, 0.3)",
                  }}
                >
                  Explore Our Coffee
                </a>
                <a
                  href="/craft"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:bg-white/10"
                  style={{
                    border: "1px solid rgba(212, 165, 116, 0.5)",
                    color: "#D4A574",
                  }}
                >
                  Learn the Craft
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Right: Image side */}
        <div className="relative min-h-[50vh] lg:min-h-screen overflow-hidden order-1 lg:order-2">
          <div
            style={{
              position: "absolute",
              inset: "-20%",
              transform: `translateY(${heroOffset * 0.3}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <img
              src="https://source.unsplash.com/1200x1600/?single+origin+coffee+pour+over+close+up+golden+light"
              alt="Barista pouring single-origin pour-over coffee in golden light"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          {/* Gradient overlay blending to left side */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: "linear-gradient(to top, rgba(44, 26, 14, 0.7) 0%, transparent 60%)",
            }}
          />
          {/* Right edge fade for seamless join on desktop */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background: "linear-gradient(to right, rgba(44, 26, 14, 0.15) 0%, transparent 30%)",
            }}
          />
          {/* Golden overlay for warmth */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, transparent 60%)",
            }}
          />
        </div>
      </section>

      {/* ATMOSPHERE SECTION */}
      <section id="atmosphere" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          style={{
            position: "absolute",
            inset: "-15%",
            backgroundImage: `url(https://source.unsplash.com/1800x1200/?artisanal+coffee+roastery+interior+warm+wooden+aesthetic)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${heroOffset * 0.15}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        {/* Dark warm overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(20, 10, 5, 0.5) 0%, rgba(44, 26, 14, 0.55) 50%, rgba(20, 10, 5, 0.65) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <FadeInUp delay={0}>
            <p
              className="heading-font atmosphere-text-shadow text-4xl md:text-5xl lg:text-6xl font-light italic"
              style={{ color: "rgba(250, 247, 242, 0.92)" }}
            >
              Where precision meets ritual
            </p>
          </FadeInUp>
          <FadeInUp delay={100}>
            <div
              className="mx-auto mt-6"
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #D4A574, transparent)",
              }}
            />
          </FadeInUp>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT SECTION */}
      <section id="features" className="py-28 md:py-36 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <span
                className="body-font text-xs font-semibold uppercase tracking-widest mb-4 block coffee-accent"
              >
                Our Philosophy
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6" style={{ color: "#2C1A0E" }}>
                <span className="gradient-underline">Why Single-Origin Pour-Overs</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div
                className="mx-auto mt-4"
                style={{
                  width: "60px",
                  height: "2px",
                  background: "linear-gradient(90deg, #D4A574, #C85A17)",
                }}
              />
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                title: "Single-Origin Sourcing",
                description: "Each coffee comes from a single farm or region, allowing you to taste the unique terroir and character of its origin.",
                delay: 0,
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                ),
                title: "Hand-Poured Ritual",
                description: "No shortcuts. We pour every cup by hand, controlling temperature, timing, and technique to unlock the full potential of the bean.",
                delay: 100,
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
                title: "Transparent Traceability",
                description: "Know exactly where your coffee comes from—the farmer, the altitude, the harvest date. We believe you deserve that story.",
                delay: 200,
              },
            ].map((feature) => (
              <FadeInUp key={feature.title} delay={feature.delay}>
                <div className="text-center group">
                  <div
                    className="feature-icon-wrap w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ color: "#C85A17" }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className="heading-font text-2xl font-semibold mb-4"
                    style={{ color: "#2C1A0E" }}
                  >
                    {feature.title}
                  </h3>
                  <div
                    className="mx-auto mb-4"
                    style={{
                      width: "32px",
                      height: "2px",
                      background: "linear-gradient(90deg, #D4A574, #C85A17)",
                    }}
                  />
                  <p
                    className="body-font text-base leading-relaxed"
                    style={{ color: "#6B4C3B" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* MENU SHOWCASE SECTION */}
      <section id="menu" className="py-28 md:py-36 px-6" style={{ backgroundColor: "#F2EBE0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <FadeInUp delay={0}>
              <span
                className="body-font text-xs font-semibold uppercase tracking-widest mb-4 block coffee-accent"
              >
                Seasonal Rotation
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4" style={{ color: "#2C1A0E" }}>
                <span className="gradient-underline">Currently Available</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="body-font text-base md:text-lg" style={{ color: "#6B4C3B" }}>
                Our rotation changes seasonally. These are what we&apos;re pouring this month.
              </p>
            </FadeInUp>
          </div>

          <FadeInUp delay={100}>
            <div
              className="mx-auto mt-2 mb-16"
              style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(90deg, #D4A574, #C85A17)",
              }}
            />
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Ethiopian Yirgacheffe",
                origin: "Gedeo Zone, Ethiopia",
                notes: "Blueberry, jasmine, bright acidity",
                price: "$6",
                altitude: "1,750–2,200m",
                roastDate: "Nov 12, 2024",
                process: "Washed",
                delay: 0,
                imageQuery: "coffee+farm+highlands+morning+mist+origin",
              },
              {
                name: "Colombian Geisha",
                origin: "Panama, Boquete Region",
                notes: "Floral, tropical fruit, silky body",
                price: "$7",
                altitude: "1,500–1,900m",
                roastDate: "Nov 14, 2024",
                process: "Natural",
                delay: 100,
                imageQuery: "specialty+coffee+shop+counter+aesthetic",
              },
              {
                name: "Kenyan AA",
                origin: "Mount Kenya, Central Highlands",
                notes: "Black currant, citrus, wine-like complexity",
                price: "$6.50",
                altitude: "1,700–2,100m",
                roastDate: "Nov 10, 2024",
                process: "Washed",
                delay: 200,
                imageQuery: "coffee+beans+roasted+medium+brown+detailed+texture",
              },
              {
                name: "Natural Process Anaerobic",
                origin: "Costa Rica, San Isidro",
                notes: "Fermented berry, chocolate, full body",
                price: "$7.50",
                altitude: "1,400–1,800m",
                roastDate: "Nov 16, 2024",
                process: "Anaerobic Natural",
                delay: 200,
                imageQuery: "hands+pouring+pour+over+coffee+ritual+focused",
              },
            ].map((item) => (
              <FadeInUp key={item.name} delay={item.delay}>
                <div className="card-flip-container" style={{ height: "360px" }}>
                  <div className="card-flip-inner">
                    {/* Card Front */}
                    <div
                      className="card-front flex flex-col"
                      style={{ backgroundColor: "#FAF7F2", border: "1px solid rgba(212, 165, 116, 0.25)" }}
                    >
                      {/* Image area */}
                      <div className="relative h-40 overflow-hidden rounded-t-2xl">
                        <img
                          src={`https://source.unsplash.com/400x300/?${item.imageQuery}`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: "linear-gradient(to top, rgba(44, 26, 14, 0.6) 0%, transparent 60%)" }}
                        />
                        <div
                          className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: "linear-gradient(135deg, #D4A574, #C85A17)",
                            color: "#FAF7F2",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {item.price}
                        </div>
                      </div>
                      {/* Content area */}
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          <h3
                            className="heading-font text-lg font-semibold mb-1 leading-snug"
                            style={{ color: "#2C1A0E" }}
                          >
                            {item.name}
                          </h3>
                          <p
                            className="body-font text-xs uppercase tracking-wide mb-3"
                            style={{ color: "#C85A17" }}
                          >
                            {item.origin}
                          </p>
                          <p
                            className="body-font text-sm italic leading-relaxed"
                            style={{ color: "#6B4C3B" }}
                          >
                            {item.notes}
                          </p>
                        </div>
                        <div
                          className="mt-3 pt-3 text-xs body-font"
                          style={{
                            borderTop: "1px solid rgba(212, 165, 116, 0.2)",
                            color: "rgba(107, 76, 59, 0.6)",
                          }}
                        >
                          Hover to discover details →
                        </div>
                      </div>
                    </div>

                    {/* Card Back */}
                    <div
                      className="card-back flex flex-col justify-center p-7"
                      style={{
                        background: "linear-gradient(135deg, #2C1A0E 0%, #4A2C1A 100%)",
                      }}
                    >
                      <div
                        className="mb-4"
                        style={{
                          width: "32px",
                          height: "2px",
                          background: "linear-gradient(90deg, #D4A574, #C85A17)",
                        }}
                      />
                      <h3
                        className="heading-font text-xl font-semibold mb-5"
                        style={{ color: "#FAF7F2" }}
                      >
                        {item.name}
                      </h3>
                      <div className="space-y-3">
                        {[
                          { label: "Origin", value: item.origin },
                          { label: "Altitude", value: item.altitude },
                          { label: "Process", value: item.process },
                          { label: "Roasted", value: item.roastDate },
                          { label: "Tasting Notes", value: item.notes },
                        ].map((detail) => (
                          <div key={detail.label}>
                            <span
                              className="body-font text-xs uppercase tracking-widest block mb-0.5"
                              style={{ color: "#D4A574" }}
                            >
                              {detail.label}
                            </span>
                            <span
                              className="body-font text-sm"
                              style={{ color: "rgba(250, 247, 242, 0.85)" }}
                            >
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(212, 165, 116, 0.2)" }}>
                        <span
                          className="heading-font text-2xl font-bold"
                          style={{
                            background: "linear-gradient(90deg, #D4A574, #C85A17)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={200}>
            <div className="text-center mt-14">
              <a
                href="/coffee"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid rgba(200, 90, 23, 0.4)",
                  color: "#C85A17",
                  backgroundColor: "transparent",
                }}
              >
                View Full Menu
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section id="social-proof" className="relative py-28 md:py-36 px-6 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://source.unsplash.com/1800x900/?specialty+coffee+shop+counter+Scottsdale+aesthetic"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(20, 10, 5, 0.92) 0%, rgba(44, 26, 14, 0.88) 50%, rgba(20, 10, 5, 0.92) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <span
                className="body-font text-xs font-semibold uppercase tracking-widest block mb-4"
                style={{ color: "#D4A574" }}
              >
                What Our Community Says
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div
                className="mx-auto"
                style={{
                  width: "60px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #D4A574, transparent)",
                }}
              />
            </FadeInUp>
          </div>

          <FadeInUp delay={100}>
            <div className="relative text-center">
              {/* Large quote mark */}
              <div
                className="quote-mark absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <ShineBorder
                borderRadius={20}
                borderWidth={1}
                duration={8}
                color={["#D4A574", "#C85A17", "#D4A574"]}
              >
                <div className="p-10 md:p-14 rounded-2xl" style={{ backgroundColor: "rgba(20, 10, 5, 0.6)" }}>
                  <blockquote
                    className="heading-font text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-10"
                    style={{ color: "rgba(250, 247, 242, 0.92)" }}
                  >
                    I came for the coffee, but I stayed for the education. Every visit, the baristas teach me something new about the bean, the origin, the technique. This is coffee as an experience, not a commodity.
                  </blockquote>
                  <div className="flex items-center justify-center gap-5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                      style={{
                        background: "linear-gradient(135deg, #D4A574, #C85A17)",
                        color: "#FAF7F2",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      S
                    </div>
                    <div className="text-left">
                      <div
                        className="body-font font-semibold text-sm tracking-wide"
                        style={{ color: "rgba(250, 247, 242, 0.9)" }}
                      >
                        Sarah M.
                      </div>
                      <div
                        className="body-font text-xs mt-0.5"
                        style={{ color: "#D4A574" }}
                      >
                        Scottsdale, AZ
                      </div>
                    </div>
                    <div
                      className="flex gap-1 ml-2"
                      style={{ color: "#D4A574" }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </ShineBorder>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FOOTER CTA BAND */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <p
              className="body-font text-xs font-semibold uppercase tracking-widest mb-4 coffee-accent"
            >
              Come Find Us
            </p>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="heading-font text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#2C1A0E" }}
            >
              Ready to Experience the Ritual?
            </h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p
              className="body-font text-lg mb-10 leading-relaxed"
              style={{ color: "#6B4C3B" }}
            >
              Visit us in Scottsdale. Watch the pour. Ask about the origin. Stay a while.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/visit"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #D4A574, #C85A17)",
                  color: "#FAF7F2",
                  boxShadow: "0 4px 24px rgba(200, 90, 23, 0.25)",
                }}
              >
                Plan Your Visit
              </a>
              <a
                href="/coffee"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
                style={{
                  border: "1px solid rgba(200, 90, 23, 0.3)",
                  color: "#C85A17",
                }}
              >
                Browse the Menu
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#2C1A0E" }} className="pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3
                className="heading-font text-2xl font-semibold mb-4"
                style={{ color: "#FAF7F2" }}
              >
                Sunrise Coffee Co.
              </h3>
              <p
                className="body-font text-sm leading-relaxed mb-4"
                style={{ color: "rgba(250, 247, 242, 0.55)" }}
              >
                Single-origin pour-over coffee, brewed with intention in Scottsdale, Arizona. We believe every cup deserves a story.
              </p>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, #D4A574, #C85A17)",
                }}
              />
            </div>
            <div>
              <h4
                className="body-font text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "#D4A574" }}
              >
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Our Coffee", href: "/coffee" },
                  { label: "The Craft", href: "/craft" },
                  { label: "About Us", href: "/about" },
                  { label: "Visit", href: "/visit" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="body-font text-sm transition-colors duration-200 hover:text-amber-300"
                      style={{ color: "rgba(250, 247, 242, 0.55)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="body-font text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "#D4A574" }}
              >
                Visit Us
              </h4>
              <div className="space-y-2">
                <p className="body-font text-sm" style={{ color: "rgba(250, 247, 242, 0.55)" }}>
                  123 Old Town Lane<br />Scottsdale, AZ 85251
                </p>
                <p className="body-font text-sm" style={{ color: "rgba(250, 247, 242, 0.55)" }}>
                  Mon–Fri: 6am – 4pm<br />Sat–Sun: 7am – 5pm
                </p>
              </div>
            </div>
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(212, 165, 116, 0.15)" }}
          >
            <p className="body-font text-xs" style={{ color: "rgba(250, 247, 242, 0.3)" }}>
              &copy; 2024 Sunrise Coffee Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Instagram"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="body-font text-xs transition-colors duration-200 hover:text-amber-300"
                  style={{ color: "rgba(250, 247, 242, 0.3)" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
