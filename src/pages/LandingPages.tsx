import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "phosphor-react";
import { Button } from "@/components/ui/button";

const LandingPages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Produto</span>
            </div>
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-blue-500/10 rounded-2xl">
                <Globe weight="fill" className="h-16 w-16 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Landing Pages e Sites focados em{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                conversão
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Páginas rápidas, modernas e otimizadas para atrair leads e vender mais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600/90 hover:bg-blue-700/90 text-white"
              >
                <a href="/#contato">
                  Solicitar Orçamento
                  <ArrowRight weight="bold" className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/10"
              >
                <a href="/#sobre">Ver Todas as Soluções</a>
              </Button>
            </div>
          </motion.div>

          {/* Conteúdo em desenvolvimento */}
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-lg">
              Conteúdo em desenvolvimento. Em breve mais informações sobre esta solução.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPages;
