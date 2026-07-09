import { useEffect } from "react";

/**
 * Hook pour gérer les transitions de thème en douceur
 */
export function useThemeTransition() {
  useEffect(() => {
    // Ajouter une classe pour les transitions de thème
    document.documentElement.classList.add("theme-transition");
    
    // Nettoyer la classe lors du démontage
    return () => {
      document.documentElement.classList.remove("theme-transition");
    };
  }, []);
}