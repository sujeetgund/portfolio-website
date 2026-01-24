"use client";

import { ArrowLeft, Github, CheckCircle2, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { profileData, projectsData } from "@/lib/data";

export function SubscriptionTrackerPage() {
  const emailLink =
    profileData.contacts.find((c) => c.label === "Email")?.value || "#";
  const linkedinLink =
    profileData.contacts.find((c) => c.label === "LinkedIn")?.value || "#";
  const project = projectsData.find((p) => p.slug === "subscription-tracker");

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
              Subscription Tracker API
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80 text-sm sm:text-base leading-relaxed">
              A RESTful API to manage users and subscriptions with user
              authentication, subscription tracking, and renewal reminders.
              Built with Node.js and Docker.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/sujeetgund/subscription-tracker-api"
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
                I built a scalable RESTful API using Node.js for managing user
                subscriptions. It features JWT authentication, full CRUD
                operations, and automated renewal notifications. The entire
                system is containerized with Docker for easy deployment and
                CI/CD integration.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Tech Stack
            </h2>
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
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
                Modular design with a focus on scalability and maintainability.
                Docker Compose simplifies local development setup.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                "User authentication (Sign up, Sign in, Sign out)",
                "Manage users and subscriptions (CRUD)",
                "Track upcoming subscription renewals",
                "Docker support for easy deployment",
                "Modern JavaScript (Node.js, ES6+)",
                "pnpm support for faster package management",
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

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              API Endpoints
            </h2>
            <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md font-code text-xs overflow-x-auto leading-relaxed">
              <h4 className="font-bold mb-2">
                Authentication (`/api/v1/auth`)
              </h4>
              <pre className="mb-4">{`POST /sign-up\nPOST /sign-in\nPOST /sign-out`}</pre>
              <h4 className="font-bold mb-2">Users (`/api/v1/users`)</h4>
              <pre className="mb-4">{`GET /\nGET /:id\nPOST /\nPUT /:id\nDELETE /:id`}</pre>
              <h4 className="font-bold mb-2">
                Subscriptions (`/api/v1/subscriptions`)
              </h4>
              <pre>{`GET /\nGET /:id\nPOST /\nPUT /:id\nDELETE /:id\nGET /user/:id\nPUT /:id/cancel\nGET /upcoming-renewals`}</pre>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              For full details, check out the API documentation on GitHub.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Quickstart
            </h2>
            <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md font-code text-xs overflow-x-auto leading-relaxed">
              <pre>{`# Clone and setup
git clone https://github.com/sujeetgund/subscription-tracker.git
cd subscription-tracker
cp .env.example .env.development.local

# Run with Docker
docker-compose up

# Or run locally
pnpm install
pnpm run dev`}</pre>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Role & Credits
            </h2>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-primary">
                  My Role
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  I was the sole developer for this project, responsible for the
                  entire backend architecture, API design, and Docker
                  implementation.
                </p>
              </div>
              <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-primary">
                  Credits
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  This was a personal project built from scratch to practice
                  backend development and API design.
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
                I enjoy creating scalable backend systems. If you have a similar
                project in mind, let's connect and discuss how I can help.
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
