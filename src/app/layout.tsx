import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import { Newsreader } from 'next/font/google';
import { profileData } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader' });

const siteUrl = process.env.SITE_URL || 'https://your-domain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sujeet Gund | AI Engineer',
    template: '%s | Sujeet Gund',
  },
  description: profileData.title,
  keywords: ['AI Engineer', 'Machine Learning', 'Generative AI', 'Portfolio', 'Sujeet Gund'],
  authors: [{ name: 'Sujeet Gund', url: siteUrl }],
  creator: 'Sujeet Gund',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Sujeet Gund | AI Engineer',
    description: profileData.title,
    siteName: 'Sujeet Gund Portfolio',
    images: [
      {
        url: `${siteUrl}/Sujeet Gund.jpg`,
        width: 800,
        height: 600,
        alt: 'Sujeet Gund',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sujeet Gund | AI Engineer',
    description: profileData.title,
    images: [`${siteUrl}/Sujeet Gund.jpg`],
    creator: '@sujeetgund', // Replace with your actual Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable} ${newsreader.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
