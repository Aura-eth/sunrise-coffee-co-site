"use client";

import { useEffect, useRef, useState } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --font-heading: 'Playfair Display', Georgia, serif;
          --font-body: 'Inter', system-ui, sans-serif;
          --color-primary: #C85A17;
          --color-primary-dark: #A34510;
          --color-bg: #FAF7F2;
          --color-surface: #F3EDE3;
          --color-text: #2C1A0E;
          --color-muted: #7A6352;
          --color-accent: #C85A17;
          --color-border: #E5D9CC;
        }

        * { box-sizing: border-box; }

        body {
          background-color: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
        }

        .font-heading { font-family: var(--font-heading); }
        .font-body { font-family: var(--font-body); }

        .nav-glass {
          background: rgba(250, 247, 242, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(229, 217, 204, 0.8);
        }

        .nav-transparent {
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .hero-image-parallax {
          will-change: transform;
          transition: transform 0.1s linear;
        }

        .coffee-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }

        .coffee-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 30%;
          background: var(--color-accent);
          transition: height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 0 2px 2px 0;
        }

        .coffee-card:hover::before {
          height: 100%;
        }

        .coffee-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(44, 26, 14, 0.12);
        }

        .btn-primary {
          background: var(--color-primary);
          color: #fff;
          padding: 14px 32px;
          border-radius: 4px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }

        .btn-primary:hover {
          background: var(--color-primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(200, 90, 23, 0.3);
        }

        .btn-outline {
          background: transparent;
          color: var(--color-text);
          padding: 13px 32px;
          border-radius: 4px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
          border: 1.5px solid var(--color-text);
        }

        .btn-outline:hover {
          background: var(--color-text);
          color: var(--color-bg);
          transform: translateY(-1px);
        }

        .btn-outline-light {
          background: transparent;
          color: #fff;
          padding: 13px 32px;
          border-radius: 4px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.7);
        }

        .btn-outline-light:hover {
          background: rgba(255,255,255,0.15);
          border-color: #fff;
        }

        .icon-feature {
          transition: transform 0.3s ease;
        }

        .icon-feature:hover .icon-wrap {
          transform: scale(1.1);
          background: rgba(200, 90, 23, 0.15);
        }

        .icon-wrap {
          transition: all 0.3s ease;
        }

        .section-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-accent);
        }

        .quote-mark {
          font-family: var(--font-heading);
          font-size: 8rem;
          line-height: 0.6;
          color: var(--color-accent);
          opacity: 0.25;
          display: block;
          margin-bottom: 1.5rem;
        }

        .tasting-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-accent);
          margin: 0 6px;
          vertical-align: middle;
          opacity: 0.6;
        }

        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* NAV */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          navScrolled ? "nav-glass" : "nav-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="/"
            className="font-heading text-xl font-semibold tracking-wide"
            style={{
              color: navScrolled ? "var(--color-text)" : "#fff",
              textShadow: navScrolled ? "none" : "0 1px 8px rgba(0,0,0,0.3)",
              transition: "color 0.4s ease",
            }}
          >
            Sunrise Coffee Co.
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Our Story", href: "/story" },
              { label: "Coffees", href: "/coffee" },
              { label: "Brew Guide", href: "/brew" },
              { label: "Visit", href: "/visit" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70"
                style={{
                  color: navScrolled ? "var(--color-muted)" : "rgba(255,255,255,0.85)",
                  textShadow: navScrolled ? "none" : "0 1px 4px rgba(0,0,0,0.2)",
                  transition: "color 0.4s ease",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/visit"
              className="btn-primary"
              style={{ padding: "10px 22px", fontSize: "0.8rem" }}
            >
              Visit Us
            </a>
          </div>
          {/* Mobile menu icon */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded"
                style={{
                  background: navScrolled ? "var(--color-text)" : "#fff",
                  transition: "background 0.4s",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
      >
        {/* Left: Image with parallax */}
        <div
          ref={heroImageRef}
          className="relative min-h-[55vh] lg:min-h-screen overflow-hidden"
        >
          <div
            className="hero-image-parallax absolute inset-0 scale-110"
            style={{
              transform: `scale(1.1) translateY(${scrollY * 0.15}px)`,
            }}
          >
            <img
              src="https://source.unsplash.com/1200x1400/?pour+over+coffee+brewing+close-up+steam+morning+light"
              alt="Pour-over coffee brewing with steam rising"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Warm overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(44,26,14,0.25) 0%, rgba(200,90,23,0.1) 50%, rgba(44,26,14,0.4) 100%)",
            }}
          />
          {/* Steam/light accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background:
                "linear-gradient(to top, rgba(44,26,14,0.5), transparent)",
            }}
          />
          {/* Small label on image */}
          <div className="absolute bottom-8 left-8 lg:hidden">
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Scottsdale, AZ
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div
          ref={heroContentRef}
          className="relative flex items-center justify-center px-8 md:px-14 lg:px-16 py-24 lg:py-0"
          style={{
            background:
              "linear-gradient(160deg, #FAF7F2 0%, #F0E8DC 40%, #EAD9C5 100%)",
          }}
        >
          {/* Subtle parallax on content (opposite direction) */}
          <div
            className="max-w-lg w-full"
            style={{
              transform: `translateY(${scrollY * -0.04}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <FadeInUp delay={0}>
              <span className="section-label block mb-6">Scottsdale, Arizona</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1
                className="font-heading mb-6 leading-tight"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  color: "var(--color-text)",
                  fontWeight: 700,
                }}
              >
                Sunrise,
                <br />
                <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
                  Sip by Sip.
                </em>
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="mb-10 leading-relaxed"
                style={{
                  fontSize: "1.1rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                  maxWidth: "42ch",
                }}
              >
                Single-origin pour-overs, hand-crafted daily in Scottsdale. Each
                cup tells the story of where it came from.
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/visit" className="btn-primary" style={{ textAlign: "center" }}>
                  Visit Us
                </a>
                <a href="/coffee" className="btn-outline" style={{ textAlign: "center" }}>
                  Explore Our Coffees
                </a>
              </div>
            </FadeInUp>
            <FadeInUp delay={400}>
              <div
                className="mt-12 pt-10 flex gap-10"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                {[
                  { num: "12+", label: "Origins Monthly" },
                  { num: "100%", label: "Hand Poured" },
                  { num: "Farm\u2011to\u2011Cup", label: "Transparency" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="font-heading font-bold"
                      style={{ fontSize: "1.3rem", color: "var(--color-text)" }}
                    >
                      {stat.num}
                    </div>
                    <div
                      className="text-xs uppercase tracking-widest mt-1"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
          {/* Vertical text decoration */}
          <div
            className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
            style={{ writingMode: "vertical-rl" }}
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--color-border)", letterSpacing: "0.25em" }}
            >
              Est. 2018 · Scottsdale
            </span>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE SECTION */}
      <section
        id="atmosphere"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "65vh", minHeight: "420px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1800x900/?specialty+coffee+shop+interior+warm+wooden+tables+natural+light')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Multi-layer warm overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(44,26,14,0.72) 0%, rgba(44,26,14,0.45) 50%, rgba(44,26,14,0.65) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <FadeInUp delay={0}>
            <span
              className="block text-xs uppercase tracking-widest mb-5"
              style={{ color: "rgba(200,90,23,0.9)" }}
            >
              The Experience
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "#fff",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Where Craft Meets
              <br />
              <em style={{ color: "rgba(240,210,170,0.95)" }}>Community.</em>
            </h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div
              className="mx-auto mt-8"
              style={{
                width: "48px",
                height: "2px",
                background: "var(--color-accent)",
                opacity: 0.8,
              }}
            />
          </FadeInUp>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT SECTION */}
      <section
        id="feature-highlight"
        className="py-24 md:py-32 px-6"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <FadeInUp delay={0}>
              <span className="section-label block mb-4">What Sets Us Apart</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--color-text)",
                  fontWeight: 600,
                }}
              >
                The Sunrise Difference
              </h2>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
            {/* Feature 1 */}
            <FadeInUp delay={0}>
              <div className="icon-feature text-center md:text-left">
                <div
                  className="icon-wrap inline-flex items-center justify-center mb-6 rounded-2xl"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(200,90,23,0.08)",
                    border: "1px solid rgba(200,90,23,0.15)",
                  }}
                >
                  {/* Single origin icon - globe/pin */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="14" cy="14" r="11" />
                    <path d="M3 14h22" />
                    <path d="M14 3c-3.5 4-3.5 14 0 22" />
                    <path d="M14 3c3.5 4 3.5 14 0 22" />
                  </svg>
                </div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                  }}
                >
                  Single-Origin Sourcing
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--color-muted)",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                  }}
                >
                  Every coffee comes from a single farm, region, or micro-lot. We
                  know exactly where your beans come from.
                </p>
              </div>
            </FadeInUp>

            {/* Feature 2 */}
            <FadeInUp delay={100}>
              <div className="icon-feature text-center md:text-left">
                <div
                  className="icon-wrap inline-flex items-center justify-center mb-6 rounded-2xl"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(200,90,23,0.08)",
                    border: "1px solid rgba(200,90,23,0.15)",
                  }}
                >
                  {/* Pour-over icon */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 4h12l-3 10H11L8 4z" />
                    <path d="M11 14v6" />
                    <path d="M17 14v6" />
                    <ellipse cx="14" cy="22" rx="5" ry="2" />
                    <path d="M14 8v4" />
                    <path d="M11 8c1 1.5 3 1.5 6 0" />
                  </svg>
                </div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                  }}
                >
                  Hand-Pour Ritual
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--color-muted)",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                  }}
                >
                  No espresso machines. Each cup is poured by hand over ceramic,
                  bringing intention to every brew.
                </p>
              </div>
            </FadeInUp>

            {/* Feature 3 */}
            <FadeInUp delay={200}>
              <div className="icon-feature text-center md:text-left">
                <div
                  className="icon-wrap inline-flex items-center justify-center mb-6 rounded-2xl"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(200,90,23,0.08)",
                    border: "1px solid rgba(200,90,23,0.15)",
                  }}
                >
                  {/* Transparency/document icon */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="3" width="18" height="22" rx="2" />
                    <path d="M9 9h10" />
                    <path d="M9 13h10" />
                    <path d="M9 17h6" />
                    <circle cx="21" cy="21" r="4" fill="var(--color-bg)" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <path d="M21 19.5v1.5l1 1" />
                  </svg>
                </div>
                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                  }}
                >
                  Complete Transparency
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "var(--color-muted)",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                  }}
                >
                  Farm details, altitude, processing method, roast date—we tell
                  you everything about your coffee.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* MENU SHOWCASE SECTION */}
      <section
        id="menu-showcase"
        className="py-24 md:py-32 px-6"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5">
            <FadeInUp delay={0}>
              <span className="section-label block mb-4">Single Origin</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--color-text)",
                  fontWeight: 600,
                }}
              >
                This Month&#39;s Featured Origins
              </h2>
            </FadeInUp>
            <FadeInUp delay={150}>
              <p
                className="mt-4 max-w-xl mx-auto"
                style={{
                  color: "var(--color-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                Carefully selected single-origin coffees, freshly roasted
              </p>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                origin: "Ethiopia, Yirgacheffe",
                country: "Ethiopia",
                notes: "Floral, berry, bright acidity",
                brewing: "Pour-over recommended",
                img: "https://source.unsplash.com/600x400/?ethiopia+coffee+farm+landscape",
              },
              {
                origin: "Colombia, Geisha",
                country: "Colombia",
                notes: "Chocolate, stone fruit, balanced",
                brewing: "Pour-over or French press",
                img: "https://source.unsplash.com/600x400/?colombia+coffee+beans+farm",
              },
              {
                origin: "Kenya, AA Grade",
                country: "Kenya",
                notes: "Citrus, black tea, crisp finish",
                brewing: "Pour-over ideal",
                img: "https://source.unsplash.com/600x400/?kenya+coffee+plantation",
              },
              {
                origin: "Guatemala, Huehuetenango",
                country: "Guatemala",
                notes: "Nutty, caramel, full body",
                brewing: "Pour-over or immersion",
                img: "https://source.unsplash.com/600x400/?guatemala+coffee+mountain",
              },
            ].map((item, i) => (
              <FadeInUp key={item.origin} delay={i * 80}>
                <div
                  className="coffee-card rounded-xl overflow-hidden"
                  style={{
                    background: "#fff",
                    boxShadow: "0 4px 24px rgba(44,26,14,0.07)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={item.img}
                      alt={item.origin}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(44,26,14,0.5) 0%, transparent 60%)",
                      }}
                    />
                    <span
                      className="absolute bottom-3 left-5 text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {item.country}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3
                      className="font-heading mb-3"
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.origin}
                    </h3>
                    <div
                      className="mb-3 pb-3"
                      style={{ borderBottom: "1px solid var(--color-border)" }}
                    >
                      {item.notes.split(", ").map((note, ni) => (
                        <span key={note}>
                          {ni > 0 && <span className="tasting-dot" />}
                          <span
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--color-muted)",
                            }}
                          >
                            {note}
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                      >
                        <path d="M2 6h8" />
                        <path d="M8 3l3 3-3 3" />
                      </svg>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-accent)",
                          fontWeight: 500,
                        }}
                      >
                        {item.brewing}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={200}>
            <div className="text-center mt-14">
              <a href="/coffee" className="btn-primary">
                View Full Menu
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* SECOND ATMOSPHERE / VISUAL BREAK */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: "var(--color-text)" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              img: "https://source.unsplash.com/600x400/?barista+pouring+coffee+pour-over+ceramic",
              label: "The Pour",
            },
            {
              img: "https://source.unsplash.com/600x400/?coffee+beans+close+up+roasted",
              label: "The Beans",
            },
            {
              img: "https://source.unsplash.com/600x400/?coffee+shop+morning+light+community",
              label: "The Moment",
            },
          ].map((item, i) => (
            <FadeInUp key={item.label} delay={i * 100}>
              <div className="relative overflow-hidden group" style={{ height: "280px" }}>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(44,26,14,0.7) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="font-heading italic"
                    style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.2rem" }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section
        id="social-proof"
        className="py-24 md:py-36 px-6"
        style={{
          background:
            "linear-gradient(135deg, #F5EDE0 0%, #EDE0CE 50%, #F0E6D6 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp delay={0}>
            <span className="section-label block mb-6">Loved by Our Community</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <span className="quote-mark">&ldquo;</span>
          </FadeInUp>
          <FadeInUp delay={150}>
            <ShineBorder
              borderRadius={16}
              borderWidth={1}
              duration={8}
              color={["#C85A17", "#E8A87C", "#C85A17"]}
            >
              <div
                className="px-8 md:px-14 py-10 md:py-14"
                style={{ background: "rgba(250,247,242,0.7)" }}
              >
                <blockquote
                  className="font-heading"
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--color-text)",
                    lineHeight: 1.65,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Coming here isn&#39;t just about great coffee—it&#39;s about
                  being present for 15 minutes. The whole ritual has changed how
                  I start my day.
                </blockquote>
                <div
                  className="mt-8 flex items-center justify-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden flex-none"
                    style={{ border: "2px solid var(--color-accent)" }}
                  >
                    <img
                      src="https://source.unsplash.com/80x80/?portrait+woman+smile"
                      alt="Sarah M."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div
                      className="font-semibold"
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--color-text)",
                      }}
                    >
                      Sarah M.
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-muted)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Regular · Scottsdale
                    </div>
                  </div>
                </div>
              </div>
            </ShineBorder>
          </FadeInUp>

          <FadeInUp delay={250}>
            <div className="mt-12">
              <a
                href="/visit"
                className="btn-primary"
                style={{ marginRight: "16px" }}
              >
                Visit Us
              </a>
              <a href="/coffee" className="btn-outline">
                Our Story
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="pt-16 pb-8 px-6"
        style={{ background: "var(--color-text)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div
                className="font-heading text-2xl font-semibold mb-4"
                style={{ color: "#fff" }}
              >
                Sunrise Coffee Co.
              </div>
              <p
                className="leading-relaxed mb-6"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.9rem",
                  maxWidth: "36ch",
                  lineHeight: 1.7,
                }}
              >
                Single-origin pour-overs, hand-crafted daily in Scottsdale. A
                ritual worth waking up for.
              </p>
              <div className="flex gap-4">
                {["Instagram", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-100"
                    style={{ color: "rgba(255,255,255,0.45)", opacity: 0.6 }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4
                className="text-xs uppercase tracking-widest font-semibold mb-5"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Our Story", href: "/story" },
                  { label: "Coffees", href: "/coffee" },
                  { label: "Brew Guide", href: "/brew" },
                  { label: "Visit Us", href: "/visit" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-100"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="text-xs uppercase tracking-widest font-semibold mb-5"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Visit
              </h4>
              <div className="space-y-3">
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}
                >
                  123 Old Town Dr<br />Scottsdale, AZ 85251
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}
                >
                  Mon–Fri: 6am – 4pm<br />Sat–Sun: 7am – 3pm
                </p>
              </div>
            </div>
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              &copy; {new Date().getFullYear()} Sunrise Coffee Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-opacity hover:opacity-70"
                  style={{ color: "rgba(255,255,255,0.3)" }}
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
