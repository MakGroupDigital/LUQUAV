import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DollarSign, Users, GanttChartSquare, CheckCircle } from "lucide-react";

const servicesData = [
  {
    icon: DollarSign,
    title: "Ingénierie & Économie de la Construction",
    mainService: "ETUDE DE PRIX, ECONOMIE & PLANNING DES PROJETS DE CONSTRUCTION",
    subServices: [
      "Analyse budgets et estimation des coûts",
      "Études de faisabilité et économie de construction",
      "Conception et études",
    ],
  },
  {
    icon: Users,
    title: "Gestion et Logistique des Ressources",
    mainService: "MOBILISATION & GESTION DES RESSOURCES HUMAINES, MATÉRIAUX & MATÉRIELS",
    subServices: [
      "Coordination des ressources",
      "Mise en relation entre main-d’œuvre qualifiée et entreprises",
    ],
  },
  {
    icon: GanttChartSquare,
    title: "Pilotage de Projet et Assistance Technique",
    mainService: "SUIVI, COORDINATION ET TRANSPARENCE GARANTIE",
    subServices: [
      "Gestion de projet de construction",
      "Suivi et pilotage de chantier",
      "Assistance technique et conseil",
      "Maintenance et suivi technique",
      "Autres services sur demande",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 text-center bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Notre Expertise à Votre Service
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de services pour transformer votre vision en réalité, avec rigueur et professionnalisme.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {servicesData.map((service, index) => (
              <Card key={index} className="bg-card/5 border-border hover:border-primary/50 transition-colors duration-300 flex flex-col">
                <CardHeader className="items-center text-center p-8">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="font-semibold text-primary pt-2 uppercase tracking-wide text-sm">{service.mainService}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-8 pt-0">
                  <ul className="space-y-3 text-left">
                    {service.subServices.map((sub, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
