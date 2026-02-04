'use client';

import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { FileCheck2, FolderOpen, CloudDownload, TrendingUp, Scale } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: <FileCheck2 className="w-8 h-8 text-primary" />,
    title: 'Firma digital con validez jurídica plena',
    description: 'Cumplimiento normativo real que brinda respaldo legal y seguridad en cada documento.',
    imageId: 'digital-signature',
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-primary" />,
    title: 'Centralización de documentación y legajos',
    description: 'Un único entorno digital que ordena y simplifica la información laboral.',
    imageId: 'document-centralization',
  },
  {
    icon: <CloudDownload className="w-8 h-8 text-primary" />,
    title: 'Información siempre disponible y protegida',
    description: 'Acceso inmediato, trazabilidad y resguardo seguro de todos los datos.',
    imageId: 'secure-information',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: 'Inversión eficiente, con alto beneficio operativo',
    description: 'Optimización de recursos y tiempos sin sumar complejidad ni costos innecesarios.',
    imageId: 'efficient-investment',
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: 'Menos gestión. Más tranquilidad.',
    description: 'Reducción de carga administrativa, procesos más eficientes y menos errores operativos.',
    imageId: 'simplified-management',
  },
];

export function DigitalizeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = PlaceHolderImages.find(img => img.id === features[activeIndex].imageId) as ImagePlaceholder;

  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Digitalizá. Ordená. Agilizá. Centralizá.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Orbital convierte la gestión laboral entre empleador y empleado en un proceso digital con validez jurídica, permitiendo enviar, firmar y consultar información de forma segura desde cualquier dispositivo.
            </p>
            {activeImage && (
              <div className="mt-8">
                <Image
                  key={activeImage.id}
                  src={activeImage.imageUrl}
                  alt={activeImage.description}
                  width={1200}
                  height={782}
                  className="rounded-lg transition-opacity duration-300 ease-in-out"
                  data-ai-hint={activeImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="space-y-1">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex gap-4 items-start p-6 rounded-lg cursor-pointer transition-colors ${activeIndex === index ? 'bg-card shadow-md' : 'hover:bg-card/50'}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex-shrink-0 pt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
