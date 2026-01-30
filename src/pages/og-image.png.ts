import { ImageResponse } from '@vercel/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const prerender = true;

export async function GET() {
  // Read the PNG files and convert to base64 data URIs
  const logoPath = join(process.cwd(), 'public/images/creodrop.png');
  const wordmarkPath = join(process.cwd(), 'public/images/wordmark.png');

  const logoBase64 = readFileSync(logoPath).toString('base64');
  const wordmarkBase64 = readFileSync(wordmarkPath).toString('base64');

  const logoDataUri = `data:image/png;base64,${logoBase64}`;
  const wordmarkDataUri = `data:image/png;base64,${wordmarkBase64}`;

  // Create the OG image using object-based element construction
  // (Astro doesn't support JSX in .ts endpoints)
  const html = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #06b6d4 100%)',
        padding: '60px',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '48px 64px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    marginBottom: '32px',
                  },
                  children: [
                    {
                      type: 'img',
                      props: {
                        src: logoDataUri,
                        width: 100,
                        height: 100,
                        style: {
                          borderRadius: '16px',
                        },
                      },
                    },
                    {
                      type: 'img',
                      props: {
                        src: wordmarkDataUri,
                        height: 60,
                        style: {
                          objectFit: 'contain',
                        },
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: '28px',
                    color: '#374151',
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                  },
                  children: 'Managed Drupal Hosting Made Simple',
                },
              },
            ],
          },
        },
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
}
