
import ContactForm from "@/components/ContactForm";
import PartnerForm from "@/components/PartnerForm";
import MapSection from "@/components/sections/MapSection";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
        <section id="contact" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">
                        Contactez l'équipe LUQUAV
                    </h1>
                    <p className="text-lg text-muted-foreground mt-4">
                        Une question ? Remplissez le formulaire et notre équipe vous contactera pour discuter de vos besoins.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <ContactForm />
                </div>
            </div>
        </section>

        <section id="partner-form" className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold">
                        Devenir Partenaire
                    </h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        Remplissez ce formulaire pour soumettre votre candidature. Nous l'examinerons avec attention.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Card className="bg-card text-card-foreground border-border shadow-lg">
                        <CardContent className="p-6 md:p-8">
                            <PartnerForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <MapSection />
    </div>
  );
}
