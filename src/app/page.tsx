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
          {/* Contenedor posicionado con porcentajes relativo al Hero */}
          <div className="absolute left-[6%] right-[6%] bottom-0 translate-y-[40%] z-20">
            <FeaturesBar />
          </div>
        </div>
        
        {/* Espaciador proporcional para compensar el solapamiento del banner */}
        <div className="h-12 md:h-20 lg:h-32"></div>
        
        <DigitalizeSection />
        <ExperienceImageSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
