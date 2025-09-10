import { PhishDetectorPage } from '@/components/phishdetector-page';
import { Footer } from '@/components/footer';

export default function PhishDetectorProjectPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-muted">
      <main className="flex-1">
        <PhishDetectorPage />
      </main>
      <Footer />
    </div>
  );
}
