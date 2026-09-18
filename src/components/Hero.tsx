"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.1
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
          0.25
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.7
        )
        .fromTo(
          ".hero-rule",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power2.inOut" },
          0.6
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          0.95
        )
        .fromTo(
          ".hero-image-mask",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power4.inOut" },
          0.3
        )
        .fromTo(
          ".hero-image-mask img",
          { scale: 1.15 },
          { scale: 1, duration: 1.6, ease: "power3.out" },
          0.3
        )
        .fromTo(
          ".hero-annot",
          { opacity: 0 },
          { opacity: 1, duration: 0.9 },
          1.3
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] bg-navy-950 overflow-hidden flex flex-col"
    >
      {/* faint linework echo of the logo mark */}
      <svg
        className="pointer-events-none absolute -right-24 -top-24 w-[520px] opacity-[0.06]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M60 40C70 20 90 15 100 30C110 15 130 20 140 40C150 65 140 100 120 130C110 145 100 150 100 150C100 150 90 145 80 130C60 100 50 65 60 40Z"
          stroke="var(--color-gold-400)"
          strokeWidth="1"
        />
      </svg>

      <div className="container-edit flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
        {/* text column */}
        <div className="lg:col-span-7 relative z-10">
          <p className="hero-eyebrow text-gold-400 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-6">
            Canaã dos Carajás — Pará
          </p>

          <h1 className="font-serif text-white text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.2vw] xl:text-[4.6rem] tracking-tight text-balance">
            <span className="hero-line block overflow-hidden">
              <span className="block">Seu sorriso começa</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="block italic text-gold-400">
                com confiança.
              </span>
            </span>
          </h1>

          <div className="hero-rule gold-rule w-40 my-7 lg:my-9" />

          <p className="hero-sub max-w-md text-white/70 text-base sm:text-lg leading-relaxed">
            Odontologia moderna, humana e cuidadosa para quem busca saúde,
            estética e tranquilidade em cada atendimento.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta btn-gold group inline-flex items-center gap-3 rounded-sm bg-gold-500 text-navy-950 font-semibold tracking-wide text-sm px-7 py-4 hover:bg-gold-400 transition-colors"
            >
              AGENDAR AVALIAÇÃO
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#clinica"
              className="hero-cta link-underline text-white/85 hover:text-white text-sm tracking-wide font-medium"
            >
              CONHECER A CLÍNICA
            </a>
          </div>

          <p className="hero-cta mt-9 text-xs text-white/45 tracking-wide">
            Atendemos <span className="text-gold-300">Unimed Odonto</span>
          </p>
        </div>

        {/* image column */}
        <div className="lg:col-span-5 relative">
          <div className="hero-image-mask relative aspect-[4/5] sm:aspect-[3/4] max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <div className="absolute inset-0 -m-4 border border-gold-500/25 rounded-sm" />
            <Image
              src="/images/dra-lorena.png"
              alt="Dra. Lorena B. de Sousa, cirurgiã-dentista da Carajás Odontologia"
              fill
              priority
              sizes="(max-width: 1024px) 360px, 34vw"
              className="object-cover object-top"
            />
          </div>
          <p className="hero-annot absolute -bottom-2 left-2 lg:left-auto lg:-right-4 font-serif italic text-gold-300/80 text-sm max-w-[12rem]">
            Sorrisos transformam histórias.
          </p>
        </div>
      </div>
    </section>
  );
}
