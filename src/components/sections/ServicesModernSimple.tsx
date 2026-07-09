"use client";

import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, Users, GanttChartSquare, HardHat, Truck, FileText, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: HardHat,
    title: "Construction générale",
    description: "Réalisation de tous types de bâtiments, de la conception à la livraison.",
    color: "from-orange-500 to-amber-500",
    features: ["Conception sur mesure", "Suivi en temps réel", "Livraison garantie"]
  },
  {
    icon: GanttChartSquare,
    title: "Gestion complète de projet",
    description: "Planification, coordination et suivi de toutes les étapes du chantier.",
    color: "from-blue-500 to-cyan-500",
    features: ["Planning dynamique", "Coordination d'équipes", "Rapports détaillés"]
  },
  {
    icon: DollarSign,
    title: "Études techniques et conseil",
    description: "Réalisation d'études, audits et recommandations pour préparer chaque projet.",
    color: "from-emerald-500 to-teal-500",
    features: ["Audits complets", "Recommandations expertes", "Optimisation budgétaire"]
  },
  {
    icon: Users,
    title: "Gestion de main-d'œuvre",
    description: "Formation et suivi des techniciens pour garantir fiabilité et efficacité.",
    color: "from-violet-500 to-purple-500",
    features: ["Formation certifiée", "Suivi personnalisé", "Évaluation continue"]
  },
  {
    icon: Truck,
    title: "Logistique et approvisionnement",
    description: "Organisation des matériaux et équipements pour optimiser les délais.",
    color: "from-rose-500 to-pink-500",
    features: ["Chaîne d'approvisionnement", "Optimisation des stocks", "Livraison just-in-time"]
  },
  {
    icon: FileText,
    title: "Maintenance technique",
    description: "Service complet de maintenance avec intervention rapide via abonnement.",
    color: "from-indigo-500 to-blue-500",
    features: ["Maintenance préventive", "Intervention 24/7", "Suivi numérique"]
  },
];

const particleStyles = [
  { left: "12%", top: "18%", duration: "2.4s" },
  { left: "76%", top: "14%", duration: "2.8s" },
  { left: "34%", top: "36%", duration: "2.2s" },
  { left: "88%", top: "42%", duration: "2.7s" },
  { left: "18%", top: "62%", duration: "2.5s" },
  { left: "58%", top: "70%", duration: "2.9s" },
  { left: "42%", top: "84%", duration: "2.3s" },
  { left: "82%", top: "78%", duration: "2.6s" },
];

export default function ServicesModernSimple() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted/20">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />
        
        {/* Grille animée */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,#888_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(0deg,#888_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* En-tête avec animation */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Expertise Dédiée
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6">
            Des Solutions{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Sur Mesure</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </span>{" "}
            Pour Chaque Projet
          </h2>
          
          <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
            Nous fournissons une gamme complète de services pour donner vie à votre vision, 
            avec une expertise qui couvre{" "}
            <span className="text-primary font-semibold">chaque phase</span> de votre projet.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Effet de lumière externe */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-30' : ''
                }`}
              />

              {/* Carte principale */}
              <Card className="relative bg-card/60 backdrop-blur-sm border border-border/50 overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                {/* Effet de particules */}
                <div className="absolute inset-0 pointer-events-none">
                  {particleStyles.map((particle, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
                      style={{
                        left: particle.left,
                        top: particle.top,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: particle.duration
                      }}
                    />
                  ))}
                </div>

                {/* Bordure animée */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <CardContent className="p-8 relative z-10">
                  {/* Icône avec effet 3D */}
                  <div className="relative inline-flex mb-6">
                    <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="relative bg-gradient-to-br from-background to-card p-5 rounded-2xl shadow-xl border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Badge animé */}
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full animate-soft-pulse">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Titre avec animation */}
                  <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    <span className="bg-gradient-to-r from-foreground to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </CardTitle>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Liste de features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm transition-all duration-300"
                        style={{
                          opacity: hoveredIndex === index ? 1 : 0.7,
                          transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                          transitionDelay: `${i * 0.1}s`
                        }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bouton de découverte */}
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn relative z-10"
                    >
                      <span className="text-sm font-medium">Découvrir ce service</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>

                {/* Effet de réflexion */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </div>
          ))}
        </div>

        {/* Bouton CTA */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden group/cta btn-modern"
          >
            <Link href="/services">
              <span className="relative z-10 flex items-center gap-3">
                Explorer tous nos services
                <ArrowRight className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
              </span>
              
              {/* Effet de particules sur le bouton */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full animate-particle"
                    style={{
                      left: `${(i * 100) / 12}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
