# Dot Screen Shader - Implementação

## 🎨 O que foi implementado

O efeito de background com shader de pontos animados foi totalmente integrado ao site, com suporte completo para temas dark e light mode.

## 📦 Arquivos Criados

### 1. **ThemeContext** (`src/contexts/ThemeContext.tsx`)
- Context API para gerenciar temas sem dependência do Next.js
- Suporte a dark/light mode com persistência em localStorage
- Toggle de tema disponível globalmente

### 2. **DotScreenShader** (`src/components/ui/dot-screen-shader.tsx`)
- Componente principal com shader GLSL customizado
- Efeito de pontos animados com Three.js
- Interação com movimento do mouse usando `useTrailTexture`
- Cores adaptativas baseadas no tema (dark/light)
- Renderização otimizada com React Three Fiber

### 3. **GlobalBackground** (`src/components/GlobalBackground.tsx`)
- Wrapper simples para aplicar o background globalmente

### 4. **DotShaderShowcase** (`src/pages/DotShaderShowcase.tsx`)
- Página de demonstração do efeito
- Acesse em: `/dot-shader-showcase`

## 🔧 Modificações Realizadas

### App.tsx
- Substituído `next-themes` pelo nosso `ThemeContext` customizado
- Adicionada rota para a página de showcase

### HeroSection.tsx
- Substituído `ArtificialHero` pelo `DotScreenShader`
- Layout ajustado para melhor visualização do efeito

### Index.tsx
- Adicionado `GlobalBackground` para aplicar o shader em toda a página
- Container com z-index adequado para sobrepor o background

### theme-toggle.tsx
- Adaptado para usar nosso `ThemeContext` ao invés de `next-themes`

## 🎯 Características do Shader

### Visual
- Grid de pontos animados
- Máscara circular gradual
- Animação pulsante dos pontos
- Trail interativo ao mover o mouse

### Performance
- Renderização em GPU com shaders GLSL
- Otimizado para 60fps
- Configurações de qualidade ajustadas para performance

### Temas
**Dark Mode:**
- Cor dos pontos: Branco (#FFFFFF)
- Cor de fundo: Escuro (#121212)
- Opacidade: 0.025

**Light Mode:**
- Cor dos pontos: Cinza claro (#e1e1e1)
- Cor de fundo: Claro (#F4F5F5)
- Opacidade: 0.15

## 🚀 Como Usar

### 1. Background Global
```tsx
import { GlobalBackground } from "@/components/GlobalBackground";

const Page = () => (
  <div className="relative min-h-screen">
    <GlobalBackground />
    <div className="relative z-10">
      {/* Seu conteúdo aqui */}
    </div>
  </div>
);
```

### 2. Background em Seção Específica
```tsx
import { DotScreenShader } from "@/components/ui/dot-screen-shader";

const Section = () => (
  <div className="relative h-screen">
    <DotScreenShader />
    <div className="relative z-10">
      {/* Seu conteúdo aqui */}
    </div>
  </div>
);
```

### 3. Toggle de Tema
O botão de alternância já está integrado na navegação. Para usar programaticamente:

```tsx
import { useTheme } from "@/contexts/ThemeContext";

const Component = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Alternar para {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
};
```

## 🔍 Páginas de Demonstração

- **Homepage**: `/` - Hero com DotScreenShader
- **Showcase**: `/dot-shader-showcase` - Página dedicada ao efeito com instruções

## ⚙️ Configuração Técnica

### Dependências Instaladas
```json
{
  "@react-three/fiber": "^latest",
  "@react-three/drei": "^latest",
  "three": "^latest"
}
```

### Shader Parameters
- `gridSize`: 100 (densidade dos pontos)
- `rotation`: 0 (rotação do grid)
- `mouseTrail`: Texture para trail do mouse
- `time`: Tempo decorrido para animações

### Customização de Cores
Edite em `src/components/ui/dot-screen-shader.tsx`:

```tsx
const getThemeColors = () => {
  switch (theme) {
    case 'dark':
      return {
        dotColor: '#FFFFFF',    // Cor dos pontos
        bgColor: '#121212',     // Cor de fundo
        dotOpacity: 0.025       // Opacidade
      }
    // ...
  }
}
```

## 🎨 Integração com Design System

O shader respeita automaticamente:
- Variáveis CSS do Tailwind
- Sistema de cores do tema
- Transições suaves entre temas
- Responsividade total

## 📱 Responsividade

O efeito funciona perfeitamente em:
- ✅ Desktop (otimizado)
- ✅ Tablet
- ✅ Mobile (com performance ajustada)

## 🐛 Troubleshooting

### Performance baixa?
- Reduza `gridSize` de 100 para 50
- Ajuste `dotOpacity` para valores menores

### Efeito não visível?
- Verifique se o container tem `position: relative`
- Certifique-se de que o conteúdo tem `z-index` maior que o background

### Mouse trail não funciona?
- Verifique se o canvas está recebendo eventos de pointer
- Confirme que não há elementos bloqueando com `pointer-events`

## 🎉 Próximos Passos

Para estender o efeito:
1. Ajuste parâmetros do shader no arquivo
2. Modifique cores por tema
3. Adicione variações para diferentes páginas
4. Crie efeitos personalizados baseados no código

---

**Desenvolvido com ❤️ usando React, Three.js e GLSL**
