
"use client"
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, MapPin } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projectsData = [
  {
    id: "project-1",
    title: "Maison d’habitation R+3",
    category: "Habitant",
    description: "Maison d’habitation moderne sur un petit espace. Bâtiment à 3 étages.",
    address: "Meteo, Ngaliema, ville de Kinshasa",
    startDate: "Janvier 2019",
  },
  {
    id: "project-2",
    title: "Immeuble appartement R+3",
    category: "Habitant/Apparts",
    description: "Immeuble appartement à 3 étages. 8 appartements au total. Un grand parking. Bureau, buanderie et balcon.",
    address: "Delveau, Ngaliema, ville de Kinshasa",
    startDate: "Janvier 2021",
  },
  {
    id: "project-3",
    title: "Immeuble appartement R+2-1",
    category: "Habitant/Apparts",
    description: "Immeuble appartements. Belle architecture et moderne.",
    address: "Pigeon, Ngaliema, ville de Kinshasa",
    startDate: "Février 2024",
  },
  {
    id: "project-4",
    title: "Immeuble Appartement R+2",
    category: "Complexe Habitation",
    description: "Complexe d’habitation. Appartement et duplex unifamiliale.",
    address: "Malweka, Kinshasa",
    startDate: "Juin 2023",
  },
  {
    id: "project-5",
    title: "Villa R+2 à Lubumbashi",
    category: "Villa",
    description: "Construction d'une villa complète avec 5 chambres, bureaux, 2 salons et cuisines.",
    address: "Golf, Lubumbashi",
    startDate: "Août 2022",
  },
];

export default function ProjectsPage() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 text-center bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Nos Succès : Projets Réalisés avec Confiance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez un aperçu de notre engagement envers la qualité, l'innovation et la satisfaction du client à travers nos réalisations.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.id
              );
              const projectUrl = `${origin}/nos-realisations#${project.id}`;
              return (
                <Card id={project.id} key={project.id} className="overflow-hidden bg-card/5 border-border hover:border-primary/50 transition-colors duration-300 group flex flex-col md:flex-row">
                  {projectImage && (
                     <Dialog>
                        <DialogTrigger asChild>
                            <div className="relative md:w-2/5 w-full h-64 md:h-auto cursor-pointer">
                            <Image
                                src={projectImage.imageUrl}
                                alt={projectImage.description}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={projectImage.imageHint}
                            />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0">
                            <DialogHeader className="p-4 sr-only">
                                <DialogTitle>{project.title}</DialogTitle>
                                <DialogDescription>{project.description}</DialogDescription>
                            </DialogHeader>
                            <div className="relative aspect-video">
                                 <Image
                                    src={projectImage.imageUrl}
                                    alt={projectImage.description}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                  )}
                  <div className="md:w-3/5 w-full flex flex-col p-6">
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                            <CardTitle className="font-headline text-xl text-card-foreground">{project.title}</CardTitle>
                            <Badge variant="secondary" className="flex-shrink-0 mt-1">{project.category}</Badge>
                        </div>
                        <ShareButton url={projectUrl} />
                    </div>
                    <CardDescription className="mb-4 text-muted-foreground">{project.description}</CardDescription>
                    <div className="mt-auto space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-primary"/>
                            <span>{project.address}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 flex-shrink-0 text-primary"/>
                            <span>Début : {project.startDate}</span>
                        </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
