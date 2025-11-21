# Exemplos de Customização - Mini Navbar

Guia prático com exemplos de código para personalizar a Mini Navbar.

---

## 🎨 Exemplos de Temas de Cores

### Tema Azul Profissional

**Edite `mini-navbar.tsx`:**

```tsx
// Troque estas classes:
className="border border-[#333] bg-[#1f1f1f57]"

// Por:
className="border border-blue-500/30 bg-[rgba(15,23,42,0.75)]"
```

**Resultado:** Navbar com tom azul escuro e borda azul sutil.

---

### Tema Roxo Vibrante (ConverseIA)

```tsx
// Container principal
className="border border-purple-500/40 bg-[rgba(20,15,30,0.80)] backdrop-blur-md"

// Botões
// Login
className="... border-purple-500/50 bg-purple-900/30 text-purple-200"

// Signup
className="... bg-gradient-to-br from-purple-500 to-pink-500"
```

---

### Tema Dark Minimalista

```tsx
// Container
className="border border-white/10 bg-black/90 backdrop-blur-xl"

// Links
const defaultTextColor = "text-gray-400";
const hoverTextColor = "text-white";

// Botões monocromáticos
className="... bg-white/5 border-white/20 text-white"
```

---

## 🔗 Exemplos de Customização de Links

### Links Internos (React Router)

**Substituir AnimatedNavLink por Link do React Router:**

```tsx
import { Link } from "react-router-dom";

const AnimatedNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="group relative inline-block overflow-hidden h-5 flex items-center text-sm"
    >
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className="text-gray-300">{children}</span>
        <span className="text-white">{children}</span>
      </div>
    </Link>
  );
};

// Uso:
const navLinksData = [
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Contato", to: "/contato" },
];

// No JSX:
{navLinksData.map((link) => (
  <AnimatedNavLink key={link.to} to={link.to}>
    {link.label}
  </AnimatedNavLink>
))}
```

---

### Links com Scroll Suave (Âncoras)

```tsx
const handleAnchorClick = (e: React.MouseEvent, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// No link:
<a
  href={`#${link.id}`}
  onClick={(e) => handleAnchorClick(e, link.id)}
  className="..."
>
  {link.label}
</a>

// Links de exemplo:
const navLinksData = [
  { label: "Início", id: "hero" },
  { label: "Sobre", id: "about" },
  { label: "Produtos", id: "products" },
];
```

---

### Links Externos

```tsx
const externalLinks = [
  { 
    label: "Blog", 
    href: "https://blog.exemplo.com",
    isExternal: true 
  },
  { 
    label: "Documentação", 
    href: "https://docs.exemplo.com",
    isExternal: true 
  },
];

// Renderizar:
{externalLinks.map((link) => (
  <a
    key={link.href}
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-block overflow-hidden h-5 flex items-center text-sm"
  >
    <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
      <span className="text-gray-300 flex items-center gap-1">
        {link.label}
        <ExternalLink className="w-3 h-3" />
      </span>
      <span className="text-white flex items-center gap-1">
        {link.label}
        <ExternalLink className="w-3 h-3" />
      </span>
    </div>
  </a>
))}
```

---

## 🖼️ Exemplos de Logo

### Logo com Imagem

**Substitua o `logoElement`:**

```tsx
const logoElement = (
  <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
    <img 
      src="/logo.png" 
      alt="Logo" 
      className="h-8 w-auto"
    />
    <span className="text-white font-bold text-lg hidden sm:inline">
      Sua Marca
    </span>
  </Link>
);
```

---

### Logo SVG Inline

```tsx
const logoElement = (
  <Link to="/" className="flex items-center">
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 100 100" 
      className="text-purple-400"
    >
      <circle cx="50" cy="50" r="40" fill="currentColor" />
      <text 
        x="50" 
        y="65" 
        fontSize="40" 
        textAnchor="middle" 
        fill="white" 
        fontWeight="bold"
      >
        M
      </text>
    </svg>
  </Link>
);
```

---

### Logo com Texto Gradiente

```tsx
const logoElement = (
  <Link to="/" className="flex items-center">
    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
      MiniBrand
    </h1>
  </Link>
);
```

---

## 🎯 Customização do Products Menu

### Menu com Categorias

**Edite `products-menu.tsx`:**

```tsx
const productsByCategory = {
  services: {
    title: "Serviços",
    items: [
      {
        title: "Consultoria",
        description: "Análise e estratégia de negócios",
        href: "/servicos/consultoria",
        icon: TrendingUp,
      },
      {
        title: "Desenvolvimento",
        description: "Software sob medida",
        href: "/servicos/desenvolvimento",
        icon: Code,
      },
    ]
  },
  products: {
    title: "Produtos",
    items: [
      {
        title: "SaaS Platform",
        description: "Plataforma completa de gestão",
        href: "/produtos/saas",
        icon: Database,
      },
    ]
  }
};

