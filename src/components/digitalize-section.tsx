import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function DigitalizeSection() {
  const computerImage = PlaceHolderImages.find((img) => img.id === 'computer-overlay');

  return (
    <section className="relative">
      <Image
        src="/digitaliza-features_.png"
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
      {/* Botón 1 con imagen anclada */}
      <div className="absolute top-[19%] left-[57%] w-[35%] h-[12%]">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-20">
          <Image 
            src="/1_firma_black.png" 
            alt="Firma" 
            width={45} 
            height={45} 
            className="object-contain"
          />
        </div>
        <Button 
          asChild 
          variant="outline" 
          className="w-full h-full bg-transparent border-black hover:bg-black/5 rounded-none"
        >
          <Link href="#">
            <span className="sr-only">Acción Digitaliza</span>
          </Link>
        </Button>
      </div>
      {/* Botón 2 */}
      <div className="absolute top-[34.7%] left-[57%] w-[35%] h-[12%]">
        <Button 
          asChild 
          variant="outline" 
          className="w-full h-full bg-transparent border-black hover:bg-black/5 rounded-none"
        >
          <Link href="#">
            <span className="sr-only">Acción Digitaliza</span>
          </Link>
        </Button>
      </div>
      {/* Botón 3 */}
      <div className="absolute top-[50.4%] left-[57%] w-[35%] h-[12%]">
        <Button 
          asChild 
          variant="outline" 
          className="w-full h-full bg-transparent border-black hover:bg-black/5 rounded-none"
        >
          <Link href="#">
            <span className="sr-only">Acción Digitaliza</span>
          </Link>
        </Button>
      </div>
      {/* Botón 4 */}
      <div className="absolute top-[66.1%] left-[57%] w-[35%] h-[12%]">
        <Button 
          asChild 
          variant="outline" 
          className="w-full h-full bg-transparent border-black hover:bg-black/5 rounded-none"
        >
          <Link href="#">
            <span className="sr-only">Acción Digitaliza</span>
          </Link>
        </Button>
      </div>
      {/* Botón 5 */}
      <div className="absolute top-[81.8%] left-[57%] w-[35%] h-[12%]">
        <Button 
          asChild 
          variant="outline" 
          className="w-full h-full bg-transparent border-black hover:bg-black/5 rounded-none"
        >
          <Link href="#">
            <span className="sr-only">Acción Digitaliza</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
