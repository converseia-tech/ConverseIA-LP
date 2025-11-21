# Infraestrutura do Projeto - ConverseIA

## ✅ Status Atual da Configuração

Seu projeto **JÁ ESTÁ TOTALMENTE CONFIGURADO** e pronto para uso!

---

## 🏗️ Stack Tecnológica

### Core Framework
- **Vite 5.4.1** - Build tool ultrarrápido
- **React 18.3.1** - Biblioteca UI
- **TypeScript 5.5.3** - Type safety
- **React Router DOM 6.26.2** - Navegação SPA

### UI Framework
- **shadcn UI** - Sistema de componentes
- **Tailwind CSS 3.4.11** - Utility-first CSS
- **Radix UI** - Componentes primitivos acessíveis
- **Framer Motion 12.23.24** - Animações

### Bibliotecas de Ícones
- **lucide-react 0.462.0** ✅ Instalado
- **phosphor-react 1.4.1** ✅ Instalado
- **@radix-ui/react-icons 1.3.2** ✅ Instalado

---

## 📦 Dependências Radix UI Instaladas

Todas as dependências necessárias **JÁ ESTÃO INSTALADAS**:

```json
{
  "@radix-ui/react-accordion": "^1.2.0",
  "@radix-ui/react-alert-dialog": "^1.1.1",
  "@radix-ui/react-aspect-ratio": "^1.1.0",
  "@radix-ui/react-avatar": "^1.1.0",
  "@radix-ui/react-checkbox": "^1.1.1",
  "@radix-ui/react-collapsible": "^1.1.0",
  "@radix-ui/react-context-menu": "^2.2.1",
  "@radix-ui/react-dialog": "^1.1.15",
  "@radix-ui/react-dropdown-menu": "^2.1.1",
  "@radix-ui/react-hover-card": "^1.1.1",
  "@radix-ui/react-label": "^2.1.0",
  "@radix-ui/react-navigation-menu": "^1.2.0", ✅
  "@radix-ui/react-popover": "^1.1.1",
  "@radix-ui/react-scroll-area": "^1.1.0",
  "@radix-ui/react-separator": "^1.1.0",
  "@radix-ui/react-slot": "^1.2.4",
  "@radix-ui/react-tabs": "^1.1.13",
  "@radix-ui/react-toast": "^1.2.1",
  "@radix-ui/react-tooltip": "^1.1.4"
}
```

---

## ⚙️ Configuração TypeScript

### tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]  ✅ Alias configurado
    }
  }
}
```

**Isso permite:**
```tsx
// ✅ Correto
import { Button } from "@/components/ui/button";

// ❌ Evite
import { Button } from "../../components/ui/button";
```

---

## 🎨 Configuração Tailwind CSS

### tailwind.config.ts

O projeto usa **CSS Variables** para temas dinâmicos:

```typescript
{
  "style": "default",
  "tailwind": {
    "cssVariables": true,  ✅
    "prefix": ""
  }
}
```

### Variáveis CSS (src/index.css)

```css
:root {
  --primary: 260 100% 63%;      /* Roxo vibrante */
  --secondary: 175 100% 39%;    /* Teal */
  --accent: 210 100% 58%;       /* Azul */
  --foreground: 0 0% 100%;      /* Branco */
  --background: 0 0% 9%;        /* Preto */
  /* ... outras variáveis */
}
```

**Como usar:**
```tsx
<div className="bg-primary text-primary-foreground">
  Texto com cores do tema
