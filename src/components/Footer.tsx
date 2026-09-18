import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-8">
      <div className="container-edit">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Carajás Odontologia"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="font-serif text-white text-lg">
                Carajás <span className="italic text-gold-400">Odontologia</span>
              </span>
            </a>
            <p className="font-serif italic text-white/50 text-base max-w-xs">
              Sorrir sem medo, cuidar com carinho.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs tracking-[0.25em] uppercase text-white/35 mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="#tratamentos" className="link-underline text-white/65 text-sm">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#equipe" className="link-underline text-white/65 text-sm">
                  Equipe
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-white/65 text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.25em] uppercase text-white/35 mb-4">
              Contato
            </p>
            <ul className="space-y-2.5">
              <li className="text-white/65 text-sm">Canaã dos Carajás — PA</li>
              <li>
                <a
                  href={whatsappLink(DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 link-underline text-white/65 text-sm"
                >
                  <MessageCircle size={15} /> (94) 99304-9597
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© Carajás Odontologia</p>
          <p className="text-white/30 text-xs">Canaã dos Carajás — PA</p>
        </div>
      </div>
    </footer>
  );
}
