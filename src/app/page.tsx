import { ProfileSection } from "@/components/sections/profile-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/layout/footer";
import { HomeClientShell } from "@/components/home-client-shell";
import { LazySections } from "@/components/lazy-sections";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-muted relative">
      <HomeClientShell />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl bg-card p-4 sm:p-6 md:p-12 rounded-lg shadow-lg my-4 sm:my-8">
          <ProfileSection />
          <AboutSection />
          <LazySections />
        </div>
      </main>
      <Footer />
    </div>
  );
}
