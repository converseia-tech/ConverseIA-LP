import { Button } from "@/components/ui/button";
import { List, X } from "phosphor-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transformações baseadas no scroll
  const headerWidth = useTransform(scrollY, [0, 100], ["100%", "80%"]);
  const headerRadius = useTransform(scrollY, [0, 100], [0, 16]);
  // Reduce padding for a thinner navbar
  const headerPadding = useTransform(scrollY, [0, 100], [4, 8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-1/2 z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-brand-navy shadow-lg' : 'bg-transparent'
      }`}
      style={{
        width: headerWidth,
        borderRadius: headerRadius,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
        x: "-50%",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center h-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >

          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center space-x-2 group mr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/logo_header.png" 
              alt="Conciarge" 
              className="h-16 w-auto transition-all duration-500"
              style={{ transform: 'translateY(-3px)' }}
            />
          </motion.a>

          {/* Desktop Navigation - centered */}
          <div className="flex-1 flex justify-center">
            <motion.nav 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                "Solução", "Recursos", "Planos", "FAQ", "Seja um Parceiro"
              ].map((item, index) => {
                const href = item === "Seja um Parceiro" ? "https://parceiros.conciarge.com.br" : `#${item.toLowerCase().replace(/\s/g, '')}`;
                const isExternal = item === "Seja um Parceiro";
                
                return (
                  <motion.a 
                    key={item}
                    href={href}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                );
              })}
            </motion.nav>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <List className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-white/20" 
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 p-4">
              {["Solução", "Recursos", "Planos", "FAQ", "Seja um Parceiro"].map((item, index) => {
                const href = item === "Seja um Parceiro" ? "https://conciarge-parceiros.vercel.app" : `#${item.toLowerCase().replace(/\s/g, '')}`;
                const isExternal = item === "Seja um Parceiro";
                
                return (
                  <motion.a 
                    key={item}
                    href={href}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-white/90 hover:text-white transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 8 }}
                  >
                    {item}
                  </motion.a>
                );
              })}
              {/* Mobile CTA removed as requested */}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;