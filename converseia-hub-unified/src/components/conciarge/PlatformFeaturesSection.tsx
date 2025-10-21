import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChatCircle, 
  ShareNetwork, 
  Gear, 
  Calendar as CalendarIcon, 
  PuzzlePiece, 
  ChartBar,
  Microphone,
  DeviceMobile,
  Lightning,
  Clock,
  LinkSimple,
  TrendUp
} from "phosphor-react";

const PlatformFeaturesSection = () => {
  const features = [
    {
      icon: ChatCircle,
      title: "IA Conversacional Avançada",
      description: "Nossa plataforma garante um atendimento ágil e inteligente. Os áudios são transcritos automaticamente, e os agentes virtuais se comunicam com fluidez: ouvem, falam, leem documentos e imagens, organizam e dividem mensagens conforme a necessidade.",
      highlights: ["Transcrição automática", "Compreensão contextual", "Múltiplos formatos"]
    },
    {
      icon: ShareNetwork,
      title: "Multi Canais",
      description: "Conecte várias contas da mesma rede social – como múltiplos perfis do Instagram, Facebook, WhatsApp, Telegram e outras – em um único lugar para uma gestão centralizada.",
      highlights: ["WhatsApp Business", "Instagram Direct", "Facebook Messenger", "Telegram"]
    },
    {
      icon: Gear,
      title: "Automações Personalizadas",
      description: "Crie conversas personalizadas e automáticas com ações e condições lógicas para aumentar as conversões e a satisfação do paciente em diferentes etapas da jornada.",
      highlights: ["Fluxos inteligentes", "Condições lógicas", "Personalização avançada"]
    },
    {
      icon: CalendarIcon,
      title: "Gestão de Agendas",
      description: "Nossos agentes gerenciam a agenda dos profissionais de forma automática e eficiente, enviando confirmações e programando lembretes para evitar faltas e otimizar a ocupação da clínica.",
      highlights: ["Sincronização em tempo real", "Lembretes automáticos", "Anti no-show"]
    },
    {
      icon: PuzzlePiece,
      title: "Principais Integrações",
      description: "Integrações diretas com os principais prontuários eletrônicos (como Feegow, iClinic) e os principais CRMs de mercado, como Pipefy, Pipedrive, RD Station, entre outros.",
      highlights: ["Feegow", "iClinic", "Pipedrive", "RD Station"]
    },
    {
      icon: ChartBar,
      title: "CRM Integrado para Vendas",
      description: "Acompanhe visualmente a conversão de leads em um quadro Kanban. Gerencie cada etapa do funil e tenha previsibilidade total do seu processo comercial, da primeira mensagem até a consulta agendada.",
      highlights: ["Quadro Kanban", "Funil visual", "Métricas de conversão"]
    }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Descubra os{" "}
            <span className="text-primary">Recursos da Nossa Plataforma</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Toda a tecnologia que seus Agentes e Módulos precisam para entregar a máxima performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card border-0 bg-gradient-card hover:shadow-xl transition-all h-full group hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                </div>
                <CardTitle className="text-xl mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <span 
                      key={highlightIndex}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-600">
          <div className="bg-gradient-hero p-8 rounded-2xl max-w-3xl mx-auto hover:scale-105 transition-transform duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-4">
              Veja a plataforma em ação
            </h3>
            <p className="text-white/90 mb-6">
              Agende uma demonstração personalizada e descubra como o Conciarge pode transformar sua clínica
            </p>
            <a
              href={`https://api.whatsapp.com/send/?phone=558197849998&text=${encodeURIComponent("Olá, tudo bem? Quero entender mais sobre a solução de vocês.")}&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:translate-y-[-2px]"
            >
              Agendar Demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;