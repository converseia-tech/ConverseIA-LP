import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Conciarge from "./pages/Conciarge";
import Direito from "./pages/Direito";
import Plataforma from "./pages/Plataforma";
import Contratacao from "./pages/Contratacao";
import AdminLogin from "./pages/AdminLogin";
import GerenciarFormularios from "./pages/GerenciarFormularios";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatWidget />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conciarge" element={<Conciarge />} />
          <Route path="/direito" element={<Direito />} />
          <Route path="/plataforma" element={<Plataforma />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/sobre" element={<Navigate to="/#sobre" replace />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/contratacao" element={<Contratacao />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/gerenciar-formularios" element={<GerenciarFormularios />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;