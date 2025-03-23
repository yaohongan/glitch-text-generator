import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Glitch Text Generator | Create Zalgo & Distorted Text Effects",
  description: "Transform ordinary text into eye-catching glitch text with our free online glitch text generator. Create zalgo text, distorted fonts, and cool text effects for social media, usernames, and design projects.",
  keywords: "glitch text generator, zalgo text, distorted text, text effects, glitch font, fancy text, text generator, copy and paste fonts",
  authors: [{ name: "Glitch Text Generator Team" }],
  openGraph: {
    title: "Free Glitch Text Generator | Create Zalgo & Distorted Text Effects",
    description: "Transform ordinary text into eye-catching glitch text with our free online glitch text generator. Create zalgo text, distorted fonts, and cool text effects for social media, usernames, and design projects.",
    url: "https://glitchtextgenerator.com",
    siteName: "Glitch Text Generator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Glitch Text Generator | Create Zalgo & Distorted Text Effects",
    description: "Transform ordinary text into eye-catching glitch text with our free online glitch text generator. Create zalgo text, distorted fonts, and cool text effects for social media, usernames, and design projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
