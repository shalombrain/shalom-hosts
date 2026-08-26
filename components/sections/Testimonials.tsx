"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "His stage presence, charisma, and natural ability to connect with the audience were extraordinary. Shalom effortlessly guided the flow of the event, injecting just the right amount of energy to keep the audience engaged and entertained.",
    name: "Sodiq Akinjobi",
    role: "Dev Community Advocate",
    company: "Google",
  },
  {
    quote:
      "Shalom was absolutely phenomenal! When you want to host your Tech event do not hesitate to reach out to him. Very solid guy.",
    name: "Abisola Rasaq",
    role: "Cheif Executive Officer",
    company: "The Bug Detective",
  },
  {
    quote:
      "If you're looking for a host who can breathe life into your conference, inspire your audience, and create memories that last long after the final session, look no further.",
    name: "Jamiu Okanlawon",
    role: "Covener",
    company: "FlutterBytes Conference",
  },
  {
    quote:
      "Shalom was excellent at hosting our event. He properly handled the chaos that came with event organising, ensuring people had a good time and our objectives were met.",
    name: "Felix Bissong",
    role: "Founder",
    company: "The Talent Factory",
  },
  {
    quote:
      "Shalom has a rare ability to make a room feel connected. He brought energy without taking attention away from the people and conversations that mattered.",
    name: "Samson Goddy",
    role: "Co-founder",
    company: "Open Source Africa",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="bg-[var(--background)] text-[var(--text-primary)]"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="container w-full">

        {/* Heading + Supporting Copy */}
        <div
          style={{
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.8rem, 4vw, 4rem)",
              lineHeight: "0.95",
              letterSpacing: "-0.05em",
              fontWeight: 600,
              maxWidth: "720px",
            }}
          >
            The room remembers.
            <br />
            So do the people in it.
          </h2>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "620px",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "var(--text-secondary)",
            }}
          >
            The best feedback usually comes from the people in the room.
            Here's what clients and collaborators have said about working
            with me.
          </p>
        </div>

        {/* Testimonial Panel */}
        <div
          style={{
            background: "#ebe9e3",
            minHeight: "430px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 60px",
          }}
        >
          {/* Quote */}
          <div
            key={activeIndex}
            className="animate-testimonial"
            style={{
              maxWidth: "1000px",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "42px",
                lineHeight: "0.7",
                fontWeight: 400,
                color: "var(--text-muted)",
                marginBottom: "28px",
              }}
            >
              “
            </span>

            <blockquote
              style={{
                fontSize: "clamp(1.8rem, 3vw, 3.1rem)",
                lineHeight: "1.2",
                letterSpacing: "-0.035em",
                fontWeight: 400,
                maxWidth: "950px",
                color: "var(--text-primary)",
              }}
            >
              {activeTestimonial.quote}
            </blockquote>
          </div>

          {/* Bottom Area */}
          <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">

            {/* Attribution */}
            <div
              key={`attribution-${activeIndex}`}
              className="animate-testimonial"
            >
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "var(--text-primary)",
                  marginBottom: "18px",
                }}
              />

              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {activeTestimonial.name}
              </p>

              <p
                style={{
                  marginTop: "5px",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  color: "var(--text-secondary)",
                }}
              >
                {activeTestimonial.role}
                <br />
                {activeTestimonial.company}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginRight: "8px",
                  }}
                >
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border)",
                    borderRadius: "999px",
                    background: "transparent",
                    color: "var(--text-primary)",
                    fontSize: "17px",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                  }}
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--text-primary)",
                    borderRadius: "999px",
                    background: "var(--text-primary)",
                    color: "white",
                    fontSize: "17px",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                  }}
                >
                  →
                </button>
              </div>

              {/* Progress */}
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  width: "180px",
                }}
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    style={{
                      height: "2px",
                      flex: 1,
                      border: "none",
                      padding: 0,
                      background:
                        index === activeIndex
                          ? "var(--text-primary)"
                          : "var(--border)",
                      cursor: "pointer",
                      transition: "background 300ms ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}