import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import Link from 'next/link';

export function ExperienceImageSection() {
  const image = PlaceHolderImages.find((img) => img.id === 'experience-banner') as ImagePlaceholder;
  const whatsappUrl = "https://wa.me/5492215454405";

  return (
    <section className="mt-14 relative">
      {image && (
        <div className="w-full aspect-[1920/580] relative">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={1920}
            height={580}
            className="w-full h-auto"
            data-ai-hint={image.imageHint}
            priority
          />
          <div className="absolute inset-0">
            {/* Contenedor posicionado con porcentajes respecto al banner */}
            <div className="absolute top-[80%] left-[8.5%] w-[50%]">
              <div className="flex flex-row items-center gap-[1vw]">
                <Button 
                  asChild 
                  className="h-[3.4vw] px-[2.4vw] text-[1.1vw] rounded-full bg-[#6F26C6] hover:bg-[#6F26C6] text-white transition-transform hover:scale-105 border-none shadow-none font-bold"
                >
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Solicitar atención personalizada
                  </Link>
                </Button>
                <Button
                  className="h-[3.4vw] px-[2.4vw] text-[1.1vw] rounded-full bg-[#EFEFEF] text-[#6F26C6] hover:bg-[#EFEFEF] transition-transform hover:scale-105 border-none shadow-none font-bold"
                  asChild
                >
                  <Link href="https://accesoorbital.estudiobarbosa.com.ar">Ingresar a Orbital</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
