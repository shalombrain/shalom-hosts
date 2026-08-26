'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  {
    name: "Mainstack",
    mono: "/logos/mainstack-mono.svg",
    color: "/logos/mainstack.svg",
    url: "https://mainstack.com",
  },
  {
    name: "Paystack",
    mono: "/logos/paystack-mono.svg",
    color: "/logos/paystack.svg",
    url: "https://paystack.com",
  },
  {
    name: "GDG",
    mono: "/logos/gdg-mono.svg",
    color: "/logos/gdg.svg",
    url: "https://developers.google.com/",
  },
  {
    name: "Techpoint",
    mono: "/logos/techpoint-mono.svg",
    color: "/logos/techpoint.svg",
    url: "https://techpoint.africa",
  },
  {
    name: "PiggyVest",
    mono: "/logos/piggyvest-mono.svg",
    color: "/logos/piggyvest.svg",
    url: "https://piggyvest.com",
  },
  {
    name: "GenZtechies",
    mono: "/logos/genztechies-mono.svg",
    color: "/logos/genztechies.svg",
    url: "https://genztechies.com",
  },
  {
    name: "YPIT",
    mono: "/logos/ypit-mono.svg",
    color: "/logos/ypit.svg",
    url: "https://www.youngpeopleintech.com/",
  },
  {
    name: "tl",
    mono: "/logos/talentfactory-mono.svg",
    color: "/logos/talentfactory.svg",
    url: "https://www.talentfactoryhq.com/",
  },
  {
    name: "tl",
    mono: "/logos/technext-mono.svg",
    color: "/logos/technext.svg",
    url: "https://technext24.com/",
  },
  {
    name: "tl",
    mono: "/logos/tbd-mono.svg",
    color: "/logos/tbd.svg",
    url: "https://thebugdetective.co/testfestival",
  },
];

const stats = [
  { value: 120, suffix: "+", label: "Events Hosted" },
  { value: 18000, suffix: "+", label: "Audience Members" },
  { value: 40, suffix: "+", label: "Brands Served" },
  { value: 6, suffix: "+", label: "Years Experience" },
];

function CountUp({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div
        className="
          container
          flex
          min-h-screen
          flex-col
          justify-center
          pt-28
          pb-12
          md:pt-32
          md:pb-16
          lg:pt-32
          lg:pb-20
        "
      >
        {/* Hero Content */}
        <div className="max-w-4xl">
          <h1
            className="
              text-[4rem]
              leading-[0.9]
              tracking-[-0.06em]
              text-[var(--text-primary)]
              sm:text-[4.5rem]
              md:text-[5.5rem]
              lg:text-[6.5rem]
              xl:text-[7rem]
            "
          >
            Creating moments
            <br />
            worth remembering.
          </h1>

          <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            lineHeight: "1.5",
          }}
          className="max-w-3xl text-[var(--text-secondary)]"
            /**className="
              mt-8
              max-w-6xl
              text-lg
              leading-relaxed
              text-[var(--text-secondary)]
              sm:text-xl
              md:text-2xl
            "**/ 
          >
            From executive boardrooms to sold-out conferences, I help brands
            deliver experiences audiences never forget — with presence,
            preparation, and precision.
          </p>

          {/* CTAs */}
          <div 
          
          style={{
            marginTop: "24px",
            fontSize: "20px",
            lineHeight: "1.5",
          }}
          
          className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
  href="https://calendly.com/shalombrain/bh"
  target="_blank"
  rel="noreferrer"
  style={{
    backgroundColor: "#181818",
    color: "#ffffff",
  }}
  className="inline-flex min-h-[64px] min-w-[260px] items-center justify-center rounded-[var(--radius-md)] px-[32px] py-5 text-[17px] font-medium tracking-[-0.01em] text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
>
  Book Shalom Your Event
</Link>

            <Link
              href="#experience"
              className="
                inline-flex
                min-h-[64px]
                items-center
                justify-center
                gap-2
                rounded-[var(--radius-md)]
                px-6
                text-base
                font-medium
                text-[var(--text-primary)]
                transition-all
                duration-300
                hover:gap-3
              "
            >
              Watch Showreel
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Numbers */}
        <div style={{
            marginTop: "100px",
          }}
          className="mt-20 md:mt-24 lg:mt-28">

          <div 
          className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 md:mt-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-left"
              >
                <div
                  className="
                    text-3xl
                    font-medium
                    leading-none
                    text-[var(--text-primary)]
                    md:text-3xl
                  "
                >
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By / Logo Marquee */}
        <div style={{
            marginTop: "32px",
            fontSize: "20px",
            lineHeight: "1.5",
          }}
          
          className="mt-12 md:mt-14">
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-10
                h-full
                w-16
                bg-gradient-to-r
                from-[var(--background)]
                to-transparent
              "
            />

            {/* Right fade */}
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                z-10
                h-full
                w-16
                bg-gradient-to-l
                from-[var(--background)]
                to-transparent
              "
            />

            <div className="flex w-max animate-marquee items-center gap-16">
              {[...logos, ...logos].map((logo, index) => (
                <a
                  key={`${logo.name}-${index}`}
                  href={logo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex-shrink-0"
                >
                  <div className="relative h-10 w-32 md:h-12 md:w-40">
                    <Image
                      src={logo.mono}
                      alt={logo.name}
                      fill
                      className="
                        object-contain
                        transition-opacity
                        duration-300
                        group-hover:opacity-0
                      "
                    />

                    <Image
                      src={logo.color}
                      alt={logo.name}
                      fill
                      className="
                        object-contain
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}