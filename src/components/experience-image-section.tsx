import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export function ExperienceImageSection() {
  const image = PlaceHolderImages.find((img) => img.id === 'experience-banner') as ImagePlaceholder;

  return (
    <section>
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          width={1920}
          height={580}
          className="w-full h-auto"
          data-ai-hint={image.imageHint}
        />
      )}
    </section>
  );
}
