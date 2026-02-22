import {
  ArrowLeft,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";
import { profileData, projectsData } from "@/lib/data";

export function LinkedInPostGeneratorAgentSystemPage() {
  const emailLink =
    profileData.contacts.find((c) => c.label === "Email")?.value || "#";
  const linkedinLink =
    profileData.contacts.find((c) => c.label === "LinkedIn")?.value || "#";
  const project = projectsData.find(
    (p) => p.slug === "linkedin-post-generator-agent-system",
  );
  const architectureChart = `flowchart TD
    U["User Input: Intent + Details"] --> M["Manager Agent"]
    M --> S1["Story Agent"]
    M --> S2["Hashtag Agent"]
    M --> S3["Post Agent"]
    M --> S4["Image Agent - Optional"]
    S1 --> O1["Behind Story"]
    S2 --> O2["Hashtag Set"]
    O1 --> S3
    O2 --> S3
    S3 --> FP["Final LinkedIn Post"]
    S4 --> IMG["Generated Image"]
    FP --> R["Review Output"]
    IMG --> R`;

  return (
    <div className="bg-muted min-h-dvh">
      <div className="container mx-auto max-w-4xl px-3 sm:px-4 py-4 sm:py-8 md:py-12">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <div className="bg-card p-3 sm:p-6 md:p-10 rounded-xl shadow-lg">
          <header className="mb-6 sm:mb-8 text-center">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
              LinkedIn Post Generator Agent System
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80 text-sm sm:text-base leading-relaxed">
              A modular, agent-based system that crafts polished LinkedIn posts
              through orchestrated phases: understanding intent, generating a
              behind-the-scenes story, optimizing hashtags, drafting the final
              post, and optionally creating a matching image.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/sujeetgund/linkedin-post-generator-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                View Code
              </a>
            </div>
          </header>

          <section className="mb-6 sm:mb-8">
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <h2 className="font-bold text-sm mb-2 text-primary">TL;DR</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                I built this system to help people avoid generic AI-sounding
                posts and produce content that better reflects their voice,
                intent, and goals. A manager agent coordinates specialist
                sub-agents so every post feels intentional, professional, and
                personalized.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Problem → Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              <div className="border-l-4 border-destructive p-3 sm:p-4 rounded-r-lg bg-destructive/10">
                <h3 className="font-bold text-sm sm:text-base text-destructive-foreground/90 mb-2">
                  Problem
                </h3>
                <p className="text-sm text-destructive-foreground/80 leading-relaxed">
                  Many AI-assisted LinkedIn posts look similar and lose personal
                  voice. Creators need support that improves quality without
                  flattening authenticity.
                </p>
              </div>
              <div className="border-l-4 border-primary p-3 sm:p-4 rounded-r-lg bg-primary/10">
                <h3 className="font-bold text-sm sm:text-base text-primary mb-2">
                  Solution
                </h3>
                <p className="text-sm text-primary/90 leading-relaxed">
                  A Google ADK-based multi-agent workflow where each specialist
                  handles one phase of writing, while a manager agent
                  orchestrates the full pipeline and returns a cohesive final
                  post.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Workflow Phases
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Phase 1: Gather user intent and context",
                "Phase 2: Generate an engaging behind story",
                "Phase 3: Suggest relevant, discoverable hashtags",
                "Phase 4: Craft a complete polished LinkedIn post",
                "Phase 5 (optional): Generate an image prompt and asset",
              ].map((phase) => (
                <div key={phase} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {phase}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Agent Design
            </h2>
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Sparkles className="h-4 w-4" />
                <h3 className="font-bold text-sm">Manager + Specialists</h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                The manager agent delegates tasks to focused sub-agents for
                story generation, hashtag selection, final post composition, and
                optional image creation.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                This modular setup keeps each responsibility clear, improves
                maintainability, and makes it easy to iterate on one stage
                without rewriting the entire system.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Tech Stack
            </h2>
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <div className="flex flex-wrap gap-2 mb-3">
                {project?.tech?.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-bold text-foreground">Runtime:</span>{" "}
                Python-based service orchestrated with Google ADK, using Gemini
                APIs for content generation and optional image workflows with
                Cloudinary integration.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Quickstart
            </h2>
            <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md font-code text-xs overflow-x-auto leading-relaxed">
              <pre>{`# Clone the repository
git clone https://github.com/sujeetgund/linkedin-post-generator-agent.git
cd linkedin-post-generator-agent

# Python setup
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt

# Configure secrets
cd linkedin_post_agent
copy .env.example .env

# Add required keys in .env
# GOOGLE_API_KEY=...
# CLOUDINARY_CLOUD_NAME=...
# CLOUDINARY_API_KEY=...
# CLOUDINARY_API_SECRET=...

# Run the agent system
python -m linkedin_post_agent

# Optional: ADK web UI
adk web`}</pre>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Architecture Diagram
            </h2>
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <MermaidDiagram
                chart={architectureChart}
                className="w-full overflow-x-auto"
              />
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Manager agent orchestrates specialist sub-agents and combines
                outputs into a final post, with optional image generation.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-primary">
                  Content Quality
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  The phased workflow creates clearer, more compelling posts by
                  separating idea capture, storytelling, and final composition.
                </p>
              </div>
              <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-primary">
                  Modular Evolution
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Individual sub-agents can be improved independently, making
                  the system easier to maintain and extend over time.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-muted/50 p-4 sm:p-6 rounded-lg text-center">
              <h2 className="font-headline text-lg sm:text-xl font-bold mb-2">
                Interested in This Work?
              </h2>
              <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-4 leading-relaxed">
                I enjoy building practical multi-agent systems for real-world
                creator workflows. Let&apos;s connect and discuss collaboration.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px] h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <a href={emailLink}>
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px] h-11 font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
