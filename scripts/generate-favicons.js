const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '../public/logoluquav.png');
const outputDir = path.join(__dirname, '../public');

// Tailles pour les favicons
const faviconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-144x144.png', size: 144 },
];

// Image de partage social (Open Graph)
const ogImage = {
  name: 'logo.png',
  width: 1200,
  height: 630,
};

// Créer un favicon.ico (multi-format ICO)
async function generateFaviconIco() {
  const sizes = [16, 32, 48];
  const buffers = await Promise.all(
    sizes.map(size =>
      sharp(inputImage)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  
  // Pour simplifier, on crée juste un PNG 32x32 comme favicon.ico
  // Les vrais fichiers ICO nécessitent une bibliothèque spécialisée
  await sharp(inputImage)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outputDir, 'favicon.ico'));
  console.log('✓ favicon.ico généré');
}

// Créer un favicon.svg simplifié
async function generateFaviconSvg() {
  // Pour le SVG, on crée une version simplifiée qui référence l'image
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <image href="/logoluquav.png" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(outputDir, 'favicon.svg'), svgContent);
  console.log('✓ favicon.svg généré');
}

// Créer logo.svg
async function generateLogoSvg() {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
  <image href="/logoluquav.png" width="160" height="80" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(outputDir, 'logo.svg'), svgContent);
  console.log('✓ logo.svg généré');
}

// Créer logo-og.svg pour Open Graph
async function generateOgLogoSvg() {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <image href="/logoluquav.png" x="400" y="165" width="400" height="300" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(outputDir, 'logo-og.svg'), svgContent);
  console.log('✓ logo-og.svg généré');
}

// Créer safari-pinned-tab.svg
async function generateSafariPinnedTab() {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <image href="/logoluquav.png" width="32" height="32" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(outputDir, 'safari-pinned-tab.svg'), svgContent);
  console.log('✓ safari-pinned-tab.svg généré');
}

async function generateAll() {
  console.log('🚀 Génération des favicons et images à partir de logoluquav.png...\n');

  try {
    // Vérifier que l'image source existe
    if (!fs.existsSync(inputImage)) {
      throw new Error(`L'image source ${inputImage} n'existe pas!`);
    }

    // Générer tous les favicons PNG
    for (const { name, size } of faviconSizes) {
      await sharp(inputImage)
        .resize(size, size, { 
          fit: 'contain', 
          background: { r: 0, g: 0, b: 0, alpha: 0 } 
        })
        .png()
        .toFile(path.join(outputDir, name));
      console.log(`✓ ${name} généré (${size}x${size})`);
    }

    // Générer favicon.ico
    await generateFaviconIco();

    // Générer les SVG
    await generateFaviconSvg();
    await generateLogoSvg();
    await generateOgLogoSvg();
    await generateSafariPinnedTab();

    // Générer l'image de partage social (Open Graph)
    await sharp(inputImage)
      .resize(ogImage.width, ogImage.height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      })
      .png()
      .toFile(path.join(outputDir, ogImage.name));
    console.log(`✓ ${ogImage.name} généré (${ogImage.width}x${ogImage.height})`);

    // Créer aussi une version pour l'image hero
    await sharp(inputImage)
      .resize(1920, 1080, {
        fit: 'cover',
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      })
      .jpeg({ quality: 90 })
      .toFile(path.join(outputDir, 'hero.jpg'));
    console.log('✓ hero.jpg généré (1920x1080)');

    console.log('\n✅ Tous les favicons et images ont été générés avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors de la génération:', error);
    process.exit(1);
  }
}

generateAll();
