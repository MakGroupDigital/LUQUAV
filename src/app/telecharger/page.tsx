import { CheckCircle, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DownloadPage() {
  const benefits = [
    "Suivi en temps réel de l'avancement.",
    "Gestion digitalisée des ressources (matériaux, humains).",
    "Transparence et documentation des étapes du chantier.",
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              L'outil de gestion de projet qui fait la différence.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 mb-8">
              L'application LUQUAV met la transparence et la coordination
              directement entre vos mains. Que vous soyez maître d'ouvrage,
              ingénieur ou fournisseur, suivez l'avancement, gérez les
              ressources et communiquez efficacement sur votre chantier, de la
              conception à la livraison.
            </p>

            <div className="bg-muted border border-border rounded-lg p-8 my-12">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-headline font-bold text-primary">
                Bientôt Disponible !
              </h2>
              <p className="text-muted-foreground mt-2">
                Nous travaillons dur pour finaliser l'application. Revenez bientôt !
              </p>
               <div className="flex justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 p-3 rounded-md bg-background/50">
                    <Image src="/images/apple-logo.png" alt="Apple App Store" width={32} height={32} className="rounded-md"/>
                    <span className="font-semibold">Bientôt sur l'App Store</span>
                </div>
                 <div className="flex items-center gap-2 p-3 rounded-md bg-background/50">
                    <Image src="/images/google-logo.png" alt="Google Play Store" width={32} height={32} className="rounded-md"/>
                    <span className="font-semibold">Bientôt sur Google Play</span>
                </div>
              </div>
            </div>

            <div className="text-left max-w-2xl mx-auto mt-12">
                 <h3 className="text-2xl font-headline font-bold text-center mb-6">Nos Avantages Clés</h3>
                <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                        </div>
                        <span className="text-lg text-foreground/80">{benefit}</span>
                    </li>
                    ))}
              </ul>
            </div>
             <div className="mt-12">
                <Button asChild>
                    <Link href="/">Retour à l'accueil</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
