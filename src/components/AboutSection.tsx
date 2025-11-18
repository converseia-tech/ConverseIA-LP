import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Buildings, Scales, Sparkle, ChatCircleDots, Brain, Briefcase, Lightning } from "phosphor-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";

  return (
    <div id="sobre" className="scroll-mt-20">
      {/* Título Principal */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-foreground">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Transformamos Negócios com IA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Agentes Autônomos de IA que atuam como membros da sua equipe, automatizando processos e gerando resultados reais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecossistema Converseia - NOVO */}
      <section className="section-padding bg-gradient-to-b from-background to-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Conheça o <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Ecossistema ConverseIA</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluções especializadas de IA para diferentes setores, mantendo a excelência e inovação em cada vertical
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Converseia Hub Innovation */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative bg-card border border-border hover:border-purple-500/50 rounded-2xl p-8 h-full hover:shadow-md hover:shadow-purple-500/5 transition-all duration-300">
                <div className="p-4 bg-purple-500/10 rounded-xl mb-6 w-fit">
                  <Sparkle weight="fill" className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">ConverseIA Hub Innovation</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Nossa plataforma central de inovação. Desenvolvimento de agentes autônomos de IA customizados para empresas de todos os setores.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9742FF] mt-1">•</span>
                    <span>Agentes personalizados para sua operação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9742FF] mt-1">•</span>
                    <span>Integração com seus sistemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9742FF] mt-1">•</span>
                    <span>Automação inteligente end-to-end</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Converseia Direito */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative bg-card border border-border hover:border-blue-500/50 rounded-2xl p-8 h-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <div className="p-4 bg-blue-500/10 rounded-xl mb-6 w-fit">
                  <Scales weight="fill" className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">ConverseIA Direito</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Solução especializada para escritórios de advocacia. IA que entende as particularidades do setor jurídico.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9742FF] mt-1">•</span>
                    <span>Qualificação inteligente de leads jurídicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9742FF] mt-1">•</span>
                    <span>Agendamento automatizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9742FF] mt-1">•</span>
                    <span>Gestão de relacionamento com clientes</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Converseia Concierge */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative bg-card border border-border hover:border-teal-500/50 rounded-2xl p-8 h-full hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                <div className="p-4 bg-teal-500/10 rounded-xl mb-6 w-fit">
                  <Buildings weight="fill" className="h-8 w-8 text-teal-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">ConverseIA Conciarge</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Solução para clínicas e profissionais de saúde. IA especializada em atendimento médico.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Agendamento automatizado 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Confirmações inteligentes de consultas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Atendimento humanizado ao paciente</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada solução foi desenvolvida com expertise específica do setor, garantindo que a IA compreenda profundamente as necessidades do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* O que fazemos de diferente - 4 Cards */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-foreground">
              O que fazemos de <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">diferente</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
              Vamos além dos chatbots. Criamos agentes inteligentes que interpretam dados, tomam decisões e executam ações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group">
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-md hover:shadow-purple-500/5 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-xl mb-4 w-fit">
                  <ChatCircleDots weight="fill" className="h-7 w-7 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">IA Conversacional</h4>
                <p className="text-sm text-muted-foreground">Diálogos naturais com compreensão de contexto e personalização</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-md hover:shadow-purple-500/5 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-xl mb-4 w-fit">
                  <Heart weight="fill" className="h-7 w-7 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Automação Inteligente</h4>
                <p className="text-sm text-muted-foreground">Processos complexos automatizados de ponta a ponta</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-md hover:shadow-purple-500/5 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-xl mb-4 w-fit">
                  <Briefcase weight="fill" className="h-7 w-7 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Outros Nichos</h4>
                <p className="text-sm text-muted-foreground">Soluções adaptadas para clínicas, escritórios de advocacia e diversos setores</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-md hover:shadow-purple-500/5 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-xl mb-4 w-fit">
                  <Lightning weight="fill" className="h-7 w-7 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Projetos Personalizados</h4>
                <p className="text-sm text-muted-foreground">Desenvolvemos agentes customizados para suas necessidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-padding bg-gradient-to-b from-background to-background/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-10 text-center text-foreground">
            Nossos <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Princípios</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-2xl mx-auto w-fit mb-4">
                  <Target weight="fill" className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Missão</h4>
                <p className="text-sm text-muted-foreground">
                  Simplificar operações e liberar equipes através de Agentes de IA autônomos
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-2xl mx-auto w-fit mb-4">
                  <Eye weight="fill" className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Visão</h4>
                <p className="text-sm text-muted-foreground">
                  Ser referência em transformação digital com IA no Brasil
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="p-3 bg-purple-500/10 rounded-2xl mx-auto w-fit mb-4">
                  <Heart weight="fill" className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Valores</h4>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Inovação constante</li>
                  <li>• Parceria verdadeira</li>
                  <li>• Resultados mensuráveis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Simplificado */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Pronto para <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">transformar</span> sua operação?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Agende uma conversa e descubra como nossos Agentes de IA podem impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600/90 hover:bg-purple-700/90 text-white">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://converseia.gitbook.io/converseia-docs" target="_blank" rel="noopener noreferrer">
                Ver Documentação
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
