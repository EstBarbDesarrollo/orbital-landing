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
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
        <div className="container pl-16">
          <Image
            src="/hero-text.png"
            alt="Plataforma Digital. Centro de gestión laboral accesible, seguro y ágil."
            width={294}
            height={88}
          />
        </div>
      </div>
      <div className="absolute bottom-[15%] w-full">
        <div className="container flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#features">Conocer Orbital</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-background" asChild>
            <Link href="#contact">Ingresar a Orbital</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
