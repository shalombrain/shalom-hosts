'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Dimmed Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileOpen || scrolled
            ? "bg-[var(--background,#FAF9F5)] border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/shalom-logo.svg"
                alt="Shalom Adebola"
                width={140}
                height={40}
                priority
                className="h-auto w-[120px] md:w-[140px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10 ml-auto">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-md font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[var(--text-primary)] p-2 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Content */}
          {mobileOpen && (
            <div
              className="md:hidden"
              style={{
                paddingTop: "16px",
                paddingBottom: "32px",
              }}
            >
              <nav className="flex flex-col gap-6 pt-4 border-t border-[var(--border)]">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Button Container */}
                <div className="pt-2">
                  <Link
                    href="#contact"
                    style={{
                      minHeight: "64px",
                      padding: "0 32px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      borderRadius: "8px",
                      backgroundColor: "#181818",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: 1,
                      textDecoration: "none",
                      transition: "transform 0.3s ease, background-color 0.3s ease",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                  >
                    Book Shalom
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}