import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, Heart, TrendUp, Users } from "phosphor-react";
import { motion } from "framer-motion";
import { InfiniteCarousel } from "@/components/ui/infinite-carousel";
import { LINK_CTA_WHATSAPP } from "@/lib/constants";
import { GlobalBackground } from "@/components/GlobalBackground";

const Conciarge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carrossel de Clientes
  const clients = [
    { name: "Vemed Saúde", logo: "/logos_empresas/logo_vemed_saúde.png" },
    { name: "Rede Ame", logo: "/logos_empresas/logo_rede_ame.png" },
    { name: "Vemed Saúde", logo: "/logos_empresas/logo_vemed_saúde.png" },
    { name: "Rede Ame", logo: "/logos_empresas/logo_rede_ame.png" },
    { name: "Vemed Saúde", logo: "/logos_empresas/logo_vemed_saúde.png" },
    { name: "Rede Ame", logo: "/logos_empresas/logo_rede_ame.png" },
  ];

  const clientItems = clients.map((client, index) => (
    <div
      key={`${client.name}-${index}`}
      className="flex items-center justify-center px-8 py-4 h-24 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group"
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
    { name: "Amigo App", logo: "/integracoes_conciarge/amigo.png" },
    { name: "Clínica Ágil", logo: "/integracoes_conciarge/clinicaagil.png" },
    { name: "iClinic", logo: "/integracoes_conciarge/iclinic.png" },
    { name: "MedX", logo: "/integracoes_conciarge/medx.png" },
    { name: "Amigo App", logo: "/integracoes_conciarge/amigo.png" },
    { name: "Clínica Ágil", logo: "/integracoes_conciarge/clinicaagil.png" },
    { name: "iClinic", logo: "/integracoes_conciarge/iclinic.png" },
    { name: "MedX", logo: "/integracoes_conciarge/medx.png" },
  ];

  const integrationItems = integrations.map((tech, index) => (
    <div
      key={`${tech.name}-${index}`}
      className="flex items-center justify-center px-8 py-4 h-24 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group"
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
      icon: CalendarCheck,
      title: "Agendamento Inteligente",
      description: "Sincronização automática com sua agenda, reduzindo conflitos e otimizando horários."
    },
    {
      icon: Users,
      title: "Triagem de Pacientes",
      description: "Qualificação prévia para direcionar cada paciente ao especialista ou procedimento correto."
    },
    {
      icon: TrendUp,
      title: "Redução de No-Show",
      description: "Lembretes automáticos e confirmações via WhatsApp que diminuem drasticamente as faltas."
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-teal-500/30">
      <GlobalBackground />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Gradients - Mantidos mas mais sutis */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none mix-blend-screen" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  Especializado para Clínicas
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                  Sua clínica transformada em uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20a5c2] to-teal-400">máquina de resultados</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Unifique agendamentos, marketing e vendas em um só lugar. O Conciarge automatiza processos e qualifica pacientes para você escalar com segurança.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-[#20a5c2] hover:bg-teal-600 text-white px-8 h-14 text-lg shadow-[0_0_30px_rgba(32,165,194,0.3)] transition-all hover:scale-105"
                    asChild
                  >
                    <a href={LINK_CTA_WHATSAPP} target="_blank" rel="noreferrer">
                      Agendar Demonstração
                      <ArrowRight className="ml-2 w-5 h-5" weight="bold" />
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-14 text-lg backdrop-blur-sm"
                  >
                    Ver Vídeo
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10 border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md">
                  <img 
                    src="/img/membros-dos-sindicatos-trabalhando-juntos.jpg" 
                    alt="Equipe médica usando Conciarge" 
                    className="w-full h-auto object-cover aspect-[4/3] opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart weight="fill" className="text-red-500 w-6 h-6 drop-shadow-lg" />
                      <span className="font-bold text-lg drop-shadow-md">Atendimento Humanizado</span>
                    </div>
                    <p className="text-sm text-slate-200 drop-shadow-md">Tecnologia que aproxima médicos e pacientes.</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl mix-blend-screen" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
              Integrações Nativas com seu Software Médico
            </p>
            <InfiniteCarousel items={integrationItems} autoplayDelay={3000} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gestão completa para sua clínica
              </h2>
              <p className="text-lg text-slate-400">
                Ferramentas essenciais para otimizar o fluxo de pacientes e aumentar o faturamento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-teal-500/50 hover:bg-white/[0.07] transition-all hover:-translate-y-1 group backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-900/30 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400 group-hover:text-teal-300 group-hover:scale-110 transition-all duration-300">
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
              Clínicas que crescem com Conciarge
            </p>
            <InfiniteCarousel items={clientItems} autoplayDelay={2500} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Leve sua clínica para o próximo nível
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              Descubra o real retorno sobre seu investimento em marketing e atendimento.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#20a5c2] hover:bg-teal-50 px-10 h-16 text-lg font-bold shadow-xl transition-transform hover:scale-105"
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

export default Conciarge;
