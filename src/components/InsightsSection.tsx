import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarBlank, Clock } from "phosphor-react";
import { motion } from "framer-motion";

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
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Perspectivas</span> sobre o Futuro
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="bg-card border border-border hover:border-purple-500/50 rounded-2xl p-6 h-full hover:shadow-md hover:shadow-purple-500/5 transition-all duration-300">
                {/* Article Metadata */}
                <div className="flex items-center text-muted-foreground text-sm mb-4 space-x-4">
                  <div className="flex items-center">
                    <CalendarBlank weight="bold" className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock weight="bold" className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-purple-400 group-hover:text-pink-400 transition-colors">
                  <span className="text-sm font-medium">Ler artigo</span>
                  <ArrowRight weight="bold" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="group bg-purple-600/90 hover:bg-purple-700/90 text-white">
            Explore todos os nossos Insights
            <ArrowRight weight="bold" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;