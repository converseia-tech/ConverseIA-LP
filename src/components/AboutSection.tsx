import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Building2, Scale, Sparkles, MessageSquare, Brain, Briefcase, Zap } from "lucide-react";

const AboutSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";

  return (
    <div id="sobre" className="scroll-mt-20 bg-white">
      {/* Título Principal */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              <span className="gradient-text">Transformamos Negócios com IA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Agentes Autônomos de IA que atuam como membros da sua equipe, automatizando processos e gerando resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* Ecossistema Converseia - Redesigned with better distinction */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Conheça o <span className="gradient-text">Ecossistema Converseia</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluções especializadas de IA para diferentes setores, mantendo a excelência e inovação em cada vertical
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Converseia Hub Innovation */}
            <div className="group relative">
              <div className="relative bg-white border-2 border-purple-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:border-purple-300">
                <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl mb-6 w-fit">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Converseia Hub Innovation</h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Nossa plataforma central de inovação. Desenvolvimento de agentes autônomos de IA customizados para empresas de todos os setores.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Agentes personalizados para sua operação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Integração com seus sistemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Automação inteligente end-to-end</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Converseia Direito - Blue themed */}
            <div className="group relative">
              <div className="relative bg-white border-2 border-blue-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl mb-6 w-fit">
                  <Scale className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Converseia Direito</h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Solução especializada para escritórios de advocacia. IA que entende as particularidades do setor jurídico.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Qualificação inteligente de leads jurídicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Agendamento automatizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Gestão de relacionamento com clientes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Converseia Concierge - Teal themed */}
            <div className="group relative">
              <div className="relative bg-white border-2 border-teal-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:border-teal-300">
                <div className="p-4 bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl mb-6 w-fit">
                  <Building2 className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Converseia ConcIArge</h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Assistente virtual inteligente para clínicas. Gestão de atendimento automatizada com IA.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Atendimento 24/7 aos pacientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Agendamento e confirmação automatizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Comunicação personalizada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada solução foi desenvolvida com expertise específica do setor, garantindo que a IA compreenda profundamente as necessidades do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* O que fazemos de diferente - 4 Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-900">
              O que fazemos de <span className="gradient-text">diferente</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Vamos além dos chatbots. Criamos agentes inteligentes que interpretam dados, tomam decisões e executam ações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl mb-4 w-fit">
                  <MessageSquare className="h-7 w-7 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">IA Conversacional</h4>
                <p className="text-sm text-gray-600">Diálogos naturais com compreensão de contexto e personalização</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl mb-4 w-fit">
                  <Brain className="h-7 w-7 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Automação Inteligente</h4>
                <p className="text-sm text-gray-600">Processos complexos automatizados de ponta a ponta</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl mb-4 w-fit">
                  <Briefcase className="h-7 w-7 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Outros Nichos</h4>
                <p className="text-sm text-gray-600">Soluções adaptadas para clínicas, escritórios de advocacia e diversos setores</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl mb-4 w-fit">
                  <Zap className="h-7 w-7 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Projetos Personalizados</h4>
                <p className="text-sm text-gray-600">Desenvolvemos agentes customizados para suas necessidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Nossos <span className="gradient-text">Princípios</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl mx-auto w-fit mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Missão</h4>
                <p className="text-sm text-gray-600">
                  Simplificar operações e liberar equipes através de Agentes de IA autônomos
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl mx-auto w-fit mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Visão</h4>
                <p className="text-sm text-gray-600">
                  Ser referência em transformação digital com IA no Brasil
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl mx-auto w-fit mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Valores</h4>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
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
      <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Pronto para <span className="gradient-text">transformar</span> sua operação?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Agende uma conversa e descubra como nossos Agentes de IA podem impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white">
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
