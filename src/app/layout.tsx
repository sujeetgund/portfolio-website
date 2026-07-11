import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import { Newsreader } from "next/font/google";
import { siteConfig } from "@/lib/data";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.creator}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.defaultKeywords,
  authors: [{ name: siteConfig.creator, url: siteConfig.siteUrl }],
  creator: siteConfig.creator,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
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
      <GoogleTagManager gtmId="GTM-P2ZJJ7SG" />
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
