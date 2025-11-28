import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, GanttChartSquare, HardHat, Truck, FileText, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const services = [
  {
    icon: HardHat,
    title: "Construction générale",
    description: "Réalisation de tous types de bâtiments, de la conception à la livraison.",
  },
  {
    icon: GanttChartSquare,
    title: "Gestion complète de projet",
    description: "Planification, coordination et suivi de toutes les étapes du chantier.",
  },
  {
    icon: DollarSign,
    title: "Études techniques et conseil",
    description: "Réalisation d'études, audits et recommandations pour préparer chaque projet.",
  },
  {
    icon: Users,
    title: "Gestion de main-d'œuvre",
    description: "Formation et suivi des techniciens pour garantir fiabilité et efficacité.",
  },
    {
    icon: Truck,
    title: "Logistique et approvisionnement",
    description: "Organisation des matériaux et équipements pour optimiser les délais.",
  },
  {
    icon: FileText,
    title: "Maintenance technique",
    description: "Service complet de maintenance avec intervention rapide via abonnement.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold">Des Solutions Sur Mesure Pour Chaque Projet</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Nous fournissons une gamme complète de services pour donner vie à votre vision, avec une expertise qui couvre chaque phase de votre projet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card/50 border-border hover:border-primary/50 transition-colors duration-300 flex flex-col">
              <CardContent className="p-8 flex flex-col items-center flex-grow">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-card-foreground mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/services">
                    Voir tous nos services <ArrowRight className="ml-2"/>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
