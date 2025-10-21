import { motion } from 'framer-motion';
import { Cog, Zap, Target, TrendingUp } from 'lucide-react';

const InnovationSection = () => {
  const features = [
    {
      icon: Cog,
      title: 'Gestão Estratégica de Processos',
      description:
        'Mapeamento e redesenho completo dos fluxos de trabalho para máxima eficiência.',
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description:
        'Agentes de IA que aprendem, decidem e executam tarefas complexas autonomamente.',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description:
        'Soluções orientadas a impacto real nos negócios, não apenas tecnologia.',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Sustentável',
      description:
        'Escalabilidade sem aumento proporcional de custos operacionais.',
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
            Por que escolher o{' '}
            <span className="bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent">
              ConverseIA Hub
            </span>
          </motion.h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Inteligência que transforma. Automação que libera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-hub-darker border border-hub-primary/20 rounded-2xl p-6 hover:border-hub-primary/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-hub-primary to-hub-accent rounded-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
