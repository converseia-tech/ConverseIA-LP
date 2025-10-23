import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, ArrowRight, Robot, Phone } from "phosphor-react";

type BillingCycle = "monthly" | "quarterly" | "semiannually" | "annually";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans = [
    {
      name: "CLÍNICA ESSENCIAL",
      basePrices: {
        monthly: 799,
        quarterly: 1977,
        semiannually: 3894,
        annually: 7188
      },
      description: "Ideal para organizar o atendimento e centralizar a comunicação.",
      isPopular: false,
      features: [
        <span key="concierge" className="line-through">Agente IA Concierge (SDR)</span>,
        <span key="qualificacao" className="line-through">Agente IA de Qualificação</span>,
        <span key="ia" className="line-through">IA Conversacional Avançada</span>,
        "Chatbot Multi Canais (Whatsapp, Instagram e Site)",
        "Automações Personalizadas",
        "CRM Integrado para Vendas",
        "Integrações com Sistemas de Agendamento",
        { type: "setup", element: (
          <span key="setup-essencial" className="block w-full text-center text-sm text-muted-foreground mt-4 mb-2" style={{letterSpacing: "0.5px"}}>
            Setup sob consulta
          </span>
        ) }
      ],
      buttonText: "CONTRATAR PLANO ESSENCIAL",
      buttonVariant: "outline-hero" as const
    },
    {
      name: "CLÍNICA AVANÇADA",
      basePrices: {
        monthly: 1197,
        quarterly: 3405,
        semiannually: 6210,
        annually: 11844
      },
      description: "Para clínicas que buscam a máxima automação, redução de no-show e escala.",
      isPopular: true,
      features: [
        "Agente IA Concierge (SDR)",
        "Agente IA de Qualificação",
        "IA Conversacional Avançada",
        "Tudo do plano Essencial, e mais:",
        "Módulo de Agendamento 100% Automático",
        "Módulo de Follow-Up (FUP)",
        "Gestão completa da agenda",
        "Motor anti-no-show com confirmações ativas",
        { type: "setup", element: (
          <span key="setup" className="block w-full text-center text-sm text-muted-foreground mt-4 mb-2" style={{letterSpacing: "0.5px"}}>
            Setup sob consulta
          </span>
        ) }
      ],
      specialFeatures: [
        "Módulo de Agendamento 100% Automático",
        "Módulo de Follow-Up (FUP)"
      ],
      buttonText: "CONTRATAR PLANO AVANÇADO",
      buttonVariant: "hero" as const
    }
  ];

  const billingOptions = {
    monthly: { label: "Mensal", months: 1 },
    quarterly: { label: "Trimestral", months: 3 },
    semiannually: { label: "Semestral", months: 6 },
    annually: { label: "Anual", months: 12 },
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha o <span className="text-primary">plano ideal</span> para o seu momento
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece a organizar sua operação hoje e escale quando estiver pronto.
          </p>
        </div>

        <div className="flex justify-center mb-12 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200">
          <Tabs value={billingCycle} onValueChange={(value) => setBillingCycle(value as BillingCycle)} className="w-auto">
            <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="monthly" className="transition-all duration-300 hover:scale-105">Mensal</TabsTrigger>
              <TabsTrigger value="quarterly" className="transition-all duration-300 hover:scale-105">Trimestral</TabsTrigger>
              <TabsTrigger value="semiannually" className="transition-all duration-300 hover:scale-105">Semestral</TabsTrigger>
              <TabsTrigger value="annually" className="transition-all duration-300 hover:scale-105">Anual</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const currentOption = billingOptions[billingCycle];
            const monthlyPrice = plan.basePrices[billingCycle] / currentOption.months;
            const upfrontPrice = plan.basePrices[billingCycle] * 0.95;

            return (
              <Card
                key={plan.name}
                className={`flex flex-col shadow-card border-0 bg-gradient-card transition-all relative group animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 ${
                    plan.isPopular ? 'ring-1 ring-primary hover:ring-4 hover:ring-primary hover:shadow-2xl hover:scale-110 lg:hover:scale-110' : 'hover:shadow-xl hover:scale-105'
                  }`}
                style={{ animationDelay: `${(index + 1) * 200 + 400}ms` }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                      <Star className="w-4 h-4 mr-1" weight="fill" />
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold mb-2 h-14 flex items-center justify-center">{plan.name}</CardTitle>
                  <p className="text-muted-foreground h-12">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <div>
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {formatCurrency(monthlyPrice)}
                      </span>
                      <span className="text-muted-foreground text-lg">/mês</span>
                    </div>
                    {billingCycle !== 'monthly' && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Total de {formatCurrency(plan.basePrices[billingCycle])} no plano {currentOption.label.toLowerCase()}
                      </p>
                    )}
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      ou {formatCurrency(upfrontPrice)} à vista com +5% de desconto
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => {
                      if (typeof feature === "object" && feature.type === "setup") {
                        return (
                          <li key={featureIndex} className="w-full">
                            {feature.element}
                          </li>
                        );
                      }
                      return (
                        <li key={featureIndex} className="flex items-start space-x-3 group/item">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" weight="bold" />
                          <span className={`text-sm transition-colors duration-300 ${
                            typeof feature === "string" && plan.specialFeatures?.includes(feature)
                              ? 'font-semibold text-primary'
                              : 'text-foreground group-hover/item:text-primary'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-auto space-y-2">
                    <a
                      href="/contratacao"
                      className="inline-flex items-center justify-center w-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn bg-[#20a5c2] text-white rounded-md px-4 py-3"
                    >
                      Contratar Agora
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" weight="bold" />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=558197849998&text=${encodeURIComponent(
                        plan.name.includes('AVANÇADA')
                          ? "Olá, tenho interesse na solução do plano avançado"
                          : "Olá, tudo bem? Quero entender mais sobre a solução de vocês."
                      )}&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn bg-white text-primary border-2 border-primary rounded-md px-4 py-3"
                    >
                      Falar com Especialista
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" weight="bold" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          <Card className="flex flex-col shadow-card border-0 bg-gradient-card hover:shadow-xl transition-all group hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `800ms` }}>
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl font-bold mb-2 h-14 flex items-center justify-center group-hover:text-primary transition-colors duration-300">PLANO PERSONALIZADO</CardTitle>
              <p className="text-muted-foreground h-12">Para operações complexas que precisam de uma solução sob medida.</p>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col flex-grow">
              <div className="text-center mb-6">
                <Robot className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" weight="duotone" />
                <p className="text-lg font-semibold">Vamos construir juntos?</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3 group/item">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" weight="bold" />
                  <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">Agentes e Módulos customizados</span>
                </li>
                <li className="flex items-start space-x-3 group/item">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" weight="bold" />
                  <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">Integrações com sistemas legados</span>
                </li>
                <li className="flex items-start space-x-3 group/item">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" weight="bold" />
                  <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">Volume de contatos enterprise</span>
                </li>
                <li className="flex items-start space-x-3 group/item">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" weight="bold" />
                  <span className="text-sm text-foreground group-hover/item:text-primary transition-colors duration-300">Suporte e gerente de contas dedicado</span>
                </li>
              </ul>
              <div className="mt-auto space-y-2">
                <a
                  href="/contratacao"
                  className="inline-flex items-center justify-center w-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn bg-[#20a5c2] text-white rounded-md px-4 py-3"
                >
                  Contratar Agora
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" weight="bold" />
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=558197849998&text=${encodeURIComponent("Olá, tudo bem? Quero entender mais sobre a solução de vocês.")}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn bg-white text-primary border-2 border-primary rounded-md px-4 py-3"
                >
                  Fale com um especialista
                  <Phone className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" weight="bold" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
