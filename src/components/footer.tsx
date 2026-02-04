import Link from 'next/link';
import { OrbitalLogo } from './orbital-logo';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4">
              <OrbitalLogo />
            </Link>
            <p className="max-w-sm text-secondary-foreground">
              Revolucionando los paisajes digitales con tecnología y diseño de vanguardia.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Orbital Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
