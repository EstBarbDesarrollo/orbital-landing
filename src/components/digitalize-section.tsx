import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { FileCheck2, FolderOpen, CloudDownload, TrendingUp, Scale } from 'lucide-react';

const features = [
  {
    icon: <FileCheck2 className="w-8 h-8 text-primary" />,
    title: 'Firma digital con validez jurídica plena',
    description: 'Cumplimiento normativo real que brinda respaldo legal y seguridad en cada documento.',
  },
  {
    icon: <FolderOpen className="w-8 h-8 text-primary" />,
    title: 'Centralización de documentación y legajos',
    description: 'Un único entorno digital que ordena y simplifica la información laboral.',
  },
  {
    icon: <CloudDownload className="w-8 h-8 text-primary" />,
    title: 'Información siempre disponible y protegida',
    description: 'Acceso inmediato, trazabilidad y resguardo seguro de todos los datos.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: 'Inversión eficiente, con alto beneficio operativo',
    description: 'Optimización de recursos y tiempos sin sumar complejidad ni costos innecesarios.',
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: 'Menos gestión. Más tranquilidad.',
    description: 'Reducción de carga administrativa, procesos más eficientes y menos errores operativos.',
  },
];

export function DigitalizeSection() {
  const laptopImage = PlaceHolderImages.find(img => img.id === 'laptop-dashboard') as ImagePlaceholder;

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
            {laptopImage && (
              <div className="mt-8">
                <Image
                  src={laptopImage.imageUrl}
                  alt={laptopImage.description}
                  width={1200}
                  height={782}
                  className="rounded-lg"
                  data-ai-hint={laptopImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0">{feature.icon}</div>
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
