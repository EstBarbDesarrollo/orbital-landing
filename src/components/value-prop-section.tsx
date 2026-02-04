import { Orbit, Code, Scaling } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Desarrollo a Medida',
    description: 'Construimos aplicaciones web y móviles robustas, escalables y seguras, perfectamente alineadas con tus objetivos de negocio.',
  },
  {
    icon: <Orbit className="h-8 w-8 text-accent" />,
    title: 'Diseño de Experiencias',
    description: 'Creamos interfaces de usuario intuitivas y atractivas que deleitan a tus usuarios y reflejan la identidad de tu marca.',
  },
  {
    icon: <Scaling className="h-8 w-8 text-accent" />,
    title: 'Estrategia de Crecimiento',
    description: 'Te ayudamos a definir tu hoja de ruta digital, optimizar tu presencia online y escalar tus operaciones de forma sostenible.',
  },
];

export function ValuePropSection() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Nuestra Plataforma de Lanzamiento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para construir, lanzar y hacer crecer tu imperio digital.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-16">
            {features.map((feature, index) => (
              <li key={feature.title} className={`flex flex-col gap-6 sm:flex-row sm:gap-10 items-center ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 p-5 bg-background rounded-full shadow-lg">
                  {feature.icon}
                </div>
                <div className={`text-center ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                  <h3 className="text-2xl font-bold font-headline mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
