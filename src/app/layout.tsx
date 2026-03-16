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
      style={{ transition: "background 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none group"
          aria-label="Sunrise Coffee Co Home"
        >
          <span
            style={{ fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)", color: scrolled ? "#2C2416" : "#FBF8F3" }}
            className="text-2xl font-semibold tracking-wide transition-colors duration-300"
          >
            Sunrise
          </span>
          <span
            style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: scrolled ? "#8B6F47" : "#D4A574", letterSpacing: "0.25em" }}
            className="text-[10px] uppercase font-600 tracking-[0.25em] transition-colors duration-300"
          >
            Coffee Co
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
                color: scrolled ? "#2C2416" : "#FBF8F3",
                letterSpacing: "0.08em",
              }}
              className={cn(
                "text-sm font-semibold uppercase tracking-wider relative group transition-colors duration-300",
                "after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-[#C85A17] after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/visit"
            style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)" }}
            className="ml-4 px-5 py-2 bg-[#C85A17] text-[#FBF8F3] text-sm font-semibold uppercase tracking-wider rounded-none hover:bg-[#8B6F47] transition-colors duration-300"
          >
            Find Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-[1.5px] w-6 transition-all duration-300",
              menuOpen ? "rotate-45 translate-y-[6.5px] bg-[#2C2416]" : scrolled ? "bg-[#2C2416]" : "bg-[#FBF8F3]"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-6 transition-all duration-300",
              menuOpen ? "opacity-0 bg-[#2C2416]" : scrolled ? "bg-[#2C2416]" : "bg-[#FBF8F3]"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-6 transition-all duration-300",
              menuOpen ? "-rotate-45 -translate-y-[6.5px] bg-[#2C2416]" : scrolled ? "bg-[#2C2416]" : "bg-[#FBF8F3]"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-[#FBF8F3] z-40 flex flex-col justify-center items-center gap-10 transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)",
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
            }}
            className={cn(
              "text-4xl font-semibold text-[#2C2416] hover:text-[#C85A17] transition-all duration-300",
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/visit"
          onClick={() => setMenuOpen(false)}
          style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)" }}
          className="mt-4 px-8 py-3 bg-[#C85A17] text-[#FBF8F3] text-sm font-semibold uppercase tracking-widest hover:bg-[#8B6F47] transition-colors duration-300"
        >
          Find Us
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C2416", color: "#FBF8F3" }} className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #8B6F47, #C85A17, #D4A574, #8B6F47)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Main columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0}>
              <div className="mb-6">
                <span
                  style={{ fontFamily: "var(--font-heading, 'Cormorant Garamond', serif)", color: "#FBF8F3" }}
                  className="block text-3xl font-semibold tracking-wide mb-1"
                >
                  Sunrise
                </span>
                <span
                  style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#D4A574", letterSpacing: "0.25em" }}
                  className="block text-[10px] uppercase tracking-[0.25em]"
                >
                  Coffee Co
                </span>
              </div>
              <p
                style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#D4A574", lineHeight: "1.75" }}
                className="text-sm max-w-xs"
              >
                Specialty coffee roasted with intention. Every cup a ritual, every sip a small sunrise.
              </p>
              {/* Decorative divider */}
              <div className="mt-8 w-12 h-[1px] bg-[#C85A17]" />
            </FadeInUp>
          </div>

          {/* Navigation column */}
          <div>
            <FadeInUp delay={100}>
              <h4
                style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#8B6F47", letterSpacing: "0.15em" }}
                className="text-xs uppercase font-semibold tracking-[0.15em] mb-6"
              >
                Explore
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#F5F1EB" }}
                      className="text-sm hover:text-[#C85A17] transition-colors duration-300 relative group"
                    >
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeInUp>
          </div>

          {/* Visit / Contact column */}
          <div>
            <FadeInUp delay={200}>
              <h4
                style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#8B6F47", letterSpacing: "0.15em" }}
                className="text-xs uppercase font-semibold tracking-[0.15em] mb-6"
              >
                Visit Us
              </h4>
              <address className="not-italic space-y-4">
                <div>
                  <span
                    style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#F5F1EB" }}
                    className="block text-sm leading-relaxed"
                  >
                    Sunrise Coffee Co
                  </span>
                </div>
                <div>
                  <span
                    style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#D4A574" }}
                    className="block text-xs uppercase tracking-wider mb-1"
                  >
                    Hours
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#F5F1EB" }}
                    className="block text-sm"
                  >
                    Mon–Fri: 6am – 6pm
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#F5F1EB" }}
                    className="block text-sm"
                  >
                    Sat–Sun: 7am – 5pm
                  </span>
                </div>
              </address>
            </FadeInUp>
          </div>

          {/* Social / Newsletter column */}
          <div>
            <FadeInUp delay={200}>
              <h4
                style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#8B6F47", letterSpacing: "0.15em" }}
                className="text-xs uppercase font-semibold tracking-[0.15em] mb-6"
              >
                Stay Connected
              </h4>
              <div className="flex gap-4 mb-8">
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  style={{ color: "#D4A574" }}
                  className="hover:text-[#C85A17] transition-colors duration-300"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  style={{ color: "#D4A574" }}
                  className="hover:text-[#C85A17] transition-colors duration-300"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* Pinterest */}
                <a
                  href="#"
                  aria-label="Pinterest"
                  style={{ color: "#D4A574" }}
                  className="hover:text-[#C85A17] transition-colors duration-300"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
              </div>
              <div>
                <p
                  style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#D4A574" }}
                  className="text-xs mb-3 uppercase tracking-wider"
                >
                  Morning updates, seasonal offerings
                </p>
                <ShineBorder
                  borderRadius={0}
                  borderWidth={1}
                  duration={6}
                  color={["#8B6F47", "#C85A17", "#D4A574"]}
                >
                  <Link
                    href="/visit"
                    style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)" }}
                    className="block px-5 py-3 text-xs uppercase tracking-widest font-semibold text-[#FBF8F3] hover:text-[#D4A574] transition-colors duration-300 text-center"
                  >
                    Join Our Community
                  </Link>
                </ShineBorder>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#8B6F47]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#8B6F47" }}
            className="text-xs tracking-wide"
          >
            &copy; {new Date().getFullYear()} Sunrise Coffee Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#8B6F47" }}
              className="text-xs hover:text-[#D4A574] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span style={{ color: "#8B6F47" }} className="text-xs">&middot;</span>
            <Link
              href="/"
              style={{ fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)", color: "#8B6F47" }}
              className="text-xs hover:text-[#D4A574] transition-colors duration-300"
            >
              Terms of Use
            </Link>
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
      className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sunrise Coffee Co — Specialty Coffee Roasters</title>
        <meta
          name="description"
          content="Sunrise Coffee Co — specialty coffee roasted with intention. Every cup a ritual, every sip a small sunrise."
        />
      </head>
      <body
        style={{
          backgroundColor: "#FBF8F3",
          color: "#2C2416",
          fontFamily: "var(--font-body, 'Source Sans 3', sans-serif)",
          margin: 0,
          padding: 0,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <style>{`
          :root {
            --color-primary: #8B6F47;
            --color-secondary: #D4A574;
            --color-accent: #C85A17;
            --color-bg: #FBF8F3;
            --color-text: #2C2416;
            --color-surface: #F5F1EB;
            --color-muted: #A89070;
            --font-heading: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
            --font-body: 'Source Sans 3', 'Source Sans Pro', 'Inter', system-ui, sans-serif;
            --space-section: 120px;
            --space-content: 64px;
            --space-element: 24px;
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
            min-height: 100vh;
            background-color: var(--color-bg);
            color: var(--color-text);
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            font-weight: 500;
            line-height: 1.15;
            letter-spacing: -0.01em;
          }

          p, li, a, span, button, input, label {
            font-family: var(--font-body);
            line-height: 1.7;
          }

          img {
            max-width: 100%;
            display: block;
          }

          a {
            text-decoration: none;
          }

          ::selection {
            background-color: #D4A574;
            color: #2C2416;
          }

          /* Warm image filter utility */
          .img-sunrise {
            filter: sepia(12%) saturate(110%) brightness(98%) contrast(103%);
          }

          /* Pour animation keyframes */
          @keyframes pour-drop {
            0% { stroke-dashoffset: 120; opacity: 0; }
            20% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 1; }
          }

          @keyframes subtle-rise {
            0% { transform: translateY(8px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          .animate-subtle-rise {
            animation: subtle-rise 0.6s var(--ease-out) both;
          }

          /* Scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: var(--color-bg);
          }
          ::-webkit-scrollbar-thumb {
            background: var(--color-primary);
            border-radius: 3px;
          }
        `}</style>

        <Nav />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
