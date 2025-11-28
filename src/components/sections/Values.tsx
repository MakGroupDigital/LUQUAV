import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lightbulb, UsersRound, Handshake, Target } from "lucide-react";

const values = [
    { 
        icon: ShieldCheck, 
        title: "Fiabilité", 
        description: "Chaque étape du chantier est suivie et validée en temps réel pour livrer dans les temps." 
    },
    { 
        icon: Target, 
        title: "Transparence", 
        description: "Nos clients et partenaires voient l'avancement de leurs projets à chaque instant." 
    },
    { 
        icon: Lightbulb, 
        title: "Innovation", 
        description: "Nous intégrons les meilleures technologies pour optimiser la gestion des projets." 
    },
    { 
        icon: UsersRound, 
        title: "Professionnalisme", 
        description: "Nous formons et certifions les intervenants pour garantir un haut niveau de service." 
    },
    { 
        icon: Handshake, 
        title: "Collaboration", 
        description: "LUQUAV rapproche tous les acteurs du projet pour assurer sa réussite." 
    },
];

export default function Values() {
  return (
    <section id="values" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold">Nos Valeurs Fondamentales</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Notre engagement envers l'excellence est guidé par des principes solides qui assurent le succès de chaque projet.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card/5 border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                        <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                    <p className="text-muted-foreground mt-2">{value.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
