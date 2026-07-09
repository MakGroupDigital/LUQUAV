import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luquav.com";

export const defaultKeywords = [
  "LUQUAV",
  "LUQUAV SARL",
  "construction RDC",
  "construction Kinshasa",
  "BTP RDC",
  "BTP Kinshasa",
  "entreprise de construction",
  "gestion de projet construction",
  "suivi de chantier",
  "étude de prix construction",
  "économie de construction",
  "pilotage de chantier",
  "bureau d'études construction",
  "maintenance bâtiment",
  "main-d'œuvre qualifiée BTP",
  "fournisseur matériaux construction",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/logo.png",
}: PageMetadataInput): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");

  return {
    title,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: canonicalPath,
      siteName: "LUQUAV SARL",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@luquav",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "CD-KN",
      "geo.placename": "Kinshasa",
      "business:contact_data:locality": "Kinshasa",
      "business:contact_data:country_name": "République Démocratique du Congo",
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "LUQUAV SARL",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  slogan: "BIEN CHIFFRER, BIEN GERER, MIEUX BATIR",
  description:
    "LUQUAV SARL accompagne les projets de construction, BTP, études de prix, économie de construction, pilotage de chantier, ressources et maintenance technique en République Démocratique du Congo.",
  email: "contact@luquav.com",
  telephone: "+243828073633",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 03, Avenue Miabi, Quartier Lukunga, Commune Ngaliema",
    addressLocality: "Kinshasa",
    addressCountry: "CD",
  },
  areaServed: ["Kinshasa", "République Démocratique du Congo", "Lubumbashi"],
  serviceType: [
    "Construction générale",
    "Gestion de projet de construction",
    "Étude de prix construction",
    "Économie de construction",
    "Pilotage de chantier",
    "Suivi de chantier",
    "Maintenance technique bâtiment",
    "Mise en relation de prestataires BTP",
  ],
  sameAs: ["https://www.facebook.com/luquav"],
};
