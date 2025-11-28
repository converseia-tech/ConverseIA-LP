import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBar, ChatCircleDots, Code, Globe, Robot, Users } from "phosphor-react";
import { motion } from "framer-motion";
import { InfiniteCarousel } from "@/components/ui/infinite-carousel";
import { LINK_CTA_WHATSAPP } from "@/lib/constants";
import { GlobalBackground } from "@/components/GlobalBackground";

const Plataforma = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carrossel de Clientes (Reusing some generic ones or placeholders)
  const clients = [
    { name: "Braspex", logo: "/Logos_empresas/logo_braspex.png" },
    { name: "Protogas", logo: "/Logos_empresas/logo_protogas.png" },
    { name: "Mapion", logo: "/Logos_empresas/logo_mapion.png" },
    { name: "Braspex", logo: "/Logos_empresas/logo_braspex.png" },
    { name: "Protogas", logo: "/Logos_empresas/logo_protogas.png" },
    { name: "Mapion", logo: "/Logos_empresas/logo_mapion.png" },
  ];

  const clientItems = clients.map((client, index) => (
    <div
      key={`${client.name}-${index}`}
      className="flex items-center justify-center px-8 py-4 h-24 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-12 w-auto object-contain transition-all opacity-50 grayscale brightness-0 invert group-hover:opacity-100"
      />
    </div>
  ));

  // Carrossel de Tecnologias/Integrações
  const technologies = [
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    { name: "Supabase", logo: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo.svg" },
  ];

  const techItems = technologies.map((tech, index) => (
    <div
      key={`${tech.name}-${index}`}
      className="flex items-center justify-center px-8 py-4 h-24 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
    >
      <img
        src={tech.logo}
        alt={tech.name}
        className="max-h-10 w-auto object-contain transition-all opacity-50 grayscale brightness-0 invert group-hover:opacity-100"
      />
    </div>
  ));

  const features = [
    {
      icon: ChatCircleDots,
      title: "Plataforma Chat & CRM",
      description: "Centralize todos os seus canais de atendimento (WhatsApp, Instagram, Web) em um único lugar com CRM integrado."
    },
    {
      icon: Robot,
      title: "Agentes de IA Personalizados",
      description: "Crie assistentes virtuais treinados com seus dados para atender clientes, agendar reuniões e tirar dúvidas 24/7."
    },
    {
      icon: ChartBar,
      title: "Business Intelligence (BI)",
      description: "Dashboards em tempo real para acompanhar métricas de atendimento, vendas e performance da equipe."
    },
    {
      icon: Globe,
      title: "Landing Pages e Sites",
      description: "Desenvolvimento de páginas de alta conversão otimizadas para SEO e performance."
    },
    {
      icon: Code,
      title: "Sistemas Sob Medida",
      description: "Soluções tecnológicas desenvolvidas especificamente para as necessidades do seu negócio."
    },
    {
      icon: Users,
      title: "Gestão de Equipes",
      description: "Ferramentas completas para gerenciar permissões, filas de atendimento e produtividade do time."
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-purple-500/30">
      <GlobalBackground />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none mix-blend-screen" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  Tecnologia de Ponta
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                  A plataforma completa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">escalar seu negócio</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Chat, CRM, BI, Sites e Agentes de IA em um único ecossistema. Simplifique processos e potencialize resultados com a ConverseIA.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 h-14 text-lg shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all hover:scale-105"
                    asChild
                  >
                    <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                      Falar com Consultor
                      <ArrowRight className="ml-2 w-5 h-5" weight="bold" />
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-14 text-lg backdrop-blur-sm"
                  >
                    Conhecer Recursos
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-50" />
                  <img 
                    src="/elements/hero-wrapper.png" 
                    alt="Dashboard ConverseIA" 
                    className="w-full h-auto rounded-xl relative z-10"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl mix-blend-screen" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
              Desenvolvido com as melhores tecnologias do mercado
            </p>
            <InfiniteCarousel items={techItems} autoplayDelay={3000} />
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="text-lg text-slate-400">
                Nossa plataforma modular se adapta ao tamanho e necessidade da sua empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all hover:-translate-y-1 group backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300">
                    <feature.icon size={32} weight="duotone" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
              Empresas que confiam na ConverseIA
            </p>
            <InfiniteCarousel items={clientItems} autoplayDelay={2500} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforme sua empresa hoje
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Agende uma demonstração e descubra como nossas soluções podem acelerar seu crescimento.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 px-10 h-16 text-lg font-bold shadow-xl transition-transform hover:scale-105"
              asChild
            >
              <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                Agendar Demonstração
                <ArrowRight className="ml-2 w-5 h-5" weight="bold" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Plataforma;
