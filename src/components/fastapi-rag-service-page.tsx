'use client';

import {
  ArrowLeft,
  Github,
  CheckCircle2,
  ExternalLink,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from '@/components/ui/button';
import { profileData } from '@/lib/data';

export function FastApiRagServicePage() {
  const emailLink = profileData.contacts.find(c => c.label === 'Email')?.value || '#';
  const linkedinLink = profileData.contacts.find(c => c.label === 'LinkedIn')?.value || '#';

  return (
    <div className="bg-muted min-h-dvh">
      <div className="container mx-auto max-w-4xl px-4 py-4 sm:py-8 md:py-12">
        <Button asChild variant="ghost" size="sm" className="mb-4 text-muted-foreground hover:text-foreground">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <div className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
          <header className="mb-8 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">
              FastAPI RAG Service
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80 text-base">
              A high-performance document question-answering service built with FastAPI and LangChain, implementing Retrieval-Augmented Generation (RAG) for intelligent document analysis.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Button asChild>
                <Link href="https://github.com/sujeetgund/fastapi-rag-service" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  View Code
                </Link>
              </Button>
               <Button asChild variant="outline">
                <Link href="https://hackrx-rag-app.onrender.com/docs" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" />
                  API Docs
                </Link>
              </Button>
            </div>
          </header>

          <section className="mb-8">
             <div className="bg-muted/50 p-4 rounded-lg">
              <h2 className="font-bold text-sm mb-1 text-primary">TL;DR</h2>
              <p className="text-sm text-foreground/80">
                This service allows users to upload documents via URL and ask multiple questions about the content. Using advanced RAG techniques with LangChain, it provides accurate, context-aware answers by retrieving relevant document sections and generating responses.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Problem → Solution</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-destructive p-4 rounded-r-lg bg-destructive/10">
                <h3 className="font-bold text-destructive-foreground/90 mb-2">Problem</h3>
                <p className="text-sm text-destructive-foreground/80">The challenge was to build a RAG system to process insurance policy documents and answer questions against them, evaluated through multiple tests with documents and queries provided in each request.</p>
              </div>
              <div className="border-l-4 border-primary p-4 rounded-r-lg bg-primary/10">
                <h3 className="font-bold text-primary mb-2">Solution</h3>
                <p className="text-sm text-primary/90">A robust FastAPI service that accepts a document URL and a list of questions. It uses LangChain for an efficient RAG pipeline to deliver accurate answers, all served through a scalable, containerized API.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Dynamic Document Processing',
                'Multi-Question Support',
                'RESTful API',
                'Advanced RAG Pipeline',
                'Dockerized Deployment',
                'Full Pydantic Type-Safety',
              ].map(feature => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Tech Stack</h2>
             <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">LangChain</Badge>
                    <Badge variant="secondary">Pydantic</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Python</Badge>
                </div>
                <p className="text-sm text-foreground/80"><span className="font-bold text-foreground">Architecture:</span> A clean, modular FastAPI application with dedicated services for document processing and Q&A, ensuring scalability and maintainability.</p>
             </div>
          </section>
          
          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Role & Credits</h2>
             <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center text-primary mb-2">
                    <Award className="mr-2 h-5 w-5"/>
                    <h3 className="font-bold text-sm">HackRx 6.0 Hackathon (2025)</h3>
                </div>
                <p className="text-sm text-foreground/80 mb-2">
                  This project was developed for the HackRx 6.0 hackathon organized by Bajaj Finserv Health Limited.
                </p>
                 <p className="text-sm text-foreground/80"><span className="font-medium text-foreground">My Role:</span> I was the sole developer responsible for designing the architecture, implementing the RAG pipeline with LangChain, building the FastAPI service, and containerizing the application with Docker.</p>
             </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">API Usage</h2>
            <div className="bg-gray-900 text-white p-4 rounded-md font-code text-xs overflow-x-auto">
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
            <p className="text-xs text-muted-foreground mt-2">Visit the interactive Swagger UI at the <a href="https://hackrx-rag-app.onrender.com/docs" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">API Docs</a>.</p>
          </section>

          <section>
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <h2 className="font-headline text-xl font-bold mb-2">Interested in This Work?</h2>
              <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-4">I'm passionate about building intelligent systems with LLMs and RAG. Let's discuss how we can build something impactful together.</p>
              <div className="flex items-center justify-center gap-4">
                <Button asChild>
                  <a href={emailLink}>
                    Get in Touch
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
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
