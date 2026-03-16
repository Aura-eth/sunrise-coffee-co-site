"use client";

import { useState } from "react";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const coffeeItems = [
  {
    name: "Ethiopian Yirgacheffe",
    origin: "Gedeo Zone, Ethiopia",
    altitude: "1,900\u20132,200m",
    process: "Washed",
    notes: "Blueberry, jasmine, bright acidity",
    availability: "In Stock",
    price: "$6",
    image: "https://source.unsplash.com/600x400/?ethiopia,coffee,beans",
    color: "from-amber-900 to-amber-700",
  },
  {
    name: "Colombian Geisha",
    origin: "Panama, Boquete Region",
    altitude: "1,500\u20131,700m",
    process: "Washed",
    notes: "Floral, tropical fruit, silky body",
    availability: "In Stock",
    price: "$7",
    image: "https://source.unsplash.com/600x400/?colombia,coffee,farm",
    color: "from-stone-800 to-amber-800",
  },
  {
    name: "Kenyan AA",
    origin: "Mount Kenya, Central Highlands",
    altitude: "1,700\u20132,000m",
    process: "Washed",
    notes: "Black currant, citrus, wine-like complexity",
    availability: "In Stock",
    price: "$6.50",
    image: "https://source.unsplash.com/600x400/?kenya,coffee,highland",
    color: "from-red-900 to-amber-800",
  },
  {
    name: "Natural Process Anaerobic",
    origin: "Costa Rica, San Isidro",
    altitude: "1,600\u20131,900m",
    process: "Natural Fermented",
    notes: "Fermented berry, chocolate, full body",
    availability: "In Stock",
    price: "$7.50",
    image: "https://source.unsplash.com/600x400/?costa,rica,coffee,natural",
    color: "from-orange-900 to-red-800",
  },
  {
    name: "Indonesian Sumatra Mandheling",
    origin: "North Sumatra, Indonesia",
    altitude: "1,200\u20131,600m",
    process: "Wet-Hulled",
    notes: "Earthy, herbal, low acid, full body",
    availability: "Limited",
    price: "$6.50",
    image: "https://source.unsplash.com/600x400/?sumatra,indonesia,coffee",
    color: "from-green-900 to-stone-800",
  },
  {
    name: "Rwandan Bourbon",
    origin: "Huye District, Rwanda",
    altitude: "1,800\u20132,100m",
    process: "Fully Washed",
    notes: "Cherry, cocoa, balanced sweetness",
    availability: "Seasonal",
    price: "$7",
    image: "https://source.unsplash.com/600x400/?rwanda,coffee,cherry",
    color: "from-rose-900 to-amber-900",
  },
];

const galleryImages = [
  {
    url: "https://source.unsplash.com/800x1000/?coffee,farm,highlands,morning",
    alt: "Coffee farm highlands morning light",
    span: "row-span-2",
  },
  {
    url: "https://source.unsplash.com/800x500/?coffee,cherry,branch,ripening",
    alt: "Coffee cherry ripening on branch",
    span: "",
  },
  {
    url: "https://source.unsplash.com/800x500/?hands,harvesting,coffee,cherries",
    alt: "Hands harvesting ripe coffee cherries",
    span: "",
  },
  {
    url: "https://source.unsplash.com/800x600/?roasted,coffee,beans,cooling",
    alt: "Fresh roasted beans cooling",
    span: "",
  },
  {
    url: "https://source.unsplash.com/800x1000/?pour,over,coffee,bloom,close",
    alt: "Close-up of pour over bloom",
    span: "row-span-2",
  },
  {
    url: "https://source.unsplash.com/800x500/?coffee,pour,golden,stream,cup",
    alt: "Golden stream pouring into white cup",
    span: "",
  },
  {
    url: "https://source.unsplash.com/800x500/?specialty,coffee,single,origin,cup",
    alt: "Finished single origin pour over",
    span: "",
  },
];

function AvailabilityBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "In Stock": "bg-emerald-50 text-emerald-700 border-emerald-200",
    Limited: "bg-amber-50 text-amber-700 border-amber-200",
    Seasonal: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border",
        styles[status] ?? "bg-stone-50 text-stone-600 border-stone-200"
      )}
    >
      {status}
    </span>
  );
}

