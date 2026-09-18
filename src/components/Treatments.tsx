"use client";

import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { treatments } from "@/data/treatments";
import Reveal from "./Reveal";
import { whatsappLink } from "@/lib/whatsapp";

export default function Treatments() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <section id="tratamentos" className="bg-navy-950 py-24 md:py-36">
      <div className="container-edit">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-20">
          <h2 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-xl text-balance">
            Cuidado para cada fase
            <br />
            do seu <span className="italic text-gold-400">sorriso.</span>
          </h2>
          <p className="text-white/45 text-xs tracking-[0.25em] uppercase mb-2">
            02 — Tratamentos
          </p>
        </Reveal>

        {/* desktop: interactive list + preview panel */}
        <div className="hidden md:grid grid-cols-12 gap-10 lg:gap-12">
          <div className="col-span-6">
            <ul onMouseLeave={() => setActive(0)}>
              {treatments.map((t, i) => (
                <li
                  key={t.number}
                  onMouseEnter={() => setActive(i)}
                  className="group border-t border-white/10 last:border-b"
                >
                  <a
                    href={whatsappLink(
                      `Olá! Gostaria de saber mais sobre ${t.name} na Carajás Odontologia.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-6 lg:py-7"
                  >
                    <span className="flex items-baseline gap-6">
                      <span
                        className={`font-serif text-sm transition-colors ${
                          active === i ? "text-gold-400" : "text-white/30"
                        }`}
                      >
                        {t.number}
                      </span>
                      <span
                        className={`font-serif text-2xl lg:text-3xl transition-colors ${
                          active === i ? "text-white" : "text-white/55"
                        }`}
                      >
                        {t.name}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      className={`transition-all duration-300 ${
                        active === i
                          ? "text-gold-400 translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6">
            <div className="sticky top-32 aspect-[4/5] rounded-sm border border-white/10 bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden flex flex-col justify-end p-10 lg:p-12">
              <svg
                className="absolute inset-0 m-auto w-[85%] opacity-[0.07]"
                viewBox="0 0 200 200"
                fill="none"
              >
                <path
                  d="M60 40C70 20 90 15 100 30C110 15 130 20 140 40C150 65 140 100 120 130C110 145 100 150 100 150C100 150 90 145 80 130C60 100 50 65 60 40Z"
                  stroke="var(--color-gold-400)"
                  strokeWidth="1"
                />
              </svg>
              <div key={active} className="fade-swap">
                <span className="font-serif italic text-gold-400 text-8xl leading-none opacity-20 mb-5 block">
                  {treatments[active].number}
                </span>
                <h3 className="font-serif text-white text-4xl mb-4">
                  {treatments[active].name}
                </h3>
                <p className="text-white/60 text-base leading-relaxed max-w-sm">
                  {treatments[active].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* mobile: accordion */}
        <div className="md:hidden">
          {treatments.map((t, i) => {
            const isOpen = openMobile === i;
            return (
              <div key={t.number} className="border-t border-white/10 last:border-b">
                <button
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-serif text-xs text-gold-400">
                      {t.number}
                    </span>
                    <span className="font-serif text-xl text-white">{t.name}</span>
                  </span>
                  <Plus
                    size={18}
                    className={`text-gold-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-white/55 text-base leading-relaxed pr-8">
                      {t.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <p className="font-serif italic text-white/70 text-lg">
            Não sabe qual tratamento precisa?
          </p>
          <a
            href={whatsappLink(
              "Olá! Não sei qual tratamento preciso, poderiam me orientar?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex w-fit items-center gap-2 rounded-sm border border-gold-500 text-gold-400 text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3.5 hover:bg-gold-500 hover:text-navy-950 transition-colors"
          >
            Falar com a equipe
          </a>
        </Reveal>
      </div>
    </section>
  );
}
