"use client";

import React from "react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";
import TextBlockAnimation from "../ui/text-block-animation";

export default function SectionEvolution() {
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.14 });

  return (
    <section ref={sectionRef} id="why-aicceler8" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Section Header with Freshworks Serif Italic */}
      <div data-gsap="title" className="max-w-3xl mb-16">
        <span className="text-xs font-semibold tracking-wider text-brand-coral uppercase mb-3 block">
          Who We Are
        </span>
        <TextBlockAnimation blockColor="#F59E0B" delay={0.5}>
          <h2 className="text-4xl sm:text-5xl font-heading font-normal text-neutral-950 tracking-tight leading-[1.12] mb-6">
            The Growth Architects for an AI-Powered Era
          </h2>
        </TextBlockAnimation>
        <div className="space-y-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
          <p>
            We help enterprises, institutions, and governments scale faster, operate smarter, and lead confidently by combining strategic thinking, AI integration, and execution at speed.
          </p>
          <p>
            AICCELER8 is a new-age Growth Management Consultancy built for the world's most ambitious organizations—enterprises, governments, and institutions navigating rapid change.
          </p>
          <p>
            We combine the strategic depth of a consulting firm, the agility of a tech company, and the precision of an AI-native execution team. Our job is simple yet bold: to help organizations move faster, scale smarter, and lead confidently in an AI-powered world.
          </p>
        </div>
      </div>

    </section>
  );
}
