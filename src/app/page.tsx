
import Hero from "@/components/sections/Hero";
import StatsModernSimple from "@/components/sections/StatsModernSimple";
import ServicesModernSimple from "@/components/sections/ServicesModernSimple";
import ValuesModernSimple from "@/components/sections/ValuesModernSimple";
import Projects from "@/components/sections/Projects";
import MobileApp from "@/components/sections/MobileApp";
import MapSection from "@/components/sections/MapSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Entreprise de construction et gestion de projets BTP en RDC",
  description:
    "LUQUAV SARL accompagne vos projets de construction à Kinshasa et en RDC: études de prix, économie de construction, pilotage de chantier, ressources, prestataires et maintenance.",
  path: "/",
  keywords: [
    "construction RDC",
    "entreprise BTP Kinshasa",
    "chantier Kinshasa",
    "trouver un prestataire BTP",
    "commencer un projet construction",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <StatsModernSimple />
      <ServicesModernSimple />
      <ValuesModernSimple />
      <Projects />
      <MobileApp />
        <section id="contact-project" className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
              <div className="gradient-bg rounded-3xl p-8 md:p-12 modern-shadow fade-in-scale border border-border/50 backdrop-blur-sm">
                <div className="relative inline-flex mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl" />
                  <div className="relative bg-gradient-to-br from-background to-card p-4 rounded-2xl">
                    <ArrowRight className="h-8 w-8 text-primary rotate-45" />
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 gradient-text">
                    Prêt à <span className="text-gradient-animated bg-gradient-to-r from-primary via-secondary to-primary">construire l'avenir</span> ?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                   Chaque grand projet commence par un premier pas. Discutons de vos ambitions et voyons comment nous pouvons les transformer en réalité.
                </p>
                <Button asChild size="lg" className="btn-modern relative overflow-hidden group/btn">
                    <Link href="/commencer-un-projet" className="relative z-10 flex items-center gap-2">
                        <span>Lancez votre projet avec nous</span>
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300" />
                    </Link>
                </Button>
              </div>
          </div>
        </section>
      <MapSection />
    </>
  );
}
