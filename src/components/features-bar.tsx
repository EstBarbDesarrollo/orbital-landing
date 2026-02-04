import { Card } from './ui/card';
import { ShieldCheck, Send, CloudDownload, Folder } from 'lucide-react';

const features = [
  {
    title: 'Firma Digital Orbital',
    description: 'Pleno valor legal (Ley 25.506). Seguridad jurídica total e inmediata.',
    icon: <ShieldCheck className="w-8 h-8" />,
    highlighted: true,
  },
  {
    title: 'Eliminación de papel y traslados',
    icon: <Send className="w-8 h-8" />,
  },
  {
    title: 'Información siempre disponible y protegida',
    icon: <CloudDownload className="w-8 h-8" />,
  },
  {
    title: 'Centralización de documentos y legajos',
    icon: <Folder className="w-8 h-8" />,
  },
];

export function FeaturesBar() {
  return (
    <div className="py-12 bg-secondary">
      <div className="container">
        <Card className="shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 flex items-center gap-4 ${
                  feature.highlighted ? 'bg-primary text-primary-foreground rounded-l-lg' : ''
                } ${index > 0 && index < features.length ? 'border-t md:border-t-0 md:border-l' : ''} ${ index === 1 ? 'rounded-tr-lg md:rounded-none' : ''} ${ index === features.length - 1 ? 'rounded-b-lg lg:rounded-b-none lg:rounded-r-lg' : ''}`}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  {feature.description && <p className="text-sm opacity-90">{feature.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
