import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

export default function MobileApp() {

  return (
    <section id="mobile-app" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-bold mb-4">
              Maîtrisez votre chantier, où que vous soyez
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Votre plateforme innovante qui facilite le suivi, la coordination et la transparence à chaque étape de la construction.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/telecharger">
                  <Download className="mr-2" /> App Store
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/telecharger">
                  <Download className="mr-2" /> Google Play
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-primary/10 p-12 rounded-full">
                <Smartphone className="h-48 w-48 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
