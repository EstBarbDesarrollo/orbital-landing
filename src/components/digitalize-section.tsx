import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function DigitalizeSection() {
  const computerImage = PlaceHolderImages.find((img) => img.id === 'computer-overlay');

  return (
    <section id="digitalize" className="relative scroll-mt-20">
      <Image
        src="/digitaliza-features_.png"
        alt="Características de Orbital: Digitalizá, Ordená, Agilizá, Centralizá"
        width={1920}
        height={827}
        className="w-full h-auto"
        priority
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
                priority
            />
        </div>
      )}

      {/* 1_firma con efecto hover */}
      <div className="absolute top-[19%] left-[56%] w-[35%] aspect-[6.72/1] group cursor-pointer">
        <Image 
          src="/1_firma_black.png" 
          alt="Firma" 
          width={672} 
          height={100} 
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
          priority
        />
        <Image 
          src="/1_firma_blue.png" 
          alt="Firma" 
          width={672} 
          height={100} 
          className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          priority
        />
      </div>

      {/* 2_centralizacion con efecto hover */}
      <div className="absolute top-[33.7%] left-[56%] w-[35%] aspect-[6.72/1] group cursor-pointer">
        <Image 
          src="/2_centralizacion_black.png" 
          alt="Centralizacion" 
          width={672} 
          height={100} 
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
          priority
        />
        <Image 
          src="/2_centralizacion_blue.png" 
          alt="Centralizacion" 
          width={672} 
          height={100} 
          className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          priority
        />
      </div>

      {/* 3_informacion con efecto hover */}
      <div className="absolute top-[49.4%] left-[56%] w-[35%] aspect-[6.72/1] group cursor-pointer">
        <Image 
          src="/3_informacion_black.png" 
          alt="Informacion" 
          width={672} 
          height={100} 
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
          priority
        />
        <Image 
          src="/3_informacion_blue.png" 
          alt="Informacion" 
          width={672} 
          height={100} 
          className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          priority
        />
      </div>

      {/* 4_inversion con efecto hover */}
      <div className="absolute top-[65.1%] left-[56%] w-[35%] aspect-[6.72/1] group cursor-pointer">
        <Image 
          src="/4_inversion_black.png" 
          alt="Inversion" 
          width={672} 
          height={100} 
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
          priority
        />
        <Image 
          src="/4_inversion_blue.png" 
          alt="Inversion" 
          width={672} 
          height={100} 
          className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          priority
        />
      </div>

      {/* 5_gestion con efecto hover */}
      <div className="absolute top-[80.8%] left-[56%] w-[35%] aspect-[6.72/1] group cursor-pointer">
        <Image 
          src="/5_gestion_black.png" 
          alt="Gestion" 
          width={672} 
          height={100} 
          className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
          priority
        />
        <Image 
          src="/5_gestion_blue.png" 
          alt="Gestion" 
          width={672} 
          height={100} 
          className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          priority
        />
      </div>
    </section>
  );
}
