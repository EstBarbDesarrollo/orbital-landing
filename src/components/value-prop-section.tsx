import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, ShieldCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-10 w-10 text-accent" />,
    title: 'Rapid Deployment',
    description: 'Launch your projects faster than ever with our streamlined development process and robust infrastructure.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Ironclad Security',
    description: 'Protect your data and your customers with enterprise-grade security features built into every layer.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: 'Scalable Growth',
    description: 'Our solutions are designed to grow with your business, ensuring you\'re always ready for the next level.',
  },
];

export function ValuePropSection() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Why Choose Orbital?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the tools and expertise to elevate your digital presence.
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
