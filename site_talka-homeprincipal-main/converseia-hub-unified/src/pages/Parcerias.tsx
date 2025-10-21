import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Parcerias = () => {
  return (
    <div className="min-h-screen bg-hub-dark">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent">
                Parcerias
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-16 text-center max-w-3xl mx-auto">
              Faça parte do ecossistema ConverseIA e expanda suas oportunidades de negócio
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Parceria Conciarge */}
              <div className="bg-gradient-to-br from-conciarge-dark to-conciarge-dark/80 border border-conciarge-primary/30 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Parceria <span className="text-conciarge-primary">Conciarge</span>
                </h2>
                <p className="text-white/70 mb-6">
                  Seja um parceiro Conciarge e ofereça soluções de automação para clínicas e profissionais de saúde.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Comissões atrativas e recorrentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Suporte técnico e comercial dedicado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Material de marketing e treinamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-conciarge-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Dashboard exclusivo para parceiros</span>
                  </li>
                </ul>
                <Button className="w-full bg-conciarge-primary hover:bg-conciarge-secondary">
                  Tornar-se Parceiro Conciarge
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Parceria Direito */}
              <div className="bg-gradient-to-br from-direito-dark to-direito-darker border border-direito-primary/30 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Parceria <span className="text-direito-primary">Direito</span>
                </h2>
                <p className="text-white/70 mb-6">
                  Seja um parceiro ConverseIA Direito e revolucione o mercado jurídico com automação inteligente.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Modelo de negócio escalável</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Treinamento especializado em tech legal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Acesso a recursos exclusivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-direito-secondary rounded-full mr-2 mt-2" />
                    <span className="text-white/60">Networking com escritórios de advocacia</span>
                  </li>
                </ul>
                <Button className="w-full bg-direito-primary hover:bg-direito-secondary">
                  Tornar-se Parceiro Direito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parcerias;
