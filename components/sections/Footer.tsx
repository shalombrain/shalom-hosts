"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/shalombrain",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shalombrain",
  },
  {
    label: "X",
    href: "https://x.com/shalombrain",
  },
];

export default function Footer() {
  return (
    <footer
    id="contact"
    className="relative min-h-screen overflow-hidden text-white"
    style={{
      backgroundColor: "#171717",
    }}
  >
      

     

   

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 flex min-h-screen flex-col">

        {/* =========================================
            MAIN CTA
        ========================================= */}

        <div className="container flex flex-1 items-center py-28 md:py-32">

          <div
            className="
              grid
              w-full
              grid-cols-1
              items-end
              gap-16
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-24
            "
          >

            {/* LEFT */}
            <div>
        

            <h2
  style={{
    maxWidth: "680px",
    fontSize: "clamp(2.5rem, 4vw, 4rem)",
    lineHeight: "0.98",
    letterSpacing: "-0.05em",
    fontWeight: 600,
    color: "#FFFFFF",
  }}
>
  Let's make the room
  <br />
  worth remembering.
</h2>
            </div>


            {/* RIGHT */}
            <div className="max-w-md lg:pb-2">
            <Link
  href="https://api.whatsapp.com/send?phone=2348145404239&text=Hello%20Shalom,%20my%20name%20is%20_________________%20and%20we%20would%20love%20to%20book%20you%20to%20host%20our%20event"
  style={{
    marginTop: "32px",
    minHeight: "64px",
    padding: "0 32px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    color: "#181818",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1,
    textDecoration: "none",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  }}
>
  <span
    style={{
      color: "#181818",
      whiteSpace: "nowrap",
    }}
  >
    Send a Text
  </span>

  <span
    aria-hidden="true"
    style={{
      color: "#181818",
      fontSize: "20px",
      lineHeight: 1,
    }}
  >
    →
  </span>
</Link>

            </div>

          </div>

        </div>


        {/* =========================================
    FOOTER NAVIGATION
========================================= */}

<div className="container">

<div
  className="
    flex
    flex-col
    gap-8
    border-t
    border-white/15
    py-6
    md:flex-row
    md:items-center
    md:justify-between
  "
>

  {/* Copyright */}

  <div>
    <p className="text-sm text-white/55">
      © {new Date().getFullYear()} Shalom Adebola
    </p>
  </div>


  {/* Navigation */}

  <div className="flex flex-wrap gap-x-7 gap-y-3">

    {footerLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="
          text-base
          text-white/65
          transition-colors
          duration-200
          hover:text-white
        "
      >
        {link.label}
      </Link>
    ))}

  </div>


  {/* Social */}

  <div className="flex gap-6">

    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="
          text-sm
          text-white/65
          transition-colors
          duration-200
          hover:text-white
        "
      >
        {link.label}
      </a>
    ))}

  </div>

</div>

</div>


{/* =========================================
  GIANT WORDMARK
========================================= */}

<div
  className="relative overflow-hidden"
  style={{
    marginTop: "24px",
  }}
>
<div className="relative w-full">
  <Image
    src="/images/shalom-logo1.svg"
    alt="Shalom Adebola"
    width={1200}
    height={400}
    className="h-auto w-full object-contain"
  />
</div>
</div>
      </div>
    </footer>
  );
}