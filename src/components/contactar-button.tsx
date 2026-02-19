
import Image from 'next/image';
import Link from 'next/link';

export function ContactarButton() {
  const whatsappUrl = "https://wa.me/5492215454405";
  return (
    <Link 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block transition-transform hover:scale-105"
    >
      <Image
        src="/contactar-asesor-btn.png?v=2"
        alt="Contactar un asesor"
        width={135}
        height={34}
        priority
      />
    </Link>
  );
}
