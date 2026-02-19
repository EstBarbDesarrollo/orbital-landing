
import Image from 'next/image';
import Link from 'next/link';

export function IngresarButton() {
  return (
    <Link href="https://accesoorbital.estudiobarbosa.com.ar" className="inline-block">
      <Image
        src="/ingresar-plataforma-btn.png?v=2"
        alt="Ingresar a la plataforma"
        width={156}
        height={34}
        className="transition-transform hover:scale-105"
        priority
      />
    </Link>
  );
}
