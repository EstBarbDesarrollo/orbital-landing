import Image from 'next/image';
import Link from 'next/link';

export function VerDemoButton() {
  return (
    <Link href="#" className="inline-block">
      <Image
        src="/ver-demo-btn.png"
        alt="Ver demo"
        width={98}
        height={34}
        className="transition-transform hover:scale-105"
      />
    </Link>
  );
}
