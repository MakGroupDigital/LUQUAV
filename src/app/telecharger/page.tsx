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
              <p className="text-muted-foreground mt-2 mb-6">
                Nous travaillons dur pour finaliser l'application. Revenez bientôt !
              </p>
              
              {/* Icônes des stores arrangées */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                {/* App Store */}
                <a
                  href="#"
                  className="group flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Télécharger sur l'App Store"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs leading-tight">Télécharger sur</span>
                    <span className="text-lg font-bold leading-tight">App Store</span>
                  </div>
                </a>

                {/* Google Play Store */}
                <a
                  href="#"
                  className="group flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Télécharger sur Google Play"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs leading-tight">Disponible sur</span>
                    <span className="text-lg font-bold leading-tight">Google Play</span>
                  </div>
                </a>
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
