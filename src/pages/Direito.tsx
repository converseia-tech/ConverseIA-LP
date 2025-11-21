import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Hero } from '@/components/direito/hero';
import { Convertional } from '@/components/direito/convertional';
import { AnimatedSection } from '@/components/direito/animate-section';
import { Video } from '@/components/direito/video';
import { Depoiment } from '@/components/direito/depoiment';
import { TechnologyIncorporte } from '@/components/direito/TechnologyIncorporte';
import { DireitoPricing } from '@/components/direito/DireitoPricing';
import { FormContact } from '@/components/direito/form-contact';

const Direito = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AnimatedSection id="inicio" className="max-w-6xl mx-auto">
          <Hero />
          <Convertional />
        </AnimatedSection>

        <AnimatedSection className="w-full h-screen bg-dark-primary py-24" id="sobre">
          <Video />
        </AnimatedSection>

        <AnimatedSection id="recursos" className="w-full max-w-7xl mx-auto scroll-mt-24">
          <Depoiment />
        </AnimatedSection>

        <AnimatedSection className="size-full bg-dark-primary py-24">
          <TechnologyIncorporte />
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 max-w-6xl mx-auto scroll-mt-24" id="planos">
          <DireitoPricing />
        </AnimatedSection>

        <AnimatedSection className="w-full py-24 max-w-6xl mx-auto scroll-mt-24" id="contato">
          <FormContact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Direito;
