import Image from "next/image";
import { team } from "@/data/team";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="equipe" className="bg-navy-950 py-24 md:py-36 overflow-hidden">
      <div className="container-edit mb-16 md:mb-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-white/45 mb-5">
            04 — Equipe
          </p>
          <h2 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
            Quem cuida
            <br />
            do seu <span className="italic text-gold-400">sorriso.</span>
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {team.map((member, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={member.number} className="container-edit">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
                {/* photo */}
                <Reveal
                  y={50}
                  className={`lg:col-span-6 relative ${
                    reversed ? "lg:col-start-7" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                    <span className="absolute -inset-x-4 -inset-y-4 border border-gold-500/20 rounded-sm hidden sm:block" />
                    <Image
                      src={member.image}
                      alt={`Dra. ${member.firstName} ${member.lastName}, cirurgiã-dentista`}
                      fill
                      sizes="(max-width: 1024px) 420px, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                </Reveal>

                {/* text */}
                <Reveal
                  y={30}
                  delay={0.1}
                  className={`lg:col-span-5 ${
                    reversed ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"
                  }`}
                >
                  <span className="font-serif italic text-gold-500 text-6xl md:text-7xl block mb-4 opacity-70">
                    {member.number}
                  </span>
                  <h3 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                    Dra.
                    <br />
                    {member.firstName}
                    <br />
                    <span className="text-gold-400">{member.lastName}</span>
                  </h3>
                  <div className="gold-rule w-16 mb-6" />
                  <p className="font-serif italic text-white/70 text-lg mb-7">
                    “{member.quote}”
                  </p>
                  <ul className="space-y-2">
                    {member.areas.map((area) => (
                      <li
                        key={area}
                        className="text-white/50 text-sm tracking-wide border-t border-white/10 pt-2 first:border-t-0 first:pt-0"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
