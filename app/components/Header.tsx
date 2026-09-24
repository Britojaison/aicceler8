"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "WHY AICCELER8", href: "#why-aicceler8" },
    { name: "HOW WE TRANSFORM", href: "#how-we-transform" },
    { name: "WHO WE WORK WITH", href: "#who-we-work-with" },
    { name: "HOW'S AICCELER8 BETTER", href: "#why-traditional-models" },
    { name: "OUR APPROACH", href: "#our-approach" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white text-black shadow-md border-b border-neutral-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left Section: Logo & Slanting Line + Nav Links */}
        <div className="flex items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="AICceler8 Home"
          >
            <div className="relative h-8 w-28 sm:h-9 sm:w-32 flex items-center">
              <Image
                src="/logo.png"
                alt="AICceler8"
                fill
                priority
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "filter brightness-0" : "filter brightness-0 invert"
                }`}
              />
            </div>
          </a>

          {/* Nav items & Slanting Line revealed on scroll */}
          <div
            className={`flex items-center transition-all duration-500 ease-out ${
              isScrolled
                ? "opacity-100 max-w-5xl translate-x-0 ml-4 sm:ml-6"
                : "opacity-0 max-w-0 translate-x-4 pointer-events-none overflow-hidden"
            }`}
          >
            {/* Slanting Line Separator */}
            <div className="h-6 w-[2px] bg-neutral-300 transform -skew-x-[22deg] shrink-0 mr-6 sm:mr-8" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 sm:gap-8 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="type-mono text-[11px] text-neutral-800 hover:text-burnt-peach font-semibold tracking-wider transition-colors duration-200 py-1 relative group uppercase"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-burnt-peach transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Section: Mobile Menu Toggle revealed on scroll */}
        <div
          className={`flex items-center gap-4 transition-all duration-500 ease-out ${
            isScrolled
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-800 hover:text-burnt-peach rounded border border-neutral-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && isScrolled && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block type-mono text-xs text-neutral-800 hover:text-burnt-peach font-bold py-2 border-b border-neutral-100"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
