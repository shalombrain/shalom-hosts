"use client";

import Image from "next/image";
import Link from "next/link";

const expertise = [
  "Corporate Events",
  "Tech & Innovation",
  "Conferences",
  "Panels & Fireside Chats",
  "Executive Events",
  "Awards & Galas",
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        paddingTop: "140px",
        paddingBottom: "140px",
        backgroundColor: "#F7F6F2",
      }}
    >
      <div className="container">
        {/* Section Label */}

        {/* Main Content */}
        <div
          className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]"
          style={{ marginTop: "0px" }}
        >
         {/* Image */}
<div className="relative">
  <div
    className="relative overflow-hidden"
    style={{
      aspectRatio: "4 / 5",
      borderRadius: "4px",
    }}
  >
  <Image
  src="/images/shalom-hosting1.jpg"
  alt="Shalom Adebola hosting an event"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>

    {/* Image Overlay */}
    <div
      className="absolute inset-x-0 bottom-0"
      style={{
        padding: "110px 32px 32px",
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.62) 45%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <div className="text-white">

        {/* Name + Title */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            columnGap: "8px",
            rowGap: "4px",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              lineHeight: "1.3",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Shalom Adebola
          </span>

          <span
            style={{
              fontSize: "18px",
              lineHeight: "1.3",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            The Executive's Host
          </span>
        </div>

        {/* Location */}
        <p
          style={{
            marginTop: "10px",
            fontSize: "16px",
            lineHeight: "1.5",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          Based in Lagos. Hosting wherever the room beckons.
        </p>

      </div>
    </div>
  </div>
</div>

         {/* Content */}
<div className="flex h-full flex-col justify-between">

{/* Statement + Story */}
<div>
  <h3
    className="text-[var(--text-primary)]"
    style={{
      fontSize: "clamp(2rem, 4vw, 4rem)",
      lineHeight: "0.98",
      letterSpacing: "-0.05em",
      fontWeight: 600,
      maxWidth: "680px",
      marginTop: "60px",
    }}
  >
    I don't just read the script,
    <br />
    I read and own the room.
  </h3>

  <div
    style={{
      marginTop: "32px",
      maxWidth: "650px",
    }}
  >
    <p
      className="text-[var(--text-secondary)]"
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
      }}
    >
      From executive boardrooms and leadership gatherings to
      technology conferences and sold-out rooms, I've spent
      the last several years helping organisations turn programmes into
      experiences.
    </p>

    <p
      className="text-[var(--text-secondary)]"
      style={{
        marginTop: "20px",
        fontSize: "18px",
        lineHeight: "1.7",
      }}
    >
      I work closely with organising teams to    understanding the audience, speakers, programme and tone — so that
      when it's time to step on stage, the room feels natural, connected
      and in good hands.
    </p>
  </div>
</div>


{/* Service Specialisation */}
<div
  style={{
    marginTop: "48px",
    maxWidth: "680px",
  }}
>
  <p
    className="text-[var(--text-muted)]"
    style={{
      fontSize: "16px",
      fontWeight: 500,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      marginBottom: "18px",
    }}
  >
    Service Specialisation
  </p>

  <div
    className="grid grid-cols-1 sm:grid-cols-2"
    style={{
      borderTop: "1px solid var(--border)",
    }}
  >
    {/* 01 */}
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "14px 20px 14px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <span
        className="text-[var(--text-muted)]"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          paddingTop: "3px",
        }}
      >
        01
      </span>

      <p
        className="text-[var(--text-primary)]"
        style={{
          fontSize: "16px",
          lineHeight: "1.35",
          fontWeight: 500,
        }}
      >
        Corporate & Executive Events
      </p>
    </div>

    {/* 02 */}
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "14px 0 14px 20px",
        borderBottom: "1px solid var(--border)",
        borderLeft: "1px solid var(--border)",
      }}
    >
      <span
        className="text-[var(--text-muted)]"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          paddingTop: "3px",
        }}
      >
        02
      </span>

      <p
        className="text-[var(--text-primary)]"
        style={{
          fontSize: "16px",
          lineHeight: "1.35",
          fontWeight: 500,
        }}
      >
        Tech & Innovation Conferences
      </p>
    </div>

    {/* 03 */}
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "14px 20px 14px 0",
      }}
    >
      <span
        className="text-[var(--text-muted)]"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          paddingTop: "3px",
        }}
      >
        03
      </span>

      <p
        className="text-[var(--text-primary)]"
        style={{
          fontSize: "16px",
          lineHeight: "1.35",
          fontWeight: 500,
        }}
      >
        Panels & Fireside Chats
      </p>
    </div>

    {/* 04 */}
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "14px 0 14px 20px",
        borderLeft: "1px solid var(--border)",
      }}
    >
      <span
        className="text-[var(--text-muted)]"
        style={{
          fontSize: "14px",
          fontWeight: 500,
          paddingTop: "3px",
        }}
      >
        04
      </span>

      <p
        className="text-[var(--text-primary)]"
        style={{
          fontSize: "16px",
          lineHeight: "1.35",
          fontWeight: 500,
        }}
      >
        Awards, Dinners & Galas
      </p>
    </div>
  </div>
</div>


{/* Reviews CTA */}
<div
  style={{
    marginBottom: "100px",
  }}
>
  <Link
    href="#testimonials"
    className="inline-flex items-center"
    style={{
      fontSize: "18px",
      lineHeight: "1.4",
      fontWeight: 500,
      color: "var(--text-primary)",
      paddingBottom: "8px",
      /*borderBottom: "5px solid var(--text-primary)",*/
      transition: "opacity 0.2s ease",
    }}
  >
    Read what people have said about me
    <span
      aria-hidden="true"
      style={{
        marginLeft: "10px",
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

       
      </div>
    </section>
  );
}