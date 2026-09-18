import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section id="clinica" className="bg-ivory py-24 md:py-36">
      <div className="container-edit">
        <Reveal className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="font-serif italic text-gold-600 text-sm">
            01 — Cuidado
          </span>
          <span className="gold-rule flex-1 max-w-24" />
          <span className="text-xs tracking-[0.25em] uppercase text-ink-soft">
            Nosso jeito de cuidar
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal className="lg:col-span-8" y={40}>
            <h2 className="font-serif text-navy-950 text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
              Odontologia é técnica.
              <br />
              Mas também é{" "}
              <span className="italic text-gold-600">confiança.</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-4" y={40} delay={0.15}>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              Na Carajás Odontologia, cada atendimento começa ouvindo você.
              Combinamos cuidado humanizado, conhecimento e tecnologia para
              tornar cada etapa mais tranquila — da primeira consulta ao
              resultado final.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
