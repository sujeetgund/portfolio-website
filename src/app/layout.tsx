import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';
import { Newsreader } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader' });

export const metadata: Metadata = {
  title: 'Sujeet Gund | AI Engineer',
  description: 'Portfolio of Sujeet Gund, an AI Engineer',
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
