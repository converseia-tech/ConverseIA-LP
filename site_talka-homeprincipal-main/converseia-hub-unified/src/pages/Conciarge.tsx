import Header from '@/components/conciarge/Header';
import Footer from '@/components/conciarge/Footer';
import HeroSection from '@/components/conciarge/HeroSection';
import TargetAudienceSection from '@/components/conciarge/TargetAudienceSection';
import AgentsModulesSection from '@/components/conciarge/AgentsModulesSection';
import PlatformFeaturesSection from '@/components/conciarge/PlatformFeaturesSection';
import PricingSection from '@/components/conciarge/PricingSection';
import FAQSection from '@/components/conciarge/FAQSection';

const Conciarge = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TargetAudienceSection />
      <div id="solucao">
        <AgentsModulesSection />
      </div>
      <div id="recursos">
        <PlatformFeaturesSection />
      </div>
      <div id="planos">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Conciarge;
