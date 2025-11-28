export default function ReglementRGPDPage() {
    return (
        <div className="bg-background text-foreground">
            <section className="py-16 md:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-center">
                            Conformité au Règlement RGPD
                        </h1>
                        <p className="text-center text-muted-foreground mb-12">Engagement de LUQUAV SARL envers la protection des données</p>

                        <div className="prose prose-invert max-w-none mx-auto text-foreground/80 space-y-6">
                            <p>
                                Bien que LUQUAV SARL soit une entreprise basée en République Démocratique du Congo, nous reconnaissons l'importance des standards internationaux en matière de protection des données, notamment le Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne. Cette page décrit notre engagement à appliquer les principes du RGPD pour tous nos utilisateurs.
                            </p>

                            <h2 className="text-2xl font-headline font-bold text-foreground">1. Nos Principes Fondamentaux</h2>
                            <p>
                                Nous nous efforçons d'adhérer aux principes clés du RGPD :
                            </p>
                            <ul>
                                <li><strong>Légalité, loyauté et transparence :</strong> Nous traitons vos données de manière légale et transparente.</li>
                                <li><strong>Limitation des finalités :</strong> Nous collectons vos données pour des objectifs spécifiques, explicites et légitimes (ex: répondre à une demande de contact).</li>
                                <li><strong>Minimisation des données :</strong> Nous ne collectons que les données strictement nécessaires à la réalisation de ces objectifs.</li>
                                <li><strong>Exactitude :</strong> Nous prenons des mesures pour garantir que vos données sont exactes et tenues à jour.</li>
                                <li><strong>Limitation de la conservation :</strong> Nous ne conservons pas vos données plus longtemps que nécessaire.</li>
                                <li><strong>Intégrité et confidentialité :</strong> Nous assurons la sécurité de vos données.</li>
                            </ul>

                            <h2 className="text-2xl font-headline font-bold text-foreground">2. Vos Droits en tant qu'Utilisateur</h2>
                            <p>
                                Inspirés par le RGPD, nous reconnaissons vos droits sur vos données personnelles :
                            </p>
                            <ul>
                                <li><strong>Droit d'accès :</strong> Vous pouvez demander à savoir quelles données nous détenons sur vous.</li>
                                <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes.</li>
                                <li><strong>Droit à l'effacement ("droit à l'oubli") :</strong> Vous pouvez demander la suppression de vos données sous certaines conditions.</li>
                                <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander de limiter la manière dont nous utilisons vos données.</li>
                                <li><strong>Droit à la portabilité des données :</strong> Vous pouvez demander à recevoir vos données dans un format structuré et lisible par machine.</li>
                                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer à certains types de traitement de vos données.</li>
                            </ul>
                            <p>
                                Pour exercer l'un de ces droits, veuillez nous contacter à <a href="mailto:contact@luquav.com">contact@luquav.com</a>. Nous traiterons votre demande dans les meilleurs délais.
                            </p>

                            <h2 className="text-2xl font-headline font-bold text-foreground">3. Base Légale du Traitement</h2>
                            <p>
                                Le traitement de vos données personnelles via notre site repose principalement sur votre <strong>consentement</strong>, que vous donnez en soumettant activement un formulaire, et sur notre <strong>intérêt légitime</strong> à répondre à vos demandes commerciales et à améliorer nos services.
                            </p>

                            <h2 className="text-2xl font-headline font-bold text-foreground">4. Transferts de Données</h2>
                            <p>
                                Vos données sont hébergées sur des serveurs sécurisés. Si nous devons transférer des données à des partenaires (par exemple, un bureau d'études spécialisé pour votre projet), nous nous assurons que ces partenaires offrent un niveau de protection adéquat.
                            </p>

                             <h2 className="text-2xl font-headline font-bold text-foreground">5. Contact</h2>
                            <p>
                                Notre équipe est votre point de contact pour toute question relative à la protection de vos données. N'hésitez pas à nous écrire à <a href="mailto:contact@luquav.com">contact@luquav.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
