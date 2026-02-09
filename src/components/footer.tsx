import Link from 'next/link';
import { OrbitalLogo } from './orbital-logo';
import { WhatsappIcon } from './whatsapp-icon';
import { Button } from './ui/button';

export function Footer() {
  const whatsappUrl = "https://wa.me/5492215454405";

  return (
    <footer id="contact" className="bg-background border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex-shrink-0">
              <OrbitalLogo />
            </Link>
            <div className="text-xs text-muted-foreground border-l pl-4 max-w-xs">
              +25 años garantizando seguridad legal y acompañamiento humano
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary">Acceso a plataforma</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Estudio Barbosa</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Datos legales / privacidad</Link>
            <Button variant="ghost" size="icon" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsappIcon className="h-10 w-10 text-green-500" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
