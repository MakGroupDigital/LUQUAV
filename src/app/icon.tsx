import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Image generation - Logo LUQUAV simplifié
export default function Icon() {
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
          position: 'relative',
        }}
      >
        {/* Forme L grise à gauche */}
        <div
          style={{
            position: 'absolute',
            left: '2px',
            width: '12px',
            height: '28px',
            background: '#808080',
            clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)',
          }}
        />
        {/* Forme U orange à droite */}
        <div
          style={{
            position: 'absolute',
            right: '2px',
            width: '12px',
            height: '28px',
            background: '#ff6b35',
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)',
          }}
        />
        {/* Texte LU centré */}
        <div
          style={{
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'system-ui',
            letterSpacing: '-0.5px',
          }}
        >
          LU
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

