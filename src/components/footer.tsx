import Image from 'next/image';

export function Footer() {
  return (
    <footer id="contact" className="bg-white w-full">
        <Image
          src="/new-footer.png"
          alt="Pie de página de Orbital con logo, botón de ingreso, y redes sociales."
          width={1920}
          height={110}
          className="w-full h-auto object-contain"
        />
    </footer>
  );
}
