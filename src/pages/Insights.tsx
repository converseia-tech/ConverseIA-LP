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
                className="bg-card border border-border rounded-xl p-6 sticky top-28"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Categorias</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-purple-500/10 transition-colors text-left group"
                    >
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 text-purple-500 mr-3" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-purple-500/10 px-2 py-1 rounded-full">
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
                <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-8 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center text-muted-foreground text-sm mb-4 space-x-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
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

                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {featuredArticles[0].title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticles[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-purple-500 font-medium text-sm">{featuredArticles[0].category}</span>
                    <Link 
                      to={`/insights/${featuredArticles[0].id}`}
                      className="flex items-center text-purple-500 hover:text-purple-600 transition-colors group"
                    >
                      <span className="font-medium">Ler artigo completo</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
                      <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                        {/* Article Metadata */}
                        <div className="flex items-center text-muted-foreground text-xs mb-4 space-x-3">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>

                        {/* Category */}
                        <div className="mb-4">
                          <span className="text-xs font-medium text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>

                        {/* Article Title */}
                        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-purple-500 transition-colors leading-tight">
                          {article.title}
                        </h3>

                        {/* Article Excerpt */}
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 text-sm">
                          {article.excerpt}
                        </p>

                        {/* Read More Link */}
                        <div className="flex items-center text-purple-500 group-hover:text-purple-600 transition-colors">
                          <span className="text-sm font-medium">Ler artigo</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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