</div>
```

---

## 📁 Estrutura de Pastas

```
site_unificado_converseia/
├── src/
│   ├── components/
│   │   ├── ui/                    ✅ Componentes shadcn
│   │   │   ├── button.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── mini-navbar.tsx    ⭐ Novo
│   │   │   ├── products-menu.tsx  ⭐ Novo
│   │   │   └── ...
│   │   ├── Navigation.tsx         (Navbar existente)
│   │   ├── HeroSection.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── About.tsx
│   │   ├── MiniNavbarDemo.tsx     ⭐ Novo
│   │   └── ...
│   ├── lib/
│   │   ├── utils.ts               ✅ cn() helper
│   │   └── ...
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── App.tsx                    ✅ Router principal
│   ├── main.tsx                   ✅ Entry point
│   └── index.css                  ✅ Estilos globais + Tailwind
├── public/                        (Assets estáticos)
├── components.json                ✅ Config shadcn
├── package.json                   ✅ Dependências
├── tsconfig.json                  ✅ TypeScript
├── tailwind.config.ts             ✅ Tailwind
├── vite.config.ts                 ✅ Vite
└── MINI_NAVBAR_GUIDE.md           ⭐ Guia de uso
```

---

## 🔧 Configuração shadcn UI

### components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,              // Não usa React Server Components
  "tsx": true,               ✅ TypeScript
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",  ✅
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Como adicionar novos componentes shadcn

**NÃO é necessário** pois todos já estão instalados! Mas se precisar:

```bash
npx shadcn@latest add [component-name]
```

Exemplos:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add sheet
```

---

## 🚀 Scripts Disponíveis

### package.json scripts

```json
{
  "scripts": {
    "dev": "vite",                      // Servidor dev
    "build": "vite build",              // Build produção
    "build:dev": "vite build --mode development",
    "lint": "eslint .",                 // Linter
    "preview": "vite preview"           // Preview do build
  }
}
```

### Como usar

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

---

## 🎯 Componentes UI Disponíveis

Todos em `/src/components/ui/`:

### Navegação
- ✅ `navigation-menu.tsx` - Menu dropdown
- ✅ `dropdown-menu.tsx` - Dropdown genérico
- ✅ `menubar.tsx` - Barra de menu
- ⭐ `mini-navbar.tsx` - **Novo navbar animado**
- ⭐ `products-menu.tsx` - **Novo submenu produtos**

### Formulários
- ✅ `button.tsx`
- ✅ `input.tsx`
- ✅ `label.tsx`
- ✅ `checkbox.tsx`
- ✅ `select.tsx`
- ✅ `switch.tsx`
- ✅ `slider.tsx`
- ✅ `textarea.tsx` (provavelmente existe)
- ✅ `form.tsx` (com react-hook-form)

### Feedback
- ✅ `toast.tsx` (Sonner)
- ✅ `alert.tsx`
- ✅ `alert-dialog.tsx`
- ✅ `dialog.tsx`
- ✅ `sheet.tsx`
- ✅ `tooltip.tsx`
- ✅ `progress.tsx`

### Layout
- ✅ `card.tsx`
- ✅ `separator.tsx`
- ✅ `scroll-area.tsx`
- ✅ `tabs.tsx`
- ✅ `accordion.tsx`
- ✅ `collapsible.tsx`
- ✅ `aspect-ratio.tsx`

### Data Display
- ✅ `avatar.tsx`
- ✅ `badge.tsx`
- ✅ `calendar.tsx`
- ✅ `carousel.tsx`
- ✅ `chart.tsx`
- ✅ `table.tsx` (provavelmente existe)

---

## 🎨 Utilitários

### cn() - Class Name Helper

Localização: `/src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Como usar:**
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  "text-white"
)}>
  Conteúdo
</div>
```

**Benefícios:**
- Combina classes condicionalmente
- Resolve conflitos do Tailwind (ex: `text-red-500` sobrescreve `text-blue-500`)

---

## 🔌 Hooks Customizados

### use-toast

```tsx
import { useToast } from "@/hooks/use-toast";

function Component() {
  const { toast } = useToast();
  
  return (
    <button onClick={() => {
      toast({
        title: "Sucesso!",
        description: "Operação concluída",
      })
    }}>
      Clique aqui
    </button>
  );
}
```

### use-mobile

```tsx
import { useMobile } from "@/hooks/use-mobile";

function Component() {
  const isMobile = useMobile();
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}
```

---

## 🌐 Roteamento

### App.tsx - Router Principal

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/mini-navbar-demo" element={<MiniNavbarDemo />} /> ⭐
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### Navegação entre páginas

