export type TeamMember = {
  number: string;
  firstName: string;
  lastName: string;
  quote: string;
  areas: string[];
  image: string;
};

export const team: TeamMember[] = [
  {
    number: "01",
    firstName: "Lorena",
    lastName: "B. de Sousa",
    quote: "Cuidado individual para cada sorriso.",
    areas: [
      "Ortodontia",
      "Clareamento dental",
      "Restaurações",
      "Limpezas",
      "Atendimento infantil",
    ],
    image: "/images/dra-lorena.png",
  },
  {
    number: "02",
    firstName: "Polliana",
    lastName: "T. Soares",
    quote: "Técnica e precisão a serviço do seu conforto.",
    areas: [
      "Endodontia — tratamento de canal",
      "Prótese",
      "Clareamento dental",
      "Restaurações",
      "Limpezas",
      "Atendimento infantil",
    ],
    image: "/images/dra-polliana.png",
  },
];
