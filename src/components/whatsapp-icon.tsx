import Image from 'next/image';

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        fill
      />
    </div>
  );
}
