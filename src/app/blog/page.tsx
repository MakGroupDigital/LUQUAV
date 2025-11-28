
import { Newspaper } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 text-center bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Notre Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez ici nos articles, analyses et actualités sur le secteur de la construction.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center h-64 bg-card/50 border border-dashed border-border rounded-lg">
            <Newspaper className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold text-foreground">Bientôt...</h2>
            <p className="text-muted-foreground mt-2">
              Aucune publication pour l'instant. Revenez bientôt !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
