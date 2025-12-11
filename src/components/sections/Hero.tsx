
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden text-center text-white">
      <Image
        src="/hero.jpg"
        alt="LUQUAV - La construction du futur"
        fill
        className="object-cover opacity-20"
        priority
        data-ai-hint="LUQUAV construction"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
          La construction du futur, gérée avec expertise
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md font-medium text-foreground/80">
          BIEN CHIFFRER, BIEN GERER, MIEUX BATIR
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/commencer-un-projet">
              Commencer un Projet <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/telecharger">
              Télécharger l'Application
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
