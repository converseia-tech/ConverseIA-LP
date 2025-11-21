import { PricingTable } from "@/components/ui/pricing-table";

const features = [
  { name: "Chatbot Multi Canais (Whatsapp, Instagram e Site)", included: "starter" },
  { name: "Automações Personalizadas", included: "starter" },
  { name: "CRM Integrado para Vendas", included: "starter" },
  { name: "Integrações com Sistemas de Agendamento", included: "starter" },
  { name: "Setup sob consulta", included: "starter" },
  { name: "Agente IA Concierge (SDR)", included: "pro" },
  { name: "Agente IA de Qualificação", included: "pro" },
  { name: "IA Conversacional Avançada", included: "pro" },
  { name: "Módulo de Agendamento 100% Automático", included: "pro" },
  { name: "Módulo de Follow-Up (FUP)", included: "pro" },
  { name: "Gestão completa da agenda", included: "pro" },
  { name: "Motor anti-no-show com confirmações ativas", included: "pro" },
  { name: "Agentes e Módulos customizados", included: "all" },
  { name: "Integrações com sistemas legados", included: "all" },
  { name: "Volume de contatos enterprise", included: "all" },
  { name: "Suporte e gerente de contas dedicado", included: "all" },
];

const plans = [
  {
    name: "Essencial",
    price: { 
      monthly: 799,
      quarterly: 1977 / 3, // 659/mês
      annually: 7188 / 12  // 599/mês
    },
    level: "starter",
  },
  {
    name: "Avançado",
    price: { 
      monthly: 1197,
      quarterly: 3405 / 3, // 1135/mês
      annually: 11844 / 12 // 987/mês
    },
    level: "pro",
    popular: true,
  },
  {
    name: "Personalizado",
    price: { 
      monthly: 0,
      quarterly: 0,
      annually: 0
    },
    level: "all",
  },
];

export function ConciargePricing() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Escolha o <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">plano ideal</span> para o seu momento
        </h2>
        <p className="text-xl text-muted-foreground">
          Comece a organizar sua operação hoje e escale quando estiver pronto.
        </p>
      </div>
      
      <PricingTable
        features={features}
        plans={plans}
        defaultPlan="pro"
        defaultInterval="monthly"
        onPlanSelect={(plan) => console.log("Selected plan:", plan)}
      />
    </div>
  );
}
