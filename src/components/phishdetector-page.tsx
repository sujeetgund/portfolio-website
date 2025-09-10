'use client';

import {
  ArrowLeft,
  Github,
} from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from '@/components/ui/button';

export function PhishDetectorPage() {
  return (
    <div className="bg-muted min-h-dvh">
      <div className="container mx-auto max-w-4xl py-4 sm:py-8 md:py-12">
        <Button asChild variant="ghost" size="sm" className="mb-4 text-muted-foreground hover:text-foreground">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <div className="bg-card p-4 sm:p-6 md:p-10 rounded-xl shadow-lg">
          <header className="mb-8 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">
              PhishDetector
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80 text-base">
              End-to-end ML system that detects phishing websites with 97.11% accuracy, protecting users from fraudulent sites through real-time API inference.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="https://github.com/sujeetgund/phishing-website-detection" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  View Code
                </Link>
              </Button>
            </div>
          </header>

          <section className="mb-8">
             <div className="bg-muted/50 p-4 rounded-lg">
              <h2 className="font-bold text-sm mb-1 text-primary">TL;DR</h2>
              <p className="text-sm text-foreground/80">
                I built a complete phishing detection pipeline using a Random Forest model, achieving 97.11% accuracy. The system processes URL features, trains on 30 website attributes, and serves predictions via a FastAPI, all containerized with Docker for scalable deployment.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Problem → Solution</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-destructive p-4 rounded-r-lg bg-destructive/10">
                <h3 className="font-bold text-destructive-foreground/90 mb-2">Problem</h3>
                <p className="text-sm text-destructive-foreground/80">Phishing websites steal sensitive user data by mimicking legitimate sites. Traditional detection methods are often slow and fail to catch sophisticated attacks, leaving users vulnerable.</p>
              </div>
              <div className="border-l-4 border-primary p-4 rounded-r-lg bg-primary/10">
                <h3 className="font-bold text-primary mb-2">Solution</h3>
                <p className="text-sm text-primary/90">I developed an ML pipeline that analyzes 30 URL and metadata features using Random Forest, achieving 97.11% accuracy with a real-time FastAPI deployment for instant protection.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Tech Stack</h2>
             <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">scikit-learn</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Random Forest</Badge>
                </div>
                <p className="text-sm text-foreground/80"><span className="font-bold text-foreground">Architecture:</span> Modular pipeline with separate components for ingestion, validation, training, and inference. FastAPI provides a lightweight, high-performance API.</p>
             </div>
          </section>
          
          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Quickstart</h2>
            <div className="bg-gray-900 text-white p-4 rounded-md font-code text-xs overflow-x-auto">
              <pre>{`# Clone and setup
git clone https://github.com/sujeetgund/phishing-website-detection.git
cd phishing-website-detection
pip install -r requirements.txt

# Run API server
uvicorn run_api:app --reload`}</pre>
            </div>
          </section>

          <section>
            <div className="bg-muted/50 p-6 rounded-lg text-center">
              <h2 className="font-headline text-xl font-bold mb-2">Interested in This Work?</h2>
              <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-4">I'm passionate about building ML systems that solve real-world security problems. Let's discuss how we can collaborate.</p>
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
