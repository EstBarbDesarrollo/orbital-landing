import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background') as ImagePlaceholder;
  
  return (
    <section className="relative bg-background overflow-hidden">
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
      
      {/* Contenedor de contenido posicionado con porcentajes relativos al banner */}
      <div className="absolute top-[14%] left-[6.3%] w-[35%]">
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/hero-text.png?v=2"
            alt="Plataforma Digital. Centro de gestión laboral accesible, seguro y ágil."
            width={427}
            height={128}
            className="w-full h-auto"
            priority
          />
          <div className="mt-2 flex flex-col sm:flex-row items-start gap-4 w-full">
            <Button 
              size="lg" 
              asChild 
              className="rounded-full bg-[#6F26C6] hover:bg-[#6F26C6] text-white transition-transform hover:scale-105"
            >
              <Link href="#digitalize">Conocer Orbital</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background rounded-full text-[#6F26C6] border-[#6F26C6] transition-transform hover:scale-105 hover:bg-background hover:text-[#6F26C6]" 
              asChild
            >
              <Link href="https://accesoorbital.estudiobarbosa.com.ar">Ingresar a Orbital</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
