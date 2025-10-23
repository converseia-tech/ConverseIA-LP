import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SolutionsSection from "@/components/SolutionsSection";
import InsightsSection from "@/components/InsightsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <SolutionsSection />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
