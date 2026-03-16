"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Crimson_Pro, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import FadeInUp from "@/components/fade-in-up";
import ShineBorder from "@/components/shine-border";
import { cn } from "@/lib/utils";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Coffee", href: "/coffee" },
  { label: "The Craft", href: "/craft" },
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
    <>
      <style>{`
        .nav-link-underline {
          position: relative;
          display: inline-block;
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #D4A574, #C85A17);
          transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-link-underline:hover::after {
          width: 100%;
        }
        .mobile-menu-enter {
          animation: mobileMenuIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hamburger-line {
          display: block;
          width: 22px;
          height: 1.5px;
          background: currentColor;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .hamburger-open .line1 { transform: translateY(7px) rotate(45deg); }
        .hamburger-open .line2 { opacity: 0; }
        .hamburger-open .line3 { transform: translateY(-7px) rotate(-45deg); }
      `}</style>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all",
          scrolled
            ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#D4A574]/20"
            : "bg-transparent"
        )}
        style={{ transition: "background 0.4s ease, box-shadow 0.4s ease" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
              <span
                className="text-xl md:text-2xl font-semibold tracking-wide leading-tight"
                style={{
                  fontFamily: "var(--font-heading, 'Crimson Pro', serif)",
                  color: scrolled ? "#8B6F47" : "#FAF7F2",
                  transition: "color 0.4s ease",
                  letterSpacing: "0.04em",
                }}
              >
                Sunrise Coffee Co
              </span>
              <span
                className="text-[10px] tracking-[0.18em] uppercase mt-0.5"
                style={{
                  fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
                  color: scrolled ? "#C85A17" : "#D4A574",
                  transition: "color 0.4s ease",
                }}
              >
                Specialty Roasters
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "nav-link-underline text-sm tracking-widest uppercase font-medium",
                      scrolled ? "text-[#2C2C2C]" : "text-[#FAF7F2]/90"
                    )}
                    style={{
                      fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
                      letterSpacing: "0.12em",
                      fontSize: "0.72rem",
                      transition: "color 0.4s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/visit"
                className="px-5 py-2 text-xs tracking-widest uppercase font-semibold rounded-none border transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
                  letterSpacing: "0.14em",
                  borderColor: scrolled ? "#8B6F47" : "rgba(250,247,242,0.6)",
                  color: scrolled ? "#8B6F47" : "#FAF7F2",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#8B6F47";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FAF7F2";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8B6F47";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "#8B6F47" : "#FAF7F2";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = scrolled ? "#8B6F47" : "rgba(250,247,242,0.6)";
                }}
              >
                Find Us
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={cn("md:hidden flex flex-col gap-[5px] p-2", mobileOpen && "hamburger-open")}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              style={{ color: scrolled || mobileOpen ? "#2C2C2C" : "#FAF7F2" }}
            >
              <span className="hamburger-line line1" />
              <span className="hamburger-line line2" />
              <span className="hamburger-line line3" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden mobile-menu-enter border-t border-[#D4A574]/20"
            style={{ background: "#FAF7F2" }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <li key={link.href} style={{ animationDelay: `${i * 50}ms` }}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-[#2C2C2C] hover:text-[#C85A17] transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-heading, 'Crimson Pro', serif)",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#D4A574]/30">
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
                    color: "#8B6F47",
                    letterSpacing: "0.16em",
                  }}
                >
                  Specialty Roasters · Est. 2018
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#2C2C2C",
        color: "#FAF7F2",
        fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
      }}
    >
      <style>{`
        .footer-heading-gradient {
          background: linear-gradient(90deg, #D4A574, #C85A17);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        .footer-link {
          color: rgba(250,247,242,0.65);
          transition: color 0.25s ease;
          font-size: 0.875rem;
          letter-spacing: 0.02em;
          line-height: 1.8;
          display: block;
        }
        .footer-link:hover {
          color: #D4A574;
        }
        .footer-divider {
          border-color: rgba(212,165,116,0.15);
        }
        .social-icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(212,165,116,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.25s ease, background 0.25s ease;
          border-radius: 0;
        }
        .social-icon:hover {
          border-color: #D4A574;
          background: rgba(212,165,116,0.1);
        }
        .footer-label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C85A17;
          font-weight: 600;
          margin-bottom: 1rem;
          display: block;
        }
      `}</style>

      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5 group">
              <span
                className="block text-2xl font-semibold"
                style={{
                  fontFamily: "var(--font-heading, 'Crimson Pro', serif)",
                  color: "#FAF7F2",
                  letterSpacing: "0.04em",
                }}
              >
                Sunrise Coffee Co
              </span>
              <span
                className="block text-[10px] tracking-[0.2em] uppercase mt-1"
                style={{ color: "#C85A17", letterSpacing: "0.2em" }}
              >
                Specialty Roasters
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(250,247,242,0.55)", lineHeight: "1.75" }}
            >
              We source single-origin coffees with intention, roast them with precision, and serve them with honesty. Every cup is a conversation with where it came from.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="#D4A574"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <span className="footer-label">Explore</span>
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours Column */}
          <div>
            <span className="footer-label">Hours</span>
            <div className="space-y-1">
              {[
                ["Monday – Friday", "6:30am – 6:00pm"],
                ["Saturday", "7:00am – 5:00pm"],
                ["Sunday", "7:30am – 4:00pm"],
              ].map(([day, hours]) => (
                <div key={day} className="flex flex-col">
                  <span style={{ color: "rgba(250,247,242,0.45)", fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{day}</span>
                  <span style={{ color: "rgba(250,247,242,0.75)", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(212,165,116,0.15)" }}>
              <span className="footer-label" style={{ marginBottom: "0.5rem" }}>Roastery Tours</span>
              <p style={{ color: "rgba(250,247,242,0.5)", fontSize: "0.8rem", lineHeight: "1.65" }}>Saturdays at 10am by appointment. Reserve via our Visit page.</p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <span className="footer-label">Find Us</span>
            <div className="space-y-4">
              <div>
                <span style={{ color: "rgba(250,247,242,0.4)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>Address</span>
                <address
                  className="not-italic"
                  style={{ color: "rgba(250,247,242,0.7)", fontSize: "0.875rem", lineHeight: "1.7" }}
                >
                  Sunrise Coffee Co<br />
                  Scottsdale, Arizona
                </address>
              </div>
              <div>
                <span style={{ color: "rgba(250,247,242,0.4)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>Contact</span>
                <a href="mailto:" className="footer-link" style={{ marginBottom: "0.25rem" }}>hello@sunrisecoffeeco.com</a>
              </div>
              <div className="pt-4">
                <Link
                  href="/visit"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 group"
                  style={{
                    borderColor: "rgba(212,165,116,0.4)",
                    color: "#D4A574",
                    letterSpacing: "0.14em",
                    fontSize: "0.68rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#8B6F47";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8B6F47";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FAF7F2";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212,165,116,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#D4A574";
                  }}
                >
                  Plan Your Visit
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(212,165,116,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              color: "rgba(250,247,242,0.3)",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
            }}
          >
            &copy; {new Date().getFullYear()} Sunrise Coffee Co. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span style={{ color: "rgba(250,247,242,0.25)", fontSize: "0.65rem", letterSpacing: "0.12em" }}>ROASTED WITH INTENTION ·</span>
            <span style={{ color: "#C85A17", fontSize: "0.65rem", letterSpacing: "0.12em" }}>SCOTTSDALE, AZ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${sourceSans3.variable}`}>
      <head>
        <title>Sunrise Coffee Co — Specialty Roasters</title>
        <meta name="description" content="Sunrise Coffee Co sources single-origin coffees with intention, roasts them with precision, and serves them with honesty. Specialty coffee in Scottsdale, AZ." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          background: "#FAF7F2",
          color: "#2C2C2C",
          fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
          margin: 0,
          padding: 0,
        }}
      >
        <style>{`
          :root {
            --color-primary: #8B6F47;
            --color-secondary: #D4A574;
            --color-accent: #C85A17;
            --color-bg: #FAF7F2;
            --color-text: #2C2C2C;
            --color-surface: #F5F1EB;
            --color-muted: rgba(44,44,44,0.5);
            --font-heading: 'Crimson Pro', 'Playfair Display', Georgia, serif;
            --font-body: 'Source Sans 3', 'Source Sans Pro', Inter, sans-serif;
            --space-section: clamp(4rem, 8vw, 8rem);
            --space-content: clamp(2rem, 4vw, 4rem);
            --space-element: clamp(1rem, 2vw, 2rem);
            --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
            overflow-x: hidden;
          }
          ::selection {
            background: #D4A574;
            color: #FAF7F2;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
          }
          img {
            max-width: 100%;
            display: block;
          }
          a {
            text-decoration: none;
          }
          .heading-gradient-underline {
            position: relative;
            display: inline-block;
          }
          .heading-gradient-underline::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #D4A574, #C85A17);
            border-radius: 1px;
          }
          .card-flip-container {
            perspective: 1000px;
          }
          .card-flip-inner {
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform-style: preserve-3d;
            position: relative;
          }
          .card-flip-container:hover .card-flip-inner {
            transform: rotateY(180deg);
          }
          .card-flip-front,
          .card-flip-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          .card-flip-back {
            transform: rotateY(180deg);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
        <Nav />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
