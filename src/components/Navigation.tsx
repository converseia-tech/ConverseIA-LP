import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { List, X, Scales, Buildings, Code, Database, Globe, Sparkle } from "phosphor-react";

// Inline SVG stethoscope that uses `currentColor` so we can tint it via classes
const StethoscopeInline = ({ className, ...rest }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 201.324 201.324"
    className={className}
    fill="none"
    {...rest}
  >
    <circle cx="95.596" cy="10.083" r="9" fill="currentColor" />
    <circle cx="149.018" cy="10.083" r="9" fill="currentColor" />
    <path
      d="M179.06,19.254c-5.123-8.873-14.298-14.17-24.544-14.17v10c6.631,0,12.568,3.428,15.884,9.17c3.316,5.743,3.316,12.599,0.001,18.342l-32.122,55.636c-3.315,5.742-9.253,9.17-15.884,9.171c-6.631,0-12.569-3.428-15.885-9.171L74.389,42.595c-3.315-5.742-3.315-12.599,0-18.341s9.254-9.171,15.885-9.171v-10c-10.246,0-19.422,5.297-24.545,14.171s-5.123,19.468,0,28.341l32.121,55.636c4.272,7.399,11.366,12.299,19.545,13.727v26.832c0,26.211-15.473,47.535-34.492,47.535c-19.019,0-34.491-21.324-34.491-47.535v-31.948C59.802,109.52,68.4,99.424,68.4,87.356c0-13.779-11.21-24.989-24.989-24.989s-24.989,11.21-24.989,24.989c0,12.067,8.598,22.163,19.989,24.486v31.948c0,31.725,19.959,57.535,44.492,57.535c24.532,0,44.491-25.81,44.491-57.535v-26.832c8.178-1.428,15.273-6.328,19.544-13.727l32.122-55.636C184.184,38.722,184.184,28.127,179.06,19.254z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
    />
  </svg>
);
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navigation = ({ transparent = false }: { transparent?: boolean }) => {
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
      return "/logo_direito.png";
    } else if (location.pathname === "/conciarge") {
      return "/logo_conciarge.png";
    }
    return "/logo_converseia.png";
  };

  // Helper para cor do botão
  const getButtonColorClass = () => {
    if (location.pathname === "/direito") {
      return "bg-[#0055fb] hover:bg-[#0044cc] text-white shadow-[0_0_20px_rgba(0,85,251,0.3)]";
    } else if (location.pathname === "/conciarge") {
      return "bg-[#20a5c2] hover:bg-[#1a8da6] text-white shadow-[0_0_20px_rgba(32,165,194,0.3)]";
    }
    return "bg-purple-600/90 hover:bg-purple-700/90 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]";
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

  // Estrutura de soluções simplificada para 3 cards
  const solucoesItems: Array<{ name: string; path: string; description: string; icon: any; iconColor: string; iconBg: string; badge?: string; hoverBorder?: string; hoverBg?: string }> = [
    {
      name: "Clínicas de Saúde",
      path: "/conciarge",
      description: "IA Concierge 24/7 para atendimento e agendamento",
      icon: StethoscopeInline,
      iconColor: "text-teal-400",
      iconBg: "bg-teal-500/10",
      hoverBorder: "hover:border-teal-500/30",
      hoverBg: "hover:bg-teal-600/6",
    },
    {
      name: "Escritórios de Advocacia",
      path: "/direito",
      description: "Automação e IA para escritórios de advocacia",
      icon: Scales,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
    },
    {
      name: "Plataforma ConverseIA",
      path: "/plataforma",
      description: "Projetos sob medida, Chat, CRM, BI e Agentes Personalizados.",
      icon: Sparkle,
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/10",
    },
  ];

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
        className={`w-full max-w-[100vw] ${transparent && !isScrolled ? 'bg-transparent border-transparent' : 'bg-background/80 backdrop-blur-xl border-b border-white/5 lg:border-border/50'}`}
        animate={{
          width: isScrolled ? "90%" : "100%",
          borderRadius: isScrolled ? "12px" : "0px",
          border: isScrolled ? "1px solid rgba(255,255,255,0.1)" : (transparent ? "none" : "1px solid rgba(255,255,255,0.05)"),
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.8)" : (transparent ? "transparent" : "rgba(10, 10, 10, 0.8)"),
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
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-500 ease-in-out hover:scale-110"
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[calc(100vw-2rem)] max-w-[900px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {solucoesItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`flex flex-col p-5 rounded-xl border border-white/5 transition-all duration-300 group/item h-full ${item.hoverBorder || 'hover:border-purple-500/30'} ${item.hoverBg || 'hover:bg-white/5'}`}
                          >
                            <div className={`p-3 rounded-lg w-fit mb-4 ${item.iconBg} group-hover/item:scale-110 transition-transform duration-300`}>
                              <Icon weight="fill" className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className={`font-bold text-base text-white transition-colors ${
                                item.iconColor === 'text-teal-400' ? 'group-hover/item:text-teal-400' :
                                item.iconColor === 'text-blue-400' ? 'group-hover/item:text-blue-400' :
                                item.iconColor === 'text-pink-400' ? 'group-hover/item:text-pink-400' :
                                'group-hover/item:text-purple-400'
                              }`}>
                                {item.name}
                              </h3>
                              {item.badge && (
                                <span className="text-[10px] font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {item.description}
                            </p>
                          </Link>
                        );
                      })}
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
            </div>

            {/* Mobile Quick Navigation - Soluções & Sobre nós & Insights */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-purple-400 transition-all"
              >
                Soluções
              </button>
              <Link
                to="/sobre"
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-purple-400 transition-all"
              >
                Sobre nós
              </Link>
              <Link
                to="/insights"
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-purple-400 transition-all"
              >
                Insights
              </Link>
            </div>

            {/* Botões de Ação - Direita */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* <ThemeToggle /> */}

              <Button asChild size="sm" variant="ghost" className="text-sm xl:text-base px-4 xl:px-6 text-muted-foreground hover:text-purple-400">
                <Link to="/login">Login</Link>
              </Button>

              <Button asChild size="sm" className={`text-sm xl:text-base px-4 xl:px-6 transition-all duration-300 ${getButtonColorClass()}`}>
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
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-lg mt-2 border border-white/10 mb-4 shadow-lg shadow-purple-500/10">
                {/* Soluções Mobile */}
                <div className="px-3 py-2">
                  <p className="text-xs font-bold text-purple-400 mb-4 uppercase tracking-wider">Soluções</p>
                  <div className="space-y-2">
                    {solucoesItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`flex items-start gap-3 px-3 py-3 rounded-xl transition-colors border border-white/5 ${item.hoverBg || 'hover:bg-white/5'} ${item.hoverBorder || ''}`}
                          onClick={() => {
                            setIsOpen(false);
                            handleNavClick(item.path);
                          }}
                        >
                          <div className={`p-2 rounded-lg ${item.iconBg}`}>
                            <Icon weight="fill" className={`w-5 h-5 ${item.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-semibold text-gray-200">{item.name}</span>
                              {item.badge && (
                                <span className="text-[10px] font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
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

                <div className="px-3 py-2 pt-3 space-y-2">
                  <Button asChild size="sm" variant="ghost" className="w-full text-muted-foreground hover:text-purple-400">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild size="sm" className={`w-full ${getButtonColorClass()}`}>
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