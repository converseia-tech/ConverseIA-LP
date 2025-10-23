import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
            <Link to="/insights">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar aos Insights
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
      <Navigation />
      
      <article className="flex-1 container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Back button */}
        <Link to="/insights" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Insights
        </Link>

        {/* Article header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} de leitura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{article.category}</span>
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-zinc-800/50 rounded-lg p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          {/* Placeholder for full content - será preenchido gradualmente */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4">
              Conteúdo em Desenvolvimento
            </h2>
            
            <p className="text-base sm:text-lg">
              Este artigo está sendo desenvolvido com conteúdo completo e detalhado sobre {article.title.toLowerCase()}.
            </p>

            <p className="text-base sm:text-lg">
              Em breve, você encontrará aqui análises aprofundadas, casos práticos, estatísticas atualizadas 
              e insights acionáveis para implementar em seu negócio.
            </p>

            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6 sm:p-8 mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">
                Quer saber mais sobre este tema?
              </h3>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg">
                Nossa equipe pode fornecer uma análise personalizada para seu negócio.
              </p>
              <Link to="/contato">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-zinc-800">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Outros Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/insights/${relatedArticle.id}`}
                  className="bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded">
                      {relatedArticle.category}
                    </span>
                    <span>{relatedArticle.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticlePage;
