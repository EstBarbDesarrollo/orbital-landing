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
        <div className="flex flex-col items-start gap-[1vw]">
          <Image
            src="/hero-text.png?v=2"
            alt="Plataforma Digital. Centro de gestión laboral accesible, seguro y ágil."
            width={427}
            height={128}
            className="w-full h-auto"
            priority
          />
          <div className="mt-[1vw] flex items-start gap-[1vw] w-full">
            <Button 
              asChild 
              className="h-[3.4vw] px-[2.4vw] text-[1.1vw] rounded-full bg-[#6F26C6] hover:bg-[#6F26C6] text-white transition-transform hover:scale-105 border-none shadow-none font-bold"
            >
              <Link href="#digitalize">Conocer Orbital</Link>
            </Button>
            <Button 
              variant="outline" 
              className="h-[3.4vw] px-[2.4vw] text-[1.1vw] bg-background rounded-full text-[#6F26C6] border-[0.15vw] border-[#6F26C6] transition-transform hover:scale-105 hover:bg-background hover:text-[#6F26C6] font-bold" 
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
