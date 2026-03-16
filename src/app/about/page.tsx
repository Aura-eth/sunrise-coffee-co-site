"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <style>{`
        .story-image {
          position: relative;
          overflow: hidden;
        }
        .story-image img {
          transition: transform 0.8s var(--ease-out, ease-out);
        }
        .story-image:hover img {
          transform: scale(1.03);
        }
        .value-item {
          border-bottom: 1px solid color-mix(in srgb, var(--color-text) 10%, transparent);
          transition: border-color var(--duration-normal, 300ms) var(--ease-out, ease-out);
        }
        .value-item:last-child {
          border-bottom: none;
        }
        .value-item:hover {
          border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);
        }
        .stat-item {
          position: relative;
        }
        .stat-item::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: color-mix(in srgb, var(--color-text) 12%, transparent);
        }
        .stat-item:last-child::after {
          display: none;
        }
        @media (max-width: 767px) {
          .stat-item::after {
            display: none;
          }
        }
        .about-page-header {
          background-image: url('https://source.unsplash.com/1600x600/?coffee+farm+landscape+mountains+origin');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>

      {/* Page Header — atmospheric intro */}
      <section className="about-page-header relative h-[38vh] min-h-[260px] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 pb-10 md:pb-14">
          <FadeInUp delay={0}>
            <span
              className="block text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: "var(--color-accent, #c9a96e)", fontFamily: "var(--font-body)" }}
            >
              Sunrise Coffee Co
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Us
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* ─── STORY SECTION ─── */}
      <section
        id="story"
        className="py-24 md:py-32 px-6 md:px-12"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — narrative text */}
          <div className="order-2 lg:order-1">
            <FadeInUp delay={0}>
              <span
                className="block text-xs font-semibold uppercase tracking-[0.22em] mb-5"
                style={{
                  color: "var(--color-accent, #c9a96e)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Our Story
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                Founded on the belief that coffee deserves attention
              </h2>
            </FadeInUp>
            <FadeInUp delay={150}>
              <div
                className="space-y-5 text-base md:text-lg leading-relaxed"
                style={{
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-body)",
                  lineHeight: "1.85",
                }}
              >
                <p>
                  Sunrise Coffee Co was born from a simple obsession: understanding coffee at its source. After traveling through coffee-producing regions in East Africa and Central America, we realized that most coffee drinkers never learn the story behind their cup. We opened Sunrise to change that.
                </p>
                <p>
                  We source directly from farmers and cooperatives we trust, prioritizing quality, sustainability, and fair compensation. Every coffee we serve is single-origin, roasted in small batches, and prepared with precision. We believe your morning ritual deserves respect—and your coffee deserves to tell a story worth knowing.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div
                className="mt-10 pt-8 border-t"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-text) 10%, transparent)",
                }}
              >
                <p
                  className="text-sm uppercase tracking-widest font-semibold"
                  style={{
                    color: "var(--color-accent, #c9a96e)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Every cup tells a story worth knowing.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Right — image */}
          <div className="order-1 lg:order-2">
            <FadeInUp delay={80}>
              <div className="story-image rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 32px 80px -12px rgba(0,0,0,0.22)" }}>
                <img
                  src="https://source.unsplash.com/900x1100/?pour+over+coffee+brewing+process+detail+hands"
                  alt="Founder or café workspace — warm and authentic"
                  className="w-full h-[420px] md:h-[560px] object-cover"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ─── FEATURE HIGHLIGHT — How We Work ─── */}
      <section
        id="how-we-work"
        className="py-24 md:py-32 px-6 md:px-12"
        style={{ background: "var(--color-surface, #f8f4ef)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <div className="mb-16 md:mb-20">
              <span
                className="block text-xs font-semibold uppercase tracking-[0.22em] mb-5"
                style={{
                  color: "var(--color-accent, #c9a96e)",
                  fontFamily: "var(--font-body)",
                }}
              >
                How We Work
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight max-w-xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                Principles we carry from farm to cup
              </h2>
            </div>
          </FadeInUp>

          <div className="space-y-0">
            {[
              {
                title: "Direct Partnerships",
                description:
                  "We build lasting relationships with farmers and cooperatives, visiting origins regularly to ensure quality and fair practice.",
                index: "01",
              },
              {
                title: "Sustainability First",
                description:
                  "We prioritize shade-grown, water-conscious farming and regenerative practices that protect land and community.",
                index: "02",
              },
              {
                title: "Transparent Sourcing",
                description:
                  "Every origin has a story. We share prices, farmer names, altitude, and processing details—because you deserve to know.",
                index: "03",
              },
              {
                title: "Educational Mission",
                description:
                  "We teach. Whether through conversation, tastings, or future workshops, we're committed to deepening coffee literacy.",
                index: "04",
              },
            ].map((item, i) => (
              <FadeInUp key={item.title} delay={i * 100}>
                <div
                  className="value-item grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-12 items-start py-9 md:py-10"
                >
                  {/* Number */}
                  <span
                    className="text-xs font-semibold tracking-widest hidden md:block pt-1"
                    style={{
                      color: "var(--color-accent, #c9a96e)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.index}
                  </span>
                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-semibold leading-snug"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-text)",
                    }}
                  >
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body)",
                      lineHeight: "1.8",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ATMOSPHERIC BREAK — full-bleed image ─── */}
      <section
        className="relative h-[40vh] min-h-[240px] flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="https://source.unsplash.com/1600x500/?cozy+coffee+shop+interior+natural+light"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-6">
          <p
            className="text-white/90 text-xl md:text-3xl font-light max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-heading)",
              lineHeight: "1.6",
              letterSpacing: "0.01em",
            }}
          >
            &ldquo;Your morning ritual deserves respect.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section
        id="by-the-numbers"
        className="py-20 md:py-24 px-6 md:px-12"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <div className="mb-14 md:mb-16 text-center">
              <span
                className="block text-xs font-semibold uppercase tracking-[0.22em] mb-4"
                style={{
                  color: "var(--color-accent, #c9a96e)",
                  fontFamily: "var(--font-body)",
                }}
              >
                By the Numbers
              </span>
              <h2
                className="text-2xl md:text-4xl font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                Small by design. Meaningful by practice.
              </h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={100}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--color-surface, #f8f4ef)",
              }}
            >
              <ShineBorder
                borderRadius={16}
                borderWidth={1}
                duration={10}
                color={["#c9a96e", "#8b5e3c", "#e8d5b7"]}
              >
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {[
                    { number: "15+", label: "Coffee Origins Sourced" },
                    { number: "8", label: "Farmer Partnerships" },
                    { number: "2", label: "Years Operating" },
                    { number: "5000+", label: "Cups Served" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className="stat-item flex flex-col items-center justify-center text-center py-12 px-6 md:py-14 md:px-8"
                    >
                      <span
                        className="block text-4xl md:text-5xl font-bold mb-2"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--color-text)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {stat.number}
                      </span>
                      <span
                        className="block text-xs md:text-sm font-medium uppercase tracking-widest"
                        style={{
                          color: "var(--color-muted)",
                          fontFamily: "var(--font-body)",
                          lineHeight: "1.5",
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </ShineBorder>
            </div>
          </FadeInUp>

          <FadeInUp delay={150}>
            <p
              className="text-center mt-8 text-sm"
              style={{
                color: "var(--color-muted)",
                fontFamily: "var(--font-body)",
                lineHeight: "1.7",
              }}
            >
              Numbers that reflect deliberate growth — every origin, every partnership, every cup chosen with intention.
            </p>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
