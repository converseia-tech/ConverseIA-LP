import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Scale } from 'lucide-react';

const DivisionsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-hub-dark to-hub-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossas{' '}
            <span className="bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent">
              Divisões Especializadas
            </span>
          </motion.h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Soluções verticalizadas para setores específicos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Conciarge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-conciarge-dark to-conciarge-dark/80 border border-conciarge-primary/30 rounded-2xl p-8 h-full hover:border-conciarge-primary transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-conciarge-primary to-conciarge-secondary rounded-xl mr-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    ConverseIA Conciarge
                  </h3>
                  <p className="text-conciarge-primary text-sm font-medium">
                    Saúde & Clínicas
                  </p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Transforme leads em pacientes agendados com automação inteligente.
                Agentes de IA especializados em atendimento médico, qualificação de
                leads e agendamento automático.
              </p>

              <ul className="space-y-2 mb-6 text-white/70 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2" />
                  Agente Concierge para atendimento
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2" />
                  Qualificação automática de leads
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2" />
                  Agendamento integrado
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2" />
                  CRM especializado em saúde
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-conciarge-primary hover:bg-conciarge-secondary"
              >
                <Link to="/conciarge">
                  Conhecer Conciarge
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Direito */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-direito-dark to-direito-darker border border-direito-primary/30 rounded-2xl p-8 h-full hover:border-direito-primary transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-direito-primary to-direito-secondary rounded-xl mr-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    ConverseIA Direito
                  </h3>
                  <p className="text-direito-primary text-sm font-medium">
                    Advocacia & Jurídico
                  </p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Automação jurídica com inteligência artificial. Agentes especializados
                em análise de documentos, pesquisa jurisprudencial e gestão de processos
                para escritórios de advocacia.
              </p>

              <ul className="space-y-2 mb-6 text-white/70 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2" />
                  Análise automática de contratos
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2" />
                  Pesquisa jurisprudencial inteligente
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2" />
                  Gestão de prazos e processos
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2" />
                  Redação assistida por IA
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-direito-primary hover:bg-direito-secondary"
              >
                <Link to="/direito">
                  Conhecer Direito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
