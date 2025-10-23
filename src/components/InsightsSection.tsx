import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const InsightsSection = () => {
  const articles = [
    {
      title: "O Futuro é Autônomo: O Papel dos Agentes de IA na Nova Economia Digital",
      excerpt: "Explore como os agentes autônomos de IA estão redefinindo a automação empresarial e criando novas possibilidades.",
      readTime: "8 min",
      date: "15 Jan 2024"
    },
    {
      title: "Processo Comercial 5.0: Como a Automação Inteligente está Redefinindo as Vendas",
      excerpt: "Descubra as estratégias que estão transformando o funil de vendas através da inteligência artificial.",
      readTime: "6 min",
      date: "22 Dez 2023"
    },
    {
      title: "Estudo de Caso: Aumento de 40% na Eficiência Operacional com a Gestão de Processos Tecnológicos",
      excerpt: "Análise detalhada de como a otimização de processos gerou resultados mensuráveis para nossos clientes.",
      readTime: "12 min",
      date: "10 Dez 2023"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Perspectivas</span> sobre o Futuro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div key={index} className="group">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-full hover:shadow-glow transition-all duration-500 hover:scale-105">
                {/* Article Metadata */}
                <div className="flex items-center text-muted-foreground/70 text-sm mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-corporate-lg mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-accent group-hover:text-secondary transition-colors">
                  <span className="text-sm font-medium">Ler artigo</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" className="group">
            Explore todos os nossos Insights
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;