"use client";

import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export default function CanvasLightTrails() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking with smooth target
    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      speed: 0,
      lastX: width * 0.5,
      lastY: height * 0.4,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Ribbon trails
    interface Ribbon {
      points: { x: number; y: number }[];
      angle: number;
      speed: number;
      radius: number;
      color: string;
      width: number;
      frequency: number;
    }

    const ribbons: Ribbon[] = [
      {
        points: [],
        angle: 0,
        speed: 0.015,
        radius: Math.min(width, height) * 0.35,
        color: "rgba(255, 59, 0, 0.45)",
        width: 2.2,
        frequency: 0.02,
      },
      {
        points: [],
        angle: Math.PI * 0.6,
        speed: 0.018,
        radius: Math.min(width, height) * 0.28,
        color: "rgba(255, 85, 28, 0.35)",
        width: 1.8,
        frequency: 0.025,
      },
      {
        points: [],
        angle: Math.PI * 1.2,
        speed: 0.012,
        radius: Math.min(width, height) * 0.4,
        color: "rgba(255, 30, 0, 0.28)",
        width: 3.0,
        frequency: 0.018,
      },
    ];

    const maxPoints = 85;
    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      const dx = mouse.targetX - mouse.lastX;
      const dy = mouse.targetY - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.lastX = mouse.targetX;
      mouse.lastY = mouse.targetY;

      // Clear transparently so background obsidian and laser-grid stay crisp
      ctx.clearRect(0, 0, width, height);

      // Render flowing energy ribbons
      ribbons.forEach((ribbon, rIdx) => {
        ribbon.angle += ribbon.speed;

        // Orbit around cursor/hero center with harmonic waves
        const orbitX =
          mouse.x +
          Math.cos(ribbon.angle) * ribbon.radius * (1 + Math.sin(time * 1.5 + rIdx) * 0.25) +
          Math.sin(time * 2 + rIdx) * 60;
        const orbitY =
          mouse.y +
          Math.sin(ribbon.angle * 1.2) * (ribbon.radius * 0.65) * (1 + Math.cos(time + rIdx) * 0.2) +
          Math.cos(time * 1.8) * 40;

        ribbon.points.unshift({ x: orbitX, y: orbitY });
        if (ribbon.points.length > maxPoints) {
          ribbon.points.pop();
        }

        if (ribbon.points.length < 3) return;

        ctx.beginPath();
        ctx.moveTo(ribbon.points[0].x, ribbon.points[0].y);

        for (let i = 1; i < ribbon.points.length - 1; i++) {
          const xc = (ribbon.points[i].x + ribbon.points[i + 1].x) / 2;
          const yc = (ribbon.points[i].y + ribbon.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(ribbon.points[i].x, ribbon.points[i].y, xc, yc);
        }

        ctx.strokeStyle = ribbon.color;
        ctx.lineWidth = ribbon.width;
        ctx.shadowColor = "#FF3B00";
        ctx.shadowBlur = 18;
        ctx.stroke();

        // Secondary glow core
        ctx.lineWidth = ribbon.width * 0.4;
        ctx.strokeStyle = "rgba(255, 230, 220, 0.6)";
        ctx.shadowBlur = 4;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