// No render:
<NavigationMenuContent>
  <ul className="grid gap-4 p-6 w-[600px]">
    {Object.entries(productsByCategory).map(([key, category]) => (
      <li key={key}>
        <h3 className="font-semibold text-white mb-2">{category.title}</h3>
        <div className="grid gap-2">
          {category.items.map((item) => {
            const Icon = item.icon;
            return (
              <ListItem 
                key={item.title}
                href={item.href}
                title={item.title}
                icon={<Icon className="w-4 h-4" />}
              >
                {item.description}
              </ListItem>
            );
          })}
        </div>
      </li>
    ))}
  </ul>
</NavigationMenuContent>
```

---

### Menu com Imagens

```tsx
const products = [
  {
    title: "Produto Premium",
    description: "Nossa solução mais completa",
    href: "/produto-premium",
    image: "/products/premium.jpg",
    badge: "Popular"
  },
  // ...
];

// ListItem customizado:
<Link
  to={product.href}
  className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
>
  <img 
    src={product.image} 
    alt={product.title}
    className="w-16 h-16 rounded-lg object-cover"
  />
  <div className="flex-1">
    <div className="flex items-center gap-2">
      <span className="font-semibold text-white">{product.title}</span>
      {product.badge && (
        <span className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded-full">
          {product.badge}
        </span>
      )}
    </div>
    <p className="text-sm text-gray-400 mt-1">{product.description}</p>
  </div>
</Link>
```

---

### Menu com Preços

```tsx
const products = [
  {
    title: "Plano Básico",
    description: "Para começar",
    href: "/planos/basico",
    price: "R$ 49/mês",
    icon: Sparkles,
  },
  {
    title: "Plano Pro",
    description: "Recursos avançados",
    href: "/planos/pro",
    price: "R$ 99/mês",
    icon: Zap,
    badge: "Mais Popular"
  },
];

// No ListItem:
<div className="flex items-center justify-between">
  <div className="text-sm font-medium text-gray-200">{title}</div>
  <span className="text-xs font-bold text-purple-400">{price}</span>
</div>
```

---

## 🎭 Botões Personalizados

### Botão com Ícone

```tsx
import { LogIn, UserPlus } from "lucide-react";

const loginButtonElement = (
  <Link to="/login">
    <button className="px-4 py-2 text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors flex items-center gap-2">
      <LogIn className="w-4 h-4" />
      <span>Login</span>
    </button>
  </Link>
);

const signupButtonElement = (
  <Link to="/cadastro">
    <div className="relative group">
      <div className="absolute inset-0 -m-2 rounded-full bg-purple-400 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 group-hover:opacity-60 group-hover:blur-xl"></div>
      <button className="relative z-10 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-2">
        <UserPlus className="w-4 h-4" />
        <span>Cadastrar</span>
      </button>
    </div>
  </Link>
);
```

---

### Botão com Badge de Notificação

```tsx
const cartButton = (
  <button className="relative px-4 py-2 text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors">
    <ShoppingCart className="w-4 h-4" />
    
    {/* Badge */}
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
      3
    </span>
  </button>
);
```

---

### Grupo de Botões

```tsx
<div className="hidden sm:flex items-center gap-3">
  {/* Busca */}
  <button className="px-3 py-2 border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 transition-colors">
    <Search className="w-4 h-4" />
  </button>
  
  {/* Notificações */}
  <button className="relative px-3 py-2 border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 transition-colors">
    <Bell className="w-4 h-4" />
    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
  </button>
  
  {/* Avatar */}
  <Link to="/perfil">
    <img 
      src="/avatar.jpg" 
      alt="Perfil"
      className="w-8 h-8 rounded-full border-2 border-purple-500/50 hover:border-purple-500 transition-colors"
    />
  </Link>
