"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const valueIcons: Record<string, JSX.Element> = {
  Craft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l.399 2m-15.199-2l-.399 2m0 0l-.399 1.5A1.5 1.5 0 005.353 20h13.294a1.5 1.5 0 001.352-2l-.4-1.5" />
    </svg>
  ),
  Transparency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  Sustainability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

const teamMembers = [
  {
    name: "Jordan",
    title: "Founder & Roaster",
    bio: "Coffee traveler with deep connections to origins in East Africa and Central America. Roasts every batch with intention. Always happy to talk about where your beans came from.",
    image: "https://source.unsplash.com/400x400/?barista,man,coffee,portrait",
  },
  {
    name: "Maya",
    title: "Head Barista",
    bio: "Pour-over specialist with 8 years of specialty coffee experience. Maya can dial in a brew based on bean age, humidity, and season. Her gentle precision sets the tone for every cup.",
    image: "https://source.unsplash.com/400x400/?barista,woman,coffee,portrait",
  },
  {
    name: "Alex",
    title: "Community Manager",
    bio: "Connects farmers, customers, and the Sunrise team. Organizes origin talks, cuppings, and special events. Alex makes sure every regular feels like part of the family.",
    image: "https://source.unsplash.com/400x400/?person,smiling,warm,portrait",
  },
  {
    name: "Sam",
    title: "Weekend Barista",
    bio: "Coffee student and local artist. Sam brings creative energy and genuine curiosity to every shift. Loves experimenting with brewing methods and talking coffee philosophy.",
    image: "https://source.unsplash.com/400x400/?young,artist,person,portrait",
  },
];

const testimonials = [
  {
    quote: "I used to grab coffee on autopilot. Now I come here, sit for 20 minutes with a pour-over, and it\u2019s become my meditation. The team actually cares.",
    attribution: "Marcus T., Regular",
    image: "https://source.unsplash.com/100x100/?man,face,portrait,warm",
  },
  {
    quote: "Knowing that my coffee comes from a specific farm in Kenya, roasted last week, and poured by someone who knows the story\u2014that changes everything.",
    attribution: "Elena R., Coffee Enthusiast",
    image: "https://source.unsplash.com/100x100/?woman,face,portrait,natural",
  },
  {
    quote: "The space feels like home. Sunrise is where I meet friends, get work done, and genuinely connect with the baristas. It\u2019s rare.",
    attribution: "David K., Remote Worker",
    image: "https://source.unsplash.com/100x100/?man,smiling,casual,portrait",
  },
  {
    quote: "Finally, a coffee shop in Scottsdale that takes single-origin seriously. The pour-over is perfect every time, and the team\u2019s knowledge is incredible.",
    attribution: "Priya S., Coffee Aficionado",
    image: "https://source.unsplash.com/100x100/?woman,smiling,professional,portrait",
  },
];

