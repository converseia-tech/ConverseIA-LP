import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">Insights</span> sobre o Futuro
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Pensamentos, análises e descobertas sobre inteligência artificial, automação e o futuro dos negócios.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                className="bg-card/30 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 sticky top-28 shadow-lg shadow-purple-500/5"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  Categorias
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 transition-all duration-300 text-left group"
                    >
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 text-muted-foreground group-hover:text-purple-400 transition-colors mr-3" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm font-medium">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {/* Featured Article */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-card/40 backdrop-blur-md p-8 hover:border-purple-500/50 transition-all duration-500 group shadow-2xl shadow-purple-500/5 hover:shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center text-muted-foreground text-sm mb-6 space-x-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg shadow-purple-500/20">
                        DESTAQUE
                      </span>
                      <div className="flex items-center text-xs font-medium uppercase tracking-wider">
                        <Calendar className="h-3 w-3 mr-1.5 text-purple-400" />
                        {featuredArticles[0].date}
                      </div>
                      <div className="flex items-center text-xs font-medium uppercase tracking-wider">
                        <Clock className="h-3 w-3 mr-1.5 text-purple-400" />
                        {featuredArticles[0].readTime}
                      </div>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-purple-100 transition-colors">
                      {featuredArticles[0].title}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                      {featuredArticles[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-purple-500/10 pt-6">
                      <span className="text-purple-400 font-semibold text-sm flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        {featuredArticles[0].category}
                      </span>
                      <Link 
                        to={`/insights/${featuredArticles[0].id}`}
                        className="flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 font-medium text-sm group/btn"
                      >
                        Ler artigo completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.slice(1).map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      to={`/insights/${article.id}`}
                      className="group block h-full"
                    >
                      <div className="bg-card/30 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 h-full hover:border-purple-500/40 hover:bg-card/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent transition-all duration-500" />
                        
                        {/* Article Metadata */}
                        <div className="relative z-10 flex items-center justify-between mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                            {article.category}
                          </span>
                          <div className="flex items-center text-muted-foreground text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>

                        {/* Article Title */}
                        <h3 className="relative z-10 font-display text-xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors leading-snug">
                          {article.title}
                        </h3>

                        {/* Article Excerpt */}
                        <p className="relative z-10 text-muted-foreground mb-6 leading-relaxed line-clamp-3 text-sm flex-grow">
                          {article.excerpt}
                        </p>

                        {/* Read More Link */}
                        <div className="relative z-10 flex items-center text-muted-foreground group-hover:text-purple-400 transition-colors mt-auto pt-4 border-t border-purple-500/10">
                          <span className="text-xs font-bold uppercase tracking-wider">Ler artigo</span>
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <button className="inline-flex items-center justify-center px-8 py-3 border border-purple-500/30 text-foreground hover:bg-purple-500/10 hover:border-purple-500/50 rounded-lg transition-colors">
                  Carregar mais artigos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;