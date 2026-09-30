"use client";

import React from "react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";
import TextBlockAnimation from "../ui/text-block-animation";
import TextReveal from "../../../components/text-reveal/text-reveal.jsx";

export default function SectionEvolution() {
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.14 });

  return (
    <section ref={sectionRef} id="why-aicceler8" className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 w-full bg-[#101010] text-white relative overflow-hidden">
      {/* Subtle Grain/Texture overlay if desired, currently just a dark solid background matching the vibe */}
      <div data-gsap="title" className="max-w-[1400px] mx-auto w-full relative z-10">

        <TextReveal
          textClassName="!text-white !text-left !font-sans !text-[11vw] md:!text-[6.5vw] lg:!text-[5.5vw] !font-medium !tracking-tightest !leading-[0.9]"
          type="words"
          start="top 85%"
          scrub={false}
        >
          We help enterprises, institutions, and governments scale faster, operate smarter, and lead confidently by combining <span className="text-white/30">strategic thinking</span>, AI integration, and <span className="text-white/30">execution</span> at speed.
        </TextReveal>

      </div>
    </section>
  );
}
