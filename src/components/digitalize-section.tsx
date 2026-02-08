import Image from 'next/image';

export function DigitalizeSection() {
  return (
    <section>
      <Image
        src="/digitaliza-features.png"
        alt="Características de Orbital: Digitalizá, Ordená, Agilizá, Centralizá"
        width={1920}
        height={827}
        className="w-full h-auto"
      />
    </section>
  );
}
