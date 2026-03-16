"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Source Sans 3', sans-serif; }

        .warm-filter {
          filter: sepia(15%) saturate(110%) brightness(98%) contrast(105%);
        }

        .story-img-filter {
          filter: sepia(20%) saturate(115%) brightness(96%) contrast(108%) hue-rotate(-5deg);
        }

        .earth-bg-1 { background-color: #f9f5f0; }
        .earth-bg-2 { background-color: #f3ede3; }
        .earth-bg-3 { background-color: #fdf8f2; }

        .terracotta { color: #b05c3a; }
        .terracotta-bg { background-color: #b05c3a; }
        .terracotta-light { background-color: #f0e0d6; }
        .terracotta-border { border-color: #b05c3a; }

        .value-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(176, 92, 58, 0.12);
        }

        .team-card {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .team-card:hover {
          transform: translateY(-6px);
        }
        .team-card:hover .team-img {
          transform: scale(1.04);
        }

        .team-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .pour-anim-container {
          position: relative;
          display: inline-block;
        }

        @keyframes pourDrop {
          0% { stroke-dashoffset: 200; opacity: 0; }
          20% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.8; }
        }

        @keyframes fillCup {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }

        .pour-stream {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: pourDrop 2.4s ease-in-out infinite;
        }

        .cup-fill {
          transform-origin: bottom;
          animation: fillCup 2.4s ease-in-out infinite;
        }

        .story-section-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #b05c3a, transparent);
          margin: 1.5rem 0;
        }

        .golden-overlay {
          background: linear-gradient(
            135deg,
            rgba(180, 100, 40, 0.18) 0%,
            rgba(220, 160, 80, 0.12) 40%,
            rgba(160, 80, 30, 0.20) 100%
          );
          mix-blend-mode: multiply;
        }

        .section-label {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #b05c3a;
        }

        .large-quote-mark {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 7rem;
          line-height: 0.6;
          color: #b05c3a;
          opacity: 0.25;
          display: block;
          margin-bottom: -1rem;
        }

        .team-role-pill {
          display: inline-block;
          background: #f0e0d6;
          color: #b05c3a;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
        }

        .icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #f0e0d6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .value-number {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: #b05c3a;
          opacity: 0.18;
          line-height: 1;
          position: absolute;
          top: 1rem;
          right: 1.25rem;
        }
      `}</style>

      {/* ── STORY SECTION ── */}
      <section
        id="story"
        className="earth-bg-1 py-24 md:py-36"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image side */}
            <FadeInUp delay={0} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://source.unsplash.com/900x1100/?coffee+farmer+harvest+origin+Africa+South+America"
                  alt="Coffee farmer tending to single-origin coffee plants"
                  className="w-full h-[520px] md:h-[640px] object-cover story-img-filter"
                />
                {/* Golden overlay */}
                <div className="absolute inset-0 golden-overlay" />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/80 text-xs font-body tracking-widest uppercase">Ethiopia & Colombia · Est. 2021</p>
                </div>
                {/* Pour animation inset */}
                <div className="absolute top-6 right-6 opacity-70">
                  <svg width="44" height="64" viewBox="0 0 44 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pour stream */}
                    <path
                      className="pour-stream"
                      d="M22 2 Q24 16 22 30 Q20 40 22 50"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Cup outline */}
                    <path
                      d="M8 52 L10 62 H34 L36 52 Z"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinejoin="round"
                    />
                    {/* Cup fill */}
                    <rect
                      className="cup-fill"
                      x="10"
                      y="56"
                      width="24"
                      height="5"
                      fill="white"
                      opacity="0.5"
                      rx="1"
                    />
                    {/* Handle */}
                    <path
                      d="M36 54 Q42 54 42 58 Q42 62 36 62"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </FadeInUp>

            {/* Text side */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <FadeInUp delay={0}>
                <span className="section-label">Our Story</span>
              </FadeInUp>

              <FadeInUp delay={100}>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light mt-4 mb-6 leading-[1.08] tracking-tight text-[#2a1f17]">
                  The Sunrise
                  <br />
                  <em>Story</em>
                </h1>
              </FadeInUp>

              <FadeInUp delay={150}>
                <div className="story-section-divider" />
              </FadeInUp>

              <FadeInUp delay={200}>
                <div className="space-y-5 font-body text-[#5c4a3a] text-base md:text-lg leading-relaxed">
                  <p>
                    Sunrise Coffee was born from a simple belief: that great coffee is about relationships, not transactions. The journey began when our founder discovered single-origin coffee during travels through Ethiopia and Colombia.
                  </p>
                  <p>
                    What started as curiosity became obsession—visiting farms, learning languages, understanding terroir. Upon returning home to Scottsdale, there was a void. Most coffee shops prioritized speed and profit margins.
                  </p>
                  <p>
                    We wanted to create something different: a space where craft was honored, where farmers were paid fairly, where customers could taste the difference quality makes. In 2021, we opened our first location with a commitment to transparency, education, and intentionality.
                  </p>
                  <p className="font-heading text-xl md:text-2xl italic text-[#2a1f17] font-light leading-relaxed border-l-2 terracotta-border pl-5 ml-1">
                    &ldquo;Every bean has a story. Every cup matters. We&rsquo;re not here to be the fastest or the cheapest. We&rsquo;re here to be the truest.&rdquo;
                  </p>
                </div>
              </FadeInUp>
            </div>

          </div>
        </div>
      </section>

      {/* ── ATMOSPHERIC DIVIDER ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://source.unsplash.com/1600x400/?pour+over+coffee+brewing+close-up+hands+ritual"
          alt="Hands brewing pour-over coffee with intention"
          className="absolute inset-0 w-full h-full object-cover warm-filter"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #f9f5f0 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.50) 80%, #f3ede3 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeInUp delay={0}>
            <p className="font-heading text-white text-2xl md:text-4xl italic font-light tracking-wide text-center px-6 drop-shadow-lg">
              In a world of shortcuts, we choose the long way.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── FEATURE HIGHLIGHT — VALUES ── */}
      <section
        id="values"
        className="earth-bg-2 py-24 md:py-36"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-16 md:mb-20">
            <FadeInUp delay={0}>
              <span className="section-label">What We Stand For</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="font-heading text-5xl md:text-6xl font-light mt-3 text-[#2a1f17] tracking-tight">
                Our Values
              </h2>
            </FadeInUp>
            <FadeInUp delay={150}>
              <div className="w-12 h-px terracotta-bg mx-auto mt-5 opacity-60" />
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {/* Quality */}
            <FadeInUp delay={0}>
              <div className="value-card relative bg-white rounded-2xl p-7 md:p-8 border border-[#e8ddd3] overflow-hidden">
                <span className="value-number">01</span>
                <div className="icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" stroke="#b05c3a" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#2a1f17] mb-3">Quality</h3>
                <p className="font-body text-[#7a6555] text-sm leading-relaxed">
                  We obsess over every detail—sourcing, roasting, brewing. Excellence isn&rsquo;t negotiable.
                </p>
              </div>
            </FadeInUp>

            {/* Traceability */}
            <FadeInUp delay={100}>
              <div className="value-card relative bg-white rounded-2xl p-7 md:p-8 border border-[#e8ddd3] overflow-hidden">
                <span className="value-number">02</span>
                <div className="icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="10" r="3" stroke="#b05c3a" strokeWidth="1.5" fill="none" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#b05c3a" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#2a1f17] mb-3">Traceability</h3>
                <p className="font-body text-[#7a6555] text-sm leading-relaxed">
                  You deserve to know where your coffee comes from. We track ours from farm to cup.
                </p>
              </div>
            </FadeInUp>

            {/* Community */}
            <FadeInUp delay={150}>
              <div className="value-card relative bg-white rounded-2xl p-7 md:p-8 border border-[#e8ddd3] overflow-hidden">
                <span className="value-number">03</span>
                <div className="icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#b05c3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <circle cx="9" cy="7" r="4" stroke="#b05c3a" strokeWidth="1.5" fill="none" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="#b05c3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M16 3.13a4 4 0 010 7.75" stroke="#b05c3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#2a1f17] mb-3">Community</h3>
                <p className="font-body text-[#7a6555] text-sm leading-relaxed">
                  A coffee shop is only as good as the people in it. We create space for connection and belonging.
                </p>
              </div>
            </FadeInUp>

            {/* Ritual */}
            <FadeInUp delay={200}>
              <ShineBorder
                borderRadius={16}
                borderWidth={1.5}
                duration={6}
                color={["#b05c3a", "#d4956a", "#f0e0d6"]}
                className="h-full"
              >
                <div className="value-card relative bg-white rounded-2xl p-7 md:p-8 overflow-hidden h-full">
                  <span className="value-number">04</span>
                  <div className="icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#b05c3a" strokeWidth="1.5" fill="none" />
                      <polyline points="12 6 12 12 16 14" stroke="#b05c3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-[#2a1f17] mb-3">Ritual</h3>
                  <p className="font-body text-[#7a6555] text-sm leading-relaxed">
                    In a world obsessed with speed, we celebrate slowness, intention, and presence.
                  </p>
                </div>
              </ShineBorder>
            </FadeInUp>

          </div>
        </div>
      </section>

      {/* ── TEAM PROFILES ── */}
      <section
        id="team"
        className="earth-bg-3 py-24 md:py-36"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          <div className="text-center mb-16 md:mb-20">
            <FadeInUp delay={0}>
              <span className="section-label">Meet the People</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="font-heading text-5xl md:text-6xl font-light mt-3 text-[#2a1f17] tracking-tight">
                Our Team
              </h2>
            </FadeInUp>
            <FadeInUp delay={150}>
              <p className="font-body text-[#7a6555] mt-4 text-base md:text-lg max-w-md mx-auto">
                The passionate people behind every cup
              </p>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="w-12 h-px terracotta-bg mx-auto mt-5 opacity-60" />
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

            {/* Alex Rivera */}
            <FadeInUp delay={0}>
              <div className="team-card group">
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[3/4] relative">
                  <img
                    src="https://source.unsplash.com/500x660/?coffee+farmer+harvest+origin+Africa+South+America+man+portrait"
                    alt="Alex Rivera"
                    className="team-img w-full h-full object-cover warm-filter"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 golden-overlay" />
                </div>
                <span className="team-role-pill">Founder & Head of Sourcing</span>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#2a1f17] mt-3 mb-2">
                  Alex Rivera
                </h3>
                <p className="font-body text-[#7a6555] text-sm md:text-base leading-relaxed">
                  Coffee explorer and farmer advocate. Alex has visited over 40 farms across Africa and South America, building the direct relationships that define our sourcing. A true believer that coffee changes lives.
                </p>
              </div>
            </FadeInUp>

            {/* Maya Chen */}
            <FadeInUp delay={100}>
              <div className="team-card group">
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[3/4] relative">
                  <img
                    src="https://source.unsplash.com/500x660/?barista+woman+pour+over+specialty+coffee+portrait"
                    alt="Maya Chen"
                    className="team-img w-full h-full object-cover warm-filter"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 golden-overlay" />
                </div>
                <span className="team-role-pill">Lead Barista & Brew Director</span>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#2a1f17] mt-3 mb-2">
                  Maya Chen
                </h3>
                <p className="font-body text-[#7a6555] text-sm md:text-base leading-relaxed">
                  Specialty coffee champion with 8 years of pour-over experience. Maya treats every cup as an opportunity for precision and connection. When she&rsquo;s not perfecting technique, she&rsquo;s mentoring new baristas.
                </p>
              </div>
            </FadeInUp>

            {/* James Okafor */}
            <FadeInUp delay={200}>
              <div className="team-card group">
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[3/4] relative">
                  <img
                    src="https://source.unsplash.com/500x660/?coffee+shop+man+community+warm+smile+portrait"
                    alt="James Okafor"
                    className="team-img w-full h-full object-cover warm-filter"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 golden-overlay" />
                </div>
                <span className="team-role-pill">Community Manager</span>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#2a1f17] mt-3 mb-2">
                  James Okafor
                </h3>
                <p className="font-body text-[#7a6555] text-sm md:text-base leading-relaxed">
                  Heart of the space. James creates the warm, welcoming atmosphere that makes Sunrise Coffee feel like home. A connector of people and an excellent listener.
                </p>
              </div>
            </FadeInUp>

          </div>
        </div>
      </section>

      {/* ── CLOSING CTA BAND ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://source.unsplash.com/1600x600/?coffee+shop+interior+warm+wood+light+aesthetic+specialty"
          alt="Sunrise Coffee interior"
          className="absolute inset-0 w-full h-full object-cover warm-filter"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(42,31,23,0.82) 0%, rgba(80,45,20,0.70) 60%, rgba(176,92,58,0.50) 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <FadeInUp delay={0}>
            <span className="section-label" style={{ color: "#f0c99a" }}>Come Find Us</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-white mt-4 mb-6 leading-tight tracking-tight">
              Taste the
              <br />
              <em>difference</em>
            </h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="font-body text-white/70 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Every cup we serve is a conversation between farmer, barista, and you. Come experience it.
            </p>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="inline-block px-8 py-3.5 bg-[#b05c3a] text-white font-body font-semibold text-sm tracking-wide rounded-full hover:bg-[#95492d] transition-colors duration-300"
              >
                Explore Our Menu
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3.5 bg-transparent border border-white/50 text-white font-body font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Find Our Location
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

    </main>
  );
}
