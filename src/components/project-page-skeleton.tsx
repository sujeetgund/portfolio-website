import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectPageSkeleton() {
  return (
    <div className="bg-muted min-h-dvh">
      <div className="container mx-auto max-w-4xl px-4 py-4 sm:py-8 md:py-12">
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

        <div className="bg-card p-4 sm:p-6 md:p-10 rounded-xl shadow-lg">
          {/* Header Skeleton */}
          <header className="mb-8 text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2" />
            <Skeleton className="h-6 w-2/3 max-w-3xl mx-auto mb-6" />
            <div className="flex flex-wrap justify-center gap-2">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </header>

          {/* TL;DR Section Skeleton */}
          <section className="mb-8">
            <div className="bg-muted/50 p-4 rounded-lg">
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </section>

          {/* Problem Solution Section Skeleton */}
          <section className="mb-8">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-destructive p-4 rounded-r-lg bg-destructive/10">
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <div className="border-l-4 border-primary p-4 rounded-r-lg bg-primary/10">
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          </section>

          {/* Key Features Section Skeleton */}
          <section className="mb-8">
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Skeleton className="h-4 w-4 mt-1 flex-shrink-0" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Section Skeleton */}
          <section className="mb-8">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex flex-wrap gap-2 mb-3">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-6 w-20" />
                ))}
              </div>
              <Skeleton className="h-4 w-full" />
            </div>
          </section>

          {/* Additional Sections Skeleton */}
          <section className="mb-8">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
