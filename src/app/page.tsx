
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesBar } from '@/components/features-bar';
import { DigitalizeSection } from '@/components/digitalize-section';
import { ExperienceImageSection } from '@/components/experience-image-section';
import { ProcessSection } from '@/components/process-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <div className="relative">
          <HeroSection />
          {/* En móviles, el desplazamiento es del 85% para liberar el contenido visual del Hero. En desktop (md:), vuelve al 50%. */}
          <div className="absolute left-[6.3%] right-[6.3%] bottom-0 translate-y-[85%] md:translate-y-[50%] z-20">
            <FeaturesBar />
          </div>
        </div>
        
        {/* Espaciador ajustado para evitar que el banner pise la siguiente sección en móviles tras el nuevo desplazamiento */}
        <div className="h-24 md:h-24 lg:h-32"></div>
        
        <DigitalizeSection />
        <ExperienceImageSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
