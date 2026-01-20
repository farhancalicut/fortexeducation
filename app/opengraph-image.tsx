import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Fortex Education - Career Guidance & Educational Consulting';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #0284c7 0%, #9333ea 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Fortex Education
        </div>
        <div
          style={{
            fontSize: 36,
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Your Trusted Partner in Educational Consulting & Career Guidance
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
