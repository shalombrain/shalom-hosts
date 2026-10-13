'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  {
    name: "Flutterwave",
    mono: "/logos/flutterwave-mono.svg",
    color: "/logos/flutterwave.svg",
    url: "https://flutterwave.com",
  },
  {
    name: "Paystack",
    mono: "/logos/paystack-mono.svg",
    color: "/logos/paystack.svg",
    url: "https://paystack.com",
  },
  {
    name: "Moniepoint",
    mono: "/logos/moniepoint-mono.svg",
    color: "/logos/moniepoint.svg",
    url: "https://moniepoint.com",
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
];

const stats = [
  { value: 120, suffix: "+", label: "Events Hosted" },
  { value: 18000, suffix: "+", label: "Audience Members" },
  { value: 40, suffix: "+", label: "Brands Served" },
  { value: 6, suffix: "+", label: "Years Experience" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

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
    
<section
  style={{
    paddingTop: "180px",
    paddingBottom: "80px",
  }}
  className="min-h-screen flex flex-col"
>
<div className="container flex flex-1 flex-col">
        {/* Hero */}
        <div className="max-w-4xl">
          <h1 className="text-[5rem] leading-[0.9] tracking-[-0.06em] text-[var(--text-primary)] md:text-[6.5rem] lg:text-[7.5rem]">
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
>
  From executive boardrooms to sold-out conferences, I help brands
  deliver experiences audiences never forget — with presence,
  preparation, and precision.
</p>

          <div
  className="flex flex-col gap-4 sm:flex-row"
  style={{ marginTop: "32px" }}
>
<Link
  href="YOUR_BOOKING_LINK"
  target="_blank"
  rel="noreferrer"
  style={{
    backgroundColor: "#181818",
    color: "#ffffff",
  }}
  className="inline-flex min-h-[64px] min-w-[260px] items-center justify-center rounded-[var(--radius-md)] px-[32px] py-5 text-[17px] font-medium tracking-[-0.01em] text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
>
  Book Me for Your Event
</Link>

  <Link
  href="#experience"
  className="group inline-flex min-h-[64px] items-center justify-center gap-3 px-8 py-5 text-[17px] font-medium tracking-[-0.01em] text-[var(--text-primary)] transition-all duration-300"
>
  <span>Watch Showreel</span>

  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
</div>
        </div>


 {/* Numbers */}
<div style={{ marginTop: "120px" }}>
  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-muted)]">
    The numbers through the years
  </p>

  {/* Horizontal divider */}
  <div
    style={{
      marginTop: "8px",
      borderTop: "2px solid var(--border)",
    }}
  />

  {/* Stats */}
  <div
    className="grid grid-cols-2 gap-8 md:grid-cols-4"
    style={{ marginTop: "32px" }}
  >
    {stats.map((stat) => (
      <div key={stat.label} className="text-center md:text-left">
        <div className="text-4xl font-semibold text-[var(--text-primary)] md:text-3xl">
          <CountUp value={stat.value} suffix={stat.suffix} />
        </div>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>


       {/* Trusted By */}
<div style={{ marginTop: "32px" }}>
  <div className="relative overflow-hidden">
    <div className="flex animate-marquee gap-16">
      {[...logos, ...logos].map((logo, index) => (
        <a
          key={index}
          href={logo.url}
          target="_blank"
          rel="noreferrer"
          className="group flex-shrink-0"
        >
          <div className="relative h-12 w-40">
            <Image
              src={logo.mono}
              alt={logo.name}
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-0"
            />

            <Image
              src={logo.color}
              alt={logo.name}
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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