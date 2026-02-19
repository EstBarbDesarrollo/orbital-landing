
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function DigitalizeSection() {
  const [activeItem, setActiveItem] = useState<'firma' | 'centralizacion' | 'informacion' | 'inversion' | 'gestion'>('firma');
  
  const computerImage = PlaceHolderImages.find((img) => img.id === 'computer-overlay');
  
  const itemImages = {
    firma: PlaceHolderImages.find((img) => img.id === 'digital-signature'),
    centralizacion: PlaceHolderImages.find((img) => img.id === 'document-centralization'),
    informacion: PlaceHolderImages.find((img) => img.id === 'secure-information'),
    inversion: PlaceHolderImages.find((img) => img.id === 'efficient-investment'),
    gestion: PlaceHolderImages.find((img) => img.id === 'simplified-management'),
  };

  const activeImage = itemImages[activeItem];

  return (
    <section id="digitalize" className="scroll-mt-20">
      {/* Contenedor principal alineado al centro con ancho máximo */}
      <div className="relative w-full max-w-[1920px] mx-auto">
        {/* Imagen de fondo de la sección */}
        <Image
          src="/digitaliza-features_.png?v=2"
          alt="Características de Orbital: Digitalizá, Ordená, Agilizá, Centralizá"
          width={1920}
          height={827}
          className="w-full h-auto"
          priority
        />
        
        {/* Contenedor de la computadora alineado al 6.3% */}
        {computerImage && (
          <div className="absolute top-[32%] left-[6.3%] w-[42%]">
              <div className="relative">
                  {/* Imagen del marco de la computadora */}
                  <Image
                      src={computerImage.imageUrl}
                      alt={computerImage.description}
                      width={600}
                      height={400}
                      className="w-full h-auto relative z-10 pointer-events-none"
                      data-ai-hint={computerImage.imageHint}
                  />
                  {/* Pantalla dinámica */}
                  <div className="absolute top-[5.2%] left-[9.6%] w-[80.8%] h-[60.6%] z-20 overflow-hidden bg-black rounded-[0.5%] shadow-inner">
                      {activeImage && (
                        <Image
                          src={activeImage.imageUrl}
                          alt={activeImage.description}
                          fill
                          className="object-cover transition-opacity duration-500"
                          data-ai-hint={activeImage.imageHint}
                        />
                      )}
                  </div>
              </div>
          </div>
        )}

        {/* Ítems interactivos alineados verticalmente en la misma línea izquierda */}
        
        {/* 1. Firma */}
        <div 
          className="absolute top-[19%] left-[58.7%] w-[35%] aspect-[6.72/1] group cursor-pointer"
          onMouseEnter={() => setActiveItem('firma')}
        >
          <div className="relative w-full h-full flex items-center justify-start">
            <div className="relative w-[95%] h-[95%]">
              <Image 
                src="/1_firma_black.png?v=2" 
                alt="Firma Digital Orbital" 
                fill
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image 
                src="/1_firma_blue.png?v=2" 
                alt="Firma Digital Orbital" 
                fill
                className="absolute top-0 left-0 object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* 2. Centralización */}
        <div 
          className="absolute top-[33.7%] left-[58.7%] w-[35%] aspect-[6.72/1] group cursor-pointer"
          onMouseEnter={() => setActiveItem('centralizacion')}
        >
          <div className="relative w-full h-full flex items-center justify-start">
            <div className="relative w-[95%] h-[95%]">
              <Image 
                src="/2_centralizacion_black.png?v=2" 
                alt="Centralización de documentos" 
                fill
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image 
                src="/2_centralizacion_blue.png?v=2" 
                alt="Centralización de documentos" 
                fill
                className="absolute top-0 left-0 object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* 3. Información */}
        <div 
          className="absolute top-[49.4%] left-[58.7%] w-[35%] aspect-[6.72/1] group cursor-pointer"
          onMouseEnter={() => setActiveItem('informacion')}
        >
          <div className="relative w-full h-full flex items-center justify-start">
            <div className="relative w-[95%] h-[95%]">
              <Image 
                src="/3_informacion_black.png?v=2" 
                alt="Información segura" 
                fill
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image 
                src="/3_informacion_blue.png?v=2" 
                alt="Información segura" 
                fill
                className="absolute top-0 left-0 object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* 4. Inversión */}
        <div 
          className="absolute top-[65.1%] left-[58.7%] w-[35%] aspect-[6.72/1] group cursor-pointer"
          onMouseEnter={() => setActiveItem('inversion')}
        >
          <div className="relative w-full h-full flex items-center justify-start">
            <div className="relative w-[95%] h-[95%]">
              <Image 
                src="/4_inversion_black.png?v=2" 
                alt="Inversión eficiente" 
                fill
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image 
                src="/4_inversion_blue.png?v=2" 
                alt="Inversión eficiente" 
                fill
                className="absolute top-0 left-0 object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* 5. Gestión */}
        <div 
          className="absolute top-[80.8%] left-[58.7%] w-[35%] aspect-[6.72/1] group cursor-pointer"
          onMouseEnter={() => setActiveItem('gestion')}
        >
          <div className="relative w-full h-full flex items-center justify-start">
            <div className="relative w-[95%] h-[95%]">
              <Image 
                src="/5_gestion_black.png?v=2" 
                alt="Gestión simplificada" 
                fill
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image 
                src="/5_gestion_blue.png?v=2" 
                alt="Gestión simplificada" 
                fill
                className="absolute top-0 left-0 object-contain object-left opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
