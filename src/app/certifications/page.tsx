import { CertificationsPage } from "@/components/pages/certifications-page";
import type { Metadata } from "next";

const siteUrl = process.env.SITE_URL || "https://sujeetgund.in";
const pagePath = "/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications in AI, Machine Learning, Data Science, and Cloud Technologies",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}${pagePath}`,
    title: "Certifications | Sujeet Gund",
    description:
      "Professional certifications in AI, Machine Learning, Data Science, and Cloud Technologies",
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
    title: "Certifications | Sujeet Gund",
    description:
      "Professional certifications in AI, Machine Learning, Data Science, and Cloud Technologies",
    images: [`${siteUrl}/sujeetgund.jpg`],
    creator: "@Sujeet_Gund",
  },
};

export default function CertificationsRoute() {
  return <CertificationsPage />;
}
