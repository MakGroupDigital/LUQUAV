"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import { Briefcase, Users } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 14,
    label: "Projets réalisés",
    description: "Des chantiers livrés avec un suivi clair et maîtrisé.",
    suffix: "",
  },
  {
    icon: Users,
    value: 50000,
    label: "Utilisateurs de l'app",
    description: "Une communauté qui suit ses projets et services en temps réel.",
    prefix: "+",
    suffix: "",
  },
];

export default function StatsModernSimple() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#888_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Notre impact
          </div>
          <h2 className="font-headline text-3xl font-bold md:text-5xl">
            Des chiffres qui <span className="gradient-text">parlent</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            LUQUAV connecte les équipes, les clients et les partenaires autour
            de projets suivis avec précision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-70" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>

                <div>
                  <div className="text-5xl font-bold tracking-normal text-primary md:text-6xl">
                    <AnimatedCounter
                      targetValue={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{stat.label}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
