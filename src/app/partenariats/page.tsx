import { Building, Globe, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PartenariatsPage() {
    return (
        <div className="bg-background text-foreground">
            <section className="py-16 md:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                        Partenariats & Accréditations
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Notre force réside dans notre réseau de partenaires fiables et notre engagement envers les standards internationaux de qualité.
                    </p>
                </div>
            </section>

            {/* Partenaires */}
            <section id="partners" className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-headline font-bold mb-6">Nos Partenaires Stratégiques</h2>
                            <p className="text-muted-foreground mb-8">
                                Nous collaborons avec des leaders de l'industrie pour garantir l'accès aux meilleurs matériaux, technologies et compétences. Nos partenaires partagent notre vision de la qualité, de l'innovation et de la fiabilité.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full"><Building className="h-6 w-6 text-primary" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">Fournisseurs de Matériaux</h3>
                                        <p className="text-muted-foreground">Des fournisseurs certifiés pour des matériaux durables et conformes aux normes.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full"><Globe className="h-6 w-6 text-primary" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">Experts Techniques & Logistiques</h3>
                                        <p className="text-muted-foreground">Des bureaux d'études et des logisticiens pour des solutions optimisées.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                           <Image src="https://picsum.photos/seed/partnership/800/600" alt="Poignée de main" className="object-cover" fill data-ai-hint="handshake deal"/>
                        </div>
                    </div>
                </div>
            </section>

             {/* Accréditations */}
            <section id="accreditations" className="py-16 md:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-headline font-bold">Qualité & Standards Internationaux</h2>
                        <p className="text-muted-foreground mt-4">
                           LUQUAV s'engage à respecter les normes les plus strictes de l'industrie. Bien que les accréditations formelles soient en cours d'obtention, nos processus internes sont déjà alignés sur les meilleures pratiques internationales.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 p-6 bg-background rounded-lg">
                           <Award className="h-12 w-12 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Alignement Normes ISO 9001</h3>
                                <p className="text-muted-foreground text-sm">Nos systèmes de management de la qualité sont développés en s'inspirant des principes de la norme ISO 9001 pour assurer la satisfaction client et l'amélioration continue.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-6 bg-background rounded-lg">
                           <ShieldCheck className="h-12 w-12 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg">Sécurité et Conformité</h3>
                                <p className="text-muted-foreground text-sm">La sécurité sur nos chantiers est une priorité absolue. Nous suivons des protocoles stricts pour garantir un environnement de travail sûr pour toutes nos équipes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* CTA */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                        Rejoignez Notre Réseau d'Excellence
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                       Vous êtes une entreprise, un fournisseur ou un expert et vous partagez nos valeurs ? Discutons des possibilités de collaboration.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/devenir-partenaire">Devenir Partenaire</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
