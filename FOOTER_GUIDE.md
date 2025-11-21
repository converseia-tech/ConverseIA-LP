# Footer Component - Guia de Integração

## ✅ Status da Implementação

O componente Footer moderno foi **integrado com sucesso** no projeto!

---

## 📦 Arquivos Criados

1. **`src/components/ui/footer.tsx`** - Componente Footer reutilizável
2. **`src/pages/FooterDemo.tsx`** - Página demo completa
3. **Rota configurada:** `/footer-demo`

---

## 🚀 Como Usar

### Visualizar a Demo

Acesse:
```
http://localhost:5173/footer-demo
```

### Integrar no Projeto

**Opção 1 - Footer Global (Layout Principal):**

```tsx
import FooterSection from "@/components/ui/footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Conteúdo */}
      </main>
      <FooterSection />
    </div>
  );
}
```

**Opção 2 - Footer em Página Específica:**

```tsx
import FooterSection from "@/components/ui/footer";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <FooterSection />
    </div>
  );
}
```

---

## 🎨 Customização

### 1. Links de Navegação

Edite o array `links` em `footer.tsx`:

```tsx
const links = [
    {
        title: 'Início',
        href: '/',
    },
    {
        title: 'Sobre',
        href: '/sobre',
    },
    {
        title: 'Serviços',
        href: '/servicos',
    },
    {
        title: 'Contato',
        href: '/contato',
    },
    {
        title: 'Blog',
        href: '/insights',
    },
]
```

### 2. Redes Sociais

Edite o array `socialLinks`:

```tsx
import { 
    Twitter, 
    Facebook, 
    Instagram, 
    Linkedin, 
    Youtube, 
    Github 
} from 'lucide-react'

const socialLinks = [
    {
        href: "https://twitter.com/suaconta",
        label: "Twitter",
        icon: Twitter,
    },
    {
        href: "https://facebook.com/suapagina",
        label: "Facebook",
        icon: Facebook,
    },
    {
        href: "https://instagram.com/suaconta",
        label: "Instagram",
        icon: Instagram,
    },
    {
        href: "https://linkedin.com/company/suaempresa",
        label: "LinkedIn",
        icon: Linkedin,
    },
    {
        href: "https://youtube.com/@seucanal",
        label: "YouTube",
        icon: Youtube,
    },
    {
        href: "https://github.com/seuusuario",
        label: "GitHub",
        icon: Github,
    },
]
```

### 3. Logo

Substitua o caminho da imagem:

```tsx
<Link to="/" aria-label="go home" className="mx-auto block size-fit mb-8">
    <img 
        src="/seu-logo.png"  // Troque aqui
        alt="Sua Marca" 
        className="h-12 w-auto mx-auto"
    />
</Link>
```

**Ou use SVG/Texto:**

```tsx
<Link to="/" aria-label="go home" className="mx-auto block size-fit mb-8">
    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Sua Marca
    </h2>
</Link>
```

### 4. Copyright

```tsx
<span className="text-muted-foreground block text-center text-sm">
    © {new Date().getFullYear()} Sua Empresa, Todos os direitos reservados
</span>
```

---

## 🎯 Ícones Disponíveis (lucide-react)

O componente usa **lucide-react** (já instalado). Ícones de redes sociais disponíveis:

```tsx
import {
    // Redes Sociais
    Twitter,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Github,
    Twitch,
    Discord,
    Slack,
    
    // Comunicação
    Mail,
    Phone,
    MessageCircle,
    Send,
    
    // Outros
    Globe,
    MapPin,
    Calendar,
    Clock,
} from 'lucide-react'
```

