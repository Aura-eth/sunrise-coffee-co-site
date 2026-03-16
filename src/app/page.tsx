"use client";

import { useEffect, useRef, useState } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        :root {
          --font-heading: 'Libre Baskerville', Georgia, serif;
          --font-body: 'Source Sans 3', system-ui, sans-serif;
        }

        * { box-sizing: border-box; }

        body {
          font-family: var(--font-body);
          background-color: #faf8f5;
          color: #2c1f0e;
        }

        .font-heading { font-family: var(--font-heading); }
        .font-body { font-family: var(--font-body); }

        .hero-sunrise-gradient {
          background: linear-gradient(
            180deg,
            #1a0a00 0%,
            #4a1c00 20%,
            #c45b1a 50%,
            #e8922a 70%,
            #f5c878 90%,
            #faf0dc 100%
          );
        }

        .text-warm-cream { color: #fdf6e3; }
        .text-warm-tan { color: #d4a96a; }
        .text-deep-brown { color: #2c1f0e; }
        .text-rust { color: #c45b1a; }
        .text-muted-brown { color: #7a5c3a; }

        .bg-warm-cream { background-color: #faf8f5; }
        .bg-surface { background-color: #f5efe4; }
        .bg-deep-brown { background-color: #2c1f0e; }
        .bg-rust { background-color: #c45b1a; }
        .border-tan { border-color: #d4a96a; }

        .hero-text-glow {
          text-shadow: 0 2px 40px rgba(0,0,0,0.5);
        }

        .masonry-gallery {
          columns: 1;
          column-gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .masonry-gallery { columns: 2; }
        }
        @media (min-width: 1024px) {
          .masonry-gallery { columns: 3; }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .masonry-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .masonry-item:nth-child(2) { transition-delay: 0.1s; }
        .masonry-item:nth-child(3) { transition-delay: 0.2s; }
        .masonry-item:nth-child(4) { transition-delay: 0.1s; }
        .masonry-item:nth-child(5) { transition-delay: 0.2s; }
        .masonry-item:nth-child(6) { transition-delay: 0.3s; }
        .masonry-item:nth-child(7) { transition-delay: 0.15s; }
        .masonry-item:nth-child(8) { transition-delay: 0.25s; }

        .testimonial-card {
          background: #ffffff;
          border: 1px solid rgba(212, 169, 106, 0.25);
          border-radius: 1.25rem;
          padding: 2.5rem;
          position: relative;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .testimonial-card:hover {
          box-shadow: 0 12px 40px rgba(44, 31, 14, 0.1);
          transform: translateY(-4px);
        }

        .feature-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(196, 91, 26, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: background 0.3s ease;
        }
        .feature-card:hover .feature-icon-wrap {
          background: rgba(196, 91, 26, 0.16);
        }

        .cta-btn-primary {
          display: inline-block;
          padding: 0.875rem 2.25rem;
          background: #c45b1a;
          color: #fff;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .cta-btn-primary:hover {
          background: #a84c15;
          transform: translateY(-2px);
        }

        .cta-btn-secondary {
          display: inline-block;
          padding: 0.875rem 2.25rem;
          border: 1.5px solid rgba(253, 246, 227, 0.55);
          color: rgba(253, 246, 227, 0.9);
          border-radius: 9999px;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
        }
        .cta-btn-secondary:hover {
          border-color: rgba(253, 246, 227, 0.9);
          background: rgba(253, 246, 227, 0.08);
          color: #fdf6e3;
        }

        .atmosphere-img {
          transition: transform 8s ease-out;
        }
        .atmosphere-section:hover .atmosphere-img {
          transform: scale(1.03);
        }

        .gallery-img-wrap {
          border-radius: 0.75rem;
          overflow: hidden;
          position: relative;
        }
        .gallery-img-wrap img {
          width: 100%;
          display: block;
          transition: transform 0.6s ease;
        }
        .gallery-img-wrap:hover img {
          transform: scale(1.06);
        }
        .gallery-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(44,31,14,0.35) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-img-wrap:hover::after {
          opacity: 1;
        }

        .section-eyebrow {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c45b1a;
        }

        .divider-line {
          width: 48px;
          height: 1.5px;
          background: #c45b1a;
          margin: 1rem auto;
          opacity: 0.6;
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: navScrolled ? "rgba(250,248,245,0.97)" : "transparent",
          backdropFilter: navScrolled ? "blur(12px)" : "none",
          borderBottom: navScrolled ? "1px solid rgba(212,169,106,0.2)" : "none",
          boxShadow: navScrolled ? "0 2px 20px rgba(44,31,14,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="/"
            className="font-heading text-xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: navScrolled ? "#2c1f0e" : "#fdf6e3" }}
          >
            Sunrise Coffee Co.
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[{ label: "Coffee", href: "/coffee" }, { label: "About", href: "/about" }, { label: "Visit", href: "/visit" }].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ color: navScrolled ? "#5a3e28" : "rgba(253,246,227,0.85)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/coffee"
              className="px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
              style={{
                background: navScrolled ? "#c45b1a" : "rgba(253,246,227,0.15)",
                border: navScrolled ? "1.5px solid #c45b1a" : "1.5px solid rgba(253,246,227,0.5)",
                color: navScrolled ? "#fff" : "#fdf6e3",
              }}
            >
              Explore Menu
            </a>
          </div>
          {/* Mobile hamburger placeholder */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            {[0,1,2].map((i) => (
              <span
                key={i}
                className="block w-5 h-0.5 transition-colors duration-300"
                style={{ background: navScrolled ? "#2c1f0e" : "#fdf6e3" }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO (parallax-layers)
      ══════════════════════════════════════════ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Sunrise gradient base */}
        <div className="absolute inset-0 hero-sunrise-gradient" />

        {/* Parallax background image layer */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            willChange: "transform",
          }}
        >
          <img
            src="https://source.unsplash.com/1920x1080/?sunrise+over+coffee+cup+morning+light"
            alt="Sunrise morning coffee"
            className="w-full h-full object-cover"
            style={{ height: "110%", top: "-5%", position: "absolute" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,10,0,0.72) 0%, rgba(74,28,0,0.5) 35%, rgba(196,91,26,0.3) 65%, rgba(250,248,245,0.15) 100%)",
            }}
          />
        </div>

        {/* Subtle coffee overlay image */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
        >
          <img
            src="https://source.unsplash.com/1920x1080/?single+origin+coffee+beans+close+up+macro"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div
            className="section-eyebrow mb-6"
            style={{ color: "rgba(245,200,120,0.9)", letterSpacing: "0.2em" }}
          >
            Sunrise Coffee Co.
          </div>
          <h1
            className="font-heading hero-text-glow text-warm-cream mb-6 leading-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Rise with
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>intention</em>
          </h1>
          <div className="divider-line" style={{ background: "rgba(245,200,120,0.7)", margin: "0 auto 1.75rem" }} />
          <p
            className="font-body text-warm-cream mb-10 leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              opacity: 0.85,
              fontWeight: 300,
              maxWidth: "42ch",
              margin: "0 auto 2.5rem",
            }}
          >
            Single-origin pour-overs crafted with precision. Each cup tells the story of its origin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/coffee" className="cta-btn-primary">
              Explore Our Coffee
            </a>
            <a href="/visit" className="cta-btn-secondary">
              Visit Us
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, #faf8f5)",
          }}
        />

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-warm-cream font-body text-xs tracking-widest uppercase" style={{ fontSize: "0.65rem" }}>Scroll</span>
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, rgba(253,246,227,0.8), transparent)" }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — FEATURE HIGHLIGHT (icon-with-text)
      ══════════════════════════════════════════ */}
      <section id="feature-highlight" className="bg-warm-cream" style={{ padding: "7rem 1.5rem" }}>
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-5">
              <span className="section-eyebrow">Our Philosophy</span>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="font-heading text-deep-brown text-center mb-3"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.875rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Sourced with Care
            </h2>
          </FadeInUp>
          <FadeInUp delay={150}>
            <div className="divider-line" />
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {/* Feature 1 — Bean icon */}
            <FadeInUp delay={0} className="feature-card text-center">
              <div className="feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="14" cy="14" rx="10" ry="6.5" transform="rotate(-35 14 14)" stroke="#c45b1a" strokeWidth="1.6" fill="none"/>
                  <path d="M8 10.5 Q14 14 20 17.5" stroke="#c45b1a" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <h3
                className="font-heading text-deep-brown mb-3"
                style={{ fontSize: "1.2rem", fontWeight: 700 }}
              >
                Direct Relationships
              </h3>
              <p
                className="font-body text-muted-brown leading-relaxed"
                style={{ fontSize: "0.96rem", fontWeight: 300, lineHeight: 1.75 }}
              >
                We partner directly with farmers and cooperatives to ensure quality and fair practice from seed to cup.
              </p>
            </FadeInUp>

            {/* Feature 2 — Water drop icon */}
            <FadeInUp delay={100} className="feature-card text-center">
              <div className="feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4 C14 4 6 13.5 6 18a8 8 0 0 0 16 0C22 13.5 14 4 14 4Z" stroke="#c45b1a" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>
                  <path d="M10 18.5 Q12 16 14 18" stroke="#c45b1a" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.6"/>
                </svg>
              </div>
              <h3
                className="font-heading text-deep-brown mb-3"
                style={{ fontSize: "1.2rem", fontWeight: 700 }}
              >
                Precision Craft
              </h3>
              <p
                className="font-body text-muted-brown leading-relaxed"
                style={{ fontSize: "0.96rem", fontWeight: 300, lineHeight: 1.75 }}
              >
                Every pour-over is prepared with meticulous attention to temperature, ratio, and technique.
              </p>
            </FadeInUp>

            {/* Feature 3 — Map pin icon */}
            <FadeInUp delay={200} className="feature-card text-center">
              <div className="feature-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3C10.13 3 7 6.13 7 10c0 5.25 7 15 7 15s7-9.75 7-15c0-3.87-3.13-7-7-7Z" stroke="#c45b1a" strokeWidth="1.6" fill="none"/>
                  <circle cx="14" cy="10" r="2.5" stroke="#c45b1a" strokeWidth="1.4" fill="none"/>
                </svg>
              </div>
              <h3
                className="font-heading text-deep-brown mb-3"
                style={{ fontSize: "1.2rem", fontWeight: 700 }}
              >
                Origin Stories
              </h3>
              <p
                className="font-body text-muted-brown leading-relaxed"
                style={{ fontSize: "0.96rem", fontWeight: 300, lineHeight: 1.75 }}
              >
                We believe you should know where your coffee comes from. Every bean has a story worth understanding.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — ATMOSPHERE (full-bleed-image)
      ══════════════════════════════════════════ */}
      <section
        id="atmosphere"
        className="relative atmosphere-section overflow-hidden"
        style={{ height: "75vh", minHeight: "480px" }}
      >
        <img
          src="https://source.unsplash.com/1920x1080/?pour+over+coffee+brewing+process+detail+hands"
          alt="Hands carefully pouring coffee"
          className="atmosphere-img absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(44,31,14,0.62) 0%, rgba(44,31,14,0.28) 50%, rgba(44,31,14,0.5) 100%)",
          }}
        />
        {/* Minimal text overlay — intentionally sparse */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <FadeInUp delay={0}>
            <p
              className="font-heading text-warm-cream"
              style={{
                fontSize: "clamp(1.3rem, 4vw, 2.4rem)",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0.01em",
                textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                maxWidth: "30ch",
                lineHeight: 1.5,
              }}
            >
              &ldquo;Slow down. There is craft in every drop.&rdquo;
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — GALLERY (masonry)
      ══════════════════════════════════════════ */}
      <GallerySection />

      {/* ══════════════════════════════════════════
          SECTION 5 — SOCIAL PROOF (featured-quote)
      ══════════════════════════════════════════ */}
      <section
        id="social-proof"
        style={{ padding: "7rem 1.5rem", background: "#f5efe4" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-4">
              <span className="section-eyebrow">Guest Experiences</span>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="font-heading text-deep-brown text-center mb-3"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              What Our Guests Say
            </h2>
          </FadeInUp>
          <FadeInUp delay={150}>
            <div className="divider-line" />
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                quote:
                  "The single-origin coffees here have fundamentally changed how I understand flavor. Each cup is a lesson.",
                author: "Amanda K.",
                detail: "Regular, Scottsdale",
              },
              {
                quote:
                  "The space feels intentional. The coffee tastes like care. I come here to slow down.",
                author: "David R.",
                detail: "Remote worker, 3 years",
              },
              {
                quote:
                  "Finally, a café that respects both the ritual and the craft. This is what specialty coffee should be.",
                author: "Maria T.",
                detail: "Coffee enthusiast, Phoenix",
              },
            ].map((t, i) => (
              <FadeInUp key={t.author} delay={i * 100}>
                <div className="testimonial-card h-full">
                  <div
                    className="font-heading text-rust mb-6"
                    style={{ fontSize: "3.5rem", lineHeight: 1, opacity: 0.35 }}
                  >
                    &ldquo;
                  </div>
                  <blockquote
                    className="font-body text-deep-brown mb-8 leading-relaxed"
                    style={{ fontSize: "0.97rem", fontWeight: 300, lineHeight: 1.8 }}
                  >
                    {t.quote}
                  </blockquote>
                  <div className="mt-auto">
                    <div
                      className="w-8 h-px mb-4"
                      style={{ background: "#c45b1a", opacity: 0.5 }}
                    />
                    <div
                      className="font-heading text-deep-brown"
                      style={{ fontSize: "0.95rem", fontWeight: 700 }}
                    >
                      {t.author}
                    </div>
                    <div
                      className="font-body text-muted-brown mt-0.5"
                      style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}
                    >
                      {t.detail}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA BAND ── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "#2c1f0e",
          textAlign: "center",
        }}
      >
        <FadeInUp delay={0}>
          <p
            className="font-heading text-warm-cream mb-3"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 400, fontStyle: "italic" }}
          >
            Your morning ritual awaits.
          </p>
        </FadeInUp>
        <FadeInUp delay={100}>
          <p
            className="font-body mb-8"
            style={{ color: "rgba(253,246,227,0.55)", fontSize: "1rem", fontWeight: 300, letterSpacing: "0.02em" }}
          >
            Open daily · Old Town Scottsdale
          </p>
        </FadeInUp>
        <FadeInUp delay={200}>
          <a href="/coffee" className="cta-btn-primary" style={{ fontSize: "1rem" }}>
            Explore Our Coffee
          </a>
        </FadeInUp>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1a0e06", padding: "2.5rem 1.5rem" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="font-heading"
            style={{ color: "rgba(253,246,227,0.35)", fontSize: "0.9rem" }}
          >
            &copy; {new Date().getFullYear()} Sunrise Coffee Co.
          </p>
          <div className="flex gap-6">
            {[{ label: "Coffee", href: "/coffee" }, { label: "About", href: "/about" }, { label: "Visit", href: "/visit" }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body transition-opacity hover:opacity-100"
                style={{ color: "rgba(253,246,227,0.35)", fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─────────────────────────────────────────────────
   Gallery section as client sub-component for
   IntersectionObserver on masonry items
───────────────────────────────────────────────── */
function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;
    const items = galleryRef.current.querySelectorAll(".masonry-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      url: "https://source.unsplash.com/800x1000/?single+origin+coffee+beans+close+up+macro",
      alt: "Single-origin coffee beans close up",
      tall: true,
    },
    {
      url: "https://source.unsplash.com/800x600/?pour+over+coffee+brewing",
      alt: "Pour-over brewing process",
      tall: false,
    },
    {
      url: "https://source.unsplash.com/800x700/?cozy+coffee+shop+interior+natural+light",
      alt: "Café interior warm light",
      tall: false,
    },
    {
      url: "https://source.unsplash.com/800x1100/?coffee+farm+landscape+mountains",
      alt: "Coffee farm mountain landscape",
      tall: true,
    },
    {
      url: "https://source.unsplash.com/800x600/?artisanal+coffee+roastery+warm",
      alt: "Coffee roastery warm tones",
      tall: false,
    },
    {
      url: "https://source.unsplash.com/800x900/?coffee+cup+morning+ritual",
      alt: "Morning coffee ritual",
      tall: true,
    },
    {
      url: "https://source.unsplash.com/800x600/?barista+hands+craft+coffee",
      alt: "Barista crafting coffee",
      tall: false,
    },
    {
      url: "https://source.unsplash.com/800x750/?coffee+origin+ethiopia+beans",
      alt: "Ethiopian coffee origin",
      tall: false,
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-warm-cream"
      style={{ padding: "7rem 1.5rem" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeInUp delay={0}>
          <div className="text-center mb-4">
            <span className="section-eyebrow">Visual Journey</span>
          </div>
        </FadeInUp>
        <FadeInUp delay={100}>
          <h2
            className="font-heading text-deep-brown text-center mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            The Art of Pour-Over
          </h2>
        </FadeInUp>
        <FadeInUp delay={150}>
          <p
            className="font-body text-muted-brown text-center mb-16"
            style={{ fontSize: "1rem", fontWeight: 300, letterSpacing: "0.08em" }}
          >
            From origin to cup
          </p>
        </FadeInUp>

        <div ref={galleryRef} className="masonry-gallery">
          {galleryImages.map((img, i) => (
            <div key={i} className="masonry-item">
              <div className="gallery-img-wrap">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
