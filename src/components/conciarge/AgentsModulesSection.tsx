import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Robot, UserCircle, Calendar, ArrowsClockwise, Sparkle } from "phosphor-react";

const AgentsModulesSection = () => {
  const agents = [
    {
      icon: Robot,
      type: "Agente de IA",
      title: "Agente Concierge",
      subtitle: "A Primeira Impressão",
      description: "Atua como a recepção digital da sua clínica.",
      features: [
        "Compreende a demanda inicial do paciente (primeira consulta, retorno, exame)",
        "Identifica a necessidade e a urgência",
        "Encaminha para o Agente de Qualificação ou Módulo de Agendamento"
      ],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: UserCircle,
      type: "Agente de IA",
      title: "Agente de Qualificação",
      subtitle: "O Especialista em Oportunidades",
      description: "Atua como seu pré-vendedor, garantindo que apenas pacientes qualificados avancem.",
      features: [
        "Investiga detalhes (convênio, especialista desejado, melhor horário)",
        "Realiza o processo de qualificação completo",
        "Convida e direciona o paciente para o agendamento"
      ],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Calendar,
      type: "Módulo de Automação",
      title: "Módulo de Agendamento Automático",
      subtitle: "",
      description: "Garante a eficiência máxima da sua agenda.",
      features: [
        "Permite que o paciente agende, cancele e remarque consultas 24/7",
        "Funciona sem intervenção humana",
        "Organiza e sincroniza a agenda da equipe em tempo real"
      ],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: ArrowsClockwise,
      type: "Módulo de Automação",
      title: "Módulo de Follow-Up (FUP)",
      subtitle: "",
      description: "Seu motor de engajamento e recuperação de contatos.",
      features: [
        "Envia lembretes automáticos para pacientes que ainda não responderam",
        "Realiza tentativas de retorno com abordagens personalizadas",
        "Retoma conversas pausadas de forma inteligente e contextualizada"
      ],
      gradient: "from-muted/20 to-muted/5"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Uma equipe de{" "}
            <span className="text-primary">especialistas digitais</span>{" "}
            para aumentar sua capacidade de atendimento
          </h2>
          <p className="text-xl text-muted-foreground">
            O Conciarge é composto por Agentes de IA e Módulos de automação que executam tarefas específicas 
            para otimizar sua operação e garantir que nenhum lead seja perdido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <Card 
              key={index} 
              className={`shadow-card border-0 bg-gradient-to-br ${agent.gradient} hover:shadow-xl transition-all group hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000`}
              style={{ animationDelay: `${index * 200 + 300}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 group-hover:bg-primary/20 transition-all duration-300">
                    {agent.type}
                  </Badge>
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <agent.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {agent.title}
                  {agent.subtitle && (
                    <span className="block text-sm font-normal text-muted-foreground mt-1">
                      {agent.subtitle}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-medium">
                  {agent.description}
                </p>
                <ul className="space-y-2">
                  {agent.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 group/item">
                      <Sparkle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" weight="fill" />
                      <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsModulesSection;