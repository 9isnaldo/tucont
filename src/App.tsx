
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PoderContabil from "./pages/PoderContabil";
import Solucoes from "./pages/Solucoes";
import BPOFinanceiro from "./pages/BPOFinanceiro";
import Planos from "./pages/Planos";
import AvenidaEmpreendedora from "./pages/AvenidaEmpreendedora";
import AvenidaLegal from "./pages/AvenidaLegal";
import ParceirosContadores from "./pages/ParceirosContadores";
import Produtos from "./pages/Produtos";
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
          <Route path="/poder-contabil" element={<PoderContabil />} />
          <Route path="/bpo-financeiro" element={<BPOFinanceiro />} />
          <Route path="/blog" element={<PoderContabil />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
