# ConverseIA - Site Unificado

Site unificado da ConverseIA com três produtos principais: **Talka/ConverseIA**, **ConverseIA Direito** e **Conciarge**.

## 🎨 Características

- **React 18.3.1** + **TypeScript** + **Vite**
- **Tailwind CSS** para estilização
- **React Router** para navegação
- **Sistema de Cores Dinâmico** - muda automaticamente por página:
  - `/` (Home) → Roxo `#9742FF` (HSL: 260 100% 63%)
  - `/direito` → Azul Royal `#0055FB` (HSL: 220 100% 49%)
  - `/conciarge` → Teal `#097488` (HSL: 195 96% 30%)
- **Logos Dinâmicos** - muda automaticamente por rota
- **Totalmente Responsivo** - Mobile-first design

## 📁 Estrutura do Projeto

```
site_unificado_converseia/
├── src/
│   ├── components/       # Componentes React
│   ├── pages/           # Páginas da aplicação
│   ├── hooks/           # Hooks customizados
│   ├── lib/             # Utilitários
│   └── index.css        # Estilos globais
├── public/              # Assets estáticos
├── index.html           # HTML principal
├── vite.config.ts       # Configuração Vite
├── tailwind.config.ts   # Configuração Tailwind
├── vercel.json          # Configuração Vercel
└── package.json         # Dependências
```

## 🚀 Como Rodar Localmente

### Instalar dependências:
```bash
npm install
```

### Rodar servidor de desenvolvimento:
```bash
npm run dev
```
Acesse: `http://localhost:8080/`

### Build para produção:
```bash
npm run build
```

## 🌐 Deploy no Vercel

```bash
git add .
git commit -m "Deploy site unificado"
git push
```

O Vercel detecta automaticamente e faz o deploy.

## 📄 Páginas e Rotas

| Rota | Descrição | Cor Principal |
|------|-----------|---------------|
| `/` | Home principal | Roxo |
| `/sobre` | Sobre Agentes IA | Roxo |
| `/direito` | ConverseIA Direito | Azul Royal |
| `/conciarge` | Conciarge | Teal |
| `/insights` | Blog/Insights | Roxo |
| `/contato` | Contato | Roxo |

## 🎨 Sistema de Cores

O site muda automaticamente as cores baseado na rota usando CSS custom properties.

## 🔧 Tecnologias

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.10
- Tailwind CSS 3.4.11
- React Router DOM 6.26.2
- Shadcn UI
- Framer Motion

---

**Desenvolvido por**: ConverseIA / TALKA  
**Última atualização**: Outubro 2025

