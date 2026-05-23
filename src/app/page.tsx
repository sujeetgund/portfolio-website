import { ProfileSection } from "@/components/sections/profile-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/layout/footer";
import { HomeClientShell } from "@/components/home-client-shell";
import { LazySections } from "@/components/lazy-sections";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#ffffff] text-[#1a1a1a] relative font-body overflow-x-hidden">
      <HomeClientShell />
      <main className="flex-1 w-full">
        <ProfileSection />
        <AboutSection />
        <LazySections />
      </main>
      <Footer />
    </div>
  );
}
