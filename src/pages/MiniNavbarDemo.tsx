import { MiniNavbar } from "@/components/ui/mini-navbar";
import { Sparkles, Code, Zap } from "lucide-react";

const MiniNavbarDemo = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover grayscale opacity-40"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Background Stars"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black"></div>
      </div>

      {/* Navbar */}
      <MiniNavbar />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            MINI NAVBAR
          </h1>
          
          {/* Subtitle */}
          <div className="flex flex-col sm:flex-row items-center justify-center text-xl text-gray-300 mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Modern Design
            </span>
            <span className="hidden sm:inline text-purple-400">•</span>
            <span className="flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" />
              shadcn UI
            </span>
            <span className="hidden sm:inline text-purple-400">•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Animated Effects
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Navbar com efeitos de animação de texto ao hover, submenu de produtos usando shadcn NavigationMenu, 
            e design glass/blur responsivo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button className="px-8 py-3 border border-[#333] bg-[rgba(31,31,31,0.62)] backdrop-blur-sm rounded-full text-white transition-all duration-200 hover:border-purple-500/50 hover:bg-purple-500/10 text-base inline-flex items-center justify-center group">
              <span className="mr-2">Ver Documentação</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative group">
              <div className="absolute inset-0 -m-2 rounded-full bg-purple-400 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div>
              <button className="relative z-10 px-8 py-3 text-base font-semibold text-black bg-gradient-to-br from-purple-400 to-pink-400 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-200 inline-flex items-center justify-center">
                Começar Agora
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl mx-auto w-full">
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-purple-400" />}
            title="Animações Suaves"
            description="Efeitos de hover com transição de texto vertical para uma experiência moderna"
          />
          <FeatureCard
            icon={<Code className="w-8 h-8 text-blue-400" />}
            title="shadcn UI"
            description="Componentes NavigationMenu integrados com design system consistente"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-yellow-400" />}
            title="Responsivo"
            description="Menu mobile com hamburger e transições fluidas entre desktop e mobile"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </main>

      {/* Content Section */}
      <section id="manifesto" className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Recursos Principais
          </h2>
          
          <div className="grid gap-8">
            <ContentBlock
              title="Navbar Glassmorphism"
              description="Design moderno com backdrop-blur e border sutil, criando efeito glass que se adapta ao conteúdo de fundo."
            />
            <ContentBlock
              title="Submenu de Produtos"
              description="Mega menu dropdown usando shadcn NavigationMenu com grid layout, ícones lucide-react e descrições detalhadas de cada solução."
            />
            <ContentBlock
              title="Animação de Links"
              description="Efeito de hover único onde o texto desliza verticalmente, revelando uma versão colorida do mesmo texto."
            />
            <ContentBlock
              title="Mobile First"
              description="Menu mobile totalmente funcional com botão hamburger, animações de abertura/fechamento e accordion para submenu."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl border border-[#333] bg-[rgba(31,31,31,0.62)] backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 space-y-3">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface ContentBlockProps {
  title: string;
  description: string;
}

const ContentBlock = ({ title, description }: ContentBlockProps) => {
  return (
    <div className="p-8 rounded-2xl border border-[#333] bg-[rgba(31,31,31,0.62)] backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default MiniNavbarDemo;
