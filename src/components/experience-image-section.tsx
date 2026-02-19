import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import Link from 'next/link';

export function ExperienceImageSection() {
  const image = PlaceHolderImages.find((img) => img.id === 'experience-banner') as ImagePlaceholder;

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
            <div className="absolute top-[80%] left-[9%]">
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <Button size="lg" asChild className="rounded-full">
                  <Link href="#features">Solicitar atención personalizada</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-background text-primary border-background hover:bg-background hover:text-primary"
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