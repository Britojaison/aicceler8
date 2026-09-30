"use client";

import React from "react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";
import TextBlockAnimation from "../ui/text-block-animation";

export default function SectionEvolution() {
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.14 });

  return (
    <section ref={sectionRef} id="why-aicceler8" className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 w-full bg-[#101010] text-white relative overflow-hidden">
      {/* Subtle Grain/Texture overlay if desired, currently just a dark solid background matching the vibe */}
      <div data-gsap="title" className="max-w-[1400px] mx-auto w-full relative z-10">

        
        <h2 className="text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] font-sans font-medium tracking-tightest leading-[0.9] text-white">
          We help enterprises, institutions, and governments scale faster, operate smarter, and lead confidently by combining <span className="text-white/30">strategic thinking</span>, AI integration, and <span className="text-white/30">execution</span> at speed.
        </h2>
        
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-[15px] sm:text-base text-white/60 font-normal leading-[1.6] max-w-4xl">
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