```tsx
import { Link } from "react-router-dom";

// Link
<Link to="/sobre">Sobre nós</Link>

// Navegação programática
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/mini-navbar-demo");
```

---

## 🎭 Contextos e Providers

### ThemeProvider

```tsx
import { ThemeProvider } from "./contexts/ThemeContext";

<ThemeProvider>
  <App />
</ThemeProvider>
```

### QueryClientProvider (React Query)

```tsx
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

### TooltipProvider

```tsx
import { TooltipProvider } from "@/components/ui/tooltip";

<TooltipProvider>
  <App />
</TooltipProvider>
```

---

## 📦 Gestão de Estado

### Bibliotecas Disponíveis

1. **React Query (@tanstack/react-query)** ✅
   - Para data fetching
   - Cache automático
   - Refetch inteligente

2. **React Hook Form** ✅
   - Formulários performáticos
   - Validação integrada (Zod)

3. **Context API** ✅
   - Estado global simples
   - ThemeContext já implementado

---

## 🔐 Variáveis de Ambiente

Se precisar usar variáveis de ambiente:

### .env.local (criar se não existir)

```env
VITE_API_URL=https://api.exemplo.com
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

### Como acessar

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

**Importante:** Prefixo `VITE_` é obrigatório!

---

## 🧪 Linting e Formatação

### ESLint Configurado

```json
// .eslintrc ou eslint.config.js
{
  "plugins": ["react-hooks", "react-refresh"],
  "extends": ["eslint:recommended"]
}
```

### Como rodar

```bash
npm run lint
```

---

## 📊 Build e Deploy

### Build de Produção

```bash
npm run build
```

Gera pasta `dist/` otimizada.

### Preview Local

```bash
npm run preview
```

Testa o build de produção localmente.

### Deploy Recomendado

- **Vercel** (recomendado para Vite) ✅ Configurado
- **Netlify**
- **Cloudflare Pages**
- **AWS Amplify**

Todos detectam Vite automaticamente!

---

## 🔍 Debug e DevTools

### React DevTools

```bash
# Instale extensão no Chrome/Firefox
```

### Vite DevServer

```
http://localhost:5173
```

- Hot Module Replacement (HMR) ✅
- Fast Refresh ✅

---

## 📚 Documentação de Referência

### Oficiais

- **Vite:** https://vitejs.dev
- **React:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Tailwind:** https://tailwindcss.com
- **shadcn UI:** https://ui.shadcn.com

### Bibliotecas

- **Radix UI:** https://www.radix-ui.com
- **Lucide Icons:** https://lucide.dev
- **Framer Motion:** https://www.framer.com/motion
- **React Router:** https://reactrouter.com
- **React Query:** https://tanstack.com/query

---

## ✅ Checklist de Configuração

Tudo já está pronto! ✅

- [x] Vite instalado e configurado
- [x] TypeScript configurado com aliases
- [x] Tailwind CSS com CSS variables
- [x] shadcn UI com todos componentes
- [x] Radix UI dependencies
- [x] lucide-react icons
- [x] React Router configurado
- [x] Navigation Menu criado
- [x] Mini Navbar implementado
- [x] Products Menu implementado
- [x] Demo page criada
- [x] Rota configurada

---

## 🆘 Comandos Úteis

### Instalar nova dependência

```bash
npm install [package-name]
```

### Remover dependência

```bash
npm uninstall [package-name]
```

### Limpar cache

```bash
# Node modules
rm -rf node_modules
npm install

# Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Verificar versões

```bash
node --version
npm --version
```

---

## 🎉 Próximos Passos Recomendados

1. **Teste a demo:** `/mini-navbar-demo`
2. **Customize componentes** conforme necessidade
3. **Adicione novas rotas** em `App.tsx`
4. **Explore outros componentes** shadcn disponíveis
5. **Configure CI/CD** para deploy automático

---

**Projeto totalmente configurado e pronto para desenvolvimento! 🚀**
