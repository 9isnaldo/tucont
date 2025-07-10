
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BPOFinanceiro from "./pages/BPOFinanceiro";
import Planos from "./pages/Planos";
import AvenidaEmpreendedora from "./pages/AvenidaEmpreendedora";
import AvenidaLegal from "./pages/AvenidaLegal";
import ParceirosContadores from "./pages/ParceirosContadores";
import BemBalcao from "./pages/BemBalcao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bpo-financeiro" element={<BPOFinanceiro />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/avenida-empreendedora" element={<AvenidaEmpreendedora />} />
          <Route path="/avenida-legal" element={<AvenidaLegal />} />
          <Route path="/parceiros-contadores" element={<ParceirosContadores />} />
          <Route path="/bem-balcao" element={<BemBalcao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
