"use client";

import { ProfileSection } from "@/components/profile-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";
import { OpenToWorkModal } from "@/components/open-to-work-modal";
import CardNav from "@/components/CardNav";
import { cardNavData } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-muted relative">
      <CardNav
        logo={cardNavData.logo}
        logoAlt={cardNavData.logoAlt}
        items={cardNavData.items}
        baseColor="#ffffff"
        menuColor="#1a1a2e"
        buttonBgColor="#1a1a2e"
        buttonTextColor="#ffffff"
      />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl bg-card p-4 sm:p-6 md:p-12 rounded-lg shadow-lg my-4 sm:my-8">
          <ProfileSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <EducationSection />
        </div>
      </main>
      <Footer />
      <OpenToWorkModal />
    </div>
  );
}
