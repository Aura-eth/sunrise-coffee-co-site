"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [pourProgress, setPourProgress] = useState(0);
  const pourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      if (pourRef.current) {
        const rect = pourRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;
        const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH * 0.7)));
        setPourProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        :root {
          --font-heading: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Source Sans 3', system-ui, sans-serif;
          --color-primary: #7c4a2d;
          --color-secondary: #c8855a;
          --color-accent: #e8a87c;
          --color-bg: #faf6f1;
          --color-text: #2a1f16;
          --color-surface: #f2ebe0;
          --color-muted: #8a7266;
        }

        html { scroll-behavior: smooth; }

        body {
          background-color: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
        }

        .heading {
          font-family: var(--font-heading);
        }

        .warm-overlay {
          background: linear-gradient(135deg, rgba(124,74,45,0.15) 0%, rgba(232,168,124,0.08) 100%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .golden-filter {
          filter: sepia(20%) saturate(1.2) brightness(1.05);
        }

        .nav-link {
          position: relative;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-secondary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after { width: 100%; }

        .btn-primary {
          display: inline-block;
          padding: 0.9rem 2.2rem;
          background: var(--color-primary);
          color: #faf6f1;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .btn-primary:hover {
          background: #5a3520;
          transform: translateY(-1px);
        }

        .btn-secondary {
          display: inline-block;
          padding: 0.9rem 2.2rem;
          background: transparent;
          color: var(--color-primary);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1.5px solid var(--color-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: var(--color-primary);
          color: #faf6f1;
          transform: translateY(-1px);
        }

        .btn-light {
          display: inline-block;
          padding: 0.9rem 2.2rem;
          background: #faf6f1;
          color: var(--color-primary);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .btn-light:hover {
          background: var(--color-accent);
          transform: translateY(-1px);
        }

        .testimonial-card {
          background: #faf6f1;
          border: 1px solid rgba(124,74,45,0.12);
          border-radius: 4px;
          padding: 2.5rem;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(124,74,45,0.12);
        }

        .pour-svg path.stream {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(200,133,90,0.15), rgba(124,74,45,0.08));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .section-divider {
          width: 48px;
          height: 2px;
          background: var(--color-secondary);
          margin: 1.25rem 0;
        }

        .section-divider-center {
          width: 48px;
          height: 2px;
          background: var(--color-secondary);
          margin: 1.25rem auto;
        }

        .textured-bg {
          background-color: var(--color-surface);
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237c4a2d' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .star-fill { color: #c8855a; }
      `}</style>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250,246,241,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124,74,45,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <a
            href="/"
            className="heading text-xl font-medium tracking-wide"
            style={{ color: scrolled ? "var(--color-text)" : "#faf6f1" }}
          >
            Sunrise Coffee Co.
          </a>
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Coffee", href: "/menu" },
              { label: "Our Story", href: "/about" },
              { label: "Visit", href: "#visit" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{ color: scrolled ? "var(--color-text)" : "rgba(250,246,241,0.9)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/menu"
            className="hidden md:block"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.6rem 1.5rem",
              borderRadius: "2px",
              textDecoration: "none",
              background: scrolled ? "var(--color-primary)" : "rgba(250,246,241,0.15)",
              color: "#faf6f1",
              border: scrolled ? "none" : "1.5px solid rgba(250,246,241,0.5)",
              backdropFilter: scrolled ? "none" : "blur(8px)",
              transition: "all 0.3s ease",
            }}
          >
            Explore Coffee
          </a>
        </div>
      </nav>

      {/* HERO — split-content */}
      <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: text */}
        <div
          className="flex items-center px-8 md:px-14 lg:px-20 py-32 lg:py-0 order-2 lg:order-1"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="max-w-xl">
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-secondary)",
                marginBottom: "1.5rem",
                display: "block",
                animation: "fadeSlideUp 0.8s ease 0.1s both",
              }}
            >
              Scottsdale, Arizona · Single-Origin Specialty
            </div>
            <h1
              className="heading"
              style={{
                fontSize: "clamp(3rem, 5vw, 4.75rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: "var(--color-text)",
                marginBottom: "1.75rem",
                animation: "fadeSlideUp 0.8s ease 0.2s both",
              }}
            >
              Mornings Begin
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>with Intention</em>
            </h1>
            <div className="section-divider" style={{ animation: "fadeSlideUp 0.8s ease 0.3s both" }} />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                lineHeight: 1.75,
                color: "var(--color-muted)",
                marginBottom: "2.5rem",
                fontWeight: 300,
                animation: "fadeSlideUp 0.8s ease 0.4s both",
              }}
            >
              Single-origin pour-overs crafted with precision and purpose.
              Every cup tells a story from seed to sunrise.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "fadeSlideUp 0.8s ease 0.5s both" }}
            >
              <a href="/menu" className="btn-primary" style={{ textAlign: "center" }}>
                Explore Our Coffee
              </a>
              <a href="#visit" className="btn-secondary" style={{ textAlign: "center" }}>
                Visit Us
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: image */}
        <div className="relative min-h-[55vh] lg:min-h-screen order-1 lg:order-2 overflow-hidden">
          <img
            src="https://source.unsplash.com/1200x1400/?sunrise,mountain,desert,landscape,golden,hour"
            alt="Sunrise over mountain desert landscape"
            className="absolute inset-0 w-full h-full object-cover golden-filter"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(42,31,22,0.25) 0%, rgba(42,31,22,0.1) 50%, rgba(42,31,22,0.4) 100%)",
            }}
          />
          <div className="warm-overlay absolute inset-0" />
          {/* Floating badge */}
          <div
            className="absolute bottom-10 left-10 hidden lg:block"
            style={{
              background: "rgba(250,246,241,0.92)",
              backdropFilter: "blur(12px)",
              borderRadius: "4px",
              padding: "1.25rem 1.75rem",
              borderLeft: "3px solid var(--color-secondary)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                marginBottom: "0.25rem",
              }}
            >
              Current Origin
            </div>
            <div
              className="heading"
              style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--color-text)" }}
            >
              Ethiopia Yirgacheffe
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--color-muted)",
                marginTop: "0.15rem",
              }}
            >
              Jasmine · Bergamot · Stone Fruit
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT */}
      <section
        id="why-sunrise"
        className="py-28 md:py-36 px-6"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-secondary)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Our Philosophy
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="heading"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--color-text)",
                }}
              >
                Why Sunrise Coffee
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="section-divider-center" style={{ marginTop: "1.25rem" }} />
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="3" fill="var(--color-accent)" fillOpacity="0.4" />
                  </svg>
                ),
                title: "Single-Origin Excellence",
                description:
                  "We source directly from small farms across Africa and South America, ensuring traceability from soil to cup.",
                delay: 0,
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                ),
                title: "The Pour-Over Ritual",
                description:
                  "More than a brewing method—a meditation. We've refined the craft so you experience the full complexity of each origin.",
                delay: 150,
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "A Third Place",
                description:
                  "Not your home. Not your office. A warm, welcoming space designed for connection, focus, and community.",
                delay: 300,
              },
            ].map((feature) => (
              <FadeInUp key={feature.title} delay={feature.delay}>
                <div className="text-center md:text-left">
                  <div className="feature-icon-wrap mx-auto md:mx-0">
                    {feature.icon}
                  </div>
                  <h3
                    className="heading"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: "var(--color-text)",
                      marginBottom: "1rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      color: "var(--color-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Pour animation accent */}
          <div ref={pourRef} className="flex justify-center mt-24">
            <svg
              width="120"
              height="160"
              viewBox="0 0 120 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Dripper cone outline */}
              <path
                d="M20 20 L60 110 L100 20 Z"
                stroke="rgba(124,74,45,0.2)"
                strokeWidth="1.5"
                fill="rgba(200,133,90,0.05)"
              />
              {/* Stream */}
              <path
                className="stream"
                d="M60 110 Q58 125 60 140 Q62 150 60 155"
                stroke="var(--color-secondary)"
                strokeWidth="2"
                fill="none"
                style={{
                  strokeDashoffset: 300 * (1 - pourProgress),
                  transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
              {/* Cup outline */}
              <path
                d="M42 155 Q42 158 60 158 Q78 158 78 155 L78 142 Q78 140 60 140 Q42 140 42 142 Z"
                stroke="rgba(124,74,45,0.3)"
                strokeWidth="1.5"
                fill="rgba(200,133,90,0.08)"
              />
              {/* Water fill in cup */}
              <rect
                x="43"
                y={158 - (pourProgress * 16)}
                width="34"
                height={pourProgress * 16}
                fill="rgba(200,133,90,0.2)"
                rx="1"
                style={{ transition: "all 1.4s cubic-bezier(0.4,0,0.2,1)" }}
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE — full-bleed */}
      <section
        id="atmosphere"
        className="relative overflow-hidden"
        style={{ height: "70vh", minHeight: "500px" }}
      >
        <img
          src="https://source.unsplash.com/2000x1200/?coffee,shop,interior,warm,wood,light,specialty"
          alt="Sunrise Coffee interior — light streaming through windows, wooden bar, pour-over in motion"
          className="absolute inset-0 w-full h-full object-cover golden-filter"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(42,31,22,0.2) 0%, rgba(42,31,22,0.55) 100%)",
          }}
        />
        <div className="warm-overlay absolute inset-0" />
        <div className="relative h-full flex flex-col items-center justify-end pb-16 px-6 text-center">
          <FadeInUp delay={0}>
            <p
              className="heading"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(250,246,241,0.9)",
                letterSpacing: "0.02em",
                maxWidth: "560px",
              }}
            >
              A space where time slows and every detail is intentional.
            </p>
          </FadeInUp>
          <FadeInUp delay={150}>
            <a
              href="#visit"
              style={{
                marginTop: "1.75rem",
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(250,246,241,0.7)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(250,246,241,0.3)",
                paddingBottom: "2px",
                transition: "color 0.3s ease, border-color 0.3s ease",
              }}
            >
              Come Experience It →
            </a>
          </FadeInUp>
        </div>
      </section>

      {/* SOCIAL PROOF — card grid */}
      <section
        id="community"
        className="py-28 md:py-36 px-6 textured-bg"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-secondary)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Voices from Our Community
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="heading"
                style={{
                  fontSize: "clamp(2.25rem, 3.5vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--color-text)",
                }}
              >
                What Our Community Says
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="section-divider-center" />
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                quote:
                  "The first pour-over I've had that made me understand why coffee matters. Every cup tastes like care.",
                author: "Sarah K.",
                delay: 0,
              },
              {
                quote:
                  "This is the place I go to think, to work, to just be. The coffee is exceptional, but the space is sacred.",
                author: "Marcus T.",
                delay: 100,
              },
              {
                quote:
                  "Finally found a coffee shop that respects the craft. The baristas actually know where the beans come from.",
                author: "Jennifer L.",
                delay: 150,
              },
              {
                quote:
                  "It's become my morning ritual. I'm not just buying coffee—I'm supporting farmers and experiencing something real.",
                author: "David M.",
                delay: 200,
              },
            ].map((t) => (
              <FadeInUp key={t.author} delay={t.delay}>
                <div className="testimonial-card">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="var(--color-secondary)"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote mark */}
                  <div
                    className="heading"
                    style={{
                      fontSize: "4rem",
                      lineHeight: 0.8,
                      color: "var(--color-accent)",
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  >
                    &#8220;
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.05rem",
                      lineHeight: 1.75,
                      color: "var(--color-text)",
                      fontWeight: 300,
                      marginBottom: "1.75rem",
                    }}
                  >
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: "2px",
                        height: "32px",
                        background: "var(--color-secondary)",
                        borderRadius: "1px",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        color: "var(--color-text)",
                      }}
                    >
                      {t.author}
                    </span>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section
        id="visit"
        className="relative overflow-hidden"
      >
        <img
          src="https://source.unsplash.com/2000x900/?coffee,farmer,harvest,origin,Africa"
          alt="Coffee origin farm landscape"
          className="absolute inset-0 w-full h-full object-cover golden-filter"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,31,22,0.92) 0%, rgba(82,46,26,0.88) 60%, rgba(42,31,22,0.75) 100%)",
          }}
        />

        <div className="relative py-28 md:py-36 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left: invite */}
              <div>
                <FadeInUp delay={0}>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                      display: "block",
                      marginBottom: "1rem",
                    }}
                  >
                    Come Find Us
                  </span>
                </FadeInUp>
                <FadeInUp delay={100}>
                  <h2
                    className="heading"
                    style={{
                      fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                      fontWeight: 300,
                      lineHeight: 1.1,
                      color: "#faf6f1",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Visit Sunrise Coffee
                  </h2>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <div
                    style={{
                      width: "48px",
                      height: "2px",
                      background: "var(--color-secondary)",
                      marginBottom: "1.75rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.1rem",
                      lineHeight: 1.75,
                      color: "rgba(250,246,241,0.75)",
                      fontWeight: 300,
                      marginBottom: "2.5rem",
                      maxWidth: "420px",
                    }}
                  >
                    We're located in Scottsdale, open daily. Come experience the craft.
                  </p>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <ShineBorder
                    borderRadius={2}
                    borderWidth={1}
                    duration={6}
                    color={["#c8855a", "#e8a87c", "#7c4a2d"]}
                  >
                    <a
                      href="https://maps.google.com/?q=Scottsdale,AZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-light"
                      style={{ display: "block" }}
                    >
                      Get Directions
                    </a>
                  </ShineBorder>
                </FadeInUp>
              </div>

              {/* Right: info */}
              <div>
                <FadeInUp delay={100}>
                  <div
                    style={{
                      background: "rgba(250,246,241,0.06)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "4px",
                      border: "1px solid rgba(250,246,241,0.1)",
                      padding: "2.5rem",
                    }}
                  >
                    {[
                      {
                        label: "Hours",
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                        ),
                        value: "Monday–Friday: 6am–7pm",
                        value2: "Saturday–Sunday: 7am–6pm",
                      },
                      {
                        label: "Address",
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        ),
                        value: "Scottsdale, AZ",
                        value2: null,
                      },
                      {
                        label: "Phone",
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        ),
                        value: "Contact form available",
                        value2: null,
                      },
                    ].map((item, i) => (
                      <div
                        key={item.label}
                        style={{
                          display: "flex",
                          gap: "1rem",
                          paddingBottom: i < 2 ? "1.75rem" : "0",
                          marginBottom: i < 2 ? "1.75rem" : "0",
                          borderBottom: i < 2 ? "1px solid rgba(250,246,241,0.08)" : "none",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            marginTop: "2px",
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                              color: "var(--color-accent)",
                              marginBottom: "0.4rem",
                            }}
                          >
                            {item.label}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "1rem",
                              color: "rgba(250,246,241,0.85)",
                              fontWeight: 300,
                              lineHeight: 1.6,
                            }}
                          >
                            {item.value}
                            {item.value2 && (
                              <>
                                <br />
                                {item.value2}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "var(--color-text)",
          color: "rgba(250,246,241,0.7)",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div>
            <div
              className="heading"
              style={{
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "#faf6f1",
                marginBottom: "0.4rem",
              }}
            >
              Sunrise Coffee Co.
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 300,
              }}
            >
              Scottsdale, AZ · Single-Origin Specialty Coffee
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Coffee Menu", href: "/menu" },
              { label: "Our Story", href: "/about" },
              { label: "Visit Us", href: "#visit" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(250,246,241,0.6)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "rgba(250,246,241,0.6)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "rgba(250,246,241,0.35)",
            }}
          >
            &copy; {new Date().getFullYear()} Sunrise Coffee Co. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
