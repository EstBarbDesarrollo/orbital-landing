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
        <div className="absolute top-[35%] left-[8%] w-[35%]">
            <Image
                src={computerImage.imageUrl}
                alt={computerImage.description}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
                data-ai-hint={computerImage.imageHint}
            />
        </div>
      )}
    </section>
  );
}
