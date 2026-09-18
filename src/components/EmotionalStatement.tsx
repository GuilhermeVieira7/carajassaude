import Image from "next/image";
import Reveal from "./Reveal";

export default function EmotionalStatement() {
  return (
    <section className="relative bg-navy-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-[85vh]">
        <div className="relative order-2 lg:order-1 h-[50vh] lg:h-auto">
          <Image
            src="/images/dra-polliana.png"
            alt="Dra. Polliana T. Soares, cirurgiã-dentista da Carajás Odontologia"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy-950/10" />
        </div>

        <div className="order-1 lg:order-2 flex items-center px-6 py-16 md:px-16 lg:px-20">
          <Reveal y={30} className="max-w-md">
            <h2 className="font-serif text-white text-4xl sm:text-5xl leading-[1.08] text-balance mb-8">
              Sorrir sem medo.
              <br />
              <span className="italic text-gold-400">
                Cuidar com carinho.
              </span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-10">
              Queremos que você se sinta confortável antes mesmo de sentar na
              cadeira.
            </p>
            <p className="font-serif italic text-gold-300/80 text-sm">
              — Carajás Odontologia
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
