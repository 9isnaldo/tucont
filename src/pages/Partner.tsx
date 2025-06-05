
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Zap } from "lucide-react";

const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero ser parceiro Tucont")}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-slate-50">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start mb-8">
              <img 
                src="/lovable-uploads/ff29e4d8-35f0-495f-b082-579c2286a183.png" 
                alt="Tucont Partner - Desenvolvimento Integrativo" 
                className="h-16"
              />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8">
                <Users className="w-4 h-4" />
                <span className="font-medium">Programa Partner</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-slate-900 bg-clip-text text-transparent">
                Agente Integrativo
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Torne-se um parceiro oficial Tucont. Nossa tecnologia, metodologia e marca 
                para transformar a contabilidade do seu mercado local.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-8 py-4 text-lg"
                >
                  Quero ser parceiro
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg">
                  Saiba mais
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

export default Partner;
