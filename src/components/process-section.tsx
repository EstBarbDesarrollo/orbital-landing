import { RotatingCard } from './rotating-card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const steps = [
  {
    number: '01',
    title: 'Conocemos tu institución',
    text: 'Analizamos en profundidad la estructura y necesidades de tu organización para ofrecerte una solución a medida.',
    imageId: 'process-1',
  },
  {
    number: '02',
    title: 'Implementamos la plataforma',
    text: 'Configuramos Orbital para que se integre perfectamente con tus procesos existentes, garantizando una transición fluida.',
    imageId: 'process-2',
  },
  {
    number: '03',
    title: 'Gestionás con respaldo',
    text: 'Te acompañamos en cada paso, brindando soporte constante y la seguridad jurídica que solo Estudio Barbosa puede ofrecer.',
    imageId: 'process-3',
  },
];

export function ProcessSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-headline">
            Empezar es simple. Evolucioná con confianza.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Tres pasos para transformar tu administración administrativa con el respaldo técnico de Orbital y el acompañamiento de Estudio Barbosa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => {
            const image = PlaceHolderImages.find(img => img.id === step.imageId) as ImagePlaceholder;
            return (
              image && (
                <RotatingCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  text={step.text}
                  image={image}
                />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}
