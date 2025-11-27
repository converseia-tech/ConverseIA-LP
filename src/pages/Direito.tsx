import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Scales, ShieldCheck } from "phosphor-react";
import { motion } from "framer-motion";
import { InfiniteCarousel } from "@/components/ui/infinite-carousel";
import { LINK_CTA_WHATSAPP } from "@/lib/constants";
import { GlobalBackground } from "@/components/GlobalBackground";

const Direito = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carrossel de Clientes
  const clients = [
    { name: "Grupo FV", logo: "/brands/grupo-fv.svg" },
    { name: "MC Adv", logo: "/brands/mc-adv.svg" },
    { name: "Eurofarma", logo: "/brands/eurofarma.svg" },
    { name: "Grupo FV", logo: "/brands/grupo-fv.svg" },
    { name: "MC Adv", logo: "/brands/mc-adv.svg" },
    { name: "Eurofarma", logo: "/brands/eurofarma.svg" },
  ];

  const clientItems = clients.map((client, index) => (
    <div
      key={`${client.name}-${index}`}
      className="flex items-center justify-center px-8 py-4 h-24 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-12 w-auto object-contain transition-all opacity-50 grayscale brightness-0 invert group-hover:opacity-100"
      />
    </div>
  ));

  // Carrossel de Integrações
  const integrations = [
    { name: "PJe", logo: "/brands/pje.svg" },
    { name: "TJAM", logo: "/brands/tjam.png" },
    { name: "TJCE", logo: "/brands/tjce.png" },
    { name: "PJe", logo: "/brands/pje.svg" },
    { name: "TJAM", logo: "/brands/tjam.png" },
    { name: "TJCE", logo: "/brands/tjce.png" },
  ];

  const integrationItems = integrations.map((tech, index) => (
    <div
      key={`${tech.name}-${index}`}
      className="flex items-center justify-center px-8 py-4 h-24 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
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
      icon: Wrench,
      title: "Automação Jurídica",
      description: "Automatize triagem de casos e agendamento de consultas com inteligência artificial especializada."
    },
    {
      icon: ShieldCheck,
      title: "Segurança de Dados",
      description: "Proteção total das informações dos seus clientes com criptografia de ponta a ponta."
    },
    {
      icon: Scales,
      title: "Gestão de Processos",
      description: "Integração com sistemas de gestão para acompanhamento processual em tempo real."
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-blue-500/30">
      <GlobalBackground />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Gradients - Mantidos mas mais sutis para misturar com o GlobalBackground */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none mix-blend-screen" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Especializado para Advogados
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                  Tenha atendimento 24h com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055fb] to-blue-400">Agentes de IA</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Funcionários de Inteligência Artificial que trabalham por você e para você, qualificando leads e agendando consultas automaticamente.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-[#0055fb] hover:bg-blue-600 text-white px-8 h-14 text-lg shadow-[0_0_30px_rgba(0,85,251,0.3)] transition-all hover:scale-105"
                    asChild
                  >
                    <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                      Falar com Especialista
                      <ArrowRight className="ml-2 w-5 h-5" weight="bold" />
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-14 text-lg backdrop-blur-sm"
                  >
                    Ver Demonstração
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-50" />
                  <img 
                    src="/elements/hero-wrapper.png" 
                    alt="Dashboard ConverseIA Direito" 
                    className="w-full h-auto rounded-xl relative z-10"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl mix-blend-screen" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
              Integrações Nativas com seu Software Jurídico
            </p>
            <InfiniteCarousel items={integrationItems} autoplayDelay={3000} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tudo que seu escritório precisa para escalar
              </h2>
              <p className="text-lg text-slate-400">
                Tecnologia desenvolvida especificamente para as necessidades do setor jurídico brasileiro.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all hover:-translate-y-1 group backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
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
              Escritórios que confiam na nossa tecnologia
            </p>
            <InfiniteCarousel items={clientItems} autoplayDelay={2500} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para modernizar seu escritório?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Junte-se aos escritórios que já estão usando IA para crescer e atender melhor seus clientes.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#0055fb] hover:bg-blue-50 px-10 h-16 text-lg font-bold shadow-xl transition-transform hover:scale-105"
              asChild
            >
              <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                Começar Agora
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

export default Direito;
