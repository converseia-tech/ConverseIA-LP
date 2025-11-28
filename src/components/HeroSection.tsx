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
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 py-12 sm:py-0">
      {/* Content Container - Mais centralizado verticalmente */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-24 sm:mt-32"
      >
        {/* Large Hero Text with GooeyText effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-4 sm:mb-6"
        >
          <div style={{
            textShadow: '0 0 50px rgba(139, 92, 246, 0.5)',
            filter: 'contrast(1.2)',
            letterSpacing: '-0.02em',
            minHeight: '72px'
          }}
            className="min-h-[72px] sm:min-h-[100px] md:min-h-[120px]"
          >
            <GooeyText
              texts={["Inteligência que Transforma.", "Automação que Liberta."]}
              morphTime={1.5}
              cooldownTime={3}
              className="font-display font-black tracking-tight leading-[0.9] sm:leading-[0.85]"
              textClassName="text-foreground dark:text-white text-[2.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            />
          </div>
        </motion.div>

        {/* Texto descritivo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 px-2 sm:px-4 mx-auto mt-3"
        >
          Criamos ecossistemas empresariais que geram valor e impulsionam o crescimento sustentável.
        </motion.p>

        {/* CTAs - Grupo de botões */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pointer-events-auto z-20 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto px-4 sm:px-0"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-purple-600/90 hover:bg-purple-700 dark:bg-purple-600/80 dark:hover:bg-purple-700/90 text-white border border-purple-500/30 dark:border-purple-400/20 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold backdrop-blur-sm transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            <a href="/contratacao">
              Começar Agora
              <ArrowRight weight="bold" className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Button>

          <Button
            onClick={scrollToSolutions}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-purple-500/30 dark:border-purple-400/20 hover:bg-purple-600/10 dark:hover:bg-purple-600/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold backdrop-blur-sm transition-all hover:scale-105"
          >
            Conheça o Ecossistema ConverseIA
            <ArrowDown weight="bold" className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Positioned closer to content */}
      <motion.div
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, y: [0, 10, 0], x: "-50%" }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-6 sm:bottom-12 left-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
