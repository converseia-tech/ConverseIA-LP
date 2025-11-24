import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Insights from "./pages/Insights";
import ArticlePage from "./pages/ArticlePage";
import Contact from "./pages/Contact";
import Conciarge from "./pages/Conciarge";
import Direito from "./pages/Direito";
import Plataforma from "./pages/Plataforma";
import LandingPages from "./pages/LandingPages";
import AgentesIA from "./pages/AgentesIA";
import ProjetosPersonalizados from "./pages/ProjetosPersonalizados";
import Contratacao from "./pages/Contratacao";
import AdminLogin from "./pages/AdminLogin";
import GerenciarFormularios from "./pages/GerenciarFormularios";
import DotShaderDemo from "./pages/DotShaderDemo";
import DotShaderShowcase from "./pages/DotShaderShowcase";
import ArtificialHeroDemo from "./pages/ArtificialHeroDemo";
import AetherFlowDemo from "./pages/AetherFlowDemo";
import MiniNavbarDemo from "./pages/MiniNavbarDemo";
import FooterDemo from "./pages/FooterDemo";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ChatWidget";
import { GlobalBackground } from "./components/GlobalBackground";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <GlobalBackground />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ChatWidget />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/conciarge" element={<Conciarge />} />
            <Route path="/direito" element={<Direito />} />
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/landing-pages" element={<LandingPages />} />
            <Route path="/agentes-ia" element={<AgentesIA />} />
            <Route path="/projetos-personalizados" element={<ProjetosPersonalizados />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<ArticlePage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/contratacao" element={<Contratacao />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/gerenciar-formularios" element={<GerenciarFormularios />} />
            <Route path="/dot-shader-demo" element={<DotShaderDemo />} />
            <Route path="/dot-shader-showcase" element={<DotShaderShowcase />} />
            <Route path="/artificial-hero-demo" element={<ArtificialHeroDemo />} />
            <Route path="/aether-flow-demo" element={<AetherFlowDemo />} />
            <Route path="/mini-navbar-demo" element={<MiniNavbarDemo />} />
            <Route path="/footer-demo" element={<FooterDemo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;