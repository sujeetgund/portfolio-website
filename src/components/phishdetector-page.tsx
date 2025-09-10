'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  Target,
  FileCode,
  BarChart,
  GitBranch,
  Box,
  Layers,
  Code,
  ArrowLeft,
  Github,
  CheckCircle,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { SectionHeader } from './section-header';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const heroImage = PlaceHolderImages.find((p) => p.id === 'phishdetector-hero');
const galleryImage1 = PlaceHolderImages.find((p) => p.id === 'phishdetector-gallery-1');
const galleryImage2 = PlaceHolderImages.find((p) => p.id === 'phishdetector-gallery-2');

const objectives = [
  'Ingest and validate the Phishing Websites dataset.',
  'Preprocess and transform features for machine learning readiness.',
  'Train multiple ML models (Random Forest, SVC, KNN, Logistic Regression, Ridge) and identify the best-performing one.',
  'Evaluate the best model on unseen data and document its performance.',
  'Deploy an API using FastAPI for real-time predictions on new website data.',
  'Provide clear documentation and modular code for reproducibility and future improvements.',
];

const techStack = [
  { category: 'Language', skills: ['Python 3.10+'] },
  { category: 'Libraries', skills: ['pandas', 'scikit-learn', 'fastapi'] },
  { category: 'Models', skills: ['Random Forest', 'Support Vector Machines', 'KNeighbours', 'Logistic Regression', 'Ridge'] },
  { category: 'API', skills: ['FastAPI'] },
  { category: 'Packaging', skills: ['Docker'] },
];

const results = [
    { model: 'RandomForest', fitTime: 1.02, testScore: 0.9711, std: 0.0041 },
    { model: 'SVC', fitTime: 5.03, testScore: 0.9629, std: 0.0064 },
    { model: 'KNeighbors', fitTime: 0.01, testScore: 0.9623, std: 0.0046 },
    { model: 'Logistic', fitTime: 0.1, testScore: 0.927, std: 0.0047 },
    { model: 'Ridge', fitTime: 0.01, testScore: 0.9206, std: 0.0053 },
];

export function PhishDetectorPage() {
  return (
    <>
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={heroImage?.imageUrl || ''}
          alt="PhishDetector Hero Image"
          data-ai-hint={heroImage?.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
      </div>
      <div className="container mx-auto max-w-5xl -mt-24 md:-mt-32">
        <Section className="bg-card p-6 md:p-12 rounded-lg shadow-lg relative">
            <Button asChild variant="ghost" size="sm" className="absolute top-4 left-4 text-muted-foreground hover:text-foreground">
                <Link href="/#projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
            </Button>
            <div className="pt-12 text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">
                    PhishDetector
                </h1>
                <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">
                    An End-to-End Machine Learning Solution to Detect Phishing Websites.
                </p>
                 <Button asChild size="sm" className="mt-4">
                    <Link href="https://github.com/sujeetgund/phishing-website-detection" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                    </Link>
                </Button>
            </div>
        </Section>
        
        <div className="my-8 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl"><AlertTriangle className="text-primary"/>Problem Statement</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80">Phishing websites are fraudulent sites designed to mimic legitimate ones, aiming to steal sensitive information from unsuspecting users. Detecting these websites in real-time is crucial to protect users from scams, data breaches, and financial losses. The challenge lies in accurately distinguishing phishing websites from legitimate ones using measurable features derived from the site’s URL and metadata.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl"><Target className="text-primary"/>Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0"/>
                                <span className="text-foreground/80">{obj}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                 {galleryImage1 && (
                    <Image src={galleryImage1.imageUrl} alt="Project gallery image 1" data-ai-hint={galleryImage1.imageHint} width={600} height={400} className="rounded-lg object-cover shadow-md"/>
                )}
                 {galleryImage2 && (
                    <Image src={galleryImage2.imageUrl} alt="Project gallery image 2" data-ai-hint={galleryImage2.imageHint} width={600} height={400} className="rounded-lg object-cover shadow-md"/>
                )}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl"><Layers className="text-primary"/>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     {techStack.map((category) => (
                        <div key={category.category}>
                            <h3 className="font-bold text-sm mb-2">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl"><BarChart className="text-primary"/>Results & Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-foreground/80">The Random Forest model demonstrated the best performance, achieving ~97.1% accuracy with high stability across validation folds.</p>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Model</TableHead>
                                <TableHead className="text-right">Mean Fit Time (s)</TableHead>
                                <TableHead className="text-right">Mean Test Score</TableHead>
                                <TableHead className="text-right">Std Test Score</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {results.map((res) => (
                                <TableRow key={res.model} className={res.model === 'RandomForest' ? 'bg-primary/10' : ''}>
                                    <TableCell className="font-medium">{res.model}</TableCell>
                                    <TableCell className="text-right">{res.fitTime.toFixed(2)}</TableCell>
                                    <TableCell className="text-right">{res.testScore.toFixed(4)}</TableCell>
                                    <TableCell className="text-right">{res.std.toFixed(4)}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl"><GitBranch className="text-primary"/>Repository Structure</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-lg font-code text-xs text-foreground/70 overflow-x-auto">
                        <pre>{`.
├── Dockerfile
├── requirements.txt
├── run_api.py
├── data/
│   ├── phishingData.csv
│   └── schema.yaml
├── artifacts/
│   ├── models/model.pkl
│   └── reports/
└── src/phishdetector/
    ├── api/
    ├── components/
    ├── config/
    ├── entity/
    ├── pipelines/
    └── utils/`}</pre>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl"><Code className="text-primary"/>How to Run</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-bold mb-1">1. Clone the Repository</h4>
                        <div className="bg-muted p-3 rounded-lg font-code text-sm">
                            <code className="text-foreground/80">git clone https://github.com/sujeetgund/phishing-website-detection.git</code>
                        </div>
                    </div>
                     <div>
                        <h4 className="font-bold mb-1">2. Install Dependencies</h4>
                        <div className="bg-muted p-3 rounded-lg font-code text-sm">
                            <code className="text-foreground/80">pip install -r requirements.txt</code>
                        </div>
                    </div>
                     <div>
                        <h4 className="font-bold mb-1">3. Run API Server</h4>
                        <div className="bg-muted p-3 rounded-lg font-code text-sm">
                            <code className="text-foreground/80">uvicorn run_api:app</code>
                        </div>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline text-2xl"><Box className="text-primary"/>Docker Usage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div>
                        <h4 className="font-bold mb-1">Build the Image</h4>
                        <div className="bg-muted p-3 rounded-lg font-code text-sm">
                            <code className="text-foreground/80">docker build -t phishdetector .</code>
                        </div>
                    </div>
                     <div>
                        <h4 className="font-bold mb-1">Run the Container</h4>
                        <div className="bg-muted p-3 rounded-lg font-code text-sm">
                            <code className="text-foreground/80">docker run -p 8000:8000 phishdetector</code>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
}
