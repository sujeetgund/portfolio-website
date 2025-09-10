import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Section } from './section';

export function ProfileSection() {
  return (
    <Section id="profile" className="pt-0">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            {profileData.name}
          </h1>
          <p className="mt-2 text-lg text-foreground/80">
            {profileData.title}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profileData.location}
          </p>
          <div className="mt-4 flex items-center justify-center sm:justify-start gap-1">
            {profileData.contacts.map((contact) => (
              <Button asChild variant="ghost" size="icon" key={contact.label}>
                <Link href={contact.value} target="_blank" rel="noopener noreferrer">
                  <contact.icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  <span className="sr-only">{contact.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative h-32 w-32 md:h-36 md:w-36 shrink-0">
          <Image
            src={profileData.image.src}
            alt={profileData.name}
            width={200}
            height={200}
            priority
            data-ai-hint={profileData.image.hint}
            className="rounded-full object-cover border-4 border-background shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
}
