'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Github,
  FileText,
  Lightbulb,
  CheckCircle2,
  GitBranch,
  Rocket,
  Wrench,
  BookOpen,
  Box,
  BrainCircuit,
  Database,
  Users,
  AlertTriangle,
  Target,
  FlaskConical,
  Linkedin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function PhishDetectorPage() {
  return (
    <div className="bg-muted min-h-dvh">
      <div className="container mx-auto max-w-4xl py-8 md:py-12">
        <Button asChild variant="ghost" size="sm" className="mb-4 text-muted-foreground hover:text-foreground">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        <div className="bg-card p-6 md:p-10 rounded-xl shadow-lg">
          <header className="mb-8 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">
              PhishDetector
            </h1>
            <p className="max-w-3xl mx-auto text-foreground/80">
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
            <div className="bg-muted p-4 rounded-lg">
              <h2 className="font-bold text-sm mb-1 text-primary">TL;DR</h2>
              <p className="text-sm text-foreground/80">
                I built a complete phishing detection pipeline using Random Forest ML model, achieving 97.11% accuracy. The system processes URL features, trains on 30 website attributes, and serves predictions via FastAPI, fully containerized with Docker for scalable deployment.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Demo</h2>
            <div className="border rounded-lg p-4">
              <p className="text-sm font-medium mb-2 flex items-center"><Rocket className="mr-2 h-4 w-4 text-primary" /> API Demo</p>
              <p className="text-sm text-muted-foreground mb-4">Real-time phishing detection API that analyzes website features and returns probability scores.</p>
              <div className="bg-gray-900 text-white p-4 rounded-md font-code text-xs overflow-x-auto">
                <pre>{`curl -X POST "http://localhost:8000/predict" \\
  -H "Content-Type: application/json" \\
  -d '{"features":[1,-1,1,1,-1,...,1]}'

{
  "prediction": "phishing",
  "confidence": 0.97
}`}</pre>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Problem → Solution</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h3 className="font-bold text-red-800 mb-2">Problem</h3>
                <p className="text-sm text-red-700">Phishing websites steal sensitive user data by mimicking legitimate sites. Traditional detection methods are slow and often miss sophisticated attacks.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">Solution</h3>
                <p className="text-sm text-green-700">I developed an ML pipeline that analyzes 30 URL/metadata features using Random Forest, achieving 97.11% accuracy with real-time FastAPI deployment.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground/80">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0"/>End-to-end ML pipeline with automated data validation</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0"/>Multi-model comparison (Random Forest, SVC, etc.)</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0"/>Real-time inference API with FastAPI framework</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0"/>Docker containerization for scalable deployment</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0"/>Comprehensive evaluation with detailed performance reports</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0"/>Modular architecture for easy maintenance and updates</div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Tech Stack & Architecture</h2>
             <div className="bg-muted p-4 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Python 3.10+</Badge>
                    <Badge variant="secondary">scikit-learn</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">pandas</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Random Forest</Badge>
                </div>
                <p className="text-sm text-foreground/80"><span className="font-bold text-foreground">Architecture:</span> Modular pipeline design with separate components for ingestion, validation, training, and inference. FastAPI provides a lightweight, high-performance API serving with automatic documentation generation.</p>
             </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Results & Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-800">97.11%</p>
                <p className="text-xs text-blue-600">Best Model Accuracy</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-3xl font-bold text-green-800">5</p>
                <p className="text-xs text-green-600">Models Compared</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <p className="text-3xl font-bold text-purple-800">30</p>
                <p className="text-xs text-purple-600">Feature Attributes</p>
              </div>
            </div>
             <p className="text-center text-sm text-muted-foreground mt-3">Random Forest outperformed SVC (96.29%), KNN (96.23%), Logistic Regression (92.70%), and Ridge (92.06%) with the most stable performance across validation folds.</p>
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
             <div className="text-center mt-3">
                 <Button asChild variant="link" size="sm" className="text-accent-foreground hover:text-primary">
                    <Link href="https://github.com/sujeetgund/phishing-website-detection/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                        View complete README
                        <ArrowLeft className="ml-1 h-3 w-3 -rotate-180" />
                    </Link>
                </Button>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Reproducibility Assets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border p-4 rounded-lg">
                <h3 className="font-bold mb-1">Dataset</h3>
                <p className="text-sm text-muted-foreground mb-2">UCI ML Repository - Phishing Websites</p>
                <Button asChild variant="link" size="sm" className="p-0 h-auto">
                  <a href="https://archive.ics.uci.edu/dataset/327/phishing+websites" target="_blank" rel="noopener noreferrer">
                    Download Dataset
                    <ArrowLeft className="ml-1 h-3 w-3 -rotate-180" />
                  </a>
                </Button>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-bold mb-1">Trained Model</h3>
                <p className="text-sm text-muted-foreground">Random Forest Classifier (97.11% accuracy)</p>
                <p className="text-sm text-muted-foreground">Available in <code className="bg-muted px-1 py-0.5 rounded text-xs">artifacts/models/model.pkl</code></p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Role & Credits</h2>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-foreground/80"><span className="font-bold text-foreground">Solo Project:</span> I designed and implemented the entire system from data ingestion to API deployment. This includes feature engineering, model selection evaluation framework, and containerized deployment architecture.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-3">Challenges & Lessons Learned</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-sm text-foreground/80"><span className="font-semibold">Feature engineering</span> required deep understanding of web security patterns and URL structure analysis.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-sm text-foreground/80"><span className="font-semibold">Model selection</span> involved balancing accuracy vs inference speed - Random Forest provided optimal trade-off.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</div>
                <p className="text-sm text-foreground/80"><span className="font-semibold">API design</span> needed careful consideration of input validation and error handling for production readiness.</p>
              </li>
            </ul>
          </section>

          <section>
            <div className="bg-muted p-6 rounded-lg text-center">
              <h2 className="font-headline text-xl font-bold mb-2">Interested in This Work?</h2>
              <p className="text-sm text-foreground/80 max-w-xl mx-auto mb-4">I'm passionate about building ML systems that solve real-world security problems. Let's discuss how we can collaborate on similar projects or explore opportunities together.</p>
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
