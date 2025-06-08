
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SaaS from "./pages/SaaS";
import Tucont from "./pages/Tucont";
import CEC from "./pages/CEC";
import PoderContabil from "./pages/PoderContabil";
import Solucoes from "./pages/Solucoes";
import BPOFinanceiro from "./pages/BPOFinanceiro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/tucont" element={<Tucont />} />
          <Route path="/cec" element={<CEC />} />
          <Route path="/poder-contabil" element={<PoderContabil />} />
          {/* Páginas para Empresas */}
          <Route path="/plataforma-notas" element={<SaaS />} />
          <Route path="/contabilidade-online" element={<SaaS />} />
          <Route path="/jornada-negocios" element={<Tucont />} />
          <Route path="/bpo-financeiro" element={<BPOFinanceiro />} />
          {/* Páginas para Partners */}
          <Route path="/plataforma-integrativa" element={<SaaS />} />
          <Route path="/cada-etapa-conta" element={<CEC />} />
          <Route path="/marketplace" element={<CEC />} />
          <Route path="/blog" element={<SaaS />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
