import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

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
          {/* Invisible link for "Solicitar atención personalizada" */}
          <Link
            href="#"
            className="absolute top-[55%] left-[37%] w-[25%] h-[12%] z-10"
            aria-label="Solicitar atención personalizada"
          />
          {/* Invisible link for "Ingresar a Orbital" */}
          <Link
            href="#"
            className="absolute top-[55%] left-[64%] w-[18%] h-[12%] z-10"
            aria-label="Ingresar a Orbital"
          />
        </>
      )}
    </section>
  );
}
