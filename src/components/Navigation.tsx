import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Determina qual logo mostrar baseado na rota
  const getLogo = () => {
    if (location.pathname === "/direito") {
      return "/Icon_3_direito.png";
    } else if (location.pathname === "/conciarge") {
      return "/logo_azul_conciarge.png";
    }
    return "/nova_logo_CONVERSEIA_que_agora_e_converseia.png";
  };

  // Aplica paleta de cores baseada na rota - Cores originais dos sites
  useEffect(() => {
    const root = document.documentElement;
    
    if (location.pathname === "/direito") {
      // Paleta AZUL ROYAL ELÉTRICO - Converseia Direito (original: 220 100% 49%)
      root.style.setProperty('--primary', '220 100% 49%'); // Azul elétrico
      root.style.setProperty('--primary-foreground', '0 0% 9%');
      root.style.setProperty('--secondary', '220 100% 64%'); // Azul claro
      root.style.setProperty('--accent', '220 100% 64%');
      root.style.setProperty('--ring', '220 100% 49%');
    } else if (location.pathname === "/conciarge") {
      // Paleta TEAL/CIANO PROFISSIONAL - Conciarge (original: 195 96% 30%)
      root.style.setProperty('--primary', '195 96% 30%'); // Teal escuro
      root.style.setProperty('--primary-foreground', '0 0% 100%');
      root.style.setProperty('--secondary', '195 50% 95%');
      root.style.setProperty('--accent', '195 96% 30%');
      root.style.setProperty('--ring', '195 96% 30%');
    } else {
      // Paleta ROXO PADRÃO - CONVERSEIA/ConverseIA principal (original: 260 100% 63%)
      root.style.setProperty('--primary', '260 100% 63%'); // Roxo vibrante
      root.style.setProperty('--primary-foreground', '0 0% 100%');
      root.style.setProperty('--secondary', '175 100% 39%'); // Teal secundário
      root.style.setProperty('--accent', '210 100% 58%'); // Azul accent
      root.style.setProperty('--ring', '260 100% 63%');
    }
  }, [location.pathname]);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/#sobre" },
    { name: "Insights", path: "/insights" },
  ];

  const produtosLinks = [
    { name: "Agentes IA - Conciarge", path: "/conciarge" },
    { name: "Agentes IA - Direito", path: "/direito" },
    { name: "Plataforma", path: "/plataforma" },
  ];

  const parceriasLinks = [
    { name: "Parceiros Direito", url: "https://converseia-parceiros.vercel.app" },
    { name: "Parceiros Clínica", url: "https://parceiros-clinica.vercel.app" },
  ];

  const documentacaoUrl = "https://converseia.gitbook.io/converseia-docs";

  const isActive = (path: string) => {
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      return location.pathname === (pathname || '/') && location.hash === `#${hash}`;
    }
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    if (path.includes('#')) {
      const [, hash] = path.split('#');
      if (location.pathname === '/') {
        // Já estamos na home, só fazer scroll
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo com transição */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src={getLogo()}
              alt="ConverseIA" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-500 ease-in-out"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm xl:text-base font-medium transition-all duration-300 hover:text-purple-600 ${
                  isActive(item.path)
                    ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Dropdown Produtos */}
            <div className="relative group">
              <button className="text-sm xl:text-base font-medium text-gray-700 hover:text-gray-900 transition-all duration-300">
                Produtos ▾
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {produtosLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href={documentacaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm xl:text-base font-medium text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              Documentação
            </a>
            
            {/* Dropdown Parcerias */}
            <div className="relative group">
              <button className="text-sm xl:text-base font-medium text-gray-700 hover:text-gray-900 transition-all duration-300">
                Parcerias ▾
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {parceriasLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            <Button asChild size="sm" variant="outline" className="text-sm xl:text-base px-4 xl:px-6">
              <Link to="/contato">Contato</Link>
            </Button>
            
            <Button asChild size="sm" className="text-sm xl:text-base px-4 xl:px-6 bg-primary hover:bg-primary/90">
              <Link to="/contratacao">Contrate Agora</Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 border border-gray-200 mb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Produtos Mobile */}
              <div className="px-3 py-2 border-t border-gray-200 mt-2 pt-2">
                <p className="text-xs font-semibold text-gray-500 mb-2">Produtos</p>
                <div className="space-y-1">
                  {produtosLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-2 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href={documentacaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Documentação
              </a>
              
              {/* Parcerias Mobile */}
              <div className="px-3 py-2 border-t border-gray-200 mt-2 pt-2">
                <p className="text-xs font-semibold text-gray-500 mb-2">Parcerias</p>
                <div className="space-y-1">
                  {parceriasLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-2 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2 pt-3 space-y-2">
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to="/contato" onClick={() => setIsOpen(false)}>
                    Contato
                  </Link>
                </Button>
                <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/contratacao" onClick={() => setIsOpen(false)}>
                    Contrate Agora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;