"use client";

import {
  ArrowLeft,
  Github,
  CheckCircle2,
  ExternalLink,
  Award,
  Mail,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { profileData, projectsData } from "@/lib/data";

export function IpdrGraphEnginePage() {
  const emailLink =
    profileData.contacts.find((c) => c.label === "Email")?.value || "#";
  const linkedinLink =
    profileData.contacts.find((c) => c.label === "LinkedIn")?.value || "#";
  const project = projectsData.find((p) => p.slug === "ipdr-graph-engine");

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
              IPDR Graph Engine
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80 text-sm sm:text-base leading-relaxed">
              A web-based investigative platform that transforms complex
              telecommunications IPDR data into actionable intelligence through
              ML-powered anomaly detection.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/sujeetgund/ipdr-graph-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                View Code
              </a>
              <a
                href="https://ipdr-graph-engine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-muted text-foreground border border-border hover:bg-muted/80"
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                Live Demo
              </a>
            </div>
          </header>

          <section className="mb-6 sm:mb-8">
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <h2 className="font-bold text-sm mb-2 text-primary">TL;DR</h2>
              <p className="text-sm sm:text-sm text-foreground/80 leading-relaxed">
                This platform ingests heterogeneous IPDR logs, constructs
                communication graphs, and applies ML-based anomaly detection
                (94.16% accuracy) to deliver interactive visualizations. It
                features multi-format support, real-time processing, and
                end-to-end encryption.
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
                  Manual analysis of massive IPDR data is inefficient and
                  inaccessible to non-technical stakeholders, making it
                  difficult to detect fraud and respond to security incidents
                  quickly.
                </p>
              </div>
              <div className="border-l-4 border-primary p-3 sm:p-4 rounded-r-lg bg-primary/10">
                <h3 className="font-bold text-sm sm:text-base text-primary mb-2">
                  Solution
                </h3>
                <p className="text-sm text-primary/90 leading-relaxed">
                  An integrated platform that automates data parsing, applies ML
                  for anomaly detection, and provides interactive graph
                  visualizations for intuitive investigation and reporting.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                "Multi-Format Data Upload",
                "AI-Powered Anomaly Detection",
                "Interactive 2D & 3D Graphs",
                "Automated Relationship Mapping",
                "Comprehensive Reports History",
                "Search & Isolate Functionality",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Tech Stack</h2>
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex flex-wrap gap-2 mb-3">
                {project?.tech &&
                  project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-bold text-foreground">Architecture:</span>{" "}
                A decoupled frontend and backend with a FastAPI serving ML
                models and a Next.js client for interactive visualizations.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">
              Role & Credits
            </h2>
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center text-primary mb-2">
                <Award className="mr-2 h-5 w-5" />
                <h3 className="font-bold text-sm">
                  CIIS 2025 Hackathon Project
                </h3>
              </div>
              <p className="text-sm text-foreground/80 mb-2 leading-relaxed">
                This project was developed for the CIIS 2025 Hackathon to
                address the challenge of "Mapping A-Party to B-Party in IPDR
                Logs." I was part of a 5-member team, "Team Brigade," from VIT
                Bhopal University.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-medium text-foreground">My Role:</span> My
                primary responsibilities included developing the backend
                infrastructure with FastAPI, integrating the ML models, and
                designing the API for the frontend to consume.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Quickstart</h2>
            <div className="bg-gray-900 text-white p-4 rounded-md font-code text-xs overflow-x-auto">
              <pre>{`# Clone the repository
git clone https://github.com/sujeetgund/ipdr-graph-engine.git
cd ipdr-graph-engine

# Backend setup
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend setup (in a new terminal)
cd frontend
npm install
npm start`}</pre>
            </div>
          </section>

          <section>
            <div className="bg-muted/50 p-4 sm:p-6 rounded-lg text-center">
              <h2 className="font-headline text-lg sm:text-xl font-bold mb-2">
                Interested in This Work?
              </h2>
              <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-4 leading-relaxed">
                I'm passionate about leveraging AI and graph technologies to
                solve complex data challenges. Let's discuss how we can build
                something impactful together.
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
                  size="lg"
                  className="w-full sm:w-auto min-w-[180px] h-11 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold shadow-md hover:shadow-lg transition-all"
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
