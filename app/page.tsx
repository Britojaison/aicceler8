"use client";

import React, { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import SectionEvolution from "./components/sections/SectionEvolution";
import SectionPillars from "./components/sections/SectionPillars";
import SectionImpactGrid from "./components/sections/SectionImpactGrid";
import SectionPartners from "./components/sections/SectionPartners";
import SectionTransformations from "./components/sections/SectionTransformations";
import SectionDifferentiators from "./components/sections/SectionDifferentiators";
import SectionApproach from "./components/sections/SectionApproach";
import SectionInsights from "./components/sections/SectionInsights";
import SectionFinalCTA from "./components/sections/SectionFinalCTA";
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
      <div className="relative bg-white text-neutral-900 min-h-screen selection:bg-black selection:text-white">
      {/* Floating Freshworks-Style Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenBooking={handleOpenBooking} />
        <SectionEvolution />
        <SectionPillars />
        <SectionImpactGrid />
        <SectionPartners />
        <SectionTransformations onOpenBooking={handleOpenBooking} />
        <SectionDifferentiators />
        <SectionApproach />
        <SectionInsights />
        <SectionFinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Clean Light Footer */}
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
