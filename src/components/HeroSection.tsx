import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChatCircleDots, Sparkle, Lightning, Brain, Target } from "phosphor-react";
import { Link } from "react-router-dom";
import PlansModal from "@/components/PlansModal";
import { motion } from "framer-motion";

const HeroSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";
  const [plansModalOpen, setPlansModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section - Clean & Dark */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28">
        {/* Gradient Background - Purple glow */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Sparkle weight="fill" className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Agentes Autônomos de IA</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <motion.span 
                    className="block text-foreground mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Transforme sua
                  </motion.span>
                  <motion.span 
                    className="block text-foreground mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    empresa com
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Inteligência Artificial
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Agentes autônomos que automatizam processos, qualificam leads e liberam seu time para o que realmente importa.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="group text-base px-8 h-14 bg-purple-600/90 hover:bg-purple-700/90 text-white transition-all"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <ChatCircleDots weight="fill" className="mr-2 h-5 w-5" />
                    Agendar demonstração
                    <ArrowRight weight="bold" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 h-14 border-2 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                  onClick={() => setPlansModalOpen(true)}
                >
                  Ver planos
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <div className="flex items-center gap-2">
                    <Lightning weight="fill" className="h-5 w-5 text-purple-400" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">24/7</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Atendimento</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="flex items-center gap-2">
                    <Target weight="fill" className="h-5 w-5 text-purple-400" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">85%</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Economia</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className="flex items-center gap-2">
                    <Brain weight="fill" className="h-5 w-5 text-purple-400" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3x</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Conversões</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Vivan Image */}
            <motion.div 
              className="relative lg:ml-8"
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-purple-500/30 rounded-3xl blur-3xl animate-pulse" />
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20">
                  <img 
                    src="/imagem_vivan.png" 
                    alt="Vivan - Agente de IA ConverseIA" 
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                  
                  {/* Badge - Vivan Online */}
                  <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-xl rounded-2xl p-5 border border-purple-500/20 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-6 h-6 border-2 border-purple-600/60 rounded-full animate-ping" />
                        <div className="absolute inset-0 w-6 h-6 border border-purple-600/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">Vivan</p>
                        <p className="text-sm text-muted-foreground">Agente Autônoma de IA • Online</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                          <Brain weight="fill" className="h-5 w-5 text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full p-1">
            <div className="w-2 h-3 bg-purple-500 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Solutions Section - Integrated */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Soluções especializadas para seu mercado
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agentes de IA personalizados para as necessidades específicas do seu setor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card Clínicas */}
            <Link to="/conciarge" className="group">
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                <div className="absolute top-8 right-8 w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Z"/>
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">ConverseIA Conciarge</h3>
                    <p className="text-sm text-teal-400 font-semibold mb-4">Para Clínicas e Profissionais de Saúde</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Automatize agendamentos, confirmações e atendimento ao paciente 24/7. 
                      Aumente a taxa de ocupação e reduza faltas com nossa IA especializada em saúde.
                    </p>
                  </div>
                  
                  <div className="flex items-center text-teal-400 font-semibold group-hover:gap-3 gap-2 transition-all pt-4">
                    <span>Conhecer solução</span>
                    <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card Direito */}
            <Link to="/direito" className="group">
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="absolute top-8 right-8 w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M240,120h-8V96a16,16,0,0,0-16-16H136V40a8,8,0,0,0-16,0V80H40A16,16,0,0,0,24,96v24H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16Z"/>
                  </svg>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">ConverseIA Direito</h3>
                    <p className="text-sm text-blue-400 font-semibold mb-4">Para Escritórios de Advocacia</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Qualifique leads jurídicos, automatize triagem de casos e ofereça atendimento inicial 
                      inteligente. Aumente conversões e otimize o tempo da sua equipe jurídica.
                    </p>
                  </div>
                  
                  <div className="flex items-center text-blue-400 font-semibold group-hover:gap-3 gap-2 transition-all pt-4">
                    <span>Conhecer solução</span>
                    <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <PlansModal open={plansModalOpen} onOpenChange={setPlansModalOpen} />
    </>
  );
};

export default HeroSection;