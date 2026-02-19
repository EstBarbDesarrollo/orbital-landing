
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background') as ImagePlaceholder;
  return (
    <section className="relative bg-background">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0">
        <div className="container h-full pl-16 pr-16">
          <div className="relative top-[64px]">
            <div className="flex flex-col items-start">
              <Image
                src="/hero-text.png?v=2"
                alt="Plataforma Digital. Centro de gestión laboral accesible, seguro y ágil."
                width={427}
                height={128}
                priority
              />
              <div className="mt-4 flex flex-col sm:flex-row items-start gap-4">
                <Button size="lg" asChild className="rounded-full transition-transform hover:scale-105">
                  <Link href="#digitalize">Conocer Orbital</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-background rounded-full text-primary border-primary transition-transform hover:scale-105 hover:bg-background hover:text-primary" 
                  asChild
                >
                  <Link href="https://accesoorbital.estudiobarbosa.com.ar">Ingresar a Orbital</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
