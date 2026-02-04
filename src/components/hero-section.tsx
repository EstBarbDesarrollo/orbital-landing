import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary font-headline">
            Navega el Cosmos Digital
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Impulsamos tu negocio hacia una nueva órbita de éxito con transformación digital a medida y soluciones innovadoras.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Comienza Tu Viaje</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Explorar Características</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
