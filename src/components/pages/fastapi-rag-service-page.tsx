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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profileData, projectsData } from "@/lib/data";

export function FastApiRagServicePage() {
  const emailLink =
    profileData.contacts.find((c) => c.label === "Email")?.value || "#";
  const linkedinLink =
    profileData.contacts.find((c) => c.label === "LinkedIn")?.value || "#";
  const project = projectsData.find((p) => p.slug === "fastapi-rag-service");

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
              FastAPI RAG Service
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80 text-sm sm:text-base leading-relaxed">
              A high-performance document question-answering service built with
              FastAPI and LangChain, implementing Retrieval-Augmented Generation
              (RAG) for intelligent document analysis.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/sujeetgund/fastapi-rag-service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-black text-white hover:bg-black/90"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                View Code
              </a>
              <a
                href="https://hackrx-rag-app.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl focus:outline-none focus-visible:ring focus-visible:ring-offset-2 bg-muted text-foreground hover:bg-muted/90 border border-border"
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                API Docs
              </a>
            </div>
          </header>

          <section className="mb-6 sm:mb-8">
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <h2 className="font-bold text-sm mb-2 text-primary">TL;DR</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                This service allows users to upload documents via URL and ask
                multiple questions about the content. Using advanced RAG
                techniques with LangChain, it provides accurate, context-aware
                answers by retrieving relevant document sections and generating
                responses.
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
                  The challenge was to build a RAG system to process insurance
                  policy documents and answer questions against them, evaluated
                  through multiple tests with documents and queries provided in
                  each request.
                </p>
              </div>
              <div className="border-l-4 border-primary p-3 sm:p-4 rounded-r-lg bg-primary/10">
                <h3 className="font-bold text-sm sm:text-base text-primary mb-2">
                  Solution
                </h3>
                <p className="text-sm text-primary/90 leading-relaxed">
                  A robust FastAPI service that accepts a document URL and a
                  list of questions. It uses LangChain for an efficient RAG
                  pipeline to deliver accurate answers, all served through a
                  scalable, containerized API.
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
                "Dynamic Document Processing",
                "Multi-Question Support",
                "RESTful API",
                "Advanced RAG Pipeline",
                "Dockerized Deployment",
                "Full Pydantic Type-Safety",
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
                A clean, modular FastAPI application with dedicated services for
                document processing and Q&A, ensuring scalability and
                maintainability.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              Role & Credits
            </h2>
            <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center text-primary mb-2">
                <Award className="mr-2 h-5 w-5" />
                <h3 className="font-bold text-sm">
                  HackRx 6.0 Hackathon (2025)
                </h3>
              </div>
              <p className="text-sm text-foreground/80 mb-2 leading-relaxed">
                This project was developed for the HackRx 6.0 hackathon
                organized by Bajaj Finserv Health Limited.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                <span className="font-medium text-foreground">My Role:</span> I
                was the sole developer responsible for designing the
                architecture, implementing the RAG pipeline with LangChain,
                building the FastAPI service, and containerizing the application
                with Docker.
              </p>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="font-headline text-lg sm:text-xl font-bold mb-3">
              API Usage
            </h2>
            <div className="bg-gray-900 text-white p-3 sm:p-4 rounded-md font-code text-xs overflow-x-auto leading-relaxed">
              <h4 className="font-bold mb-2">POST `/hackrx/run`</h4>
              <pre>{`curl -X POST "https://hackrx-rag-app.onrender.com/hackrx/run" \\
  -H "Content-Type: application/json" \\
  -d '{
    "documents": "https://example.com/document.pdf",
    "questions": [
      "What is the main topic?",
      "What are the key findings?"
    ]
  }'`}</pre>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Visit the interactive Swagger UI at the{" "}
              <a
                href="https://hackrx-rag-app.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                API Docs
              </a>
              .
            </p>
          </section>

          <section>
            <div className="bg-muted/50 p-4 sm:p-6 rounded-lg text-center">
              <h2 className="font-headline text-lg sm:text-xl font-bold mb-2">
                Interested in This Work?
              </h2>
              <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-4 leading-relaxed">
                I'm passionate about building intelligent systems with LLMs and
                RAG. Let's discuss how we can build something impactful
                together.
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
