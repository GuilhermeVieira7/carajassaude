import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://carajasodontologia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carajás Odontologia | Dentista em Canaã dos Carajás",
  description:
    "Odontologia moderna e humanizada em Canaã dos Carajás. Ortodontia, canal, prótese, clareamento, restaurações, limpeza e atendimento infantil. Agende sua avaliação.",
  keywords: [
    "dentista em Canaã dos Carajás",
    "odontologia Canaã dos Carajás",
    "clareamento dental Canaã dos Carajás",
    "ortodontia Canaã dos Carajás",
    "tratamento de canal",
    "dentista infantil",
  ],
  openGraph: {
    title: "Carajás Odontologia | Dentista em Canaã dos Carajás",
    description:
      "Odontologia moderna e humanizada em Canaã dos Carajás. Cuidado, técnica e confiança em cada atendimento.",
    url: siteUrl,
    siteName: "Carajás Odontologia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1000,
        height: 1000,
        alt: "Carajás Odontologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carajás Odontologia | Dentista em Canaã dos Carajás",
    description:
      "Odontologia moderna e humanizada em Canaã dos Carajás. Agende sua avaliação.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Carajás Odontologia",
  slogan: "Sorrir sem medo, cuidar com carinho.",
  image: `${siteUrl}/images/logo.jpg`,
  url: siteUrl,
  telephone: "+5594993049597",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canaã dos Carajás",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  areaServed: "Canaã dos Carajás - PA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-ivory text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
