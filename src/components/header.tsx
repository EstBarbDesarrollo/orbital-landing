'use client';

import Link from 'next/link';
import { OrbitalLogo } from '@/components/orbital-logo';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from '@/components/whatsapp-icon';
import { IngresarButton } from './ingresar-button';
import { VerDemoButton } from './ver-demo-button';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm'>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Back to homepage">
          <OrbitalLogo />
        </Link>
        <nav className="flex items-center gap-4">
            <IngresarButton />
            <VerDemoButton />
             <Button variant="link" asChild>
                <Link href="#">Contactar un asesor</Link>
            </Button>
            <a href="#" aria-label="WhatsApp">
              <WhatsappIcon className="h-8 w-8 text-green-500" />
            </a>
        </nav>
      </div>
    </header>
  );
}
