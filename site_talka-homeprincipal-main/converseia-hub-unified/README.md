# ConverseIA Hub Innovation - Site Unificado

Este projeto unifica três sites em uma única plataforma integrada:
- **ConverseIA Hub Innovation** (antigo Talka) - Plataforma central de Agentes de IA
- **ConverseIA Conciarge** - Soluções para clínicas e saúde
- **ConverseIA Direito** - Automação jurídica

## 🎨 Estrutura do Projeto

```
converseia-hub-unified/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navegação global unificada
│   │   ├── Footer.tsx          # Rodapé único para todo o site
│   │   ├── hub/                # Componentes específicos do Hub
│   │   └── ui/                 # Componentes UI (shadcn/ui)
│   ├── pages/
│   │   ├── Home.tsx            # Página principal (Hub Innovation)
│   │   ├── AgentesIA.tsx       # Detalhes dos Agentes de IA
│   │   ├── Conciarge.tsx       # Divisão Conciarge
│   │   ├── Direito.tsx         # Divisão Direito
│   │   ├── Documentacao.tsx    # Docs unificadas
│   │   ├── Parcerias.tsx       # Parcerias unificadas
│   │   ├── Contato.tsx         # Formulário de contato
│   │   └── NotFound.tsx        # Página 404
│   ├── lib/
│   │   ├── utils.ts            # Funções utilitárias
│   │   └── constants.ts        # Constantes (menu, links, etc)
│   ├── App.tsx                 # Configuração de rotas
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globais
├── public/                     # Assets estáticos
├── package.json
├── tailwind.config.ts          # Configuração Tailwind com paletas
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Paletas de Cores

### ConverseIA Hub Innovation (Roxo/Preto)
- Primary: `#8B5CF6`
- Secondary: `#7C3AED`
- Accent: `#6D28D9`
- Dark: `#1A1A1A`
- Darker: `#0A0A0A`

### ConverseIA Conciarge (Azul/Verde)
- Primary: `#3B82F6`
- Secondary: `#10B981`
- Accent: `#06B6D4`
- Dark: `#1E293B`

### ConverseIA Direito (Roxo Escuro)
- Primary: `#6B21A8`
- Secondary: `#7E22CE`
- Accent: `#581C87`
- Dark: `#1E1B4B`
- Darker: `#0F0A1E`

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ ou Bun
- npm, yarn ou bun

### Instalação

```bash
# Usando npm
npm install

# Ou usando bun (mais rápido)
bun install
```

### Desenvolvimento

```bash
# Usando npm
npm run dev

# Ou usando bun
bun dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Usando npm
npm run build

# Ou usando bun
bun run build
```

### Preview da Build

```bash
npm run preview
# ou
bun preview
```

## 📋 Menu de Navegação

O menu global possui as seguintes opções:
1. **Início** - Página principal do Hub
2. **Agentes de IA** - Detalhamento dos agentes
3. **Conciarge** - Divisão para saúde
4. **Direito** - Divisão para advocacia
5. **Documentação** - Docs técnicas unificadas
6. **Parcerias** - Programas de parceria
7. **Contato** - Formulário de contato

## 🎯 Características

### Menu e Navegação Unificados
- Header responsivo com mudança de cor conforme a seção
- Mobile-friendly com menu hambúrguer
- Indicador visual da página ativa
- Transições suaves entre páginas

### Identidade Visual por Divisão
- Cores específicas para cada divisão
- Manutenção da identidade visual única
- Layout e tipografia consistentes

### Responsividade
- Design mobile-first
- Breakpoints otimizados
- Componentes adaptativos

### Tecnologias
- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações
- **React Router** - Roteamento
- **Shadcn/UI** - Componentes UI
- **Lucide React** - Ícones

## 📦 Próximos Passos

### Conteúdo a Migrar

1. **Conciarge** (`/src/pages/Conciarge.tsx`)
   - [ ] Migrar HeroSection
   - [ ] Migrar TargetAudienceSection
   - [ ] Migrar AgentsModulesSection
   - [ ] Migrar PlatformFeaturesSection
   - [ ] Migrar PricingSection
   - [ ] Migrar FAQSection

2. **Direito** (`/src/pages/Direito.tsx`)
   - [ ] Migrar Hero
   - [ ] Migrar Convertional
   - [ ] Migrar Video
   - [ ] Migrar Depoiment
   - [ ] Migrar TechnologyIncorporte
   - [ ] Migrar Plans
   - [ ] Migrar FormContact

3. **Logos e Assets**
   - [ ] Adicionar nova logo TALKA em `/public/logo-hub.png`
   - [ ] Adicionar nova logo CONCIARGE em `/public/logo-conciarge.png`
   - [ ] Organizar imagens em `/public/images/`

4. **Documentação**
   - [ ] Preencher conteúdo técnico do Hub
   - [ ] Preencher documentação Conciarge
   - [ ] Preencher documentação Direito

## 📱 Contato e Suporte

- **E-mail**: contato@converseia.com.br
- **LinkedIn**: https://linkedin.com/company/converseia
- **Instagram**: https://instagram.com/converseia

---

**Desenvolvido com ❤️ para unificar o ecossistema ConverseIA**
