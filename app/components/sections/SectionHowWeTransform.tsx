"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

interface TransformPillar {
  num: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PILLARS: TransformPillar[] = [
  {
    num: "01",
    tag: "STRATEGIC ADVANTAGE",
    title: "Enterprise Growth Strategy",
    description:
      "We identify where AI creates measurable business advantage across revenue, operations, customer experience and decision-making.",
    image: "/images/pillar_strategy.jpg",
    alt: "Chess pieces depicting enterprise AI growth strategy",
  },
  {
    num: "02",
    tag: "AI-NATIVE OPERATIONS",
    title: "Intelligent Business Systems",
    description:
      "We build AI-native systems that become part of your organization's daily operations.",
    image: "/images/pillar_systems.jpg",
    alt: "Intelligent business systems and enterprise collaboration",
  },
  {
    num: "03",
    tag: "ADOPTION & GOVERNANCE",
    title: "Organization Enablement",
    description:
      "We work alongside leadership teams to drive adoption, enable departments, build governance models and ensure AI becomes part of everyday execution.",
    image: "/images/pillar_enablement.jpg",
    alt: "Collaborative teamwork and organization enablement",
  },
  {
    num: "04",
    tag: "FUTURE-PROOF GROWTH",
    title: "Continuous Evolution",
    description:
      "We continuously optimize, improve and expand your AI ecosystem as new technologies emerge and new business opportunities appear.",
    image: "/images/pillar_evolution.jpg",
    alt: "Continuous evolution and scaling atop mountain ridge",
  },
];

export default function SectionHowWeTransform() {
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="how-we-transform"
      className="relative w-full bg-[#0B0B0C] text-white py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/10 overflow-hidden"
    >
      {/* Corner crosshairs matching screenshots */}
      <div className="corner-plus top-8 left-8 text-[#FF5E3F] pointer-events-none select-none z-10" />
      <div className="corner-plus top-8 right-8 text-[#FF5E3F] pointer-events-none select-none z-10" />
      <div className="corner-plus bottom-8 left-8 text-[#FF5E3F] pointer-events-none select-none z-10" />
      <div className="corner-plus bottom-8 right-8 text-[#FF5E3F] pointer-events-none select-none z-10" />

      <div className="max-w-7xl mx-auto divide-y divide-white/10">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.num}
            data-gsap="item"
            className="py-16 sm:py-20 lg:py-24 first:pt-4 last:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Number */}
            <div className="lg:col-span-2 flex items-center">
              <span className="text-7xl sm:text-8xl lg:text-9xl font-sans font-light tracking-tighter text-white/90 select-none">
                {pillar.num}
              </span>
            </div>

            {/* Image Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-normal text-white tracking-tight leading-[1.1] mb-3">
                {pillar.title}
              </h3>
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FF5E3F] uppercase font-semibold mb-4 block">
                {pillar.tag}
              </span>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-400 font-light leading-relaxed max-w-lg">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
