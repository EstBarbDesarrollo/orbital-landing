'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { OrbitalLogo } from '@/components/orbital-logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        hasScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Back to homepage">
          <OrbitalLogo />
        </Link>
        <nav>
          <Button asChild>
            <Link href="#contact">Comenzar</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
