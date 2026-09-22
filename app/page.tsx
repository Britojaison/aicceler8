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
import BookingDrawer from "./components/BookingDrawer";
import Footer from "./components/Footer";

export default function Home() {
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
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
        <SectionPillars />
        <SectionPartners />
        <SectionDifferentiators />
        <SectionApproach />
      </main>

      {/* Clean Light Footer */}
      <Footer />

      {/* Slide-out Strategy Session Booking Drawer */}
      <BookingDrawer
        isOpen={bookingDrawerOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
