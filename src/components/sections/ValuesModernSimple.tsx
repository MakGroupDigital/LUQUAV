"use client";

import { useState } from "react";
import { 
  ShieldCheck, Lightbulb, UsersRound, Handshake, Target, 
  Heart, Globe 
} from "lucide-react";

const values = [
  { 
    icon: ShieldCheck, 
    title: "Fiabilité", 
    description: "Chaque étape du chantier est suivie et validée en temps réel pour livrer dans les temps.",
    color: "from-emerald-500 to-green-500",
    attributes: ["Ponctualité", "Précision", "Constance"]
  },
  { 
    icon: Target, 
    title: "Transparence", 
    description: "Nos clients et partenaires voient l'avancement de leurs projets à chaque instant.",
    color: "from-blue-500 to-cyan-500",
    attributes: ["Visibilité totale", "Communication ouverte", "Rapports détaillés"]
  },
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    description: "Nous intégrons les meilleures technologies pour optimiser la gestion des projets.",
    color: "from-purple-500 to-violet-500",
    attributes: ["Technologie avancée", "Processus optimisés", "Solutions créatives"]
  },
  { 
    icon: UsersRound, 
    title: "Professionnalisme", 
    description: "Nous formons et certifions les intervenants pour garantir un haut niveau de service.",
    color: "from-amber-500 to-orange-500",
    attributes: ["Expertise certifiée", "Éthique professionnelle", "Excellence opérationnelle"]
  },
  { 
    icon: Handshake, 
    title: "Collaboration", 
    description: "LUQUAV rapproche tous les acteurs du projet pour assurer sa réussite.",
    color: "from-rose-500 to-pink-500",
    attributes: ["Travail d'équipe", "Synergie", "Partage des connaissances"]
  },
];

const starPositions = [
  { left: "8%", top: "14%" },
  { left: "18%", top: "42%" },
  { left: "28%", top: "22%" },
  { left: "38%", top: "66%" },
  { left: "48%", top: "12%" },
  { left: "58%", top: "48%" },
  { left: "68%", top: "26%" },
  { left: "78%", top: "70%" },
  { left: "88%", top: "18%" },
  { left: "94%", top: "54%" },
  { left: "12%", top: "78%" },
  { left: "22%", top: "8%" },
  { left: "32%", top: "86%" },
  { left: "42%", top: "34%" },
  { left: "52%", top: "76%" },
  { left: "62%", top: "10%" },
  { left: "72%", top: "58%" },
  { left: "82%", top: "36%" },
  { left: "6%", top: "58%" },
  { left: "16%", top: "24%" },
  { left: "26%", top: "72%" },
  { left: "36%", top: "16%" },
  { left: "46%", top: "54%" },
  { left: "56%", top: "30%" },
  { left: "66%", top: "82%" },
  { left: "76%", top: "12%" },
  { left: "86%", top: "64%" },
  { left: "96%", top: "30%" },
  { left: "14%", top: "90%" },
  { left: "90%", top: "86%" },
];

export default function ValuesModernSimple() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="values" className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-muted/10 via-background to-muted/10">
      {/* Arrière-plan cosmique */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Étoiles animées */}
        {starPositions.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-soft-pulse"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}

        {/* Orbes de lumière */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-float" 
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl animate-float" 
          style={{ animationDuration: '25s', animationDelay: '5s' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* En-tête avec animation */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="mb-8 flex justify-center">
            <div className="relative inline-flex">
              <span className="text-sm font-bold tracking-widest text-primary uppercase">
                Notre ADN
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6">
            Nos <span className="gradient-text">Valeurs Fondamentales</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mt-6 leading-relaxed max-w-3xl mx-auto">
            Notre engagement envers l'excellence est guidé par des principes solides qui assurent{" "}
            <span className="text-primary font-semibold">le succès de chaque projet</span>.
          </p>
        </div>

        {/* Grille de valeurs - Design en forme de constellation */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Lignes de connexion entre les cartes */}
              {index < values.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 z-0" />
              )}

              {/* Carte principale avec effet 3D */}
              <div className="relative group">
                {/* Effet de profondeur */}
                <div className="relative transition-all duration-500 group-hover:rotate-y-10 group-hover:-rotate-x-5">
                  {/* Face avant de la carte */}
                  <div className={`relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl transition-all duration-500 group-hover:shadow-3xl h-full min-h-[320px] flex flex-col justify-between`}>
                    {/* Effet de lumière intérieure */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                    {/* Orbe lumineuse animée */}
                    <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${value.color} rounded-full blur-xl animate-soft-pulse`} />

                    {/* Icône avec effet de halo */}
                    <div className="relative mb-6">
                      <div className={`absolute -inset-6 bg-gradient-to-br ${value.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      <div className="relative bg-gradient-to-br from-background to-card/80 p-4 rounded-2xl border border-border/50 inline-flex shadow-lg">
                        <value.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Effet de particules autour de l'icône */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-primary/50 rounded-full"
                          style={{
                            animation: `orbit 4s linear infinite ${i * 0.5}s`,
                            transformOrigin: '0 0'
                          }}
                        />
                      ))}
                    </div>

                    {/* Contenu */}
                    <div className="relative flex-grow">
                      {/* Titre avec animation de couleur */}
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-[length:200%_auto] bg-clip-text text-transparent group-hover:animate-gradient-shift`}>
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {value.description}
                      </p>

                      {/* Attributs avec apparition séquentielle */}
                      <div className="space-y-2">
                        {value.attributes.map((attr, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm transition-all duration-300"
                            style={{
                              opacity: activeIndex === index ? 1 : 0.5,
                              transform: activeIndex === index ? 'translateX(0)' : 'translateX(-10px)',
                              transitionDelay: `${i * 0.1}s`
                            }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color} animate-soft-pulse`}
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                            <span className="text-foreground/70">{attr}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Indicateur d'interaction */}
                    <div className="relative mt-6">
                      <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                        style={{ width: activeIndex === index ? '100%' : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Ombre portée avec effet de profondeur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 rounded-2xl" />
                </div>
              </div>

              {/* Points de connexion */}
              <div className="absolute top-1/2 -right-2 lg:-right-4 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute top-1/2 -left-2 lg:-left-4 w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </div>
          ))}
        </div>

        {/* Légende et effet global */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary animate-spin-slow" />
              <span className="text-sm text-muted-foreground">
                Survolez les valeurs pour découvrir leurs attributs
              </span>
            </div>
            
            <div className="h-4 w-px bg-border/50" />
            
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-500 animate-soft-pulse" />
              <span className="text-sm text-muted-foreground">
                Ces valeurs nous guident dans chaque décision
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .group-hover\\:animate-gradient-shift {
          animation: gradient-shift 3s ease-in-out infinite;
        }
        
        .group-hover\\:rotate-y-10 {
          transform: rotateY(10deg);
        }
        
        .group-hover\\:-rotate-x-5 {
          transform: rotateX(-5deg);
        }
      `}</style>
    </section>
  );
}
