import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-white w-full relative">
        <Image
          src="/new-footer.png"
          alt="Pie de página de Orbital con logo, botón de ingreso, y redes sociales."
          width={1920}
          height={110}
          className="w-full h-auto object-contain"
        />
        <div className="absolute top-[35%] left-[26.5%] w-[8.2%] h-[31%]">
            <Button asChild variant="outline" className="w-full h-full bg-transparent border-black hover:bg-transparent rounded-md">
                <Link href="#" aria-label="Ingresar a la plataforma">
                  <span className="text-transparent">Ingresar a la plataforma</span>
                </Link>
            </Button>
        </div>
    </footer>
  );
}
