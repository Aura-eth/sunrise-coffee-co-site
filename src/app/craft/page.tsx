"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function CraftPage() {
  const steps = [
    {
      number: 1,
      title: "Grind & Weigh",
      description:
        "Medium-fine grind, precisely measured (typically 1:16 coffee-to-water ratio). Consistency is everything.",
    },
    {
      number: 2,
      title: "Bloom",
      description:
        "First 45 seconds with just enough hot water (200\u2013205\u00b0F) to saturate the grounds. This releases CO\u2082 and prepares the coffee.",
    },
    {
      number: 3,
      title: "First Pour",
      description:
        "Slow, circular pour over 30\u201345 seconds, maintaining water level. The coffee begins to extract.",
    },
    {
      number: 4,
      title: "Second & Third Pours",
      description:
        "Gentle, deliberate pours maintaining temperature and saturation. Control the flow rate to hit your target brew time.",
    },
    {
      number: 5,
      title: "Finishing",
      description:
        "Final pour brings you to your target brew time (3\u20134 minutes total). The last drops are critical\u2014they complete the extraction.",
    },
    {
      number: 6,
      title: "Serve & Savor",
      description:
        "Let the cup cool slightly. Notice the aroma, the clarity, the complexity. Every origin tastes different.",
    },
  ];

  const pillars = [
    {
      title: "Equipment Quality",
      description:
        "Gooseneck kettles for precision pouring. Conical burr grinders for uniform particles. Specialty filters that let flavor through, not sediment. The tools matter.",
      image: "https://source.unsplash.com/800x600/?specialty,coffee,gooseneck,kettle",
      tag: "The Tools",
    },
    {
      title: "Water Science",
      description:
        "Temperature (200\u2013205\u00b0F), mineral content, pH. We\u2019ve dialed in our water to highlight each origin\u2019s unique character. Cold water pulls differently than hot.",
      image: "https://source.unsplash.com/800x600/?water,pour,coffee,ritual",
      tag: "The Science",
    },
    {
      title: "Barista Training",
      description:
        "Every barista at Sunrise has spent hundreds of hours perfecting the pour. We invest in education because your cup deserves consistency and care.",
      image: "https://source.unsplash.com/800x600/?barista,training,coffee,craft",
      tag: "The People",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-heading {
          background: linear-gradient(90deg, #D4A574, #C85A17, #D4A574);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
        .gradient-underline {
          position: relative;
          display: inline-block;
        }
        .gradient-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #D4A574, #C85A17);
          border-radius: 2px;
        }
        .step-connector {
          background: linear-gradient(180deg, #D4A574 0%, #C85A17 100%);
        }
        .pillar-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .pillar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(200, 90, 23, 0.15);
        }
        .step-number {
          background: linear-gradient(135deg, #D4A574, #C85A17);
        }
        .parallax-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .parallax-container:hover .parallax-img {
          transform: scale(1.04);
        }
      `}</style>

      <main
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text)",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* ── SECTION 1: Story / Split Layout ── */}
        <section
          id="why-we-pour"
          className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          {/* Left: Narrative */}
          <div className="flex items-center px-8 md:px-12 lg:px-20 py-24 lg:py-32 order-2 lg:order-1">
            <div className="max-w-xl">
              <FadeInUp delay={0}>
                <span
                  className="text-sm font-semibold uppercase tracking-widest block mb-4"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Our Philosophy
                </span>
              </FadeInUp>

              <FadeInUp delay={100}>
                <h1
                  className="mb-8 leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  <span className="gradient-underline">Why We Pour</span>{" "}
                  <br />
                  <span className="gradient-heading">By Hand</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={200}>
                <div
                  className="space-y-5 leading-relaxed"
                  style={{
                    color: "var(--color-muted)",
                    fontSize: "1.0625rem",
                    lineHeight: 1.85,
                  }}
                >
                  <p>
                    Single-origin pour-overs are not shortcuts\u2014they\u2019re a commitment to
                    precision. Unlike automatic brewing, hand-pouring gives us complete
                    control: water temperature, pour rate, bloom time, and saturation.
                  </p>
                  <p>
                    This matters because every origin has a unique flavor story waiting to
                    be unlocked. A Yirgacheffe needs a different touch than a Sumatra. A
                    natural-process coffee requires a different technique than a washed one.
                  </p>
                  <p>
                    When we pour by hand, we\u2019re not just making coffee\u2014we\u2019re extracting
                    the essence of the farm, the altitude, the farmers\u2019 work. It\u2019s a ritual
                    that honors every step from seed to cup.
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={300}>
                <div
                  className="mt-10 pt-10"
                  style={{
                    borderTop: "1px solid",
                    borderColor: "var(--color-surface)",
                  }}
                >
                  <div className="flex gap-10">
                    <div>
                      <div
                        className="text-3xl font-bold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--color-accent)",
                        }}
                      >
                        1:16
                      </div>
                      <div
                        className="text-xs uppercase tracking-widest mt-1"
                        style={{ color: "var(--color-muted)" }}
                      >
                        Brew Ratio
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-3xl font-bold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--color-accent)",
                        }}
                      >
                        200\u00b0F
                      </div>
                      <div
                        className="text-xs uppercase tracking-widest mt-1"
                        style={{ color: "var(--color-muted)" }}
                      >
                        Target Temp
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-3xl font-bold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--color-accent)",
                        }}
                      >
                        4 min
                      </div>
                      <div
                        className="text-xs uppercase tracking-widest mt-1"
                        style={{ color: "var(--color-muted)" }}
                      >
                        Brew Time
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* Right: Atmospheric Image */}
          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen parallax-container overflow-hidden">
            <img
              src="https://source.unsplash.com/900x1200/?hands,pouring,pour-over,coffee,focused"
              alt="Barista pouring pour-over coffee with focused expression"
              className="parallax-img absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(251,247,242,0.15) 0%, transparent 40%), linear-gradient(to top, rgba(30,15,5,0.5) 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-8 left-8 right-8">
              <ShineBorder
                borderRadius={12}
                borderWidth={1}
                duration={6}
                color={["#D4A574", "#C85A17", "#8B4513"]}
              >
                <div
                  className="px-5 py-4"
                  style={{ backgroundColor: "rgba(20, 10, 5, 0.75)" }}
                >
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-heading)" }}
                  >
                    \u201cPrecision is not perfection\u2014it\u2019s the relentless pursuit of
                    coaxing the best from every bean.\u201d
                  </p>
                </div>
              </ShineBorder>
            </div>
          </div>
        </section>

        {/* ── ATMOSPHERIC BREAK ── */}
        <section
          className="relative h-[40vh] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#1a0a02" }}
        >
          <img
            src="https://source.unsplash.com/1600x640/?coffee,farm,highlands,morning,mist"
            alt="Coffee farm highlands morning mist"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,10,2,0.7) 0%, rgba(26,10,2,0.3) 50%, rgba(26,10,2,0.7) 100%)",
            }}
          />
          <div className="relative text-center px-6">
            <FadeInUp delay={0}>
              <p
                className="text-lg md:text-xl max-w-2xl mx-auto italic"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1.8,
                }}
              >
                From the highlands of Ethiopia to the volcanic slopes of Sumatra\u2014every
                origin deserves a pour that honors its journey.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ── SECTION 2: Process Steps ── */}
        <section
          id="process"
          className="py-24 md:py-32 px-6"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="max-w-3xl mx-auto">
            <FadeInUp delay={0}>
              <div className="text-center mb-20">
                <span
                  className="text-sm font-semibold uppercase tracking-widest block mb-4"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Step by Step
                </span>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "var(--color-text)",
                  }}
                >
                  <span className="gradient-underline">The Pour-Over Process</span>
                </h2>
              </div>
            </FadeInUp>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <FadeInUp key={step.number} delay={i * 100}>
                  <div className="flex gap-6 md:gap-10">
                    {/* Number + connector */}
                    <div className="flex flex-col items-center flex-none">
                      <div
                        className="step-number w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-none z-10"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.125rem",
                          boxShadow: "0 4px 20px rgba(200, 90, 23, 0.35)",
                        }}
                      >
                        {step.number}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="step-connector w-px flex-1 mt-2 mb-2"
                          style={{ minHeight: "48px", opacity: 0.35 }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        "pb-12 flex-1",
                        i === steps.length - 1 && "pb-0"
                      )}
                    >
                      <div
                        className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg"
                        style={{
                          backgroundColor: "var(--color-bg)",
                          border: "1px solid",
                          borderColor: "var(--color-surface)",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3
                              className="mb-2"
                              style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                color: "var(--color-text)",
                              }}
                            >
                              {step.title}
                            </h3>
                            <p
                              style={{
                                color: "var(--color-muted)",
                                lineHeight: 1.75,
                                fontSize: "0.9375rem",
                              }}
                            >
                              {step.description}
                            </p>
                          </div>
                          <div
                            className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl flex-none mt-0.5"
                            style={{
                              background: "linear-gradient(135deg, rgba(212,165,116,0.2), rgba(200,90,23,0.2))",
                            }}
                          >
                            <span
                              className="text-xs font-bold uppercase tracking-widest"
                              style={{ color: "var(--color-accent)" }}
                            >
                              0{step.number}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Feature Highlight — Three Pillars ── */}
        <section
          id="three-pillars"
          className="py-24 md:py-32 px-6"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <div className="text-center mb-20">
                <span
                  className="text-sm font-semibold uppercase tracking-widest block mb-4"
                  style={{ color: "var(--color-secondary)" }}
                >
                  What Makes It Work
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "var(--color-text)",
                  }}
                >
                  <span className="gradient-underline">The Three Pillars of Our Craft</span>
                </h2>
              </div>
            </FadeInUp>

            <div className="space-y-24 md:space-y-32">
              {pillars.map((pillar, i) => (
                <FadeInUp key={pillar.title} delay={100}>
                  <div
                    className={cn(
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                      i % 2 === 1 && "lg:[&>:first-child]:order-2"
                    )}
                  >
                    {/* Image */}
                    <div
                      className="parallax-container relative rounded-2xl overflow-hidden"
                      style={{
                        aspectRatio: "4/3",
                        boxShadow: "0 20px 60px rgba(30, 15, 5, 0.18)",
                      }}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="parallax-img w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(212,165,116,0.12) 0%, transparent 60%)",
                        }}
                      />
                      <div
                        className="absolute top-5 left-5"
                      >
                        <span
                          className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                          style={{
                            backgroundColor: "rgba(20, 10, 5, 0.75)",
                            color: "#D4A574",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {pillar.tag}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
                        style={{
                          background: "linear-gradient(135deg, rgba(212,165,116,0.25), rgba(200,90,23,0.25))",
                        }}
                      >
                        <span
                          className="font-bold text-sm"
                          style={{ color: "var(--color-accent)" }}
                        >
                          0{i + 1}
                        </span>
                      </div>
                      <h3
                        className="mb-5"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                          fontWeight: 700,
                          color: "var(--color-text)",
                          lineHeight: 1.15,
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className="mb-8"
                        style={{
                          color: "var(--color-muted)",
                          fontSize: "1.0625rem",
                          lineHeight: 1.85,
                        }}
                      >
                        {pillar.description}
                      </p>
                      <div
                        style={{
                          width: "60px",
                          height: "3px",
                          background: "linear-gradient(90deg, #D4A574, #C85A17)",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA BAND ── */}
        <section
          className="relative py-24 md:py-32 px-6 overflow-hidden"
          style={{ backgroundColor: "#1a0a02" }}
        >
          <img
            src="https://source.unsplash.com/1600x600/?artisanal,coffee,roastery,interior,warm"
            alt="Coffee roastery interior"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,10,2,0.85) 0%, rgba(26,10,2,0.6) 100%)",
            }}
          />
          <div className="relative max-w-2xl mx-auto text-center">
            <FadeInUp delay={0}>
              <span
                className="text-sm font-semibold uppercase tracking-widest block mb-6"
                style={{ color: "#D4A574" }}
              >
                Experience It Yourself
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.15,
                }}
              >
                Taste the Difference
                <br />
                <span className="gradient-heading">Craft Makes</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="mb-10 mx-auto max-w-lg"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.8,
                  fontSize: "1.0625rem",
                }}
              >
                Every cup we serve is poured with the same intention behind these words.
                Come visit us and experience the ritual in person.
              </p>
            </FadeInUp>
            <FadeInUp delay={300}>
              <a
                href="/visit"
                className="inline-block px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #D4A574, #C85A17)",
                  color: "#ffffff",
                  boxShadow: "0 8px 32px rgba(200, 90, 23, 0.45)",
                }}
              >
                Visit Us
              </a>
            </FadeInUp>
          </div>
        </section>
      </main>
    </>
  );
}
