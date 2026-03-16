"use client";

import { useState, useEffect, useRef } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const coffeeItems = [
  {
    name: "Ethiopian Yirgacheffe",
    origin: "Gedeo Zone, Southern Ethiopia",
    altitude: "1,900–2,200 masl",
    process: "Washed",
    tasting_notes: "Blueberry, jasmine, tea-like clarity",
    price: "$5.50",
    story: "Sourced from a women\u2019s cooperative in the birthplace of coffee. Bright acidity, floral complexity, and a delicate finish that captures the essence of the highlands.",
    image: "https://source.unsplash.com/800x600/?coffee,ethiopia,beans",
    accent: "#8B5E3C",
  },
  {
    name: "Kenyan AA Nyeri",
    origin: "Nyeri County, Central Kenya",
    altitude: "1,700–1,900 masl",
    process: "Washed",
    tasting_notes: "Blackcurrant, chocolate, wine notes",
    price: "$5.75",
    story: "AA grading indicates the largest bean size, hand-selected for consistency. Rich body, vibrant acidity, and complex fruit notes that evolve as the cup cools.",
    image: "https://source.unsplash.com/800x600/?coffee,kenya,farm",
    accent: "#6B3A2A",
  },
  {
    name: "Colombian Huila Single Farm",
    origin: "Huila Department, Southwest Colombia",
    altitude: "1,600–1,800 masl",
    process: "Honey-processed",
    tasting_notes: "Caramel, peach, balanced sweetness",
    price: "$5.50",
    story: "From a third-generation family farm practicing regenerative agriculture. The honey process adds body and sweetness while preserving the fruit-forward character.",
    image: "https://source.unsplash.com/800x600/?coffee,colombia,mountain",
    accent: "#A0722A",
  },
  {
    name: "Costa Rican Tarraz\u00fa",
    origin: "Tarraz\u00fa, Southern Zone",
    altitude: "1,400–1,600 masl",
    process: "Washed",
    tasting_notes: "Chocolate, hazelnut, subtle spice",
    price: "$5.25",
    story: "Grown in volcanic soil and aged for 12 months before roasting. Deep complexity, full body, and a smooth finish that speaks to the unique terroir of the region.",
    image: "https://source.unsplash.com/800x600/?coffee,costarica,volcanic",
    accent: "#7A4F35",
  },
  {
    name: "Indonesian Sumatra Mandheling",
    origin: "North Sumatra, Indonesia",
    altitude: "800–1,200 masl",
    process: "Wet-hulled (Giling Basah)",
    tasting_notes: "Earthy, cedar, full body, low acidity",
    price: "$5.50",
    story: "The unique wet-hulling process creates distinctive earthiness and body. Rich, bold, and complex\u2014perfect for those who prefer darker, more robust cups.",
    image: "https://source.unsplash.com/800x600/?coffee,sumatra,forest",
    accent: "#5C3D1E",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Grind Fresh",
    description: "We grind your chosen origin moments before brewing to preserve volatiles and complexity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Rinse & Bloom",
    description: "The filter is rinsed with hot water, and grounds are bloomed to release CO\u2082 and prep the bed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Pour with Intention",
    description: "We pour at precise temperature (195\u2013205\u00b0F) in controlled pulses, maintaining even saturation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M8 3h8l1 9H7L8 3z" />
        <path d="M7 12c0 4 2 7 5 9 3-2 5-5 5-9" />
        <path d="M12 21v-9" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Observe & Adjust",
    description: "Brew time typically 3\u20134 minutes. We watch the color and flow, never rushing the process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Savor the Story",
    description: "Your cup is served fresh, ready to explore the origins and effort captured in every sip.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What does \u2018single-origin\u2019 mean?",
    answer: "Single-origin coffee comes from one specific region or farm, rather than a blend of beans from multiple sources. This allows you to taste the unique characteristics (terroir) of that place\u2014the soil, altitude, climate, and processing methods.",
  },
  {
    question: "Why is pour-over better than other brewing methods?",
    answer: "Pour-over gives us precise control over temperature, water distribution, and extraction time. It highlights the nuance and complexity of single-origin coffees better than many automated methods. It\u2019s also a mindful ritual that connects you to the craft.",
  },
  {
    question: "How should I store my coffee at home?",
    answer: "Store beans in an airtight container, away from light, heat, and moisture. A cool, dark cupboard is ideal. Grind just before brewing. Whole beans stay fresh for 2\u20133 weeks after roasting; ground coffee loses quality within days.",
  },
  {
    question: "What\u2019s the difference between washed and natural processing?",
    answer: "Washed coffees are cleaned of fruit before drying, resulting in brighter acidity and cleaner flavors. Natural (dry) processed coffees ferment with fruit intact, creating fuller body and fruitier notes. Honey processing (wet fermentation) is a middle ground.",
  },
  {
    question: "Can I order online or buy beans to take home?",
    answer: "We\u2019re currently focused on the caf\u00e9 experience. We\u2019re developing an online shop for 2025. For now, visit us in Scottsdale or contact us about wholesale inquiries.",
  },
  {
    question: "Do you offer brewing consultations or classes?",
    answer: "Yes. We offer informal guidance while you visit, and we\u2019re developing a small workshop series on pour-over technique and origin education. Contact us to express interest.",
  },
];

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeInUp delay={index * 80}>
      <div
        className={cn(
          "border rounded-2xl overflow-hidden transition-all duration-300",
          open ? "border-[var(--color-primary)]/40 shadow-sm" : "border-[var(--color-muted)]/30"
        )}
        style={{ background: open ? "rgba(139,94,60,0.04)" : "var(--color-surface)" }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-7 py-6 text-left cursor-pointer group"
          aria-expanded={open}
        >
          <span
            className="font-semibold text-lg leading-snug pr-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            {question}
          </span>
          <span
            className={cn(
              "flex-none w-8 h-8 rounded-full flex items-center justify-center text-lg font-light transition-all duration-300",
              open ? "rotate-45" : "rotate-0"
            )}
            style={{ background: "var(--color-primary)", color: "#fff" }}
          >
            +
          </span>
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-out",
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <p
            className="px-7 pb-7 text-base leading-relaxed"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
          >
            {answer}
          </p>
        </div>
      </div>
    </FadeInUp>
  );
}

