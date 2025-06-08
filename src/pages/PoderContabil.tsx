
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Users, Award, Star } from "lucide-react";

const PoderContabil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent("Quero fazer parte do Poder Contábil")}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Header />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <img 
                src="/lovable-uploads/c21c9d3f-66aa-498b-992c-6021e181d483.png" 
                alt="Poder Contábil" 
                className="h-48 md:h-64 lg:h-80"
              />
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-red-100 text-slate-700 px-4 py-2 rounded-full mb-8">
                <Crown className="w-4 h-4 text-blue-600" />
                <span className="font-medium">Comunidade Exclusiva</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-red-600 to-slate-900 bg-clip-text text-transparent">
                Poder Contábil
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                A comunidade mais exclusiva de contadores e empresários do Brasil. 
                Networking, conhecimento e oportunidades de alto nível.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 px-8 py-4 text-lg text-white"
                >
                  Solicitar acesso VIP
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg border-blue-300 text-blue-600 hover:bg-blue-50">
                  Conhecer a comunidade
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

export default PoderContabil;
