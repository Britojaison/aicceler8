"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionPillars() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    const strips = gsap.utils.toArray(".curtain-strip");
    if (strips.length === 0) return;

    gsap.to(strips, {
      attr: { height: 0 },
      stagger: 0.03,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          if (sectionRef.current) {
            sectionRef.current.style.visibility = self.progress >= 0.98 ? "hidden" : "visible";
          }
        },
        onLeave: () => {
          if (sectionRef.current) {
            sectionRef.current.style.visibility = "hidden";
          }
        },
        onEnterBack: () => {
          if (sectionRef.current) {
            sectionRef.current.style.visibility = "visible";
          }
        },
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="how-we-transform" className="w-full relative z-20 bg-transparent pointer-events-none">
      <div id="who-we-help" className="absolute -top-10" />
      
      {/* SVG Mask Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <mask id="curtain-mask" maskContentUnits="objectBoundingBox">
            {[...Array(10)].map((_, i) => (
              <rect
                key={i}
                className="curtain-strip"
                x="0"
                y={i * 0.1}
                width="1"
                height="0.102"
                fill="white"
              />
            ))}
          </mask>
        </defs>
      </svg>

      {/* Masked Content */}
      <div 
        className="w-full min-h-screen flex flex-col items-center justify-center py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#E2725B] text-black pointer-events-auto"
        style={{ 
          mask: "url(#curtain-mask)", 
          WebkitMask: "url(#curtain-mask)"
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          
          <div className="flex flex-col space-y-12 lg:space-y-16 max-w-6xl">
            
            <div>
              <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-sans font-medium tracking-tight leading-[0.9] -ml-1">
                Who We Help
              </h2>
            </div>

            <div>
              <p className="text-2xl sm:text-4xl lg:text-[3rem] font-sans font-normal leading-[1.2] tracking-tight text-black/90">
                Whether you&apos;re scaling a business or transforming governance, our AI-first approach meets you where growth matters most.
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-4xl lg:text-[3rem] font-sans font-normal leading-[1.2] tracking-tight text-black/90">
                We partner with enterprises, institutions, and public systems to not only consult and build AI-driven solutions, but also to empower your teams through tailored bootcamps, upskilling programs, and hands-on capability building.
              </p>
            </div>

            <div>
              <p className="text-2xl sm:text-4xl lg:text-[3rem] font-sans font-normal leading-[1.2] tracking-tight text-black/90">
                From C-suite leaders to young professionals, we train organizations to adopt, implement, and thrive with AI—turning every project into a catalyst for sustainable, people-led transformation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

