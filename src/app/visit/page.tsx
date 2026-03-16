"use client";

import { useState } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const galleryImages = [
  { url: "https://source.unsplash.com/600x800/?coffee-shop-interior-warm-wood-light-aesthetic-specialty", alt: "Warm interior with wooden tables and soft morning light", tall: true },
  { url: "https://source.unsplash.com/600x600/?pour-over-coffee-brewing-close-up-hands-ritual", alt: "Pour-over brewing in action", tall: false },
  { url: "https://source.unsplash.com/600x700/?coffee-cup-latte-art-top-down-minimalist-wooden-table", alt: "Latte art on wooden table", tall: false },
  { url: "https://source.unsplash.com/600x900/?coffee-shop-interior-natural-light-seating", alt: "Sunlit seating area", tall: true },
  { url: "https://source.unsplash.com/600x600/?specialty-coffee-bar-espresso-barista", alt: "Barista at work behind the bar", tall: false },
  { url: "https://source.unsplash.com/600x750/?coffee-beans-detail-texture-roasted", alt: "Close-up of freshly roasted single-origin beans", tall: false },
  { url: "https://source.unsplash.com/600x800/?coffee-shop-community-people-gather", alt: "Community gathering at the coffee shop", tall: true },
  { url: "https://source.unsplash.com/600x600/?outdoor-patio-cafe-seating-desert", alt: "Outdoor seating in warm desert afternoon", tall: false },
  { url: "https://source.unsplash.com/600x700/?chemex-v60-pour-over-ritual-detail", alt: "Chemex pour-over ritual detail shot", tall: false },
  { url: "https://source.unsplash.com/600x800/?coffee-shop-window-light-minimalist", alt: "Window light casting warmth across the room", tall: true },
  { url: "https://source.unsplash.com/600x600/?coffee-mug-hands-warmth-morning", alt: "Hands cradling a warm coffee mug", tall: false },
  { url: "https://source.unsplash.com/600x650/?coffee-preparation-grinder-tools-craft", alt: "Craft tools of a specialty coffee bar", tall: false },
];

const faqs = [
  {
    question: "Do you have WiFi?",
    answer: "Yes. We offer complimentary WiFi, but we encourage you to be present. Our space is designed for focus and conversation—we believe deep work doesn't require constant connection.",
  },
  {
    question: "Can I work here for hours?",
    answer: "Absolutely. We welcome laptop workers, students, and thinkers. We ask only that you be respectful of the shared space and purchase a beverage.",
  },
  {
    question: "Do you offer milk-based drinks?",
    answer: "We offer pour-overs as our specialty, but we can prepare milk beverages upon request. However, we believe single-origin coffee shines best black.",
  },
  {
    question: "Can you accommodate groups or events?",
    answer: "Yes. We can arrange private tastings and small group experiences. Please contact us to discuss.",
  },
  {
    question: "Do you sell beans to take home?",
    answer: "Yes. All our single-origins are available for purchase, whole bean or ground. We'll advise on storage and preparation.",
  },
  {
    question: "What are your brewing methods?",
    answer: "Our specialty is pour-over (V60, Chemex, Kalita Wave). We also offer espresso-based drinks and French press upon request.",
  },
  {
    question: "Are your sourcing practices verified?",
    answer: "Yes. We maintain direct relationships with our farms and can provide documentation of origin, pricing, and practices. Transparency is non-negotiable for us.",
  },
];

