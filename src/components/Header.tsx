"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

const NAV_LINKS = [
  { label: "A clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Convênios", href: "#convenio" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-950/85 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5 md:py-7 border-b border-transparent"
        }`}
      >
        <div className="container-edit flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Carajás Odontologia"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
            <span className="font-serif text-white text-lg tracking-wide hidden sm:block">
              Carajás <span className="text-gold-400 italic">Odontologia</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm tracking-wide text-white/85 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden lg:inline-flex items-center gap-2 rounded-sm bg-gold-500 text-navy-950 text-sm font-semibold tracking-wide px-6 py-2.5 hover:bg-gold-400 transition-colors"
          >
            Agendar avaliação
          </a>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 -mr-2"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950 transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center container-edit gap-8 pt-20">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl text-white/90 hover:text-gold-400 transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-gold-500 text-navy-950 text-sm font-semibold tracking-wide px-7 py-3.5"
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </>
  );
}
