import { Brain, Bot, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AgentsShowcase = () => {
  const agents = [
    {
      icon: Brain,
      title: 'Agentes Autônomos',
      description:
        'IA que pensa, decide e executa tarefas complexas sem intervenção humana constante.',
      color: 'from-hub-primary to-hub-secondary',
    },
    {
      icon: Bot,
      title: 'Automação Inteligente',
      description:
        'Processos automatizados que se adaptam e aprendem continuamente com os dados.',
      color: 'from-hub-secondary to-hub-accent',
    },
    {
      icon: Sparkles,
      title: 'Integração Total',
      description:
        'Conecte seus sistemas e ferramentas em um ecossistema unificado e eficiente.',
      color: 'from-hub-accent to-hub-primary',
    },
    {
      icon: Zap,
      title: 'Resultados em Escala',
      description:
        'Multiplique sua capacidade operacional sem aumentar custos proporcionalmente.',
      color: 'from-hub-primary to-hub-accent',
    },
  ];

  return (
    <section className="py-24 bg-hub-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent">
              Agentes de IA
            </span>{' '}
            que transformam negócios
          </motion.h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tecnologia de ponta que vai além da automação tradicional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-hub-darker border border-hub-primary/20 rounded-2xl p-6 h-full hover:border-hub-primary/50 transition-all duration-300">
                  <div
                    className={`p-3 bg-gradient-to-br ${agent.color} rounded-xl inline-block mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {agent.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/agentes-ia"
            className="inline-block text-hub-primary hover:text-hub-secondary transition-colors font-medium"
          >
            Ver todos os Agentes de IA →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgentsShowcase;
