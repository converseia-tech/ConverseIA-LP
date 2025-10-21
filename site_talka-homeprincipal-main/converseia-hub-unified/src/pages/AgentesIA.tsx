import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Brain, Cog, MessageSquare, Database, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const AgentesIA = () => {
  const agentes = [
    {
      icon: MessageSquare,
      nome: 'Agente Conversacional',
      descricao: 'Atendimento inteligente 24/7 com compreensão de contexto e linguagem natural.',
      recursos: ['Multicanal (WhatsApp, Web, Apps)', 'Personalização de respostas', 'Integração com CRM'],
    },
    {
      icon: Brain,
      nome: 'Agente de Análise',
      descricao: 'Processamento e análise de grandes volumes de dados com insights acionáveis.',
      recursos: ['Machine Learning avançado', 'Detecção de padrões', 'Relatórios automáticos'],
    },
    {
      icon: Cog,
      nome: 'Agente de Automação',
      descricao: 'Execução autônoma de processos complexos com tomada de decisão inteligente.',
      recursos: ['Workflows adaptativos', 'Integração de sistemas', 'Monitoramento contínuo'],
    },
    {
      icon: Database,
      nome: 'Agente de Dados',
      descricao: 'Coleta, organização e enriquecimento de dados de múltiplas fontes.',
      recursos: ['ETL inteligente', 'Validação automatizada', 'Sincronização em tempo real'],
    },
    {
      icon: Zap,
      nome: 'Agente de Decisão',
      descricao: 'Tomada de decisões baseada em regras e aprendizado de máquina.',
      recursos: ['Scoring preditivo', 'Otimização de processos', 'Recomendações inteligentes'],
    },
    {
      icon: Shield,
      nome: 'Agente de Segurança',
      descricao: 'Monitoramento e proteção proativa de sistemas e dados.',
      recursos: ['Detecção de anomalias', 'Resposta automática a incidentes', 'Compliance automatizado'],
    },
  ];

  return (
    <div className="min-h-screen bg-hub-darker">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-hub-darker via-hub-dark to-hub-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent">
                Agentes de IA
              </span>{' '}
              Autônomos
            </motion.h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Tecnologia de ponta que vai além da automação tradicional. Agentes inteligentes
              que pensam, aprendem e executam tarefas complexas de forma autônoma.
            </p>
          </div>
        </section>

        {/* Grid de Agentes */}
        <section className="py-24 bg-hub-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agentes.map((agente, index) => {
                const Icon = agente.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-hub-darker border border-hub-primary/20 rounded-2xl p-6 hover:border-hub-primary/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-hub-primary to-hub-accent rounded-xl inline-block mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{agente.nome}</h3>
                    <p className="text-white/60 mb-4">{agente.descricao}</p>
                    <ul className="space-y-2">
                      {agente.recursos.map((recurso, i) => (
                        <li key={i} className="flex items-center text-sm text-white/50">
                          <span className="w-1.5 h-1.5 bg-hub-primary rounded-full mr-2" />
                          {recurso}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgentesIA;
