"use client";

import React from "react";
import { useGsapScrollTrigger } from "../ui/useGsapScrollTrigger";

export default function SectionPillars() {
  const sectionRef = useGsapScrollTrigger<HTMLElement>({ stagger: 0.12 });

  return (
    <section ref={sectionRef} id="how-we-transform" className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 w-full bg-[#E2725B] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Main Title */}
          <div data-gsap="item" className="lg:col-span-5">
            <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-sans font-medium tracking-tight leading-[0.9] -ml-1">
              Who We <br/> Help
            </h2>
          </div>

          {/* Body Text */}
          <div className="lg:col-span-7 flex flex-col space-y-10 lg:mt-6">
            <div data-gsap="item">
              <p className="text-2xl sm:text-3xl lg:text-[32px] font-medium leading-[1.3] tracking-tight">
                Whether you're scaling a business or transforming governance, our AI-first approach meets you where growth matters most.
              </p>
            </div>

            <div data-gsap="item">
              <p className="text-xl sm:text-2xl lg:text-[24px] leading-[1.5] text-white/90 font-normal">
                We partner with enterprises, institutions, and public systems to not only consult and build AI-driven solutions, but also to empower your teams through tailored bootcamps, upskilling programs, and hands-on capability building.
              </p>
            </div>

            <div data-gsap="item">
              <p className="text-xl sm:text-2xl lg:text-[24px] leading-[1.5] text-white/90 font-normal">
                From C-suite leaders to young professionals, we train organizations to adopt, implement, and thrive with AI—turning every project into a catalyst for sustainable, people-led transformation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

