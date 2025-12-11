import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export const metadata: Metadata = {
  title: "LUQUAV Sarl - BIEN CHIFFRER, BIEN GERER, MIEUX BATIR",
  description:
    "Expertise en gestion de projets de construction. Plateforme numérique moderne pour la collecte de projets qualifiés et la promotion de notre application mobile.",
  keywords: ["construction", "gestion de projets", "LUQUAV", "Kinshasa", "RD Congo", "bâtiment"],
  authors: [{ name: "LUQUAV Sarl" }],
  creator: "LUQUAV Sarl",
  publisher: "LUQUAV Sarl",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://luquav.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'LUQUAV Sarl',
    title: 'LUQUAV Sarl - BIEN CHIFFRER, BIEN GERER, MIEUX BATIR',
    description: 'Expertise en gestion de projets de construction. Plateforme numérique moderne pour la collecte de projets qualifiés et la promotion de notre application mobile.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'LUQUAV Sarl Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUQUAV Sarl - BIEN CHIFFRER, BIEN GERER, MIEUX BATIR',
    description: 'Expertise en gestion de projets de construction. Plateforme numérique moderne pour la collecte de projets qualifiés et la promotion de notre application mobile.',
    images: ['/logo.png'],
    creator: '@luquav',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ff6b35' },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Favicons pour tous les navigateurs - Forcer le rafraîchissement avec timestamp */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/manifest.json?v=2" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#ff6b35" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png?v=2" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Header />
        <main className="bg-background">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
