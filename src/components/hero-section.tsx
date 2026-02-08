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
      <div className="absolute top-[100px] left-[100px]">
        <div className="flex flex-col items-start">
          <Image
            src="/hero-text.png"
            alt="Plataforma Digital. Centro de gestión laboral accesible, seguro y ágil."
            width={648}
            height={195}
          />
          <div className="mt-4 flex flex-col sm:flex-row items-start gap-4">
            <Button size="lg" asChild>
              <Link href="#features">Conocer Orbital</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background" asChild>
              <Link href="#contact">Ingresar a Orbital</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
