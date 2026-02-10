import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import Link from 'next/link';

export function ExperienceImageSection() {
  const image = PlaceHolderImages.find((img) => img.id === 'experience-banner') as ImagePlaceholder;

  return (
    <section className="mt-14 relative">
      {image && (
        <>
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={1920}
            height={580}
            className="w-full h-auto"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0">
            <div className="container flex h-full items-center pl-16 pr-16">
              <div className="mt-32">
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <Button size="lg" asChild className="rounded-full">
                    <Link href="#features">Conocer Orbital</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-background"
                    asChild
                  >
                    <Link href="#contact">Ingresar a Orbital</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
