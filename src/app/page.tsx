import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ValuePropSection } from '@/components/value-prop-section';
import { InteractiveScreenSection } from '@/components/interactive-screen-section';
import { TransformationProcessSection } from '@/components/transformation-process-section';
import { RotatingCardsSection } from '@/components/rotating-cards-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropSection />
        <InteractiveScreenSection />
        <TransformationProcessSection />
        <RotatingCardsSection />
      </main>
      <Footer />
    </div>
  );
}
