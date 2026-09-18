import { CreditCard } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink } from "@/lib/whatsapp";

export default function Insurance() {
  return (
    <section id="convenio" className="bg-ivory py-20 md:py-28 border-y border-navy-950/10">
      <div className="container-edit">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex items-start gap-5">
            <CreditCard
              size={28}
              strokeWidth={1.25}
              className="text-gold-600 mt-2 shrink-0"
            />
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-ink-soft mb-3">
                Facilidade para cuidar de você
              </p>
              <h2 className="font-serif text-navy-950 text-3xl sm:text-4xl md:text-5xl leading-tight text-balance">
                Também atendemos
                <br />
                <span className="italic text-gold-600">Unimed Odonto.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <a
              href={whatsappLink(
                "Olá! Gostaria de consultar meu atendimento pela Unimed Odonto."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-sm border border-navy-950/20 text-navy-950 text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3.5 hover:border-gold-500 hover:text-gold-600 transition-colors"
            >
              Consultar atendimento
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
