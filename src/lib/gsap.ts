"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
function ensureRegistered() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export { gsap, ScrollTrigger, ensureRegistered };

/**
 * Fades + lifts children into place as they enter the viewport.
 * Respects prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { y?: number; delay?: number; duration?: number; start?: string } = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ensureRegistered();
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: options.y ?? 32 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 1,
          delay: options.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options.y, options.delay, options.duration, options.start]);

  return ref;
}
