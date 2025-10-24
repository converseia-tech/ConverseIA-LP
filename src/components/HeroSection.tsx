import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Zap, Brain, Target } from "lucide-react";
import PlansModal from "@/components/PlansModal";

const HeroSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";
  const [plansModalOpen, setPlansModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background com pattern da Converseia */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0020] via-[#1a0f3f] to-[#2a1555]" />
      
      {/* Pattern overlay da Converseia */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gradiente overlay para suavizar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0020]/50 to-[#0A0020]" />
      
      {/* Elementos 3D de profundidade animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos de profundidade com roxo Converseia */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#9742FF]/20 rounded-full blur-3xl animate-pulse" 
             style={{ transform: 'translateZ(-100px)' }} />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#9742FF]/15 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s', transform: 'translateZ(-100px)' }} />
        
        {/* Elementos geométricos 3D flutuantes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#9742FF]/20 rounded-lg animate-float-slow rotate-45"
             style={{ transform: 'perspective(1000px) rotateX(45deg)' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-[#9742FF]/20 rounded-full animate-float-slower"
             style={{ transform: 'perspective(1000px) rotateY(45deg)' }} />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-[#9742FF]/15 rounded-lg animate-float-slow"
             style={{ transform: 'perspective(1000px) rotateX(-30deg) rotateY(30deg)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Badge 3D */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9742FF]/10 border border-[#9742FF]/30 backdrop-blur-sm shadow-lg"
                 style={{ transform: 'perspective(1000px) translateZ(20px)' }}>
              <Sparkles className="w-4 h-4 text-[#9742FF] animate-pulse" />
              <span className="text-sm font-medium text-[#9742FF]">Agentes Autônomos de IA</span>
            </div>

            {/* Main Heading com efeito de profundidade */}
            <div className="space-y-4" style={{ transform: 'perspective(1000px) translateZ(30px)' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground mb-2">Transforme sua empresa com</span>
                <span className="block gradient-text text-shadow-lg">Inteligência Artificial</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Agentes autônomos que automatizam processos, qualificam leads e liberam seu time para o que realmente importa. Conheça a Vivan, nossa agente especializada.
              </p>
            </div>

            {/* CTA Buttons com efeito 3D */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2"
                 style={{ transform: 'perspective(1000px) translateZ(40px)' }}>
              <Button 
                asChild 
                size="lg" 
                className="group w-full sm:w-auto text-base px-6 lg:px-8 h-12 lg:h-14 shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ transform: 'translateZ(0)' }}
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar demonstração
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base px-6 lg:px-8 h-12 lg:h-14 border-2 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setPlansModalOpen(true)}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Ver planos
              </Button>
            </div>

            {/* Stats com ícones 3D */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-border/40"
                 style={{ transform: 'perspective(1000px) translateZ(20px)' }}>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">24/7</div>
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">Atendimento</div>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">85%</div>
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">Economia</div>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">3x</div>
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground">Conversões</div>
              </div>
            </div>
          </div>

          {/* Right - Vivan Image com efeito 3D interativo */}
          <div className="relative order-1 lg:order-2 animate-fade-in perspective-container">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none"
                 style={{ transform: 'perspective(1500px) rotateY(-5deg)' }}>
              
              {/* Camadas de profundidade 3D */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9742FF]/30 via-[#9742FF]/20 to-[#9742FF]/30 rounded-2xl blur-3xl transform scale-110 animate-pulse-slow"
                   style={{ transform: 'translateZ(-80px)' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-[#9742FF]/20 via-[#9742FF]/10 to-[#9742FF]/20 rounded-2xl blur-2xl transform scale-105"
                   style={{ transform: 'translateZ(-40px)' }} />
              
              {/* Container da imagem com efeito 3D */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#9742FF]/20 transform transition-all duration-500 hover:scale-105 hover:rotate-0"
                   style={{ 
                     transform: 'translateZ(0) rotateY(5deg)',
                     boxShadow: '0 25px 50px -12px rgba(151, 66, 255, 0.25), 0 0 60px rgba(151, 66, 255, 0.15)'
                   }}>
                <img 
                  src="/imagem_vivan.png" 
                  alt="Vivan - Agente de IA ConverseIA" 
                  className="w-full h-auto object-cover"
                  style={{ filter: 'contrast(1.05) brightness(1.05)' }}
                />
                
                {/* Reflexo/Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shine" />
                
                {/* Badge com profundidade 3D */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md rounded-xl p-4 border border-[#9742FF]/20 shadow-2xl transform transition-all duration-300 hover:scale-105"
                     style={{ transform: 'translateZ(50px)' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">Vivan</p>
                      <p className="text-xs text-muted-foreground">Agente Autônoma de IA • Online</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#9742FF]/10 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-[#9742FF]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partículas flutuantes ao redor */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#9742FF]/20 rounded-full blur-xl animate-float-slow" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#9742FF]/20 rounded-full blur-xl animate-float-slower" />
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#9742FF]/20 rounded-full blur-lg animate-float-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator com efeito 3D */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block"
           style={{ transform: 'perspective(1000px) translateZ(30px) translateX(-50%)' }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1 shadow-lg">
          <div className="w-2 h-3 bg-[#9742FF] rounded-full mx-auto animate-pulse" />
        </div>
      </div>

      <PlansModal open={plansModalOpen} onOpenChange={setPlansModalOpen} />
    </section>
  );
};

export default HeroSection;