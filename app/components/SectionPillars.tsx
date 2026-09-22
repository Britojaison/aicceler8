"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionPillars() {
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      id: "strategy",
      num: "01",
      title: "Enterprise Growth Strategy",
      subtitle: "Strategic Advantage",
      description:
        "We identify where AI creates measurable business advantage across revenue, operations, customer experience and decision-making.",
      image: "/images/pillar_strategy.jpg",
    },
    {
      id: "systems",
      num: "02",
      title: "Intelligent Business Systems",
      subtitle: "AI-Native Operations",
      description:
        "We build AI-native systems that become part of your organization's daily operations.",
      image: "/images/pillar_systems.jpg",
    },
    {
      id: "enablement",
      num: "03",
      title: "Organization Enablement",
      subtitle: "Adoption & Governance",
      description:
        "We work alongside leadership teams to drive adoption, enable departments, build governance models and ensure AI becomes part of everyday execution.",
      image: "/images/pillar_enablement.jpg",
    },
    {
      id: "evolution",
      num: "04",
      title: "Continuous Evolution",
      subtitle: "Future-Proof Growth",
      description:
        "We continuously optimize, improve and expand your AI ecosystem as new technologies emerge and new business opportunities appear.",
      image: "/images/pillar_evolution.jpg",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const numbers = section.querySelectorAll(".row-number");
      const titles = section.querySelectorAll(".row-title");
      const descs = section.querySelectorAll(".row-desc");
      const borders = section.querySelectorAll(".row-border");
      const accents = section.querySelectorAll(".corner-accent");
      const cardBorders = section.querySelectorAll(".img-card-border");

      const row3 = section.querySelector("#pillar-row-03");

      // Lenis & GSAP Ultra-Smooth Scroll Scrub Transition
      // Slowly & fluidly interpolates background & row typography to light mode as user reaches Row 03
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row3 || section,
          start: "top 85%",
          end: "top 20%",
          scrub: 1.5,
        },
      });

      tl.to(
        section,
        {
          backgroundColor: "#FAF3EA",
          ease: "power2.inOut",
        },
        0
      )
        .to(
          numbers,
          {
            color: "#381c16",
            ease: "power2.inOut",
          },
          0
        )
        .to(
          titles,
          {
            color: "#381c16",
            ease: "power2.inOut",
          },
          0
        )
        .to(
          descs,
          {
            color: "#4E2C23",
            ease: "power2.inOut",
          },
          0
        )
        .to(
          borders,
          {
            borderColor: "rgba(78, 44, 35, 0.15)",
            ease: "power2.inOut",
          },
          0
        )
        .to(
          cardBorders,
          {
            borderColor: "rgba(78, 44, 35, 0.2)",
            ease: "power2.inOut",
          },
          0
        )
        .to(
          accents,
          {
            color: "#a3a3a3",
            ease: "power2.inOut",
          },
          0
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-transform"
      className="pt-2 sm:pt-6 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-16 w-full bg-[#0c0c0c] text-white relative isolate overflow-hidden transition-colors duration-200"
    >
      {/* Corner cross accents */}
      <div className="corner-accent corner-plus top-3 left-6 sm:left-12 lg:left-16 text-neutral-600 transition-colors" />
      <div className="corner-accent corner-plus top-3 right-6 sm:right-12 lg:right-16 text-neutral-600 transition-colors" />

      {/* List Rows matching SS2 layout */}
      <div className="row-border w-full border-t border-white/10">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            id={`pillar-row-${pillar.num}`}
            className="row-border border-b border-white/10 py-12 lg:py-16 transition-colors duration-300 group hover:bg-black/[0.02]"
          >
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
              {/* Column 1: Big Number */}
              <div className="lg:col-span-3 flex lg:justify-end lg:pr-6 xl:pr-10">
                <span className="row-number text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-sans font-bold tracking-tighter text-white/90 group-hover:text-[#E2725B] transition-colors duration-300 select-none">
                  {pillar.num}
                </span>
              </div>

              {/* Column 2: Center Image */}
              <div className="lg:col-span-4">
                <div className="img-card-border w-full h-52 sm:h-60 lg:h-64 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-neutral-900 group-hover:border-[#E2725B]/40 transition-all duration-500">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Column 3: Right Title & Description */}
              <div className="lg:col-span-5 flex flex-col justify-center gap-3 lg:pl-2">
                <h3 className="row-title text-2xl sm:text-3xl lg:text-4xl font-sans font-medium tracking-tight text-white group-hover:text-[#E2725B] transition-colors duration-300">
                  {pillar.title}
                </h3>

                <div className="type-mono text-xs text-[#E2725B] font-semibold tracking-wider uppercase">
                  {pillar.subtitle}
                </div>

                <p className="row-desc text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-lg transition-colors">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
