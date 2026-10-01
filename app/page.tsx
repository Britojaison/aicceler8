"use client";

import React, { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import SectionEvolution from "./components/SectionEvolution";
import SectionHowWeTransform from "./components/sections/SectionHowWeTransform";
import SectionIndustries from "./components/sections/SectionIndustries";
import SectionTraditionalModels from "./components/sections/SectionTraditionalModels";
import SectionApproach from "./components/sections/SectionApproach";
import SectionContact from "./components/sections/SectionContact";
import BookingDrawer from "./components/modals/BookingDrawer";
import Footer from "./components/layout/Footer";
import SmoothScrollProvider from "./components/ui/SmoothScrollProvider";

export default function Home() {
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingDrawerOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingDrawerOpen(false);
  };

  return (
    <SmoothScrollProvider>
      <div className="relative bg-[#0B0B0C] text-neutral-900 min-h-screen selection:bg-[#FF5E3F] selection:text-white">
        {/* Sticky & Floating Header */}
        <Header onOpenBooking={handleOpenBooking} />

        {/* Strictly Assembled Sections Matching Design Screenshots */}
        <main className="relative">
          {/* 01 & 02: Hero - Building AI-Powered Enterprises */}
          <Hero onOpenBooking={handleOpenBooking} />

          {/* 04 & 05: Why AICceler8 - Dark-to-Light Canvas & Narrative Reveal */}
          <SectionEvolution />

          {/* 06: How We Transform - 4 Numbered Pillars with Images */}
          <SectionHowWeTransform />

          {/* 07: Who We Partner With - Industries Drag Carousel */}
          <SectionIndustries onOpenBooking={handleOpenBooking} />

          {/* 08: Why Traditional Models Fall Short - Comparison Matrix */}
          <SectionTraditionalModels />

          {/* 09: Our Approach - 4-Phase Interactive Accordion */}
          <SectionApproach />

          {/* 10: Contact - Book a Strategy Call & Dubai HQ Form */}
          <SectionContact />
        </main>

        {/* 11: AICCELER8 Brand Footer with Giant Typography */}
        <Footer />

        {/* Slide-out Strategy Session Booking Drawer */}
        <BookingDrawer
          isOpen={bookingDrawerOpen}
          onClose={handleCloseBooking}
        />
      </div>
    </SmoothScrollProvider>
  );
}
