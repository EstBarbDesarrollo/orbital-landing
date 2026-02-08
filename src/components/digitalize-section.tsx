import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function DigitalizeSection() {
  const computerImage = PlaceHolderImages.find((img) => img.id === 'computer-overlay');

  return (
    <section className="relative">
      <Image
        src="/digitaliza-features.png"
        alt="Características de Orbital: Digitalizá, Ordená, Agilizá, Centralizá"
        width={1920}
        height={827}
        className="w-full h-auto"
      />
      {computerImage && (
        <div className="absolute top-[32%] left-[6%] w-[42%]">
            <Image
                src={computerImage.imageUrl}
                alt={computerImage.description}
                width={600}
                height={400}
                className="w-full h-auto"
                data-ai-hint={computerImage.imageHint}
            />
        </div>
      )}
    </section>
  );
}
