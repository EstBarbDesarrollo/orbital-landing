import Image from 'next/image';

export function ContactarButton() {
  return (
    <div className="inline-block">
      <Image
        src="/contactar-asesor-btn.png"
        alt="Contactar un asesor"
        width={135}
        height={34}
        priority
      />
    </div>
  );
}
