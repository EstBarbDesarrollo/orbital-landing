import Image from 'next/image';
import Link from 'next/link';

export function IngresarButton() {
  return (
    <Link href="#" className="inline-block">
      <Image
        src="/ingresar-plataforma-btn.png"
        alt="Ingresar a la plataforma"
        width={220}
        height={48}
        className="transition-transform hover:scale-105"
      />
    </Link>
  );
}
