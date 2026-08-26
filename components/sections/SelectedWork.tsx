"use client";

import { useState } from "react";

const events = [
  {
    number: "01",
    title: "Technext Coinference",
    date: "June 2024",
    video: "/videos/event-01.mp4",
  },
  {
    number: "02",
    title: "OSCAFest",
    date: "August 2025",
    video: "/videos/event-02.mp4",
  },
  {
    number: "03",
    title: "TestFest",
    date: "September 2023",
    video: "/videos/event-03.mp4",
  },
  {
    number: "04",
    title: "Tech Unite Africa",
    date: "March 2025",
    video: "/videos/event-04.mp4",
  },
  {
    number: "05",
    title: "Career Brunch",
    date: "November 2025",
    video: "/videos/event-05.mp4",
  },
];

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeEvent = events[activeIndex];

  return (
    <section
      id="experience"
      className="bg-[var(--text-primary)] text-white"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container w-full">
        {/* Intro */}
        <div
          style={{
            maxWidth: "850px",
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.8rem, 4vw, 4.5rem)",
              lineHeight: "0.98",
              letterSpacing: "-0.05em",
              fontWeight: 600,
              maxWidth: "700px",
            }}
          >
            Rooms I've had
            <br />
            the privilege to own.
          </h2>

          <p
            style={{
              marginTop: "24px",
              maxWidth: "620px",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            A look at some of the events, conversations and experiences I've
            helped bring to life.
          </p>
        </div>

        {/* Main Experience */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Event List */}
          <div>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {events.map((event, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={event.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group w-full text-left"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "32px 1fr",
                      gap: "12px",
                      padding: "17px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.18)",
                      cursor: "pointer",
                    }}
                  >
                    {/* Number */}
                    <span
                      style={{
                        fontSize: "11px",
                        lineHeight: "1.4",
                        paddingTop: "3px",
                        color: active
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.3)",
                        transition: "color 200ms ease",
                      }}
                    >
                      {event.number}
                    </span>

                    {/* Event */}
                    <div>
                      <p
                        style={{
                          fontSize: "19px",
                          lineHeight: "1.2",
                          letterSpacing: "-0.02em",
                          fontWeight: active ? 500 : 400,
                          color: active
                            ? "white"
                            : "rgba(255,255,255,0.45)",
                          transition: "all 200ms ease",
                        }}
                      >
                        {event.title}
                      </p>

                      <p
                        style={{
                          marginTop: "5px",
                          fontSize: "13px",
                          lineHeight: "1.3",
                          color: active
                            ? "rgba(255,255,255,0.55)"
                            : "rgba(255,255,255,0.25)",
                          transition: "color 200ms ease",
                        }}
                      >
                        {event.date}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Video */}
          <div>
            <div
              className="relative overflow-hidden bg-black"
              style={{
                aspectRatio: "16 / 9",
              }}
            >
              <video
                key={activeEvent.video}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                <source
                  src={activeEvent.video}
                  type="video/mp4"
                />
                Your browser does not support the video element.
              </video>

              {/* Event Indicator */}
              <div
                className="absolute left-5 top-5"
                style={{
                  padding: "7px 10px",
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(8px)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {activeEvent.number} / 05
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}