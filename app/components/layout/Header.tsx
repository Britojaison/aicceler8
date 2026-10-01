"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Instagram, Facebook, Linkedin } from "lucide-react";
import SlideToConfirm from "../ui/SlideToConfirm";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "WHY AICCELER8", href: "#why-aicceler8" },
    { name: "HOW WE TRANSFORM", href: "#how-we-transform" },
    { name: "WHO WE WORK WITH", href: "#who-we-partner-with" },
    { name: "HOW'S AICCELER8 BETTER", href: "#hows-aicceler8-better" },
    { name: "OUR APPROACH", href: "#our-approach" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Header Container */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/10 py-3.5 px-6 md:px-12"
            : "bg-transparent py-6 md:py-8 px-6 md:px-12 pointer-events-none"
        } flex items-center justify-between`}
      >
        {/* Left Side: Logo & Horizontal Nav (Shown on scroll or desktop) */}
        <div className="pointer-events-auto flex items-center gap-6 lg:gap-8">
          <a
            href="#home"
            aria-label="AICCELER8 home"
            className="relative flex items-center transition-transform hover:scale-95 shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-7 w-28 md:h-8 md:w-32">
              <Image
                src="/images/logos/logo.png"
                alt="AICCELER8"
                fill
                priority
                className={`object-contain transition-all ${
                  mobileMenuOpen || isScrolled ? "brightness-0" : ""
                }`}
              />
            </div>
          </a>

          {/* Desktop Nav Bar matching 01-header.png & 06-how-we-transform.png */}
          <div
            className={`hidden xl:flex items-center gap-6 2xl:gap-8 transition-opacity duration-300 ${
              isScrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="text-neutral-400 font-light select-none">/</span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] 2xl:text-xs font-mono font-bold tracking-wider text-black/80 hover:text-[#FF5E3F] transition-colors whitespace-nowrap uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="pointer-events-auto flex items-center gap-4 md:gap-6 relative z-[60]">
          <div className="hidden sm:block">
            <SlideToConfirm
              width={230}
              label="Slide to book call"
              theme={isScrolled ? "light" : "dark"}
              onConfirm={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-11 h-11 rounded-full transition-transform hover:scale-95"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute w-6 h-[2px] bg-black rotate-45 transition-transform" />
                <div className="absolute w-6 h-[2px] bg-black -rotate-45 transition-transform" />
              </div>
            ) : (
              <div className="flex flex-col gap-[6px] items-end">
                <div
                  className={`w-7 h-[2px] transition-colors ${
                    isScrolled ? "bg-black" : "bg-black"
                  }`}
                />
                <div
                  className={`w-7 h-[2px] transition-colors ${
                    isScrolled ? "bg-black" : "bg-black"
                  }`}
                />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#FFFAF0] transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto py-20">
          <nav className="flex flex-col w-full overflow-y-auto max-h-[70vh] scrollbar-none">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between border-b border-black/15 py-4 md:py-6 text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-black hover:text-[#FF5E3F] transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Footer Links */}
        <div className="absolute bottom-8 left-6 md:left-16 flex gap-6 md:gap-8 text-sm md:text-base font-bold text-black">
          <a href="#how-we-transform" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5E3F] transition-colors">
            Transformation
          </a>
          <a href="#our-approach" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5E3F] transition-colors">
            Approach
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5E3F] transition-colors">
            Contact
          </a>
        </div>

        <div className="absolute bottom-8 right-6 md:right-16 flex gap-5 md:gap-6 text-black">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#FF5E3F] transition-colors"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </>
  );
}
