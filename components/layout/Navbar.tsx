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

  return (
  
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/80 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
      : "bg-transparent"
  }`}
>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         
          
          <Link href="/" className="flex items-center">
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
            className="md:hidden text-[var(--text-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col gap-4 pt-4 border-t border-[var(--border)]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--text-primary)] px-5 py-3 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Book Me
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
);
}