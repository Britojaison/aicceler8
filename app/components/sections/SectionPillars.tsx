"use client";

import React from "react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

export default function SectionPillars() {
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={sectionRef} id="how-we-transform" className="py-24 md:py-48 px-4 sm:px-6 lg:px-8 w-full bg-[#E2725B] text-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        <div className="flex flex-col space-y-12 lg:space-y-16 max-w-6xl">
          
          <div data-gsap="item">
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-sans font-medium tracking-tight leading-[0.9] -ml-1">
              Who We Help
            </h2>
          </div>

          <div data-gsap="item">
            <p className="text-2xl sm:text-4xl lg:text-[3rem] font-sans font-normal leading-[1.2] tracking-tight text-white/90">
              Whether you're scaling a business or transforming governance, our AI-first approach meets you where growth matters most.
            </p>
          </div>

          <div data-gsap="item">
            <p className="text-2xl sm:text-4xl lg:text-[3rem] font-sans font-normal leading-[1.2] tracking-tight text-white/90">
              We partner with enterprises, institutions, and public systems to not only consult and build AI-driven solutions, but also to empower your teams through tailored bootcamps, upskilling programs, and hands-on capability building.
            </p>
          </div>

          <div data-gsap="item">
            <p className="text-2xl sm:text-4xl lg:text-[3rem] font-sans font-normal leading-[1.2] tracking-tight text-white/90">
              From C-suite leaders to young professionals, we train organizations to adopt, implement, and thrive with AI—turning every project into a catalyst for sustainable, people-led transformation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

