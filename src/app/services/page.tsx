import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  HardHat,
  LineChart,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Gestion intégrale des projets de construction",
  description:
    "LUQUAV accompagne les maîtres d’ouvrage de la préparation du projet au pilotage du chantier, puis dans la gestion technique et la maintenance du patrimoine immobilier.",
  path: "/services",
  keywords: [
    "gestion de projet de construction RDC",
    "assistance maître d’ouvrage Kinshasa",
    "pilotage de chantier",
    "économie de la construction",
    "audit technique immobilier",
    "maintenance bâtiment",
  ],
});

const servicePoles = [
  {
    number: "01",
    icon: Compass,
    title: "Montage & préparation des projets",
    promise: "Transformer une idée en projet de construction maîtrisé.",
    description:
      "Nous aidons le maître d’ouvrage à clarifier ses besoins et à sécuriser les choix techniques, financiers et contractuels avant le démarrage des travaux.",
    objective:
      "Démarrer avec une vision claire du coût, des délais, des exigences techniques et des conditions de réalisation.",
    groups: [
      {
        title: "Cadrage & faisabilité",
        items: [
          "Analyse du besoin et définition du programme",
          "Études d’opportunité et de faisabilité technique et financière",
          "Analyse des contraintes, des risques et aide à la décision",
        ],
      },
      {
        title: "Économie de la construction",
        items: [
          "Estimations, études de prix, métrés et quantification",
          "Élaboration du budget et suivi prévisionnel des coûts",
          "Optimisation des coûts et comparaison des variantes",
        ],
      },
      {
        title: "Conception & documents techniques",
        items: [
          "Conception architecturale et coordination des études techniques",
          "Plans, cahiers des charges, CCTP et spécifications techniques",
          "Bordereaux quantitatifs, estimatifs et cadres de devis",
        ],
      },
      {
        title: "Marchés & préparation à l’exécution",
        items: [
          "Dossiers d’appel d’offres et consultation des entreprises",
          "Analyse des offres, choix de l’entreprise et contractualisation",
          "Planning général, mobilisation des ressources et organisation du chantier",
        ],
      },
    ],
  },
  {
    number: "02",
    icon: HardHat,
    title: "Pilotage & gestion des chantiers",
    promise: "Transformer les plans et les contrats en un ouvrage conforme.",
    description:
      "Pendant l’exécution, LUQUAV orchestre les équipes, les moyens et l’information pour maintenir le chantier dans le budget, les délais et le niveau de qualité attendus.",
    objective:
      "Maîtriser les délais, les coûts, la qualité et les ressources jusqu’à la réception de l’ouvrage.",
    groups: [
      {
        title: "Organisation & planification",
        items: [
          "Installation, procédures et organisation documentaire du chantier",
          "Planning détaillé, ordonnancement et activités critiques",
          "Suivi de l’avancement, analyse des écarts et reporting périodique",
        ],
      },
      {
        title: "Ressources & coordination",
        items: [
          "Planification de la main-d’œuvre, des matériaux et des équipements",
          "Suivi des consommations, rendements et besoins du chantier",
          "Coordination des entreprises, sous-traitants, fournisseurs et corps d’état",
        ],
      },
      {
        title: "Qualité & maîtrise économique",
        items: [
          "Contrôle de conformité des travaux, matériaux et quantités",
          "Suivi du budget, des dépenses et des situations de travaux",
          "Réception des ouvrages et pilotage de la levée des réserves",
        ],
      },
      {
        title: "Performance & audit",
        items: [
          "Formation des équipes aux méthodes, à la qualité et à l’organisation",
          "Évaluation des performances et amélioration des rendements",
          "Audits techniques, organisationnels et recommandations correctives",
        ],
      },
    ],
  },
  {
    number: "03",
    icon: Building2,
    title: "Gestion technique du patrimoine immobilier",
    promise: "Préserver la valeur, la performance et la durabilité des ouvrages.",
    description:
      "Après la livraison — ou avant une acquisition — nous donnons aux propriétaires et gestionnaires une lecture fiable de leur patrimoine et un plan d’action concret.",
    objective:
      "Réduire les coûts imprévus, protéger la valeur des actifs et prolonger la durée de vie des ouvrages.",
    groups: [
      {
        title: "Maintenance & gestion technique",
        items: [
          "Maintenance préventive et corrective des bâtiments",
          "Planification des interventions et suivi des prestataires",
          "Gestion des équipements et du carnet d’entretien",
        ],
      },
      {
        title: "Audit & diagnostic",
        items: [
          "Diagnostic des ouvrages, pathologies et causes des désordres",
          "Évaluation de la performance et recommandations de réhabilitation",
          "Due diligence technique des terrains avant acquisition ou développement",
        ],
      },
      {
        title: "États des lieux & réhabilitation",
        items: [
          "États des lieux techniques avant, après travaux ou en contexte locatif",
          "Programme, budget et cahier des charges de réhabilitation",
          "Consultation des entreprises et contrôle des interventions",
        ],
      },
      {
        title: "Performance du patrimoine",
        items: [
          "Évaluation globale et plan pluriannuel de maintenance",
          "Priorisation des travaux et programmation des investissements",
          "Suivi des coûts d’entretien et de la durée de vie des équipements",
        ],
      },
    ],
  },
];

const lifecycle = [
  { icon: ClipboardCheck, label: "Préparer", detail: "Décider sur des bases solides" },
  { icon: LineChart, label: "Piloter", detail: "Tenir les objectifs du chantier" },
  { icon: Settings, label: "Préserver", detail: "Faire durer le patrimoine" },
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/60 bg-muted/40 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_38%)]" />
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Nos services
            </p>
            <h1 className="font-headline text-4xl font-bold leading-tight md:text-6xl">
              Gestion intégrale des projets de construction
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              De l’idée du projet à l’exploitation du patrimoine, LUQUAV accompagne le maître
              d’ouvrage à chaque étape avec une responsabilité claire et une vision d’ensemble.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-3 md:grid-cols-3">
            {lifecycle.map((step, index) => (
              <div key={step.label} className="relative flex items-center gap-4 rounded-2xl border border-border/60 bg-background/80 p-4 backdrop-blur">
                <div className="rounded-xl bg-primary/10 p-3">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{step.label}</p>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </div>
                {index < lifecycle.length - 1 && (
                  <ArrowRight className="absolute -right-3 z-10 hidden h-5 w-5 text-primary md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-16 px-4 md:px-6">
          {servicePoles.map((pole) => (
            <article key={pole.number} className="scroll-mt-24">
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-primary/10 p-4">
                      <pole.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="font-headline text-5xl font-bold text-primary/20">
                      {pole.number}
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl font-bold md:text-4xl">{pole.title}</h2>
                  <p className="mt-4 text-lg font-semibold text-primary">{pole.promise}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{pole.description}</p>
                  <div className="mt-7 rounded-2xl border-l-4 border-primary bg-muted/60 p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">Objectif</p>
                    <p className="mt-2 text-sm leading-relaxed">{pole.objective}</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {pole.groups.map((group) => (
                    <Card key={group.title} className="border-border/60 bg-card/50 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                      <CardContent className="p-6">
                        <h3 className="font-headline text-xl font-bold">{group.title}</h3>
                        <ul className="mt-5 space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              {pole.number !== "03" && <div className="mt-16 h-px bg-border/70" />}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Un seul partenaire, de l’idée à l’exploitation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Parlons de votre besoin. Nous définirons avec vous le périmètre d’intervention adapté
            à l’étape et aux enjeux de votre projet.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/commencer-un-projet">
              Démarrer un projet <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
