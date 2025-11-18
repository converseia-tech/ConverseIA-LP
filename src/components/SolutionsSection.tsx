import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, FolderKanban, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Onde nossa <span className="gradient-text">inteligência</span> encontra o seu mercado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa tecnologia não é uma teoria. Nós a aplicamos para resolver desafios reais 
            de setores específicos, criando soluções de ponta que falam a língua do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ConverseIA Direito */}
          <div className="group">
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <img 
                  src="/logoescurahorizontal.png" 
                  alt="ConverseIA Direito" 
                  className="h-12 w-auto max-w-[200px] object-contain"
                />
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Uma solução de IA especializada que revoluciona o atendimento e a qualificação 
                de clientes no setor jurídico, garantindo agilidade e precisão.
              </p>

              <Button variant="outline" className="group mt-auto border-2 bg-white hover:bg-blue-50" asChild>
                <Link to="/direito">
                  Conheça a solução
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Conciarge */}
          <div className="group">
            <div className="bg-white border-2 border-teal-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <img 
                  src="/Conciarge(NEGATIVO+FUNDOTRANSPARENTE)-logo5.png" 
                  alt="Conciarge" 
                  className="h-16 w-auto max-w-[180px] object-contain"
                />
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reinventamos a jornada do paciente, automatizando o agendamento e a comunicação 
                para clínicas e o setor de saúde com um toque de cuidado digital.
              </p>

              <Button variant="outline" className="group mt-auto border-2 bg-white hover:bg-teal-50" asChild>
                <Link to="/conciarge">
                  Conheça a solução
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Gestão de Projetos */}
          <div className="group">
            <div className="bg-white border-2 border-purple-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6 space-x-4">
                <FolderKanban className="w-10 h-10 text-purple-600" />
                <h3 className="text-2xl font-semibold text-gray-900">Gestão de Projetos</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Estruturamos e gerenciamos seus projetos de tecnologia, garantindo entregas no prazo, 
                dentro do orçamento e com o impacto esperado.
              </p>

              <Button variant="outline" className="group mt-auto border-2 bg-white hover:bg-purple-50" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Projetos Personalizados */}
          <div className="group">
            <div className="bg-white border-2 border-purple-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6 space-x-4">
                <Sparkles className="w-10 h-10 text-purple-600" />
                <h3 className="text-2xl font-semibold text-gray-900">Projetos Personalizados</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tem um desafio único? Criamos soluções de automação e IA totalmente sob medida para 
                resolver os problemas específicos da sua operação.
              </p>

              <Button variant="outline" className="group mt-auto border-2 bg-white hover:bg-purple-50" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Fale com um especialista
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;