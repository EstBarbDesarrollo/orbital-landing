'use client';

import Image from 'next/image';

export function FeaturesBar() {
  return (
    <div className="relative w-[90%] mx-auto overflow-hidden rounded-2xl shadow-xl bg-white">
      <Image
        src="/banner-caracteristicas.png?v=2"
        alt="Características de Orbital: Firma Digital, Eliminación de papel, Información protegida, Centralización de documentos"
        width={1400}
        height={160}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
