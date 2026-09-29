"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete?: () => void;
  onRevealStart?: () => void;
  duration?: number;
}

export default function LoadingScreen({
  onComplete,
  onRevealStart,
  duration = 1.9,
}: LoadingScreenProps) {
  const [percent, setPercent] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isSlidingUp, setIsSlidingUp] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  // Store callbacks in refs to avoid re-triggering useEffect on parent re-renders
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const onRevealStartRef = useRef(onRevealStart);
  onRevealStartRef.current = onRevealStart;

  useEffect(() => {
    // Prevent scroll while loading
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const proxy = { v: 0 };
    let isFinished = false;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Stepwise increments matching primesec.ai cadence
      tl.to(proxy, {
        v: 45,
        duration: duration * 0.35,
        ease: "power2.out",
        onUpdate: () => {
          const val = Math.round(proxy.v);
          setPercent(val);
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${(val / 100).toFixed(3)})`;
          }
        },
      })
        .to(proxy, {
          v: 78,
          duration: duration * 0.3,
          ease: "power1.inOut",
          onUpdate: () => {
            const val = Math.round(proxy.v);
            setPercent(val);
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${(val / 100).toFixed(3)})`;
            }
          },
        })
        .to(proxy, {
          v: 92,
          duration: duration * 0.15,
          ease: "none",
          onUpdate: () => {
            const val = Math.round(proxy.v);
            setPercent(val);
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${(val / 100).toFixed(3)})`;
            }
          },
        })
        .to(proxy, {
          v: 100,
          duration: duration * 0.2,
          ease: "power2.out",
          onUpdate: () => {
            const val = Math.round(proxy.v);
            setPercent(val);
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${(val / 100).toFixed(3)})`;
            }
          },
          onComplete: () => {
            if (isFinished) return;
            isFinished = true;

            // Fade inner text slightly
            if (innerRef.current) {
              innerRef.current.style.transition = "opacity 0.25s ease, transform 0.25s ease";
              innerRef.current.style.opacity = "0.7";
            }

            // Hold on 100% briefly then slide curtain up
            setTimeout(() => {
              // Trigger hero entrance immediately as the curtain slides up
              if (onRevealStartRef.current) {
                onRevealStartRef.current();
              }

              setIsSlidingUp(true);

              // Unlock scroll and remove from DOM after the 850ms transition
              setTimeout(() => {
                document.body.style.overflow = originalOverflow;
                setIsDone(true);
                if (onCompleteRef.current) {
                  onCompleteRef.current();
                }
              }, 880);
            }, 220);
          },
        });
    });

    return () => {
      document.body.style.overflow = originalOverflow;
      ctx.revert();
    };
  }, [duration]);

  if (isDone) return null;

  return (
    <aside
      ref={containerRef}
      aria-label="Loading"
      role="status"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#141518] text-[#f5f5f0] select-none overflow-hidden"
      style={{
        transform: isSlidingUp ? "translateY(-100%)" : "translateY(0%)",
        transition: "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)",
        pointerEvents: isSlidingUp ? "none" : "auto",
        willChange: "transform",
      }}
    >
      {/* Exact Blueprint CAD Grid Lines from Prime Security (primesec.ai) */}
      <div className="absolute inset-0 pointer-events-none w-full h-full flex items-center justify-center">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <style>{`
            .ln {
              stroke-dasharray: 1 1;
              animation: gridWipe 12s linear infinite;
            }
            @keyframes gridWipe {
              0%   { stroke-dashoffset: 0; }
              60%  { stroke-dashoffset: 0; }
              76%  { stroke-dashoffset: -1; }
              80%  { stroke-dashoffset: -1; }
              100% { stroke-dashoffset: -2; }
            }

            .cross {
              stroke-dasharray: 1 1;
              stroke-dashoffset: 1;
              animation-duration: 12s;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }
            .c1 { animation-name: c1; }
            .c2 { animation-name: c2; }
            .c3 { animation-name: c3; }
            .c4 { animation-name: c4; }
            .c5 { animation-name: c5; }
            .c6 { animation-name: c6; }

            @keyframes c1 { 0%,44.3%{stroke-dashoffset:1} 46.8%{stroke-dashoffset:0} 77.1%{stroke-dashoffset:0} 79.6%{stroke-dashoffset:1} 100%{stroke-dashoffset:1} }
            @keyframes c2 { 0%,74%{stroke-dashoffset:1}   76.5%{stroke-dashoffset:0} 83.3%{stroke-dashoffset:0} 85.8%{stroke-dashoffset:1} 100%{stroke-dashoffset:1} }
            @keyframes c3 { 0%,23.3%{stroke-dashoffset:1} 25.8%{stroke-dashoffset:0} 65.7%{stroke-dashoffset:0} 68.2%{stroke-dashoffset:1} 100%{stroke-dashoffset:1} }
            @keyframes c4 { 0%,37.1%{stroke-dashoffset:1} 39.6%{stroke-dashoffset:0} 56.8%{stroke-dashoffset:0} 59.3%{stroke-dashoffset:1} 100%{stroke-dashoffset:1} }
            @keyframes c5 { 0%,34%{stroke-dashoffset:1}   36.5%{stroke-dashoffset:0} 75.9%{stroke-dashoffset:0} 78.4%{stroke-dashoffset:1} 100%{stroke-dashoffset:1} }
            @keyframes c6 { 0%,15.9%{stroke-dashoffset:1} 18.4%{stroke-dashoffset:0} 25.7%{stroke-dashoffset:0} 28.2%{stroke-dashoffset:1} 100%{stroke-dashoffset:1} }

            @media (prefers-reduced-motion: reduce) {
              .ln, .cross { animation: none; stroke-dashoffset: 0; }
            }
          `}</style>

          <g clipPath="url(#clip0_primesec)">
            {/* Top horizontal divider line */}
            <path
              className="ln"
              pathLength="1"
              style={{ animationDelay: "-4.8s" }}
              d="M1440 62.5L0 62.5"
              stroke="#343434"
              strokeWidth="1.2"
            />

            <g clipPath="url(#clip1_primesec)">
              {/* Diagonal Line 1 (from top-right down to bottom-left) */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "0s" }}
                d="M1350 -113L132.139 1106.18"
                stroke="#343434"
                strokeWidth="1.3561"
              />

              {/* Diagonal Line 2 (from top-left down to bottom-right) */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-9.6s" }}
                d="M132 -113L1349.86 1106.18"
                stroke="#343434"
                strokeWidth="1.3561"
              />

              {/* Central Bounding Square (enclosing the 100% counter) */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-6s" }}
                d="M861 376L621.378 376L621.378 616.939L861 616.939Z"
                stroke="#343434"
                strokeWidth="1.3561"
              />

              {/* Lower Horizontal Crossline */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-8.4s" }}
                d="M-481.789 759.851L1940.77 759.851"
                stroke="#343434"
                strokeWidth="1.34991"
              />

              {/* Upper Horizontal Crossline */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-1.2s" }}
                d="M-481.789 247.691L1940.77 247.691"
                stroke="#343434"
                strokeWidth="1.34991"
              />

              {/* Left Vertical Line */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-7.2s" }}
                d="M228.429 1111.38L228.429 -118.326"
                stroke="#343434"
                strokeWidth="1.34991"
              />

              {/* Right Vertical Line */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-2.4s" }}
                d="M1132 1111.38L1132 -118.326"
                stroke="#343434"
                strokeWidth="1.34991"
              />

              {/* Compass Crosshair Accent */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-10.8s" }}
                d="M217.89 247.538L238.391 247.538"
                stroke="#343434"
                strokeWidth="1.90103"
              />
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-10.8s" }}
                d="M228.007 257.659L228.007 237.159"
                stroke="#343434"
                strokeWidth="1.90103"
              />

              {/* Sweeping Circular Compass Arc on Left */}
              <path
                className="ln"
                pathLength="1"
                style={{ animationDelay: "-3.6s" }}
                d="M223.914 249.007C45.29 249.007 -301.412 431.357 -301.412 761.167"
                stroke="#343434"
                strokeWidth="1.31661"
              />

              {/* Grid Cross Markers at Intersections */}
              <rect width="26" height="26" transform="translate(1119 235)" fill="#151618" />
              <path className="cross c2" pathLength="1" d="M1125 248.091L1139.5 248.091" stroke="#5E5E5D" strokeWidth="1.2" />
              <path className="cross c2" pathLength="1" d="M1132.16 255.25L1132.16 240.75" stroke="#5E5E5D" strokeWidth="1.2" />

              <rect width="26" height="26" transform="translate(1119 49)" fill="#151618" />
              <path className="cross c1" pathLength="1" d="M1125 62.0913L1139.5 62.0913" stroke="#5E5E5D" strokeWidth="1.2" />
              <path className="cross c1" pathLength="1" d="M1132.16 69.25L1132.16 54.75" stroke="#5E5E5D" strokeWidth="1.2" />

              <rect width="26" height="26" transform="translate(215 49)" fill="#151618" />
              <path className="cross c4" pathLength="1" d="M221 62.0913L235.5 62.0913" stroke="#5E5E5D" strokeWidth="1.2" />
              <path className="cross c4" pathLength="1" d="M228.156 69.25L228.156 54.75" stroke="#5E5E5D" strokeWidth="1.2" />

              <rect width="26" height="26" transform="translate(215 236)" fill="#151618" />
              <path className="cross c5" pathLength="1" d="M221 249.091L235.5 249.091" stroke="#5E5E5D" strokeWidth="1.2" />
              <path className="cross c5" pathLength="1" d="M228.156 256.25L228.156 241.75" stroke="#5E5E5D" strokeWidth="1.2" />
            </g>

            <rect width="26" height="26" transform="translate(215 748)" fill="#151618" />
            <path className="cross c6" pathLength="1" d="M221 761.091L235.5 761.091" stroke="#5E5E5D" strokeWidth="1.2" />
            <path className="cross c6" pathLength="1" d="M228.156 768.25L228.156 753.75" stroke="#5E5E5D" strokeWidth="1.2" />

            <rect width="26" height="26" transform="translate(1119 748)" fill="#151618" />
            <path className="cross c3" pathLength="1" d="M1125 761.091L1139.5 761.091" stroke="#5E5E5D" strokeWidth="1.2" />
            <path className="cross c3" pathLength="1" d="M1132.16 768.25L1132.16 753.75" stroke="#5E5E5D" strokeWidth="1.2" />
          </g>

          {/* Top Frame Border */}
          <path d="M0 0V1H1440V0V-1H0V0Z" fill="#343434" />

          <defs>
            <clipPath id="clip0_primesec">
              <path d="M0 0H1440V900H0V0Z" fill="white" />
            </clipPath>
            <clipPath id="clip1_primesec">
              <rect width="1440" height="900" fill="white" transform="matrix(-1 0 0 1 1440 0)" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Center Counter & Progress Bar (matching Prime Security layout) */}
      <div
        ref={innerRef}
        className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 w-[min(380px,75vw)] sm:w-[min(440px,64vw)] -mt-2 sm:-mt-3"
      >
        {/* Large Percentage Counter */}
        <div className="flex items-start justify-center font-sans font-medium text-[#f5f5f0] tracking-tight leading-none select-none text-[clamp(4.2rem,11vw,8.5rem)]">
          <span style={{ fontVariantNumeric: "tabular-nums" }}>{percent}</span>
          <span>%</span>
        </div>

        {/* The Exact Horizontal Progress Bar under the number */}
        <div className="w-full h-[1.5px] bg-[#f5f5f024] overflow-hidden">
          <div
            ref={barRef}
            className="w-full h-full bg-[#f5f5f0] origin-left"
            style={{
              transform: "scaleX(0)",
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </aside>
  );
}
