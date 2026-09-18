import Reveal from "./Reveal";

const values = [
  {
    number: "01",
    title: "Atendimento humanizado",
    text: "Cada paciente possui necessidades diferentes. O atendimento também deve ser.",
  },
  {
    number: "02",
    title: "Equipe qualificada",
    text: "Profissionais comprometidas com atualização e excelência clínica.",
  },
  {
    number: "03",
    title: "Tecnologia e conforto",
    text: "Estrutura preparada para tornar cada atendimento mais seguro e tranquilo.",
  },
  {
    number: "04",
    title: "Cuidado para toda a família",
    text: "Da infância à vida adulta.",
  },
];

export default function Experience() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="container-edit">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-ink-soft mb-5">
            03 — Experiência
          </p>
          <h2 className="font-serif text-navy-950 text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
            O cuidado está
            <br />
            nos <span className="italic text-gold-600">detalhes.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.number}
              delay={i * 0.08}
              className={`py-10 pr-8 border-t border-navy-950/10 ${
                i < values.length - 1 ? "lg:border-r" : ""
              } ${i % 2 === 0 ? "sm:border-r lg:border-r" : ""}`}
            >
              <span className="font-serif italic text-gold-500 text-4xl block mb-6">
                {v.number}
              </span>
              <h3 className="font-serif text-navy-950 text-xl mb-3">
                {v.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {v.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
