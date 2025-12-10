// Script pour générer les logos - À exécuter avec Node.js et sharp installé
// npm install sharp
const sharp = require('sharp');
const fs = require('fs');

const logoBase = `
<svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
  <rect width="160" height="80" fill="#000000"/>
  <path d="M80 0L40 40L80 80L120 40L80 0Z" fill="#808080"/>
  <path d="M120 40L80 0V80L120 40Z" fill="#ff6b35"/>
  <text x="80" y="45" font-family="Poppins, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">LUQUAV</text>
</svg>
`;

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-144x144.png', size: 144 },
];

const ogLogo = `
<svg viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <g transform="translate(400, 165) scale(2.5)">
    <path d="M80 0L40 40L80 80L120 40L80 0Z" fill="#808080"/>
    <path d="M120 40L80 0V80L120 40Z" fill="#ff6b35"/>
    <text x="80" y="45" font-family="Poppins, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">LUQUAV</text>
  </g>
  <text x="600" y="500" font-family="Poppins, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">BIEN CHIFFRER, BIEN GERER, MIEUX BATIR</text>
</svg>
`;

async function generateLogos() {
  console.log('Génération des logos...');
  
  // Générer les favicons
  for (const { name, size } of sizes) {
    await sharp(Buffer.from(logoBase))
      .resize(size, size, { fit: 'contain', background: '#000000' })
      .png()
      .toFile(`public/${name}`);
    console.log(`✓ ${name} généré`);
  }
  
  // Générer le logo pour Open Graph
  await sharp(Buffer.from(ogLogo))
    .png()
    .toFile('public/logo.png');
  console.log('✓ logo.png généré (1200x630)');
  
  console.log('Tous les logos ont été générés avec succès!');
}

generateLogos().catch(console.error);
