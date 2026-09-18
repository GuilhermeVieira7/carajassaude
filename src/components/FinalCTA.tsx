import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink, DEFAULT_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative bg-navy-950 py-28 md:py-40 overflow-hidden">
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M60 40C70 20 90 15 100 30C110 15 130 20 140 40C150 65 140 100 120 130C110 145 100 150 100 150C100 150 90 145 80 130C60 100 50 65 60 40Z"
          stroke="var(--color-gold-400)"
          strokeWidth="1"
        />
      </svg>

      <div className="container-edit relative text-center flex flex-col items-center">
        <Reveal>
          <h2 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance max-w-3xl mx-auto">
            Seu próximo sorriso
            <br />
            <span className="italic text-gold-400">pode começar aqui.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-white/55 text-base sm:text-lg mt-7 max-w-md mx-auto">
            Converse com nossa equipe e agende sua avaliação.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold group inline-flex items-center gap-3 rounded-sm bg-gold-500 text-navy-950 font-semibold tracking-wide text-sm px-9 py-5 mt-12 hover:bg-gold-400 transition-colors"
          >
            AGENDAR PELO WHATSAPP
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-white/35 text-xs tracking-wide mt-6">
            {WHATSAPP_DISPLAY} · Responderemos você pelo WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
