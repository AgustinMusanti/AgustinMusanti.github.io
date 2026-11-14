import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const fontsDir = join(process.cwd(), 'node_modules', '@fontsource');

const spaceGrotesk700 = readFileSync(join(fontsDir, 'space-grotesk/files/space-grotesk-latin-700-normal.woff2'));
const inter400 = readFileSync(join(fontsDir, 'inter/files/inter-latin-400-normal.woff2'));
const jetBrainsMono500 = readFileSync(join(fontsDir, 'jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2'));

const COLORS = {
  bg: '#0F1412',
  surface: '#161D1A',
  border: '#26302C',
  text: '#E8E6DF',
  muted: '#9AA39D',
  accent: '#D9A441',
};

interface OgImageInput {
  eyebrow: string;
  title: string;
  description: string;
}

export async function generateOgImage({ eyebrow, title, description }: OgImageInput): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: COLORS.bg,
          color: COLORS.text,
          padding: '80px',
          boxSizing: 'border-box',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontFamily: 'JetBrains Mono',
                fontSize: '28px',
                color: COLORS.accent,
                letterSpacing: '2px',
              },
              children: eyebrow,
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '24px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontFamily: 'Space Grotesk',
                      fontSize: '64px',
                      fontWeight: 700,
                      color: COLORS.text,
                      lineHeight: 1.1,
                    },
                    children: title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: '28px',
                      color: COLORS.muted,
                      maxWidth: '900px',
                    },
                    children: description,
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
                fontFamily: 'JetBrains Mono',
                fontSize: '24px',
                color: COLORS.muted,
                borderTopWidth: '1px',
                borderTopStyle: 'solid',
                borderTopColor: COLORS.border,
                paddingTop: '24px',
              },
              children: 'agustinmusanti.github.io',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Space Grotesk', data: spaceGrotesk700, weight: 700, style: 'normal' },
        { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: jetBrainsMono500, weight: 500, style: 'normal' },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return resvg.render().asPng();
}
