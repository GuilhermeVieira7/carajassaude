export const WHATSAPP_NUMBER = "5594993049597";
export const WHATSAPP_DISPLAY = "(94) 99304-9597";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Carajás Odontologia e gostaria de agendar uma avaliação.";
