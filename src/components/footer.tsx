import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-white w-full relative">
        <div className="pointer-events-none">
            <Image
              src="/new-footer.png"
              alt="Pie de página de Orbital con logo, botón de ingreso, y redes sociales."
              width={1920}
              height={110}
              className="w-full h-auto object-contain"
            />
        </div>
        <div className="absolute top-[29.4%] left-[6.9%] w-[10.1%] h-[24.4%]">
            <Button asChild variant="outline" className="w-full h-full bg-transparent border-transparent hover:bg-transparent rounded-md">
                <Link href="/" aria-label="Volver al inicio">
                  <span className="text-transparent"></span>
                </Link>
            </Button>
        </div>
        <div className="absolute top-[30%] left-[50.2%] w-[14.4%] h-[24.6%]">
            <Button asChild variant="outline" className="w-full h-full bg-transparent border-transparent hover:bg-transparent rounded-md">
                <Link href="https://accesoorbital.estudiobarbosa.com.ar" aria-label="Ingresar a la plataforma">
                  <span className="text-transparent"></span>
                </Link>
            </Button>
        </div> 
        <div className="absolute top-[31%] left-[66.8%] w-[1.6%] h-[20%]">
            <Button asChild variant="outline" className="w-full h-full bg-transparent border-transparent hover:bg-transparent rounded-md">
                <Link href="#" aria-label="Red social 1">
                  <span className="text-transparent"></span>
                </Link>
            </Button>
        </div>  
        <div className="absolute top-[31%] left-[71.15%] w-[1.6%] h-[20%]">
            <Button asChild variant="outline" className="w-full h-full bg-transparent border-transparent hover:bg-transparent rounded-md">
                <Link href="#" aria-label="Red social 2">
                  <span className="text-transparent"></span>
                </Link>
            </Button>
        </div>   
        <div className="absolute top-[31%] left-[75.5%] w-[1.6%] h-[20%]">
            <Button asChild variant="outline" className="w-full h-full bg-transparent border-transparent hover:bg-transparent rounded-md">
                <Link href="#" aria-label="Red social 3">
                  <span className="text-transparent"></span>
                </Link>
            </Button>
        </div>  
        <div className="absolute top-[14%] left-[88.1%] w-[6%] h-[55%]">
            <Button asChild variant="outline" className="w-full h-full bg-transparent border-transparent hover:bg-transparent rounded-md">
                <Link href="#" aria-label="Contacto">
                  <span className="text-transparent"></span>
                </Link>
            </Button>
        </div>              
    </footer>
  );
}