function CoffeeCard({ item, index }: { item: typeof coffeeItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="coffee-card group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(32px)",
        transition: `opacity 0.6s var(--ease-out) ${index * 120}ms, transform 0.6s var(--ease-out) ${index * 120}ms, box-shadow 0.3s ease`,
        border: "1px solid rgba(139,94,60,0.1)",
      }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${item.accent}cc 0%, ${item.accent}44 50%, transparent 100%)` }}
        />
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
          <span
            className="text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(6px)" }}
          >
            {item.process}
          </span>
          <span
            className="text-white text-xl font-bold"
            style={{ fontFamily: "var(--font-heading)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            {item.price}
          </span>
        </div>
      </div>
      <div className="p-7">
        <div className="mb-4">
          <h3
            className="text-2xl font-bold mb-1 leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            {item.name}
          </h3>
          <p className="text-sm font-medium" style={{ color: item.accent }}>
            {item.origin}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div
            className="rounded-xl px-3 py-2.5"
            style={{ background: "rgba(139,94,60,0.06)" }}
          >
            <span
              className="text-xs uppercase tracking-widest font-semibold block mb-0.5"
              style={{ color: "var(--color-muted)" }}
            >
              Altitude
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
            >
              {item.altitude}
            </span>
          </div>
          <div
            className="rounded-xl px-3 py-2.5"
            style={{ background: "rgba(139,94,60,0.06)" }}
          >
            <span
              className="text-xs uppercase tracking-widest font-semibold block mb-0.5"
              style={{ color: "var(--color-muted)" }}
            >
              Process
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
            >
              {item.process}
            </span>
          </div>
        </div>
        <div className="mb-5">
          <span
            className="text-xs uppercase tracking-widest font-semibold block mb-2"
            style={{ color: "var(--color-muted)" }}
          >
            Tasting Notes
          </span>
          <div className="flex flex-wrap gap-2">
            {item.tasting_notes.split(", ").map((note) => (
              <span
                key={note}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{
                  background: `${item.accent}18`,
                  color: item.accent,
                  border: `1px solid ${item.accent}30`,
                }}
              >
                {note}
              </span>
            ))}
          </div>
        </div>
        <div
          className="pt-5"
          style={{ borderTop: "1px solid rgba(139,94,60,0.12)" }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
          >
            {item.story}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CoffeePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-text-enter {
          animation: fadeSlideUp 0.8s var(--ease-out, cubic-bezier(0.16,1,0.3,1)) both;
        }
        .hero-text-enter-delay {
          animation: fadeSlideUp 0.8s var(--ease-out, cubic-bezier(0.16,1,0.3,1)) 0.15s both;
        }
        .step-line {
          background: linear-gradient(to bottom, var(--color-primary, #8B5E3C), transparent);
          opacity: 0.25;
        }
        details[open] > summary .faq-plus {
          transform: rotate(45deg);
        }
        .process-icon-wrap {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .process-step:hover .process-icon-wrap {
          transform: scale(1.08);
          background: var(--color-primary, #8B5E3C);
          color: #fff;
        }
        .tasting-pill {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .tasting-pill:hover {
          transform: translateY(-1px);
        }
      `}</style>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-[70vh] md:min-h-[75vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2C1A0E 0%, #4A2C1A 40%, #6B3A1F 70%, #8B5E3C 100%)" }}
      >
        {/* Atmospheric texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://source.unsplash.com/1600x900/?coffee,beans,dark')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: "transform",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(44,26,14,0.7) 0%, rgba(44,26,14,0.5) 50%, rgba(44,26,14,0.85) 100%)" }}
        />

        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 opacity-30" style={{ background: "linear-gradient(to bottom, transparent, #D4A97A)" }} />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 py-24">
          <div className="hero-text-enter">
            <span
              className="inline-block text-xs uppercase tracking-[0.3em] font-semibold mb-6"
              style={{ color: "#D4A97A" }}
            >
              Sunrise Coffee Co.
            </span>
          </div>
          <h1
            className="hero-text-enter text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", animationDelay: "0.05s" }}
          >
            Our Current Selection
          </h1>
          <p
            className="hero-text-enter-delay text-lg md:text-xl leading-relaxed max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-body)" }}
          >
            Carefully sourced, expertly prepared. Rotating single-origin pour-overs that celebrate terroir.
          </p>
          <div className="hero-text-enter-delay mt-10" style={{ animationDelay: "0.3s" }}>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
              style={{ color: "#D4A97A" }}
            >
              Explore the menu
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg, #FAF6F0))" }}
        />
      </section>

      {/* MENU SHOWCASE */}
      <section
        id="menu"
        className="py-24 md:py-32 px-5 md:px-8"
        style={{ background: "var(--color-bg, #FAF6F0)" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-5">
              <span
                className="inline-block text-xs uppercase tracking-[0.3em] font-semibold mb-4"
                style={{ color: "var(--color-primary, #8B5E3C)" }}
              >
                On the Menu
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
              >
                Single-Origin Pour-Overs
              </h2>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p
              className="text-center text-base md:text-lg max-w-xl mx-auto mb-16"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}
            >
              Each cup tells the story of its land. Our selection rotates seasonally to follow peak harvest windows around the world.
            </p>
          </FadeInUp>

          {/* Masonry-inspired staggered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeItems.map((item, i) => (
              <div
                key={item.name}
                className={cn(
                  i === 0 ? "lg:col-span-1 lg:row-span-1" : "",
                  i === 1 ? "lg:col-span-1" : "",
                )}
              >
                <CoffeeCard item={item} index={i} />
              </div>
            ))}
          </div>

          <FadeInUp delay={200}>
            <p
              className="text-center text-sm mt-12"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
            >
              ✦ All prices reflect a 12 oz pour-over served fresh at the bar
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section
        id="process"
        className="relative py-24 md:py-32 px-5 md:px-8 overflow-hidden"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://source.unsplash.com/1600x900/?pour,over,coffee,brewing"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(250,246,240,0.97) 0%, rgba(250,246,240,0.93) 60%, rgba(250,246,240,0.85) 100%)" }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-4">
              <span
                className="inline-block text-xs uppercase tracking-[0.3em] font-semibold mb-4"
                style={{ color: "var(--color-primary, #8B5E3C)" }}
              >
                Craft & Process
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
              >
                The Pour-Over Ritual
              </h2>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p
              className="text-center text-base md:text-lg mb-16 max-w-lg mx-auto"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}
            >
              Each step matters
            </p>
          </FadeInUp>

          {/* Desktop: horizontal steps. Mobile: vertical timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div
                className="absolute top-[2.75rem] left-[calc(10%-0.5px)] right-[calc(10%-0.5px)] h-px"
                style={{ background: "linear-gradient(to right, transparent, var(--color-primary, #8B5E3C)40, var(--color-primary, #8B5E3C)40, transparent)" }}
              />
              <div className="grid grid-cols-5 gap-4">
                {processSteps.map((step, i) => (
                  <FadeInUp key={step.number} delay={i * 100}>
                    <div className="process-step text-center group cursor-default">
                      <div
                        className="process-icon-wrap w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10"
                        style={{
                          background: "var(--color-surface, #F5EFE6)",
                          color: "var(--color-primary, #8B5E3C)",
                          border: "1.5px solid rgba(139,94,60,0.18)",
                          boxShadow: "0 2px 12px rgba(139,94,60,0.08)",
                        }}
                      >
                        {step.icon}
                        <span
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                          style={{ background: "var(--color-primary, #8B5E3C)" }}
                        >
                          {step.number}
                        </span>
                      </div>
                      <h3
                        className="text-sm font-bold mb-2 leading-tight"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden">
            <div className="relative ml-5">
              <div
                className="absolute top-0 bottom-0 left-[1.75rem] w-px step-line"
              />
              <div className="space-y-10">
                {processSteps.map((step, i) => (
                  <FadeInUp key={step.number} delay={i * 100}>
                    <div className="process-step flex gap-5 items-start relative">
                      <div
                        className="process-icon-wrap flex-none w-14 h-14 rounded-xl flex items-center justify-center relative z-10"
                        style={{
                          background: "var(--color-surface, #F5EFE6)",
                          color: "var(--color-primary, #8B5E3C)",
                          border: "1.5px solid rgba(139,94,60,0.18)",
                          boxShadow: "0 2px 8px rgba(139,94,60,0.1)",
                        }}
                      >
                        {step.icon}
                        <span
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white"
                          style={{ background: "var(--color-primary, #8B5E3C)", fontSize: "10px" }}
                        >
                          {step.number}
                        </span>
                      </div>
                      <div className="pt-1">
                        <h3
                          className="text-base font-bold mb-1.5"
                          style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATMOSPHERIC BAND */}
      <div
        className="relative h-1.5 w-full"
        style={{
          background: "linear-gradient(to right, var(--color-bg, #FAF6F0), var(--color-primary, #8B5E3C)40, var(--color-bg, #FAF6F0))",
        }}
      />

      {/* FAQ */}
      <section
        id="faq"
        className="py-24 md:py-32 px-5 md:px-8"
        style={{ background: "var(--color-surface, #F5EFE6)" }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeInUp delay={0}>
            <div className="text-center mb-5">
              <span
                className="inline-block text-xs uppercase tracking-[0.3em] font-semibold mb-4"
                style={{ color: "var(--color-primary, #8B5E3C)" }}
              >
                Learn More
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p
              className="text-center text-base md:text-lg mb-14 max-w-xl mx-auto"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}
            >
              Everything you wanted to know about single-origin coffee, sourcing, and the pour-over ritual.
            </p>
          </FadeInUp>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>

          <FadeInUp delay={300}>
            <div
              className="mt-16 rounded-3xl p-8 md:p-10 text-center"
              style={{
                background: "linear-gradient(135deg, #2C1A0E 0%, #4A2C1A 100%)",
              }}
            >
              <p
                className="text-sm uppercase tracking-[0.25em] font-semibold mb-3"
                style={{ color: "#D4A97A" }}
              >
                Still curious?
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Come in and let&#39;s talk coffee
              </h3>
              <p
                className="text-sm mb-7 max-w-sm mx-auto"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)", lineHeight: 1.8 }}
              >
                Our baristas are passionate educators. Every visit is a chance to deepen your understanding of what&#39;s in your cup.
              </p>
              <a
                href="/visit"
                className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "#D4A97A",
                  color: "#2C1A0E",
                  fontFamily: "var(--font-body)",
                }}
              >
                Plan Your Visit
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
