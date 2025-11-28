
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/nos-realisations", label: "Nos Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavMenu = ({ isMobileMenu = false }) => (
    <nav
      className={`flex gap-6 items-center ${
        isMobileMenu ? "flex-col text-lg" : "text-sm"
      }`}
    >
      {NAV_LINKS.map((link) =>
        isMobileMenu ? (
          <SheetClose asChild key={link.href}>
            <Link href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          </SheetClose>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-primary transition-colors font-medium"
          >
            {link.label}
          </Link>
        )
      )}
       <Button asChild className={`${isMobileMenu ? 'mt-4' : 'ml-4'}`}>
        <Link href="/commencer-un-projet">Commencer un Projet</Link>
      </Button>
    </nav>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-background text-foreground ${
        isScrolled ? "shadow-md shadow-black/20" : ""
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="LUQUAV Sarl Home">
          <Logo className="h-9 w-auto" />
        </Link>
        {isMobile === undefined ? (
          <div className="h-10 w-48 rounded-md animate-pulse bg-muted/20"></div>
        ) : isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background text-foreground">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu de navigation</SheetTitle>
                <SheetDescription>
                  Liens de navigation principaux pour le site LUQUAV.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <NavMenu isMobileMenu={true} />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <NavMenu />
        )}
      </div>
    </header>
  );
}