function CoffeeCard({ item, index }: { item: (typeof coffeeItems)[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <FadeInUp delay={index * 80} className="h-full">
      <div
        className="coffee-card-wrapper h-full cursor-pointer"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped((f) => !f)}
        style={{ perspective: "1000px" }}
      >
        <div
          className="coffee-card-inner relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            minHeight: "360px",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className={cn("absolute inset-0 opacity-30 bg-gradient-to-b", item.color)} />
              <div className="absolute top-3 right-3">
                <AvailabilityBadge status={item.availability} />
              </div>
            </div>
            <div className="p-5">
              <h3
                className="text-lg font-bold mb-1 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
              >
                {item.name}
              </h3>
              <p className="text-xs text-stone-500 mb-3 tracking-wide">{item.origin}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.notes.split(", ").map((note) => (
                  <span
                    key={note}
                    className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-100"
                  >
                    {note}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                <span className="text-xs text-stone-400 uppercase tracking-widest">{item.process}</span>
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.price}
                </span>
              </div>
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-center items-start p-7"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: "linear-gradient(135deg, #3b1f0e 0%, #6b3a20 60%, #b45309 100%)",
            }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">Origin Details</span>
            <h3 className="text-xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              {item.name}
            </h3>
            <div className="space-y-3 w-full">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-xs text-white/60 uppercase tracking-wide">Origin</span>
                <span className="text-sm text-white font-medium text-right max-w-[60%]">{item.origin}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-xs text-white/60 uppercase tracking-wide">Altitude</span>
                <span className="text-sm text-white font-medium">{item.altitude}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-xs text-white/60 uppercase tracking-wide">Process</span>
                <span className="text-sm text-white font-medium">{item.process}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60 uppercase tracking-wide">Tasting</span>
                <span className="text-sm text-amber-200 font-medium text-right max-w-[60%]">{item.notes}</span>
              </div>
            </div>
            <div className="mt-6 w-full flex justify-between items-center">
              <AvailabilityBadge status={item.availability} />
              <span className="text-2xl font-bold text-white">{item.price}</span>
            </div>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}

export default function CoffeePage() {
  return (
    <>
      <style>{`
        .gradient-heading {
          background: linear-gradient(90deg, #D4A574 0%, #C85A17 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .coffee-card-wrapper {
          height: 100%;
        }
        .coffee-card-inner {
          height: 100%;
        }
        @keyframes heroParallax {
          0% { transform: scale(1.08) translateY(0px); }
          100% { transform: scale(1.0) translateY(-18px); }
        }
        .hero-img {
          animation: heroParallax 8s ease-out forwards;
        }
        .masonry-grid {
          columns: 1;
        }
        @media (min-width: 640px) {
          .masonry-grid { columns: 2; }
        }
        @media (min-width: 1024px) {
          .masonry-grid { columns: 3; }
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
        .masonry-item img {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s ease;
        }
        .masonry-item:hover img {
          transform: scale(1.03);
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }
      `}</style>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://source.unsplash.com/1600x900/?pour,over,coffee,single,origin,golden"
          alt="Single origin pour-over coffee"
          className="hero-img absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,10,5,0.55) 0%, rgba(30,15,5,0.35) 40%, rgba(15,8,3,0.75) 100%)",
          }}
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <FadeInUp delay={0}>
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.25em] mb-6 px-4 py-1.5 rounded-full border"
              style={{ color: "#D4A574", borderColor: "rgba(212,165,116,0.35)", background: "rgba(212,165,116,0.08)" }}
            >
              Sunrise Coffee Co.
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
            >
              Our Single-Origin
              <br />
              <span className="gradient-heading">Selection</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p
              className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-body)" }}
            >
              Sourced directly from farms we trust. Each origin brings its own character, story, and flavor profile.
            </p>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="mt-10 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#D4A574" }}>6</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Origins</div>
              </div>
              <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#D4A574" }}>Direct</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Sourced</div>
              </div>
              <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#D4A574" }}>Weekly</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Roasted</div>
              </div>
            </div>
          </FadeInUp>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to top, #faf7f4, transparent)" }}
        />
      </section>

      {/* MENU SHOWCASE */}
      <section
        id="menu-showcase"
        className="py-28 px-6"
        style={{ background: "var(--color-bg, #faf7f4)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <FadeInUp delay={0}>
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.22em] mb-4"
                style={{ color: "var(--color-primary, #C85A17)" }}
              >
                What We're Pouring
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="text-4xl md:text-5xl font-bold mb-5"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
              >
                Current{" "}
                <span className="gradient-heading">Offerings</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="text-base md:text-lg max-w-lg mx-auto leading-relaxed"
                style={{ color: "var(--color-muted, #78716c)" }}
              >
                Hover any card to reveal full origin details. Each coffee is roasted to order and brewed as a pour-over.
              </p>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {coffeeItems.map((item, i) => (
              <CoffeeCard key={item.name} item={item} index={i} />
            ))}
          </div>

          <FadeInUp delay={100}>
            <div
              className="mt-16 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-4 border"
              style={{
                background: "linear-gradient(135deg, #fdf6ee 0%, #fef3e8 100%)",
                borderColor: "rgba(212,165,116,0.3)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(200,90,23,0.12)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#C85A17" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="#C85A17" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#7c5c3b" }}>
                <strong className="font-semibold" style={{ color: "#4a2e14" }}>Rotating Selection.</strong>{" "}
                Our single-origin offerings change with the harvest cycle. Seasonal and limited varieties may sell out — ask your barista about upcoming arrivals.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ATMOSPHERIC BAND */}
      <section
        className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="https://source.unsplash.com/1600x600/?coffee,roastery,wooden,warm,aesthetic"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "scale(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(30,12,4,0.52)" }}
        />
        <div className="relative z-10 text-center px-6">
          <p
            className="text-xl md:text-3xl font-light italic"
            style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-heading)", letterSpacing: "0.01em" }}
          >
            &#8220;Traceability is not a feature. It&rsquo;s the foundation.&#8221;
          </p>
        </div>
        <div
          className="absolute top-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to bottom, #faf7f4, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to top, #faf7f4, transparent)" }}
        />
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-28 px-6"
        style={{ background: "var(--color-bg, #faf7f4)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp delay={0}>
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.22em] mb-4"
                style={{ color: "var(--color-primary, #C85A17)" }}
              >
                The Journey
              </span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2
                className="text-4xl md:text-5xl font-bold mb-5"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
              >
                From Origin{" "}
                <span className="gradient-heading">to Cup</span>
              </h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p
                className="text-base md:text-lg max-w-md mx-auto leading-relaxed"
                style={{ color: "var(--color-muted, #78716c)" }}
              >
                A visual journey through single-origin coffee
              </p>
            </FadeInUp>
          </div>

          <FadeInUp delay={100}>
            <div className="masonry-grid gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="masonry-item rounded-2xl overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full block object-cover rounded-2xl"
                    style={{
                      aspectRatio:
                        i === 0 || i === 4
                          ? "4/5"
                          : i === 3
                          ? "4/3"
                          : "16/10",
                    }}
                  />
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Farm Direct",
                  desc: "We visit and verify every farm partner. No middlemen, no mystery origins.",
                },
                {
                  step: "02",
                  title: "Small Batch Roasted",
                  desc: "Roasted in-house weekly to ensure peak freshness when you order.",
                },
                {
                  step: "03",
                  title: "Precision Poured",
                  desc: "Every pour-over is dialed in to the specific density and profile of that origin.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 items-start"
                >
                  <span
                    className="text-3xl font-black flex-shrink-0"
                    style={{ color: "rgba(200,90,23,0.18)", fontFamily: "var(--font-heading)", lineHeight: 1 }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4
                      className="text-base font-semibold mb-2"
                      style={{ color: "var(--color-text)", fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted, #78716c)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA FOOTER BAND */}
      <section
        className="py-24 px-6"
        style={{
          background: "linear-gradient(135deg, #1e0d05 0%, #3b1f0e 50%, #5c2d12 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <FadeInUp delay={0}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to taste the{" "}
              <span className="gradient-heading">difference?</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={100}>
            <p
              className="text-base md:text-lg mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Come in and let our baristas guide you through the current selection. Every cup tells the story of where it came from.
            </p>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/visit"
                className="inline-block px-8 py-4 font-semibold rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-90"
                style={{
                  background: "linear-gradient(90deg, #D4A574, #C85A17)",
                  color: "white",
                }}
              >
                Plan Your Visit
              </a>
              <a
                href="/craft"
                className="inline-block px-8 py-4 font-semibold rounded-full text-sm uppercase tracking-widest border transition-all duration-300 hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Our Craft
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
