import { Card, CardContent, CardHeader } from './ui/card';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your vision and goals, mapping out a strategic plan for digital success.',
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our team crafts a beautiful, functional, and scalable solution tailored to your specific needs.',
  },
  {
    step: '03',
    title: 'Launch & Optimization',
    description: 'We deploy your project and continuously monitor performance to ensure optimal results and growth.',
  },
];

export function TransformationProcessSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Our Digital Transformation Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven path to launching your business into the digital future.
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
