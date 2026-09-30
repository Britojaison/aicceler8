"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Instagram, Facebook, Linkedin } from "lucide-react";
import SlideToConfirm from "../ui/SlideToConfirm";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const mainLinks = [
    { name: "Who We Help", href: "#who-we-help" },
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#industries" },
    { name: "Why AICCELER8", href: "#why-aicceler8" },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-[60] px-6 py-6 md:px-12 md:py-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          aria-label="AICCELER8 home"
          className="relative z-[60] flex items-center transition-transform hover:scale-95"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative h-7 w-28 md:h-8 md:w-32">
            <Image
              src="/images/logos/logo.png"
              alt="AICCELER8"
              fill
              priority
              className={`object-contain transition-all ${
                mobileMenuOpen ? "brightness-0" : ""
              }`}
            />
          </div>
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6 relative z-[60]">
          <div className="hidden sm:block">
            <SlideToConfirm
              width={240}
              label="Slide to book call"
              theme="dark"
              onConfirm={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
            />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full transition-transform hover:scale-95"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute w-6 h-[2px] bg-black rotate-45 transition-transform" />
                <div className="absolute w-6 h-[2px] bg-black -rotate-45 transition-transform" />
              </div>
            ) : (
              <div className="flex flex-col gap-[6px] items-end">
                <div className="w-8 h-[2px] bg-black" />
                <div className="w-8 h-[2px] bg-black" />
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
        <div className="h-full w-full flex flex-col justify-center px-6 md:px-16 lg:px-32 max-w-[1400px] mx-auto">
          <nav className="flex flex-col w-full mt-12 md:mt-0">
            {mainLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between border-b border-black/20 py-5 md:py-8 text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-black hover:text-[#E2725B] transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Footer Links */}
        <div className="absolute bottom-8 left-6 md:left-16 flex gap-6 md:gap-8 text-sm md:text-base font-bold text-black">
          <a href="#" className="hover:text-[#E2725B] transition-colors">Blog</a>
          <a href="#" className="hover:text-[#E2725B] transition-colors">Jobs</a>
          <a href="#" className="hover:text-[#E2725B] transition-colors">FAQ</a>
        </div>
        
        <div className="absolute bottom-8 right-6 md:right-16 flex gap-5 md:gap-6 text-black">
          <a href="#" aria-label="Instagram" className="hover:text-[#E2725B] transition-colors">
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#E2725B] transition-colors">
            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#E2725B] transition-colors">
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </>
  );
}
