import { CertificationsPage } from "@/components/pages/certifications-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications - Sujeet Gund",
  description:
    "Professional certifications in AI, Machine Learning, Data Science, and Cloud Technologies",
  alternates: {
    canonical: "/certifications",
  },
};

export default function CertificationsRoute() {
  return <CertificationsPage />;
}
