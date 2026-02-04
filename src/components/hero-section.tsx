import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowUpFromLine, Smartphone, Cloud } from 'lucide-react';
import { Card } from './ui/card';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background') as ImagePlaceholder;
  return (
    <section className="relative bg-secondary overflow-hidden">
       {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center opacity-20"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="relative container pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold text-primary">PLATAFORMA DIGITAL</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mt-2">
            Centro de gestión laboral accesible, seguro y ágil.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Una inversión eficiente que optimiza los recursos de tu organización con acompañamiento profesional.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#features">Conocer Orbital</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-background" asChild>
            <Link href="#contact">Ingresar a Orbital</Link>
          </Button>
        </div>
      </div>
       {/* Floating UI elements - for decorative purposes */}
      <div className="absolute top-1/4 -right-12 lg:right-20 hidden md:block">
        <Card className="p-3 shadow-lg flex items-center gap-2 -rotate-12 max-w-[220px]">
            <Cloud className="w-8 h-8 text-primary flex-shrink-0"/>
            <p className="text-xs">Toda la información con validez legal queda registrada, ordenada y disponible en un solo lugar</p>
        </Card>
      </div>
       <div className="absolute top-1/2 left-4 lg:left-32 hidden md:block">
        <Card className="p-3 shadow-lg flex items-center gap-2 rotate-12 max-w-[200px]">
            <ArrowUpFromLine className="w-5 h-5 text-primary flex-shrink-0"/>
            <p className="text-xs">La organización carga y envía la documentación laboral</p>
        </Card>
      </div>
       <div className="absolute bottom-1/4 right-8 lg:right-48 hidden md:block">
        <Card className="p-3 shadow-lg flex items-center gap-2 rotate-6 max-w-[220px]">
            <Smartphone className="w-5 h-5 text-primary flex-shrink-0"/>
            <p className="text-xs">El empleado accede desde cualquier dispositivo, recibe y firma digitalmente</p>
        </Card>
      </div>
    </section>
  );
}
