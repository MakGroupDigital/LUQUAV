
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Handshake, Users, Zap } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        icon: Users,
        title: "Accès à un réseau qualifié",
        description: "Collaborez avec des maîtres d'ouvrage, ingénieurs et fournisseurs engagés dans des projets de qualité."
    },
    {
        icon: Zap,
        title: "Efficacité et visibilité accrues",
        description: "Profitez de notre plateforme numérique pour optimiser la gestion de projet et accroître la visibilité de vos services."
    },
    {
        icon: Handshake,
        title: "Relation de confiance durable",
        description: "Nous construisons des partenariats solides basés sur la transparence, le respect mutuel et des objectifs communs."
    }
]

export default function DevenirPartenairePage() {
    return (
        <div className="bg-background text-foreground">
            <section className="py-16 md:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Devenez Partenaire LUQUAV
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ensemble, construisons l'avenir du BTP en RDC. Rejoignez un écosystème d'excellence et d'innovation.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-headline font-bold">Pourquoi nous rejoindre ?</h2>
                        <p className="text-muted-foreground mt-4">
                            LUQUAV s'engage à créer des synergies entre les meilleurs acteurs de la construction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {benefits.map(benefit => (
                            <Card key={benefit.title} className="text-center bg-card/50 border-border">
                                <CardContent className="p-8">
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                        <benefit.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                                    <p className="text-muted-foreground mt-2">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                         <Card className="bg-card text-card-foreground border-border">
                             <CardHeader className="text-center">
                                 <CardTitle className="text-2xl font-headline">Qui peut devenir partenaire ?</CardTitle>
                                <CardDescription>Nous recherchons des collaborateurs passionnés et fiables.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0" /><span>Entreprises de construction et sous-traitants</span></li>
                                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0" /><span>Fournisseurs de matériaux et d'équipements</span></li>
                                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0" /><span>Architectes et bureaux d'études techniques</span></li>
                                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0" /><span>Experts en logistique et transport</span></li>
                                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0" /><span>Artisans et techniciens qualifiés</span></li>
                                    <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0" /><span>Investisseurs et promoteurs immobiliers</span></li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center mt-16">
                        <h3 className="text-2xl font-headline font-bold">Prêt à nous rejoindre ?</h3>
                        <p className="text-lg text-muted-foreground mt-2 mb-6">Contactez-nous pour explorer les opportunités de collaboration.</p>
                        
                        <Button asChild size="lg">
                           <Link href="/contact#partner-form">Postulez maintenant</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