export default function VisitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        .font-heading { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Source Sans 3', system-ui, sans-serif; }

        .warm-filter {
          filter: sepia(18%) saturate(1.15) brightness(1.03) contrast(0.97);
        }

        .gallery-img {
          filter: sepia(12%) saturate(1.1) brightness(1.02) contrast(0.98);
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
        }
        .gallery-img:hover {
          transform: scale(1.03);
          filter: sepia(5%) saturate(1.2) brightness(1.05) contrast(1.0);
        }

        @keyframes pour-drop {
          0% { stroke-dashoffset: 200; opacity: 0; }
          20% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.7; }
        }

        @keyframes pour-fill {
          0% { transform: scaleY(0); opacity: 0; }
          60% { opacity: 1; }
          100% { transform: scaleY(1); opacity: 0.9; }
        }

        .pour-stream {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: pour-drop 2.4s ease-in-out infinite;
        }

        .pour-cup-fill {
          transform-origin: bottom;
          transform: scaleY(0);
          animation: pour-fill 2.4s ease-in-out infinite;
          animation-delay: 1.0s;
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .faq-answer.open {
          grid-template-rows: 1fr;
        }
        .faq-answer-inner {
          overflow: hidden;
        }

        .location-card {
          background: linear-gradient(135deg, rgba(251,246,240,1) 0%, rgba(245,237,228,1) 100%);
        }

        .hero-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>

      <main className="font-body bg-[#faf6f1] text-[#2c1f14] min-h-screen">

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
        >
          <img
            src="https://source.unsplash.com/1600x900/?coffee-shop-interior-warm-wood-light-aesthetic-specialty"
            alt="Sunrise Coffee Co. interior"
            className="absolute inset-0 w-full h-full object-cover warm-filter"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f08]/70 via-[#1a0f08]/45 to-[#faf6f1]" />
          <div className="hero-grain absolute inset-0" />

          <div className="relative z-10 text-center max-w-2xl mx-auto px-6 pt-24 pb-16">
            <FadeInUp delay={0}>
              <span
                className="font-body text-xs tracking-[0.3em] uppercase text-[#c9a97a] mb-6 block"
              >
                Scottsdale, Arizona
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h1
                className="font-heading text-6xl md:text-8xl font-light text-white leading-[0.95] tracking-tight mb-6"
              >
                Visit Us
              </h1>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="font-body text-lg md:text-xl text-white/75 font-light leading-relaxed max-w-md mx-auto"
              >
                Step into a space designed for presence, craft, and coffee that matters.
              </p>
            </FadeInUp>

            {/* Pour animation */}
            <FadeInUp delay={350}>
              <div className="flex justify-center mt-12 opacity-80">
                <svg width="48" height="72" viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Kettle spout suggestion */}
                  <path
                    d="M24 4 C24 4, 24 8, 24 28"
                    stroke="#c9a97a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="pour-stream"
                  />
                  {/* Cup outline */}
                  <path
                    d="M10 36 L12 60 Q12 64 24 64 Q36 64 36 60 L38 36 Z"
                    stroke="#c9a97a"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinejoin="round"
                  />
                  {/* Cup fill */}
                  <path
                    d="M13 56 L14.5 59 Q14.5 62 24 62 Q33.5 62 33.5 59 L35 56 Z"
                    fill="#c9a97a"
                    className="pour-cup-fill"
                  />
                  {/* Handle */}
                  <path
                    d="M36 42 Q44 42 44 48 Q44 54 36 54"
                    stroke="#c9a97a"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </FadeInUp>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#2c1f14]">Explore</span>
            <div className="w-px h-8 bg-[#2c1f14]/40" />
          </div>
        </section>

        {/* ─── GALLERY ──────────────────────────────────────────── */}
        <section id="gallery" className="py-24 md:py-32 px-4 md:px-8 bg-[#faf6f1]">
          <div className="max-w-7xl mx-auto">
            <FadeInUp delay={0}>
              <div className="flex items-center gap-6 mb-16">
                <div className="h-px flex-1 bg-[#2c1f14]/10" />
                <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[#9c7a5a]">The Space</span>
                <div className="h-px flex-1 bg-[#2c1f14]/10" />
              </div>
            </FadeInUp>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
              {galleryImages.map((img, i) => (
                <FadeInUp key={i} delay={Math.min(i * 60, 300)}>
                  <div className="break-inside-avoid rounded-lg md:rounded-xl overflow-hidden group">
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full object-cover gallery-img"
                      style={{
                        aspectRatio: img.tall ? "3/4" : "4/3",
                      }}
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DIVIDER ──────────────────────────────────────────── */}
        <div className="px-8 md:px-16">
          <div className="h-px bg-gradient-to-r from-transparent via-[#2c1f14]/15 to-transparent" />
        </div>

        {/* ─── LOCATION / MAP ───────────────────────────────────── */}
        <section id="location" className="py-24 md:py-32 px-4 md:px-8 bg-[#faf6f1]">
          <div className="max-w-6xl mx-auto">
            <FadeInUp delay={0}>
              <div className="text-center mb-16 md:mb-20">
                <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[#9c7a5a] mb-4 block">
                  Where to Find Us
                </span>
                <h2 className="font-heading text-5xl md:text-6xl font-light text-[#2c1f14] leading-tight">
                  Find Us in Scottsdale
                </h2>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-stretch">
              {/* Sidebar info */}
              <FadeInUp delay={100} className="lg:col-span-2">
                <div className="location-card rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between border border-[#e0d2c0]">
                  <div className="space-y-8">
                    <div>
                      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9c7a5a] mb-2 block">Address</span>
                      <p className="font-heading text-2xl font-light text-[#2c1f14] leading-snug">
                        Scottsdale, Arizona
                      </p>
                    </div>

                    <div>
                      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9c7a5a] mb-2 block">Hours</span>
                      <div className="font-body text-[#5c3d2a] space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Monday – Friday</span>
                          <span className="text-[#2c1f14] font-medium">6am – 6pm</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span className="text-[#2c1f14] font-medium">7am – 5pm</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="text-[#2c1f14] font-medium">7am – 3pm</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9c7a5a] mb-2 block">Contact</span>
                      <p className="font-body text-sm text-[#5c3d2a]">[Contact information]</p>
                    </div>

                    <div>
                      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9c7a5a] mb-2 block">Parking</span>
                      <p className="font-body text-sm text-[#5c3d2a] leading-relaxed">
                        Street parking and nearby lot available
                      </p>
                    </div>

                    <div>
                      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#9c7a5a] mb-2 block">Nearby</span>
                      <p className="font-body text-sm text-[#5c3d2a] leading-relaxed">
                        Walking distance to galleries, shops, and downtown Scottsdale
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <ShineBorder
                      borderRadius={12}
                      borderWidth={1}
                      duration={6}
                      color={["#c9a97a", "#e8d5b7", "#9c7a5a"]}
                    >
                      <a
                        href="https://maps.google.com/?q=Scottsdale,Arizona"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-4 bg-[#2c1f14] text-[#faf6f1] rounded-xl font-body text-sm tracking-wide font-medium hover:bg-[#3d2b1a] transition-colors duration-300 w-full"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Get Directions
                      </a>
                    </ShineBorder>
                  </div>
                </div>
              </FadeInUp>

              {/* Map */}
              <FadeInUp delay={200} className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden border border-[#e0d2c0] h-full min-h-[400px] md:min-h-[500px] relative">
                  <iframe
                    title="Sunrise Coffee Co. Location – Scottsdale, AZ"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106433.5!2d-111.926!3d33.494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08f8ffffffff%3A0x0!2sScottsdale%2C%20AZ!5e0!3m2!1sen!2sus!4v1680000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px", filter: "sepia(20%) saturate(0.9) brightness(1.0) contrast(0.95)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full absolute inset-0"
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* ─── ATMOSPHERE BAND ──────────────────────────────────── */}
        <section
          className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(https://source.unsplash.com/1800x800/?coffee-shop-window-light-minimalist)`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/80 via-[#1a0f08]/55 to-[#1a0f08]/40" />
          <div className="hero-grain absolute inset-0" />
          <div className="relative text-center text-white px-6 max-w-xl">
            <FadeInUp delay={0}>
              <p className="font-heading text-3xl md:text-4xl font-light italic leading-relaxed text-white/90">
                &ldquo;A place where time slows down, and coffee is never rushed.&rdquo;
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section id="faq" className="py-24 md:py-32 px-4 md:px-8 bg-[#faf6f1]">
          <div className="max-w-3xl mx-auto">
            <FadeInUp delay={0}>
              <div className="text-center mb-16 md:mb-20">
                <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[#9c7a5a] mb-4 block">
                  Good to Know
                </span>
                <h2 className="font-heading text-5xl md:text-6xl font-light text-[#2c1f14] leading-tight">
                  Frequently Asked
                  <span className="block font-heading italic font-light text-[#9c7a5a]">Questions</span>
                </h2>
              </div>
            </FadeInUp>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <FadeInUp key={i} delay={Math.min(i * 60, 240)}>
                  <div
                    className={cn(
                      "border-b border-[#2c1f14]/10 last:border-b-0",
                      i === 0 && "border-t border-[#2c1f14]/10"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left flex items-center justify-between py-6 md:py-7 gap-6 group"
                      aria-expanded={openFaq === i}
                    >
                      <span
                        className={cn(
                          "font-heading text-xl md:text-2xl font-light leading-snug transition-colors duration-300",
                          openFaq === i ? "text-[#9c7a5a]" : "text-[#2c1f14] group-hover:text-[#7a5c3a]"
                        )}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          "flex-none w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-400",
                          openFaq === i
                            ? "border-[#9c7a5a] bg-[#9c7a5a] text-white rotate-45"
                            : "border-[#2c1f14]/20 text-[#2c1f14]/50 group-hover:border-[#9c7a5a] group-hover:text-[#9c7a5a]"
                        )}
                        style={{ transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), background-color 0.3s, border-color 0.3s, color 0.3s" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={cn("faq-answer", openFaq === i && "open")}
                      role="region"
                    >
                      <div className="faq-answer-inner">
                        <div className="pb-7 pr-14">
                          <p className="font-body text-base text-[#5c3d2a] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            {/* Closing note */}
            <FadeInUp delay={200}>
              <div className="mt-16 pt-10 border-t border-[#2c1f14]/10 text-center">
                <p className="font-body text-sm text-[#9c7a5a] leading-relaxed">
                  Still have questions? We're here.
                </p>
                <a
                  href="/contact"
                  className="inline-block mt-4 font-body text-sm font-medium text-[#2c1f14] border-b border-[#2c1f14]/40 hover:border-[#9c7a5a] hover:text-[#9c7a5a] transition-colors duration-300 pb-px tracking-wide"
                >
                  Get in touch
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

      </main>
    </>
  );
}
