"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const featureItems = [
  {
    title: "Quiet Focus",
    description:
      "Designed for work, study, and contemplation. A space where your morning ritual feels respected.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
        <path d="M18 2v4M22 2l-4 4" />
      </svg>
    ),
  },
  {
    title: "Natural Light",
    description:
      "Large windows, warm wood, and minimal noise. An environment that invites presence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    title: "Reliable WiFi",
    description:
      "Workspace-friendly. Remote workers and creators welcome.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Local Pastries",
    description:
      "Rotating selection of locally-sourced pastries and baked goods to complement your coffee.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

export default function VisitPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
      }}
    >
      <style>{`
        .visit-page-hero-img {
          will-change: transform;
        }

        .hours-line {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--color-muted);
        }

        .hours-line:last-child {
          border-bottom: none;
        }

        .map-placeholder {
          background: linear-gradient(135deg, #2c1f0e 0%, #3d2b14 40%, #4a3520 70%, #2c1f0e 100%);
          position: relative;
          overflow: hidden;
        }

        .map-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 48px, rgba(255,255,255,0.03) 48px, rgba(255,255,255,0.03) 49px),
            repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.03) 48px, rgba(255,255,255,0.03) 49px);
        }

        .map-pin-pulse {
          animation: pulse-ring 2s ease-out infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          80% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .feature-card {
          transition: transform 0.35s var(--ease-out, cubic-bezier(0.22,1,0.36,1)),
                      box-shadow 0.35s var(--ease-out, cubic-bezier(0.22,1,0.36,1));
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(44,31,14,0.15);
        }

        .cta-card {
          background: linear-gradient(135deg, #1e1208 0%, #2c1f0e 50%, #3a2912 100%);
        }

        .atmosphere-caption {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 1 — Location Map */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section
        id="location-map"
        className="pt-32 pb-20 px-6"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <span
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Scottsdale, Arizona
            </span>
          </FadeInUp>

          <FadeInUp delay={100}>
            <h1
              className="text-4xl md:text-6xl font-bold mb-14 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Visit Us in Scottsdale
            </h1>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Map */}
            <FadeInUp delay={150} className="lg:col-span-3">
              <div
                className="map-placeholder rounded-2xl w-full h-80 md:h-[420px] flex items-center justify-center relative"
                aria-label="Map of Scottsdale location"
              >
                {/* Decorative map grid lines */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: "url('https://source.unsplash.com/900x500/?scottsdale,arizona,aerial,map')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(60%) sepia(40%)",
                  }} />
                </div>
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(180deg, rgba(44,31,14,0.5) 0%, rgba(44,31,14,0.75) 100%)" }} />

                {/* Map Pin */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <span
                      className="map-pin-pulse absolute w-12 h-12 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)", opacity: 0.3 }}
                    />
                    <div
                      className="relative w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="text-sm font-semibold tracking-wide text-white/90 text-center px-4 py-2 rounded-lg"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
                  >
                    Sunrise Coffee Co. · Scottsdale, AZ
                  </p>
                  <a
                    href="https://maps.google.com/?q=Scottsdale,AZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-5 py-2 rounded-full transition-opacity hover:opacity-80"
                    style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </FadeInUp>

            {/* Info Panel */}
            <FadeInUp delay={200} className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 h-full flex flex-col justify-between"
                style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-muted)" }}
              >
                {/* Address */}
                <div className="mb-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.18em] mb-2 block"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Address
                  </span>
                  <p className="text-base" style={{ color: "var(--color-text)" }}>
                    Scottsdale, AZ
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--color-muted)" }}>
                    Contact us for exact address and current hours
                  </p>
                </div>

                {/* Hours */}
                <div className="mb-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.18em] mb-3 block"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Hours of Operation
                  </span>
                  <div style={{ color: "var(--color-text)" }}>
                    <div className="hours-line">
                      <span className="text-sm font-medium">Monday – Friday</span>
                      <span className="text-sm" style={{ color: "var(--color-muted)" }}>6:30 AM – 5:00 PM</span>
                    </div>
                    <div className="hours-line">
                      <span className="text-sm font-medium">Saturday</span>
                      <span className="text-sm" style={{ color: "var(--color-muted)" }}>7:00 AM – 4:00 PM</span>
                    </div>
                    <div className="hours-line">
                      <span className="text-sm font-medium">Sunday</span>
                      <span className="text-sm" style={{ color: "var(--color-muted)" }}>8:00 AM – 3:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Parking + Transit */}
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span
                      className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(var(--color-accent-rgb,180,100,40),0.12)", color: "var(--color-accent)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13" rx="2" />
                        <path d="M16 8h4l3 3v5h-7V8z" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--color-accent)" }}>Parking</p>
                      <p className="text-sm" style={{ color: "var(--color-muted)" }}>Street parking available. Easy access.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span
                      className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(var(--color-accent-rgb,180,100,40),0.12)", color: "var(--color-accent)" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <line x1="12" y1="12" x2="12" y2="16" />
                        <line x1="8" y1="14" x2="16" y2="14" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "var(--color-accent)" }}>Transit</p>
                      <p className="text-sm" style={{ color: "var(--color-muted)" }}>Check local transit options for directions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 2 — Atmosphere */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section
        id="atmosphere"
        className="relative"
        style={{ height: "70vh", minHeight: "420px" }}
        aria-label="Café interior atmosphere"
      >
        <img
          src="https://source.unsplash.com/1600x900/?cozy,coffee,shop,interior,natural,light"
          alt="Sunrise Coffee Co. café interior — warm natural light through large windows, wooden tables"
          className="visit-page-hero-img absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Gradient overlay — darker at edges, lighter in center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,10,5,0.55) 0%, rgba(20,10,5,0.2) 40%, rgba(20,10,5,0.2) 60%, rgba(20,10,5,0.7) 100%)",
          }}
        />

        {/* Subtle caption — bottom left */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <FadeInUp delay={0}>
            <p
              className="text-xs uppercase tracking-[0.25em] text-white/60 font-medium"
            >
              Scottsdale, AZ · Morning Light
            </p>
          </FadeInUp>
        </div>

        {/* Right-side vertical label */}
        <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 items-center">
          <span
            className="atmosphere-caption text-xs uppercase tracking-[0.3em] text-white/40 font-semibold"
          >
            The Ritual Space
          </span>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 3 — Feature Highlight */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section
        id="feature-highlight"
        className="py-24 md:py-32 px-6"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-xl mb-16 md:mb-20">
            <FadeInUp delay={0}>
              <span
                className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--color-accent)" }}
              >
                The Experience
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What to Expect
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="mt-5 text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                This is a destination for ritual, not transactions. Every detail
                is considered to make your visit feel intentional.
              </p>
            </FadeInUp>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureItems.map((item, i) => (
              <FadeInUp key={item.title} delay={i * 100}>
                <div
                  className="feature-card rounded-2xl p-7 h-full flex flex-col"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-muted)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: "rgba(var(--color-accent-rgb,180,100,40),0.1)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div
                    className="mt-6 h-0.5 w-8 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)", opacity: 0.4 }}
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SECTION 4 — Booking / Contact CTA */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section
        id="booking-cta"
        className="py-20 md:py-28 px-6"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <span
              className="block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-center"
              style={{ color: "var(--color-accent)" }}
            >
              Get in Touch
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hours &amp; Contact
            </h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p
              className="text-center text-base md:text-lg mb-12 md:mb-16"
              style={{ color: "var(--color-muted)" }}
            >
              Questions? Reach out anytime.
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <ShineBorder
              borderRadius={20}
              borderWidth={1}
              duration={8}
              color={["#b46428", "#d4894a", "#8b4513"]}
            >
              <div
                className="cta-card rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Hours Column */}
                  <div
                    className="p-8 md:p-10 border-b md:border-b-0 md:border-r"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="block text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Hours of Operation
                    </span>

                    <div className="space-y-4">
                      {[
                        { day: "Monday – Friday", hours: "6:30 AM – 5:00 PM" },
                        { day: "Saturday", hours: "7:00 AM – 4:00 PM" },
                        { day: "Sunday", hours: "8:00 AM – 3:00 PM" },
                      ].map(({ day, hours }) => (
                        <div
                          key={day}
                          className="flex justify-between items-baseline gap-4 pb-4"
                          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                        >
                          <span className="text-sm font-medium text-white/90">{day}</span>
                          <span className="text-sm text-white/55 tabular-nums">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Column */}
                  <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
                    <div>
                      <span
                        className="block text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                        style={{ color: "var(--color-accent)" }}
                      >
                        Reach Out
                      </span>

                      <div className="space-y-5">
                        {/* Email */}
                        <div className="flex items-center gap-4">
                          <span
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "rgba(180,100,40,0.18)", color: "var(--color-accent)" }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                          </span>
                          <div>
                            <p className="text-xs text-white/40 uppercase tracking-wide mb-0.5">Email us</p>
                            <a
                              href="mailto:hello@sunrisecoffee.local"
                              className="text-sm font-medium text-white/85 hover:text-white transition-colors"
                            >
                              hello@sunrisecoffee.local
                            </a>
                          </div>
                        </div>

                        {/* Phone / Contact */}
                        <div className="flex items-center gap-4">
                          <span
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "rgba(180,100,40,0.18)", color: "var(--color-accent)" }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.88 5.88l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                          </span>
                          <div>
                            <p className="text-xs text-white/40 uppercase tracking-wide mb-0.5">Call us</p>
                            <p className="text-sm text-white/70">Contact form below</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:hello@sunrisecoffee.local"
                        className="flex-1 text-center text-sm font-semibold px-5 py-3 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          color: "#fff",
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                        }}
                      >
                        Send a Message
                      </a>
                      <a
                        href="/contact"
                        className="flex-1 text-center text-sm font-semibold px-5 py-3 rounded-xl transition-all hover:opacity-80"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.75)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        Contact Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ShineBorder>
          </FadeInUp>

          {/* Sub-note */}
          <FadeInUp delay={300}>
            <p
              className="text-center text-xs mt-8"
              style={{ color: "var(--color-muted)" }}
            >
              We typically respond within a few hours during business hours.
            </p>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
