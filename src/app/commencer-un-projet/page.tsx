import ProjectForm from "@/components/ProjectForm";

export default function CommencerUnProjetPage() {
  return (
    <div className="bg-background text-foreground">
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
