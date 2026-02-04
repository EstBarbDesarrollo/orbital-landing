import { Card, CardContent, CardHeader } from './ui/card';

const processSteps = [
  {
    step: '01',
    title: 'Descubrimiento y Estrategia',
    description: 'Comenzamos entendiendo tu visión y metas, trazando un plan estratégico para el éxito digital.',
  },
  {
    step: '02',
    title: 'Diseño y Desarrollo',
    description: 'Nuestro equipo crea una solución hermosa, funcional y escalable adaptada a tus necesidades específicas.',
  },
  {
    step: '03',
    title: 'Lanzamiento y Optimización',
    description: 'Desplegamos tu proyecto y monitoreamos continuamente el rendimiento para asegurar resultados óptimos y crecimiento.',
  },
];

export function TransformationProcessSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Nuestro Proceso de Transformación Digital
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un camino probado para lanzar tu negocio hacia el futuro digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((item, index) => (
            <Card key={item.step} className="border-l-4 border-primary bg-background">
              <CardHeader>
                <span className="text-5xl font-extrabold text-primary/20">{item.step}</span>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-xl mb-2 font-headline">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