const values = [
  {
    title: "Craft",
    description: "We honor the pour-over ritual. Every detail matters\u2014water temperature, grind size, brewing time. Excellence in simplicity.",
  },
  {
    title: "Transparency",
    description: "We tell you everything: farm location, altitude, processing, roast date, tasting notes. No mystery. Full accountability.",
  },
  {
    title: "Community",
    description: "Sunrise is a third place. A gathering spot for remote workers, friends, neighbors, and coffee lovers seeking human connection.",
  },
  {
    title: "Sustainability",
    description: "Direct relationships with farms support ethical practices. We source responsibly and minimize waste. Coffee grown and served with care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        :root {
          --sunrise-amber: #C85A17;
          --sunrise-warm: #F5EDD6;
          --sunrise-earth: #3D2B1F;
          --sunrise-sage: #8A9E85;
        }
        .value-card {
          transition: transform 0.3s var(--ease-out, ease-out), box-shadow 0.3s var(--ease-out, ease-out);
        }
        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(61, 43, 31, 0.1);
        }
        .team-card {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(61, 43, 31, 0.12);
        }
        .team-card .team-img {
          transition: transform 0.5s ease-out;
        }
        .team-card:hover .team-img {
          transform: scale(1.05);
        }
        .testimonial-card {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(61, 43, 31, 0.1);
        }
        .pour-border {
          position: relative;
        }
        .pour-border::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 40%;
          background: var(--sunrise-amber, #C85A17);
          border-radius: 2px;
          transition: height 0.4s ease-out;
        }
        .pour-border:hover::before {
          height: 100%;
        }
        .section-eyebrow {
          color: var(--sunrise-amber, #C85A17);
          font-family: var(--font-body, sans-serif);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .story-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200, 90, 23, 0.08) 0%, transparent 60%);
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>

      <main
        style={{
          backgroundColor: "var(--color-bg, #FDFAF5)",
          color: "var(--color-text, #1A1208)",
          fontFamily: "var(--font-body, sans-serif)",
        }}
      >
        {/* ─────────────────────────────────────────
            SECTION 1: FOUNDER STORY — split-content
        ───────────────────────────────────────── */}
        <section
          id="story"
          className="py-24 md:py-32 px-6"
          style={{ backgroundColor: "var(--color-bg, #FDFAF5)" }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <FadeInUp delay={0} className="order-2 lg:order-1">
              <div
                className="story-image-wrap relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ height: "580px" }}
              >
                <img
                  src="https://source.unsplash.com/800x1000/?pour+over+coffee+brewing+close-up+steam+morning+light"
                  alt="Pour-over coffee brewing at Sunrise Coffee Co"
                  className="w-full h-full object-cover"
                />
                {/* Warm tonal overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(61,43,31,0.35) 0%, transparent 50%)",
                  }}
                />
                {/* Floating badge */}
                <div
                  className="absolute bottom-8 left-8 px-5 py-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(245,237,214,0.95)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                    style={{ color: "#C85A17" }}
                  >
                    Est. Scottsdale, AZ
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#3D2B1F" }}
                  >
                    Single-Origin Pour-Overs
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <FadeInUp delay={0}>
                <span className="section-eyebrow">Our Story</span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h2
                  className="mt-3 mb-8 text-4xl md:text-5xl leading-tight"
                  style={{
                    fontFamily: "var(--font-heading, Georgia, serif)",
                    fontWeight: 700,
                    color: "#3D2B1F",
                  }}
                >
                  The Sunrise Story
                </h2>
              </FadeInUp>
              <div className="space-y-5">
                <FadeInUp delay={150}>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      color: "var(--color-muted, #6B5744)",
                      lineHeight: "1.85",
                    }}
                  >
                    Sunrise Coffee Co began with a simple idea: coffee should be a ritual, not a rush.
                  </p>
                </FadeInUp>
                <FadeInUp delay={175}>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      color: "var(--color-muted, #6B5744)",
                      lineHeight: "1.85",
                    }}
                  >
                    Our founder, inspired by visits to coffee origins in Ethiopia and Kenya, realized that most coffee drinkers never experience the true character of single-origin beans. The pour-over method\u2014slow, intentional, hand-crafted\u2014became the vehicle to share that experience.
                  </p>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      color: "var(--color-muted, #6B5744)",
                      lineHeight: "1.85",
                    }}
                  >
                    In Scottsdale, a community of people seeking mindfulness and craft, Sunrise Coffee Co opened its doors.
                  </p>
                </FadeInUp>
                <FadeInUp delay={220}>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      color: "var(--color-muted, #6B5744)",
                      lineHeight: "1.85",
                    }}
                  >
                    Today, we source directly from farmers we trust, roast small batches fresh, and pour every cup by hand. We believe that knowing where your coffee comes from\u2014and taking time to savor it\u2014changes everything.
                  </p>
                </FadeInUp>
              </div>

              <FadeInUp delay={250}>
                <div className="mt-10 flex items-center gap-4">
                  <div
                    className="h-px flex-grow"
                    style={{
                      background:
                        "linear-gradient(to right, #C85A17, transparent)",
                      maxWidth: "60px",
                    }}
                  />
                  <p
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{ color: "#C85A17" }}
                  >
                    Jordan, Founder
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            ATMOSPHERIC BREAK: Full-bleed image
        ───────────────────────────────────────── */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src="https://source.unsplash.com/1600x500/?specialty+coffee+shop+interior+warm+wooden+tables+natural+light+Scottsdale"
            alt="Sunrise Coffee Co interior"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(61,43,31,0.65) 0%, rgba(61,43,31,0.2) 50%, rgba(61,43,31,0.5) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FadeInUp delay={0}>
              <p
                className="text-xl md:text-2xl font-light italic text-center max-w-2xl px-6"
                style={{
                  color: "rgba(245,237,214,0.95)",
                  fontFamily: "var(--font-heading, Georgia, serif)",
                  lineHeight: "1.7",
                }}
              >
                &ldquo;Coffee should be a ritual, not a rush.&rdquo;
              </p>
            </FadeInUp>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            SECTION 2: OUR VALUES — stat-blocks 2x2
        ───────────────────────────────────────── */}
        <section
          id="values"
          className="py-24 md:py-32 px-6"
          style={{ backgroundColor: "#F5EDD6" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <span className="section-eyebrow">What We Stand For</span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h2
                  className="mt-3 text-4xl md:text-5xl"
                  style={{
                    fontFamily: "var(--font-heading, Georgia, serif)",
                    fontWeight: 700,
                    color: "#3D2B1F",
                  }}
                >
                  Our Values
                </h2>
              </FadeInUp>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {values.map((value, index) => (
                <FadeInUp
                  key={value.title}
                  delay={index * 100}
                  className="h-full"
                >
                  <div
                    className="value-card pour-border h-full rounded-2xl p-8 md:p-10 pl-10 md:pl-12"
                    style={{
                      backgroundColor: "#FDFAF5",
                      border: "1px solid rgba(200,90,23,0.12)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: "rgba(200,90,23,0.1)",
                        color: "#C85A17",
                      }}
                    >
                      {valueIcons[value.title]}
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-heading, Georgia, serif)",
                        color: "#3D2B1F",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: "var(--color-muted, #6B5744)",
                        lineHeight: "1.8",
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            SECTION 3: TEAM PROFILES — minimal-cards
        ───────────────────────────────────────── */}
        <section
          id="team"
          className="py-24 md:py-32 px-6"
          style={{ backgroundColor: "var(--color-bg, #FDFAF5)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <span className="section-eyebrow">Meet the Team</span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h2
                  className="mt-3 text-4xl md:text-5xl"
                  style={{
                    fontFamily: "var(--font-heading, Georgia, serif)",
                    fontWeight: 700,
                    color: "#3D2B1F",
                  }}
                >
                  The Sunrise Team
                </h2>
              </FadeInUp>
              <FadeInUp delay={150}>
                <p
                  className="mt-4 text-lg max-w-xl mx-auto"
                  style={{ color: "var(--color-muted, #6B5744)" }}
                >
                  Passionate people pouring passion into every cup
                </p>
              </FadeInUp>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <FadeInUp key={member.name} delay={index * 100}>
                  <div
                    className="team-card rounded-2xl overflow-hidden h-full"
                    style={{
                      backgroundColor: "#FDFAF5",
                      border: "1px solid rgba(61,43,31,0.08)",
                    }}
                  >
                    <div className="relative overflow-hidden" style={{ height: "260px" }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-img w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(61,43,31,0.4) 0%, transparent 60%)",
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{
                          fontFamily: "var(--font-heading, Georgia, serif)",
                          color: "#3D2B1F",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-semibold uppercase tracking-wider mb-3"
                        style={{ color: "#C85A17" }}
                      >
                        {member.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--color-muted, #6B5744)",
                          lineHeight: "1.75",
                        }}
                      >
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            SECTION 4: SOCIAL PROOF — card-grid
        ───────────────────────────────────────── */}
        <section
          id="community"
          className="py-24 md:py-32 px-6"
          style={{
            background:
              "linear-gradient(160deg, #3D2B1F 0%, #5C3D2A 60%, #3D2B1F 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInUp delay={0}>
                <span
                  className="section-eyebrow"
                  style={{ color: "#C85A17" }}
                >
                  Real Voices
                </span>
              </FadeInUp>
              <FadeInUp delay={100}>
                <h2
                  className="mt-3 text-4xl md:text-5xl"
                  style={{
                    fontFamily: "var(--font-heading, Georgia, serif)",
                    fontWeight: 700,
                    color: "#F5EDD6",
                  }}
                >
                  What Our Community Says
                </h2>
              </FadeInUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <FadeInUp key={testimonial.attribution} delay={index * 100}>
                  <div
                    className="testimonial-card rounded-2xl p-8 md:p-10 h-full"
                    style={{
                      backgroundColor: "rgba(245,237,214,0.06)",
                      border: "1px solid rgba(245,237,214,0.12)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <div
                      className="text-3xl mb-4"
                      style={{ color: "#C85A17" }}
                    >
                      &ldquo;
                    </div>
                    <blockquote
                      className="text-base md:text-lg mb-8 leading-relaxed"
                      style={{
                        color: "rgba(245,237,214,0.88)",
                        fontFamily: "var(--font-heading, Georgia, serif)",
                        lineHeight: "1.8",
                        fontStyle: "italic",
                      }}
                    >
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                        style={{ border: "2px solid rgba(200,90,23,0.5)" }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.attribution}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold"
                          style={{ color: "#F5EDD6" }}
                        >
                          {testimonial.attribution.split(",")[0]}
                        </div>
                        <div
                          className="text-xs uppercase tracking-widest mt-0.5"
                          style={{ color: "rgba(245,237,214,0.5)" }}
                        >
                          {testimonial.attribution.split(",")[1]?.trim()}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            CLOSING CTA STRIP
        ───────────────────────────────────────── */}
        <section
          className="py-20 px-6"
          style={{ backgroundColor: "#F5EDD6" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <FadeInUp delay={0}>
              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  fontFamily: "var(--font-heading, Georgia, serif)",
                  color: "#3D2B1F",
                }}
              >
                Come Experience It
              </h3>
            </FadeInUp>
            <FadeInUp delay={100}>
              <p
                className="text-lg mb-8"
                style={{ color: "#6B5744" }}
              >
                Every cup we pour carries a story. We\u2019d love to share it with you.
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/coffee"
                  className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "#C85A17",
                    color: "#F5EDD6",
                  }}
                >
                  Explore Our Coffee
                </a>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "transparent",
                    color: "#3D2B1F",
                    border: "2px solid rgba(61,43,31,0.3)",
                  }}
                >
                  Find Us in Scottsdale
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}
