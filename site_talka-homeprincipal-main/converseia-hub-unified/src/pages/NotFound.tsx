import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-hub-darker flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-hub-primary to-hub-accent bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white mb-4">
          Página não encontrada
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Button asChild size="lg" className="bg-hub-primary hover:bg-hub-secondary">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Voltar para o Início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