</div>
```

---

## 📱 Customização Mobile

### Menu Mobile com Seções

```tsx
<div className="sm:hidden flex flex-col w-full ...">
  {/* Navegação Principal */}
  <div className="border-b border-[#333] pb-4 mb-4">
    <p className="text-xs font-bold text-gray-400 mb-3 px-3">NAVEGAÇÃO</p>
    <nav className="flex flex-col space-y-1">
      {navLinksData.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  </div>

  {/* Produtos/Soluções */}
  <div className="border-b border-[#333] pb-4 mb-4">
    <ProductsMenu isMobile />
  </div>

  {/* Ações */}
  <div className="flex flex-col space-y-3">
    {loginButtonElement}
    {signupButtonElement}
  </div>
</div>
```

---

### Menu Mobile com Ícones

```tsx
import { Home, Info, Mail, Package } from "lucide-react";

const mobileNavLinks = [
  { label: "Início", href: "/", icon: Home },
  { label: "Sobre", href: "/sobre", icon: Info },
  { label: "Produtos", href: "/produtos", icon: Package },
  { label: "Contato", href: "/contato", icon: Mail },
];

// Render:
{mobileNavLinks.map((link) => {
  const Icon = link.icon;
  return (
    <a
      key={link.href}
      href={link.href}
      className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{link.label}</span>
    </a>
  );
})}
```

---

## 🎬 Animações Customizadas

### Animação de Entrada (Framer Motion)

```tsx
import { motion } from "framer-motion";

export function MiniNavbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 ..."
    >
      {/* Conteúdo */}
    </motion.header>
  );
}
```

---

### Animação de Hover nos Links

```tsx
// CSS customizado (adicione ao componente):
<style jsx>{`
  .animated-link {
    position: relative;
  }
  
  .animated-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #a855f7, #ec4899);
    transition: width 0.3s ease;
  }
  
  .animated-link:hover::after {
    width: 100%;
  }
`}</style>
```

---

### Scroll Animation (Navbar muda ao rolar)

```tsx
import { useState, useEffect } from "react";

export function MiniNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-[#1f1f1fdd] backdrop-blur-xl' 
          : 'py-3 bg-[#1f1f1f57] backdrop-blur-sm'
      }`}
    >
      {/* Conteúdo */}
    </header>
  );
}
```

---

## 🔍 Funcionalidades Extras

### Busca Integrada

```tsx
import { Search, X } from "lucide-react";
import { useState } from "react";

const [searchOpen, setSearchOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");

// Botão de busca
<button 
  onClick={() => setSearchOpen(!searchOpen)}
  className="px-3 py-2 border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 transition-colors"
>
  <Search className="w-4 h-4" />
</button>

// Modal de busca
{searchOpen && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
    <div className="w-full max-w-2xl mx-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 pr-12 bg-[#1f1f1f] border border-[#333] rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
          autoFocus
        />
        <button
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
)}
```

---

### Seletor de Idioma

```tsx
import { Globe } from "lucide-react";

const languages = [
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
];

const [currentLang, setCurrentLang] = useState('pt');
const [langMenuOpen, setLangMenuOpen] = useState(false);

// Botão
<div className="relative">
  <button 
    onClick={() => setLangMenuOpen(!langMenuOpen)}
    className="px-3 py-2 border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 transition-colors flex items-center gap-2"
  >
    <Globe className="w-4 h-4" />
    <span className="text-sm">{languages.find(l => l.code === currentLang)?.label}</span>
  </button>
  
  {/* Dropdown */}
  {langMenuOpen && (
    <div className="absolute top-full mt-2 right-0 bg-[#1f1f1f] border border-[#333] rounded-lg overflow-hidden shadow-lg">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            setCurrentLang(lang.code);
            setLangMenuOpen(false);
          }}
          className={`w-full px-4 py-2 text-left hover:bg-white/5 transition-colors flex items-center gap-2 ${
            currentLang === lang.code ? 'text-purple-400' : 'text-gray-300'
          }`}
        >
          <span>{lang.flag}</span>
          <span className="text-sm">{lang.label}</span>
        </button>
      ))}
    </div>
  )}
</div>
```

---

## 🚀 Integração com Auth

### Navbar com Estado de Login

```tsx
import { useAuth } from "@/hooks/use-auth"; // Seu hook de autenticação

export function MiniNavbar() {
  const { user, logout } = useAuth();
  
  return (
    <header className="...">
      {/* ... resto do código ... */}
      
      <div className="hidden sm:flex items-center gap-3">
        {user ? (
          // Usuário logado
          <>
            <span className="text-sm text-gray-300">
              Olá, {user.name}
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-red-500/50 hover:text-red-400 transition-colors"
            >
              Sair
            </button>
          </>
        ) : (
          // Usuário não logado
          <>
            {loginButtonElement}
            {signupButtonElement}
          </>
        )}
      </div>
    </header>
  );
}
```

---

**Todos esses exemplos são compatíveis com a estrutura atual do projeto!** 🎉

Use-os como base e adapte conforme suas necessidades.
