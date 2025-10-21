import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Footer = () => {
  const location = useLocation();

  // Determina qual tema usar baseado na rota
  const getTheme = () => {
    if (location.pathname.includes('/conciarge')) return 'conciarge';
    if (location.pathname.includes('/direito')) return 'direito';
    return 'hub';
  };

  const theme = getTheme();

  const bgClass =
    theme === 'conciarge'
      ? 'bg-conciarge-dark'
      : theme === 'direito'
      ? 'bg-direito-dark'
      : 'bg-hub-dark';

  const accentClass =
    theme === 'conciarge'
      ? 'hover:text-conciarge-primary'
      : theme === 'direito'
      ? 'hover:text-direito-primary'
      : 'hover:text-hub-primary';

  return (
    <footer className={cn('text-white py-16', bgClass)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo-hub.png"
                alt="ConverseIA Hub Innovation"
                className="h-12 w-auto brightness-0 invert hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              ConverseIA Hub Innovation - Plataforma central de Agentes de IA integrando
              soluções inteligentes para saúde (Conciarge) e direito.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Av. Eng. Domingos Ferreira, 4023 - Sl 1004 - Recife, PE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${SOCIAL_LINKS.email}`} className={cn('transition-colors', accentClass)}>
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('text-white/70 transition-all', accentClass)}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('text-white/70 transition-all', accentClass)}
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn('transition-all duration-300 hover:translate-x-1 block', accentClass)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisões */}
          <div>
            <h3 className="font-semibold mb-4">Nossas Divisões</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <Link
                  to="/conciarge"
                  className={cn('transition-all duration-300 hover:translate-x-1 block', accentClass)}
                >
                  ConverseIA Conciarge
                </Link>
              </li>
              <li className="text-white/60 text-xs">Soluções para clínicas e saúde</li>
              <li className="mt-3">
                <Link
                  to="/direito"
                  className={cn('transition-all duration-300 hover:translate-x-1 block', accentClass)}
                >
                  ConverseIA Direito
                </Link>
              </li>
              <li className="text-white/60 text-xs">Automação jurídica inteligente</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} ConverseIA Hub Innovation. Todos os direitos reservados.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Inteligência que transforma. Automação que libera.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
