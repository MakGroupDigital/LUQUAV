import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projectsData = [
  {
    id: "project-1",
    title: "Maison d’habitation R+3",
    category: "Habitant",
    description: "Maison d’habitation moderne sur un petit espace. Bâtiment à 3 étages.",
  },
  {
    id: "project-2",
    title: "Immeuble appartement R+3",
    category: "Habitant/Apparts",
    description: "Immeuble appartement à 3 étages. 8 appartements au total.",
  },
  {
    id: "project-3",
    title: "Immeuble appartement R+2-1",
    category: "Habitant/Apparts",
    description: "Immeuble appartements. Belle architecture et moderne.",
  },
  {
    id: "project-4",
    title: "Immeuble Appartement R+2",
    category: "Complexe Habitation",
    description: "Complexe d’habitation. Appartement et duplex unifamiliale.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-headline font-bold">Nos Réalisations Récentes</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Un aperçu de notre engagement envers la qualité, l'innovation et la satisfaction du client.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project) => {
            const projectImage = PlaceHolderImages.find(
              (img) => img.id === project.id
            );
            return (
              <Card key={project.id} className="overflow-hidden bg-card/5 border-border hover:border-primary/50 transition-colors duration-300 group flex flex-col">
                {projectImage && (
                  <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      width={600}
                      height={400}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-headline text-lg text-card-foreground">{project.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="self-start mb-4">{project.category}</Badge>
                  <CardDescription className="text-muted-foreground flex-grow">{project.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/nos-realisations">
                    Voir toutes nos réalisations <ArrowRight className="ml-2"/>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