Ver todos em: [lucide.dev](https://lucide.dev)

---

## 🎨 Temas de Cores

### Tema Escuro (Padrão)

Já configurado com variáveis CSS do projeto:
- `bg-background` - Fundo
- `border-border` - Bordas
- `text-muted-foreground` - Texto secundário
- `text-primary` - Cor de destaque ao hover

### Tema Claro

Para forçar tema claro, adicione classe ao footer:

```tsx
<footer className="py-16 md:py-32 border-t border-gray-200 bg-white">
    {/* ... */}
</footer>
```

E ajuste as cores de texto:

```tsx
<Link className="text-gray-600 hover:text-purple-600 ...">
    {link.title}
</Link>
```

---

## 📱 Responsividade

O footer é **100% responsivo**:

### Mobile (< 768px)
- Links empilhados verticalmente
- Ícones sociais em grid flexível
- Padding reduzido

### Desktop (≥ 768px)
- Links em linha horizontal
- Maior espaçamento (py-32)
- Layout otimizado

### Ajustar Breakpoints

```tsx
// Mobile
<div className="my-8 flex flex-wrap justify-center gap-4 md:gap-6 ...">

// Desktop
<div className="my-8 md:my-12 flex flex-wrap justify-center gap-6 ...">
```

---

## 🔗 Tipos de Links

### Links Internos (React Router)

```tsx
// Usa <Link> do react-router-dom
<Link to="/pagina">Texto</Link>
```

### Links Âncora (Scroll)

```tsx
// Usa <a> com href="#"
<a href="#secao">Texto</a>
```

### Links Externos

```tsx
// Usa <a> com target="_blank"
<a 
    href="https://..." 
    target="_blank" 
    rel="noopener noreferrer"
>
    Texto
</a>
```

O componente detecta automaticamente qual usar baseado no `href`!

---

## 🌟 Funcionalidades Extras

### Adicionar Newsletter

```tsx
<div className="mb-8 max-w-md mx-auto">
    <h3 className="text-foreground font-semibold mb-3 text-center">
        Receba novidades
    </h3>
    <form className="flex gap-2">
        <input
            type="email"
            placeholder="seu@email.com"
            className="flex-1 px-4 py-2 rounded-lg bg-card border border-border text-foreground"
        />
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Assinar
        </button>
    </form>
</div>
```

### Adicionar Múltiplas Colunas

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
    {/* Coluna 1 - Sobre */}
    <div>
        <h3 className="font-semibold mb-3">Sobre</h3>
        <ul className="space-y-2">
            <li><Link to="/sobre">Quem Somos</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
        </ul>
    </div>

    {/* Coluna 2 - Produtos */}
    <div>
        <h3 className="font-semibold mb-3">Produtos</h3>
        <ul className="space-y-2">
            <li><Link to="/produto-1">Produto 1</Link></li>
            <li><Link to="/produto-2">Produto 2</Link></li>
        </ul>
    </div>

    {/* Coluna 3 - Suporte */}
    <div>
        <h3 className="font-semibold mb-3">Suporte</h3>
        <ul className="space-y-2">
            <li><Link to="/ajuda">Ajuda</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
    </div>

    {/* Coluna 4 - Legal */}
    <div>
        <h3 className="font-semibold mb-3">Legal</h3>
        <ul className="space-y-2">
            <li><Link to="/privacidade">Privacidade</Link></li>
            <li><Link to="/termos">Termos</Link></li>
        </ul>
    </div>
</div>
```

### Adicionar Badges/Tags

```tsx
<div className="flex flex-wrap justify-center gap-2 my-8">
    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
        Trusted by 10,000+ companies
    </span>
    <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-medium">
        100% Secure
    </span>
</div>
```

---

## 🎭 Exemplos de Layouts

### Layout Minimalista

```tsx
export default function MinimalFooter() {
    return (
        <footer className="py-12 border-t border-border bg-background">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-6">
                    {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <a key={i} href={social.href} className="text-muted-foreground hover:text-primary">
                                <Icon className="size-5" />
                            </a>
                        );
                    })}
                </div>
                <p className="text-sm text-muted-foreground">
                    © 2025 Sua Marca. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
```

### Layout com Gradiente

```tsx
<footer className="py-16 md:py-32 border-t border-border bg-gradient-to-b from-background to-background/50">
    {/* Conteúdo */}
</footer>
```

### Layout Expandido (Mega Footer)

```tsx
<footer className="py-16 bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo + Descrição */}
            <div className="md:col-span-2">
                <img src="/logo.png" alt="Logo" className="h-10 mb-4" />
                <p className="text-muted-foreground text-sm mb-4">
                    Sua descrição aqui. Conte mais sobre sua empresa.
                </p>
                {/* Redes Sociais */}
            </div>

            {/* 3 colunas de links */}
            <div>
                <h3 className="font-semibold mb-4">Produtos</h3>
                {/* Links */}
            </div>
            <div>
                <h3 className="font-semibold mb-4">Empresa</h3>
                {/* Links */}
            </div>
            <div>
                <h3 className="font-semibold mb-4">Recursos</h3>
                {/* Links */}
            </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
                © 2025 Sua Marca
            </p>
        </div>
    </div>
</footer>
```

---

## ✅ Checklist de Customização

- [ ] Trocar logo
- [ ] Atualizar links de navegação
- [ ] Configurar redes sociais reais
- [ ] Ajustar copyright
- [ ] Testar responsividade
- [ ] Verificar acessibilidade (aria-labels)
- [ ] Adicionar links de Privacidade/Termos se necessário

---

## 📚 Referências

- **Lucide Icons:** https://lucide.dev
- **React Router:** https://reactrouter.com
- **Tailwind CSS:** https://tailwindcss.com

---

## 🎉 Pronto para Usar!

O footer está totalmente integrado e funcional. Acesse `/footer-demo` para ver o resultado!

**Próximos passos:**
1. Customize os links e redes sociais
2. Troque o logo
3. Integre no layout principal
4. Adicione funcionalidades extras conforme necessário
