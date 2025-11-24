import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VivanChatSection from "@/components/VivanChatSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import SolutionsSection from "@/components/SolutionsSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <HeroSection />
        <SolutionsSection />
        <VivanChatSection />
        <TechnologiesSection />
        <AboutSection />
        <ClientsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;