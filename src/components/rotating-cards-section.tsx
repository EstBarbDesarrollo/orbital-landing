import { RotatingCard } from './rotating-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const cardContent = [
  {
    number: '1',
    title: 'Future-Proof Tech',
    text: 'We build with modern, scalable technologies to ensure your platform stands the test of time.',
    imageId: 'rotating-card-1',
  },
  {
    number: '2',
    title: 'User-Centric Design',
    text: 'Our design philosophy puts your users first, creating intuitive and engaging experiences.',
    imageId: 'rotating-card-2',
  },
  {
    number: '3',
    title: 'Data-Driven Growth',
    text: 'Unlock powerful insights from your data to make informed decisions and drive growth.',
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
            Our Core Principles
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The foundation of everything we build.
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
