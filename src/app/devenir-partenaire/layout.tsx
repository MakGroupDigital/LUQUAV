import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Devenir partenaire BTP avec LUQUAV",
  description:
    "Rejoignez le réseau LUQUAV SARL: entreprises de construction, fournisseurs de matériaux, bureaux d'études, techniciens, logisticiens et prestataires BTP en RDC.",
  path: "/devenir-partenaire",
  keywords: [
    "devenir partenaire BTP",
    "prestataire construction RDC",
    "fournisseur BTP Kinshasa",
    "sous-traitant construction",
    "technicien bâtiment RDC",
  ],
});

export default function DevenirPartenaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
