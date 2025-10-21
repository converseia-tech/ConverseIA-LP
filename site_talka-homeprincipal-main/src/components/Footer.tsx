import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7cc4cd4d-8aaf-47ac-a7d4-aa8df6d3e4c0.png" 
                alt="TALKA" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground/80 mb-4 max-w-md">
              Inteligência que Transforma. Automação que Libera. Criamos ecossistemas empresariais que geram valor e impulsionam o crescimento sustentável.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contato@talka.com.br" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/talka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/o-que-fazemos" className="text-muted-foreground/80 hover:text-accent transition-colors">
                  O que Fazemos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-muted-foreground/80 hover:text-accent transition-colors">
                  Nossas Soluções
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-muted-foreground/80 hover:text-accent transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground/80 hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contato" className="text-muted-foreground/80 hover:text-accent transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:contato@talka.com.br" 
                  className="text-muted-foreground/80 hover:text-accent transition-colors"
                >
                  contato@talka.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} TALKA. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/60 text-sm mt-2 md:mt-0">
            Inteligência que Transforma. Automação que Libera.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;