"use client";

import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

export default function VisitPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
      <style>{`
        @keyframes borderPour {
          from { height: 0%; }
          to { height: 100%; }
        }
        .event-card {
          position: relative;
          overflow: hidden;
        }
        .event-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 0%;
          background: #C85A17;
          transition: height 0.5s var(--ease-out, cubic-bezier(0.25, 0.46, 0.45, 0.94));
        }
        .event-card:hover::before {
          height: 100%;
        }
        .gallery-img {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery-img:hover {
          transform: scale(1.04);
        }
        .hours-row:last-child {
          border-bottom: none;
        }
      `}</style>

      {/* ─────────────────────────────────────────
          HERO — minimal-centered
      ───────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F5EFE6 0%, #EDE0CE 50%, #E8D5B7 100%)" }}
      >
        {/* Subtle texture layer */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #C85A1720 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8B6F4720 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 py-24">
          <FadeInUp delay={0}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ color: "#C85A17" }}
            >
              Scottsdale, Arizona
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "#2C1810" }}
            >
              Visit Sunrise
            </h1>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-md mx-auto"
              style={{ color: "#6B4F3A", fontFamily: "var(--font-body)" }}
            >
              Join us in Scottsdale for your daily ritual.
            </p>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div
              className="mt-10 w-16 h-px mx-auto"
              style={{ background: "#C85A17", opacity: 0.6 }}
            />
          </FadeInUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          LOCATION MAP — map-focused
      ───────────────────────────────────────── */}
      <section
        id="location"
        className="py-24 px-6"
        style={{ background: "#FAF6F0" }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-14">
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em] block mb-3"
                style={{ color: "#C85A17" }}
              >
                Directions
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#2C1810" }}
              >
                Find Us
              </h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Map embed */}
            <FadeInUp delay={100} className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "420px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26784.872929547!2d-111.92608!3d33.4942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b68b359baffff%3A0x9ffc3da2b4d6a5c2!2sScottsdale%2C%20AZ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunrise Coffee Co location"
                />
              </div>
            </FadeInUp>

            {/* Info card */}
            <FadeInUp delay={200} className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8D5B7",
                  boxShadow: "0 4px 24px rgba(139,111,71,0.08)",
                }}
              >
                {/* Address */}
                <div className="mb-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em] block mb-2"
                    style={{ color: "#C85A17" }}
                  >
                    Address
                  </span>
                  <p className="font-semibold text-lg" style={{ color: "#2C1810" }}>
                    Sunrise Coffee Co
                  </p>
                  <p className="text-base" style={{ color: "#6B4F3A" }}>
                    Scottsdale, AZ
                  </p>
                </div>

                {/* Phone */}
                <div className="mb-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em] block mb-2"
                    style={{ color: "#C85A17" }}
                  >
                    Phone
                  </span>
                  <p className="text-base" style={{ color: "#6B4F3A" }}>
                    Contact for details
                  </p>
                </div>

                {/* Hours */}
                <div className="mb-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em] block mb-3"
                    style={{ color: "#C85A17" }}
                  >
                    Hours
                  </span>
                  <div className="space-y-0">
                    {[
                      { day: "Monday", hours: "6:30 AM – 5:00 PM" },
                      { day: "Tuesday", hours: "6:30 AM – 5:00 PM" },
                      { day: "Wednesday", hours: "6:30 AM – 5:00 PM" },
                      { day: "Thursday", hours: "6:30 AM – 5:00 PM" },
                      { day: "Friday", hours: "6:30 AM – 6:00 PM" },
                      { day: "Saturday", hours: "7:00 AM – 6:00 PM" },
                      { day: "Sunday", hours: "7:00 AM – 4:00 PM" },
                    ].map(({ day, hours }) => (
                      <div
                        key={day}
                        className="hours-row flex justify-between items-center py-2"
                        style={{ borderBottom: "1px solid #F0E4D0" }}
                      >
                        <span className="text-sm font-medium" style={{ color: "#2C1810" }}>
                          {day}
                        </span>
                        <span className="text-sm" style={{ color: "#6B4F3A" }}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parking & Accessibility */}
                <div className="space-y-4">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.2em] block mb-1"
                      style={{ color: "#C85A17" }}
                    >
                      Parking
                    </span>
                    <p className="text-sm" style={{ color: "#6B4F3A" }}>
                      Ample street parking and lot parking available
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.2em] block mb-1"
                      style={{ color: "#C85A17" }}
                    >
                      Accessibility
                    </span>
                    <p className="text-sm" style={{ color: "#6B4F3A" }}>
                      Fully accessible. Restroom available for customers.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          ATMOSPHERE — full-bleed gallery
      ───────────────────────────────────────── */}
      <section
        id="atmosphere"
        className="py-20 px-6"
        style={{ background: "#2C1810" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-14">
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em] block mb-3"
                style={{ color: "#C85A17" }}
              >
                Our Environment
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#F5EFE6" }}
              >
                The Space
              </h2>
            </div>
          </FadeInUp>

          {/* Gallery grid: hero image + 3 smaller */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large featured image */}
            <FadeInUp delay={100} className="md:col-span-7 row-span-2">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: "520px" }}
              >
                <img
                  src="https://source.unsplash.com/900x700/?specialty+coffee+shop+interior+warm+wooden+tables+natural+light"
                  alt="Sunrise Coffee Co interior — warm wooden tables and natural light"
                  className="gallery-img w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInUp>

            {/* Top-right image */}
            <FadeInUp delay={150} className="md:col-span-5">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: "248px" }}
              >
                <img
                  src="https://source.unsplash.com/700x400/?pour+over+coffee+brewing+close+up+steam+morning+light"
                  alt="Pour-over brewing station with morning steam"
                  className="gallery-img w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInUp>

            {/* Bottom-right image */}
            <FadeInUp delay={200} className="md:col-span-5">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: "248px" }}
              >
                <img
                  src="https://source.unsplash.com/700x400/?modern+minimalist+coffee+shop+community+seating+area+warm+earth+tones"
                  alt="Community seating area with warm earth tones"
                  className="gallery-img w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInUp>

            {/* Full-width bottom strip */}
            <FadeInUp delay={250} className="md:col-span-12">
              <div className="rounded-2xl overflow-hidden relative" style={{ height: "220px" }}>
                <img
                  src="https://source.unsplash.com/1600x400/?barista+pouring+coffee+pour+over+cone+ceramic"
                  alt="Barista carefully pouring a pour-over"
                  className="gallery-img w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(44,24,16,0.6) 0%, rgba(44,24,16,0.1) 50%, rgba(44,24,16,0.6) 100%)",
                  }}
                >
                  <p
                    className="text-center text-lg md:text-xl font-light tracking-wide"
                    style={{ color: "rgba(245,239,230,0.9)", fontFamily: "var(--font-heading)" }}
                  >
                    Crafted with intention. Every cup, every visit.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          BOOKING CTA — prominent-card
      ───────────────────────────────────────── */}
      <section
        id="booking"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, #3D2314 0%, #5C3420 40%, #7A4A30 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeInUp delay={0}>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.25em] block mb-4"
                  style={{ color: "#E8B88A" }}
                >
                  Gatherings & Events
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#F5EFE6",
                  }}
                >
                  Group Visits &amp; Special Orders
                </h2>
              </FadeInUp>
              <FadeInUp delay={100}>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "rgba(245,239,230,0.75)", fontFamily: "var(--font-body)" }}
                >
                  Planning a group outing? Want to reserve seating for a gathering? We&rsquo;d love to host you. Contact us to arrange group visits, private cuppings, or special pour-over sessions. For inquiries and reservations, reach out via email or phone during business hours.
                </p>
              </FadeInUp>
            </div>

            <FadeInUp delay={200}>
              <ShineBorder
                borderRadius={20}
                borderWidth={1.5}
                duration={8}
                color={["#C85A17", "#E8B88A", "#F5EFE6"]}
              >
                <div
                  className="rounded-2xl p-8 md:p-10"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="space-y-6">
                    <div>
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.2em] block mb-2"
                        style={{ color: "#E8B88A" }}
                      >
                        Reach Out
                      </span>
                      <p
                        className="text-base"
                        style={{ color: "rgba(245,239,230,0.85)" }}
                      >
                        Email or call us during business hours to discuss your group visit or special request.
                      </p>
                    </div>

                    <div
                      className="w-full h-px"
                      style={{ background: "rgba(232,184,138,0.25)" }}
                    />

                    <div>
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.2em] block mb-2"
                        style={{ color: "#E8B88A" }}
                      >
                        Hours Reminder
                      </span>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.7)" }}>Mon–Thu</span>
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.9)" }}>6:30 AM – 5:00 PM</span>
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.7)" }}>Friday</span>
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.9)" }}>6:30 AM – 6:00 PM</span>
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.7)" }}>Saturday</span>
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.9)" }}>7:00 AM – 6:00 PM</span>
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.7)" }}>Sunday</span>
                        <span className="text-sm" style={{ color: "rgba(245,239,230,0.9)" }}>7:00 AM – 4:00 PM</span>
                      </div>
                    </div>

                    <div
                      className="w-full h-px"
                      style={{ background: "rgba(232,184,138,0.25)" }}
                    />

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:hello@sunrisecoffeeco.com"
                        className="flex-1 text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                        style={{
                          background: "#C85A17",
                          color: "#F5EFE6",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#A84810";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#C85A17";
                        }}
                      >
                        Email Us
                      </a>
                      <a
                        href="tel:+1"
                        className="flex-1 text-center px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
                        style={{
                          borderColor: "rgba(232,184,138,0.5)",
                          color: "#E8B88A",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(232,184,138,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                      >
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          EVENT LISTING — minimal-list
      ───────────────────────────────────────── */}
      <section
        id="events"
        className="py-24 px-6"
        style={{ background: "#FAF6F0" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeInUp delay={0}>
            <div className="mb-14">
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em] block mb-3"
                style={{ color: "#C85A17" }}
              >
                Community
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#2C1810" }}
              >
                Upcoming Events
              </h2>
            </div>
          </FadeInUp>

          <div className="space-y-1">
            {[
              {
                date: "Monthly",
                title: "Origin Talk & Cupping",
                description:
                  "Join us for an in-depth conversation about a featured origin. We'll taste the coffee, discuss farm practices, and answer all your questions. No experience necessary—just curiosity.",
              },
              {
                date: "First Saturday",
                title: "Coffee Lab: Brewing Methods",
                description:
                  "Learn different pour-over techniques. We'll compare brewing variables and taste how they change the cup. Hands-on and educational.",
              },
              {
                date: "Check back soon",
                title: "Special Events Coming",
                description:
                  "We're planning farm visits, roasting workshops, and origin-focused dinners. Subscribe to stay updated on upcoming announcements.",
              },
            ].map((event, i) => (
              <FadeInUp key={event.title} delay={i * 100}>
                <div
                  className="event-card group flex gap-6 md:gap-10 py-8 pl-6 pr-4 rounded-xl transition-all duration-300"
                  style={{
                    borderBottom: "1px solid #E8D5B7",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(139,111,71,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Date badge */}
                  <div className="flex-none pt-1">
                    <div
                      className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                      style={{
                        background: "#F5EFE6",
                        color: "#C85A17",
                        border: "1px solid #E8D5B7",
                      }}
                    >
                      {event.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl md:text-2xl font-bold mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-heading)", color: "#2C1810" }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: "#6B4F3A" }}
                    >
                      {event.description}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div
                    className="flex-none self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#C85A17" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10h12M11 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Subscribe CTA */}
          <FadeInUp delay={300}>
            <div className="mt-14 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p
                  className="text-base font-medium"
                  style={{ color: "#2C1810" }}
                >
                  Stay in the loop on cuppings, origin talks, and more.
                </p>
                <p className="text-sm mt-1" style={{ color: "#6B4F3A" }}>
                  Check back soon for upcoming announcements.
                </p>
              </div>
              <a
                href="mailto:hello@sunrisecoffeeco.com?subject=Subscribe to Events"
                className="flex-none inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: "#2C1810",
                  color: "#F5EFE6",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#C85A17";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#2C1810";
                }}
              >
                Subscribe for Updates
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
