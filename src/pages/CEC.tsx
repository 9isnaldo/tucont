
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle, Award, Zap } from "lucide-react";

const CEC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero conhecer o programa CEC - Cada Etapa Conta")}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-50">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-8">
              <Target className="w-4 h-4" />
              <span className="font-medium">Programa CEC</span>
            </div>
            
            {/* Logo BEM */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/1b9f99f8-e6ea-4f81-a968-77762e3ad6d0.png" 
                alt="BEM - Balcão do Empresário" 
                className="h-20 mx-auto"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-slate-900 bg-clip-text text-transparent">
              Cada Etapa Conta - CEC
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Implementação total via IA. Metodologia exclusiva que garante que cada passo 
              da sua jornada empresarial seja estratégico e bem executado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 text-lg"
              >
                Começar minha jornada
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg">
                Ver metodologia
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CEC;
