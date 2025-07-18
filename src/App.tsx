
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BPOFinanceiro from "./pages/BPOFinanceiro";
import Planos from "./pages/Planos";
import AvenidaEmpreendedora from "./pages/AvenidaEmpreendedora";
import AvenidaLegal from "./pages/AvenidaLegal";
import ParceirosContadores from "./pages/ParceirosContadores";
import BemBalcao from "./pages/BemBalcao";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./lib/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bpo-financeiro" element={<BPOFinanceiro />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/avenida-empreendedora" element={<AvenidaEmpreendedora />} />
          <Route path="/avenida-legal" element={<AvenidaLegal />} />
          <Route path="/parceiros-contadores" element={<ParceirosContadores />} />
          <Route path="/bem-balcao" element={<BemBalcao />} />
          <Route path="/marketplace" element={<Marketplace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
