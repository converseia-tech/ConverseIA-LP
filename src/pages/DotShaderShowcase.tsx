import { DotScreenShader } from "@/components/ui/dot-screen-shader";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DotShaderShowcase = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Dot Screen Shader Background */}
      <DotScreenShader />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Dot Screen Shader
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Efeito de pontos animados com interação ao mouse
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <Button
              onClick={toggleTheme}
              size="lg"
              className="text-lg px-8 py-6"
            >
              Alternar para {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
            >
              <a href="/">Voltar para Home</a>
            </Button>
          </div>

          <div className="mt-12 p-6 rounded-2xl backdrop-blur-xl bg-background/30 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Como funciona?
            </h3>
            <ul className="text-left space-y-2 text-foreground/70">
              <li>✨ Grid de pontos animados com shader GLSL</li>
              <li>🖱️ Interação com movimento do mouse</li>
              <li>🌓 Adaptação automática ao tema (dark/light)</li>
              <li>⚡ Renderização otimizada com Three.js</li>
              <li>🎨 Cores personalizáveis por tema</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DotShaderShowcase;
