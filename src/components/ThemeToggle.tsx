"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Éviter l'hydratation mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full bg-muted/20 animate-pulse"
        aria-label="Changer le thème"
      />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/10"
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-all duration-300" />
      ) : (
        <Sun className="h-5 w-5 transition-all duration-300" />
      )}
      <span className="sr-only">Changer le thème</span>
    </Button>
  );
}