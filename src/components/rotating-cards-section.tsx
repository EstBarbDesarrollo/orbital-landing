import { RotatingCard } from './rotating-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const cardContent = [
  {
    number: '1',
    title: 'Tecnología a Prueba de Futuro',
    text: 'Construimos con tecnologías modernas y escalables para asegurar que tu plataforma resista el paso del tiempo.',
    imageId: 'rotating-card-1',
  },
  {
    number: '2',
    title: 'Diseño Centrado en el Usuario',
    text: 'Nuestra filosofía de diseño pone a tus usuarios primero, creando experiencias intuitivas y atractivas.',
    imageId: 'rotating-card-2',
  },
  {
    number: '3',
    title: 'Crecimiento Impulsado por Datos',
    text: 'Desbloquea potentes estadísticas de tus datos para tomar decisiones informadas e impulsar el crecimiento.',
    imageId: 'rotating-card-3',
  },
];

export function RotatingCardsSection() {
  const images = PlaceHolderImages;

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Nuestros Principios Fundamentales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La base de todo lo que construimos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cardContent.map((item) => {
            const image = images.find((img) => img.id === item.imageId);
            if (!image) return null;
            return <RotatingCard key={item.number} {...item} image={image} />;
          })}
        </div>
      </div>
    </section>
  );
}
