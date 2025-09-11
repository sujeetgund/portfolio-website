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

export function IpdrGraphEnginePage() {
  return (
    <div className="bg-muted min-h-dvh">
      <div className="container mx-auto max-w-4xl px-4 py-4 sm:py-8 md:py-12">
        <Button asChild variant="ghost" size="sm" className="mb-4 text-muted-foreground hover:text-foreground">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <div className="bg-card p-4 sm:p-6 md:p-10 rounded-xl shadow-lg">
          <header className="mb-8 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">
              IPDR Graph Engine
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80 text-base">
              A web-based investigative platform that transforms complex telecommunications IPDR data into actionable intelligence through ML-powered anomaly detection.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Button asChild>
                <Link href="https://github.com/sujeetgund/ipdr-graph-engine" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  View Code
                </Link>
              </Button>
               <Button asChild variant="outline">
                <Link href="https://ipdr-graph-engine.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </header>

          <section className="mb-8">
             <div className="bg-muted/50 p-4 rounded-lg">
              <h2 className="font-bold text-sm mb-1 text-primary">TL;DR</h2>
              <p className="text-sm text-foreground/80">
                This platform ingests heterogeneous IPDR logs, constructs communication graphs, and applies ML-based anomaly detection (94.16% accuracy) to deliver interactive visualizations. It features multi-format support, real-time processing, and end-to-end encryption.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Problem → Solution</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-destructive p-4 rounded-r-lg bg-destructive/10">
                <h3 className="font-bold text-destructive-foreground/90 mb-2">Problem</h3>
                <p className="text-sm text-destructive-foreground/80">Manual analysis of massive IPDR data is inefficient and inaccessible to non-technical stakeholders, making it difficult to detect fraud and respond to security incidents quickly.</p>
              </div>
              <div className="border-l-4 border-primary p-4 rounded-r-lg bg-primary/10">
                <h3 className="font-bold text-primary mb-2">Solution</h3>
                <p className="text-sm text-primary/90">An integrated platform that automates data parsing, applies ML for anomaly detection, and provides interactive graph visualizations for intuitive investigation and reporting.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Multi-Format Data Upload',
                'AI-Powered Anomaly Detection',
                'Interactive 2D & 3D Graphs',
                'Automated Relationship Mapping',
                'Comprehensive Reports History',
                'Search & Isolate Functionality',
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
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">scikit-learn</Badge>
                    <Badge variant="secondary">CatBoost</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Google Cloud</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                </div>
                <p className="text-sm text-foreground/80"><span className="font-bold text-foreground">Architecture:</span> A decoupled frontend and backend with a FastAPI serving ML models and a Next.js client for interactive visualizations.</p>
             </div>
          </section>
          
          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Role & Credits</h2>
             <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center text-primary mb-2">
                    <Award className="mr-2 h-5 w-5"/>
                    <h3 className="font-bold text-sm">CIIS 2025 Hackathon Project</h3>
                </div>
                <p className="text-sm text-foreground/80 mb-2">
                  This project was developed for the CIIS 2025 Hackathon to address the challenge of "Mapping A-Party to B-Party in IPDR Logs." I was part of a 5-member team, "Team Brigade," from VIT Bhopal University.
                </p>
                 <p className="text-sm text-foreground/80"><span className="font-medium text-foreground">My Role:</span> My primary responsibilities included developing the backend infrastructure with FastAPI, integrating the ML models, and designing the API for the frontend to consume.</p>
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
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <h2 className="font-headline text-xl font-bold mb-2">Interested in This Work?</h2>
              <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-4">I'm passionate about leveraging AI and graph technologies to solve complex data challenges. Let's discuss how we can build something impactful together.</p>
              <div className="flex items-center justify-center gap-4">
                <Button asChild>
                  <a href="mailto:sujeetgund@email.com">
                    Get in Touch
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://linkedin.com/in/sujeetgund" target="_blank" rel="noopener noreferrer">
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
