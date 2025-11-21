import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "phosphor-react";
import { motion } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const HeroSection = () => {
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Content Container - Mais centralizado verticalmente */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 max-w-4xl mx-auto">
        {/* Large Hero Text with GooeyText effect */}
        <div className="text-center mb-6">
          <div style={{
            textShadow: '0 0 50px rgba(139, 92, 246, 0.5)',
            filter: 'contrast(1.2)',
            letterSpacing: '-0.02em',
            minHeight: '120px'
          }}>
            <GooeyText
              texts={["Inteligência que Transforma.", "Automação que Liberta."]}
              morphTime={1.5}
              cooldownTime={3}
              className="font-display font-black tracking-tight leading-[0.85]"
              textClassName="text-foreground dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            />
          </div>
        </div>

        {/* Texto descritivo */}
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 px-4">
          Criamos ecossistemas empresariais que geram valor e impulsionam o crescimento sustentável.
        </p>

        {/* CTAs - Grupo de botões */}
        <div className="pointer-events-auto z-20 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-purple-600/90 hover:bg-purple-700 dark:bg-purple-600/80 dark:hover:bg-purple-700/90 text-white border border-purple-500/30 dark:border-purple-400/20 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            <a href="/contratacao">
              Começar Agora
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <Button 
            onClick={scrollToSolutions}
            size="lg" 
            variant="outline"
            className="border-purple-500/30 dark:border-purple-400/20 hover:bg-purple-600/10 dark:hover:bg-purple-600/10 px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all hover:scale-105"
          >
            Conheça nossas soluções
            <ArrowDown weight="bold" className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
