import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/conciarge/HeroSection';
import TargetAudienceSection from '@/components/conciarge/TargetAudienceSection';
import AgentsModulesSection from '@/components/conciarge/AgentsModulesSection';
import PlatformFeaturesSection from '@/components/conciarge/PlatformFeaturesSection';
import { ConciargePricing } from '@/components/conciarge/ConciargePricing';
import FAQSection from '@/components/conciarge/FAQSection';

const Conciarge = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TargetAudienceSection />
      <div id="solucao">
        <AgentsModulesSection />
      </div>
      <div id="recursos">
        <PlatformFeaturesSection />
      </div>
      <div id="planos">
        <ConciargePricing />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Conciarge;
