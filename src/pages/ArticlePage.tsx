import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex-1 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
            <Link
              to="/insights"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Insights
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />

      <article className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/insights"
              className="inline-flex items-center text-purple-500 hover:text-purple-600 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar aos Insights
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Category badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium border border-purple-500/20">
                <Tag className="w-3 h-3 mr-2" />
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {article.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de leitura</span>
              </div>
              <button className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Compartilhar</span>
              </button>
            </div>
          </motion.header>

          {/* Article excerpt */}
          <motion.div
            className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/20 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-foreground/90 leading-relaxed">
              {article.excerpt}
            </p>
          </motion.div>

          {/* Article content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="article-content space-y-6 text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Nossa equipe pode fornecer uma análise personalizada e implementar soluções de IA adaptadas às suas necessidades.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
            >
              Falar com Especialista
            </Link>
          </motion.div>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-20 pt-16 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl font-bold mb-8">Continue Explorando</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      to={`/insights/${relatedArticle.id}`}
                      className="group block h-full"
                    >
                      <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded">
                            {relatedArticle.category}
                          </span>
                          <span>{relatedArticle.date}</span>
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default ArticlePage;
