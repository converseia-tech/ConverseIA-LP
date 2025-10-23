import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Plataforma = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <section className="py-24 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Plataforma <span className="text-accent">ConverseIA</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A plataforma completa para criar, gerenciar e escalar seus agentes de IA
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Criação de Agentes</h3>
                <p className="text-muted-foreground">
                  Interface intuitiva para criar e configurar agentes de IA personalizados para seu negócio
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Integrações</h3>
                <p className="text-muted-foreground">
                  Conecte facilmente com WhatsApp, Instagram, Facebook e outros canais de comunicação
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">CRM Integrado</h3>
                <p className="text-muted-foreground">
                  Gerencie seus leads e clientes em um único lugar com automações inteligentes
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Analytics</h3>
                <p className="text-muted-foreground">
                  Acompanhe métricas e KPIs em tempo real para otimizar suas conversões
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Multi-agente</h3>
                <p className="text-muted-foreground">
                  Crie múltiplos agentes especializados que trabalham em conjunto
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Segurança</h3>
                <p className="text-muted-foreground">
                  Proteção de dados e conformidade com LGPD garantidas
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://converseia.gitbook.io/converseia-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Acessar Documentação
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Plataforma;
