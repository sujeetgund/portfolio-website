import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Sujeet Gund's Resume",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
