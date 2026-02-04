import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary font-headline">
            Navigate the Digital Cosmos
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We propel your business into a new orbit of success with bespoke digital transformation and innovative solutions.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Start Your Journey</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
