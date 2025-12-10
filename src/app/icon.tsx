import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Image generation - Logo LUQUAV basé sur le logo existant
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
        {/* Logo LUQUAV simplifié pour favicon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 160 80"
          style={{
            position: 'absolute',
          }}
        >
          {/* Forme L grise */}
          <path
            d="M80 0L40 40L80 80L120 40L80 0Z"
            fill="#808080"
          />
          {/* Forme U orange */}
          <path
            d="M120 40L80 0V80L120 40Z"
            fill="#ff6b35"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

