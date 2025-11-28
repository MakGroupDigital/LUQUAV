
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import MobileApp from "@/components/sections/MobileApp";
import MapSection from "@/components/sections/MapSection";
import Stats from "@/components/sections/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Values from "@/components/sections/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Values />
      <Projects />
      <MobileApp />
        <section id="contact-project" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                    Prêt à construire l'avenir ?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                   Chaque grand projet commence par un premier pas. Discutons de vos ambitions et voyons comment nous pouvons les transformer en réalité.
                </p>
                <Button asChild size="lg">
                    <Link href="/commencer-un-projet">
                        Lancez votre projet avec nous <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
      <MapSection />
    </>
  );
}
