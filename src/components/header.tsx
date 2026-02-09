'use client';

import Link from 'next/link';
import { OrbitalLogo } from '@/components/orbital-logo';
import { WhatsappIcon } from '@/components/whatsapp-icon';
import { IngresarButton } from './ingresar-button';
import { VerDemoButton } from './ver-demo-button';
import { ContactarButton } from './contactar-button';

export function Header() {
  const whatsappUrl = "https://wa.me/5492215454405";

  return (
    <header>
      <div className="container flex h-20 items-center justify-between pl-16 pr-16">
        <Link href="/" aria-label="Back to homepage">
          <OrbitalLogo />
        </Link>
        <nav className="flex items-center gap-4">
            <IngresarButton />
            <VerDemoButton />
            <ContactarButton />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappIcon className="h-[34px] w-[34px] text-green-500" />
            </a>
        </nav>
      </div>
    </header>
  );
}
