import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
//TODO manifest.json (dans public) et la const metadata à modifier avec les bonnes infos
export const metadata: Metadata = {
  title: 'Hesilearn',
  description: 'Hesilearn',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['hesilearn', 'pwa', 'next-pwa'],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  authors: [
    { name: '' },
    {
      name: '',
      url: 'https://www.linkedin.com/company/hesiodeio/',
    },
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
