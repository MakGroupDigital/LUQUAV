# Logos LUQUAV créés

## Fichiers SVG créés (prêts à l'emploi)

1. **logo.svg** - Logo principal LUQUAV (160x80)
2. **logo-og.svg** - Logo pour Open Graph et partages sociaux (1200x630)
3. **favicon.svg** - Favicon SVG moderne (supporté par les navigateurs modernes)
4. **safari-pinned-tab.svg** - Icône pour Safari

## Fichiers PNG nécessaires (à générer)

Pour une compatibilité maximale, vous pouvez convertir les SVG en PNG aux tailles suivantes :

- favicon-16x16.png (16x16px)
- favicon-32x32.png (32x32px)
- favicon-96x96.png (96x96px)
- apple-touch-icon.png (180x180px)
- android-chrome-192x192.png (192x192px)
- android-chrome-512x512.png (512x512px)
- mstile-144x144.png (144x144px)
- logo.png (1200x630px) - Pour Open Graph

## Comment générer les PNG

Vous pouvez utiliser :
1. Un outil en ligne : https://cloudconvert.com/svg-to-png
2. Un logiciel graphique : Photoshop, GIMP, Figma
3. Le script Node.js : `node public/generate-logos.js` (nécessite sharp)

Les SVG fonctionnent déjà pour les navigateurs modernes, mais les PNG offrent une meilleure compatibilité.

