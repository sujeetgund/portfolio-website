import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { profileData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Section } from './section';

export function ProfileSection() {
  return (
    <Section id="profile" className="bg-muted">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="relative mx-auto h-48 w-48 md:h-64 md:w-64">
          <Image
            src={profileData.image.src}
            alt={profileData.name}
            width={400}
            height={400}
            priority
            data-ai-hint={profileData.image.hint}
            className="rounded-full object-cover border-4 border-background shadow-lg"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            {profileData.name}
          </h1>
          <p className="mt-2 text-xl md:text-2xl font-medium text-foreground/80">
            {profileData.title}
          </p>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{profileData.location}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {profileData.contacts.map((contact) => (
              <Button asChild variant="outline" size="sm" key={contact.label}>
                <Link href={contact.value} target="_blank" rel="noopener noreferrer">
                  <contact.icon className="mr-2 h-4 w-4" />
                  {contact.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
