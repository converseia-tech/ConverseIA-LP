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
import Conciarge from "./pages/Conciarge";
import Direito from "./pages/Direito";
import Plataforma from "./pages/Plataforma";
import Contratacao from "./pages/Contratacao";
import Login from "./pages/Login";
import GerenciarFormularios from "./pages/GerenciarFormularios";
import AetherFlowDemo from "./pages/AetherFlowDemo";
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
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<ArticlePage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contratacao" element={<Contratacao />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gerenciar-formularios" element={<GerenciarFormularios />} />
            <Route path="/aether-flow-demo" element={<AetherFlowDemo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;