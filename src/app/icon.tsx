import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Image generation - Logo LUQUAV officiel
// Note: Next.js utilisera automatiquement /favicon.ico, /favicon.svg, etc. depuis /public
// Ce fichier génère dynamiquement l'icône via /icon route
export default async function Icon() {
  // Utiliser fetch pour charger l'image depuis le domaine public
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9002';
  
  try {
    const logoResponse = await fetch(`${baseUrl}/logoluquav.png`);
    
    if (logoResponse.ok) {
      const logoBuffer = await logoResponse.arrayBuffer();
      const logoBase64 = Buffer.from(logoBuffer).toString('base64');

      return new ImageResponse(
        (
          <div
            style={{
              background: '#000000',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={`data:image/png;base64,${logoBase64}`}
              alt="LUQUAV"
              width="32"
              height="32"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        ),
        {
          ...size,
        }
      );
    }
  } catch (error) {
    // Fallback si l'image n'est pas disponible
  }

  // Fallback par défaut
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>LUQUAV</div>
      </div>
    ),
    {
      ...size,
    }
  );
}

