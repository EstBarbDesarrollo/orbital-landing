import { Card, CardContent } from './ui/card';
import { Building2, Settings2, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Conocemos tu institución',
    icon: <Building2 className="w-10 h-10 text-primary" />,
  },
  {
    number: '2',
    title: 'Implementamos la plataforma',
    icon: <Settings2 className="w-10 h-10 text-primary" />,
  },
  {
    number: '3',
    title: 'Gestionás con respaldo',
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
  },
];

export function ProcessSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Empezar es simple. Evolucioná con confianza.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Tres pasos para transformar tu administración administrativa con el respaldo técnico de Orbital y el acompañamiento de Estudio Barbosa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <Card key={step.number} className="text-center p-8">
              <div className="relative inline-block">
                <span className="text-8xl font-extrabold text-secondary">{step.number}</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full">
                    {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4">{step.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
