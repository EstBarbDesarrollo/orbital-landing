
'use client';

import Image from 'next/image';

export function FeaturesBar() {
  return (
    <div className="container pl-16 pr-16">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/banner-caracteristicas.png?v=2"
          alt="Características de Orbital: Firma Digital, Eliminación de papel, Información protegida, Centralización de documentos"
          width={1400}
          height={160}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
