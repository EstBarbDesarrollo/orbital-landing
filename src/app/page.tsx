import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesBar } from '@/components/features-bar';
import { DigitalizeSection } from '@/components/digitalize-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProcessSection } from '@/components/process-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="relative z-10 -mt-12 md:-mt-16 lg:-mt-24">
          <FeaturesBar />
        </div>
        <DigitalizeSection />
        <ExperienceSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
