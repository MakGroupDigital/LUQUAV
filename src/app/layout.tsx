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
