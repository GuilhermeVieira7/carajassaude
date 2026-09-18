import Image from "next/image";
import { team } from "@/data/team";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="equipe" className="bg-navy-950 py-28 md:py-40 overflow-hidden">
      <div className="container-edit mb-20 md:mb-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.28em] uppercase text-white/45 mb-5">
            04 — Equipe
          </p>
          <h2 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
            Quem cuida
            <br />
            do seu <span className="italic text-gold-400">sorriso.</span>
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-28 md:gap-40">
        {team.map((member, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={member.number} className="container-edit">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* photo */}
                <Reveal
                  y={50}
                  className={`lg:col-span-7 relative ${
                    reversed ? "lg:col-start-6" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="portrait-glow absolute -inset-12 rounded-full" />
                    <div className="relative aspect-[4/5] max-w-lg mx-auto lg:max-w-none">
                      <span className="absolute -inset-x-5 -inset-y-5 border border-gold-500/20 rounded-sm hidden sm:block" />
                      <Image
                        src={member.image}
                        alt={`Dra. ${member.firstName} ${member.lastName}, cirurgiã-dentista`}
                        fill
                        sizes="(max-width: 1024px) 480px, 55vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* text */}
                <Reveal
                  y={30}
                  delay={0.1}
                  className={`lg:col-span-5 ${
                    reversed ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <span className="font-serif italic text-gold-500 text-7xl md:text-8xl block mb-5 opacity-70">
                    {member.number}
                  </span>
                  <h3 className="font-serif text-white text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.08] mb-7">
                    Dra.
                    <br />
                    {member.firstName}
                    <br />
                    <span className="text-gold-400">{member.lastName}</span>
                  </h3>
                  <div className="gold-rule w-16 mb-7" />
                  <p className="font-serif italic text-white/75 text-xl mb-8">
                    “{member.quote}”
                  </p>
                  <ul className="space-y-2.5">
                    {member.areas.map((area) => (
                      <li
                        key={area}
                        className="text-white/55 text-base tracking-wide border-t border-white/10 pt-2.5 first:border-t-0 first:pt-0"
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
