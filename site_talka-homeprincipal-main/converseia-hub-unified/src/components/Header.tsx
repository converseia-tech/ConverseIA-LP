import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const headerPadding = useTransform(scrollY, [0, 100], [16, 8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Determina qual tema usar baseado na rota
  const getTheme = () => {
    if (location.pathname.includes('/conciarge')) return 'conciarge';
    if (location.pathname.includes('/direito')) return 'direito';
    return 'hub';
  };

  const theme = getTheme();

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? theme === 'conciarge'
            ? 'bg-conciarge-dark shadow-lg'
            : theme === 'direito'
            ? 'bg-direito-dark shadow-lg'
            : 'bg-hub-dark shadow-lg'
          : 'bg-transparent backdrop-blur-md'
      )}
      style={{
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <motion.img
              src="/logo-hub.png"
              alt="ConverseIA Hub Innovation"
              className="h-12 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 relative group px-2 py-1',
                    isActive(item.href)
                      ? theme === 'conciarge'
                        ? 'text-conciarge-primary'
                        : theme === 'direito'
                        ? 'text-direito-primary'
                        : 'text-hub-primary'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-0.5 transition-all duration-300',
                      isActive(item.href)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full',
                      theme === 'conciarge'
                        ? 'bg-conciarge-primary'
                        : theme === 'direito'
                        ? 'bg-direito-primary'
                        : 'bg-hub-primary'
                    )}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-white/20 mt-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-2 py-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'px-4 py-2 text-base font-medium rounded-md transition-colors',
                    isActive(item.href)
                      ? theme === 'conciarge'
                        ? 'text-conciarge-primary bg-conciarge-primary/10'
                        : theme === 'direito'
                        ? 'text-direito-primary bg-direito-primary/10'
                        : 'text-hub-primary bg-hub-primary/10'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
