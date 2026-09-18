import { MapPin, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export default function Location() {
  return (
    <section id="contato" className="bg-ivory py-24 md:py-36">
      <div className="container-edit grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6">
          <p className="text-xs tracking-[0.25em] uppercase text-ink-soft mb-5">
            05 — Localização
          </p>
          <h2 className="font-serif text-navy-950 text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance mb-6">
            Estamos em
            <br />
            <span className="italic text-gold-600">
              Canaã dos Carajás.
            </span>
          </h2>
          <p className="flex items-center gap-2 text-ink-soft text-lg mb-10">
            <MapPin size={18} className="text-gold-600" />
            Canaã dos Carajás — PA
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cana%C3%A3+dos+Carajás+PA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-navy-950/20 text-navy-950 text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3.5 hover:border-gold-500 hover:text-gold-600 transition-colors"
            >
              <MapPin size={15} /> Ver no mapa
            </a>
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-sm bg-gold-500 text-navy-950 text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3.5 hover:bg-gold-400 transition-colors"
            >
              <MessageCircle size={15} /> Chamar no WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal y={30} delay={0.1} className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-navy-950/10 bg-navy-900">
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.18]"
              viewBox="0 0 400 300"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-10 210C40 190 70 230 120 200C170 170 190 220 240 190C290 160 310 210 360 180C390 162 400 168 410 160"
                stroke="var(--color-gold-400)"
                strokeWidth="1"
              />
              <path
                d="M-10 250C50 230 90 260 140 235C190 210 210 250 260 225C310 200 330 245 380 215C395 206 400 210 410 205"
                stroke="var(--color-gold-400)"
                strokeWidth="1"
              />
              <path
                d="M-10 170C30 150 80 185 130 160C180 135 200 175 250 150C300 125 320 165 370 140C390 130 400 133 410 128"
                stroke="var(--color-gold-400)"
                strokeWidth="1"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/40">
              <MapPin size={28} className="text-gold-400" />
              <span className="text-sm tracking-wide">
                Canaã dos Carajás — PA
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
