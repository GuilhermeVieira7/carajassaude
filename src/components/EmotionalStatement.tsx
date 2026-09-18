"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, ensureRegistered } from "@/lib/gsap";
import Reveal from "./Reveal";

export default function EmotionalStatement() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !imgWrapRef.current) return;

    ensureRegistered();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrapRef.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: imgWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, imgWrapRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.refresh());
    };
  }, []);

  return (
    <section className="relative bg-navy-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[90vh]">
        <div className="relative order-2 lg:order-1 h-[55vh] lg:h-auto overflow-hidden">
          <div
            ref={imgWrapRef}
            className="absolute inset-[-6%] lg:inset-y-[-8%] lg:inset-x-0"
          >
            <Image
              src="/images/dra-polliana.png"
              alt="Dra. Polliana T. Soares, cirurgiã-dentista da Carajás Odontologia"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy-950/15" />
        </div>

        <div className="order-1 lg:order-2 flex items-center px-6 py-20 md:px-16 lg:px-20">
          <Reveal y={30} className="max-w-md">
            <h2 className="font-serif text-white text-5xl sm:text-6xl leading-[1.06] text-balance mb-9">
              Sorrir sem medo.
              <br />
              <span className="italic text-gold-400">
                Cuidar com carinho.
              </span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-11">
              Queremos que você se sinta confortável antes mesmo de sentar na
              cadeira.
            </p>
            <p className="font-serif italic text-gold-300/80 text-base">
              — Carajás Odontologia
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
