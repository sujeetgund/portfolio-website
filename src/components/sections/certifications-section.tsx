import { certificationsData } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <SectionHeader title="Certifications" />
      <div className="space-y-3">
        {certificationsData.map((cert, index) => (
          <Link
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <p className="text-sm font-medium group-hover:text-primary transition-colors">
              {cert.name}{" "}
              <span className="text-muted-foreground">by {cert.issuer}</span>
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
