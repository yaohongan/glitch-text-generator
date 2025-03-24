import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Glitch Text Generator - Create Cool Glitch Text Effects Online',
  description: 'Free online glitch text generator. Create zalgo text, vaporwave text, matrix text effects. Easy to use text glitch maker with real-time preview. No registration required.',
  keywords: 'glitch text generator, text glitch maker, zalgo text generator, vaporwave text, glitch text effects, text effects generator, matrix text generator',
  openGraph: {
    title: 'Glitch Text Generator - Create Cool Text Effects',
    description: 'Transform your text with cool glitch effects. Create zalgo, vaporwave, matrix text effects instantly.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
