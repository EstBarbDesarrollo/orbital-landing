import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, ShieldCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'Despliegue Rápido',
    description: 'Lanza tus proyectos más rápido que nunca con nuestro proceso de desarrollo optimizado y una infraestructura robusta.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Seguridad Férrea',
    description: 'Protege tus datos y a tus clientes con características de seguridad de nivel empresarial integradas en cada capa.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: 'Crecimiento Escalable',
    description: 'Nuestras soluciones están diseñadas para crecer con tu negocio, asegurando que siempre estés listo para el siguiente nivel.',
  },
];

export function ValuePropSection() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            ¿Por Qué Elegir Orbital?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Proporcionamos las herramientas y la experiencia para elevar tu presencia digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
