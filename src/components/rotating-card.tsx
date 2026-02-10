'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface RotatingCardProps {
  frontImage: string;
  backImage: string;
  alt: string;
}

export function RotatingCard({ frontImage, backImage, alt }: RotatingCardProps) {
  return (
    <div className="group [perspective:1000px] aspect-[16/9] w-full">
      <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <Card className="absolute h-full w-full overflow-hidden [backface-visibility:hidden] bg-white">
          <div className="relative w-full h-full">
            <Image
              src={frontImage}
              alt={alt}
              fill
              className="object-contain"
            />
          </div>
        </Card>

        {/* Back of the card */}
        <Card className="absolute h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white">
          <div className="relative w-full h-full">
            <Image
              src={backImage}
              alt={alt}
              fill
              className="object-contain"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
