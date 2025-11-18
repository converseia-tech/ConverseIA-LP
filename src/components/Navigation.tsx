import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List, X } from "phosphor-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Animação da navbar ao scrollar - estilo Amigo
  const navPadding = useTransform(scrollY, [0, 100], ["1.25rem", "0.875rem"]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0px", "16px"]);
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "94%"]);
  const navMarginTop = useTransform(scrollY, [0, 100], ["0px", "16px"]);
  
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
    { name: "Sobre nós", path: "/#sobre" },
    { name: "Insights", path: "/insights" },
  ];

  const solucoesLinks = [
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
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ 
        paddingTop: navMarginTop,
        paddingLeft: navMarginTop,
        paddingRight: navMarginTop
      }}
    >
      <motion.div
        className="w-full max-w-[100vw] bg-background backdrop-blur-xl border border-border/50"
        style={{
          width: navWidth,
          borderRadius: borderRadius,
          scale: navScale,
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-between items-center"
            style={{ 
              paddingTop: navPadding,
              paddingBottom: navPadding 
            }}
          >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src={getLogo()}
              alt="ConverseIA" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-500 ease-in-out"
            />
          </Link>

          {/* Desktop Navigation - Menu Central */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            {/* Dropdown Soluções - PRIMEIRO */}
            <div className="relative group">
              <button className="text-sm xl:text-base font-medium text-muted-foreground hover:text-purple-400 transition-all duration-300">
                Soluções ▾
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-xl border border-border rounded-lg shadow-lg shadow-purple-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {solucoesLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-sm text-muted-foreground hover:bg-purple-500/10 hover:text-purple-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Sobre nós e Insights */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm xl:text-base font-medium transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? "text-purple-400"
                    : "text-muted-foreground hover:text-purple-400"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Documentação */}
            <a
              href={documentacaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm xl:text-base font-medium text-muted-foreground hover:text-purple-400 transition-all duration-300 relative group"
            >
              Documentação
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
            </a>
            
            {/* Dropdown Seja Parceiro - ÚLTIMO */}
            <div className="relative group">
              <button className="text-sm xl:text-base font-medium text-muted-foreground hover:text-purple-400 transition-all duration-300">
                Seja Parceiro ▾
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-xl border border-border rounded-lg shadow-lg shadow-purple-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {parceriasLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-muted-foreground hover:bg-purple-500/10 hover:text-purple-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Botões de Ação - Direita */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild size="sm" variant="outline" className="text-sm xl:text-base px-4 xl:px-6 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400">
              <Link to="/contato">Contato</Link>
            </Button>
            
            <Button asChild size="sm" className="text-sm xl:text-base px-4 xl:px-6 bg-purple-600/90 hover:bg-purple-700/90 text-white">
              <Link to="/contratacao">Contrate Agora</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X weight="bold" className="h-6 w-6" /> : <List weight="bold" className="h-6 w-6" />}
            </Button>
          </div>
          </motion.div>
          
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-xl rounded-lg mt-2 border border-border mb-4 shadow-lg shadow-purple-500/10">
              {/* Soluções Mobile - PRIMEIRO */}
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Soluções</p>
                <div className="space-y-1">
                  {solucoesLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Sobre nós e Insights */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Documentação */}
              <a
                href={documentacaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 rounded-md transition-colors"
              >
                Documentação
              </a>
              
              {/* Seja Parceiro Mobile - ÚLTIMO */}
              <div className="px-3 py-2 border-t border-border mt-2 pt-2">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Seja Parceiro</p>
                <div className="space-y-1">
                  {parceriasLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 rounded transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2 pt-3 space-y-2">
                <Button asChild size="sm" variant="outline" className="w-full border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400">
                  <Link to="/contato" onClick={() => setIsOpen(false)}>
                    Contato
                  </Link>
                </Button>
                <Button asChild size="sm" className="w-full bg-purple-600/90 hover:bg-purple-700/90 text-white">
                  <Link to="/contratacao" onClick={() => setIsOpen(false)}>
                    Contrate Agora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;