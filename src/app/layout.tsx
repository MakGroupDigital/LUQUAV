import type { Metadata } from "next";
import "./globals.css";
import "./improved-styles.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { defaultKeywords, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "LUQUAV SARL | Construction, BTP et gestion de projets en RDC",
    template: "%s | LUQUAV SARL",
  },
  description:
    "LUQUAV SARL accompagne les projets de construction, BTP, études de prix, économie de construction, pilotage de chantier, ressources et maintenance technique à Kinshasa et en RDC.",
  keywords: defaultKeywords,
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
    title: 'LUQUAV SARL | Construction, BTP et gestion de projets en RDC',
    description: 'Construction, BTP, étude de prix, économie de construction, pilotage et suivi de chantier à Kinshasa et en RDC.',
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
    title: 'LUQUAV SARL | Construction, BTP et gestion de projets en RDC',
    description: 'Construction, BTP, étude de prix, économie de construction, pilotage et suivi de chantier à Kinshasa et en RDC.',
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
    <html lang="fr" className="!scroll-smooth" suppressHydrationWarning>
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
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ff6b35" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png?v=2" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider defaultTheme="light" storageKey="luquav-theme">
          <Header />
          <main className="bg-background">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
