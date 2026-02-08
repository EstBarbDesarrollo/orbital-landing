import Image from 'next/image';

export function OrbitalLogo() {
  return (
    <Image
      src="/orbital-logo.png"
      alt="Orbital Logo"
      width={150}
      height={30}
      priority
    />
  );
}
