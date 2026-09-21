"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  alpha: number;
  speed: number;
  angle: number;
  amplitude: number;
}

export default function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const colors = [
      "#F59E0B", // Golden Amber
      "#FBBF24", // Warm Yellow
      "#EF4444", // Coral Red
      "#F97316", // Bright Orange
      "#8B5CF6", // Violet
      "#A855F7", // Purple
      "#EC4899", // Magenta
      "#6366F1", // Indigo
    ];

    const particleCount = Math.min(380, Math.floor((width * height) / 1800));
    const particles: Particle[] = [];

    // Initialize particles clustered along a dynamic sweeping curved band
    for (let i = 0; i < particleCount; i++) {
      const progress = Math.random(); // 0 to 1 along curve
      // Bezier curve from top right towards middle/bottom
      const startX = width * 0.95;
      const startY = height * 0.05;
      const cpX = width * 0.55;
      const cpY = height * 0.35;
      const endX = width * 0.25;
      const endY = height * 0.95;

      // Quadratic bezier point
      const t = progress;
      const bx = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * cpX + t * t * endX;
      const by = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * cpY + t * t * endY;

      // Perpendicular jitter
      const spread = (1 - Math.abs(t - 0.5) * 1.5) * 110 + 20;
      const offsetX = (Math.random() - 0.5) * spread;
      const offsetY = (Math.random() - 0.5) * spread;

      // Color mapping along curve: yellow/gold at top, violet/coral at bottom
      const colorIndex = Math.floor(t * (colors.length - 1) + (Math.random() - 0.5));
      const chosenColor = colors[Math.max(0, Math.min(colors.length - 1, colorIndex))];

      particles.push({
        x: bx + offsetX,
        y: by + offsetY,
        baseX: bx + offsetX,
        baseY: by + offsetY,
        size: Math.random() * 3.5 + 1.2,
        color: chosenColor,
        alpha: Math.random() * 0.65 + 0.35,
        speed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2,
        amplitude: Math.random() * 25 + 8,
      });
    }

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let tick = 0;
    const render = () => {
      tick += 0.018;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic organic flow
        p.angle += p.speed;
        const targetX = p.baseX + Math.cos(p.angle + tick) * p.amplitude;
        const targetY = p.baseY + Math.sin(p.angle * 1.2 + tick) * p.amplitude;

        // Mouse repulsion
        const dx = targetX - mouse.x;
        const dy = targetY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 35;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        } else {
          p.x += (targetX - p.x) * 0.08;
          p.y += (targetY - p.y) * 0.08;
        }

        // Draw particle with soft glow
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
