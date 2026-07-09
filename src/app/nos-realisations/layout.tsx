import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Réalisations construction à Kinshasa et en RDC",
  description:
    "Explorez les réalisations LUQUAV SARL: maisons, immeubles, appartements, villas et projets de construction suivis avec rigueur à Kinshasa, Lubumbashi et en RDC.",
  path: "/nos-realisations",
  keywords: [
    "réalisations construction RDC",
    "projets BTP Kinshasa",
    "immeuble appartement Kinshasa",
    "villa Lubumbashi",
    "maison habitation RDC",
    "chantier réalisé",
  ],
  image:
    "https://res.cloudinary.com/dy73hzkpm/image/upload/v1761308404/WhatsApp_Image_2025-10-24_at_13.11.41_v8une5.jpg",
});

export default function NosRealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
