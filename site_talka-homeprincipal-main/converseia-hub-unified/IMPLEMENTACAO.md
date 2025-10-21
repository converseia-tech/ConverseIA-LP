# ConverseIA Hub Innovation - Guia de Implementação

## ✅ O que foi criado

### Estrutura Completa do Projeto
✅ Projeto React + TypeScript + Vite configurado  
✅ Tailwind CSS com paletas customizadas por divisão  
✅ Sistema de roteamento completo (React Router)  
✅ Header/Navigation unificado responsivo  
✅ Footer unificado  
✅ Componentes shadcn/ui integrados  

### Páginas Criadas
✅ **Home** (`/`) - Página principal do Hub Innovation  
✅ **Agentes de IA** (`/agentes-ia`) - Showcase dos agentes  
✅ **Conciarge** (`/conciarge`) - Estrutura base criada  
✅ **Direito** (`/direito`) - Estrutura base criada  
✅ **Documentação** (`/documentacao`) - Com tabs por divisão  
✅ **Parcerias** (`/parcerias`) - Programas unificados  
✅ **Contato** (`/contato`) - Formulário completo  
✅ **404** (`/*`) - Página de erro  

### Paletas de Cores Implementadas
- **Hub** (Roxo/Preto): `hub-primary`, `hub-secondary`, `hub-accent`, `hub-dark`, `hub-darker`
- **Conciarge** (Azul/Verde): `conciarge-primary`, `conciarge-secondary`, etc.
- **Direito** (Roxo Escuro): `direito-primary`, `direito-secondary`, etc.

---

## 🚀 Como Executar o Projeto

### 1. Instalar Dependências

```powershell
cd c:\Users\victo\Documents\converseia_api_docs\site_unificado_converseia\converseia-hub-unified

# Usando npm
npm install

# OU usando bun (mais rápido)
bun install
```

### 2. Executar em Desenvolvimento

```powershell
# Usando npm
npm run dev

# OU usando bun
bun dev
```

O site estará disponível em: **http://localhost:5173**

### 3. Build para Produção

```powershell
npm run build
# ou
bun run build
```

---

## 📋 Próximos Passos (Conteúdo a Migrar)

### 1. Adicionar Logos e Assets

Você precisa adicionar as novas logos nos seguintes locais:

```
/public/
  ├── logo-hub.png          <- Nova logo da TALKA adaptada para Hub
  ├── logo-conciarge.png    <- Nova logo da CONCIARGE
  ├── logo-direito.png      <- Logo ConverseIA Direito
  └── images/               <- Outras imagens dos sites
```

### 2. Migrar Conteúdo Conciarge

Abra o arquivo: `src/pages/Conciarge.tsx`

Componentes a migrar do site original:
- ✅ Estrutura básica criada
- ⏳ HeroSection
- ⏳ TargetAudienceSection
- ⏳ AgentsModulesSection
- ⏳ PlatformFeaturesSection
- ⏳ PricingSection
- ⏳ FAQSection

**Origem**: `conciarge-site-main/src/components/`

### 3. Migrar Conteúdo Direito

Abra o arquivo: `src/pages/Direito.tsx`

Componentes a migrar do site original:
- ✅ Estrutura básica criada
- ⏳ Hero
- ⏳ Convertional
- ⏳ Video
- ⏳ Depoiment
- ⏳ TechnologyIncorporte
- ⏳ Plans
- ⏳ FormContact

**Origem**: `converseia-site-master/src/components/`

### 4. Preencher Documentação

Abra o arquivo: `src/pages/Documentacao.tsx`

Adicionar conteúdo técnico em cada aba:
- ⏳ Documentação Hub Innovation
- ⏳ Documentação Conciarge
- ⏳ Documentação Direito

### 5. Ajustar Links e Contatos

Edite o arquivo: `src/lib/constants.ts`

Atualizar com informações reais:
```typescript
export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/...',  // <- Atualizar
  linkedin: 'https://linkedin.com/company/...', // <- Atualizar
  instagram: 'https://instagram.com/...', // <- Atualizar
  email: 'contato@converseia.com.br',
}
```

---

## 🎨 Como Adicionar Conteúdo de Outros Sites

