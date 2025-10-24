import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const Insights = () => {
  const featuredArticles = articles;

  const categories = [
    { name: "Todos", count: 6, icon: TrendingUp },
    { name: "Inteligência Artificial", count: 2, icon: Zap },
    { name: "Vendas & Marketing", count: 1, icon: Users },
    { name: "Case Studies", count: 1, icon: TrendingUp },
    { name: "ROI & Métricas", count: 1, icon: TrendingUp },
    { name: "Customer Experience", count: 1, icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="gradient-text">Insights</span> sobre o Futuro
              </h1>
              <p className="text-xl text-corporate-lg max-w-3xl mx-auto">
                Pensamentos, análises e descobertas sobre inteligência artificial, automação e o futuro dos negócios. 
                Conteúdo criado por especialistas para líderes visionários.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sticky top-28">
                <h3 className="text-xl font-semibold text-foreground mb-6">Categorias</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors text-left group"
                    >
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 text-accent mr-3" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground/60 bg-muted/30 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {/* Featured Article */}
              <div className="mb-12">
                <div className="bg-gradient-CONVERSEIA p-1 rounded-3xl">
                  <div className="bg-background rounded-3xl p-8">
                    <div className="flex items-center text-muted-foreground/70 text-sm mb-4 space-x-4">
                      <span className="bg-accent text-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredArticles[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredArticles[0].readTime}
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                      {featuredArticles[0].title}
                    </h2>

                    <p className="text-lg text-corporate-lg mb-6 leading-relaxed">
                      {featuredArticles[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-accent font-medium">{featuredArticles[0].category}</span>
                      <Link 
                        to={`/insights/${featuredArticles[0].id}`}
                        className="flex items-center text-accent hover:text-secondary transition-colors group"
                      >
                        <span className="font-medium">Ler artigo completo</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.slice(1).map((article, index) => (
                  <Link
                    key={index}
                    to={`/insights/${article.id}`}
                    className="group"
                  >
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

                      {/* Category */}
                      <div className="mb-4">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>

                      {/* Article Title */}
                      <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">
                        {article.title}
                      </h3>

                      {/* Article Excerpt */}
                      <p className="text-corporate-lg mb-6 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center text-accent group-hover:text-secondary transition-colors">
                        <span className="text-sm font-medium">Ler artigo</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center justify-center px-8 py-3 border border-muted-foreground/20 text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded-lg transition-colors">
                  Carregar mais artigos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;