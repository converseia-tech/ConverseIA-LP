import { Link } from "react-router-dom";
import { LinkedinLogo, EnvelopeSimple, WhatsappLogo, InstagramLogo, MapPin } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";

  const solutions = [
    { title: 'Clínicas de Saúde', href: '/conciarge' },
    { title: 'Escritórios de Advocacia', href: '/direito' },
    { title: 'Plataforma ConverseIA', href: '/plataforma' },
  ];

  const company = [
    { title: 'Sobre Nós', href: '/sobre' },
    { title: 'Insights', href: '/insights' },
    { title: 'Carreiras', href: '/carreiras' },
  ];

  const legal = [
    { title: 'Termos de Uso', href: '/termos' },
    { title: 'Privacidade', href: '/privacidade' },
  ];

  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link 
              to="/" 
              className="block" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/logo_horizontal.png"
                alt="CONVERSEIA"
                className="h-14 w-auto transition-transform duration-300 hover:scale-110"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transformando empresas com inteligência artificial e automação avançada. O futuro da produtividade começa aqui.
            </p>
            <div className="flex gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <WhatsappLogo weight="fill" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/converseia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinLogo weight="fill" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramLogo weight="fill" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Soluções</h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item.title}>
                  <Link to={item.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Empresa</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.title}>
                  <Link to={item.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Fique Atualizado</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Receba as últimas novidades sobre IA e automação.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Digite seu melhor e-mail"
                className="bg-background border-border focus:border-purple-500 focus:ring-purple-500/20"
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ConverseIA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <Link key={item.title} to={item.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;