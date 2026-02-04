'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

interface RotatingCardProps {
  image: ImagePlaceholder;
  title: string;
  text: string;
  number: string;
}

export function RotatingCard({ image, title, text, number }: RotatingCardProps) {
  return (
    <div className="group [perspective:1000px] aspect-square w-full">
      <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <Card className="absolute h-full w-full overflow-hidden [backface-visibility:hidden]">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-4xl font-bold text-white font-headline">{number}</h3>
          </div>
        </Card>

        {/* Back of the card */}
        <Card className="absolute h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-accent text-accent-foreground">
          <CardContent className="flex h-full flex-col justify-center items-center p-6 text-center">
            <h3 className="text-2xl font-bold font-headline mb-3">{title}</h3>
            <p>{text}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
