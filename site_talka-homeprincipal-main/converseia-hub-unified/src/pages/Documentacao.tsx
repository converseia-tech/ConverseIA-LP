import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Documentacao = () => {
  return (
    <div className="min-h-screen bg-hub-dark">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent">
                Documentação
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-12 text-center max-w-3xl mx-auto">
              Guias, tutoriais e referências técnicas para todas as divisões do ConverseIA Hub
            </p>

            <Tabs defaultValue="hub" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="hub">Hub Innovation</TabsTrigger>
                <TabsTrigger value="conciarge">Conciarge</TabsTrigger>
                <TabsTrigger value="direito">Direito</TabsTrigger>
              </TabsList>

              <TabsContent value="hub" className="space-y-4">
                <div className="bg-hub-darker border border-hub-primary/30 rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Documentação Hub Innovation</h2>
                  <p className="text-white/60">
                    Documentação completa sobre Agentes de IA, APIs, integrações e melhores práticas.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="conciarge" className="space-y-4">
                <div className="bg-conciarge-dark border border-conciarge-primary/30 rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Documentação Conciarge</h2>
                  <p className="text-white/60">
                    Guias de implementação, configuração de agentes médicos e integrações com sistemas de saúde.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="direito" className="space-y-4">
                <div className="bg-direito-dark border border-direito-primary/30 rounded-2xl p-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Documentação Direito</h2>
                  <p className="text-white/60">
                    Manuais de uso, configuração de automações jurídicas e integração com sistemas processuais.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentacao;
