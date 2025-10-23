import { CheckCircle, Users, ChartBar, Target, TrendUp } from "phosphor-react";
import { Card, CardContent } from "@/components/ui/card";

const TargetAudienceSection = () => {
  const challenges = [
    {
      icon: Users,
      title: "Perdem vendas por não ter capacidade de atendimento imediato",
      subtitle: "para o alto volume de leads"
    },
    {
      icon: ChartBar,
      title: "Querem centralizar agendamentos, métricas e funil de conversão",
      subtitle: "em um único lugar"
    },
    {
      icon: Target,
      title: "Investem em marketing, mas não sabem qual campanha",
      subtitle: "realmente converte em pacientes pagantes"
    },
    {
      icon: TrendUp,
      title: "Desejam escalar as operações,",
      subtitle: "mas temem perder a qualidade do atendimento"
    }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Criado por quem vive o{" "}
            <span className="text-primary">ecossistema de saúde</span>, 
            para quem precisa de resultados
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Entendemos os desafios diários da sua operação. O Conciarge foi desenhado para clínicas e médicos que:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <Card 
              key={index} 
              className="shadow-card border-0 bg-gradient-card hover:shadow-xl transition-all group hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000"
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <challenge.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {challenge.subtitle}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional emphasis */}
        <div className="text-center mt-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-105 group">
            <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" weight="fill" />
            <span className="text-primary font-medium">
              Desenvolvido especificamente para o mercado de saúde brasileiro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;