import { Link } from "react-router-dom";
import { LinkedinLogo, EnvelopeSimple, WhatsappLogo } from "phosphor-react";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=558197849998&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Quero%20entender%20mais%20sobre%20a%20solu%C3%A7%C3%A3o%20de%20voc%C3%AAs.&type=phone_number&app_absent=0";

  const links = [
    { title: 'O que Fazemos', href: '/o-que-fazemos' },
    { title: 'Nossas Soluções', href: '/solucoes' },
    { title: 'Insights', href: '/insights' },
    { title: 'Sobre', href: '/#sobre' },
    { title: 'Contato', href: '/contato' },
  ];

  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Ir para home"
          className="mx-auto block size-fit">
          <img 
            src="/uploads/7cc4cd4d-8aaf-47ac-a7d4-aa8df6d3e4c0.png" 
            alt="CONVERSEIA" 
            className="h-12 w-auto mx-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => {
            const isInternal = link.href.startsWith('/') && !link.href.includes('#');
            
            if (isInternal) {
              return (
                <Link
                  key={index}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary block duration-150">
                  <span>{link.title}</span>
                </Link>
              );
            }
            
            return (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block duration-150">
                <span>{link.title}</span>
              </a>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground hover:text-primary block">
            <WhatsappLogo weight="fill" className="size-6" />
          </a>
          <a
            href="mailto:contato@converseia.com.br"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary block">
            <EnvelopeSimple weight="fill" className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/converseia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block">
            <LinkedinLogo weight="fill" className="size-6" />
          </a>
        </div>

        {/* Copyright */}
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} ConverseIA. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;