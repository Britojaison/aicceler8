"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapScrollOptions {
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
}

export function useGsapScrollTrigger<T extends HTMLElement = HTMLElement>(
  options?: GsapScrollOptions
) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const title = containerRef.current?.querySelector("[data-gsap='title']");
      const items = containerRef.current?.querySelectorAll("[data-gsap='item']");

      if (title) {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: options?.start || "top 85%",
            once: true,
          },
          y: options?.y ?? 35,
          autoAlpha: 0,
          duration: options?.duration ?? 0.85,
          ease: "power3.out",
          clearProps: "all",
        });
      }

      if (items && items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: items[0] || containerRef.current,
            start: options?.start || "top 82%",
            once: true,
          },
          y: options?.y ?? 30,
          autoAlpha: 0,
          duration: options?.duration ?? 0.75,
          stagger: options?.stagger ?? 0.1,
          ease: "power3.out",
          clearProps: "all",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [options?.duration, options?.stagger, options?.start, options?.y]);

  return containerRef;
}
