
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Users, Target } from "lucide-react";

const Tucont = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero conhecer o modelo Tucont completo")}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-50">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start mb-8">
              <img 
                src="/lovable-uploads/4c92d87f-6732-4486-a6bc-79b4f3e47c57.png" 
                alt="Tucont Consulting - Mentorias e Estratégias" 
                className="h-16"
              />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-8">
                <Rocket className="w-4 h-4" />
                <span className="font-medium">Modelo Tucont - Mais Popular</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-slate-900 bg-clip-text text-transparent">
                Modelo Unificado Completo
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                A solução mais completa do mercado. Une automação total da avenida legal 
                com mentoria estratégica da avenida de negócios. Seu parceiro de crescimento definitivo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 text-lg"
                >
                  Começar agora - R$ 297/mês
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  Agendar consultoria
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tucont;
