import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual a principal diferença entre os planos?",
      answer: "O plano Essencial organiza e qualifica todo o seu atendimento receptivo. O plano Avançado adiciona a automação completa do agendamento e do follow-up, permitindo que a clínica funcione no piloto automático para marcar consultas e recuperar contatos."
    },
    {
      question: "Preciso ter uma agência de marketing para usar o Conciarge?",
      answer: "Não. O Conciarge beneficia qualquer clínica que tenha um fluxo de contatos. No entanto, se você tem uma agência, nossa plataforma se integra a ela, fornecendo relatórios precisos sobre o retorno dos seus investimentos em anúncios."
    },
    {
      question: "A implantação é complicada?",
      answer: "Não. Nossa equipe de especialistas realiza toda a configuração inicial junto com você, garantindo que os agentes e módulos estejam alinhados com os processos da sua clínica."
    },
    {
      question: "O Conciarge substitui minha equipe de recepção?",
      answer: "O Conciarge complementa sua equipe, automatizando tarefas repetitivas e qualificando leads 24/7. Sua equipe fica livre para focar em atividades de maior valor, como atendimento humanizado para casos complexos."
    },
    {
      question: "Como funciona a integração com meu sistema atual?",
      answer: "Oferecemos integrações nativas com os principais sistemas do mercado (Feegow, iClinic, Pipedrive, RD Station, etc.). Nossa equipe técnica cuida de toda a integração sem interromper suas operações."
    },
    {
      question: "Posso cancelar o serviço a qualquer momento?",
      answer: "Sim, nossos contratos são mensais e você pode cancelar a qualquer momento. Não há multas ou taxas de cancelamento."
    }
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Perguntas{" "}
              <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Esclarecemos as principais dúvidas sobre o Conciarge
            </p>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-border animate-in fade-in-0 slide-in-from-left-4 duration-700"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-all duration-300 group hover:translate-x-2">
                    <span className="group-hover:scale-105 transition-transform duration-300">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed animate-in fade-in-0 slide-in-from-top-2 duration-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas?
            </p>
            <button className="text-primary font-semibold hover:underline transition-all duration-300 hover:scale-105 hover:translate-x-1">
              Fale com nosso time de especialistas →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;