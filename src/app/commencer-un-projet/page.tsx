import ProjectForm from "@/components/ProjectForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Commencer un projet de construction à Kinshasa",
  description:
    "Soumettez votre projet de construction à LUQUAV SARL: maison, immeuble, commerce, rénovation, entrepôt ou chantier complexe avec accompagnement professionnel en RDC.",
  path: "/commencer-un-projet",
  keywords: [
    "commencer projet construction",
    "devis construction Kinshasa",
    "projet maison RDC",
    "construction immeuble Kinshasa",
    "demande accompagnement BTP",
  ],
});

const campaignSteps = [
  { title: "Vous décrivez votre projet", text: "Formulaire d’information : terrain, besoin, budget, délais." },
  { title: "Le bureau d’études LUQUAV analyse", text: "Consultation, propositions et, si besoin, descente sur terrain." },
  { title: "Un professionnel vous accompagne", text: "Architecte ou ingénieur qualifié, appuyé par de jeunes talents encadrés." },
  { title: "Vous recevez votre résultat", text: "Études corrigées et validées, prêtes pour votre chantier." },
];

export default function CommencerUnProjetPage() {
  return (
    <div className="bg-background text-foreground">
        <section id="campagne" className="py-16 md:py-20 bg-primary/5 border-b border-border">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Campagne LUQUAV · Construction moderne</p>
                <h2 className="text-3xl md:text-4xl font-headline font-bold mt-3">
                    Des prestataires de qualité, accessibles à chaque maître d’ouvrage.
                </h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl">
                    Vous voulez construire ? Accédez à un ingénieur ou un architecte qualifié pour un coût réduit, sous forme de consultation ou d’abonnement. Notre vision : promouvoir la construction moderne en RDC.
                </p>
                <ol className="grid gap-4 md:grid-cols-4 mt-10">
                    {campaignSteps.map((step, index) => (
                        <li key={step.title} className="rounded-xl border border-border bg-background p-5">
                            <span className="text-primary font-bold text-sm">0{index + 1}</span>
                            <h3 className="font-semibold mt-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{step.text}</p>
                        </li>
                    ))}
                </ol>
                <div className="grid gap-6 md:grid-cols-2 mt-10">
                    <div>
                        <h3 className="font-headline font-semibold text-xl">Nos objectifs</h3>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                            <li>Accompagner les constructeurs dès la conception et les études.</li>
                            <li>Encadrer et former les jeunes architectes et ingénieurs, et offrir de l’expérience aux finalistes.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline font-semibold text-xl">Notre démarche</h3>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
                            <li>Partenariats avec des architectes et ingénieurs professionnels.</li>
                            <li>Appel à stagiaires ingénieurs et architectes, encadrés et validés.</li>
                            <li>Campagne promotionnelle auprès des maîtres d’ouvrage.</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-10 text-muted-foreground">
                    Déjà en contact avec un chef de projet ? Suivez votre chantier dans l’application{" "}
                    <a className="text-primary font-semibold underline-offset-4 hover:underline" href="https://app.luquav.com" target="_blank" rel="noreferrer">LUQUAV</a>.
                </p>
            </div>
        </section>
        <section id="contact-project" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">
                        Lancez votre projet : Nous construisons vos ambitions.
                    </h1>
                    <p className="text-lg text-muted-foreground mt-4">
                        Remplissez le formulaire détaillé ci-dessous et notre équipe vous contactera pour discuter de vos besoins.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                <ProjectForm />
                </div>
            </div>
        </section>
    </div>
  );
}
