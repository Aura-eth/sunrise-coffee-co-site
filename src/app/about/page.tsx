"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]" style={{ fontFamily: "var(--font-body)" }}>
      <style>{`
        .gradient-heading {
          background: linear-gradient(90deg, #D4A574, #C85A17);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-underline {
          position: relative;
          display: inline-block;
        }
        .gradient-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #D4A574, #C85A17);
          border-radius: 2px;
        }
        .team-card {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .team-card:hover {
          transform: translateY(-6px);
        }
        .stat-number {
          font-family: var(--font-heading);
          background: linear-gradient(135deg, #D4A574, #C85A17);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .narrative-section {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
        @media (max-width: 768px) {
          .narrative-section {
            background-attachment: scroll;
          }
        }
        .story-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #D4A574, #C85A17);
          border-radius: 2px;
          margin: 0 auto;
        }
        .team-photo-ring {
          background: linear-gradient(135deg, #D4A574, #C85A17);
          padding: 3px;
          border-radius: 9999px;
        }
        .role-badge {
          background: linear-gradient(90deg, rgba(212,165,116,0.15), rgba(200,90,23,0.12));
          border: 1px solid rgba(212,165,116,0.3);
        }
      `}</style>

      {/* ─── STORY SECTION ─── */}
      <section
        id="story"
        className="narrative-section relative"
        style={{
          backgroundImage: `url(https://source.unsplash.com/1800x1000/?single+origin+coffee+pour+over+close+up+golden+light)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-48 text-center text-white">
          <FadeInUp delay={0}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ color: "#D4A574" }}
            >
              Our Story
            </span>
          </FadeInUp>

          <FadeInUp delay={100}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Founded on a belief that coffee
              <br />
              <span className="gradient-heading">deserves intention</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="story-divider mb-10" />
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="space-y-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <p>
                Sunrise Coffee Co was born from a simple observation: most coffee shops treat beans as a commodity, not a craft. In 2015, our founder began traveling to coffee-producing regions—walking farms in Ethiopia, sitting with farmers in Colombia, learning about fermentation in Costa Rica.
              </p>
              <p className="text-white/65">
                What struck them most was the care, the generations of knowledge, the pride in each harvest. Yet on shelves back home, all that work was reduced to &ldquo;dark roast&rdquo; or &ldquo;breakfast blend.&rdquo;
              </p>
              <p>
                We opened Sunrise Coffee Co in Scottsdale with one mission: honor the origin. Single-origin pour-overs became our medium because they demand precision, they reveal character, and they force us to know our beans intimately.
              </p>
              <p
                className="text-white font-medium text-xl md:text-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Today, every cup we pour is a conversation between the farm and you—transparent, intentional, and undeniably delicious.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── ATMOSPHERIC BREAK ─── */}
      <section className="relative h-[35vh] overflow-hidden">
        <img
          src="https://source.unsplash.com/1600x600/?coffee+farm+highlands+morning+mist+origin"
          alt="Coffee farm highlands"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "scale(1.05)", transition: "transform 0.8s ease-out" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center text-white">
          <FadeInUp delay={0}>
            <p
              className="text-xl md:text-2xl font-light italic text-white/90 max-w-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              &ldquo;Every cup is a conversation between the farm and you.&rdquo;
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section
        id="stats"
        className="py-20 md:py-24 px-6"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: "9+", label: "Years of Single-Origin Specialization" },
              { number: "27", label: "Coffee Origins Sourced & Featured" },
              { number: "500+", label: "Cups Poured Daily" },
              { number: "100%", label: "Direct Trade or Fair Trade Sourced" },
            ].map((stat, i) => (
              <FadeInUp key={stat.label} delay={i * 100}>
                <div
                  className="text-center px-4 py-6 relative"
                  style={{
                    borderRight:
                      i < 3
                        ? "1px solid rgba(212,165,116,0.2)"
                        : "none",
                  }}
                >
                  <div
                    className="stat-number text-5xl md:text-6xl font-black mb-3 leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs md:text-sm font-medium uppercase tracking-widest leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM PROFILES ─── */}
      <section
        id="team"
        className="py-24 md:py-32 px-6"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <FadeInUp delay={0}>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-4"
                style={{ color: "#C85A17" }}
              >
                The People Behind the Cup
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="gradient-underline">Meet the Team</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="text-base md:text-lg max-w-xl mx-auto mt-6"
                style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
              >
                Each person on our team arrived here through their own journey with coffee. What unites us is a shared obsession with craft, transparency, and the connection between grower and guest.
              </p>
            </FadeInUp>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              {
                name: "Founder & Head Sourcer",
                role: "Founder",
                bio: "Coffee farmer at heart. Has personally visited farms across East Africa, Central America, and Southeast Asia. Believes every cup tells a story—we just have to listen.",
                image: "https://source.unsplash.com/400x500/?artisan+coffee+man+portrait+warm",
                icon: "☕",
              },
              {
                name: "Head Barista",
                role: "Head Barista & Training Lead",
                bio: "Specialty Coffee Association certified. Obsessed with precision, technique, and the moment a customer's face changes when they taste an origin for the first time.",
                image: "https://source.unsplash.com/400x500/?barista+woman+portrait+coffee",
                icon: "⚗️",
              },
              {
                name: "Roastmaster",
                role: "Roasting & Quality",
                bio: "Former aerospace engineer. Now applies that same obsession with detail to roasting profiles. Every batch is tested, tasted, and perfected.",
                image: "https://source.unsplash.com/400x500/?coffee+roaster+man+portrait",
                icon: "🔥",
              },
              {
                name: "Community Manager",
                role: "Education & Tastings",
                bio: "Passionate about teaching. Leads our monthly origin tastings and loves connecting customers with the farmers behind their cup.",
                image: "https://source.unsplash.com/400x500/?woman+coffee+educator+portrait",
                icon: "🌍",
              },
            ].map((member, i) => (
              <FadeInUp key={member.name} delay={i * 100}>
                <div className="team-card group h-full">
                  <ShineBorder
                    borderRadius={20}
                    borderWidth={1}
                    duration={8 + i * 2}
                    color={["#D4A574", "#C85A17", "#D4A574"]}
                  >
                    <div
                      className="rounded-xl overflow-hidden h-full flex flex-col"
                      style={{
                        backgroundColor: "var(--color-surface)",
                      }}
                    >
                      {/* Photo */}
                      <div className="relative overflow-hidden h-56 md:h-64">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        {/* Role badge overlay */}
                        <div className="absolute bottom-4 left-4">
                          <span
                            className="role-badge text-xs font-semibold px-3 py-1 rounded-full text-white/90 backdrop-blur-sm"
                          >
                            {member.role}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-lg">{member.icon}</span>
                          <h3
                            className="text-lg font-bold leading-snug"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {member.name}
                          </h3>
                        </div>
                        <div
                          className="w-8 h-0.5 mb-4 rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #D4A574, #C85A17)",
                          }}
                        />
                        <p
                          className="text-sm leading-relaxed flex-1"
                          style={{ color: "var(--color-muted)", lineHeight: 1.75 }}
                        >
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </ShineBorder>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING ATMOSPHERIC BAND ─── */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://source.unsplash.com/1600x800/?specialty+coffee+shop+counter+Scottsdale+aesthetic"
          alt="Sunrise Coffee Co interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <FadeInUp delay={0}>
            <p
              className="text-2xl md:text-4xl font-bold mb-6 leading-snug"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Come experience the conversation
              <br />
              <span className="gradient-heading">for yourself.</span>
            </p>
          </FadeInUp>
          <FadeInUp delay={100}>
            <a
              href="/visit"
              className="inline-block px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #D4A574, #C85A17)",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(200,90,23,0.35)",
              }}
            >
              Visit Us in Scottsdale
            </a>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
