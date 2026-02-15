"use client";

import dynamic from "next/dynamic";

// Dynamic imports for below-the-fold sections (code splitting)
const ProjectsSection = dynamic(() =>
  import("@/components/sections/projects-section").then((mod) => ({
    default: mod.ProjectsSection,
  })),
);
const SkillsSection = dynamic(() =>
  import("@/components/sections/skills-section").then((mod) => ({
    default: mod.SkillsSection,
  })),
);
const CertificationsSection = dynamic(() =>
  import("@/components/sections/certifications-section").then((mod) => ({
    default: mod.CertificationsSection,
  })),
);
const EducationSection = dynamic(() =>
  import("@/components/sections/education-section").then((mod) => ({
    default: mod.EducationSection,
  })),
);

export function LazySections() {
  return (
    <>
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
    </>
  );
}
