
import Image from 'next/image';
import Link from 'next/link';

export function VerDemoButton() {
  return (
    <Link href="#digitalize" className="inline-block">
      <Image
        src="/ver-demo-btn.png?v=2"
        alt="Ver demo"
        width={89}
        height={31}
        className="transition-transform hover:scale-105"
        priority
      />
    </Link>
  );
}
