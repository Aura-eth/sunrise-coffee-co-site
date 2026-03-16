"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Coffee", href: "/coffee" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Contact", href: "/contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "bg-[#FBF8F3]/90 backdrop-blur-md shadow-sm border-b border-[#D4A574]/20"
          : "bg-transparent"
      )}
      style={{
        transitionDuration: "var(--duration-normal)",
        transitionTimingFunction: "var(--ease-out)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={cn(
              "text-xl font-bold tracking-wide transition-colors",
              scrolled ? "text-[#3D2817]" : "text-white"
            )}
            style={{ fontFamily: "var(--font-heading, 'Libre Baskerville', serif)" }}
          >
            Sunrise
          </span>
          <span
            className={cn(
              "text-xs tracking-[0.25em] uppercase transition-colors",
              scrolled ? "text-[#8B6F47]" : "text-[#D4A574]"
            )}
            style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)" }}
          >
            Coffee Co
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wider uppercase font-semibold relative group transition-colors",
                scrolled ? "text-[#3D2817]" : "text-white"
              )}
              style={{
                fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
                letterSpacing: "0.08em",
              }}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300",
                  scrolled ? "bg-[#C85A3A]" : "bg-[#D4A574]"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-6 h-px transition-all duration-300",
              scrolled ? "bg-[#3D2817]" : "bg-white",
              menuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px transition-all duration-300",
              scrolled ? "bg-[#3D2817]" : "bg-white",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px transition-all duration-300",
              scrolled ? "bg-[#3D2817]" : "bg-white",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ background: "rgba(251,248,243,0.97)", backdropFilter: "blur(16px)" }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 border-t border-[#D4A574]/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#3D2817] text-base font-semibold tracking-widest uppercase hover:text-[#C85A3A] transition-colors"
              style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#3D2817",
        color: "#FBF8F3",
        fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
      }}
    >
      {/* Rich Columns Body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand Column */}
          <FadeInUp delay={0} className="flex flex-col gap-4">
            <div className="flex flex-col leading-none mb-2">
              <span
                className="text-2xl font-bold tracking-wide text-[#FBF8F3]"
                style={{ fontFamily: "var(--font-heading, 'Libre Baskerville', serif)" }}
              >
                Sunrise
              </span>
              <span
                className="text-xs tracking-[0.25em] uppercase text-[#D4A574]"
              >
                Coffee Co
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#D4A574]/80 max-w-xs">
              Specialty coffee roasted with intention. Every cup tells the story of its origin — the land, the people, the process.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-2">
              {[
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[#D4A574]/60 hover:text-[#D4A574] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </FadeInUp>

          {/* Navigation Column */}
          <FadeInUp delay={100} className="flex flex-col gap-3">
            <h4
              className="text-xs tracking-[0.2em] uppercase text-[#D4A574] mb-2 font-semibold"
            >
              Explore
            </h4>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#FBF8F3]/70 hover:text-[#D4A574] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </FadeInUp>

          {/* Visit Column */}
          <FadeInUp delay={200} className="flex flex-col gap-3">
            <h4
              className="text-xs tracking-[0.2em] uppercase text-[#D4A574] mb-2 font-semibold"
            >
              Visit Us
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#FBF8F3]/70">
              <div className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-[#D4A574]/60" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="leading-relaxed">Sunrise Coffee Co<br />Find us in the heart of the neighborhood</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <svg className="shrink-0 text-[#D4A574]/60" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 7l-10 7L2 7"/>
                </svg>
                <a href="mailto:" className="hover:text-[#D4A574] transition-colors" />
              </div>
            </div>
            <div className="mt-3">
              <h5 className="text-xs tracking-[0.15em] uppercase text-[#D4A574]/70 mb-2">Hours</h5>
              <div className="text-sm text-[#FBF8F3]/70 flex flex-col gap-1">
                <div className="flex justify-between gap-6">
                  <span>Mon – Fri</span>
                  <span className="text-[#FBF8F3]/50">7am – 6pm</span>
                </div>
                <div className="flex justify-between gap-6">
                  <span>Sat – Sun</span>
                  <span className="text-[#FBF8F3]/50">8am – 5pm</span>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Newsletter / CTA Column */}
          <FadeInUp delay={100} className="flex flex-col gap-4">
            <h4
              className="text-xs tracking-[0.2em] uppercase text-[#D4A574] mb-2 font-semibold"
            >
              Stay Connected
            </h4>
            <p className="text-sm text-[#FBF8F3]/60 leading-relaxed">
              New origins, seasonal roasts, and stories from the farm — delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-[#D4A574]/20 rounded px-4 py-2.5 text-sm text-[#FBF8F3] placeholder-[#FBF8F3]/30 focus:outline-none focus:border-[#D4A574]/60 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#C85A3A] hover:bg-[#b84e30] text-white text-xs tracking-widest uppercase font-semibold py-2.5 px-4 rounded transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </FadeInUp>

        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-[#D4A574]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FBF8F3]/30 tracking-wide">
            &copy; {new Date().getFullYear()} Sunrise Coffee Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs text-[#FBF8F3]/30 hover:text-[#D4A574]/70 transition-colors tracking-wide"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(libreBaskerville.variable, sourceSans3.variable)}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sunrise Coffee Co — Specialty Coffee Roasters</title>
        <meta
          name="description"
          content="Sunrise Coffee Co — specialty coffee roasted with intention. Single origin beans, precise brewing, and a passion for the ritual of the morning cup."
        />
      </head>
      <body
        style={{
          fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
          background: "#FBF8F3",
          color: "#3D2817",
          margin: 0,
          padding: 0,
        }}
      >
        <style>{`
          :root {
            --color-primary: #8B6F47;
            --color-secondary: #D4A574;
            --color-accent: #C85A3A;
            --color-bg: #FBF8F3;
            --color-text: #3D2817;
            --color-surface: #F5F1EB;
            --color-muted: #A08060;
            --font-heading: 'Libre Baskerville', 'Playfair Display', Georgia, serif;
            --font-body: 'Source Sans 3', 'Inter', system-ui, sans-serif;
            --space-section: 6rem;
            --space-content: 3rem;
            --space-element: 1.5rem;
            --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
            --duration-fast: 150ms;
            --duration-normal: 300ms;
            --duration-slow: 600ms;
          }

          *, *::before, *::after {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            color: var(--color-text);
            line-height: 1.2;
            font-weight: 700;
          }

          p {
            font-family: var(--font-body);
            line-height: 1.75;
          }

          img {
            max-width: 100%;
            height: auto;
            display: block;
          }

          /* Parallax utility */
          .parallax-bg {
            will-change: transform;
            transform: translateZ(0);
          }

          /* Masonry stagger for /coffee page */
          .origin-card:nth-child(1) { animation-delay: 0ms; }
          .origin-card:nth-child(2) { animation-delay: 100ms; }
          .origin-card:nth-child(3) { animation-delay: 200ms; }
          .origin-card:nth-child(4) { animation-delay: 300ms; }
          .origin-card:nth-child(5) { animation-delay: 400ms; }
          .origin-card:nth-child(6) { animation-delay: 500ms; }

          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .origin-card {
            animation: fadeSlideUp 0.6s var(--ease-out) both;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: var(--color-bg);
          }
          ::-webkit-scrollbar-thumb {
            background: var(--color-secondary);
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: var(--color-primary);
          }

          /* Selection color */
          ::selection {
            background: var(--color-secondary);
            color: var(--color-bg);
          }

          /* Focus ring */
          :focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 2px;
          }
        `}</style>

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
