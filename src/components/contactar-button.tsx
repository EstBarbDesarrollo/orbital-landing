import Image from 'next/image';
import Link from 'next/link';

export function ContactarButton() {
  return (
    <Link href="#" className="inline-block">
      <Image
        src="/contactar-asesor-btn.png"
        alt="Contactar un asesor"
        width={190}
        height={48}
        className="transition-transform hover:scale-105"
      />
    </Link>
  );
}
