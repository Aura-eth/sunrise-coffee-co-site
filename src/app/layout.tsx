"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Coffee", href: "/coffee" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#D4A574]/20"
          : "bg-transparent"
      )}
      style={{ transition: "background 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-2xl font-semibold tracking-wide"
            style={{
              fontFamily: "var(--font-heading)",
              color: scrolled ? "#2C2418" : "#FAF7F2",
              transition: "color 0.4s var(--ease-out)",
              letterSpacing: "0.04em",
            }}
          >
            Sunrise
          </span>
          <span
            className="text-xs tracking-[0.22em] uppercase"
            style={{
              fontFamily: "var(--font-body)",
              color: scrolled ? "#8B6F47" : "#D4A574",
              transition: "color 0.4s var(--ease-out)",
            }}
          >
            Coffee Co
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-widest uppercase group"
              style={{
                fontFamily: "var(--font-body)",
                color: scrolled ? "#2C2418" : "#FAF7F2",
                transition: "color 0.3s var(--ease-out)",
                letterSpacing: "0.12em",
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px bg-[#C85A17] w-0 group-hover:w-full"
                style={{ transition: "width 0.3s var(--ease-out)" }}
              />
            </Link>
          ))}
          <ShineBorder
            borderRadius={2}
            borderWidth={1.5}
            duration={6}
            color={["#C85A17", "#D4A574", "#8B6F47"]}
          >
            <Link
              href="/visit"
              className="px-5 py-2 text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-body)",
                color: scrolled ? "#2C2418" : "#FAF7F2",
                background: scrolled ? "transparent" : "rgba(139,111,71,0.15)",
                letterSpacing: "0.15em",
                transition: "all 0.3s var(--ease-out)",
                display: "block",
              }}
            >
              Find Us
            </Link>
          </ShineBorder>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block h-px w-6 transition-all duration-300 origin-center",
              mobileOpen ? "rotate-45 translate-y-[7px] bg-[#2C2418]" : ""
            )}
            style={{ background: mobileOpen ? "#2C2418" : scrolled ? "#2C2418" : "#FAF7F2" }}
          />
          <span
            className={cn(
              "block h-px w-6 transition-all duration-300",
              mobileOpen ? "opacity-0" : ""
            )}
            style={{ background: scrolled ? "#2C2418" : "#FAF7F2" }}
          />
          <span
            className={cn(
              "block h-px w-6 transition-all duration-300 origin-center",
              mobileOpen ? "-rotate-45 -translate-y-[7px] bg-[#2C2418]" : ""
            )}
            style={{ background: mobileOpen ? "#2C2418" : scrolled ? "#2C2418" : "#FAF7F2" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 transition-all duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "#FAF7F2", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-4xl font-light tracking-wide"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#2C2418",
              letterSpacing: "0.06em",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: `transform 0.4s var(--ease-out) ${i * 80}ms, opacity 0.4s var(--ease-out) ${i * 80}ms`,
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            {link.label}
          </Link>
        ))}
        <div
          className="mt-4 w-16 h-px"
          style={{ background: "#D4A574" }}
        />
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-body)", color: "#8B6F47" }}
        >
          Specialty Coffee Co
        </p>
      </div>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#2C2418",
        color: "#FAF7F2",
        borderTop: "1px solid rgba(212,165,116,0.15)",
      }}
    >
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <FadeInUp delay={0}>
            <div className="mb-6">
              <p
                className="text-3xl font-light leading-tight mb-1"
                style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.04em", color: "#FAF7F2" }}
              >
                Sunrise
              </p>
              <p
                className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)", color: "#D4A574" }}
              >
                Coffee Co
              </p>
            </div>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "rgba(250,247,242,0.6)", lineHeight: "1.8" }}
            >
              Thoughtfully sourced. Carefully brewed. Every cup a ritual, every visit a return to what matters.
            </p>
            <div
              className="w-10 h-px"
              style={{ background: "#C85A17" }}
            />
          </FadeInUp>
        </div>

        {/* Navigation Column */}
        <div>
          <FadeInUp delay={100}>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", color: "#D4A574" }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm group flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,247,242,0.7)",
                    transition: "color 0.25s var(--ease-out)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,242,0.7)")}
                >
                  <span
                    className="w-0 group-hover:w-4 h-px inline-block"
                    style={{
                      background: "#C85A17",
                      transition: "width 0.3s var(--ease-out)",
                    }}
                  />
                  {link.label}
                </Link>
              ))}
            </nav>
          </FadeInUp>
        </div>

        {/* Visit Column */}
        <div>
          <FadeInUp delay={200}>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", color: "#D4A574" }}
            >
              Visit Us
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(250,247,242,0.4)", letterSpacing: "0.12em" }}
                >
                  Address
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(250,247,242,0.7)" }}
                >
                  Sunrise Coffee Co<br />
                  Scottsdale, Arizona
                </p>
              </div>
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(250,247,242,0.4)", letterSpacing: "0.12em" }}
                >
                  Hours
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(250,247,242,0.7)" }}
                >
                  Mon – Fri: 6am – 5pm<br />
                  Sat – Sun: 7am – 4pm
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Contact & Social Column */}
        <div>
          <FadeInUp delay={200}>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", color: "#D4A574" }}
            >
              Connect
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:"
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "rgba(250,247,242,0.7)", transition: "color 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,242,0.7)")}
              >
                hello@sunrisecoffeeco.com
              </a>
            </div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", color: "rgba(250,247,242,0.4)", letterSpacing: "0.12em" }}
            >
              Follow Along
            </p>
            <div className="flex gap-4">
              {["Instagram", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(250,247,242,0.5)",
                    transition: "color 0.25s var(--ease-out)",
                    letterSpacing: "0.1em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C85A17")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,247,242,0.5)")}
                >
                  {social}
                </a>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div
        style={{ borderTop: "1px solid rgba(212,165,116,0.1)" }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3"
      >
        <p
          className="text-xs"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(250,247,242,0.35)",
            letterSpacing: "0.08em",
          }}
        >
          &copy; {currentYear} Sunrise Coffee Co. All rights reserved.
        </p>
        <p
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(212,165,116,0.4)",
            letterSpacing: "0.15em",
          }}
        >
          Specialty Coffee &middot; Scottsdale, AZ
        </p>
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
      className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}
    >
      <head>
        <title>Sunrise Coffee Co — Specialty Coffee</title>
        <meta name="description" content="Thoughtfully sourced specialty coffee in Scottsdale, Arizona. Every cup a ritual, every visit a return to what matters." />
      </head>
      <body
        style={{
          background: "#FAF7F2",
          color: "#2C2418",
          fontFamily: "var(--font-body), 'Inter', sans-serif",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        }}
      >
        <style>{`
          :root {
            --color-primary: #8B6F47;
            --color-secondary: #D4A574;
            --color-accent: #C85A17;
            --color-bg: #FAF7F2;
            --color-text: #2C2418;
            --color-surface: #F3EFE7;
            --color-muted: #9E8E7A;
            --font-heading: var(--font-heading-var, 'Cormorant Garamond'), 'Playfair Display', Georgia, serif;
            --font-body: var(--font-body-var, 'Source Sans 3'), 'Inter', system-ui, sans-serif;
            --space-section: clamp(4rem, 8vw, 7rem);
            --space-content: clamp(2rem, 4vw, 3.5rem);
            --space-element: clamp(1rem, 2vw, 1.5rem);
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            --duration-fast: 200ms;
            --duration-normal: 350ms;
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
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            color: #2C2418;
            line-height: 1.15;
            letter-spacing: 0.01em;
          }

          p, a, span, li, button, input, label {
            font-family: var(--font-body);
          }

          ::selection {
            background: #D4A574;
            color: #2C2418;
          }

          /* Scrollbar styling */
          ::-webkit-scrollbar {
            width: 4px;
          }
          ::-webkit-scrollbar-track {
            background: #FAF7F2;
          }
          ::-webkit-scrollbar-thumb {
            background: #D4A574;
            border-radius: 2px;
          }

          /* Pour-over stream accent border animation for coffee cards */
          .coffee-card-accent {
            position: relative;
          }
          .coffee-card-accent::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 2px;
            height: 40%;
            background: #C85A17;
            transition: height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .coffee-card-accent:hover::before {
            height: 100%;
          }

          /* Organic image hover */
          .img-hover {
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .img-hover:hover {
            transform: scale(1.03);
          }

          a {
            text-decoration: none;
          }
        `}</style>
        <Nav />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
