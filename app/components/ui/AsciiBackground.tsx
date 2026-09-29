"use client";

import React, { useEffect, useRef } from "react";

interface AsciiBackgroundProps {
  className?: string;
}

export default function AsciiBackground({ className = "" }: AsciiBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse tracking with smooth lerp
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 280,
      active: false,
    };

    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave, { passive: true });

    // Cell size matching benjamincreative.me monospace proportion
    const CELL_W = 11;
    const CELL_H = 16;
    const FONT_SIZE = 12;

    const render = () => {
      time += 0.016;

      // Mouse smooth interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        // Wandering ambient focal point
        const idleX = width * 0.6 + Math.sin(time * 0.7) * (width * 0.18);
        const idleY = height * 0.52 + Math.cos(time * 0.5) * (height * 0.16);
        mouse.x += (idleX - mouse.x) * 0.04;
        mouse.y += (idleY - mouse.y) * 0.04;
      }

      // Base background: Deep pure black (#050202)
      ctx.fillStyle = "#050202";
      ctx.fillRect(0, 0, width, height);

      // Saturated glowing fiery vermilion/red field matching benjamincreative.me
      const mainGlow = ctx.createRadialGradient(
        width * 0.52,
        height * 0.54,
        width * 0.05,
        width * 0.5,
        height * 0.55,
        width * 0.65
      );
      mainGlow.addColorStop(0, "rgba(235, 48, 0, 0.55)");
      mainGlow.addColorStop(0.35, "rgba(200, 32, 0, 0.4)");
      mainGlow.addColorStop(0.7, "rgba(90, 14, 0, 0.25)");
      mainGlow.addColorStop(1, "rgba(5, 2, 2, 0)");
      ctx.fillStyle = mainGlow;
      ctx.fillRect(0, 0, width, height);

      // Right-side vertical luminous ridge glow
      const ridgeGlow = ctx.createRadialGradient(
        width * 0.75,
        height * 0.45,
        20,
        width * 0.78,
        height * 0.5,
        width * 0.45
      );
      ridgeGlow.addColorStop(0, "rgba(255, 75, 0, 0.38)");
      ridgeGlow.addColorStop(0.5, "rgba(180, 25, 0, 0.18)");
      ridgeGlow.addColorStop(1, "rgba(5, 2, 2, 0)");
      ctx.fillStyle = ridgeGlow;
      ctx.fillRect(0, 0, width, height);

      // Interactive mouse bloom
      if (mouse.x > -500) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        mouseGlow.addColorStop(0, "rgba(255, 90, 20, 0.32)");
        mouseGlow.addColorStop(0.5, "rgba(220, 40, 0, 0.15)");
        mouseGlow.addColorStop(1, "rgba(5, 2, 2, 0)");
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // ASCII Monospace Settings
      ctx.font = `600 ${FONT_SIZE}px "Fragment Mono", "SF Mono", Menlo, "Courier New", monospace`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      const cols = Math.ceil(width / CELL_W);
      const rows = Math.ceil(height / CELL_H);

      const mx = mouse.x;
      const my = mouse.y;
      const mRadius = mouse.radius;

      for (let r = 0; r < rows; r++) {
        const py = r * CELL_H + CELL_H * 0.5;
        const ny = py / height; // 0..1

        for (let c = 0; c < cols; c++) {
          const px = c * CELL_W + CELL_W * 0.5;
          const nx = px / width; // 0..1

          // Tilted 3D wave space (~22 deg rotation)
          const rotX = nx * 0.92 + ny * 0.38;
          const rotY = -nx * 0.38 + ny * 0.92;

          // Harmonic undulating 3D fluid wave
          const wave1 = Math.sin(rotX * 6.2 - time * 1.4) * 0.45;
          const wave2 = Math.sin(rotY * 4.5 + rotX * 2.8 + time * 1.1) * 0.35;
          const wave3 = Math.cos((rotX - rotY) * 5.8 - time * 0.8) * 0.2;
          const wave = (wave1 + wave2 + wave3 + 1.0) * 0.5; // 0..1

          // Curved 3D ridge arching from center to top-right (matching benjamincreative.me)
          const ridgeCurve = 0.72 + Math.sin(ny * Math.PI * 0.9 - 0.2) * 0.14;
          const distToRidge = Math.abs(nx - ridgeCurve);
          const ridgeFactor = Math.max(0, 1 - distToRidge * 3.5);

          // Center body bias
          const bodyDist = Math.sqrt(Math.pow(nx - 0.48, 2) * 1.4 + Math.pow(ny - 0.55, 2) * 1.1);
          const bodyFactor = Math.max(0, 1 - bodyDist * 1.5);

          // Mouse proximity influence
          const dx = px - mx;
          const dy = py - my;
          const distMouse = Math.sqrt(dx * dx + dy * dy);
          let mouseFactor = 0;
          if (distMouse < mRadius) {
            mouseFactor = Math.pow(1 - distMouse / mRadius, 1.8);
          }

          // Combined intensity (0..1)
          let intensity =
            wave * 0.35 +
            ridgeFactor * 0.48 +
            bodyFactor * 0.38 +
            mouseFactor * 0.4;

          intensity = Math.pow(Math.max(0, Math.min(1, intensity)), 1.25);

          // Character selection exactly matching benjamincreative.me:
          // Low density / dark perimeter: ^ and .
          // Medium density: + and -
          // Primary red body: $ (predominant character in benjamincreative.me)
          // Illuminated ridge: 8, #, %, $
          let char = "";
          let color = "";

          if (intensity < 0.08) {
            // Completely empty space on far edges
            continue;
          } else if (intensity < 0.2) {
            // Sparse dark red ^
            char = "^";
            color = "#450c04";
          } else if (intensity < 0.32) {
            // Transition +
            char = "+";
            color = "#821a07";
          } else if (intensity < 0.45) {
            // Stepping - or s
            char = "-";
            color = "#b8260a";
          } else if (intensity < 0.75) {
            // The signature $ character across the main body
            char = "$";
            color = "#ea340d"; // Vibrant electric vermilion
          } else if (intensity < 0.88) {
            // Bright crest: # or 8
            char = "#";
            color = "#ff4f1a";
          } else {
            // Maximum ridge highlight: 8 or % in radiant flame orange/amber
            char = "8";
            color = mouseFactor > 0.3 ? "#ffffff" : "#ff7e40";
          }

          ctx.fillStyle = color;
          ctx.fillText(char, px, py);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ background: "#050202" }}
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5, 2, 2, 0.4) 75%, rgba(5, 2, 2, 0.9) 100%)",
        }}
      />
    </div>
  );
}
