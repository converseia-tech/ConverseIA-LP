import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Brain } from "lucide-react";

const CapabilitiesSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Acelerando a <span className="gradient-text">transformação em escala</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gestão de Processos */}
          <div className="group">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-talka rounded-xl mr-4">
                  <Cog className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Gestão Estratégica & Tecnológica de Processos
                </h3>
              </div>
              
              <p className="text-corporate-lg mb-8 leading-relaxed">
                Mapeamos, analisamos e redesenhamos seus fluxos de trabalho do início ao fim. 
                Preparamos sua operação para ser mais ágil, eficiente e pronta para a 
                automação inteligente.
              </p>

              <Button variant="secondary" className="group">
                Saiba mais sobre Estratégia
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Automação com IA */}
          <div className="group">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-talka rounded-xl mr-4">
                  <Brain className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Automação com Agentes de IA Autônomos
                </h3>
              </div>
              
              <p className="text-corporate-lg mb-8 leading-relaxed">
                Vamos além dos robôs. Implementamos Agentes de Inteligência Artificial que 
                pensam, decidem e executam tarefas complexas, operando como uma força de 
                trabalho digital para escalar seus resultados.
              </p>

              <Button variant="secondary" className="group">
                Conheça nossa tecnologia de IA
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;