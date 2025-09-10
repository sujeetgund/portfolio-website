import Link from 'next/link';
import { profileData } from '@/lib/data';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground">
      <div className="container mx-auto max-w-screen-2xl px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold text-foreground">
              {profileData.name}
            </h3>
            <p className="mt-1">© {new Date().getFullYear()}. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-2">
            {profileData.contacts.map((contact) => (
              <Button asChild variant="ghost" size="icon" key={contact.label}>
                <Link href={contact.value} target="_blank" rel="noopener noreferrer">
                  <contact.icon className="h-5 w-5" />
                  <span className="sr-only">{contact.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
