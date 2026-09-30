"use client"

import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { cn } from "@/lib/utils";

// Ensure plugins are registered
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextBlockAnimation({
    children,
    animateOnScroll = true,
    delay = 0,
    blockColor = "#000",
    stagger = 0.1, // Reduced for smoother flow
    duration = 0.6, // Slightly faster for snappiness
    isReady = true, // Optional prop to delay animation until ready
}: {
    children: React.ReactNode,
    animateOnScroll?: boolean,
    delay?: number,
    blockColor?: string,
    stagger?: number,
    duration?: number,
    isReady?: boolean,
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // 1. Setup SplitText
        const split = new SplitText(containerRef.current, {
            type: "lines,words",
            linesClass: "block-line-parent relative overflow-hidden", // Add relative and overflow-hidden for pseudo-element
        });

        const lines = split.lines;
        const words = split.words;

        // Prepare CSS variables for the pseudo-elements (blocks)
        // We will animate --block-scale and --block-origin
        lines.forEach((line) => {
            gsap.set(line, { 
                "--block-scale": 0,
                "--block-origin": "left center",
                "--block-color": blockColor,
            });
        });
        
        // Hide the text initially (words) so the block animation is visible
        gsap.set(words, { opacity: 0 });

        if (!isReady) {
            // Return early if not ready, but ensure cleanup happens when it unmounts/updates
            return () => split.revert();
        }

        // 3. Create the Master Timeline
        const tl = gsap.timeline({
            defaults: { ease: "expo.inOut" },
            scrollTrigger: animateOnScroll ? {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            } : undefined,
            delay: delay
        });

        // 4. Build the Animation Sequence
        // Step A: Scale Block 0 -> 1 (Left to Right)
        tl.to(lines, {
            "--block-scale": 1,
            duration: duration,
            stagger: stagger,
        })
        // Step B: Reveal Text (Instant)
        .set(words, {
            opacity: 1,
        }, `<${duration / 2}`) 
        // Change origin to right before shrinking
        .set(lines, {
            "--block-origin": "right center"
        }, `<`)
        // Step C: Scale Block 1 -> 0 (Right to Left)
        .to(lines, {
            "--block-scale": 0,
            duration: duration,
            stagger: stagger,
        }, `<${duration * 0.4}`);

        return () => {
            split.revert();
        };

    }, { 
        scope: containerRef, 
        dependencies: [animateOnScroll, delay, blockColor, stagger, duration, isReady] 
    });
    
    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .block-line-parent::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: var(--block-color, #000);
                    transform: scaleX(var(--block-scale, 0));
                    transform-origin: var(--block-origin, left center);
                    z-index: 2;
                }
            `}} />
            <div ref={containerRef} style={{ position: "relative" }} className={cn("")}>
                {children}
            </div>
        </>
    );
}
