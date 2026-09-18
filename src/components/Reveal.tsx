"use client";

import { useReveal } from "@/lib/gsap";
import { ReactNode } from "react";

export default function Reveal({
  children,
  className,
  y,
  delay,
  duration,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
}) {
  const ref = useReveal<HTMLDivElement>({ y, delay, duration });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
