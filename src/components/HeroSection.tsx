import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Zap, Brain, Target } from "lucide-react";
import PlansModal from "@/components/PlansModal";

const HeroSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";
  const [plansModalOpen, setPlansModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'url(/pattern.png)',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30" />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft colored circles */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
        
        {/* Minimal geometric elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-200/30 rounded-lg animate-float-slow rotate-45" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-blue-200/30 rounded-full animate-float-slower" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-purple-100/30 rounded-lg animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Badge - cleaner design */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
              <span className="text-sm font-medium text-purple-700">Agentes Autônomos de IA</span>
            </div>

            {/* Main Heading - cleaner */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gray-900 mb-2">Transforme sua empresa com</span>
                <span className="block gradient-text">Inteligência Artificial</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Agentes autônomos que automatizam processos, qualificam leads e liberam seu time para o que realmente importa. Conheça a Vivan, nossa agente especializada.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                asChild 
                size="lg" 
                className="group w-full sm:w-auto text-base px-6 lg:px-8 h-12 lg:h-14 shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="w-full sm:w-auto text-base px-6 lg:px-8 h-12 lg:h-14 border-2 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                onClick={() => setPlansModalOpen(true)}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Ver planos
              </Button>
            </div>

            {/* Stats - cleaner design */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200">
              <div className="space-y-2 group">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">24/7</div>
                </div>
                <div className="text-xs lg:text-sm text-gray-600">Atendimento</div>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">85%</div>
                </div>
                <div className="text-xs lg:text-sm text-gray-600">Economia</div>
              </div>
              <div className="space-y-2 group">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">3x</div>
                </div>
                <div className="text-xs lg:text-sm text-gray-600">Conversões</div>
              </div>
            </div>
          </div>

          {/* Right - Vivan Image - cleaner design */}
          <div className="relative order-1 lg:order-2 animate-fade-in">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              
              {/* Soft glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-purple-100/20 to-blue-200/40 rounded-2xl blur-3xl transform scale-110 animate-pulse-slow" />
              
              {/* Container da imagem */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-purple-100 transform transition-all duration-500 hover:scale-105 bg-white">
                <img 
                  src="/imagem_vivan.png" 
                  alt="Vivan - Agente de IA ConverseIA" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Badge - cleaner */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-purple-100 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">Vivan</p>
                      <p className="text-xs text-gray-600">Agente Autônoma de IA • Online</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal floating particles */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-200/40 rounded-full blur-xl animate-float-slow" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-200/40 rounded-full blur-xl animate-float-slower" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full p-1 shadow-sm">
          <div className="w-2 h-3 bg-purple-500 rounded-full mx-auto animate-pulse" />
        </div>
      </div>

      <PlansModal open={plansModalOpen} onOpenChange={setPlansModalOpen} />
    </section>
  );
};

export default HeroSection;