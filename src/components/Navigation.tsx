import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { List, X, Scales, Buildings, Code, Database, Globe, Sparkle } from "phosphor-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  });

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
    { name: "Sobre nós", path: "/sobre" },
    { name: "Insights", path: "/insights" },
  ];

  // Estrutura de soluções organizada por categorias
  const solucoesMenu = {
    setoriais: {
      title: "Soluções completas para setores específicos",
      description: "Plataformas verticalizadas com IA especializada",
      items: [
        {
          name: "Direito",
          path: "/direito",
          description: "Automação para escritórios de advocacia",
          icon: Scales
        },
        {
          name: "Clínicas de Saúde ou Estética",
          path: "/conciarge",
          description: "IA Concierge 24/7 para atendimento",
          icon: Buildings
        },
        {
          name: "Outros Setores",
          path: "/projetos-personalizados",
          description: "Projetos sob medida para seu segmento",
          icon: Code
        },
      ]
    },
    produtos: {
      title: "Produtos e serviços",
      description: "Ferramentas modulares de IA e automação",
      items: [
        {
          name: "Plataforma Chat & CRM & BI",
          path: "/plataforma",
          description: "Solução completa em um só lugar",
          icon: Database,
          badge: "PRODUTO"
        },
        {
          name: "Landing Pages e Sites",
          path: "/landing-pages",
          description: "Páginas otimizadas para conversão",
          icon: Globe,
          badge: "PRODUTO"
        },
        {
          name: "Agentes de IA Personalizados",
          path: "/agentes-ia",
          description: "Integração flexível com suas plataformas",
          icon: Sparkle,
          badge: "PRODUTO"
        },
      ]
    }
  };

  const sejaParceiroUrl = "https://converseia-parceiros.vercel.app";

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
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center"
      animate={{
        paddingTop: isScrolled ? "12px" : "0px",
        paddingLeft: isScrolled ? "12px" : "0px",
        paddingRight: isScrolled ? "12px" : "0px",
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="w-full max-w-[100vw] bg-background backdrop-blur-xl border border-border/50"
        animate={{
          width: isScrolled ? "90%" : "100%",
          borderRadius: isScrolled ? "12px" : "0px",
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-center"
            animate={{
              paddingTop: isScrolled ? "1rem" : "1.25rem",
              paddingBottom: isScrolled ? "1rem" : "1.25rem",
            }}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img
                src={getLogo()}
                alt="ConverseIA"
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-500 ease-in-out"
                style={{ filter: "brightness(0) saturate(100%) invert(24%) sepia(68%) saturate(4368%) hue-rotate(263deg) brightness(93%) contrast(93%)" }}
              />
            </Link>

            {/* Desktop Navigation - Menu Central */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
              {/* Dropdown Soluções - Estilo Amigo com categorias */}
              <div className="relative group">
                <button className="text-sm xl:text-base font-medium text-muted-foreground hover:text-purple-400 transition-all duration-300 flex items-center gap-1">
                  Soluções
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[calc(100vw-2rem)] max-w-[650px] bg-[hsl(var(--background))] backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-8">
                    {/* Header - Ver todas as soluções */}
                    <button
                      onClick={() => {
                        const element = document.getElementById('solutions');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full flex items-center justify-between px-4 py-3 mb-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all group/all"
                    >
                      <div className="text-left">
                        <div className="text-sm font-bold text-foreground group-hover/all:text-purple-400 transition-colors">
                          Ver todas as soluções
                        </div>
                        <div className="text-xs text-muted-foreground/80 mt-0.5">
                          Conheça o Ecossistema ConverseIA
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-purple-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {/* Coluna 1: Soluções Setoriais */}
                      <div>
                        <div className="mb-5 pb-4 border-b border-border">
                          <h3 className="text-sm font-bold text-foreground mb-1.5">
                            {solucoesMenu.setoriais.title}
                          </h3>
                          <p className="text-xs text-muted-foreground/80">
                            {solucoesMenu.setoriais.description}
                          </p>
                        </div>
                        <div className="space-y-1.5">
                          {solucoesMenu.setoriais.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-purple-500/10 transition-all duration-200 group/item"
                              >
                                <div className="p-2 bg-purple-500/10 rounded-lg mt-0.5 group-hover/item:bg-purple-500/20 transition-colors flex-shrink-0">
                                  <Icon weight="fill" className="w-4 h-4 text-purple-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-semibold text-sm text-foreground group-hover/item:text-purple-400 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground/90 mt-0.5 leading-tight">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Coluna 2: Produtos */}
                      <div>
                        <div className="mb-5 pb-4 border-b border-border">
                          <h3 className="text-sm font-bold text-foreground mb-1.5">
                            {solucoesMenu.produtos.title}
                          </h3>
                          <p className="text-xs text-muted-foreground/80">
                            {solucoesMenu.produtos.description}
                          </p>
                        </div>
                        <div className="space-y-1.5">
                          {solucoesMenu.produtos.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-purple-500/10 transition-all duration-200 group/item relative"
                              >
                                <div className="p-2 bg-blue-500/10 rounded-lg mt-0.5 group-hover/item:bg-blue-500/20 transition-colors flex-shrink-0">
                                  <Icon weight="fill" className="w-4 h-4 text-blue-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="font-semibold text-sm text-foreground group-hover/item:text-purple-400 transition-colors">
                                      {item.name}
                                    </span>
                                    {item.badge && (
                                      <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md flex-shrink-0">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground/90 leading-tight">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sobre nós e Insights */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm xl:text-base font-medium transition-all duration-300 relative group ${isActive(item.path)
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

              {/* Seja Parceiro */}
              <a
                href={sejaParceiroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm xl:text-base font-medium text-muted-foreground hover:text-purple-400 transition-all duration-300 relative group"
              >
                Seja Parceiro
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </a>

              {/* Contato */}
              <button
                onClick={() => {
                  if (location.pathname === '/') {
                    const element = document.getElementById('contato');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-sm xl:text-base font-medium text-muted-foreground hover:text-purple-400 transition-all duration-300 relative group"
              >
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            {/* Botões de Ação - Direita */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* <ThemeToggle /> */}

              <Button asChild size="sm" variant="ghost" className="text-sm xl:text-base px-4 xl:px-6 text-muted-foreground hover:text-purple-400">
                <Link to="/contratacao">Login</Link>
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
                {/* Soluções Mobile - Organizado por categorias */}
                <div className="px-3 py-2">
                  <p className="text-xs font-bold text-purple-400 mb-4 uppercase tracking-wider">Soluções</p>

                  {/* Soluções Setoriais */}
                  <div className="mb-5">
                    <p className="text-xs font-bold text-foreground mb-3 px-2">
                      {solucoesMenu.setoriais.title}
                    </p>
                    <div className="space-y-1">
                      {solucoesMenu.setoriais.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-purple-500/10 transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              handleNavClick(item.path);
                            }}
                          >
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                              <Icon weight="fill" className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-foreground">{item.name}</div>
                              <div className="text-xs text-muted-foreground/90 mt-1">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Produtos */}
                  <div className="mb-5">
                    <p className="text-xs font-bold text-foreground mb-3 px-2">
                      {solucoesMenu.produtos.title}
                    </p>
                    <div className="space-y-1">
                      {solucoesMenu.produtos.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-purple-500/10 transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              handleNavClick(item.path);
                            }}
                          >
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                              <Icon weight="fill" className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-foreground">{item.name}</span>
                                {item.badge && (
                                  <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground/90">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Ver todas */}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById('solutions');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 0);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-purple-400 hover:bg-purple-500/10 rounded-xl transition-colors"
                  >
                    Ver todas as soluções
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Sobre nós e Insights */}
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${isActive(item.path)
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10"
                      }`}
                    onClick={() => {
                      setIsOpen(false);
                      handleNavClick(item.path);
                    }}
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

                {/* Seja Parceiro */}
                <a
                  href={sejaParceiroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 rounded-md transition-colors"
                >
                  Seja Parceiro
                </a>

                {/* Contato */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (location.pathname === '/') {
                      const element = document.getElementById('contato');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-purple-400 hover:bg-purple-500/10 rounded-md transition-colors"
                >
                  Contato
                </button>

                <div className="px-3 py-2 pt-3 space-y-2">
                  {/* <div className="flex justify-center mb-3">
                    <ThemeToggle />
                  </div> */}

                  <Button asChild size="sm" variant="ghost" className="w-full text-muted-foreground hover:text-purple-400">
                    <Link to="/contratacao" onClick={() => setIsOpen(false)}>
                      Login
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