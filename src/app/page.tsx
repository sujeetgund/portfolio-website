import { Header } from '@/components/header';
import { ProfileSection } from '@/components/profile-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { CertificationsSection } from '@/components/certifications-section';
import { EducationSection } from '@/components/education-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-muted">
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto max-w-4xl bg-card p-6 md:p-12 rounded-lg shadow-lg">
          <ProfileSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <EducationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
