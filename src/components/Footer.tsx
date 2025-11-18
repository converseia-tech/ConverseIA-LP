import { Link } from "react-router-dom";
import { LinkedinLogo, EnvelopeSimple, WhatsappLogo } from "phosphor-react";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/uploads/7cc4cd4d-8aaf-47ac-a7d4-aa8df6d3e4c0.png" 
                alt="CONVERSEIA" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Inteligência que Transforma. Automação que Libera. Criamos ecossistemas empresariais que geram valor e impulsionam o crescimento sustentável.
            </p>
            <div className="flex space-x-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contato@converseia.com.br" 
                className="text-muted-foreground hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <EnvelopeSimple weight="fill" className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/converseia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo weight="fill" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/o-que-fazemos" className="text-muted-foreground hover:text-purple-400 transition-colors">
                  O que Fazemos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Nossas Soluções
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/#sobre" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <WhatsappLogo weight="fill" className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@converseia.com.br" 
                  className="text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  contato@converseia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ConverseIA. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Inteligência que Transforma. Automação que Libera.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;