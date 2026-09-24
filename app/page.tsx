"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionEvolution from "./components/SectionEvolution";
import SectionPillars from "./components/SectionPillars";
import SectionPartners from "./components/SectionPartners";
import SectionDifferentiators from "./components/SectionDifferentiators";
import SectionApproach from "./components/SectionApproach";
import ContactSection from "./components/ContactSection";
import BookingDrawer from "./components/BookingDrawer";
import Footer from "./components/Footer";

export default function Home() {
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll handler for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          lenis.scrollTo(element as HTMLElement, { offset: 0, duration: 1.4 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = () => {
    setBookingDrawerOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingDrawerOpen(false);
  };

  return (
    <div className="relative bg-espresso-deep text-foreground min-h-screen selection:bg-burnt-peach selection:text-espresso-deep">
      {/* Floating Performance Lab Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenBooking={handleOpenBooking} />
        <SectionEvolution />
        {/* Joint Dark-to-Light canvas for How We Transform & Who We Partner With */}
        <div id="dark-to-light-canvas" className="w-full relative bg-[#0c0c0c]">
          <SectionPillars />
          <SectionPartners />
        </div>
        <SectionDifferentiators />
        <SectionApproach />
      </main>

      {/* Joint Contact Section & Footer with one continuous gradient.png background */}
      <div className="relative w-full overflow-hidden bg-[#0d0d0d]">
        {/* Continuous Background Image - gradient.png spanning both ContactSection and Footer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/gradient.png"
            alt="Contact and Footer Background Gradient"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <ContactSection />
        <Footer />
      </div>

      {/* Slide-out Strategy Session Booking Drawer */}
      <BookingDrawer
        isOpen={bookingDrawerOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
