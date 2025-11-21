import { PricingTable } from "@/components/ui/pricing-table";

const features = [
  { name: "Chatbot Multi Canais (WhatsApp, Instagram, Site)", included: "starter" },
  { name: "Automação de Prospecção", included: "starter" },
  { name: "CRM Jurídico Integrado", included: "starter" },
  { name: "Qualificação Automática de Leads", included: "starter" },
  { name: "Agendamento Inteligente", included: "starter" },
  { name: "Agente IA Especializado em Direito", included: "pro" },
  { name: "Análise Avançada de Casos", included: "pro" },
  { name: "Integração com Sistemas Jurídicos", included: "pro" },
  { name: "Follow-Up Automatizado", included: "pro" },
  { name: "Dashboard de Analytics Avançado", included: "pro" },
  { name: "Automações Personalizadas Ilimitadas", included: "pro" },
  { name: "Desenvolvimento Sob Medida", included: "all" },
  { name: "Consultoria Jurídica + Tech", included: "all" },
  { name: "Integrações Customizadas", included: "all" },
  { name: "Suporte 24/7 Dedicado", included: "all" },
];

const plans = [
  {
    name: "Essencial",
    price: { 
      monthly: 799, 
      quarterly: 2157 / 3, // R$2.157 dividido por 3 meses = R$719/mês
      annually: 7672 / 12  // R$7.672 dividido por 12 meses = R$639/mês
    },
    level: "starter",
  },
  {
    name: "Avançado",
    price: { 
      monthly: 1190, 
      quarterly: 3213 / 3, // R$3.213 dividido por 3 meses = R$1.071/mês
      annually: 11424 / 12 // R$11.424 dividido por 12 meses = R$952/mês
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

export function DireitoPricing() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Planos para <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">Escritórios de Advocacia</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Automatize sua prospecção e gestão de clientes com IA especializada em Direito.
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
