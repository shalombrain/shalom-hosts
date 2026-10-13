"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of events do you host?",
    answer:
      "I host corporate and executive events, technology and innovation conferences, awards ceremonies, dinners, panels, fireside chats, leadership gatherings and other live experiences where the room needs to feel engaged and well-held.",
  },
  {
    question: "Do you moderate panels and fireside chats?",
    answer:
      "Yes. I moderate panels, fireside chats, interviews and other conversations. I take time to understand the speakers, the subject and the audience beforehand so the conversation feels natural rather than overly scripted.",
  },
  {
    question: "How involved are you before the event?",
    answer:
      "I like to understand the event before I step on stage — the audience, programme, speakers, tone, running order and the important moments the team wants to land. The better I understand the room beforehand, the more naturally I can host it on the day.",
  },
  {
    question: "How early should I book you?",
    answer:
      "As early as possible, especially for larger conferences, executive events and dates that fall within busy event seasons. That gives us enough time to align on the programme, audience, speakers and overall experience.",
  },
  {
    question: "Do you travel outside Lagos?",
    answer:
      "Yes. I'm based in Lagos and available for events across Nigeria and internationally, depending on the event, schedule and logistics.",
  },
  {
    question: "Can you work with an existing script?",
    answer:
      "Absolutely. A script is useful as a guide, but I don't believe great hosting should feel like reading from a page. I'll work with the agreed programme while adapting naturally to the room, the audience and whatever happens in real time.",
  },
  {
    question: "How do I book you for my event?",
    answer:
      "Send me the details of your event through the booking form, including the date, location, event type and what you need from your host. I'll get back to you with availability and the next steps.",
  },
];

export default function FAQEditorial() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-[var(--background)] text-[var(--text-primary)] pt-8 pb-10 lg:pt-[100px] lg:pb-[100px]"
    >
      <div className="container w-full">

        <div
          className="flex flex-col lg:grid"
          style={{
            gridTemplateColumns: "minmax(280px, 0.8fr) minmax(400px, 1.2fr)",
            gap: "clamp(60px, 10vw, 150px)",
            alignItems: "start",
          }}
        >

          {/* LEFT: Pinned cleanly below navbar with a tight 16px bottom margin */}
          <div
            className="sticky top-[88px] z-20 bg-[var(--background)] pt-3 lg:top-[120px] lg:z-auto lg:p-0"
            style={{
              marginBottom: "16px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.8rem, 4vw, 4rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.05em",
                fontWeight: 600,
                maxWidth: "500px",
              }}
            >
              Before we take
              <br />
              the stage.
            </h2>

            <p
              style={{
                marginTop: "24px",
                maxWidth: "460px",
                fontSize: "18px",
                lineHeight: "1.6",
                color: "var(--text-secondary)",
              }}
            >
              A few things worth knowing before you bring me into the room.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center lg:mb-0"
              style={{
                marginTop: "32px",
                fontSize: "18px",
                fontWeight: 500,
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              Let's talk about your event
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "18px",
                }}
              >
                →
              </span>
            </a>
          </div>

          {/* RIGHT */}
          <div
            className="relative z-10"
            style={{
              borderTop: "1px solid var(--border)",
            }}
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "40px 1fr 30px",
                      alignItems: "center",
                      gap: "18px",
                      padding: "28px 0",
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      style={{
                        fontSize: "20px",
                        lineHeight: "1.35",
                        fontWeight: isOpen ? 500 : 400,
                        color: "var(--text-primary)",
                      }}
                    >
                      {faq.question}
                    </span>

                    <span
                      style={{
                        fontSize: "22px",
                        lineHeight: 1,
                        fontWeight: 300,
                        color: "var(--text-secondary)",
                        transform: isOpen
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                        transition: "transform 300ms ease",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 350ms ease",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <p
                        style={{
                          paddingLeft: "58px",
                          paddingRight: "40px",
                          paddingBottom: isOpen ? "30px" : "0",
                          maxWidth: "720px",
                          fontSize: "17px",
                          lineHeight: "1.7",
                          color: "var(--text-secondary)",
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen
                            ? "translateY(0)"
                            : "translateY(-8px)",
                          transition:
                            "opacity 300ms ease, transform 350ms ease, padding 350ms ease",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}