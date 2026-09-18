"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="btn-gold fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-navy-950 border border-gold-500/40 text-white shadow-[0_8px_30px_rgba(5,15,29,0.35)] px-4 py-3.5 sm:px-5 hover:border-gold-500 transition-colors"
    >
      <MessageCircle size={18} className="text-gold-400" />
      <span className="hidden sm:inline text-sm font-medium tracking-wide">
        Fale conosco
      </span>
    </a>
  );
}
