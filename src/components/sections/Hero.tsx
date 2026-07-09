"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const actions = [
  { label: "Commencer un projet", href: "/commencer-un-projet" },
  { label: "Trouver un prestataire", href: "/services" },
  { label: "Découvrir LUQUAV", href: "/a-propos" },
  { label: "Me former", href: "/contact" },
];

const heroImages = PlaceHolderImages.filter((image) =>
  image.id.startsWith("project-")
).slice(0, 5);

export default function Hero() {
  const [actionIndex, setActionIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(actions[0].label.length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const currentAction = actions[actionIndex];
    const isComplete = letterCount === currentAction.label.length;
    const isEmpty = letterCount === 0;
    const delay = isComplete && !isDeleting ? 1400 : isDeleting ? 45 : 75;

    const timer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setActionIndex((index) => (index + 1) % actions.length);
        setIsDeleting(false);
        return;
      }

      setLetterCount((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [actionIndex, isDeleting, letterCount]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImageIndex((index) => (index + 1) % heroImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const currentAction = actions[actionIndex];
  const visibleLabel = currentAction.label.slice(0, letterCount);

  return (
    <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center overflow-hidden text-center text-white">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={image.id}
            src={image.imageUrl}
            alt={image.description}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover transition-all ease-out ${
              imageIndex === index
                ? "scale-105 opacity-100"
                : "scale-100 opacity-0"
            }`}
            style={{ transitionDuration: "1600ms" }}
            data-ai-hint={image.imageHint}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 fade-in-up">
        <h1 className="mb-4 font-headline text-4xl font-bold drop-shadow-lg md:text-6xl lg:text-7xl">
          La construction du futur,{" "}
          <span className="gradient-text">gérée avec expertise</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-white/90 drop-shadow-md subtle-pulse md:text-xl">
          BIEN CHIFFRER, BIEN GERER, MIEUX BATIR
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="btn-modern min-w-[260px] sm:min-w-[300px]"
          >
            <Link
              href={currentAction.href}
              className="group inline-flex items-center justify-center gap-2"
            >
              <span className="inline-flex min-h-6 items-center">
                {visibleLabel}
                <span
                  className="ml-0.5 h-5 w-px animate-pulse bg-current"
                  aria-hidden="true"
                />
              </span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          {heroImages.map((image, index) => (
            <span
              key={image.id}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                imageIndex === index ? "w-8 bg-white" : "w-2 bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
