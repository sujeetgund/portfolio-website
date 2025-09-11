import { certificationsData } from '@/lib/data';
import { Section } from './section';
import { SectionHeader } from './section-header';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

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
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium group-hover:text-primary transition-colors">
                {cert.name}{' '}
                <span className="text-muted-foreground">
                  by {cert.issuer} - {cert.year}
                </span>
              </p>
              <ExternalLink className="hidden sm:block h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
