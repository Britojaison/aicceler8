"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionEvolution from "./components/SectionEvolution";
import SectionPillars from "./components/SectionPillars";
import SectionImpactGrid from "./components/SectionImpactGrid";
import SectionPartners from "./components/SectionPartners";
import SectionTransformations from "./components/SectionTransformations";
import SectionDifferentiators from "./components/SectionDifferentiators";
import SectionApproach from "./components/SectionApproach";
import SectionInsights from "./components/SectionInsights";
import SectionFinalCTA from "./components/SectionFinalCTA";
import BookingDrawer from "./components/BookingDrawer";
import Footer from "./components/Footer";

export default function Home() {
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingDrawerOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingDrawerOpen(false);
  };

  return (
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
  );
}
