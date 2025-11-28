import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-headline font-bold">
                    Contactez l'équipe LUQUAV
                </h2>
                <p className="text-lg text-muted-foreground mt-4">
                    Une question ? Remplissez le formulaire et notre équipe vous contactera pour discuter de vos besoins.
                </p>
            </div>
            <div className="max-w-2xl mx-auto">
            <ContactForm />
            </div>
        </div>
    </section>
  );
}
