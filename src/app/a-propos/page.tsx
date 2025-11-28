
import { Building, Target, Users, Bot, Quote, Milestone, ShieldCheck, Lightbulb, UsersRound, Handshake, Star, Leaf, GitBranch, Briefcase, FileText, CheckCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const team = [
    { name: "Adamu MUPEPE", role: "Fondateur / PDG", avatar: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1761306107/f31ec427-32b4-44b7-8092-1b75f2580a9a_prhgm1.jpg" },
    { name: "David MEME", role: "Directeur Dev & innovation", avatar: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1761306346/IMG_1771_ybanpq.jpg" },
    { name: "Nathalie ILEGE", role: "Directrice Technique", avatar: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1761306687/028c0607-96ca-433c-a614-8441d3bfa2a2_sv23pj.jpg" },
    { name: "Yves MUPEPE", role: "Chef des Opérations", avatar: "https://res.cloudinary.com/dy73hzkpm/image/upload/v1761306432/7b770194-cffd-4b02-9f17-f436fee83e1f_swyq05.jpg" },
];

const values = [
    { icon: ShieldCheck, title: "Fiabilité et respect des délais", description: "Chaque étape du chantier est suivie et validée en temps réel pour livrer dans les temps." },
    { icon: Lightbulb, title: "Innovation continue", description: "Nous intégrons les meilleures technologies pour optimiser la gestion des projets." },
    { icon: UsersRound, title: "Professionnalisation des équipes", description: "Nous formons, évaluons et certifions les intervenants pour garantir un haut niveau de service." },
    { icon: Handshake, title: "Collaboration efficace", description: "LUQUAV rapproche tous les acteurs du projet pour assurer sa réussite." },
    { icon: Target, title: "Transparence totale", description: "Nos clients et partenaires voient l'avancement de leurs projets à chaque instant." },
]

const vision = [
    { icon: Star, title: "Satisfaction Client", description: "Transparence, qualité et respect des délais pour répondre parfaitement aux attentes." },
    { icon: Lightbulb, title: "Innovation", description: "Solutions numériques et méthodes modernes pour optimiser la gestion des chantiers." },
    { icon: Leaf, title: "Durabilité", description: "Pratiques responsables pour construire des ouvrages solides et respectueux de l'environnement." },
    { icon: GitBranch, title: "Adaptabilité", description: "Flexibilité et réactivité pour s'ajuster aux besoins spécifiques de chaque projet." },
];

const services = [
    "Construction générale", "Gestion complète de projet", "Suivi et pilotage",
    "Gestion de main-d'œuvre", "Logistique et approvisionnement", "Études techniques et conseil",
    "Maintenance technique (MST)"
];

const timeline = [
    { year: "2021", title: "Là où tout a commencé", description: "L'ingénieur Adamu Mupepe étudie l'impact des délais sur la prévision financière des projets. La vision de LUQUAV émerge." },
    { year: "2022", title: "Expérience et expertise", description: "Adamu Mupepe travaille comme conducteur de travaux puis directeur technique, tout en se formant en planification et économie de construction." },
    { year: "2023", title: "Fondation de LUQUAV SARL", description: "Création de LUQUAV SARL pour offrir une gestion professionnelle et transparente des projets de construction en RDC." },
    { year: "2024", title: "Naissance de LUQUAV App", description: "Développement de LUQUAV App, un outil numérique permettant de centraliser les informations et suivre les chantiers en temps réel." },
    { year: "2025", title: "Aujourd'hui", description: "LUQUAV continue de professionnaliser le BTP en RDC, combinant expertise humaine et solutions numériques innovantes." },
];

const process = [
    { title: "Analyse et planification", description: "Étude des besoins, estimation des coûts et planification globale du projet." },
    { title: "Conception et études techniques", description: "Réalisation des plans, études techniques et vérifications de conformité." },
    { title: "Mobilisation des équipes", description: "Formation et coordination des techniciens, logistique et approvisionnement." },
    { title: "Exécution et suivi", description: "Suivi en temps réel via LUQUAV App, contrôle qualité et reporting régulier." },
    { title: "Maintenance post-livraison", description: "Service MST et interventions techniques pour assurer la durabilité des ouvrages." },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                    LUQUAV SARL : Expert en gestion de projets de construction en RD Congo
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Face au manque de transparence, de coordination et de numérisation dans la gestion des chantiers en RDC, LUQUAV SARL a été créée pour moderniser le secteur du BTP.
                </p>
            </div>
        </section>

        {/* Qui Sommes Nous */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-headline font-bold mb-6">Qui Sommes-Nous ?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full"><Users className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">Expertise locale</h3>
                                    <p className="text-muted-foreground">Entreprise congolaise spécialisée dans la gestion et la digitalisation des projets de construction.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full"><Briefcase className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">Accompagnement complet</h3>
                                    <p className="text-muted-foreground">Nous accompagnons maîtres d'ouvrage, ingénieurs, entrepreneurs et fournisseurs pour des chantiers efficaces et transparents.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full"><Bot className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <h3 className="font-bold text-lg">Solution numérique : LUQUAV App</h3>
                                    <p className="text-muted-foreground">Notre application d'appui numérique centralise les informations, améliore la coordination et assure une meilleure traçabilité de l'avancement des travaux.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image src="https://i.postimg.cc/jSV4CDBm/Whats-App-Image-2025-09-06-at-20-57-05.jpg" alt="Notre équipe" className="object-cover" fill data-ai-hint="construction site blueprint"/>
                    </div>
                </div>
            </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-headline font-bold">Notre Histoire</h2>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border"></div>
                    {timeline.map((item, index) => (
                         <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                               <Card className="bg-card/50 border-primary/20">
                                   <CardHeader>
                                       <CardTitle className="text-primary">{item.year}</CardTitle>
                                       <CardDescription className="font-bold text-card-foreground">{item.title}</CardDescription>
                                   </CardHeader>
                                   <CardContent>
                                       <p className="text-muted-foreground">{item.description}</p>
                                   </CardContent>
                               </Card>
                            </div>
                             <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-muted flex items-center justify-center">
                                <Milestone className="h-4 w-4 text-primary-foreground" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

         {/* Team */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-headline font-bold">L'Équipe : L'énergie de l'unité</h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        Grâce à leur rigueur, collaboration et transparence, nos experts font de LUQUAV un partenaire fiable.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <Card key={member.name} className="text-center bg-card/5 border-transparent hover:border-primary/50 transition-colors">
                             <CardContent className="p-6">
                                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                                    <AvatarImage src={member.avatar} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                                <p className="text-primary font-semibold">{member.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-headline font-bold">Nos Valeurs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, i) => (
                        <Card key={i} className="text-center bg-card/50 border-border">
                            <CardContent className="p-8">
                                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                    <value.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">{value.title}</h3>
                                <p className="text-muted-foreground mt-2">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Vision */}
        <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-headline font-bold mb-4">Notre Vision : Pionniers d'un avenir meilleur</h2>
                     <p className="text-muted-foreground leading-relaxed mb-8">
                        Chez LUQUAV, notre vision dépasse la simple gestion de chantiers. Nous aspirons à transformer le secteur du BTP en RDC et au-delà, en plaçant l'innovation, l'engagement et la satisfaction client au cœur de notre approche.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        {vision.map(item => (
                            <div key={item.title} className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-full"><item.icon className="h-5 w-5 text-primary"/></div>
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image src="https://i.postimg.cc/Bv45cdSS/Whats-App-Image-2025-09-06-at-20-58-59.jpg" alt="Vision" className="object-cover" fill data-ai-hint="futuristic city"/>
                </div>
             </div>
        </section>

        {/* Services & Process */}
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16">
                 <div>
                    <h2 className="text-3xl font-headline font-bold mb-8 text-center lg:text-left">Nos Services sur Mesure</h2>
                     <div className="grid sm:grid-cols-2 gap-4">
                        {services.map(service => (
                            <div key={service} className="flex items-center gap-3 p-3 bg-background/50 rounded-md">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0"/>
                                <span>{service}</span>
                            </div>
                        ))}
                    </div>
                 </div>
                 <div>
                    <h2 className="text-3xl font-headline font-bold mb-8 text-center lg:text-left">Notre Processus de Projet</h2>
                    <div className="space-y-6">
                        {process.map((step, index) => (
                            <div key={step.title} className="flex items-start gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                                    {index < process.length - 1 && <div className="w-px h-12 bg-border mt-2"></div>}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </section>
        
        {/* CTA */}
         <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                    COLLABOREZ AVEC LUQUAV !
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                   Choisir LUQUAV pour votre projet de construction, c'est bénéficier d'une gestion complète et professionnelle, avec un suivi rigoureux, des équipes qualifiées et des outils numériques performants.
                </p>
                 <Button asChild size="lg">
                    <Link href="/contact">Contactez-nous</Link>
                </Button>

                <Card className="max-w-2xl mx-auto mt-12 text-left bg-card/50 border-border">
                    <CardContent className="p-6">
                        <p className="text-center text-muted-foreground mb-4">"Construisons ensemble un avenir exceptionnel pour vos projets."</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
                             <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary"/>
                                <span>+243 82 807 3633</span>
                            </div>
                             <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary"/>
                                <span>contact@luquav.com</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    </div>
  );
}
