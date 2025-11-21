import { Scales, Buildings, Database, Globe, Sparkle, Code } from "phosphor-react";
import { motion } from "framer-motion";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const AboutSection = () => {
  // Dados do ecossistema para o componente orbital
  const ecosystemData = [
    {
      id: 1,
      title: "Plataforma CRM",
      date: "Produto",
      content: "Centralize o relacionamento com clientes, automações de chat e inteligência de dados em uma única solução modular. Gestão completa com CRM, Chat IA e Business Intelligence integrados.",
      category: "PRODUTO",
      icon: Database,
      relatedIds: [2, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Landing Pages",
      date: "Produto",
      content: "Páginas rápidas, modernas e otimizadas para atrair leads e vender mais. Design alinhado à sua marca, carregamento rápido e estrutura pensada para conversão.",
      category: "PRODUTO",
      icon: Globe,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "Agentes de IA",
      date: "Produto",
      content: "Integre nossos agentes inteligentes à sua operação ou a qualquer plataforma já existente. Agentes autônomos e treináveis com integração flexível via APIs.",
      category: "PRODUTO",
      icon: Sparkle,
      relatedIds: [1, 2, 4, 5],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 4,
      title: "Direito",
      date: "Solução Setorial",
      content: "IA especializada para escritórios de advocacia. Automatize a prospecção, agendamento e relacionamento com clientes jurídicos. Qualificação de leads e CRM focado no setor.",
      category: "SETORIAL",
      icon: Scales,
      relatedIds: [3, 6],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "ConciArge Saúde",
      date: "Solução Setorial",
      content: "IA Concierge para clínicas e profissionais de saúde. Atendimento 24/7 com automação humanizada, agendamento inteligente e triagem básica para pacientes.",
      category: "SETORIAL",
      icon: Buildings,
      relatedIds: [3, 6],
      status: "in-progress" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Projetos Sob Medida",
      date: "Serviço",
      content: "Soluções de IA e automação sob medida para necessidades específicas do seu negócio. Desenvolvimento customizado com consultoria tecnológica e escalabilidade garantida.",
      category: "CUSTOMIZADO",
      icon: Code,
      relatedIds: [1, 2, 3, 4, 5],
      status: "pending" as const,
      energy: 75,
    },
  ];

  return (
    <div id="sobre" className="scroll-mt-20">
      {/* Ecossistema Converseia com Orbital Timeline */}
      <section className="relative">
        {/* Header da seção */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground px-4">
              Conheça o <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Ecossistema ConverseIA</span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Soluções completas para transformar seu negócio com Inteligência Artificial
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/70 max-w-2xl mx-auto px-4">
              Clique em cada solução para ver detalhes e conexões
            </p>
          </motion.div>
        </div>

        {/* Componente Orbital */}
        <RadialOrbitalTimeline timelineData={ecosystemData} />

        {/* Footer da seção */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 pt-6 sm:pt-8">
          <div className="text-center">
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Cada solução foi desenvolvida com expertise específica, garantindo que a IA compreenda profundamente as necessidades do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="/#contato"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-lg bg-purple-600/90 hover:bg-purple-700/90 text-white text-sm sm:text-base font-medium transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                Falar com Especialista
              </motion.a>
              <motion.a
                href="/contratacao"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-lg border-2 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 text-foreground text-sm sm:text-base font-medium transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Ver Demonstração
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
