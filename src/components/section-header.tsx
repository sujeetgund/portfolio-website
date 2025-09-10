export function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-10 md:mb-16 text-center">
      <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
