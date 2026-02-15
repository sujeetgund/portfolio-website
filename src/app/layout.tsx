import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { Newsreader } from "next/font/google";
import { siteMetadata } from "@/lib/site-metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const siteUrl = process.env.SITE_URL || "https://sujeetgund.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sujeet Gund | AI Engineer",
    template: "%s | Sujeet Gund",
  },
  description: siteMetadata.title,
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "Portfolio",
    "Sujeet Gund",
  ],
  authors: [{ name: "Sujeet Gund", url: siteUrl }],
  creator: "Sujeet Gund",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Sujeet Gund | AI Engineer",
    description: siteMetadata.title,
    siteName: "Sujeet Gund Portfolio",
    images: [
      {
        url: `${siteUrl}/sujeetgund.jpg`,
        width: 800,
        height: 600,
        alt: "Sujeet Gund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujeet Gund | AI Engineer",
    description: siteMetadata.title,
    images: [`${siteUrl}/sujeetgund.jpg`],
    creator: "@Sujeet_Gund",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${inter.variable} ${newsreader.variable}`}
    >
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
