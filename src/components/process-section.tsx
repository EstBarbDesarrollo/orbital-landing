import { RotatingCard } from './rotating-card';

const steps = [
  {
    number: '01',
    frontImage: '/process-step-1.png',
    backImage: '/process-step-1-back.png',
    alt: 'Paso 1: Conocemos tu institución',
  },
  {
    number: '02',
    frontImage: '/process-step-2.png',
    backImage: '/process-step-2-back.png',
    alt: 'Paso 2: Implementamos la plataforma',
  },
  {
    number: '03',
    frontImage: '/process-step-3.png',
    backImage: '/process-step-3-back.png',
    alt: 'Paso 3: Gestionás con respaldo',
  },
];

export function ProcessSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold font-headline">
            Empezar es simple. Evolucioná con confianza.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
            Tres pasos para transformar tu administración administrativa con el respaldo técnico de Orbital y el acompañamiento de Estudio Barbosa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <RotatingCard
              key={step.number}
              frontImage={step.frontImage}
              backImage={step.backImage}
              alt={step.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