### Copiar um componente:

1. Copie o componente do site original
2. Cole em `/src/components/` (ou em subpastas)
3. Ajuste os imports:
   ```tsx
   import { Component } from '@/components/ui/component'
   import { cn } from '@/lib/utils'
   ```
4. Adapte as classes de cor se necessário:
   - Se for Conciarge: use `conciarge-primary`, `conciarge-secondary`, etc.
   - Se for Direito: use `direito-primary`, `direito-secondary`, etc.
   - Se for Hub: use `hub-primary`, `hub-secondary`, etc.

### Exemplo de Adaptação de Cores:

**Antes** (site Conciarge original):
```tsx
className="bg-blue-600 text-white"
```

**Depois** (site unificado):
```tsx
className="bg-conciarge-primary text-white"
```

---

## 🔧 Estrutura de Arquivos

```
src/
├── components/
│   ├── Header.tsx              # Navegação global (detecta rota e muda cor)
│   ├── Footer.tsx              # Rodapé global (detecta rota e muda cor)
│   ├── hub/                    # Componentes do Hub
│   │   ├── HeroHub.tsx
│   │   ├── AgentsShowcase.tsx
│   │   ├── DivisionsSection.tsx
│   │   └── InnovationSection.tsx
│   └── ui/                     # Componentes shadcn/ui
│       ├── button.tsx
│       ├── input.tsx
│       ├── tabs.tsx
│       └── ...
├── pages/
│   ├── Home.tsx                # Página principal (Hub)
│   ├── AgentesIA.tsx
│   ├── Conciarge.tsx           # <- ADICIONAR CONTEÚDO AQUI
│   ├── Direito.tsx             # <- ADICIONAR CONTEÚDO AQUI
│   ├── Documentacao.tsx        # <- ADICIONAR DOCS AQUI
│   ├── Parcerias.tsx
│   ├── Contato.tsx
│   └── NotFound.tsx
├── lib/
│   ├── utils.ts                # Função cn() para classes
│   └── constants.ts            # Menu, links sociais, etc.
├── hooks/
│   └── use-toast.ts
├── App.tsx                     # Rotas
├── main.tsx                    # Entry point
└── index.css                   # Estilos globais + Tailwind
```

---

## ⚙️ Configurações Importantes

### Tailwind (tailwind.config.ts)

As cores personalizadas já estão configuradas:

```typescript
colors: {
  hub: { primary: '#8B5CF6', ... },
  conciarge: { primary: '#3B82F6', ... },
  direito: { primary: '#6B21A8', ... },
}
```

### Menu de Navegação (src/lib/constants.ts)

Edite aqui para adicionar/remover itens do menu:

```typescript
export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/agentes-ia', label: 'Agentes de IA' },
  // ...
]
```

---

## 🎯 Funcionalidades Implementadas

✅ **Roteamento**: React Router com todas as páginas  
✅ **Navegação Dinâmica**: Header muda de cor conforme a página  
✅ **Responsividade**: Mobile-first design  
✅ **Animações**: Framer Motion integrado  
✅ **Formulários**: React Hook Form + Zod (pronto para usar)  
✅ **Toast Notifications**: Sistema completo  
✅ **Componentes UI**: Button, Input, Select, Tabs, etc.  
✅ **Tipagem**: TypeScript em tudo  
✅ **Dark Mode Ready**: Variáveis CSS configuradas  

---

## 🐛 Troubleshooting

### Erro de dependências não encontradas

```powershell
rm -r node_modules
rm package-lock.json
npm install
```

### Porta já em uso

```powershell
# Altere a porta no vite.config.ts:
export default defineConfig({
  server: { port: 3000 }
})
```

### Erros de tipo (TypeScript)

Os erros de tipo que você vê antes de `npm install` são normais.  
Depois de instalar as dependências, eles desaparecerão.

---

## 📞 Suporte

Se tiver dúvidas durante a implementação:

1. Consulte o README.md principal
2. Verifique a documentação do Tailwind: https://tailwindcss.com
3. Shadcn/ui docs: https://ui.shadcn.com
4. React Router: https://reactrouter.com

---

**Desenvolvido com ❤️ para unificar o ecossistema ConverseIA**
