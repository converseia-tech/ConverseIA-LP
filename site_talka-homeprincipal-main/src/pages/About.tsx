import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Link as LinkIcon, Bot, Sparkles, Zap, Target, Eye, Heart, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
                <span className="gradient-text">Inteligência que Transforma</span>
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gradient-CONVERSEIA mx-auto rounded-full mb-8"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-corporate-lg max-w-4xl mx-auto px-4 leading-relaxed">
                Criamos Agentes Autônomos de Inteligência Artificial que atuam como verdadeiros membros da sua equipe.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
                O poder dos <span className="gradient-text">Agentes de IA</span>
              </h2>
              <p className="text-lg sm:text-xl text-corporate-lg max-w-4xl mx-auto text-center px-4">
                Vamos além dos chatbots tradicionais. Nossos agentes interpretam dados e tomam decisões.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-xl mb-4 sm:mb-6 w-fit">
                    <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">IA Conversacional</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">Agentes que dialogam com fluidez e entendem contexto.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-xl mb-4 sm:mb-6 w-fit">
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Automação Inteligente</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">Automatizamos processos complexos de ponta a ponta.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-xl mb-4 sm:mb-6 w-fit">
                    <LinkIcon className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Integrações</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">Conectamos sistemas em um ecossistema unificado.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-xl mb-4 sm:mb-6 w-fit">
                    <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Especializados</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">Agentes específicos para vendas, suporte e mais.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-xl mb-4 sm:mb-6 w-fit">
                    <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Aprendizado Contínuo</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">Aprendem e melhoram com cada interação.</p>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-xl mb-4 sm:mb-6 w-fit">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Implementação Rápida</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">Resultados imediatos e ágeis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Soluções <span className="gradient-text">Especializadas</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 sm:p-8 h-full flex flex-col hover:shadow-glow transition-all duration-500">
                  <div className="mb-6">
                    <img src="/logoescurahorizontal.png" alt="ConverseIA Direito" className="h-10 sm:h-12 w-auto" />
                    <p className="text-muted-foreground mt-2 text-sm">Setor Jurídico</p>
                  </div>
                  <p className="text-base sm:text-lg text-corporate-lg mb-6 flex-grow">
                    Agentes especializados que automatizam triagem e qualificam leads em tempo real.
                  </p>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/direito">Conheça a solução</Link>
                  </Button>
                </div>
              </div>

              <div className="group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 sm:p-8 h-full flex flex-col hover:shadow-glow transition-all duration-500">
                  <div className="mb-6">
                    <img src="/Conciarge(NEGATIVO+FUNDOTRANSPARENTE)-logo5.png" alt="Conciarge" className="h-12 sm:h-16 w-auto" />
                    <p className="text-muted-foreground mt-2 text-sm">Setor de Saúde</p>
                  </div>
                  <p className="text-base sm:text-lg text-corporate-lg mb-6 flex-grow">
                    Agendamento inteligente 24/7 e comunicação empática automatizada.
                  </p>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/conciarge">Conheça a solução</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-CONVERSEIA p-1 rounded-3xl">
              <div className="bg-background rounded-3xl p-8 sm:p-12 text-center">
                <Sparkles className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-6 text-accent" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Projetos <span className="gradient-text">Personalizados</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-corporate-lg max-w-3xl mx-auto mb-8">
                  Criamos Agentes de IA totalmente personalizados para sua operação.
                </p>
                <Button asChild size="lg">
                  <Link to="/contato">Fale com um especialista</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-2xl mx-auto w-fit mb-4">
                    <Target className="h-8 w-8 sm:h-10 sm:w-10 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">
                    Simplificar processos através de Agentes de IA.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-2xl mx-auto w-fit mb-4">
                    <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
                  <p className="text-sm sm:text-base text-corporate-lg">
                    Ser o principal catalisador da transformação digital.
                  </p>
                </div>
              </div>

              <div className="text-center group md:col-span-2 lg:col-span-1 mx-auto w-full max-w-md lg:max-w-none">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 h-full hover:shadow-glow transition-all duration-500">
                  <div className="p-3 sm:p-4 bg-gradient-CONVERSEIA rounded-2xl mx-auto w-fit mb-4">
                    <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Nossos Valores</h3>
                  <div className="space-y-3 text-left">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Inovação Ousada</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">Desafiamos o status quo.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Parceria Profunda</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">Sucesso do cliente é nossa métrica.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Impacto Real</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">Resultados transformadores.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Pronto para <span className="gradient-text">automatizar</span> sua operação?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-corporate-lg mb-8 px-4">
              Descubra como nossos Agentes de IA podem transformar sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contato">Falar com Especialista</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="https://converseia.gitbook.io/converseia-docs" target="_blank" rel="noopener noreferrer">
                  Ver Documentação
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;